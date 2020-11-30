
exports.up = function(knex) {
  return knex.schema
    .table('comment', function (table) {
      table.integer('post_id').alter().unsigned();
      table.integer('user_id').alter().unsigned();
    })
    .table('post', function (table) {
      table.integer('user_id').alter().unsigned();
      table.integer('watch_id').alter().unsigned();
    })
    .table('snap', function (table) {
      table.integer('user_id').alter().unsigned();
      table.integer('watch_id').alter().unsigned();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('comment', function (table) {
      table.integer('post_id').alter();
      table.integer('user_id').alter();
    })
    .table('post', function (table) {
      table.integer('user_id').alter();
      table.integer('watch_id').alter();
    })
    .table('snap', function (table) {
      table.integer('user_id').alter();
      table.integer('watch_id').alter();
    })
};
