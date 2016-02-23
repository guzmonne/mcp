import React from 'react'

export default ({name, options=[]}) => 
	<span>
		{options.map((o, i) => 
			<div key={i} className="radio">
				<label>
					<input type="radio" name={name} value={o.value}/>
					{' ' + o.name}
				</label>
			</div>
		)}
	</span>