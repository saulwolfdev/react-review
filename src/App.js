import React from 'react';

function App() {
  return (
    <div className="App">
			<h1>TODO</h1>
			<Hello/>
			
    </div>
  );
}
// const App = () =><div>Hello word <Hello/></div>

// class App extends React.Component{
// 	render(){
// 		return(
// 			<div>holaa desde la clase <Hello/></div>
// 		)
// 	}
// }
function Hello(){
	return(
		<h2>SALUDO</h2>
	)
}

export default App;
