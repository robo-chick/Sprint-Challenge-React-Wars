import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Character from './Character';


const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
        .get('https://rickandmortyapi.com/api/character')
        .then((response) => {
            console.log(response.data);
            setCharacters(response.data.results);
        })
        .catch((error) => {
            console.log('Error', error);
        })

    },[])

    return (
        <div>
            {characters.map(char => {
                return (
                    <Character
                    key={char.id}
                    name={char.name}
                    pic={char.image}
                    location={char.location}
                    origin={char.origin}
                    gender={char.gender}
                    species={char.species}
                    status={char.status}
                    />
                )
            })}
        </div>
    )
}

export default CharacterList;