const attributeSchema = new Schema({
    vigor: {
        type: Number,
        required: true,
    },
    mine: {
        type: Number,
        required: true,
    },
    endurance: {
        type: Number,
        required: true,
    },
    strength: {
        type: Number,
        required: true,
    },
    dexterity: {
        type: Number,
        required: true,
    },
    arcane: {
        type: Number,
        required: true,
    },
    hp: {
        type: Number,
        required: true,
    },
    fp: {
        type: Number,
        required: true,
    },
});

const AttributePoints = model('AttributePoints', attributeSchema);

module.exports = AttributePoints;