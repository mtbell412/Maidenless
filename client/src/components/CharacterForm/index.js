// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';

// import { ADD_CHARACTER } from '../../utils/mutations';
// import { QUERY_USER_CHARACTER, QUERY_ME, QUERY_SINGLE_CHARACTER } from '../../utils/queries';

// import Auth from '../../utils/auth';

// const CharacterForm = () => {
//   const [characterText, setCharacterText] = useState('');

//   const [characterCount, setCharacterCount] = useState(0);

//   const [addCharacter, { error }] = useMutation(ADD_CHARACTER, {
//     update(cache, { data: { addCharacter } }) {
//       try {
//         const { characters } = cache.readQuery({ query: QUERY_SINGLE_CHARACTER });

//         cache.writeQuery({
//           query: QUERY_SINGLE_CHARACTER,
//           data: { thoughts: [addCharacter, ...characters] },
//         });
//       } catch (e) {
//         console.error(e);
//       }

//       // update me object's cache
//       const { me } = cache.readQuery({ query: QUERY_ME });
//       cache.writeQuery({
//         query: QUERY_ME,
//         data: { me: { ...me, characters: [...me.characters, addCharacter] } },
//       });
//     },
//   });

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { data } = await addCharacter({
//         //variables should match
//         //perform a query to get all the classses first which will create a dropdown menu to be used for the form
//         //attributes and stuff are not variables because of
//         variables: {
//           charName,
//           charClass,
//           charLevel
//         },
//       });

//       setCharacterText('');
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     if (name === 'characterText' && value.length <= 280) {
//       setCharacterText(value);
//       setCharacterCount(value.length);
//     }
//   };

//   return (
//     <div>
//       <h3>What's on your techy mind?</h3>

//       {Auth.loggedIn() ? (
//         <>
//           <p
//             className={`m-0 ${
//               characterCount === 280 || error ? 'text-danger' : ''
//             }`}
//           >
//             Character Count: {characterCount}/280
//           </p>
//           <form
//             className="flex-row justify-center justify-space-between-md align-center"
//             onSubmit={handleFormSubmit}
//           >
//             <div className="col-12 col-lg-9">
//               <textarea
//                 name="thoughtText"
//                 placeholder="Here's a new thought..."
//                 value={thoughtText}
//                 className="form-input w-100"
//                 style={{ lineHeight: '1.5', resize: 'vertical' }}
//                 onChange={handleChange}
//               ></textarea>
//             </div>

//             <div className="col-12 col-lg-3">
//               <button className="btn btn-primary btn-block py-3" type="submit">
//                 Add Thought
//               </button>
//             </div>
//             {error && (
//               <div className="col-12 my-3 bg-danger text-white p-3">
//                 {error.message}
//               </div>
//             )}
//           </form>
//         </>
//       ) : (
//         <p>
//           You need to be logged in to share your thoughts. Please{' '}
//           <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
//         </p>
//       )}
//     </div>
//   );
// };

// export default CharacterForm;
