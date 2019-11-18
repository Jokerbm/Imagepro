// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

var firebaseConfig = {
  apiKey: "AIzaSyAdMeA2w7XZmIjrJ-xHroLpboaGlC_1Sd4",
  authDomain: "vue-hotel.firebaseapp.com",
  databaseURL: "https://vue-hotel.firebaseio.com",
  projectId: "vue-hotel",
  storageBucket: "vue-hotel.appspot.com",
  messagingSenderId: "103876794383",
  appId: "1:103876794383:web:1290f1395d864713c9ab7a",
  measurementId: "G-KZV5MV3QB6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);