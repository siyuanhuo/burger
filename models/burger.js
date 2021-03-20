const orm = require('../config/orm')

const burger = {
  async all() { return await orm.selectAll() },

  // The variables cols and vals are arrays.
  async create(data) { await orm.insertOne(data) },

  async update(data) { await orm.updateOne(data) },
};

module.exports = burger