exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        { vin: "123456789", make: "Honda", model: "Accord", mileage: 2500 },
        { vin: "987654321", make: "Toyota", model: "Camry", mileage: 7500 },
        { vin: "456789123", make: "Ford", model: "Fusion", mileage: 15000 }
      ]);
    });
};
