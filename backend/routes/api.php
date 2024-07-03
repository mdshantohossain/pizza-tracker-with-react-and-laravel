<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Pizza;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/get-foods', function(){
    $pizzas =  Pizza::where('status', 1)->orderBy('id', 'DESC')->get();

    foreach ($pizzas as $pizza) {
        $pizza->image = asset($pizza->image);
    }
    return $pizzas;
});
