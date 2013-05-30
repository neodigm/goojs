// Generated by CoffeeScript 1.6.2
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['goo/loaders/handlers/ConfigHandler', 'goo/util/rsvp', 'goo/util/PromiseUtil', 'goo/util/ConsoleUtil'], function(ConfigHandler, RSVP, pu, console) {
  var SceneHandler, _ref;

  return SceneHandler = (function(_super) {
    __extends(SceneHandler, _super);

    function SceneHandler() {
      _ref = SceneHandler.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    SceneHandler._register('scene');

    SceneHandler.prototype._prepare = function(config) {};

    SceneHandler.prototype._create = function(ref) {};

    SceneHandler.prototype.update = function(ref, config) {
      var entityRef, promises, _fn, _i, _len, _ref1, _ref2,
        _this = this;

      promises = [];
      if ((_ref1 = config.entityRefs) != null ? _ref1.length : void 0) {
        _ref2 = config.entityRefs;
        _fn = function(entityRef) {
          return promises.push(_this.getConfig(entityRef).then(function(entityConfig) {
            return _this.updateObject(entityRef, entityConfig);
          }));
        };
        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
          entityRef = _ref2[_i];
          _fn(entityRef);
        }
        return RSVP.all(promises).then(function(entities) {
          var entity, _j, _len1, _results;

          _results = [];
          for (_j = 0, _len1 = entities.length; _j < _len1; _j++) {
            entity = entities[_j];
            console.log("Adding " + entity.ref + " to world");
            _results.push(entity.addToWorld());
          }
          return _results;
        }).then(null, function(err) {
          return console.error("Error updating entities: " + err);
        });
      } else {
        console.warn("No entity refs in scene " + ref);
        return config;
      }
    };

    return SceneHandler;

  })(ConfigHandler);
});
