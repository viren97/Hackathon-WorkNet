import React, { useState } from 'react';
import card1 from '../../images/card1.png'
import card2 from '../../images/card2.png'
import card3 from '../../images/card3.png'
import { Card } from 'reactstrap';
const Cards = (props) => {
    return (
    <Card>
        <div>
            <img src={card1} alt="card1" />
            <p>Productivity</p>
        </div>
        <div>
            <img src={card2} alt="card2" />
            <p>Connectivity</p>
        </div>
        <div>
            <img src={card3} alt="card3" />
            <p>Growth</p>
        </div>
    </Card>
    );
}   
export default Cards;