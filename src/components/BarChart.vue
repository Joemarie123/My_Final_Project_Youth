<template>
    <div> 
      <apexcharts
        height="300"
        :options="chartOptions"
        :series="series"
      ></apexcharts>
    </div>
  </template>
      
      <script>
  import VueApexCharts from "vue-apexcharts";
  
  export default {
    name: "ChartComponent",
    components: {
      apexcharts: VueApexCharts,
    },
    data: function () {
      return {
        chartOptions: {
          chart: {
            id: "basic-bar",
            type: "bar",
            foreColor: 'green'
          },
          plotOptions: {
            bar: {
              borderRadius: 2,
              horizontal: true,
            },
          },
          xaxis: {
           
            categories: ["For Approval", "For Recommendation", "For Processing"],
          },
          colors: ["#1B5E20"]
        },
  
        series: [
          {
            name: "series-1",
            data: [30, 40, 45],
          },
        ],
      };
    },
  };
  </script>