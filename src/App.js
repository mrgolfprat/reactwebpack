import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar'

@Navbar()
export default class App extends Component {

    alertClick = () => {
        alert('click!!!')
    }

    componentDidMount = async () => {

    }


    render() {
        return (
            <div className='app-container' >
                this is App Page
                <img src={require('./image/Cat03.jpg')} />
                <h1>eiei gum</h1>
                <button onClick={this.alertClick} >click me</button>
            </div>
        )
    }
}
