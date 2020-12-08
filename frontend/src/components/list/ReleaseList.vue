<template>
  <div class="releaseList__container">
    <div class="releaseList__header">
      <h1>
        Release
        <v-btn
          class="success"
          fab
          @click="$router.push({ name: 'CreateRelease' })"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </h1>
    </div>

    <div class="release__info" v-for="item in releases" :key="item._id">
      <h1
        @click="
          $router.push({
            name: 'ModifyRelease',
            params: { isEdit: true, release: item },
          })
        "
      >
        Hello I'm a release
      </h1>
    </div>
  </div>
</template>

<script>
import { serverurl, port } from "../../config/backend.config";
import axios from "axios";
export default {
  props: {
    idProject: String,
  },
  data() {
    return {
      releases: [],
    };
  },
  mounted() {
    axios
      .get(
        `http://${serverurl}:${port}/project/${this.idProject}/release/display/${this.idProject}`
      )
      .then((res) => {
        const releases = res.data;
        if (releases) {
          this.releases = releases;
        }
      });
  },
};
</script>

<style></style>
