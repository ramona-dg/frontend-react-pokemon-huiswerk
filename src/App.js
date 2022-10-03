import './App.css';
import './Components/PokemonCard';
import PokemonCard from "./Components/PokemonCard";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    // useState om data te ontvangen en in "op te slaan"
    const [pokemon, setPokemon] = useState([])

    //Hier vraag je de data aan van de API met axios en error afvangen
    useEffect(() => {
        async function getPokemonData() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
                console.log(result.data.results)
                setPokemon(result.data.results)

            } catch (e) {
                console.error(e);
            }
        }
    getPokemonData()}, [])

        return (
            <>
                <div>
                    {/* hier map je door pokemon heen en geef je url, naam en key door aan het component PokemonCard */}
                    {pokemon && pokemon.map((poke => {
                            return <PokemonCard url={poke.url} name={poke.name} key={poke.name}/>
                        }
                    ))}
                </div>

            </>
        );
    }

    export default App;
