<template>
    
    <v-app>
             
        <Navbar/>
        <v-container>

            <v-row>
                <v-col cols="12">

                    <v-row>
          
            <v-col cols="12" sm="12" md="12" lg="12" >
                
                <DatatableAttendance/>
     
                </v-col>
    

        </v-row>


                </v-col>

                
            </v-row>

            
        </v-container>



   
    </v-app>

</template>


<script>
import Navbar from '@/components/Navbar' 

import DatatableAttendance from '@/views/ADMIN_FILE/DatatableAttendance' 

export default {
  name: 'App',

  components: {

   Navbar,
   DatatableAttendance,
  },

  data: () => ({
    //
  }),

  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
  },
  
};


</script>


<style scoped>

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

  h1 {


    font-size:27px;
    color: rgb(251, 253, 251);


}




  </style> 