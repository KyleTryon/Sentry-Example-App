<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GameController;
use Inertia\Inertia;

Route::get('/', [GameController::class, 'index'])->name('index');
Route::post('/play', [GameController::class, 'play'])->name('play');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';