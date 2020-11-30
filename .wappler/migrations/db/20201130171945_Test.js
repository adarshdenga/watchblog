
exports.up = function(knex) {
  return knex.schema
    .table('comment', function (table) {
      table.integer('post_id').alter().unsigned();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('comment', function (table) {
      table.integer('post_id').alter();
    })
};
