"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routes;

var _router = _interopRequireDefault(require("./api/controllers/examples/router"));

var _router2 = _interopRequireDefault(require("./api/controllers/users/router"));

var _router3 = _interopRequireDefault(require("./api/controllers/products/router"));

var _router4 = _interopRequireDefault(require("./api/controllers/auth/router"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function routes(app) {
  app.use((0, _cors.default)({
    origin: 'http://localhost:3000'
  }));
  app.use('/api/v1/examples', _router.default);
  app.use('/api/v1/users', _router2.default);
  app.use('/api/v1/login', _router4.default);
  app.use('/api/v1/products', _router3.default);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci9yb3V0ZXMuanMiXSwibmFtZXMiOlsicm91dGVzIiwiYXBwIiwidXNlIiwib3JpZ2luIiwiZXhhbXBsZXNSb3V0ZXIiLCJ1c2VyUm91dGVyIiwiYXV0aFJvdXRlciIsInByb2R1Y3RSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVlLFNBQVNBLE1BQVQsQ0FBZ0JDLEdBQWhCLEVBQXFCO0FBQ2xDQSxFQUFBQSxHQUFHLENBQUNDLEdBQUosQ0FBUSxtQkFBSztBQUFDQyxJQUFBQSxNQUFNLEVBQUU7QUFBVCxHQUFMLENBQVI7QUFDQUYsRUFBQUEsR0FBRyxDQUFDQyxHQUFKLENBQVEsa0JBQVIsRUFBNEJFLGVBQTVCO0FBQ0FILEVBQUFBLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLGVBQVIsRUFBeUJHLGdCQUF6QjtBQUNBSixFQUFBQSxHQUFHLENBQUNDLEdBQUosQ0FBUSxlQUFSLEVBQXdCSSxnQkFBeEI7QUFDQUwsRUFBQUEsR0FBRyxDQUFDQyxHQUFKLENBQVEsa0JBQVIsRUFBNEJLLGdCQUE1QjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4YW1wbGVzUm91dGVyIGZyb20gJy4vYXBpL2NvbnRyb2xsZXJzL2V4YW1wbGVzL3JvdXRlcic7XHJcbmltcG9ydCB1c2VyUm91dGVyIGZyb20gJy4vYXBpL2NvbnRyb2xsZXJzL3VzZXJzL3JvdXRlcic7XHJcbmltcG9ydCBwcm9kdWN0Um91dGVyIGZyb20gJy4vYXBpL2NvbnRyb2xsZXJzL3Byb2R1Y3RzL3JvdXRlcic7XHJcbmltcG9ydCBhdXRoUm91dGVyIGZyb20gJy4vYXBpL2NvbnRyb2xsZXJzL2F1dGgvcm91dGVyJztcclxuaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByb3V0ZXMoYXBwKSB7XHJcbiAgYXBwLnVzZShjb3JzKHtvcmlnaW46ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnfSkpO1xyXG4gIGFwcC51c2UoJy9hcGkvdjEvZXhhbXBsZXMnLCBleGFtcGxlc1JvdXRlcik7XHJcbiAgYXBwLnVzZSgnL2FwaS92MS91c2VycycsIHVzZXJSb3V0ZXIpO1xyXG4gIGFwcC51c2UoJy9hcGkvdjEvbG9naW4nLGF1dGhSb3V0ZXIpO1xyXG4gIGFwcC51c2UoJy9hcGkvdjEvcHJvZHVjdHMnLCBwcm9kdWN0Um91dGVyKTtcclxufSJdfQ==