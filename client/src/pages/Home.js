import React from 'react';
import { useQuery } from '@apollo/client';

import UserList from '../components/UserList';

import { QUERY_USERS } from '../utils/queries';
import Auth from '../utils/auth'

const Home = () => {
    const { loading, data } = useQuery(QUERY_USERS);
    const users = data?.users || [];

    if (Auth.loggedIn()) {
        return (

            <main>
                <div className="flex-row justify-center">
                    <div className="col-12 col-md-8 mb-3">
                        {loading ? (
                            <div>Loading...</div>
                        ) : (
                            <UserList
                                users={users}
                                title="All users for the app"
                            />
                        )}
                    </div>
                </div>
            </main>
        );
    }
    else {
        return (
            <div className="flex-row justify-center">
                You must be logged in to view users!
            </div>
        )
    };
};
export default Home;