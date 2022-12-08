const characterSchema = new Schema({
    class: {
        type: String,
        required: true,
    },
    level: [
        {
            type: Schema.Types.ObjectId,
            ref: 'AttributePoints',
        }
    ],
});

const Character = model('character', characterSchema);

module.exports = Character;