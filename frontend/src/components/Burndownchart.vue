<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>

<h1>coco</h1>

<script>
/*
//sum elements of an array up to the index provided
function sumArrayUpTo(arrData, index) {
    var total = 0;
    for(var i = 0; i<=index; i++){
        if(arrData.lenght > i) {
            total += arrData[i];
        }
    }
    return total;
}*/
export default {
  props: {
    project: Object,
    idProject: String,
  },
  data(){
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

mounted() {
    if (!this.project && this.$route.params.idProject) {
      console.log("No props in params");
      axios
        .get(
          `http://${serverurl}:${port}/project/${this.$route.params.idProject}/burndownchart`
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