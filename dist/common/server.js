"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var path = _interopRequireWildcard(require("path"));

var bodyParser = _interopRequireWildcard(require("body-parser"));

var http = _interopRequireWildcard(require("http"));

var os = _interopRequireWildcard(require("os"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _cors = _interopRequireDefault(require("cors"));

var _swagger = _interopRequireDefault(require("./swagger"));

var _logger = _interopRequireDefault(require("./logger"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _express.default();

class ExpressServer {
  constructor() {
    const root = path.normalize(`${__dirname}/../..`);
    app.set('appPath', `${root}client`);
    app.use(bodyParser.json({
      limit: process.env.REQUEST_LIMIT || '100kb'
    }));
    app.use(bodyParser.urlencoded({
      extended: true,
      limit: process.env.REQUEST_LIMIT || '100kb'
    }));
    app.use((0, _cookieParser.default)(process.env.SESSION_SECRET));
    app.use(_express.default.static(`${root}/public`)); // app.use(cors({origin: 'http://localhost:3000'}));
    // app.use(function(req, res, next) {
    //   res.header("Access-Control-Allow-Origin", "*");
    //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //   next();
    // });
    //session

    app.use((0, _expressSession.default)({
      secret: "worthy",
      saveUninitialized: false,
      resave: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
      }
    })); //********* */

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: false
    }));

    _mongoose.default.connect('mongodb+srv://divinevinh:ug6y6crKwUP0Fsv0@cluster0-scqka.mongodb.net/test?retryWrites=true&w=majority', err => {
      if (err) console.log(err);else console.log("CONNECT SUCCESS!");
    });
  }

  router(routes) {
    (0, _swagger.default)(app, routes);
    return this;
  }

  listen(port = process.env.PORT) {
    const welcome = p => () => _logger.default.info(`up and running in ${process.env.NODE_ENV || 'development'} @: ${os.hostname()} on port: ${p}}`);

    http.createServer(app).listen(port, welcome(port));
    return app;
  }

}

