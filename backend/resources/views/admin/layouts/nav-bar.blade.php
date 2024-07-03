<div id="sidebar-menu">
    <!-- Left Menu Start -->
    <ul class="metismenu list-unstyled" id="side-menu">
        <li class="menu-title" key="t-menu">Menu</li>

        <li>
            <a href="{{ route('dashboard') }}" class="waves-effect">
                <i class="bx bx-home-circle"></i>
                <span key="t-dashboards">Dashboards</span>
            </a>
        </li>


        <li>
            <a href="javascript: void(0);" class="has-arrow waves-effect">
                <i class="bx bx-store"></i>
                <span key="t-tasks">Food module</span>
            </a>
            <ul class="sub-menu" aria-expanded="false">
                <li><a href="{{ route('category.index') }}" key="t-task-list">Category manage</a></li>
                <li><a href="{{ route('food.index') }}" key="t-kanban-board">Food manage</a></li>
            </ul>
        </li>


        <li>
            <a href="javascript: void(0);" class="has-arrow waves-effect">
                <i class="bx bx-task"></i>
                <span key="t-tasks">Order module</span>
            </a>
            <ul class="sub-menu" aria-expanded="false">
                <li><a href="tasks-list.html" key="t-task-list">Task List</a></li>
                <li><a href="tasks-kanban.html" key="t-kanban-board">Kanban Board</a></li>
                <li><a href="tasks-create.html" key="t-create-task">Create Task</a></li>
            </ul>
        </li>

        <li>
            <a href="{{ route('blog.index') }}" class="waves-effect">
                <i class="bx bx-heart"></i>
                <span key="t-tasks">Blog module</span>
            </a>
{{--            <ul class="sub-menu" aria-expanded="false">--}}
{{--                <li><a href="tasks-list.html" key="t-task-list">Task List</a></li>--}}
{{--                <li><a href="tasks-kanban.html" key="t-kanban-board">Kanban Board</a></li>--}}
{{--                <li><a href="tasks-create.html" key="t-create-task">Create Task</a></li>--}}
{{--            </ul>--}}
        </li>

        <li>
            <a href="{{ route('chief.index') }}" class="waves-effect">
                <i class="bx bxs-user-detail"></i>
                <span key="t-contacts">Chief manage</span>
            </a>
        </li>
        <li>
            <a href="javascript: void(0);" class="has-arrow waves-effect">
                <i class="bx bx-envelope"></i>
                <span key="t-email">Email</span>
            </a>
            <ul class="sub-menu" aria-expanded="false">
                <li><a href="email-inbox.html" key="t-inbox">Single email</a></li>
                <li><a href="email-read.html" key="t-read-email">Multiple mail</a></li>
            </ul>
        </li>
        <li>
            <a href="javascript: void(0);" class="has-arrow waves-effect">
                <i class="bx bx-user-circle"></i>
                <span key="t-authentication">User module</span>
            </a>
            <ul class="sub-menu" aria-expanded="false">
                <li><a href="auth-login.html" key="t-login">Permission Manage</a></li>
                <li><a href="auth-login-2.html" key="t-login-2">Role manage</a></li>
                <li><a href="auth-login-2.html" key="t-login-2">User manage</a></li>
            </ul>
        </li>



    </ul>
</div>
