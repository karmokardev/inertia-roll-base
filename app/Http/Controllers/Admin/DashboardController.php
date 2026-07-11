<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        if ($user->hasRole('admin')) {
            return inertia('dashboard', [
                'user' => $user,
                'role' => 'admin',
                'users' => User::with('roles')->get(),
                'stats' => [
                    'admin' => User::role('admin')->count(),
                    'member' => User::role('member')->count(),
                    'volunteer' => User::role('volunteer')->count(),
                    'instructor' => User::role('instructor')->count(),
                    'student' => User::role('student')->count(),
                ]
            ]);
        }

        if ($user->hasRole('member')) {
            return inertia('dashboard', [
                'user' => $user,
                'role' => 'member',
            ]);
        }

        // Default for other roles
        return inertia('dashboard', [
            'user' => $user,
            'role' => 'user',
        ]);
    }

    public function users()
    {
        $users = User::with('roles')->get();

        return inertia('users', [
            'users' => $users,
        ]);
    }
}
