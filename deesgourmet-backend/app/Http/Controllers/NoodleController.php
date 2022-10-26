<?php

namespace App\Http\Controllers;

use App\Models\Noodle;
use Illuminate\Http\Request;

class NoodleController extends Controller
{
    public function index()
    {
        $noodle = Noodle::all();

        return response() ->json([
            "success" => true,
            "message" => "Noodles",
            "data" => $noodle
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

    $noodle = Noodle::create($validatedData);

    return response() ->json([
        "success" => true,
        "message" => "Dish Added Successfully",
        "data" => $noodle
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
        $noodle=Noodle::find($id);
        $noodle->update($request->all());
        return $noodle;

    }
    public function destroy(Noodle $noodle)
    {
        $noodle->delete();
        return response()->json([
        "success" => true,
        "message" => "Product deleted successfully.",
        "data" => $noodle
        ]);
    }
    public function restore($id)
    {
        
        Noodle::withTrashed()->find($id)->restore();
        $noodle = Noodle::find($id);
        return response()->json(['message' => "Dish Successfully Restored.", 'data' => $noodle]);
    }
}
