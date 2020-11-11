<template>
  <div class="projectList__container">
    <h1>Projects</h1>
    <router-link :to="{ name: 'CreateProject' }">
      <v-btn>New project</v-btn>
    </router-link>
    <div
      class="projectList__item"
      v-for="project in projects"
      :key="project.id"
    >
      <v-row>
        <v-col cols="12" sm="4">
          <router-link
            :to="{ name: 'Project', params: { projectId: project.id } }"
          >
            <v-card elevation="2" class="projectCard">
              <v-card-title>
                {{ project.name }}
              </v-card-title>
              <v-card-text>
                <div class="start">
                  Start : {{ project.start | dateFormat("DD/MM/YYYY") }}
                </div>
                <div class="end">
                  End : {{ project.end | dateFormat("DD/MM/YYYY") }}
                </div>
                <div class="state">
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
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          name: "Project #1",
          state: "OPEN",
          start: new Date(),
          end: new Date(new Date().getDate() + 1),
        },
        {
          id: 2,
          name: "Project #3",
          state: "OPEN",
          start: new Date(),
          end: new Date(new Date().getDate() + 1),
        },
        {
          id: 4,
          name: "Project #4",
          state: "OPEN",
          start: new Date(),
          end: new Date(new Date().getDate() + 1),
        },
        {
          id: 5,
          name: "Project #5",
          state: "OPEN",
          start: new Date(),
          end: new Date(new Date().getDate() + 1),
        },
        {
          id: 6,
          name: "Project #1",
          state: "OPEN",
          start: new Date(),
          end: new Date(new Date().getDate() + 1),
        },
      ],
    };
  },

  mouted() {
    //axios.get("backAddr/projects").then((res) => (this.projects = res));
  },
};
</script>

<style>
a {
  text-decoration: none !important;
}
</style>
