import React, { Component } from 'react';
import tasks from "./sample/tasks.json";
import Tasks from './components/Tasks.js';
import TaskForm from './components/TaskForm.js';
class App extends Component {
		constructor(props) {
		super(props)
			this.state={
		tasksGrandFather:tasks
	}
	}
	 render() { 
    return ( 
      <div>
		  <h1>TASK GRANDFATHER</h1>
		  <TaskForm/>
		  <Tasks taskGrandFather={this.state.tasksGrandFather}/>
	  </div>
     );
  }
}
 
export default App;