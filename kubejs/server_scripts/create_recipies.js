// Create Recipies
ServerEvents.recipes(event => {
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