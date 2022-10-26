<?php

namespace App\Http\Controllers;

use App\Models\Pork;
use Illuminate\Http\Request;

class PorkController extends Controller
{
    public function index()
    {
        $pork = Pork::all();

        return response() ->json([
            "success" => true,
            "message" => "Pork",
            "data" => $pork
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

    $pork = Pork::create($validatedData);

    return response() ->json([
        "success" => true,
        "message" => "Dish Added Successfully",
        "data" => $pork
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
        $pork=Pork::find($id);
        $pork->update($request->all());
        return $pork;

    }
    public function destroy(Pork $pork)
    {
        $pork->delete();
        return response()->json([
        "success" => true,
        "message" => "Product deleted successfully.",
        "data" => $pork
        ]);
    }
    public function restore($id)
    {
        
        Pork::withTrashed()->find($id)->restore();
        $pork = Pork::find($id);
        return response()->json(['message' => "Dish Successfully Restored.", 'data' => $pork]);
    }
}
