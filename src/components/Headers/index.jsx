import React from 'react';

const Headers = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/home">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/profile">
                            Profile
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/counter">
                            Counter
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/todoapp">
                            ToDo App
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/datafetcher">
                            Data Fetcher
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/datafetcherhooks">
                            Fetcher Hooks
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/incrementcallback">
                            Increment CB
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Headers;
