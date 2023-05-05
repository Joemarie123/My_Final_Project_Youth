<template>    
  <v-app>
    <Navbar/>
<v-row>

    <v-col cols=12 lg="4" md="12" sm="12" class="mt-3">
      
   <div class="text-center ">
  <v-alert dense dark color="blue darken-3">
    Enumerator's Record<strong> </strong>

   </v-alert> 
   </div>


  <v-col cols="12" md="12" lg="12" sm="12" >
    
    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details
                  autofocus outlined rounded dense></v-text-field>
           

           
    <v-data-table @click='sinag(item-key)' 
      id="mytable"
   
      v-model="selected"
      :headers="headers"
      :items="desserts"
      :items-per-page="10"
      class="  elevation-1"
      item-key="name"
    
      :hide-default-footer="true"
      :hide-default-header="true"
      tile
      :search="search"   
    >

    <template v-slot:item.image="{ item }">
               <v-avatar size="40">
                              <img v-bind:src="`/${item.image}`" alt="">
                      </v-avatar>
</template>

    <template slot="item.actions" slot-scope="props" >

      <v-btn class="pa-2" color="green" dark @click="()=>sinagmembro(props.item)">
       Record List
      </v-btn>
  
    
    </template>
 
    </v-data-table>
  </v-col>


  </v-col>


<v-col cols="12" lg="8" md="12" sm="12"  >
    <!-- Another data Table -->

    <v-data-table :headers="headers_recordlist" :items="recordlist" sort-by="calories"  class="btn-hover color-1 elevation-1 pa-2" 
        :search="searchyouthrecord"
        :hide-default-footer="true"
        @click:row="redirecttoformregistration"
        
        >
  
        <template v-slot:[`item.name`]="{ item }">
  
          <v-avatar size="40" class="mr-3">
            <img v-bind:src="`/${item.image}`" alt="">
          </v-avatar>
  
          {{ item.name }}
  
        </template>
  
  
        <template v-slot:top>
          <v-toolbar rounded flat color="blue darken-3" class=" btn-hover color-1 elevation-1">
  
            <div class="d-flex-column">
            <p style="color:white;" class="mt-7">Total Youth</p>
            <p style="color:white;" class="mt-n4" > {{rowCount}}</p>
              </div>

            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
  
  
            <v-text-field v-model="searchyouthrecord" dark outlined dense rounded append-icon="mdi-magnify" label="Search" single-line hide-details
              ></v-text-field>
  
  
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
  
   
  
        </template>
  
  
      </v-data-table>




    </v-col>

    </v-row>

  </v-app>


</template>
<script>

