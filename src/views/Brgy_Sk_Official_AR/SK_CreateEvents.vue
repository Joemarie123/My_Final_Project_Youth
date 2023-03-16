<template>
  <v-app>
    <SK_NavBar />

    <TableEvents />

  </v-app>
</template>


<script>

// import { reactive } from "vue";
import SK_NavBar from "@/views/Brgy_Sk_Official_AR/SK_NavBar.vue";
// import YouthRegister from "../views/Forms_Balik2/YouthRegister.vue"

export default {

  components: {
    SK_NavBar,
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