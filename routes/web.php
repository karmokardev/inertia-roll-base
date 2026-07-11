<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\UsersController;
use App\Http\Controllers\Frontand\HomeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\MembershipController;
use App\Http\Controllers\Admin\MembershipApprovalController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;


Route::get('/', [HomeController::class, 'index'])->name('home');

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::inertia('dashboard', 'dashboard')->name('dashboard');
// });
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // users - admin only
    Route::middleware(['admin'])->group(function () {
        Route::get('/users', [UsersController::class, 'index'])->name('users');
        Route::get('/users/{user}/edit', [UsersController::class, 'edit'])->name('users.edit');
        Route::put('/users/{user}', [UsersController::class, 'update'])->name('users.update');
        Route::patch('/users/{user}/status', [UsersController::class, 'updateStatus'])->name('users.status');
        Route::delete('/users/{user}', [UsersController::class, 'destroy'])->name('users.destroy');
    });

});





Route::post('/logout', function () {
    Auth::logout();
    request()->session()->invalidate();
    request()->session()->regenerateToken();
    return redirect('/');
})->name('logout');

require __DIR__ . '/settings.php';
