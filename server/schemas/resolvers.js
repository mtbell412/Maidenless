const { AuthenticationError } = require('apollo-server-express');
const { User, Character, Equipment } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('characters');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('characters');
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('characters');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        characters: async () => {
            return Character.find().populate('attributePoints');
        },
        character: async (parent, { characterName }) => {
            return Character.findOne({ characterName }).populate('attributePoints');
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            // console.log(username +email +password);
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        addCharacter: async (parent, { characterName, characterClass }) => {
            const character = await Character.create({ characterName, characterClass });
            return character;
        },
        // addEquipment: async (parent, {helmet, chestArmor, arms, legs, talismans, weapons, shields}, context) => {
        //     if(context.character) {
        //         const equipment = await Equipment.create({
        //             helmet,
        //             chestArmor,
        //             arms,
        //             legs,
        //             talismans,
        //             weapons,
        //             shields,
        //         });
        //         await Character.findOneAndUpdate(
        //             {_id: context.character_id},
        //             {$addToSet: {equipment: equipment._id}}
        //         )
        //         return equipment;
        //     }
        // },
        // removeEquipment: async (parent, {helmetId, chestArmorId, armsId, legsId, talismansId, weaponsId, shieldsId}, context) => {
        //     if (context.character) {
        //         return Equipment.findOneAndUpdate(
        //             {_id: helmetId, chestArmorId, armsId, legsId, talismansId, weaponsId, shieldsId}
        //         )
        //     }
        // }
    },
};
module.exports = resolvers;