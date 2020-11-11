<template>
  <div class="projectForm">
    <v-row>
      <h1 v-if="isEdit">{{ title }}</h1>
      <h1 v-else>New project</h1>
    </v-row>
    <v-form ref="form" v-model="valid" lazy-validation justify="center">
      <v-row>
        <v-col col="12" sm="8">
          <v-text-field
            v-model="title"
            :rules="titleValidator"
            :count="10"
            label="Title"
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
          <v-btn color="error" @click="cancel">Cancel</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
function createPostBody(title, description, start, end, git, state) {
  const post = {
    title: title,
    description: description,
    start: start,
    endEstimated: end ? end : "",
    git: git,
    state: state,
  };
  return post;
}

export default {
  props: {
    isEdit: Boolean,
    id: Number,
  },
  data() {
    return {
      title: "",
      titleValidator: [
        (v) => !!v || "Title is required",
        (v) =>
          (v && v.length <= 10) || "Title  must be less than 10 characters",
      ],
      description: "",
      descriptionValidator: [
        (v) =>
          (v && v.trim().length <= 0) || "Description can't just contain space",
      ],
      git: "",
      start: new Date().toISOString().substr(0, 10),
      endEstimated: null,
      state: "OPEN",
      valid: false,
      menuStart: false,
      menuEnd: false,
      stateItems: ["OPEN", "CLOSE"],
    };
  },
  methods: {
    create() {
      if (this.title === "") {
        alert("you can't create empty project");

        return;
      }

      const body = createPostBody(
        this.title,
        this.description,
        this.start,
        this.endEstimated,
        this.git,
        this.state
      );

      console.log(`create : ${body}`);
    },
    modify() {
      const body = createPostBody(
        this.title,
        this.description,
        this.start,
        this.endEstimated,
        this.git,
        this.state
      );
      body.id = "";
      console.log(`modify : ${this.title}`);
    },
    cancel() {
      console.log(`cancel...`);
    },
  },
};
</script>

<style></style>
