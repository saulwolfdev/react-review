import React from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'

export default function Navbar(props) {
    const { history } = props;
    return (
      <header>
        <h1>TasksApp</h1>
        <Link to="/">Home</Link> -<Link to="/About">About</Link> -
        <Link to="/Post">Post</Link>
        <br />
        <React.Fragment>
          <button onClick={()=> history.push("/About")}>go to push</button>
          <button onClick={()=> history.goBack()}>go to back</button>
          <button onClick={()=> history.goForward()}>go to forward</button>
        </React.Fragment>
      </header>
    );
}
