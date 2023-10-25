app.component('navbar',{
    template:`
        <nav class="navbar navbar-expand-lg bg-light navbar-light">
        <button
                class="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
        >
            <i class="fas fa-bars"></i>
        </button>
        <div class="container justify-content-center">
            <div class="row">
                <div class="col-12 d-flex justify-content-center mb-3">
                    <a class="navbar-brand" href="#"
                    >Book Library</a>
                </div>
                <div class="col-12 d-flex justify-content-center">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav align-items-center mx-auto">
                            <li class="nav-item">

                                <a class="nav-link mx-2" data-mdb-toggle="modal" data-mdb-target="#exampleModal"><i class="fas fa-plus-circle pe-2"></i>Book</a>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                    Sort
                                </a>
                                <!-- Dropdown menu -->
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a class="dropdown-item" href="#">Title</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Category</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <form class="w-auto">
                                    <input type="search" class="form-control" placeholder="Search Book" aria-label="Search">
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    `
});