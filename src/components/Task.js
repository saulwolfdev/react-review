import React, { Component } from 'react'
class Task extends Component {
	constructor(props) {
		super(props);
		this.state = {  };
	}
	render() {
		const {taskChildren}=this.props;
		return (
			//DESTRUCTURING
				<li key={taskChildren.id}>
				    <p>{taskChildren.title}</p>
					<p>{taskChildren.description}</p>
					<p>{taskChildren.done}</p>
					<input type="checkbox"/>
					<button>x</button>
			  </li>
			//OTRA FORMA
			// 	<li key={this.props.taskChildren.id}>
			// 	    <p>{this.props.taskChildren.title}</p>
			// 		<p>{this.props.taskChildren.description}</p>
			// 		<p>{this.props.taskChildren.done}</p>
			// 		<input type="checkbox"/>
			// 		<button>x</button>
			//   </li>
		);
	}
}

export default Task;