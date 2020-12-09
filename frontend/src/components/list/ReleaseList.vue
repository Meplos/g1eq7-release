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

    <div
      class="release__info"
      v-for="release in $store.state.releaseOfCurrentProject"
      :key="release._id"
    >
      <Release
        @click="
          $router.push({
            name: 'ModifyRelease',
            params: { isEdit: true, release: release },
          })
        "
        :release="release"
        :usList="getUsOfRelease(release)"
      />
    </div>
  </div>
</template>

<script>
import Release from "../Release.vue";
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
      this.$store.commit("GET_RELEASE_OF_PROJECT", this.idProject);
    },
    getAllUs() {
      this.$store.commit("GET_US_OF_PROJECT", this.idProject);
    },
    getUsOfRelease(release) {
      return this.$store.state.usOfCurrentProject.filter((curr) =>
        release.usList.includes(curr._id)
      );
    },
  },
  mounted() {
    this.getRelease();
    this.getAllUs();
  },
};
</script>

<style></style>
