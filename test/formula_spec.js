var expect  = require("chai").expect;
var _       = require('underscore');
var Formula = require("../lib");



describe("Basic Functions", function() {

  it("handles addition", function() {
    var formula = new Formula({
      operation: 'add',
      values: [ 200, 800, 500 ]
    });
    expect(formula.value()).to.equal(1500);
  })

  it("handles subtraction", function() {
    var formula = new Formula({
      operation: 'subtract',
      minuend: 800,
      subtrahend: 300
    });
    expect(formula.value()).to.equal(500);
  })

  it("handles multiplication", function() {
    var formula = new Formula({
      operation: 'multiply',
      values: [ 10, 12, 2 ]
    });
    expect(formula.value()).to.equal(240);
  })

  it("handles division", function() {
    var formula = new Formula({
      operation: 'divide',
      dividend: 700,
      divisor: 2
    });
    expect(formula.value()).to.equal(350);
  })

}); // Basic Functions
