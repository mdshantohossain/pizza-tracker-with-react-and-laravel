@extends('admin.master')

@section('title', 'Blog')

@section('body')
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="mb-4">
                        <span class="h4">All Blogs</span>
                        <a href="{{ route('blog.create') }}" class="btn btn-primary float-end">Add blog</a>
                    </div>
                    <div class="table-responsive">
                        <table class="table align-middle table-nowrap mb-0">
                            <thead class="table-light">
                            <tr>
                                <th class="align-middle">Sl.</th>
                                <th class="align-middle">Name</th>
                                <th class="align-middle">Description</th>
                                <th class="align-middle">Image</th>
                                <th class="align-middle">Status</th>
                                <th class="align-middle">Action</th>
                            </tr>
                            </thead>
                            <tbody>

                            @foreach($blogs as $blog)
                                <tr>
                                    <td>{{ $loop->iteration }}</td>
                                    <td>{{ $blog->title }}</td>
                                    <td>{!! strlen($blog->description) > 60 ? substr($blog->description, 0, 60). '...' : $blog->description !!}</td>
                                    <td>
                                        <img src="{{ asset($blog->image) }}" class="rounded-2" width="100" height="80" alt="" />
                                    </td>
                                    <td><span class="badge badge-pill badge-soft-{{ $blog->status == 1 ? 'success' : 'danger'  }} font-size-11">{{  $blog->status == 1 ? 'Active' : 'Disabled' }}</span></td>
                                    <td>
                                        <div class="d-flex">
                                            <a href="{{ route('blog.edit', $blog->slug) }}" class="btn btn-outline-primary btn-sm me-1">
                                                <i class="fa fa-edit"></i>
                                            </a>
                                            <a href="{{ route('blog.edit', $blog->slug) }}" class="btn btn-outline-primary btn-sm me-1">
                                                <i class="fa fa-book-open"></i>
                                            </a>
                                            <form action="{{ route('blog.destroy', $blog->slug) }}" method="POST">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" onclick="return confirm('Are you sure to delete?')" class="btn btn-outline-danger btn-sm"><i class="fa fa-trash"></i></button>
                                            </form>
                                        </div>
{{--                                        <a href="{{ route('blog.destroy', $blog->slug) }}"  onclick="confirm('Are you sure to delete?')" class="btn btn-outline-danger btn-sm">--}}
{{--                                            <i class="fa fa-trash"></i>--}}
{{--                                        </a>--}}
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
