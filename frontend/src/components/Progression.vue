<template>
  <v-card>
      <h1>{{component}} Progress</h1>
      <h2>{{percent}}</h2>
      <v-progress-linear
        height="20"
        v-model="value"
      >

      </v-progress-linear>
  </v-card>
</template>

<script>
import { serverurl, port } from "../config/backend.config";
import axios from "axios";

export default {
    Name: "Progress",
    props: {
        idProject: String,
        component: String,
    },
    data() {
        return {
            value: 50,
            id: this.idProject,
            percent: "test",
        }
    },
    mounted(){
        if(this.component=='US'){
            axios.get(`http://${serverurl}:${port}/project/${this.idProject}/us/display/${this.idProject}`)
                .then((res) => {
                    const us = res.data;
                    let size = us.length;
                    if (size!=0) {
                        let closed = 0;
                        for(let i=0;i<size;i++){
                            if(us[i].state==='CLOSED'){
                                closed++;
                            } 
                        }
                        console.log('Closed : '+closed);
                        this.value=(closed/size)*100
                        this.percent=this.value.toString()+"%";
                    }
                    else{
                        this.percent = "Empty";
                    }
                });
        }
        else{
            this.percent = "not implemented";
        }
        
    },
}
</script>

<style>

</style>