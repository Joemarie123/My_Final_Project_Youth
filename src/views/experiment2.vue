<template>
  <div>
    <v-data-table :items="tableData"></v-data-table>
    <button @click="transferData">Transfer Data</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { name: 'John Doe', age: 30, email: 'john.doe@example.com' },
        { name: 'Jane Smith', age: 25, email: 'jane.smith@example.com' },
        { name: 'Bob Johnson', age: 45, email: 'bob.johnson@example.com' }
      ]
    }
  },
  methods: {
    transferData() {
      this.$emit('data-transfer', this.tableData)
    }
  }
}
</script>
