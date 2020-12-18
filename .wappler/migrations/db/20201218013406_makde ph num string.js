
exports.up = function(knex) {
  return knex.schema
    .table('user', function (table) {
      table.string('phone_num').alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('user', function (table) {
      table.integer('phone_num').alter();
    })
};
