
exports.up = function (knex) {
  return knex.schema.createTable('roles', tbl => {
    tbl.increments('roleID');
    tbl.string('roleName').unique().notNullable();
  })
    .createTable('users', tbl => {
      tbl.increments('userID');
      tbl.string('username').unique().notNullable();
      tbl.string('password').notNullable();
      tbl.integer('userRole').notNullable().unsigned().references('roleID').inTable('roles').onUpdate('CASCADE').onDelete('CASCADE')
    })
    .createTable('vampires', tbl => {
      tbl.increments('vampireID');
      tbl.string('vampireName').unique().notNullable();
      tbl.string('vampireWeakness').notNullable();
      tbl.integer('vampireAge').notNullable();
    })
    .createTable('slayers', tbl => {
      tbl.increments('slayerID');
      tbl.string('slayerName').unique().notNullable();
      tbl.string('slayerWeapon').notNullable();
      tbl.integer('vampireID').notNullable().unsigned().references('vampireID').inTable('vampires').onUpdate('CASCADE').onDelete('CASCADE')
    })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('slayers').dropTableIfExists('vampires').dropTableIfExists('users')
};
