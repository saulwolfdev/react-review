import React, { Component } from 'react'

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
const list={
	display:" flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
}
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
			textDecoration:"none"
		}
	}
	render() {
		const {taskChildren}=this.props;
		return (
			<div style={this.stylesCompleted()}>
			{/* DESTRUCTURING */}
			  <h1>TASK CHILDREN</h1>
				<li style={list} key={taskChildren.id}>
				    <p>{taskChildren.title}</p>
					<p>{taskChildren.description}</p>
					<p>{taskChildren.done}</p>
					<input type="checkbox"/>
					<button style={button}>x</button>
			  </li>
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

export default Task;