"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routes;

var _router = _interopRequireDefault(require("./api/controllers/examples/router"));

var _router2 = _interopRequireDefault(require("./api/controllers/users/router"));

var _router3 = _interopRequireDefault(require("./api/controllers/products/router"));

var _router4 = _interopRequireDefault(require("./api/controllers/auth/router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function routes(app) {
  app.use('/api/v1/examples', _router.default);
  app.use('/api/v1/users', _router2.default);
  app.use('/api/v1/login', _router4.default);
  app.use('/api/v1/products', _router3.default);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci9yb3V0ZXMuanMiXSwibmFtZXMiOlsicm91dGVzIiwiYXBwIiwidXNlIiwiZXhhbXBsZXNSb3V0ZXIiLCJ1c2VyUm91dGVyIiwiYXV0aFJvdXRlciIsInByb2R1Y3RSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNlLFNBQVNBLE1BQVQsQ0FBZ0JDLEdBQWhCLEVBQXFCO0FBQ2xDQSxFQUFBQSxHQUFHLENBQUNDLEdBQUosQ0FBUSxrQkFBUixFQUE0QkMsZUFBNUI7QUFDQUYsRUFBQUEsR0FBRyxDQUFDQyxHQUFKLENBQVEsZUFBUixFQUF5QkUsZ0JBQXpCO0FBQ0FILEVBQUFBLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLGVBQVIsRUFBd0JHLGdCQUF4QjtBQUNBSixFQUFBQSxHQUFHLENBQUNDLEdBQUosQ0FBUSxrQkFBUixFQUE0QkksZ0JBQTVCO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhhbXBsZXNSb3V0ZXIgZnJvbSAnLi9hcGkvY29udHJvbGxlcnMvZXhhbXBsZXMvcm91dGVyJztcclxuaW1wb3J0IHVzZXJSb3V0ZXIgZnJvbSAnLi9hcGkvY29udHJvbGxlcnMvdXNlcnMvcm91dGVyJztcclxuaW1wb3J0IHByb2R1Y3RSb3V0ZXIgZnJvbSAnLi9hcGkvY29udHJvbGxlcnMvcHJvZHVjdHMvcm91dGVyJztcclxuaW1wb3J0IGF1dGhSb3V0ZXIgZnJvbSAnLi9hcGkvY29udHJvbGxlcnMvYXV0aC9yb3V0ZXInO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByb3V0ZXMoYXBwKSB7XHJcbiAgYXBwLnVzZSgnL2FwaS92MS9leGFtcGxlcycsIGV4YW1wbGVzUm91dGVyKTtcclxuICBhcHAudXNlKCcvYXBpL3YxL3VzZXJzJywgdXNlclJvdXRlcik7XHJcbiAgYXBwLnVzZSgnL2FwaS92MS9sb2dpbicsYXV0aFJvdXRlcik7XHJcbiAgYXBwLnVzZSgnL2FwaS92MS9wcm9kdWN0cycsIHByb2R1Y3RSb3V0ZXIpO1xyXG59Il19