// Create Recipies
ServerEvents.recipes(event => {
  // Veridium
event.recipes.create.mixing(
  Item.of('create:veridium'),
  [
    Ingredient.of('minecraft:flint'),
    Ingredient.of('minecraft:clay_ball', 3),
    Fluid.of('minecraft:lava', 50)
  ]
)
event.recipes.create.mixing(
  Item.of('create:asurine'),
  [
    Ingredient.of('minecraft:flint'),
    Ingredient.of('minecraft:clay_ball', 3),
    Fluid.of('minecraft:water', 250)
  ]
)
event.recipes.create.compacting(
  Item.of('artifacts:pocket_piston'),
  [
    Ingredient.of('minecraft:piston'),
  ]
)
event.recipes.create.compacting(
  Item.of('artifacts:power_glove'),
  [
    Ingredient.of('artifacts:pickaxe_heater'),
    Ingredient.of('minecraft:gold_block')
  ]
)
})