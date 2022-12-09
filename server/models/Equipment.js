const { Schema, model } = require('mongoose');

const equipmentSchema = new Schema({
    helmet: [{
        name: {
            type: String,
        },

        image: {
            type: String,
        },

        description: {
            type: String,
        },

        category: {
            type: String,
        },

        dmgNegation: [
            {
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
            }
        ],
        resistance: [
            {
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
            },
        ],
        weight: {
            type: Number,
        },
    }],

    chestArmor: [{
        name: {
            type: String,
        },

        image: {
            type: String,
        },

        description: {
            type: String,
        },

        category: {
            type: String,
        },

        dmgNegation: [
            {
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
            },
        ],
        weight: {
            type: Number,
        },
    }],
    arms: [{
        name: {
            type: String,
        },

        image: {
            type: String,
        },

        description: {
            type: String,
        },

        category: {
            type: String,
        },

        dmgNegation: [
            {
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
            }
        ],
        resistance: [
            {
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },

            },
        ],
        weight: {
            type: Number,
        },
    }],
    legs: {
        name: {
            type: String,
        },

        image: {
            type: String,
        },

        description: {
            type: String,
        },

        category: {
            type: String,
        },

        dmgNegation: [
            {
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
            }
        ],
        resistance: [
            {
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                amount: {
                    type: Number,
                },
            },
        ],
        weight: {
            type: Number
        },
    },
    talismans: [{
        slot1: [
            {
                name: {
                    type: String,
                },

                image: {
                    type: String,
                },

                description: {
                    type: String,
                },
                effect: {
                    type: String,
                },
            },
        ],
        slot2: [
            {
                name: {
                    type: String,
                },

                image: {
                    type: String,
                },

                description: {
                    type: String,
                },
                effect: {
                    type: String,
                },
            },
        ],
        slot3: [
            {
                name: {
                    type: String,
                },

                image: {
                    type: String,
                },

                description: {
                    type: String,
                },
                effect: {
                    type: String,
                },
            },
        ],
        slot4: [
            {
                name: {
                    type: String,
                },

                image: {
                    type: String,
                },

                description: {
                    type: String,
                },
                effect: {
                    type: String,
                },
            },
        ],
    }],

    weapons: [{
        slot1: [{

            name: {
                type: String,
            },

            image: {
                type: String,
            },

            description: {
                type: String,
            },
            category: {
                type: String,
            },
            attack: [
                {
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                },
            ],
            defence: [
                {
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                },
            ],
            scalesWith: [
                {
                    name: {
                        type: String,
                    },
                    scaling: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    scaling: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    scaling: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    scaling: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    scaling: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    scaling: {
                        type: Number,
                    },
                },
            ],
            requiredAttributes: [
                {
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                },
            ],

            weight: {
                type: Number,
            },
        }],
        slot2: [{

            name: {
                type: String,
            },

            image: {
                type: String,
            },

            description: {
                type: String,
            },
            category: {
                type: String,
            },
            attack: [
                {
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                },
            ],
            defence: [
                {
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                },
            ],
            scalesWith: [
                {
                    name: {
                        type: String,
                    },
                    scaling: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    scaling: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    scaling: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    scaling: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    scaling: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    scaling: {
                        type: Number,
                    },
                },
            ],
            requiredAttributes: [
                {
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                },
            ],

            weight: {
                type: Number,
            },
        }],
        slot3: [{

            name: {
                type: String,
            },

            image: {
                type: String,
            },

            description: {
                type: String,
            },
            category: {
                type: String,
            },
            attack: [
                {
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                },
            ],
            defence: [
                {
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                },
            ],
            scalesWith: [
                {
                    name: {
                        type: String,
                    },
                    scaling: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    scaling: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    scaling: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    scaling: {
                        type: Number,
                    },
                },
            ],
            requiredAttributes: [
                {
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                },
            ],
            weight: {
                type: Number,
            },
        }],
        slot4: [{

            name: {
                type: String,
            },

            image: {
                type: String,
            },

            description: {
                type: String,
            },
            category: {
                type: String,
            },
            attack: [
                {
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                },
            ],
            defence: [
                {
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                },
            ],
            scalesWith: [
                {
                    name: {
                        type: String,
                    },
                    scaling: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    scaling: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    scaling: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    scaling: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    scaling: {
                        type: Number,
                    },
                },
            ],
            requiredAttributes: [
                {
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                    name: {
                        type: String,
                    },
                    amount: {
                        type: Number,
                    },
                },
            ],
            weight: {
                type: Number,
            },
        }],
    }],

    shields: [{
        name: {
            type: String,
        },
        image: {
            type: String,
        },
        description: {
            type: String,
        },
        attack: [{
            name: {
                type: String,
            },
            amount: {
                type: Number
            },
            name: {
                type: String,
            },
            amount: {
                type: Number
            },
            name: {
                type: String,
            },
            amount: {
                type: Number
            },
            name: {
                type: String,
            },
            amount: {
                type: Number
            },
            name: {
                type: String,
            },
            amount: {
                type: Number
            },
            name: {
                type: String,
            },
            amount: {
                type: Number
            },
        }],
        defence: [{
            name: {
                type: String,
            },
            name: {
                type: String,
            },
            name: {
                type: String,
            },
            name: {
                type: String,
            },
            name: {
                type: String,
            },
            name: {
                type: String,
            },
        }],
        category: {
            type: String,
        },
        scaleWith: [{
            name: {
                type: String,
            },
            scaling: {
                type: Number,
            }
        }],
        requiredAttributes: [{
            name: {
                type: String,
            },
            amount: {
                type: Number,
            },
            name: {
                type: String,
            },
            amount: {
                type: Number,
            },
            name: {
                type: String,
            },
            amount: {
                type: Number,
            },
            amount: {
                type: Number,
            },
            name: {
                type: String,
            },
            amount: {
                type: Number,
            },
            amount: {
                type: Number,
            },
            name: {
                type: String,
            },
            amount: {
                type: Number,
            },
        }],
    }],
    character: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Character',
        }
    ]
});

const Equipment = model('Equipment', equipmentSchema);

module.exports = Equipment;


