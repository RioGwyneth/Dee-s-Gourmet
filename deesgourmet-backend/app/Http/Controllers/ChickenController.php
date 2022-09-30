<?php

namespace App\Http\Controllers;

use App\Models\chicken;
use Illuminate\Http\Request;

class ChickenController extends Controller
{
    public function index()
    {
        $chicken = chicken::all();

        return response() ->json([
            "success" => true,
            "message" => "Best Seller Dishes",
            "data" => $chicken
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

    $chicken = chicken::create($validatedData);

    return response() ->json([
        "success" => true,
        "message" => "Dish Added Successfully",
        "data" => $chicken
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
        $chicken=chicken::find($id);
        $chicken->update($request->all());
        return $chicken;

    }
    public function destroy(chicken $chicken)
    {
        $chicken->delete();
        return response()->json([
        "success" => true,
        "message" => "Product deleted successfully.",
        "data" => $chicken
        ]);
    }
}