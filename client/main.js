import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueMeteorTracker);


import App from './App.vue';
import VR from '/imports/api/vueRoutes.js';
import './main.html';

Meteor.startup(() => {
  new Vue({
    el: '#app',
    router: VR.router,
    ...App
   })
});
