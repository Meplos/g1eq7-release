<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>

    <v-main class="ml-10">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: "Conduite de Projet",
      drawer: null,
    };
  },
};
</script>

<style></style>
