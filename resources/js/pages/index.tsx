import React from 'react';
import { Head, router } from '@inertiajs/react';
import { PokemonButton, PokemonProps, ValidPokemon } from '@/components/pokemon-button';

export default function Index() {

    // Function to handle the submission of the selected Pokémon, post to /battle
    const handleSubmit = (pokemonId: ValidPokemon) => {
        router.post('/battle', { pokeId: pokemonId });
    }
    return (
        <>
            <Head title="Pokémon RPS" />
            <div className="flex flex-col bg-orange-100 text-center p-10 min-h-screen">
                <h1 className="text-5xl text-black font-extrabold mb-6">Choose Your Starter Pokémon</h1>
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
                <h3 className="text-2xl text-black py-5">Choose carefully, your first battle awaits!</h3>
            </div>
        </>
    );
}