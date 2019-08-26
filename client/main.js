import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueMeteorTracker);


import App from './App.vue';
import Demo from '/imports/ui/main.demo.vue';
import GameList from '/imports/ui/lobby.gamelist.vue';
import EditGame from '/imports/ui/game.edit.vue';
import './main.html';

const routes = [
  { path: '/', component: Demo },
  { path: '/games/', component: GameList },
  { path: '/games/:gameid/edit', component: EditGame }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

Meteor.startup(() => {
  new Vue({
    el: '#app',
    router,
    ...App
   })
});
