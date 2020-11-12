<template>
  <div class="projectList__container">
    <h1>Projects</h1>
    <router-link :to="{ name: 'CreateProject' }">
      <v-btn color="success"><v-icon left>mdi-plus</v-icon> New project</v-btn>
    </router-link>
    <div
      class="projectList__item"
      v-for="project in projects"
      :key="project.id"
    >
      <v-row>
        <v-col cols="12" sm="4">
          <router-link
            :to="{ name: 'Project', params: { projectId: project.id } }"
          >
            <v-card elevation="2" class="projectCard">
              <v-card-title>
                {{ project.name }}
              </v-card-title>
              <v-card-text>
                <div class="start">
                  Start : {{ project.start | dateFormat("DD/MM/YYYY") }}
                </div>
                <div class="end">
                  End : {{ project.end | dateFormat("DD/MM/YYYY") }}
                </div>
                <div class="state">
                  {{ project.state }}
                </div>
              </v-card-text>
            </v-card>
          </router-link>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { serverurl, port } from "../config/backend.config";
import axios from "axios";
export default {
  data() {
    return {
      projects: [],
    };
  },

  mounted() {
    axios.get(`http://${serverurl}:${port}/project`, {}).then((res) => {
      this.projects = res;
      console.log(this.projects);
    });
  },
};
</script>

<style>
a {
  text-decoration: none !important;
}
</style>
