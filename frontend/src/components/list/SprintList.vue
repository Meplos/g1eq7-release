<template>
  <div class="sprintList_container">
    <h1>
      Sprints
      <v-btn
        class="mx-2 success"
        fab
        @click="
          $router.push({
            name: 'CreateSprint',
            params: { isEdit: false, idProject: $route.params.idProject },
          })
        "
      >
        <v-icon> mdi-plus</v-icon>
      </v-btn>
    </h1>

    <v-row v-if="$store.state.sprintOfCurrentProject.length === 0">
      <v-spacer></v-spacer>
      <v-col cols="8" sm="4">
        <v-alert class="red lighten-2">
          No sprint yet?
          <router-link
            :to="{
              name: 'CreateSprint',
              params: { isEdit: false, idProject: $route.params.idProject },
            }"
          >
            Create one here
          </router-link>
        </v-alert>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <div class="sprint__list" v-else>
      <div
        class="sprint drop-zone"
        @drop="onDrop($event, null)"
        @dragover.prevent
        @dragenter.prevent
      >
        <h2>
          Unplannified
        </h2>
        <div class="sprint__info">
          <p v-if="$store.state.usOfCurrentProject.lenght === 0">
            No US available
          </p>
          <USCard
            v-else
            v-for="us in getUserStoriesIn(null)"
            :key="us._id"
            :us="us"
            draggable
            @dragstart="startDrag($event, us)"
          />
        </div>
      </div>

      <div
        class="sprint drop-zone"
        v-for="(sprint, index) in $store.state.sprintOfCurrentProject"
        :key="sprint._id"
        @dragover.prevent
        @dragenter.prevent
        @drop="onDrop($event, sprint._id)"
      >
        <h2>Sprint {{ index }}</h2>
        <div class="sprint__info">
          <USCard
            v-for="us in getUserStoriesIn(sprint._id)"
            :key="us._id"
            :us="us"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { serverurl, port } from "../../config/backend.config";
import USCard from "../cards/USCard";
export default {
  components: {
    USCard,
  },
  data() {
    return {
      idProject: this.$route.params.idProject,
      usList: [],
      sprintList: [],
    };
  },
  methods: {
    getUserStoriesIn(id) {
      return this.$store.state.usOfCurrentProject.filter(
        (cur) => cur.sprintId === id
      );
    },

    onDrop(evt, sprint) {
      const itemID = evt.dataTransfer.getData("usID");
      const item = this.$store.state.usOfCurrentProject.find(
        (it) => it._id === itemID
      );
      if (!item) return;
      item.sprintId = sprint;
      if (sprint) {
        item.state = "PLANNIFIED";
      } else {
        item.state = "OPEN";
      }
      this.update(item);
    },
    update(us) {
      axios
        .post(
          `http://${serverurl}:${port}/project/${this.idProject}/us/${this.id}/modify/`,
          us
        )
        .then(() => {
          this.$store.commit("GET_US_OF_PROJECT", this.idProject);
        });
    },
  },
  mounted() {
    this.$store.commit("GET_US_OF_PROJECT", this.idProject);
    this.$store.commit("GET_SPRINT_OF_PROJECT", this.idProject);
  },
};
</script>

<style>
.sprint {
  margin: 15px;
  padding-bottom: 10px;
  background: #313131;
  box-sizing: border-box;
  border-radius: 36px;
}
.sprint__info {
  display: flex;
}
a {
  font-weight: bold;
}
</style>
