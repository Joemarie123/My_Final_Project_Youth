<template>
    <v-app>
        <NavigationDrawer/>

        
      <v-data-table :headers="headers" :items="desserts" sort-by="calories"  class=" elevation-1 pa-2" 
        :search="search"
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
          <v-toolbar flat    class=" elevation-1">
  
  
            <v-toolbar-title>{{ msg }}</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
  
  
            <v-text-field v-model="search" outlined dense rounded append-icon="mdi-magnify" label="Search" single-line hide-details
              ></v-text-field>
  
  
  
  
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
  
                    <v-col cols="10" sm="6" md="4" offset-lg="5" offset-md="3" offset-sm="1">
  
                      <v-avatar size="90" class="mr-3">
                        <img v-bind:src="`/${editedItem_profile.image}`" alt="">
                      </v-avatar>
  
  
                    </v-col>
                  </v-row>
  
  
  
                  <v-row>
  
                    <v-col cols="10" sm="6" md="4" offset-lg="4" offset-md="2" offset-sm="1">
  
                      <v-text-field v-model="editedItem_profile.name" label="Full Name"></v-text-field>
  
                    </v-col>
                  </v-row>
  
  
  
  
  
  
                  <v-row>
  
  
  
  
  
                    <v-col cols="10" sm="6" md="4">
  
  
                      <v-text-field v-model="editedItem_profile.educational_level" label="Educational Level"></v-text-field>
  
                    </v-col>
  
                    <v-col cols="10" sm="6" md="4">
                      <v-text-field v-model="editedItem_profile.email" label="Email"></v-text-field>
                    </v-col>
  
                    <v-col cols="10" sm="6" md="4">
                      <v-text-field v-model="editedItem_profile.mobilenum" label="Mobile Number"></v-text-field>
                    </v-col>
  
                    <v-col cols="10" sm="6" md="4">
                      <v-text-field v-model="editedItem_profile.birthday" label="Birth Day"></v-text-field>
                    </v-col>
  
                    <v-col cols="10" sm="6" md="4">
                      <v-text-field v-model="editedItem_profile.age" label="age"></v-text-field>
                    </v-col>
  
  
                    <v-col cols="10" sm="6" md="4">
                      <v-text-field v-model="editedItem_profile.barangay" label="Barangay"></v-text-field>
  
                    </v-col>
  
  
  
                    <v-col cols="10" sm="6" md="4">
                      <v-text-field v-model="editedItem_profile.ethnicity" label="Ethnicity"></v-text-field>
                    </v-col>
  
  
                    <v-col cols="10" sm="6" md="4">
                      <v-text-field v-model="editedItem_profile.gender" label="Gender"></v-text-field>
                    </v-col>
  
                    <v-col cols="10" sm="6" md="4">
                      <v-text-field v-model="editedItem_profile.civil_status" label="Civil Status"></v-text-field>
                    </v-col>
  
  
  
  
  
  
                  </v-row>
  
                  <v-row>
  
                    <v-col cols="10" sm="12" md="12" class="mt-n1">
  
                      <v-btn color="green" class="pa-2" outlined dark @click="dialog = false">
                        Continue
                      </v-btn>
  
                      <v-btn color="red" class="pa-2 ml-2" outlined dark @click="dialog = false">
                        Close
                      </v-btn>
                    </v-col>
  
                  </v-row>
                </v-container>
  
  
  
  
  
              </v-card>
            </v-dialog>
  
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
  
          <v-dialog v-model="dialog_events_attended" max-width="1000px" tile>
            <v-card>
  
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
                    <v-data-table  class="pa-md-6" :headers="headers_event" :hide-default-footer="true" :items="desserts"
                      :search="search_events">
                      <template v-slot:top>
  
  
                        <v-card flat dark color="blue darken-3" class="ma-3 ">
  
                          <v-row>
  
                            <v-col cols="12" md="1">
                              <v-avatar size="55" class="ml-6 mt-2">
                                <img v-bind:src="`/${editedItem.image}`">
                              </v-avatar>
                            </v-col>
  
                            <v-col cols="12" sm="11" md="5">
                              <v-text-field class="some-style ml-4" v-model="editedItem.name" flat readonly></v-text-field>
                            </v-col>
  
                            <v-col cols="11" md="5">
                              <v-text-field v-model="search_events" class="mt-md-3 ml-2" append-icon="mdi-magnify"
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
  
  
  
                        <v-dialog v-model="dialogDelete" max-width="500px">
                          <v-card>
                            <v-card-title class="text-h6">Are you sure to delete this Announcement?</v-card-title>
                            <v-divider color="success"></v-divider>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="orange darken-1" text @click="closeDelete">Cancel</v-btn>
                              <v-btn color="green darken-1" text @click="deleteItemConfirm">OK</v-btn>
                              <v-spacer></v-spacer>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
  
  
  
  
                      </template>
                      <template v-slot:item.actions="{ item }">
                        <v-icon small class="mr-2" @click="viewItem(item)">
                          mdi-eye
                        </v-icon>
                        <v-icon small class="mr-2" @click="editItem(item)">
                          mdi-pencil
                        </v-icon>
  
                        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
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
  
  
  
          <v-dialog v-model="dialog_viewProfile" max-width="660px" persistent>
            <v-card>
              <v-container>
                <div class="text-center ">
  
                  <v-alert dense dark color="blue darken-3">
                    PERSONAL INFORMATION <strong> </strong>
  
                  </v-alert>
                  <v-col cols="10" lg="1" style="margin-top: -63px; margin-left: 570px;">
                    <v-btn text color="red" dark @click="dialog_viewProfile = false">
                      <v-icon>
                        mdi-comment-remove-outline
                      </v-icon>
                    </v-btn>
                  </v-col>
  
                </div>
  
  
                <v-row>
  
  
  
                  <v-col cols="12" lg="6">
  
                    <v-col cols="10" lg="12">
                      <v-text-field class="font-weight-bold centered-input" style="margin-top: -18px; margin-left: -38px;"
                        v-model="editedItem.sinag" flat solo readonly>
  
                      </v-text-field>
  
  
                    </v-col>
  
  
  
                    <v-col cols="10" lg="12" style="margin-top: -50px; margin-left: 18px;">
                      <v-avatar size="100" class="ml-11 mr-7">
                        <img v-bind:src="`/${editedItem.image}`" alt="">
                      </v-avatar>
                    </v-col>
  
  
  
                    <v-col cols="4" lg="10" sm="12" md="12" align-self="center">
                      <v-text-field class="font-weight-medium centered-input" dense height="30" background-color="#00695C"
                        dark v-model="editedItem.name" flat solo readonly></v-text-field>
                    </v-col>
  
  
  
  
                    <!--  <v-col cols="6">
                <p class="ml-n9"><b>Address:</b></p>
                
  
              </v-col> -->
                    <v-col cols="10" lg="6">
                      <v-text-field style="margin-left: -12px; margin-top: -38px;" flat solo readonly value="Date Survey:"
                        class="font-weight-bold"></v-text-field>
                    </v-col>
  
                    <v-col cols="10" lg="10">
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
  
  
                    <v-col cols="10" lg="12">
                      <v-text-field style="margin-top: -135px; margin-left: 93px;" v-model="editedItem.gender" flat solo
                        readonly></v-text-field>
  
                    </v-col>
  
  
                  </v-col>
  
                  <v-col cols="12" lg="6">
  
  
  
  
                    <!--  <v-col cols="6">
                <p class="ml-n9"><b>Address:</b></p>
                
              </v-col> -->
  
                    <v-col cols="10" lg="4">
                      <v-text-field style="margin-bottom: -20px; margin-left: -70px;" class="font-weight-bold" color="white"
                        flat solo readonly value="esbog Ni bai  :"></v-text-field>
                    </v-col>
  
                    <v-col cols="10" lg="12">
                      <v-text-field style="margin-top: -75px; margin-left:   30px;" color="white" flat solo
                        readonly></v-text-field>
                    </v-col>
                    <v-col cols="10" lg="5">
                      <v-text-field class="font-weight-bold" style="margin-left: -70px; margin-top: -120px;" flat solo
                        readonly value="Birth Day:"></v-text-field>
                    </v-col>
  
                    <v-col cols="10" lg="12">
                      <v-text-field style="margin-top: -144px; margin-left: 30px;" v-model="editedItem.birthday" flat solo
                        readonly></v-text-field>
                    </v-col>
  
                    <v-col cols="10" lg="5">
                      <v-text-field class="font-weight-bold" style="margin-left: -70px; margin-top: -135px;" flat solo
                        readonly value="Age:"></v-text-field>
                    </v-col>
  
                    <v-col cols="10" lg="12">
                      <v-text-field style="margin-top: -158px; margin-left: 30px;" v-model="editedItem.age" flat solo
                        readonly></v-text-field>
                    </v-col>
  
                    <v-col cols="10" lg="5">
                      <v-text-field class="font-weight-bold" style="margin-left: -70px; margin-top: -150px;" flat solo
                        readonly value="Address:"></v-text-field>
                    </v-col>
  
                    <v-col cols="10" lg="12">
                      <v-text-field style="margin-top: -175px; margin-left: 30px;" v-model="editedItem.barangay" flat solo
                        readonly></v-text-field>
                    </v-col>
  
                    <v-col cols="10" lg="5">
                      <v-text-field class="font-weight-bold" style="margin-left: -70px; margin-top: -120px;" flat solo
                        readonly value="Email:"></v-text-field>
                    </v-col>
  
                    <v-col cols="10" lg="12">
                      <v-text-field style="margin-top: -145px; margin-left: 30px;" v-model="editedItem.email" flat solo
                        readonly></v-text-field>
                    </v-col>
  
  
  
                    <v-col cols="10" lg="5">
                      <v-text-field class="font-weight-bold" style="margin-left: -70px; margin-top: -135px;" flat solo
                        readonly value="Cell Phone :"></v-text-field>
                    </v-col>
  
                    <v-col cols="10" lg="12">
                      <v-text-field style="margin-top: -158px; margin-left: 30px;" v-model="editedItem.mobilenum" flat solo
                        readonly></v-text-field>
                    </v-col>
  
                    <v-col cols="10" lg="5">
                      <v-text-field class="font-weight-bold" style="margin-left: -70px; margin-top: -140px;" flat solo
                        readonly value="Voters :"></v-text-field>
                    </v-col>
  
                    <v-col cols="10" lg="12">
                      <v-text-field style="margin-top: -163px; margin-left: 30px;" v-model="editedItem.voters" flat solo
                        readonly></v-text-field>
                    </v-col>
  
  
                    <v-col cols="10" lg="5">
                      <v-text-field class="font-weight-bold" style="margin-left: -70px; margin-top: -155px;" flat solo
                        readonly value="Ethnicity :"></v-text-field>
                    </v-col>
  
                    <v-col cols="10" lg="12">
                      <v-text-field style="margin-top: -179px; margin-left: 30px;" v-model="editedItem.ethnicity" flat solo
                        readonly></v-text-field>
                    </v-col>
  
  
                    <v-col cols="10" lg="5">
                      <v-text-field class="font-weight-bold" style="margin-left: -70px; margin-top: -173px;" flat solo
                        readonly value="Education:"></v-text-field>
                    </v-col>
  
  
                    <v-col cols="10" lg="12">
                      <v-text-field style="margin-top: -197px; margin-left: 30px; " v-model="editedItem.educational_level"
                        flat solo readonly></v-text-field>
                    </v-col>
  
  
                  </v-col>
                </v-row>
  
              </v-container>
  
  
            </v-card>
  
  
          </v-dialog>
  
  
        </template>
  
  
  
  
  
        <template v-slot:item.actions="{ item }">
  
  
          <v-icon small class="ml-n5 " @click="editItem(item)">
            mdi-pencil
          </v-icon>
  
          <v-icon small class="ml-1 ma-2" @click="deleteItem(item)">
            mdi-delete
          </v-icon>
  
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
  
  import NavigationDrawer from "@/views/Youth_Enumerator/NavigationDrawer.vue";
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
      editedIndex: -1,
      editedItem: {
        name: '',
        email: '',
        age: '',
        userlevel: '',
        barangay: '',
  
      },
  
      editedItem_profile: {
        name: '',
        email: '',
        age: '',
        userlevel: '',
        barangay: '',
  
      },
  
  
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
        NavigationDrawer,
      /*    DataTable_EventsAttended, */
    },
  
  
  
    methods: {

        redirecttoformregistration (item) {
            
            /*   this.navigateTo('/SelectYouth');  */
    
              this.$router.push({ name: 'YouthRegisterEnumerator', params: { id: item.id } })
            },


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
            datesurvey: 'December 5,2022',
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
            datesurvey: 'December 5,2022',
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
            datesurvey: 'December 5,2022',
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
            datesurvey: 'December 5,2022',
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
  
  
  
  
        ]
  
      },
      editItem(item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem_profile = Object.assign({}, item)
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

        this.headers.push({ text: "Full Name", value: "name",
         align: 'start', sortable: false, }, { text: "Gender", 
         value: "gender", sortable: false, }, { text: "Civil Status",
          value: "civil_status", sortable: false, },  { text: "Email",
           value: "email" }, { text: "Mobile Number", value: "mobilenum", 
           align: "center" }, { text: "Age", value: "age" }, 
           { text: "Barangay & Purok", value: "barangay" });
      }
  
  
    },
  
  
    
  
  
  
  }
  </script>
  
  
  <style scoped>
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
    margin: 20px;
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
  
  
  
  