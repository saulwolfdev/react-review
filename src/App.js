import React, { Component } from 'react';
import tasks from "./sample/tasks.json";
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Post from './components/Post';
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter as Router, Route } from "react-router-dom";

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
			tasks: [...this.state.tasks, newTask]
		})
	}
	deleteTask = (id) => {
		const newTasks = this.state.tasks.filter(task => task.id !== id)
		console.log(newTasks)
		this.setState({ tasks: newTasks })
	}
	checkDone = (id) => {
		const newTasks = this.state.tasks.map(task => {
			if (task.id === id) {
				task.done = !task.done
			}
			return task;
		})
		this.setState({ tasks: newTasks })
	}
	render() {
		return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <TaskForm addTask={this.addTask} />
              <Tasks
                tasks={this.state.tasks}
                checkDone={this.checkDone}
                deleteTask={this.deleteTask}
              />
            </React.Fragment>
          )}>
          </Route>
          <Route path="/About" component={About} />
          <Route path="/Post" component={Post}/>
        </div>
      </Router>
		);
	}
}

export default App;