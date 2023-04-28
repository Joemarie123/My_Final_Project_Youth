<template>
  <v-app>
  
    <v-data-table :headers="headers" :items="desserts" sort-by="calories"  class="btn-hover color-1 elevation-1" dark
      :search="search">

      <template v-slot:[`item.name`]="{ item }">

        
          <img  width="13" v-bind:src="`/${item.sinagmark}`" >
       
        <v-avatar size="40" class="ml-1">
          <img v-bind:src="`/${item.image}`" alt="">
        </v-avatar>

        {{ item.name }}

      </template>
      

      <template v-slot:[`item.barangay`]="{ item }">

        {{item.barangay}} , {{ item.purok }}

      </template>

      <template v-slot:top>
        <v-toolbar flat dark class=" btn-hover color-1 elevation-1">


          <v-toolbar-title>{{ msg }}</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>


          <v-text-field v-model="search" outlined dense  rounded append-icon="mdi-magnify" label="Search" single-line hide-details
            dark></v-text-field>

            <v-btn color="green" class="mx-2"  dark @click="$router.push({ name: 'PrintAllSinag' })">
              Print
             </v-btn>
          <v-dialog v-model="dialog" max-width="700px" tile>
            <!--  
              <div class="text-center" >
              
              <v-alert
              dense
              dark
            color="blue"
               >
           EVENTS HISTORY <strong> </strong>
       
              </v-alert>

      
            </div>
             -->
            <v-card>



              <v-container>
                <div class="text-center ">

                  <v-alert dense dark color="blue darken-3">
                    EDIT USER PROFILE <strong> </strong>

                  </v-alert>

                </div>

                <v-row>

                  <v-col cols="10" sm="6" md="4"   offset-lg="5"  offset-sm="2">

                    <v-avatar size="90" style="margin-left: 100px;" class="ml-md-n2">
                      <img v-bind:src="`/${editedItem.image}`" alt="">
                    </v-avatar>


                  </v-col>
                </v-row>


                <v-row>

                  <v-col offset-sm="0" offset-md="4" cols="10" sm="20" md="5"  >

                    <v-text-field class="ml-md-n6 centered-input"  outlined dense   v-model="editedItem.name" label="Full Name"></v-text-field>

                  </v-col>
                </v-row>


                <v-row>

                  <v-col cols="10" sm="6" md="4">


                    <v-text-field class="mt-n6" outlined dense v-model="editedItem.educational_level" label="Educational Level"></v-text-field>

                  </v-col>

                  <v-col cols="10" sm="6" md="4" class="mt-n6">
                    <v-text-field outlined dense v-model="editedItem.email" label="Email"></v-text-field>
                  </v-col>

                  <v-col cols="10" sm="6" md="4" class="mt-n6">
                    <v-text-field outlined dense v-model="editedItem.mobilenum" label="Mobile Number"></v-text-field>
                  </v-col>

                  <v-col cols="10" sm="6" md="3" class="mt-n6">
                    <v-text-field outlined dense label="Birth Day"  v-model="editedItem.birthday" type="date" required   ></v-text-field>
                  </v-col>

              
                  <v-col cols="10" sm="6" md="1" class="mt-n8">
                    <v-text-field readonly class="centered-input" v-model="editedItem.age" label="Age"></v-text-field>
                  </v-col>


                  <v-col cols="10" sm="6" md="4" class="mt-n6">
                    <v-select
                    outlined dense
                     v-model="editedItem.barangay"
                     :items="['Apokon', 'Bincungan', 'Busaon', 'Canocotan', 'Cuambogan', 'La Filipina', 'Liboganon', 'Madaum', 'Magdum', 'Mankilam', 'New Balamban', 'Nueva Fuerza', 'Pagsabangan', 'Pandapan', 'Magugpo Poblacion', 'San Agustin', 'San Isidro', 'San Miguel (Camp 4)', 'Visayan Village', 'Magugpo East', 'Magugpo North', 'Magugpo South', 'Magugpo West']"
                    label="Barangay"></v-select>

                  </v-col>

                  <v-col cols="10" sm="6" md="4" class="mt-n6">
                    <v-select
                    outlined dense
                     v-model="editedItem.purok"
                     :items="['Purok 1-A', 'Purok 1-B' , 'Purok 1-C' , 'Purok 1-D', 'Purok 2-A', 'Purok 2-B' , 'Purok 3-C' , 'Purok 3-D']"
                    label="Purok"></v-select>

                  </v-col>



                  <v-col cols="10" sm="6" md="4" class="mt-n6">
                    <v-text-field outlined dense v-model="editedItem.ethnicity" label="Ethnicity"></v-text-field>
                  </v-col>


                  <v-col cols="10" sm="6" md="4" class="mt-n6">
                    <v-select
                    outlined dense
                     v-model="editedItem.gender"
                     :items="['Male', 'Female']"
                    label="gender"></v-select>
                  </v-col>

                  <v-col cols="10" sm="6" md="4" class="mt-n6">
                    <v-select
                    outlined dense
                     v-model="editedItem.civil_status"
                     :items="['Single', 'Married', 'Widow/er', 'Divorced', 'Common-law/Live-in', 'Unknown']"
                    label="Civil Status"></v-select>
                  </v-col>

                </v-row>

                <v-row>

                  <v-col cols="10" sm="12" md="12" class="mt-n5">

                    <v-btn color="green" class="pa-2" outlined dark @click="dialog = false">
                      Update
                    </v-btn>

                    <v-btn color="red" class="pa-2 ml-2" outlined dark @click="dialog = false">
                      Close
                    </v-btn>
                  </v-col>

                </v-row>
              </v-container>





            </v-card>
          </v-dialog>

          

          <!-- <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <div class="text-center ">
              <v-alert dense dark color="blue darken-3">
                Are you sure you want to delete this item? <strong> </strong>

                </v-alert>
              </div>
           
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn  outlined color="red "  @click="closeDelete">Cancel</v-btn>
                <v-btn outlined color="blue "  @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog> -->
        </v-toolbar>

        <v-dialog v-model="dialog_events_attended" max-width="1000px" tile>
          <v-card>

          <!--   <v-btn color="green" @click="sumField" >CLICK ME</v-btn> -->
            <!--  <div class="text-center ">

              <v-alert dense dark color="blue darken-3">
                EVENTS HISTORY <strong> </strong>

              </v-alert>

            </div> -->

            <v-container>
              <v-row>
                <!--   <v-col
                        cols="8 "
                        sm="12"
                        md="12"
                      >
                        <v-text-field
                        v-model="editedItem.name"
                          label="name"
                        ></v-text-field>
                      </v-col>
                 -->
                <v-col cols="12 " sm="12" md="12">
                  <v-data-table  class="pa-md-6" :headers="headers_event" :hide-default-footer="true" :items="filteredItems"
                    :search="search_events"
                    
                    >
                    <template v-slot:top>


                      <v-card flat dark color="blue darken-3" class="ma-3 ">

                        <v-row>

                          <v-col cols="12" md="1">
                            <v-avatar size="55" class="ml-6 mt-2">
                              <img v-bind:src="`/${editedItem.image}`">
                            </v-avatar>
                          </v-col>

                          <v-row>

                          <v-col cols="12" sm="11" md="12">
                           <!--  <v-text-field class="some-style ml-6" v-model="editedItem.name" flat readonly></v-text-field> -->
                            <p class="ml-6 mt-5">{{ editedItem.name }} </p>
                      
                          </v-col>


                          <v-col cols="12" sm="11" md="5" class="ml-6 mt-n7">
                       <p > <!-- Total Hours: {{ sumField('hoursearned') }} -->
                        Total Hours: {{total}}

                      </p>
                      
                          </v-col>

                        </v-row>


                          <v-col cols="11" md="5">
                            <v-text-field  v-model="search_events" class="mt-md-3 ml-2" append-icon="mdi-magnify"
                              label="Search" single-line hide-details outlined rounded dense></v-text-field>
                          </v-col>

                          <v-col cols="12" md="1">
                            <v-divider class="mx-4" vertical inset></v-divider>


                            <v-dialog  max-width="550px" persistent>
                              <template v-slot:activator="{ on, attrs }">
                                <v-btn outlined color="red " class="mt-n1 pa-1 ml-n2" dark
                                  @click="dialog_events_attended = false">
                                  Close
                                </v-btn>
                              </template>
                            </v-dialog>

                          </v-col>



                        </v-row>


                      </v-card>


