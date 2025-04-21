<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class GameController extends Controller
{
    // Display the game menu
    public function index()
    {
        return Inertia::render('index');
    }

    public function battle(Request $request): Response
    {
        $pokemonId = (int) $request->input('pokeId');

        return Inertia::render('battle', [
            'pokemonId' => $pokemonId,
        ]);
    }

}