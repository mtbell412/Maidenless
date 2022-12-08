const { Schema, model } = require('mongoose');

const attributeSchema = new Schema({
    vigor: {
        type: Number,
    },
    mind: {
        type: Number,
    },
    endurance: {
        type: Number,
    },
    strength: {
        type: Number,
    },
    dexterity: {
        type: Number,
    },
    arcane: {
        type: Number,
    },
    hp: {
        type: Number,
    },
    fp: {
        type: Number,
    },
});

const AttributePoints = model('AttributePoints', attributeSchema);

module.exports = AttributePoints;