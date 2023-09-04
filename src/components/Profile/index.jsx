import React from 'react'
import User from './User'

function Profile() {
    const user = {
        name: 'Neelam Gautam',
        email: 'gautamneelam57@gmail.com',
        position: 'MERN Stack developer',
        avatarUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp',
    };

    return (
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-md-9 col-lg-7 col-xl-5">
                        <div
                            className="card"
                            style={{ borderRadius: 15, backgroundColor: "#93e2bb" }}
                        >
                            <User {...user} />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Profile;
