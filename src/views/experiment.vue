
<template>
  <v-app>
    <h3>Vue Js Calculate age from given date</h3>
    <div id="AgeCalculate">


      <label>Enter your birthdate:</label>
        
        <v-text-field outlined dense type="date" v-model="birthDate" @input="calculateAge(birthDate)"> </v-text-field>

    </div>

    <v-text-field v-if="birthDate" color="success" :value="years" > </v-text-field>


    <!-- <p v-if="birthDate">Your age is {{ years }} years, {{ months }} months, and {{ days }} days</p> -->
  </v-app>






</template>


<script>

export default {
   
    data() {
        return {
            birthDate: '',
            years: null,
            months: null,
            days: null

        };
    },


    methods: {

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