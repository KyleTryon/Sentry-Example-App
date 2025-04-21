<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class GameController extends Controller
{
    protected array $choices = [1, 4, 7];
    protected array $winMap = [
        1 => 7, // Bulbasaur beats Squirtle
        4 => 1, // Charmander beats Bulbasaur
        7 => 4, // Squirtle beats Charmander
    ];

    public function index()
    {
        return Inertia::render('index');
    }

    public function battle(Request $request): Response
    {
        $pokemonId = (int) $request->input('pokeId');

        if (! in_array($pokemonId, $this->choices, true)) {
            return redirect()->route('index')->with('error', 'Invalid Pokemon ID');
        }

        $trainerId = $this->choices[array_rand($this->choices)];
        $result = $this->determineOutcome($pokemonId, $trainerId);

        return Inertia::render('battle', [
            'pokemonId' => $pokemonId,
            'trainerId'  => $trainerId,
            'result'    => $result,
        ]);
    }

    protected function determineOutcome(int $playerId, int $trainerId): string
    {
        if ($playerId === $trainerId) {
            return 'tie';
        }

        return $this->winMap[$playerId] === $trainerId ? 'win' : 'lose';
    }
}