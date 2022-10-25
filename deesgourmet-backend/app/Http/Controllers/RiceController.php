<?php

namespace App\Http\Controllers;

use App\Models\Rice;
use Illuminate\Http\Request;

class RiceController extends Controller
{
    public function index()
    {
        $rice = Rice::all();

        return response() ->json([
            "success" => true,
            "message" => "Rice",
            "data" => $rice
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

    $rice = Rice::create($validatedData);

    return response() ->json([
        "success" => true,
        "message" => "Dish Added Successfully",
        "data" => $rice
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
        $rice=Rice::find($id);
        $rice->update($request->all());
        return $rice;

    }
    public function destroy(Rice $rice)
    {
        $rice->delete();
        return response()->json([
        "success" => true,
        "message" => "Product deleted successfully.",
        "data" => $rice
        ]);
    }
    public function restore($id)
    {
        
        Rice::withTrashed()->find($id)->restore();
        $rice = Rice::find($id);
        return response()->json(['message' => "Dish Successfully Restored.", 'data' => $rice]);
    }
}
