<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Traits\HasRoles;

class UsersTableSeeder extends Seeder
{
    use HasRoles;
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::find(1);

        $user->assignRole('Admin');
    }
}
