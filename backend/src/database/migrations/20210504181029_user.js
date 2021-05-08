
exports.up = function(knex) {
  return knex.schema.createTable('user', function(table) {
      table.string('user_id').primary().notNullable();
      table.string("firebase_id").notNullable();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('endereco').notNullable();
      table.string('cidade').notNullable();
      table.string('estado').notNullable();
      table.integer('cep').notNullable();
      table.string('flor').notNullable();
      table.integer('cartao');
      table.integer('mes');
      table.integer('ano');
      table.integer('cvc');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
