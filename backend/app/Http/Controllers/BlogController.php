<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BlogController extends Controller
{
    public function index()
    {
        return view('admin.blog.index', [
            'blogs' => Blog::all()
        ]);
    }

    public function create()
    {
        return view('admin.blog.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|unique:blogs',
            'description' => 'required',
            'image' => 'required'
        ]);

        try {
            $inputs = $request->except('_token');
            $inputs['image'] = $this->getImageUrl($request->file('image'), 'assets/images/blog-images/');
            $inputs['slug'] = strtolower(str_replace(' ', '-', $inputs['title']).'-'. Str::random(22). '-'. Str::random(16));
            Blog::create($inputs);
            return to_route('blog.index')->with('success', 'Blog created successfully.');

        } catch (\Exception $e) {
            return back()->withErrors('error', $e->getMessage());
        }
    }

    public function edit(string $slug)
    {
        return view('admin.blog.edit', [
            'blog' => Blog::where('slug', $slug)->firstOrFail()
        ]);
    }

    public function update(Request $request, string $slug): RedirectResponse
    {
        try {
            if ($request->title !== $request->title) {
                $request->validate([
                    'title' => 'required|unique:blogs',
                ]);
            }
            $blog = Blog::where('slug', $slug)->firstOrFail();

            $inputs = $request->except('_token');
            if ($request->hasFile('image')) {
                if (file_exists($blog->image)) {
                    unlink($blog->image);
                }
                $inputs['image'] = $this->getImageUrl($request->file('image'), 'assets/images/blog-images/');
            }
            $inputs['slug'] = strtolower(str_replace(' ', '-', $inputs['title']).'-'. Str::random(22). '-'. Str::random(16));

            $blog->update($inputs);
            return to_route('blog.index')->with('success', 'Blog updated successfully.');

        } catch (\Exception $e) {
            return back()->withErrors('error', $e->getMessage());
        }
    }

    public function destroy(string $slug): RedirectResponse
    {
        $blog = Blog::where('slug', $slug)->first();
        if (file_exists($blog->image)){
            unlink($blog->image);
        }

        $blog->delete();

        return back()->with('success', 'Blog deleted successful');
    }
}
