<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class chicken extends Model
{
    use HasFactory;
    protected $fillable = [
        'dish_name',
        'image',
        'price_med',
        'price_full'
    ];
}
