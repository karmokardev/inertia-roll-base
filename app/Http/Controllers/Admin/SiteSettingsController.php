<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class SiteSettingsController extends Controller
{
    /**
     * Display all site settings
     */
    public function index()
    {
        $settings = Setting::all()->keyBy('key');
        
        return inertia('admin/settings/general/index', [
            'settings' => $settings,
        ]);
    }

    /**
     * Store a new setting
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'key' => 'required|string|max:255|unique:settings,key',
            'value' => 'required|string',
            'type' => 'required|in:text,number,boolean,json,image,file,textarea',
            'status' => 'sometimes|in:active,inactive',
        ]);

        $validated['status'] = $validated['status'] ?? 'active';

        Setting::create($validated);

        return back()->with('success', 'Setting created successfully.');
    }

    /**
     * Update a setting
     */
    public function update(Request $request, string $key)
    {
        $setting = Setting::where('key', $key)->firstOrFail();

        $validated = $request->validate([
            'value' => 'required|string',
            'type' => 'sometimes|in:text,number,boolean,json,image,file,textarea',
            'status' => 'sometimes|in:active,inactive',
        ]);

        // Handle image upload if type is image
        if ($setting->type === 'image' || (isset($validated['type']) && $validated['type'] === 'image')) {
            if ($request->hasFile('value')) {
                $this->deleteOldImage($key);
                $path = $request->file('value')->store('settings', 'public');
                $validated['value'] = '/storage/' . $path;
            }
        }

        // Handle file upload if type is file
        if ($setting->type === 'file' || (isset($validated['type']) && $validated['type'] === 'file')) {
            if ($request->hasFile('value')) {
                $this->deleteOldImage($key);
                $path = $request->file('value')->store('settings', 'public');
                $validated['value'] = '/storage/' . $path;
            }
        }

        $setting->update($validated);

        return back()->with('success', 'Setting updated successfully.');
    }

    /**
     * Delete a setting
     */
    public function destroy(string $key)
    {
        $setting = Setting::where('key', $key)->firstOrFail();

        // Delete image file if exists
        if ($setting->type === 'image' && str_starts_with($setting->value, '/storage/')) {
            $oldPath = str_replace('/storage/', '', $setting->value);
            if (Storage::disk('public')->exists($oldPath)) {
                Storage::disk('public')->delete($oldPath);
            }
        }

        $setting->delete();

        return back()->with('success', 'Setting deleted successfully.');
    }

    /**
     * Delete old image file
     */
    private function deleteOldImage(string $key): void
    {
        $oldValue = Setting::get($key);
        
        if ($oldValue && str_starts_with($oldValue, '/storage/')) {
            $oldPath = str_replace('/storage/', '', $oldValue);
            
            if (Storage::disk('public')->exists($oldPath)) {
                Storage::disk('public')->delete($oldPath);
            }
        }
    }
}
