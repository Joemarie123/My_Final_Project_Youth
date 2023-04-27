<template>
    <v-app>
     <v-container>
        <v-row>
              <v-col  cols="5" sm="12" md="12" lg="5">
                <v-card class="btn-hover color-1   " rounded-xl dark tile>
  
                  <v-col offset="1" cols="10">
  
                    <div class="text-center">
                      <h1>EDIT USER ACCOUNT</h1>
                    </div>
  
                    
               
                 
                       
                    <v-text-field  prepend-icon="mdi-account " label="User Name" value="SK-charme"  dark></v-text-field>
                    <v-text-field  prepend-icon="mdi-key" label="Password" value="123" type="password" dark></v-text-field>
                    <v-text-field   prepend-icon="mdi-key"  label="Confirm Password" value="123"  type="password" dark></v-text-field>
                
                   
  
                  
                    <v-btn type="submit" outlined  class="white--text mr-2"  color="blue" @click="initialize">
                      <v-icon left>mdi-account-check</v-icon>
                      <h4 class="white--text">Update Account</h4>
                    </v-btn>


                  </v-col>
  
  
  
                  <!--  <v-card-actions class="justify-center"> -->
     </v-card> 
  
  
  
              </v-col>
  
  
  
            </v-row>
     </v-container>
     <SK_NavBar/>
    </v-app>
</template>

<style scoped>
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

 .btn-hover.color-1 {
    background-image: linear-gradient(to right, #186f94, #0e7e48, #0c8a4d, #078045);
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.644);
  }


</style>


<script>

import SK_NavBar from '@/views/Brgy_Sk_Official_AR/SK_NavBar'
export default {
    components: {
        SK_NavBar,

       
      },
      data: () => ({
    }),


    }


</script>