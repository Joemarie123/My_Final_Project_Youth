<template>
    
    <v-data-table
         
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    dark
    class="btn-hover color-1"
     tile    
     :hide-default-header="true"
  >

    
  <template v-slot:item.image="{ item }">

<v-avatar size="50">
         <img v-bind:src="`/${item.image}`" alt="">
 </v-avatar>

</template>



</v-data-table>

</template> 

<script>
  

export default {
  

  components: {
  
  },
  data: function () {
    return {
      headers: [

      { text: 'LOGO', value: 'image',  align: 'center' },

        {
       
          text: 'Barangay',
          align: 'start',
          value: 'name',
          

        },
        { text: 'Total Youth',  align: 'left', value: 'category' },

      ],
      desserts: [
        {

        
          name: 'Apokon',
          category: '50021',
          image: 'barangaylogo/apokon.jpg'

        },


        {


          name: 'Bincungan',
          category: '5425',
          image: 'barangaylogo/bincungan.jpg'
        },
        {
          name: 'Busaon',
          category: '4582',
          image: 'barangaylogo/busaon1.jpg'

        },
        {
          name: 'Canocotan',
          category: '4584',
          image: 'barangaylogo/canocotan.jpg'

        },
        {
          name: 'Cuambogan',
          category: '4352',
          image: 'barangaylogo/cuambogan.jpg'

          
        },
        {
          name: 'la Filipina',
          category: '5987',
          image: 'barangaylogo/la filipina.jpg'

        },
        {
          name: 'Liboganon',
          category: '42512',
          image: 'barangaylogo/liboganon.jpg'
        },
        {
          name: 'Madaum',
          category: '4135',
          image: 'barangaylogo/madaum.jpg'
        },
        {
          name: 'Magdum',
          category: '5323',
          image: 'barangaylogo/magdum.jpg'

        },
        {
          name: 'Mankilam',
          category: '5512',
          image: 'barangaylogo/mankilam.jpg'
        },

        {
          name: 'New Balamban',
          category: '50021',
          image: 'barangaylogo/new balamban.jpg'

        },
        {
          name: 'Nueva Fuerza',
          category: '5425',
          image: 'barangaylogo/nueva fuerza.jpg'
        },
        {
          name: 'Pagsabangan',
          category: '4582',
          image: 'barangaylogo/pagsabangan.jpg'

        },
        {
          name: 'Pandapan',
          category: '4584',
          image: 'barangaylogo/pandapan.jpg'

        },
        {
          name: 'Magugpo Poblacion',
          category: '4352',
          image: 'barangaylogo/magugpo poblacion.jpg'

        },
        {
          name: 'San Agustin',
          category: '5987',
          image: 'barangaylogo/san agustin.jpg'

        },
        {
          name: 'San Isidro',
          category: '42512',
          image: 'barangaylogo/san isidro.jpg'
        },
        {
          name: 'San Miguel',
          category: '4135',
          image: 'barangaylogo/san miguel.jpg'

        },
        {
          name: 'Visayan Village',
          category: '5323',
          image: 'barangaylogo/visayan village.jpg'

        },

        {

          name: 'Magugpo East',
          category: '5512',
          image: 'barangaylogo/magugpo east.jpg'

        },


        {
          name: 'Magugpo North',
          category: '5512',
          image: 'barangaylogo/magugpo north.jpg'
        },


        {
          name: 'Magugpo South',
          category: '5512',
          image: 'barangaylogo/magugpo south.jpg'
        },


        {
          name: 'Magugpo West',
          category: '5512',
          image: 'barangaylogo/magugpo west.jpg'
        },



      ],
//lahi napud ni

    }
  },

  
};
</script>


<style>
.v-data-table .v-data-table-header th  {

/*     background: linear-gradient(#186f94, #0e7e48) padding-box,
    linear-gradient(180deg  ,rgb(131, 139, 7) ,rgb(224, 221, 221) ,  rgba(130, 139, 7, 0),rgba(130, 139, 7, 0)  ) border-box,
    linear-gradient(38deg  , rgba(180, 100, 7, 0),rgba(130, 139, 7, 0)  ) border-box; */

border-block-start: 3px solid ;
border-radius: 18px;

font-size: 14px ;
color: rgb(0, 0, 0);

}


.v-data-table > .v-data-table__wrapper > table {
    border-spacing: 0 0.4rem;
}

</style>


<style scoped> 
.btn-hover {
   
   font-size: 16px;

   cursor: pointer;
   margin: 10px;
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




</style>