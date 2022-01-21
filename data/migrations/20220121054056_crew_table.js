exports.up = function (knex) {
  return knex.schema.createTable("crew", (tbl) => {
    tbl.increments(); // builds primary key
    tbl.text("name", 100).unique().notNullable(); // built into increments - unique and null ( required )
    tbl.text("position", 100);
    tbl.text("job_description", 300);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("crew"); // delete / drop
};
