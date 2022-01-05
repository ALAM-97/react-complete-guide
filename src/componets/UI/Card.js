import React from 'react';
import './Card.css';

function Card(props) {
    // props.className prende le classi presenti in ExpenseItem all'interno del componente Card
    const classes = 'card ' + props.className

    return (
        <div className={ classes }>{ props.children }</div>
    );
}

export default Card;