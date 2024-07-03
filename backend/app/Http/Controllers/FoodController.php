<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Food;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class FoodController extends Controller
{

    public function index()
    {
        return view('admin.food.index', [
            'foods' => Food::all()
        ]);
    }

    public function create()
    {
        return view('admin.food.create', [
            'categories' => Category::where('status', 1)->get(),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required',
            'price' => 'required|numeric',
            'size' => 'required',
            'crust' => 'required',
            'toppings' => 'required',
            'description' => 'required',
            'image' => 'required|image',
        ]);

        try {
            $inputs = $request->except('_token');
            $inputs['toppings'] = json_encode($inputs['toppings']);
            $inputs['image'] = $this->getImageUrl($request->file('image'), 'assets/images/food-images/');
            $inputs['slug'] = strtolower(str_replace(' ', '-', $inputs['name']). '-'. Str::random(15));

            Food::create($inputs);
            return to_route('food.index')->with('success', 'Pizza created successfully.');

        } catch (\Exception $e) {
            return back()->withErrors('error', $e->getMessage());
        }
    }

    public function edit(string $slug)
    {
        return view('admin.food.edit', [
            'food' => Food::where('slug', $slug)->firstOrFail()
        ]);
    }

    public function update(Request $request, string $slug): RedirectResponse
    {
        $request->validate([
            'name' => 'required',
            'price' => 'required|numeric',
            'size' => 'required',
            'crust' => 'required',
            'toppings' => 'required',
            'description' => 'required',
        ]);

        try {

            $food = Food::where('slug', $slug)->first();

            $inputs = $request->except('_token');
            $inputs['toppings'] = json_encode($inputs['toppings']);

            if($request->name != $food->name) {
                $inputs['slug'] = strtolower(str_replace(' ', '-', $inputs['name']). '-'. Str::random(15));
            }

            if ($request->hasFile('image')) {

                if (file_exists($food->image)) {
                    unlink($food->image);
                }
                $inputs['image'] = $this->getImageUrl($request->file('image'), 'assets/images/food-images/');
            }

            $food->update($inputs);

            return to_route('food.index')->with('success', 'Pizza updated successfully.');
        } catch (\Exception $e) {
            return back()->withErrors('error', $e->getMessage());
        }
    }

    public function destroy(string $slug): RedirectResponse
    {
        $pizza = Food::where('slug', $slug)->first();

        if (file_exists($pizza->image)) {
            unlink($pizza->image);
        }
        $pizza->delete();

        return back()->with('Pizza deleted successful');
    }
}
