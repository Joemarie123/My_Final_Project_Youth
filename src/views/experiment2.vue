<template>
  <div>
    <apexchart type="bar" :options="chartOptions" :series="chartSeries"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          id: 'mychart',
        },
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        },
        yaxis: {
          title: {
            text: 'Sales',
          },
        },
        showTotal: false, // set showTotal to false to remove the total number
      },
      chartSeries: [
        {
          name: 'Sales',
          data: [30, 40, 25, 50, 49, 21, 70],
        },
      ],
    };
  },
};
</script>
