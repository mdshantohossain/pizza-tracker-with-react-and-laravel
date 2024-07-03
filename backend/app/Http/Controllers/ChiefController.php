<?php

namespace App\Http\Controllers;

use App\Models\Chief;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\View\View;

class ChiefController extends Controller
{
    public function index()
    {
        return view('admin.chief.index', [
            'chiefs' => Chief::orderBy('id', 'DESC')->get()
        ]);
    }

    public function create()
    {
        return view('admin.chief.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:chiefs,email',
            'phone' => [ 'required', 'unique:chiefs,phone', 'regex:/^[0-9]{11}$/'],
            'position' => 'required',
            'image' => 'required|image'
        ]);

        try {

            $inputs = $request->except('_token');

            $inputs['image'] = $this->getImageUrl($request->file('image'), 'assets/images/chief-images/');
            $inputs['slug'] = strtolower(str_replace(' ', '-', $inputs['name']). '-'. Str::random(22));

            Chief::create($inputs);

            return to_route('chief.index')->with('success', 'Chief created successful');

        } catch(\Exception $e) {
            return back()->with('error', $e->getMessage());
        }
    }

    public function edit(string $slug)
    {
        return view('admin.chief.edit', [
            'chief' => Chief::where('slug', $slug)->first()
        ]);
    }

    public function update(Request $request, string $slug): RedirectResponse
    {
        $request->validate([
            'name' => 'required',
            'position' => 'required',
        ]);

        try {
            $chief = Chief::where('slug', $slug)->first();

            $inputs = $request->except('_token');
            if($request->hasFile('image')) {
                if(file_exists($chief->image)) {
                    unlink($chief->image);
                }
                $inputs['image'] = $this->getImageUrl($request->file('image'), 'assets/images/chief-images/');
            }
            if($chief->name != $request->name) {
                 $inputs['slug'] = strtolower(str_replace(' ', '-', $inputs['name']). '-'. Str::random(22));
            }
            $chief->update($inputs);

            return to_route('chief.index')->with('success', 'Chief updated successful');

        } catch(\Exception $e) {
            return back()->with('error', $e->getMessage());
        }
    }

    public function destroy(string $slug): RedirectResponse
    {
        $chief = Chief::where('slug', $slug)->first();

        if(file_exists($chief->image)) {
            unlink($chief->image);
        }
        $chief->delete();

        return back()->with('success', 'Chief deleted successful');
    }
}
