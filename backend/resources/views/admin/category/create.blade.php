@extends('admin.master')

@section('title', 'Category create')

@section('body')
    <div class="row">
        <div class="col-xl-8 mx-auto">
            <div class="card">
                <div class="card-body">
                    <div class="mb-4">
                        <span class="h3">Create category</span>
                        <a href="{{ route('category.index') }}" class="btn btn-warning float-end">Back</a>
                    </div>
                    <form action="{{ route('category.store') }}" method="POST">
                        @csrf
                        <div class="mb-3">
                            <label for="name" class="form-label"> Name <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" value="{{ old('name') }}"  name="name" id="name"  placeholder="Category name" />
                            @error('name')
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>

                        <div class="mb-3">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="status" checked id="inlineRadio1" value="1" />
                                <label class="form-check-label" for="inlineRadio1">Active</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="status" id="inlineRadio2" value="0" />
                                <label class="form-check-label" for="inlineRadio2">Inactive</label>
                            </div>
                        </div>

                        <div class="mt-4">
                            <button type="submit" class="btn btn-primary w-md">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

