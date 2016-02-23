import React from 'react'

export default ({className, children}) => 
	<section className={"Container inner supermarket-1 " + className}>

		<div className="Container__hero">

			<div className="Container__center_box">

				<div className="Container__container-fluid container-fluid">

					{children}

				</div>

			</div>

		</div>

	</section>