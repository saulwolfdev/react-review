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
				<h1>TASK FATHER</h1>
					{this.props.taskGrandFather.map(task => <Task taskChildren={task} key={task.id}/>)}
			</div>
		)
	}
}
Tasks.propTypes={
	taskGrandFather:PropTypes.array.isRequired
}
export default Tasks;