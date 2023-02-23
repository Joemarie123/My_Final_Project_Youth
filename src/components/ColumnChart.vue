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
              stacked: true,
              foreColor:"white",
               
            },
            
            plotOptions: {
              
              bar: {
                
                horizontal: false ,
                dataLabels: {
                  total: {
                    
                  
                    enabled: true,
                    offsetX: 0,
                    
                    style: {
                     
                      fontSize: '13px',
                      fontWeight: 800,
                      
                      
                    }
                    
                  }
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
                categories: [2023, 2022, 2021, 2020,2019,2018,2017],
                lines: {
          
          }
            },

            
/* grid: {
  borderColor: '255, 0, 0, 0.3',

},
 */



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
  ]  */
 
    },

          series: [{
            name: 'Out Of School Youth',
            data: [44, 55, 41, 37, 35 ,38,45]
          }, {
            name: 'College',
            data: [53, 32, 33, 52, 45 ,39,33 ]
          }, {
            name: 'High School',
            data: [12, 17, 11, 9, 18 ,45,38 ]
          }, {
            name: 'Senior High',
            data: [9, 7, 5, 8, 6 ,9 ,9]
          },],

        }

        
        
      },



    }
  </script>
  