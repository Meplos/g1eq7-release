<template>
  <div class="projectVue">
    <div class="project__info">
      <h1 id="name">{{ name }}</h1>
      <div class="project__info">
        <v-row class="project__infoDate">
          <v-col cols="12" sm="6" id="start"> Start: {{ start }} </v-col>
          <v-col cols="12" sm="6" id="end" v-if="end"> End: {{ end }} </v-col>
        </v-row>
        <v-row v-if="git.trim().length > 0">
          <p id="git"><v-icon> mdi-github</v-icon> {{ git }}</p>
          <p></p
        ></v-row>
        <v-row class="project__infoDescription">
          <v-col
            cols="12"
            class="text-justify font-weight-bold"
            id="description"
          >
            {{ description }}
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
      </div>

      <template>
        <v-tabs v-model="tab">
          <v-tab v-for="item in items" :key="item.tab"> {{ item.tab }}</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in items" :key="item.tab">
            <component
              :is="item.content"
              v-bind="{ idProject: $route.params.idProject }"
            ></component>
          </v-tab-item>
        </v-tabs-items>
      </template>
      <router-view />
    </div>
    <div class="burndownchart-btn">
      <v-col cols="12" sm="12">
        <v-btn
          class="mr-6"
          @click="
            $router.push({
              name: 'Burndownchart',
              params: { idProject: project.id, project: project },
            })
          "
          >Générer Burndown Chart</v-btn
        >
      </v-col>
    </div>
  </div>
</template>

<script>
import USList from "./list/USList";
import SprintList from "./list/SprintList";
import TaskList from "./list/TaskList";
import Kanban from "./Kanban";

import { serverurl, port } from "../config/backend.config";
import axios from "axios";
export default {
  props: {
    project: Object,
    idProject: String,
  },
  components: {
    USList,
    SprintList,
    TaskList,
    Kanban,
  },

  data() {
    return {
      id: this.project ? this.project._id : this.idProject,
      name: this.project ? this.project.name : null,
      description: this.project ? this.project.description : "",
      git: this.project ? this.project.git_repo : "",
      start: this.project ? this.project.start_date : null,
      end: this.project ? this.project.end_date : null,
      state: this.project ? this.project.state : null,

      tab: null,
      items: [
        {
          tab: "User Story",
          content: "USList",
        },
        {
          tab: "Sprints",
          content: "SprintList",
        },
        {
          tab: "Tasks",
          content: "TaskList",
        },
        {
          tab: "Kanban",
          content: "Kanban",
        },
      ],
    };
  },
  mounted() {
    if (!this.project && this.$route.params.idProject) {
      console.log("No props in params");
      axios
        .get(
          `http://${serverurl}:${port}/project/${this.$route.params.idProject}`
        )
        .then((res) => {
          console.log(res.status);
          if (res.status === 200) {
            const p = res.data;
            this.name = p.name;
            this.description = p.description;
            this.git = p.git_repo;
            this.start = p.start_date;
            this.end = p.end_date;
            this.state = p.state;
          }
        })
        .catch(() => this.$router.push({ name: "404" }));
    }
  },
};
</script>

<style></style>
