<template>
  <v-app>
    <Youth_Member_Navbar />

    <YouthRegister />

  </v-app>
</template>


<script>

// import { reactive } from "vue";
import Youth_Member_Navbar from "@/views/Youth_Member_AR/Youth_Member_Navbar.vue";
// import YouthRegister from "../views/Forms_Balik2/YouthRegister.vue"

export default {

  components: {
    Youth_Member_Navbar,
    // YouthRegister
  },

  

};
</script>


<style>
h4 {
  color: green;

}

h3 {

  font-size: small;
}
</style>