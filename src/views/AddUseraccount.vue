<template>
             

    <v-app>
      <v-data-table :headers="headers" :items="desserts" sort-by="calories" class=" btn-hover color-1 elevation-1 pa-3" dark>
    <template v-slot:top >
      <v-toolbar flat dark class=" btn-hover color-1 elevation-1">
        
        <v-toolbar-title>
          <v-avatar size="58">
         <img class="pa-1" src="/createuseraccount.png" alt="">
           </v-avatar>
           
          User Account List</v-toolbar-title>

        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>

        <v-row>
          <v-col cols="12" lg="8" md="12" sm="12">

            <v-text-field v-model="search" class="btn-hover" append-icon="mdi-magnify" label="Search" single-line hide-details
              dark></v-text-field>
          </v-col>

          <v-col cols="12" lg="4" md="12" sm="12">
            <v-btn color="blue" tile class="btn-hover"  @click="create_user_account = true">
              <v-icon left>mdi-account-check</v-icon>
             Create User Account

            </v-btn>
          </v-col>
        </v-row>


        <v-dialog v-model="dialog" max-width="700px" tile>

          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
        
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">

                    <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.middlename" label="Middle Name"></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.lastname" label="Last Name"></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.username" label="User Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.userlevel" label="User level"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.barangay" label="Barangay"></v-text-field>

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

        
 <!--    DIALOG FOR CREATE ACCOUNT -->

        <v-dialog  v-model="create_user_account" dark  origin='center' max-width="500" >
        
          <v-container >
        <v-row >   
        
        <v-col cols="12"   lg="12"  md="12" sm="12" class="mx-auto">

        
          <v-card class="btn-hover color-1 rounded-lg"   tile>
          



            

            <v-row
    
    >
      <v-col  md="10">
        <div class="text-center" >
              <h1  >Create User Account</h1>
            </div>
      </v-col>
      <v-col
        md="2"
       
      >
      <v-btn text color="red" dark @click="create_user_account = false">
                          <v-icon >
                            mdi-comment-remove-outline
                          </v-icon>
                        </v-btn>
      </v-col>
    </v-row>

            <v-row>
  
  <v-col
  offset="1"
  cols="10"
  >

              <v-card-text>
                    
                <v-text-field
               
               class="textbox"
             
               v-model="username"
                 :rules="emailRules "
                 type="email"
                
                 label="User Name"
                dark
                
                 prepend-icon="mdi-account"
                 required

               />


                <v-text-field
               
               class="textbox"
             
               v-model="lastname"
                 :rules="emailRules "
                 type="email"
                
                 label="Last Name"
                dark
                
                 prepend-icon="mdi-account"
                 required

               />
         

               
               <v-text-field
               
               class="textbox"
             
               v-model="firstname"
                 :rules="emailRules "
                 type="email"
                
                 label="First Name"
                dark
                
                 prepend-icon="mdi-account"
                 required

               />

               

<!--                <p class="font-weight-bold"> -->



               <v-select
                      :items="['Admin',  'Brgy. SK Official',  'Youth Enumerator']"
                      label="Select User level"
                      prepend-icon="mdi-clipboard-account"
                      v-model="usrelevel"
                      required
                      dark
                    ></v-select>


                 <v-select
                      :items="['Apokon', 'Bincungan' , 'Busaon' , 'Canocotan', 'Cuambogan', 'La Filipina', 'Liboganon', 'Madaum', 'Magdum', 'Mankilam'  , 'New Balamban'  , 'Nueva Fuerza' , 'Pagsabangan' , 'Pandapan' , 'Magugpo Poblacion' , 'San Agustin' , 'San Isidro' , 'San Miguel (Camp 4)' , 'Visayan Village' , 'Magugpo East' , 'Magugpo North' , 'Magugpo South' , 'Magugpo West' ]"
                      label="Barangay"
                      prepend-icon="mdi-account"
                      v-model="barangay"
                      required
                      dark
                    ></v-select>


               <v-text-field
              
              class="textbox"
                      v-model="pw1"
                    
                      :rules="pwdRules"
                      :type="passwordShow?'text':'password'"
                      label="Password"
                      placeholder="Password"
                      prepend-icon="mdi-key"
                 
                dark
                  
              />
         

              <v-text-field
              
              class="textbox"
                      v-model="pw2"
                      
                      :rules="pwdConfirm"
                      :type="passwordShow?'text':'password'"
                      label="Confirm Password"
                      placeholder="Password"
                      prepend-icon="mdi-key"
                    dark
                   
              />
              </v-card-text>


            </v-col>
          </v-row>
  



              <v-container>
             <!--  <v-card-actions class="justify-center"> -->
              <v-row  >
        
            
                <v-col 
                cols="12" 
                >
          
                <v-btn type="submit" dark  class="btn-hover color-5" @click="initialize">
                  <v-icon left>mdi-account-check</v-icon>
              Create Account
                </v-btn>
              

              </v-col>
                </v-row>
            

              </v-container>
          <!--     </v-card-actions> -->


      
          </v-card>
 
        </v-col>




          <v-col>
     
            
      </v-col>

  
      </v-row>
    </v-container>
    </v-dialog>

 <!--    DIALOG FOR CREATE ACCOUNT -->

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
      <v-btn color="primary" @click="initialize_form">
        Reset
      </v-btn>
    </template>
  </v-data-table>
    

     
