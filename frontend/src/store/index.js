import Vue from "vue";
import Vuex from "vuex";
import { serverurl, port } from "../config/backend.config";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    projects: [],
    usOfCurrentProject: [],
    sprintOfCurrentProject: [],
    taskOfCurrentProject: [],
    releaseOfCurrentProject: [],
  },
  mutations: {
    GET_ALL_PROJECT(state) {
      axios.get(`http://${serverurl}:${port}/project`, {}).then((res) => {
        state.projects = res.data.projectList;
      });
    },
    GET_US_OF_PROJECT(state, idProject) {
      axios
        .get(
          `http://${serverurl}:${port}/project/${idProject}/us/display/${idProject}`
        )
        .then((res) => {
          const us = res.data;
          if (us) {
            state.usOfCurrentProject = us;
          }
        });
    },

    GET_SPRINT_OF_PROJECT(state, idProject) {
      axios
        .get(
          `http://${serverurl}:${port}/project/${idProject}/sprint/display/${idProject}`
        )
        .then((res) => {
          const sprint = res.data;
          if (sprint) {
            state.sprintOfCurrentProject = sprint;
          }
        });
    },
    GET_TASK_OF_PROJECT(state, idProject) {
      axios
        .get(
          `http://${serverurl}:${port}/project/${idProject}/task/display/${idProject}`
        )
        .then((res) => {
          if (res.data) state.taskOfCurrentProject = res.data;
        });
    },
    GET_RELEASE_OF_PROJECT(state, idProject) {
      axios
        .get(
          `http://${serverurl}:${port}/project/${idProject}/release/display/${idProject}`
        )
        .then((res) => {
          const releases = res.data;
          if (releases) {
            state.releaseOfCurrentProject = releases;
          }
        });
    },
  },
});

export default store;
