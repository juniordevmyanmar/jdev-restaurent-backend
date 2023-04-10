'use strict'
const { v4: uuidv4 } = require('uuid')
const generateMyanmarAddress = require('./helper/gen-address')
const generateImages = require('./helper/gen-image')
const generateRandomName = require('./helper/gen-name')
const { generateCuisines, cuisineLists } = require('./helper/gen-cuisines')

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
      'Cuisines',
      Array.from(cuisineLists).map((x) => ({
        id: x,
        name: `${generateRandomName()} Cuisine`,
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
    return queryInterface.bulkDelete('Cuisines', null, {})
  },
}
