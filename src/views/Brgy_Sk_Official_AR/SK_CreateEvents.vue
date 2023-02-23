<template>
    <v-app>
    <v-data-table :headers="headers" :items="desserts" sort-by="calories" class=" btn-hover color-1 elevation-1"  dark>
      <template v-slot:top>
        <v-toolbar flat dark class=" btn-hover color-1 elevation-1">
          <v-toolbar-title>Event List</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
  
          <v-row>
            <v-col cols="9">
  
              <v-text-field v-model="search" class="btn-hover" append-icon="mdi-magnify" label="Search" single-line hide-details
                dark></v-text-field>
  
            </v-col>
  
            <v-col cols="3">
              <v-btn color="blue" class="btn-hover"  @click="dialog_Create_Events = true">
                <v-icon left>mdi-account-check</v-icon>
                Create Events
  
              </v-btn>
            </v-col>
          </v-row>
  
  
          <v-dialog   v-model="dialog_Create_Events"  dark>
            <v-row justify="center">
              <v-col  cols="5" sm="12" md="12" lg="5">
                <v-card class="btn-hover color-1  " tile>
  
                  <v-col offset="1" cols="10">
  
                    <div class="text-center ">
                      <h1>Create Events</h1>
                    </div>
  
  
                    <v-text-field label="Event Name" outlined dark></v-text-field>
  
                    
                    <div>
                      <v-menu ref="menu" v-model="DOA_JuniorHigh" :close-on-content-click="false"
                        transition="scale-transition" offset-y min-width="auto">
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field v-model="date_JH" label="Date of Events" outlined dense append-icon="mdi-calendar"
                            type="date" readonly v-bind="attrs" v-on="on" dark></v-text-field>
                        </template>
                        <v-date-picker :value="computedDateFormattedMomentjs" v-model="date_JH"
                          :active-picker.sync="activePicker123" :max="
                            new Date(
                              Date.now() -
                              new Date().getTimezoneOffset() * 60000
                            )
                              .toISOString()
                              .substr(0, 10)
                          " min="1950-01-01" @change="saves"></v-date-picker>
                      </v-menu>
                    </div>
  
  
  
  
                    <v-textarea outlined name="input-10-15" label="Event Details" dark></v-textarea>
  
                    <v-btn type="submit" dark class="btn-hover color-5" @click="initialize">
                      <v-icon left>mdi-account-check</v-icon>
                      Create
                    </v-btn>
                  </v-col>
  
  
  
                  <!--  <v-card-actions class="justify-center"> -->
     </v-card> 
  
  
  
              </v-col>
  
  
  
            </v-row>
  
          </v-dialog>
  
          <v-dialog v-model="dialog" max-width="700px" tile>
  
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>
  
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
  
                      <v-text-field v-model="editedItem.eventname" label="Full Name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.eventdate" label="Email"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="12">
                      <v-text-field v-model="editedItem.eventdetails" label="Mobile Number"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
  
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save">
                  Save
                </v-btn>
              </v-card-actions>
  
  
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
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">
          Reset
        </v-btn>
      </template>
   
    </v-data-table>
    <SK_NavBar/>
    </v-app>
  </template>
    
  <script>

  import SK_NavBar from '@/views/Brgy_Sk_Official_AR/SK_NavBar'
  export default {
    components: {
   /*  LogInForm, */
  /*  Navbar, */
   SK_NavBar,

   /* Footer */
  },

    data: () => ({
  
  
      dialog_Create_Events: false,
  
  
  
      dialog: false,
      dialogDelete: false,
  
  
      headers: [
        {
          text: 'Event Name',
          align: 'start',
          sortable: false,
          value: 'eventname',
        },
        { text: 'Date', value: 'eventdate' },
        { text: 'Event Details', value: 'eventdetails' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        eventname: '',
        eventdate: '',
        eventdetails: '',
  
  
      },
      defaultItem: {
        eventname: '',
        eventdate: '',
        eventdetails: '',
  
  
      },
  
  
  
    }),
  
  
    computed: {
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
    methods: {
      saves(date) {
        this.$refs.menu.save(date);
      },
      initialize() {
        this.desserts = [
          {
            eventname: 'Tagum Lighting of Christmas tree',
            eventdate: 'December 4,2022',
            eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
  
          },
          {
            eventname: 'Youth Event Basket Ball Men',
            eventdate: 'January 4,2023',
            eventdetails: 'The Basketball Tournament is an open-application, single-elimination tournament played each summer in Tagum City',
  
          },
          {
            eventname: 'Youth Volley Ball Apokon Vs. Bincungan',
            eventdate: 'February 8,2023',
            eventdetails: 'The Volley Ball Tournament is an open-application, single-elimination tournament played each summer in Tagum City',
  
          },
          {
            eventname: 'Youth Event Sepak takraw',
            eventdate: 'March 11,2022',
            eventdetails: 'Sepak Takraw is a foot volleyball game where players touch as well as handle the ball using only their feet, knee, chest and head.',
  
          },
          {
            eventname: 'Tagum Lighting of Christmas tree',
            eventdate: 'December 4,2022',
            eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
  
          },
          {
            eventname: 'Tagum Lighting of Christmas tree',
            eventdate: 'December 4,2022',
            eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
  
          },
          {
            eventname: 'Tagum Lighting of Christmas tree',
            eventdate: 'December 4,2022',
            eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
  
          },
          {
            eventname: 'Tagum Lighting of Christmas tree',
            eventdate: 'December 4,2022',
            eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
  
          },
          {
            eventname: 'Tagum Lighting of Christmas tree',
            eventdate: 'December 4,2022',
            eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
  
          },
  
          {
            eventname: 'Tagum Lighting of Christmas tree',
            eventdate: 'December 4,2022',
            eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
  
          },
  
  
  
        ]
      },
  
     /*  methods: { */
  
    /* }, */
  
      /*    Dialog For Create Events */
      /*  Call_dialog_for_createEvents() {
            this.dialog_Create_Events = true
          }, */
      /*        END */
  
      editItem(item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
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
  }
  </script>
  
  
  
  
  <style scoped>
  
  .btn-hover.color-5 {
      background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);
      box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
  }
  
  
  .btn-hover {
  
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    margin: 20px;
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 25px;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
  }
  
  .btn-hover:focus {
    outline: none;
  }
  
  
  .btn-hover.color-1 {
    background-image: linear-gradient(to right, #186f94, #0e7e48, #0c8a4d, #078045);
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.644);
  }



  </style>