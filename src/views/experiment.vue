<template>
  <v-app>
    <div id="app">
  <p>{{ message }}</p>
  <div v-for="item in integrationParams" :key="item.message" >
<label> {{ item.message }} </label>
<v-text-field  v-model="item.message" :id="item"/>

</div>
</div>

  </v-app>
</template>


<script>

export default {
  name: 'App',

  components: {
   /*  LogInForm, */
  /*  Navbar, */
   /* YouTherecord, */

   /* Footer */
  },

  data () {
    return {
      data: {
    message: 'Hello Vue.js!',
    integrationParams: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
    
  }
    
    }

  }
  

    };



</script>