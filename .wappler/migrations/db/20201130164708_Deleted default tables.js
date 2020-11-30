
exports.up = function(knex) {
  return knex.schema
    .dropTable('cars')
    .dropTable('countries')
    .dropTable('images')
    .dropTable('users')
};

exports.down = function(knex) {
  return knex.schema
    .createTable('cars', function (table) {
      table.increments('id').primary().notNullable();
      table.string('make', 50).defaultTo('NULL');
      table.string('model', 50).defaultTo('NULL');
      table.string('year', 50).defaultTo('NULL');
    })
    .createTable('countries', function (table) {
      table.increments('id').primary().notNullable();
      table.string('country_code', 2).notNullable().defaultTo('\'\'');
      table.string('country_name', 100).notNullable().defaultTo('\'\'');
    })
    .createTable('images', function (table) {
      table.increments('id').primary().notNullable();
      table.string('image', 50).defaultTo('NULL');
      table.text('description', 65535).defaultTo('NULL');
      table.string('category', 12).defaultTo('NULL');
      table.string('author', 50).defaultTo('NULL');
      table.date('date').defaultTo('NULL');
    })
    .createTable('users', function (table) {
      table.increments('id').primary().notNullable();
      table.string('first_name', 50).defaultTo('NULL');
      table.string('last_name', 50).defaultTo('NULL');
      table.string('gender', 50).defaultTo('NULL');
      table.string('email', 50).defaultTo('NULL');
      table.string('company', 50).defaultTo('NULL');
      table.string('avatar', 100).defaultTo('NULL');
    })
};
