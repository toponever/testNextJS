webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);









var _jsxFileName = "D:\\testNextJS\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var index = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(index, _Component);

  var _super = _createSuper(index);

  function index() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderBlogs", function (blogs) {
      return blogs.map(function (blog) {
        return __jsx("div", {
          key: blog.id,
          className: "col-6",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 21
          }
        }, __jsx("img", {
          src: blog.thumbnail,
          className: "img-fluid",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }
        }), __jsx("h4", {
          className: "mt-3",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          as: '/blog/detail/' + blog.id,
          href: '/blog/detail?id=' + blog.id,
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }
        }, blog.subject)), __jsx("hr", {
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }
        }), __jsx("p", {
          className: "text-justify",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }
        }, blog.intro));
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(index, [{
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }
      }, this.renderBlogs(this.props.blogs))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var config, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // const res = await axios.get('http://localhost:3001/blogs')
                // return { blogs : res.data }
                config = {
                  method: 'get',
                  url: 'https://api.npoint.io/11da13742f9ec752e3be/blogs'
                };
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_11___default()(config);

              case 3:
                res = _context.sent;
                console.log(res.data);
                return _context.abrupt("return", {
                  blogs: res.data
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5kZXgiLCJibG9ncyIsIm1hcCIsImJsb2ciLCJpZCIsInRodW1ibmFpbCIsInN1YmplY3QiLCJpbnRybyIsInJlbmRlckJsb2dzIiwicHJvcHMiLCJjb25maWciLCJtZXRob2QiLCJ1cmwiLCJheGlvcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7c05BZUgsVUFBQUMsS0FBSyxFQUFJO0FBQ25CLGFBQ0lBLEtBQUssQ0FBQ0MsR0FBTixDQUFXLFVBQUFDLElBQUksRUFBRztBQUNkLGVBQ0k7QUFBSyxhQUFHLEVBQUVBLElBQUksQ0FBQ0MsRUFBZjtBQUFtQixtQkFBUyxFQUFDLE9BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDSTtBQUFLLGFBQUcsRUFBRUQsSUFBSSxDQUFDRSxTQUFmO0FBQTBCLG1CQUFTLEVBQUMsV0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKLEVBRUk7QUFBSSxtQkFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNBLE1BQUMsaURBQUQ7QUFBTSxZQUFFLEVBQUUsa0JBQWtCRixJQUFJLENBQUNDLEVBQWpDO0FBQXFDLGNBQUksRUFBRSxxQkFBb0JELElBQUksQ0FBQ0MsRUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNDRCxJQUFJLENBQUNHLE9BRE4sQ0FEQSxDQUZKLEVBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVBKLEVBUUk7QUFBRyxtQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUE2QkgsSUFBSSxDQUFDSSxLQUFsQyxDQVJKLENBREo7QUFZSCxPQWJELENBREo7QUFnQkgsSzs7Ozs7Ozs2QkFFTztBQUNKLGFBQ0ksTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDTSxLQUFLQyxXQUFMLENBQWlCLEtBQUtDLEtBQUwsQ0FBV1IsS0FBNUIsQ0FETixDQURKLENBREosQ0FESjtBQVNIOzs7Ozs7Ozs7O0FBekNHO0FBQ0E7QUFDTVMsc0IsR0FBUztBQUNYQyx3QkFBTSxFQUFFLEtBREc7QUFFWEMscUJBQUcsRUFBRTtBQUZNLGlCOzt1QkFLQ0MsNkNBQUssQ0FBQ0gsTUFBRCxDOzs7QUFBakJJLG1CO0FBQ0pDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBRyxDQUFDRyxJQUFoQjtpREFDTztBQUFFaEIsdUJBQUssRUFBR2EsR0FBRyxDQUFDRztBQUFkLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBWm9CQywrQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMjM2OTRiNzlhN2FkYmVjZWQ1Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2Jsb2dzJylcclxuICAgICAgICAvLyByZXR1cm4geyBibG9ncyA6IHJlcy5kYXRhIH1cclxuICAgICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLm5wb2ludC5pby8xMWRhMTM3NDJmOWVjNzUyZTNiZS9ibG9ncydcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MoY29uZmlnKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxyXG4gICAgICAgIHJldHVybiB7IGJsb2dzIDogcmVzLmRhdGEgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckJsb2dzID0gYmxvZ3MgPT4ge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgYmxvZ3MubWFwKCBibG9nPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtibG9nLmlkfSBjbGFzc05hbWU9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YmxvZy50aHVtYm5haWx9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9eycvYmxvZy9kZXRhaWwvJyArIGJsb2cuaWR9IGhyZWY9eycvYmxvZy9kZXRhaWw/aWQ9JysgYmxvZy5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtibG9nLnN1YmplY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtanVzdGlmeVwiPntibG9nLmludHJvfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlckJsb2dzKHRoaXMucHJvcHMuYmxvZ3MpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=