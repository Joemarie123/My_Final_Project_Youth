<template>
    
    <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="All"
    item-key="name"
    class="elevation-1"
    :footer-props="{
      showFirstLastPage: true,
      firstIcon: 'mdi-arrow-collapse-left',
      lastIcon: 'mdi-arrow-collapse-right',
      prevIcon: 'mdi-minus',
      nextIcon: 'mdi-plus'
    }"
  ></v-data-table>
  
</template>

<script>
  

export default {
  

  components: {
    
   
   
  },
  data: function () {
    return {
      headers: [
        {
          text: 'Barangay',
          align: 'start',
          value: 'name',
        },
        { text: 'Total Youth Population', value: 'category' },
      ],
      desserts: [
       

      ],
//lahi napud ni


    }
  },

  
};
</script>