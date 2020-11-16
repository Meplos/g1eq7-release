<template>
  <div class="usForm">
    <h1 v-if="isEdit">Edit</h1>
    <h1 v-else>Create US</h1>
    <v-form ref="form" v-model="valid" lazy-validation justify="center">
      <v-row>
        <v-col cols="12" sm="8">
          <v-textarea
            label="Description"
            filled
            v-model="description"
            :rules="[usValidator]"
            placeholder="As a devellopeur I wan't to code so i'm productive "
            required
            auto-grow
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8">
          <v-select
            :items="stateList"
            label="State"
            filled
            v-model="state"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8">
          <v-select
            :items="numberList"
            label="Importance"
            v-model="importance"
            filled
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8">
          <v-select
            :items="numberList"
            label="Difficulty"
            v-model="difficulty"
            filled
          />
        </v-col>
      </v-row>
      <v-row>
        <v-btn
          color="success"
          class="mr-6"
          v-if="isEdit"
          @click="modify"
          :disabled="!valid"
        >
          Save
        </v-btn>

        <v-btn
          color="success"
          class="mr-6"
          v-else
          @click="create"
          :disabled="!valid"
        >
          Add
        </v-btn>
        <v-btn color="error" @click="cancel" outlined>Cancel</v-btn>
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
    us: Object,
  },
  data() {
    return {
      description: this.us ? this.us.description : "",
      type: this.us ? this.us.type : "NewFeature",
      state: this.us ? this.us.state : "OPEN",
      importance: this.us ? this.us.importance : 1,
      difficulty: this.us ? this.us.difficulty : 1,
      projectId: this.us ? this.us.projectId : this.$route.params.idProject,
      id: this.us ? this.us.id : null,

      stateList: ["OPEN", "PLANNIFIED", "CLOSED"],
      numberList: [1, 2, 3, 4, 5],
      usRegExHead: new RegExp("^As a"),
      usRegExMid: new RegExp("I wan't"),
      usRegExpTail: new RegExp("(so)?"),

      usValidator: (v) =>
        this.isUserStory(v) || "US must be: As a ... I wan't to ... so? ...",
      valid: false,
    };
  },

  methods: {
    isUserStory(us) {
      return (
        this.usRegExHead.test(us) &&
        this.usRegExMid.test(us) &&
        this.usRegExpTail.test(us)
      );
    },
    create() {
      if (this.description.trim().length === 0) {
        alert("You can't create US with no description");
        return;
      }

      console.log("Create ");
      console.log(this.createPostData());
      axios
        .post(
          `http://${serverurl}:${port}/project/${this.projectId}/us/create/`,
          this.createPostData()
        )
        .then(this.$router.back());
    },
    modify() {
      console.log("Modify...");
      axios
        .post(
          `http://${serverurl}:${port}/project/${this.projectId}/us/${this.id}/modify/`,
          this.createPostData()
        )
        .then(this.$router.back());
    },
    cancel() {
      console.log("Cancel");
      this.$router.go(-1);
    },

    createPostData() {
      return {
        id: this.id,
        description: this.description,
        priority: this.importance,
        state: this.state,
        difficulty: this.difficulty,
        projectId: this.projectId,
        sprintId: null,
      };
    },
  },
  mounted() {},
};
</script>

<style></style>
