ServerEvents.recipes(event => {

    event.shaped(
            Item.of('minecraft:compass'),
            [
                    ' A ',
                    'ABA',
                    ' A '
            ],
            {
                    A: 'minecraft:iron_nugget',
                    B: 'minecraft:redstone'
            }
    )
     event.shaped(
            Item.of('artifacts:chorus_totem'),
            [
                    ' A ',
                    'BCB',
                    ' A '
            ],
            {
                    B: 'minecraft:ender_pearl',
                    C: 'minecraft:totem_of_undying',
                    A: 'minecraft:chorus_fruit'
            }
    )
    event.shaped(
            Item.of('artifacts:lucky_scarf'),
            [
                    'A  ',
                    'BCB',
                    '  A'
            ],
            {
                    C: 'minecraft:rabbit_foot',
                    A: 'minecraft:lime_carpet',
                    B: 'minecraft:lime_wool'
            }
    )
    event.shaped(
            Item.of('artifacts:scarf_of_invisibility'),
            [
                    'ABC',
                    'BDB',
                    'CBE'
            ],
            {
                    C: 'minecraft:glass',
                    A: 'minecraft:emerald',
                    B: 'minecraft:blue_dye',
                    E: 'minecraft:potion[potion_contents={potion:"minecraft:invisibility"}]',
                    D: 'artifacts:lucky_scarf'
            }
    )
    event.shaped(
            Item.of('artifacts:night_vision_goggles'),
            [
                    'AAA',
                    'BCB',
                    '   '
            ],
            {
                    B: 'minecraft:emerald',
                    C: 'create:iron_sheet',
                    A: 'minecraft:string'
            }
    )
    event.shaped(
            Item.of('artifacts:umbrella'),
            [
                    ' A ',
                    'BCB',
                    'DA '
            ],
            {
                    B: 'minecraft:red_carpet',
                    D: 'minecraft:stick',
                    A: 'minecraft:white_carpet',
                    C: 'minecraft:oak_planks'
            }
    )
    //Alternate
//    event.shaped(
//            Item.of('artifacts:withered_bracelet'),
//            [
//                    'ABC',
//                    'BDB',
//                    'CBA'
//            ],
//            {
//                    A: 'minecraft:magma_block',
//                    D: 'artifacts:onion_ring',
//                    B: 'minecraft:wither_rose',
//                    C: 'create:powdered_obsidian'
//            }
//    )
    event.shaped(
            Item.of('artifacts:obsidian_skull'),
            [
                    'AAA',
                    'BAB',
                    'AAA'
            ],
            {
                    A: 'minecraft:obsidian',
                    B: 'minecraft:potion[potion_contents={potion:"minecraft:fire_resistance"}]'
            }
    )
    event.shaped(
            Item.of('artifacts:golden_hook'),
            [
                    'AA ',
                    '  A',
                    'BCB'
            ],
            {
                    C: 'create:experience_nugget',
                    B: 'create:iron_sheet',
                    A: 'minecraft:gold_nugget'
            }
    )
    event.shaped(
            Item.of('artifacts:cloud_in_a_bottle'),
            [
                    ' A ',
                    'BC ',
                    '   '
            ],
            {
                    A: 'minecraft:splash_potion',
                    B: 'alexsmobs:lava_bottle',
                    C: 'minecraft:glass_bottle'
            }
    )
    event.shaped(
            Item.of('artifacts:crystal_heart'),
            [
                    'A A',
                    'ABA',
                    ' C '
            ],
            {
                    A: 'minecraft:emerald',
                    C: 'create_dragons_plus:red_dye_bucket',
                    B: 'minecraft:potion[potion_contents={potion:"minecraft:regeneration"}]'
            }
    )
    event.shaped(
            Item.of('artifacts:fire_gauntlet'),
            [
                    'ABA',
                    'BCB',
                    'ABA'
            ],
            {
                    A: 'minecraft:magma_block',
                    C: 'artifacts:power_glove',
                    B: 'create:sturdy_sheet'
            }
    )
    // My Recipie
    event.shaped(
            Item.of('artifacts:withered_bracelet'),
            [
                    'ABD',
                    'BCB',
                    'DBA'
            ],
            {
                    D: 'minecraft:magma_cream',
                    C: 'artifacts:onion_ring',
                    B: 'create:sturdy_sheet',
                    A: 'architects_palette:withered_bone_block'
            }
    )
    event.shaped(
            Item.of('artifacts:pickaxe_heater'),
            [
                    'ABA',
                    'BCB',
                    'ABA'
            ],
            {
                    C: 'artifacts:onion_ring',
                    B: 'create:crushed_raw_iron',
                    A: 'minecraft:coal'
            }
    )
    event.shaped(
            Item.of('artifacts:vampiric_glove'),
            [
                    'ABA',
                    'BCB',
                    'ABA'
            ],
            {
                    B: 'minersdelight:bat_wing',
                    C: 'artifacts:power_glove',
                    A: 'brewinandchewin:bloody_mary'
            }
    )
});
