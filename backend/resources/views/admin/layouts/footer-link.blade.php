<!-- JAVASCRIPT -->
<script src="{{asset('/')}}assets/libs/jquery/jquery.min.js"></script>
<script src="{{asset('/')}}assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="{{asset('/')}}assets/libs/metismenu/metisMenu.min.js"></script>
<script src="{{asset('/')}}assets/libs/simplebar/simplebar.min.js"></script>
<script src="{{asset('/')}}assets/libs/node-waves/waves.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
<script src="{{asset('/')}}assets/libs/apexcharts/apexcharts.min.js"></script>

<!-- dashboard init -->
<script src="{{asset('/')}}assets/js/pages/dashboard.init.js"></script>

<!-- App js -->
<script src="{{asset('/')}}assets/js/app.js"></script>

@if(Session::has('success'))
    <script>
        toastr.success('{{ session('success') }}');
    </script>
@endif
@if(Session::has('warning'))
     <script>
        toastr.warning('{{ session('warning') }}');
    </script>

@endif
@if(Session::has('danger'))
     <script>
        toastr.danger('{{ session('danger') }}');
    </script>

@endif
@if(Session::has('error'))
     <script>
        toastr.error('{{ session('error') }}');
    </script>

@endif
<script>
    $('#logoutBtn').click(function (){
        if(confirm('Are you sure to logout?')) {
          $('#logoutForm').submit();
        }
    });
</script>

@stack('scripts')
