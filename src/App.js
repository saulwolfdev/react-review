import React, { Component } from 'react';
import tasks from "./sample/tasks.json";
import Tasks from './components/Tasks.js';
class App extends Component {
		constructor(props) {
		super(props)
			this.state={
		tasks:tasks
	}
	}
	 render() { 
    return ( 
      <div>
		  <Tasks taskFather={this.state.tasks}/>
	  </div>
     );
  }
}
 
export default App;