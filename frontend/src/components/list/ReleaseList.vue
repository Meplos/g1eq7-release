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
      <Release
        @click="
          $router.push({
            name: 'ModifyRelease',
            params: { isEdit: true, release: item },
          })
        "
        :release="item"
        :usList="getUsOfRelease(item)"
      />
    </div>
  </div>
</template>

<script>
import Release from "../Release.vue";
import { serverurl, port } from "../../config/backend.config";
import axios from "axios";
export default {
  props: {
    idProject: String,
  },
  components: {
    Release,
  },
  data() {
    return {
      releases: [],
      allUs: [],
    };
  },
  methods: {
    getRelease() {
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
    getUsOfRelease(release) {
      return this.allUs.filter((curr) => release.usList.includes(curr._id));
    },
  },
  mounted() {
    this.getRelease();
    this.getAllUs();
  },
};
</script>

<style></style>
