<template>
    

    <div id="app">
  <v-app>
    
   <!--  <h2>Selected: {{displayItems}}</h2> -->
    


   
   <h5  v-for="person in selected" :key="person.name">{{person.name}}</h5>

    <v-data-table 
      id="mytable"
      show-select
      v-model="selected"
      :headers="headers"
      :items="desserts"
      :items-per-page="10"
      class="elevation-1"
      item-key="name"
      
    >
    <template v-slot:top>
        <v-toolbar
          flat
          dark
          class=" btn-hover color-1 elevation-1"

        >
          <v-toolbar-title>Attendance</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-row>
          <v-col cols="9">

            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details
              dark></v-text-field>

          </v-col>

          <v-col cols="3">
            <v-btn color="blue" class="rounded-xl">
              <v-icon left>mdi-account-check</v-icon>
             Submit

            </v-btn>
          </v-col>
        </v-row>

 
        </v-toolbar>
        
    
      </template>
    </v-data-table>
    

    <SK_NavBar/>
    
  </v-app>
</div>
</template>


<script>
import SK_NavBar from '@/views/Brgy_Sk_Official_AR/SK_NavBar'  
export default {
  name: 'App',

  components: {
   /*  LogInForm, */
   SK_NavBar
   /* YouTherecord, */

   /* Footer */
  },

  data () {
    return {
     /*  selected1: [ ],
      headers1: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name',
        },
      
      ],
 */

      /* selected: [{name:'first',address:'',gender:'',contact:''}], */
      selected:[], 
      headers: [
        {
          text: 'Full Name',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: 'Address', value: 'address' },
        { text: 'Gender', value: 'gender' },
        { text: 'Contact Number', value: 'contact' },
     
      ],


      desserts: [
        {
            
          name: 'Rendon Joemarie Odtojan',
          address: 'Apokon, Tagum City',
          gender: 'MALE',
          contact: '09518110301'
       
        },
        {

          name: 'Alcala Rey Naldo',
          address: 'Apokon, Tagum City',
          gender: 'MALE',
          contact: '09518110301'
         
        },
        {
          name: 'Lebon James Fernandez',
          address: 'Apokon, Tagum City',
          gender: 'MALE',
          contact: '09518110301'
        
        },
        {
          name: 'Pablo Escobar Roland',
          address: 'Apokon, Tagum City',
          gender: 'MALE',
          contact: '09518110301'
         
        },
        {
          name: 'Eil Arms Trong',
          address: 'Apokon, Tagum City',
          gender:'MALE',
          contact:'09518110301'
         
        },
        {
          name: 'Jelly bean Del Cruz',
          address: 'Apokon, Tagum City',
          gender:'MALE',
          contact: '09518110301'
         
        },
        {
          name: 'Dele Peña Richard Ococa',
          address: 'Apokon, Tagum City',
          gender: 'MALE',
          contact:'09518110301'
         
        },
        {
          name: 'Opitan James Sendobar',
          address: 'Apokon, Tagum City',
          gender: 'MALE',
          contact: '09518110301'
        
        },
        {
          name: 'Rendon James Escobar',
          address: 'Apokon, Tagum City',
          gender: 'MALE',
          contact: '09518110301'
        
        },
        {
          name: 'KitKat Ronald James',
          address: 'Apokon, Tagum City',
          gender: 'MALE',
          contact: '09518110301'
        
        },

        {
          name: 'KitKat Ronald James',
          address: 'Apokon, Tagum City',
          gender: 'MALE',
          contact: '09518110301'
        
        },
        {
          name: 'KitKat Ronald James',
          address: 'Apokon, Tagum City',
          gender: 'MALE',
          contact: '09518110301'
        
        },
        {
          name: 'KitKat Ronald James',
          address: 'Apokon, Tagum City',
          gender: 'MALE',
          contact: '09518110301'
        
        },
        {
          name: 'KitKat Ronald James',
          address: 'Apokon, Tagum City',
          gender: 'MALE',
          contact: '09518110301'
        
        },
      ],
    }
  },

 



};




</script>


<style scoped>

.theme--light.v-icon {
  color: blue !important;
}
.v-input--selection-controls__ripple.green--text {
   color: blue !important;
}

</style>