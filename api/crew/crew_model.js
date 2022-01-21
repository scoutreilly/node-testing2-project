const db = require("../../data/db-config");

function find() {
  return db("crew").select("id", "name", "position", "job_description");
}

async function findById(filter) {
  const rows = await db("crew").where(filter).first();
  // console.log(rows);
  return rows;
}

async function add(user) {
  console.log(user);
  const [id] = await db("crew").insert(user);
  return findById(id);
}

module.exports = { find, findById, add };
