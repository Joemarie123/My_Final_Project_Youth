<template>
    <v-app>
   
      <v-data-table
        :headers="headers"
        :items="listevent"
        sort-by="calories"
        class=" btn-hover color-1 elevation-1"
        dark
        @click:row="redirecttoformattendance"
      >
        <template v-slot:top>
          <v-toolbar
            flat
            dark
            class=" btn-hover color-1 elevation-1"
  
          >
            <v-toolbar-title>Event List</v-toolbar-title>
            <v-divider
              class="mx-4"
              inset
              vertical
            ></v-divider>
            <v-spacer></v-spacer>
  
            <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            dark
          ></v-text-field>
  
  
            <v-dialog
             
               v-model="dialog" 
              max-width="700px"
              tile
              
            >
             
              <v-card  >
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>
    
              <v-dialog>
  
                
              </v-dialog>
  
  
  
  
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="close"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="save"
                  >
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
          <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn
            color="primary"
            @click="initialize"
          >
            Reset
          </v-btn>
        </template>
      </v-data-table>
    </v-app>
    </template>
    
    <script>
  
  /* import SK_NavBar from '@/views/Brgy_Sk_Official_AR/SK_NavBar' */
      export default {
        data: () => ({
          dialog: false,
          dialogDelete: false,
  
  
  
          headers: [
            {
              text: 'Event Name',
              align: 'start',
              sortable: false,
              value: 'eventname',
            },
            { text: 'Event Date',    value: 'eventdate' },
            { text: 'Event Details', value: 'eventdetails' },
            
          
          ],
          listevent: [
          {
  
                  id:1,
                  eventname: 'Tagum Lighting of Christmas tree',
                  eventdate: 'December 4,2022',
                  eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
             
              },
              {
                id:2,
                  eventname: 'Youth Event Basket Ball Men',
                  eventdate: 'January 4,2023',
                  eventdetails: 'The Basketball Tournament is an open-application, single-elimination tournament played each summer in Tagum City',
             
              },
              {
                id:3,
                  eventname: 'Youth Volley Ball Apokon Vs. Bincungan',
                  eventdate: 'February 8,2023',
                  eventdetails: 'The Volley Ball Tournament is an open-application, single-elimination tournament played each summer in Tagum City',
             
              },
              {
                id:4,
                  eventname: 'Youth Event Sepak takraw',
                  eventdate: 'March 11,2022',
                  eventdetails: 'Sepak Takraw is a foot volleyball game where players touch as well as handle the ball using only their feet, knee, chest and head.',
             
              },
              {
                id:5,
                  eventname: 'Tagum Lighting of Christmas tree',
                  eventdate: 'December 4,2022',
                  eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
             
              },
              {
                id:6,
                  eventname: 'Tagum Lighting of Christmas tree',
                  eventdate: 'December 4,2022',
                  eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
             
              },
              {
                id:7,
                  eventname: 'Tagum Lighting of Christmas tree',
                  eventdate: 'December 4,2022',
                  eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
             
              },
  
              {
                id:8,
                  eventname: 'Tagum Lighting of Christmas tree',
                  eventdate: 'December 4,2022',
                  eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
             
              },
              {
  
                id:9,
                  eventname: 'Tagum Lighting of Christmas tree',
                  eventdate: 'December 4,2022',
                  eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
             
              },
              
              {
                id:10,
                  eventname: 'Tagum Lighting of Christmas tree',
                  eventdate: 'December 4,2022',
                  eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
             
              },
  
          ],
          
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
  
        components: {
         
          
        },
  
  
        computed: {
          formTitle () {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
          },
        },
        watch: {
          dialog (val) {
            val || this.close()
          },
          dialogDelete (val) {
            val || this.closeDelete()
          },
        },
        created () {
          this.initialize()
        },
        methods: {
          
          navigateTo(path) {
        this.$router.push({ 'path': path });
      },
  
          redirecttoformattendance (item) {
            
          /*   this.navigateTo('/SelectYouth');  */
  
            this.$router.push({ name: 'DatatableSelectYouthAttended', params: { id: item.id } })
          },
  
  
          // initialize () {
          //   this.desserts = [
  
          //   ]
          // },

          
          editItem (item) {
            this.editedIndex = this.listevent.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
          },
          deleteItem (item) {
            this.editedIndex = this.listevent.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
          },
          deleteItemConfirm () {
            this.listevent.splice(this.editedIndex, 1)
            this.closeDelete()
          },
          close () {
            this.dialog = false
            this.$nextTick(() => {
              this.editedItem = Object.assign({}, this.defaultItem)
              this.editedIndex = -1
            })
          },
          closeDelete () {
            this.dialogDelete = false
            this.$nextTick(() => {
              this.editedItem = Object.assign({}, this.defaultItem)
              this.editedIndex = -1
            })
          },
          save () {
            if (this.editedIndex > -1) {
              Object.assign(this.listevent[this.editedIndex], this.editedItem)
            } else {
              this.listevent.push(this.editedItem)
            }
            this.close()
          },
        },
      }
    </script>
  
  
  <style scoped>
  
  .btn-hover {
     
     font-size: 16px;
     font-weight: 600;
     cursor: pointer;
     margin: 20px;
     text-align:center;
     border: none;
     background-size: 300% 100%;
     border-radius: 50px;
     moz-transition: all .4s ease-in-out;
     -o-transition: all .4s ease-in-out;
     -webkit-transition: all .4s ease-in-out;
     transition: all .4s ease-in-out;
  }
  
  .btn-hover:focus {
     outline: none;
  }
  
  
  .btn-hover.color-1 {
    background-image: linear-gradient(to right, #0b5879, #076437, #0e6d3f, #078045);
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.644);
  }
  
  </style>