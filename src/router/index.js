import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import RegisterNew from '../views/RegisterNew.vue'
import AddUseraccount from '../views/AddUseraccount.vue'
import DashboardVersion2 from '../views/DashboardVersion2.vue'
import DashboardVersion3 from '../views/DashboardVersion3.vue'
import DashboardVersion4 from '../views/DashboardVersion4.vue'
import YouTherecord from '../views/YouTherecord.vue'

/* import DisplayAllusers from '../views/DisplayAllusers'; */
import YouthRegisterEnumerator from '../views/Youth_Enumerator/YouthRegisterEnumerator.vue'

import Youth_Enum_Attendance from '../views/Youth_Enumerator/Youth_Enum_Attendance.vue'
import Youth_Enum_Eventlist from '../views/Youth_Enumerator/Youth_Enum_Eventlist.vue'

 import LogInForm from '../views/LogInForm.vue'
 import experiment from '../views/experiment.vue'
 import Navbar from '../components/Navbar.vue'
 import LoginVersion2 from '../views/LoginVersion2.vue'
 import AnnounCement from '../views/AnnounCement.vue'
 import experiment2 from '../views/experiment2.vue'
 import SignUpMemberYouth from '../views/SignUpMemberYouth.vue'
 import FilterDashBoard from '../views/FilterDashBoard.vue'
import ColumnChart from  '../components/ColumnChart.vue'
 import AttenDance from '../views/EventsMenu_ADMIN/AttenDance.vue'
import FilterDashBoard123 from '../components/FilterDashBoard123.vue'
import FilterFromDashBoard from '../components/FilterFromDashBoard.vue'

import DatatableAttendance from '../views/EventsMenu_ADMIN/DatatableAttendance.vue'
import DataTableEvents from '../views/EventsMenu_ADMIN/DataTableEvents.vue'


 import DatatableSelectYouthAttended from '../views/EventsMenu_ADMIN/DatatableSelectYouthAttended.vue' 
 import SK_DashBoard from '../views/Brgy_Sk_Official_AR/SK_DashBoard.vue'
 import SK_SearchRecord_Youth from '../views/Brgy_Sk_Official_AR/SK_SearchRecord_Youth.vue'
 import SK_AddRecord_Youth from '../views/Brgy_Sk_Official_AR/SK_AddRecord_Youth.vue'
 import SK_CreateEvents from '../views/Brgy_Sk_Official_AR/SK_CreateEvents.vue'
 import SK_Event_Attendance from '../views/Brgy_Sk_Official_AR/SK_Event_Attendance.vue'
 import SK_SelectYouth_Attendance from '../views/Brgy_Sk_Official_AR/SK_SelectYouth_Attendance.vue'
 import SK_Filter_DashBoard from '../views/Brgy_Sk_Official_AR/SK_Filter_DashBoard.vue'
 import SK_Announcement from '../views/Brgy_Sk_Official_AR/SK_Announcement.vue'
 import SK_Edit_UserAccount_AR from '../views/Brgy_Sk_Official_AR/SK_Edit_UserAccount_AR.vue'
 

/* YOUTH MEMBER */
import Youth_Member_Dashboard from '../views/Youth_Member_AR/Youth_Member_Dashboard.vue'
import Youth_Member_PersonalProfile from '../views/Youth_Member_AR/Youth_Member_PersonalProfile.vue'






 
Vue.use(VueRouter)

