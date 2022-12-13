import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserList = ({
    users,
    title,
    showTitle = true,
    showUsername = true,
}) => {

    if (!users.length) {
        return <h3>No Users yet</h3>;
    }

    return (
        <div>
            {showTitle && <h3>{title}</h3>}
            {users &&
                users.map((user) => (
                    <div key={user._id} className="card-bg p-3 mb-3">
                        <h4 className='golden p2 m-0'>
                            {showUsername ? (
                                <Link
                                    style={{textDecoration: 'none'}}
                                    className="text-light"
                                    to={`/profiles/${user.username}`}
                                >
                                {user.username}
                                </Link>
                            ) : (
                                <>
                                    <span style={{ fontSize: '1rem' }}>
                                        Its you!
                                    </span>
                                </>
                            )}
                        </h4>
                    </div>
                ))}
        </div>
    );
};

export default UserList;