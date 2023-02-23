<template>

  <v-app>
  
    
  <v-container class="my-5" >
  
  
      <v-row
        class="pa-2 mb-2"
       
      >
        <v-col 
         xl="6"
      md="6"
      lg="12"
      sm="12"
       
        >

      
  
        <v-row>
  
          <v-col 
          sm="12"
          xl="12"
          xs="12"
          md="10"
          lg="9"
       class="pa-2"
        >
        <v-card
  
        class="pa-2 card draw-border"
           

        >
        <h1>Total Youth Population</h1>
        <Chart />
  
  </v-card>
  
  </v-col>
  
  
  </v-row>
  
  
  
        </v-col>
  
  
  
   
  
        <v-col 
       
        >
  
        <v-row>
  
          <v-col 
       
       
        >
        
        <v-card
            class="pa-2  draw-border"
            
            tile
          >
          
          <v-card-title  >

             
                   <v-avatar size="60">
                              <img src="/img1.png" alt="">
                      </v-avatar>
                  
                        <h1>Total Male - 5,000</h1>
                     
                      </v-card-title>
                    <button class="card-button">View All</button>
  
          </v-card>
  
           
                  
          
          <v-row>
  
              <v-col
              >
          <v-card
            class="pa-2 card draw-border"
            outlined
            tile
          >
          <v-card-title  >
          <v-avatar size="60">
                              <img src="/img6.png" alt="">
                      </v-avatar>
  
                      
                        <h1>Total Single - 5,000</h1>
  

                      </v-card-title>
                     
                      <button class="card-button">View All</button>
          </v-card>
  
      </v-col>
      <v-col
              >
          <v-card
            class="pa-2 card draw-border"
            outlined
            tile
          >
          <v-card-title  >
          <v-avatar size="60">
                              <img src="/married.png" alt="">
                      </v-avatar>
  
                    
                        <h1>Total Married  5,000</h1>
  
                      </v-card-title>
                     
                      <button class="card-button">View All</button>
          </v-card>
  
      </v-col>
  
      </v-row>
  
  
  </v-col>
  

  <v-col

  >
  <v-card
  class="pa-2 card draw-border"
            outlined
            tile
  >
  
  <v-card-title  >
      <v-avatar size="60">
                              <img src="/img3.png" alt="">
                      </v-avatar>
                   <h1>  Total Female - 5,000</h1>
                      <button class="card-button">View All</button>
  </v-card-title>
  
  
  </v-card>
  
  <v-row>
  <v-col
  
  >
  
  <v-card
  class="pa-2 card draw-border"
            outlined
            tile
  >
  
  <v-card-title  >
      <v-avatar size="60">
                              <img src="/img2.png" alt="">
                      </v-avatar>
                     <h1> Total Non-IP - 5,000</h1>
                      <button class="card-button">View All</button>
  </v-card-title>
  
  
  </v-card>
  
  
  </v-col>
  
  <v-col
  
  >
  
  <v-card
  class="pa-2 card draw-border"
            outlined
            tile
  >
  
  <v-card-title  >
      <v-avatar size="60">
                              <img src="/IP.png" alt="">
                      </v-avatar>
                
                     <h1> --- Total IP ---- 54242</h1>  
                     
                      
                      <button class="card-button">View All</button>
  </v-card-title>
  
  
  </v-card>
  
  
  </v-col>
  
  
  </v-row>
  
  
  
  
  </v-col>
  
  
  
  
  
  </v-row>
  
  

  
        </v-col>
        
  </v-row>
  
  
  <!-- <v-row>
    <v-col
    
    xl="3"
    >

      <v-card
  class="pa-2  draw-border"
            outlined
            tile
  >
  
  <v-card-title  >

    <v-row>
      <v-avatar size="70">
                              <img src="/apokon.jpg" alt="">
                      </v-avatar>
                      
                    
                      <v-col
                       
                      >
                   <h1> APOKON - 5,013 </h1> 
                  </v-col>
                </v-row>
                 
               
                
                      
                      <button class="card-button">View All</button>
  </v-card-title>
  
  
  </v-card>
  


    </v-col>



  </v-row>
 -->








  
  </v-container>


  
  <Navbar/> 
  <RightSidebar/>
    
    <v-content>
      <router-view>
      </router-view>
    </v-content>
    
  

 
    
  </v-app>
  
    </template>


   
<!-- <script>

import Navbar from '@/components/Navbar'


export default {
  name: 'App',

  components: {

   Navbar,
 
  },

  data: () => ({
    //
  }),
};
</script>
 -->

    
    <script>
  
   
    import Navbar from '@/components/Navbar';
    import Chart from '@/components/ChartComponent.vue'

    import RightSidebar from '@/components/RightSidebar';



    export default {
      
   
      components: {
        
        Chart,
        Navbar,
       
        RightSidebar,

      },
      data: function () {
        return {
   



        }
      },
    
      
    };
    </script>
  
  <style scoped>






  #myChart {
    max-width: 500px;
    margin: 30px auto;
    padding: 0;
  }
  
  p{
  
  text-align: center;
  font-size: 20px;
  
  }
  
  </style>
  
  
  <style scoped>

h1{
text-align: center;
font-size:large;
color: black;
}


.draw-border {
  border-radius: 20px;
  box-shadow: inset 0 0 0 4px #58cdd1;

 
}






/* .card {
   
   border-radius: 20px;
   background: #c9cbcf;
   position: relative;
   padding: 1.8rem;
   border: 2px solid #c3c6ce;
   transition: 0.5s ease-out;
   overflow: visible;
} */



.text-body {
   color: rgb(134, 134, 134);
}

/*Text*/
.text-title {
   font-size: 1.5em;
   font-weight: bold;
}

/*Hover*/
.card:hover {
   border-color: #008bf8;
   box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

.card:hover .card-button {
   transform: translate(-50%, 50%);
   opacity: 1;
}
</style>