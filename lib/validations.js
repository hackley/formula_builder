_validations = {
  require_array_values: function() {
    if (!_.isArray(this.values))
      return "Param 'values' must be an array.";
    },

    value_items_are_integers: function() {
      var NaNs = _.filter(this.values, function(v) {
        return (!_.isNumber(v));
      });
      if (NaNs.length > 0)
        return "All values must be numbers";
      },

      require_numeric: function(key) {
        if (!_.isNumber(this[key]))
          return key + " must be a number";
        }
      }

      _validationsMap = {
        add: [ 'require_array_values', 'value_items_are_integers' ],
        subtract: [
        ['require_numeric', 'minuend']
        ],
        multiply: [],
        divide: []
      }

      Formula.prototype.validate = function() {
        var self = this;
        self.errors = [];

        var validOperation = _.contains(Object.keys(_validationsMap), this.operation);
        if (!validOperation) {
          self.errors.push("An operation is required");
          return;
        }

        _.each(_validationsMap[self.operation], function(vali) {
          var args = [];
          var fn = null;

          if (_.isArray(vali)) {
            fn = vali.shift();
            args = _.map(vali, function(i) { return i; });
          } else {
            fn = vali;
          }
          var err = _validations[fn].apply(self, args);
          if (err && err.length) self.errors.push(err);
        });
      }
      
