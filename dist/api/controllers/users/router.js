"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _controller = _interopRequireDefault(require("./controller"));

var express = _interopRequireWildcard(require("express"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = express.Router().get('/', _controller.default.all).put('/:id', _controller.default.update).get('/:id', _controller.default.byId).post('/', _controller.default.create);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvdXNlcnMvcm91dGVyLmpzIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJSb3V0ZXIiLCJnZXQiLCJVc2VyQ29udHJvbGxlciIsImFsbCIsInB1dCIsInVwZGF0ZSIsImJ5SWQiLCJwb3N0IiwiY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7OztlQUVlQSxPQUFPLENBQ25CQyxNQURZLEdBRVpDLEdBRlksQ0FFUixHQUZRLEVBRUhDLG9CQUFlQyxHQUZaLEVBR1pDLEdBSFksQ0FHUixNQUhRLEVBR0FGLG9CQUFlRyxNQUhmLEVBSVpKLEdBSlksQ0FJUixNQUpRLEVBSUFDLG9CQUFlSSxJQUpmLEVBS1pDLElBTFksQ0FLUCxHQUxPLEVBS0ZMLG9CQUFlTSxNQUxiLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFVzZXJDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XHJcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBleHByZXNzXHJcbiAgLlJvdXRlcigpXHJcbiAgLmdldCgnLycsIFVzZXJDb250cm9sbGVyLmFsbClcclxuICAucHV0KCcvOmlkJywgVXNlckNvbnRyb2xsZXIudXBkYXRlKVxyXG4gIC5nZXQoJy86aWQnLCBVc2VyQ29udHJvbGxlci5ieUlkKVxyXG4gIC5wb3N0KCcvJywgVXNlckNvbnRyb2xsZXIuY3JlYXRlKVxyXG4gICJdfQ==