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
		console.log("Enviando de datos")
	}
	onChange=e=>{
		console.log(e.target.value)
		console.log("Datos cargados")
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<input
						name="title"
						type="text"
						placeholder="Write a new Task" 
						onChange={this.onChange} 
						value={this.state.title}/>
					<textarea 
						name="description"
						type="text" 
						placeholder="Write a description" 
						onChange={this.onChange} 
						value={this.state.description}></textarea>
					<input type="submit"/>
				</form>
			</div>
		);
	}
}

export default TaskForm;