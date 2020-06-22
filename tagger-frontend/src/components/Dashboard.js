import React, { useState, useEffect, Fragment } from 'react';

const Dashboard = ({ user }) => {


    return (
        <Fragment>
        <div class="container">
            <div class="my-3 p-3 bg-white rounded shadow-sm">

                <h6 class="border-bottom border-gray pb-2 mb-0">Google Drive Folders</h6>


                <div class="media text-muted pt-3">
                    <h2 className="d-flex mr-3">
                <i class="far fa-folder  "></i></h2>
                    {/* <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff" /><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg> */}
                    <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <strong class="d-block text-gray-dark">Folder Name</strong>
        <em>last synced: 12:00 today</em>
      </p>
                </div>



                <div class="media text-muted pt-3">
                    <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c" /><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>
                    <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <strong class="d-block text-gray-dark">@username</strong>
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      </p>
                </div>
                <div class="media text-muted pt-3">
                    <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title> <i class="far fa-folder"></i></title><rect width="100%" height="100%" fill="#6f42c1" /><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>
                    <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <strong class="d-block text-gray-dark">@username</strong>
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      </p>
                </div>
                <small class="d-block text-right mt-3">
                    <a href="#">All updates</a>
                </small>
            </div>
            {/* <div >
                <a href='/login'> Login </a>
                <a href='/logout'> Logout </a>
                <div>{user}</div>
                <a href="/get_evernote_tags"> All tags</a>
            </div> */}
        </div >
  

        </Fragment>
    )
}

export default Dashboard