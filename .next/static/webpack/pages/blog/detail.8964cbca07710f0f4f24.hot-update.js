webpackHotUpdate_N_E("pages/blog/detail",{

/***/ "./pages/blog/detail.js":
/*!******************************!*\
  !*** ./pages/blog/detail.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return detail; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");







var _jsxFileName = "D:\\testNextJS\\pages\\blog\\detail.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var detail = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(detail, _Component);

  var _super = _createSuper(detail);

  function detail() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, detail);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(detail, [{
    key: "render",
    value: function render() {
      var blog = this.props.blog;
      var updated_date = new Date(blog.updated_date);
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-3655543817" + " " + "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }
      }, __jsx("h1", {
        className: "jsx-3655543817" + " " + "mt-4 mb-4 title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }
      }, blog.subject), __jsx("div", {
        className: "jsx-3655543817" + " " + "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "jsx-3655543817" + " " + "col-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: blog.thumbnail,
        className: "jsx-3655543817" + " " + "img-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 29
        }
      })), __jsx("div", {
        className: "jsx-3655543817" + " " + "col-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "jsx-3655543817" + " " + "text-justify detail",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 29
        }
      }, blog.detail), __jsx("hr", {
        className: "jsx-3655543817",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 29
        }
      }), __jsx("h5", {
        className: "jsx-3655543817" + " " + "text-success",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 29
        }
      }, "\u0E40\u0E02\u0E35\u0E22\u0E19\u0E42\u0E14\u0E22 ", blog.created_by.user.firstname, " ", blog.created_by.user.lastname), __jsx("h5", {
        className: "jsx-3655543817" + " " + "text-muted text-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 29
        }
      }, "\u0E41\u0E01\u0E49\u0E40\u0E21\u0E37\u0E48\u0E2D ", updated_date.toLocaleDateString())))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3655543817",
        __self: this
      }, ".title.jsx-3655543817{color:darkgreen;text-align:center;}.detail.jsx-3655543817{color:black;word-spacing :8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx0ZXN0TmV4dEpTXFxwYWdlc1xcYmxvZ1xcZGV0YWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDaUIsQUFHd0MsQUFJSCxZQUVqQixJQUxzQixjQUtyQixJQUpBIiwiZmlsZSI6IkQ6XFx0ZXN0TmV4dEpTXFxwYWdlc1xcYmxvZ1xcZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBkZXRhaWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSB9KSB7XHJcbiAgICAgICAgLy8gY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYmxvZ3MvJyArIHF1ZXJ5LmlkIClcclxuICAgICAgICAvLyByZXR1cm4geyBibG9nIDogcmVzLmRhdGEgfVxyXG5cclxuICAgICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLm5wb2ludC5pby8xMWRhMTM3NDJmOWVjNzUyZTNiZS8nICsgcXVlcnkuaWQgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zKGNvbmZpZylcclxuICAgICAgICBjb25zb2xlLmxvZyggXCJyZXMuZGF0YVwiICk7XHJcbiAgICAgICAgY29uc29sZS5sb2coIHJlcy5kYXRhICk7XHJcbiAgICAgICAgcmV0dXJuIHsgYmxvZ3MgOiByZXMuZGF0YSB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgYmxvZyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRfZGF0ZSA9IG5ldyBEYXRlKGJsb2cudXBkYXRlZF9kYXRlKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPiBcclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXQtNCBtYi00IHRpdGxlXCI+e2Jsb2cuc3ViamVjdH08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtibG9nLnRodW1ibmFpbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1qdXN0aWZ5IGRldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9nLmRldGFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4LmA4LiC4Li14Lii4LiZ4LmC4LiU4LiiIHtibG9nLmNyZWF0ZWRfYnkudXNlci5maXJzdG5hbWV9IHtibG9nLmNyZWF0ZWRfYnkudXNlci5sYXN0bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4LmB4LiB4LmJ4LmA4Lih4Li34LmI4LitIHt1cGRhdGVkX2RhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpkYXJrZ3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZGV0YWlsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JkLXNwYWNpbmcgOiA4cHhcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\testNextJS\\\\pages\\\\blog\\\\detail.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, config, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                // const res = await axios.get('http://localhost:3001/blogs/' + query.id )
                // return { blog : res.data }
                config = {
                  method: 'get',
                  url: 'https://api.npoint.io/11da13742f9ec752e3be/' + query.id
                };
                _context.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_9___default()(config);

              case 4:
                res = _context.sent;
                console.log("res.data");
                console.log(res.data);
                return _context.abrupt("return", {
                  blogs: res.data
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return detail;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9kZXRhaWwuanMiXSwibmFtZXMiOlsiZGV0YWlsIiwiYmxvZyIsInByb3BzIiwidXBkYXRlZF9kYXRlIiwiRGF0ZSIsInN1YmplY3QiLCJ0aHVtYm5haWwiLCJjcmVhdGVkX2J5IiwidXNlciIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwicXVlcnkiLCJjb25maWciLCJtZXRob2QiLCJ1cmwiLCJpZCIsImF4aW9zIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJibG9ncyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs2QkFpQlI7QUFBQSxVQUNHQyxJQURILEdBQ1ksS0FBS0MsS0FEakIsQ0FDR0QsSUFESDtBQUVMLFVBQU1FLFlBQVksR0FBRyxJQUFJQyxJQUFKLENBQVNILElBQUksQ0FBQ0UsWUFBZCxDQUFyQjtBQUNBLGFBQ0ksTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQSw0Q0FBZSxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBLDRDQUFjLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBaUNGLElBQUksQ0FBQ0ksT0FBdEMsQ0FESixFQUVJO0FBQUEsNENBQWUsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQSw0Q0FBZSxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUEyQixXQUFHLEVBQUVKLElBQUksQ0FBQ0ssU0FBckM7QUFBQSw0Q0FBZSxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixDQURKLEVBSUk7QUFBQSw0Q0FBZSxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBLDRDQUFlLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDS0wsSUFBSSxDQUFDRCxNQURWLENBREosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFKSixFQUtJO0FBQUEsNENBQWMsY0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhEQUNjQyxJQUFJLENBQUNNLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCQyxTQURuQyxPQUMrQ1IsSUFBSSxDQUFDTSxVQUFMLENBQWdCQyxJQUFoQixDQUFxQkUsUUFEcEUsQ0FMSixFQVFJO0FBQUEsNENBQWMsdUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4REFDY1AsWUFBWSxDQUFDUSxrQkFBYixFQURkLENBUkosQ0FKSixDQUZKLENBREo7QUFBQTtBQUFBO0FBQUEsMHBIQURKO0FBb0NIOzs7Ozs7Ozs7O0FBdEQ4QkMscUIsUUFBQUEsSztBQUMzQjtBQUNBO0FBRU1DLHNCLEdBQVM7QUFDWEMsd0JBQU0sRUFBRSxLQURHO0FBRVhDLHFCQUFHLEVBQUUsZ0RBQWdESCxLQUFLLENBQUNJO0FBRmhELGlCOzt1QkFLQ0MsNENBQUssQ0FBQ0osTUFBRCxDOzs7QUFBakJLLG1CO0FBQ0pDLHVCQUFPLENBQUNDLEdBQVIsQ0FBYSxVQUFiO0FBQ0FELHVCQUFPLENBQUNDLEdBQVIsQ0FBYUYsR0FBRyxDQUFDRyxJQUFqQjtpREFDTztBQUFFQyx1QkFBSyxFQUFHSixHQUFHLENBQUNHO0FBQWQsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFkcUJFLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cvZGV0YWlsLjg5NjRjYmNhMDc3MTBmMGY0ZjI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGRldGFpbCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcclxuICAgICAgICAvLyBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9ibG9ncy8nICsgcXVlcnkuaWQgKVxyXG4gICAgICAgIC8vIHJldHVybiB7IGJsb2cgOiByZXMuZGF0YSB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkubnBvaW50LmlvLzExZGExMzc0MmY5ZWM3NTJlM2JlLycgKyBxdWVyeS5pZCBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MoY29uZmlnKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCBcInJlcy5kYXRhXCIgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyggcmVzLmRhdGEgKTtcclxuICAgICAgICByZXR1cm4geyBibG9ncyA6IHJlcy5kYXRhIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBibG9nIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3QgdXBkYXRlZF9kYXRlID0gbmV3IERhdGUoYmxvZy51cGRhdGVkX2RhdGUpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC00IG1iLTQgdGl0bGVcIj57YmxvZy5zdWJqZWN0fTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e2Jsb2cudGh1bWJuYWlsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWp1c3RpZnkgZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2cuZGV0YWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDguYDguILguLXguKLguJnguYLguJTguKIge2Jsb2cuY3JlYXRlZF9ieS51c2VyLmZpcnN0bmFtZX0ge2Jsb2cuY3JlYXRlZF9ieS51c2VyLmxhc3RuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDguYHguIHguYnguYDguKHguLfguYjguK0ge3VwZGF0ZWRfZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmRhcmtncmVlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5kZXRhaWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmQtc3BhY2luZyA6IDhweFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==