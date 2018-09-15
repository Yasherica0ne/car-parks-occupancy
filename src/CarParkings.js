import React, {Component} from 'react';
import CarParking from './CarParking';
import CarParkingBays from './CarParkingBays'
import './App.css';

function CarParkings({parkings}) {
    const parkingElements = parkings.map(park =>
        <CarParking parking={park}/>
    )
    return (
        <ul>
            {parkingElements}
        </ul>
    )
}

export default CarParkings