const routes = [

   {
    path: '/',
    name: 'LogInForm',
    component: LogInForm
  },

  

  {
    path: '/Youth_Member_PersonalProfile',
    name: 'Youth_Member_PersonalProfile',
    component: Youth_Member_PersonalProfile
  }, 

  {
    path: '/YouthRegisterEnumerator',
    name: 'YouthRegisterEnumerator',
    component: YouthRegisterEnumerator
  }, 

  
  {
    path: '/Youth_Enum_Attendance',
    name: 'Youth_Enum_Attendance',
    component: Youth_Enum_Attendance
  }, 

  
  {
    path: '/Youth_Enum_Eventlist',
    name: 'Youth_Enum_Eventlist',
    component: Youth_Enum_Eventlist
  }, 

  


  {
    path: '/DatatableAttendance',
    name: 'DatatableAttendance',
    component: DatatableAttendance
  },

  



  {
    path: '/DataTableEvents',
    name: 'DataTableEvents',
    component: DataTableEvents
  }, 

  


  



  {
    path: '/FilterFromDashBoard',
    name: 'FilterFromDashBoard',
    component:FilterFromDashBoard
  }, 





  {
    path: '/Youth_Member_Dashboard',
    name: 'Youth_Member_Dashboard',
    component: Youth_Member_Dashboard
  }, 

 

  {
    path: '/SK_Edit_UserAccount_AR',
    name: 'SK_Edit_UserAccount_AR',
    component: SK_Edit_UserAccount_AR
  }, 

 
  

  {
    path: '/FilterDashBoard123',
    name: 'FilterDashBoard123',
    component: FilterDashBoard123,
    props: route => ({ name: route.query.name }),
  }, 


  {
    path: '/SK_Filter_DashBoard',
    name: 'SK_Filter_DashBoard',
    component: SK_Filter_DashBoard,
    props: route => ({ name: route.query.name }),
  }, 

  {
    path: '/SK_Announcement',
    name: 'SK_Announcement',
    component: SK_Announcement
  }, 


  
 
  {
    path: '/SK_Event_Attendance',
    name: 'SK_Event_Attendance',
    component: SK_Event_Attendance
  }, 




  {
    path: '/SK_SelectYouth_Attendance',
    name: 'SK_SelectYouth_Attendance',
    component: SK_SelectYouth_Attendance
  }, 

  
    
  {
    path: '/SK_CreateEvents',
    name: 'SK_CreateEvents',
    component: SK_CreateEvents
  }, 


  {
    path: '/SK_AddRecord_Youth',
    name: 'SK_AddRecord_Youth',
    component: SK_AddRecord_Youth
  }, 

 
  {
    path: '/SK_SearchRecord_Youth',
    name: 'SK_SearchRecord_Youth',
    component: SK_SearchRecord_Youth
  }, 


  
  
  {
    path: '/SK_DashBoard',
    name: 'SK_DashBoard',
    component: SK_DashBoard
  }, 
  
  
  {
    path: '/DatatableSelectYouthAttended',
    name: 'DatatableSelectYouthAttended',
    component: DatatableSelectYouthAttended
  }, 
  
  {
    path: '/AttenDance',
    name: 'AttenDance',
    component: AttenDance
  }, 
  
   {
    path: '/LoginVersion2',
    name: 'LoginVersion2',
    component: LoginVersion2
  }, 

  

  {

    path: '/ColumnChart',
    name: 'ColumnChart',
    component: ColumnChart
  },  


  {
    path: '/SignUpMemberYouth',
    name: 'SignUpMemberYouth',
    component: SignUpMemberYouth
  },  


  
  
  {
    path: '/FilterDashBoard',
    name: 'FilterDashBoard',
    component: FilterDashBoard
  }, 



  {
    path: '/experiment2',
    name: 'experiment2',
    component: experiment2
  },  



  



  {
    path: '/AnnounCement',
    name: 'AnnounCement',
    component: AnnounCement
  },  

  {
    path: '/Navbar',
    name: 'Navbar',
    component: Navbar,
    props:true,
  },


  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },



  {


    path: '/RegisterNew',
    /* path: '/RegisterNew/:id/:admin', */
    name: 'RegisterNew',
    component: RegisterNew
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/DashboardVersion2',
    name: 'DashboardVersion2',
    component: DashboardVersion2
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/DashboardVersion3',
    name: 'DashboardVersion3',
    component: DashboardVersion3
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },


  {
    path: '/DashboardVersion4',
    name: 'DashboardVersion4',
    component: DashboardVersion4,
    props:true,

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  

  

  

   {
    path: '/YouTherecord',
    name: 'YouTherecord',
    component: YouTherecord

  },



  {
    path: '/experiment',
    name: 'experiment',
    component: experiment

  },





  
  {
    path: '/AddUseraccount',
    name: 'AddUseraccount',
    component: AddUseraccount
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
