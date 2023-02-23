<template>
      
      
    <v-card   class="btn-hover color-1" tile>
    
        <v-row>
 
      
            <v-col cols="12" sm="12" md="3">
                        <h2>ALL MALE</h2>

                        
                </v-col>
      
                <v-col cols="12" sm="12" offset-sm="4" offset-md="4" md="3">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          dark
        ></v-text-field>
              </v-col>

            </v-row>
          


 
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        class="btn-hover color-1"
        dark
      ></v-data-table>
    </v-card>




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
            { text: 'Address', value: 'address' },
            { text: 'Phone', value: 'phone' },
            { text: 'FB Account', value: 'fbaccount' },
            { text: 'Age', value: 'age' },
          ],
          desserts: [
            {
              name: 'Joemarie Rendon',
              email: 'joemarie@gmail.com',
              address: 'Purok 2-A magatos Asuncion Davao Del Norte',
              phone: '09518110301',
              fbaccount: 'www.facebook/joemarie.rendon',
              age: '27',
            },
            {
              name: 'Lebron James',
              email: 'james@gmail.com',
              address: 'Gemina Apokon Tagum Davao Del norte',
              phone: '09518110301',
              fbaccount: 'www.facebook/james.lebron',
              age: '27',
            },   {
              name: 'Pablo Escobar',
              email: 'escobar@gmail.com',
              address: 'Gemina Apokon Tagum Davao Del norte',
              phone: '095123412561',
              fbaccount: 'www.facebook/escobar.pabs',
              age: '27',
            },   {
              name: 'Joemarie Rendon',
              email: 'joemarie@gmail.com',
              address: 'Purok 2-A magatos Asuncion Davao Del Norte',
              phone: '094521489435',
              fbaccount: 'www.facebook/joemarie.rendon',
              age: '27',
            },   {
              name: 'Joemarie Rendon',
              email: 'joemarie@gmail.com',
              address: 'Purok 2-A magatos Asuncion Davao Del Norte',
              phone: '09518110301',
              fbaccount: 'www.facebook/joemarie.rendon',
              age: '27',
            },   {
              name: 'Joemarie Rendon',
              email: 'joemarie@gmail.com',
              address: 'Purok 2-A magatos Asuncion Davao Del Norte',
              phone: '09518110301',
              fbaccount: 'www.facebook/joemarie.rendon',
              age: '27',
            },   {
              name: 'Joemarie Rendon',
              email: 'joemarie@gmail.com',
              address: 'Purok 2-A magatos Asuncion Davao Del Norte',
              phone: '09518110301',
              fbaccount: 'www.facebook/joemarie.rendon',
              age: '27',
            },
            {
              name: 'Joemarie Rendon',
              email: 'joemarie@gmail.com',
              address: 'Purok 2-A magatos Asuncion Davao Del Norte',
              phone: '09518110301',
              fbaccount: 'www.facebook/joemarie.rendon',
              age: '27',
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