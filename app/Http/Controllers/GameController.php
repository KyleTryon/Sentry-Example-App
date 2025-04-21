<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GameController extends Controller
{
    // Display the game menu
    public function index()
    {
        return view('index');
    }
}