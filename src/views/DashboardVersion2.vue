<template>
  
<v-app>
 <v-main>

<v-container>

 <v-row>
  <v-col 
  md="6"
  xs="6"
  sm="4"

  cols="12">



    <v-card height="350" class="pa-0">
      <Chart />
    </v-card>


  </v-col>
 </v-row>

</v-container>
 </v-main>
</v-app>

</template>



<script>

import Chart from '@/components/ChartComponent.vue'


export default {
  name: 'App',

  components: {
  
    Chart,


  },

  data: () => ({
    //
  }),
};


</script>