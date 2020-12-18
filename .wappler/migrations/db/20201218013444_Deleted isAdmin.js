
exports.up = function(knex) {
  return knex.schema
    .table('user', function (table) {
      table.dropColumn('is_admin');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('user', function (table) {
      table.boolean('is_admin').defaultTo('NULL');
    })
};
