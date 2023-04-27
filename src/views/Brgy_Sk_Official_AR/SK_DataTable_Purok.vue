<template>
    
    <v-data-table
         
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    dark
    class="btn-hover color-1"
     tile  
     :height="360"  
     :footer-props="{
        'items-per-page-options':[5],
        'disable-items-per-page': true,
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
       
          text: 'Purok',
          align: 'start',
          value: 'name',

        },
        { text: 'Total Youth',  align: 'center', value: 'category' },

      ],
      desserts: [
        {

        
          name: 'Purok 1-A',
          category: '500',
        },
        {

          name: 'Purok 1-B',
          category: '489',
        },
        {
          name: 'Purok 1-C',
          category: '356',
        },
        {
          name: 'Purok 2-A',
          category: '600',
        },
        {
          name: 'Purok 2-B',
          category: '200',
        },
        {
          name: 'Purok 2-C',
          category: '689',
        },
        {
          name: 'Purok 3-A',
          category: '587',
        },
        {
          name: 'Purok 4-A',
          category: '654',
        },
        {
          name: 'Purok 5-A',
          category: '224',
        },
        {
            name: 'Purok 6-A',
          category: '116',
        },

     
       

      ],
//lahi napud ni





    }
  },

  
};
</script>





<style scoped> 
.btn-hover {
   
   font-size: 16px;

   cursor: pointer;
   margin: 10px;
   text-align:center;
   border: none;
   background-size: 300% 100%;
   border-radius: 30px;
   moz-transition: all .4s ease-in-out;
   -o-transition: all .4s ease-in-out;
   -webkit-transition: all .4s ease-in-out;
   transition: all .4s ease-in-out;
}

.btn-hover:focus {
   outline: none;
}

.btn-hover.color-1 {
   background-image: linear-gradient(to right, #186f94, #0e7e48,  #0c8a4d,  #078045);
   box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.644);
}




</style>