<template>
  
  <div class="grid">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>


</template>

<style >
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 3 columns */
  grid-template-rows: repeat(4, 100px); /* 2 rows */
  gap: 10px; /* gap between grid items */
}


.item {
  background-color: #ddd;
  padding: 20px;
}


</style>