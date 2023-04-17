<template>
  <v-data-table :headers="headers" :items="items"
  :hide-default-footer="true"
    :hide-default-header="true"
  ></v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: 'Name', value: 'name', width: '150' },
        { text: 'Age', value: 'age', width: '75' },
        { text: 'Gender', value: 'gender', width: '100' },
        { text: 'Email', value: 'email' },
      ],
      items: [
        { name: 'John Doe', age: 30, gender: 'Male', email: 'john.doe@example.com' },
        { name: 'Jane Doe', age: 25, gender: 'Female', email: 'jane.doe@example.com' },
        { name: 'Bob Smith', age: 40, gender: 'Male', email: 'bob.smith@example.com' },
      ],
    }
  },
}
</script>