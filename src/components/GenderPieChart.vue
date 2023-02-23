<template>
    <div class="example">
      <apexchart
        
        :height="160"
        :options="options"
        :series="data"
      ></apexchart>
    </div>
  </template>
  
  <script>
  import VueApexCharts from "vue-apexcharts";
  
  export default {
    name: "Chart",
    props: {
      title: {
        type: String,
      },
      width: {
        type: Number,
      },
      height: {
        type: Number,
      },
      loading: {
        type: Boolean,
      },
    },
    components: {
      apexchart: VueApexCharts,
    },
    
    data: function () {
      return {
        data: [30, 40],
        
      };
    },
    computed: {
      options() {
        return {
          chart: {
            type: "donut",
          },
          
          legend: {
              show: false
                 },

                 plotOptions: {
              pie: {
                startAngle: -90,
                endAngle: 90,
                offsetY: 10
              }
            },
            grid: {
              padding: {
                bottom: -82
              }
            },
          colors: [
           
            "#00FFFF",
            "#FF69B4",
   
          ],
        
         
        };
      },
    },
  };
  </script>