<template>
  <v-app>
      <div class="div">
         
      </div>
      <v-main>
          <v-card class="mt-4 ml-4 mr-4" outlined v-for="items in selected" :key="items.id">
              <v-card-title class="green darken-4 white--text"> JOB POSTING DETAILS</v-card-title>
              <v-row>
                  <v-col cols="12" md="12" lg="12">
                      <v-list-item three-line>
                          <v-list-item-content>
                              <div class="text-overline mb-4">
                                  {{ items.salary }} // {{ items.natureofwork }}
                              </div>
                              <v-list-item-title class="text-h5 mb-1">
                                  {{ items.position_title }}
                              </v-list-item-title>
                              <v-list-item-subtitle three-line>{{ items.job_description }}</v-list-item-subtitle>
                              <v-list-item-title class="text-h8 mb-1 mt-4">
                                  <b color="#1B5E20">Purpose of Vacancy:</b> {{ items.purposeofvacancy }}
                              </v-list-item-title>
                              <v-list-item-title class="text-h8 mb-1">
                                  <b>Classification of Vacancy:</b> {{ items.classificationofvacancy }}
                              </v-list-item-title>
                              <v-list-item-title class="text-h8 mb-2">
                                  <b>Place of Work:</b> {{ items.placeofwork }}
                              </v-list-item-title>
                              <v-divider></v-divider>
                              <h3 class="mt-2 green--text">PREFERENCES:</h3>
                              <v-row>
                                  <v-col cols="12" md="6" lg="6" sm="12">
                                      <v-list-item-title class="text-h8 mb-1 mt-2">
                                          <b>Educational Level:</b> {{ items.educational_level }}
                                      </v-list-item-title>
                                      <v-list-item-title class="text-h8 mb-1">
                                          <b>Course Requirement:</b> {{ items.course_requirement }}
                                      </v-list-item-title>
                                      <v-list-item-title class="text-h8 mb-1">
                                          <b>Sex Preference:</b> {{ items.sex_preference }}
                                      </v-list-item-title>
                                      <v-list-item-title class="text-h8 mb-1">
                                          <b>Work Experience:</b> {{ items.work_experience }}
                                      </v-list-item-title>
                                      <v-list-item-title class="text-h8 mb-1">
                                          <b>Required License:</b> {{ items.required_license }}
                                      </v-list-item-title>
                                      <v-list-item-title class="text-h8 mb-1">
                                          <b>Other Qualifications:</b> {{ items.other_qualification }}
                                      </v-list-item-title>
                                      <v-list-item-title class="text-h8 mb-1">
                                          <b>Employability Skills:</b> {{ items.employability_skills }}
                                      </v-list-item-title>
                                  </v-col>
                                  <v-col cols="12" md="6" lg="6">
                                      <v-list-item-title class="text-h8 mb-1">
                                          <b>Posting Date:</b> {{ }}
                                      </v-list-item-title>
                                      <v-list-item-title class="text-h8 mb-1">
                                          <b>Valid Until:</b> {{ items.valid_until }}
                                      </v-list-item-title>
                                  </v-col>
                              </v-row>

                          </v-list-item-content>
                      </v-list-item>
                  </v-col>
              </v-row>
          </v-card>
          <!-- <v-row>
              <v-col cols="12" md="12" lg="12" class="pa-6">
                  <applicant-card />
              </v-col>
          </v-row> -->
      </v-main>
  </v-app>
</template>
<script>
/* import { mapActions, mapGetters } from 'vuex'; */

