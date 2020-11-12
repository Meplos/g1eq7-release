<template>
  <div class="usForm">
    <h1 v-if="isEdit">Edit</h1>
    <h1 v-else>Create US</h1>
    <p>
      {{ description }}
    </p>
    <v-form>
      <v-row>
        <v-col cols="12" sm="8">
          <v-textarea
            label="Description"
            filled
            v-model="description"
            auto-grow
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8">
          <v-select
            :items="typeList"
            label="Type"
            filled
            v-model="type"
          ></v-select>
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
        <v-btn color="success" class="mr-6" v-if="isEdit" @click="modify"
          >Save</v-btn
        >
        <v-btn color="success" class="mr-6" v-else @click="create">Add</v-btn>
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
      projectId: this.us ? this.us.projectId : this.$route.params.projectId,
      id: this.us ? this.us.id : null,

      stateList: ["OPEN", "PLANNIFIED", "CLOSED"],
      typeList: ["NewFeature", "BugFix", "Test"],
      numberList: [1, 2, 3, 4, 5],
    };
  },

  methods: {
    create() {
      console.log("Create ");
      axios
        .post(
          `http://${serverurl}:${port}/project/${this.projectId}/us/create/`,
          this.createPostData(
            this.id,
            this.description,
            this.importance,
            this.state,
            this.difficulty,
            this.projectId
          )
        )
        .then(this.$router.push({ name: "USList" }));
    },
    modify() {
      console.log("Modify...");
      axios
        .post(
          `http://${serverurl}:${port}/project/${this.projectId}/us/modify/`,
          this.createPostData(
            this.id,
            this.description,
            this.importance,
            this.state,
            this.difficulty,
            this.projectId
          )
        )
        .then(this.$router.push({ name: "USList" }));
    },
    cancel() {
      console.log("Cancel");
      this.$router.push({ name: "USList" });
    },

    createPostData() {
      return {
        id: this.id,
        description: this.description,
        importance: this.importance,
        state: this.state,
        difficulty: this.difficulty,
        projectId: this.projectId,
      };
    },
  },
};
</script>

<style></style>
