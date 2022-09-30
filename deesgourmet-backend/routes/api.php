<?php

use App\Http\Controllers\AppetizerController;
use App\Http\Controllers\BestSellerController;
use App\Http\Controllers\BeefController;
use App\Http\Controllers\ChickenController;
use App\Http\Controllers\DessertsController;
use App\Http\Controllers\NoodleController;
use App\Http\Controllers\PorkController;
use App\Http\Controllers\RiceController;
use App\Http\Controllers\SeaFoodController;
use App\Http\Controllers\VegetableController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These 
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
}); 

Route::apiResource('bestseller', BestSellerController::class);
Route::apiResource('appetizer', AppetizerController::class);
Route::apiResource('beef', BeefController::class);
Route::apiResource('chicken', ChickenController::class);
Route::apiResource('desserts', DessertsController::class);
Route::apiResource('noodle', NoodleController::class);
Route::apiResource('vegetable', VegetableController::class);
Route::apiResource('pork', PorkController::class);
Route::apiResource('seafood', SeaFoodController::class);
Route::apiResource('rice', RiceController::class);