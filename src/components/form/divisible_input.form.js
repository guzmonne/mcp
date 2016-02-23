import React from 'react'

export default ({label, placeholder, type="text", large=false}) => 
	<div className="col-xs-12 col-sm-6 col-md-6">
		<div className="form-group">
			<label className="control-label">{label}</label>
			<div className="controls">
				<input
					type={type}
					placeholder={placeholder || label}
					className={(!!large || large===undefined) ? "form-control input-lg" : "form-control"}/>
			</div>
		</div>
	</div>