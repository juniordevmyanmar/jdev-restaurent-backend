const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt')
const generateRandomName = require('./helper/gen-name');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', await Promise.all(Array.from(Array(3)).map(async (_, x) => ({
      id: uuidv4(),
      name: generateRandomName(),
      email: `user${x + 1}@jd.co`,
      password: await bcrypt.hash(`qwer123`, 10),
      phone: `+95${Array.from(Array(10)).map(() => Math.floor(Math.random() * 10)).join('')}`,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
    }))), {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
