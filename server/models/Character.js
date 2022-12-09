const { Schema, model } = require('mongoose');

const characterSchema = new Schema({
    characterName: {
        type: String,
        required: true,
    },
    characterClass: {
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

const Character = model('Character', characterSchema);

module.exports = Character;