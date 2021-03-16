
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('roles').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        {roleName: 'admin'},
        {roleName: 'moderator'},
        {roleName: 'user'}
      ]);
    });
};
