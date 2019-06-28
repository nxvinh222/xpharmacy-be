"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _swaggerExpressMiddleware = _interopRequireDefault(require("swagger-express-middleware"));

var path = _interopRequireWildcard(require("path"));

var _error = _interopRequireDefault(require("../api/middlewares/error.handler"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(app, routes) {
  (0, _swaggerExpressMiddleware.default)(path.join(__dirname, 'api.yml'), app, (err, mw) => {
    // Enable Express' case-sensitive and strict options
    // (so "/entities", "/Entities", and "/Entities/" are all different)
    app.enable('case sensitive routing');
    app.enable('strict routing');
    app.use(mw.metadata());
    app.use(mw.files({
      // Override the Express App's case-sensitive
      // and strict-routing settings for the Files middleware.
      caseSensitive: false,
      strict: false
    }, {
      useBasePath: false,
      apiPath: process.env.SWAGGER_API_SPEC // Disable serving the "api.yml" file
      // rawFilesPath: false

    }));
    app.use(mw.parseRequest({
      // Configure the cookie parser to use secure cookies
      cookie: {
        secret: process.env.SESSION_SECRET
      },
      // Don't allow JSON content over 100kb (default is 1mb)
      json: {
        limit: process.env.REQUEST_LIMIT
      }
    })); // These two middleware don't have any options (yet)

    app.use(mw.CORS(), mw.validateRequest());
    routes(app); // eslint-disable-next-line no-unused-vars, no-shadow

    app.use(_error.default);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9jb21tb24vc3dhZ2dlci5qcyJdLCJuYW1lcyI6WyJhcHAiLCJyb3V0ZXMiLCJwYXRoIiwiam9pbiIsIl9fZGlybmFtZSIsImVyciIsIm13IiwiZW5hYmxlIiwidXNlIiwibWV0YWRhdGEiLCJmaWxlcyIsImNhc2VTZW5zaXRpdmUiLCJzdHJpY3QiLCJ1c2VCYXNlUGF0aCIsImFwaVBhdGgiLCJwcm9jZXNzIiwiZW52IiwiU1dBR0dFUl9BUElfU1BFQyIsInBhcnNlUmVxdWVzdCIsImNvb2tpZSIsInNlY3JldCIsIlNFU1NJT05fU0VDUkVUIiwianNvbiIsImxpbWl0IiwiUkVRVUVTVF9MSU1JVCIsIkNPUlMiLCJ2YWxpZGF0ZVJlcXVlc3QiLCJlcnJvckhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRWUsa0JBQVNBLEdBQVQsRUFBY0MsTUFBZCxFQUFzQjtBQUNuQyx5Q0FBV0MsSUFBSSxDQUFDQyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsU0FBckIsQ0FBWCxFQUE0Q0osR0FBNUMsRUFBaUQsQ0FBQ0ssR0FBRCxFQUFNQyxFQUFOLEtBQWE7QUFDNUQ7QUFDQTtBQUNBTixJQUFBQSxHQUFHLENBQUNPLE1BQUosQ0FBVyx3QkFBWDtBQUNBUCxJQUFBQSxHQUFHLENBQUNPLE1BQUosQ0FBVyxnQkFBWDtBQUVBUCxJQUFBQSxHQUFHLENBQUNRLEdBQUosQ0FBUUYsRUFBRSxDQUFDRyxRQUFILEVBQVI7QUFDQVQsSUFBQUEsR0FBRyxDQUFDUSxHQUFKLENBQ0VGLEVBQUUsQ0FBQ0ksS0FBSCxDQUNFO0FBQ0U7QUFDQTtBQUNBQyxNQUFBQSxhQUFhLEVBQUUsS0FIakI7QUFJRUMsTUFBQUEsTUFBTSxFQUFFO0FBSlYsS0FERixFQU9FO0FBQ0VDLE1BQUFBLFdBQVcsRUFBRSxLQURmO0FBRUVDLE1BQUFBLE9BQU8sRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGdCQUZ2QixDQUdFO0FBQ0E7O0FBSkYsS0FQRixDQURGO0FBaUJBakIsSUFBQUEsR0FBRyxDQUFDUSxHQUFKLENBQ0VGLEVBQUUsQ0FBQ1ksWUFBSCxDQUFnQjtBQUNkO0FBQ0FDLE1BQUFBLE1BQU0sRUFBRTtBQUNOQyxRQUFBQSxNQUFNLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSztBQURkLE9BRk07QUFLZDtBQUNBQyxNQUFBQSxJQUFJLEVBQUU7QUFDSkMsUUFBQUEsS0FBSyxFQUFFUixPQUFPLENBQUNDLEdBQVIsQ0FBWVE7QUFEZjtBQU5RLEtBQWhCLENBREYsRUF4QjRELENBcUM1RDs7QUFDQXhCLElBQUFBLEdBQUcsQ0FBQ1EsR0FBSixDQUFRRixFQUFFLENBQUNtQixJQUFILEVBQVIsRUFBbUJuQixFQUFFLENBQUNvQixlQUFILEVBQW5CO0FBRUF6QixJQUFBQSxNQUFNLENBQUNELEdBQUQsQ0FBTixDQXhDNEQsQ0EwQzVEOztBQUNBQSxJQUFBQSxHQUFHLENBQUNRLEdBQUosQ0FBUW1CLGNBQVI7QUFDRCxHQTVDRDtBQTZDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtaWRkbGV3YXJlIGZyb20gJ3N3YWdnZXItZXhwcmVzcy1taWRkbGV3YXJlJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gJy4uL2FwaS9taWRkbGV3YXJlcy9lcnJvci5oYW5kbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYXBwLCByb3V0ZXMpIHtcbiAgbWlkZGxld2FyZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnYXBpLnltbCcpLCBhcHAsIChlcnIsIG13KSA9PiB7XG4gICAgLy8gRW5hYmxlIEV4cHJlc3MnIGNhc2Utc2Vuc2l0aXZlIGFuZCBzdHJpY3Qgb3B0aW9uc1xuICAgIC8vIChzbyBcIi9lbnRpdGllc1wiLCBcIi9FbnRpdGllc1wiLCBhbmQgXCIvRW50aXRpZXMvXCIgYXJlIGFsbCBkaWZmZXJlbnQpXG4gICAgYXBwLmVuYWJsZSgnY2FzZSBzZW5zaXRpdmUgcm91dGluZycpO1xuICAgIGFwcC5lbmFibGUoJ3N0cmljdCByb3V0aW5nJyk7XG5cbiAgICBhcHAudXNlKG13Lm1ldGFkYXRhKCkpO1xuICAgIGFwcC51c2UoXG4gICAgICBtdy5maWxlcyhcbiAgICAgICAge1xuICAgICAgICAgIC8vIE92ZXJyaWRlIHRoZSBFeHByZXNzIEFwcCdzIGNhc2Utc2Vuc2l0aXZlXG4gICAgICAgICAgLy8gYW5kIHN0cmljdC1yb3V0aW5nIHNldHRpbmdzIGZvciB0aGUgRmlsZXMgbWlkZGxld2FyZS5cbiAgICAgICAgICBjYXNlU2Vuc2l0aXZlOiBmYWxzZSxcbiAgICAgICAgICBzdHJpY3Q6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdXNlQmFzZVBhdGg6IGZhbHNlLFxuICAgICAgICAgIGFwaVBhdGg6IHByb2Nlc3MuZW52LlNXQUdHRVJfQVBJX1NQRUMsXG4gICAgICAgICAgLy8gRGlzYWJsZSBzZXJ2aW5nIHRoZSBcImFwaS55bWxcIiBmaWxlXG4gICAgICAgICAgLy8gcmF3RmlsZXNQYXRoOiBmYWxzZVxuICAgICAgICB9XG4gICAgICApXG4gICAgKTtcblxuICAgIGFwcC51c2UoXG4gICAgICBtdy5wYXJzZVJlcXVlc3Qoe1xuICAgICAgICAvLyBDb25maWd1cmUgdGhlIGNvb2tpZSBwYXJzZXIgdG8gdXNlIHNlY3VyZSBjb29raWVzXG4gICAgICAgIGNvb2tpZToge1xuICAgICAgICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuU0VTU0lPTl9TRUNSRVQsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIERvbid0IGFsbG93IEpTT04gY29udGVudCBvdmVyIDEwMGtiIChkZWZhdWx0IGlzIDFtYilcbiAgICAgICAganNvbjoge1xuICAgICAgICAgIGxpbWl0OiBwcm9jZXNzLmVudi5SRVFVRVNUX0xJTUlULFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gVGhlc2UgdHdvIG1pZGRsZXdhcmUgZG9uJ3QgaGF2ZSBhbnkgb3B0aW9ucyAoeWV0KVxuICAgIGFwcC51c2UobXcuQ09SUygpLCBtdy52YWxpZGF0ZVJlcXVlc3QoKSk7XG5cbiAgICByb3V0ZXMoYXBwKTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycywgbm8tc2hhZG93XG4gICAgYXBwLnVzZShlcnJvckhhbmRsZXIpO1xuICB9KTtcbn1cbiJdfQ==