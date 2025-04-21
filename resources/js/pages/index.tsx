import React from 'react';
import { Head } from '@inertiajs/react';
import { PokemonButton, PokemonProps, ValidPokemon } from '@/components/pokemon-button';

export default function Index() {

    const handleSubmit = (pokemon: ValidPokemon) => {
        console.log('Selected Pokémon:', PokemonProps[pokemon].name);
    };

    return (
        <>
            <Head title="Pokémon RPS" />
            <div className="flex flex-col bg-orange-100 text-center p-10 min-h-screen">
                <h1 className="text-3xl text-black font-extrabold mb-6">Choose Your Starter Pokémon</h1>
                <div className="flex gap-4 ">
                    {
                        Object.keys(PokemonProps).map((key) => {
                            const pokemonId = Number(key) as ValidPokemon;
                            return (
                                <PokemonButton
                                    key={pokemonId}
                                    pokemonId={pokemonId}
                                    onClick={() => handleSubmit(pokemonId)}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}