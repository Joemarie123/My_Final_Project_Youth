<template>
    <v-app>
        
        <v-card>

            <v-dialog
      v-model="agreementdialog"
      width="500"
      persistent
    >
   

      <v-card>
        <div class="text-center ">
<v-alert dense dark color="blue darken-3">
Privacy Policy<strong>
     </strong>

 </v-alert>
</div>

<v-col cols="10" sm="12" md="12" class="">
        <p>
            I hereby declare that the details provided in this profiling and assessment are true, accurate, and valid to the best of my knowledge and belief. 
            In submitting TCYIS, I agree that my details will be used for Tagum City Youth Information System and can be accessed by Tagum City Youth Development Officer and Sangguniang Kabataan Chairperson. 
            I understand that my data will be held securely and will not be distributed to third parties and I have a right to change or access my information. I understand that when this information is no longer required for this purpose, my data will be properly disposed.
        </p>
  </v-col>
       
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="agreementdialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>    

            <div class="text-center mt-5">

                <p class="font-weight-bold">YOUTH ASSESSMENT SURVEY QUESTIONNAIRE</p>
            </div>


            <v-stepper v-model="e1" @input="scrollup">
                <v-stepper-header style="font-size: 14px">
                    <v-stepper-step :complete="e1 > 1" step="1" style="height=">
                        1
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-divider></v-divider>

                    <v-stepper-step :complete="e1 > 2" step="2">
                        2
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step :complete="e1 > 3" step="3">
                        3
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step :complete="e1 > 4" step="4">
                        4
                    </v-stepper-step>

                    <v-divider></v-divider>


                </v-stepper-header>





                <v-stepper-items>
                    <!-- YOUTH IDENTIFICATION Stepper -->

                    <v-form ref="formes" v-model="valid" lazy-validation>


                    <v-stepper-content step="1">
                        <v-card class="mb-12" color="grey lighten-4" id="step1">
                            <v-card-text>
                                <v-container>
                                    <H4>YOUTH IDENTIFICATION</H4>
                                    <v-row>

                                        <v-col cols="12" sm="12" md="3" class="mt-4">
                                            <v-select
                                            :rules="rules"
                                            outlined dense height="10"
                                                :items="['Apokon', 'Bincungan', 'Busaon', 'Canocotan', 'Cuambogan', 'La Filipina', 'Liboganon', 'Madaum', 'Magdum', 'Mankilam', 'New Balamban', 'Nueva Fuerza', 'Pagsabangan', 'Pandapan', 'Magugpo Poblacion', 'San Agustin', 'San Isidro', 'San Miguel (Camp 4)', 'Visayan Village', 'Magugpo East', 'Magugpo North', 'Magugpo South', 'Magugpo West']"
                                                label="Select Barangay" prepend-inner-icon="mdi-map-marker"
                                                required></v-select>

                                        </v-col>

                                        <v-col cols="12" sm="12" md="3" class="mt-n5 mt-md-4">
                                            <v-text-field :rules="rules" outlined dense height="10" label="Purok/Sitio,Street,House/Bldg.No"></v-text-field>
                                        </v-col>


                                        <v-col cols="12" sm="12" md="3" class="mt-n5 mt-md-4">
                                            <v-text-field  :rules="rules" outlined dense height="10" label="Date Of Survey " type="date" required color="green">
                                            </v-text-field>
                                        </v-col>

                                        <v-col cols="12" sm="12" md="3" class="mt-n5 mt-md-4">
                                            <v-text-field :rules="rules" 
                                            hide-spin-buttons
                                            type="number" maxlength="11"
                                             oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" 
                                             outlined dense height="10" label="CP # of Respondent" required
                                                prepend-inner-icon="mdi-cellphone-basic">
                                            </v-text-field>

                                        </v-col>
                                       
                                        <v-col  cols="12" md="12" sm="12" class="mt-n4">
                                            <p class="font-weight-bold">
                                                NAME OF RESPONDENT
                                            </p>
                                        </v-col>

                                        <v-col cols="12" sm="12" md="3" class="mt-n5">
                                            <v-text-field :rules="rules"  label="Last Name" outlined dense height="10" required prepend-inner-icon="mdi-account">
                                            </v-text-field>

                                        </v-col>

                                        <v-col cols="12" sm="6" md="3" class="mt-n5">

                                            <v-text-field :rules="rules" outlined dense height="10" label="First Name" required prepend-inner-icon="mdi-account">
                                            </v-text-field>


                                        </v-col>

                                        <v-col cols="12" sm="6" md="3" class="mt-n5">
                                            <v-text-field :rules="rules" outlined dense height="10" label="Middle Name" required prepend-inner-icon="mdi-account">
                                            </v-text-field>
                                        </v-col>

                                        <v-col cols="12" sm="12" md="3" class="mt-n5">
                                            <v-file-input :rules="rules" outlined dense height="10" label="Attached ID here"  accept="image/x-png,image/gif,image/jpeg"></v-file-input>
                                        </v-col>

                                        <v-col cols="12" md="3" sm="12" class="mt-n5">
                                            <v-text-field :rules="rules" outlined dense height="10" label="Birth Day" type="date" required color="green" v-model="birthDate" @input="calculateAge(birthDate)">
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="3" sm="12" class="mt-n5">
                                            <v-text-field :rules="rules"  :value="years" readonly outlined dense height="10" label="Age(As of last Birth Day)" required >
                                                
                                            </v-text-field>

                                            <!-- <p v-if="birthDate">Your age is {{ years }} years, {{ months }} months, and {{ days }} days</p> -->


                                        </v-col>


                                        <v-col cols="12" md="3" sm="12" class="mt-n5">
                                            <v-select
                                            :rules="rules"
                                            :items="['YES', 'NO']"
                                            outlined dense height="10"
                                                label="Was the birth registered with the civil registry office?"
                                                prepend-inner-icon="mdi-map-marker" 
                                                required></v-select>

                                        </v-col>



                                        <v-col cols="12" md="3" sm="12">
                                            <v-select @change="functionselect_civil_status"
                                            class="mt-n5"
                                            outlined dense height="10"
                                            :rules="rules"
                                                :items="['Single', 'Married', 'Widow/er', 'Divorced', 'Common-law/Live-in', 'Unknown']"
                                                label="Marital/Civil Status" prepend-inner-icon="mdi-ring"
                                                v-model="civil_status" required></v-select>
                                        </v-col>


                                        <v-card-text>
                                            <v-container fluid>


                                                <H4 class="mt-n6 ml-n2">YOUTH CHARACTERISTICS</H4>


                                                <v-row>

                                                    <v-col cols="12" sm="12" md="3" class=" mt-3">
                                                        <p class="font-weight-bold">Gender</p>
                                                        <v-radio-group row class="mt-n4">

                                                            <v-radio value="Male" @change="have_you_give_birth_in_the_last_2_years_65 = false,
                                                                if_pregnant_as_of_this_time_72 = false,
                                                                do_you_smoke_or_use_tobacco = true,
                                                                if_married_or_sexually_active_woman_73_1 = true
                                                            " label="Male"></v-radio>



                                                            <v-radio @change="have_you_give_birth_in_the_last_2_years_65 = true,
                                                                if_pregnant_as_of_this_time_72 = false,
                                                                do_you_smoke_or_use_tobacco = true,
                                                                if_married_or_sexually_active_woman_73_1 = true
                                                            " value="Female" label="Female"></v-radio>
                                                        </v-radio-group>

                                                    </v-col>



<v-col cols="12" sm="12" md="3" class="mt-n2 mt-md-2">
<p class="font-weight-bold">Are You A Member of LGBTQ+</p>

 <v-radio-group row class="mt-n4">

<v-radio value="Yes" @click="genderpreferencelgbt = true" label="Yes"></v-radio>
<v-radio value="No"  @change="cleargenderpreference" label="No"></v-radio>
</v-radio-group>


</v-col>

<v-dialog v-model="genderpreferencelgbt" max-width="550px">
<v-card>
    
 <v-container>
    
    <div class="text-center ">
<v-alert dense dark color="blue darken-3">
Gender Preference<strong>
     </strong>

 </v-alert>
</div>

<v-row>

    <v-col cols="12" sm="12" md="12"   >

        <div id="app">

 <v-radio-group row v-model="genderpreferencedawkuno">


    <v-col cols="12" sm="12" md="3"  class="ml-3" >

<v-radio value="Agender"  label="Agender"></v-radio>
<v-radio value="Androgynous"  label="Androgynous"></v-radio>
<v-radio value="Aromantic"  label="Aromantic"></v-radio>
<v-radio value="Asexual"  label="Asexual"></v-radio>
<v-radio value="Bigender"  label="Bigender"></v-radio>
<v-radio value="Biromantic"  label="Biromantic"></v-radio>
<v-radio value="Bisexual"  label="Bisexual"></v-radio>
<v-radio value="Cisgender"  label="Cisgender"></v-radio>
<v-radio value="Demisexual"  label="Demisexual"></v-radio>
<v-radio value="Femme"  label="Femme"></v-radio>

</v-col>



<v-col cols="12" sm="12" md="4"  class="ml-3" >

<v-radio value="Gay"  label="Gay"></v-radio>
<v-radio value="Genderfluid"  label="Genderfluid"></v-radio>
<v-radio value="Genderflux"  label="Genderflux"></v-radio>
<v-radio value="Genderqueer"  label="Genderqueer"></v-radio>
<v-radio value="Heterosexual"  label="Heterosexual"></v-radio>
<v-radio value="Homosexual"  label="Homosexual"></v-radio>
<v-radio value="Intersex"  label="Intersex"></v-radio>
<v-radio value="Lesbian"  label="Lesbian"></v-radio>
<v-radio value="Masc"  label="Masc"></v-radio>
<v-radio value="Non-binary"  label="Non-binary"></v-radio>
</v-col>

<v-col cols="12" sm="12" md="4"  class="ml-3" >

<v-radio value="Omnigender"  label="Omnigender"></v-radio>
<v-radio value="Pangender"  label="Pangender"></v-radio>
<v-radio value="Pansexual"  label="Pansexual"></v-radio>
<v-radio value="Queer"  label="Queer"></v-radio>
<v-radio value="Third Gender"  label="Third Gender"></v-radio>
<v-radio value="Transgender"  label="Transgender"></v-radio>
<v-radio value="Transsexual"  label="Transsexual"></v-radio>
<v-radio value="Two-Spirit"  label="Two-Spirit"></v-radio>
</v-col>


</v-radio-group>

</div>

</v-col>


</v-row>


<v-row>

<v-col cols="12" sm="12" md="12" class="mt-7 ">

    <v-btn color="green" class="pa-2 ml-4 mt-n4"
        outlined dark
        @click="genderpreferencelgbt = false">
        Continue
    </v-btn>

    <v-btn color="red" class="pa-2 ml-2 mt-n4" outlined
        dark @click="genderpreferencelgbt = false">
        Close
    </v-btn>
</v-col>

</v-row>


