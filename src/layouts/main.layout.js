import React from 'react'
import Container from '../components/helpers/container.helper.js'

export default class MainLayout extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return (
			<div className="outer">
				<Container className="App">
					{this.props.children}
				</Container>
			</div>
		)
	}
}
