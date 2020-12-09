<template>
  <div class="usList__container">
    <h1>
      User Stories
      <v-btn
        class="mx-2 success"
        fab
        @click="$router.push({ name: 'CreateUS' })"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </h1>

    <v-row v-if="$store.state.usOfCurrentProject.length === 0">
      <v-spacer></v-spacer>
      <v-col cols="8" sm="4" class="align-center">
        <v-alert class="red lighten-2">
          No User Story?
          <router-link :to="{ name: 'CreateUS' }">
            Create one here
          </router-link>
        </v-alert>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <v-simple-table class="mt-10 mr-10" v-else>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left" id="id">
              Id
            </th>
            <th class="text-center" id="description">
              Description
            </th>
            <th class="text-left" id="importance">
              Importance
            </th>
            <th class="text-left" id="difficulty">
              Difficulty
            </th>
            <th class="text-left" id="sprint">
              Sprint
            </th>
            <th class="text-left" id="state">
              State
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(us, index) in $store.state.usOfCurrentProject"
            :key="us._id"
            @click="
              $router.push({
                name: 'ModifyUS',
                params: {
                  idProject: $route.params.idProject,
                  idUS: us.id,
                  us: us,
                  isEdit: true,
                },
              })
            "
          >
            <td>{{ index }}</td>
            <td>{{ us.description.substring(0, 250) }}</td>
            <td>{{ us.priority }}</td>
            <td>{{ us.difficulty }}</td>
            <td>{{ us.sprintId }}</td>
            <td>{{ us.state }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
// import { serverurl, port } from "../../config/backend.config";
// import axios from "axios";

export default {
  props: {
    idProject: String,
  },
  data() {
    return {
      usList: [],
    };
  },
  mounted() {
    /* axios
      .get(
        `http://${serverurl}:${port}/project/${this.idProject}/us/display/${this.idProject}`
      )
      .then((res) => {
        const us = res.data;
        if (us) {
          this.usList = us;
        }
      });*/
    this.$store.commit("GET_US_OF_PROJECT", this.idProject);
  },
};
</script>

<style>
a {
  font-weight: bold;
}
</style>
