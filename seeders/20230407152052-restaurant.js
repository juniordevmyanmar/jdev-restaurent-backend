'use strict'

const generateMyanmarAddress = require('./helper/gen-address')
const { generateCuisines } = require('./helper/gen-cuisines')
const { restaurantList } = require('./helper/gen-restaurants')
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
      'Restaurants',
      Array.from(restaurantList).map((id, x) => ({
        id: id,
        name: `${generateRandomName()} Restaurant`,
        address: generateMyanmarAddress(),
        coverImage: generateImages(),
        description: generateLoremIpsum(2, 3),
        cuisineId: generateCuisines(),
        phone: `+95${Array.from(Array(10))
          .map(() => Math.floor(Math.random() * 10))
          .join('')}`,
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
    return queryInterface.bulkDelete('Restaurants', null, {})
  },
}
