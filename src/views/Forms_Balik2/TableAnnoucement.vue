<template>
    <v-app>
   
     <v-container>
       
       <v-row>
                 <v-col cols="12">
 
   <v-data-table 
   :search="search"
   :headers="headers" 
   :items="desserts" 
   sort-by="calories" class="pa-2 btn-hover color-1 elevation-1" 
   @click:row="onRowClick(args)" 
   dark>

     <template v-slot:top>
       
      <v-row>

<v-col cols="12" md="1" class="mt-4">
<v-avatar size="58">
<img class="pa-1" src="/createuseraccount.png" alt="">
</v-avatar>
</v-col>

<v-col cols="12" sm="11" md="2" class="mt-6">
Announcement List
</v-col>

<v-divider class="mx-4" inset vertical></v-divider>
<v-spacer></v-spacer>


<v-col cols="12" lg="4" md="4" sm="12">
<v-text-field v-model="search" class="btn-hover" append-icon="mdi-magnify" label="Search" single-line hide-details
  dark></v-text-field>
</v-col>

<v-col cols="12" lg="4" md="12" sm="4" class="ml-n3">
<v-btn color="blue" tile class="btn-hover"  @click="dialog_Create_Announcement = true">
  <v-icon left>mdi-account-check</v-icon>
 Create Announcement
</v-btn>
</v-col>


</v-row>
 
         <v-dialog   v-model="dialog_Create_Announcement" max-width="500px"  >
          <v-card >
            <v-container>
          <v-row>

                                            
          <v-col cols="12"  sm="12" md="12" class="">
          <div class="text-center ">
         <v-alert dense dark color="blue darken-3">
            Create Announcement<strong>
</strong>

         </v-alert>
</div>

</v-col>

<v-col  cols="10" sm="10" md="10"
 style="margin-left: 20px; margin-top: -20px;">
   <v-text-field height="10" dense outlined label="Announcement Name"></v-text-field>
   </v-col>

   <v-col cols="10" sm="10" md="10 "
 style="margin-left: 20px; margin-top: -30px;">
   <v-text-field height="10" dense type="date" outlined label="Date Announcement"></v-text-field>
   </v-col>



   <v-col cols="10" sm="10" md="10"
 style="margin-left: 20px; margin-top: -30px;">
   <v-textarea   outlined label="Announcement Details"></v-textarea>
   </v-col>


</v-row>  

<v-row>

<v-col cols="10" sm="12" md="12" class="mt-n4 ">

    <v-btn color="green" class="pa-2 ml-5 mt-n4"
        outlined dark
        @click="dialog_Create_Announcement = false">
        Continue
    </v-btn>

    <v-btn color="red" class="pa-2 ml-2 mt-n4" outlined
        dark @click="dialog_Create_Announcement = false">
        Close
    </v-btn>
</v-col>

</v-row>

</v-container>                                                  
</v-card>                                                     
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
 
 </v-col>
       
 </v-row>
 
 </v-container>
 </v-app>
 </template>
   
 <script>

 
 export default {
   
   data: () => ({
    search: '',
    
     dialog_Create_Announcement: false,
 
 
 
     dialog: false,
     dialogDelete: false,
 
 
 
     headers: [
       {
         text: 'Announcement Name',
         align: 'start',
         sortable: false,
         value: 'Announcementname',
       },
       { text: 'Date', value: 'Announcementdate' },
       { text: 'Event Details', value: 'Announcementdetails' },
       { text: 'Actions', value: 'actions', sortable: false },
     ],
     desserts: [],
     editedIndex: -1,
     editedItem: {
        Announcementname: '',
        Announcementdate: '',
        Announcementdetails: '',
 
 
     },
     defaultItem: {
        Announcementname: '',
        Announcementdate: '',
        Announcementdetails: '',
 
 
     },
 
 
 
   }),
 
   components: {
       
        
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
     saves(date) {
       this.$refs.menu.save(date);
     },
 
    
 
 
 
     initialize() {
       this.desserts = [
         {
            Announcementname: 'Tagum Lighting of Christmas tree',
            Announcementdate: 'December 4,2022',
            Announcementdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
 
         },
         {
            Announcementname: 'Youth Event Basket Ball Men',
            Announcementdate: 'January 4,2023',
            Announcementdetails: 'The Basketball Tournament is an open-application, single-elimination tournament played each summer in Tagum City',
 
         },
         {
            Announcementname: 'Youth Volley Ball Apokon Vs. Bincungan',
            Announcementdate: 'February 8,2023',
            Announcementdetails: 'The Volley Ball Tournament is an open-application, single-elimination tournament played each summer in Tagum City',
 
         },
         {
            Announcementname: 'Youth Event Sepak takraw',
            Announcementdate: 'March 11,2022',
            Announcementdetails: 'Sepak Takraw is a foot volleyball game where players touch as well as handle the ball using only their feet, knee, chest and head.',
 
         },
         {
            Announcementname: 'Tagum Lighting of Christmas tree',
            Announcementdate: 'December 4,2022',
            Announcementdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
 
         },
         {
            Announcementname: 'Tagum Lighting of Christmas tree',
            Announcementdate: 'December 4,2022',
            Announcementdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
 
         },
         {
            Announcementname: 'Tagum Lighting of Christmas tree',
            Announcementdate: 'December 4,2022',
            Announcementdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
 
         },
         {
            Announcementname: 'Tagum Lighting of Christmas tree',
            Announcementdate: 'December 4,2022',
            Announcementdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
 
         },
         {
            Announcementname: 'Tagum Lighting of Christmas tree',
            Announcementdate: 'December 4,2022',
            Announcementdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
 
         },
 
         {
            Announcementname: 'Tagum Lighting of Christmas tree',
            Announcementdate: 'December 4,2022',
            Announcementdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
 
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
 
 
     onRowClick(args) {
      // this will log all arguments, as array
    /*   this.$router.push({name: "LogInForm", }); */
    this.editedItem = Object.assign({}, args)
    console.log(this.displayitem)// eslint-disable-line no-console
     /*  console.log(args); // eslint-disable-line no-console */
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
   border-radius: 30px;
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