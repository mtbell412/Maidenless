import React from "react";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
    ApolloLink
} from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from "./pages/Signup";
import Profile from './pages/Profile';
import Character from './pages/Character';
import Header from './components/Header'
import Footer from './components/Footer'
import './app.css';


const myLink = createHttpLink({
    uri: 'http://localhost:3001/graphql'
});

 const eldenApiLink = createHttpLink({
     uri: 'https://eldenring.fanapis.com/api/graphql'
 });

// const authLink = setContext((_, { headers }) => {
//     const token = localStorage.getItem('id-token');
//     return {
//         headers: {
//             ...headers,
//             authorization: token ? `Bearer ${token}` : '',
//         }
//     };
// });

//const client = new ApolloClient({
//    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
//    link: authLink.concat(myLink),
//    cache: new InMemoryCache(),
//});

const client = new ApolloClient({
    link: ApolloLink.split(
        operation => operation.getContext().clientName === "EldenLink",
        eldenApiLink,
        myLink
    ),
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
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
                                element={<SignUp />}
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
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router>
        </ApolloProvider>
    )
}

export default App;