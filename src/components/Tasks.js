import React, { Component } from 'react'
class Tasks extends Component {
	constructor(props) {
		super(props);
		this.state = {  };
	}
	render() {
		return (
			<div>
				<h1>tasks Json</h1>
				<ul>
			  	{this.props.todo.map(task=><li key={task.id}>
				   <p>{task.title}</p>
					<p>{task.description}</p>
					<p>{task.done}</p>
			  </li>)}
		  </ul>
			</div>
		)
	}
}

export default Tasks;