</v-container>
 </v-card>
 </v-dialog>


                                                    <v-col cols="12" sm="12" md="3" class="mt-n3 mt-md-n2">
                                                        <p class="font-weight-bold">Ethnicity/ tribe: See codes below</p>
                                                      <!--   <v-select
                                                        class="mt-n2"
                                                        outlined dense height="10"
                                                            :items="['Bisaya/ Binisaya', 'Boholano', 'Cagan/ Kagan', 'Cebuano', 'Davawenyo', 'Dibabawon', 'Hiligaynon/ Ilongo', 'Mandaya', 'Manguangan', 'Manobo', 'Mansaka', 'Tagalog', 'Bilaan', 'Kamayo', 'Molbog', 'Kolibugan', 'Yakan', 'Tausug', 'Matigsalug']"
                                                            prepend-inner-icon="mdi-account-convert" v-model="Barangay"
                                                            required></v-select> -->

                                                            <v-select class="mt-n2" :rules="rules" :items="ethnicity" label="Ethnic Group" required outlined dense color="success"
                                                            >
                                                                   </v-select>

                                                    </v-col>

                                                    <v-col cols="12" sm="12" md="3" class="mt-n7 mt-md-n2">
                                                        <p class="font-weight-bold">Religious Affiliation</p>
                                                        <v-select
                                                        :rules="rules"
                                                        class="mt-n2"
                                                        outlined dense height="10"
                                                            :items="religious_affiliation"
                                                            prepend-inner-icon="mdi-church" v-model="Barangay"
                                                            required></v-select>

                                                    </v-col>

                                                    <v-col cols="12" sm="12" md="3" class="mt-n7">
                                                        <p class="font-weight-bold">Are you an overseas worker?</p>
                                                        <v-radio-group row   class="mt-n3">
                                                            <v-radio @click="country_destination = true" value="yes"
                                                                label="Yes"></v-radio>

                                                            <v-radio @click="clear_country_destination" value="no"
                                                                label="No"></v-radio>

                                                              

                                                        </v-radio-group>

                                                    </v-col>

                                                    <!--     COUNTRY OF DESTINATION START -->

                                                    <v-dialog v-model="country_destination" persistent max-width="380px">
                                                        <v-card>
                                                            <v-container>
                                                                <v-row>


                                                                    <v-col cols="12" sm="12" md="12" class="">
                                                                        <div class="text-center ">
                                                                            <v-alert dense dark color="blue darken-3">
                                                                                What is the country of destination?<strong>
                                                                                </strong>

                                                                            </v-alert>
                                                                        </div>

                                                                    </v-col>

                                  
                                                                 <v-col cols="12" sm="12" md="4" class="mx-5"
                                                                        style="margin-top: -30px">

                        
                                                                        <v-checkbox-group v-model="countrydestination_clear">

                                                                            <v-checkbox v-model="Australia_clear" label="Australia"></v-checkbox>
                                                                            <v-checkbox v-model="Canada_clear" label="Canada"
                                                                                style="margin-top: -10px"></v-checkbox>
                                                                            <v-checkbox label="Hongkong" v-model="Hongkong_clear"
                                                                                style="margin-top: -10px"></v-checkbox>
                                                                            <v-checkbox label="Indonesia" v-model="Indonesia_clear"
                                                                                style="margin-top: -10px"></v-checkbox>
                                                                            <v-checkbox label="Japan" v-model="Japan_clear"
                                                                                style="margin-top: -10px"></v-checkbox>
                                                                            <v-checkbox label="Korea" v-model="Korea_clear"
                                                                                style="margin-top: -10px"></v-checkbox>
                                                                            <v-checkbox label="Malaysia" v-model="Malaysia_clear"
                                                                                style="margin-top: -10px"></v-checkbox>
                                                                        </v-checkbox-group>
                                                                    </v-col>
                                                                    <v-col cols="12" sm="12" md="5" class="mx-5"
                                                                        style="margin-top: -30px">
                                                                        <v-checkbox-group>

                                                                            <v-checkbox label="Saudi Arabia" v-model="Saudi_clear" ></v-checkbox>
                                                                            <v-checkbox label="Singapore" v-model="Singapore_clear"
                                                                                style="margin-top: -10px"></v-checkbox>
                                                                            <v-checkbox label="Taiwan" v-model="Taiwan_clear"
                                                                                style="margin-top: -10px"></v-checkbox>
                                                                            <v-checkbox label="United Arab Emirates" v-model="UAE_clear"
                                                                                style="margin-top: -10px"></v-checkbox>
                                                                            <v-checkbox label="USA" v-model="USAE_clear"
                                                                                style="margin-top: -10px"></v-checkbox>

                                                                        </v-checkbox-group>
                                                                    </v-col>

                                                                      

                                                                    <v-col cols="10" sm="10" md="10"
                                                                        style="margin-left: 20px; margin-top: -25px;">
                                                                        <v-text-field v-model="others_country" label="Other, specify"></v-text-field>
                                                                    </v-col>

                                                                </v-row>

                                                                <v-row>

                                                                    <v-col cols="10" sm="12" md="12" class="mt-n4 ">

                                                                        <v-btn color="green" class="pa-2 ml-4 mt-n4"
                                                                            outlined dark
                                                                            @click="country_destination = false">
                                                                            Continue
                                                                        </v-btn>

                                                                        <v-btn color="red" class="pa-2 ml-2 mt-n4" outlined
                                                                            dark @click="country_destination = false ">
                                                                            Close
                                                                        </v-btn>
                                                                    </v-col>

                                                                </v-row>
                                                            </v-container>
                                                        </v-card>
                                                    </v-dialog>
                                                    <!--     COUNTRY OF DESTINATION END -->

                                                    <v-row>
                                                        <v-col cols="12" sm="12" md="4" class="ml-3 ">
                                                            <p class="font-weight-bold">Where did you Reside 3 Years Ago?
                                                            </p>
                                                            <v-checkbox label="Same Address Now"   class="mt-n3"></v-checkbox>
                                                            <v-text-field  class="pr-6" outlined dense height="10" label="Other Address, Specify">
                                                                </v-text-field>
                                                        </v-col>

                                                     
                                                     
                                                        <v-col cols="12" sm="12" md="4" class="mt-n5 ml-3 mt-md-1">


                                                            <H4>EDUCATION AND LITERACY</H4>

                                                            <p class="font-weight-bold mt-1" >Are You Currently Attending School?
                                                            </p>
                                                            <v-radio-group row class="mt-n4">
                                                                <v-radio @click="clear_Why_you_are_not_attending_school"
                                                                    value="yes" label="Yes"></v-radio>
                                                                <v-radio @click="clear_what_grade_or_year_you_are_currently_attending"
                                                                    value="no" label="No"></v-radio>
                                                            </v-radio-group>

                                                        </v-col>

                                                        <v-col cols="12" sm="12" md="3" class="mt-n3 ml-3 mt-md-1 ml-md-n6">
                                                            <p class="font-weight-bold">Are You a graduate of Senior high?
                                                            </p>
                                                            <v-radio-group row class="mt-n3" >
                                                                <v-radio
                                                                    @change="show_if_yes_graduate_senior_highschool = true"
                                                                    value="yes" label="Yes"></v-radio>
                                                                <v-radio
                                                                    @change="clear_Are_You_a_graduate_of_Senior_high"
                                                                    value="no" label="No"></v-radio>
                                                            </v-radio-group>

                                                            <v-select class="pr-6 mt-2"  v-show="show_if_yes_graduate_senior_highschool"
                                                            outlined dense height="10"
                                                                :items="['Accounting, Business Mgt', 'Science, tech. Eng’g& Mathematics ', 'Humanities and Social Sutdies', 'General Academic', 'Home Economics', 'Agri-Forestry and Fishery', 'Industrial Arts', 'Info & Comm. Tech (ICT)', 'Sports', 'Arts and Design', 'TVL Automotive', 'TVL CSS', 'TVL Programming']"
                                                                label="What Is Your Strand"
                                                                prepend-inner-icon="mdi-clipboard-account" v-model="strand"
                                                                required></v-select>

                                                        </v-col>

                                                    </v-row>

                                                    <!--      EDUCATION AND LITERACY (1)  START-->



                                                    <v-container fluid>

                                                        <v-row>

                                                            <!--      if Yes in Are You Currently Attending School  START -->
                                                            <v-dialog v-model="what_grade_year_currently_attending"
                                                                max-width="380px">
                                                                <v-card>
                                                                    <v-container>

                                                                        <v-row>

                                                                            <v-col cols="12" sm="12" md="12" class="">
                                                                                <div class="text-center ">
                                                                                    <v-alert dense dark
                                                                                        color="blue darken-3">
                                                                                        What grade or year you are currently
                                                                                        attending?<strong> </strong>

                                                                                    </v-alert>
                                                                                </div>
                                                                                <!--  <p class="text-center font-weight-bold" > </p> -->
                                                                            </v-col>


                                                                            <v-col cols="12" sm="12" md="12"
                                                                                style="margin-top: -10px">
                                                                                <v-select
                                                                                    :items="['Elementary - Grade 1', 'Elementary - Grade 2', 'Elementary - Grade 3', 'Elementary - Grade 4', 'Elementary - Grade 5', 'Elementary - Grade 6', 'Junior High - Grade 7', 'Junior High - Grade 8', 'Junior High - Grade 9', 'Junior High - Grade 10', 'Senior High - Grade 11', 'Senior High - Grade 12', '1st Year PS/N-T/TV', '2nd Year PS/N-T/TV', '1st Year College', '2nd Year College', '3rd Year College', '4th Year College']"
                                                                                    label="Select Grade"
                                                                                    prepend-inner-icon="mdi-clipboard-account"
                                                                                    v-model="usrelevel" required></v-select>


                                                                            </v-col>


                                                                            <v-col cols="10" sm="12" md="12"
                                                                                style="margin-top: -10px">
                                                                                <p class="font-weight-bold">Where Did You
                                                                                    Attend School</p>
                                                                                <v-radio-group row v-model="clear_public_private">
                                                                                    <v-radio value="public"
                                                                                        label="Public"></v-radio>
                                                                                    <v-radio value="private"
                                                                                        label="Private"></v-radio>
                                                                                </v-radio-group>

                                                                            </v-col>



                                                                        </v-row>


                                                                        <v-row>

                                                                            <v-col cols="10" sm="12" md="12" class="mt-n1">

                                                                                <v-btn color="green" class="pa-2" outlined
                                                                                    dark
                                                                                    @click="what_grade_year_currently_attending = false">
                                                                                    Continue
                                                                                </v-btn>

                                                                                <v-btn color="red" class="pa-2 ml-2"
                                                                                    outlined dark
                                                                                    @click="what_grade_year_currently_attending = false">
                                                                                    Close
                                                                                </v-btn>
                                                                            </v-col>

                                                                        </v-row>









                                                                    </v-container>
                                                                </v-card>

                                                            </v-dialog>

                                                            <!--      if Yes in Are You Currently Attending School  END -->



                                                            <!--      if No in Are You Currently Attending School  START -->

                                                            <v-dialog v-model="why_your_not_attending_school"
                                                                max-width="700px">
                                                                <v-card>
                                                                    <v-container>

                                                                        <v-col cols="12" sm="12" md="12" class="">
                                                                            <div class="text-center ">
                                                                                <v-alert dense dark color="blue darken-3">
                                                                                    Why you are not attending
                                                                                    school?<strong> </strong>

                                                                                </v-alert>
                                                                            </div>
                                                                            <!--  <p class="text-center font-weight-bold" > </p> -->
                                                                        </v-col>

                                                                        <v-row>

                                                                            <v-col cols="12" sm="12" md="6" class="ml-4">

                                                                                <v-checkbox-group>
                                                                                    <v-checkbox
                                                                                          v-model="Schools_are_far_clear"                          
                                                                                            
                                                                                        label="Schools are far/ Inaccessible"></v-checkbox>
                                                                                    <v-checkbox  v-model="Illness_Disability_clear"
                                                                                        label="Illness/ Disability"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox  v-model="Financial_Constraint_clear"
                                                                                        label="Financial Constraint"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox v-model="Housekeeping_Taking_care_siblings_clear"
                                                                                        label="Housekeeping/ Taking care siblings"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox v-model="Employment_Looking_for_work_clear"
                                                                                        label="Employment/ Looking for work"
                                                                                        style="margin-top: -10px"></v-checkbox>

                                                                                </v-checkbox-group>
                                                                            </v-col>

                                                                            <v-col cols="10" sm="8" md="5" class="ml-2">

                                                                                <v-checkbox-group>
                                                                                    <v-checkbox v-model="Affected_by_armed_conflict_clear"
                                                                                        label="Affected by armed conflict"></v-checkbox>

                                                                                    <v-checkbox label="No birth certificate" v-model="No_birth_certificate_clear"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox v-model="Got_pregnant_Early_marriage_clear"
                                                                                        label="Got pregnant/ Early marriage"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox v-model="No_regular_transportation_clear"
                                                                                        label="No regular transportation"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox label="Lack of Interest" v-model="Lack_of_Interest_clear"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox v-model="Already_finished_schooling_clear"
                                                                                        label="Already finished schooling"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-text-field v-model="why_you_not_attending_skul_others_clear"
                                                                                        label="Others"></v-text-field>

                                                                                </v-checkbox-group>
                                                                            </v-col>
                                                                        </v-row>




                                                                        <v-col cols="12" sm="8" md="6" lg="6">
                                                                            <p class="font-weight-bold">What is your highest
                                                                                educational attainment/ completed?</p>

                                                                            <v-select @change="funcionselect" 
                                                                                :items="['Elementary Level', 'Junior Level', 'Junior High School Level ', 'Junior High School Finisher', 'Senior High School Level', 'Senior High School Finisher', 'College Level', 'College Graduate', 'Post Graduate']"
                                                                                label="Select Grade"
                                                                                prepend-inner-icon="mdi-clipboard-account"
                                                                                v-model="selectgrade" required></v-select>


                                                                            <p class="font-weight-bold"

                                                                                v-show="whats_your_college_course">What is
                                                                                your college course?</p>
                                                                            <v-text-field v-model="write_the_course_clear" v-show="whats_your_college_course"
                                                                                label="write the course" required>
                                                                            </v-text-field>



                                                                            <p class="font-weight-bold"
                                                                                v-show="are_you_passer_eligibility">Are you
                                                                                passer of any Eligibility??</p>
                                                                            <v-radio-group
                                                                                v-model="are_you_eligibility_passer_clear" v-show="are_you_passer_eligibility" row>
                                                                                <v-radio
                                                                                    @change="what_eligibility_did_you_make_it = true"
                                                                                    value="yes" label="Yes"></v-radio>
                                                                                <v-radio
                                                                                    @change="what_eligibility_did_you_make_it = false"
                                                                                    value="no" label="No"></v-radio>
                                                                            </v-radio-group>





                                                                            <p v-show="what_eligibility_did_you_make_it"
                                                                                class="font-weight-bold">What Eligibility
                                                                                did you Make it</p>
                                                                            <v-select
                                                                                  v-show="what_eligibility_did_you_make_it"
                                                                                :items="['Prof-Civil Service', 'SubProf-Civil Service ', 'RA 108', 'PD 907', 'PRC License']"
                                                                                label="Select Eligibility"
                                                                                prepend-inner-icon="mdi-clipboard-account"
                                                                                v-model="usrelevel" required></v-select>



                                                                        </v-col>



                                                                        <v-row>

                                                                            <v-col cols="10" sm="4" md="4">

                                                                                <v-btn color="green" class="pa-2" outlined
                                                                                    dark
                                                                                    @click="why_your_not_attending_school = false">
                                                                                    Continue
                                                                                </v-btn>

                                                                                <v-btn color="red" class="pa-2 ml-2"
                                                                                    outlined dark
                                                                                    @click="why_your_not_attending_school = false">
                                                                                    Close
                                                                                </v-btn>
                                                                            </v-col>

                                                                        </v-row>

                                                                    </v-container>
                                                                </v-card>


                                                            </v-dialog>
                                                            <!--      if No in Are You Currently Attending School  END -->

                                                        </v-row>

                                                        <v-row>

                                                        </v-row>



                                                    </v-container>





                                                    <!--      EDUCATION AND LITERACY (1)  END-->


                                                </v-row>

                                            </v-container>
                                        </v-card-text>



                                    </v-row>

                                </v-container>

                            </v-card-text>
                            <v-btn id="v-btn-c" color="green" @click="validate">
                                Continue
                            </v-btn>

                            <v-btn id="v-btn-c" class="ma-4" @click="dialog = false">
                                Cancel
                            </v-btn>

                        </v-card>


                    </v-stepper-content>



                    <!--   Second Stepper -->
                    <v-stepper-content step="2">
                        <v-card class="mb-12" color="grey lighten-4">
                            <v-card-text>
                                <v-container fluid>
                                    <v-row>
                                        <v-col cols="12" sm="12" md="12" class="ma-2">
                                           
                                        </v-col>

                   
                                     
                                      

                                        <!--       SKILLS TRAINING POUP START -->
                                        <v-dialog v-model="skill_training_program" max-width="380px">
                                            <v-card>
                                                <v-container>
                                                    <v-row>

                                                        <v-col cols="12" sm="12" md="12" class="">
                                                            <div class="text-center ">
                                                                <v-alert dense dark color="blue darken-3">
                                                                    How many skills training have you attended including the
                                                                    current one?<strong> </strong>

                                                                </v-alert>
                                                            </div>
                                                            <!--  <p class="text-center font-weight-bold" > </p> -->
                                                        </v-col>


                                                        <v-col cols="12" sm="12" md="8" class="mx-5"
                                                            style="margin-top: -30px">

                                                            <v-checkbox-group>
                                                                <v-checkbox v-model="Carpentry_clear" label="Carpentry"></v-checkbox>
                                                                <v-checkbox v-model="Masonry_clear" label="Masonry"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Driving" v-model="Driving_clear"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Dressmaking" v-model="Dressmaking_clear"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                
                                                            </v-checkbox-group>
                                                        </v-col>

                                                        <v-col cols="12" sm="12" md="8" class="mx-5"
                                                            style="margin-top: -30px">

                                                            <v-checkbox-group>
                                                                <v-checkbox label="Plumbing"  v-model="Plumbing_clear"
                                                                ></v-checkbox>
                                                                <v-checkbox label="Handcraft making" v-model="Handcraft_making_clear"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Beauty Care"  v-model="Beauty_Care_clear"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Agri-Fishery Production" v-model="Agri_Fishery_Production_clear"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Practical Electricity" v-model="Practical_Electricity_clear"
                                                                    style="margin-top: -10px"></v-checkbox>


                                                            </v-checkbox-group>
                                                        </v-col>


                                                        <v-col cols="10" class="mx-4" style="margin-top: -20px">
                                                            <v-text-field label="Others" v-model="Skills_training_others_clear" required>
                                                            </v-text-field>

                                                        </v-col>




                                                    </v-row>

                                                    <v-row>
                                                        <v-col cols="10" sm="3" md="12" class="mt-n5">

                                                            <v-btn color="green" class="ml-3 pa-2" outlined dark 
                                                                @click="skill_training_program = false">
                                                                Continue
                                                            </v-btn>


                                                            <v-btn color="red" class="pa-2 ml-2" outlined dark
                                                                @click="skill_training_program = false">
                                                                Close
                                                            </v-btn>
                                                        </v-col>
                                                    </v-row>


                                                </v-container>
                                            </v-card>


                                        </v-dialog>

                                        <v-dialog v-model="can_you_read_and_write_yes_no" max-width="300px">

                                             <v-card>
                                              <v-container fluid>
                                                    <v-row>

                                                        <v-col cols="12" sm="12" md="12" class="">
                                                        <div class="text-center ">
                                                            <v-alert dense dark color="blue darken-3">
                                                                Can you read and write a simple message in any
                                                language or dialect?<strong> </strong>

                                                            </v-alert>
                                                        </div>
                                                        <!--  <p class="text-center font-weight-bold" > </p> -->
                                                    </v-col>


                                        <v-col cols="10" sm="12" md="12" class="mt-n8" >
                                            
                                            <v-radio-group row v-model="YesNo_Can_you_Read_and_write_clear">
                                                <v-radio   value="yes" label="Yes"></v-radio>
                                                <v-radio value="no" label="No"></v-radio>
                                            </v-radio-group>

                                        </v-col>

                                       
                                          </v-row>

                                          <v-row>
                                                        <v-col cols="10" sm="3" md="10" class="ml-1  ">

                                                            <v-btn   outlined color="green" dark
                                                                @click="can_you_read_and_write_yes_no = false">
                                                                Continue
                                                            </v-btn>

                                                            <v-btn  class="ml-2" outlined color="red" dark 
                                                                @click="can_you_read_and_write_yes_no = false">
                                                                Close
                                                            </v-btn>
                                                        </v-col>
                                                    </v-row>
                                        </v-container>
                                          </v-card>
                                        </v-dialog>



                                        <!--       SKILLS TRAINING POUP END -->

                                        <!--       GOVERNANCE POUP START -->

                                        <v-col cols="12" sm="12" md="2" class="mt-md-n4">
                                            <h4>GOVERNANCE</h4>
                                            <p class="font-weight-bold mt-1 ">Are you a Registered voter?</p>
                                            <v-radio-group row class="mt-n3">
                                                <v-radio @click="did_you_vote_in_the_last_sk_elections = true" value="yes"
                                                    label="Yes"></v-radio>
                                                <v-radio @click="clear_Did_you_Vote_in_the_last_SK_Election" value="no" label="No"></v-radio>
                                            </v-radio-group>


                                        </v-col>
                                        <v-col cols="12" sm="12" md="3" class="mt-n2">
                                            <p class="font-weight-bold">What organization are you affiliated/ member with
                                                for the last three Years?</p>
                                            <v-checkbox-group class="mt-n7">
                                                <v-checkbox label="4Ks"></v-checkbox>
                                               
                                                <v-checkbox label="Muslim Youth" style="margin-top: -10px"></v-checkbox>
                                                <v-checkbox label="PTDO (IP Youth)" style="margin-top: -10px"></v-checkbox>
                                                <v-checkbox label="Pag-asa Youth Association of the Philippines (PYAP)"
                                                    style="margin-top: -10px"></v-checkbox>

                                                <v-checkbox label="Christian Youth" style="margin-top: -10px"></v-checkbox>

                                                <v-checkbox label="YES-O" style="margin-top: -10px"></v-checkbox>

                                                <v-checkbox label="ListongKabataan" style="margin-top: -10px"></v-checkbox>
                                            </v-checkbox-group>

                                        </v-col>
                                        <v-col cols="12" sm="12" md="3" class="mt-n9">

                                            <v-checkbox-group >
                                                <v-checkbox
                                                    label="Society of Peer Educators of the Philippines (SPEDdO)"></v-checkbox>
                                                <v-checkbox label="Special Program for the Employment of Students (SPES)"
                                                    style="margin-top: -10px"></v-checkbox>
                                                <v-checkbox label="Supreme Student Council (SSC)"
                                                    style="margin-top: -10px"></v-checkbox>
                                                <v-checkbox label="Supreme Student Government (SSG)"
                                                    style="margin-top: -10px"></v-checkbox>
                                                <v-checkbox label="Youth for Peace Movement (YFPM) "
                                                    style="margin-top: -10px"></v-checkbox>
                                                <v-checkbox label="CVSP Alumni " style="margin-top: -10px"></v-checkbox>
                                                <v-checkbox label="4H " style="margin-top: -10px"></v-checkbox>
                                                <v-checkbox label="DYA" style="margin-top: -10px"></v-checkbox>
                                            </v-checkbox-group>

                                        </v-col>

        

                                        <v-col cols="12" sm="12" md="2" class="mt-n3">
                                            <p class="font-weight-bold">Are you currently attending any Skills training?</p>
                                            <v-radio-group autofocus row class="mt-n3">
                                                <v-radio value="yes" label="Yes"></v-radio>
                                                <v-radio value="no" label="No"></v-radio>
                                            </v-radio-group>

                                        </v-col>

                                        <v-col cols="12" sm="12" md="2" class="mt-n3">
                                            <p class="font-weight-bold">Have you attended any skills Training in the past?
                                            </p>
                                            <v-radio-group row class="mt-n3">
                                                <v-radio value="yes"
                                                    @click="clear_Can_you_read_and_write_a_simple_message_in_any_language_or_dialect"
                                                    label="Yes"></v-radio>
                                                <v-radio value="no" @click="clear_How_many_skills_training_have_you_attended"
                                                    label="No"></v-radio>
                                            </v-radio-group>

                                        </v-col>


                                        <v-col cols="12" sm="12" md="2" class="mt-n1 mt-md-1">
                                            <p class="font-weight-bold">Have You Been Elected in Any Organization</p>
                                            <v-radio-group row class="mt-n3">
                                                <v-radio @click="leardership_information = true" value="yes"
                                                    label="Yes"></v-radio>
                                                <v-radio value="no" label="No"></v-radio>
                                            </v-radio-group>
                                        </v-col>

                                        <v-col cols="12" sm="12" md="2" class="mt-1">
                                            <h4>ECONOMIC ACTIVITY</h4>
                                            <p class="font-weight-bold mt-1" >Did you do any work during the past week?</p>
                                            <v-radio-group row class="mt-n3">
                                                <v-radio value="yes"
                                                    @click="whats_your_class_of_worker = true, do_you_have_job_or_business_during_past_week = false"
                                                    label="Yes"></v-radio>
                                                <v-radio value="no"
                                                    @click="clear_What_is_your_class_of_worker"
                                                    label="No"></v-radio>
                                            </v-radio-group>
                                        </v-col>

                                        <v-dialog v-model="how_many_works_job_business_you_have" max-width="500px">
                                            <v-card>
                                                <v-container>
                                                    <v-row>






                                                        <v-col cols="12" sm="3" md="6">

                                                            <v-btn color="green" outlined dark 
                                                                @click="how_many_works_job_business_you_have = false">
                                                                Continue
                                                            </v-btn>

                                                            <v-btn text color="red" outlined dark
                                                                @click="how_many_works_job_business_you_have = false">
                                                                Close
                                                            </v-btn>
                                                        </v-col>



                                                    </v-row>

                                                </v-container>
                                            </v-card>
                                        </v-dialog>




                                        <v-col cols="12" sm="12" md="2" class="mt-n3 mt-md-1">
                                            <p class="font-weight-bold">Do you have business during the past Week?</p>
                                            <v-radio-group row class="mt-n3">
                                                <v-radio value="yes" @click="what_is_the_sector_of_your_business = true"
                                                    label="Yes"></v-radio>
                                                <v-radio @click="Clear_What_is_the_Sector_of_Your_Business" value="no" label="No"></v-radio>
                                            </v-radio-group>

                                        </v-col>

                                        <v-col cols="12" sm="12" md="2" class="mt-n3 mt-md-1">
                                            <p class="font-weight-bold">Did you want more hours of work during the past
                                                week?</p>
                                            <v-radio-group row class="mt-n3">
                                                <v-radio value="yes"
                                                    @click="Clear_Did_you_want_more_hours_of_work_during_the_past_week"
                                                    label="Yes"></v-radio>
                                                <v-radio value="no"
                                                    @change="did_you_look_additional_word = false, whats_your_class_of_worker = false, did_you_look_work_to_eastablish_business = true"
                                                    label="No"></v-radio>
                                            </v-radio-group>
                                        </v-col>


                                        <v-dialog v-model="what_is_the_sector_of_your_business" max-width="470px">
                                            <v-card>
                                                <v-container fluid>
                                                    <v-row>

                                                        <v-col cols="12" sm="12" md="12">
                                                            <div class="text-center">
                                                                <v-alert dense dark color="blue darken-3">
                                                                    What is the Sector of Your Business<strong> </strong>

                                                                </v-alert>
                                                            </div>

                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="10" class="ml-1"
                                                            style="margin-top: -31px">

                                                            <v-checkbox-group>
                                                                <v-checkbox v-model="Clear_Agriculture_plantations_other_rural_sectors"
                                                                    label="Agriculture; plantations;other rural sectors"></v-checkbox>
                                                                <v-checkbox v-model="Clear_Basic_Metal_Production"
                                                                label="Basic Metal Production "
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox v-model="Clear_Chemical_industries"
                                                                 label="Chemical industries"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox 
                                                                label="Commerce"  v-model="Clear_Commerce"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox
                                                                 label="Construction"  v-model="Clear_Construction"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox 
                                                                label="Education"   v-model="Clear_Education_Business"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox  v-model="Clear_Financial_services_professional_service"
                                                                 label="Financial services; professional service"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                               
                                                                <v-checkbox  v-model="Clear_Forestry_wood_pulp_and_pape"
                                                                 label="Forestry; wood; pulp and paper"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                                <v-checkbox v-model="Clear_Health_services"
                                                                 label="Health services"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                                <v-checkbox v-model="Clear_Hotels_tourism_catering"
                                                                 label="Hotels; tourism; catering"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox  v-model="Clear_Mining_coal_other_mining"
                                                                label="Mining (coal; other mining)"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox  v-model="Clear_Transport"
                                                                label="Transport"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                            </v-checkbox-group>
                                                            <v-text-field v-model="Clear_Business_others" label="Others, Specify">

                                                            </v-text-field>


                                                        </v-col>



                                                    </v-row>


                                                    <v-row>

<v-col cols="10" sm="12" md="12" class=" ">

    <v-btn color="green" class="pa-2  mt-n1"
        outlined dark
        @click="what_is_the_sector_of_your_business = false">
        Continue
    </v-btn>

    <v-btn color="red" class="pa-2 ml-2 mt-n1" outlined
        dark @click="what_is_the_sector_of_your_business = false">
        Close
    </v-btn>
</v-col>

</v-row>

                                                </v-container>

                                            </v-card>
                                        </v-dialog>

                                        <!--     Whats Your Primary Occupation Poup Start -->

                                        <v-dialog v-model="whats_your_class_of_worker" max-width="650px">
                                            <v-card>
                                                <v-container fluid>
                                                    <v-row>
                                                        <v-col cols="12" sm="12" md="12" class="">
                                                            <div class="text-center ">
                                                                <v-alert dense dark color="blue darken-3">
                                                                    What is your class of worker?<strong> </strong>

                                                                </v-alert>
                                                            </div>

                                                        </v-col>

                                                        <v-col cols="12" sm="12" md="12" class="mt-n7">

                                                            <v-checkbox-group>
                                                                <v-checkbox v-model="clear_Working_for_private_household"
                                                                    label="Working for private household"></v-checkbox>
                                                                <v-checkbox  v-model="clear_Working_private_business_establishment_farm"
                                                                    label="Working private business/ establishment/ farm"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox v-model="clear_Working_for_government_government_corporation"
                                                                    label="Working for government/ government corporation"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox 
                                                                v-model="clear_Self_employed_with_no_paid_employee"
                                                                label="Self-employed with no paid employee"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                            </v-checkbox-group>
                                                        </v-col>

                                                        <v-col cols="12" sm="10" md="10" class="mt-n1">
                                                            <p class="font-weight-bold">How many work you Have?</p>
                                                        </v-col>

                                                        <v-col cols="10" sm="5" md="7" class="mt-n8">

                                                            <v-text-field v-model="Clear_no_of_works" label="No of Works"></v-text-field>
                                                        </v-col>

                                                        <v-col cols="12" sm="10" md="10" class="mt-n6">
                                                            <p class="font-weight-bold">Did you look for additional work
                                                                during the past week?</p>
                                                            <v-radio-group v-model="Clear_YES_NO_Did_you_look_for_additional_work" row>
                                                                <v-radio  value="yes" label="Yes"></v-radio>
                                                                <v-radio value="no" label="No"></v-radio>
                                                            </v-radio-group>
                                                        </v-col>




                                                        <v-col cols="12" sm="12" md="12" class="mt-n2">

                                                            <p class="font-weight-bold">What was your primary occupation
                                                                during the past weeks?</p>
                                                        </v-col>

                                                        <v-col cols="12" sm="12" md="6" class="mt-n9">

                                                            <v-checkbox-group>
                                                                <v-checkbox label="Managers" v-model="Clear_Managers"
                                                                ></v-checkbox>
                                                                <v-checkbox label="Professionals" v-model="Clear_Professionals"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox
                                                                v-model="Clear_Technicians_Associate_Professionals"
                                                                 label="Technicians & Associate Professionals"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox
                                                                v-model="Clear_Clerical_Support_Workers"
                                                                 label="Clerical Support Workers"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox 
                                                                v-model="Clear_Service_and_Sales_Workers"
                                                                label="Service and Sales Workers"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox 
                                                                v-model="Clear_Skilled_Agri_Fishery_Forest_Workers"
                                                                label="Skilled Agri- Fishery & Forest Workers"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox 
                                                                      v-model="Clear_Craft_Related_Trades_Works"
                                                                label="Craft & Related Trades Works"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                            </v-checkbox-group>
                                                        </v-col>


                                                        <v-col cols="12" sm="12" md="6" class="mt-n4">


                                                            <v-checkbox-group>

                                                                <v-checkbox
                                                                v-model="Clear_Plant_Machine_Operations_Assembler"
                                                                 label="Plant & Machine Operations & Assemblers"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                            </v-checkbox-group>

                                                            <v-checkbox  v-model="Clear_Elementary_Occupations_labourer_jobs"
                                                            label="Elementary Occupations (labourer jobs)"
                                                                style="margin-top: -10px"></v-checkbox>

                                                            <v-checkbox v-model="Clear_Armed_Forces_Occupations"
                                                             label="Armed Forces Occupations"
                                                                style="margin-top: -10px"></v-checkbox>

                                                            <v-checkbox
                                                             v-model="Clear_Virtual_Assistant_worker_onlinejobs"
                                                             label="Virtual Assistant/ worker (online jobs)"
                                                                style="margin-top: -10px"></v-checkbox>

                                                            <v-checkbox v-model="Clear_Real_Estate_Activities"
                                                             label="Real Estate Activities"
                                                                style="margin-top: -10px"></v-checkbox>

                                                            <v-checkbox v-model="Clear_Professional_Scientific_and_Technical_Activities"
                                                                label="Professional, Scientific and Technical Activities"
                                                                style="margin-top: -10px"></v-checkbox>




                                                        </v-col>


                                                        <v-col cols="12" sm="12" md="12">


                                                            <v-checkbox-group>
                                                                <v-checkbox v-model="Clear_Administrative_Support_Service_Activities"
                                                                    label="Administrative & Support Service Activities"
                                                                    style="margin-top: -10px"></v-checkbox>


                                                                <v-checkbox v-model="Clear_Public_Administration_Defense_Compulsory_Social_Security"
                                                                    label="Public Administration & Defense; Compulsory Social Security"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                            </v-checkbox-group>

                                                            <v-checkbox v-model="Clear_Education"
                                                             label="Education"
                                                                style="margin-top: -10px"></v-checkbox>

                                                            <v-checkbox  v-model="Clear_Human_Health_and_Social_Work_Activities"
                                                            label="Human Health and Social Work Activities"
                                                                style="margin-top: -10px"></v-checkbox>

                                                            <v-checkbox  v-model="Clear_Arts_Entertainment_and_Recreation"
                                                             label="Arts, Entertainment and Recreation"
                                                                style="margin-top: -10px"></v-checkbox>

                                                            <v-checkbox v-model="Clear_Activities_of_Households_as_Employers"
                                                                label="Activities of Households as Employers; Undifferentiated Goods & Services-producing activities of Households for own use"
                                                                style="margin-top: -10px"></v-checkbox>

                                                            <v-checkbox v-model="Clear_Activities_of_Extra_territorial"
                                                                label="Activities of Extra-territorial Organizations and Bodies"
                                                                style="margin-top: -10px"></v-checkbox>



                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="8" class="mt-n3">

                                                            <v-text-field
                                                            v-model="Clear_Other_Service_Activities"
                                                             label="Other Service Activities"
                                                                style="margin-top: -10px"></v-text-field>
                                                        </v-col>


                                                        <v-col cols="10" sm="10" md="10" class="mt-n8">
                                                            <p class="font-weight-bold">In what kind of industry did the
                                                                household member work during the past Weeks?</p>

                                                            <v-select class="mt-n4"
                                                                
                                                                :items="['Mining Quarrying ', 'Manufacturing  ', 'Electricity, Gas, Steam, and Air conditioning Supply', 'Schooling', 'Water Supply: Sewerage, Waste Management & Remediation activities', 'Remediation']"
                                                                label="" prepend-inner-icon="mdi-clipboard-account"
                                                                v-model="Clear_household_member_work_during_the_past_weeks" required></v-select>
                                                            <v-text-field v-model="Clear_others_specfyHouseholdmember" label="Other, specify"
                                                                style="margin-top: -10px"></v-text-field>

                                                        </v-col>


                                                        <v-col cols="12" sm="12" md="10" class="mt-n6">

                                                            <p class="font-weight-bold">What is the status/nature of
                                                                employment? </p>
                                                            <v-radio-group v-model="Clear_Permanent_Job_business_unpaid_family_work" class="mt-n4" row>
                                                                <v-radio value="Permanent_Job_business_unpaid_family_work"
                                                                    label="Permanent Job/ business/ unpaid family work"></v-radio>
                                                                <v-radio
                                                                    value="Short-term or seasonal or casual job/ business/ unpaid family work"
                                                                    label="Short-term or seasonal or casual job/ business/ unpaid family work"></v-radio>
                                                                <v-radio
                                                                    value="Worked for different employers or customers on day-to-day or week-to-week basis"
                                                                    label="Worked for different employers or customers on day-to-day or week-to-week basis"></v-radio>
                                                            </v-radio-group>

                                                        </v-col>

                                                        <v-col cols="10" sm="10" md="10" class="mt-n4">
                                                            <p class="font-weight-bold">What was your normal working hours
                                                                per day during the past week?</p>
                                                            <v-select 
                                                                :items="['1 Hour', '2 Hours', '3 Hours', '4 Hours', '5 Hours', '6 Hours', '7 Hours', '8 Hours', '9 Hours', '10 Hours', '11 Hours', '12 Hours']"
                                                                label="Select No. Of Hours"
                                                                prepend-inner-icon="mdi-clipboard-account"
                                                                v-model="Clear_what_was_your_Normal_working_hours" required></v-select>

                                                        </v-col>


                                                        <v-col cols="10" sm="10" md="10" class="mt-n5">
                                                            <p class="font-weight-bold">What was the total number of hours
                                                                worked during the past week?</p>
                                                                <v-text-field v-model="Clear_what_was_the_total_number_of_hours" label="Input Number" required>
                                                            </v-text-field>

                                                        </v-col>

                                                    </v-row>

