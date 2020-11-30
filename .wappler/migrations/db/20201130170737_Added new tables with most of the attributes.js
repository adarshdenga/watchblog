
exports.up = function(knex) {
  return knex.schema
    .createTable('user', function (table) {
      table.increments('user_id');
      table.string('first_name');
      table.string('last_name');
      table.string('username');
      table.string('email_id');
      table.string('password');
      table.string('country');
      table.integer('phone_num');
      table.boolean('is_admin');
    })
    .createTable('post', function (table) {
      table.increments('post_id');
      table.integer('user_id');
      table.integer('watch_id');
      table.string('title');
      table.string('blurb');
      table.string('content');
      table.datetime('date');
      table.boolean('is_approved');
    })
    .createTable('comment', function (table) {
      table.increments('comment_id');
      table.integer('post_id');
      table.integer('user_id');
      table.string('content');
      table.datetime('date');
    })
    .createTable('snap', function (table) {
      table.increments('snap_id');
      table.integer('user_id');
      table.integer('watch_id');
      table.string('image');
      table.string('content');
    })
    .createTable('watch', function (table) {
      table.increments('watch_id');
      table.string('make');
      table.integer('year');
      table.string('description');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('user')
    .dropTable('post')
    .dropTable('comment')
    .dropTable('snap')
    .dropTable('watch')
};
