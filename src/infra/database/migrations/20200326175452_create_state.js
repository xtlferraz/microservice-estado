
exports.up = function(knex) {
    return knex.schema.createTable('state',function(table){
        table.increments();
        table.string('name').notNullable();
        table.string('flag').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('state');
};
