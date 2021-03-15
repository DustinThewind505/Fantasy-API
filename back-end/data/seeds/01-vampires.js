
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('vampires').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('vampires').insert([
        {vampireName: 'Gangrel', vampireWeakness: 'Edge & Christian', vampireAge: 59},
        {vampireName: 'Dracula', vampireWeakness: 'sunlight', vampireAge: 590},
        {vampireName: 'Edward', vampireWeakness: 'girls', vampireAge: 137},
        {vampireName: 'Spike', vampireWeakness: 'girls', vampireAge: 168},
        {vampireName: 'Cheech', vampireWeakness: 'crosses', vampireAge: 74},
        {vampireName: 'Lilith', vampireWeakness: 'lasers', vampireAge: 8000}
      ]);
    });
};
