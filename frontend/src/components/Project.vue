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
import USList from "./USList";
//import { serverurl, port } from "../config/backend.config";
//import axios from "axios";
export default {
  props: {
    project: Object,
    idProject: Number,
  },
  components: {
    USList,
  },

  data() {
    return {
      id: this.project.id,
      name: this.project.name,
      description: this.project.description,
      git: this.project.git_repo,
      start: this.project.start_date,
      end: this.project.end_date,
      state: this.project.state,

      tab: null,
      items: [
        {
          tab: "User Story",
          content: "USList",
        },
      ],
    };
  },
  mounted() {},
};
</script>

<style></style>
