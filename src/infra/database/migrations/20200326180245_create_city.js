
exports.up = function(knex) {
    return knex.schema.createTable('city',function(table){
        table.increments();
        table.string('name').notNullable();
        table.string('population_quantity').notNullable();
        table.integer('state_id').notNullable();
        table.foreign('state_id').references('id').inTable('state');
        table.unique(['state_id', 'name']);
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('city');
};
