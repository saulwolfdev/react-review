import React, { Component } from 'react';
import tasks from "./sample/tasks.json";
import Tasks from './components/Tasks.js';
import TaskForm from './components/TaskForm.js';
class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			tasks: tasks
		}
	}

	addTask = (title, description) => {
		// console.log("recibiendo datos desde APP")
		// console.log(title,description)
		const newTask = {
			title: title,
			description: description,
			id: this.state.tasks.length
		}
		console.log(newTask)
		this.setState({
			tasks:[...this.state.tasks, newTask]
		})
	}
	deleteTask=(id)=>{
		const newTasks=this.state.tasks.filter(task => task.id!==id)
		console.log(newTasks)
		this.setState({tasks:newTasks})
	}
	checkDone=(id)=>{
         const newTasks=this.state.tasks.map(task=>{
			 if(task.id===id){
				 task.done=!task.done
			 }
			 return task;
		 })
		 this.setState({tasks:newTasks})
	}
	render() {
		return (
			<div>
				<h1>NIVEL 1</h1>
				<TaskForm addTask={this.addTask} />
				<Tasks 
					tasks={this.state.tasks} 
					deleteTask={this.deleteTask} 
					checkDone={this.checkDone} 
					/>
			</div>
		);
	}
}

export default App;