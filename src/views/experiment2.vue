<template>
  <v-text-field
    :value="currentValue" 
    return-masked-value
    mask="###.###.###-##"
    @input="handleInput"
></v-text-field>
</template>
<script>

</script>