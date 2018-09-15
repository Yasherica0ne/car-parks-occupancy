import React, { Component } from 'react';
import CarParkings from './CarParkings';
import axios from 'axios'
import './App.css';

class App extends Component {
    constructor () {
        super()
        this.state = {
            username: []
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick () {
        axios.get('https://api.tfl.gov.uk/Occupancy/CarPark?app_key=087a2b1a57a814eb22309fb96878e675&app_id=c8c62ead')
            .then(response => this.setState({
                username: response.data
            }))
    }
    render () {
        return (
            <div >
                <button className='ShowButton' onClick={this.handleClick}>
                    Show free parking lots
                </button>
                <CarParkings parkings = {this.state.username}></CarParkings>
            </div>
        )
    }
}

export default App;
