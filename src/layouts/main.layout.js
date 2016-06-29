import React from 'react'
import Container from '../components/helpers/container.helper.js'

export default class MainLayout extends React.Component {
	constructor(props){
		super(props)

		this.containerClass = this.containerClass.bind(this)
	}

	containerClass(){
		return !!this.props.location.query.client   ? 
			`App ${this.props.location.query.client}` :
			"App tata"
	}

	render(){
		return (
			<div className="outer">
				<Container className={this.containerClass()}>
					{this.props.children}
				</Container>
			</div>
		)
	}
}
