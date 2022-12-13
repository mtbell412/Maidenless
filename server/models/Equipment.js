const { Schema, model } = require('mongoose');

const equipmentSchema = new Schema({
    armor:[{
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
                    phy: {
                        type: Number,
                    },
                    strike: {
                        type: Number,
                    },
                    slash: {
                        type: Number,
                    },
                    pierce: {
                        type: Number,
                    },
                    mag: {
                        type: Number,
                    },
                    fire: {
                        type: Number,
                    },
                    light: {
                        type: Number,
                    },
                    holy: {
                        type: Number
                    },
                }
            ],
            resistance: [
                {
                    immunity: {
                        type: Number,
                    },
                    robustness: {
                        type: Number,
                    },
                    focus: {
                        type: Number,
                    },
                    vitality: {
                        type: Number,
                    },
                    poise: {
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
                    phy: {
                        type: Number,
                    },
                    strike: {
                        type: Number,
                    },
                    slash: {
                        type: Number,
                    },
                    pierce: {
                        type: Number,
                    },
                    mag: {
                        type: Number,
                    },
                    fire: {
                        type: Number,
                    },
                    light: {
                        type: Number,
                    },
                    holy: {
                        type: Number
                    },
                }
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
                    phy: {
                        type: Number,
                    },
                    strike: {
                        type: Number,
                    },
                    slash: {
                        type: Number,
                    },
                    pierce: {
                        type: Number,
                    },
                    mag: {
                        type: Number,
                    },
                    fire: {
                        type: Number,
                    },
                    light: {
                        type: Number,
                    },
                    holy: {
                        type: Number
                    },
                }
            ],
            resistance: [
                {
                    immunity: {
                        type: Number,
                    },
                    robustness: {
                        type: Number,
                    },
                    focus: {
                        type: Number,
                    },
                    vitality: {
                        type: Number,
                    },
                    poise: {
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
                    phy: {
                        type: Number,
                    },
                    strike: {
                        type: Number,
                    },
                    slash: {
                        type: Number,
                    },
                    pierce: {
                        type: Number,
                    },
                    mag: {
                        type: Number,
                    },
                    fire: {
                        type: Number,
                    },
                    light: {
                        type: Number,
                    },
                    holy: {
                        type: Number
                    },
                }
            ],
            resistance: [
                {
                    immunity: {
                        type: Number,
                    },
                    robustness: {
                        type: Number,
                    },
                    focus: {
                        type: Number,
                    },
                    vitality: {
                        type: Number,
                    },
                    poise: {
                        type: Number,
                    },
                },
            ],
            weight: {
                type: Number
            },
        },
    }],
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
                    phy: {
                        type: Number,
                    },
                    mag: {
                        type: Number,
                    },
                    fire: {
                        type: Number,
                    },
                    light: {
                        type: Number,
                    },
                    holy: {
                        type: Number
                    },
                    crit: {
                        type: Number
                    },
                    rng: {
                        type: Number
                    },
                }
            ],
            defence: [
                {
                    phy: {
                        type: Number,
                    },
                    mag: {
                        type: Number,
                    },
                    fire: {
                        type: Number,
                    },
                    light: {
                        type: Number,
                    },
                    holy: {
                        type: Number
                    },
                    Boost: {
                        type: Number
                    },
                },
            ],
            scalesWith: [
                {
                    str: {
                        type: String,
                    },
                    dex: {
                        type: String,
                    },
                    Arc: {
                        type: String,
                    },
                    Fai: {
                        type: String,
                    },
                    Int: {
                        type: String,
                    },
                },
            ],
            requiredAttributes: [
                {
                    str: {
                        type: Number,
                    },
                    dex: {
                        type: Number,
                    },
                    Arc: {
                        type: Number,
                    },
                    Fai: {
                        type: Number,
                    },
                    Int: {
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
                    phy: {
                        type: Number,
                    },
                    mag: {
                        type: Number,
                    },
                    fire: {
                        type: Number,
                    },
                    light: {
                        type: Number,
                    },
                    holy: {
                        type: Number
                    },
                    Crit: {
                        type: Number
                    },
                    rng: {
                        type: Number
                    },
                },
            ],
            defence: [
                {
                    phy: {
                        type: Number,
                    },
                    mag: {
                        type: Number,
                    },
                    fire: {
                        type: Number,
                    },
                    light: {
                        type: Number,
                    },
                    holy: {
                        type: Number
                    },
                    Boost: {
                        type: Number
                    },
                },
            ],
            scalesWith: [
                {
                    str: {
                        type: String,
                    },
                    dex: {
                        type: String,
                    },
                    Arc: {
                        type: String,
                    },
                    Fai: {
                        type: String,
                    },
                    Int: {
                        type: String,
                    },
                },
            ],
            requiredAttributes: [
                {
                    str: {
                        type: Number,
                    },
                    dex: {
                        type: Number,
                    },
                    Arc: {
                        type: Number,
                    },
                    Fai: {
                        type: Number,
                    },
                    Int: {
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
                    phy: {
                        type: Number,
                    },
                    mag: {
                        type: Number,
                    },
                    fire: {
                        type: Number,
                    },
                    light: {
                        type: Number,
                    },
                    holy: {
                        type: Number
                    },
                    Crit: {
                        type: Number
                    },
                    rng: {
                        type: Number
                    },
                },
            ],
            defence: [
                {
                    phy: {
                        type: Number,
                    },
                    mag: {
                        type: Number,
                    },
                    fire: {
                        type: Number,
                    },
                    light: {
                        type: Number,
                    },
                    holy: {
                        type: Number
                    },
                    Boost: {
                        type: Number
                    },
                },
            ],
            scalesWith: [
                {
                    str: {
                        type: String,
                    },
                    dex: {
                        type: String,
                    },
                    Arc: {
                        type: String,
                    },
                    Fai: {
                        type: String,
                    },
                    Int: {
                        type: String,
                    },
                },
            ],
            requiredAttributes: [
                {
                    str: {
                        type: Number,
                    },
                    dex: {
                        type: Number,
                    },
                    Arc: {
                        type: Number,
                    },
                    Fai: {
                        type: Number,
                    },
                    Int: {
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
                    phy: {
                        type: Number,
                    },
                    mag: {
                        type: Number,
                    },
                    fire: {
                        type: Number,
                    },
                    light: {
                        type: Number,
                    },
                    holy: {
                        type: Number
                    },
                    Crit: {
                        type: Number
                    },
                    rng: {
                        type: Number
                    },
                },
            ],
            defence: [
                {
                    phy: {
                        type: Number,
                    },
                    mag: {
                        type: Number,
                    },
                    fire: {
                        type: Number,
                    },
                    light: {
                        type: Number,
                    },
                    holy: {
                        type: Number
                    },
                    Boost: {
                        type: Number
                    },
                },
            ],
            scalesWith: [
                {
                    str: {
                        type: String,
                    },
                    dex: {
                        type: String,
                    },
                    Arc: {
                        type: String,
                    },
                    Fai: {
                        type: String,
                    },
                    Int: {
                        type: String,
                    },
                },
            ],
            requiredAttributes: [
                {
                    str: {
                        type: Number,
                    },
                    dex: {
                        type: Number,
                    },
                    Arc: {
                        type: Number,
                    },
                    Fai: {
                        type: Number,
                    },
                    Int: {
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
            phy: {
                type: Number,
            },
            mag: {
                type: Number,
            },
            fire: {
                type: Number,
            },
            light: {
                type: Number,
            },
            holy: {
                type: Number
            },
            Crit: {
                type: Number
            },
        }],
        defence: [{
            phy: {
                type: Number,
            },
            mag: {
                type: Number,
            },
            fire: {
                type: Number,
            },
            light: {
                type: Number,
            },
            holy: {
                type: Number
            },
            Boost: {
                type: Number
            },
        }],
        category: {
            type: String,
        },
        scaleWith: [{
            str: {
                type: String,
            },
            dex: {
                type: String,
            },
            Arc: {
                type: String,
            },
            Fai: {
                type: String,
            },
            Int: {
                type: String,
            },
        }],
        requiredAttributes: [{
            str: {
                type: Number,
            },
            dex: {
                type: Number,
            },
            Arc: {
                type: Number,
            },
            Fai: {
                type: Number,
            },
            Int: {
                type: Number,
            },
        }],
        weight: {
            type: Number
        }
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


