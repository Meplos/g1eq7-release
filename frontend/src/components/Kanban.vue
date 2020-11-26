<template>
  <div class="kanban__container">
    <h1>Kanban</h1>
    <div class="dark">
      <v-row class="mr-16 ml-16 justify-space-between">
        <v-col cols="12" sm="4" v-for="state in stateList" :key="state">
          <h2>{{ state }}</h2>
          <v-sheet
            rounded="lg"
            min-height="70vh"
            class="grey darken-3 drop-zone"
            @drop="onDrop($event, state)"
            @dragover.prevent
            @dragenter.prevent
          >
            <TaskCard
              v-for="task in getTaskByState(state)"
              :key="task._id"
              :task="task"
            />
          </v-sheet>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { serverurl, port } from "../config/backend.config";
import axios from "axios";
import TaskCard from "./cards/TaskCard";
export default {
  props: {
    idProject: String,
  },
  components: {
    TaskCard,
  },
  data() {
    return {
      tasks: [],
      stateList: ["TODO", "DOING", "DONE"],
    };
  },
  methods: {
    getTaskByState(state) {
      return this.tasks.filter((cur) => cur.state === state);
    },
    onDrop(evt, state) {
      const itemID = evt.dataTransfer.getData("taskID");

      const item = this.tasks.find((task) => task.id === eval(itemID));

      item.state = state;
    },
  },
  mounted() {
    axios
      .get(
        `http://${serverurl}:${port}/project/${this.idProject}/task/display/${this.idProject}`
      )
      .then((res) => {
        if (res.data) this.tasks = res.data;
      });
  },
};
</script>

<style>
.drop-zone {
  display: flex;
}
</style>
