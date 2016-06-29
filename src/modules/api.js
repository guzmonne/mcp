import Rx from 'rx-dom'

const endpoint = 'https://0qnniuje2b.execute-api.us-east-1.amazonaws.com/dev'

function ApiConstructor() {

	/**
	 * Inititates the correct signin process given the provided 'provider'
	 * @param  {String} provider Provider name. One of 'google' or 'facebook'
	 * @return {Void}          
	 */
	const signIn = (provider="facebook") => {
		window.location.href = `${endpoint}/authentication/signin/${provider}`
	}

	const validateToken = (token, provider) => {
		const url = `${endpoint}/authentication/authorize-client/${token}?provider=${provider}`
		return Rx.DOM
			.getJSON(url)
			.do((response) => {
				if (!!response.errorType)
					throw response
			})
	}

	return Object.freeze({
		signIn,
		validateToken,
	})

}

const Api = new ApiConstructor()

export default Api