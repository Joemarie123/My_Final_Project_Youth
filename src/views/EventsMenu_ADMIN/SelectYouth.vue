<template>
    <v-app>

  <v-container>
        <v-row>
<v-col cols="12">

    <DatatableSelectYouth/>

  
</v-col>


        </v-row>

        <Navbar/>

    </v-container> 


    </v-app>

</template>



<script>

import Navbar from '@/components/Navbar'
import DatatableSelectYouth from '@/views/EventsMenu_ADMIN/DatatableSelectYouth'



export default {
  name: 'App',

  components: {
  
   Navbar,
   DatatableSelectYouth,


  },

  data () {
    return {

    
    }

  }
  

    };



</script>