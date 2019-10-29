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
					{task.title} ---
					{task.description} ---
					{task.done} ---
					  {task.id}

					<input  style={checkbox} type="checkbox"
					onChange={this.props.checkDone.bind(this, task.id)}/>
					<button style={button} 
							onClick={this.props.deleteTask.bind(this, task.id)}>x</button>
			  </p>
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
const checkbox={
	margin:" 0 20px",
    cursor:" pointer"
}
export default Task;