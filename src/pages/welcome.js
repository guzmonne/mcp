import React from 'react'
import {browserHistory} from 'react-router'
import WelcomeContainer from '../components/welcome/container.js'
import Authorizing from './authorizing.js'
import LocalStorage from '../modules/local-storage.js'
import Api from '../modules/api.js'

class Welcome extends React.Component {
	constructor() {
		super()
		this.handleSuccess   = this.handleSuccess.bind(this)
		this.handleError     = this.handleError.bind(this)
		this.updateTokenData = this.updateTokenData.bind(this)
		this.getProfile      = this.getProfile.bind(this)
		this.state = {authorized: false}
	}

	componentWillMount(){
		if (!!this.props.location && !!this.props.location.query)
			this.updateTokenData()
		else
			this.redirect()
	}

	/**
	 * Gets the query token and provider data and stores it
	 * in LocalStorage
	 * @return {Void}
	 */
	updateTokenData(){
		const {token, provider} = this.props.location.query
		LocalStorage.setKey('token', token)
		LocalStorage.setKey('provider', provider)
		this.getProfile(token, provider)
	}

	/**
	 * Checks the validity of the token
	 * @param  {String} token    token value
	 * @param  {String} provider token provider name
	 * @return {Void}
	 */
	getProfile(token, provider){
		Api.getProfile(token, provider)
			.subscribe(this.handleSuccess, this.handleError)
	}

	/**
	 * Helper function that merges the new data to the state.
	 * It also authorizes the user to see the welcome page.
	 * @param  {Object} result Operation object result
	 * @return {Void}
	 */
	handleSuccess(result){
		console.log('Success: ', result)
		this.setState(Object.assign({}, {authorized: true}, result))
	}

	/**
	 * Helper function that throws the error of an operation 
	 * to the console. It also removes the current token and
	 * provider value, and redirects the user to the login
	 * page.
	 * @param  {Object} result Operation object error
	 * @return {Void}
	 */
	handleError(error){
		console.error('Error: ', error)
		LocalStorage.deleteKey('token')
		LocalStorage.deleteKey('provider')
		this.redirect()
	}

	/**
	 * Redirects the user to the login page.
	 * @return {Void}
	 */
	redirect(){
		browserHistory.push('/login')
	}

	render(){
		const {authorized} = this.state
		const provider = LocalStorage.getKey('provider') || 'facebook'
		return authorized === false ? 
			<Authorizing provider={provider}/> : 
			<WelcomeContainer profile={this.state}/>
	}
}

Welcome.propTypes = {}

export default Welcome