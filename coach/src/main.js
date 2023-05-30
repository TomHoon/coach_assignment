import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'

import Coaches from './components/Coaches.vue'
import Coach from './components/Coach.vue'
import Request from './components/Request.vue'

import {createStore} from 'vuex'

const app = createApp(App);
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{path: "/", component: Coaches},
		{path: "/coaches", component: Coaches},
		{path: "/coaches/:id", component: Coach},
		{path: "/request", component: Request}
	]
})

const store = createStore({
	state(){
		return{
			coaches: [
				{
					id: 1,
					name: 'tom',
					description: 'ski'
				},
				{
					id: 2,
					name: 'john',
					description: 'bodybuilder'
				},
				{
					id: 3,
					name: 'kevin',
					description: 'football'
				},
				{
					id: 4,
					name: 'ahn',
					description: 'baseball'
				},
			],
			request: []
		}
	},
	getters: null,
	mutations: null,
	actions: null
})

app.use(store);
app.use(router);
app.mount('#app');