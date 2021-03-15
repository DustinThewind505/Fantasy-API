
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('slayers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('slayers').insert([
        {slayerName: 'Deadpool', slayerWeapon: 'Kitchen Sink', vampireID:2},
        {slayerName: 'Abe Lincoln', slayerWeapon: 'Axe', vampireID: 3},
        {slayerName: 'VanHelsing', slayerWeapon: 'Cross bow', vampireID:2},
        {slayerName: 'Buffy', slayerWeapon: 'Stake', vampireID: 4},
      ]);
    });
};
