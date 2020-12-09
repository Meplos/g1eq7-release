<template>
  <div class="taskForm">
    <h1 v-if="isEdit">Edit</h1>
    <h1 v-else>Create Task</h1>
    <v-form ref="form" v-model="valid" lazy-validation justify="center">
      <v-row>
        <v-col cols="4">
          <v-text-field
            v-model="name"
            filled
            label="Name*"
            id="name"
            placeholder="Name"
            :rules="nameValidator"
            required
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="8">
          <v-textarea
            v-model="description"
            label="Description"
            id="description"
            filled
            required
            auto-grow
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-text-field
            label="Developper"
            id="dev"
            v-model="dev"
            filled
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4">
          <v-select
            filled
            id="dependencies"
            label="Dependencies"
            :items="$store.state.taskOfCurrentProject"
            :item-value="'_id'"
            :item-text="'name'"
            max-height="auto"
            chips
            multiple
            v-model="dependencies"
          />
        </v-col>
        <v-col cols="4">
          <v-select
            id="us"
            required
            filled
            label="User Story*"
            :items="$store.state.usOfCurrentProject"
            :item-value="'_id'"
            :item-text="'description'"
            max-height="auto"
            chips
            v-model="idUS"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-icon @click="timeMinus()">mdi-minus</v-icon>
        </v-col>
        <v-col cols="2">
          <v-text-field
            readonly="readonly"
            label="Time (hm)"
            v-model="time"
            filled
          ></v-text-field>
        </v-col>
        <v-col cols="1">
          <v-icon @click="timePlus()">mdi-plus</v-icon>
        </v-col>

        <v-col cols="3">
          <v-select :items="stateList" v-model="state" id="state" filled />
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
            >Create Task</v-btn
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
    task: Object,
  },
  data() {
    return {
      id: this.task ? this.task._id : null,
      name: this.task ? this.task.name : "",
      description: this.task ? this.task.description : "",
      dependencies: this.task ? this.task.dependencies : [],
      dev: this.task ? this.task.dev : "",
      time: this.task ? this.task.time : 0,
      state: this.task ? this.task.state : "TODO",
      idProject: this.task ? this.task.idProject : this.$route.params.idProject,
      idUS: this.task ? this.task.idUs : null,
      dateEnd: this.task ? this.task.dateEnd : null,

      usList: [],
      stateList: ["TODO", "DOING", "DONE"],
      taskList: [],

      valid: false,
      nameValidator: [
        (v) => !!v || "Name is required",
        (v) => v.trim().length > 0 || "Name  must be less than 10 characters",
      ],
    };
  },
  methods: {
    timePlus() {
      this.time++;
    },
    timeMinus() {
      if (this.time > 0) this.time--;
    },
    getTaskList() {
      this.$store.commit("GET_TASK_OF_PROJECT", this.idProject);
    },

    getUsList() {
      this.$store.commit("GET_US_OF_PROJECT", this.idProject);
    },
    create() {
      if (this.name.trim().length === 0 || !this.idUS) {
        alert("Form is incomplete");
      }
      axios
        .post(
          `http://${serverurl}:${port}/project/${this.idProject}/task/create/`,
          this.createPostData()
        )
        .then(() => {
          this.$store.commit("GET_TASK_OF_PROJECT", this.idProject);
          this.$router.back();
        });
    },
    modify() {
      axios
        .post(
          `http://${serverurl}:${port}/project/${this.idProject}/task/${this.id}/modify/`,
          this.createPostData()
        )
        .then(() => {
          this.$store.commit("GET_TASK_OF_PROJECT", this.idProject);
          this.$router.back();
        });
    },
    cancel() {
      this.$router.back();
    },
    createPostData() {
      return {
        _id: this.id,
        name: this.name,
        description: this.description,
        dependencies: this.dependencies,
        dev: this.devs,
        time: this.time,
        state: this.state,
        idProject: this.idProject,
        idUs: this.idUs,
        dateEnd: this.dateEnd,
      };
    },
  },
  mounted() {
    this.getTaskList();
    this.getUsList();
  },
};
</script>

<style></style>
