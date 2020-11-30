
exports.up = function(knex) {
  return knex.schema
    .table('snap', function (table) {
      table.string('content');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('snap', function (table) {
      table.dropColumn('content');
    })
};
