// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

ItemEvents.modifyTooltips(event => {
  // Add tooltip to all of these items
    event.add('endersdelight:shulker_mollusk', {shift: true}, Text.green('"With its Wandering Eye"'))
})