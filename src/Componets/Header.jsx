import React from 'react'
import { Link } from 'react-router-dom';
import { IoBagSharp, IoCartSharp } from "react-icons/io5";
import { TbUserFilled } from "react-icons/tb";

const Header = () => {
    return (
        <>
        <div class="shadow mb-5 rounded">
            <nav className="navbar navbar-expand-lg ms-5">
                <div className="container-fluid">
                    <IoBagSharp className='me-auto fs-3' />
                    <Link className="nav-link active fs-3" to="/">MART</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link className="nav-link fs-5 active" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link fs-5 active" to="/Shop">Shop</Link>
                            <Link className="nav-link fs-5 active" to="/Cart">Cart</Link>
                        </ul>
                        <div className="d-flex" role="search">
                            <Link className="nav-link  me-3 fs-4 active" to="/Shop"><TbUserFilled /></Link>
                            <Link className="nav-link fs-4 active" to="/Cart"><IoCartSharp /></Link>
                        </div>
                    </div>
                </div>
            </nav>
            </div>
        </>
    )
}

export default Header;

