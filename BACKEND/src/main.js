import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index";
import * as firebase from "firebase";
import store from "./store";

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "AIzaSyAdMeA2w7XZmIjrJ-xHroLpboaGlC_1Sd4",
    authDomain: "vue-hotel.firebaseapp.com",
    databaseURL: "https://vue-hotel.firebaseio.com",
    projectId: "vue-hotel",
    storageBucket: "vue-hotel.appspot.com",
    messagingSenderId: "103876794383",
    appId: "1:103876794383:web:1290f1395d864713c9ab7a",
    measurementId: "G-KZV5MV3QB6"
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
