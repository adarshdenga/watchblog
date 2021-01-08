
exports.up = function(knex) {
  return knex.schema
    .table('post', function (table) {
      table.date('date').alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('post', function (table) {
      table.datetime('date').alter();
    })
};
