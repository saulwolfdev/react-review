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
			color:this.props.task.done?"red":"green",
			backgroundColor: "#00ffff",
			textDecoration:this.props.task.done?"line-through":"none"
		}
	}
	render() {
		const {task}=this.props;
		return (
			<div>
			{/* DESTRUCTURING */}
			  <h1>NIVEL 3</h1>
				<p  key={task.id} style={this.stylesCompleted()}>
					{task.title} -
					{task.description} - 
					{task.done} -
					  {task.id}
					<input type="checkbox"/>
					<button style={button}>x</button>
			  </p>
			{/* //OTRA FORMA
			// 	<li key={this.props.task.id}>
			// 	    <p>{this.props.task.title}</p>
			// 		<p>{this.props.task.description}</p>
			// 		<p>{this.props.task.done}</p>
			// 		<input type="checkbox"/>
			// 		<button>x</button>
			//   </li> */}
			</div>
		);
	}
}
Task.propTypes={
	task:PropTypes.object.isRequired
	
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