<template>
    

    <div >
  <v-app>
    <Navbar/>
<v-row>


    <v-col lg="5" md="6" sm="12">
      <v-card v-for="items in selected_event" :key="items.id" height="200px">
   <div class="text-center ">
  <v-alert dense dark color="blue darken-3">
    Youth Member Details<strong> </strong>

   </v-alert> 
   </div>



  <p  class="font-weight-bold ml-5">Event Name: {{ items.eventname }} </p>                     

   <p class="font-weight-bold ml-5 mt-n2">Event Date:  {{ items.eventdate }} </p>
   
   <p class="ml-5">Event Details:  {{ items.eventdetails }}  </p>
   
  
  </v-card>
  <v-card>


  <v-col cols="12"  md="11"  class="ml-4 mt-n6">
  
    <v-text-field v-model="search" class="mx-n3" append-icon="mdi-magnify" label="Search" single-line hide-details
                  outlined rounded dense></v-text-field>
            </v-col>


           
    <v-data-table @click='sinag(item-key)' 
      id="mytable"
     
      v-model="selected"
      :headers="headers"
      :items="desserts"
      :items-per-page="7"
      class="wrapper elevation-1"
      item-key="name"
      height="420"
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
        Attended
      </v-btn>
  
    
    </template>

    <template v-slot:top>

    <!--   <v-alert dense dark color="blue darken-3">
    Attendance<strong> </strong>

          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
         
       

            <v-text-field class="mt-n2" v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details
              dark></v-text-field>

       
   </v-alert> -->
  
      </template>

    </v-data-table>
  </v-card>

 
  </v-col>

 <!--    <v-col lg="3" md="12" sm="12" >

      
      <v-card height="650" class="wrapper" >


        <div class="text-center " >
       
            
            <v-alert
            dense
            dark
    color="green darken-2"
   
    >
     NON SINAG MEMBERS <strong> </strong>
    </v-alert>

          </div>
      
    <v-data-table 
    :headers="non_sinagheaders"
    :items="non_sinagmembers"
    :hide-default-footer="true"
    :hide-default-header="true"
   
    >


    <template v-slot:item.image="{ item }">

<v-avatar size="40">
         <img v-bind:src="`/${item.image}`" alt="">
 </v-avatar>

</template>



    <template slot="item.remove_non_sinag"  slot-scope="props_remove_non_sinag">

      <v-btn  text color="red" dark   @click="()=>nonsinagmembro_remove(props_remove_non_sinag.item)">
      <v-icon
      >
      mdi-comment-remove-outline
      </v-icon>
    </v-btn>

    
    </template>

    </v-data-table>


  </v-card>

</v-col> -->





<v-col lg="6" md="6" sm="12" >


<v-card  height="650"  class="wrapper">


  <div class="text-center " >
   
      <v-alert
            dense
     dark
     color="green darken-2"
    >
    Attendees <strong> </strong>
    </v-alert>
    </div>

   

    <v-data-table 

    :headers="sinagheaders"
    :items="sinagmembers"
    :hide-default-footer="true"
    :hide-default-header="true"
    :items-per-page="20"
     
    >

    <template v-slot:item.sinagmark ="{ item }">

      <img width="13" v-bind:src="`/${item.sinagmark}`" alt="">
 </template>

    
    <template v-slot:item.image="{ item }">

<v-avatar size="40">
         <img v-bind:src="`/${item.image}`" alt="">
 </v-avatar>

</template>


    <template slot="item.remove_sinag"  slot-scope="props_remove_sinag">

      <v-btn class="pa-2" outlined color="green" dark @click="()=>editItem(props_remove_sinag.item)">
        Input Hours
      </v-btn>
    
      <v-btn  text color="red" dark  @click="()=>sinagmembro_remove(props_remove_sinag.item)">
      <v-icon
      >
      mdi-comment-remove-outline
      </v-icon>
    </v-btn>
    
    

    </template>

    </v-data-table>

  

</v-card>


<v-col cols="12" offset="1">
            <v-btn  dark width="300" color="blue darken-4" class="rounded-xl" >
             
             Submit

            </v-btn>
       
          
            <v-btn  dark width="300"  color="red darken-4" class="rounded-xl">
             
             cancel

            </v-btn>

            </v-col>
    
</v-col>




</v-row>
    
    
  </v-app>
  
  <v-dialog v-model="dialog" max-width="320" >

    <v-card>
    <v-container>

      <v-col cols="12" sm="12" md="12" class="">
                                    <div class="text-center ">
                                    <v-alert dense dark color="blue darken-3">
                                      Input Hours<strong> </strong>

                                       </v-alert>
                                 </div>
                               
                            </v-col>
                            <v-row>

