import React from 'react'

export default ({children, className=''}) =>
	<div className={`row ${className}`}>

		<div className="col-xs-12">

			{children}

		</div>

	</div>