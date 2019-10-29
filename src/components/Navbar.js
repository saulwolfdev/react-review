import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header>
            <h1>TasksApp</h1>
            <Link to="/">Home</Link> - 
            <Link to="/About">About</Link> - 
            <Link to="/Post">Post</Link>
        </header>
    )
}
