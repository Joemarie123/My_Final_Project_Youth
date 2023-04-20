<template>
    
 
    <v-card class="pa-2"  dark app>

        <v-row >
            <v-col cols="10" md="1"  class="mt-1" sm="12" >
        <v-avatar style="margin-left: 130px;" size="70">
                            <img src="profilepic/rodel.jpg" >
                    </v-avatar>
                </v-col>
                  
                

                <v-col cols="10" md="6" sm="12" class="ml-7 ml-md-14">
     
        <h2 class="font-weight-light">YOUTH ENUMERATOR </h2>
        <P class="font-weight-light">Rodel Casimina </P>
       
     
    </v-col>


    <v-col cols="10" md="2" sm="12" class="ml-5" dense width="300"  >

   <v-btn color="blue" block  outlined @click="$router.push({ name: 'Youth_Enumerator_List_Member' })">
     <span>Your Youth List</span>
    
   </v-btn>
   
 </v-col>

    <v-col cols="10" md="2" sm="12" class="ml-5" dense width="300"  >
   
   <v-btn  block  outlined @click="$router.push({ name: 'LogInForm' })">
     <span>LOG OUT</span>
    
   </v-btn>
   
 </v-col>

    </v-row>


    </v-card>



</template>