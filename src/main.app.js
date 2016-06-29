import React, {Component} from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import Signup from './pages/signup.js'
import Login from './pages/login.js'
import Splash from './pages/splash.js'
import Poll from './pages/poll.js'
import Advertisment from './pages/advertisment.js'
import MainLayout from './layouts/main.layout.js'
import Authorizing from './pages/authorizing.js'
import Welcome from './pages/welcome.js'

export default class MainApp extends Component {
	render(){
		return (
			<Router history={browserHistory}>
				<Route path="/" component={MainLayout}>
					<IndexRoute component={Login}></IndexRoute>
					<Route path="login" component={Login}></Route>
					<Route path="signup" component={Signup}></Route>
					<Route path="splash" component={Splash}></Route>
					<Route path="poll" component={Poll}></Route>
					<Route path="advertisment" component={Advertisment}></Route>
					<Route path="authorizing" component={Authorizing}></Route>
					<Route path="welcome" component={Welcome}></Route>
				</Route>
			</Router>
		)
	}
}
