@extends('admin.master')

@section('title', 'Food')

@section('body')
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="mb-4">
                        <span class="h4">All Foods</span>
                        <a href="{{ route('food.create') }}" class="btn btn-primary float-end">Create food</a>
                    </div>
                    <div class="table-responsive">
                        <table class="table align-middle table-nowrap mb-0">
                            <thead class="table-light">
                            <tr>
                                <th class="align-middle">Sl.</th>
                                <th class="align-middle">Name</th>
                                <th class="align-middle">Size</th>
                                <th class="align-middle">Price</th>
                                <th class="align-middle">Crust</th>
                                <th class="align-middle">Image</th>
                                <th class="align-middle">Status</th>
                                <th class="align-middle">Action</th>
                            </tr>
                            </thead>
                            <tbody>

                                @foreach($foods as $food)
                                     <tr>
                                        <td>{{ $loop->iteration }}</td>
                                        <td>{{ strlen($food->name) > 30 ? $food->name. '...' : $food->name }}</td>
                                        <td>{{ $food->size }}</td>
                                        <td>{{ $food->price }}</td>
                                        <td>{{ $food->crust }}</td>
                                        <td>
                                            <img src="{{ asset($food->image) }}" class="rounded-2" width="100" height="80" alt="pizza's image" />
                                        </td>
                                        <td><span class="badge badge-pill badge-soft-{{ $food->status == 1 ? 'success' : 'danger'  }} font-size-11">{{  $food->status == 1 ? 'Active' : 'inactive' }}</span></td>
                                        <td>
                                            <div class="d-flex">
                                                <a href="{{ route('food.edit', $food->slug) }}" class="btn btn-outline-primary btn-sm me-1">
                                                    <i class="fa fa-edit"></i>
                                                </a>
                                                <form action="{{ route('food.destroy', $food->slug) }}" method="POST">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="btn btn-outline-danger btn-sm" onclick="return confirm('Are you sure to delete?')">
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
                    <!-- end table-responsive -->
                </div>
            </div>
        </div>
    </div>
@endsection
