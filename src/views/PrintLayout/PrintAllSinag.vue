<template>
<v-app>


    <div id="btn-group"  >
       <v-btn color="green" class="btn-group" @click="print"> PRINT</v-btn>
    </div>

    <div  class=" d-flex-row justify-center mx-auto" id="print-area">

       
  <img class="mx-auto" style="width: 15%;" src="@/assets/tagum.png" alt="tagum" /> 
      
           
  <p class="text-justify mx-auto mt-1" >Province of Davao del Norte</p>
  <p class="font-weight-bold mx-auto mt-n5">Office of Tagum City Youth Development</p>





<div class="d-flex-row  mx-auto">

<h2 class="py-n9">All Sinag Members</h2>

<v-data-table
:headers="headers"

:items="desserts"
:hide-default-footer="true"
>


</v-data-table>
</div>

    
</div>





</v-app>
</template>


<script>

export default {
    data() {
        return {
            headers:[
          
            { text: 'First Name', value: 'first_name' },
            { text: 'Last Name', value: 'last_name' },
            { text: 'Address', value: 'address' },
            { text: 'Contact_No', value: 'contact_no' },
            ],

    desserts:[
      {
        
        "first_name": "Joemarie",
        "last_name": "Rendon",
        "address": "Purok 2-A Asuncion Davao",
        "contact_no": "09518110301"
    },

    {
        
        "first_name": "Pablo",
        "last_name": "Escobar",
        "address": "Tagum Manila Philippines",
        "contact_no": "09518110301"
    },



    {
        
        "first_name": "Lebron",
        "last_name": "James",
        "address": "America Purok 1 Apokon",
        "contact_no": "09518110301"
    },


    
    {
        
        "first_name": "Stephen",
        "last_name": "Curry",
        "address": "America Purok 2 Bincungan",
        "contact_no": "09518110301"
    },


    {
       
        "first_name": "Stephen",
        "last_name": "Curry",
        "address": "America Purok 2 Bincungan",
        "contact_no": "09518110301"
    },


    {
      
        "first_name": "Stephen",
        "last_name": "Curry",
        "address": "America Purok 2 Bincungan",
        "contact_no": "09518110301"
    },



    {
       
        "first_name": "Wellie",
        "last_name": "Garte",
        "address": "America Purok 2 Bincungan",
        "contact_no": "09518110301"
    },


    {
       
        "first_name": "Jograd",
        "last_name": "mahusay",
        "address": "America Purok 2 Bincungan",
        "contact_no": "09518110301"
    },



    {
       
        "first_name": "Neil",
        "last_name": "Roble",
        "address": "America Purok 2 Bincungan",
        "contact_no": "09518110301"
    },


    {
      
        "first_name": "Honey Marjie",
        "last_name": "Curay",
        "address": "America Purok 2 Bincungan",
        "contact_no": "09518110301"
    },


    {
       
        "first_name": "Rey",
        "last_name": "Alcala",
        "address": "America Purok 2 Bincungan",
        "contact_no": "09518110301"
    },


    
    {
     
        "first_name": "Jhon",
        "last_name": "Dewe",
        "address": "America Purok 2 Bincungan",
        "contact_no": "09518110301"
    },


        
    {
        
        "first_name": "Jhon",
        "last_name": "Dewe",
        "address": "America Purok 2 Bincungan",
        "contact_no": "09518110301"
    },

    {
      
        "first_name": "Jhon",
        "last_name": "Dewe",
        "address": "America Purok 2 Bincungan",
        "contact_no": "09518110301"
    },


    {
       
        "first_name": "Jhon",
        "last_name": "Dewe",
        "address": "America Purok 2 Bincungan",
        "contact_no": "09518110301"
    },


    {
       
        "first_name": "Jhon",
        "last_name": "Dewe",
        "address": "America Purok 2 Bincungan",
        "contact_no": "09518110301"
    },


    {
        
        "first_name": "Jhon",
        "last_name": "Dewe",
        "address": "America Purok 2 Bincungan",
        "contact_no": "09518110301"
    },


    {

        "first_name": "Jhon",
        "last_name": "Dewe",
        "address": "America Purok 2 Bincungan",
        "contact_no": "09518110301"
    }

        ]

        }

    },

    created() {

        this.getUsers();
    },


    methods: {
        initialize() {
    

        },



        print() {
            if (window)
                window.print();

        },

       async getUsers() {
            let res = await fetch('http://192.168.8.37:8080/users.json');
            res = await res.json();
            this.users = res;
         /*    console.log("users=> ", this.users); */

        } 
    }

}
</script>


<style>
@media print {

    #print-area {
        margin: 0 !important;
        width: 100% !important;
    }


    #btn-group {
        display: none !important;

    }

    @page {
        size: Letter;

    }

}
</style>