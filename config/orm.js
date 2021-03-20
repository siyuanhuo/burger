const db = require('./connection')('burgers_db', 'Siyuan1993!')

async function selectAll() {
  return await db.query('select * from burgers')
}

async function insertOne(data) {
  const name = data.name
  const devoured = false
  await db.query(
    `insert into burgers (burger_name, devoured) values ('${name}', ${devoured})`)
}

async function updateOne(data) {
  const id = data.id
  await db.query (
    `update burgers set devoured=true where id=${id}`)
}

module.exports = {selectAll, insertOne, updateOne}