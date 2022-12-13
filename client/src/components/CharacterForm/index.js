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
        charHead: '',
        charChest: '',
        charLegs: '',
        charHands: '',
        charTalismanOne: '',
        charTalismanTwo: '',
        charTalismanThree: '',
        charTalismanFour: '',
        charLeftHandOne: '',
        charRightHandOne: '',
        charLeftHandTwo: '',
        charRightHandTwo: '',
        charLeftHandThree: '',
        charRightHandThree: '',
        charSpellOne: '',
        charSpellTwo: '',
        charSpellThree: '',
        charSpellFour: '',
        charSpellFive: '',
        charSpellSix: '',
        charSpellSeven: '',
        charSpellEight: '',
        charSpellNine: '',
        charSpellTen: '',
        charArrowOne: '',
        charArrowTwo: '',
        charBoltOne: '',
        charBoltTwo: ''
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

                <Form onSubmit={handleFormSubmit}>
                    <Container>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Character Name</Form.Label>
                                    <Form.Control onChange={handleChange} name='charName' value={userCharacter.charName} type="text" placeholder="Character Name" />
                                </Form.Group>

                                <Form.Select>
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
                                    <Form.Control onChange={handleChange} name='charLevel' value={userCharacter.charLevel} type="text" placeholder="1-70" />
                                    <Form.Text className="text-muted">
                                        1-713
                                    </Form.Text>
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
                                <Row>
                                    <Col>
                                        <Form.Select >
                                            <option>Head</option>
                                            <option value="Alberich's Pointed Hat">Alberich's Pointed Hat</option>
                                            <option value='Albinauric Mask'>Albinauric Mask</option>
                                            <Form.Control onChange={handleChange} name='charHead' value={userCharacter.charHead} type="text" />
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                        <Form.Select >
                                            <option>Chest</option>
                                            <option value="Alberich's Robe">Alberich's Robe</option>
                                            <option value='All-Knowing Armor'>All-Knowing Armor</option>
                                            <Form.Control onChange={handleChange} name='charHead' value={userCharacter.charChest} type="text" />
                                        </Form.Select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Select >
                                            <option>Legs</option>
                                            <option value="Alberich's Trousers">Alberich's Trousers</option>
                                            <option value='All-Knowing Greaves'>All-Knowing Greaves</option>
                                            <Form.Control onChange={handleChange} name='charHead' value={userCharacter.charLegs} type="text" />
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                        <Form.Select >
                                            <option>Hands</option>
                                            <option value="Alberich's Bracers">Alberich's Bracers</option>
                                            <option value='All-Knowing Gauntlets'>All-Knowing Gauntlets</option>
                                            <Form.Control onChange={handleChange} name='charHead' value={userCharacter.charHands} type="text" />
                                        </Form.Select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Select >
                                            <option>Talisman 1</option>
                                            <option value="Ancestral Spirit's Horn">Ancestral Spirit's Horn</option>
                                            <option value="Arrow's Reach Talisman">Arrow's Reach Talisman</option>
                                            <Form.Control onChange={handleChange} name='charHead' value={userCharacter.charTalismanOne} type="text" />
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                        <Form.Select >
                                            <option>Talisman 2</option>
                                            <option value="Ancestral Spirit's Horn">Ancestral Spirit's Horn</option>
                                            <option value="Arrow's Reach Talisman">Arrow's Reach Talisman</option>
                                            <Form.Control onChange={handleChange} name='charHead' value={userCharacter.charTalismanTwo} type="text" />
                                        </Form.Select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Select >
                                            <option>Talisman 3</option>
                                            <option value="Ancestral Spirit's Horn">Ancestral Spirit's Horn</option>
                                            <option value="Arrow's Reach Talisman">Arrow's Reach Talisman</option>
                                            <Form.Control onChange={handleChange} name='charHead' value={userCharacter.charTalismanThree} type="text" />
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                        <Form.Select >
                                            <option>Talisman 4</option>
                                            <option value="Ancestral Spirit's Horn">Ancestral Spirit's Horn</option>
                                            <option value="Arrow's Reach Talisman">Arrow's Reach Talisman</option>
                                            <Form.Control onChange={handleChange} name='charHead' value={userCharacter.charTalismanFour} type="text" />
                                        </Form.Select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Select >
                                            <option>Left Hand 1</option>
                                            <option value="Academy Glintstone Staff">Academy Glintstone Staff</option>
                                            <option value="Albaster Lord's Sword">Albaster Lord's Sword</option>
                                            <Form.Control onChange={handleChange} name='charHead' value={userCharacter.charLeftHandOne} type="text" />
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                        <Form.Select >
                                            <option>Right Hand 1</option>
                                            <option value="Academy Glintstone Staff">Academy Glintstone Staff</option>
                                            <option value="Albaster Lord's Sword">Albaster Lord's Sword</option>
                                            <Form.Control onChange={handleChange} name='charHead' value={userCharacter.charRightHandOne} type="text" />
                                        </Form.Select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Select >
                                            <option>Left Hand 2</option>
                                            <option value="Academy Glintstone Staff">Academy Glintstone Staff</option>
                                            <option value="Albaster Lord's Sword">Albaster Lord's Sword</option>
                                            <Form.Control onChange={handleChange} name='charHead' value={userCharacter.charLeftHandTwo} type="text" />
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                        <Form.Select >
                                            <option>Right Hand 2</option>
                                            <option value="Academy Glintstone Staff">Academy Glintstone Staff</option>
                                            <option value="Albaster Lord's Sword">Albaster Lord's Sword</option>
                                            <Form.Control onChange={handleChange} name='charHead' value={userCharacter.charRightHandTwo} type="text" />
                                        </Form.Select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Select >
                                            <option>Left Hand 3</option>
                                            <option value="Academy Glintstone Staff">Academy Glintstone Staff</option>
                                            <option value="Albaster Lord's Sword">Albaster Lord's Sword</option>
                                            <Form.Control onChange={handleChange} name='charHead' value={userCharacter.charLeftHandThree} type="text" />
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                        <Form.Select >
                                            <option>Right Hand 3</option>
                                            <option value="Academy Glintstone Staff">Academy Glintstone Staff</option>
                                            <option value="Albaster Lord's Sword">Albaster Lord's Sword</option>
                                            <Form.Control onChange={handleChange} name='charHead' value={userCharacter.charRightHandThree} type="text" />
                                        </Form.Select>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Two Handed" />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Table striped hover>
                                    <tbody>
                                        <tr>
                                            <td>HP</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>FP</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Stamina</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Equip Load</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Dexterity</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Poise</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Discovery</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <Table striped hover>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Defense</th>
                                            <th>Negation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Physical</td>
                                            <td>79/</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>VS Strike</td>
                                            <td>79/</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>VS Slash</td>
                                            <td>79/</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>VS Pierce</td>
                                            <td>79/</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>Magic</td>
                                            <td>88/</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>Fire</td>
                                            <td>83/</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>Lightning</td>
                                            <td>74/</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>Holy</td>
                                            <td>96/</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>Resistance</td>
                                            <td>Armor</td>
                                        </tr>
                                        <tr>
                                            <td>Immunity</td>
                                            <td>92/</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>Robustness</td>
                                            <td>92/</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>Focus</td>
                                            <td>92/</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>Vitality</td>
                                            <td>103/</td>
                                            <td>0</td>
                                        </tr>
                                    </tbody>
                                </Table>

                            </Col>
                            <Row>
                                    <Col>
                                        <Form.Select >
                                            <option>Spell 1</option>
                                            <option value="Adula's Moonblade">Adula's Moonblade</option>
                                            <option value="Agheel's Flame">Agheel's Flame</option>
                                            <Form.Control onChange={handleChange} name='charHead' value={userCharacter.charSpellOne} type="text" />
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                        <Form.Select >
                                            <option>Spell 2</option>
                                            <option value="Adula's Moonblade">Adula's Moonblade</option>
                                            <option value="Agheel's Flame">Agheel's Flame</option>
                                            <Form.Control onChange={handleChange} name='charHead' value={userCharacter.charSpellTwo} type="text" />
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                        <Form.Select >
                                            <option>Spell 3</option>
                                            <option value="Adula's Moonblade">Adula's Moonblade</option>
                                            <option value="Agheel's Flame">Agheel's Flame</option>
                                            <Form.Control onChange={handleChange} name='charHead' value={userCharacter.charSpellThree} type="text" />
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                        <Form.Select >
                                            <option>Spell 4</option>
                                            <option value="Adula's Moonblade">Adula's Moonblade</option>
                                            <option value="Agheel's Flame">Agheel's Flame</option>
                                            <Form.Control onChange={handleChange} name='charHead' value={userCharacter.charSpellFour} type="text" />
                                        </Form.Select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Select >
                                            <option>Spell 5</option>
                                            <option value="Adula's Moonblade">Adula's Moonblade</option>
                                            <option value="Agheel's Flame">Agheel's Flame</option>
                                            <Form.Control onChange={handleChange} name='charHead' value={userCharacter.charSpellFive} type="text" />
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                        <Form.Select >
                                            <option>Spell 6</option>
                                            <option value="Adula's Moonblade">Adula's Moonblade</option>
                                            <option value="Agheel's Flame">Agheel's Flame</option>
                                            <Form.Control onChange={handleChange} name='charHead' value={userCharacter.chaSpellSix} type="text" />
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                        <Form.Select >
                                            <option>Spell 7</option>
                                            <option value="Adula's Moonblade">Adula's Moonblade</option>
                                            <option value="Agheel's Flame">Agheel's Flame</option>
                                            <Form.Control onChange={handleChange} name='charHead' value={userCharacter.charSpellSeven} type="text" />
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                        <Form.Select >
                                            <option>Spell 8</option>
                                            <option value="Adula's Moonblade">Adula's Moonblade</option>
                                            <option value="Agheel's Flame">Agheel's Flame</option>
                                            <Form.Control onChange={handleChange} name='charHead' value={userCharacter.charSpellEight} type="text" />
                                        </Form.Select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Select >
                                            <option>Spell 9</option>
                                            <option value="Adula's Moonblade">Adula's Moonblade</option>
                                            <option value="Agheel's Flame">Agheel's Flame</option>
                                            <Form.Control onChange={handleChange} name='charHead' value={userCharacter.charSpellNine} type="text" />
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                        <Form.Select >
                                            <option>Spell 10</option>
                                            <option value="Adula's Moonblade">Adula's Moonblade</option>
                                            <option value="Agheel's Flame">Agheel's Flame</option>
                                            <Form.Control onChange={handleChange} name='charHead' value={userCharacter.charSpellTen} type="text" />
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                    </Col>
                                    <Col>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Select >
                                            <option>Arrow 1</option>
                                            <option value="Arrow">Arrow</option>
                                            <option value="Bloodbone Arrow">Bloodbone Arrow</option>
                                            <Form.Control onChange={handleChange} name='charHead' value={userCharacter.charArrowOne} type="text" />
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                        <Form.Select >
                                            <option>Arrow 2</option>
                                            <option value="Arrow">Arrow</option>
                                            <option value="Bloodbone Arrow">Bloodbone Arrow</option>
                                            <Form.Control onChange={handleChange} name='charHead' value={userCharacter.charArrowTwo} type="text" />
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                        <Form.Select >
                                            <option>Bolt 1</option>
                                            <option value="Ballista Bolt">Ballista Bolt</option>
                                            <option value="Black-key Bolt">Black-key Bolt</option>
                                            <Form.Control onChange={handleChange} name='charHead' value={userCharacter.charBoltOne} type="text" />
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                        <Form.Select >
                                            <option>Bolt 2</option>
                                            <option value="Ballista Bolt">Ballista Bolt</option>
                                            <option value="Black-key Bolt">Black-key Bolt</option>
                                            <Form.Control onChange={handleChange} name='charHead' value={userCharacter.charBoltTwo} type="text" />
                                        </Form.Select>
                                    </Col>
                                </Row>
                            <Button variant="dark" type="submit">
                                Create Character
                            </Button>
                        </Row>

                    </Container>

                </Form>


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
