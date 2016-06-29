import React, {PropTypes} from 'react'

const social = {
	facebook: 'fa-facebook-f',
	twitter: 'fa-twitter',
	google: 'fa-google',
	linkedin: 'fa-linkedin'
}

const Social = ({icon="facebook", type="", onClick}) =>
	<div onClick={onClick} className={`icon ${icon} ${type}`}>
		<i className={`fa ${social[icon]}`}></i>
	</div>

Social.propTypes = {
	icon: PropTypes.oneOf(Object.keys(social)),
	type: PropTypes.oneOf(['', 'eclipse', 'rounded']),
	onClick: PropTypes.func
}

export default Social