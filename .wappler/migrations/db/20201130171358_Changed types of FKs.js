
exports.up = function(knex) {
  return knex.schema
    .table('comment', function (table) {
      table.integer('post_id').alter().unsigned();
      table.integer('user_id').alter().unsigned();
      table.text('content').alter();
    })
    .table('post', function (table) {
      table.integer('user_id').alter().unsigned();
      table.integer('watch_id').alter().unsigned();
      table.text('title').alter();
      table.text('blurb').alter();
      table.text('content').alter();
    })
    .table('snap', function (table) {
      table.integer('user_id').alter().unsigned();
      table.integer('watch_id').alter().unsigned();
      table.text('image').alter();
      table.renameColumn('content', 'description');
      table.text('description').alter();
    })
    .table('watch', function (table) {
      table.text('description').alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('comment', function (table) {
      table.integer('post_id').alter();
      table.integer('user_id').alter();
      table.string('content', 255).alter();
    })
    .table('post', function (table) {
      table.integer('user_id').alter();
      table.integer('watch_id').alter();
      table.string('title', 255).alter();
      table.string('blurb', 255).alter();
      table.string('content', 255).alter();
    })
    .table('snap', function (table) {
      table.integer('user_id').alter();
      table.integer('watch_id').alter();
      table.string('image', 255).alter();
      table.renameColumn('description', 'content');
      table.string('content', 255).alter();
    })
    .table('watch', function (table) {
      table.string('description', 255).alter();
    })
};
