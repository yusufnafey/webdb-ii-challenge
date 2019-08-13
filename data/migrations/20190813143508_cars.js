exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl
      .string("vin", 17)
      .unique()
      .notNullable();
    tbl.string("make", 32).notNullable();
    tbl.string("model", 32).notNullable();
    tbl.decimal("mileage").notNullable();
    tbl.string("transmission", 55);
    tbl.string("status", 32);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
