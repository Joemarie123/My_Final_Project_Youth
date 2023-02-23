<template>
    <v-app id="inspire" :style="{background: $vuetify.theme.themes.dark.background}">
      <SK_NavBar />
      <v-container>
        <v-row>
          <v-col cols="12" sm="12">
          
            <v-row>
            
              <v-col cols="12" sm="4" md="4" >
                 <v-card class="btn-hover color-1 mx-2 rounded-xl mt-n7 draw-border" 
                 tile
                 elevation="16"> 
                  <v-row>
  
  
  
                    <v-col cols="12" 
                     sm="12" md="4"   >
                      <v-list-item three-line>
                        <v-list-item-content>
                          <div class="mb-4">
  
                            <v-btn fab icon  @click="$router.push({ name: 'SK_Filter_DashBoard' })">
                            <v-avatar size="60">
                                  <img src="/img1.png" alt="">
                          </v-avatar>
                        </v-btn>
  
                        
                          </div>
                          <v-list-item-title class="headline mb-1 white--text">
                          5,426
                          </v-list-item-title>
                          <v-list-item-subtitle class="white--text">Total Male</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                      
                    </v-col>
  
                    <v-col cols="12" 
                     sm="12" md="4"   >
                      <v-list-item three-line>
                        <v-list-item-content>
                          <div class="mb-4">
  
                            <v-btn fab icon  @click="$router.push({ name: 'SK_Filter_DashBoard' })">
                            <v-avatar size="60">
                                  <img src="/lgbt.png" alt="">
                          </v-avatar>
                        </v-btn>
  
                        
                          </div>
                          <v-list-item-title class="headline mb-1 white--text">
                          5,426
                          </v-list-item-title>
                          <v-list-item-subtitle class="white--text">Total LGBTQ+</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                      
                    </v-col>
  
  
  
  
    
                    <v-col cols="12" sm="12" md="4" >
                      <v-list-item three-line>
                        <v-list-item-content>
  
                          <div class="mb-4">
  
                            <v-btn fab icon  @click="$router.push({ name: 'SK_Filter_DashBoard' })">
                            <v-avatar size="60">
                                  <img src="/img3.png" alt="">
                          </v-avatar>
                          </v-btn>
  
                          </div>
    
                          <v-list-item-title class="headline mb-1 white--text">
                          5,426
                          </v-list-item-title>
                          <v-list-item-subtitle class="white--text">Total Female</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                      
                    </v-col>
    
                  </v-row>
                </v-card>
             
              </v-col>
              
              <v-col cols="12" sm="4"   >
                <v-card class="btn-hover color-1 mx-2 rounded-xl mt-n7 draw-border" 
                 tile
                 elevation="16"> 
                  <v-row>
  
  
                    <v-col cols="12" 
                     sm="12" md="4">
                      <v-list-item three-line>
                        <v-list-item-content>
                          <div class="mb-4">
  
                            <v-btn fab icon  @click="$router.push({ name: 'SK_Filter_DashBoard' })">
                            <v-avatar size="60">
                                  <img src="/img2.png" alt="">
                          </v-avatar>
                          </v-btn>
  
                          </div>
                          <v-list-item-title class="headline mb-1 white--text">
                          5,426
                          </v-list-item-title>
                          <v-list-item-subtitle class="white--text">Total Single</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>  
                      
                      
                    </v-col>
    
                        <v-col cols="12" 
                     sm="12" md="4">
                      <v-list-item three-line>
                        <v-list-item-content>
                          <div class="mb-4">
  
                            <v-btn fab icon  @click="$router.push({ name: 'SK_Filter_DashBoard' })">
                            <v-avatar size="60">
                                  <img src="/livin.png" alt="">
                          </v-avatar>
                          </v-btn>
  
                          </div>
                          <v-list-item-title class="headline mb-1 white--text">
                          5,426
                          </v-list-item-title>
                          <v-list-item-subtitle class="white--text">Total Liv-in</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>  
                      
                      
                    </v-col>
    
                    <v-col cols="12" sm="12" md="4" >
                      <v-list-item three-line>
                        <v-list-item-content>
    
    
                          <div class="mb-4">
  
                            <v-btn fab icon  @click="$router.push({ name: 'SK_Filter_DashBoard' })">
                            <v-avatar size="60">
                                  <img src="/married.png" alt="">
                          </v-avatar>
                        </v-btn>
  
                          </div>
    
                          <v-list-item-title class="headline mb-1 white--text">
                          5,426
                          </v-list-item-title>
                          <v-list-item-subtitle class="white--text">Total Married</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                      
                    </v-col>
    
                  </v-row>
                </v-card>
             
              </v-col>
              <v-col cols="12" sm="4">
                <v-card class="btn-hover color-1 mx-6 rounded-xl mt-n7 draw-border" 
                 tile
                 elevation="16"> 
                  <v-row>
                    <v-col cols="12" offset-md="1" offset-sm="1" offset-lg="1"
                     sm="12" md="5">
                      <v-list-item three-line>
                        <v-list-item-content>
                          <div class="mb-4">
  
                            <v-btn fab icon  @click="$router.push({ name: 'SK_Filter_DashBoard' })">
                            <v-avatar size="60">
                                  <img src="/pamulaan.png" alt="">
                          </v-avatar>
                          </v-btn>
  
                          </div>
                          <v-list-item-title class="headline mb-1 white--text">
                          5,426
                          </v-list-item-title>
                          <v-list-item-subtitle class="white--text">Total IP</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                      
                    </v-col>
    
                    <v-col cols="12" sm="12" md="5"  offset-md="1" offset-sm="1" offset-lg="0">
                      <v-list-item three-line>
                        <v-list-item-content>
    
    
                          <div class="mb-4">
  
                            <v-btn fab icon  @click="$router.push({ name: 'SK_Filter_DashBoard' })">
                            <v-avatar size="60">
                                  <img src="/img5.png" alt="">
                          </v-avatar>
                          </v-btn>
  
                          </div>
    
                          <v-list-item-title class="headline mb-1 white--text">
                          5,426
                          </v-list-item-title>
                          <v-list-item-subtitle class="white--text">Total Non-IP</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                      
                    </v-col>
    
                  </v-row>
                </v-card>
             
              </v-col>
  
              <v-col cols="12" sm="12" md="12" lg="8">
                <v-card class="btn-hover color-1 mx-2 mt-n4 rounded-xl draw-border" 
              tile
               >
               <h1>Total Youth Members</h1>
              <ChartComponent/>
            </v-card>
           </v-col>
  
    <v-col cols="12" sm="12" md="12" lg="4" >
    
      <v-card  class=" mx-2 mt-n3 mt-n8 draw-border" 
              tile height="0"
               >
                  <SK_DataTable_Purok/>    
        </v-card>          
              </v-col>
            </v-row>
          
          </v-col>
        </v-row>
      </v-container>
    </v-app>
    </template>
    
    <script>
      import SK_DataTable_Purok from '@/views/Brgy_Sk_Official_AR/SK_DataTable_Purok'
      import SK_NavBar from '@/views/Brgy_Sk_Official_AR/SK_NavBar'
      import ChartComponent from '@/components/ChartComponent'
    
  
      
    
      export default {
        name: 'Home',
     data () {
          return {
            width: 2,
          radius: 10,
          padding: 8,
          lineCap: 'round',
          value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
          fill: false,
          type: 'trend',
          autoLineWidth: false,
            orders: [
              {
                price: 'Apokon',
                amount: 4452,
              },
              {
                price: 'Libuganon',
                amount: 5145,
              },
               {
                price: 'Pagsabangan',
                amount: 5214,
              },
               {
                price: 'Mankilam',
                amount: 3214,
              },
               {
                price: 'Magugpo',
                amount: 4518,
              },
            ],
          }
        },
        components: {
            SK_NavBar,
          ChartComponent,
          SK_DataTable_Purok,
        },

      }
    </script>
    
    
    
    
    
    
    <style scoped>
    
    h1{
  text-align: center;
  font-size:large;
  color:white;
  }
    .draw-border {
      border-radius: 20px;
  
    }
  
  
  
    .cardVr{
      background: rgba(8, 117, 23, 0.219);
    
    background: linear-gradient(90deg, rgba(4, 95, 50, 0.185) 0%, rgb(165, 179, 168) 70%, rgb(152, 165, 161) 100%);
    } 
    
    
  /* .kinidaw{
    
    
      background: linear-gradient(45deg, rgba(#09AFE8,1) 0%, rgba(#29F499,1) 100%);
      box-shadow: 0 5px 20px rgba(#29F499,.3)
    } */
    
  
  .btn-hover {
     
      font-size: 16px;
      font-weight: 600;
     
      cursor: pointer;
      margin: 20px;
      text-align:center;
      border: none;
      background-size: 300% 100%;
      border-radius: 30px;
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
  
  /*  For Barrangay table */
  
    
  .brgy-hover {
     
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
  
  
  
  .brgy-hover:focus {
     outline: none;
  }
  
  .brgy-hover.color-1 {
    /*  background-image: linear-gradient(to right, #186f94, #0e7e48,  #0c8a4d,  #078045);
     box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.644); */
  }
  
  
    
    </style>
    