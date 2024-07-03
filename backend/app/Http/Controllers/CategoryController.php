<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    public function index()
    {
        return view('admin.category.index', [
            'categories' => Category::all()
        ]);
    }

    public function create()
    {
        return view('admin.category.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:categories',
        ]);

        try {
            $inputs = $request->except('_token');
            $inputs['slug'] = strtolower(str_replace(' ', '-', $inputs['name']).'-'. Str::random(12). '-'. Str::random(12));

            Category::create($inputs);
            return to_route('category.index')->with('success', 'Category created successfully.');

        } catch (\Exception $e) {
            return back()->withErrors('error', $e->getMessage());
        }
    }

    public function edit(string $slug)
    {
        return view('admin.category.edit', [
            'category' => Category::where('slug', $slug)->firstOrFail()
        ]);
    }

    public function update(Request $request, string $slug): RedirectResponse
    {
        $category = Category::where('slug', $slug)->first();
        $inputs = $request->except('_token');

        if ($category->name !== $request->input('name')){
            $request->validate([
                'name' => 'required|unique:categories',
            ]);
            $inputs['slug'] = strtolower(str_replace(' ', '-', $inputs['name']).'-'. Str::random(12). '-'. Str::random(12));
        }

        try {
            $category->update($inputs);

            return to_route('category.index')->with('success', 'Category updated successfully.');
        } catch (\Exception $e) {
            return back()->withErrors('error', $e->getMessage());
        }
    }

    public function destroy(string $slug): RedirectResponse
    {
        $category = Category::where('slug', $slug)->first();

        $category->delete();

        return back()->with('success', 'Category deleted successful');
    }
}
