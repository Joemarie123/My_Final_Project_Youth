<template>
  <div>
    <v-app id="inspire" class="background">
      <v-main class="d-flex justify-center align-center">
        <v-col cols="10" md="4" class="mx-auto">
          <v-form @submit.prevent="submitHandler" ref="form">
            <v-container>
              <v-layout row wrap>
                <v-card class="mx-auto" style="margin-top: 150px">
                  <div class="text-center pa-4">
                    <h2 class="">
                    TCYDO
                    </h2>
                  </div>

                  <v-row class="text-form pa-6">
                    <v-col>
                      <!-- start snackbar -->
                      <v-snackbar v-model="snackbar" :top="'top'" :color="alertColor">
                        {{ text }}

                        <template v-slot:action="{ attrs }">
                          <v-btn
                            color="pink"
                            text
                            v-bind="attrs"
                            @click="snackbar = false"
                          >
                            Close
                          </v-btn>
                        </template>
                      </v-snackbar>
                      <!-- end of snacksbar -->
                      <v-col cols="12" sm="12" md="12">
                        <v-text-field
                          v-model="email"
                          label="Email or Username"
                          color="green"
                          type="sample"
                          prepend-inner-icon="mdi mdi-account mdi-green"
                          required
                          outlined
                          dense
                        ></v-text-field>

                        <v-text-field
                          v-model="password"
                          label="Password"
                          color="green"
                          type="password"
                          prepend-inner-icon="mdi-key mdi-green"
                          required
                          outlined
                          dense
                        ></v-text-field>
                        <v-btn
                          type="submit"
                          color="green"
                          dark
                          @click="userlogin"
                          block
                        >
                          <!-- <v-icon left>mdi-account-check</v-icon> -->
                          LOG IN
                        </v-btn>
                      </v-col>
                      <v-divider></v-divider>
                      <v-container>
                        <v-col align="center" justify="space-around" style="margin-bottom:  -90px">
                        New User?
                        <div
                          color="yellow"
                          class="btn yellow--text subtitle-2"
                          dark
                          @click="$router.push({ name: 'RegisterPage' })"
                        >

                          REGISTER
                      </div>
                      </v-col>
                      </v-container>

                      
                    </v-col>
                  </v-row>

                  <v-container>
                    <!--  <v-card-actions class="justify-center"> -->
                    <v-row>
                      <v-col offset="2" size="8">
                        <v-dialog v-model="dialog" max-width="290">
                          <v-card>
                            <v-card-title class="text-h5">
                              Login Denied
                            </v-card-title>

                            <v-card-text>
                              {{ this.loginCorrection }}
                            </v-card-text>

                            <v-card-actions>
                              <v-spacer></v-spacer>

                              <v-btn
                                color="green darken-1"
                                text
                                @click="dialog = false"
                              >
                                Got it!
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
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
/* eslint-disable */
import { mapActions } from "vuex";
export default {
  name: "App",
  components: {},
  data: () => ({
    alertColor: 'success',
    inputcheck: false,
    dialog: false,
    passwordShow: false,
    email: "",
    password: "",
    loginCorrection: "",
    snackbar: false,
    text: `Please input fields`,
  }), 
  created() {              
   
  },
  methods: {
    ...mapActions("users", ["Loginuser"]),
    submitHandler() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        setTimeout(() => {}, 3000);
      }
    },
    // userReg() {
    //   this.$createUserWithEmailAndPassword(this.$FBAUTH, this.email, this.password)
    //   .then((userCredintials) =>  {
    //     console.log(userCredintials)
    //     this.alertColor = 'success'
    //         this.snackbar = true
    //         this.text = "Registration Successful!"
    //         ///redirect somewhere
       
    //   }).catch(error=> {
    //     console.log(error.message)
    //     if(error.message == "Firebase: Error (auth/invalid-email).") {
    //        // alert("Pretty error message!")
    //        this.alertColor = 'error'
    //         this.snackbar = true
    //         this.text = "Pretty error message!"
    //     }
    //   })
    // },
    userSignin() {
      if(this.email == "" || this.password==""){
        this.alertColor = 'success'
            this.snackbar = true
            this.text = "Please input fields."
            return
      }
      this.$signInWithEmailAndPassword(this.$FBAUTH, this.email, this.password)
        .then((userCredentials) => {
          console.log(userCredentials)
          this.alertColor = 'success'
          this.snackbar = true
          this.text = "Successful Login!"
          this.$router.push("DashboardVersion4");
          ///redirect somewhere
        }).catch(error => {
          console.log(error.message)
          if (error.message == "Firebase: Error (auth/invalid-email).") {
            // alert("Pretty error message!")
            this.alertColor = 'warning'
            this.snackbar = true
            this.text = "Login Failed. There is a problem with your email or password. Please try again."
          }
          else if (error.message == "Firebase: Error (auth/wrong-password).") {
            this.alertColor = 'warning'
            this.snackbar = true
            this.text = "Login Failed. There is a problem with your email or password. Please try again."
          }
          else if (error.message == "Firebase: Error (auth/user-not-found).") {
            this.alertColor = 'warning'
            this.snackbar = true
            this.text = "The email / password could not be found."
          }
        })
    },
    userlogin() {
      
      this.userSignin()
      return
     /*  let data = new FormData();
      data.append("email", this.email);
      data.append("password", this.password);
      console.log(this.email);
      console.log(this.password);
      if (this.email.length == 0) {
        this.snackbar = true;
      } else {
        this.Loginuser(data).then((e) => {
          console.log("Hello!");
          if (e == 0) {
            this.loginCorrection = "Incorrect Password!";
            this.dialog = true;
          } else if (e == 2) {
            this.loginCorrection = "No user account found!";
            this.dialog = true;
          } else {
            this.$router.push("DashboardVersion4");
          }
        });
      } */
    },
  },
};
</script>

<style scoped>
input[type="sample"] {
  border-bottom: 1px solid rgb(28, 110, 4);
  outline: none;
  color: rgb(28, 110, 4);
}
input[type="password"] {
  outline: none;
  color: rgb(28, 110, 4);
}
.custom-placeholer-color input::placeholder {
  color: rgb(28, 110, 4) !important;
}
.custom-label-color .v-label {
  color: rgb(28, 110, 4);
  opacity: 1;
}
.custom-placeholer-color input,
.custom-label-color input {
  color: rgb(28, 110, 4) !important;
}
.v-sheet.v-card {
  border-radius: 25px 25px 25px 25px;
}
h2 {
  color: rgb(28, 110, 4);
  margin-top: 20px;
}
.wrapper {
  position: absolute;
  left: 50%;
  top: 250%;
  /* width: 400px; */
  transform: translate(-50%, -50%);
  border-radius: 20px;
  box-shadow: 10px 10px 15px rgba(49, 47, 47, 0.15);
  box-shadow: 0 0 8px rgb(201, 181, 1);
}
.background {
  margin: 0;
  padding: 0;
  background-image: url("../assets/cover4.jpg") !important;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
</style>