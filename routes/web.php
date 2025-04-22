<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GameController;
use Inertia\Inertia;

Route::get('/', [GameController::class, 'index'])->name('index');
Route::post('/battle', [GameController::class, 'battle'])->name('battle');
Route::get('/debug-sentry', function () {
    throw new Exception('My first Sentry error!');
});


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';