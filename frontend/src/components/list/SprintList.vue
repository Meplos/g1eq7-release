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

    <div class="sprint__list">
      <div
        class="sprint drop-zone"
        @drop="onDrop($event, null)"
        @dragover.prevent
        @dragenter.prevent
      >
        <h2>
          Unplannified
        </h2>
        <p v-if="usList.lenght === 0">No US available</p>
        <USCard
          v-for="us in getUserStoriesIn(null)"
          :key="us.id"
          :us="us"
          draggable
          @dragstart="startDrag($event, us)"
        />
      </div>
      <div class="info">
        <v-alert v-if="sprintList.length === 0" class="red lighten-2">
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
      </div>
      <div
        class="sprint drop-zone"
        v-for="sprint in sprintList"
        :key="sprint.id"
        @drop="onDrop($event, sprint.id)"
        @dragover.prevent
        @dragenter.prevent
      >
        <h2>Sprint {{ sprint.id }}</h2>

        <USCard
          v-for="us in getUserStoriesIn(sprint.id)"
          :key="us.id"
          :us="us"
          draggable
          @dragstart="startDrag($event, us)"
        />
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
      usList: [],
      sprintList: [],
    };
  },
  methods: {
    getUserStoriesIn(id) {
      return this.usList.filter((cur) => cur.sprint === id);
    },
    startDrag: (evt, item) => {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("itemID", item.id);
    },
    onDrop(evt, sprint) {
      const itemID = evt.dataTransfer.getData("itemID");
      const item = this.usList.find((us) => us.id == itemID);
      item.sprint = sprint;
      if (itemID) {
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

a {
  font-weight: bold;
}

.info {
  margin: 45px;
}
</style>
