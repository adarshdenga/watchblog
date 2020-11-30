
exports.up = function(knex) {
  return knex.schema
    .table('comment', function (table) {
      table.integer('post_id').unsigned();
      table.foreign('post_id').references('post_id').inTable('post');
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('user_id').inTable('user');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('comment', function (table) {
      table.dropForeign('post_id');
      table.dropColumn('post_id');
      table.dropForeign('user_id');
      table.dropColumn('user_id');
    })
};
