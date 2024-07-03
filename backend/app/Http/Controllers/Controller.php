<?php

namespace App\Http\Controllers;

abstract class Controller
{
    public function getImageUrl($image, string $path)
    {
        $imageName = rand(111111111, 999999999) . '_'. time().'.'. $image->getClientOriginalExtension();
        $image->move($path, $imageName);
        return $path. $imageName;
    }
}
