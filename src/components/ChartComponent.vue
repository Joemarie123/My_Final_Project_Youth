<template>

  <div >
  <!--   style="min-width:100%" -->
 <!--  style="min-width:90%" -->
    <apexcharts 
    
  
    height="340" :options="chartOptions" 
    :series="series"></apexcharts>
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
          
      
          plotOptions: {
            
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
            offsetX: 40

          }
          
            },
          
            
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
}

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
