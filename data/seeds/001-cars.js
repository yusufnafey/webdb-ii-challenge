exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        { VIN: "123456789", Make: "Honda", Model: "Accord", Mileage: 2500 },
        { VIN: "987654321", Make: "Toyota", Model: "Camry", Mileage: 7500 },
        { VIN: "456789123", Make: "Ford", Model: "Fusion", Mileage: 15000 }
      ]);
    });
};
