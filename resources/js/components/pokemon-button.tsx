import * as React from "react"
import Bulbasaur from "@images/1.svg"
import Charmander from "@images/4.svg"
import Squirtle from "@images/7.svg"

type ValidPokemon = 1 | 4 | 7

type Pokemon = {
    name: string
    background: string
    accent: string
    image: string
}
type PokemonProps = {
    [key in ValidPokemon]: Pokemon
}

const PokemonProps: PokemonProps = {
    1 : {
        name: "Bulbasaur",
        background: "bg-green-200",
        accent: "bg-green-500",
        image: Bulbasaur,

    },
    4 : {
        name: "Charmander",
        background: "bg-red-200",
        accent: "bg-red-500",
        image: Charmander,

    },
    7 : {
        name: "Squirtle",
        background: "bg-blue-200",
        accent: "bg-blue-500",
        image: Squirtle,
    },
}

function PokemonButton({
    pokemonId,
    ...props
}: {
    pokemonId: ValidPokemon
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const pokemon = PokemonProps[pokemonId];
    return (
        <button
            className={`flex flex-col w-1/3 px-6 py-3 ${pokemon.background} text-white rounded hover:cursor-pointer`}
            {...props}
        >
            <img className="flex-1" src={pokemon.image} alt={pokemon.name} />
            <h2 className={`text-center py-3 font-black text-4xl ${pokemon.accent} rounded`}>{pokemon.name}</h2>
        </button>
    );
}

export {PokemonButton, PokemonProps}
export type { Pokemon, ValidPokemon }