ServerEvents.recipes(ProjectGenesis  => {

/*   ProjectGenesis.custom({ // Working
    type: 'create:milling',
    ingredients: [{ item: 'minecraft:cobblestone' }],
    processing_time: 100,
    results: [
      { chance: 0.75, id: 'minecraft:gravel' },
      { chance: 0.25, id: 'minecraft:sand' }]
  }).id('custom:milling/cobble_to_sand_gravel') */

    ProjectGenesis.remove({output:'powah:energizing_orb'})
    ProjectGenesis.custom({ //energizing orb
    "type": "create:mechanical_crafting",
    "accept_mirrored": true,
    "category": "misc",
    "key": {
        "A": {"item": 'powah:dielectric_rod_horizontal'},
        "B": {"item": 'pneumaticcraft:compressed_stone'},
        "C": {"item": 'mysticalagriculture:soul_glass'},
        "D": {"item": 'powah:dielectric_rod'},
        "E": {"item": 'occultism:storage_stabilizer_tier1'},
        "F": {"item": 'powah:dielectric_casing'},
        "G": {"item": 'minecraft:hopper'},
        "H": {"item": 'powah:energizing_rod_starter'}
    },
    "pattern": [
        " CHC ",
        "CDGDC",
        "CDFDC",
        "CDEDC",
        "ABBBA"
    ],
    "result": {
        "count": 1,
        "id": 'powah:energizing_orb'
    },
    "show_notification": false
    }) 

    ProjectGenesis.remove({output:'mekanism:steel_casing'})

    ProjectGenesis.custom({ // steel casing 
        "type": "create:sequenced_assembly",
        "ingredient": { "item": 'industrialforegoing:machine_frame_simple' },
        "loops": 2,
        "results": [
            {
                "chance": 80.0,
                "id": 'mekanism:steel_casing'
            },
            {
                "chance": 20.0,
                "id": 'industrialforegoing:machine_frame_simple'
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": 'kubejs:mekanism_mechanism'},
                    { "item": 'kubejs:mekanism_mechanism' }
                ],
                "results": [
                    { "id": 'industrialforegoing:machine_frame_simple' }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": 'mekanism:ingot_steel' },
                    { "item": 'mekanism:ingot_steel' }
                ],
                "results": [
                    { "id": 'industrialforegoing:machine_frame_simple' }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": 'enderio:dark_bimetal_gear' },
                    { "item": 'enderio:dark_bimetal_gear' }
                ],
                "results": [
                    { "id": 'industrialforegoing:machine_frame_simple' }
                ]
            }
        ],
        "transitional_item": { "id": 'industrialforegoing:machine_frame_simple' }
    })

    ProjectGenesis.custom({ // mekanism mechanism 
        "type": "create:sequenced_assembly",
        "ingredient": { "item": 'create:precision_mechanism' },
        "loops": 3,
        "results": [
            {
                "chance": 90.0,
                "id": 'kubejs:mekanism_mechanism'
            },
            {
                "chance": 10.0,
                "id": 'create:precision_mechanism'
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": 'mekanism:ingot_osmium'},
                    { "item": 'mekanism:ingot_osmium' }
                ],
                "results": [
                    { "id": 'create:precision_mechanism' }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": 'mekanism:ingot_steel' },
                    { "item": 'mekanism:ingot_steel' }
                ],
                "results": [
                    { "id": 'create:precision_mechanism' }
                ]
            }
        ],
        "transitional_item": { "id": 'create:precision_mechanism' }
    })

    ProjectGenesis.custom({
        "type": "create:pressing",
        "ingredients": [
            {"item": 'occultism:silver_ingot'}
        ],
        "results": [
            {"item":{"id": 'kubejs:silver_sheet'}}
        ]
    })


})