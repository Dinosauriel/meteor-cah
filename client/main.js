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
  { path: '/', name: 'root', component: Demo },
  { path: '/games/', name: 'games', component: GameList },
  { path: '/games/:gameid/edit', name: 'games.edit', component: EditGame }
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
