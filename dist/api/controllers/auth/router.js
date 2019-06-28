"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _controller = _interopRequireDefault(require("./controller"));

var express = _interopRequireWildcard(require("express"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = express.Router().post('/', _controller.default.Login);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvYXV0aC9yb3V0ZXIuanMiXSwibmFtZXMiOlsiZXhwcmVzcyIsIlJvdXRlciIsInBvc3QiLCJhdXRoQ29udHJvbGxlciIsIkxvZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztlQUVlQSxPQUFPLENBQ2pCQyxNQURVLEdBRVZDLElBRlUsQ0FFTCxHQUZLLEVBRUFDLG9CQUFlQyxLQUZmLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0aENvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlclwiO1xyXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXhwcmVzc1xyXG4gICAgLlJvdXRlcigpXHJcbiAgICAucG9zdCgnLycsIGF1dGhDb250cm9sbGVyLkxvZ2luKTtcclxuXHJcbiJdfQ==