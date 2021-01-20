
exports.up = function(knex) {
  return knex.schema
    .table('post', function (table) {
      table.string('image');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('post', function (table) {
      table.dropColumn('image');
    })
};
