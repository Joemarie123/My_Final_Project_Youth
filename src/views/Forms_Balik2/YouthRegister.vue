<template>
    <v-app>
        
        <v-card>
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
                    <v-stepper-content step="1">
                        <v-card class="mb-12" color="grey lighten-4" id="step1">
                            <v-card-text>
                                <v-container>
                                    <H4>YOUTH IDENTIFICATION</H4>
                                    <v-row>

                                        <v-col cols="12" sm="12" md="3" class="mt-4">
                                            <v-select
                                            outlined dense height="10"
                                                :items="['Apokon', 'Bincungan', 'Busaon', 'Canocotan', 'Cuambogan', 'La Filipina', 'Liboganon', 'Madaum', 'Magdum', 'Mankilam', 'New Balamban', 'Nueva Fuerza', 'Pagsabangan', 'Pandapan', 'Magugpo Poblacion', 'San Agustin', 'San Isidro', 'San Miguel (Camp 4)', 'Visayan Village', 'Magugpo East', 'Magugpo North', 'Magugpo South', 'Magugpo West']"
                                                label="Select Barangay" prepend-inner-icon="mdi-map-marker"
                                                v-model="SignupBarangay" required></v-select>

                                        </v-col>

                                        <v-col cols="12" sm="12" md="3" class="mt-n5 mt-md-4">
                                            <v-text-field outlined dense height="10" label="Purok/Sitio,Street,House/Bldg.No"></v-text-field>
                                        </v-col>


                                        <v-col cols="12" sm="12" md="3" class="mt-n5 mt-md-4">
                                            <v-text-field  outlined dense height="10" label="Date Of Survey " type="date" required color="green">
                                            </v-text-field>
                                        </v-col>

                                        <v-col cols="12" sm="12" md="3" class="mt-n5 mt-md-4">
                                            <v-text-field outlined dense height="10" label="CP # of Respondent" required
                                                prepend-inner-icon="mdi-cellphone-basic">
                                            </v-text-field>

                                        </v-col>
                                       
                                        <v-col cols="12" md="12" sm="12" class="mt-n4">
                                            <p class="font-weight-bold">
                                                NAME OF RESPONDENT
                                            </p>
                                        </v-col>

                                        <v-col cols="12" sm="12" md="3" class="mt-n5">
                                            <v-text-field  label="Last Name" outlined dense height="10" required prepend-inner-icon="mdi-account">
                                            </v-text-field>

                                        </v-col>

                                        <v-col cols="12" sm="6" md="3" class="mt-n5">

                                            <v-text-field outlined dense height="10" label="First Name" required prepend-inner-icon="mdi-account">
                                            </v-text-field>


                                        </v-col>

                                        <v-col cols="12" sm="6" md="3" class="mt-n5">
                                            <v-text-field outlined dense height="10" label="Middle Name" required prepend-inner-icon="mdi-account">
                                            </v-text-field>
                                        </v-col>

                                        <v-col cols="12" sm="12" md="3" class="mt-n5">
                                            <v-file-input outlined dense height="10" label="Attached ID here"  accept="image/x-png,image/gif,image/jpeg"></v-file-input>
                                        </v-col>

                                        <v-col cols="12" md="3" sm="12" class="mt-n5">
                                            <v-text-field  outlined dense height="10" label="Birth Day" type="date" required color="green" v-model="birthDate" @input="calculateAge(birthDate)">
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="3" sm="12" class="mt-n5">
                                            <v-text-field  :value="years" readonly outlined dense height="10" label="Age(As of last Birth Day)" required >
                                                
                                            </v-text-field>

                                            <!-- <p v-if="birthDate">Your age is {{ years }} years, {{ months }} months, and {{ days }} days</p> -->


                                        </v-col>


                                        <v-col cols="12" md="3" sm="12" class="mt-n5">
                                            <v-select :items="['YES', 'NO']"
                                            outlined dense height="10"
                                                label="Was the birth registered with the civil registry office?"
                                                prepend-inner-icon="mdi-map-marker" v-model="SignupBarangay"
                                                required></v-select>

                                        </v-col>



                                        <v-col cols="12" md="3" sm="12">
                                            <v-select @change="functionselect_civil_status"
                                            class="mt-n5"
                                            outlined dense height="10"
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
                                                                do_you_smoke_or_use_tobacco = false,
                                                                if_married_or_sexually_active_woman_73_1 = false
                                                            " label="Male"></v-radio>



                                                            <v-radio @change="have_you_give_birth_in_the_last_2_years_65 = true,
                                                                if_pregnant_as_of_this_time_72 = true,
                                                                do_you_smoke_or_use_tobacco = true,
                                                                if_married_or_sexually_active_woman_73_1 = true
                                                            " value="Female" label="Female"></v-radio>
                                                        </v-radio-group>

                                                    </v-col>



                                                    <v-col cols="12" sm="12" md="3" class="mt-n2">
                                                        <p class="font-weight-bold">Gender Preference</p>
                                                        <v-select
                                                        class="mt-n2"
                                                        outlined dense height="10"
                                                            :items="['Lesbian', 'Gay', 'Bisexual', 'Transgender', 'Queer', 'Intersex', 'Asexual', 'Pansexual', 'Cisgender', 'Biological Sex', 'Gender Identity', 'Sexual Identity', 'Ally', 'Heterosexual Privilege', 'Heterosexism or Heteronormativity']"
                                                            prepend-inner-icon="mdi-account-switch"
                                                            v-model="gender_preferences" required></v-select>

                                                    </v-col>

                                                    <v-col cols="12" sm="12" md="3" class="mt-n7 mt-md-n2">
                                                        <p class="font-weight-bold">Ethnicity/ tribe: See codes below</p>
                                                        <v-select
                                                        class="mt-n2"
                                                        outlined dense height="10"
                                                            :items="['Bisaya/ Binisaya', 'Boholano', 'Cagan/ Kagan', 'Cebuano', 'Davawenyo', 'Dibabawon', 'Hiligaynon/ Ilongo', 'Mandaya', 'Manguangan', 'Manobo', 'Mansaka', 'Tagalog', 'Bilaan', 'Kamayo', 'Molbog', 'Kolibugan', 'Yakan', 'Tausug', 'Matigsalug']"
                                                            prepend-inner-icon="mdi-account-convert" v-model="Barangay"
                                                            required></v-select>

                                                    </v-col>

                                                    <v-col cols="12" sm="12" md="3" class="mt-n7 mt-md-n2">
                                                        <p class="font-weight-bold">Religious Affiliation</p>
                                                        <v-select
                                                        class="mt-n2"
                                                        outlined dense height="10"
                                                            :items="['Roman Catholic', 'Iglesia Ni Cristo', 'Evangelical', 'Islam', 'Seventh Day Adventist', 'Church of Christ', 'United Church of Christ in the Philippines', 'Dating Daan']"
                                                            prepend-inner-icon="mdi-church" v-model="Barangay"
                                                            required></v-select>

                                                    </v-col>

                                                    <v-col cols="12" sm="12" md="3" class="mt-n7">
                                                        <p class="font-weight-bold">Are you an overseas worker?</p>
                                                        <v-radio-group row   class="mt-n3">
                                                            <v-radio @click="country_destination = true" value="yes"
                                                                label="Yes"></v-radio>

                                                            <v-radio @click="country_destination = false" value="no"
                                                                label="No"></v-radio>

                                                        </v-radio-group>

                                                    </v-col>

                                                    <!--     COUNTRY OF DESTINATION START -->

                                                    <v-dialog v-model="country_destination" max-width="380px">
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

                                                                        <v-checkbox-group>

                                                                            <v-checkbox label="Australia"></v-checkbox>
                                                                            <v-checkbox label="Canada"
                                                                                style="margin-top: -10px"></v-checkbox>
                                                                            <v-checkbox label="Hongkong"
                                                                                style="margin-top: -10px"></v-checkbox>
                                                                            <v-checkbox label="Indonesia"
                                                                                style="margin-top: -10px"></v-checkbox>
                                                                            <v-checkbox label="Japan"
                                                                                style="margin-top: -10px"></v-checkbox>
                                                                            <v-checkbox label="Korea"
                                                                                style="margin-top: -10px"></v-checkbox>
                                                                            <v-checkbox label="Malaysia"
                                                                                style="margin-top: -10px"></v-checkbox>
                                                                        </v-checkbox-group>
                                                                    </v-col>
                                                                    <v-col cols="12" sm="12" md="5" class="mx-5"
                                                                        style="margin-top: -30px">
                                                                        <v-checkbox-group>

                                                                            <v-checkbox label="Saudi Arabia"></v-checkbox>
                                                                            <v-checkbox label="Singapore"
                                                                                style="margin-top: -10px"></v-checkbox>
                                                                            <v-checkbox label="Taiwan"
                                                                                style="margin-top: -10px"></v-checkbox>
                                                                            <v-checkbox label="United Arab Emirates"
                                                                                style="margin-top: -10px"></v-checkbox>
                                                                            <v-checkbox label="USA"
                                                                                style="margin-top: -10px"></v-checkbox>

                                                                        </v-checkbox-group>
                                                                    </v-col>


                                                                    <v-col cols="10" sm="10" md="10"
                                                                        style="margin-left: 20px; margin-top: -25px;">
                                                                        <v-text-field label="Other, specify"></v-text-field>
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
                                                                            dark @click="country_destination = false">
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
                                                                <v-radio @click="what_grade_year_currently_attending = true"
                                                                    value="yes" label="Yes"></v-radio>
                                                                <v-radio @click="why_your_not_attending_school = true"
                                                                    value="no" label="No"></v-radio>
                                                            </v-radio-group>

                                                        </v-col>

                                                        <v-col cols="12" sm="12" md="3" class="mt-n3 ml-3 mt-md-1 ml-md-n6">
                                                            <p class="font-weight-bold">Are You a graduate of Senior high?
                                                            </p>
                                                            <v-radio-group row class="mt-n3">
                                                                <v-radio
                                                                    @change="show_if_yes_graduate_senior_highschool = true"
                                                                    value="yes" label="Yes"></v-radio>
                                                                <v-radio
                                                                    @change="show_if_yes_graduate_senior_highschool = false"
                                                                    value="no" label="No"></v-radio>
                                                            </v-radio-group>

                                                            <v-select class="pr-6 mt-2" v-show="show_if_yes_graduate_senior_highschool"
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
                                                                                <v-radio-group row>
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
                                                                                        label="Schools are far/ Inaccessible"></v-checkbox>
                                                                                    <v-checkbox label="Illness/ Disability"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox label="Financial Constraint"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox
                                                                                        label="Housekeeping/ Taking care siblings"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox
                                                                                        label="Employment/ Looking for work"
                                                                                        style="margin-top: -10px"></v-checkbox>

                                                                                </v-checkbox-group>
                                                                            </v-col>

                                                                            <v-col cols="10" sm="8" md="5" class="ml-2">

                                                                                <v-checkbox-group>
                                                                                    <v-checkbox
                                                                                        label="Affected by armed conflict"></v-checkbox>
                                                                                    <v-checkbox label="No birth certificate"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox
                                                                                        label="Got pregnant/ Early marriage"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox
                                                                                        label="No regular transportation"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox label="Lack of Interest"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox
                                                                                        label="Already finished schooling"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-text-field
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
                                                                            <v-text-field v-show="whats_your_college_course"
                                                                                label="write the course" required>
                                                                            </v-text-field>



                                                                            <p class="font-weight-bold"
                                                                                v-show="are_you_passer_eligibility">Are you
                                                                                passer of any Eligibility??</p>
                                                                            <v-radio-group
                                                                                v-show="are_you_passer_eligibility" row>
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
                            <v-btn id="v-btn-c" color="green" @click="e1 = 2">
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


                                        <v-col cols="12" sm="12" md="2" class="mt-n3">
                                            <p class="font-weight-bold">Are you currently attending any Skills training?</p>
                                            <v-radio-group row class="mt-n3">
                                                <v-radio value="yes" label="Yes"></v-radio>
                                                <v-radio value="no" label="No"></v-radio>
                                            </v-radio-group>

                                        </v-col>

                                        <v-col cols="12" sm="12" md="2" class="mt-n3">
                                            <p class="font-weight-bold">Have you attended any skills Training in the past?
                                            </p>
                                            <v-radio-group row class="mt-n3">
                                                <v-radio value="yes"
                                                    @click="skill_training_program = true, can_you_read_and_write_yes_no = false"
                                                    label="Yes"></v-radio>
                                                <v-radio value="no" @click="can_you_read_and_write_yes_no = true"
                                                    label="No"></v-radio>
                                            </v-radio-group>

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
                                                                <v-checkbox label="Carpentry"></v-checkbox>
                                                                <v-checkbox label="Masonry"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Driving"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Dressmaking"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Practical Electricity"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                            </v-checkbox-group>
                                                        </v-col>

                                                        <v-col cols="12" sm="12" md="8" class="mx-5"
                                                            style="margin-top: -30px">

                                                            <v-checkbox-group>
                                                                <v-checkbox label="Plumbing"></v-checkbox>
                                                                <v-checkbox label="Handcraft making"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Beauty Care"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Agri-Fishery Production"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Practical Electricity"
                                                                    style="margin-top: -10px"></v-checkbox>


                                                            </v-checkbox-group>
                                                        </v-col>


                                                        <v-col cols="10" class="mx-4" style="margin-top: -20px">
                                                            <v-text-field label="Others" required>
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
                                            
                                            <v-radio-group row>
                                                <v-radio value="yes" label="Yes"></v-radio>
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
                                                <v-radio value="no" label="No"></v-radio>
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

                                        <v-col cols="12" sm="12" md="2" class="mt-n1 mt-md-1">
                                            <p class="font-weight-bold">Have you elected in any organization you are
                                                affiliated with?</p>
                                            <v-radio-group row class="mt-n3">
                                                <v-radio @click="leardership_information = true" value="yes"
                                                    label="Yes"></v-radio>
                                                <v-radio value="no" label="No"></v-radio>
                                            </v-radio-group>
                                        </v-col>

                                        <v-col cols="12" sm="12" md="2" class="mt-1">
                                            <h4>ECONOMIC ACTIVITY (1)</h4>
                                            <p class="font-weight-bold mt-1" >Did you do any work during the past week?</p>
                                            <v-radio-group row class="mt-n3">
                                                <v-radio value="yes"
                                                    @click="whats_your_class_of_worker = true, do_you_have_job_or_business_during_past_week = false"
                                                    label="Yes"></v-radio>
                                                <v-radio value="no"
                                                    @click="do_you_have_job_or_business_during_past_week = true, how_many_works_job_business_you_have = false, whats_your_primary_occupation = false, what_kind_of_industry_did_the_household_member = false"
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
                                                <v-radio value="no" label="No"></v-radio>
                                            </v-radio-group>

                                        </v-col>

                                        <v-col cols="12" sm="12" md="2" class="mt-n3 mt-md-1">
                                            <p class="font-weight-bold">Did you want more hours of work during the past
                                                week?</p>
                                            <v-radio-group row class="mt-n3">
                                                <v-radio value="yes"
                                                    @change="did_you_look_additional_word = true, whats_your_class_of_worker = false, did_you_look_work_to_eastablish_business = false"
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
                                                                <v-checkbox
                                                                    label="Agriculture; plantations;other rural sectors"></v-checkbox>
                                                                <v-checkbox label="Basic Metal Production "
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Chemical industries"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Commerce"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Construction"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Education"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Financial services; professional service"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Financial services; professional service"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                                <v-checkbox label="Forestry; wood; pulp and paper"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                                <v-checkbox label="Health services"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                                <v-checkbox label="Hotels; tourism; catering"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Mining (coal; other mining)"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Transport"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                            </v-checkbox-group>

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
                                                                <v-checkbox
                                                                    label="Working for private household"></v-checkbox>
                                                                <v-checkbox
                                                                    label="Working private business/ establishment/ farm"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox
                                                                    label="Working for government/ government corporation"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Self-employed with no paid employee"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                            </v-checkbox-group>
                                                        </v-col>

                                                        <v-col cols="12" sm="10" md="10" class="mt-n1">
                                                            <p class="font-weight-bold">How many work you Have?</p>
                                                        </v-col>

                                                        <v-col cols="10" sm="5" md="7" class="mt-n8">

                                                            <v-text-field label="No of Works"></v-text-field>
                                                        </v-col>

                                                        <v-col cols="12" sm="10" md="10" class="mt-n6">
                                                            <p class="font-weight-bold">Did you look for additional work
                                                                during the past week?</p>
                                                            <v-radio-group row>
                                                                <v-radio value="yes" label="Yes"></v-radio>
                                                                <v-radio value="no" label="No"></v-radio>
                                                            </v-radio-group>
                                                        </v-col>




                                                        <v-col cols="12" sm="12" md="12" class="mt-n2">

                                                            <p class="font-weight-bold">What was your primary occupation
                                                                during the past weeks?</p>
                                                        </v-col>

                                                        <v-col cols="12" sm="12" md="6" class="mt-n9">

                                                            <v-checkbox-group>
                                                                <v-checkbox label="Managers"></v-checkbox>
                                                                <v-checkbox label="Professionals"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Technicians & Associate Professionals"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Clerical Support Workers"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                                <v-checkbox label="Service and Sales Workers"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                                <v-checkbox label="Skilled Agri- Fishery & Forest Workers"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                                <v-checkbox label="Craft & Related Trades Works"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                            </v-checkbox-group>
                                                        </v-col>


                                                        <v-col cols="12" sm="12" md="6" class="mt-n4">


                                                            <v-checkbox-group>

                                                                <v-checkbox label="Plant & Machine Operations & Assemblers"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                            </v-checkbox-group>

                                                            <v-checkbox label="Elementary Occupations (labourer jobs)"
                                                                style="margin-top: -10px"></v-checkbox>

                                                            <v-checkbox label="Armed Forces Occupations"
                                                                style="margin-top: -10px"></v-checkbox>

                                                            <v-checkbox label="Virtual Assistant/ worker (online jobs)"
                                                                style="margin-top: -10px"></v-checkbox>

                                                            <v-checkbox label="Real Estate Activities"
                                                                style="margin-top: -10px"></v-checkbox>

                                                            <v-checkbox
                                                                label="Professional, Scientific and Technical Activities"
                                                                style="margin-top: -10px"></v-checkbox>




                                                        </v-col>


                                                        <v-col cols="12" sm="12" md="12">


                                                            <v-checkbox-group>
                                                                <v-checkbox
                                                                    label="Administrative & Support Service Activities"
                                                                    style="margin-top: -10px"></v-checkbox>


                                                                <v-checkbox
                                                                    label="Public Administration & Defense; Compulsory Social Security"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                            </v-checkbox-group>

                                                            <v-checkbox label="Education"
                                                                style="margin-top: -10px"></v-checkbox>

                                                            <v-checkbox label="Human Health and Social Work Activities"
                                                                style="margin-top: -10px"></v-checkbox>

                                                            <v-checkbox label="Arts, Entertainment and Recreation"
                                                                style="margin-top: -10px"></v-checkbox>

                                                            <v-checkbox
                                                                label="Activities of Households as Employers; Undifferentiated Goods & Services-producing activities of Households for own use"
                                                                style="margin-top: -10px"></v-checkbox>

                                                            <v-checkbox
                                                                label="Activities of Extra-territorial Organizations and Bodies"
                                                                style="margin-top: -10px"></v-checkbox>



                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="8" class="mt-n3">

                                                            <v-text-field label="Other Service Activities"
                                                                style="margin-top: -10px"></v-text-field>
                                                        </v-col>


                                                        <v-col cols="10" sm="10" md="10" class="mt-n8">
                                                            <p class="font-weight-bold">In what kind of industry did the
                                                                household member work during the past Weeks?</p>

                                                            <v-select class="mt-n4"
                                                                :items="['Mining Quarrying ', 'Manufacturing  ', 'Electricity, Gas, Steam, and Air conditioning Supply', 'Schooling', 'Water Supply: Sewerage, Waste Management & Remediation activities', 'Remediation']"
                                                                label="" prepend-inner-icon="mdi-clipboard-account"
                                                                v-model="usrelevel" required></v-select>
                                                            <v-text-field label="Other, specify"
                                                                style="margin-top: -10px"></v-text-field>

                                                        </v-col>


                                                        <v-col cols="12" sm="12" md="10" class="mt-n6">

                                                            <p class="font-weight-bold">What is the status/nature of
                                                                employment? </p>
                                                            <v-radio-group class="mt-n4" row>
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
                                                                v-model="usrelevel" required></v-select>

                                                        </v-col>


                                                        <v-col cols="10" sm="10" md="10" class="mt-n5">
                                                            <p class="font-weight-bold">What was the total number of hours
                                                                worked during the past week?</p>
                                                            <v-select
                                                                :items="['1 Hour', '2 Hours', '3 Hours', '4 Hours', '5 Hours', '6 Hours', '7 Hours', '8 Hours', '9 Hours', '10 Hours', '11 Hours', '12 Hours']"
                                                                label="Select No. Of Hours"
                                                                prepend-inner-icon="mdi-clipboard-account"
                                                                required></v-select>

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
                                            <v-radio-group row>
                                                <v-radio value="yes" @click="was_this_your_first_time_to_look_for_work = true"
                                                    label="Yes"></v-radio>
                                                <v-radio value="no" @click="why_did_you_not_look_for_work = true"
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
                                            <v-text-field outlined dense label="Give estimate value Php " required>
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

                                                            <v-select
                                                                :items="['Tired/believe no work available ', 'Awaiting results of previous job application', 'Temporary illness/disability', 'Bad weather', 'Waiting for hire/ job recall', 'Too young/ old or retired/ permanent disability', 'Household/ family duties', 'Schooling',]"
                                                                label="Select Option" prepend-inner-icon="mdi-account-star"
                                                                v-model="dfdfdf" required></v-select>
                                                            <v-text-field label="Other, specify" required
                                                                prepend-inner-icon="mdi-account-plus">
                                                            </v-text-field>

                                                        </v-col>


                                                        <v-col cols="10" sm="12" md="10" class="mt-n6">
                                                            <p class="font-weight-bold">(44)When was the last time you
                                                                looked for work?</p>
                                                            <v-select
                                                                :items="['Within this week ', 'Within last week', 'Temporary illness/disability', 'Bad weather', 'Waiting for hire/ job recall', 'Too young/ old or retired/ permanent disability', 'Household/ family duties', 'Schooling',]"
                                                                label="Select Option" prepend-inner-icon="mdi-account-off"
                                                                v-model="dddd" required></v-select>

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

                                                            <v-radio-group row>
                                                                <v-radio value="yes" label="Yes"></v-radio>
                                                                <v-radio value="no" label="No"></v-radio>

                                                            </v-radio-group>
                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="10" class="mt-n4">
                                                            <p class="font-weight-bold">What you have been doing to
                                                                find a work?</p>

                                                            <v-select
                                                                :items="['Registered in public employment agency', 'Registered in private employment agency', 'Approached employer directly', 'Approached relatives or friends', 'Placed or answered advertisements ', 'Searched and applied Online']"
                                                                prepend-inner-icon="mdi-clipboard-account"
                                                                label="Select Option" v-model="usrelevel"
                                                                required></v-select>


                                                        </v-col>


                                                        <v-col cols="10" sm="12" md="10" class="mt-n5">
                                                            <p class="font-weight-bold">How many weeks have you been
                                                                looking for work?</p>
                                                            <v-text-field label="Write # of weeks" required
                                                                prepend-inner-icon="mdi-calendar">
                                                            </v-text-field>

                                                        </v-col>

                                                        <v-col cols="10" md="10" sm="12" class="mt-n5">
                                                            <p class="font-weight-bold">Had opportunity for work
                                                                existed last week or within two weeks, would you have been
                                                                available? </p>
                                                            <v-radio-group row>

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

                                                            <v-radio-group row>
                                                                <v-radio value="yes" label="Yes"></v-radio>
                                                                <v-radio value="no" label="No"></v-radio>
                                                            </v-radio-group>


                                                        </v-col>


                                                        <v-col cols="10" sm="12" md="12" style="margin-top: -25px;">
                                                            <p class="font-weight-bold text-left">Did you vote in the last
                                                                regular Election?</p>
                                                        </v-col>



                                                        <v-col cols="10" sm="12" md="12" style="margin-top: -50px;">

                                                            <v-radio-group row>
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
                                                    @click="what_is_your_philhealth_membership = true, are_your_depende_of_philhealth_member = false"
                                                    label="Yes"></v-radio>
                                                <v-radio value="no"
                                                    @click="are_your_depende_of_philhealth_member = true, what_is_your_philhealth_membership = false"
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

                                                            <v-radio-group row>
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
                                                <v-radio value="no" @click="do_you_have_solo_parent_id = false"
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

                                                            <v-radio-group row>
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
                                                <v-radio value="no" label="No"></v-radio>

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
                                                                <v-checkbox label="Mental/Intellectual"></v-checkbox>
                                                                <v-checkbox label="Hearing Disability"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Psychological Disability"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Visual Diability"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Speech Impairement"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Disability due to chronic illness"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Orthopaedic (Musculoskeletal) Disability"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Learning Disability"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                                <v-text-field
                                                                    label="Multiple Disability, Specify"></v-text-field>
                                                            </v-checkbox-group>


                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="12" class="mt-n4">

                                                            <p class="font-weight-bold">Do you have a PWD ID?</p>
                                                            <v-radio-group row>
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
                                                <v-radio value="no" label="No"></v-radio>

                                            </v-radio-group>
                                        </v-col>

                                        <v-col cols="12" sm="12" md="2" class="mt-n2 mt-md-1">

                                            <p class="font-weight-bold">During the past 12 months, did you avail any
                                                medical treatment or medication for any treatment? </p>
                                            <v-radio-group row class="mt-n2">
                                                <v-radio value="yes"
                                                    @click="where_did_you_avail_medical_treatment_62_A = true, do_you_have_illness_or_any_health_related_62_B = false"
                                                    label="Yes"></v-radio>
                                                <v-radio value="no"
                                                    @click="do_you_have_illness_or_any_health_related_62_B = true"
                                                    label="No"></v-radio>

                                            </v-radio-group>
                                        </v-col>


                                        <v-col cols="12" sm="12" md="2"
                                            v-show="do_you_have_illness_or_any_health_related_62_B">

                                            <p class="font-weight-bold">Do you have illness or any health-related
                                                issues of this time (upon survey time) </p>
                                            <v-radio-group row>
                                                <v-radio value="yes" @click="what_kind_of_illness_or_health_realted_issues_63 = true



                                                " label="Yes"></v-radio>
                                                <v-radio value="no"
                                                    @click="what_kind_of_illness_or_health_realted_issues_63 = false"
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


                                                <v-radio @click="which_type_of_health_facility_did_you_visit = false,
                                                    what_health_services_did_you_receievein_in_the_goverment_69 = false,
                                                    during_delivery_where_did_you_give_birth_70 = false" value="no" label="No"></v-radio>
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

                                            <p class="font-weight-bold">If married or sexually active woman, have
                                                you ever used contraceptive methods? </p>
                                            <v-radio-group row>
                                                <v-radio value="yes" @click="what_methods_have_you_used_73_2 = true"
                                                    label="Yes"></v-radio>
                                                <v-radio value="no" @click="why_did_you_not_use_contraceptive_73_3 = true"
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
                                                <v-radio value="no" label="No"></v-radio>

                                            </v-radio-group>
                                        </v-col>


                                        <v-col cols="12" sm="12" md="2">
                                            <h4 class="ml-n1">ACCESS TO PROGRAMS AND SERVICES</h4>
                                            <p class="mt-1 font-weight-bold" >During the past 12 months, did you receive or a
                                                recipient of any programs and services? </p>
                                            <v-radio-group row class="mt-n3">
                                                <v-radio value="yes" @click="what_type_of_program_80_81 = true"
                                                    label="Yes"></v-radio>
                                                <v-radio value="no" @click="what_type_of_program_80_81 = false"
                                                    label="No"></v-radio>

                                            </v-radio-group>

                                        </v-col>


                                        <v-col cols="12" sm="12" md="2">
                                            <h4 >DISASTER PREPAREDNESS</h4>
                                            <p class="mt-1 font-weight-bold">Do you have a disaster preparedness kit?</p>
                                            <v-radio-group row class="mt-n3">
                                                <v-radio value="yes"
                                                    @click="do_you_have_following_preparedness_kit_83 = true, did_you_attend_disaster_preparedness_84 = false"
                                                    label="Yes"></v-radio>
                                                <v-radio value="no"
                                                    @change="do_you_have_following_preparedness_kit_83 = false, did_you_attend_disaster_preparedness_84 = true"
                                                    label="No"></v-radio>

                                            </v-radio-group>

                                        </v-col>

                                        <v-col cols="12" sm="12" md="2" v-show="did_you_attend_disaster_preparedness_84">
                                            <p class="font-weight-bold">(84)Did you attend disaster preparedness training
                                                and drills?</p>
                                            <v-radio-group row>
                                                <v-radio value="yes" @click="disaster_related_training_seminars_84_1 = true"
                                                    label="Yes"></v-radio>
                                                <v-radio value="no" @click="fire_evacuation_drill_84_3 = true"
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

                                                            <v-radio-group>

                                                                <v-radio value="Globe and subsidiarie"
                                                                    label="Globe and subsidiaries"></v-radio>
                                                                <v-radio value="Smart and subsidiaries"
                                                                    label="Smart and subsidiaries"></v-radio>
                                                                <v-radio value="Both Globe and Smart"
                                                                    label="Both Globe and Smart"></v-radio>
                                                                <v-radio value="DITO" label="DITO"></v-radio>
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
                                                                <v-radio-group row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="5"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n5">
                                                                <v-select
                                                                    :items="['Within This Month', 'Within the past six months', 'Within this year', 'Within the past two years', 'Within the past three years', 'Don’t know/remember']"
                                                                    label="When was The Training"
                                                                    prepend-inner-icon="mdi-calendar" v-model="Barangay"
                                                                    required solo elevation="5" color="green"></v-select>
                                                            </v-col>
                                                        </v-row>


                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="4" class="mt-n14">
                                                                <p class="mt-6 ml-4 ">Tsunami Evacuation Drill</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n14">
                                                                <v-radio-group row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="5"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-select
                                                                    :items="['Within This Month', 'Within the past six months', 'Within this year', 'Within the past two years', 'Within the past three years', 'Don’t know/remember']"
                                                                    label="When was The Training"
                                                                    prepend-inner-icon="mdi-calendar" v-model="Barangay"
                                                                    required solo elevation="5" color="green"></v-select>
                                                            </v-col>
                                                        </v-row>





                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="4" class="mt-n14">
                                                                <p class="mt-6 ml-4 ">Lockdown Drill</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n14">
                                                                <v-radio-group row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="5"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-select
                                                                    :items="['Within This Month', 'Within the past six months', 'Within this year', 'Within the past two years', 'Within the past three years', 'Don’t know/remember']"
                                                                    label="When was The Training"
                                                                    prepend-inner-icon="mdi-calendar" v-model="Barangay"
                                                                    required solo elevation="5" color="green"></v-select>
                                                            </v-col>
                                                        </v-row>



                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="4" class="mt-n14">
                                                                <p class="mt-6 ml-4 ">Bomb Drill</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n14">
                                                                <v-radio-group row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="5"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-select
                                                                    :items="['Within This Month', 'Within the past six months', 'Within this year', 'Within the past two years', 'Within the past three years', 'Don’t know/remember']"
                                                                    label="When was The Training"
                                                                    prepend-inner-icon="mdi-calendar" v-model="Barangay"
                                                                    required solo elevation="5" color="green"></v-select>
                                                            </v-col>
                                                        </v-row>

                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="4" class="mt-n14">
                                                                <p class="mt-6 ml-4 ">Earthquake Evacuation Drill</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n14">
                                                                <v-radio-group row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="5"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-select
                                                                    :items="['Within This Month', 'Within the past six months', 'Within this year', 'Within the past two years', 'Within the past three years', 'Don’t know/remember']"
                                                                    label="When was The Training"
                                                                    prepend-inner-icon="mdi-calendar" v-model="Barangay"
                                                                    required solo elevation="5" color="green"></v-select>
                                                            </v-col>
                                                        </v-row>


                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="4"
                                                                class="ml-3 mt-n6 ml-md-3 mt-md-n8">
                                                                <v-text-field elevation="5" color="green" dense
                                                                    label="Others Specify"></v-text-field>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-1 mt-n12">
                                                                <v-radio-group row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="5"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-select
                                                                    :items="['Within This Month', 'Within the past six months', 'Within this year', 'Within the past two years', 'Within the past three years', 'Don’t know/remember']"
                                                                    label="When was The Training"
                                                                    prepend-inner-icon="mdi-calendar" v-model="Barangay"
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
                                                                <v-radio-group row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="5"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n5">
                                                                <v-select
                                                                    :items="['Within This Month', 'Within the past six months', 'Within this year', 'Within the past two years', 'Within the past three years', 'Don’t know/remember']"
                                                                    label="When was The Training"
                                                                    prepend-inner-icon="mdi-calendar" v-model="Barangay"
                                                                    required solo elevation="5" color="green"></v-select>
                                                            </v-col>
                                                        </v-row>

                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="4" class="mt-n14">
                                                                <p class="mt-6 ml-4 ">Evacuation Management Training</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n14">
                                                                <v-radio-group row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="5"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-select
                                                                    :items="['Within This Month', 'Within the past six months', 'Within this year', 'Within the past two years', 'Within the past three years', 'Don’t know/remember']"
                                                                    label="When was The Training"
                                                                    prepend-inner-icon="mdi-calendar" v-model="Barangay"
                                                                    required solo elevation="5" color="green"></v-select>
                                                            </v-col>
                                                        </v-row>





                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="4" class="mt-n14">
                                                                <p class="mt-6 ml-4 ">Basic Life Support Cardio-Pulmonary
                                                                    Resuscitation</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n14">
                                                                <v-radio-group row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="5"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-select
                                                                    :items="['Within This Month', 'Within the past six months', 'Within this year', 'Within the past two years', 'Within the past three years', 'Don’t know/remember']"
                                                                    label="When was The Training"
                                                                    prepend-inner-icon="mdi-calendar" v-model="Barangay"
                                                                    required solo elevation="5" color="green"></v-select>
                                                            </v-col>
                                                        </v-row>



                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="4" class="mt-n14">
                                                                <p class="mt-6 ml-4 ">Community-based Disaster Management
                                                                    Training</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n14">
                                                                <v-radio-group row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="5"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-select
                                                                    :items="['Within This Month', 'Within the past six months', 'Within this year', 'Within the past two years', 'Within the past three years', 'Don’t know/remember']"
                                                                    label="When was The Training"
                                                                    prepend-inner-icon="mdi-calendar" v-model="Barangay"
                                                                    required solo elevation="5" color="green"></v-select>
                                                            </v-col>
                                                        </v-row>


                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="4" class="mt-n14">
                                                                <p class="mt-6 ml-4 ">Camp Management Training</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n14">
                                                                <v-radio-group row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="5"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-select
                                                                    :items="['Within This Month', 'Within the past six months', 'Within this year', 'Within the past two years', 'Within the past three years', 'Don’t know/remember']"
                                                                    label="When was The Training"
                                                                    prepend-inner-icon="mdi-calendar" v-model="Barangay"
                                                                    required solo elevation="5" color="green"></v-select>
                                                            </v-col>
                                                        </v-row>

                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="4" class="mt-n14">
                                                                <p class="mt-6 ml-4 ">First Aid Training</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n14">
                                                                <v-radio-group row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="5"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-select
                                                                    :items="['Within This Month', 'Within the past six months', 'Within this year', 'Within the past two years', 'Within the past three years', 'Don’t know/remember']"
                                                                    label="When was The Training"
                                                                    prepend-inner-icon="mdi-calendar" v-model="Barangay"
                                                                    required solo elevation="5" color="green"></v-select>
                                                            </v-col>
                                                        </v-row>




                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="4"
                                                                class="ml-3 mt-n6 ml-md-3 mt-md-n8">
                                                                <v-text-field elevation="5" color="green" dense
                                                                    label="Others Specify"></v-text-field>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-1 mt-n12">
                                                                <v-radio-group row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="5"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-select
                                                                    :items="['Within This Month', 'Within the past six months', 'Within this year', 'Within the past two years', 'Within the past three years', 'Don’t know/remember']"
                                                                    label="When was The Training"
                                                                    prepend-inner-icon="mdi-calendar" v-model="Barangay"
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
                                                                <v-radio-group row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="11" sm="12" md="4"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-text-field outlined elevation="5" color="green" solo
                                                                    dense label="How many Days will it last"></v-text-field>
                                                            </v-col>

                                                        </v-row>

                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="5" class="mt-n14">
                                                                <p class="mt-6 ml-4 ">CANDLE</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n14">
                                                                <v-radio-group row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="11" sm="12" md="4"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-text-field outlined elevation="5" color="green" solo
                                                                    dense label="How many Days will it last"></v-text-field>
                                                            </v-col>

                                                        </v-row>

                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="5" class="mt-n14">
                                                                <p class="mt-6 ml-4 ">WHISTLE</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n14">
                                                                <v-radio-group row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="11" sm="12" md="4"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-text-field outlined elevation="5" color="green" solo
                                                                    dense label="How many Days will it last"></v-text-field>
                                                            </v-col>

                                                        </v-row>

                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="5" class="mt-n14">
                                                                <p class="mt-6 ml-4 ">CLOTHES</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n14">
                                                                <v-radio-group row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="11" sm="12" md="4"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-text-field outlined elevation="5" color="green" solo
                                                                    dense label="How many Days will it last"></v-text-field>
                                                            </v-col>

                                                        </v-row>


                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="5" class="mt-n14">
                                                                <p class="mt-6 ml-4 ">BLANKET</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n14">
                                                                <v-radio-group row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="11" sm="12" md="4"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-text-field outlined elevation="5" color="green" solo
                                                                    dense label="How many Days will it last"></v-text-field>
                                                            </v-col>

                                                        </v-row>





                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="5" class="mt-n15">
                                                                <p class="mt-6 ml-4 ">Flashlight/ Emergency light</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n15">
                                                                <v-radio-group row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="11" sm="12" md="4"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-text-field outlined elevation="5" color="green" solo
                                                                    dense label="How many Days will it last"></v-text-field>
                                                            </v-col>



                                                        </v-row>


                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="5" class="mt-n15">
                                                                <p class="mt-6 ml-4 ">Matches/Lightert</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n15">
                                                                <v-radio-group row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="11" sm="12" md="4"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-text-field outlined elevation="5" color="green" solo
                                                                    dense label="How many Days will it last"></v-text-field>
                                                            </v-col>


                                                        </v-row>

                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="5" class="mt-n15">
                                                                <p class="mt-6 ml-4 ">Food (canned goods, biscuits, bread)
                                                                </p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n15">
                                                                <v-radio-group row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="11" sm="12" md="4"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-text-field outlined elevation="5" color="green" solo
                                                                    dense label="How many Days will it last"></v-text-field>
                                                            </v-col>


                                                        </v-row>

                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="5" class="mt-n15">
                                                                <p class="mt-6 ml-4 ">Radio/ Transistor (battery-operated)
                                                                </p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n15">
                                                                <v-radio-group row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="11" sm="12" md="4"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-text-field outlined elevation="5" color="green" solo
                                                                    dense label="How many Days will it last"></v-text-field>
                                                            </v-col>


                                                        </v-row>

                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="5" class="mt-n15">
                                                                <p class="mt-6 ml-4 ">Battery (cellphone, flashlight, radio,
                                                                    etc)</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n15">
                                                                <v-radio-group row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="11" sm="12" md="4"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-text-field outlined elevation="5" color="green" solo
                                                                    dense label="How many Days will it last"></v-text-field>
                                                            </v-col>


                                                        </v-row>


                                                        <v-row>
                                                            <v-col cols="10" sm="12" md="5" class="mt-n15">
                                                                <p class="mt-6 ml-4 ">Important documents (land title, valid
                                                                    ID, birth certificate, etc)</p>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3" class="ml-4 mt-n15">
                                                                <v-radio-group row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>



                                                        </v-row>



                                                        <v-row>
                                                            <v-col cols="11" sm="12" md="5"
                                                                class="ml-3 mt-n6 ml-md-4 mt-md-n8">
                                                                <v-text-field elevation="5" color="green" dense
                                                                    label="Others Specify"></v-text-field>
                                                            </v-col>

                                                            <v-col cols="10" sm="12" md="3"
                                                                class="ml-4 mt-n13 ml-md-1 mt-md-n13">
                                                                <v-radio-group row>
                                                                    <v-radio value="yes" label="Yes"></v-radio>
                                                                    <v-radio value="no" label="No"></v-radio>
                                                                </v-radio-group>
                                                            </v-col>

                                                            <v-col cols="11" sm="12" md="4"
                                                                class="ml-3 mt-n6 ml-md-n10 mt-md-n11">
                                                                <v-text-field outlined elevation="5" color="green" solo
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
                                                                <v-checkbox
                                                                    label="Sustainable Livelihood Program"></v-checkbox>
                                                                <v-checkbox label="Food for work"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Cash for work"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="PantawidPamilyang Pilipino Program (4Ps)"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox
                                                                    label="Agrarian Reform Community Development Program"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox
                                                                    label="Training for Work Scholarship Program (TWSP)"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox
                                                                    label="Community Based Employment Program (CBEB)"
                                                                    style="margin-top: -10px"></v-checkbox>


                                                                <!--   <v-text-field label="Others/Specify"></v-text-field> -->
                                                            </v-checkbox-group>

                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="6" class="mt-n7">

                                                            <v-checkbox-group>
                                                                <v-checkbox
                                                                    label="Other Health Insurance (Maxicare, Medicare, etc.)"></v-checkbox>
                                                                <v-checkbox label="Health Care Assistance"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Supplemental Feeding"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Skills and Livelihood Training Program"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Credit Assistance Program"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Housing Program"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="SulongDunong Program"
                                                                    style="margin-top: -10px"></v-checkbox>


                                                                <!--   <v-text-field label="Others/Specify"></v-text-field> -->
                                                            </v-checkbox-group>

                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="6" class="mt-n7">

                                                            <v-checkbox-group>
                                                                <v-checkbox label="DOST Scholarship Program"></v-checkbox>
                                                                <v-checkbox label="CHED Scholarship Program"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox
                                                                    label="Special Program for the Employment of Students (SPES)"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Animal Dispersal Program"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                            </v-checkbox-group>

                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="6" class="mt-n2">
                                                            <v-checkbox-group>
                                                                <v-checkbox label="Crisis Intervention program"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Pagkalingasa Bayan Program"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Health Indigency Program"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                                <v-text-field label="Others/Specify"></v-text-field>

                                                            </v-checkbox-group>
                                                        </v-col>






                                                        <v-col cols="10" sm="12" md="7" class="mt-n6">

                                                            <p class="font-weight-bold">Who was/were the implementer/s
                                                                of the program/s, project/s or service/s?</p>

                                                            <v-checkbox-group>
                                                                <v-checkbox
                                                                    label="SNational Government (DSWD, DA, DOST, DTI, TESDA, DepEd, CHED, DAR, DILG, DOLE, etc)"></v-checkbox>
                                                                <v-checkbox label="Provincial Government"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Municipal Government"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                                <v-checkbox label="Barangay LGU"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Congressional/District"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Private Organizations/NGOs"
                                                                    style="margin-top: -10px"></v-checkbox>


                                                                <v-text-field label="Others/Specify"></v-text-field>
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
                                                                <v-checkbox label="Theft"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Robbery"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Rape and other type of sexual abuse"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Physical Injury"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Car napping"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                                <v-checkbox label="Cattle rustling"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="All type of physical abuse"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="All type of Psychological Abuse"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Economic Abuse"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Emotional Abuse"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                                <v-text-field label="Others/Specify"></v-text-field>

                                                            </v-checkbox-group>
                                                        </v-col>




                                                        <v-col cols="10" sm="12" md="12" class="mt-n6">
                                                            <p class="font-weight-bold">Where did the crime or violence
                                                                happen? </p>
                                                            <v-select
                                                                :items="['Within the house/household', 'Within the relative’s/ neighbor’s household', 'Within the barangay', 'Outside the barangay but within the municipality/city', 'Outside the municipality', 'Outside the province']"
                                                                label="Location of Crime/Violence"
                                                                prepend-inner-icon="mdi-map-marker" v-model="crime_violence"
                                                                required></v-select>
                                                        </v-col>


                                                        <v-col cols="10" sm="12" md="12" class="mt-n6">
                                                            <p class="font-weight-bold">Who was/ were the perpetrator/s
                                                                of the crime/ violence?</p>
                                                            <v-select
                                                                :items="['Member of the household ', 'Not member of the household but know to the household', 'Do not know']"
                                                                label="Location of Crime/Violence"
                                                                prepend-inner-icon="mdi-map-marker" v-model="crime_violence"
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
                                                                <v-checkbox
                                                                    label="Hormonal (pills or Depo Provera Indection)"></v-checkbox>
                                                                <v-checkbox label="Barrier Method"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Long – acting reversible (IUD)"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox
                                                                    label="Emergency Method (emergency contraceptive pill or copper IUD)"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox
                                                                    label="Fertility Awareness (rhythm/natural method)"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Permanent Method (tubal ligation)"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                                <v-text-field label="Others/Specify"></v-text-field>
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
                                                                    why did married or sexually active woman did not ever
                                                                    use contraceptive methods?<strong> </strong>

                                                                </v-alert>
                                                            </div>

                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="12" class="mt-n7">
                                                            <v-checkbox-group>

                                                                <v-checkbox label="Culture/ Tradition"></v-checkbox>
                                                                <v-checkbox
                                                                    label="No contraceptive method available in nearest health facility"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Cannot afford to buy"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Health problem"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-text-field label="Other Address, Specify">

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
                                                            <p class="font-weight-bold">(67) What was the primary reason of
                                                                not seeking maternal health service in any government
                                                                facility. </p>

                                                            <v-select
                                                                :items="['Service not necessary', 'Long waiting time', 'Doctors/ health personnel are always not available ', 'Medicines are always not available ']"
                                                                label="Reasons for not seeking health services from government facilities"
                                                                prepend-inner-icon="mdi-account-convert" v-model="Barangay"
                                                                required></v-select>

                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="12" class="mt-n7"
                                                            v-show="how_many_times_did_you_visited_the_government_health_68">
                                                            <p class="font-weight-bold">(68) How many times did you visited
                                                                the government health facility during your pregnancy? </p>

                                                            <v-select class="mt-n5"
                                                                :items="['1 to 3', 'More than 3 visits but not as required number of visits', 'Complete prenatal & postnatal care visits as advised the attending doctor']"
                                                                label="No Of Visits"
                                                                prepend-inner-icon="mdi-account-convert" v-model="Barangay"
                                                                required></v-select>
                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="12" class="mt-n6">
                                                            <p class="font-weight-bold">(69) What health services did you
                                                                receive when you visited the government health facility
                                                                during pregnancy? </p>

                                                            <v-checkbox-group class="mt-n7">
                                                                <v-checkbox
                                                                    label="Physical Exam (weight, blood, pressure, heart rate)"></v-checkbox>
                                                                <v-checkbox label="Gynecological Exam"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Ultrasound"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="HIV/STI/STD Testing"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Nutritious Supplement"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                                <v-checkbox label="Tetanus Vaccinet"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                            </v-checkbox-group>


                                                        </v-col>

                                                        <v-col cols="10" sm="12" md="12" class="mt-n5">
                                                            <p class="font-weight-bold">(70) During delivery, where did you
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

                                                            <p class="font-weight-bold">(71) Was the public health midwife
                                                                or any skilled birth attendant attended the birth delivery?
                                                            </p>
                                                            <v-radio-group row class="mt-n3">
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
                                                                v-model="philhealth_membership" required></v-select>
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
                                                            <v-text-field label="Write"></v-text-field>
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
                                                                <v-checkbox label="Cardiovascular Diseases"></v-checkbox>
                                                                <v-checkbox label="Obesity & Type 2 Diseases"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Cancer"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Hypertension"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox
                                                                    label="Disease associated with smoking & alcohol"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Infectious Diseases"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Respiratory Diseases"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Mental Health Problem/illness"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-text-field label="Others" required>
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
                                                <v-checkbox label="Provincial/Municipal DRRMO"></v-checkbox>
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
                                                <v-radio value="no" @click="what_mobile_phone_services_87 = false"
                                                    label="No"></v-radio>
                                            </v-radio-group>
                                        </v-col>


                                        <v-col cols="12" sm="12" md="2" class="mt-n2 mt-md-4">
                                            <p class="font-weight-bold">Do you have access to internet?</p>

                                            <v-radio-group row class="mt-n2">

                                                <v-radio value="yes" @click="what_is_your_means_intern_connection_89 = true"
                                                    label="Yes"></v-radio>
                                                <v-radio value="no" @change="what_is_your_means_intern_connection_89 = false"
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
                                                    @click="where_would_you_like_volunteer_93 = true, during_what_hours_are_you_available_volunteer = true"
                                                    label="Yes"></v-radio>
                                                <v-radio value="no"
                                                    @click="state_reason_92 = true, during_what_hours_are_you_available_volunteer = false"
                                                    label="No"></v-radio>
                                            </v-radio-group>
                                        </v-col>

                                        <v-col cols="12" sm="12" md="3" class="mt-n1 mt-md-4">
                                            <p class="font-weight-bold">Are you a Sinag Member</p>

                                            <v-radio-group row class="mt-n2">

                                                <v-radio value="yes" label="Yes"></v-radio>
                                                <v-radio value="no" label="No"></v-radio>

                                            </v-radio-group>

                                        </v-col>

                                        <v-col cols="12" md="3" sm="12"
                                            v-show="during_what_hours_are_you_available_volunteer">
                                            <p class="font-weight-bold">During what hours are you available for volunteer
                                                assignment?</p>
                                            <v-select
                                            outlined dense
                                                :items="['Weekday morning', 'Weekday afternoon', 'Weekday evening', 'Weekend morning', 'Weekend afternoon', 'Weekend evening', 'Any day will do', 'Any time will do']"
                                                label="Select Type" prepend-inner-icon="mdi-calendar-multiple-check"
                                                required></v-select>

                                        </v-col>


                                        <v-col cols="12" md="3" sm="12"
                                            v-show="during_what_hours_are_you_available_volunteer">
                                            <p class="font-weight-bold">Reason/s for Volunteering. See codes below</p>
                                            <v-select class="mt-9"
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
                                                                                    <v-checkbox label="Mason"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox label="Painter"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox label="Carpentry"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox label="Electrical"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox label="Plumbing"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-text-field style="margin-top: -10px"
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
                                                                                    <v-checkbox label="Tree Planting"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox label="Mangrove Planting"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox
                                                                                        label="Clean-up drive - River"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox
                                                                                        label="Clean-up drive - Coastal"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox
                                                                                        label="Clean-up drive - Street"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-text-field style="margin-top: -10px"
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
                                                                                    <v-checkbox
                                                                                        label="Relief Goods Repacking"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox
                                                                                        label="Relief Goods Distribution"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox
                                                                                        label="Relief Goods Organize"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox label="Conduct Survey"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox
                                                                                        label="Serves as additional admin.support staff"
                                                                                        style="margin-top: -10px"></v-checkbox>

                                                                                    <v-text-field style="margin-top: -10px"
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
                                                                                    <v-checkbox label="KusinangKalinga"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox label="ParaisongPambata"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox label="Gulayan"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-text-field label="Others, specify"
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
                                                                                        label="Coach of Assist the coach"></v-checkbox>
                                                                                    <v-checkbox
                                                                                        label="Maintain/ safekeep sports equipment"
                                                                                        style="margin-top: -10px"></v-checkbox>



                                                                                    <v-text-field style="margin-top: -10px"
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
                                                                                    <v-checkbox style="margin-top: -10px"
                                                                                        label="Hosting"></v-checkbox>
                                                                                    <v-checkbox label="Usher/ Usherettes"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox
                                                                                        label="Secretary/ Documentation"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox
                                                                                        label="Social Media Management"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox
                                                                                        label="Group Prep/Stage Decor"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox label="Food Distribution"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox label="Crowd Control"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-checkbox label="Restoration"
                                                                                        style="margin-top: -10px"></v-checkbox>
                                                                                    <v-text-field label="Others, specify"
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
                                                                <v-checkbox label="Not interested"></v-checkbox>
                                                                <v-checkbox label="Shy"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Don’t know where to volunteer"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="No time"
                                                                    style="margin-top: -10px"></v-checkbox>
                                                                <v-checkbox label="Busy"
                                                                    style="margin-top: -10px"></v-checkbox>

                                                                <v-text-field label="Others, specify"></v-text-field>

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
                                                                :items="['Cellular/ Mobile data', 'Wireless/ Wifi', 'Broadband Internet Access via cable, DSL, or fiber connection', 'Dial-up', 'Satellite']"
                                                                label="  Select" prepend-inner-icon="mdi-wifi"
                                                                v-model="Barangay" required></v-select>

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

           

            e1: 1,

            /*  Codes FOR 61 What kind of health Related */
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

            what_is_the_sector_of_your_business: false,
            leardership_information: false,
            show_if_yes_graduate_senior_highschool: false,
            did_you_vote_in_the_last_sk_elections: false,

            country_destination: false,

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


        };
    },


    watch: {
        menu(val) {
            val && setTimeout(() => (this.activePicker = "YEAR"));
        },
    },
    methods: {

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