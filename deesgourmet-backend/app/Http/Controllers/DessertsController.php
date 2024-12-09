<?php

namespace App\Http\Controllers;

use App\Models\Desserts;
use Illuminate\Http\Request;

class DessertsController extends Controller
{
    public function index()
    {
        $dessert = Desserts::all();

        return response() ->json([
            "success" => true,
            "message" => "Dessert",
            "data" => $dessert
        ]);
    }
    public function store(Request $request)
    {
    $validatedData = $request->validate([
        'dish_name' => 'required|max:20',
        'image' => 'nullable',
        'price_med' => 'required',
        'price_full' => 'required',

    ]);

    $dessert = Desserts::create($validatedData);

    return response() ->json([
        "success" => true,
        "message" => "Dish Added Successfully",
        "data" => $dessert
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
        $dessert=Desserts::find($id);
        $dessert->update($request->all());
        return $dessert;

    }
    public function destroy(Desserts $dessert)
    {
        $dessert->delete();
        return response()->json([
        "success" => true,
        "message" => "Product deleted successfully.",
        "data" => $dessert
        ]);
    }
    // public function restore($id)
    // {
        
    //     Desserts::withTrashed()->find($id)->restore();
    //     $dessert = Desserts::find($id);
    //     return response()->json(['message' => "Dish Successfully Restored.", 'data' => $dessert]);
    // }
}
