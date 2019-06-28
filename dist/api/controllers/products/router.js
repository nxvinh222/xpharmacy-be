"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _controller = _interopRequireDefault(require("./controller"));

var express = _interopRequireWildcard(require("express"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = express.Router().get('/', _controller.default.all).get('/:id', _controller.default.byId).post('/', _controller.default.create).delete('/:id', _controller.default.delete);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvcHJvZHVjdHMvcm91dGVyLmpzIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJSb3V0ZXIiLCJnZXQiLCJQcm9kdWN0Q29udHJvbGxlciIsImFsbCIsImJ5SWQiLCJwb3N0IiwiY3JlYXRlIiwiZGVsZXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztlQUVlQSxPQUFPLENBQ25CQyxNQURZLEdBRVpDLEdBRlksQ0FFUixHQUZRLEVBRUhDLG9CQUFrQkMsR0FGZixFQUdaRixHQUhZLENBR1IsTUFIUSxFQUdBQyxvQkFBa0JFLElBSGxCLEVBSVpDLElBSlksQ0FJUCxHQUpPLEVBSUZILG9CQUFrQkksTUFKaEIsRUFLWkMsTUFMWSxDQUtMLE1BTEssRUFLRUwsb0JBQWtCSyxNQUxwQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3RDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XHJcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBleHByZXNzXHJcbiAgLlJvdXRlcigpXHJcbiAgLmdldCgnLycsIFByb2R1Y3RDb250cm9sbGVyLmFsbClcclxuICAuZ2V0KCcvOmlkJywgUHJvZHVjdENvbnRyb2xsZXIuYnlJZClcclxuICAucG9zdCgnLycsIFByb2R1Y3RDb250cm9sbGVyLmNyZWF0ZSlcclxuICAuZGVsZXRlKCcvOmlkJyxQcm9kdWN0Q29udHJvbGxlci5kZWxldGUpOyJdfQ==