ServerEvents.recipes(ProjectGenesis => {
  ProjectGenesis.remove({ output: 'mekanism:alloy_infused'})
  
  ProjectGenesis.custom({
    'type': 'mekanism:metallurgic_infusing',
    'chemical_input':{
      'amount':10,
      'tag': 'mekanism:redstone'
    },
    'item_input':{
      'count': 1,
      'item': 'create:polished_rose_quartz'
    },
    'output':{
      'count':1,
      'id': 'mekanism:alloy_infused'
    },
    'per_tick_usage': false
  })
  
})