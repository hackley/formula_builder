// var expect  = require("chai").expect;
// var _       = require('underscore');
// var Formula = require("../lib");
//
//
// describe("Validation", function() {
//   it("requires an operation", function() {
//     var formula = new Formula({
//       values: [500, 200]
//     });
//     expect(formula.errors.length).to.equal(1);
//   })
//
//   it("requires a valid operation", function() {
//     var formula = new Formula({
//       operation: 'dudemanbro',
//       values: [500, 200]
//     });
//     expect(formula.errors.length).to.equal(1);
//   })
//
//   describe("Addition", function() {
//     it("requires an array of values", function() {
//       var formula = new Formula({
//         operation: 'add',
//         values: 500
//       });
//       expect(formula.errors.length).to.equal(1);
//     })
//
//     it("requires all values to be numbers", function() {
//       var formula = new Formula({
//         operation: 'add',
//         values: [ 500, 10.3, '12' ]
//       });
//       expect(formula.errors.length).to.equal(1);
//     })
//   }); // Addition
//
//   describe("Subtraction", function() {
//     it("requires a valid minuend", function() {
//       var invalidMinuends = [ null, '4', [5] ];
//       _.each(invalidMinuends, function(i) {
//         var formula = new Formula({ operation: 'subtract', minuend: i, subtrahend: 2 });
//         expect(formula.errors.length).to.equal(1);
//       });
//     })
//   }); // Subtraction
//
// }); // Validation
