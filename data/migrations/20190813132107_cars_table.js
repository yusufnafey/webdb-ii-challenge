exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl
      .string("VIN", 17)
      .unique()
      .notNullable();
    tbl.string("Make", 32).notNullable();
    tbl.string("Model", 32).notNullable();
    tbl.decimal("Mileage").notNullable();
    tbl.string("Transmission", 55);
    tbl.string("Status", 32);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
