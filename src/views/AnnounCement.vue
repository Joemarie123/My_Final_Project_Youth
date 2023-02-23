<template>
    <v-app>
      <v-container>
   <h1>My Announcement</h1>
   <v-textarea
          outlined
          name="input-8-9"
          label="Create Announcement"
        
        ></v-textarea>
   <Navbar/> 


   <v-btn  color="blue" class="ma-2" >
  SEND TO ALL MEMBERS
 </v-btn>
 <v-btn  color="blue" class="ma-2" >
  SEND TO ALL SK OFFICIAL
 </v-btn>
 <v-btn color="green" class="ma-2"> SAVE </v-btn>

</v-container>

</v-app>


</template>



<script>



import Navbar from '@/components/Navbar';



export default {
  components: {

     Navbar,
  },

};
</script>