exports.default = ExpressServer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9jb21tb24vc2VydmVyLmpzIl0sIm5hbWVzIjpbImFwcCIsIkV4cHJlc3MiLCJFeHByZXNzU2VydmVyIiwiY29uc3RydWN0b3IiLCJyb290IiwicGF0aCIsIm5vcm1hbGl6ZSIsIl9fZGlybmFtZSIsInNldCIsInVzZSIsImJvZHlQYXJzZXIiLCJqc29uIiwibGltaXQiLCJwcm9jZXNzIiwiZW52IiwiUkVRVUVTVF9MSU1JVCIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsIlNFU1NJT05fU0VDUkVUIiwic3RhdGljIiwic2VjcmV0Iiwic2F2ZVVuaW5pdGlhbGl6ZWQiLCJyZXNhdmUiLCJjb29raWUiLCJtYXhBZ2UiLCJtb25nb29zZSIsImNvbm5lY3QiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwicm91dGVzIiwibGlzdGVuIiwicG9ydCIsIlBPUlQiLCJ3ZWxjb21lIiwicCIsImwiLCJpbmZvIiwiTk9ERV9FTlYiLCJvcyIsImhvc3RuYW1lIiwiaHR0cCIsImNyZWF0ZVNlcnZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOzs7Ozs7QUFFQSxNQUFNQSxHQUFHLEdBQUcsSUFBSUMsZ0JBQUosRUFBWjs7QUFFZSxNQUFNQyxhQUFOLENBQW9CO0FBQ2pDQyxFQUFBQSxXQUFXLEdBQUc7QUFFWixVQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFnQixHQUFFQyxTQUFVLFFBQTVCLENBQWI7QUFDQVAsSUFBQUEsR0FBRyxDQUFDUSxHQUFKLENBQVEsU0FBUixFQUFvQixHQUFFSixJQUFLLFFBQTNCO0FBQ0FKLElBQUFBLEdBQUcsQ0FBQ1MsR0FBSixDQUFRQyxVQUFVLENBQUNDLElBQVgsQ0FBZ0I7QUFBRUMsTUFBQUEsS0FBSyxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsYUFBWixJQUE2QjtBQUF0QyxLQUFoQixDQUFSO0FBQ0FmLElBQUFBLEdBQUcsQ0FBQ1MsR0FBSixDQUNFQyxVQUFVLENBQUNNLFVBQVgsQ0FBc0I7QUFDcEJDLE1BQUFBLFFBQVEsRUFBRSxJQURVO0FBRXBCTCxNQUFBQSxLQUFLLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxhQUFaLElBQTZCO0FBRmhCLEtBQXRCLENBREY7QUFNQWYsSUFBQUEsR0FBRyxDQUFDUyxHQUFKLENBQVEsMkJBQWFJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxjQUF6QixDQUFSO0FBQ0FsQixJQUFBQSxHQUFHLENBQUNTLEdBQUosQ0FBUVIsaUJBQVFrQixNQUFSLENBQWdCLEdBQUVmLElBQUssU0FBdkIsQ0FBUixFQVpZLENBYVo7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FKLElBQUFBLEdBQUcsQ0FBQ1MsR0FBSixDQUFRLDZCQUFRO0FBQ2RXLE1BQUFBLE1BQU0sRUFBRSxRQURNO0FBRWRDLE1BQUFBLGlCQUFpQixFQUFFLEtBRkw7QUFHZEMsTUFBQUEsTUFBTSxFQUFFLEtBSE07QUFJZEMsTUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFFBQUFBLE1BQU0sRUFBRSxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQWpCLEdBQXNCO0FBRDFCO0FBSk0sS0FBUixDQUFSLEVBckJZLENBNkJaOztBQUVBeEIsSUFBQUEsR0FBRyxDQUFDUyxHQUFKLENBQVFDLFVBQVUsQ0FBQ0MsSUFBWCxFQUFSO0FBQ0FYLElBQUFBLEdBQUcsQ0FBQ1MsR0FBSixDQUFRQyxVQUFVLENBQUNNLFVBQVgsQ0FBc0I7QUFBRUMsTUFBQUEsUUFBUSxFQUFFO0FBQVosS0FBdEIsQ0FBUjs7QUFDQVEsc0JBQVNDLE9BQVQsQ0FBaUIsdUdBQWpCLEVBQTBIQyxHQUFHLElBQUc7QUFDaEksVUFBSUEsR0FBSixFQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixFQUFULEtBRUFDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0gsS0FKRztBQU1EOztBQUVEQyxFQUFBQSxNQUFNLENBQUNDLE1BQUQsRUFBUztBQUNiLDBCQUFXL0IsR0FBWCxFQUFnQitCLE1BQWhCO0FBRUEsV0FBTyxJQUFQO0FBQ0Q7O0FBRURDLEVBQUFBLE1BQU0sQ0FBQ0MsSUFBSSxHQUFHcEIsT0FBTyxDQUFDQyxHQUFSLENBQVlvQixJQUFwQixFQUEwQjtBQUM5QixVQUFNQyxPQUFPLEdBQUdDLENBQUMsSUFBSSxNQUNuQkMsZ0JBQUVDLElBQUYsQ0FDRyxxQkFBb0J6QixPQUFPLENBQUNDLEdBQVIsQ0FBWXlCLFFBQVosSUFDbkIsYUFBYyxPQUFNQyxFQUFFLENBQUNDLFFBQUgsRUFBYyxhQUFZTCxDQUFFLEdBRnBELENBREY7O0FBS0FNLElBQUFBLElBQUksQ0FBQ0MsWUFBTCxDQUFrQjNDLEdBQWxCLEVBQXVCZ0MsTUFBdkIsQ0FBOEJDLElBQTlCLEVBQW9DRSxPQUFPLENBQUNGLElBQUQsQ0FBM0M7QUFDQSxXQUFPakMsR0FBUDtBQUNEOztBQXhEZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgKiBhcyBvcyBmcm9tICdvcyc7XG5pbXBvcnQgY29va2llUGFyc2VyIGZyb20gJ2Nvb2tpZS1wYXJzZXInO1xuaW1wb3J0IHNlc3Npb24gZnJvbSAnZXhwcmVzcy1zZXNzaW9uJztcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcblxuaW1wb3J0IHN3YWdnZXJpZnkgZnJvbSAnLi9zd2FnZ2VyJztcblxuaW1wb3J0IGwgZnJvbSAnLi9sb2dnZXInO1xuXG5jb25zdCBhcHAgPSBuZXcgRXhwcmVzcygpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHByZXNzU2VydmVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBjb25zdCByb290ID0gcGF0aC5ub3JtYWxpemUoYCR7X19kaXJuYW1lfS8uLi8uLmApO1xuICAgIGFwcC5zZXQoJ2FwcFBhdGgnLCBgJHtyb290fWNsaWVudGApO1xuICAgIGFwcC51c2UoYm9keVBhcnNlci5qc29uKHsgbGltaXQ6IHByb2Nlc3MuZW52LlJFUVVFU1RfTElNSVQgfHwgJzEwMGtiJyB9KSk7XG4gICAgYXBwLnVzZShcbiAgICAgIGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7XG4gICAgICAgIGV4dGVuZGVkOiB0cnVlLFxuICAgICAgICBsaW1pdDogcHJvY2Vzcy5lbnYuUkVRVUVTVF9MSU1JVCB8fCAnMTAwa2InLFxuICAgICAgfSlcbiAgICApO1xuICAgIGFwcC51c2UoY29va2llUGFyc2VyKHByb2Nlc3MuZW52LlNFU1NJT05fU0VDUkVUKSk7XG4gICAgYXBwLnVzZShFeHByZXNzLnN0YXRpYyhgJHtyb290fS9wdWJsaWNgKSk7XG4gICAgLy8gYXBwLnVzZShjb3JzKHtvcmlnaW46ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnfSkpO1xuICAgIFxuICAgIC8vIGFwcC51c2UoZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcbiAgICAvLyAgIHJlcy5oZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIiwgXCIqXCIpO1xuICAgIC8vICAgcmVzLmhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnNcIiwgXCJPcmlnaW4sIFgtUmVxdWVzdGVkLVdpdGgsIENvbnRlbnQtVHlwZSwgQWNjZXB0XCIpO1xuICAgIC8vICAgbmV4dCgpO1xuICAgIC8vIH0pO1xuICAgIC8vc2Vzc2lvblxuICAgIGFwcC51c2Uoc2Vzc2lvbih7XG4gICAgICBzZWNyZXQ6IFwid29ydGh5XCIsIFxuICAgICAgc2F2ZVVuaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgcmVzYXZlOiBmYWxzZSxcbiAgICAgIGNvb2tpZToge1xuICAgICAgICAgIG1heEFnZTogMTAwMCAqIDYwICogNjAgKiAyNCAqIDdcbiAgICAgIH1cbiAgfSkpXG4gICAgLy8qKioqKioqKiogKi9cbiAgXG4gICAgYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG4gICAgYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xuICAgIG1vbmdvb3NlLmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8vZGl2aW5ldmluaDp1ZzZ5NmNyS3dVUDBGc3YwQGNsdXN0ZXIwLXNjcWthLm1vbmdvZGIubmV0L3Rlc3Q/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JywgZXJyID0+e1xuICAgIGlmIChlcnIpIGNvbnNvbGUubG9nKGVycilcbiAgICBlbHNlXG4gICAgY29uc29sZS5sb2coXCJDT05ORUNUIFNVQ0NFU1MhXCIpXG59KTtcblxuICB9XG5cbiAgcm91dGVyKHJvdXRlcykge1xuICAgIHN3YWdnZXJpZnkoYXBwLCByb3V0ZXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaXN0ZW4ocG9ydCA9IHByb2Nlc3MuZW52LlBPUlQpIHtcbiAgICBjb25zdCB3ZWxjb21lID0gcCA9PiAoKSA9PlxuICAgICAgbC5pbmZvKFxuICAgICAgICBgdXAgYW5kIHJ1bm5pbmcgaW4gJHtwcm9jZXNzLmVudi5OT0RFX0VOViB8fFxuICAgICAgICAgICdkZXZlbG9wbWVudCd9IEA6ICR7b3MuaG9zdG5hbWUoKX0gb24gcG9ydDogJHtwfX1gXG4gICAgICApO1xuICAgIGh0dHAuY3JlYXRlU2VydmVyKGFwcCkubGlzdGVuKHBvcnQsIHdlbGNvbWUocG9ydCkpO1xuICAgIHJldHVybiBhcHA7XG4gIH1cbn1cbiJdfQ==