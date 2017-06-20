exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("users", t => {
    t.increments("id");
    t.string("username");
    t.string("password");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
