import React from 'react'
import {browserHistory} from 'react-router'
import WelcomeContainer from '../components/welcome/container.js'
import Authorizing from './authorizing.js'
import LocalStorage from '../modules/local-storage.js'
import Api from '../modules/api.js'

class Welcome extends React.Component {
	constructor() {
		super()
		this.handleError = this.handleError.bind(this)
		this.state = {authorized: false}
	}

	componentWillMount(){
		const token    = LocalStorage.getKey('token')
		const provider = LocalStorage.getKey('provider')
		if (!!token && !!provider) {
			Api.validateToken(token, provider)
				.subscribe(this.handleSuccess, this.handleError)
		} else {
			this.redirect()
		}
	}

	handleSuccess(result){
		console.log(result)
	}

	handleError(error){
		console.error(error)
		LocalStorage.deleteKey('token')
		LocalStorage.deleteKey('provider')
		this.redirect()
	}

	redirect(){
		browserHistory.push('/login')
	}

	render(){
		const {authorized} = this.state
		const provider = LocalStorage.getKey('provider') || 'facebook'
		return authorized === false ? 
			<Authorizing provider={provider}/> : 
			<WelcomeContainer />
	}
}

Welcome.propTypes = {}

export default Welcome