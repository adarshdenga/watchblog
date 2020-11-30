
exports.up = function(knex) {
  return knex.schema
    .table('comment', function (table) {
      table.dropColumn('post_id');
      table.dropColumn('user_id');
    })
    .table('post', function (table) {
      table.dropColumn('user_id');
      table.dropColumn('watch_id');
    })
    .table('snap', function (table) {
      table.dropColumn('user_id');
      table.dropColumn('watch_id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('comment', function (table) {
      table.integer('post_id').defaultTo('NULL');
      table.integer('user_id').defaultTo('NULL');
    })
    .table('post', function (table) {
      table.integer('user_id').defaultTo('NULL');
      table.integer('watch_id').defaultTo('NULL');
    })
    .table('snap', function (table) {
      table.integer('user_id').defaultTo('NULL');
      table.integer('watch_id').defaultTo('NULL');
    })
};
