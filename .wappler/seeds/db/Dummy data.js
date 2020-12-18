exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          "first_name": "Aamir",
          "last_name": "F",
          "username": "AamirF",
          "email_id": "aamir@gmail.com",
          "password": "password",
          "country": "Denmark",
          "phone_num": "0123456789"
        }
      ]);
    });
};