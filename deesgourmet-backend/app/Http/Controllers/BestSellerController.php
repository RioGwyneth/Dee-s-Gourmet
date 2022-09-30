<?php

namespace App\Http\Controllers;

use App\Models\BestSeller;
use Illuminate\Http\Request;



class BestSellerController extends Controller
{
    public function index()
    {
        $bestseller = BestSeller::all();

        return response() ->json([
            "success" => true,
            "message" => "Best Seller Dishes",
            "data" => $bestseller
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

    $bestseller = BestSeller::create($validatedData);

    return response() ->json([
        "success" => true,
        "message" => "Dish Added Successfully",
        "data" => $bestseller
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
        $bestseller=BestSeller::find($id);
        $bestseller->update($request->all());
        return $bestseller;

    }
    public function destroy(BestSeller $bestseller)
    {
        $bestseller->delete();
        return response()->json([
        "success" => true,
        "message" => "Dish deleted successfully.",
        "data" => $bestseller
        ]);
    }
    public function restore($id)
    {
        
        BestSeller::withTrashed()->find($id)->restore();
        $bestseller = BestSeller::find($id);
        return response()->json(['message' => "Dish Successfully Restored.", 'data' => $bestseller]);
    }
}
