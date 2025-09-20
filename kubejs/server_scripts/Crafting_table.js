ServerEvents.recipes(ProjectGenesis => {
  
  ProjectGenesis.remove({ output: 'enderio:powdered_copper'})
  ProjectGenesis.remove({ id: 'enderio:sag_milling/raw_copper'})
  ProjectGenesis.remove({ id: 'occultism:copper_dust' })

  
  ProjectGenesis.remove({ output: 'mysticalagriculture:master_infusion_crystal'})

  ProjectGenesis.shaped(
  Item.of('mysticalagriculture:master_infusion_crystal', 1),
  [
    'GPG',
    'PCP',
    'GPG'
  ],
  {
    G: 'mysticalagradditions:insanium_gemstone',
    P: 'mysticalagriculture:prosperity_shard',
    C: 'matc:supremium_crystal'
  })

  ProjectGenesis.remove({ output: 'extendedcrafting:black_iron_ingot'})

  ProjectGenesis.shaped(
  Item.of('extendedcrafting:black_iron_ingot', 4),
  [
    'GPG',
    'PCP',
    'GPG'
  ],
  {
    G: 'minecraft:netherite_ingot',
    P: 'enderio:dark_steel_ingot',
    C: 'minecraft:crying_obsidian'
  })

  ProjectGenesis.shapeless(
    Item.of('extendedcrafting:black_iron_ingot', 9),
    [ 'extendedcrafting:black_iron_block']
  )

  ProjectGenesis.shapeless(
    Item.of('extendedcrafting:black_iron_ingot', 1),
    [ '9x extendedcrafting:black_iron_nugget']
  )

  ProjectGenesis.remove({ output :'rftoolsbase:machine_frame'})

  ProjectGenesis.shaped(
    Item.of('rftoolsbase:machine_frame'),
    [
     'DBD',
     'CAC',
     'DBD'
    ],
    {
      A:'mekanism:steel_casing',
      B:'rftoolsbase:machine_base',
      C:'rftoolsbase:infused_enderpearl',
      D:'rftoolsbase:infused_diamond'
    }
  )

  ProjectGenesis.remove({ output :'rftoolsbase:machine_base'})

  ProjectGenesis.shaped(
    Item.of('rftoolsbase:machine_base'),
    [
     '   ',
     'GGG',
     'SSS'
    ],
    {
      S:'pneumaticcraft:reinforced_stone',
      G:'minecraft:gold_nugget'
    }
  )

  ProjectGenesis.remove({output: 'mekanism:metallurgic_infuser'})
  ProjectGenesis.shaped(
    Item.of('mekanism:metallurgic_infuser'),
    [
      'IFI',
      'MSM',
      'IFI'
    ],
    {
      I: 'mekanism:ingot_osmium' ,
      F: 'ironfurnaces:iron_furnace',
      M: 'industrialforegoing:plastic',
      S: 'powah:steel_energized'
    }
  )

  ProjectGenesis.remove({output: 'powah:dielectric_casing'})
  ProjectGenesis.shaped(
    Item.of('powah:dielectric_casing'),
    [
      'IGI',
      'FPF',
      'IGI'
    ],
    {
      I: 'pneumaticcraft:ingot_iron_compressed' ,
      F: 'powah:dielectric_rod',
      G: 'powah:dielectric_rod_horizontal',
      P: 'create:precision_mechanism'
    }
  )

  ProjectGenesis.remove({output: 'ironfurnaces:copper_furnace'})
  ProjectGenesis.shaped(
    Item.of('ironfurnaces:copper_furnace'),
    [
      'BAB',
      'ACA',
      'BAB'
    ],
    {
      A: 'create:copper_sheet',
      B: 'minecraft:copper_ingot',
      C: 'minecraft:furnace'
    }
  )

  ProjectGenesis.remove({output: 'ironfurnaces:upgrade_copper'})
  ProjectGenesis.shaped(
    Item.of('ironfurnaces:upgrade_copper'),
    [
      'BAB',
      'ACA',
      'BAB'
    ],
    {
      A: 'create:copper_sheet',
      B: 'minecraft:copper_ingot',
      C: '#c:cobblestones'
    }
  )

  ProjectGenesis.remove({output: 'ironfurnaces:iron_furnace'})
  ProjectGenesis.shaped(
    Item.of('ironfurnaces:iron_furnace'),
    [
      'BAB',
      'ACA',
      'BAB'
    ],
    {
      A: 'create:iron_sheet',
      B: 'createaddition:iron_rod',
      C: 'ironfurnaces:copper_furnace'
    }
  )

  ProjectGenesis.remove({output: 'ironfurnaces:upgrade_iron'})
  ProjectGenesis.shaped(
    Item.of('ironfurnaces:upgrade_iron'),
    [
      'BAB',
      'ACA',
      'BAB'
    ],
    {
      A: 'create:iron_sheet',
      B: 'createaddition:iron_rod',
      C: '#c:cobblestones'
    }
  )

  ProjectGenesis.remove({output: 'ironfurnaces:upgrade_iron2'})
  ProjectGenesis.shaped(
    Item.of('ironfurnaces:upgrade_iron2'),
    [
      'BAB',
      'ACA',
      'BAB'
    ],
    {
      A: 'create:iron_sheet',
      B: 'minecraft:iron_ingot',
      C: '#c:cobblestones'
    }
  )

  ProjectGenesis.remove({output: 'ironfurnaces:silver_furnace'})
  ProjectGenesis.shaped(
    Item.of('ironfurnaces:silver_furnace'),
    [
      'BAB',
      'ACA',
      'BAB'
    ],
    {
      A: 'kubejs:silver_sheet',
      B: 'occultism:silver_ingot',
      C: 'ironfurnaces:iron_furnace'
    }
  )

  ProjectGenesis.remove({output: 'ironfurnaces:upgrade_silver'})
  ProjectGenesis.shaped(
    Item.of('ironfurnaces:upgrade_silver'),
    [
      'BAB',
      'ACA',
      'BAB'
    ],
    {
      A: 'kubejs:silver_sheet',
      B: 'occultism:silver_ingot',
      C: 'minecraft:copper_block'
    }
  )

  ProjectGenesis.remove({output: 'ironfurnaces:upgrade_silver2'})
  ProjectGenesis.shaped(
    Item.of('ironfurnaces:upgrade_silver2'),
    [
      'BAB',
      'ACA',
      'BAB'
    ],
    {
      A: 'kubejs:silver_sheet',
      B: 'occultism:silver_ingot',
      C: 'minecraft:iron_ingot'
    }
  )

  ProjectGenesis.remove({output: 'ironfurnaces:gold_furnace'})
  ProjectGenesis.shaped(
    Item.of('ironfurnaces:gold_furnace'),
    [
      'BAB',
      'ACA',
      'BAB'
    ],
    {
      A: 'create:golden_sheet',
      B: 'createaddition:gold_rod',
      C: 'ironfurnaces:silver_furnace'
    }
  )

  ProjectGenesis.remove({output: 'ironfurnaces:upgrade_gold'})
  ProjectGenesis.shaped(
    Item.of('ironfurnaces:upgrade_gold'),
    [
      'BAB',
      'ACA',
      'BAB'
    ],
    {
      A: 'create:golden_sheet',
      B: 'createaddition:gold_rod',
      C: 'minecraft:iron_block'
    }
  )

  ProjectGenesis.remove({output: 'ironfurnaces:upgrade_gold2'})
  ProjectGenesis.shaped(
    Item.of('ironfurnaces:upgrade_gold2'),
    [
      'BAB',
      'ACA',
      'BAB'
    ],
    {
      A: 'create:golden_sheet',
      B: 'minecraft:gold_ingot',
      C: 'occultism:silver_ingot'
    }
  )

  ProjectGenesis.remove({output: 'ironfurnaces:diamond_furnace'})
  ProjectGenesis.shaped(
    Item.of('ironfurnaces:diamond_furnace'),
    [
      'BAB',
      'ACA',
      'BAB'
    ],
    {
      A: 'mekanism:enriched_diamond',
      B: 'minecraft:diamond',
      C: 'ironfurnaces:gold_furnace'
    }
  )

  ProjectGenesis.remove({output: 'ironfurnaces:upgrade_diamond'})
  ProjectGenesis.shaped(
    Item.of('ironfurnaces:upgrade_diamond'),
    [
      'BAB',
      'ACA',
      'BAB'
    ],
    {
      A: 'mekanism:enriched_diamond',
      B: 'minecraft:diamond',
      C: 'minecraft:gold_block'
    }
  )

  ProjectGenesis.remove({output: 'ironfurnaces:crystal_furnace'})
  ProjectGenesis.shaped(
    Item.of('ironfurnaces:crystal_furnace'),
    [
      'BAB',
      'ACA',
      'BAB'
    ],
    {
      A: 'mekanism:structural_glass',
      B: 'rftoolsbase:infused_diamond',
      C: 'ironfurnaces:diamond_furnace'
    }
  )

  ProjectGenesis.remove({output: 'ironfurnaces:upgrade_crystal'})
  ProjectGenesis.shaped(
    Item.of('ironfurnaces:upgrade_crystal'),
    [
      'BAB',
      'ACA',
      'BAB'
    ],
    {
      A: 'mekanism:structural_glass',
      B: 'rftoolsbase:infused_diamond',
      C: 'minecraft:diamond_block'
    }
  )

  ProjectGenesis.remove({output: 'ironfurnaces:emerald_furnace'})
  ProjectGenesis.shaped(
    Item.of('ironfurnaces:emerald_furnace'),
    [
      'BAB',
      'ACA',
      'BAB'
    ],
    {
      A: 'minecraft:emerald',
      B: 'powah:crystal_spirited',
      C: 'ironfurnaces:diamond_furnace'
    }
  )

  ProjectGenesis.remove({output: 'ironfurnaces:upgrade_emerald'})
  ProjectGenesis.shaped(
    Item.of('ironfurnaces:upgrade_emerald'),
    [
      'BAB',
      'ACA',
      'BAB'
    ],
    {
      A: 'minecraft:emerald',
      B: 'powah:crystal_spirited',
      C: 'minecraft:diamond_block'
    }
  )

  ProjectGenesis.remove({output: 'ironfurnaces:obsidian_furnace'})
  ProjectGenesis.shaped(
    Item.of('ironfurnaces:obsidian_furnace'),
    [
      'BAB',
      'ACA',
      'BAB'
    ],
    {
      A: 'mekanism:enriched_refined_obsidian',
      B: 'powah:crystal_blazing',
      C: 'ironfurnaces:emerald_furnace'
    }
  )

  ProjectGenesis.shaped(
    Item.of('ironfurnaces:obsidian_furnace'),
    [
      'BAB',
      'ACA',
      'BAB'
    ],
    {
      A: 'mekanism:enriched_refined_obsidian',
      B: 'powah:crystal_blazing',
      C: 'ironfurnaces:crystal_furnace'
    }
  )

  ProjectGenesis.remove({output: 'ironfurnaces:upgrade_obsidian'})
  ProjectGenesis.shaped(
    Item.of('ironfurnaces:upgrade_obsidian'),
    [
      'BAB',
      'ACA',
      'BAB'
    ],
    {
      A: 'mekanism:enriched_refined_obsidian',
      B: 'powah:crystal_blazing',
      C: 'minecraft:emerald_block'
    }
  )

  ProjectGenesis.remove({output: 'ironfurnaces:upgrade_obsidian2'})
  ProjectGenesis.shaped(
    Item.of('ironfurnaces:upgrade_obsidian2'),
    [
      'BAB',
      'ACA',
      'BAB'
    ],
    {
      A: 'mekanism:enriched_refined_obsidian',
      B: 'powah:crystal_blazing',
      C: 'minecraft:diamond_block'
    }
  )

  ProjectGenesis.remove({output: 'create:andesite_alloy'})
  ProjectGenesis.shaped(
    Item.of('create:andesite_alloy', 2),
    [
      'CAC',
      'ABA',
      'CAC'
    ],
    {
      A: 'minecraft:andesite',
      B: 'minecraft:raw_iron',
      C: 'minecraft:iron_nugget'
    }
  )


})