import Vue from 'vue'
import VueRouter from 'vue-router'

/* import DisplayAllusers from '../views/DisplayAllusers'; */
import YouthRegisterEnumerator from '../views/Youth_Enumerator/YouthRegisterEnumerator.vue'
import Youth_Enumerator_List_Member from '../views/Youth_Enumerator/Youth_Enumerator_List_Member.vue'

import DashboardVersion4 from '../views/DashboardVersion4.vue'
import EnumeratorRecord from '../views/ADMIN_FILE/EnumeratorRecord.vue'
import RegisteredOnline from '../views/ADMIN_FILE/RegisteredOnline.vue'
import AddUseraccount from '../views/ADMIN_FILE/AddUseraccount.vue'
import AnnounCement from '../views/ADMIN_FILE/AnnounCement.vue'
import RegisterNew from '../views/ADMIN_FILE/RegisterNew.vue'
import YouTherecord from '../views/ADMIN_FILE/YouTherecord.vue'
import SignUpMemberYouth from '../views/ADMIN_FILE/SignUpMemberYouth.vue'
import AttenDance from '../views/ADMIN_FILE/AttenDance.vue'
import DatatableSelectYouthAttended from '../views/ADMIN_FILE/DatatableSelectYouthAttended.vue' 
import DataTableEvents from '../views/ADMIN_FILE/DataTableEvents.vue'

import DatatableAttendance from '../views/ADMIN_FILE/DatatableAttendance.vue'


 import LogInForm from '../views/LogInForm.vue'
 import experiment from '../views/experiment.vue'
 import Navbar from '../components/Navbar.vue'
 import LoginVersion2 from '../views/LoginVersion2.vue'

 import experiment2 from '../views/experiment2.vue'



import FilterDashBoard123 from '../components/FilterDashBoard123.vue'

import PrintAllSinag from '../views/PrintLayout/PrintAllSinag.vue'




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
    path: '/PrintAllSinag',
    name: 'PrintAllSinag',
    component: PrintAllSinag
  },


  {
    path: '/RegisteredOnline',
    name: 'RegisteredOnline',
    component: RegisteredOnline
  },

  

    
  {
    path: '/EnumeratorRecord',
    name: 'EnumeratorRecord',
    component: EnumeratorRecord
  },

  

  {
    path: '/Youth_Enumerator_List_Member',
    name: 'Youth_Enumerator_List_Member',
    component: Youth_Enumerator_List_Member
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
    path: '/SignUpMemberYouth',
    name: 'SignUpMemberYouth',
    component: SignUpMemberYouth
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
