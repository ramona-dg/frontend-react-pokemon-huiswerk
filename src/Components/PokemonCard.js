import React, {useEffect, useState} from 'react';
import axios from "axios";



const PokemonCard = ({name, url}) => {
    const [pokemon, setPokemon] = useState([])

    //Hier neem je dus de gegeven url uit app.js om met axios data op te halen in de specifieke url
    useEffect(() => {
        async function getPokemonData() {
            try {
                const result = await axios.get(`${url}`)
                console.log(result.data);
                setPokemon(result.data)

            } catch (e) {
                console.error(e);
            }
        }

        getPokemonData()
    }, [])

    return (

        <>
            <p><strong>{pokemon.name} </strong></p>
            <p><strong>{pokemon.weight}</strong></p>
            <p><strong>Abilities: </strong></p>
            <ul>
                {pokemon.abilities.map((ability) => {
                    return (
                        <li key={`${ability.ability.name}-${pokemon.name}`}>
                            {ability.ability.name}
                        </li>
                    )
                })}
            </ul>
        </>

    );
}

export default PokemonCard;