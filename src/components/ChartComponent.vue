<template>
  <div >
    <apexcharts 
    height="310" :options="chartOptions" 
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
              categories: [2023, 2020, 2018, 2015, 2012, 2009,2006],
             
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
          data: [44, 55, 41, 37, 35 ,38,45]
        }, {
          name: 'College',
          data: [53, 32, 33, 52, 45 ,39,33 ]
        }, {
          name: 'High School',
          data: [12, 17, 11, 19, 18 ,45,38 ]
        }, {
          name: 'Senior High',
          data: [19, 17, 15, 18,16 ,19 ,19]
        },],

      }

     
    },


  }
</script>
