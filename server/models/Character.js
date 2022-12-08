const { Schema, model } = require('mongoose');

const characterSchema = new Schema({
    charName: {
        type: String,
        required: true,
    },
    charClass: {
        type: String,
        required: true,
    },
    level: [
        {
            type: Schema.Types.ObjectId,
            ref: 'AttributePoints',
        }
    ],
    stuff: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Equipment'
        }
    ]
});

const Character = model('character', characterSchema);

module.exports = Character;