<!-- 
      <v-main  > -->

     
 <!--    <v-row>
      <v-col>

    <CrudDatatable/>

  </v-col>
   
  </v-row>
 -->
       <!-- start dialog -->
       <v-dialog v-model="dialog_save_successfully" max-width="290">
          <v-card>
            <v-card-title class="text-h5">
              <v-avatar size="40">
                              <img src="/success.png" alt="">
                      </v-avatar>
              Save Successfully
            </v-card-title>

          
            <v-card-actions>
            

              <v-col offset-xl="4">
              <v-btn color="green darken-1" text @click="dialog_save_successfully = false">
               OK
              </v-btn>
            </v-col>


            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- end dialog -->
        
       <!-- start dialog 2 -->
       <v-dialog v-model="dialog2" max-width="290" class="modal">
        
          <v-card>
            
            <v-card-title >
                     <v-avatar size="40">
                              <img src="/error.png" alt="">
                      </v-avatar>
                      Complete ALL Fields
            </v-card-title>

            

            <v-card-actions>
             

            
              <v-col
              offset-xl="4"
            
              >
              <v-btn   color="green darken-1" text @click="dialog2 = false">
               OK
              </v-btn>
            </v-col>
            

            </v-card-actions>


          </v-card>
        </v-dialog>
        <!-- end dialog 2 -->


  <!-- start dialog 3 -->
  <v-dialog v-model="dialog3" max-width="290" class="modal">
          <v-card >
            
            <v-card-title >
                     <v-avatar size="40">
                              <img src="/error.png" alt="">
                      </v-avatar>
                     Password Not Match
            </v-card-title>

            

            <v-card-actions>
             

            
              <v-col
              offset-xl="4"
            
              >
              <v-btn   v-model="btn"  color="green darken-1" text @click="dialog3 = false">
               OK
              </v-btn>
            </v-col>
            

            </v-card-actions>


          </v-card>
        </v-dialog>
        <!-- end dialog 3 -->


    <!--   </v-main> -->
   <!--    <v-snackbar top color="green" v-model="snackbar">
        Login success
      </v-snackbar> -->

    

    <Navbar/>  
    </v-app>



    
  </template>


  <script scoped>
  
  import { mapActions } from 'vuex';
  import Navbar from '@/components/Navbar'
  /* import CrudDatatable from '@/components/CrudDatatable' */
 
  export default {
    name: 'App',
    components: {
    Navbar,
/*     CrudDatatable, */
  

  },

    data: function() {
      
    return {

      dialog_save_successfully:false,
      create_user_account:false,
      dialogDelete: false,
      dialog: false,
      dialog2: false,
      dialog3: false,

        loading: false,
        selection: 1,
        firstname:'',
        lastname:'',
        username:'',
        usrelevel:'',
        barangay:'',
       
     pw1: "",
      pw2: "",
     /*   pwdRules: [v => !!v || "Password required"],

      pwdConfirm: [
        v => !!v || "Confirm password",
        v => v === this.pw1 ||  "Passwords do not match", 
      ]   */
   
      headers: [
      {
        text: 'First Name',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Middle Name', value: 'middlename' },
      { text: 'Last Name', value: 'lastname' },
      { text: 'User Name', value: 'username' },
      { text: 'User Level', value: 'userlevel' },
      { text: 'Barangay', value: 'barangay' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],

    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      lastname: '',
      username: '',
      userlevel: '',
      barangay: '',
      middlename: '',

    },
    defaultItem: {
      name: '',
      lastname: '',
      username: '',
      userlevel: '',
      barangay: '',
      middlename: '',
    },




    };
  },

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
  
     
      ...mapActions('users',['Registration']),
      

      initialize() {
      this.desserts = [
        {
          name: 'Joemarie',
          middlename: 'Odtojan',
          lastname: 'Rendon',
          username: 'joemarie27',
          userlevel: 'Admin',
          barangay: 'Apokon',
        },
        {
          name: 'Rey',
          middlename: 'Jay',
          lastname: 'Alcala',
          username: 'rey332',
          userlevel: 'Brgy. SK Chairman',
          barangay: 'Pagsabangan',
        },
        {
          name: 'Pablo',
          middlename: 'Nicolas',
          lastname: 'Escubar',
          username: 'Pabs223',
          userlevel: 'Brgy. SK Chairman',
          barangay: 'Canocotan',
        },
        {
          name: 'Alberto',
          middlename: 'Dela Cruz',
          lastname: 'Lucrates',
          username: 'Alber3356',
          userlevel: 'Brgy. SK Chairman',
          barangay: 'Liboganon',
        },
        {
          name: 'Mahusay',
          middlename: 'Dela Peña',
          lastname: 'Jograd',
          username: 'Jogs123',
          userlevel: 'Brgy. SK Chairman',
          barangay: 'Magdum',
        },
        {
          name: 'Steve',
          middlename: 'Dela Rosa',
          lastname: 'Jobs',
          username: 'jobs2224',
          userlevel: 'Brgy. SK Official',
          barangay: 'Mankilam',
        },
        {
          name: 'Bill',
          middlename: 'Del Rosario',
          lastname: 'Gates',
          username: 'Gates22455',
          userlevel: 'Brgy. SK Official',
          barangay: 'San Isidro',
        },
        {
          name: 'James',
          middlename: 'Del Baryo',
          lastname: 'Harden',
          username: 'james33552',
          userlevel: 'Brgy. SK Official',
          barangay: 'La Filipina',
        },
        {
          name: 'Lebron',
          middlename: 'Queen Sul',
          lastname: 'James',
          username: 'Lebron2577',
          userlevel: 'Brgy. SK Official',
          barangay: 'Nueva Fuerza',
        },

        {
          name: 'Lebron',
          middlename: 'Greelloue',
          lastname: 'James',
          username: 'Lebron2577',
          userlevel: 'Brgy. SK Official',
          barangay: 'Nueva Fuerza',
        },

      ]
    },

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

    
      initialize_form () {
          
          if(this.firstname=="",this.lastname=="",this.username=="",this.usrelevel=="",this.barangay=="",this.pw1=="",this.pw2=="")
          {
          
              this.dialog2 = true;  
            
          }

          
        
          

 /*   else if ( this.pwdConfirm.v=="Passwords do not match")
           {
            this.dialog3 = true;  
           

          }  */

    
         else{

          
      this.loading = true
      let data=new FormData;
      data.append('First_Name',this.firstname);
      data.append('Last_Name',this.lastname);
      data.append('User_Name',this.username);
      data.append('User_level',this.usrelevel);
      data.append('Barangay',this.barangay);
      data.append('password',this.pw1);


   this.Registration(data);
      setTimeout(() => {
          this.loading = false;
     this.$router.push('/AddUseraccount'); 
      }, 2000)
 
    
  /*       this.firstname = '';
        this.lastname = '';
        this.username = '';
        this.usrelevel = '';
        this.barangay = '';
        this.pw1 = '';
        this.pw2 = ''; */
        
        this.$refs.form.reset();
        this.dialog = true;
        


         }


        },


    /*     register() {       
      this.loading = true
      let data=new FormData;
      data.append('First_Name',this.firstname);
      data.append('Last_Name',this.lastname);
      data.append('User_Name',this.username);
      data.append('User_level',this.usrelevel);
      data.append('Barangay',this.barangay);
      data.append('password',this.pw1);

      this.Registration(data);
      setTimeout(() => {
          this.loading = false;
          this.$router.push('/AddUseraccount');
      }, 2000)

    
        this.firstname = '';
        this.lastname = '';
        this.username = '';
        this.usrelevel = '';
        this.barangay = '';
        this.pw1 = '';
        this.pw2 = '';
        this.$refs.form.reset();

        this.loginCorrection="Message"
        this.dialog = true;

  },
 */

    },


  
  }






  </script>
  
  

  
  <style scoped>
