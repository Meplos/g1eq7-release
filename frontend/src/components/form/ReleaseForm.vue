<template>
  <div class="releaseForm">
    <h1 v-if="isEdit">Modify Release</h1>
    <h1 v-else>Create Release</h1>

    <v-form v-model="valid" lazy-validation ref="form">
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
            placeholder="Select file... (zip, 7z, rar, tar.gz)"
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
        <v-col cols="8">
          <v-select
            filled
            id="allUS"
            label="Add user Stories"
            :items="$store.state.usOfCurrentProject"
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
      fileValidator: (v) =>
        (v && this.isCompress(v)) ||
        "file is required and need to be zip, rar, tar.gz, 7z format",
    };
  },
  methods: {
    create() {
      if (!this.$refs.form.validate()) return;
      axios
        .post(
          `http://${serverurl}:${port}/project/${this.idProject}/release/create`,
          this.createPostBody()
        )
        .then(() => {
          this.$store.commit("GET_RELEASE_OF_PROJECT", this.idProject);
          this.$router.back();
        })
        .catch((err) => console.log(err));
    },
    modify() {
      if (!this.$refs.form.validate()) return;
      axios
        .post(
          `http://${serverurl}:${port}/project/${this.idProject}/release/${this.id}/modify/`,
          this.createPostBody()
        )
        .then(() => {
          this.$store.commit("GET_RELEASE_OF_PROJECT", this.idProject);

          this.$router.back();
        });
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
      this.$store.commit("GET_US_OF_PROJECT", this.idProject);
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
      console.log(file);
      const mimetype = [
        "application/x-rar-compressed",
        "application/x-zip-compressed",
        "application/x-7z-compressed",
        "application/x-gzip-compressed",
        "application/zip",
      ];
      return mimetype.includes(file.type);
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
