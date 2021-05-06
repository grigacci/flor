
exports.up = function(knex) {
    return knex.schema.createTable('comentario', function(table) {
        table.string('comentario_id').primary().notNullable();
        table.string('produto_id').notNullable();
        table
            .foreign("produto_id")
            .references("produto_id")
            .inTable("produto")
            .onDelete("cascade")

        table.string('user_id').notNullable();
        table
            .foreign("user_id")
            .references("user_id")
            .inTable("user")
            .onDelete("cascade")
        
        table.string('comentario').notNullable();
        table.integer('avaliacao').notNullable();
        
    })
  };

exports.down = function(knex) {
    return knex.schema.dropTable('comentario');
};