import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import CharacterForm from '../components/CharacterForm';
import CharacterList from '../components/CharacterList';

import { QUERY_SINGLE_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_SINGLE_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = Auth.getProfile().data;
  console.log(user);
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Auth.loggedIn()) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 card-bg golden p-3 mb-5">
          Viewing {userParam ? `${user.username}'s`: 'your'} profile.
        </h2>

        <div className="col-12 col-md-10 mb-5">
          <CharacterList
            characters={user.characters}
            title={`${user.username}'s characters...`}
          />
        </div>
      </div>
    </div>
  );

}

export default Profile;