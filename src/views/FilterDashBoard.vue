<template>

    <v-app>
        <v-main>
      
    <v-container >
    

            <v-row>
                <v-col>

                    <FilterDashBoard123/> 

                </v-col>

            </v-row>

    
    
    </v-container>
  
  
    
    <Navbar/> 
  
      
</v-main>
    </v-app>
    
      </template>
  

      
      <script>
    
    import FilterDashBoard123 from '@/components/FilterDashBoard123';
      import Navbar from '@/components/Navbar';
   
  
  
      export default {
        
     
        components: {
          
          FilterDashBoard123,
          
          Navbar,
         
       
  
        },
        data: function () {
          return {
     
  
  
  
          }
        },
      
        
      };
      </script>
    
    
