
<template>
  <section class="container">
    <h1>{{name}}</h1>
    <div class="columns">
      <div class="columns">
        <h3>BurndownChart</h3>
        <line-chart :project="this.Project" :idProject="this.idProject"></line-chart>
      </div>
    </div>
  </section>
</template>

<script>

import LineChart from './LineChart.vue';
import { serverurl, port } from "../config/backend.config";
import axios from "axios";
export default {
  name: 'VueChartJS',
  components: { LineChart },
  props: {
    idProject: String,
    Project : Object
,  },

  data() {
    return {
      id: this.project ? this.project._id : this.idProject,
      name: this.project ? this.project.name : null,
      description: this.project ? this.project.description : "",
      git: this.project ? this.project.git_repo : "",
      start: this.project ? this.project.start_date : null,
      end: this.project ? this.project.end_date : null,
      state: this.project ? this.project.state : null,
    };
  },
  methods: {
    
  },
  mounted() {
    if (!this.project && this.$route.params.idProject) {
      console.log("No props in params");
      axios
        .get(
          `http://${serverurl}:${port}/project/${this.$route.params.idProject}`
        )
        .then((res) => {
          console.log(res.status);
          if (res.status === 200) {
            const p = res.data;
            this.name = p.name;
            this.description = p.description;
            this.git = p.git_repo;
            this.start = p.start_date;
            this.end = p.end_date;
            this.state = p.state;
          }
        })
        .catch(() => this.$router.push({ name: "404" }));
    }
  },
};
</script>
