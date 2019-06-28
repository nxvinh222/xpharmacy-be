"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _product = _interopRequireDefault(require("../models/product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProductService {
  all() {
    return new Promise((resolve, rejects) => {
      const products = _product.default.find();

      resolve(products);
    });
  }

  byId(id) {
    return new Promise((resolve, rejects) => {
      const product = _product.default.findById(id);

      resolve(product);
    });
  }

  create(info) {
    return new Promise((resolve, rejects) => {
      const product = _product.default.create(info);

      console.log(info);
      resolve(product);
    });
  }

  delete(id) {
    return new Promise((resolve, rejects) => {
      const product = _product.default.findByIdAndDelete(id);

      console.log(product);
      resolve(product);
    });
  }

}

var _default = new ProductService();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcGkvc2VydmljZXMvcHJvZHVjdFNlcnZpY2UuanMiXSwibmFtZXMiOlsiUHJvZHVjdFNlcnZpY2UiLCJhbGwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdHMiLCJwcm9kdWN0cyIsIlByb2R1Y3QiLCJmaW5kIiwiYnlJZCIsImlkIiwicHJvZHVjdCIsImZpbmRCeUlkIiwiY3JlYXRlIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJkZWxldGUiLCJmaW5kQnlJZEFuZERlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUEsTUFBTUEsY0FBTixDQUFxQjtBQUVwQkMsRUFBQUEsR0FBRyxHQUFHO0FBQ0wsV0FBTyxJQUFJQyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxPQUFWLEtBQXNCO0FBQ3hDLFlBQU1DLFFBQVEsR0FBR0MsaUJBQVFDLElBQVIsRUFBakI7O0FBQ0FKLE1BQUFBLE9BQU8sQ0FBQ0UsUUFBRCxDQUFQO0FBQ0EsS0FITSxDQUFQO0FBSUE7O0FBRURHLEVBQUFBLElBQUksQ0FBQ0MsRUFBRCxFQUFLO0FBQ1IsV0FBTyxJQUFJUCxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxPQUFWLEtBQXNCO0FBQ3hDLFlBQU1NLE9BQU8sR0FBR0osaUJBQVFLLFFBQVIsQ0FBaUJGLEVBQWpCLENBQWhCOztBQUNBTixNQUFBQSxPQUFPLENBQUNPLE9BQUQsQ0FBUDtBQUNBLEtBSE0sQ0FBUDtBQUtBOztBQUVERSxFQUFBQSxNQUFNLENBQUNDLElBQUQsRUFBTztBQUNaLFdBQU8sSUFBSVgsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsT0FBVixLQUFzQjtBQUN4QyxZQUFNTSxPQUFPLEdBQUdKLGlCQUFRTSxNQUFSLENBQWVDLElBQWYsQ0FBaEI7O0FBQ0FDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0FWLE1BQUFBLE9BQU8sQ0FBQ08sT0FBRCxDQUFQO0FBQ0EsS0FKTSxDQUFQO0FBS0E7O0FBRURNLEVBQUFBLE1BQU0sQ0FBQ1AsRUFBRCxFQUFJO0FBQ1QsV0FBTyxJQUFJUCxPQUFKLENBQWEsQ0FBQ0MsT0FBRCxFQUFVQyxPQUFWLEtBQXFCO0FBQ3hDLFlBQU1NLE9BQU8sR0FBR0osaUJBQVFXLGlCQUFSLENBQTBCUixFQUExQixDQUFoQjs7QUFDQUssTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLE9BQVo7QUFDQVAsTUFBQUEsT0FBTyxDQUFDTyxPQUFELENBQVA7QUFDQSxLQUpNLENBQVA7QUFLQTs7QUEvQm1COztlQW9DTixJQUFJVixjQUFKLEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdCBmcm9tICcuLi9tb2RlbHMvcHJvZHVjdCc7XHJcblxyXG5jbGFzcyBQcm9kdWN0U2VydmljZSB7XHJcblxyXG5cdGFsbCgpIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0cykgPT4ge1xyXG5cdFx0XHRjb25zdCBwcm9kdWN0cyA9IFByb2R1Y3QuZmluZCgpO1xyXG5cdFx0XHRyZXNvbHZlKHByb2R1Y3RzKTtcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRieUlkKGlkKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdHMpID0+IHtcclxuXHRcdFx0Y29uc3QgcHJvZHVjdCA9IFByb2R1Y3QuZmluZEJ5SWQoaWQpO1xyXG5cdFx0XHRyZXNvbHZlKHByb2R1Y3QpO1xyXG5cdFx0fSlcclxuXHJcblx0fVxyXG5cclxuXHRjcmVhdGUoaW5mbykge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3RzKSA9PiB7XHJcblx0XHRcdGNvbnN0IHByb2R1Y3QgPSBQcm9kdWN0LmNyZWF0ZShpbmZvKTtcclxuXHRcdFx0Y29uc29sZS5sb2coaW5mbyk7XHJcblx0XHRcdHJlc29sdmUocHJvZHVjdCk7XHRcdFx0XHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0ZGVsZXRlKGlkKXtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSAoKHJlc29sdmUsIHJlamVjdHMpID0+e1xyXG5cdFx0XHRjb25zdCBwcm9kdWN0ID0gUHJvZHVjdC5maW5kQnlJZEFuZERlbGV0ZShpZCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKHByb2R1Y3QpO1xyXG5cdFx0XHRyZXNvbHZlKHByb2R1Y3QpO1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFByb2R1Y3RTZXJ2aWNlKCkiXX0=