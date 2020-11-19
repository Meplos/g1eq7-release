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
              :key="task.id"
              :task="task"
            />
          </v-sheet>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import TaskCard from "./cards/TaskCard";
export default {
  components: {
    TaskCard,
  },
  data() {
    return {
      tasks: [
        {
          id: 0,
          name: "Hello World",
          description: "Je suis une tâche",
          devs: ["Alexandre ERARD"],
          state: "TODO",
        },
        {
          id: 1,
          name: "Hello World 1",
          description: "Je suis une tâche",
          devs: ["Alexandre ERARD"],
          state: "TODO",
        },
      ],
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
};
</script>

<style>
.drop-zone {
  display: flex;
}
</style>
