<template>
  <div class="sprintForm__container">
    {{ idProject }}
    <h1 v-if="isEdit">Sprint #{{ id }}</h1>
    <h1 v-else>Create Sprint</h1>

    <v-form>
      <v-row>
        <v-col class="ma-2" cols="12" sm="4">
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
        <v-col class="ma-2" cols="12" sm="4">
          <!-- End date datepicker -->
          <v-menu
            ref="menu"
            v-model="menuEnd"
            :close-on-content-click="false"
            :return-value.sync="end"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="end"
                label="Estimated end date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                filled
              ></v-text-field>
            </template>
            <v-date-picker v-model="end" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menuEnd = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(end)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row v-if="isEdit">
        <v-col cols="12" sm="4" class="align-center">
          <v-select
            :items="stateItems"
            v-model="state"
            filled
            label="state"
            dense
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8">
          <v-btn class="mr-6" v-if="isEdit" color="success" @click="modify">
            Save
          </v-btn>

          <v-btn class="mr-6" v-else color="success" @click="create">
            Create Sprint
          </v-btn>
          <v-btn color="error" @click="cancel" outlined>Cancel</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";
import { serverurl, port } from "../../config/backend.config";
export default {
  props: {
    isEdit: Boolean,
    sprint: Object,
  },
  data() {
    return {
      start: this.sprint
        ? this.sprint.start_date
        : new Date().toISOString().substring(0, 10),
      end: this.sprint
        ? this.sprint.end_date
        : new Date().toISOString().substring(0, 10),
      state: this.sprint ? this.sprint.state : "COMMING",
      id: this.sprint ? this.sprint._id : null,
      idProject: this.sprint
        ? this.sprint.idProject
        : this.$route.params.idProject,

      menuStart: false,
      menuEnd: false,
      stateItems: ["COMMING", "CURRENT", "TERMINATED"],
    };
  },
  methods: {
    create() {
      console.log("Sprint Create");

      axios
        .post(
          `http://${serverurl}:${port}/project/${this.idProject}/sprint/create`,
          this.createPostBody()
        )
        .then(() => this.$router.back());
    },
    modify() {
      axios.post(
        `ĥttp://${serverurl}:${port}/project/${this.idProject}/sprint/${this.id}/modify`,
        this.createPostBody()
      );
    },
    cancel() {
      this.$router.back();
    },
    createPostBody() {
      return {
        _id: this.id,
        start_date: this.start,
        end_date: this.end,
        state: this.state,
        idProject: this.idProject,
      };
    },
  },
};
</script>

<style></style>
