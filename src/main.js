import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

import firebase from './plugins/firebase.js' 
import './views/Forms_Balik2'

/* import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
 */

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';



import store from './store'

/* import "bootstrap/dist/css/bootstrap.min.css" */
/* import store from './store'; */




Vue.config.productionTip = false

new Vue({
    
firebase,
 router,
 vuetify,
 store,

 /*  store, */


 render: h => h(App)
}).$mount('#app')


