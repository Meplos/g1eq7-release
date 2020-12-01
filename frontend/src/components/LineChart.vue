<script>
  import { Line } from 'vue-chartjs'
  import { serverurl, port } from "../config/backend.config";
    import axios from "axios";


  export default {
    extends: Line,
    props: {
        project: Object,
        idProject: String,
    },
    data () {
      return {
        tasks:[],
        id: this.project ? this.project._id : this.idProject,
        name: this.project ? this.project.name : null,
        description: this.project ? this.project.description : "",
        git: this.project ? this.project.git_repo : "",
        start: this.project ? this.project.start_date : null,
        end: this.project ? this.project.end_date : null,
        state: this.project ? this.project.state : null,
        datacollection: {
          labels:[] ,
          datasets: [
            {
              label: 'Ideal',
              backgroundColor: '#f87979',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              data: [],
            }
              ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    methods: {
        getNbHeuresTotal(){
            let total = 0;
            for(let i=0;i<this.tasks.length;i++){
                total = total + this.tasks[i].time;
            }
            return total;
        },
        getPointsIdeal(){
            let point1 = this.getNbHeuresTotal(); 
            let point2 =  0;
            let tab = [point1,point2];
            return tab;
        },
        getLabels(){
           //recup labels x
            let labelsIdeal = [];
            let diff= {};
            let endDate =  Date.parse(this.end);
            
            let startDate = Date.parse(this.start);
            let tmp = endDate - startDate;

            tmp = Math.floor(tmp/1000);
            diff.sec = tmp % 60;

            tmp = Math.floor((tmp-diff.sec)/60);
            diff.min = tmp % 60;

            tmp = Math.floor((tmp-diff.min)/60);    
            diff.hour = tmp % 24;                   
        
            tmp = Math.floor((tmp-diff.hour)/24); 
            let difDay = tmp;
                
            for(let i =0;i <= difDay;i++){
                labelsIdeal[i] = i;
                console.log(i);
            }
            return labelsIdeal;
        }
    },
    mounted () {
      
      axios
      .get(
        `http://${serverurl}:${port}/project/${this.idProject}/task/display/${this.idProject}`
      )
      .then((res) => {
        if (res.data) {this.tasks = res.data;}
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
            this.datacollection.datasets[0].data = this.getPointsIdeal();
            console.log("sss"+this.getPointsIdeal());
            this.renderChart(this.datacollection, this.options);
            this.datacollection.labels = this.getLabels();
            this.renderChart(this.datacollection, this.options);
        })
        .catch(() => this.$router.push({ name: "404" }));
    }   
        
      });

    this.renderChart(this.datacollection, this.options);
         
    }
  }
  
</script>