<v-row>

<v-col cols="10" sm="12" md="12" class=" ">

    <v-btn color="green" class="pa-2  mt-n1"
        outlined dark
        @click="whats_your_class_of_worker = false">
        Continue
    </v-btn>

    <v-btn color="red" class="pa-2 ml-2 mt-n1" outlined
        dark @click="whats_your_class_of_worker = false">
        Close
    </v-btn>
</v-col>

</v-row>

                                                </v-container>
                                            </v-card>
                                        </v-dialog>






                                        <v-col cols="12" sm="12" md="3" v-show="did_you_look_work_to_eastablish_business">
                                            <p class="font-weight-bold"> Did you look for work or try to establish business
                                                during the past week?</p>
                                            <v-radio-group v-model="Clear_Yes_No_Did_you_look_for_work_or_try_to_establish_business" row>
                                                <v-radio value="yes" @click="Clear_Why_did_you_not_look_for_work"
                                                    label="Yes"></v-radio>
                                                <v-radio value="no" @click="Clear_Was_this_your_first_time_to_look_for_work_or_try_to_establish_a_business"
                                                    label="No"></v-radio>
                                            </v-radio-group>
                                        </v-col>


                                        <v-col cols="12" md="2" sm="12" class="mt-n3 mt-md-1">
                                            <p class="font-weight-bold">Were you willing to take up work during the
                                                past week or within 2 weeks?</p>
                                            <v-radio-group row class="mt-n3">

                                                <v-radio value="yes" label="Yes"></v-radio>
                                                <v-radio value="no" label="No"></v-radio>
                                            </v-radio-group>

                                        </v-col>


                                        <v-col cols="12" md="2" sm="12" class="mt-n3 mt-md-1">
                                            <p class="font-weight-bold">In the past 12 months, how much total salary/
                                                wages did you receive?</p>
                                            <v-text-field outlined type="number" dense label="Give estimate value Php " required>
                                            </v-text-field>

                                        </v-col>

                                        <v-col cols="12" md="2" sm="12" class="mt-n4 mt-md-n3">
                                            <p class="font-weight-bold">Are You A Member of GSIS?</p>
                                            <v-radio-group row class="mt-n3">
                                                <v-radio value="yes" label="Yes"></v-radio>
                                                <v-radio value="no" label="No"></v-radio>
                                            </v-radio-group>
                                        </v-col>

                                        <v-col cols="12" md="3" sm="12" class="mt-n3">
                                            <p class="font-weight-bold">Are You A Member of SSS?</p>
                                            <v-radio-group row class="mt-n3">
                                                <v-radio value="yes" label="Yes"></v-radio>
                                                <v-radio value="no" label="No"></v-radio>
                                            </v-radio-group>
                                        </v-col>



                                        <v-dialog v-model="why_did_you_not_look_for_work" max-width="450px">

                                            <v-card>
                                                <v-container fluid>
                                                    <v-row>
                                                        <v-col cols="12" sm="12" md="12" class="">
                                                            <div class="text-center ">
                                                                <v-alert dense dark color="blue darken-3">
                                                                    Why did you not look for work?<strong> </strong>

                                                                </v-alert>
                                                            </div>
                                                            <!--  <p class="text-center font-weight-bold" > </p> -->
                                                        </v-col>


                                                        <v-col cols="10" sm="12" md="10" class="mt-n6">

                                                            <v-select v-model="Clear_Tired_believe_no_work_available"
                                                                :items="['Tired/believe no work available ', 'Awaiting results of previous job application', 'Temporary illness/disability', 'Bad weather', 'Waiting for hire/ job recall', 'Too young/ old or retired/ permanent disability', 'Household/ family duties', 'Schooling',]"
                                                                label="Select Option" prepend-inner-icon="mdi-account-star"
                                                                 required></v-select>
                                                            <v-text-field v-model="Clear_Tired_believe_no_work_available_Others" label="Other, specify" required
                                                                prepend-inner-icon="mdi-account-plus">
                                                            </v-text-field>

                                                        </v-col>


                                                        <v-col cols="10" sm="12" md="10" class="mt-n6">
                                                            <p class="font-weight-bold">(44)When was the last time you
                                                                looked for work?</p>
                                                            <v-select v-model="Clear_When_was_the_last_time_you_looked_for_work"
                                                                :items="['Within this week ', 'Within last week', 'Last month', 'One to six month', 'More than six months', 'Never']"
                                                                label="Select Option" prepend-inner-icon="mdi-account-off"
                                                               required></v-select>

                                                        </v-col>




                                                    </v-row>

                                                    <v-row>

<v-col cols="10" sm="12" md="12" >

    <v-btn color="green" class="pa-2  mt-n1"
        outlined dark
        @click="why_did_you_not_look_for_work = false">
        Continue
    </v-btn>

    <v-btn color="red" class="pa-2 ml-2 mt-n1" outlined
        dark @click="why_did_you_not_look_for_work = false">
        Close
    </v-btn>
</v-col>

</v-row>



                                                </v-container>
                                            </v-card>
                                        </v-dialog>




                                        <v-dialog v-model="was_this_your_first_time_to_look_for_work" max-width="550px">

                                            <v-card>
                                                <v-container fluid>
                                                    <v-row>


                                                        <v-col cols="12" sm="12" md="12" class="">
                                                            <div class="text-center ">
                                                                <v-alert dense dark color="blue darken-3">
                                                                    Was this your first time to look for work or try to
                                                                    establish a business?<strong> </strong>

                                                                </v-alert>
                                                            </div>

                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="10" class="mt-n8">

                                                            <v-radio-group row v-model="Clear_Was_this_your_first_time_to_look_for_work" >
                                                                <v-radio value="yes" label="Yes"></v-radio>
                                                                <v-radio value="no" label="No"></v-radio>

                                                            </v-radio-group>
                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="10" class="mt-n4">
                                                            <p class="font-weight-bold">What you have been doing to
                                                                find a work?</p>

                                                            <v-select
                                                             v-model="Clear_What_you_have_been_doing_to_find_a_work"
                                                                :items="['Registered in public employment agency', 'Registered in private employment agency', 'Approached employer directly', 'Approached relatives or friends', 'Placed or answered advertisements ', 'Searched and applied Online']"
                                                                prepend-inner-icon="mdi-clipboard-account"
                                                                label="Select Option"
                                                                required></v-select>


                                                        </v-col>


                                                        <v-col cols="10" sm="12" md="10" class="mt-n5">
                                                            <p class="font-weight-bold">How many weeks have you been
                                                                looking for work?</p>
                                                            <v-text-field v-model="Clear_Write_N_of_weeks" label="Write # of weeks" required
                                                                prepend-inner-icon="mdi-calendar">
                                                            </v-text-field>

                                                        </v-col>

                                                        <v-col cols="10" md="10" sm="12" class="mt-n5">
                                                            <p class="font-weight-bold">Had opportunity for work
                                                                existed last week or within two weeks, would you have been
                                                                available? </p>
                                                            <v-radio-group v-model="Clear_Had_opportunity_for_work" row>

                                                                <v-radio value="yes" label="Yes"></v-radio>
                                                                <v-radio value="no" label="No"></v-radio>
                                                            </v-radio-group>

                                                        </v-col>


                                                    </v-row>

                                                    <v-row>

<v-col cols="10" sm="12" md="12" class=" ">

    <v-btn color="green" class="pa-2  mt-n1"
        outlined dark
        @click="was_this_your_first_time_to_look_for_work = false">
        Continue
    </v-btn>

    <v-btn color="red" class="pa-2 ml-2 mt-n1" outlined
        dark @click="was_this_your_first_time_to_look_for_work = false">
        Close
    </v-btn>
</v-col>

</v-row>
                                                </v-container>
                                            </v-card>
                                        </v-dialog>



                                        <v-dialog v-model="whats_your_primary_occupation" max-width="650px">

                                            <v-card>
                                                <v-container fluid>
                                                    <v-row>
                                                        <v-col cols="12" sm="12" md="12" class="">
                                                            <div class="text-center ">
                                                                <v-alert dense dark color="blue darken-3">
                                                                    <strong> </strong>

                                                                </v-alert>
                                                            </div>

                                                        </v-col>





                                                    </v-row>

                                                    <v-row>
                                                        <v-col cols="10" sm="3" md="5" class="ml-n4 mt-n7">

                                                            <v-btn text color="green" dark
                                                                @click="whats_your_primary_occupation = false">
                                                                Continue
                                                            </v-btn>

                                                            <v-btn text color="red" dark
                                                                @click="whats_your_primary_occupation = false">
                                                                Close
                                                            </v-btn>
                                                        </v-col>
                                                    </v-row>



                                                </v-container>
                                            </v-card>

                                        </v-dialog>
                                        <!--      Whats Your Primary Occupation END -->


                                        <v-dialog v-model="leardership_information" max-width="900px">

                                            <v-card>
                                                <div class="text-center ">
                                                            <v-alert dense dark color="blue darken-3">
                                                                Leadership Information<strong> </strong>

                                                            </v-alert>
                                                        </div>
                                                <v-container fluid>

                                                    
                             
                                                        <!--  <p class="text-center font-weight-bold" > </p> -->
                                                    

                                                    <div v-for="(item, index) in form" :key="item">
                                                        <v-row justify="center">


                                                            <v-col cols="12" md="3">
                                                                <v-text-field outlined dense label="Organization" color="success"
                                                                     autofocus>
                                                                </v-text-field>
                                                            </v-col>

                                                            <v-col cols="12" md="2">
                                                                <v-text-field outlined dense label="Position"
                                                                    color="success">
                                                                </v-text-field>
                                                            </v-col>
                                                            <v-col cols="12" md="3">
                                                                <v-text-field outlined dense  
                                                                    label="Start of Term"
                                                                    type="date" required color="green">
                                                                </v-text-field>

                                                            </v-col>

                                                            <v-col cols="12" md="3" >
                                                                <v-text-field  outlined dense  label="End of Term"
                                                                    type="date" required color="green">
                                                                </v-text-field>
                                                            </v-col>


                                                            <v-col cols="12" md="1" class="ml-n1">
                                                                <v-btn  color="error" text
                                                                    @click="removerow(index)">
                                                                    <v-icon
                                                                         >
                                                                mdi-comment-remove-outline
                                                                 </v-icon>
                                                                </v-btn>
                                                               
                                                            </v-col>



                                                        </v-row>
                                                    </div>
                                                     <v-btn class="ml-8 mt-3" color="warning"
                                                     @click="addrow(index)">
                                                      Add Item
                                                  </v-btn>

                                                    
 <v-row>

<v-col cols="10" sm="12" md="12" class="mt-8 ">

    <v-btn color="green" class="pa-2 ml-4 mt-n1"
        outlined dark
        @click="leardership_information = false">
        Continue
    </v-btn>

    <v-btn color="red" class="pa-2 ml-2 mt-n1" outlined
        dark @click="leardership_information = false">
        Close
    </v-btn>
</v-col>

</v-row>





                                                </v-container>
                                            </v-card>
                                        </v-dialog>


                                        <!--      IF YES Did you Vote in the last SK Election POUP  START-->

                                        <v-dialog v-model="did_you_vote_in_the_last_sk_elections" max-width="400px">
                                            <v-card>
                                                <v-container fluid>

                                                    <v-row>

                                                        <v-col cols="12" sm="12" md="12" class="">
                                                            <div class="text-center ">
                                                                <v-alert dense dark color="blue darken-3">
                                                                    Did you Vote in the last SK Election?<strong> </strong>

                                                                </v-alert>
                                                            </div>
                                                            <!--  <p class="text-center font-weight-bold" > </p> -->
                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="12" style="margin-top: -40px;">

                                                            <v-radio-group row v-model="clear_Did_you_Vote_in_the_last_SK_Election_yes_no" >
                                                                <v-radio value="yes" label="Yes"></v-radio>
                                                                <v-radio value="no" label="No"></v-radio>
                                                            </v-radio-group>


                                                        </v-col>


                                                        <v-col cols="10" sm="12" md="12" style="margin-top: -25px;">
                                                            <p class="font-weight-bold text-left">Did you vote in the last
                                                                regular Election?</p>
                                                        </v-col>



                                                        <v-col cols="10" sm="12" md="12"  style="margin-top: -50px;">

                                                            <v-radio-group v-model="clear_Did_you_Vote_in_the_regular_yes_no" row>
                                                                <v-radio value="yes" label="Yes"></v-radio>
                                                                <v-radio value="no" label="No"></v-radio>
                                                            </v-radio-group>


                                                        </v-col>


                                                    </v-row>


                                                    <v-row>

                                                        <v-col cols="10" sm="12" md="12" class="mt-n1">

                                                            <v-btn color="green" class="pa-2" outlined dark
                                                                @click="did_you_vote_in_the_last_sk_elections = false">
                                                                Continue
                                                            </v-btn>

                                                            <v-btn color="red" class="pa-2 ml-2" outlined dark
                                                                @click="did_you_vote_in_the_last_sk_elections = false">
                                                                Close
                                                            </v-btn>
                                                        </v-col>

                                                    </v-row>


                                                </v-container>
                                            </v-card>
                                        </v-dialog>
                                        <!--      IF YES Did you Vote in the last SK Election POUP  END   -->

                                        <!--       GOVERNANCE POUP END -->

                                    </v-row>
                                    <v-btn class="ml-n2 mt-6" id="v-btn-c" color="green" @click="e1 = 3">
                                        Continue
                                    </v-btn>
                                    <v-btn @click="e1 = 1" class="ml-2 mt-6"> Back </v-btn>
                                </v-container>
                            </v-card-text>
                        </v-card>


                    </v-stepper-content>

                    <!-- ECONOMIC ACTIVITY (1) Stepper -->



                    <!-- HEALTH AND NUTRITION (1) Stepper -->
                    <v-stepper-content step="3">
                        <v-card class="mb-12" color="grey lighten-4">
                            <v-card-text>
                                <v-container fluid>
                                    <h4 class="ml-n2">HEALTH AND NUTRITION</h4>
                                    <v-row>

                                        <v-col cols="12" sm="12" md="2" class="mt-1">

                                            <p class="mt-2  font-weight-bold">Are you a member of PhilHealth?</p>
                                            <v-radio-group row class="mt-n3">
                                                <v-radio value="yes"
                                                    @click="Clear_Are_you_a_dependent_of_a_PhilHealth_Member"
                                                    label="Yes"></v-radio>
                                                <v-radio value="no"
                                                    @click=" Clear_What_is_your_PhilHealth_membership_type"
                                                    label="No"></v-radio>

                                            </v-radio-group>


                                        </v-col>

                                        <v-dialog v-model="what_is_your_philhealth_membership" max-width="380px">
                                            <v-card>
                                                <v-container>
                                                    <v-row>

                                                        <v-col cols="12" sm="12" md="12" class="">
                                                            <div class="text-center ">
                                                                <v-alert dense dark color="blue darken-3">
                                                                    What is your PhilHealth membership type?<strong>
                                                                    </strong>

                                                                </v-alert>
                                                            </div>

                                                        </v-col>


                                                        <v-col cols="10" sm="12" md="12" class="mt-n4">

                                                            <v-select
                                                                :items="['Philhealth- OFW', 'Philhealth- Employed', 'Philhealth- Individually paying', 'Philhealth- Sponsored', 'Philhealth- Life time', 'Philhealth- Senior Citizen', 'Philhealth- Indigent']"
                                                                label="Select Type " prepend-inner-icon="mdi-map-marker"
                                                                v-model="philhealth_membership" required></v-select>
                                                        </v-col>

                                                    </v-row>

                                                    <v-row>

<v-col cols="10" sm="12" md="12" class=" ">

    <v-btn color="green" class="pa-2  mt-n1"
        outlined dark
        @click="what_is_your_philhealth_membership = false">
        Continue
    </v-btn>

    <v-btn color="red" class="pa-2 ml-2 mt-n1" outlined
        dark @click="what_is_your_philhealth_membership = false">
        Close
    </v-btn>
</v-col>

</v-row>
                                                </v-container>
                                            </v-card>




                                        </v-dialog>


                                        <v-dialog v-model="are_your_depende_of_philhealth_member" max-width="380px">
                                            <v-card>
                                                <v-container>

                                                    <v-row justify="center">

                                                        <v-col cols="12" sm="12" md="12">
                                                            <div class="text-center ">
                                                                <v-alert dense dark color="blue darken-3">
                                                                    Are you a dependent of a PhilHealth Member?<strong>
                                                                    </strong>

                                                                </v-alert>
                                                            </div>
                                                            <!--  <p class="text-center font-weight-bold" > </p> -->
                                                        </v-col>



                                                        <v-col cols="10" sm="12" md="12" class="mt-n7">

                                                            <v-radio-group v-model="Clear_Are_you_a_dependent_of_a_PhilHealth"  row>
                                                                <v-radio value="yes" label="Yes"></v-radio>
                                                                <v-radio value="no" label="No"></v-radio>

                                                            </v-radio-group>
                                                        </v-col>



                                                    </v-row>

                                                    <v-row>

<v-col cols="10" sm="12" md="12" class=" ">

    <v-btn color="green" class="pa-2  mt-n1"
        outlined dark
        @click="are_your_depende_of_philhealth_member = false">
        Continue
    </v-btn>

    <v-btn color="red" class="pa-2 ml-2 mt-n1" outlined
        dark @click="are_your_depende_of_philhealth_member = false">
        Close
    </v-btn>
</v-col>

