import React, { Component } from 'react'
import Task from './Task';
class Tasks extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<h1>TASK FATHER</h1>
				<ul>
					{this.props.taskFather.map(task => <Task taskChildren={task} />)}
				</ul>
			</div>
		)
	}
}

export default Tasks;