export default {
  data: () => ({
      desserts: [
          {
              id: 1,
              position_title: "Data Programmer",
              placeofwork: "Tagum City",
              vacancy_count: "21",
              natureofwork: "Full-Time",
          
              switch1: true,
              purposeofvacancy: "Replacement",
              classificationofvacancy: "",
              job_description: "Nani Koreeeeee Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              salary: "PHP 45,000",
              valid_until: "2023-03-05",
              educational_level: "Elementary",
              course_requirement: "IT",
              pwd: "yes",
              pwd_1: "Hearing",
              sex_preference: "Female",
              requirements: "optional",
              work_experience: "None",
              required_license: "None",
              other_qualification: "None",
              employability_skills: "None",
              ofw: "yes",
          },
          {
              id: 2,
              position_title: "Data Controller",
              placeofwork: "Tagum City",
              vacancy_count: "21",
              natureofwork: "Full-Time",
            
              switch1: false,
              purposeofvacancy: "",
              classificationofvacancy: "",
              job_description: "Nani Koreeeeee",
              salary: "45",
              valid_until: "2023-03-05",
              educational_level: "Elementary",
              course_requirement: "IT",
              pwd: "yes",
              pwd_1: "Hearing",
              sex_preference: "Female",
              requirements: "optional",
              work_experience: "None",
              required_license: "None",
              other_qualification: "None",
              employability_skills: "None",
              ofw: "yes",
          },
          {
              id: 3,
              position_title: "Data Analyst",
              placeofwork: "Tagum City",
              vacancy_count: "21",
              natureofwork: "Full-Time",
            
              switch1: false,
              purposeofvacancy: "",
              classificationofvacancy: "",
              job_description: "Nani Koreeeeee",
              salary: "45",
              valid_until: "2023-03-05",
              educational_level: "Elementary",
              course_requirement: "IT",
              pwd: "yes",
              pwd_1: "Hearing",
              sex_preference: "Female",
              requirements: "optional",
              work_experience: "None",
              required_license: "None",
              other_qualification: "None",
              employability_skills: "None",
              ofw: "yes",
          },
          {
              position_title: "Data Analyst",
              placeofwork: "Tagum City",
              vacancy_count: "21",
              natureofwork: "Full-Time",
            
              switch1: false,
              purposeofvacancy: "",
              classificationofvacancy: "",
              job_description: "Nani Koreeeeee",
              salary: "45",
              valid_until: "2023-03-05",
              educational_level: "Elementary",
              course_requirement: "IT",
              pwd: "yes",
              pwd_1: "Hearing",
              sex_preference: "Female",
              requirements: "optional",
              work_experience: "None",
              required_license: "None",
              other_qualification: "None",
              employability_skills: "None",
              ofw: "yes",
          },
          {
              position_title: "Data Analyst",
              placeofwork: "Tagum City",
              vacancy_count: "21",
              natureofwork: "Full-Time",
            
              switch1: true,
              purposeofvacancy: "",
              classificationofvacancy: "",
              job_description: "Nani Koreeeeee",
              salary: "45",
              valid_until: "2023-03-05",
              educational_level: "Elementary",
              course_requirement: "IT",
              pwd: "yes",
              pwd_1: "Hearing",
              sex_preference: "Female",
              requirements: "optional",
              work_experience: "None",
              required_license: "None",
              other_qualification: "None",
              employability_skills: "None",
              ofw: "yes",
          },
          {
              position_title: "Data Analyst",
              placeofwork: "Tagum City",
              vacancy_count: "21",
              natureofwork: "Full-Time",
           
              switch1: false,
              purposeofvacancy: "",
              classificationofvacancy: "",
              job_description: "Nani Koreeeeee",
              salary: "45",
              valid_until: "2023-03-05",
              educational_level: "Elementary",
              course_requirement: "IT",
              pwd: "yes",
              pwd_1: "Hearing",
              sex_preference: "Female",
              requirements: "optional",
              work_experience: "None",
              required_license: "None",
              other_qualification: "None",
              employability_skills: "None",
              ofw: "yes",
          },
      ],
      selected: [],
  }),
  created() {
      this.selected.push(this.desserts.find(e => e.id == this.$route.params.id));

      // console.log("selected=>", this.selected);
      // console.log("selected=>", this.$route.params.id);
  }
  
}
</script>