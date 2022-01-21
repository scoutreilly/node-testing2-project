exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("crew")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("crew").insert([
        {
          name: "Steve Zissou",
          position: "Captain",
          job_description: "Captain of the Zissou Crew",
        },
        {
          name: "Ned Plimpton (Kingsley Zissou)",
          position: "Son",
          job_description: "Assists with filming and action shots",
        },
      ]);
    });
};
