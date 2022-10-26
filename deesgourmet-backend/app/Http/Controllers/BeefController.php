<?php

namespace App\Http\Controllers;

use App\Models\Beef;
use Illuminate\Http\Request;

class BeefController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $beef = Beef::all();

        return response() ->json([
            "success" => true,
            "message" => "Beef",
            "data" => $beef
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'dish_name' => 'required|max:20',
            'image' => 'nullable',
            'price_med' => 'required',
            'price_full' => 'required',
    
        ]);
    
        $beef = Beef::create($validatedData);
    
        return response() ->json([
            "success" => true,
            "message" => "Dish Added Successfully",
            "data" => $beef
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $beef=Beef::find($id);
        $beef->update($request->all());
        return $beef;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Beef $beef)
    {
        $beef->delete();
        return response()->json([
        "success" => true,
        "message" => "Product deleted successfully.",
        "data" => $beef
        ]);
    }
    public function restore($id)
    {
        
        Beef::withTrashed()->find($id)->restore();
        $beef = Beef::find($id);
        return response()->json(['message' => "Dish Successfully Restored.", 'data' => $beef]);
    }
}
