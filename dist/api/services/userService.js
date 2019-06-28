"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserService {
  all() {
    return new Promise((resolve, rejects) => {
      const users = _user.default.find();

      resolve(users);
    }); // User.find();
  }

  byId(id) {
    return new Promise((resolve, rejects) => {
      const user = _user.default.findById(id);

      resolve(user);
    });
  }

  update(id) {
    return new Promise((resolve, reject) => {
      const user = _user.default.findById(id);

      resolve(user);
    });
  }

  create(info) {
    return new Promise((resolve, rejects) => {
      const user = _user.default.create(info);

      console.log(info); // if (err) rejects(err);

      resolve(user);
    });
  }

}

var _default = new UserService();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcGkvc2VydmljZXMvdXNlclNlcnZpY2UuanMiXSwibmFtZXMiOlsiVXNlclNlcnZpY2UiLCJhbGwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdHMiLCJ1c2VycyIsIlVzZXIiLCJmaW5kIiwiYnlJZCIsImlkIiwidXNlciIsImZpbmRCeUlkIiwidXBkYXRlIiwicmVqZWN0IiwiY3JlYXRlIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBLE1BQU1BLFdBQU4sQ0FBa0I7QUFFakJDLEVBQUFBLEdBQUcsR0FBRztBQUNMLFdBQU8sSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsT0FBVixLQUFzQjtBQUN4QyxZQUFNQyxLQUFLLEdBQUdDLGNBQUtDLElBQUwsRUFBZDs7QUFDQUosTUFBQUEsT0FBTyxDQUFDRSxLQUFELENBQVA7QUFDQSxLQUhNLENBQVAsQ0FESyxDQUtMO0FBQ0E7O0FBRURHLEVBQUFBLElBQUksQ0FBQ0MsRUFBRCxFQUFLO0FBQ1IsV0FBTyxJQUFJUCxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxPQUFWLEtBQXNCO0FBQ3hDLFlBQU1NLElBQUksR0FBR0osY0FBS0ssUUFBTCxDQUFjRixFQUFkLENBQWI7O0FBQ0FOLE1BQUFBLE9BQU8sQ0FBQ08sSUFBRCxDQUFQO0FBQ0EsS0FITSxDQUFQO0FBS0E7O0FBRURFLEVBQUFBLE1BQU0sQ0FBQ0gsRUFBRCxFQUFLO0FBQ1YsV0FBTyxJQUFJUCxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVVSxNQUFWLEtBQXFCO0FBQ3ZDLFlBQU1ILElBQUksR0FBR0osY0FBS0ssUUFBTCxDQUFjRixFQUFkLENBQWI7O0FBQ0FOLE1BQUFBLE9BQU8sQ0FBQ08sSUFBRCxDQUFQO0FBQ0EsS0FITSxDQUFQO0FBSUE7O0FBR0RJLEVBQUFBLE1BQU0sQ0FBQ0MsSUFBRCxFQUFPO0FBQ1osV0FBTyxJQUFJYixPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxPQUFWLEtBQXNCO0FBQ3hDLFlBQU1NLElBQUksR0FBR0osY0FBS1EsTUFBTCxDQUFZQyxJQUFaLENBQWI7O0FBQ0FDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaLEVBRndDLENBR3hDOztBQUNBWixNQUFBQSxPQUFPLENBQUNPLElBQUQsQ0FBUDtBQUNBLEtBTE0sQ0FBUDtBQU1BOztBQWpDZ0I7O2VBd0NILElBQUlWLFdBQUosRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy91c2VyJztcclxuXHJcbmNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuXHJcblx0YWxsKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3RzKSA9PiB7XHJcblx0XHRcdGNvbnN0IHVzZXJzID0gVXNlci5maW5kKCk7XHJcblx0XHRcdHJlc29sdmUodXNlcnMpO1xyXG5cdFx0fSlcclxuXHRcdC8vIFVzZXIuZmluZCgpO1xyXG5cdH1cclxuXHJcblx0YnlJZChpZCkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3RzKSA9PiB7XHJcblx0XHRcdGNvbnN0IHVzZXIgPSBVc2VyLmZpbmRCeUlkKGlkKTtcclxuXHRcdFx0cmVzb2x2ZSh1c2VyKTtcclxuXHRcdH0pXHJcblxyXG5cdH1cclxuXHJcblx0dXBkYXRlKGlkKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRjb25zdCB1c2VyID0gVXNlci5maW5kQnlJZChpZCk7XHJcblx0XHRcdHJlc29sdmUodXNlcik7XHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblxyXG5cdGNyZWF0ZShpbmZvKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdHMpID0+IHtcclxuXHRcdFx0Y29uc3QgdXNlciA9IFVzZXIuY3JlYXRlKGluZm8pO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhpbmZvKTtcclxuXHRcdFx0Ly8gaWYgKGVycikgcmVqZWN0cyhlcnIpO1xyXG5cdFx0XHRyZXNvbHZlKHVzZXIpO1x0XHRcdFxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlclNlcnZpY2UoKSJdfQ==