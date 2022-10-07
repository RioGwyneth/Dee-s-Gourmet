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

use App\Http\Controllers\AdminController;
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
Route::post('bestseller/restore/{id}', [BestSellerController::class,'restore']);

Route::apiResource('appetizer', AppetizerController::class);
Route::post('appetizer/restore/{id}', [AppetizerController::class,'restore']);

Route::apiResource('beef', BeefController::class);
Route::post('beef/restore/{id}', [BeefController::class,'restore']);

Route::apiResource('chicken', ChickenController::class);
Route::post('chicken/restore/{id}', [ChickenController::class,'restore']);

Route::apiResource('desserts', DessertsController::class);
Route::post('desserts/restore/{id}', [DessertsController::class,'restore']);

Route::apiResource('noodle', NoodleController::class);
Route::post('noodle/restore/{id}', [NoodleController::class,'restore']);

Route::apiResource('vegetable', VegetableController::class);
Route::post('vegetable/restore/{id}', [VegetableController::class,'restore']);

Route::apiResource('pork', PorkController::class);
Route::post('pork/restore/{id}', [PorkController::class,'restore']);

Route::apiResource('seafood', SeaFoodController::class);
Route::post('seafood/restore/{id}', [SeaFoodController::class,'restore']);

Route::apiResource('rice', RiceController::class);
Route::post('rice/restore/{id}', [RiceController::class,'restore']);

Route::post('login',[AdminController::class,'login']);