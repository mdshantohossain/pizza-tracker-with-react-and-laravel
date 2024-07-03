@extends('admin.master')

@section('title', 'Chief edit')

@section('body')
    <div class="row">
        <div class="col-xl-8 mx-auto">
            <div class="card">
                <div class="card-body">
                    <div class="mb-4">
                        <span class="h3">Edit chief</span>
                        <a href="{{ route('chief.index') }}" class="btn btn-warning float-end">Back</a>
                    </div>
                    <form action="{{ route('chief.update', $chief->slug) }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')
                        <div class="mb-3">
                            <label for="name" class="form-label"> Name <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" value="{{ $chief->name }}"  name="name" id="name"  placeholder="Chief's name" />
                            @error('name')
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>

                        <div class="mb-3">
                            <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
                            <input type="email" min="1" class="form-control" readonly value="{{ $chief->email }}" name="email" id="email"  placeholder="Chief's email" />
                            @error('email')
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="form-label">Phone <span class="text-danger">*</span></label>
                            <input type="tel" min="1" class="form-control" readonly value="{{ $chief->phone }}" name="phone" id="phone"  placeholder="Chief's phone" />
                            @error('phone')
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="position" class="form-label">Position <span class="text-danger">*</span></label>
                            <input type="text" min="1" class="form-control"  value="{{ $chief->position }}" name="position" id="position"  placeholder="Example: Head Of Chief" />
                            @error('position')
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>

                        <div class="mb-3">
                            <label for="image" class="form-label"> Image <span class="text-danger">*</span></label>
                            <input type="file" class="form-control mb-2"  name="image" id="image" />
                            @error('image')
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                            <img src="{{ asset($chief->image) }}" class="rounded-2" width="220" height="160" alt="chief-images" />
                        </div>
                        <div class="mb-3">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="status" {{ $chief->status == 1 ? 'checked' : '' }} checked id="inlineRadio1" value="1" />
                                <label class="form-check-label" for="inlineRadio1">Active</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="status" {{ $chief->status == 0 ? 'checked' : '' }} id="inlineRadio2" value="0" />
                                <label class="form-check-label" for="inlineRadio2">Inactive</label>
                            </div>
                        </div>

                        <div class="row p-2">
                            <button type="submit" class="btn btn-primary w-md">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
