<template>
  <p>{{ currMonth }} {{ currDay }}, {{ currYear }}</p>
</template>


<script>
export default {
  data() {
    return {
      currDay: new Date().getDate(),
      currMonth: new Date().toLocaleString([], {
        month: 'long',
      }),
      currYear: new Date().getFullYear(),
    };
  },
};
</script>