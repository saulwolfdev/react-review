import React, { Component } from 'react'
import Task from './Task';
import PropTypes from "prop-types";
class Tasks extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<h1>NIVEL 2</h1>
					{this.props.tasks.map(task => 
						<Task 
						task={task} 
						key={task.id}
						deleteTask={this.props.deleteTask}
						checkDone={this.props.checkDone}
						/>)}
			</div>
		)
	}
}
Tasks.propTypes={
	tasks:PropTypes.array.isRequired
}
export default Tasks;