@extends('admin.master')

@section('title', 'Blog edit')

@section('body')
    <div class="row">
        <div class="col-xl-8 mx-auto">
            <div class="card">
                <div class="card-body">
                    <div class="mb-4">
                        <span class="h3">Edit blog</span>
                        <a href="{{ route('blog.index') }}" class="btn btn-warning float-end">Back</a>
                    </div>
                    <form action="{{ route('blog.update', $blog->slug) }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')
                        <div class="mb-3">
                            <label for="title" class="form-label"> Title <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" value="{{ $blog->title }}"  name="title" id="title"  placeholder="Blog title" />
                            @error('title')
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label"> Description <span class="text-danger">*</span></label>
                            <textarea name="description" class="form-control" id="description" rows="5" placeholder="Blog description">{{ $blog->description}}</textarea>
                            @error('description')
                                <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="image" class="form-label"> Image <span class="text-danger">*</span></label>
                            <input type="file" class="form-control mb-2" name="image" id="image" />
                            @error('image')
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                            <div>
                                <img src="{{ asset($blog->image) }}" width="240" height="180" class="rounded-2" alt="" />
                            </div>
                        </div>

                        <div class="mb-3">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="status" {{ $blog->status == 1 ? 'checked' : '' }}  id="inlineRadio1" value="1" />
                                <label class="form-check-label" for="inlineRadio1">Active</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="status" {{ $blog->status == 0 ? 'checked' : '' }} id="inlineRadio2" value="0" />
                                <label class="form-check-label" for="inlineRadio2">Disable</label>
                            </div>
                        </div>

                        <div class="row  p-2">
                            <button type="submit" class="btn btn-primary w-md">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

