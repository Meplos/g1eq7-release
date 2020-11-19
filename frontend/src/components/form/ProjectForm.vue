<template>
  <div class="projectForm">
    <v-row>
      <h1 v-if="isEdit">Edit</h1>
      <h1 v-else>New project</h1>
    </v-row>
    <v-form ref="form" v-model="valid" lazy-validation justify="center">
      <v-row>
        <v-col col="12" sm="8">
          <v-text-field
            v-model="name"
            :rules="titleValidator"
            :count="100"
            label="Title*"
            required
            filled
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8">
          <v-textarea
            v-model="description"
            filled
            label="Description"
            auto-grow
          />
        </v-col>
      </v-row>
      <!-- Start date picker-->
      <v-row>
        <v-col cols="12" sm="4">
          <v-menu
            ref="menu"
            v-model="menuStart"
            :close-on-content-click="false"
            :return-value.sync="start"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="start"
                label="Start date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                filled
              ></v-text-field>
            </template>
            <v-date-picker v-model="start" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menuStart = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(start)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12" sm="4">
          <!-- End date datepicker -->
          <v-menu
            ref="menu"
            v-model="menuEnd"
            :close-on-content-click="false"
            :return-value.sync="start"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="endEstimated"
                label="Estimated end date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                filled
              ></v-text-field>
            </template>
            <v-date-picker v-model="endEstimated" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menuEnd = false">
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.menu.save(endEstimated)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8">
          <v-text-field
            prepend-icon="mdi-github"
            v-model="git"
            label="Git repository"
            filled
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8">
          <v-select
            :items="stateItems"
            v-model="state"
            filled
            label="Filled style"
            dense
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8">
          <v-btn
            class="mr-6"
            v-if="isEdit"
            color="success"
            :disabled="!valid"
            @click="modify"
            >Save</v-btn
          >

          <v-btn
            class="mr-6"
            v-else
            color="success"
            :disabled="!valid"
            @click="create"
            >Create projet</v-btn
          >
          <v-btn color="error" @click="cancel" outlined>Cancel</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import { serverurl, port } from "../../config/backend.config";
import axios from "axios";
export default {
  props: {
    isEdit: Boolean,
    project: Object,
  },
  data() {
    return {
      id: this.project ? this.project.id : null,
      name: this.project ? this.project.name : "",
      description: this.project ? this.project.description : "",
      git: this.project ? this.project.git : "",
      start: this.project
        ? this.project.start_date
        : new Date().toISOString().substr(0, 10),
      endEstimated: this.project ? this.project.end_date : null,
      state: this.project ? this.project.state : "OPEN",

      stateItems: ["OPEN", "CLOSE"],

      menuEnd: false,
      menuStart: false,
      valid: false,
      titleValidator: [
        (v) => !!v || "Title is required",
        (v) =>
          (v && v.length <= 10) || "Title  must be less than 10 characters",
      ],
      descriptionValidator: [
        (v) =>
          (v && v.trim().length <= 0) || "Description can't just contain space",
      ],
    };
  },
  methods: {
    create() {
      if (this.name === "") {
        alert("you can't create empty project");
        return;
      }

      const body = this.createPostBody();
      axios
        .post(`http://${serverurl}:${port}/project/create`, body)
        .then(this.$router.push({ name: "Home" }));
      console.log(`create : ${body}`);
    },
    modify() {
      const body = this.createPostBody();
      axios
        .post(
          `http://${serverurl}:${port}/project/${this.$route.params.idProject}/modify`,
          body
        )
        .then(this.$router.push({ name: "Home" }));
      console.log(`modify : ${this.title}`);
    },
    cancel() {
      this.$router.back();
    },
    createPostBody() {
      const post = {
        id: this.id,
        name: this.name,
        description: this.description,
        start_date: this.start,
        end_date: this.end ? this.end : null,
        git_repo: this.git,
        state: this.state,
      };
      return post;
    },
  },
  mounted() {},
};
</script>

<style></style>
