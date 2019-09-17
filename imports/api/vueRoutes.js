import VueRouter from 'vue-router'
import Demo from '/imports/ui/main.demo.vue';
import GameList from '/imports/ui/lobby.gamelist.vue';
import EditGame from '/imports/ui/game.edit.vue';
import PlayGame from '/imports/ui/game.play.vue';
import AdminDashboard from '/imports/ui/admin.dashboard.vue';

export default {
	router: new VueRouter({
		mode: 'history',
		routes: [
			{ path: '/', name: 'root', component: Demo },
			{ path: '/games/', name: 'games', component: GameList },
			{ path: '/games/:gameid/edit', name: 'games.edit', component: EditGame },
			{ path: '/games/:gameid/play', name: 'games.play', component: PlayGame },
			{ path: '/admin', name: 'admin.dashboard', component: AdminDashboard }
		]
	})
}