<!-- 
                      <v-dialog v-model="dialogDelete" max-width="450px">
                        <v-card>
                          <h3 class="text-center">Are you sure to delete this?</h3>
                          <v-divider color="success"></v-divider>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn outlined color="orange darken-1" text @click="closeDelete">Cancel</v-btn>
                            <v-btn outlined color="green darken-1" text @click="deleteItemConfirm">OK</v-btn>
                            <v-spacer></v-spacer>
                          </v-card-actions>
                        </v-card>
                      </v-dialog> -->




                    </template>
                    <template v-slot:item.actions="{ item }">

            

                      <v-icon small class="mr-2" @click="viewItem(item)">
                        mdi-eye
                      </v-icon>
                      <v-icon small class="mr-2" @click="editItem(item)">
                        mdi-pencil
                      </v-icon>

                      

                  <!--     <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon> -->
                    </template>
                    <template slot="item.switch1" slot-scope="{ item }">
                      <v-switch v-model="item.switch1" color="success" dense></v-switch>
                    </template>
                  </v-data-table>

                </v-col>


              </v-row>
            </v-container>
          </v-card>



        </v-dialog>



        <v-dialog   v-model="dialog_viewProfile" max-width="660px" persistent   >
          <v-card class="hidescrollbar">
            <v-container >
              <div class="text-center ">

                <v-alert dense dark color="blue darken-3">
                  PERSONAL INFORMATION <strong> </strong>

                </v-alert>

               <!--  <v-col cols="10" lg="1" style="margin-top: -63px; margin-left: 570px;">
                  <v-btn text color="red" dark @click="dialog_viewProfile = false">
                    <v-icon>
                      mdi-comment-remove-outline
                    </v-icon>
                  </v-btn>
                </v-col> -->

              </div>


              <v-row>



                <v-col cols="12" lg="6">

                  <v-col cols="10" lg="12" class="sinagkabai_dakoscreen ">
                    <v-text-field class=" font-weight-bold centered-input" style="margin-top: -18px; margin-left: -38px;"
                      v-model="editedItem.sinag" flat solo readonly>

                    </v-text-field>
                      
                  </v-col>



                  <v-col cols="10" lg="12" class=" imagemobile"  >
                    <v-avatar style="margin-top:-50px; margin-left: 18px;" size="100"  class="ml-11 mr-7">
                      <img v-bind:src="`/${editedItem.image}`" alt="">
                    </v-avatar>
                  </v-col>



                  <v-col cols="12" lg="10" sm="12" md="12" align-self="center">
                    <v-text-field class="font-weight-medium centered-input" dense  background-color="#00695C"
                      dark v-model="editedItem.name" flat solo readonly></v-text-field>
                  </v-col>




                  <!--  <v-col cols="6">
              <p class="ml-n9"><b>Address:</b></p>
              

            </v-col> -->
                  <v-col cols="10" lg="6">
                    <v-text-field style="margin-left: -12px; margin-top: -38px;" flat solo readonly value="Date Survey:"
                      class="font-weight-bold"></v-text-field>
                  </v-col>

                  <v-col cols="10" sm="12" lg="10">
                    <v-text-field style="margin-top: -103px; margin-left: 95px;" v-model="editedItem.datesurvey" flat solo
                      readonly></v-text-field>
                  </v-col>

                  <v-col cols="10" lg="5">
                    <v-text-field style="margin-left: -12px; margin-top: -95px;" flat solo readonly value="Civil Status:"
                      class="font-weight-bold"></v-text-field>
                  </v-col>

                  <v-col cols="10" lg="10">
                    <v-text-field style="margin-top: -120px; margin-left: 94px;" v-model="editedItem.civil_status" flat
                      solo readonly></v-text-field>
                  </v-col>


                  <v-col cols="10" lg="5">
                    <v-text-field style="margin-left: -10px; margin-top: -112px;" flat solo readonly value="Gender:"
                      class="font-weight-bold"></v-text-field>
                  </v-col>

                  <v-col cols="10" lg="6">
                    <v-text-field style="margin-left: -12px; margin-top: -105px;" flat solo readonly value="Active Status:"
                      class="font-weight-bold"></v-text-field>
                  </v-col>

                  <v-col cols="10" lg="12">
                    <v-text-field style="margin-top: -160px; margin-left: 93px;" v-model="editedItem.gender" flat solo
                      readonly></v-text-field>

                  </v-col>

                  <v-col cols="10" lg="12">
                    <v-text-field style="margin-top: -153px; margin-left: 100px;" v-model="editedItem.activestatus" flat solo
                      readonly></v-text-field>

                  </v-col>


                </v-col>

                <v-col cols="12" lg="6">




                  <!--  <v-col cols="6">
              <p class="ml-n9"><b>Address:</b></p>
              
            </v-col> -->

                  <v-col cols="10" lg="4">
                    <v-text-field style="margin-bottom: -20px; margin-left: -70px;" class="font-weight-bold" color="white"
                      flat solo readonly value=":"></v-text-field>
                  </v-col>

                  <v-col cols="10" lg="12">
                    <v-text-field style="margin-top: -75px; margin-left:   30px;" color="white" flat solo
                      readonly></v-text-field>
                  </v-col>


                  <v-col cols="10" lg="5" class="birthdayname" >
                    <v-text-field class="font-weight-bold" style="margin-left: -70px; margin-top: -120px;" flat solo
                      readonly value="Birth Day:"></v-text-field>
                  </v-col>

               <!--    <v-col cols="10" lg="5">
                    <v-text-field class="font-weight-bold" :style="`margin-left: ${ margin-left < 600 ? 125 : -700}px`" flat solo
                      readonly value="Birth Day:"></v-text-field>
                  </v-col>
 -->

                  <v-col cols="10" lg="12" class="birthdayvalue">
                    <v-text-field style="margin-top: -144px; margin-left: 30px;" v-model="editedItem.birthday" flat solo
                      readonly></v-text-field>
                  </v-col>

                  <v-col cols="10" lg="5" class="agevalue">
                    <v-text-field class="font-weight-bold" style="margin-left: -70px; margin-top: -135px;" flat solo
                      readonly value="Age:"></v-text-field>
                  </v-col>

                  <v-col cols="10" lg="12" class="agevalue">
                    <v-text-field style="margin-top: -158px; margin-left: 30px;" v-model="editedItem.age" flat solo
                      readonly></v-text-field>
                  </v-col>

                  <v-col cols="10" lg="5" class="agevalue">
                    <v-text-field class="font-weight-bold" style="margin-left: -70px; margin-top: -150px;" flat solo
                      readonly value="Barangay:"></v-text-field>
                  </v-col>

                  <v-col cols="10" lg="12" class="agevalue">
                    <v-text-field style="margin-top: -175px; margin-left: 30px;" v-model="editedItem.barangay" flat solo
                      readonly></v-text-field>
                  </v-col>

                  <v-col cols="10" lg="5" class="agevalue">
                    <v-text-field class="font-weight-bold" style="margin-left: -70px; margin-top: -160px;" flat solo
                      readonly value="Purok:"></v-text-field>
                  </v-col>

                  <v-col cols="10" lg="12" class="agevalue">
                    <v-text-field style="margin-top: -185px; margin-left: 30px;" v-model="editedItem.purok" flat solo
                      readonly></v-text-field>
                  </v-col>




                  <v-col cols="10" lg="5" class="email_padong_education">
                    <v-text-field class="font-weight-bold" style="margin-left: -70px; margin-top: -170px;" flat solo
                      readonly value="Email:"></v-text-field>
                  </v-col>

                  <v-col cols="10" lg="12" class="email_padong_education">
                    <v-text-field style="margin-top: -195px; margin-left: 30px;" v-model="editedItem.email" flat solo
                      readonly></v-text-field>
                  </v-col>



                  <v-col cols="10" lg="5" class="email_padong_education">
                    <v-text-field class="font-weight-bold" style="margin-left: -70px; margin-top: -185px;" flat solo
                      readonly value="Cell Phone :"></v-text-field>
                  </v-col>

                  <v-col cols="10" lg="12" class="email_padong_education">
                    <v-text-field style="margin-top: -208px; margin-left: 30px;" v-model="editedItem.mobilenum" flat solo
                      readonly></v-text-field>
                  </v-col>

                  <v-col cols="10" lg="5" class="email_padong_education">
                    <v-text-field class="font-weight-bold" style="margin-left: -70px; margin-top: -200px;" flat solo
                      readonly value="Voters :"></v-text-field>
                  </v-col>

                  <v-col cols="10" lg="12" class="email_padong_education">
                    <v-text-field style="margin-top: -223px; margin-left: 30px;" v-model="editedItem.voters" flat solo
                      readonly></v-text-field>
                  </v-col>


                  <v-col cols="10" lg="5" class="email_padong_education">
                    <v-text-field class="font-weight-bold" style="margin-left: -70px; margin-top: -210px;" flat solo
                      readonly value="Ethnicity :"></v-text-field>
                  </v-col>

                  <v-col cols="10" lg="12" class="email_padong_education">
                    <v-text-field style="margin-top: -235px; margin-left: 30px;" v-model="editedItem.ethnicity" flat solo
                      readonly></v-text-field>
                  </v-col>


                  <v-col cols="10" lg="5" class="email_padong_education">
                    <v-text-field class="font-weight-bold" style="margin-left: -70px; margin-top: -210px;" flat solo
                      readonly value="Education:"></v-text-field>
                  </v-col>


                  <v-col cols="10" lg="12" class="email_padong_education">
                    <v-text-field style="margin-top: -234px; margin-left: 30px; " v-model="editedItem.educational_level"
                      flat solo readonly></v-text-field>
                  </v-col>


                </v-col>
              </v-row>

              <v-row>

