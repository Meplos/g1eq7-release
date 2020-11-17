<template>
  <div class="usList__container">
    <h1>
      User Stories
      <v-btn
        class="mx-2 success"
        fab
        @click="$router.push({ name: 'CreateUS', params: { isEdit: false } })"
      >
        <v-icon> mdi-plus</v-icon>
      </v-btn>
    </h1>

    <v-simple-table class="mt-10 mr-10">
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
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="us in usList"
            :key="us.id"
            @click="
              $router.push({
                name: 'ModifyUS',
                params: {
                  projectId: $route.params.projectId,
                  idUS: us.id,
                  us: us,
                  isEdit: true,
                },
              })
            "
          >
            <td>{{ us.id }}</td>
            <td>{{ us.description.substring(0, 250) }}</td>
            <td>{{ us.priority }}</td>
            <td>{{ us.difficulty }}</td>
            <td>{{ us.sprintId }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
import { serverurl, port } from "../../config/backend.config";
import axios from "axios";

export default {
  props: {
    idProject: Number,
  },
  data() {
    return {
      usList: [],
    };
  },
  mounted() {
    axios
      .get(
        `http://${serverurl}:${port}/project/${this.idProject}/us/display/${this.idProject}`
      )
      .then((res) => {
        const us = res.data;
        if (us) {
          this.usList = us;
        }
      });
  },
};
</script>

<style></style>