.btn-hover.color-6   {
    background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);
    box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
}



.btn-hover.color-5 {
    background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);
    box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
}



 /*  CSS for ModAL 2 */
 .draw-border {
    border-radius: 20px;

  }



 .btn-hover {
   
   font-size: 16px;
   font-weight: 600;
   cursor: pointer;
   margin: 20px;
   text-align:center;
   border: none;
   background-size: 300% 100%;
   border-radius: 20px;
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

  h1 {


    font-size:27px;
    color: rgb(251, 253, 251);
 /*  -webkit-text-fill-color: rgba(243, 245, 243, 0.664); 
  -webkit-text-stroke-width: 1px;
 */
}

/*   .backgruond{
  background-image: url(/public/cover4.jpg) !important;
    height: 700px;
        width: 1500px; 
     
    display: block;
    position: absolute;
    top: 0;
    background-size: cover;

  }  */







/*   body {
            background-image:url(./assets/Order-Banner.jpg);
            background-color: #cccccc;
         } */





form .textbox{
  
 
  -webkit-text-stroke-color: rgb(255, 255, 255);
  color: white;

/* 	background: transparent; */
    /*  border-bottom: 2px solid rgb(35, 206, 12); */
}


.textbox input{
    padding: 5px;
    width: 100%;
    height: 40px;
    font-size: 17px;
    outline: none;
    border: none;
    background: none;
    color: white;

}
.textbox label{
    top: 50%;
    left: 5px;
    position: absolute;
    color: white;
    font-size: 17px;
    transform: translateY(-50%);
    pointer-events: none;
    transition: 0.5s;
}
.textbox span::before{
    content: '';
    position: absolute;
    top: 40px;
    left: 0;
    width: 0%;
    height: 2px;
    background: rgb(0, 188, 221);
    transition: 0.5s;
}
.textbox input:focus~label,
.textbox input:valid~label{
    top: -5px;
    color: rgb(1, 185, 176);
}
.textbox input:focus~span::before,
.textbox input:valid~span::before{
    width: 100%;
}



  </style> 