import Navbar from '@/components/Navbar'
export default {
  name: 'App',

  components: {
   /*  LogInForm, */
  /*  Navbar, */
   /* YouTherecord, */
   Navbar,
   /* Footer */
  },

  data () {
    return {
     
      model: 'no',
      
      dialog_for_input_hours:false,
      dialog:false,
      dialog_sample:false,
      

      editedItem:[


      ],


      selected:[], 
     
      search: '',
      searchyouthrecord: '',

      headers: [
      { text: 'Image', value: 'image',  align: 'center' },

        {
          text: 'Full Name',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: 'Actions', value: 'actions',  align: 'center', sortable: false },
       
      ],


      headers_recordlist: [

    
        { text: "Full Name", value: "name",
         align: 'start', sortable: false, }, { text: "Email",
           value: "email" }, { text: "Mobile Number", value: "mobilenum", 
           align: ' d-none d-xl-table-cell' }, { text: "Age", value: "age", align: ' d-none d-xl-table-cell' }, 
           { text: "Barangay & Purok", value: "barangay" },
           { text: "Date Survey", value: "datesurvey" }

      ],
   
 

        
      desserts: [
        {
            
          name: 'Rodel Casimina',
          sinagmember:true,
          image: 'EnumeratorPic/rodel.jpg'
       
        },
        {

          name: 'Lovely Fuerzas',
          sinagmember:true,
          image: 'EnumeratorPic/LovelyFuerzas.jpg'
         
        },
        {
          name: 'Curay Honey Marjie',
          sinagmember:false,
          image: 'profilepic/curay.png'
        
        },
        {
          name: 'Pablo Escobar Roland',
          sinagmember:false,
          image: 'profilepic/escobar.png'
          
         
        },
        {
          name: 'NEil Arms Trong',
          sinagmember:false,
          image: 'profilepic/armstrong.png'

          

        },
        {
          name: 'Jelly bean Del Cruz',
          sinagmember:true,
          image: 'profilepic/Screenshot_1.png'
         
        },
        {
          name: 'Mahusay Jograd JOGZ',
          sinagmember:true,
          image: 'profilepic/jogz.jpg'
         
        },
        {
          name: 'Benjamin Roble',
          sinagmember:true,
          image: 'profilepic/Neil.jpg'
        
        },
        {
          name: 'LeBron Raymone James',
          sinagmember:true,
          image: 'profilepic/lebron.png'


        },
        {
          name: 'Wardell Stephen Curry II',
          sinagmember:false,
          image: 'profilepic/curry.png'

        },

        {
          name: 'Kevin Wayne Durant',
          sinagmember:true,
          image: 'profilepic/durant.png'

        },

        {
          name: 'James Edward Harden Jr.',
          sinagmember:true,
          image: 'profilepic/harden.png'

          
        },
        {
          name: 'Albert Einstein',
          sinagmember:true,
          image: 'profilepic/albert.png'

        },
        {
          name: 'Antonio Narciso Luna de San Pedro',
          sinagmember:true,
          image: 'profilepic/luna.png'
        },

        {
          name: 'Antonio Narciso Luna de San Pedro',
          sinagmember:true,
          image: 'profilepic/luna.png'
        },

      ],


      recordlist:[
  
  {
    image: 'profilepic/jom.jpg',
    name: 'Joemarie Rendon Dela Cruz',
    genpref: 'Lesbian',
    gender: 'Male',
    tribe: 'Mandaya',
    email: 'joemarie27@gmail.com',
    mobilenum: '09518110301',
    age: '20 yrs old',
    barangay: 'Apokon - Purok 2',

    civil_status: 'Married',
    educational_level: 'BSCS Graduated',
    birthday: 'July 27,1995',
    ethnicity: 'Bisaya',
    datesurvey: 'February 4,2022',
    voters: 'Yes',



    eventname: 'Tagum Lighting of Christmas tree',
    eventdate: 'December 4,2022',
    eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
    sinag: 'Non-Sinag Member',

    disability: "Mental/Intellectual"

  },
  {
    image: 'profilepic/escobar.png',
    name: 'Pablo Emilio Escobar Gaviria',
    genpref: 'Gay',
    gender: 'Male',
    tribe: 'Manobo',
    email: 'escobar227@gmail.com',
    mobilenum: '09522321301',
    age: '20 yrs old',
    barangay: 'Liboganon - Purok 1',

    sinag: 'Sinag Member',

    civil_status: 'Married',
    educational_level: 'Civil Engineering Graduated',
    birthday: 'August 27,1952',
    ethnicity: 'Mandaya',
    datesurvey: 'january 4,2022',
    voters: 'Yes',



    eventname: 'Youth Event Basket Ball Men',
    eventdate: 'January 4,2023',
    eventdetails: 'The Basketball Tournament is an open-application, single-elimination tournament played each summer in Tagum City',

    disability: "Hearing Disability"


  },
  {
    image: 'profilepic/jogz.jpg',
    name: 'Jograd Mahusay Smith',
    gender: 'Male',
    genpref: 'Lesbian',
    tribe: 'Davawenyo',
    email: 'jogs123@gmail.com',
    mobilenum: '09518110301',
    age: '30 yrs old',
    barangay: 'Magugpo West- Purok 4',

    sinag: 'Sinag Member',



    civil_status: 'Married',
    educational_level: 'Computer Engineering Graduated',
    birthday: 'December 27,1953',
    ethnicity: 'Mandaya',
    datesurvey: 'December 5,2022',
    voters: 'Yes',



    eventname: 'Youth Volley Ball Apokon Vs. Bincungan',
    eventdate: 'February 8,2023',
    eventdetails: 'The Volley Ball Tournament is an open-application, single-elimination tournament played each summer in Tagum City',

    disability: "Psychological Disability"

  },
  {

    sinag: 'Sinag Member',


    image: 'profilepic/reyalcala.png',
    name: 'Rey Alcala Reynaldo',
    gender: 'Male',
    genpref: 'Transgender',
    tribe: 'Cebuano',
    email: 'rerey@gmail.com',
    mobilenum: '09518110301',
    age: '24 yrs old',
    barangay: 'Magugpo East - Purok 1',


    civil_status: 'Single',
    educational_level: 'BSIT Graduated',
    birthday: 'December 27,1997',
    ethnicity: 'Bisaya',
    datesurvey: 'December 5,2021',
    voters: 'Yes',

    eventname: 'Youth Event Sepak takraw',
    eventdate: 'March 11,2022',
    eventdetails: 'Sepak Takraw is a foot volleyball game where players touch as well as handle the ball using only their feet, knee, chest and head.',


    disability: "Visual Diability"

  },
  {
    image: 'profilepic/armstrong.png',
    name: 'Neil Alden Armstrong',
    gender: 'Female',
    genpref: 'Gay',
    tribe: 'Mandaya',
    email: 'amrstrong224@gmail.com',
    mobilenum: '09518110301',
    age: '30 yrs old',
    barangay: 'Pagsabangan - Purok 3',

    civil_status: 'Single',
    educational_level: 'BSIT Graduated',
    birthday: 'December 27,1997',
    ethnicity: 'Bisaya',
    datesurvey: 'December 5,2023',
    voters: 'Yes',

    sinag: 'Non-Sinag Member',


    eventname: 'Tagum Youth Dota 2 Tournament',
    eventdate: 'December 4,2022',
    eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',

    disability: "Speech Impairement"


  },
  {
    image: 'profilepic/Screenshot_1.png',
    name: 'Jelly bean Del Cruz',
    gender: 'Female',
    genpref: 'gay',
    tribe: 'Kamayo',
    email: 'joemarie27@gmail.com',
    mobilenum: '09518110301',
    age: '20 yrs old',
    barangay: 'San Isidro - Purok 2',

    civil_status: 'Single',
    educational_level: 'BSIT Graduated',
    birthday: 'December 27,1997',
    ethnicity: 'Bisaya',
    datesurvey: 'December 5,2021',
    voters: 'Yes',

    sinag: 'Sinag Member',


    eventname: 'Tagum Youth Mobile Legends Tournament',
    eventdate: 'December 4,2022',
    eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',


    disability: "Mental/Intellectual"
  },
  {
    image: 'profilepic/lebron.png',
    name: 'LeBron Raymone James',
    gender: 'Male',
    genpref: 'Bisexual',
    tribe: 'Kamayo',
    email: 'joemarie27@gmail.com',
    mobilenum: '09518110301',
    age: '20 yrs old',
    barangay: 'Apokon - Purok 1',

    civil_status: 'Single',
    educational_level: 'BSIT Graduated',
    birthday: 'December 27,1997',
    ethnicity: 'Bisaya',
    datesurvey: 'December 5,2021',
    voters: 'Yes',

    sinag: 'Sinag Member',


    eventname: 'Tagum Youth Soccer Tournament',
    eventdate: 'December 4,2022',
    eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',

    disability: "Disability due to chronic illness"



  },
  {

    image: 'profilepic/curry.png',
    name: 'Wardell Stephen Curry II',
    gender: 'Male',
    genpref: 'gay',
    tribe: 'Kamayo',
    email: 'joemarie27@gmail.com',
    mobilenum: '09518110301',
    age: '20 yrs old',
    barangay: 'Apokon - Purok 5',

    civil_status: 'Single',
    educational_level: 'BSIT Graduated',
    birthday: 'December 27,1997',
    ethnicity: 'Bisaya',
    datesurvey: 'December 5,2022',
    voters: 'Yes',

    sinag: 'Non-Sinag Member',


    eventname: 'Tagum Sayawan nang Kabatan-onan',
    eventdate: 'December 4,2022',
    eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',

    disability: "Orthopaedic (Musculoskeletal) Disability"


  },
  {
    image: 'profilepic/curay.png',
    name: 'Curay Honey Marjie',
    gender: 'Female',
    genpref: 'Bisexual',
    tribe: 'Kamayo',
    email: 'joemarie27@gmail.com',
    mobilenum: '09518110301',
    age: '20 yrs old',
    barangay: 'Apokon - Purok 2',

    civil_status: 'Single',
    educational_level: 'BSIT Graduated',
    birthday: 'December 27,1997',
    ethnicity: 'Bisaya',
    datesurvey: 'December 5,2022',
    voters: 'Yes',

    sinag: 'Non-Sinag Member',


    eventname: 'Tagum Youth Golf Event ',
    eventdate: 'December 4,2022',
    eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',

    disability: "Learning Disability"


  },

  {
    name: 'Jesica Rendon Caballes',
    gender: 'Female',
    genpref: 'lesbian',
    tribe: 'Kamayo',
    email: 'jess223@gmail.com',
    mobilenum: '09518110301',
    age: '25 yrs old',
    barangay: 'Apokon - Purok 6',
    image: 'profilepic/jesica.jpg',

    civil_status: 'Single',
    educational_level: 'BSIT Graduated',
    birthday: 'December 27,1997',
    ethnicity: 'Bisaya',
    datesurvey: 'December 5,2022',
    voters: 'Yes',

    sinag: 'Non-Sinag Member',


    eventname: 'Tagum Lighting of Christmas tree',
    eventdate: 'December 4,2022',
    eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',

    disability: "Mental/Intellectual"


  },


],


    }
  },

  created() {
      this.selected_event.push(this.listevent.find(e => e.id == this.$route.params.id));
     /*  this.initialize() */
      // console.log("selected=>", this.selected);
      // console.log("selected=>", this.$route.params.id);
  },


 computed: {
  tableLength: function() {
      return this.desserts.length;
    },

      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },


      filteredItems() {
      return this.recordlist.filter(item =>
        item.name.toLowerCase().includes(this.searchyouthrecord.toLowerCase()) ||
        item.email.toLowerCase().includes(this.searchyouthrecord.toLowerCase()) ||
        item.mobilenum.toLowerCase().includes(this.searchyouthrecord.toLowerCase()) ||
        item.age.toLowerCase().includes(this.searchyouthrecord.toLowerCase()) ||
        item.barangay.toLowerCase().includes(this.searchyouthrecord.toLowerCase()) ||
        item.datesurvey.toLowerCase().includes(this.searchyouthrecord.toLowerCase()) 

      );
    },
    rowCount() {
      return this.filteredItems.length;
    }

    },


    


 methods:{
  redirecttoformregistration (item) {
            
            /*   this.navigateTo('/SelectYouth');  */
    
              this.$router.push({ name: 'RegisterNew', params: { id: item.id } })
            },

 /*    initialize() {
        this.
        }
 */
 },

 
}

</script>


<style>

@media screen and (max-width: 1420px) and (min-width: 1283px) 

{

  .data_table_1{

    height:640px;
    
  }


}

@media screen and (max-width: 1283px) 

{

  .data_table_1{

    height:710px;
    
  }


}


</style>