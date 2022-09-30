<?php

namespace App\Http\Controllers;

use App\Models\Appetizer;
use Illuminate\Http\Request;

class AppetizerController extends Controller
{
    public function index()
    {
        $appetizer = Appetizer::all();

        return response() ->json([
            "success" => true,
            "message" => "Best Seller Dishes",
            "data" => $appetizer
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

    $appetizer = Appetizer::create($validatedData);

    return response() ->json([
        "success" => true,
        "message" => "Dish Added Successfully",
        "data" => $appetizer
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
        $appetizer=Appetizer::find($id);
        $appetizer->update($request->all());
        return $appetizer;

    }
    public function destroy(Appetizer $appetizer)
    {
        $appetizer->delete();
        return response()->json([
        "success" => true,
        "message" => "Product deleted successfully.",
        "data" => $appetizer
        ]);
    }
    public function restore($id)
    {
        
        Appetizer::withTrashed()->find($id)->restore();
        $appetizer = Appetizer::find($id);
        return response()->json(['message' => "Dish Successfully Restored.", 'data' => $appetizer]);
    }
}
