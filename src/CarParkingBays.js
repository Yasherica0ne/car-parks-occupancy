import React, {Component} from 'react';
import CarBay from './CarBay'
import './App.css';

function CarParkingBays({parkingBays}) {
    const parkingBay = parkingBays.map(bay =>
        <CarBay Bay={bay}/>
    )
    return (
        <ul>
            {parkingBay}
        </ul>
    )
}

export default CarParkingBays;