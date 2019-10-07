<?php


namespace App\Helpers;


use Illuminate\Support\Facades\Auth;

class Permission
{
    public static function isAdmin()
    {
        if (Auth::check()) {
            return auth()->user()->hasRole('Admin');
        }
        return false;
    }
}
