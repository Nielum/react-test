import React from 'react'

const User = (props) => {
    const { name, email, avatarUrl, position } = props;

    return (
        <div className="card-body p-4 text-black">
            <div>
                <h6 className="mb-4">{name}</h6>
                <span>{position}</span>
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <p className="small mb-0">
                        <i className="far fa-clock me-2" />
                    </p>
                </div>
            </div>
            <div className="d-flex align-items-center mb-4">
                <div className="flex-shrink-0">
                    <img
                        src={avatarUrl}
                        className="img-fluid rounded-circle border border-dark border-3"
                        style={{ width: 70 }}
                    />
                </div>
                <div className="flex-grow-1 ms-3">
                    <div className="d-flex flex-row align-items-center mb-2">
                        <p className="mb-0 me-2">Email: {email}</p>
                    </div>
                </div>
            </div>
            <hr />
            <button
                type="button"
                className="btn btn-success btn-rounded btn-block btn-lg"
            >
                <i className="far fa-clock me-2" />
                Back
            </button>
        </div>
    )
}

export default User;