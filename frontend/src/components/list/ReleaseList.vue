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
    <v-row v-if="$store.state.releaseOfCurrentProject.length === 0">
      <v-spacer></v-spacer>
      <v-col cols="8" sm="4" class="align-center">
        <v-alert class="red lighten-2">
          No Release?
          <router-link :to="{ name: 'CreateRelease' }">
            Create one here
          </router-link>
        </v-alert>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <v-row
      class="release__info"
      v-for="release in $store.state.releaseOfCurrentProject"
      :key="release._id"
    >
      <v-col col="4">
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
      </v-col>
    </v-row>
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
