@extends('admin.master')

@section('title', 'Category')

@section('body')
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="mb-4">
                        <span class="h4">All Categories</span>
                        <a href="{{ route('category.create') }}" class="btn btn-primary float-end">Create category</a>
                    </div>
                    <div class="table-responsive">
                        <table class="table align-middle table-nowrap mb-0">
                            <thead class="table-light">
                            <tr>
                                <th class="align-middle">Sl.</th>
                                <th class="align-middle">Name</th>
                                <th class="align-middle">Status</th>
                                <th class="align-middle">Action</th>
                            </tr>
                            </thead>
                            <tbody>

                            @foreach($categories as $category)
                                <tr>
                                    <td>{{ $loop->iteration }}</td>
                                    <td>{{ $category->name }}</td>
                                    <td><span class="badge badge-pill badge-soft-{{ $category->status == 1 ? 'success' : 'danger'  }} font-size-11">{{  $category->status == 1 ? 'Active' : 'inactive' }}</span></td>
                                    <td>
                                        <div class="d-flex">
                                            <a href="{{ route('category.edit', $category->slug) }}" class="btn btn-outline-primary btn-sm me-1">
                                                <i class="fa fa-edit"></i>
                                            </a>
                                            <form action="{{ route('category.destroy', $category->slug) }}" method="POST">
                                                @csrf
                                                @method('DELETE')
                                                <button class="btn btn-outline-danger btn-sm" type="submit"  onclick="return confirm('Are you sure to delete?')" >
                                                    <i class="fa fa-trash"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