<v-col cols="12" sm="12" md="12" class="buttonnako" >

  <v-btn color="red" class="pa-2 ml-2 mt-n8"
         dark
       >
        BLOCK
    </v-btn>

    <v-btn color="green" class="pa-2 ml-2 mt-n8"
         dark
        @click="dialog = true, dialog_viewProfile=false">
        EDIT PROFILE
    </v-btn>

    <v-btn color="red" class="pa-2 ml-2 mt-n8" outlined
        dark @click="dialog_viewProfile = false">
        Close
    </v-btn>
</v-col>



</v-row>

            </v-container>


          </v-card>


        </v-dialog>


      </template>





      <template v-slot:item.actions="{ item }">


        <!-- <v-icon small class="ml-n5 " @click="editItem(item)">
          mdi-pencil
        </v-icon> -->
<!-- 
        <v-icon small class="ml-1 ma-2" @click="deleteItem(item)">
          mdi-delete
        </v-icon> -->

        <v-btn outlined @click="Events_History(item)" class="white--text mr-2" small color="blue">
          <v-icon left class="white--text">mdi-account-check</v-icon>
          <h4 class="white--text">Events History</h4>
        </v-btn>

        
        <v-btn outlined class="mr-2 mt-1 ma-3 mx-10 pr-8  ml-lg-0 mt-lg-3  ml-md-6" small color="blue"
          @click="View_Profile_Bai(item)">
          <v-icon class="white--text" left>mdi-account-box</v-icon>
          <h4 class="white--text">View Profile</h4>
        </v-btn>


      </template>


      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">
          Reset
        </v-btn>
      </template>


    </v-data-table>
  </v-app>
