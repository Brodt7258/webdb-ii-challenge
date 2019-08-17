
exports.up = function(knex) {
  return knex.schema
    .createTable('cars', function(cars) {
      cars.increments();
      cars.string('vin_number')
        .notNullable()
        .unique();
      cars.string('make')
        .notNullable();
      cars.string('model')
        .notNullable();
      cars.integer('mileage')
        .notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
