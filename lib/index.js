var _ = require('underscore');


var Formula = function(params) {
  this._params = params;
  this.operation = params.operation;
  this._setValues();
  this.errors = [];
}

Formula.prototype._setValues = function() {
  switch (this.operation) {
    case "add":
    case "multiply":
      this.values = this._params.values;
      break;
    case "subtract":
      this.minuend = this._params.minuend;
      this.subtrahend = this._params.subtrahend;
      break;
    case "divide":
      this.dividend = this._params.dividend;
      this.divisor = this._params.divisor;
      break;
  }
  this._buildNestedFormulas();
}

Formula.prototype._buildNestedFormulas = function() {
  var values = this.values;
  if (values){
    _.each(values, function(v, i) {
      if (_.isObject(v)) values[i] = new Formula(v);
    });
  }

  var self = this;
  var singleValueAttr = ['minuend', 'subtrahend', 'dividend', 'divisor'];
  _.each(singleValueAttr, function(a) {
    if (_.isObject(self[a])) self[a] = new Formula(self[a])
  });
}

function _isFormula(obj) {
  return obj.constructor == Formula;
}

function _calculatedValue(obj) {
  return (_isFormula(obj)) ? obj.value() : obj;
}

Formula.prototype.add = function() {
  return _.reduce(this.values, function(current, val){
    return current + _calculatedValue(val);
  }, 0);
}

Formula.prototype.multiply = function() {
  return _.reduce(this.values, function(current, val){
    return current * _calculatedValue(val);
  }, 1);
}

Formula.prototype.subtract = function() {
  return _calculatedValue(this.minuend) - _calculatedValue(this.subtrahend);
}

Formula.prototype.divide = function() {
  return _calculatedValue(this.dividend) / _calculatedValue(this.divisor);
}

Formula.prototype.value = function() {
  if (this.errors.length) throw new Error(this.errors);
  return this[this.operation]();
}


module.exports = Formula;
