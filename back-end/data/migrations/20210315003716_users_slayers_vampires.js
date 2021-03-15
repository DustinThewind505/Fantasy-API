
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments('userID');
      tbl.string('username').unique().notNullable();
      tbl.string('password').notNullable();
  })
  .createTable('vampires', tbl => {
    tbl.increments('vampireID');
    tbl.string('vampireName').unique().notNullable();
    tbl.string('vampireWeakness').notNullable();
    tbl.string('vampireAge').notNullable();
})
.createTable('slayers', tbl => {
    tbl.increments('slayerID');
    tbl.string('slayerName').unique().notNullable();
    tbl.string('slayerWeapon').notNullable();
    tbl.integer('vampireID').notNullable().references('vampireID').inTable('vampires').onUpdate('CASCADE').onDelete('CASCADE')
})
};

exports.down = function(knex) {
  
};
