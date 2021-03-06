"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const UserSchmema = new _mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  phone: String,
  age: Number
});

var _default = (0, _mongoose.model)('User', UserSchmema);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcGkvbW9kZWxzL3VzZXIuanMiXSwibmFtZXMiOlsiVXNlclNjaG1lbWEiLCJTY2hlbWEiLCJ1c2VybmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInVuaXF1ZSIsInBhc3N3b3JkIiwicmVxdWlyZSIsImVtYWlsIiwibmFtZSIsInBob25lIiwiYWdlIiwiTnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBR0EsTUFBTUEsV0FBVyxHQUFHLElBQUlDLGdCQUFKLENBQVc7QUFDOUJDLEVBQUFBLFFBQVEsRUFBRTtBQUNUQyxJQUFBQSxJQUFJLEVBQUVDLE1BREc7QUFFVEMsSUFBQUEsUUFBUSxFQUFFLElBRkQ7QUFHVEMsSUFBQUEsTUFBTSxFQUFFO0FBSEMsR0FEb0I7QUFNOUJDLEVBQUFBLFFBQVEsRUFBRTtBQUNUSixJQUFBQSxJQUFJLEVBQUVDLE1BREc7QUFFVEksSUFBQUEsT0FBTyxFQUFFO0FBRkEsR0FOb0I7QUFVOUJDLEVBQUFBLEtBQUssRUFBRTtBQUNOTixJQUFBQSxJQUFJLEVBQUVDLE1BREE7QUFFTkksSUFBQUEsT0FBTyxFQUFFO0FBRkgsR0FWdUI7QUFjOUJFLEVBQUFBLElBQUksRUFBRTtBQUNMUCxJQUFBQSxJQUFJLEVBQUVDLE1BREQ7QUFFTEksSUFBQUEsT0FBTyxFQUFFO0FBRkosR0Fkd0I7QUFrQjlCRyxFQUFBQSxLQUFLLEVBQUVQLE1BbEJ1QjtBQW1COUJRLEVBQUFBLEdBQUcsRUFBRUM7QUFuQnlCLENBQVgsQ0FBcEI7O2VBdUJlLHFCQUFNLE1BQU4sRUFBY2IsV0FBZCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hLCBtb2RlbCB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuXHJcbmNvbnN0IFVzZXJTY2htZW1hID0gbmV3IFNjaGVtYSh7XHJcblx0dXNlcm5hbWU6IHtcclxuXHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0dW5pcXVlOiB0cnVlXHJcblx0fSxcclxuXHRwYXNzd29yZDoge1xyXG5cdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0cmVxdWlyZTogdHJ1ZVxyXG5cdH0sXHJcblx0ZW1haWw6IHtcclxuXHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdHJlcXVpcmU6IHRydWVcclxuXHR9LFxyXG5cdG5hbWU6IHtcclxuXHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdHJlcXVpcmU6IHRydWVcclxuXHR9LFxyXG5cdHBob25lOiBTdHJpbmcsXHJcblx0YWdlOiBOdW1iZXIsXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9kZWwoJ1VzZXInLCBVc2VyU2NobWVtYSkiXX0=