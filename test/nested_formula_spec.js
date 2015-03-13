var expect  = require("chai").expect;
var _       = require('underscore');
var Formula = require("../lib");

describe("Nested Formulas", function() {

  /*
  * ----------------------------------------------------
  *  Addition
  * ----------------------------------------------------
  */

  describe("Addition", function() {
    it('Nests one Formula object inside another', function() {
      var nestedParams = {
        operation: 'add',
        values: [ 20, 30, 40 ]
      }
      formula = new Formula({
        operation: 'add',
        values: [ 20, nestedParams ]
      })
      var nestedFormula = formula.values[1];
      expect(nestedFormula.constructor).to.equal(Formula);
      expect(nestedFormula.value()).to.equal(90);
    })

    it('Includes nested formulas when calculating value()', function() {
      var nestedParams = {
        operation: 'add',
        values: [ 20, 30, 40 ]
      }
      formula = new Formula({
        operation: 'add',
        values: [ 20, nestedParams ]
      })
      expect(formula.value()).to.equal(110);
    })

    it('Calculates deeply nested formulas', function() {
      var deeplyNestedParams = {
        operation: 'multiply',
        values: [ 4, 20 ]
      }
      var nestedParams = {
        operation: 'add',
        values: [ 20, 30, deeplyNestedParams ]
      }
      formula = new Formula({
        operation: 'add',
        values: [ 20, nestedParams ]
      })
      expect(formula.value()).to.equal(150);
    })
  }); // Addition



  /*
  * ----------------------------------------------------
  *  Subtraction
  * ----------------------------------------------------
  */

  describe("Subtraction", function() {
    it('Nests one Formula object inside another', function() {
      var nestedParams = {
        operation: 'subtract',
        minuend: 800,
        subtrahend: 300
      }
      formula = new Formula({
        operation: 'subtract',
        minuend: nestedParams,
        subtrahend: 100
      })
      var nestedFormula = formula.minuend;
      expect(nestedFormula.constructor).to.equal(Formula);
      expect(nestedFormula.value()).to.equal(500);
    })

    it('Includes nested formulas when calculating value()', function() {
      var nestedParams = {
        operation: 'subtract',
        minuend: 800,
        subtrahend: 300
      }
      formula = new Formula({
        operation: 'subtract',
        minuend: nestedParams,
        subtrahend: 100
      })
      expect(formula.value()).to.equal(400);
    })

    it('Calculates deeply nested formulas', function() {
      var deeplyNestedParams = {
        operation: 'multiply',
        values: [ 4, 20 ]
      }
      var nestedParams = {
        operation: 'subtract',
        minuend: 800,
        subtrahend: deeplyNestedParams
      }
      formula = new Formula({
        operation: 'subtract',
        minuend: nestedParams,
        subtrahend: 100
      })
      expect(formula.value()).to.equal(620);
    })
  }); // Subtraction



  /*
  * ----------------------------------------------------
  *  Multiplication
  * ----------------------------------------------------
  */

  describe("Multiplication", function() {
    it('Nests one Formula object inside another', function() {
      var nestedParams = {
        operation: 'multiply',
        values: [ 2, 3, 5 ]
      }
      formula = new Formula({
        operation: 'multiply',
        values: [ 3, nestedParams ]
      })
      var nestedFormula = formula.values[1];
      expect(nestedFormula.constructor).to.equal(Formula);
      expect(nestedFormula.value()).to.equal(30);
    })

    it('Includes nested formulas when calculating value()', function() {
      var nestedParams = {
        operation: 'multiply',
        values: [ 2, 3, 5 ]
      }
      formula = new Formula({
        operation: 'multiply',
        values: [ 3, nestedParams ]
      })
      expect(formula.value()).to.equal(90);
    })

    it('Calculates deeply nested formulas', function() {
      var deeplyNestedParams = {
        operation: 'divide',
        dividend: 20,
        divisor: 5
      }
      var nestedParams = {
        operation: 'multiply',
        values: [ 2, 3, deeplyNestedParams ]
      }
      formula = new Formula({
        operation: 'multiply',
        values: [ 3, nestedParams ]
      })
      expect(formula.value()).to.equal(72);
    })
  }); // Multiplication



  /*
  * ----------------------------------------------------
  *  Division
  * ----------------------------------------------------
  */

  describe("Division", function() {
    it('Nests one Formula object inside another', function() {
      var nestedParams = {
        operation: 'multiply',
        values: [ 2, 2, 5 ]
      }
      formula = new Formula({
        operation: 'divide',
        dividend: 20,
        divisor: nestedParams
      })
      var nestedFormula = formula.divisor;
      expect(nestedFormula.constructor).to.equal(Formula);
      expect(nestedFormula.value()).to.equal(20);
    })

    it('Includes nested formulas when calculating value()', function() {
      var nestedParams = {
        operation: 'multiply',
        values: [ 2, 2, 5 ]
      }
      formula = new Formula({
        operation: 'divide',
        dividend: 20,
        divisor: nestedParams
      })
      expect(formula.value()).to.equal(1);
    })

    it('Calculates deeply nested formulas', function() {
      var deeplyNestedParams = {
        operation: 'add',
        values: [ 100, 30, 450 ]
      }
      var nestedParams = {
        operation: 'multiply',
        values: [ 2, 2, deeplyNestedParams ]
      }
      formula = new Formula({
        operation: 'divide',
        dividend: nestedParams,
        divisor: 20
      })
      expect(formula.value()).to.equal(116);
    })
  }); // Division

}); // Nested Formulas
