import React, { Component } from 'react';
class TaskForm extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			title:"",
			description:""
		 };
	}
	onSubmit=(e)=>{
		e.preventDefault()
		// console.log("Enviando de datos")
		this.props.addTask(this.state.title,this.state.description)
	}
	onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    })
	render() {
		//solo para verificar el llamado añ addTask
		//this.props.addTask()
		return (
			<div>
				<form onSubmit={this.onSubmit} style={form}>
					<input
						name="title"
						style={inputs}
						type="text"
						placeholder="Write a new Task" 
						onChange={this.onChange} 
						value={this.state.title}/>
					<textarea 
						name="description"
						type="text"
						style={inputs}
						placeholder="Write a description" 
						onChange={this.onChange} 
						value={this.state.description}></textarea>
					<input type="submit"/>
				</form>
			</div>
		);
	}
}
const form={
	display: "flex",
    flexDirection: "column",
    width: "27%",
    marginLeft: "20px"
}
const inputs={
	margin:"10px 0 "
}
export default TaskForm;