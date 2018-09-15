import React, {Component} from 'react';
import Styles from './App.css';

function CarBay({Bay}) {
    if (Bay.occupied == Bay.bayCount)
        return null;
    else {
        let type;
        if(Bay.bayType == 'Disabled') type = 'Disabled parking';
        else type = Bay.bayType;
        return (
            <li >
                <h3>{type}</h3>
                <h4>Bay count: {Bay.bayCount}</h4>
                <h4>Free bays: {Bay.free}, Occupied bays: {Bay.occupied}</h4>
            </li>
        )
    }
}

export default CarBay