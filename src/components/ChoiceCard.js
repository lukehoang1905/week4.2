import React from 'react'

export default function ChoiceCard(props) {

    let isWinner = (props.title === 'You' && props.result === 'Victory!')
        || (props.title === 'Computer' && props.result === 'Defeat!')
    let status = isWinner ? 'victory' : (props.result === 'Tie game!' ? 'tie' : 'defeat')

    return (
        <div className={`choice-card ${status}`}>
            <h1>{props.title}</h1>
            <img src={props.imgURL} alt={props.title} />
            <h3>{status}</h3>
        </div>
    )
}