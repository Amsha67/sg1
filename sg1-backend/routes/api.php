<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// route de test pour verifier que l'api repond (sprint 1, back TP1)
Route::get('/test', function () {
    return response()->json([
        'message' => 'API SMECTA ok',
    ]);
});
