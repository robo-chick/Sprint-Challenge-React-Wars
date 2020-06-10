// Write your Character component here
import React from 'react';
import {CharacterContainer, CharacterCard, Images, Text, Name} from './Styles';


const Character = props => {

    return (
        <CharacterContainer>
            <CharacterCard>
            <Name>Name: {props.name}</Name>
            <Images src={props.pic} alt={props.name}/>
            <Text>Origin: {props.origin.name}</Text>
            <Text>Location: {props.location.name}</Text>
            <Text>Gender: {props.gender}</Text>
            <Text>Species: {props.species}</Text>
            <Text>Status: {props.status}</Text>
            </CharacterCard>
        </CharacterContainer>
    )
}

export default Character;