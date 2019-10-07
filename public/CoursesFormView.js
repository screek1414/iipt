(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CoursesFormView"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Courses/Pages/View.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Courses/Pages/View.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Add",
  data: function data() {
    return {
      course: [],
      is_admin: false
    };
  },
  mounted: function mounted() {
    this.init();
  },
  methods: {
    init: function init() {
      var _this = this;

      window.axios.post(window.location.origin + '/courses/show', {
        id: this.$route.params.id
      }).then(function (response) {
        _this.is_admin = response.data.is_admin;
        _this.course = response.data.course;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Courses/Pages/View.vue?vue&type=template&id=06d40634&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Courses/Pages/View.vue?vue&type=template&id=06d40634&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [_vm._v("Add Component")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body d-inline-flex justify-content-between" },
            [
              _c(
                "router-link",
                { staticClass: "btn btn-primary", attrs: { to: "/courses" } },
                [_vm._v("Все курсы\n                    ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-10 justify-content-center m-auto" }, [
            _c(
              "div",
              { staticClass: "card align-items-center text-center m-2" },
              [
                _c("div", { staticClass: "card-img-top ml-auto" }, [
                  _c("img", {
                    staticClass: "p-3",
                    staticStyle: {
                      height: "20rem",
                      "object-fit": "cover",
                      "border-radius": "20px"
                    },
                    attrs: { src: _vm.course.img }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "card-title font-weight-bold",
                    staticStyle: { "font-size": "24px" }
                  },
                  [_vm._v(_vm._s(_vm.course.name))]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "card-body text-align-justify" }, [
                  _c("p", [
                    _c("span", { staticClass: "font-weight-bold" }, [
                      _vm._v("Автор:")
                    ]),
                    _vm._v(" " + _vm._s(_vm.course.author))
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _c("span", { staticClass: "font-weight-bold" }, [
                      _vm._v("Описание:")
                    ]),
                    _vm._v(" " + _vm._s(_vm.course.description))
                  ])
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body d-inline-flex justify-content-end" },
            [
              _c(
                "router-link",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.is_admin === true,
                      expression: "is_admin === true"
                    }
                  ],
                  staticClass: "btn btn-primary",
                  attrs: { to: "/courses/edit/" + _vm.course.id }
                },
                [_vm._v("Редактировать курс\n                    ")]
              )
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Courses/Pages/View.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/Courses/Pages/View.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_06d40634_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=06d40634&scoped=true& */ "./resources/js/views/Courses/Pages/View.vue?vue&type=template&id=06d40634&scoped=true&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/views/Courses/Pages/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_06d40634_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_06d40634_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "06d40634",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Courses/Pages/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Courses/Pages/View.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/Courses/Pages/View.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Courses/Pages/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Courses/Pages/View.vue?vue&type=template&id=06d40634&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/Courses/Pages/View.vue?vue&type=template&id=06d40634&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_06d40634_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=06d40634&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Courses/Pages/View.vue?vue&type=template&id=06d40634&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_06d40634_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_06d40634_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);