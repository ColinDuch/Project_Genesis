ServerEvents.recipes(ProjectGenesis => {

    ProjectGenesis.remove({ output: 'projecte:philosophers_stone'})

    ProjectGenesis.custom({     //philosopher stone projectE
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "   BCB   ",
            "  HDEDH  ",
            " H FGF H ",
            "BDFJIJFDB",
            "CEGIAIGEC",
            "BDFJIJFDB",
            " H FGF H ",
            "  HDEDH  ",
            "   BCB   "
        ],
        "key": {
            "A": {"item":'projecte:klein_star_omega' },
            "B": {"item":'mysticalagradditions:creative_essence'},
            "C": {"item":'cataclysm:cursium_upgrade_smithing_template'},
            "D": {"item":'extendedcrafting:ender_star'},
            "E": {"item":'create:creative_blaze_cake'},
            "F": {"item":'extendedcrafting:the_ultimate_ingot'},
            "G": {"item":'extendedcrafting:ultimate_singularity'},
            "H": {"item":'cataclysm:black_steel_ingot'},
            "I": {"item":'ironfurnaces:rainbow_core'},
            "J": {"item":'extendedcrafting:flux_star'}
        },
        "result": {"id": 'projecte:philosophers_stone'}
    })

    ProjectGenesis.custom({     //tome of knowledge projectE
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "EEBBFBBEE",
        "EZUIFIUYE",
        "BUHASATUB",
        "BIA D AIB",
        "FFSC MSFF",
        "BIA R AIB",
        "BUGASAVUB",
        "EXUIFIUWE",
        "EEBBFBBEE"
      ],
      "key": {
        "A": {"tag": 'c:pellets/antimatter'},
        "B": {"tag": 'c:books'},
        "C": {"tag": 'forge:mekanism_creative_chemical_tank'},
        "D": {"tag": 'forge:ars_nouveau_creative_spell_book'},
        "E": {"tag": "forge:ender_star"},
        "F": {"tag": 'forge:flux_star'},
        "G": {"tag": 'forge:mekanism_creative_energy_cube'},
        "H": {"item": 'powah:energy_cell_creative'},
        "I": {"tag": 'c:ingots/the_ultimate'},
        "M": {"tag": 'forge:mekanism_creative_fluid_tank'},
        "R": {"tag": 'forge:ironfurnaces_million_furnace'},
        "S": {"tag": 'forge:ultimate_singularity'},
        "T": {"tag": 'forge:create_creative_fluid_tank'},
        "U": {"tag": 'forge:ultimate_catalyst'},
        "V": {"tag": 'forge:ae_dimension_card'},
        "W": {"tag": 'forge:creative_essence'},
        "X": {"tag": 'forge:ae2_creative_energy_cell'},
        "Y": {"tag": 'forge:creative_blaze_cake'},
        "Z": {"tag": 'forge:philosophers_stone'}
      },
      "result": {"id": 'projecte:tome'}
    })

    ProjectGenesis.custom({     // creative vending upgrade storage
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "EEBBFBBEE",
        "EZUIFIUYE",
        "BUHASATUB",
        "BIA D AIB",
        "FFSC MSFF",
        "BIA R AIB",
        "BUGASAVUB",
        "EXUIFIUWE",
        "EEBBFBBEE"
      ],
      "key": {
        "A": {"tag": 'c:pellets/antimatter'},
        "B": {"tag": 'forge:functionalstorage_max_storage_upgrade'},
        "C": {"tag": 'forge:mekanism_creative_chemical_tank'},
        "D": {"tag": 'forge:ars_nouveau_creative_spell_book'},
        "E": {"tag": "forge:ender_star"},
        "F": {"tag": 'forge:flux_star'},
        "G": {"tag": 'forge:mekanism_creative_energy_cube'},
        "H": {"item": 'powah:energy_cell_creative'},
        "I": {"tag": 'c:ingots/the_ultimate'},
        "M": {"tag": 'forge:mekanism_creative_fluid_tank'},
        "R": {"tag": 'forge:ironfurnaces_million_furnace'},
        "S": {"tag": 'forge:ultimate_singularity'},
        "T": {"tag": 'forge:create_creative_fluid_tank'},
        "U": {"tag": 'forge:ultimate_catalyst'},
        "V": {"tag": 'forge:ae_dimension_card'},
        "W": {"tag": 'forge:creative_essence'},
        "X": {"tag": 'forge:ae2_creative_energy_cell'},
        "Y": {"tag": 'forge:creative_blaze_cake'},
        "Z": {"tag": 'forge:philosophers_stone'}
      },
      "result": {"id": 'functionalstorage:creative_vending_upgrade'}
  })

    ProjectGenesis.custom({     //Creative essence mystical
        "type": "extendedcrafting:compressor",
        "power_cost": 50000,
        "ingredient": {
        "item": 'mysticalagradditions:insanium_essence',
        "count": 32
        },
        "catalyst": {
        "item": 'extendedcrafting:enhanced_ender_catalyst'
        },
        "result": {
        "id": 'mysticalagradditions:creative_essence'
        }
    })

    ProjectGenesis.custom({     //ultimate ingot 
        "type": "extendedcrafting:shapeless_table",
        "ingredients": [
        {"item": 'create:brass_ingot'},
        {"item": 'create:zinc_ingot'},
        {"item": 'createaddition:electrum_ingot'},
        {"item": 'bigreactors:ludicrite_ingot'},
        {"item": 'bigreactors:ridiculite_ingot'},
        {"item": 'bigreactors:yellorium_ingot'},
        {"item": 'bigreactors:insanite_ingot'},
        {"item": 'bigreactors:cyanite_ingot'},
        {"item": 'bigreactors:inanite_ingot'},
        {"item": 'bigreactors:blutonium_ingot'},
        {"item": 'mysticalagriculture:tertium_ingot'},
        {"item": 'mysticalagriculture:soulium_ingot'},
        {"item": 'mysticalagriculture:inferium_ingot'},
        {"item": 'mysticalagriculture:prudentium_ingot'},
        {"item": 'mysticalagradditions:insanium_ingot'},
        {"item": 'mysticalagriculture:imperium_ingot'},
        {"item": 'mysticalagriculture:supremium_ingot'},
        {"item": 'mysticalagriculture:awakened_supremium_ingot'},
        {"item": 'mysticalagriculture:prosperity_ingot'},
        {"item": 'occultism:iesnium_ingot'},
        {"item": 'occultism:silver_ingot'},
        {"item": 'minecraft:netherite_ingot'},
        {"item": 'minecraft:iron_ingot'},
        {"item": 'minecraft:copper_ingot'},
        {"item": 'minecraft:gold_ingot'},
        {"item": 'twilightforest:knightmetal_ingot'},
        {"item": 'twilightforest:fiery_ingot'},
        {"item": 'twilightforest:ironwood_ingot'},
        {"item": 'extendedcrafting:crystaltine_ingot'},
        {"item": 'extendedcrafting:enhanced_ender_ingot'},
        {"item": 'extendedcrafting:enhanced_redstone_ingot'},
        {"item": 'extendedcrafting:ender_ingot'},
        {"item": 'extendedcrafting:black_iron_ingot'},
        {"item": 'extendedcrafting:redstone_ingot'},
        {"item": 'enderio:redstone_alloy_ingot'},
        {"item": 'enderio:conductive_alloy_ingot'},
        {"item": 'enderio:pulsating_alloy_ingot'},
        {"item": 'enderio:dark_steel_ingot'},
        {"item": 'enderio:soularium_ingot'},
        {"item": 'enderio:end_steel_ingot'},
        {"item": 'enderio:copper_alloy_ingot'},
        {"item": 'enderio:energetic_alloy_ingot'},
        {"item": 'enderio:vibrant_alloy_ingot'},
        {"item": 'mekanism:ingot_osmium'},
        {"item": 'mekanism:ingot_steel'},
        {"item": 'mekanism:ingot_refined_glowstone'},
        {"item": 'mekanism:ingot_bronze'},
        {"item": 'mekanism:ingot_refined_obsidian'},
        {"item": 'mekanism:ingot_lead'},
        {"item": 'mekanism:ingot_uranium'},
        {"item": 'mekanism:ingot_tin'}
        ],
        "result": {"id": 'extendedcrafting:the_ultimate_ingot'}
    })

    ProjectGenesis.custom({     //creative energy cube meka
        "type": "extendedcrafting:shaped_table",
        "pattern": [
        "ABCDCBA",
        "BEFGFEB",
        "CFHHHFC",
        "DGHIHGD",
        "CFHHHFC",
        "BEFGFEB",
        "ABCDCBA"
        ],
        "key": {
            "A": {"item":'mekanism:ingot_steel' },
            "B": {"item":'mekanism:ultimate_energy_cube'},
            "C": {"item":'mekanism:ultimate_universal_cable'},
            "D": {"item":'mysticalagradditions:creative_essence'},
            "E": {"item":'mekanism:alloy_atomic'},
            "F": {"item":'mekanism:ultimate_control_circuit'},
            "G": {"item":'enderio:dark_steel_ingot'},
            "H": {"item":'enderio:pulsating_alloy_ingot'},
            "I": {"item":'extendedcrafting:black_iron_slate'}
        },
        "result": {"id": 'mekanism:creative_energy_cube'}
    })

    ProjectGenesis.custom({     //creative fluid tank meka
        "type": "extendedcrafting:shaped_table",
        "pattern": [
        "ABCDCBA",
        "BEFGFEB",
        "CFHHHFC",
        "DGHIHGD",
        "CFHHHFC",
        "BEFGFEB",
        "ABCDCBA"
        ],
        "key": {
            "A": {"item":'mekanism:ingot_steel' },
            "B": {"item":'mekanism:ultimate_fluid_tank'},
            "C": {"item":'mekanism:ultimate_mechanical_pipe'},
            "D": {"item":'mysticalagradditions:creative_essence'},
            "E": {"item":'mekanism:alloy_atomic'},
            "F": {"item":'mekanism:ultimate_control_circuit'},
            "G": {"item":'enderio:dark_steel_ingot'},
            "H": {"item":'enderio:pulsating_alloy_ingot'},
            "I": {"item":'extendedcrafting:black_iron_slate'}
        },
        "result": {"id": 'mekanism:creative_fluid_tank'}
    })

    ProjectGenesis.custom({     //creative chemical tank meka
        "type": "extendedcrafting:shaped_table",
        "pattern": [
        "ABCDCBA",
        "BEFGFEB",
        "CFHHHFC",
        "DGHIHGD",
        "CFHHHFC",
        "BEFGFEB",
        "ABCDCBA"
        ],
        "key": {
            "A": {"item":'mekanism:ingot_steel' },
            "B": {"item":'mekanism:ultimate_chemical_tank'},
            "C": {"item":'mekanism:ultimate_pressurized_tube'},
            "D": {"item":'mysticalagradditions:creative_essence'},
            "E": {"item":'mekanism:alloy_atomic'},
            "F": {"item":'mekanism:ultimate_control_circuit'},
            "G": {"item":'enderio:dark_steel_ingot'},
            "H": {"item":'enderio:pulsating_alloy_ingot'},
            "I": {"item":'extendedcrafting:black_iron_slate'}
        },
        "result": {"id": 'mekanism:creative_chemical_tank'}
    })

})