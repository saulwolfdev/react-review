import React, { Component } from 'react';
import PropTypes from "prop-types";

class Task extends Component {
	constructor(props) {
		super(props);
		this.state = {  };
	}
	stylesCompleted(){
		return{
			fontSize:"20px",
			fontWeight: '400',
			color:this.props.taskChildren.done?"red":"green",
			backgroundColor: "#00ffff",
			textDecoration:this.props.taskChildren.done?"line-through":"none"
		}
	}
	render() {
		const {taskChildren}=this.props;
		return (
			<div>
			{/* DESTRUCTURING */}
			  <h1>TASKChildren CHILDREN</h1>
				<p  key={taskChildren.id} style={this.stylesCompleted()}>
				    {taskChildren.title} -
					{taskChildren.description} - 
					{taskChildren.done} -
					<input type="checkbox"/>
					<button style={button}>x</button>
			  </p>
			{/* //OTRA FORMA
			// 	<li key={this.props.taskChildren.id}>
			// 	    <p>{this.props.taskChildren.title}</p>
			// 		<p>{this.props.taskChildren.description}</p>
			// 		<p>{this.props.taskChildren.done}</p>
			// 		<input type="checkbox"/>
			// 		<button>x</button>
			//   </li> */}
			</div>
		);
	}
}
Task.propTypes={
	taskChildren:PropTypes.object.isRequired
	
}
const button={
	fontSize:"15px",
	borderRadius: "50%",
	backgroundColor: "#cecece",
	outline: "none",
    cursor: "pointer",
	marginLeft: "5px",
    padding: "12px",
    border: "none"
	
}
export default Task;