<template>
  <v-app>
    <Navbar />

    <YouthRegister />

  </v-app>
</template>


<script>

// import { reactive } from "vue";
import Navbar from "../../components/Navbar.vue";
// import YouthRegister from "../views/Forms_Balik2/YouthRegister.vue"

export default {

  components: {
    Navbar,
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