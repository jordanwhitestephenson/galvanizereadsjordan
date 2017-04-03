exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', function(table){
    table.increments();
    table.string('title');
    table.string('genre');
    table.string('description', 5000);
    table.string('cover_img_url');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('book');
};
