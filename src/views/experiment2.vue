<template>
  <div>
    <v-text-field v-model="search" label="Search"></v-text-field>
    <v-data-table :items="filteredItems" :headers="headers"></v-data-table>
    <p>Total rows: {{ rowCount }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      items: [
        { name: 'John', age: 25 },
        { name: 'Mary', age: 30 },
        { name: 'Bob', age: 40 }
      ],
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Age', value: 'age' }
      ],
     
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter(item =>
        item.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    rowCount() {
      return this.filteredItems.length;
    }
  }
};
</script>
