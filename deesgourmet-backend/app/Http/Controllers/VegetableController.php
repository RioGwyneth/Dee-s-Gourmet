<?php

namespace App\Http\Controllers;

use App\Models\Vegetable;
use Illuminate\Http\Request;

class VegetableController extends Controller
{
    public function index()
    {
        $vegetable = Vegetable::all();

        return response() ->json([
            "success" => true,
            "message" => "Vegetables",
            "data" => $vegetable
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

    $vegetable = Vegetable::create($validatedData);

    return response() ->json([
        "success" => true,
        "message" => "Dish Added Successfully",
        "data" => $vegetable
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
        $vegetable=Vegetable::find($id);
        $vegetable->update($request->all());
        return $vegetable;

    }
    public function destroy(Vegetable $vegetable)
    {
        $vegetable->delete();
        return response()->json([
        "success" => true,
        "message" => "Product deleted successfully.",
        "data" => $vegetable
        ]);
    }
    public function restore($id)
    {
        
        Vegetable::withTrashed()->find($id)->restore();
        $vegetable = Vegetable::find($id);
        return response()->json(['message' => "Dish Successfully Restored.", 'data' => $vegetable]);
    }
}
