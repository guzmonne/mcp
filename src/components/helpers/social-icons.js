import React from 'react'
import Social from './social_icons.helper.js'
import Api from '../../modules/api.js'

const SocialIcons = () => 
	<div className="SocialIcons">
		<a href="#" className="Login__social_icon">
			<Social icon="facebook" onClick={() => Api.signIn('facebook')}type="eclipse" />
		</a>
		<a href="#" className="Login__social_icon">
			<Social icon="google" onClick={() => Api.signIn('google')}type="eclipse" />
		</a>
	</div>

SocialIcons.propTypes = {}

export default SocialIcons