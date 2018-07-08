import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar'

@Navbar
export default class App extends Component {

    render() {
        return (
            <div className='app-container' >
                <h1 className='main-title' >This is Main Page</h1>
            </div>
        )
    }
}
