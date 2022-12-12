import React from 'react';
import { useQuery } from '@apollo/client';
import UserList from '../components/UserList';
import { QUERY_USERS } from '../utils/queries';
const Home = () => {
    const { loading, data } = useQuery(QUERY_USERS);
    const users = data?.users || [];
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
    };
export default Home;