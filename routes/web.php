<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthenticatedSessionController;

Route::view('/{any?}', 'dashboard')
    ->name('dashboard')
    ->where('any', '.*');

Route::post('login',[AuthenticatedSessionController::class, 'store']);
