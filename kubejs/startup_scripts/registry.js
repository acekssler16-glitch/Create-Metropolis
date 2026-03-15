// Visit the wiki for more info - https://kubejs.com/
console.info('Items Registered! (Loaded startup registry script)')
StartupEvents.registry('item', event => {
  event.create('shimmer')
})