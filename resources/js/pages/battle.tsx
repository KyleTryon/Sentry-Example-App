import React from 'react';
import { Head, router } from '@inertiajs/react';
import { ValidPokemon, PokemonButton } from '@/components/pokemon-button';

export default function battle({ pokemonId, trainerId, result }: { pokemonId: ValidPokemon, trainerId: ValidPokemon, result: string }) {
    return (
        <>
            <Head title="Pokémon Battle" />
            <div className="flex flex-col bg-orange-100 text-center min-h-screen p-10">
                <h1 className="text-5xl text-black font-extrabold mb-6">Battle Time!</h1>
                <div className="flex gap-4 justify-center">
                    <PokemonButton
                        pokemonId={pokemonId}
                        onClick={() => { }}
                    />
                    <span className="flex items-center text-5xl text-black font-extrabold">VS</span>
                    <PokemonButton
                        pokemonId={trainerId}
                        onClick={() => { }}
                    />
                </div>
                <h3 className="text-2xl text-black py-5">YOU {result.toUpperCase()}!</h3>
                <div className="flex justify-center">
                <button
                    className="text-black bg-white text-2xl font-bold py-2 px-4 border-8 rounded-2xl hover:cursor-pointer"
                    onClick={() => router.get('/')}
                >
                    Play Again
                </button>
            </div>
            </div>
        </>
    );
}