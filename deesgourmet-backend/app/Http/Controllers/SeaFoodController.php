<?php

namespace App\Http\Controllers;

use App\Models\SeaFood;
use Illuminate\Http\Request;

class SeaFoodController extends Controller
{
    public function index()
    {
        $seafood = SeaFood::all();

        return response() ->json([
            "success" => true,
            "message" => "Best Seller Dishes",
            "data" => $seafood
        ]);
    }
    public function store(Request $request)
    {
    $validatedData = $request->validate([
        'dish_name' => 'required|max:20',
        'image' => 'required',
        'price_med' => 'required',
        'price_full' => 'required',

    ]);

    $seafood = SeaFood::create($validatedData);

    return response() ->json([
        "success" => true,
        "message" => "Dish Added Successfully",
        "data" => $seafood
    ]);

    }
    public function create()
    {
        
    }
    public function show()
    {
        
    }
    public function update(Request $request, $id)
    {
        $seafood=SeaFood::find($id);
        $seafood->update($request->all());
        return $seafood;

    }
    public function destroy(SeaFood $seafood)
    {
        $seafood->delete();
        return response()->json([
        "success" => true,
        "message" => "Product deleted successfully.",
        "data" => $seafood
        ]);
    }
}
