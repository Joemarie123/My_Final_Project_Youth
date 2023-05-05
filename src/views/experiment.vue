<template>
  <div>
    
    <v-checkbox-group class="mt-n7">
     <v-checkbox v-model="checked"
     label="Physical Exam (weight, blood, pressure, heart rate)"></v-checkbox>
     <v-checkbox v-model="checked1" label="Gynecological Exam"
      style="margin-top: -10px"></v-checkbox>
     <v-checkbox label="Ultrasound"
    style="margin-top: -10px"></v-checkbox>
   <v-checkbox label="HIV/STI/STD Testing"
   style="margin-top: -10px"></v-checkbox>
    <v-checkbox label="Nutritious Supplement"
     style="margin-top: -10px"></v-checkbox>

   <v-checkbox label="Tetanus Vaccinet"
  style="margin-top: -10px"></v-checkbox>

   </v-checkbox-group>
  
   <v-text-field v-model="inputValue" label="Input"></v-text-field>


   <v-select class="mt-n3"
   v-model="select_me"
  :items="['Public Health Facility', 'Private Clinic/Hospital', 'At home']"
      label="Select Type of Health Issues "
    prepend-inner-icon="mdi-hospital"
           required></v-select>

           <v-radio-group v-model="selected_Item" row class="mt-n3">
        <v-radio value="yes" label="Yes"></v-radio>
     <v-radio value="no" label="No"></v-radio>

    </v-radio-group>

    <v-btn @click="clearCheckbox">Clear Checkbox</v-btn>

  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      checked1: false,
      inputValue: '',
      select_me: '',
      selected_Item: '',

    }
  },
  methods: {
    clearCheckbox() {
      this.checked = false
      this.checked1 = false
      this.inputValue = ''
      this.select_me = ''
      this.selected_Item = ''
      
    }
  }
}
</script>