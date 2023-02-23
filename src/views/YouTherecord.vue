<template>
  <v-app>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class=" btn-hover color-1 elevation-1"
    dark
  >
    <template v-slot:top>
      <v-toolbar
        flat
        dark
        class=" btn-hover color-1 elevation-1"
      >
        <v-toolbar-title>
          <v-avatar size="58">
         <img src="/TCYDLOGO.jpg" alt="">
           </v-avatar>
           

          TAGUM CITY YOUTH RECORD
        </v-toolbar-title>
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

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    
                  >
            
                    <v-text-field
                      v-model="editedItem.name"
                      label="Full Name"
                      
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.email"
                      label="Email"
                      
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.mobilenum"
                      label="Mobile Number"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.age"
                      label="Age"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.barangay"
                      label="Barangay"
                    ></v-text-field>
                    
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

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
  <Navbar/>
</v-app>
</template>

<script>

import Navbar from '../components/Navbar'

  export default {
    components: {
        Navbar,
       
      },


    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'FULL NAME',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Email', value: 'email' },
        { text: 'Mobile Number', value: 'mobilenum' },
        { text: 'Age', value: 'age' },
        { text: 'Barangay & Purok', value: 'barangay' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        email: '',
       age: '',
      userlevel:'',
      barangay:'',

      },
      defaultItem: {
        name: '',
        email: '',
       age: '',
      userlevel:'',
      barangay:'',

      },
    }),
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
      initialize () {
        this.desserts = [
          {
            name: 'Joemarie Rendon',
            email: 'joemarie27@gmail.com',
            mobilenum: '09518110301',
            age: '20 yrs old',
            barangay: 'Apokon - Purok 2',
          },
          {
            name: 'Pablo Escobar',
            email: 'escobar227@gmail.com',
            mobilenum: '09522321301',
            age: '20 yrs old',
            barangay: 'Liboganon - Purok 1',
          },
          {
            name: 'Jograd Mahusay',
            email: 'jogs123@gmail.com',
            mobilenum: '09518110301',
            age: '30 yrs old',
            barangay: 'Magugpo West- Purok 4',
          },
          {
            name: 'Rey Alcala',
            email: 'rerey@gmail.com',
            mobilenum: '09518110301',
            age: '24 yrs old',
            barangay: 'Magugpo East - Purok 1',
          },
          {
            name: 'Neil Armstrong',
            email: 'amrstrong224@gmail.com',
            mobilenum: '09518110301',
            age: '30 yrs old',
            barangay: 'Pagsabangan - Purok 3',
          },
          {
            name: 'Joemarie Rendon',
            email: 'joemarie27@gmail.com',
            mobilenum: '09518110301',
            age: '20 yrs old',
            barangay: 'San Isidro - Purok 2',
          },
          {
            name: 'Joemarie Rendon',
            email: 'joemarie27@gmail.com',
            mobilenum: '09518110301',
            age: '20 yrs old',
            barangay: 'Apokon - Purok 1',
          },
          {
            name: 'Joemarie Rendon',
            email: 'joemarie27@gmail.com',
            mobilenum: '09518110301',
            age: '20 yrs old',
            barangay: 'Apokon - Purok 5',
          },
          {
            name: 'Joemarie Rendon',
            email: 'joemarie27@gmail.com',
            mobilenum: '09518110301',
            age: '20 yrs old',
            barangay: 'Apokon - Purok 2',
          },
          
          {
            name: 'Joemarie Rendon',
            email: 'joemarie27@gmail.com',
            mobilenum : '09518110301',
            age: '20 yrs old',
            barangay: 'Apokon - Purok 1',
          },
        



        ]
      },
      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },
      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
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
 background-image: linear-gradient(to right, #186f94, #0e7e48,  #0c8a4d,  #078045);
 box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.644);
}



</style>