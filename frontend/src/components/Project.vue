<template>
  <div class="projectVue">
    <v-row>
      <h1>{{title}}dede</h1>
    </v-row>
    <v-row col="12" sm="8">
      <label>Date de début: </label>
    </v-row>
    <v-row col="12" sm="8">
      <label>{{dateDeb}}</label>
    </v-row>
    <v-row col="12" sm="8">
      <label>Etat:</label>
    </v-row>
    <v-row col="12" sm="8">
      <label>{{etat}}</label>
    </v-row>
    <v-row col="12" sm="8">
      <label v-if="haveDateFin">Date de fin estimée:</label>
    </v-row>
    <v-row col="12" sm="8">
      <label>{{dateFinEst}}</label>
    </v-row>
    <v-row col="12" sm="8">
      <label v-if="haveDepot">Dépot:</label>
    </v-row>
    <v-row col="12" sm="8">
      <label>{{depot}}</label>
    </v-row>
    <v-row col="12" sm="8">
      <label v-if="haveDesc">Description:</label>
    </v-row>
    <v-row col="12" sm="8">
      <label>{{desc}}</label>
    </v-row>
    <v-row col="12" sm="8">
      <router-link :to="{ name: 'modifyProject' }">
        <v-btn color="success"><v-icon left>mdi-plus</v-icon> Modify</v-btn>
      </router-link>
    </v-row>
  </div>
  
</template>

<script>
import { serverurl, port } from "../config/backend.config";
import axios from "axios";

export default {
  props: { 
    project: Object,
  },

mounted(){
  axios.get(`http://${serverurl}:${port}/project`, {}).then((res)=>{
    this.project = res;
    console.log(this.project);
  });
},

};
</script>

<style></style>
