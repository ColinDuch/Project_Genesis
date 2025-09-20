ServerEvents.recipes(ProjectGenesis => {

    ProjectGenesis.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": false,
        "pedestalItems": [
        {"item": 'ars_nouveau:source_gem'},
        {"item": 'ars_nouveau:source_gem'},
        {"item": 'ars_nouveau:source_gem'},
        {"item": 'mysticalagradditions:creative_essence'},
        {"item": 'mysticalagradditions:creative_essence'},
        {"item": 'mysticalagradditions:creative_essence'},
        {"item": 'mysticalagradditions:creative_essence'},
        {"item": 'create:creative_blaze_cake'}
        ],
        "reagent": {
        "item": 'ars_nouveau:source_jar'
        },
        "result": {
        "count": 1,
        "id": 'ars_nouveau:creative_source_jar'
        },
        "sourceCost": 50000
    })

    ProjectGenesis.remove({output:'tiab:time_in_a_bottle'})

    ProjectGenesis.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": false,
        "pedestalItems": [
        {"item": 'minecraft:clock'},
        {"item": 'mekanism:enriched_diamond'},
        {"item": 'supplementaries:hourglass'},
        {"item": 'ars_nouveau:glyph_duration_down'},
        {"item": 'supplementaries:hourglass'},
        {"item": 'ars_nouveau:glyph_extend_time'},
        {"item": 'mekanism:enriched_diamond'},
        {"item": 'minecraft:dragon_breath'}
        ],
        "reagent": {
        "item": 'ars_nouveau:potion_flask_extend_time'
        },
        "result": {
        "count": 1,
        "id": 'tiab:time_in_a_bottle'
        },
        "sourceCost": 5000
    })


})