<v-col cols="10" md="3"  class="ml-4">
<v-avatar size="50">
<img v-bind:src="`/${editedItem.image}`" alt="">

</v-avatar>

</v-col>  


<v-text-field
class="ml-n4 mt-2"
v-model="editedItem.name"
flat solo 
readonly
label="Name">
</v-text-field>

<v-col cols="10" md="9" offset="1" class="mt-n6">
        <v-select
                     v-model="editedItem.hours"
                      :items="['1 Hour', '2 Hours' , '3 Hours' , '4 Hours', '5 Hours', '6 Hours' , '7 Hours' , '8 Hours']"
                      label="Select Hours"
                      prepend-inner-icon="mdi-clock"
                    
         ></v-select>

         <v-checkbox-group class="mt-1" >

          <v-checkbox v-model="applytoall"  class="mt-n2"   label="Apply To ALL"></v-checkbox>

         </v-checkbox-group>

        </v-col> 

</v-row>


      <v-row>
       
       
      
              <v-col offset="1" cols="5" class="mt-n2"   >
             
              <v-btn @click="save"  color="blue" class="rounded-xl" >
                <v-icon left>mdi-account-check</v-icon>
             SAVE
              </v-btn>
          
            </v-col>
          

              <v-col offset="" cols="4" class="mt-n2"  >
               
              <v-btn @click="close" color="green" class="rounded-xl">
                <v-icon left>mdi-account-check</v-icon>
             CLOSE
              </v-btn>
            </v-col>
          


      </v-row>
   
    </v-container>
  </v-card>
    </v-dialog>


</div>





   
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
     
     
      applytoall:false,
      dialog_for_input_hours:false,
      dialog:false,
      dialog_sample:false,
      
     /*  selected1: [ ],
      headers1: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name',
        },
      
      ],
 */


      /* selected: [{name:'first',address:'',gender:'',contact:''}], */
      editedItem:[


      ],

      sinagmembers:[
 
      ],

      non_sinagmembers:[


      ],


      selected:[], 
     
      search: '',
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

      sinagheaders: [

      { text: 'Sinag Image', value: 'sinagmark',  align: 'center', width: '10 '  },
      { text: 'Image', value: 'image',  align: 'center' },

        {
          text: 'Full Name',
          align: 'left',
          sortable: false,
          value: 'name',
        },{
          text:'Hours comitted',
          value:'hours',
        },

        { text: 'Actions', value: 'edithours',  align: 'center', sortable: false },
        { text: 'Actions', value: 'remove_sinag',  align: 'center', },


      ],

      non_sinagheaders: [
      { text: 'Image', value: 'image',  align: 'center' },

      {
          text: 'Full Name',
          align: 'left',
          sortable: false,
          value: 'name',
        },
    
        { text: 'Actions', value: 'remove_non_sinag',  align: 'center', },


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

        selected_event:[],

      desserts: [
        {
            
          name: 'Rendon Joemarie Odtojan',
        /*   sinagmember:true, */
        sinagmark:  'torch.png',
          image: 'profilepic/jom.jpg'
       
        },
        {

        name: 'Alcala Rey Naldo',
        /*   sinagmember:true, */
        sinagmark:  'torch.png',
          image: 'profilepic/reyalcala.png'
         
        },
        {
          name: 'Curay Honey Marjie',
          /* sinagmember:false, */
          sinagmark:  'torchblank.png',
          image: 'profilepic/curay.png'
        
        },
        {
          name: 'Pablo Escobar Roland',
       /*    sinagmember:false, */
       sinagmark:  'torchblank.png',
          image: 'profilepic/escobar.png'
          
         
        },
        {
          name: 'NEil Arms Trong',
        /*   sinagmember:false, */
        sinagmark:  'torchblank.png',
          image: 'profilepic/armstrong.png'

          

        },
        {
          name: 'Jelly bean Del Cruz',
       /*    sinagmember:true, */
       sinagmark:  'torch.png',
          image: 'profilepic/Screenshot_1.png'
         
        },
        {
          name: 'Mahusay Jograd JOGZ',
        /*   sinagmember:true, */
        sinagmark:  'torch.png',
          image: 'profilepic/jogz.jpg'
         
        },
        {
          name: 'Benjamin Roble',
      /*     sinagmember:true, */
      sinagmark:  'torch.png',
          image: 'profilepic/Neil.jpg'
        
        },
        {
          name: 'LeBron Raymone James',
        /*   sinagmember:true, */
        sinagmark:  'torch.png',
          image: 'profilepic/lebron.png'


        },
        {
          name: 'Wardell Stephen Curry II',
        /*   sinagmember:false, */
        sinagmark:  'torchblank.png',
          image: 'profilepic/curry.png'

        },

        {
          name: 'Kevin Wayne Durant',
        /*   sinagmember:true, */
        sinagmark:  'torch.png',
          image: 'profilepic/durant.png'

        },

        {
          name: 'James Edward Harden Jr.',
      /*     sinagmember:true, */
          sinagmark:  'torch.png',
          image: 'profilepic/harden.png'

          
        },
        {
          name: 'Albert Einstein',
       /*    sinagmember:true, */
             sinagmark:  'torch.png',
          image: 'profilepic/albert.png'

        },
        {
          name: 'Antonio Narciso Luna de San Pedro',
      /*     sinagmember:true, */
         sinagmark:  'torch.png',
          image: 'profilepic/luna.png'
        },

     
      ],
    }
  },

  created() {
      this.selected_event.push(this.listevent.find(e => e.id == this.$route.params.id));

      // console.log("selected=>", this.selected);
      // console.log("selected=>", this.$route.params.id);
  },

