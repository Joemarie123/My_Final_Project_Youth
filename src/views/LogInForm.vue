<template>
    
  <div >
<v-app id="inspire" class="background">
  <div class="color-overlay"></div>
  <v-main class="d-flex justify-center align-center" >

    <v-col cols="10" 
    lg="5" 
    class="mx-auto"
    

    >
      

      <v-form @submit.prevent="submitHandler" ref="form">

    <v-container>
      <v-layout row wrap>
        
       
        <v-card class="wrapper">
          <div class="text-center " >
           <!--  <v-avatar size="100" color="indigo lighten-4">
              <v-icon size="40" color="indigo">mdi-account</v-icon>
            </v-avatar> -->
            
            <h1  >TAGUM CITY YOUTH DEVELOPMENT</h1>
          </div>
          
          <v-row>

            <v-col
            offset="1"
            cols="10"

            >

          <v-text-field
          
           
            label="User Name"
           
            type="sample"
              v-model="usernamenako"


            prepend-icon="mdi mdi-account"
               

          ></v-text-field>
          
          


      
          <v-text-field
          v-model="password"
        
          
         
            label="Password"
           
            type="password"
            
          

            prepend-icon="mdi-key"
                     counter

                     :rules="passwordRules"
                     
          ></v-text-field>
      
        </v-col>
        </v-row>

        <v-container   >
        
            <v-row >
              <v-col offset="1" cols="6"  size="9" >
             
              <v-btn  outlined type="submit" color="blue darken-4" class="rounded-xl" @click="Login_Events">
                <v-icon left>mdi-account-check</v-icon>
              LOG IN
            
              </v-btn>
          
            </v-col>
          

              <v-col  offset="" cols="5" size="9" @click="$router.push({ name: 'SignUpMemberYouth' })" >
               
              <v-btn outlined color="green darken-3" class="rounded-xl">
                <v-icon left>mdi-account-check</v-icon>
             SIGN UP
              </v-btn>
            </v-col>
              </v-row>

            </v-container>

        </v-card>

 
      </v-layout>
    </v-container>
  </v-form>
  </v-col>
</v-main>
</v-app>
</div>

</template>

<script>


export default {
name: 'App',


data: () => ({
  loading:false,
  snackbar:false,
  passwordShow:false,
  userName: '',
  
/*   emailRules: [
   v => !!v || 'E-mail is required',
   v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
  ],
*/

  password: '',
  
/*   passwordRules: [
    
    v => !!v || 'Password is required',
    
    v => (v && v.length >= 6) || 'Password must be 6  characters or more!',
    
  ], */
  
}),

methods:{
  submitHandler(){
    if (this.$refs.form.validate()){
        this.loading = true
      setTimeout(()=> {
        this.loading = false
        this.snackbar = true
      },3000)
    }
  },


  Login_Events()
  {

    if(this.usernamenako=="SK-charme",this.password=="123")
    {

       this.$router.push('/SK_DashBoard'); 
      }

      else if (this.usernamenako=="Youth-jesica",this.password=="12345"){

        this.$router.push('/Youth_Member_Dashboard'); 

      }


      else if (this.usernamenako=="Youth-Enumerator-rodel",this.password=="112233"){

this.$router.push('/YouthRegisterEnumerator'); 

}


     else{

      this.$router.push('/DashboardVersion4'); 
     }  




  }


}
};
</script>




<style>
/* input[type="sample"]
{
  border: none;
  border-bottom: 1px solid rgb(255, 255, 255);
  background: transparent;
  outline: none;
  
  width: 100%;
  color: rgb(255, 255, 255);

}

input[type="password"]
{
  border: none;
  border-bottom: 1px solid rgb(255, 255, 255);
  background: transparent;
  outline: none;
  
  width: 100%;
  color: rgb(255, 255, 255);

} */

/* .custom-placeholer-color input::placeholder {
color: rgb(255, 255, 255)!important;
opacity: 1;
} */

/* .custom-label-color .v-label {
color: rgb(255, 255, 255);
opacity: 1;
} */

/* .custom-placeholer-color input,
.custom-label-color input{
color: rgb(255, 255, 255)!important;
} */
</style>


<style scoped>


.v-sheet.v-card{
  border-radius: 25px 25px 25px 25px;
}
.v-btn{
  border-radius: 25px 25px 25px 25px;
}


h1 {
  color: rgb(55, 185, 16);
-webkit-text-fill-color: rgb(42, 201, 95); /* Will override color (regardless of order) */
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: rgb(0, 0, 0)
}

.wrapper{
  
  position: absolute;
  left: 50%;
  top: 50%;
  width: 400px;
  transform: translate(-50%,-50%);
  background: rgba(247, 246, 246, 0.822);

  
  border-radius: 20px;
  box-shadow: 10px 10px 15px rgba(49, 47, 47, 0.15);
  box-shadow: 0 0 8px rgb(201, 181, 1);


}
.background{

margin: 0;
padding: 0;
background-image: url(/Editedtagum.jpg) !important;
color:beige;
position:relative;
height: 100vh;
align-items: center;
justify-content: center;
display: flex;

background-size:cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;

} 

.color-overlay {
  background: radial-gradient(circle at -1% 57.5%, rgba(19, 170, 82, 0.137) 0%, rgb(0, 102, 43) 90%);

  width: 100%;
  height: 100%;
  opacity: .5;
  position: absolute
}




</style>

