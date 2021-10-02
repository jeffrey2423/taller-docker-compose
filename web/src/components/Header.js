import React from 'react'
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container-fluid">
                    <Link className="navbar-brand" to="/">Taller Docker-Compose</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link className="nav-link" to="/" >Inicio</Link>
                            <Link className="nav-link" to="/Admin">Admin</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Header