import React from 'react';
import { Head } from '@inertiajs/react';

export default function battle({pokemonId}: { pokemonId: number }) {
    return (
        <>
            <Head title="Pokémon Battle" />
            <div className="flex flex-col bg-orange-100 text-center p-10 min-h-screen">
                <h1 className="text-5xl text-black font-extrabold mb-6">Battle Time!</h1>
                <h3 className="text-2xl text-black py-5">Your Pokémon {pokemonId} is ready to battle!</h3>
            </div>
        </>
    );
}