/* 
  methods: {

    sinag(item) {      
      this.selected.push(item.name);
      
      this.sinagmembers.push(item.name,'0');
    }
  
  },


  created(){
    console.log("sss");// eslint-disable-line no-console
    this.sinagmembers.push({..."jogz"});
    console.log(this.sinagmembers.name);// eslint-disable-line no-console
  }
 */
 computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },


 methods:{
/* 
  sinagmembro(item){
    if(item.sinagmember == true)

    this.sinagmembers.push({image: item.image, name: item.name ,hours: 0,sinagmember: item.sinagmember})

    else



   this.non_sinagmembers.push({image: item.image, name: item.name,sinagmember: item.sinagmember})

    
    this.desserts=this.desserts.filter((nem)=>nem.name !== item.name);
  


    console.log(item.name);// eslint-disable-line no-console
    console.log(this.selected);// eslint-disable-line no-console
    console.log("sinagmember");// eslint-disable-line no-console
  },
 */

  sinagmembro(item){
    

    this.sinagmembers.push({ sinagmark: item.sinagmark, image: item.image, name: item.name ,hours: 0,sinagmember: item.sinagmember})
    this.desserts=this.desserts.filter((nem)=>nem.name !== item.name);
  
    console.log(item.name);// eslint-disable-line no-console
    console.log(this.selected);// eslint-disable-line no-console
    console.log("sinagmember");// eslint-disable-line no-console
  },


 /*    nonsinagmembro_remove(items){

      this.desserts.push({image: items.image, name: items.name,sinagmember: items.sinagmember})

       this.non_sinagmembers=this.non_sinagmembers.filter((nem)=>nem.name !== items.name); 
      
    },
 */

    sinagmembro_remove(items){

this.desserts.push({  sinagmark: items.sinagmark,   image: items.image, name: items.name,sinagmember: items.sinagmember})

 this.sinagmembers=this.sinagmembers.filter((nem)=>nem.name !== items.name); 

},

editItem (item) {
        this.editedIndex = this.sinagmembers.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
        console.log(this.editedItem)// eslint-disable-line no-console
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.sinagmembers[this.editedIndex], this.editedItem)
        } else {
          this.sinagmembers.push(this.editedItem)
  
        }
        
        if(this.applytoall == true){
          for (let i = 0; i < this.sinagmembers.length; i++) {
        this.sinagmembers[i].hours=this.editedItem.hours
        }
        }

        this.close()
      },


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

  

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

          
   

  
}

</script>


<style scoped>


/* .v-text-field .v-input__control .v-input__slot {
    min-height: auto !important;
    display: flex !important;
    align-items: center !important;
  }
 */
 .v-text-field .v-input__control .v-input__slot .v-input__append-inner {
  margin-top: 5px !important;
}
.theme--light.v-icon {
  color: blue !important;
}
.v-input--selection-controls__ripple.green--text {
   color: blue !important;
}


.wrapper{
  
  box-shadow: 0 0 8px rgb(0, 0, 0);

}


.brgy-hover {
   
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



.brgy-hover:focus {
   outline: none;
}

.btn-hover.color-1 {
  /*  background-image: linear-gradient(to right, #186f94, #0e7e48,  #0c8a4d,  #078045);
   box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.644); */
}

</style>