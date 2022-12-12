import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';



import { ADD_CHARACTER } from '../../utils/mutations';
import { QUERY_USER_CHARACTER, QUERY_ME, QUERY_SINGLE_CHARACTER } from '../../utils/queries';

import Auth from '../../utils/auth';

const CharacterForm = () => {
    const [userCharacter, setUserCharacter] = useState({
        charName: '',
        charClass: '',
        charLevel: 0,
        charHead: ''
    });

    const [characterCount, setCharacterCount] = useState(0);

    const [addCharacter, { error }] = useMutation(ADD_CHARACTER, {
        update(cache, { data: { addCharacter } }) {
            try {
                const { characters } = cache.readQuery({ query: QUERY_SINGLE_CHARACTER });

                cache.writeQuery({
                    query: QUERY_SINGLE_CHARACTER,
                    data: { characters: [addCharacter, ...characters] },
                });
            } catch (e) {
                console.error(e);
            }

            // update me object's cache
            const { me } = cache.readQuery({ query: QUERY_ME });
            cache.writeQuery({
                query: QUERY_ME,
                data: { me: { ...me, characters: [...me.characters, addCharacter] } },
            });
        },
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addCharacter({
                //variables should match
                //perform a query to get all the classses first which will create a dropdown menu to be used for the form
                //attributes and stuff are not variables because of
                variables: { ...userCharacter }
            });

            setUserCharacter('');
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'characterText' && value.length <= 280) {
            setUserCharacter(value);
            setCharacterCount(value.length);
        }
    };

    return (
        <div>
            <h3>Choose Your Elden Ring Build!</h3>

            {Auth.loggedIn() ? (

                <Container>
                    <Row>
                        <Form onSubmit={handleFormSubmit}>
                            <Col>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Character Name</Form.Label>
                                    <Form.Control onChange={handleChange} name='charName' value={userCharacter.charName} type="text" placeholder="Character Name" />
                                </Form.Group>

                                <Form.Select className="" controlId="" >
                                    <option>Starting Class</option>
                                    <option value='Hero'>Hero</option>
                                    <option value='Bandit'>Bandit</option>
                                    <option value='Astrologer'>Astrologer</option>
                                    <option value='Warrior'>Warrior</option>
                                    <option value='Prisoner'>Prisoner</option>
                                    <option value='Confessor'>Confessor</option>
                                    <option value='Wretch'>Wretch</option>
                                    <option value='Vagabond'>Vagabond</option>
                                    <option value='Prophet'>Prophet</option>
                                    <option value='Samuri'>Samuri</option>
                                    <Form.Control onChange={handleChange} name='charClass' value={userCharacter.charClass} type="text" />
                                </Form.Select>

                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Level</Form.Label>
                                    <Form.Control onChange={handleChange} name='charLevel' value={userCharacter.charLevel} type="number" placeholder="1-70" />
                                    <Form.Text className="text-muted">
                                        1-713
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Character Name</Form.Label>
                                    <Form.Control onChange={handleChange} name='charName' value={userCharacter.charName} type="text" placeholder="Character Name" />
                                </Form.Group>

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Stat</th>
                                            <th>Init</th>
                                            <th>Level</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Vigor</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Mind</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Endurance</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Strength</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Dexterity</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Intelligence</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Faith</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Arcane</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col>
                                <Form.Select className="" controlId="" >
                                    <option>Head</option>
                                    <option value="Alberich's Pointed Hat">Alberich's Pointed Hat</option>
                                    <option value='Albinauric Mask'>Albinauric Mask</option>
                                    <Form.Control onChange={handleChange} name='charHead' value={userCharacter.charHead} type="text" />
                                </Form.Select>
                            </Col>

                            <Col>3 of 3</Col>

                            <Button variant="dark" type="submit">
                                Create Character
                            </Button>

                        </Form>

                    </Row>

                </Container>

            ) : (
                <p>
                    You need to be logged in to share your thoughts. Please{' '}
                    <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
                </p>
            )
            }
        </div >
    );
};

export default CharacterForm;