</v-row>


                                                </v-container>
                                            </v-card>
                                        </v-dialog>







                                        <v-col cols="12" sm="12" md="2" class="mt-n1 mt-md-n3">

                                            <p class="font-weight-bold">Are you a solo parent taking care of a child/children? </p>
                                            <v-radio-group row class="mt-n3">
                                                <v-radio value="yes" @click="do_you_have_solo_parent_id = true"
                                                    label="Yes"></v-radio>
                                                <v-radio value="no" @click="Clear_Do_you_Have_a_Solo_Parent_ID"
                                                    label="No"></v-radio>

                                            </v-radio-group>
                                        </v-col>


                                        <v-dialog v-model="do_you_have_solo_parent_id" max-width="380px">
                                            <v-card>
                                                <v-container>
                                                    <v-row>

                                                        <v-col cols="12" sm="12" md="12" class="">
                                                            <div class="text-center ">
                                                                <v-alert dense dark color="blue darken-3">
                                                                    Do you Have a Solo Parent ID?<strong> </strong>

                                                                </v-alert>
                                                            </div>

                                                        </v-col>



                                                        <v-col cols="10" sm="12" md="12" class="mt-n7">

                                                            <v-radio-group v-model="Clear_Yes_No_Do_you_Have_a_Solo_Parent_ID"  row>
                                                                <v-radio value="yes" label="Yes"></v-radio>
                                                                <v-radio value="no" label="No"></v-radio>
                                                            </v-radio-group>
                                                        </v-col>


                                                    </v-row>


                                                    <v-row>

                                                        <v-col cols="10" sm="2" md="12" class="mt-n4">

                                                            <v-btn  color="green" outlined dark class="pa-2"
                                                                @click="do_you_have_solo_parent_id = false">
                                                                Continue
                                                            </v-btn>

                                                            <v-btn class="pa-2 ml-2 mt-n1" color="red" outlined dark
                                                                @click="do_you_have_solo_parent_id = false">
                                                                Close
                                                            </v-btn>
                                                        </v-col>

                                                    </v-row>



                                                </v-container>
                                            </v-card>
                                        </v-dialog>



                                        <v-col cols="12" sm="12" md="2" class="mt-n1 mt-md-n3">

                                            <p class="font-weight-bold">Do you have any physical or mental disability?
                                            </p>
                                            <v-radio-group row class="mt-n2">
                                                <v-radio value="yes" @click="what_type_of_disability_do_you_have = true"
                                                    label="Yes"></v-radio>
                                                <v-radio @click="Clear_What_type_of_disability_do_you_have" value="no" label="No"></v-radio>

                                            </v-radio-group>
                                        </v-col>

                                        <v-dialog v-model="what_type_of_disability_do_you_have" max-width="380px">
                                            <v-card>
                                                <v-container>
                                                    <v-row>


                                                        <v-col cols="12" sm="12" md="12" class="">
                                                            <div class="text-center ">
                                                                <v-alert dense dark color="blue darken-3">
                                                                    What type of disability do you have?<strong> </strong>

                                                                </v-alert>
                                                            </div>
                                                            <!--  <p class="text-center font-weight-bold" > </p> -->
                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="12" class="mt-n7">



                                                            <v-checkbox-group>
                                                                <v-checkbox v-model="Clear_Mental_Intellectual"
                                                                 label="Mental/Intellectual"></v-checkbox>
                                                                <v-checkbox v-model="Clear_Hearing_Disability"
                                                                 label="Hearing Disability"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox  v-model="Clear_Psychological_Disability"
                                                                label="Psychological Disability"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox v-model="Clear_Visual_Disabilityy"
                                                                 label="Visual Disability"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox  v-model="Clear_Speech_Impairement"
                                                                 label="Speech Impairement"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox v-model="Clear_Disability_due_to_chronic_illness"
                                                                 label="Disability due to chronic illness"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox  v-model="Clear_Orthopaedic_Musculoskeletal_Disability"
                                                                 label="Orthopaedic (Musculoskeletal) Disability"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox v-model="Clear_LearningDisability"
                                                                 label="Learning Disability"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                                <v-text-field v-model="Clear_Multiple_Disability_Specify"
                                                                    label="Multiple Disability, Specify"></v-text-field>
                                                            </v-checkbox-group>


                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="12" class="mt-n4">

                                                            <p class="font-weight-bold">Do you have a PWD ID?</p>
                                                            <v-radio-group row v-model="Clear_Do_you_have_a_PWD_ID">
                                                                <v-radio value="yes" label="Yes"></v-radio>
                                                                <v-radio value="no" label="No"></v-radio>

                                                            </v-radio-group>
                                                        </v-col>


                                                    </v-row>

                                                    <v-row>

                                                        <v-col cols="10" sm="2" md="12" class="mt-n1">

                                                            <v-btn class="pa-2" color="green" outlined dark
                                                                @click="what_type_of_disability_do_you_have = false">
                                                                Continue
                                                            </v-btn>

                                                            <v-btn class="ml-2" color="red" outlined dark
                                                                @click="what_type_of_disability_do_you_have = false">
                                                                Close
                                                            </v-btn>
                                                        </v-col>

                                                    </v-row>

                                                </v-container>
                                            </v-card>
                                        </v-dialog>




                                        <v-col cols="12" sm="12" md="2">

                                            <p class="font-weight-bold">What is your blood type?</p>

                                            <v-select
                                            outlined dense class="mt-n2 ml-n1"
                                                :items="['O positive', 'A positive', 'B positive', 'AB positive', 'O negative', 'A negative', 'B negative', 'AB negative', 'Don’t know']"
                                                label="Select Blood Type" prepend-inner-icon="mdi-clipboard-account"
                                                v-model="selectbloodtype" required></v-select>

                                        </v-col>


                                        <v-col cols="12" sm="12" md="3" class="mt-n4 mt-md-n1">
                                            <p class="font-weight-bold ">How is your health condition?</p>
                                            <v-text-field outlined dense class="mt-n2 ml-n1 mt-md-n1" label="Multiple Disability, Specify"></v-text-field>
                                        </v-col>

                                        <v-col cols="12" sm="12" md="2" class="mt-n5 mt-md-2">

                                            <p class="font-weight-bold">Are you being diagnosed with health relatedissues or lifestyle diseases? </p>
                                            <v-radio-group row class="mt-n3">
                                                <v-radio value="yes"
                                                    @click="what_kind_of_health_related_issues_or_lifestle_61 = true"
                                                    label="Yes"></v-radio>
                                                <v-radio @click="Clear_What_kind_of_health_related_issues_or_lifestyle_diseases_you_have " value="no" label="No"></v-radio>

                                            </v-radio-group>
                                        </v-col>

                                        <v-col cols="12" sm="12" md="2" class="mt-n2 mt-md-1">

                                            <p class="font-weight-bold">During the past 12 months, did you avail any
                                                medical treatment or medication for any treatment? </p>
                                            <v-radio-group row class="mt-n2">
                                                <v-radio value="yes"
                                                    @click="where_did_you_avail_medical_treatment_62_A = true, do_you_have_illness_or_any_health_related_62_B = true"
                                                    label="Yes"></v-radio>
                                                <v-radio value="no"
                                                    @click="Clear_Where_did_you_avail_medical_treatment"
                                                    label="No"></v-radio>

                                            </v-radio-group>
                                        </v-col>


                                        <v-col cols="12" sm="12" md="2"
                                            v-show="do_you_have_illness_or_any_health_related_62_B">

                                            <p class="font-weight-bold">Do you have illness or any health-related
                                                issues of this time (upon survey time) </p>
                                            <v-radio-group v-model="Clear_Do_you_have_illness_or_any_health" row>
                                                <v-radio value="yes" @click="what_kind_of_illness_or_health_realted_issues_63 = true

                                                " label="Yes"></v-radio>
                                                <v-radio value="no"
                                                    @click="Clear_What_kind_of_illness_or_health_related_issues_does_you"
                                                    label="No"></v-radio>


                                            </v-radio-group>
                                        </v-col>



                                        <v-col cols="12" sm="12" md="2" v-show="do_you_smoke_or_use_tobacco">
                                            <p class="font-weight-bold">Do you smoke or use tobacco/ cigarette </p>

                                            <v-radio-group row>
                                                <v-radio value="yes" label="Yes"></v-radio>
                                                <v-radio value="no" label="No"></v-radio>

                                            </v-radio-group>
                                        </v-col>



                                        <v-col cols="12" sm="12" md="2" v-show="have_you_give_birth_in_the_last_2_years_65">
                                            <p class="font-weight-bold">Have you given birth in the last two years?
                                            </p>
                                            <v-radio-group row>
                                                <v-radio @click="which_type_of_health_facility_did_you_visit = true,
                                                    what_health_services_did_you_receievein_in_the_goverment_69 = true,
                                                    during_delivery_where_did_you_give_birth_70 = true" value="yes"
                                                    label="Yes"></v-radio>


                                                <v-radio @click="Clear_Whichtypeofhealthfacilitydidyouvisitformaternal"
                                                    
                                                     value="no" label="No"></v-radio>
                                            </v-radio-group>

                                        </v-col>


                                        <v-col cols="12" sm="12" md="2" v-show="if_pregnant_as_of_this_time_72">

                                            <p class="font-weight-bold">If pregnant as of this time (of survey),
                                                specify number of months pregnant.</p>
                                            <v-select @change="functionselect_pregnant"
                                                :items="['No Pregnant', '1 Month', '2 Months', '3 Months', '4 Months', '5 Months', '6 Months', '7 Months', '8 Months', '9 Months']"
                                                label="Select Months" prepend-inner-icon="mdi-thermometer-lines"
                                                v-model="if_pregnant" required></v-select>

                                        </v-col>

                                        <v-col cols="12" sm="12" md="2" v-show="if_pregnant_are_you_member_philhealth_73">

                                            <p class="font-weight-bold">Are you a member of Philhealth or any
                                                insurances, or a dependent of a primary member?</p>
                                            <v-radio-group row>
                                                <v-radio value="yes" label="Yes"></v-radio>
                                                <v-radio value="no" label="No"></v-radio>

                                            </v-radio-group>
                                        </v-col>

                                        <v-col cols="12" sm="12" md="2" v-show="if_married_or_sexually_active_woman_73_1">

                                            <p class="font-weight-bold">If married or sexually active, have
                                                you ever used contraceptive methods? </p>
                                            <v-radio-group row>
                                                <v-radio value="yes" @click="Clear_why_did_sexualy_ActiveDidnoteverusecontraciptive"
                                                    label="Yes"></v-radio>
                                                <v-radio value="no" @click="Clear_Contraceptive_Methods"
                                                    label="No"></v-radio>

                                            </v-radio-group>
                                        </v-col>



                                        <v-col cols="12" sm="12" md="2">
                                            <h4 class="ml-n1 mt-1 ">PEACE AND SECURITY</h4>
                                            <p class="ml-n1 mt-1 font-weight-bold">Have you’ve been a victim of crime or violation
                                                of RA 9262 (VAWC Act) before?</p>
                                            <v-radio-group row class="mt-n3">
                                                <v-radio value="yes" @click="what_crime_or_violation_75_76_77_78 = true"
                                                    label="Yes"></v-radio>
                                                <v-radio @click="Clear_What_crime_or_violation" value="no" label="No"></v-radio>

                                            </v-radio-group>
                                        </v-col>


                                        <v-col cols="12" sm="12" md="2">
                                            <h4 class="ml-n1">ACCESS TO PROGRAMS AND SERVICES</h4>
                                            <p class="mt-1 font-weight-bold" >During the past 12 months, did you receive or a
                                                recipient of any programs and services? </p>
                                            <v-radio-group row class="mt-n3">
                                                <v-radio value="yes" @click="what_type_of_program_80_81 = true"
                                                    label="Yes"></v-radio>
                                                <v-radio value="no" @click="Clear_Whatypeoprogramserviceidoureceiveorasarecipientof"
                                                    label="No"></v-radio>

                                            </v-radio-group>

                                        </v-col>


                                        <v-col cols="12" sm="12" md="2">
                                            <h4 >DISASTER PREPAREDNESS</h4>
                                            <p class="mt-1 font-weight-bold">Do you have a disaster preparedness kit?</p>
                                            <v-radio-group row class="mt-n3">
                                                <v-radio value="yes"
                                                    @click="Clear_Yes_do_you_havepreparednesskit"
                                                    label="Yes"></v-radio>
                                                <v-radio value="no"
                                                    @click="Clear_Do_you_have_aDisasterPreparednessKit"
                                                    label="No"></v-radio>

                                            </v-radio-group>

                                        </v-col>

                                        <v-col cols="12" sm="12" md="2" v-show="did_you_attend_disaster_preparedness_84">
                                            <p class="font-weight-bold">(84)Did you attend disaster preparedness training
                                                and drills?</p>
                                            <v-radio-group v-model="Clear_Yes_No_Didyouattenddisaster" row>
                                                <v-radio value="yes" @click="Clear_HaveyouattendedanyofthefollowingDisasterPreparednessDrills"
                                                    label="Yes"></v-radio>
                                                <v-radio value="no" @click="Clear_Disaster_Related_Training_Seminars"
                                                    label="No"></v-radio>

                                            </v-radio-group>

                                        </v-col>



                                        <v-dialog v-model="what_mobile_phone_services_87" max-width="420px">
                                            <v-card>
                                                <v-container>
                                                    <v-row>

                                                        <v-col cols="12" sm="12" md="12" class="">
                                                            <div class="text-center ">
                                                                <v-alert dense dark color="blue darken-3">
                                                                    What mobile phone services providers does the household
                                                                    have access to?<strong> </strong>
                                                                </v-alert>
                                                            </div>

                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="12" class="mt-n6">

                                                            <v-radio-group v-model="Clear_Globe_Smart_DITo">

                                                                <v-radio 
                                                                value="Globe and subsidiarie"
                                                                    label="Globe and subsidiaries"></v-radio>
                                                                <v-radio 
                                                                value="Smart and subsidiaries"
                                                                    label="Smart and subsidiaries"></v-radio>
                                                                <v-radio 
                                                                value="Both Globe and Smart"
                                                                    label="Both Globe and Smart"></v-radio>
                                                                <v-radio
                                                                 value="DITO" label="DITO"></v-radio>
                                                            </v-radio-group>

                                                        </v-col>

                                                    </v-row>

                                                    <v-row>

                                                        <v-col cols="10" sm="12" md="12" class="mt-n1">

                                                            <v-btn color="green" class="pa-2" outlined dark
                                                                @click="what_mobile_phone_services_87 = false">
                                                                Continue
                                                            </v-btn>

                                                            <v-btn color="red" class="pa-2 ml-2" outlined dark
                                                                @click="what_mobile_phone_services_87 = false">
                                                                Close
                                                            </v-btn>
                                                        </v-col>

                                                    </v-row>

                                                </v-container>
                                            </v-card>
                                        </v-dialog>



                                        <v-dialog v-model="fire_evacuation_drill_84_3" max-width="800px">
                                            <v-card class="pa-7">
                                                <v-container>
                                                    <v-row>

                                                        <v-col cols="12" sm="12" md="12">
                                                            <div class="text-center ">
                                                                <v-alert dense dark color="blue darken-3">
                                                                    Have you attended any of the following Disaster
                                                                    Preparedness Drills?<strong> </strong>

                                                                </v-alert>
                                                            </div>

                                                        </v-col>


                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="4" class=" mt-n8 ">
                                                                <p class="mt-6 ml-4  ">Flood Evacuation Drill</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n7">
                                                                <v-radio-group v-model="Clear_YESNO_FloodEvacuationDrill" row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="5"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n5">
                                                                <v-select v-model="Clear_Select_FloodEvacuationDrill"
                                                                    :items="['Within This Month', 'Within the past six months', 'Within this year', 'Within the past two years', 'Within the past three years', 'Don’t know/remember']"
                                                                    label="When was The Training"
                                                                    prepend-inner-icon="mdi-calendar" 
                                                                    required solo elevation="5" color="green"></v-select>
                                                            </v-col>
                                                        </v-row>


                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="4" class="mt-n14">
                                                                <p class="mt-6 ml-4 ">Tsunami Evacuation Drill</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n14">
                                                                <v-radio-group v-model="Clear_YESNO_TsunamiEvacuationDrill" row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="5"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-select v-model="Clear_Select_TsunamiEvacuationDrill"
                                                                    :items="['Within This Month', 'Within the past six months', 'Within this year', 'Within the past two years', 'Within the past three years', 'Don’t know/remember']"
                                                                    label="When was The Training"
                                                                    prepend-inner-icon="mdi-calendar" 
                                                                    required solo elevation="5" color="green"></v-select>
                                                            </v-col>
                                                        </v-row>





                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="4" class="mt-n14">
                                                                <p class="mt-6 ml-4 ">Lockdown Drill</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n14">
                                                                <v-radio-group v-model="Clear_YESNO_LockdownDrill" row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="5"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-select v-model="Clear_Select_LockdownDrill"
                                                                    :items="['Within This Month', 'Within the past six months', 'Within this year', 'Within the past two years', 'Within the past three years', 'Don’t know/remember']"
                                                                    label="When was The Training"
                                                                    prepend-inner-icon="mdi-calendar" 
                                                                    required solo elevation="5" color="green"></v-select>
                                                            </v-col>
                                                        </v-row>



                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="4" class="mt-n14">
                                                                <p class="mt-6 ml-4 ">Bomb Drill</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n14">
                                                                <v-radio-group v-model="Clear_YESNO_BombDrill" row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="5"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-select v-model="Clear_Select_BombDrill"
                                                                    :items="['Within This Month', 'Within the past six months', 'Within this year', 'Within the past two years', 'Within the past three years', 'Don’t know/remember']"
                                                                    label="When was The Training"
                                                                    prepend-inner-icon="mdi-calendar" 
                                                                    required solo elevation="5" color="green"></v-select>
                                                            </v-col>
                                                        </v-row>

                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="4" class="mt-n14">
                                                                <p class="mt-6 ml-4 ">Earthquake Evacuation Drill</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n14">
                                                                <v-radio-group v-model="Clear_YESNO_EarthquakEvacuationDrill" row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="5"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-select v-model="Clear_Select_EarthquakEvacuationDrill"
                                                                    :items="['Within This Month', 'Within the past six months', 'Within this year', 'Within the past two years', 'Within the past three years', 'Don’t know/remember']"
                                                                    label="When was The Training"
                                                                    prepend-inner-icon="mdi-calendar" 
                                                                    required solo elevation="5" color="green"></v-select>
                                                            </v-col>
                                                        </v-row>


                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="4"
                                                                class="ml-3 mt-n6 ml-md-3 mt-md-n8">
                                                                <v-text-field v-model="Clear_Textfield_DisasterPreparednessDrills_Others" elevation="5" color="green" dense
                                                                    label="Others Specify"></v-text-field>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-1 mt-n12">
                                                                <v-radio-group  v-model="Clear_YESNO_DisasterPreparednessDrills_Others" row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="5"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-select v-model="Clear_Select_DisasterPreparednessDrills_Others"
                                                                    :items="['Within This Month', 'Within the past six months', 'Within this year', 'Within the past two years', 'Within the past three years', 'Don’t know/remember']"
                                                                    label="When was The Training"
                                                                    prepend-inner-icon="mdi-calendar" 
                                                                    required solo elevation="5" color="green"></v-select>
                                                            </v-col>
                                                        </v-row>



                                                    </v-row>


                                                    <v-row>

                                                        <v-col cols="10" sm="12" md="12" class="mt-n3">

                                                            <v-btn color="green" class="pa-2" outlined dark
                                                                @click="fire_evacuation_drill_84_3 = false">
                                                                Continue
                                                            </v-btn>

                                                            <v-btn color="red" class="pa-2 ml-2" outlined dark
                                                                @click="fire_evacuation_drill_84_3 = false">
                                                                Close
                                                            </v-btn>
                                                        </v-col>

                                                    </v-row>
                                                </v-container>
                                            </v-card>
                                        </v-dialog>



                                        <v-dialog v-model="disaster_related_training_seminars_84_1" max-width="800px">
                                            <v-card class="pa-7">
                                                <v-container>
                                                    <v-row>

                                                        <v-col cols="12" sm="12" md="12">
                                                            <div class="text-center ">
                                                                <v-alert dense dark color="blue darken-3">
                                                                    Disaster Related Training/Seminars<strong> </strong>

                                                                </v-alert>
                                                            </div>

                                                        </v-col>


                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="4" class=" mt-n8 ">
                                                                <p class="mt-6 ml-4  ">Incident Command System Training</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n7">
                                                                <v-radio-group v-model="Clear_Yes_No_IncidentCommand" row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="5"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n5">
                                                                <v-select
                                                                v-model="Clear_Select_IncidentCommand"
                                                                    :items="['Within This Month', 'Within the past six months', 'Within this year', 'Within the past two years', 'Within the past three years', 'Don’t know/remember']"
                                                                    label="When was The Training"
                                                                    prepend-inner-icon="mdi-calendar" 
                                                                    required solo elevation="5" color="green"></v-select>
                                                            </v-col>
                                                        </v-row>

                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="4" class="mt-n14">
                                                                <p class="mt-6 ml-4 ">Evacuation Management Training</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n14">
                                                                <v-radio-group v-model="Clear_Yes_No_EvacuationManagement" row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="5"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-select
                                                                     v-model="Clear_Select_EvacuationManagement"
                                                                    :items="['Within This Month', 'Within the past six months', 'Within this year', 'Within the past two years', 'Within the past three years', 'Don’t know/remember']"
                                                                    label="When was The Training"
                                                                    prepend-inner-icon="mdi-calendar" 
                                                                    required solo elevation="5" color="green"></v-select>
                                                            </v-col>
                                                        </v-row>





                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="4" class="mt-n14">
                                                                <p class="mt-6 ml-4 ">Basic Life Support Cardio-Pulmonary
                                                                    Resuscitation</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n14">
                                                                <v-radio-group v-model="Clear_Yes_No_BasicLifeSupport" row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="5"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-select
                                                                    v-model="Clear_select_BasicLifeSupport"
                                                                    :items="['Within This Month', 'Within the past six months', 'Within this year', 'Within the past two years', 'Within the past three years', 'Don’t know/remember']"
                                                                    label="When was The Training"
                                                                    prepend-inner-icon="mdi-calendar" 
                                                                    required solo elevation="5" color="green"></v-select>
                                                            </v-col>
                                                        </v-row>



                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="4" class="mt-n14">
                                                                <p class="mt-6 ml-4 ">Community-based Disaster Management
                                                                    Training</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n14">
                                                                <v-radio-group v-model="Clear_Yes_No_Communitybased" row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="5"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-select
                                                                v-model="Clear_select_Communitybased"
                                                                    :items="['Within This Month', 'Within the past six months', 'Within this year', 'Within the past two years', 'Within the past three years', 'Don’t know/remember']"
                                                                    label="When was The Training"
                                                                    prepend-inner-icon="mdi-calendar" 
                                                                    required solo elevation="5" color="green"></v-select>
                                                            </v-col>
                                                        </v-row>


                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="4" class="mt-n14">
                                                                <p class="mt-6 ml-4 ">Camp Management Training</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n14">
                                                                <v-radio-group v-model="Clear_Yes_No_CampManagement" row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="5"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-select
                                                                v-model="Clear_Select_CampManagement"
                                                                    :items="['Within This Month', 'Within the past six months', 'Within this year', 'Within the past two years', 'Within the past three years', 'Don’t know/remember']"
                                                                    label="When was The Training"
                                                                    prepend-inner-icon="mdi-calendar"
                                                                    required solo elevation="5" color="green"></v-select>
                                                            </v-col>
                                                        </v-row>

                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="4" class="mt-n14">
                                                                <p class="mt-6 ml-4 ">First Aid Training</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n14">
                                                                <v-radio-group v-model="Clear_Yes_No_FirstAidTraining" row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="5"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-select
                                                                v-model="Clear_Select_FirstAidTraining"
                                                                    :items="['Within This Month', 'Within the past six months', 'Within this year', 'Within the past two years', 'Within the past three years', 'Don’t know/remember']"
                                                                    label="When was The Training"
                                                                    prepend-inner-icon="mdi-calendar" 
                                                                    required solo elevation="5" color="green"></v-select>
                                                            </v-col>
                                                        </v-row>




                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="4"
                                                                class="ml-3 mt-n6 ml-md-3 mt-md-n8">
                                                                <v-text-field v-model="Clear_TextBox_DisasterRelatedTraining_Others" elevation="5" color="green" dense
                                                                    label="Others Specify"></v-text-field>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-1 mt-n12">
                                                                <v-radio-group v-model="Clear_YesNo_DisasterRelatedTraining" row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="5"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-select v-model="Clear_selectd_DisasterRelatedTraining_Others"
                                                                    :items="['Within This Month', 'Within the past six months', 'Within this year', 'Within the past two years', 'Within the past three years', 'Don’t know/remember']"
                                                                    label="When was The Training"
                                                                    prepend-inner-icon="mdi-calendar" 
                                                                    required solo elevation="5" color="green"></v-select>
                                                            </v-col>
                                                        </v-row>


                                                    </v-row>


                                                    <v-row>

                                                        <v-col cols="10" sm="12" md="12" class="mt-n3">

                                                            <v-btn color="green" class="pa-2" outlined dark
                                                                @click="disaster_related_training_seminars_84_1 = false">
                                                                Continue
                                                            </v-btn>

                                                            <v-btn color="red" class="pa-2 ml-2" outlined dark
                                                                @click="disaster_related_training_seminars_84_1 = false">
                                                                Close
                                                            </v-btn>
                                                        </v-col>

                                                    </v-row>
                                                </v-container>
                                            </v-card>
                                        </v-dialog>
























                                        <v-dialog v-model="do_you_have_following_preparedness_kit_83" max-width="800px">
                                            <v-card class="pa-7">
                                                <v-container>
                                                    <v-row>

                                                        <v-col cols="12" sm="12" md="12" class="">
                                                            <div class="text-center ">
                                                                <v-alert dense dark color="blue darken-3">
                                                                    Do you have a Disaster Preparedness Kit?<strong>
                                                                    </strong>

                                                                </v-alert>
                                                            </div>

                                                        </v-col>


                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="12" class="ml-4 mt-n2 mb-4">
                                                                <p class="font-weight-bold">Do you Have The Following in
                                                                    Your Disaster Preparedness Kit?</p>
                                                            </v-col>


                                                        </v-row>


                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="5" class="mt-n14">
                                                                <p class="mt-6 ml-4 ">Water</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n14">
                                                                <v-radio-group v-model="Clear_Yes_No_Water" row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="11" sm="12" md="4"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-text-field v-model="Clear_Text_Field_Water" outlined elevation="5" color="green" solo
                                                                    dense label="How many Days will it last"></v-text-field>
                                                            </v-col>

                                                        </v-row>

                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="5" class="mt-n14">
                                                                <p class="mt-6 ml-4 ">CANDLE</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n14">
                                                                <v-radio-group v-model="Clear_Yes_No_CANDLE" row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="11" sm="12" md="4"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-text-field v-model="Clear_Text_Field_CANDLE" outlined elevation="5" color="green" solo
                                                                    dense label="How many Days will it last"></v-text-field>
                                                            </v-col>

                                                        </v-row>

                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="5" class="mt-n14">
                                                                <p class="mt-6 ml-4 ">WHISTLE</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n14">
                                                                <v-radio-group  v-model="Clear_Yes_No_WHISTLE" row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="11" sm="12" md="4"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-text-field v-model="Clear_Text_Field_WHISTLE" outlined elevation="5" color="green" solo
                                                                    dense label="How many Days will it last"></v-text-field>
                                                            </v-col>

                                                        </v-row>

                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="5" class="mt-n14">
                                                                <p class="mt-6 ml-4 ">CLOTHES</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n14">
                                                                <v-radio-group v-model="Clear_Yes_No_CLOTHES" row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="11" sm="12" md="4"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-text-field v-model="Clear_Text_Field_CLOTHES" outlined elevation="5" color="green" solo
                                                                    dense label="How many Days will it last"></v-text-field>
                                                            </v-col>

                                                        </v-row>


                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="5" class="mt-n14">
                                                                <p class="mt-6 ml-4 ">BLANKET</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n14">
                                                                <v-radio-group v-model="Clear_Yes_No_BLANKET" row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="11" sm="12" md="4"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-text-field v-model="Clear_Text_Field_BLANKET" outlined elevation="5" color="green" solo
                                                                    dense label="How many Days will it last"></v-text-field>
                                                            </v-col>

                                                        </v-row>





                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="5" class="mt-n15">
                                                                <p class="mt-6 ml-4 ">Flashlight/ Emergency light</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n15">
                                                                <v-radio-group v-model="Clear_Yes_No_Flashlight" row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="11" sm="12" md="4"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-text-field v-model="Clear_Text_Field_Flashlight" outlined elevation="5" color="green" solo
                                                                    dense label="How many Days will it last"></v-text-field>
                                                            </v-col>



                                                        </v-row>


                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="5" class="mt-n15">
                                                                <p class="mt-6 ml-4 ">Matches/Lightert</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n15">
                                                                <v-radio-group v-model="Clear_Yes_No_Matches" row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="11" sm="12" md="4"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-text-field v-model="Clear_Text_Field_Matches" outlined elevation="5" color="green" solo
                                                                    dense label="How many Days will it last"></v-text-field>
                                                            </v-col>


                                                        </v-row>

                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="5" class="mt-n15">
                                                                <p class="mt-6 ml-4 ">Food (canned goods, biscuits, bread)
                                                                </p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n15">
                                                                <v-radio-group v-model="Clear_Yes_No_Food" row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="11" sm="12" md="4"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-text-field v-model="Clear_Text_Field_Food" outlined elevation="5" color="green" solo
                                                                    dense label="How many Days will it last"></v-text-field>
                                                            </v-col>


                                                        </v-row>

                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="5" class="mt-n15">
                                                                <p class="mt-6 ml-4 ">Radio/ Transistor (battery-operated)
                                                                </p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n15">
                                                                <v-radio-group v-model="Clear_Yes_No_Radio" row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="11" sm="12" md="4"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-text-field v-model="Clear_Text_Field_Radio" outlined elevation="5" color="green" solo
                                                                    dense label="How many Days will it last"></v-text-field>
                                                            </v-col>


                                                        </v-row>

                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="5" class="mt-n15">
                                                                <p class="mt-6 ml-4 ">Battery (cellphone, flashlight, radio,
                                                                    etc)</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n15">
                                                                <v-radio-group v-model="Clear_Yes_No_Battery" row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="11" sm="12" md="4"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-text-field v-model="Clear_Text_Field_Battery" outlined elevation="5" color="green" solo
                                                                    dense label="How many Days will it last"></v-text-field>
                                                            </v-col>


                                                        </v-row>


                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="5" class="mt-n15">
                                                                <p class="mt-6 ml-4 ">Important documents (land title, valid
                                                                    ID, birth certificate, etc)</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n15">
                                                                <v-radio-group  v-model="Clear_Yes_No_mportantdocuments" row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>



                                                        </v-row>



                                                        <v-row>
                                                            <v-col cols="11" sm="12" md="5"
                                                                class="ml-3 mt-n6 ml-md-4 mt-md-n8">
                                                                <v-text-field v-model="Clear_Praparedness_Kit_Others" elevation="5" color="green" dense
                                                                    label="Others Specify"></v-text-field>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3"
                                                                class="ml-4 mt-n13 ml-md-1 mt-md-n13">
                                                                <v-radio-group v-model="Clear_Yes_No_Preparedness_Kit_Others" row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="11" sm="12" md="4"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-text-field v-model="Clear_TextField_Preparedness_Kit_Others" outlined elevation="5" color="green" solo
                                                                    dense label="How many Days will it last"></v-text-field>
                                                            </v-col>


                                                        </v-row>



                                                    </v-row>


                                                    <v-row>

                                                        <v-col cols="10" sm="12" md="12" class="mt-n3">

                                                            <v-btn color="green" class="pa-2" outlined dark
                                                                @click="do_you_have_following_preparedness_kit_83 = false">
                                                                Continue
                                                            </v-btn>

                                                            <v-btn color="red" class="pa-2 ml-2" outlined dark
                                                                @click="do_you_have_following_preparedness_kit_83 = false">
                                                                Close
                                                            </v-btn>
                                                        </v-col>

                                                    </v-row>
                                                </v-container>
                                            </v-card>
                                        </v-dialog>


                                        <v-dialog v-model="what_type_of_program_80_81" max-width="750px">
                                            <v-card>
                                                <v-container>
                                                    <v-row>


                                                        <v-col cols="12" sm="12" md="12" class="">
                                                            <div class="text-center ">
                                                                <v-alert dense dark color="blue darken-3">
                                                                    What type of program/service did you receive or as a
                                                                    recipient of?<strong> </strong>
                                                                </v-alert>
                                                            </div>

                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="6" class="mt-n7">
                                                            <v-checkbox-group>
                                                                <v-checkbox v-model="Clear_SustainableLivelihood"
                                                                    label="Sustainable Livelihood Program"></v-checkbox>
                                                                <v-checkbox  v-model="Clear_Foodforwork"
                                                                label="Food for work"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox v-model="Clear_Cashforwork"
                                                                 label="Cash for work"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox v-model="Clear_PantawidPamilyangPilipino"
                                                                 label="Pantawid Pamilyang Pilipino Program (4Ps)"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox v-model="Clear_AgrarianReformCommunity"
                                                                    label="Agrarian Reform Community Development Program"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox v-model="Clear_TrainingforWorkScholarship"
                                                                    label="Training for Work Scholarship Program (TWSP)"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox v-model="Clear_CommunityBasedEmployment"
                                                                    label="Community Based Employment Program (CBEB)"
                                                                    style="margin-top: -10px"></v-checkbox>


                                                                <!--   <v-text-field label="Others/Specify"></v-text-field> -->
                                                            </v-checkbox-group>

                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="6" class="mt-n7">

                                                            <v-checkbox-group>
                                                                <v-checkbox v-model="Clear_OtherHealthInsurance"
                                                                    label="Other Health Insurance (Maxicare, Medicare, etc.)"></v-checkbox>
                                                                <v-checkbox v-model="Clear_HealthCareAssistance"
                                                                 label="Health Care Assistance"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox  v-model="Clear_SupplementalFeeding"
                                                                 label="Supplemental Feeding"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox  v-model="Clear_SkillsandLivelihood"
                                                                 label="Skills and Livelihood Training Program"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox v-model="Clear_CreditAssistanceProgram"
                                                                 label="Credit Assistance Program"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox v-model="Clear_HousingProgram"
                                                                 label="Housing Program"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox v-model="Clear_SulongDunongProgram"
                                                                 label="SulongDunong Program"
                                                                    style="margin-top: -10px"></v-checkbox>


                                                                <!--   <v-text-field label="Others/Specify"></v-text-field> -->
                                                            </v-checkbox-group>

                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="6" class="mt-n7">

                                                            <v-checkbox-group>
                                                                <v-checkbox v-model="Clear_DOSTScholarshipProgram"
                                                                 label="DOST Scholarship Program"></v-checkbox>
                                                                <v-checkbox  v-model="Clear_CHEDScholarshipProgram"
                                                                label="CHED Scholarship Program"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox v-model="Clear_SPES"
                                                                    label="Special Program for the Employment of Students (SPES)"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox v-model="Clear_AnimalDispersalProgram"
                                                                 label="Animal Dispersal Program"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                            </v-checkbox-group>

                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="6" class="mt-n2">
                                                            <v-checkbox-group>
                                                                <v-checkbox v-model="Clear_CrisisInterventionprogram" 
                                                                label="Crisis Intervention program"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox  v-model="Clear_PagkalingasaBayanProgram"
                                                                label="Pagkalingasa Bayan Program"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox v-model="Clear_HealthIndigencyProgram"
                                                                 label="Health Indigency Program"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                                <v-text-field v-model="Clear_Whattypeofprogram_others"
                                                                 label="Others/Specify"></v-text-field>

                                                            </v-checkbox-group>
                                                        </v-col>


                                                        <v-col cols="10" sm="12" md="7" class="mt-n6">

                                                            <p class="font-weight-bold">Who was/were the implementer/s
                                                                of the program/s, project/s or service/s?</p>

                                                            <v-checkbox-group>
                                                                <v-checkbox v-model="Clear_SNational_Government"
                                                                    label="SNational Government (DSWD, DA, DOST, DTI, TESDA, DepEd, CHED, DAR, DILG, DOLE, etc)"></v-checkbox>
                                                                <v-checkbox  v-model="Clear_ProvincialGovernment"
                                                                 label="Provincial Government"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox v-model="Clear_CityGovernment"
                                                                 label="City Government"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                                <v-checkbox  v-model="Clear_BarangayLGU"
                                                                label="Barangay LGU"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox  v-model="Clear_Congressional_District"
                                                                label="Congressional/District"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox  v-model="Clear_PrivateOrganizations"
                                                                label="Private Organizations/NGOs"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                    <v-checkbox  v-model="Clear_BarangaySK"
                                                                    label="Barangay SK"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                                <v-text-field  v-model="Clear_Whowasweretheimplementer_Others"
                                                                 label="Others/Specify"></v-text-field>
                                                                <!--   <v-text-field label="Others/Specify"></v-text-field> -->
                                                            </v-checkbox-group>

                                                        </v-col>

                                                    </v-row>

                                                    <v-row>

                                                        <v-col cols="10" sm="2" md="12" class="mt-n6">

                                                            <v-btn class="pa-2  mt-n1" color="green" outlined dark
                                                                @click="what_type_of_program_80_81 = false">
                                                                Continue
                                                            </v-btn>

                                                            <v-btn class="pa-2 ml-2 mt-n1" color="red" outlined dark
                                                                @click="what_type_of_program_80_81 = false">
                                                                Close
                                                            </v-btn>
                                                        </v-col>

                                                    </v-row>

                                                </v-container>
                                            </v-card>
                                        </v-dialog>




                                        <v-dialog v-model="what_crime_or_violation_75_76_77_78" max-width="450px">
                                            <v-card>
                                                <v-container>
                                                    <v-row>


                                                        <v-col cols="12" sm="12" md="12" class="">
                                                            <div class="text-center ">
                                                                <v-alert dense dark color="blue darken-3">
                                                                    What crime or violation of RA 9262 you were a victim
                                                                    of?<strong> </strong>
                                                                </v-alert>
                                                            </div>

                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="12" class="mt-n4"
                                                            v-show="what_crime_or_violation_75_76_77_78">

                                                            <v-checkbox-group>
                                                                <v-checkbox
                                                                 label="Theft" v-model="Clear_Theft"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox
                                                                 label="Robbery" v-model="Clear_Robbery"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox v-model="Clear_Rape_and_other_type_of_sexual_abuse"
                                                                 label="Rape and other type of sexual abuse"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox  v-model="Clear_Physical_Injury"
                                                                label="Physical Injury"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox v-model="Clear_Car_napping"
                                                                 label="Car napping"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                                <v-checkbox   v-model="Clear_Cattle_rustling"
                                                                label="Cattle rustling"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox v-model="Clear_All_type_of_physical_abuse"
                                                                 label="All type of physical abuse"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox  v-model="Clear_All_type_of_Psychological_Abuse"
                                                                label="All type of Psychological Abuse"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox v-model="Clear_Economic_Abuse"
                                                                 label="Economic Abuse"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox  v-model="Clear_Emotional_Abuse"
                                                                label="Emotional Abuse"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                                <v-text-field v-model="Clear_crime_or_violation_Others"
                                                                 label="Others/Specify"></v-text-field>

                                                            </v-checkbox-group>
                                                        </v-col>




                                                        <v-col cols="10" sm="12" md="12" class="mt-n6">
                                                            <p class="font-weight-bold">Where did the crime or violence
                                                                happen? </p>
                                                            <v-select
                                                                :items="['Within the house/household', 'Within the relative’s/ neighbor’s household', 'Within the barangay', 'Outside the barangay but within the municipality/city', 'Outside the municipality', 'Outside the province']"
                                                                label="Location of Crime/Violence"
                                                                prepend-inner-icon="mdi-map-marker" v-model="crime_violence_happen"
                                                                required></v-select>
                                                        </v-col>


                                                        <v-col cols="10" sm="12" md="12" class="mt-n6">
                                                            <p class="font-weight-bold">Who was/ were the perpetrator/s
                                                                of the crime/ violence?</p>
                                                            <v-select v-model="crime_violence"
                                                                :items="['Member of the household ', 'Not member of the household but know to the household', 'Do not know']"
                                                                label="Location of Crime/Violence"
                                                                prepend-inner-icon="mdi-map-marker" 
                                                                required></v-select>
                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="12" class="mt-n6">
                                                            <p class="font-weight-bold">what kind of assistance did you
                                                                receive? See codes below Case Assistance</p>
                                                            <v-select
                                                                :items="['Financial Assistance', 'Case filing Assistance & provision of lawyer', 'Case Referral Assistance ', 'Psycho-social Assistance', 'Temporary Shelter Assistance']"
                                                                label="Location of Crime/Violence"
                                                                prepend-inner-icon="mdi-map-marker"
                                                                v-model="what_kind_of_assistance" required></v-select>
                                                        </v-col>


                                                    </v-row>


                                                    <v-row>

                                                        <v-col cols="10" sm="2" md="12" class="mt-n6">

                                                            <v-btn class="pa-2  mt-n1" color="green" outlined dark
                                                                @click="what_crime_or_violation_75_76_77_78 = false">
                                                                Continue
                                                            </v-btn>

                                                            <v-btn class="pa-2 ml-2 mt-n1" color="red" outlined dark
                                                                @click="what_crime_or_violation_75_76_77_78 = false">
                                                                Close
                                                            </v-btn>
                                                        </v-col>

                                                    </v-row>

                                                </v-container>
                                            </v-card>
                                        </v-dialog>


                                        <v-dialog v-model="what_methods_have_you_used_73_2" max-width="420px">
                                            <v-card>
                                                <v-container>
                                                    <v-row>

                                                        <v-col cols="12" sm="12" md="12" class="">
                                                            <div class="text-center ">
                                                                <v-alert dense dark color="blue darken-3">
                                                                    what method/s have you used? (multiple responses) see
                                                                    codes below
                                                                    Contraceptive Methods?<strong> </strong>

                                                                </v-alert>
                                                            </div>

                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="12" class="mt-n7">


                                                            <v-checkbox-group>
                                                                <v-checkbox  v-model="Clear_Hormonal"
                                                                    label="Hormonal (pills or Depo Provera Indection)"></v-checkbox>
                                                                <v-checkbox  v-model="Clear_BarrierMethod"
                                                                label="Barrier Method"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox  v-model="Clear_onactingreversibl"
                                                                label="Long – acting reversible (IUD)"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox v-model="Clear_EmergencyMethod"
                                                                    label="Emergency Method (emergency contraceptive pill or copper IUD)"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox v-model="Clear_FertilityAwareness"
                                                                    label="Fertility Awareness (rhythm/natural method)"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox v-model="Clear_PermanentMethod"
                                                                label="Permanent Method (tubal ligation)"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                                <v-text-field  v-model="Clear_ContraceptiveMethods_Others"
                                                                label="Others/Specify"></v-text-field>
                                                            </v-checkbox-group>


                                                        </v-col>



                                                    </v-row>

                                                    <v-row>

                                                        <v-col cols="10" sm="2" md="12" class="mt-n6">

                                                            <v-btn class="pa-2  mt-n1" color="green" outlined dark
                                                                @click="what_methods_have_you_used_73_2 = false">
                                                                Continue
                                                            </v-btn>

                                                            <v-btn class="pa-2 ml-2 mt-n1" color="red" outlined dark
                                                                @click="what_methods_have_you_used_73_2 = false">
                                                                Close
                                                            </v-btn>
                                                        </v-col>

                                                    </v-row>
                                                </v-container>
                                            </v-card>
                                        </v-dialog>


                                        <v-dialog v-model="why_did_you_not_use_contraceptive_73_3" max-width="420px">
                                            <v-card>
                                                <v-container>
                                                    <v-row>

                                                        <v-col cols="12" sm="12" md="12" class="">
                                                            <div class="text-center ">
                                                                <v-alert dense dark color="blue darken-3">
                                                                    why did married or sexually active did not ever
                                                                    use contraceptive methods?<strong> </strong>

                                                                </v-alert>
                                                            </div>

                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="12" class="mt-n7">
                                                            <v-checkbox-group>

                                                                <v-checkbox v-model="Clear_cultureTraditional"
                                                                label="Culture/ Tradition"></v-checkbox>
                                                                <v-checkbox v-model="Clear_Nocontraceptivemethod"
                                                                    label="No contraceptive method available in nearest health facility"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox  v-model="Clear_Cannotaffordtobuy"
                                                                label="Cannot afford to buy"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox  v-model="Clear_Healthproblem"
                                                                label="Health problem"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-text-field v-model="Clear_ctivedidnoteverusecontraceptive_Others"
                                                                 label="Other Address, Specify">

                                                                </v-text-field>
                                                            </v-checkbox-group>
                                                        </v-col>

                                                    </v-row>

                                                    <v-row>

                                                        <v-col cols="10" sm="2" md="12" class="mt-n6">

                                                            <v-btn class="pa-2  mt-n1" color="green" outlined dark
                                                                @click="why_did_you_not_use_contraceptive_73_3 = false">
                                                                Continue
                                                            </v-btn>

                                                            <v-btn class="pa-2 ml-2 mt-n1" color="red" outlined dark
                                                                @click="why_did_you_not_use_contraceptive_73_3 = false">
                                                                Close
                                                            </v-btn>
                                                        </v-col>

                                                    </v-row>

                                                </v-container>
                                            </v-card>
                                        </v-dialog>










                                        <v-dialog v-model="which_type_of_health_facility_did_you_visit" max-width="420px">
                                            <v-card>
                                                <v-container>
                                                    <v-row>


                                                        <v-col cols="12" sm="12" md="12" class="">
                                                            <div class="text-center ">
                                                                <v-alert dense dark color="blue darken-3">
                                                                    Which type of health facility did you visit for maternal
                                                                    health services during your most recent
                                                                    pregnancy?<strong> </strong>

                                                                </v-alert>
                                                            </div>

                                                        </v-col>


                                                        <v-col cols="10" sm="12" md="12" class="mt-n4">


                                                            <v-select @change="funtionselection_code_66"
                                                                :items="['Barangay Health Station', 'City Health Office', 'Regional Hospital', 'Private Clinic (Hospital)', 'Traditional Birth Attendant']"
                                                                label="Select Health Facility"
                                                                prepend-inner-icon="mdi-hospital-building"
                                                                v-model="select_health_facility" required></v-select>

                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="12" class="mt-n8"
                                                            v-show="what_was_the_primary_reason_of_not_seeking_service_goverment_67">
                                                            <p class="font-weight-bold">What was the primary reason of
                                                                not seeking maternal health service in any government
                                                                facility. </p>

                                                            <v-select
                                                                v-model="Clear_primaryreasonofnotseekingmaternalhealth"
                                                                :items="['Service not necessary', 'Long waiting time', 'Doctors/ health personnel are always not available ', 'Medicines are always not available ']"
                                                                label="Reasons for not seeking health services from government facilities"
                                                                prepend-inner-icon="mdi-account-convert" 
                                                                required></v-select>

                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="12" class="mt-n7"
                                                            v-show="how_many_times_did_you_visited_the_government_health_68">
                                                            <p class="font-weight-bold">How many times did you visited
                                                                the government health facility during your pregnancy? </p>

                                                            <v-select class="mt-n5"
                                                                v-model="Clear_HowmanytimesdidyouvisitedGovernment"
                                                                :items="['1 to 3', 'More than 3 visits but not as required number of visits', 'Complete prenatal & postnatal care visits as advised the attending doctor']"
                                                                label="No Of Visits"
                                                                prepend-inner-icon="mdi-account-convert" 
                                                                required></v-select>
                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="12" class="mt-n6">
                                                            <p class="font-weight-bold">What health services did you
                                                                receive when you visited the government health facility
                                                                during pregnancy? </p>

                                                            <v-checkbox-group class="mt-n7">
                                                                <v-checkbox v-model="Clear_PhysicalExam"
                                                                    label="Physical Exam (weight, blood, pressure, heart rate)"></v-checkbox>
                                                                <v-checkbox v-model="Clear_GynecologicalExam"
                                                                 label="Gynecological Exam"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox v-model="Clear_Ultrasound"
                                                                 label="Ultrasound"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox v-model="Clear_HIVSTISTDTesting"
                                                                 label="HIV/STI/STD Testing"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox v-model="Clear_NutritiousSupplement"
                                                                 label="Nutritious Supplement"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                                <v-checkbox v-model="Clear_TetanusVaccinet"
                                                                 label="Tetanus Vaccinet"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                            </v-checkbox-group>


                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="12" class="mt-n5">
                                                            <p class="font-weight-bold">During delivery, where did you
                                                                give birth? See codes below </p>
                                                            <v-select class="mt-n3"
                                                                @change="function_during_deliry_where_did_you_give_birth"
                                                                :items="['Public Health Facility', 'Private Clinic/Hospital', 'At home']"
                                                                label="Select Type of Health Issues "
                                                                prepend-inner-icon="mdi-hospital"
                                                                v-model="during_delivery_where_did_you_give_birth"
                                                                required></v-select>
                                                        </v-col>


                                                        <v-col cols="10" sm="12" md="12"
                                                            v-show="was_the_public_health_midwife_71" class="mt-n7">

                                                            <p class="font-weight-bold">Was the public health midwife
                                                                or any skilled birth attendant attended the birth delivery?
                                                            </p>
                                                            <v-radio-group v-model="Clear_YesNo_midwife" row class="mt-n3">
                                                                <v-radio value="yes" label="Yes"></v-radio>
                                                                <v-radio value="no" label="No"></v-radio>

                                                            </v-radio-group>
                                                        </v-col>





                                                        <v-col cols="10" sm="2" md="12" class="mt-n3">

                                                            <v-btn color="green" class="pa-2  mt-n1" outlined dark
                                                                @click="which_type_of_health_facility_did_you_visit = false">
                                                                Continue
                                                            </v-btn>

                                                            <v-btn  color="red" class="pa-2 ml-2 mt-n1" outlined dark
                                                                @click="which_type_of_health_facility_did_you_visit = false">
                                                                Close
                                                            </v-btn>
                                                        </v-col>

                                                    </v-row>

                                                </v-container>
                                            </v-card>
                                        </v-dialog>





                                        <v-dialog v-model="what_kind_of_illness_or_health_realted_issues_63"
                                            max-width="380px">
                                            <v-card>
                                                <v-container>
                                                    <v-row>

                                                        <v-col cols="12" sm="12" md="12" class="">
                                                            <div class="text-center ">
                                                                <v-alert dense dark color="blue darken-3">
                                                                    What kind of illness or health-related issues does you
                                                                    have in this time?<strong> </strong>

                                                                </v-alert>
                                                            </div>

                                                        </v-col>


                                                        <v-col cols="11" sm="12" md="12" class="mt-n5">
                                                            <v-select
                                                                :items="['Fever', 'Cold', 'Cough', 'Sore throat/ tonsillitis', 'Diarrhea', 'Headache', 'Tiredness', 'Body aches and pains', 'Skin Rashes', 'Chest pains', 'Loss of taste and smell', 'Loss of speech', 'Loss of movement', 'Disconnection of Fingers or toes', 'None']"
                                                                label="Select Type of Health Issues "
                                                                prepend-inner-icon="mdi-thermometer-lines"
                                                                v-model="Clear_health_related_issues" required></v-select>
                                                        </v-col>


                                                        <v-col cols="10" sm="2" md="12" class="mt-n6">

                                                            <v-btn class="pa-2  mt-n1" color="green" outlined dark
                                                                @click="what_kind_of_illness_or_health_realted_issues_63 = false">
                                                                Continue
                                                            </v-btn>

                                                            <v-btn class="pa-2 ml-2 mt-n1" color="red" outlined dark
                                                                @click="what_kind_of_illness_or_health_realted_issues_63 = false">
                                                                Close
                                                            </v-btn>
                                                        </v-col>

                                                    </v-row>

                                                </v-container>
                                            </v-card>
                                        </v-dialog>







                                        <v-dialog v-model="where_did_you_avail_medical_treatment_62_A" max-width="380px">
                                            <v-card>
                                                <v-container>
                                                    <v-row>

                                                        <v-col cols="12" sm="12" md="12" class="">
                                                            <div class="text-center ">
                                                                <v-alert dense dark color="blue darken-3">
                                                                    Where did you avail medical treatment?<strong> </strong>

                                                                </v-alert>
                                                            </div>

                                                        </v-col>


                                                        <v-col cols="10" sm="12" md="10" class="mt-n6">
                                                            <v-text-field v-model="Clear_where_did_you_avail_write" label="Write"></v-text-field>
                                                        </v-col>




                                                    </v-row>


                                                    <v-row>

                                                        <v-col cols="10" sm="2" md="12" class="mt-n6">

                                                            <v-btn class="pa-2  mt-n1" color="green" outlined dark
                                                                @click="where_did_you_avail_medical_treatment_62_A = false">
                                                                Continue
                                                            </v-btn>

                                                            <v-btn class="pa-2 ml-2 mt-n1" color="red" outlined dark
                                                                @click="where_did_you_avail_medical_treatment_62_A = false">
                                                                Close
                                                            </v-btn>
                                                        </v-col>

                                                    </v-row>

                                                </v-container>
                                            </v-card>
                                        </v-dialog>


                                        <v-dialog v-model="what_kind_of_health_related_issues_or_lifestle_61"
                                            max-width="380px">
                                            <v-card>
                                                <v-container>
                                                    <v-row>

                                                        <v-col cols="12" sm="12" md="12" class="">
                                                            <div class="text-center ">
                                                                <v-alert dense dark color="blue darken-3">
                                                                    What kind of health related issues or lifestyle diseases
                                                                    you have? <strong> </strong>

                                                                </v-alert>
                                                            </div>
                                                            <!--  <p class="text-center font-weight-bold" > </p> -->
                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="10" class="mt-n7">

                                                            <v-checkbox-group>
                                                                <v-checkbox v-model="Clear_Cardiovascular_Diseases"
                                                                 label="Cardiovascular Diseases"></v-checkbox>
                                                                <v-checkbox v-model="Clear_Obesity_Type__Diseases"
                                                                 label="Obesity & Type 2 Diseases"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox v-model="Clear_Cancer"
                                                                label="Cancer"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox   v-model="Clear_Hypertension"
                                                                label="Hypertension"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox v-model="Clear_Disease_associated_with_smoking"
                                                                    label="Disease associated with smoking & alcohol"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox  v-model="Clear_Infectious_Diseases"
                                                                label="Infectious Diseases"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox  v-model="Clear_Respiratory_Diseases"
                                                                 label="Respiratory Diseases"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox v-model="Clear_Mental_Health_Problem_illness"
                                                                 label="Mental Health Problem/illness"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-text-field v-model="Clear_health_related_issues_Others_Specify"
                                                                 label="Others" required>
                                                                </v-text-field>

                                                            </v-checkbox-group>

                                                        </v-col>


                                                    </v-row>

                                                    <v-row>
                                                        <v-col cols="10" sm="4" md="12" class="mt-n5">

                                                            <v-btn class="pa-2" color="green" outlined dark
                                                                @click="what_kind_of_health_related_issues_or_lifestle_61 = false">
                                                                Continue
                                                            </v-btn>


                                                            <v-btn class="pa-2 ml-2" color="red" outlined dark
                                                                @click="what_kind_of_health_related_issues_or_lifestle_61 = false">
                                                                Close
                                                            </v-btn>
                                                        </v-col>

                                                    </v-row>

                                                </v-container>
                                            </v-card>
                                        </v-dialog>



                                    </v-row>
                                    <v-btn class="ml-n1 mt-6"  id="v-btn-c" color="green" @click="e1 = 4">
                                        Continue
                                    </v-btn>
                                    <v-btn class="ml-2 mt-6" @click="e1 = 2"> Back </v-btn>
                                </v-container>
                            </v-card-text>
                        </v-card>


                    </v-stepper-content>



                    <!-- 	I.	INFORMATION AND COMMUNICATION -->
                    <v-stepper-content step="4">
                        <v-card class="mb-12" color="grey lighten-4">
                            <v-card-text>
                                <v-container fluid>

                                    <v-row>

                                        <v-col cols="12" sm="12" md="3" class="mt-n1">
                                            <p class="font-weight-bold">During disaster and emergencies, where did you
                                                get information and warning?</p>
                                            <v-checkbox-group>
                                                <v-checkbox label="Provincial/City DRRMO"></v-checkbox>
                                                <v-checkbox label="Barangay" style="margin-top: -10px"></v-checkbox>
                                                <v-checkbox label="Television" style="margin-top: -10px"></v-checkbox>
                                                <v-checkbox label="Radio" style="margin-top: -10px"></v-checkbox>
                                                <v-checkbox label="Social Media" style="margin-top: -10px"></v-checkbox>
                                                <v-text-field outlined dense label="Other, specify"></v-text-field>
                                            </v-checkbox-group>
                                        </v-col>

                                        <v-col cols="12" sm="12" md="4" class="mt-n1 mt-md-1">
                                            <h4 class="mt-n3">INFORMATION AND COMMUNICATION</h4>
                                            <p class="mt-1 font-weight-bold">Where did you learn about the local and national
                                                news and information?</p>
                                            <v-checkbox-group>
                                                <v-checkbox label="Local and National Television Channel"></v-checkbox>
                                                <v-checkbox label="Local, Regional and National Radio Stations"
                                                    style="margin-top: -10px"></v-checkbox>
                                                <v-checkbox
                                                    label="Local and National Newspapers (Manila Bulletin, Inquirer, etc.)"
                                                    style="margin-top: -10px"></v-checkbox>
                                                <v-checkbox label="Social Media (Facebook, YouTube, Twitter, IG, etc)"
                                                    style="margin-top: -10px"></v-checkbox>
                                                <v-checkbox label="Barangay Assembly"
                                                    style="margin-top: -10px"></v-checkbox>
                                                <v-text-field outlined dense label="Other, specify"></v-text-field>

                                            </v-checkbox-group>
                                        </v-col>


                                        <v-col cols="12" sm="12" md="2" class="mt-n4 mt-md-4">
                                            <p class="font-weight-bold">Do you have cellular/mobile phones?</p>
                                            <v-radio-group row  class="mt-n2">

                                                <v-radio value="yes" @click="what_mobile_phone_services_87 = true"
                                                    label="Yes"></v-radio>
                                                <v-radio value="no" @click="Clear_Do_you_have_cellular_mobile_phones"
                                                    label="No"></v-radio>
                                            </v-radio-group>
                                        </v-col>


                                        <v-col cols="12" sm="12" md="2" class="mt-n2 mt-md-4">
                                            <p class="font-weight-bold">Do you have access to internet?</p>

                                            <v-radio-group row class="mt-n2">

                                                <v-radio value="yes" @click="what_is_your_means_intern_connection_89 = true"
                                                    label="Yes"></v-radio>
                                                <v-radio value="no" @change="Clear_Whatisyourmeansforinternetconnection"
                                                    label="No"></v-radio>
                                            </v-radio-group>
                                        </v-col>

                                        <v-col cols="12" sm="12" md="3" >
                                            <h4>OTHER ISSUES AND CONCERNS & NEEDS </h4>
                                            <p class="mt-1 font-weight-bold">What are your personal issues, concerns, and
                                                needs?</p>
                                            <v-checkbox-group>
                                                <v-checkbox label="Electricity"></v-checkbox>
                                                <v-checkbox label="Water System facility"
                                                    style="margin-top: -10px"></v-checkbox>
                                                <v-checkbox label="Housing Facility/ Project"
                                                    style="margin-top: -10px"></v-checkbox>
                                                <v-checkbox label="Livelihood Project"
                                                    style="margin-top: -10px"></v-checkbox>
                                                <v-checkbox label="Livelihood Training"
                                                    style="margin-top: -10px"></v-checkbox>

                                            </v-checkbox-group>

                                        </v-col>

                                        <v-col cols="12" sm="12" md="3" >

                                            <v-checkbox-group >
                                                
                                               
                                                <v-checkbox label="Housing Facility/ Project"
                                                    style="margin-top: -10px"></v-checkbox>
                                                <v-checkbox label="Livelihood Project"
                                                    style="margin-top: -10px"></v-checkbox>
                                                <v-checkbox label="Livelihood Training"
                                                    style="margin-top: -10px"></v-checkbox>
                                                <v-checkbox style="margin-top: -10px"
                                                    label="Farm inputs (farm seeds, fertilizer, pesticides)"></v-checkbox>
                                                <v-checkbox label="Access to micro credit facility"
                                                    style="margin-top: -10px"></v-checkbox>
                                                    <v-checkbox label="Poor road maintenance"
                                                    style="margin-top: -10px"></v-checkbox>

                                            </v-checkbox-group>
                                        </v-col>

                                        <v-col cols="12" sm="12" md="3">
                                            <v-checkbox-group>
                                                <v-checkbox  style="margin-top: -10px" label="Improved access to education"></v-checkbox>
                                                <v-checkbox label="Improved access to health and nutrition services"
                                                    style="margin-top: -10px"></v-checkbox>
                                                <v-checkbox
                                                    label="Improved access to agricultural facilities (irrigation, farm, equipment, etc.)"
                                                    style="margin-top: -10px"></v-checkbox>
                                                <v-checkbox label="Employment opportunities"
                                                    style="margin-top: -10px"></v-checkbox>
                                                <v-checkbox label="Flooding/ Community drainage/ Canal"
                                                    style="margin-top: -10px"></v-checkbox>
                                              
                                            </v-checkbox-group>
                                        </v-col>

                                        <v-col cols="12" sm="12" md="3">
                                            <v-checkbox-group>

                                                <v-checkbox  style="margin-top: -10px" label="Access to teenage/ adolescent"></v-checkbox>
                                                <v-checkbox label="Access to educational & skills training scholarship"
                                                    style="margin-top: -10px"></v-checkbox>
                                                <v-text-field  class="mt-3" outlined dense label="Others, specify"></v-text-field>
                                            </v-checkbox-group>
                                        </v-col>

                                        <v-col cols="12" sm="12" md="3" class="mt-n7 mt-md-1" >
                                            <h4 class="mt-3">ACTIVE CITIZENSHIP/ RA 9418 or Volunteer Act of 2007 </h4>
                                            <p  class="mt-2 font-weight-bold">Are you interested to join any voluntary work?
                                            </p>

                                            <v-radio-group row class="mt-n3">

                                                <v-radio value="yes"
                                                    @click="Clear_State_Reason"
                                                    label="Yes"></v-radio>
                                                <v-radio value="no"
                                                    @click="Clear_AreyounterestedtojoinanyvoluntaryworkClear"
                                                    label="No"></v-radio>
                                            </v-radio-group>
                                        </v-col>

                                        <v-col cols="12" sm="12" md="3" class="mt-n1 mt-md-4">
                                            <p class="font-weight-bold">Are you a Sinag Member</p>

                                            <v-radio-group row class="mt-n2">

                                                <v-radio @click="sinagmemberComfirmation = true" value="yes" label="Yes"></v-radio>
                                                <v-radio value="no" label="No"></v-radio>

                                            </v-radio-group>

                                        </v-col>


                                        <v-dialog v-model="sinagmemberComfirmation" persistent max-width="380px">
                                                        <v-card>
                                                            <v-container>
                                                                <v-row>


                                                                    <v-col cols="12" sm="12" md="12" class="">
                                                                        <div class="text-center ">
                                                                            <v-alert dense dark color="blue darken-3">
                                                                                Confirm Sinag ID Number<strong>
                                                                                </strong>

                                                                            </v-alert>
                                                                        </div>

                                                                    </v-col>

                                                                    <v-col cols="10" sm="10" md="10"
                                                                        style="margin-left: 20px; margin-top: -25px;">
                                                                        <v-text-field  label="Type ID Number"></v-text-field>
                                                                    </v-col>


                                                            </v-row>

                                                            <v-row>

