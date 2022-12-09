import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query users{
        users{
            _id
            username
            character{
                _id
                name
                class
                created at
            }
        }
    }
`

export const QUERY_SINGLE_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      characters {
        _id
        name
        class
        createdAt
      }
    }
  }
`;

export const QUERY_USER_CHARACTER = gql`
  query getCharacters {
    characters {
        _id
        name
        class
        createdAt
    }
  }
`;

export const QUERY_SINGLE_CHARACTER = gql`
  query getUserCharacters($userId: ID!) {
    character(characterId: $characterId) {
      _id
      name
      class
      attributePoints{
        vigor
        mind
        endurance
        strength
        dexterity
        arcane
        hp
        fp
      }
      weapons {
        name
        image
        category
        weight
        attack
        requiredAttributes
        scalesWith
      }
      shield{
        name
        image
        category
        weight
        defense
        requiredAttributes
        scalesWith
      }
      helmet {
        name
        image
        type
        weight
        dmgNegation
        resistance
      }
      chestArmor {
        name
        image
        type
        weight
        dmgNegation
        resistance
      }
      arms {
        name
        image
        type
        weight
        dmgNegation
        resistance
      }
      leg {
        name
        image
        type
        weight
        dmgNegation
        resistance
      }
      talismans {
        name
        image
        effects
      }
      createdAt
     
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      character {
        _id
        name
        class
        createdAt
      }
    }
  }
`;
