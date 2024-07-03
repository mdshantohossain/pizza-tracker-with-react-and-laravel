@extends('admin.master')

@section('title', 'Pizza create')

@section('body')
    <div class="row">
        <div class="col-xl-8 mx-auto">
            <div class="card">
                <div class="card-body">
                    <div class="mb-4">
                        <span class="h3">Create pizza</span>
                        <a href="{{ route('food.index') }}" class="btn btn-warning float-end">Back</a>
                    </div>
                    <form action="{{ route('food.store') }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div class="mb-3">
                            <label class="form-label">Category <span class="text-danger">*</span></label>
                            <select name="category_id" class="form-select">
                                <option value="">--select category--</option>
                                @forelse($categories as $category)
                                    <option value="{{ $category->id }}">{{ $category->name }}</option>
                                @empty
                                    <option value="">haven't any category to select</option>
                                @endforelse
                            </select>
                            @error('size')
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>

                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Size <span class="text-danger">*</span></label>
                                    <select name="size" class="form-select">
                                        <option value="">--select size--</option>
                                        <option value="Normal" {{ old('size') == 'Normal' ? 'selected' : '' }}>Normal</option>
                                        <option value="Medium" {{ old('size') == 'Medium' ? 'selected' : '' }}>Medium</option>
                                        <option value="Large" {{ old('size') == 'Large' ? 'selected' : '' }}>Large</option>
                                        <option value="Extra-Large" {{ old('size') == 'Extra-Large' ? 'selected' : '' }}>Extra-Large</option>
                                    </select>
                                    @error('size')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Crust <span class="text-danger">*</span></label>
                                    <select name="crust" class="form-select">
                                        <option value="">--select crust--</option>
                                        <option value="Normal" {{ old('crust') == 'Normal' ? 'selected' : '' }}>Normal</option>
                                        <option value="Thin" {{ old('crust') == 'Medium' ? 'selected' : '' }}>Thin</option>
                                        <option value="Garlic" {{ old('crust') == 'Garlic' ? 'selected' : '' }}>Garlic</option>
                                    </select>
                                    @error('crust')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="name" class="form-label"> Name <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" value="{{ old('name') }}"  name="name" id="name"  placeholder="Pizza's name" />
                            @error('name')
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>

                        <div class="mb-3">
                            <label for="price" class="form-label">Price <span class="text-danger">*</span></label>
                            <input type="text" min="1" class="form-control"  value="{{ old('price') }}" name="price" id="price"  placeholder="Enter price" />
                            @error('price')
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="toppings" class="form-label">Toppings <span class="text-danger">*</span></label>
                            <input type="text" class="form-control"  value="{{ old('toppings') }}" name="toppings" id="toppings"  placeholder="Enter toppings" />
                            @error('toppings')
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>

                        <div class="mb-3">
                            <label for="description" class="form-label"> Description <span class="text-danger">*</span></label>
                            <textarea name="description" class="form-control" id="description" rows="5" placeholder="Enter pizza's description"> {{ old('description') }}</textarea>
                            @error('description')
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>

                        <div class="mb-3">
                            <label for="image" class="form-label"> Image <span class="text-danger">*</span></label>
                            <input type="file" class="form-control"  name="image" id="image" />
                            @error('image')
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

                        <div class="row p-2">
                            <button type="submit" class="btn btn-primary w-md">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

