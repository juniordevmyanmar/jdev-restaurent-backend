'use strict'
const { v4: uuidv4 } = require('uuid')
const generateMyanmarAddress = require('./helper/gen-address')
const { generateCuisines } = require('./helper/gen-cuisines')
const { generateRestaurants } = require('./helper/gen-restaurants')
const generateLoremIpsum = require('./helper/gen-dummytext')
const generateImages = require('./helper/gen-image')
const generateRandomName = require('./helper/gen-name')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert(
      'Menus',
      Array.from(Array(100)).map((_, x) => ({
        id: uuidv4(),
        name: `${generateRandomName()} menu`,
        coverImage: generateImages(),
        description: generateLoremIpsum(2, 3),
        cuisineId: generateCuisines(),
        restaurantId: generateRestaurants(),
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      })),
      {},
    )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
  
      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Menus', null, {})
  },
}
