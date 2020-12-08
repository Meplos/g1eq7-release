<template>
  <div class="releaseForm">
    <h1>Release Form 🍄</h1>

    <v-form v-model="valid" lazy-validation>
      <v-row>
        <v-col cols="4">
          <v-text-field
            label="Name*"
            id="name"
            placeholder="v1.0.0"
            v-model="name"
            :rules="[nameValidator]"
            required
            filled
          ></v-text-field>
        </v-col>

        <v-col cols="4">
          <v-file-input
            truncate-length="15"
            v-model="file"
            label="File"
            placeholder="Select file..."
            id="file"
            prepend-icon="mdi-archive"
            filled
            required
            :rules="[fileValidator]"
          ></v-file-input>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="8">
          <v-textarea
            label="Description"
            id="description"
            v-model="description"
            filled
            auto-grow
          ></v-textarea>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4">
          <v-select
            filled
            id="allUS"
            label="Add user Stories"
            :items="allUs"
            :item-value="'_id'"
            :item-text="'description'"
            max-height="auto"
            v-model="releaseUsList"
            :rules="[usValidator]"
            multiple
            chips
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-btn
            :disabled="!valid"
            v-if="!isEdit"
            class="success"
            @click="create"
          >
            Create Release
          </v-btn>
          <v-btn
            :disabled="!valid"
            v-if="isEdit"
            class="success"
            @click="modify"
          >
            Save
          </v-btn>
        </v-col>
        <v-col cols="4">
          <v-btn class="error" @click="cancel">Cancel</v-btn>
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
    release: Object,
  },
  data() {
    return {
      id: this.release ? this.release._id : null,
      name: this.release ? this.release.name : "",
      description: this.release ? this.release.description : "",
      releaseUsList: this.release ? this.release.usList : [],
      file: null,
      idProject: this.release
        ? this.release.idProject
        : this.$route.params.idProject,

      allUs: [],
      valid: false,

      nameValidator: (v) =>
        /v[0-9]*(.[0-9]+)+/.test(v) || "Name must have format vXX.XX.XX",
      usValidator: (v) => v.length > 0 || "Us is required",
      fileRequired: (v) => (v && this.isCompress(v)) || "file is required",
    };
  },
  methods: {
    create() {
      axios
        .post(
          `http://${serverurl}:${port}/project/${this.idProject}/release/create`,
          this.createPostBody()
        )
        .then(this.$router.back())
        .catch((err) => console.log(err));
    },
    modify() {
      console.log(this.file);
      axios
        .post(
          `http://${serverurl}:${port}/project/${this.idProject}/release/${this.id}/modify/`,
          this.createPostBody()
        )
        .then(this.$router.back());
    },
    cancel() {
      this.$router.back();
    },
    createPostBody() {
      const formData = new FormData();
      formData.append("_id", this.id);
      formData.append("name", `${this.name}`);
      formData.append("description", `${this.description}`);
      formData.append("usList", JSON.stringify(this.releaseUsList));
      formData.append("idProject", `${this.idProject}`);
      formData.append("file", this.file);
      return formData;
    },
    getAllUs() {
      axios
        .get(
          `http://${serverurl}:${port}/project/${this.idProject}/us/display/${this.idProject}`
        )
        .then((res) => {
          const us = res.data;
          if (us) {
            this.allUs = us;
          }
        });
    },
    async loadFile() {
      let response = await fetch(
        `http://${serverurl}:${port}/${this.release.filepath}`
      );
      let data = response.blob();
      let file = new File([data], this.release.filename);
      this.file = file;
    },
    isCompress(file) {
      const mimetype = [
        "application/x-rar-compressed",
        "application/zip",
        "application/x-7z-compressed",
        "application/gzip",
      ];
      return mimetype.includes(file.mimetype);
    },
  },
  created() {
    this.getAllUs();
    if (this.release) {
      this.loadFile();
    }
  },
};
</script>

<style></style>
