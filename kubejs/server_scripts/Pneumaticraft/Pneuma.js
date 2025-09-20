ServerEvents.recipes(ProjectGenesis => {

    ProjectGenesis.remove({ output: 'powah:dielectric_paste' })
    ProjectGenesis.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
            "count": 1,
            "item": 'minecraft:clay_ball'
            },
            {
            "count": 2,
            "tag": 'minecraft:coals'
            },
            {
            "count": 1,
            "item": 'minecraft:blaze_powder'
            }
        ],
        "pressure": 3,
        "results": [
            {
            "count": 16,
            "id": 'powah:dielectric_paste'
            }
        ]
    })

})