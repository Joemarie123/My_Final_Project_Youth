<template>
    <v-app>
   
     <v-container>
       
       <v-row>
                 <v-col cols="12">
 
   <v-data-table 
   :headers="headers" :items="desserts" 
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
Events List
</v-col>

<v-divider class="mx-4" inset vertical></v-divider>
<v-spacer></v-spacer>


<v-col cols="12" lg="4" md="4" sm="12">
<v-text-field v-model="search"  dense rounded outlined  class="btn-hover" append-icon="mdi-magnify" label="Search" single-line hide-details
  dark></v-text-field>
</v-col>

<v-col cols="12" lg="4" md="12" sm="4" class="ml-n3">
<v-btn color="blue" tile class="btn-hover"  @click="dialog_Create_Events = true">
  <v-icon left>mdi-account-check</v-icon>
 Create Events
</v-btn>
</v-col>


</v-row>
 
 
         <v-dialog   v-model="dialog_Create_Events" max-width="500px"  >
          <v-card >
            <v-container>
          <v-row>

                                            
          <v-col cols="12"  sm="12" md="12" class="">
          <div class="text-center ">
         <v-alert dense dark color="blue darken-3">
Create Events<strong>
</strong>

         </v-alert>
</div>

</v-col>

<v-col  cols="10" sm="10" md="10"
 style="margin-left: 20px; margin-top: -20px;">
   <v-text-field height="10" dense outlined label="Event Name"></v-text-field>
   </v-col>

   <v-col cols="10" sm="10" md="5 "
 style="margin-left: 20px; margin-top: -30px;">
   <v-text-field height="10" dense type="date" outlined label="Date Event"></v-text-field>
   </v-col>

   <v-col cols="10" sm="10" md="5" class="mt-n8 ml-5 ml-md-n1">
   <v-text-field height="10" dense 
   hide-spin-buttons
  type="number" maxlength="5"
  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" 
  
   outlined label="Num# Participants"></v-text-field>
   </v-col>

   <v-col cols="10" sm="10" md="10"
 style="margin-left: 20px; margin-top: -30px;">
   <v-textarea   outlined label="Event Details"></v-textarea>
   </v-col>


</v-row>  

<v-row>

<v-col cols="10" sm="12" md="12" class="mt-n4 ">

    <v-btn color="green" class="pa-2 ml-5 mt-n4"
        outlined dark
        @click="dialog_Create_Events = false">
        Continue
    </v-btn>

    <v-btn color="red" class="pa-2 ml-2 mt-n4" outlined
        dark @click="dialog_Create_Events = false">
        Close
    </v-btn>
</v-col>

</v-row>


</v-container>                                                  
</v-card>                                                     
         </v-dialog>
 


         <v-dialog v-model="dialog" max-width="500px" tile>
 
          <v-card >
            <v-container>
          <v-row>

                                            
          <v-col cols="12"  sm="12" md="12" class="">
          <div class="text-center ">
         <v-alert dense dark color="blue darken-3">
Edit Item<strong>
</strong>

         </v-alert>
</div>

</v-col>

<v-col  cols="10" sm="10" md="10"
 style="margin-left: 20px; margin-top: -20px;">
   <v-text-field height="10" v-model="editedItem.eventname" dense outlined label="Event Name"></v-text-field>
   </v-col>

   <v-col cols="10" sm="10" md="5 "
 style="margin-left: 20px; margin-top: -30px;">
   <v-text-field  v-model="editedItem.eventdate" height="10" dense type="date" outlined label="Date Event"></v-text-field>
   </v-col>

   <v-col cols="10" sm="10" md="5" class="mt-n8 ml-5 ml-md-n1">
   <v-text-field height="10" dense 
   hide-spin-buttons
  type="number" maxlength="5"
  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" 
  v-model="editedItem.participants"
   outlined label="Num# Participants"></v-text-field>
   </v-col>

   <v-col cols="10" sm="10" md="10"
 style="margin-left: 20px; margin-top: -30px;">
   <v-textarea v-model="editedItem.eventdetails"  outlined label="Event Details"></v-textarea>
   </v-col>


</v-row>  

<v-row>

<v-col cols="10" sm="12" md="12" class="mt-n4 ">

    <v-btn color="green" class="pa-2 ml-5 mt-n4"
        outlined dark
        @click="dialog = false">
        Update
    </v-btn>

    <v-btn color="red" class="pa-2 ml-2 mt-n4" outlined
        dark @click="dialog = false">
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
       { text: 'Participants', value: 'participants' ,align: 'center' },
      
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
           eventname: 'Tagum Lighting of Christmas tree',
           eventdate: 'December 4,2022',
           eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
           participants:'200' 
         },
         {
           eventname: 'Youth Event Basket Ball Men',
           eventdate: 'January 4,2023',
           eventdetails: 'The Basketball Tournament is an open-application, single-elimination tournament played each summer in Tagum City',
           participants:'300'
         },
         {
           eventname: 'Youth Volley Ball Apokon Vs. Bincungan',
           eventdate: 'February 8,2023',
           eventdetails: 'The Volley Ball Tournament is an open-application, single-elimination tournament played each summer in Tagum City',
           participants:'200'
         },
         {
           eventname: 'Youth Event Sepak takraw',
           eventdate: 'March 11,2022',
           eventdetails: 'Sepak Takraw is a foot volleyball game where players touch as well as handle the ball using only their feet, knee, chest and head.',
           participants:'250'
         },
         {
           eventname: 'Tagum Lighting of Christmas tree',
           eventdate: 'December 4,2022',
           eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
           participants:'400'
         },
         {
           eventname: 'Tagum Lighting of Christmas tree',
           eventdate: 'December 4,2022',
           eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
           participants:'1000'
         },
         {
           eventname: 'Tagum Lighting of Christmas tree',
           eventdate: 'December 4,2022',
           eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
           participants:'800'
         },
         {
           eventname: 'Tagum Lighting of Christmas tree',
           eventdate: 'December 4,2022',
           eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
           participants:'500'
         },
         {
           eventname: 'Tagum Lighting of Christmas tree',
           eventdate: 'December 4,2022',
           eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
           participants:'100'
         },
 
         {
           eventname: 'Tagum Lighting of Christmas tree',
           eventdate: 'December 4,2022',
           eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',
           participants:'500'
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