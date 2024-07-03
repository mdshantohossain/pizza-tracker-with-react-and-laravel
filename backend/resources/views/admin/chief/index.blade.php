@extends('admin.master')

@section('title', 'Chief')

@section('body')
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="mb-4">
                        <span class="h4">All Chief</span>
                        <a href="{{ route('chief.create') }}" class="btn btn-primary float-end">Create chief</a>
                    </div>
                    <div class="table-responsive">
                        <table class="table align-middle table-nowrap mb-0">
                            <thead class="table-light">
                            <tr>
                                <th class="align-middle">Sl.</th>
                                <th class="align-middle">Name</th>
                                <th class="align-middle">Contact Info</th>
                                <th class="align-middle">Position</th>
                                <th class="align-middle">Image</th>
                                <th class="align-middle">Status</th>
                                <th class="align-middle">Action</th>
                            </tr>
                            </thead>
                            <tbody>

                                @foreach($chiefs as $chief)
                                     <tr>
                                        <td>{{ $loop->iteration }}</td>
                                        <td>{{ $chief->name }}</td>
                                        <td>{{ $chief->email }}<br>{{ '('. $chief->phone. ')' }}</td>
                                        <td>{{ $chief->position }}</td>
                                        <td>
                                            <img src="{{ asset($chief->image) }}" width="100" height="80" alt="pizza's image" />
                                        </td>
                                        <td><span class="badge badge-pill badge-soft-{{ $chief->status == 1 ? 'success' : 'danger'  }} font-size-11">{{  $chief->status == 1 ? 'Active' : 'inactive' }}</span></td>
                                        <td>
                                            <div class="d-flex">
                                                <a href="{{ route('chief.edit', $chief->slug) }}" class="btn btn-outline-primary btn-sm">
                                                    <i class="fa fa-edit"></i>
                                                </a>
                                                <form action="{{ route('chief.destroy', $chief->slug) }}" method="POST">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" onclick="return confirm('Are you sure to delete?')" class="btn btn-outline-danger btn-sm"><i class="fa fa-trash"></i></button>
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
