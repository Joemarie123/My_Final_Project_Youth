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
    <SK_NavBar/>
</v-app>
</template>



<script>



import SK_NavBar from '@/views/Brgy_Sk_Official_AR/SK_NavBar';

export default {
  components: {

    SK_NavBar,
  },

};
</script>
