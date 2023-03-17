<template>
<v-app>


<v-row>
<v-col cols="12" lg="5" md="5" sm="12"  >

  <v-card  elevation="6" >
    <v-col cols="12" sm="12" md="12" class="">
 <div class="text-center ">
          <v-alert dense dark
     color="green darken-4">
     Announcement<strong> </strong>

 </v-alert>
 </div>
                                                                                <!--  <p class="text-center font-weight-bold" > </p> -->
  </v-col>

    <v-col cols="12" >
<v-text-field  class="some-style mx-3"  readonly flat  value="March 7,2023 Araw Nang Tagum"></v-text-field>
</v-col>

  </v-card>

  <v-col cols="12">
    
    <v-card elevation="7" >
      <v-col cols="12" sm="12" md="12" class="">
      <div class="text-center ">
       <v-alert dense dark
             color="green darken-4">
             Upcoming Event<strong> </strong>

           </v-alert>
       </div>
                                                                                <!--  <p class="text-center font-weight-bold" > </p> -->
      </v-col>

      
      <v-col cols="12">
<v-text-field  flat class="some-style mx-3" value="Name Event: Tagum Youth Dota 2 Tournament "></v-text-field>
</v-col>

<v-col cols="12">
<v-text-field class="some-style mx-3"  style=" margin-top: -28px;" flat  value="Date Event: March 4,2023"></v-text-field>
</v-col>


<v-col cols="12">
    <v-textarea
    class="mx-2"
    
    readonly
    style=" margin-top: -5px;" 
          outlined
          name="input-7-4"
          label="Event Details"
          value="The Dota 2 esports scene is very active. Each year, Valve hosts several seasons of Dota Pro Circuit regional leagues. At the end of the tournament season, the best teams compete at The International, which is the name of the Dota 2 World Championship."
        ></v-textarea>
      </v-col>  
  </v-card>

  </v-col>


</v-col>



  
<v-col cols="12" sm="12" lg="7"  md="7" >
  
  <v-card elevation="6">


    <v-data-table
         
         :headers="headers"
         :items="desserts"
         :items-per-page="7"
         
         class="pa-2"
          tile    
         height="440px"
         :hide-default-footer="true"
         :search="search_events"
       >
    
       <template v-slot:top>
        <v-alert dense dark
        color="green darken-4">
                <v-row >
        <v-col sm="12" md="5" offset="1" >
          <h2 class="white--text   text-center" >Events History</h2>
        </v-col>
        <v-col
          md="6"
         
        >
        <v-text-field  v-model="search_events" append-icon="mdi-magnify" label="Search" single-line hide-details
                  outlined rounded dense></v-text-field>
        </v-col>
      </v-row>
    </v-alert>

            
                </template>
           
      </v-data-table>
    </v-card>
<!--  <v-data-table  :headers="headers" :items="desserts" :search="search_events" class="">
      <template v-slot:top>
          <v-toolbar flat dark color="blue darken-3">
            
           

              <v-text-field class="mt-5" v-model="editedItem.name" flat  readonly></v-text-field>
              <v-spacer></v-spacer>
              <v-spacer></v-spacer>
              <v-text-field v-model="search_events" append-icon="mdi-magnify" label="Search" single-line hide-details
                  outlined rounded dense></v-text-field>
              <v-divider class="mx-4" vertical inset></v-divider>

          
           
          </v-toolbar>
      </template>
    
  </v-data-table>
 -->



    </v-col>


</v-row>




<Youth_Member_Navbar/>

</v-app>

</template>



<script>


import Youth_Member_Navbar from '@/views/Youth_Member_AR/Youth_Member_Navbar' 

export default {
  name: 'App',

  components: {
   /*  LogInForm, */
   Youth_Member_Navbar,
   /* YouTherecord, */

   /* Footer */
  },

  data () {
    return {

      search_events: '',
      headers: [

{ text: 'Event Name', value: 'eventname',  align: 'left' },

  {
 
    text: 'Date',
    align: 'start',
    value: 'eventdate',
    

  },
  { text: 'Event Details',  align: 'left', value: 'eventdetails' },

],
desserts: [
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
    eventname: 'Tagum Youth Dota 2 Tournament',
          eventdate: 'December 4,2022',
          eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',

    
  },
  {
    eventname: 'Tagum Youth Mobile Legends Tournament',
          eventdate: 'December 4,2022',
          eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',

  },

  {
    eventname: 'Tagum Youth Mobile Legends Tournament',
          eventdate: 'December 4,2022',
          eventdetails: 'The tallest Christmas tree in the Philippines was illuminated on Wednesday night in Tagum City, Davao del Norte.',

  },



],
    
    }

  }
  

    };



</script>






<style scoped> 

.some-style >>> .v-input__slot::before {
  border-style: none !important;
}

.btn-hover {
   
   font-size: 16px;

   cursor: pointer;
   margin: 10px;
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



.btn-hover.color-5 {
   background-image: linear-gradient(to right, #186f94, #0e7e48,  #0c8a4d,  #078045);
   box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.644);
}



</style>