<v-col cols="10" sm="12" md="12" class="mt-n1 ">

    <v-btn color="green" class="pa-2 ml-4 mt-n4"
        outlined dark
        @click="sinagmemberComfirmation = false">
        Confirm
    </v-btn>

    <v-btn color="red" class="pa-2 ml-2 mt-n4" outlined
        dark @click="sinagmemberComfirmation = false ">
        Close
    </v-btn>
</v-col>

</v-row>

                                                        </v-container>
                                                                </v-card>                
                                                </v-dialog>                           







                                        <v-col cols="12" md="3" sm="12"
                                            v-show="during_what_hours_are_you_available_volunteer">
                                            <p class="font-weight-bold">During what hours are you available for volunteer
                                                assignment?</p>
                                            <v-select
                                                v-model="Clear_During_What_hours_are_you_available"
                                                  outlined dense
                                                :items="['Weekday morning', 'Weekday afternoon', 'Weekday evening', 'Weekend morning', 'Weekend afternoon', 'Weekend evening', 'Any day will do', 'Any time will do']"
                                                label="Select Type" prepend-inner-icon="mdi-calendar-multiple-check"
                                                required></v-select>

                                        </v-col>


                                        <v-col cols="12" md="3" sm="12"
                                            v-show="during_what_hours_are_you_available_volunteer">
                                            <p class="font-weight-bold">Reason/s for Volunteering. See codes below</p>
                                            <v-select class="mt-9"
                                                v-model="Clear_ReasonsforVolunteering"
                                            outlined dense
                                                :items="['To gain or improve Skills', 'To gain experience', 'To gain Friends', 'To gain employment skills', 'To share skills and talents', 'For academic credit']"
                                                label="Select Reason" prepend-inner-icon="mdi-account-plus"
                                                required></v-select>
                                        </v-col>





                                        <v-dialog v-model="where_would_you_like_volunteer_93" max-width="500">
                                            <v-card>
                                                <v-container>
                                                    <v-row>

                                                        <v-col cols="12" sm="12" md="12" class="">
                                                            <div class="text-center ">
                                                                <v-alert dense dark color="blue darken-3">
                                                                    Where Would You Like to Volunteer<strong> </strong>

                                                                </v-alert>
                                                            </div>

                                                            <div class="text-center ">


                                                                <p class="font-weight-bold">Voluntary Key Areas</p>
                                                            </div>

                                                        </v-col>

                                                        <v-col cols="12" sm="12" md="12" class="mt-n5">
                                                            <div id="app">

                                                                <div>


                                                                    <v-expansion-panels v-model="panel" :disabled="disabled"
                                                                        accordion>
                                                                        <v-expansion-panel>
                                                                            <v-expansion-panel-header
                                                                                class="font-weight-bold">A. House
                                                                                Build/School
                                                                                Build</v-expansion-panel-header>
                                                                            <v-expansion-panel-content>
                                                                                <v-checkbox-group>
                                                                                    <v-checkbox  v-model="Clear_Mason"
                                                                                    label="Mason"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox v-model="Clear_Painter"
                                                                                    label="Painter"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox  v-model="Clear_Carpentry"
                                                                                    label="Carpentry"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox v-model="Clear_Electrical"
                                                                                     label="Electrical"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox v-model="Clear_Plumbing"
                                                                                     label="Plumbing"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-text-field v-model="Clear_HouseBuildSchool_Others"
                                                                                     style="margin-top: -10px"
                                                                                        label="Others, specify"></v-text-field>
                                                                                </v-checkbox-group>
                                                                            </v-expansion-panel-content>
                                                                        </v-expansion-panel>

                                                                        <v-expansion-panel>
                                                                            <v-expansion-panel-header
                                                                                class="font-weight-bold">B.
                                                                                Environment</v-expansion-panel-header>
                                                                            <v-expansion-panel-content>
                                                                                <v-checkbox-group>
                                                                                    <v-checkbox v-model="Clear_TreePlanting"
                                                                                     label="Tree Planting"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox  v-model="Clear_MangrovePlanting"
                                                                                    label="Mangrove Planting"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox  v-model="Clear_CleanupdriveRiver"
                                                                                        label="Clean-up drive - River"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox v-model="Clear_CleanupdriveCoastal"
                                                                                        label="Clean-up drive - Coastal"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox v-model="Clear_CleaupdrivStreet"
                                                                                        label="Clean-up drive - Street"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-text-field v-model="Clear_Environment_Others"
                                                                                     style="margin-top: -10px"
                                                                                        label="Others, specify"></v-text-field>
                                                                                </v-checkbox-group>
                                                                            </v-expansion-panel-content>
                                                                        </v-expansion-panel>

                                                                        <v-expansion-panel>
                                                                            <v-expansion-panel-header
                                                                                class="font-weight-bold">C. Disaster
                                                                                Response</v-expansion-panel-header>
                                                                            <v-expansion-panel-content>
                                                                                <v-checkbox-group>
                                                                                    <v-checkbox v-model="Clear_DisasterResponse"
                                                                                        label="Relief Goods Repacking"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox v-model="Clear_ReliefGoodsDistribution"
                                                                                        label="Relief Goods Distribution"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox v-model="Clear_ReliefGoodsOrganize"
                                                                                        label="Relief Goods Organize"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox
                                                                                    v-model="Clear_ConductSurvey"
                                                                                    label="Conduct Survey"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox v-model="Clear_Servesasadditional"
                                                                                        label="Serves as additional admin.support staff"
                                                                                        style="margin-top: -10px"></v-checkbox>

                                                                                    <v-text-field v-model="Clear_C_Response_Others"
                                                                                     style="margin-top: -10px"
                                                                                        label="Others, specify"></v-text-field>
                                                                                </v-checkbox-group>
                                                                            </v-expansion-panel-content>
                                                                        </v-expansion-panel>

                                                                        <v-expansion-panel>
                                                                            <v-expansion-panel-header
                                                                                class="font-weight-bold">D. Bayanihan
                                                                                Programs</v-expansion-panel-header>
                                                                            <v-expansion-panel-content>
                                                                                <v-checkbox-group>
                                                                                    <v-checkbox  v-model="Clear_KusinangKalinga"
                                                                                    label="KusinangKalinga"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox v-model="Clear_ParaisongPambata"
                                                                                     label="ParaisongPambata"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox v-model="Clear_Gulayan"
                                                                                     label="Gulayan"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-text-field v-model="Clear_D_Bayahinah_Others"
                                                                                     label="Others, specify"
                                                                                        style="margin-top: -10px"></v-text-field>
                                                                                </v-checkbox-group>
                                                                            </v-expansion-panel-content>
                                                                        </v-expansion-panel>

                                                                        <v-expansion-panel>
                                                                            <v-expansion-panel-header
                                                                                class="font-weight-bold">E.
                                                                                Sports</v-expansion-panel-header>
                                                                            <v-expansion-panel-content>
                                                                                <v-checkbox-group>
                                                                                    <v-checkbox style="margin-top: -10px"
                                                                                        v-model="Clear_Coachofassistthecoach"
                                                                                        label="Coach of Assist the coach"></v-checkbox>
                                                                                    <v-checkbox
                                                                                        v-model="Clear_Maintaisafekeepsports"
                                                                                        label="Maintain/ safekeep sports equipment"
                                                                                        style="margin-top: -10px"></v-checkbox>


                                                                                    <v-text-field 
                                                                                    v-model="Clear_E_Sports_Others"
                                                                                    style="margin-top: -10px"
                                                                                        label="Others, specify"></v-text-field>
                                                                                </v-checkbox-group>
                                                                            </v-expansion-panel-content>
                                                                        </v-expansion-panel>

                                                                        <v-expansion-panel>
                                                                            <v-expansion-panel-header
                                                                                class="font-weight-bold">F.
                                                                                Events</v-expansion-panel-header>
                                                                            <v-expansion-panel-content>
                                                                                <v-checkbox-group>
                                                                                    <v-checkbox 
                                                                                    style="margin-top: -10px"
                                                                                        v-model="Clear_hosting"
                                                                                        label="Hosting"
                                                                                        ></v-checkbox>
                                                                                    <v-checkbox  v-model="Clear_Usher"
                                                                                    label="Usher/ Usherettes"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox v-model="Clear_Secretary"
                                                                                        label="Secretary/ Documentation"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox v-model="Clear_SocialMedia"
                                                                                        label="Social Media Management"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox v-model="Clear_GroupPrep"
                                                                                        label="Group Prep/Stage Decor"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox 
                                                                                    v-model="Clear_FoodDistribution"
                                                                                    label="Food Distribution"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox 
                                                                                    v-model="Clear_CrowdControl"
                                                                                    label="Crowd Control"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox 
                                                                                    v-model="Clear_Restoration"
                                                                                    label="Restoration"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-text-field
                                                                                    v-model="Clear_F_Restoration_Others"
                                                                                     label="Others, specify"
                                                                                        style="margin-top: -10px"></v-text-field>

                                                                                </v-checkbox-group>
                                                                            </v-expansion-panel-content>
                                                                        </v-expansion-panel>



                                                                    </v-expansion-panels>
                                                                </div>

                                                            </div>
                                                        </v-col>



                                                    </v-row>

                                                    <v-row>

                                                        <v-col cols="10" sm="12" md="12" class="mt-n1">

                                                            <v-btn color="green" class="pa-2" outlined dark
                                                                @click="where_would_you_like_volunteer_93 = false">
                                                                Continue
                                                            </v-btn>

                                                            <v-btn color="red" class="pa-2 ml-2" outlined dark
                                                                @click="where_would_you_like_volunteer_93 = false">
                                                                Close
                                                            </v-btn>
                                                        </v-col>

                                                    </v-row>

                                                </v-container>
                                            </v-card>
                                        </v-dialog>


                                        <v-dialog v-model="state_reason_92" max-width="480">
                                            <v-card>
                                                <v-container>
                                                    <v-row>


                                                        <v-col cols="12" sm="12" md="12">
                                                            <div class="text-center ">
                                                                <v-alert dense dark color="blue darken-3">
                                                                    State reason<strong> </strong>

                                                                </v-alert>
                                                            </div>

                                                        </v-col>


                                                        <v-col cols="10" sm="12" md="12" class="mt-n8">

                                                            <v-checkbox-group>
                                                                <v-checkbox
                                                                v-model="Clear_Notinterested"
                                                                 label="Not interested"></v-checkbox>
                                                                <v-checkbox
                                                                v-model="Clear_Shy"
                                                                 label="Shy"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox 
                                                                v-model="Clear_Dontknowwheretovolunteer"
                                                                label="Don’t know where to volunteer"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox 
                                                                v-model="Clear_Notime"
                                                                label="No time"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox
                                                                v-model="Clear_Busy"
                                                                 label="Busy"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                                <v-text-field 
                                                                v-model="Clear_State_reason_Others"
                                                                label="Others, specify"></v-text-field>

                                                            </v-checkbox-group>
                                                        </v-col>

                                                    </v-row>

                                                    <v-row>

                                                        <v-col cols="10" sm="12" md="10" class="mt-n3">

                                                            <v-btn color="green" class="pa-2" outlined dark
                                                                @click="state_reason_92 = false">
                                                                Continue
                                                            </v-btn>

                                                            <v-btn color="red" class="pa-2 ml-2" outlined dark
                                                                @click="state_reason_92 = false">
                                                                Close
                                                            </v-btn>
                                                        </v-col>

                                                    </v-row>

                                                </v-container>
                                            </v-card>



                                        </v-dialog>


                                        <v-dialog v-model="what_is_your_means_intern_connection_89" max-width="480">
                                            <v-card>
                                                <v-container>
                                                    <v-row>

                                                        <v-col cols="12" sm="12" md="12" class="">
                                                            <div class="text-center ">
                                                                <v-alert dense dark color="blue darken-3">
                                                                    What is your means for internet connection?<strong>
                                                                    </strong>

                                                                </v-alert>
                                                            </div>

                                                        </v-col>


                                                        <v-col cols="11" sm="12" md="12" class="mt-n5">

                                                            <v-select
                                                                v-model="Clear_cellular_mobile"
                                                                :items="['Cellular/ Mobile data', 'Wireless/ Wifi', 'Broadband Internet Access via cable, DSL, or fiber connection', 'Dial-up', 'Satellite']"
                                                                label="  Select" prepend-inner-icon="mdi-wifi"
                                                                 required></v-select>

                                                        </v-col>



                                                    </v-row>
                                                    <v-row>

                                                        <v-col cols="10" sm="12" md="12" class="mt-n3">

                                                            <v-btn color="green" class="pa-2" outlined dark
                                                                @click="what_is_your_means_intern_connection_89 = false">
                                                                Continue
                                                            </v-btn>

                                                            <v-btn color="red" class="pa-2 ml-2" outlined dark
                                                                @click="what_is_your_means_intern_connection_89 = false">
                                                                Close
                                                            </v-btn>
                                                        </v-col>

                                                    </v-row>
                                                </v-container>
                                            </v-card>



                                        </v-dialog>

                                    </v-row>
                                    <v-btn class="ml-n2 mt-7" id="v-btn-c" color="green" @click="e1 = 16">
                                        Save
                                    </v-btn>
                                    <v-btn class="mt-7 ml-2" @click="e1 = 3"> Back </v-btn>
                                </v-container>
                            </v-card-text>
                        </v-card>

                    </v-stepper-content>
  </v-form>

                </v-stepper-items>
            </v-stepper>
        </v-card>

    </v-app>
