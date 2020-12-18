
exports.up = function(knex) {
  return knex('user').insert({"first_name":"Aamir","last_name":"Farooq","username":"AamirF","email_id":"aamir@f.com","password":"pass","country":"Denmark","phone_num":123456789,"is_admin":true})
};

exports.down = function(knex) {
};