</template>
  
<script>


/* import DataTable_EventsAttended from '../components/DataTable_EventsAttended' */

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    dialog_events_attended: false,
    dialog_viewProfile: false,



    search: '',
    search_events: '',

    headers_event: [
      {
        text: 'Event Name',
        align: 'start',
        sortable: false,
        value: 'eventname',
      },
      { text: 'Date', value: 'eventdate' },
      { text: 'Event Details', value: 'eventdetails' },
      { text: 'Hours Earned', value: 'hoursearned' },


    ],


    headers: [
      /*  {
         text: 'FULL NAME',
         align: 'start',
         sortable: false,
         value: 'name',
       },
       { text: 'Email', value: 'email' },
       { text: 'Mobile Number', value: 'mobilenum' },
       { text: 'Age', value: 'age' },
       { text: 'Barangay & Purok', value: 'barangay' },
       { text: 'Actions', value: 'actions', sortable: false }, */
    ],


    desserts: [],
    editedItem_profile:[

    ],
    editedIndex: -1,
    editedItem: {
      name: '',
      email: '',
      age: '',
      userlevel: '',
      barangay: '',

    },

 /*    editedItem_profile: {
      name: '',
      email: '',
      age: '',
      userlevel: '',
    

    }, */


    defaultItem: {
      name: '',
      email: '',
      age: '',
      userlevel: '',
      barangay: '',

    },
  }),

  props: ['name'], 


  computed: {

    filteredItems() {
      
   return this.desserts.filter((desserts) =>
      desserts.eventdate.toLowerCase().includes(this.search_events.toLowerCase()) ||
      desserts.eventname.toLowerCase().includes(this.search_events.toLowerCase()) ||
      desserts.eventdetails.toLowerCase().includes(this.search_events.toLowerCase())
      );




    /*   let res=this.desserts.filter((item) =>
        item.eventdate.toLowerCase().includes(this.search_events.toLowerCase()),
       
      ); */
      /* eslint-disable */
     /*  console.log("res=>",res)

      if(res.length == 0){
        return this.desserts.filter((item) =>
        item.eventname.toLowerCase().includes(this.search_events.toLowerCase()),
       
      );

      
      }


      else{
        return this.desserts.filter((item) =>
        item.eventdate.toLowerCase().includes(this.search_events.toLowerCase()),
       
      );
      } */

    
    },







    total() {
      return this.filteredItems.reduce(
        (accumulator, desserts) => accumulator + desserts.hoursearned,
        0
      );
    },


    tableLength: function() {
      return this.desserts.length;
    },
  


    msg() {
      return `ALL YOUTH RECORD`
    },

    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },


  },
  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },
  created() {
    this.initialize()
   

  },

  components: {
  
    /*    DataTable_EventsAttended, */
  },



  methods: {

/*  
    sumField(key) {
        // sum data in give key (property)
        return this.desserts.reduce((a, b) => a + (b[key] || 0), 0)
    }, */


    initialize() {
      this.desserts = [

        {
          image: 'profilepic/jom.jpg',
          name: 'Joemarie Rendon Dela Cruz',
          genpref: 'Lesbian',
          gender: 'Male',
          tribe: 'Mandaya',
          email: 'joemarie27@gmail.com',
          mobilenum: '09518110301',
          age: '20',
          barangay: 'Apokon',
          purok: 'Purok 1-A',

          civil_status: 'Married',
          educational_level: 'BSCS Graduated',
          birthday: '1995-04-12',
          ethnicity: 'Bisaya',
          datesurvey: 'February 4,2022',
          voters: 'Yes',
          sinagmark:  'torch.png',

          activestatus:'Active Member',

          eventname: 'Tagum Lighting of Christmas tree',
          eventdate: 'December 4,2022',
          eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
          hoursearned: 5,
          sinag: 'Sinag Member',

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
          age: '26',
          barangay: 'Liboganon',
          purok: 'Purok 3-D',

          sinagmark:  'torch.png',
          sinag: 'Sinag Member',


          activestatus:'Blocked Member',

          
          civil_status: 'Married',
          educational_level: 'Civil Engineering Graduated',
          birthday: 'August 27,1952',
          ethnicity: 'Mandaya',
          datesurvey: 'january 4,2022',
          voters: 'Yes',



          eventname: 'Youth Event Basket Ball Men',
          eventdate: 'January 4,2023',
          eventdetails: 'The Basketball Tournament is an open-application, single-elimination tournament played each summer in Tagum City',
          hoursearned: 3,
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
          age: '30',
          barangay: 'Magugpo West',
          purok: 'Purok 3-D',

          sinag: 'Sinag Member',
          sinagmark:  'torch.png',
          activestatus:'Active Member',


          civil_status: 'Married',
          educational_level: 'Computer Engineering Graduated',
          birthday: '1995-02-12',
          ethnicity: 'Mandaya',
          datesurvey: 'December 5,2022',
          voters: 'Yes',


          eventname: 'Youth Volley Ball Apokon Vs. Bincungan',
          eventdate: 'February 8,2023',
          eventdetails: 'The Volley Ball Tournament is an open-application, single-elimination tournament played each summer in Tagum City',
          hoursearned: 2,
          disability: "Psychological Disability"

        },
        {

          sinag: 'Sinag Member',
          sinagmark:  'torch.png',

          image: 'profilepic/reyalcala.png',
          name: 'Rey Alcala Reynaldo',
          gender: 'Male',
          genpref: 'Transgender',
          tribe: 'Cebuano',
          email: 'rerey@gmail.com',
          mobilenum: '09518110301',
          age: '24',
          barangay: 'Bincungan',
          purok: 'Purok 2-A',


          civil_status: 'Single',
          educational_level: 'BSIT Graduated',
          birthday: '1995-04-30',
          ethnicity: 'Bisaya',
          datesurvey: 'December 5,2022',
          voters: 'Yes',

          eventname: 'Youth Event Sepak takraw',
          eventdate: 'March 11,2022',
          eventdetails: 'Sepak Takraw is a foot volleyball game where players touch as well as handle the ball using only their feet, knee, chest and head.',
          hoursearned: 7,
          activestatus:'Active Member',

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
          age: '30',
          barangay: 'Pagsabangan',
          purok: 'Purok 2-A',

          civil_status: 'Single',
          educational_level: 'BSIT Graduated',
          birthday: 'December 27,1997',
          ethnicity: 'Bisaya',
          datesurvey: 'December 5,2022',
          voters: 'Yes',

          sinag: 'Non-Sinag Member',
          sinagmark:  'torchblank.png',

          eventname: 'Tagum Youth Dota 2 Tournament',
          eventdate: 'December 4,2022',
          eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
          hoursearned: 3,
          disability: "Speech Impairement",
          activestatus:'Active Member',


        },
        {
          image: 'profilepic/Screenshot_1.png',
          name: 'Jelly bean Del Cruz',
          gender: 'Female',
          genpref: 'gay',
          tribe: 'Kamayo',
          email: 'joemarie27@gmail.com',
          mobilenum: '09518110301',
          age: '20',
          barangay: 'Busaon',
          purok: 'Purok 3-A',

          civil_status: 'Single',
          educational_level: 'BSIT Graduated',
          birthday: '1995-04-13',
          ethnicity: 'Bisaya',
          datesurvey: 'December 5,2022',
          voters: 'Yes',

          sinag: 'Sinag Member',
          sinagmark:  'torch.png',

          eventname: 'Tagum Youth Mobile Legends Tournament',
          eventdate: 'December 4,2022',
          eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
          hoursearned: 4,

          disability: "Mental/Intellectual",
          activestatus:'Active Member',

        },
        {
          image: 'profilepic/lebron.png',
          name: 'LeBron Raymone James',
          gender: 'Male',
          genpref: 'Bisexual',
          tribe: 'Kamayo',
          email: 'joemarie27@gmail.com',
          mobilenum: '09518110301',
          age: '20',
          barangay: 'Cuambogan',
          purok: 'Purok 3-A',

          civil_status: 'Single',
          educational_level: 'BSIT Graduated',
          birthday: 'December 27,1997',
          ethnicity: 'Bisaya',
          datesurvey: 'December 5,2022',
          voters: 'Yes',

          sinag: 'Sinag Member',
          sinagmark:  'torch.png',

          eventname: 'Tagum Youth Soccer Tournament',
          eventdate: 'December 4,2022',
          eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
          hoursearned: 6,
          disability: "Disability due to chronic illness",

          activestatus:'Active Member',


        },
        {

          image: 'profilepic/curry.png',
          name: 'Wardell Stephen Curry II',
          gender: 'Male',
          genpref: 'gay',
          tribe: 'Kamayo',
          email: 'joemarie27@gmail.com',
          mobilenum: '09518110301',
          age: '20',
          barangay: 'Canocotan',
          purok: 'Purok 3-A',

          civil_status: 'Single',
          educational_level: 'BSIT Graduated',
          birthday: '1994-04-08',
          ethnicity: 'Bisaya',
          datesurvey: 'December 5,2022',
          voters: 'Yes',

          sinag: 'Non-Sinag Member',
          sinagmark:  'torchblank.png',

          eventname: 'Tagum Sayawan nang Kabatan-onan',
          eventdate: 'December 4,2022',
          eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
          hoursearned: 2,
          disability: "Orthopaedic (Musculoskeletal) Disability",
          activestatus:'Active Member',


        },
        {
          image: 'profilepic/curay.png',
          name: 'Curay Honey Marjie',
          gender: 'Female',
          genpref: 'Bisexual',
          tribe: 'Kamayo',
          email: 'joemarie27@gmail.com',
          mobilenum: '09518110301',
          age: '20',
          barangay: 'Madaum',
          purok: 'Purok 3-A',

          civil_status: 'Single',
          educational_level: 'BSIT Graduated',
          birthday: '1991-01-10',
          ethnicity: 'Bisaya',
          datesurvey: 'December 5,2022',
          voters: 'Yes',

          sinag: 'Non-Sinag Member',
          sinagmark:  'torchblank.png',

          eventname: 'Tagum Youth Golf Event ',
          eventdate: 'December 4,2022',
          eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
          hoursearned: 4,
          disability: "Learning Disability",
          activestatus:'Active Member',


        },

        {
          name: 'Jesica Rendon Caballes',
          gender: 'Female',
          genpref: 'lesbian',
          tribe: 'Kamayo',
          email: 'jess223@gmail.com',
          mobilenum: '09518110301',
          age: '25',
          barangay: 'Mankilam',
          purok: 'Purok 1-A',
          image: 'profilepic/jesica.jpg',

          civil_status: 'Single',
          educational_level: 'BSIT Graduated',
          birthday: '1991-01-10',
          ethnicity: 'Bisaya',
          datesurvey: 'December 5,2022',
          voters: 'Yes',

          sinag: 'Non-Sinag Member',
          sinagmark:  'torchblank.png',

          eventname: 'Tagum Lighting of Christmas tree',
          eventdate: 'December 4,2022',
          eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
          hoursearned: 6,
          disability: "Mental/Intellectual",
          activestatus:'Active Member',

        },


      ]

    },
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    Events_History(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog_events_attended = true
    },


    View_Profile_Bai(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog_viewProfile = true
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1)
      this.closeDelete()
    },
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },



  },

  mounted() {


    if (this.msg == "ALL YOUTH RECORD") {
      this.headers.push({ text: "Full Name", value: "name", align: 'start', sortable: false, }, { text: "Email", value: "email"  , align: ' d-none d-md-table-cell' }, { text: "Mobile Number", value: "mobilenum", align: "center" }, { text: "Age", value: "age" , align: ' d-none d-xl-table-cell' }, { text: "Barangay & Purok", value: "barangay" }, { text: "Actions", value: "actions", align: "center" });
    }

   

  },


}
</script>