</template>
  
  
<script>

import { reactive } from "vue";


export default {



    components: {

    },

    setup() {
        const form = reactive([
            {
                organization: "",
                position: "",
                startofterm: "",
                endofterm: "",
            },
        ]);
        const addrow = () => {
            form.push({
                organization: "",
                position: "",
                startofterm: "",
                endofterm: "",

            });
        };

        const removerow = (index) => {
            if (form.length > 1) {
                form.splice(index, 1);
            }
        };

        return {
            reactive,
            form,
            addrow,
            removerow,
          

        };
    },

    data() {

      

        return {

            birthDate: '',
            years: null,
            months: null,
            days: null,

            Australia_clear:false,
            Canada_clear:false,
            Hongkong_clea:false,
            Indonesia_clear:false,
            Japan_clear:false,
            Korea_clear:false,
            Malaysia_clear:false,
            Saudi_clear:false,
            Singapore_clear:false,
            Taiwan_clear:false,
            UAE_clear:false,
            USAE_clear:false,
            others_country: '',



            rules: [
        v => !!v || 'Required',
      ],

           

            e1: 1,

            /*  Codes FOR 61 What kind of health Related */
            ethnicity: [
"Abelling",
"Abiyan",    
"Aburlin",    
"Aeta/Ayta",    
"Aggay",    
"Agta-Agutaynon/Agutayanon",
"Akeanon/Aklanon",    
"Alangan",    
"Apayao/Yapayao-Applai",    
"Atta/Ata/Ati",    
"Ayangan",    
"Bagobo/Guinga",    
"Balangao/Baliwon-Bantoanon",    
"Banwaon",    
"Batak/Binatak-Batangan",
"Bikol/Bicol",    
"Bilaan/B'laan",
"Binukid/Bukidnon",
"Bisaya/Binisaya",    
"Boholano",    
"Bolinao",    
"Bugkalot",    
"Bontok/Binontok",    
"Buhid",    
"Butuanon",    
"Caviteño",    
"Caviteño-Chavacano",    
"Cebuano",    
"Cimaron–Cotabateño", 
"Cotabateño-Chavacano",    
"Cuyunon/Cuyunan",    
"Davao-Chavacano",    
"Davaweño",    
"Dibabawon",    
"Dumagat/Dumagat",    
"Gaddang-Gubatnon",    
"Hamtikanon-Higaonon",    
"Hiligaynon Ilonggo",    
"Ibaloi/Inibaloi",   
"Ibanag",    
"Ibontoc",    
"Ifugao",    
"Ikalahan/Kalanguya",    
"Ilanun/Ilanuan",    
"Ilocano",    
"Ilongot",    
"Iranon",    
"Isamal Kanlaw",    
"Isarog",    
"Isnag",    
"Itawis-Itneg-Iyiwaks",    
"Jawa Mapun",    
"Kaagan",    
"Kabihug",    
"Kagayanen",    
"Kalagan",    
"Kalamianen",    
"Kalinga-Kamayo",    
"Kamigin/Kinamiging",    
"Kankanai/Kankaney/Kankanaey",    
"Kapampangan",    
"Kapul",    
"Karaga",    
"Karao",    
"Karay-a",    
"Kiniray-a",    
"Maguindanao",    
"Malaueg",    
"Mamanwa",    
"Mandaya",    
"Mangyan",    
"Manobo/Ata-Manobo",    
"Mansaka",    
"Maranao",    
"Masbateño/Masbatenon",
"Palawan/Pinalawan/Palawanon",
"Pangasinan/Panggalato",  
"Romblon/Rombloanon",    
"Sama/Abaknon",    
"Sama Dilaya",    
"Sambal Zambal",    
"Sangil Sangir-Subanen",
"Surigaonon",    
"Tabangnon",    
"Tagabawa",    
"Tagalog",    
"Tagbanwa",    
"Tagbuaonon",    
"Tausug T'boli-Ternateño-Chavacano",
"Tigwahon/Tigwahanon-Tiruray",    
"Waray",    
"Zamboangeño-Chavacano",
           ],


genderpreference:[
"Agender", 
"Androgynous", 
"Aromantic", 
"Asexual", 
"Bigender", 
"Biromantic", 
"Bisexual", 
"Cisgender", 
"Demisexual",
"Femme", 
"Gay",
"Gender Nonconforming",
"Genderfluid", 
"Genderflux", 
"Genderqueer", 
"Heterosexual", 
"Homosexual",
"Intersex",
"Lesbian", 
"Masc", 
"Non-binary", 
"Omnigender", 
"Pangender", 
"Pansexual", 
"Queer",
"Same-Gender Loving",
"Third Gender",
"Transgender",
"Transsexual",
"Two-Spirit",


            ],


           religious_affiliation:[

  "Aglipayan",    
"Association of Baptist Churches in Luzon, Visayas and Mindanao",    
"Association of Fundamental Baptist Church in the Philippines",    
"Bible Baptist",    
"Buddhist",    
"Church of Jesus Christ of the Latter Day Saints",
"Convention of the Philippine Baptist Church",
"Evangelicals",    
"Iglesia Evangelista Methodista en Las Filipinas",
"Iglesia ni Cristo",    
"Independent Baptist",
"International Baptist Missionary Fellowship",
"Islam",    
"Jehovah's Witnesses",    
"Lutheran Church in the Philippines",    
"Missionary Baptist Churches of the Philippines",
"Philippine Benevolent Missionaries Association",
"Philippine Episcopal Church",    
"Roman Catholic",    
"Salvation Army Philippines",    
"Seventh Day Adventist",    
"Southern Baptist",    
"United Church of Christ in the Philippines",
"United Methodist Church",
           ],


            items61: [
                'Cardiovascular Diseases',
                'Obesity & Type 2 Diseases ',
                'Cancer',
                'Hypertension',
                'Disease associated with smoking & alcohol',
                'Infectious Diseases',
                'Respiratory Diseases',
                'Mental Health Problem/illness',
            ],
            /*  END */

            /*  Codes FOR 61  */
            items69: [
                'Physical Exam (weight, blood, pressure, heart rate)',
                'Gynecological Exam',
                'HIV/STI/STD Testing',
                'Nutritious Supplement',
                'Tetanus Vaccine',

            ],

            /*  END */

            /*  Codes FOR 73 what method/s have you used? */
            items73_2: [
                'Hormonal (pills or Depo Provera Indection)',
                'Barrier Method',
                'Long – acting reversible (IUD)',
                'Emergency Method (emergency contraceptive pill or copper IUD)',
                'Fertility Awareness (rhythm/natural method)',
                'Permanent Method (tubal ligation)',
            ],
            /*  END */

            /*  Codes FOR 73 what method/s have you used? */

            items73_3: [

                'Culture/ Tradition',
                'No contraceptive method available in nearest health facility',
                'Cannot afford to buy',
                'Health problem',


            ],
            /*  END */

            agreementdialog:true,
            genderpreferencelgbt:false,

            what_is_the_sector_of_your_business: false,
            leardership_information: false,
            show_if_yes_graduate_senior_highschool: false,
            did_you_vote_in_the_last_sk_elections: false,

            country_destination: false,
            sinagmemberComfirmation: false,


            /*    EDUCATION AND LITERACY (1) */
            what_grade_year_currently_attending: false,
            why_your_not_attending_school: false,
            whats_your_highest_educational_attainment: false,
            where_did_you_attend_school: false,
            are_you_graduate_senior_high: false,
            /*      END      */

            /*   EDUCATION LITERACY (2) */
            whats_your_college_course: false,
            are_you_passer_eligibility: false,
            what_eligibility_did_you_make_it: false,

            can_you_read_and_write_yes_no: false,
            skill_training_program: false,
            /*  END */

            /*     ECONOMIC ACTIVITY (1) */

            how_many_works_job_business_you_have: false,
            whats_your_primary_occupation: false,

            what_kind_of_industry_did_the_household_member: false,



            /*    END */

            /*     ECONOMIC ACTIVITY (1) */
            did_you_look_additional_word: false,
            whats_your_class_of_worker: false,
            did_you_look_work_to_eastablish_business: false,

            /*    END */

            /*     ECONOMIC ACTIVITY (2) */
            was_this_your_first_time_to_look_for_work: false,
            what_you_have_been_doing_to_find_a_work: false,
            how_many_weeks_have_you_been_looking_for_work: false,


            why_did_you_not_look_for_work: false,
            when_was_the_last_time_you_looked_for_work: false,
            /*    END */

            /*       HEALTH AND NUTRITION */
            what_is_your_philhealth_membership: false,
            are_your_depende_of_philhealth_member: false,
            do_you_have_solo_parent_id: false,


            what_type_of_disability_do_you_have: false,
            do_you_have_pwd_id: false,
            /*   END */


            /* HEALTH AND NUTRITION (2) */
            what_kind_of_health_related_issues_or_lifestle_61: false,

            where_did_you_avail_medical_treatment_62_A: false,
            do_you_have_illness_or_any_health_related_62_B: false,

            what_kind_of_illness_or_health_realted_issues_63: false,
            have_you_give_birth_in_the_last_2_years_65: false,
            which_type_of_health_facility_did_you_visit: false,


            what_was_the_primary_reason_of_not_seeking_service_goverment_67: false,
            how_many_times_did_you_visited_the_government_health_68: false,
            what_health_services_did_you_receievein_in_the_goverment_69: false,
            during_delivery_where_did_you_give_birth_70: false,

            was_the_public_health_midwife_71: false,
            if_pregnant_as_of_this_time_72: false,
            if_pregnant_are_you_member_philhealth_73: false,



            if_married_or_sexually_active_woman_73_1: false,
            what_methods_have_you_used_73_2: false,
            why_did_you_not_use_contraceptive_73_3: false,


            /*   END */

            /*      PLACE AND LANDSCAPE */
            what_crime_or_violation_75_76_77_78: false,

            /*   END */

            /* ACCESS TO PROGRAMS AND SERVICES */
            what_type_of_program_80_81: false,

            /*   END */

            /* DISASTER PREPAREDNESS (1) */
            do_you_have_following_preparedness_kit_83: false,
            disaster_related_training_seminars_84_1: false,

            /* END */

            /*  	DISASTER PREPAREDNESS  3 */
            fire_evacuation_drill_84_3: false,
            did_you_attend_disaster_preparedness_84: false,

            /* END */


            /* INFORMATION AND COMMUNICATION */
            what_mobile_phone_services_87: false,
            what_is_your_means_intern_connection_89: false,

            /* END */

            /* ACTIVE CITIZENSHIP/ RA 9418 or Volunteer Act of 2007 */
            state_reason_92: false,
            where_would_you_like_volunteer_93: false,
            during_what_hours_are_you_available_volunteer: false,
            /* END */



            dialog: false,
            activePicker: null,
            activePicker2: null,
            date1: null,
            date2: null,
            menu: false,
            includeFiles: true,
            enabled: false,

            clear_public_private:'',
            usrelevel:false,


                Schools_are_far_clear:false,
                Illness_Disability_clear:false,
                Financial_Constraint_clear:false,
                Housekeeping_Taking_care_siblings_clear:false,
                Employment_Looking_for_work_clear:false,
                Affected_by_armed_conflict_clear:false,
                No_birth_certificate_clear:false,
                Got_pregnant_Early_marriage_clear:false,
                No_regular_transportation_clear:false,
                Lack_of_Interest_clear:false,
                Already_finished_schooling_clear:false,
                why_you_not_attending_skul_others_clear: '',
                selectgrade: '',
                write_the_course_clear: '',
                are_you_eligibility_passer_clear:'',
                strand: '',

        clear_Did_you_Vote_in_the_last_SK_Election_yes_no:'',
        clear_Did_you_Vote_in_the_regular_yes_no:'',


              Carpentry_clear:false,
            Masonry_clear:false,
            Driving_clear:false,
            Dressmaking_clear:false,
            Practical_Electricity_clear:false,
            Plumbing_clear:false,
            Handcraft_making_clear:false,
            Beauty_Care_clear:false,
            Agri_Fishery_Production_clear:false,
          
            Skills_training_others_clear:'',

            YesNo_Can_you_Read_and_write_clear:'',


            clear_Working_for_private_household:false,
            clear_Working_private_business_establishment_farm:false,
            clear_Working_for_government_government_corporation:false,
            clear_Self_employed_with_no_paid_employee:false,
            Clear_no_of_works:'',
            Clear_YES_NO_Did_you_look_for_additional_work:true,
            Clear_Managers:false,
            Clear_Professionals:false,
            Clear_Technicians_Associate_Professionals:false,
            Clear_Clerical_Support_Workers:false,
            Clear_Service_and_Sales_Workers:false,
            Clear_Skilled_Agri_Fishery_Forest_Workers:false,
            Clear_Craft_Related_Trades_Works:false,
            Clear_Plant_Machine_Operations_Assembler:false,
            Clear_Elementary_Occupations_labourer_jobs:false,
            Clear_Armed_Forces_Occupations:false,
            Clear_Virtual_Assistant_worker_onlinejobs:false,
            Clear_Real_Estate_Activities:false,
            Clear_Professional_Scientific_and_Technical_Activities:false,
            Clear_Administrative_Support_Service_Activities:false,
            Clear_Public_Administration_Defense_Compulsory_Social_Security:false,
            Clear_Education:false,
            Clear_Human_Health_and_Social_Work_Activities:false,
            Clear_Arts_Entertainment_and_Recreation:false,
            Clear_Activities_of_Households_as_Employers:false,
            Clear_Activities_of_Extra_territorial:false,
            Clear_Other_Service_Activities:'',
            Clear_household_member_work_during_the_past_weeks:'',
            Clear_others_specfyHouseholdmember:'',
            Clear_Permanent_Job_business_unpaid_family_work:'',
            Clear_what_was_your_Normal_working_hours:'',
            Clear_what_was_the_total_number_of_hours:'',

                Clear_Agriculture_plantations_other_rural_sectors:false,
                Clear_Basic_Metal_Production:false,
                Clear_Chemical_industries:false,
                Clear_Commerce:false,
                Clear_Construction:false,
                Clear_Education_Business:false,
                Clear_Financial_services_professional_service:false,
                Clear_Forestry_wood_pulp_and_pape:false,
                Clear_Health_services:false,
                Clear_Hotels_tourism_catering:false,
                Clear_Mining_coal_other_mining:false,
                Clear_Transport:false,
                Clear_Business_others:'',
                

            Clear_Was_this_your_first_time_to_look_for_work:'',
            Clear_What_you_have_been_doing_to_find_a_work:'',
            Clear_Write_N_of_weeks:'',
            Clear_Had_opportunity_for_work:'',

            Clear_Tired_believe_no_work_available:'',
            Clear_Tired_believe_no_work_available_Others:'',
            Clear_When_was_the_last_time_you_looked_for_work:'',

            philhealth_membership:'',

            Clear_Yes_No_Do_you_Have_a_Solo_Parent_ID:'',


            Clear_Mental_Intellectual:false,
            Clear_Hearing_Disability:false,
            Clear_Psychological_Disability:false,
            Clear_Visual_Disabilityy:false,
            Clear_Speech_Impairement:false,
            Clear_Disability_due_to_chronic_illness:false,
            Clear_Orthopaedic_Musculoskeletal_Disability:false,
            Clear_LearningDisability:false,
            Clear_Multiple_Disability_Specify:'',
            Clear_Do_you_have_a_PWD_ID:'',


                 Clear_Cardiovascular_Diseases:false,
                Clear_Obesity_Type__Diseases:false,
                Clear_Cancer:false,
                Clear_Hypertension:false,
                Clear_Disease_associated_with_smoking:false,
                Clear_Infectious_Diseases:false,
                Clear_Respiratory_Diseases:false,
                Clear_Mental_Health_Problem_illness:false,
                Clear_health_related_issues_Others_Specify:'',


                Clear_where_did_you_avail_write:'',
                Clear_Do_you_have_illness_or_any_health:'',

                Clear_health_related_issues:'',

                Clear_Theft:false,
                Clear_Robbery:false,
                Clear_Rape_and_other_type_of_sexual_abuse:false,
                Clear_Physical_Injury:false,
                Clear_Car_napping:false,
                Clear_Cattle_rustling:false,
                Clear_All_type_of_physical_abuse:false,
                Clear_All_type_of_Psychological_Abuse:false,
                Clear_Economic_Abuse:false,
                Clear_Emotional_Abuse:false,
                Clear_crime_or_violation_Others:'',
                crime_violence_happen:'',
                crime_violence:'',
                what_kind_of_assistance:'',


            Clear_SustainableLivelihood:false,
            Clear_Foodforwork:false,
            Clear_Cashforwork:false,
            Clear_PantawidPamilyangPilipino:false,
            Clear_AgrarianReformCommunity:false,
            Clear_TrainingforWorkScholarship:false,
            Clear_CommunityBasedEmployment:false,
            Clear_OtherHealthInsurance:false,
            Clear_HealthCareAssistance:false,
            Clear_SupplementalFeeding:false,
            Clear_SkillsandLivelihood:false,
            Clear_CreditAssistanceProgram:false,
            Clear_HousingProgram:false,
            Clear_SulongDunongProgram:false,
            Clear_DOSTScholarshipProgram:false,
            Clear_CHEDScholarshipProgram:false,
            Clear_SPES:false,
            Clear_AnimalDispersalProgram:false,
            Clear_CrisisInterventionprogram:false,
            Clear_PagkalingasaBayanProgram:false,
            Clear_HealthIndigencyProgram:false,
            Clear_Whattypeofprogram_others:'',
            Clear_SNational_Government:false,
            Clear_ProvincialGovernment:false,
            Clear_CityGovernment:false,
            Clear_BarangayLGU:false,
            Clear_Congressional_District:false,
            Clear_PrivateOrganizations:false,
            Clear_BarangaySK:false,
            Clear_Whowasweretheimplementer_Others:'',


        Clear_Yes_No_Water:'',
        Clear_Text_Field_Water:'',
        Clear_Yes_No_CANDLE:'',
        Clear_Text_Field_CANDLE:'',
        Clear_Yes_No_WHISTLE:'',
        Clear_Text_Field_WHISTLE:'',
        Clear_Yes_No_CLOTHES:'',
        Clear_Text_Field_CLOTHES:'',
        Clear_Yes_No_BLANKET:'',
        Clear_Text_Field_BLANKET:'',
        Clear_Yes_No_Flashlight:'',
        Clear_Text_Field_Flashlight:'',
        Clear_Yes_No_Matches:'',
        Clear_Text_Field_Matches:'',
        Clear_Yes_No_Food:'',
        Clear_Text_Field_Food:'',
        Clear_Yes_No_Radio:'',
        Clear_Text_Field_Radio:'',
        Clear_Yes_No_Battery:'',
        Clear_Text_Field_Battery:'',
        Clear_Yes_No_mportantdocuments:'',
        Clear_Praparedness_Kit_Others:'',
        Clear_Yes_No_Preparedness_Kit_Others:'',
        Clear_TextField_Preparedness_Kit_Others:'',
        Clear_Yes_No_Didyouattenddisaster:'',

            Clear_Yes_No_IncidentCommand:'',
            Clear_Select_IncidentCommand:'',
            Clear_Yes_No_EvacuationManagement:'',
            Clear_Select_EvacuationManagement:'',
            Clear_Yes_No_BasicLifeSupport:'',
            Clear_select_BasicLifeSupport:'',
            Clear_Yes_No_Communitybased:'',
            Clear_select_Communitybased:'',
            Clear_Yes_No_CampManagement:'',
            Clear_Select_CampManagement:'',
            Clear_Yes_No_FirstAidTraining:'',
            Clear_Select_FirstAidTraining:'',
            Clear_TextBox_DisasterRelatedTraining_Others:'',
            Clear_YesNo_DisasterRelatedTraining:'',
            Clear_selectd_DisasterRelatedTraining_Others:'',

            Clear_YESNO_FloodEvacuationDrill:'',
            Clear_Select_FloodEvacuationDrill:'',
            Clear_YESNO_TsunamiEvacuationDrill:'',
            Clear_Select_TsunamiEvacuationDrill:'',
            Clear_YESNO_LockdownDrill:'',
            Clear_Select_LockdownDrill:'',
            Clear_YESNO_BombDrill:'',
            Clear_Select_BombDrill:'',
            Clear_YESNO_EarthquakEvacuationDrill:'',
            Clear_Select_EarthquakEvacuationDrill:'',
            Clear_Textfield_DisasterPreparednessDrills_Others:'',
            Clear_YESNO_DisasterPreparednessDrills_Others:'',
            Clear_Select_DisasterPreparednessDrills_Others:'',

            Clear_Hormonal:'',
            Clear_BarrierMethod:'',
            Clear_onactingreversibl:'',
            Clear_EmergencyMethod:'',
            Clear_FertilityAwareness:'',
            Clear_PermanentMethod:'',
            Clear_ContraceptiveMethods_Others:'',

            select_health_facility:'',
            Clear_primaryreasonofnotseekingmaternalhealth:'',
            Clear_HowmanytimesdidyouvisitedGovernment:'',
            Clear_PhysicalExam:false,
            Clear_GynecologicalExam:false,
            Clear_Ultrasound:false,
            Clear_HIVSTISTDTesting:false,
            Clear_NutritiousSupplement:false,
            Clear_TetanusVaccinet:false,
            during_delivery_where_did_you_give_birth:'',
            Clear_YesNo_midwife:'',
            
            Clear_Globe_Smart_DITo:'',
            Clear_cellular_mobile:'',

            Clear_Mason:false,
            Clear_Painter:false,
            Clear_Carpentry:false,
            Clear_Electrical:false,
            Clear_Plumbing:false,
            Clear_HouseBuildSchool_Others:'',
            Clear_TreePlanting:false,
            Clear_MangrovePlanting:false,
            Clear_CleanupdriveRiver:false,
            Clear_CleanupdriveCoastal:false,
            Clear_CleaupdrivStreet:false,
            Clear_Environment_Others:'',
            Clear_DisasterResponse:false,
            Clear_ReliefGoodsDistribution:false,
            Clear_ReliefGoodsOrganize:false,
            Clear_Servesasadditional:false,
            Clear_C_Response_Others:'',
            Clear_KusinangKalinga:false,
            Clear_ParaisongPambata:false,
            Clear_Gulayan:false,
            Clear_D_Bayahinah_Others:'',
            Clear_Coachofassistthecoach:false,
            Clear_Maintaisafekeepsports:false,
            Clear_E_Sports_Others:'',
            Clear_hosting:false,
            Clear_Usher:false,
            Clear_Secretary:false,
            Clear_SocialMedia:false,
            Clear_GroupPrep:false,
            Clear_FoodDistribution:false,
            Clear_CrowdControl:false,
            Clear_Restoration:false,
            Clear_F_Restoration_Others:'',

            Clear_During_What_hours_are_you_available:'',
            Clear_ReasonsforVolunteering:'',
            Clear_ConductSurvey:false,


            Clear_Notinterested:false,
            Clear_Shy:false,
            Clear_Dontknowwheretovolunteer:false,
            Clear_Notime:false,
            Clear_Busy:false,
            Clear_State_reason_Others:'',

        };
    },


    watch: {
        menu(val) {
            val && setTimeout(() => (this.activePicker = "YEAR"));
        },
    },


    methods: {

        clear_country_destination()
        {
            this.Australia_clear = false
            this.Canada_clear = false
            this.Hongkong_clear = false
            this.Indonesia_clear = false
            this.Japan_clear = false
            this.Korea_clear = false
            this.Malaysia_clear = false
            this.Saudi_clear = false
            this.Singapore_clear = false
            this.Taiwan_clear = false
            this.UAE_clear = false
            this.USAE_clear = false
            this.others_country = ''

        },


        clear_what_grade_or_year_you_are_currently_attending()

        {

                this.usrelevel = false
                this.clear_public_private = ''
                this.why_your_not_attending_school = true

        },

            clear_Why_you_are_not_attending_school()

            {
                this.Schools_are_far_clear = false
                this.Illness_Disability_clear = false
                this.Financial_Constraint_clear = false
                this.Housekeeping_Taking_care_siblings_clear = false
                this.Employment_Looking_for_work_clear = false
                this.Affected_by_armed_conflict_clear = false
                this.No_birth_certificate_clear = false
                this.Got_pregnant_Early_marriage_clear = false
                this.No_regular_transportation_clear = false
                this.Lack_of_Interest_clear = false
                this.Already_finished_schooling_clear = false
                this.why_you_not_attending_skul_others_clear = ''
                this.selectgrade = ''
                this.write_the_course_clear = ''
                this.are_you_eligibility_passer_clear = ''
                this.usrelevel = ''
                this.what_grade_year_currently_attending = true
            },


            clear_Are_You_a_graduate_of_Senior_high()
            
            {

              
                this.strand = ''
                this.show_if_yes_graduate_senior_highschool = false

            },




     cleargenderpreference() {
     this.genderpreferencedawkuno = null
    this.countrydestination_clear = null   
            },

     clear_Did_you_Vote_in_the_last_SK_Election()
    {
        this.clear_Did_you_Vote_in_the_last_SK_Election_yes_no = ''
        this.clear_Did_you_Vote_in_the_regular_yes_no = ''


    },

        clear_How_many_skills_training_have_you_attended()
        {

            this.Carpentry_clear = false
            this.Masonry_clear = false
            this.Driving_clear = false
            this.Dressmaking_clear = false

            this.Practical_Electricity_clear = false
            this.Plumbing_clear = false
            this.Handcraft_making_clear = false
            this.Beauty_Care_clear = false
            this.Agri_Fishery_Production_clear = false
            this.Practical_Electricity_clear = false
            this.Skills_training_others_clear = ''


          
            this.can_you_read_and_write_yes_no = true

        },

        clear_Can_you_read_and_write_a_simple_message_in_any_language_or_dialect ()
        {
            this.YesNo_Can_you_Read_and_write_clear = ''
            this.skill_training_program = true

        },

       
        clear_What_is_your_class_of_worker()

        {

            this.clear_Working_for_private_household = false
            this.clear_Working_private_business_establishment_farm = false
            this.clear_Working_for_government_government_corporation = false
            this.clear_Self_employed_with_no_paid_employee = false
            this.Clear_no_of_works = ''

            this.Clear_YES_NO_Did_you_look_for_additional_work = true

            this.Clear_Managers = false
            this.Clear_Professionals = false
            this.Clear_Technicians_Associate_Professionals = false
            this.Clear_Clerical_Support_Workers = false
            this.Clear_Service_and_Sales_Workers = false
            this.Clear_Skilled_Agri_Fishery_Forest_Workers = false
            this.Clear_Craft_Related_Trades_Works = false
            this.Clear_Plant_Machine_Operations_Assembler = false
            this.Clear_Elementary_Occupations_labourer_jobs = false
            this.Clear_Armed_Forces_Occupations = false
            this.Clear_Virtual_Assistant_worker_onlinejobs = false
            this.Clear_Real_Estate_Activities = false
            this.Clear_Professional_Scientific_and_Technical_Activities = false
            this.Clear_Administrative_Support_Service_Activities = false
            this.Clear_Public_Administration_Defense_Compulsory_Social_Security = false
            this.Clear_Education = false
            this.Clear_Human_Health_and_Social_Work_Activities = false
            this.Clear_Arts_Entertainment_and_Recreation = false
            this.Clear_Activities_of_Households_as_Employers = false
            this.Clear_Activities_of_Extra_territorial = false
            this.Clear_Other_Service_Activities = ''
            this.Clear_household_member_work_during_the_past_weeks= ''
            this.Clear_others_specfyHouseholdmember = ''

            this.Clear_Permanent_Job_business_unpaid_family_work = ''
            this.Clear_what_was_your_Normal_working_hours = ''
            this.Clear_what_was_the_total_number_of_hours = ''
            




        },


        Clear_What_is_the_Sector_of_Your_Business(){
                this.Clear_Agriculture_plantations_other_rural_sectors = false
                this.Clear_Basic_Metal_Production = false
                this.Clear_Chemical_industries = false
                this.Clear_Commerce = false
                this.Clear_Construction = false
                this.Clear_Education_Business = false
                this.Clear_Financial_services_professional_service = false
                this.Clear_Forestry_wood_pulp_and_pape = false
                this.Clear_Health_services = false
                this.Clear_Hotels_tourism_catering = false
                this.Clear_Mining_coal_other_mining = false
                this.Clear_Transport = false
                this.Clear_Business_others = ''


        },

        Clear_Was_this_your_first_time_to_look_for_work_or_try_to_establish_a_business(){

            this.Clear_Was_this_your_first_time_to_look_for_work = ''
            this.Clear_What_you_have_been_doing_to_find_a_work = ''
            this.Clear_Write_N_of_weeks = ''
            this.Clear_Had_opportunity_for_work = ''
            this.why_did_you_not_look_for_work = true
        },

        Clear_Why_did_you_not_look_for_work()
        {

            this.Clear_Tired_believe_no_work_available = ''
            this.Clear_Tired_believe_no_work_available_Others = ''
            this.Clear_When_was_the_last_time_you_looked_for_work = ''
            this.was_this_your_first_time_to_look_for_work = true

        },

        Clear_Did_you_want_more_hours_of_work_during_the_past_week()
        {

           
            this.Clear_Yes_No_Did_you_look_for_work_or_try_to_establish_business = ''
            this.did_you_look_additional_word = true
            this.whats_your_class_of_worker = false
            this.did_you_look_work_to_eastablish_business = false

        },


        Clear_What_is_your_PhilHealth_membership_type()

        {

            this.philhealth_membership = ''
            this.are_your_depende_of_philhealth_member = true
            this.what_is_your_philhealth_membership = false 


        },


            Clear_Are_you_a_dependent_of_a_PhilHealth_Member()

            {

                this.Clear_Are_you_a_dependent_of_a_PhilHealth = ''
                this.what_is_your_philhealth_membership = true
                this.are_your_depende_of_philhealth_member = false

            },

            Clear_Do_you_Have_a_Solo_Parent_ID()

            {
           this.Clear_Yes_No_Do_you_Have_a_Solo_Parent_ID = ''
            this.do_you_have_solo_parent_id = false

            },

            Clear_What_type_of_disability_do_you_have()
            {
                this.Clear_Mental_Intellectual = false
                this.Clear_Hearing_Disability = false
                this.Clear_Psychological_Disability = false
                this.Clear_Visual_Disabilityy = false
                this.Clear_Speech_Impairement = false
                this.Clear_Disability_due_to_chronic_illness = false
                this.Clear_Orthopaedic_Musculoskeletal_Disability = false
                this.Clear_LearningDisability = false
                this.Clear_Multiple_Disability_Specify = ''
                this.Clear_Do_you_have_a_PWD_ID = ''

            },

        Clear_What_kind_of_health_related_issues_or_lifestyle_diseases_you_have ()
        {
                this.Clear_Cardiovascular_Diseases = false
                this.Clear_Obesity_Type__Diseases = false
                this.Clear_Cancer = false
                this.Clear_Hypertension = false
                this.Clear_Disease_associated_with_smoking = false
                this.Clear_Infectious_Diseases = false
                this.Clear_Respiratory_Diseases = false
                this.Clear_Mental_Health_Problem_illness = false
                this.Clear_health_related_issues_Others_Specify = ''

        },

        Clear_Where_did_you_avail_medical_treatment()

        {

            this.Clear_where_did_you_avail_write = ''
            this.Clear_Do_you_have_illness_or_any_health = ''
            
            this.do_you_have_illness_or_any_health_related_62_B = false
            this.where_did_you_avail_medical_treatment_62_A = false
            this.Clear_health_related_issues = ''

        },

        Clear_What_kind_of_illness_or_health_related_issues_does_you(){

            this.Clear_health_related_issues = ''
            this.what_kind_of_illness_or_health_realted_issues_63 = false


        },

        Clear_What_crime_or_violation(){

                this.Clear_Theft = false
                this.Clear_Robbery = false
                this.Clear_Rape_and_other_type_of_sexual_abuse = false
                this.Clear_Physical_Injury = false
                this.Clear_Car_napping = false
                this.Clear_Cattle_rustling = false
                this.Clear_All_type_of_physical_abuse = false
                this.Clear_All_type_of_Psychological_Abuse = false
                this.Clear_Economic_Abuse = false
                this.Clear_Emotional_Abuse = false
                this.Clear_crime_or_violation_Others = ''
                this.crime_violence_happen = ''
                this.crime_violence = ''
                this.what_kind_of_assistance = ''
        },

Clear_Whatypeoprogramserviceidoureceiveorasarecipientof()
{

            this.Clear_SustainableLivelihood = false
            this.Clear_Foodforwork = false
            this.Clear_Cashforwork = false
            this.Clear_PantawidPamilyangPilipino = false
            this.Clear_AgrarianReformCommunity = false
            this.Clear_TrainingforWorkScholarship = false
            this.Clear_CommunityBasedEmployment = false
            this.Clear_OtherHealthInsurance = false
            this.Clear_HealthCareAssistance = false
            this.Clear_SupplementalFeeding = false
            this.Clear_SkillsandLivelihood = false
            this.Clear_CreditAssistanceProgram = false
            this.Clear_HousingProgram = false
            this.Clear_SulongDunongProgram = false
            this.Clear_DOSTScholarshipProgram = false
            this.Clear_CHEDScholarshipProgram = false
            this.Clear_SPES = false
            this.Clear_AnimalDispersalProgram = false
            this.Clear_CrisisInterventionprogram = false
            this.Clear_PagkalingasaBayanProgram = false
            this.Clear_HealthIndigencyProgram = false
            this.Clear_Whattypeofprogram_others = ''
            this.Clear_SNational_Government = false
            this.Clear_ProvincialGovernment = false
            this.Clear_CityGovernment = false
            this.Clear_BarangayLGU = false
            this.Clear_Congressional_District = false
            this.Clear_PrivateOrganizations = false
            this.Clear_BarangaySK = false
            this.Clear_Whowasweretheimplementer_Others = ''

            this.what_type_of_program_80_81 = false

},

    Clear_Yes_do_you_havepreparednesskit(){


       

        this.do_you_have_following_preparedness_kit_83 = true
        this.did_you_attend_disaster_preparedness_84 = false

        this.Clear_Yes_No_Didyouattenddisaster= ''

    },



    Clear_Do_you_have_aDisasterPreparednessKit()
    {

        this.Clear_Yes_No_Water = ''
        this.Clear_Text_Field_Water = ''
        this.Clear_Yes_No_CANDLE = ''
        this.Clear_Text_Field_CANDLE = ''
        this.Clear_Yes_No_WHISTLE = ''
        this.Clear_Text_Field_WHISTLE = ''
        this.Clear_Yes_No_CLOTHES = ''
        this.Clear_Text_Field_CLOTHES = ''
        this.Clear_Yes_No_BLANKET = ''
        this.Clear_Text_Field_BLANKET = ''
        this.Clear_Yes_No_Flashlight = ''
        this.Clear_Text_Field_Flashlight = ''
        this.Clear_Yes_No_Matches = ''
        this.Clear_Text_Field_Matches = ''
        this.Clear_Yes_No_Food = ''
        this.Clear_Text_Field_Food = ''
        this.Clear_Yes_No_Radio = ''
        this.Clear_Text_Field_Radio = ''
        this.Clear_Yes_No_Battery = ''
        this.Clear_Text_Field_Battery = ''
        this.Clear_Yes_No_mportantdocuments = ''
        this.Clear_Praparedness_Kit_Others = ''
        this.Clear_Yes_No_Preparedness_Kit_Others = ''
        this.Clear_TextField_Preparedness_Kit_Others = ''
        
        this.do_you_have_following_preparedness_kit_83 = false
        this.did_you_attend_disaster_preparedness_84 = true
        

    },


        Clear_Disaster_Related_Training_Seminars()
        {

            this.Clear_Yes_No_IncidentCommand = ''
            this.Clear_Select_IncidentCommand = ''
            this.Clear_Yes_No_EvacuationManagement = ''
            this.Clear_Select_EvacuationManagement = ''
            this.Clear_Yes_No_BasicLifeSupport = ''
            this.Clear_select_BasicLifeSupport = ''
            this.Clear_Yes_No_Communitybased = ''
            this.Clear_select_Communitybased = ''
            this.Clear_Yes_No_CampManagement = ''
            this.Clear_Select_CampManagement = ''
            this.Clear_Yes_No_FirstAidTraining = ''
            this.Clear_Select_FirstAidTraining = ''
            this.Clear_TextBox_DisasterRelatedTraining_Others = ''
            this.Clear_YesNo_DisasterRelatedTraining = ''
            this.Clear_selectd_DisasterRelatedTraining_Others = ''
            this.fire_evacuation_drill_84_3 = true

        },

        Clear_HaveyouattendedanyofthefollowingDisasterPreparednessDrills()
        {

            this.Clear_YESNO_FloodEvacuationDrill = ''
            this.Clear_Select_FloodEvacuationDrill = ''
            this.Clear_YESNO_TsunamiEvacuationDrill = ''
            this.Clear_Select_TsunamiEvacuationDrill = ''
            this.Clear_YESNO_LockdownDrill = ''
            this.Clear_Select_LockdownDrill = ''
            this.Clear_YESNO_BombDrill = ''
            this.Clear_Select_BombDrill = ''
            this.Clear_YESNO_EarthquakEvacuationDrill = ''
            this.Clear_Select_EarthquakEvacuationDrill = ''
            this.Clear_Textfield_DisasterPreparednessDrills_Others = ''
            this.Clear_YESNO_DisasterPreparednessDrills_Others = ''
            this.Clear_Select_DisasterPreparednessDrills_Others = ''

            this.disaster_related_training_seminars_84_1 = true

        },

        Clear_Contraceptive_Methods()
        {

            this.Clear_Hormonal = ''
            this.Clear_BarrierMethod = ''
            this.Clear_onactingreversibl = ''
            this.Clear_EmergencyMethod = ''
            this.Clear_FertilityAwareness = ''
            this.Clear_PermanentMethod = ''
            this.Clear_ContraceptiveMethods_Others = ''
            
            this.why_did_you_not_use_contraceptive_73_3 = true

        },


        Clear_why_did_sexualy_ActiveDidnoteverusecontraciptive()

        {
            this.Clear_cultureTraditional = false
            this.Clear_Nocontraceptivemethod = false
            this.Clear_Cannotaffordtobuy = false
            this.Clear_Healthproblem = false
            this.Clear_ctivedidnoteverusecontraceptive_Others = ''

            this.what_methods_have_you_used_73_2 = true

        },

        Clear_Whichtypeofhealthfacilitydidyouvisitformaternal()
        {
            this.select_health_facility = ''
            this.Clear_primaryreasonofnotseekingmaternalhealth = ''
            this.Clear_HowmanytimesdidyouvisitedGovernment = ''
            this.Clear_PhysicalExam = false
            this.Clear_GynecologicalExam = false
            this.Clear_Ultrasound = false
            this.Clear_HIVSTISTDTesting = false
            this.Clear_NutritiousSupplement = false
            this.Clear_TetanusVaccinet = false
            this.during_delivery_where_did_you_give_birth = ''
            this.Clear_YesNo_midwife = ''

            this.which_type_of_health_facility_did_you_visit = false
            this.what_health_services_did_you_receievein_in_the_goverment_69 = false
            this.during_delivery_where_did_you_give_birth_70 = false
        },

        Clear_Do_you_have_cellular_mobile_phones()
        {
         this.Clear_Globe_Smart_DITo = ''
         this.what_mobile_phone_services_87 = false
        },
      
        Clear_Whatisyourmeansforinternetconnection()
        {

            this.Clear_cellular_mobile = ''
            this.what_is_your_means_intern_connection_89 = false
        },


        Clear_AreyounterestedtojoinanyvoluntaryworkClear()

        {

            this.Clear_Mason = false
            this.Clear_Painter = false
            this.Clear_Carpentry = false
            this.Clear_Electrical = false
            this.Clear_Plumbing = false
            this.Clear_HouseBuildSchool_Others = ''
            this.Clear_TreePlanting = false
            this.Clear_MangrovePlanting = false
            this.Clear_CleanupdriveRiver = false
            this.Clear_CleanupdriveCoastal = false
            this.Clear_CleaupdrivStreet = false
            this.Clear_Environment_Others = ''
            this.Clear_DisasterResponse = false
            this.Clear_ReliefGoodsDistribution = false
            this.Clear_ReliefGoodsOrganize = false
            this.Clear_Servesasadditional = false
            this.Clear_C_Response_Others = ''
            this.Clear_KusinangKalinga = false
            this.Clear_ParaisongPambata = false
            this.Clear_Gulayan = false
            this.Clear_D_Bayahinah_Others = ''
            this.Clear_Coachofassistthecoach = false
            this.Clear_Maintaisafekeepsports = false
            this.Clear_E_Sports_Others = ''
            this.Clear_hosting = false
            this.Clear_Usher = false
            this.Clear_Secretary = false
            this.Clear_SocialMedia = false
            this.Clear_GroupPrep = false
            this.Clear_FoodDistribution = false
            this.Clear_CrowdControl = false
            this.Clear_Restoration = false
            this.Clear_F_Restoration_Others = ''
            this.Clear_ConductSurvey = false

            this.Clear_During_What_hours_are_you_available = ''
            this.Clear_ReasonsforVolunteering = ''

            this.state_reason_92 = true
            this.during_what_hours_are_you_available_volunteer = false


        },

            Clear_State_Reason()
           
            {
                this.Clear_Notinterested = false
                this.Clear_Shy = false
                this.Clear_Dontknowwheretovolunteer = false
                this.Clear_Notime = false
                this.Clear_Busy = false
                this.Clear_State_reason_Others = ''
                this.where_would_you_like_volunteer_93 = true
                this.during_what_hours_are_you_available_volunteer = true
            },
        


        validate() {
        
        this.$refs.formes.validate()
        let v = this.$refs.formes.validate()
        /* eslint-disable no-console */
        console.log(v)

        if (v) {
          this.e1 = this.e1 + 1
        }
  
        // if(validate = false){
        //   this.e1 = this.e1
        // }
        // else {
        //   this.e1 = this.e1 + 1
        // }
  
      },


        calculateAge(birthDate) {

if (!birthDate) return;

const currentDate = new Date();
if (new Date(birthDate) > currentDate) {
    this.birthDate = null
    this.years = null;
    this.months = null;
    this.days = null;
    alert('Invalid Date of Birth')
}

const diffTime = currentDate - new Date(birthDate);
const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
this.years = Math.floor(totalDays / 365.25);
this.months = Math.floor((totalDays % 365.25) / 30.4375);
this.days = Math.floor((totalDays % 365.25) % 30.4375);

},

        scrollup() {
            window.scrollTo(0, 0);
        },

        functionselect_pregnant() {

            if (this.if_pregnant == "No Pregnant") {

                this.if_pregnant_are_you_member_philhealth_73 = false;


            }
            else {

                this.if_pregnant_are_you_member_philhealth_73 = true;

            }
        },


        function_during_deliry_where_did_you_give_birth() {

            if (this.during_delivery_where_did_you_give_birth == "At home") {

                this.was_the_public_health_midwife_71 = true;

            }
            else {

                this.was_the_public_health_midwife_71 = false;

            }
        },



        functionselect_civil_status() {

            if (this.civil_status == "Married") {

                this.if_married_or_sexually_active_woman_73_1 = true;

            }

            else if (this.civil_status == "Common-law/Live-in") {
                this.if_married_or_sexually_active_woman_73_1 = true;
            }

            else {

                this.if_married_or_sexually_active_woman_73_1 = false;
            }

        },

        


        funtionselection_code_66() {

            if (this.select_health_facility == "Private Clinic (Hospital)") {

                this.what_was_the_primary_reason_of_not_seeking_service_goverment_67 = true;
                this.how_many_times_did_you_visited_the_government_health_68 = false;
                this.how_many_times_did_you_visited_the_government_health_68 = false;


            }
            else if (this.select_health_facility == "Traditional Birth Attendant") {

                this.what_was_the_primary_reason_of_not_seeking_service_goverment_67 = true;
                this.how_many_times_did_you_visited_the_government_health_68 = false;
                this.how_many_times_did_you_visited_the_government_health_68 = false;

            }

            else if (this.select_health_facility == "Barangay Health Station") {

                this.how_many_times_did_you_visited_the_government_health_68 = true;
                this.what_was_the_primary_reason_of_not_seeking_service_goverment_67 = false;
                this.how_many_times_did_you_visited_the_government_health_68 = true;

            }

            else if (this.select_health_facility == "City Health Office") {

                this.how_many_times_did_you_visited_the_government_health_68 = true;
                this.what_was_the_primary_reason_of_not_seeking_service_goverment_67 = false;
                this.how_many_times_did_you_visited_the_government_health_68 = true;
            }

            else if (this.select_health_facility == "Regional Hospital") {

                this.how_many_times_did_you_visited_the_government_health_68 = true;
                this.what_was_the_primary_reason_of_not_seeking_service_goverment_67 = false;
                this.how_many_times_did_you_visited_the_government_health_68 = true;


            }

            else if (this.select_health_facility == 0) {

                this.what_was_the_primary_reason_of_not_seeking_service_goverment_67 = false;
                this.how_many_times_did_you_visited_the_government_health_68 = false;
            }

        },




        funcionselect() {

            if (this.selectgrade == "College Graduate") {

                this.whats_your_college_course = true;
                this.are_you_passer_eligibility = true;
                /*  this.what_eligibility_did_you_make_it = true; */
            }
            else {
                this.whats_your_college_course = false;
                this.are_you_passer_eligibility = false;
                /*  this.what_eligibility_did_you_make_it = false; */
            }
        },




        save(date) {
            this.$refs.menu.save(date);
        },
    },

};
</script>
  
  
<style>
h4 {
    color: green;

}

h3 {

    font-size: small;
}
</style>