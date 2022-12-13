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
  input DmgNegationInput {
    phy: Int
    strike: Int
    slash: Int
    pierce: Int
    mag: Int
    fire: Int
    light: Int
    holy: Int
  }
  type DmgNegation {
    _id: ID
    phy: Int
    strike: Int
    slash: Int
    pierce: Int
    mag: Int
    fire: Int
    light: Int
    holy: Int
  }
  input ResistanceInput {
    immunity: Int
    robustness: Int
    focus: Int
    vitality: Int
    poise: Int
  }
  type Resistance {
    _id: ID
    immunity: Int
    robustness: Int
    focus: Int
    vitality: Int
    poise: Int
  }
  input HelmetInput {
    name: String
    image: String
    dmgNegation: [DmgNegationInput]
    resistance: [ResistanceInput]
  }
  type Helmet {
    _id: ID
    name: String
    image: String
    dmgNegation: [DmgNegation]
    resistance: [Resistance]
  }
  input ChestInput {
    name: String
    image: String
    dmgNegation: [DmgNegationInput]
    resistance: [ResistanceInput]
  }
  type Chest {
    _id: ID
    name: String
    image: String
    dmgNegation: [DmgNegation]
    resistance: [Resistance]
  }
  input ArmsInput {
    name: String
    image: String
    dmgNegation: [DmgNegationInput]
    resistance: [ResistanceInput]
  }
  type Arms {
    _id: ID
    name: String
    image: String
    dmgNegation: [DmgNegation]
    resistance: [Resistance]
  }
  input LegsInput {
    name: String
    image: String
    dmgNegation: [DmgNegationInput]
    resistance: [ResistanceInput]
  }
  type Legs {
    _id: ID
    name: String
    image: String
    dmgNegation: [DmgNegation]
    resistance: [Resistance]
  }
  input ArmorInput {
    helmet: [HelmetInput]
    chest: [ChestInput]
    arms: [ArmsInput]
    legs: [LegsInput]
  }
  type Armor {
    _id: ID
    helmet: [Helmet]
    chest: [Chest]
    arms: [Arms]
    legs: [Legs]
  }
  input TalismanSlotInput {
    name: String
    image: String
    effect: String
  }
  type TalismanSlots {
    _id: ID
    name: String
    image: String
    effect: String
  }
  input TalismansInput {
    slot1: [TalismanSlotInput]
    slot2: [TalismanSlotInput]
    Slot3: [TalismanSlotInput]
    slot4: [TalismanSlotInput]
  }
  type Talismans {
    _id: ID
    slot1: [TalismanSlots]
    slot2: [TalismanSlots]
    Slot3: [TalismanSlots]
    slot4: [TalismanSlots]
  }
  input AttackInput {
    phy: Int
    mag: Int
    fire: Int
    light: Int
    holy: Int
    crit: Int
    rng: Int
  }
  type Attack {
    _id: ID
    phy: Int
    mag: Int
    fire: Int
    light: Int
    holy: Int
    crit: Int
    rng: Int
  }
  input DefenceInput {
    phy: Int
    mag: Int
    fire: Int
    light: Int
    holy: Int
    boost: Int
  }
  type Defence {
    _id: ID
    phy: Int
    mag: Int
    fire: Int
    light: Int
    holy: Int
    boost: Int
  }
  input ScalesWithInput {
    str: Int
    dex: Int
    arc: Int
    fai: Int
  }
  type ScalesWith {
    _id: ID
    str: Int
    dex: Int
    arc: Int
    fai: Int
  }
  input SlotsInput {
    name: String
    image: String
    attack: [AttackInput]
    defence: [DefenceInput]
    scalesWith: [ScalesWithInput]
    weight: Int
  }
  type Slots {
    _id: ID
    name: String
    image: String
    attack: [Attack]
    defence: [Defence]
    scalesWith: [ScalesWith]
    weight: Int
  }
  input WeaponsInput {
    slot1: [SlotsInput]
    slot2: [SlotsInput]
    Slot3: [SlotsInput]
    slot4: [SlotsInput]
  }
  type Weapons {
    _id: ID
    slot1: [Slots]
    slot2: [Slots]
    Slot3: [Slots]
    slot4: [Slots]
  }
  input ShieldInput {
    name: String
    image: String
    attack: [AttackInput]
    defence: [DefenceInput]
    scalesWith: [ScalesWithInput]
    weight: Int
  }
  type Shield {
    _id: ID
    name: String
    image: String
    attack: [Attack]
    defence: [Defence]
    scalesWith: [ScalesWith]
    weight: Int
  }
  input EquipmentInput {
    armor: [ArmorInput]
    talismans: [TalismansInput]
    weapons: [WeaponsInput]
    shields: [ShieldInput]
  }
  type Equipment {
    _id: ID
    armor: [Armor]
    talismans: [Talismans]
    weapons: [Weapons]
    shields: [Shield]
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
    # deleteCharacter(characterId: ID) :Character
    addEquipment(equipment: [EquipmentInput]): Equipment
  }
`;

module.exports = typeDefs;