
exports.up = function(knex) {
    return knex.schema.createTable('produto', function(table) {
        table.string('produto_id').primary().notNullable();
        table.string('name').notNullable();
        table.float('preco').notNullable();
        table.string('descricao').notNullable();
        table.string('categoria').notNullable();
        table.integer('quantidade_estoque').notNullable();
        table.string('contem');
    })
  };

exports.down = function(knex) {
    return knex.schema.dropTable('produto');
};
