/*
	Inspired by "Simple CSS Animation" pen developed by Don Sammut.
	http://codepen.io/domsammut/pen/eJbly
 */
import React from 'react'

const Loading = ({children}) =>
	<div className="loading-container">
		<div className="loading"></div>
		<div id="loading-text">
			{children}
		</div>
	</div>

Loading.propTypes = {
	children: React.PropTypes.element
}

export default Loading