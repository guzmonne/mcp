import React from 'react'
import {Router, browserHistory} from 'react-router'
import Login from './users/login.js'
import MainLayout from './layouts/main.layout.js'

const routeConfig = {
	path: '/',
	component: MainLayout,
	indexRoute: {component: Login},
	childRoute: [
		{path: 'login', component: Login}
	]
}

export default () => <Router routes={routeConfig} history={browserHistory}/>