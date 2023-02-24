<template>
        <v-app>
            <div>

                <v-card class="mb-6">
              <v-col cols="12" md="12" sm="12">
                <h4 class="green--text">
                  Technical / Vocational and Other Trainings
                </h4>
                <div v-for="(item, index) in form" :key="item">
                  <v-row>
                    <v-col cols="12" md="2">
                      <v-text-field
                        outlined
                        label="Training / Vocational Course"
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
                        label="Hours of Training"
                        type="number"
                        dense
                        color="success"
                        v-model="item.hours_training"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" md="2">
                      <v-text-field
                        outlined
                        label="Training Institition"
                        dense
                        color="success"
                        v-model="item.training_institution"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" md="2">
                      <v-text-field
                        outlined
                        label="Skills Acquired"
                        dense
                        color="success"
                        v-model="item.skills_acquired"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" md="2">
                      <v-text-field
                        outlined
                        label="Certificate Acquired"
                        dense
                        color="success"
                        v-model="item.certificate_acquired"
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
