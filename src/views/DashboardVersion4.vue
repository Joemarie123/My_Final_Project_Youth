<template>
  <v-app id="inspire" :style="{background: $vuetify.theme.themes.dark.background}">
    <Navbar/>
    <v-container>

      <v-row>
        
        <v-col cols="12" sm="12">
        
          <v-row>

            <v-col cols="12"  sm="4" md="4" >
               <v-card  class="class_sa_card_lapas class_sa_card_1 btn-hover color-1 mx-1 rounded-xl  draw-border " 
               :height="height123"
               tile
               elevation="16"> 
                <v-row>

                  <v-col cols="12"  xs="4"
                   sm="6" md="4">
                    <v-list-item three-line>
                      <v-list-item-content>
                        <div class="mb-4">

                          <v-btn  class="mx-n8" fab icon  :to="{ path: '/FilterDashBoard123', query: { name: 'MALE' } }">
                          <v-avatar  class="mx-n8" size="60" >
                                <img class="class_sa_avatar" src="/img1.png" alt="">
                        </v-avatar>
                      </v-btn>

                      
                        </div>
                        <h2 class="class_sa_text  mb-1 white--text">
                        5,426
                        </h2>
                        <v-list-item-subtitle class="class_sa_text_2 white--text">Male</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    
                  </v-col>

          

                  <v-col cols="12"  sm="6" md="4" >
                    <v-list-item three-line>
                      <v-list-item-content>

                        <div class="mb-4">

                          <v-btn class="mx-n8" fab icon  :to="{ path: '/FilterDashBoard123', query: { name: 'FEMALE' } }">
                          <v-avatar class="mx-n8" size="60">
                                <img class="class_sa_avatar" src="/img3.png" alt="">
                        </v-avatar>
                        </v-btn>

                        </div>
  
                        <h2 class="class_sa_text  mb-1 white--text">
                        5,426
                        </h2>
                        <v-list-item-subtitle class="class_sa_text_2 white--text">Female</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    
                  </v-col>

                  

                  <v-col cols="12" 
                   sm="12" md="4"   >
                    <v-list-item three-line>
                      <v-list-item-content>
                        <div class="mb-4">

                          <v-btn class="mx-n8" fab icon   :to="{ path: '/FilterDashBoard123', query: { name: 'LGBTQIA+' } }">
                          <v-avatar class="mx-n8" size="60">
                                <img class="class_sa_avatar" src="/lgbt.png" alt="">
                        </v-avatar>
                      </v-btn>

                      
                        </div>
                        
                        <h2 class="class_sa_text  mb-1 white--text">
                        5,426
                        </h2>
                        <v-list-item-subtitle class="class_sa_text_2 white--text">LGBTQ+</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    
                  </v-col>
  
                </v-row>
              </v-card>
           
            </v-col>
            
            <v-col cols="12" sm="4"  md="4" lg="4" >
              <v-card class=" class_sa_card_1 btn-hover color-1 mx-1 rounded-xl"  style="width: 500px;"
               tile
               elevation="16"> 
              <!--  <v-card class="btn-hover color-1 mt-1" style="width: 34%; height:16%; vertical-align: top;  margin-left: -10px; margin-right: -10px;position: absolute; ">  -->
                <v-row>

                  <v-col cols="12" 
                   sm="6" md="3">
                    <v-list-item three-line>
                      <v-list-item-content>
                        <div class="mb-4">

                           <v-btn class="mx-n8"  fab icon  :to="{ path: '/FilterDashBoard123', query: { name: 'SINGLE' } }">
                          <v-avatar class=" mx-n8"  size="60">
                                <img class="class_sa_avatar" src="/img2.png" alt="">
                        </v-avatar>
                        </v-btn>

                        </div>
                        <h2 class="class_sa_text  mb-1 white--text">
                        5,426
                        </h2>
                        <v-list-item-subtitle class="class_sa_text_2 white--text">Single</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>  
 
                  </v-col>
  
                      <v-col cols="12" 
                       sm="6" md="3">
                    <v-list-item three-line>
                      <v-list-item-content>
                        <div class="mb-4">

                          <v-btn class="mx-n8" fab icon  :to="{ path: '/FilterDashBoard123', query: { name: 'LIV-IN' } }">
                          <v-avatar class="mx-n8"  size="60">
                                <img class="class_sa_avatar" src="/livin.png" alt="">
                        </v-avatar>
                        </v-btn>

                        </div>
                        <h2 class="class_sa_text  mb-1 white--text">
                        5,426
                        </h2>
                        <v-list-item-subtitle class="class_sa_text_2 white--text">Live-in</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>  
                    
                    
                  </v-col>
  
        

                  <v-col cols="12" sm="6" md="3" >
                    <v-list-item three-line>
                      <v-list-item-content>
  
  
                        <div class="mb-4">

                          <v-btn  class="mx-n8" fab icon  :to="{ path: '/FilterDashBoard123', query: { name: 'MARRIED' } }">
                          <v-avatar class="mx-n8" size="60">
                                <img class="class_sa_avatar" src="/married.png" alt="">
                        </v-avatar>
                      </v-btn>

                        </div>
  
                        <h2 class="class_sa_text  mb-1 white--text">
                        5,426
                        </h2>
                        <v-list-item-subtitle class="class_sa_married  white--text">Married</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    
                  </v-col>

                  <v-col cols="12" sm="6" md="3" >
                    <v-list-item three-line>
                      <v-list-item-content>
  
  
                        <div class="mb-4">

                          <v-btn  class="mx-n8" fab icon  :to="{ path: '/FilterDashBoard123', query: { name: 'SOLO PARENT' } }">
                          <v-avatar  class="mx-n8" size="60">
                                <img class="class_sa_avatar" src="/soloparent.jpg" alt="">
                        </v-avatar>
                      </v-btn>

                        </div>
  
                        <h2 class="class_sa_text mb-1 white--text">
                        5,426
                        </h2>
                        <v-list-item-subtitle class="class_sa_text_2 white--text">Solo Parent</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item> 
                    
                  </v-col>
  
                </v-row>
              </v-card>
           
            </v-col>
            <v-col cols="12" sm="4" md="4" >
              <v-card  class="class_sa_card_lapas class_sa_card_1 btn-hover color-1 mx-1 rounded-xl  draw-border" 
               tile
               elevation="16"> 
                <v-row>
                  <v-col cols="12"  sm="6" md="4" >
                    <v-list-item three-line>
                      <v-list-item-content>
                        <div class="mb-4">

                          <v-btn class="mx-n8" fab icon  :to="{ path: '/FilterDashBoard123', query: { name: 'IP' } }">
                          <v-avatar class="mx-n8" size="60">
                                <img class="class_sa_avatar" src="/pamulaan.png" alt="">
                        </v-avatar>
                        </v-btn>

                        </div>
                        <h2 class="class_sa_text  mb-1 white--text">
                        5,426
                        </h2>
                        <v-list-item-subtitle class="class_sa_text_2 white--text">IP</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    
                  </v-col>
  
                  <v-col cols="12"  sm="6" md="4">
                    <v-list-item three-line>
                      <v-list-item-content>
                        <div class="mb-4">

                          <v-btn class="mx-n8" fab icon  :to="{ path: '/FilterDashBoard123', query: { name: 'Non-IP' } }">
                          <v-avatar class="mx-n8" size="60">
                                <img class="class_sa_avatar" src="/img6.png" alt="">
                        </v-avatar>
                        </v-btn>

                        </div>
                        <h2 class="class_sa_text  mb-1 white--text">
                        5,426
                        </h2>
                        <v-list-item-subtitle class="class_sa_text_2 white--text">Non-IP</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    
                  </v-col>
  
                  <v-col cols="12" sm="12" md="4" >
                    <v-list-item three-line>
                      <v-list-item-content>
  
  
                        <div class="mb-4">

                          <v-btn class="mx-n8" fab icon  :to="{ path: '/FilterDashBoard123', query: { name: 'PWD' } }">
                          <v-avatar class="mx-n8" size="60">
                                <img class="class_sa_avatar" src="/pwd.jpg" alt="">
                        </v-avatar>
                        </v-btn>

                        </div>
  
                        <h2 class="class_sa_text  mb-1 white--text">
                        5,426
                        </h2>
                        <v-list-item-subtitle class="class_sa_text_2 white--text">PWD</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    
                  </v-col>
  
                </v-row>
              </v-card>
           
            </v-col>

           
            

            <v-col cols="12" sm="12" md="6" lg="7">
              <v-card class="btn-hover color-1 mx-2 mt-n1 rounded-xl draw-border" 
            tile
             >
             <p class="class_sa_totalyouthmember mt font-weight-bold" style="color:white;" >Total Youth Members  - 50,000 As of {{ currMonth }} {{ currDay }}, {{ currYear }}</p>
            <ChartComponent/>
          </v-card>
         </v-col>
       
       
         
         <v-col cols="12" sm="6" md="2"  lg="2" >
              <v-card height="395" class="btn-hover color-1 mx-2 mt-n1 rounded-xl draw-border" tile>

                <v-col cols="12" 
                   sm="11" md="12"    >

                    <v-list-item three-line class="mt-5" >
                      <v-list-item-content>
                        <div class="mb-4">

                          <v-btn fab icon  :to="{ path: '/FilterDashBoard123', query: { name: 'SINAG' } }">
                          <v-avatar size="60">
                                <img src="/sinag.jpg" alt="">
                        </v-avatar>
                      </v-btn>

                      
                        </div>
                        <h2 class=" mb-1 white--text">
                        5,426
                        </h2>
                        <v-list-item-subtitle class=" white--text">Sinag</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    
                  </v-col>

                  
                  <v-col cols="12" 
                   sm="11" md="12"  class="mt-9"  >
                    <v-list-item three-line>
                      <v-list-item-content>
                        <div class="mb-4">

                          <v-btn fab icon  :to="{ path: '/FilterDashBoard123', query: { name: 'NON-SINAG' } }">
                          <v-avatar size="60">
                                <img src="/nonsinag.jpg" alt="">
                        </v-avatar>
                      </v-btn>

                      
                        </div>
                        <v-list-item-title class="headline mb-1 white--text">
                        5,426
                        </v-list-item-title>
                        <v-list-item-subtitle class="white--text">Non-Sinag</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    
                  </v-col>

                

              </v-card> 
          </v-col>




  <v-col cols="12" sm="6" md="4" lg="3" >
  
    <v-card  class="  mt-n6  rounded-xl draw-border" 
            tile height=" "
             >
                <DataTable1/>    
      </v-card>          
            </v-col>
          </v-row>
        
        </v-col>
      </v-row>
    </v-container>
  </v-app>

  </template>
  
  


  <script>
      import DataTable1 from '../components/DataTable1'
    import Navbar from '../components/Navbar'
    import ChartComponent from '../components/ChartComponent'
  
    export default {
      name: 'Home',
            
    
   data () {
        return {
          currDay: new Date().getDate(),
      currMonth: new Date().toLocaleString([], {
        month: 'long',
      }),
      currYear: new Date().getFullYear(),

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
        Navbar,
        ChartComponent,
        DataTable1,
      },

      
      methods:{

        ClickTransferData_Female(){

    /*   this.$router.push({name: "FilterDashBoard", params: {mganame: id}});  */

        }

      },

    }
  </script>
  
  
  
  
  
  
  <style scoped>



/* @media screen (min-width: 793px)  {

.class_text_total_sinag_nonsinag{
 font-size:18px;


}

} */



@media screen and (max-width: 684px) and (min-width: 600px) {

.class_sa_card_married{
  font-size:14px;

}

.class_sa_card_lapas{
  height:325px;

}



}


@media screen and (max-width: 460px) and (min-width: 411px) {

  .class_sa_totalyouthmember{
    height: 300px;

  }

}

@media screen and  (max-width: 411px) {

.class_sa_totalyouthmember{
  font-size:12px;

}

}





@media screen and (max-width: 1699px) and (min-width: 960px) {

  .class_sa_card_1{

    height: 171px;
  }



}


/* and (min-width: 500px) */
@media screen and (max-width: 1454px) and (min-width: 1342px)   {

  .class_sa_text{
    font-size:20px;

  }

  .class_sa_married{
    font-size:13px;

  }

  .class_sa_avatar{
    width: 55px;
    height: 55px;

  }

}

@media screen and (max-width: 1342px) and (min-width: 1283px)   {

.class_sa_text{
  font-size:18px;

}
.class_sa_married{
    font-size:13px;
  }
  .class_sa_avatar{
    width: 48px;
    height: 48px;

  }


}

@media screen and (max-width: 1300px)  {
  .class_sa_married{
    font-size:12px;

  }

}

@media screen and (max-width: 1282px) and (min-width: 959px) {

.class_sa_text{
font-size:15px;

}

.class_sa_married{
    font-size:12px;

  }

  .class_sa_avatar{
    width: 39px;
    height: 40px;

  }


}



@media screen and  (max-width: 959px)

 {
  .class_sa_married{
    font-size:30px;

  }

}




@media screen and (max-width: 1259px)   {
  .class_sa_married{
    font-size:10px;

  }

}


@media screen and (max-width: 1263px) and (min-width: 959px){

.class_sa_text_2{
font-size:12px;

}


}


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
  background-image: linear-gradient(to right, #0b5879, #076437, #0e6d3f, #078045);
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
  