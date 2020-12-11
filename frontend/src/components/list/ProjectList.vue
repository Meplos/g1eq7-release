<template>
  <div class="projectList__container">
    <h1>Projects</h1>
    <router-link :to="{ name: 'CreateProject' }">
      <v-btn color="success"><v-icon left>mdi-plus</v-icon> New project</v-btn>
    </router-link>

    <v-row v-if="$store.state.projects.length === 0">
      <v-spacer></v-spacer>
      <v-col cols="8" class="align-center justify-center">
        <v-alert class="red lighten-2">
          No Project?
          <router-link :to="{ name: 'CreateProject' }">
            Create one here
          </router-link>
        </v-alert>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row class="mt-10" v-else>
      <v-col
        cols="2"
        v-for="project in $store.state.projects"
        :key="project.id"
        class="justify-center"
      >
        <v-card
          elevation="22"
          class="projectCard mx-auto"
          id="projet"
          shaped
          max-width="350"
        >
          <v-card-title
            primary-title
            class="name justify-center"
            v-text="project.name"
          />
          <v-card-subtitle>
            <p v-if="project.end_date" class="text--primary" id="start_end">
              {{ project.start_date }} - {{ project.end_date }}
            </p>
            <p v-else>{{ project.start_date }}</p>
          </v-card-subtitle>
          <v-card-text>
            <div class="state text--primary">
              {{ project.state }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              class="edit"
              color="warning"
              text
              @click="
                $router.push({
                  name: 'ModifyProject',
                  params: {
                    idProject: project.id,
                    project: project,
                    isEdit: true,
                  },
                })
              "
            >
              Edit
            </v-btn>
            <v-btn
              color="primary open"
              text
              @click="
                $router.push({
                  name: 'Project',
                  params: { idProject: project._id, project: project },
                })
              "
            >
              Open
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: null,
    };
  },
  mounted() {
    this.$store.commit("GET_ALL_PROJECT");
  },
};
</script>

<style></style>
