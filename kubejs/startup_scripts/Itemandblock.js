// Listen to item registry event
StartupEvents.registry('item', ProjectGenesis  => {
  ProjectGenesis.create('mekanism_mechanism'),
  ProjectGenesis.create('silver_sheet')
})