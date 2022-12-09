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
#type Equipment {
#  helmet: [Helmet]
#}
#type Helmet {
#  name: String
#  image: String
#  dmgNegation: [{
#    name: String
#    amount: INT
#    name: String
#    amount: INT
#    name: String
#    amount: INT
#    name: String
#    amount: INT
#    name: String
#    amount: INT
#    name: String
#    amount: INT
#    name: String
#    amount: INT
#    name: String
#    amount: INT
#  }]
#  resistance:  [{
#    name: String
#    amount: INT
#    name: String
#    amount: INT
#    name: String
#    amount: INT
#    name: String
#    amount: INT
#    name: String
#    amount: INT
#  }]
#  weight: Int
#}
# type chestArmor {
#   name: String
#   image: String
#   dmgNegation: [{
#     name: String
#     amount: Int
#   }]
#   resistance:  [{
#     name: String
#     amount: Int
#   }]
#   weight: Int
# }
# type Arms {
#   name: String
#   image: String
#   dmgNegation: [{
#     name: String
#     amount: Int
#   }]
#   resistance:  [{
#     name: String
#     amount: Int
#   }]
#   weight: Int
# }
# type Legs {
#   name: String
#   image: String
#   dmgNegation: [{
#     name: String
#     amount: INT
#   }]
#   resistance:  [{
#     name: String
#     amount: INT
#   }]
#   weight: INT
# }
# type Talismans {
#   slot1: [{
#     name: String
#     image: String
#     effect: String
#   }]
#   slot2: [{
#     name: String
#     image: String
#     effect: String
#   }]
#   slot3: [{
#     name: String
#     image: String
#     effect: String
#   }]
#   slot4: [{
#     name: String
#     image: String
#     effect: String
#   }]
# }
# type Weapons {
#   slot1: [{
#     name: String
#     image: String
#     attack: [{
#       name: String
#       amount: INT
#     }]
#     defence: [{
#       name: String
#       amount:INT
#     }]
#     scalesWith: [{
#       name: String
#       scaling: INT
#     }]
#   }]
#   slot2: [{
#     name: String
#     image: String
#     attack: [{
#       name: String
#       amount: INT
#     }]
#     defence: [{
#       name: String
#       amount:INT
#     }]
#     scalesWith: [{
#       name: String
#       scaling: INT
#     }]
#   }]
#   slot3: [{
#     name: String
#     image: String
#     attack: [{
#       name: String
#       amount: INT
#     }]
#     defence: [{
#       name: String
#       amount:INT
#     }]
#     scalesWith: [{
#       name: String
#       scaling: INT
#     }]
#   }]
#   slot4: [{
#     name: String
#     image: String
#     attack: [{
#       name: String
#       amount: INT
#     }]
#     defence: [{
#       name: String
#       amount:INT
#     }]
#     scalesWith: [{
#       name: String
#       scaling: INT
#     }]
#   }]
#   type Shields: [{
#     name: String
#     image: String
#     attack: [{
#       name: String
#       amount: String
#     }]
#   }]
# }
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

    addCharacter(charName: String!, charClass: String!): Character
#    addEquipment(helmet: [Helmet]): Equipment

  }
`;

module.exports = typeDefs;