import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './Error404.css';

const Error404 = () => {
    return (
        <>

            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Bootstrap 5 404 Error Page</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
            </head>


            <body>
                <header className='postsHeader'>
                    <h1>OhmyCity!</h1>
                </header>
                <div class="d-flex align-items-center justify-content-center vh-100 ">
                    <div class="text-center container404 col-6">
                        <h1 class="display-1 fw-bold">404</h1>
                        <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                        <p class="lead">
                            The page you’re looking for doesn’t exist.
                        </p>
                        <Link to={`/public`}><a href="index.html" class="btn btn-primary but404 col-4">Go Home</a></Link>
                    </div>
                </div>
            </body>

        </>
    )
}
export default Error404;