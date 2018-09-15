import React, {Component} from 'react';
import './App.css';
import CarParkingBays from "./CarParkingBays";

function CarParking(props) {
    const {parking} = props;
    //this.state.carpark = parking.id;
    if (parking.bays.length == 0)
        return null;
    else
        return (
            <li key={parking.id}>
                <h2>{parking.name}</h2>
                <CarParkingBays parkingBays={parking.bays}></CarParkingBays>
            </li>
        )
}

export default CarParking
