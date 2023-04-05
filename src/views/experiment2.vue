<template>
  <v-app>
<!--   <v-text-field
  :style="`width: ${ width < 600 ? 125 : 300}px`"

  
></v-text-field> -->

<v-card class="tawagako" color="green">

 <v-text-field dark class="font-weight-bold" :style="`width: ${ width < 900 ? 100: 500}px`" flat solo
readonly value="Birth Day:"></v-text-field>

</v-card>

<h1>THIS IS ME</h1>

</v-app>

</template>
<script>

</script>


<style>
@media screen and (max-width: 600px) {
  h1 {
    font-size: 7px;
  }
  div #search {
    size: 5px;
  }

    .tawagako{
      width:200px;

}

}

</style>