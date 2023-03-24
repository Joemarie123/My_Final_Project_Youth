
<template>
  <v-app>


<!--     <v-radio-group  >
      <h3>Clear Data</h3>
     <v-radio value="yes"  label="Yes"></v-radio>
    <v-radio value="no"  @change="unCheck"  label="No"></v-radio>
    </v-radio-group>

    <v-btn color="green">Uncheck</v-btn>

    <div>
    <v-radio-group v-model="selectedItem" >
      <h3>Gender</h3>
     <v-radio  value="Male" label="Male"></v-radio>
    <v-radio value="Female" label="Female"></v-radio>
    </v-radio-group>
  </div>
    
 -->

  <v-radio-group>
      <h3>Gender</h3>
     <v-radio  value="clear" label="Clear Checkbox" @click="clearbai"></v-radio>
     <v-radio  value="ss" label="Clear "></v-radio>
  </v-radio-group>


<div>
  <v-checkbox-group v-model="selectedItem">

<v-checkbox label="Australia"></v-checkbox>
<v-checkbox label="Canada"
    style="margin-top: -10px"></v-checkbox>
<v-checkbox label="Hongkong"
    style="margin-top: -10px"></v-checkbox>
<v-checkbox label="Indonesia"
    style="margin-top: -10px"></v-checkbox>
<v-checkbox label="Japan"
    style="margin-top: -10px"></v-checkbox>
<v-checkbox label="Korea"
    style="margin-top: -10px"></v-checkbox>
<v-checkbox label="Malaysia"
    style="margin-top: -10px"></v-checkbox>
</v-checkbox-group>
</div>





    <h3>Vue Js Calculate age from given date</h3>
    <div id="AgeCalculate">


      <label>Enter your birthdate:</label>
        
        <v-text-field outlined dense type="date" v-model="birthDate" @input="calculateAge(birthDate)"> </v-text-field>

    </div>

    <v-text-field  color="success" :value="years" > </v-text-field>


    <!-- <p v-if="birthDate">Your age is {{ years }} years, {{ months }} months, and {{ days }} days</p> -->
  </v-app>

</template>


<script >

export default {
   
    data() {
        return {
            birthDate: '',
            years: null,
            months: null,
                days: null,
                
                    selectedItem: '',

        };
    },


    methods: {

             /*  unCheck() {
                    this.selectedItem = null
                },
 */
 clearbai(){

                  this.selectedItem = null

                },



          calculateAge(birthDate) {

            if (!birthDate) return;

            const currentDate = new Date();
            if (new Date(birthDate) > currentDate) {
                this.birthDate = null
                this.years = null;
                this.months = null;
                this.days = null;
                alert('Invalid Date of Birth')
            }

            const diffTime = currentDate - new Date(birthDate);
            const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
            this.years = Math.floor(totalDays / 365.25);
            this.months = Math.floor((totalDays % 365.25) / 30.4375);
            this.days = Math.floor((totalDays % 365.25) % 30.4375);

        }
    }

  }

</script>