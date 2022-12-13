import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CharacterList = ({
  characters,
  title,
  showTitle = true,
  showUsername = true,
}) => {


  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {characters &&
        characters.map((character) => (
          <div key={character._id} className="card card-bg mb-3">
            <h4 className="card-header golden p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/character/${character.characterName}`}
                >
                  {character.characterName} <br />
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    This is your character!
                  </span>
                </>
              )}
            </h4>
          </div>
        ))}
    </div>
  );
};

export default CharacterList;
