<template>
  <div class="taskList__container">
    <h1>
      Tasks <v-btn fab class="success"> <v-icon> mdi-plus</v-icon></v-btn>
    </h1>

    <v-row v-if="tasks.length === 0">
      <v-spacer></v-spacer>
      <v-col cols="8" sm="4" class="align-center">
        <v-alert class="red lighten-2">
          No Task?
          <router-link :to="{ name: '#' }">
            Create one here
          </router-link>
        </v-alert>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <v-simple-table class="mt-10 mr-10" v-else>
      <template v-slot:default>
        <thead>
          <th class="text-center" id="id">
            Id
          </th>
          <th class="text-center" id="name">
            Name
          </th>
          <th class="text-center" id="description">
            Description
          </th>
          <th class="text-center" id="US">
            US
          </th>
          <th class="text-center" id="dependencies">
            Dependencies
          </th>
          <th class="text-center" id="time">
            Time
          </th>
          <th class="text-center" id="devs">
            Devs
          </th>
          <th class="text-center" id="doing">
            State
          </th>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task.id">
            <td>{{ task.id }}</td>
            <td>{{ task.name }}</td>
            <td>{{ task.description }}</td>
            <td>{{ task.us }}</td>
            <td>
              <div v-if="task.dependecies.length === 0">\</div>
              <div
                v-for="dependency in task.dependecies"
                :key="dependency.index"
              >
                {{ dependency }}
              </div>
            </td>
            <td>{{ task.time }}</td>
            <td>
              <div v-for="dev in task.devs" :key="dev">{{ dev }} <br /></div>
            </td>
            <td>{{ task.state }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  props: {
    idProject: Number,
  },
  data() {
    return {
      tasks: [],
    };
  },
  mounted() {
    //TODO: Réccuperer les taches depuis le backend
  },
};
</script>

<style>
a {
  font-weight: 0;
}
</style>
