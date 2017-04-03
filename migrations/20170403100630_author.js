exports.up = function(knex, Promise) {
  return knex.schema.createTable('author', function(table){
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.string('img_url');
    table.string('bio', 5000);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('author');
};