<style scoped>

@media screen and (max-width: 450px) {
/*   h1 {
    font-size: 7px;
  }
  div #search {
    size: 5px;
  }
 */

 .imagemobile{

margin-left: 30px;
}



    .sinagkabai{     
      margin-left: 50px;
}

.birthdayname{

  margin-left: 60px;
  margin-top: -140px;

}
 
.birthdayvalue{

  margin-left: 60px;
}


.agevalue{

  margin-left: 60px;

}


.email_padong_education{
  margin-left: 60px;

}


}


@media screen and (max-width:  1263px) {

  .hidescrollbar {

  overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: hidden; /* Hide horizontal scrollbar */


}


/*   h1 {
    font-size: 7px;
  }
  div #search {
    size: 5px;
  }

 */

 .imagedagway{

  margin-left: 210px;
 }

    .sinagkabai_dakoscreen{
     
      margin-left: -5px;
}


.birthdayname{

  margin-left: 60px;
  margin-top: -140px;

}
 
.birthdayvalue{

  margin-left: 60px;
}


.agevalue{

  margin-left: 60px;

}


.email_padong_education{
  margin-left: 60px;

}


.buttonnako{

  margin-top: -150px;

}


}

.some-style>>>.v-input__slot::before {
  border-style: none !important;
}

.centered-input>>>input {
  text-align: center
}

.btn-hover {

  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
 
  text-align: center;
  border: none;
  background-size: 300% 100%;
  border-radius: 30px;
  moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.btn-hover:focus {
  outline: none;
}


/* .btn-hover.color-1 {
  background-image: linear-gradient(to right, #186f94, #0e7e48, #0c8a4d, #078045);
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.644);
} */


.btn-hover.color-1 {
  background-image: linear-gradient(to right, #0b5879, #076437, #0e6d3f, #078045);
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.644);
}


</style>



