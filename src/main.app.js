import React, {Component} from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import Signup from './pages/signup.js'
import Login from './pages/login.js'
import Splash from './pages/splash.js'
import MainLayout from './layouts/main.layout.js'

const routeConfig = {
	path: '/',
	component: MainLayout,
	indexRoute: {component: Login},
	childRoutes: [
		{path: 'login', component: Login},
		{path: 'splash', component: Splash}
	]
}

export default class MainApp extends Component {
	render(){
		return (
			<Router history={browserHistory}>
				<Route path="/" component={MainLayout}>
					<IndexRoute component={Login}></IndexRoute>
					<Route path="login" component={Login}></Route>
					<Route path="signup" component={Signup}></Route>
					<Route path="splash" component={Splash}></Route>
				</Route>
			</Router>
		)
	}
}
