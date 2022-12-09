const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Character {
    _id: ID
    characterName: String
    characterClass: String
  }
  type User {
    _id: ID
    username: String
    email: String
    password: String
    characters: [Character]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    user(username: String!): User
    me: User
    characters: [Character]
    character(characterName: String!): Character
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCharacter(characterName: String!, characterClass: String!): Character
  }
`;

module.exports = typeDefs;