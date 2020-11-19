<template>
  <div class="projectVue">
    <h1>{{ name }}</h1>
    <div class="project__info">
      <v-row class="project__infoDate">
        <v-col cols="12" sm="6"> Start: {{ start }} </v-col>
        <v-col cols="12" sm="6" v-if="end"> End: {{ end }} </v-col>
      </v-row>
      <v-row class="project__infoDescription">
        <v-col cols="12" class="text-justify font-weight-bold">
          {{ description }}
        </v-col>
      </v-row>
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
    idProject: Number,
  },
  components: {
    USList,
    SprintList,
    TaskList,
    Kanban,
  },

  data() {
    return {
      id: this.project ? this.project.id : this.idProject,
      name: this.project ? this.project.name : null,
      description: this.project ? this.project.description : null,
      git: this.project ? this.project.git_repo : null,
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
    if (!this.project) {
      console.log("No props in params");
      axios
        .get(`http://${serverurl}:${port}/project/${this.idProject}`)
        .then((res) => {
          const p = res.data;
          this.name = p.name;
          this.description = p.description;
          this.git = p.git_repo;
          this.start = p.start_date;
          this.end = p.end_date;
          this.state = p.state;
        });
    }
  },
};
</script>

<style></style>
