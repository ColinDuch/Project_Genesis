ServerEvents.recipes(ProjectGenesis => {

    ProjectGenesis.recipes.powah.energizing([
        'create:blaze_cake',
        'mysticalagradditions:creative_essence',
        'mysticalagradditions:creative_essence',
        'mysticalagradditions:creative_essence',
        'mysticalagradditions:creative_essence'], 
        'create:creative_blaze_cake', 50000000)

    ProjectGenesis.recipes.powah.energizing([
        'mekanism:creative_energy_cube',
        'mekanism:creative_energy_cube',
        'create:creative_blaze_cake',
        'mekanism:creative_energy_cube',
        'mekanism:creative_energy_cube'],
        'mekanism:creative_energy_cube[mekanism:side_config={config:{energy:{eject:1b,side:{back:"output",bottom:"output",front:"output",left:"output",right:"output",top:"output"}},items:{side:{back:"input",bottom:"input",front:"output",left:"input",right:"input",top:"input"}}}},mekanism:energy={energy_containers:[L;9223372036854775807L]}]', 100000000)

    ProjectGenesis.recipes.powah.energizing([
        'ae2:dense_energy_cell',
        'ae2:dense_energy_cell',
        'create:creative_blaze_cake',
        'ae2:dense_energy_cell',
        'ae2:dense_energy_cell'],
        'ae2:creative_energy_cell', 100000000)

    ProjectGenesis.recipes.powah.energizing([
        'powah:energy_cell_nitro',
        'powah:energy_cell_nitro',
        'create:creative_blaze_cake',
        'powah:energy_cell_nitro',
        'powah:energy_cell_nitro'],
        'powah:energy_cell_creative', 100000000)

})