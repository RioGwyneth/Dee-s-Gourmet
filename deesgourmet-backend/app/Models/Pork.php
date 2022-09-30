<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Pork extends Model
{
    use SoftDeletes,
    HasFactory;
    protected $fillable = [
        'dish_name',
        'image',
        'price_med',
        'price_full'
    ];
}
