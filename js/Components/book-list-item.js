app.component('BookListItem',{
template:`
            <div class="col-lg-3 col-md-6">
                <div class="card text-center " style="background-color:#ffffff;">
                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src="https://mdbootstrap.com/img/new/standard/nature/111.webp" class="img-fluid" />
                        <a href="#!">
                            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
                        </a>
                    </div>

                    <div class="card-body">
                        <h5 class="card-title flex-row">Card title</h5>
                        <button type="button" class="btn btn-primary m-2 ">Edit</button>
                        <button type="button" class="btn btn-danger m-2 ">Delete</button>
                    </div>
                </div>
            </div>

`
})