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
            :to="{
              name: 'Project',
              params: { projectId: project.id, project: project },
            }"
          >
            <v-card elevation="2" class="projectCard">
              <v-card-title>
                {{ project.name }}
              </v-card-title>
              <v-card-text>
                <div class="start">Start : {{ project.start_date }}</div>
                <div class="end" v-if="project.end_date">
                  End : {{ project.end_date }}
                </div>
                <div clas s="state">
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
      projects: null,
    };
  },

  mounted() {
    axios.get(`http://${serverurl}:${port}/project`, {}).then((res) => {
      this.projects = res.data.projectList;
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
