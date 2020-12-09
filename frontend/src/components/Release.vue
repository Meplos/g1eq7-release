<template>
  <div class="release__container">
    <v-card class="mx-auto mb-6" max-width="800" elevation="16" shaped>
      <v-card-title>{{ release.name }}</v-card-title>
      <v-card-text>
        <v-row>
          <p>{{ release.description }}</p>
        </v-row>
        <v-row>
          <div class="fileInfo">
            <v-icon>mdi-archive</v-icon>
            <a :href="fileLink"> {{ release.filename }}</a>
          </div>
        </v-row>
        <v-simple-table class="ma-3">
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
              </tr>
            </thead>
            <tbody>
              <tr v-for="us in usList" :key="us._id">
                <td>{{ us._id }}</td>
                <td>{{ us.description.substring(0, 250) }}</td>
                <td>{{ us.priority }}</td>
                <td>{{ us.difficulty }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { serverurl, port } from "../config/backend.config";

export default {
  props: {
    release: Object,
    usList: Array,
  },
  computed: {
    fileLink() {
      return `http://${serverurl}:${port}/${this.release.filepath}`;
    },
  },
};
</script>

<style>
.fileInfo {
  margin-left: 10px;
  padding: 10px;
  border: solid rgba(255, 255, 255, 0.6);
  border-radius: 20px;
}
</style>
