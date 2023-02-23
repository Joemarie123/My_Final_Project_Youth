<template>
      
      
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        class="btn-hover color-1"
        dark
      ></v-data-table>
   
  </template>
  
  <script>
    export default {
      data () {
        return {
          search: '',
          headers: [
            {
              text: 'Full Name',
              align: 'start',
              sortable: false,
              value: 'name',
            },
            { text: 'Email', value: 'email' },
           
          ],
          desserts: [
            {
              name: 'Joemarie Rendon',
              email: 'joemarie@gmail.com',
            
            },
            {
              name: 'Lebron James',
              email: 'james@gmail.com',
           
            },  
             {
              name: 'Pablo Escobar',
              email: 'escobar@gmail.com',
             
            },  

             {
              name: 'Joemarie Rendon',
              email: 'joemarie@gmail.com',
            
            },  
             {
              name: 'Joemarie Rendon',
              email: 'joemarie@gmail.com',
            
            },  
             {
              name: 'Joemarie Rendon',
              email: 'joemarie@gmail.com',
             
            }, 
          
          ],
        }
      },
    }
  </script>


<style scoped>

h2{

    color:white;
}

.btn-hover {
   
   font-size: 16px;
   font-weight: 600;
  
   cursor: pointer;
   margin: 20px;
   text-align:center;
   border: none;
   background-size: 300% 100%;
   border-radius: 50px;
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