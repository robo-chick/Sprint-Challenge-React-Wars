// Write your Character component here
import React from 'react';

const Character = props => {

    return (
        <div className='App'>
            <h1>Character: {props.name}</h1>
            <img src={props.pic} alt={props.name}/>
            <p>Origin: {props.origin.name}</p>
            <p>Location: {props.location.name}</p>
            <p>Gender: {props.gender}</p>
            <p>Species: {props.species}</p>
            <p>Status: {props.status}</p>
        </div>
    )
}

export default Character;