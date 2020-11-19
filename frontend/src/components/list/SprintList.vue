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

    <v-row v-if="sprintList.length === 0">
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
          <p v-if="usList.lenght === 0">No US available</p>
          <USCard
            v-else
            v-for="us in getUserStoriesIn(null)"
            :key="us.id"
            :us="us"
            draggable
            @dragstart="startDrag($event, us)"
          />
        </div>
      </div>

      <div
        class="sprint drop-zone"
        v-for="sprint in sprintList"
        :key="sprint.id"
        @dragover.prevent
        @dragenter.prevent
        @drop="onDrop($event, sprint.id)"
      >
        <h2>Sprint {{ sprint.id }}</h2>
        <div class="sprint__info">
          <USCard
            v-for="us in getUserStoriesIn(sprint.id)"
            :key="us.id"
            :us="us"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
//import { serverurl, port } from "../../config/backend.config";
import USCard from "../cards/USCard";
export default {
  components: {
    USCard,
  },
  data() {
    return {
      usList: [
        {
          id: 0,
          description: "MAMAM",
          state: "OPEN",
          sprint: null,
        },
        {
          id: 1,
          description: "LKJEMZ",
          state: "OPEN",
          sprint: 1,
        },
      ],
      sprintList: [{ id: 0 }, { id: 1 }, { id: 3 }],
    };
  },
  methods: {
    getUserStoriesIn(id) {
      return this.usList.filter((cur) => cur.sprint === id);
    },

    onDrop(evt, sprint) {
      const itemID = evt.dataTransfer.getData("usID");
      const item = this.usList.find((it) => it.id === eval(itemID));
      if (!item) return;
      item.sprint = sprint;
      if (sprint) {
        item.state = "PLANNIFIED";
      } else {
        item.state = "OPEN";
      }
      this.update(item.id, sprint);
    },
    update(usID, sprintID) {
      if (usID == sprintID) console.log("Update");
      /*axios
      .post(
        `http://${serverurl}:${port}/project/${this.idProject}/us/display/${this.idProject}, {us: usID, sprint:sprintID }`
      )*/
    },
  },
  mounted() {
    /*axios
      .get(
        `http://${serverurl}:${port}/project/${this.idProject}/us/display/${this.idProject}`
      )
      .then((res) => {
        const us = res.data;
        if (us) {
          this.usList = us;
        }
      });
    axios
      .get(
        `http://${serverurl}:${port}/project/${this.idProject}/sprint/display/${this.idProject}`
      )
      .then((res) => {
        const us = res.data;
        if (us) {
          this.usList = us;
        }
      });*/
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
