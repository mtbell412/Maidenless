import React from 'react';

const UserList = ({ user = [] }) => {
  if (!user.length) {
    return <h3>No Users yet</h3>;
  }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Users
      </h3>
      <div className="flex-row my-4">
        {users &&
          users.map((user) => (
            <div key={user._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  {user.character} commented{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {user.createdAt}
                  </span>
                </h5>
                <p className="card-body">{user.userText}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default UserList;