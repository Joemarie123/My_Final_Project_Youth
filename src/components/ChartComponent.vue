<template>

  <div id="chart" >
  <!--   style="min-width:100%" -->
 <!--  style="min-width:90%" -->
    <apexcharts 
    
  
    height="322" :options="chartOptions" 
    :series="series"
    class="kinidaw"
    ></apexcharts>
  </div>


</template>

<script>
/* eslint-disable */

import VueApexCharts from 'vue-apexcharts'

  export default {
    name: 'Chart',
    components: {
      apexcharts: VueApexCharts,
    },
    
    data: function() {
      return {
        
        chartOptions: {
          chart: {
            id: 'basic-bar',
            type: 'bar',
            height: 350,
            width: 400,
            foreColor:"white",
             
           
          },
          
          dataLabels: {
              
              enabled: false,
              /* style: {
                fontSize: "5px",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: "bold"
              } */
            },

          plotOptions: {

            dataLabels: {
              
              enabled: false,
              /* style: {
                fontSize: "5px",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: "bold"
              } */
            },

            bar: {
              
              horizontal: false,
              dataLabels: {
               
              },

              
              stroke: {
          
            width: 1,
            colors: ['#fff']
            
          },


         
          legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 40,
          
          }
          
            },
          
            showTotal: false,
            
          },

          
        
          xaxis: {

               categories: [2009, 2012, 2015, 2018, 2020, 2023],
          },
          
    grid: {
  xaxis: {
    lines: {
      show: false
    }
  }
},

/* responsive: [
    {
      breakpoint: 1000,
      options: {
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        legend: {
          position: "bottom"
        }
      }
    }
  ] */

  },

        series: [{
          name: 'Out Of School Youth',
          data: [44, 55, 41, 37, 35 ,38]
        }, {
          name: 'College',
          data: [53, 32, 33, 52, 45 ,39 ]
        }, {
          name: 'High School',
          data: [12, 17, 11, 19, 18 ,45 ]
        }, {
          name: 'Senior High',
          data: [19, 17, 15, 18,16 ,19 ]
        },],

      }

    },


  }
</script>

<style scoped>

#chart {
  max-width: 930px;
  margin: 35px auto;
}

  
@media screen and (max-width: 300px)

{

  .kinidaw{

    width: 400px;

  }


}



</style>