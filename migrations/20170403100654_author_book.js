
exports.up = function(knex, Promise) {
  return knex.schema.createTable('author_book', function(table){
    table.increments();
    table.integer('book_id')
    .references('id')
    .inTable('book')
    .onDelete('cascade')
    table.integer('author_id')
    .references('id')
    .inTable('author')
    .onDelete('cascade')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('author_book');
};
