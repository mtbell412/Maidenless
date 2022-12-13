import React from "react";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
    ApolloLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from "./pages/Signup";
import Profile from './pages/Profile';
import Character from './pages/Character';
import Header from './components/Header'
import Footer from './components/Footer'
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const myLink = createHttpLink({
    uri: '/graphql'
});

//  const eldenApiLink = createHttpLink({
//      uri: 'https://eldenring.fanapis.com/api/graphql'
//  });

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        }
    };
});


const client1 = new ApolloClient({
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
    link: authLink.concat(myLink),
    cache: new InMemoryCache(),
});


// const client2 = new ApolloClient({
//     link: eldenApiLink,
//     cache: new InMemoryCache(),
// });

function App() {
    return (
        <ApolloProvider client={client1}>
            <Router>
                <div className="flex-column justify-flex-start min-100-vh background">
                    <Header />
                    <div className="container">
                        <Routes>
                            <Route
                                path="/"
                                element={<Home />}
                            />
                            <Route
                                path="/login"
                                element={<Login />}
                            />
                            <Route
                                path="/signup"
                                element={<Signup />}
                            />
                            <Route
                                path="/me"
                                element={<Profile />}
                            />
                            <Route
                                path="/profiles/:username"
                                element={<Profile />}
                            />
                            <Route
                                path="/character"
                                element={<Character />}
                            />
                            <Route
                                path="/character/:characterName"
                                element={<Character />}
                            />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router>
        </ApolloProvider>
    )
}

export default App;