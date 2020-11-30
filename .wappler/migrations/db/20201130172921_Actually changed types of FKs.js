
exports.up = function(knex) {
  return knex.schema
    .table('post', function (table) {
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('user_id').inTable('user');
      table.integer('watch_id').unsigned();
      table.foreign('watch_id').references('watch_id').inTable('watch');
    })
    .table('snap', function (table) {
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('user_id').inTable('user');
      table.integer('watch_id').unsigned();
      table.foreign('watch_id').references('watch_id').inTable('watch');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('post', function (table) {
      table.dropForeign('user_id');
      table.dropColumn('user_id');
      table.dropForeign('watch_id');
      table.dropColumn('watch_id');
    })
    .table('snap', function (table) {
      table.dropForeign('user_id');
      table.dropColumn('user_id');
      table.dropForeign('watch_id');
      table.dropColumn('watch_id');
    })
};
