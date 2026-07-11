<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        // ======================
        // 1. SINGLE ADMIN
        // ======================
        $admin = User::factory()->create([
            'username' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('12345678'),
        ]);

        $admin->assignRole('admin');

        // ======================
        // 2. OTHER ROLES (10 each)
        // ======================
        $roles = ['member', 'volunteer', 'instructor', 'student'];

        foreach ($roles as $role) {
            for ($i = 1; $i <= 10; $i++) {

                $user = User::factory()->create([
                    'username' => ucfirst($role) . ' ' . $i,
                    'phone' => '01' . rand(300000000, 999999999),
                    'password' => bcrypt('12345678'),
                ]);

                $user->assignRole($role);
            }
        }
    }
}
