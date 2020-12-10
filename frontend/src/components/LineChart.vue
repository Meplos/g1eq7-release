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
        nbPoints: 0,
        usTab:[],
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
              type:'line',
              label: 'Ideal Task Remaining',
              //backgroundColor: '#f87979',
              pointBackgroundColor: 'green',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              data: [],
            },{
              label: 'Actual Task Remaining',
              backgroundColor: '#A12323',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              data: [],
            }
              ]
        },
        options: {
            type:'line',
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
        getNbComplexTotal(){
            let total = 0;
            for(let i=0;i<this.usTab.length;i++){
                total = total + this.usTab[i].difficulty;
            }
            
            return total;
        },
        getPointsActual(){
          //let dateAuj = new Date();
          //let nbD
          //console.log(dateToday);
          //initialization tabs de base
          let tab = [];
          let tabBase = [];
          for(let y =0;y<=this.nbPoints;y++){
            tabBase[y] = this.datacollection.datasets[0].data[0];
            tab[y] = 0;
          }

          //initialization tab somme difficulty us closed by day
          let dateStartProjet = this.start;
          for(let i =0;i<=this.usTab.length-1;i++){
            if(this.usTab[i].state == "CLOSED"){
              let dif = this.getNbDaysBetween(dateStartProjet,this.usTab[i].dateClose)+1;
              tab[dif] = tab[dif] + this.usTab[i].difficulty;
              console.log("tabDif"+tab[dif]+ dif);
            }
          }

          //calcul différence tab et tabBase par jours
          let tabFinal = [];
          let point0 = this.datacollection.datasets[0].data[0];
          tabFinal[0] = point0;
          for(let z =0;z<=this.nbPoints;z++){
            tabFinal[z] = tabBase[z] - tab[z];
          }

          //uniformisation du tabFinal
          for(let g = 1;g<=tabFinal.length;g++){
            if(tabFinal[g] == point0){
              if(tabFinal[g-1] < tabFinal[g]){
                tabFinal[g] = null;
              }
            }
          }
          return tabFinal;
        },
        getPointsIdeal(){
            this.datacollection.labels = this.getLabels();
            let point1 = this.getNbComplexTotal(); 
            let point2 =  0;
            let tab = [];
            tab[0] = point1;
            let dif= point1/(this.nbPoints-1);
            for(let i =1;i<=this.nbPoints;i++){
                tab[i] = point1-(i*dif);
            }
            tab[this.nbPoints-1] = point2;
            
            return tab;
        },
        getNbDaysBetween(start,end){
          let dateStart = Date.parse(start);
          let dateEnd = Date.parse(end);
          let diff = {};
          let tmp = dateEnd - dateStart;
          tmp = Math.floor(tmp/1000);
          diff.sec = tmp % 60;
          tmp = Math.floor((tmp-diff.sec)/60);
          diff.min = tmp % 60;
          tmp = Math.floor((tmp-diff.min)/60);    
          diff.hour = tmp % 24;                   
          tmp = Math.floor((tmp-diff.hour)/24); 
          let difDay = tmp; 
          console.log("day:"+difDay);
          return difDay;
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
            }
            this.nbPoints = labelsIdeal.length;
            return labelsIdeal;
        }
    },
    mounted () {
      axios
      .get(
        `http://${serverurl}:${port}/project/${this.idProject}/us/display/${this.idProject}`
      )
      .then((res) => {
        if (res.data) {this.usTab = res.data;}
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
          console.log(this.getLabels());
            this.datacollection.labels = this.getLabels();
            console.log("dddd");
            this.datacollection.datasets[0].data = this.getPointsIdeal();
            this.datacollection.datasets[1].data = this.getPointsActual();
            console.log("eeeee");
            console.log("sss"+this.getPointsIdeal());
            this.renderChart(this.datacollection, this.options);
            
            this.renderChart(this.datacollection, this.options);
        })
        .catch(() => this.$router.push({ name: "404" }));
    }   
        
      });

    this.renderChart(this.datacollection, this.options);
         
    }
  }
  
</script>