<template>
        <v-app>
            <div>

                <v-card class="mb-6">
                  <h1 class="green--text text-center">
               Dynamic TextField in Vuejs
                </h1>
               

              <v-col cols="12" md="12" sm="12">
             
                <div v-for="(item, index) in form" :key="item">
                  <v-row justify="center">
                    <v-col cols="12" md="2">
                      <v-text-field
                        outlined
                        label="First Name"
                        dense
                        color="success"
                        v-model="item.training_course"
                        autofocus
                      >
                      </v-text-field>
                    </v-col>
                
                    <v-col cols="12" md="2">
                      <v-text-field
                        outlined
                        label="Last Name"
                        dense
                        color="success"
                        v-model="item.training_institution"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" md="2">
                      <v-text-field
                        outlined
                        label="Middle Name"
                        dense
                        color="success"
                        v-model="item.skills_acquired"
                      >
                      </v-text-field>
                    </v-col>
                   
                    <v-col cols="12" md="2">
                      <v-btn
                        color="error"
                        outlined
                        @click="VocationalTrainingRemoveRow(index)"
                      >
                        Remove
                      </v-btn>
                      <v-btn color="warning" @click="VocationalTrainingAddRow">
                        Add
                      </v-btn>
                    </v-col>
                  </v-row>
                </div>
                <!-- <v-btn padding-top="3px"  @click="saveItem" color="success">
                Save Item
              </v-btn> -->
              </v-col>
            </v-card>

            <v-btn id="v-btn-c" color="success" @click="e1 = 6">
              Continue
            </v-btn>
            <v-btn @click="e1 = 4" class="ma-2" outlined color="success">
              Back
            </v-btn>



            </div>
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
        training_course: "",
        hours_training: "",
        training_institution: "",
        skills_acquired: "",
        certificate_acquired: "",
      },
    ]);
    const VocationalTrainingAddRow = () => {
      form.push({
        training_course: "",
        hours_training: "",
        training_institution: "",
        skills_acquired: "",
        certificate_acquired: "",
      });
    };
    const VocationalTrainingRemoveRow = (index) => {
      if (form.length > 1) {
        form.splice(index, 1);
      }
    };
   
    return {
      reactive,
      form,
      VocationalTrainingAddRow,
      VocationalTrainingRemoveRow,
    
    };
  },

}





</script>
