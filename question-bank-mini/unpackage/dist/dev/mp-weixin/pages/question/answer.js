(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/question/answer"],{

/***/ 182:
/*!********************************************************************************************************************!*\
  !*** /Users/zilong.zhou/Desktop/小程序/question-bank/question-bank-mini/main.js?{"page":"pages%2Fquestion%2Fanswer"} ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);

__webpack_require__(/*! @dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 6);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _answer = _interopRequireDefault(__webpack_require__(/*! ./pages/question/answer.vue */ 183));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;createPage(_answer.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 183:
/*!*************************************************************************************************!*\
  !*** /Users/zilong.zhou/Desktop/小程序/question-bank/question-bank-mini/pages/question/answer.vue ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _answer_vue_vue_type_template_id_29ffa31e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./answer.vue?vue&type=template&id=29ffa31e& */ 184);
/* harmony import */ var _answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./answer.vue?vue&type=script&lang=js& */ 186);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _answer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./answer.vue?vue&type=style&index=0&lang=css& */ 188);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 21);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _answer_vue_vue_type_template_id_29ffa31e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _answer_vue_vue_type_template_id_29ffa31e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _answer_vue_vue_type_template_id_29ffa31e___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/question/answer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 184:
/*!********************************************************************************************************************************!*\
  !*** /Users/zilong.zhou/Desktop/小程序/question-bank/question-bank-mini/pages/question/answer.vue?vue&type=template&id=29ffa31e& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_template_id_29ffa31e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./answer.vue?vue&type=template&id=29ffa31e& */ 185);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_template_id_29ffa31e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_template_id_29ffa31e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_template_id_29ffa31e___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_template_id_29ffa31e___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 185:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/zilong.zhou/Desktop/小程序/question-bank/question-bank-mini/pages/question/answer.vue?vue&type=template&id=29ffa31e& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uButton: function() {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-button/u-button */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-button/u-button")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-button/u-button.vue */ 560))
    },
    uPopup: function() {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-popup/u-popup */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-popup/u-popup")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-popup/u-popup.vue */ 568))
    },
    uModal: function() {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-modal/u-modal */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-modal/u-modal")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-modal/u-modal.vue */ 576))
    },
    uText: function() {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-text/u-text */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-text/u-text")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-text/u-text.vue */ 584))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l2 = _vm.__map(_vm.subjectList, function(subject, index) {
    var $orig = _vm.__get_orig(subject)

    var l0 =
      index - _vm.subjectIndex >= -1 &&
      index - _vm.subjectIndex <= 1 &&
      (subject.type === 0 ||
        subject.type === 1 ||
        subject.type === 3 ||
        subject.type === 6 ||
        subject.type === 7)
        ? _vm.__map(subject.options, function(option, __i1__) {
            var $orig = _vm.__get_orig(option)

            var g0 = subject.userAnswer.indexOf(option.key)
            return {
              $orig: $orig,
              g0: g0
            }
          })
        : null
    var l1 =
      index - _vm.subjectIndex >= -1 &&
      index - _vm.subjectIndex <= 1 &&
      !(
        subject.type === 0 ||
        subject.type === 1 ||
        subject.type === 3 ||
        subject.type === 6 ||
        subject.type === 7
      ) &&
      subject.type === 2
        ? _vm.__map(subject.options, function(option, __i2__) {
            var $orig = _vm.__get_orig(option)

            var g1 = subject.userAnswer.indexOf(option.key)
            var g2 = subject.userAnswer.indexOf(option.key)
            return {
              $orig: $orig,
              g1: g1,
              g2: g2
            }
          })
        : null
    return {
      $orig: $orig,
      l0: l0,
      l1: l1
    }
  })

  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      _vm.show = true
    }

    _vm.e1 = function($event) {
      _vm.modalShow = false
    }

    _vm.e2 = function($event) {
      _vm.submitShow = false
    }

    _vm.e3 = function($event) {
      _vm.submitShow = false
    }
  }

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l2: l2
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 186:
/*!**************************************************************************************************************************!*\
  !*** /Users/zilong.zhou/Desktop/小程序/question-bank/question-bank-mini/pages/question/answer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./answer.vue?vue&type=script&lang=js& */ 187);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 187:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/zilong.zhou/Desktop/小程序/question-bank/question-bank-mini/pages/question/answer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, uniCloud) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








































































































































































































































var _store = __webpack_require__(/*! @/uni_modules/uni-id-pages/common/store.js */ 153); //
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
//
//
//
var _default = { data: function data() {return { modalShow: false, submitShow: false, conclusionShow: false, show: false, article: "", // 文章
      isShowArticle: false, userFavor: false, //是否已收藏
      currentType: "", //当前题型
      subjectIndex: 0, //跳转索引
      autoShowAnswer: true, //答错是否显答案
      autoRadioNext: true, //判断题、单项题，自动移下一题
      swiperHeight: '800px', //
      title: '', subjectList: [], modalCard: null, //显示答题卡
      modalError: null, //纠错卡
      errorList: ['题目不完整', '答案不正确', '含有错别字', '图片不存在', '解析不完整', '其他错误'], correctCount: 0, wrongTopics: [], modelTitle: "请登录后再收藏题目吧", isUserWrong: false };}, onReady: function onReady() {var tempHeight = 800;var _me = this;uni.getSystemInfo({ //获取手机屏幕高度信息，让swiper的高度和手机屏幕一样高                
      success: function success(res) {// console.log(res.model);                    
        // console.log(res.pixelRatio);                    
        // console.log(res.windowWidth);                    
        // console.log(res.windowHeight);
        // //这里是手机屏幕高度                    
        // console.log(res.language);                    
        // console.log(res.version);                    
        // console.log(res.platform);                    
        tempHeight = res.windowHeight;console.log("屏幕可用高度 " + tempHeight);uni.createSelectorQuery().select("#top-box").fields({ size: true, scrollOffset: true }, function (data) {tempHeight -= data.height;console.log("减掉顶部后的高度 " + tempHeight);uni.createSelectorQuery().select("#foot-box").fields({ size: true, scrollOffset: true }, function (data) {tempHeight -= data.height;console.log("减掉底部后的高度 " + tempHeight);_me.swiperHeight = tempHeight + 'px';console.log("滑屏最后高度 " + _me.swiperHeight);}).exec();}).exec();} });}, onLoad: function onLoad(options) {uni.setNavigationBarTitle({ title: this.title });if (options.isUserWrong) {this.isUserWrong = true;}if (options.json) {var json = decodeURIComponent(options.json);console.log("options.json:", JSON.stringify(json));var details = JSON.parse(json); //添加用户显示答案字段
      // for (var i = 0; i < details.length; i++) {
      // 	// this.$set(details[i], "showAnswer", false);
      // 	details[i].showAnswer = false;
      // }
      var temps = [];details.map(function (item, index) {temps.push(Object.assign(item, { "showAnswer": false, "userAnswer": "" }));});console.log("detail:", JSON.stringify(temps));this.subjectList = temps;this.currentType = this.subjectList[0].typeName;this.userFavor = this.subjectList[0].userFavor;this.isUserWrong = this.subjectList[0].isUserWrong;var title = this.subjectList[0].title;if (this.subjectList[0].article) {this.article = this.subjectList[0].article;this.isShowArticle = true;} else if (title.length > 500) {this.article = title;this.isShowArticle = true;} else {this.isShowArticle = false;}}}, methods: { userInfo: function userInfo() {return _store.store.userInfo;}, hasLogin: function hasLogin() {return _store.store.hasLogin;}, showCardModal: function showCardModal(e) {this.modalCard = e.currentTarget.dataset.target;}, hideCardModal: function hideCardModal(e) {this.modalCard = null;}, showErrorModal: function showErrorModal(e) {// this.modalError = e.currentTarget.dataset.target
      uni.navigateTo({ url: '/uni_modules/uni-feedback/pages/opendb-feedback/opendb-feedback' });}, hideErrorModal: function hideErrorModal(e) {this.modalError = null;}, SwiperChange: function SwiperChange(e) {//滑动事件
      var index = e.target.current;if (index != undefined) {this.subjectIndex = index;this.currentType = this.subjectList[index].typeName;this.userFavor = this.subjectList[index].userFavor;console.log("userFavor", this.subjectList[index].userFavor);console.log("index", index);this.isUserWrong = this.subjectList[index].isUserWrong;this.article = this.subjectList[index].article;var title = this.subjectList[index].title;console.log("titleCount", title.length);if (this.subjectList[index].type === 6) {this.article = this.subjectList[index].title;this.isShowArticle = true;} else if (title.length > 500) {this.article = title;this.isShowArticle = true;} else {this.isShowArticle = false;}}}, RadioboxChange: function RadioboxChange(e) {//单选选中
      var items = this.subjectList[this.subjectIndex].options;var values = e.detail.value;console.log(values);this.subjectList[this.subjectIndex].userAnswer = values;if (values == this.subjectList[this.subjectIndex].answer) {// 答对切换到下一题
        if (this.autoRadioNext && this.subjectIndex < this.subjectList.length - 1) {this.subjectIndex += 1;};} else {// 答错显示答案
        this.ShowAnswerChange();}}, CheckboxChange: function CheckboxChange(e) {//复选选中
      var items = this.subjectList[this.subjectIndex].options;var values = e.detail.value;this.subjectList[this.subjectIndex].userAnswer = "";for (var i = 0, lenI = items.length; i < lenI; ++i) {for (var j = 0, lenJ = values.length; j < lenJ; ++j) {if (items[i].key == values[j]) {this.subjectList[this.subjectIndex].userAnswer += items[i].key;break;}}}}, textInput: function textInput(e) {//填空题
      this.subjectList[this.subjectIndex].userAnswer = e.detail.value;}, ShowAnswerChange: function ShowAnswerChange(e) {//显示答案
      if (this.subjectList[this.subjectIndex].showAnswer) {this.subjectList[this.subjectIndex].showAnswer = false;} else {this.subjectList[this.subjectIndex].showAnswer = true;}}, modalConfirm: function modalConfirm() {console.log("去登录");uni.redirectTo({ url: '/uni_modules/uni-id-pages/pages/login/login-withoutpwd' });}, FavorSubject: function FavorSubject(e) {//收藏题
      if (!this.hasLogin()) {this.modelTitle = "请登录后再收藏题目吧";this.modalShow = true;return;}var userInfo = this.userInfo();var topic = this.subjectList[this.subjectIndex];console.log("userInfo:", JSON.stringify(userInfo));if (this.userFavor) {this.collect(userInfo, topic, false);} else {this.collect(userInfo, topic, true);}}, collect: function collect(userInfo, topic, isCollect) {var _this = this;var db = uniCloud.database();console.log("开始请求topic-collect：", this.paper_id);console.log("topic-collect:", userInfo._id);console.log("topic-collect:", topic._id);console.log("topic-collect:", topic.paper_type);console.log("topic-collect:", topic.type);if (isCollect) {db.collection("topic-collect").add({ "user_id": userInfo._id, "topic_id": topic._id, "paper_type": topic.paper_type, "topic_type": topic.type }).then(function (res) {console.log("获取topic-collect成功", JSON.stringify(res.result.data));_this.userFavor = true;_this.subjectList[_this.subjectIndex].userFavor = true;}).catch(function (e) {console.log("获取topic-collect失败", e);});} else {db.collection("topic-collect").where({ "user_id": userInfo._id, "topic_id": topic._id }).remove().then(function (res) {console.log("获取topic-collect成功", JSON.stringify(res.result.data));_this.userFavor = false;_this.subjectList[_this.subjectIndex].userFavor = false;}).catch(function (e) {console.log("获取topic-collect失败", e);});}}, MoveSubject: function MoveSubject(e) {//上一题、下一题
      if (e === -1 && this.subjectIndex != 0) {this.subjectIndex -= 1;}
      if (e === 1 && this.subjectIndex < this.subjectList.length - 1) {
        this.subjectIndex += 1;
      }
    },

    AppointedSubject: function AppointedSubject(e) {//题卡指定

      this.modalCard = null;
      this.subjectIndex = e;
    },

    SubmitError: function SubmitError(e) {//提交纠错

      this.modalError = null;
    },

    open: function open() {
      // console.log('open');
    },
    close: function close() {
      this.show = false;
      // console.log('close');
    },
    // 交卷
    submit: function submit() {
      this.modalCard = null;
      var isDone = true;
      for (var i = 0; i < this.subjectList.length; i++) {
        var item = this.subjectList[i];
        if (item.userAnswer === "") {
          isDone = false;
          break;
        }
      }
      if (isDone) {
        // 全部完成
        this.showConclusion();
      } else {
        // 还有未完成
        this.submitShow = true;
      }
    },
    submitConfirm: function submitConfirm() {
      this.submitShow = false;
      this.showConclusion();
    },
    showConclusion: function showConclusion() {
      var temps = [];
      for (var i = 0; i < this.subjectList.length; i++) {
        var item = this.subjectList[i];
        console.log("item:", item);
        if (item.answer == item.userAnswer) {
          continue;
        }
        if (item.userAnswer === "") {
          temps.push(item);
        } else if (item.type === 0 || item.type === 1 || item.type === 3 || item.type === 6 || item.type === 7) {
          item.userAnswer = "";
          item.showAnswer = false;
          temps.push(item);
        }
      }
      this.wrongTopics = temps;
      this.correctCount = this.subjectList.length - this.wrongTopics.length;
      this.conclusionShow = true;
    },
    // 错题再战
    wrongTopicNext: function wrongTopicNext() {
      this.subjectList = this.wrongTopics;
      this.subjectIndex = 0;
      this.conclusionShow = false;
    },
    // 保存错题
    saveWrongTopic: function saveWrongTopic() {
      if (!this.hasLogin()) {
        this.modelTitle = "请登录后再保存错题吧";
        this.conclusionShow = false;
        this.modalShow = true;
        return;
      }
      var userInfo = this.userInfo();
      var temps = [];
      this.wrongTopics.map(function (item, index) {
        if (item.type === 0 || item.type === 1 || item.type === 3 || item.type === 6 || item.type === 7) {
          var temp = {
            "user_id": userInfo._id,
            "topic_id": item._id,
            "paper_type": item.paper_type,
            "topic_type": item.type };

          temps.push(temp);
        }
      });
      console.log("temps", temps);

      var that = this;
      uniCloud.callFunction({
        name: "wrong-topic",
        data: {
          "user_id": _store.store.userInfo._id,
          "wrongTopics": temps },

        success: function success(res) {
          // console.log("openTest", JSON.stringify(res.result.data))
          console.log("获取wrong-topic成功", JSON.stringify(res.result.data));
          that.conclusionShow = false;
          that.toBack();
        },
        fail: function fail(e) {
          console.log("获取wrong-topic失败", e);
        } });

    },
    wrongSubject: function wrongSubject() {
      if (!this.hasLogin()) {
        this.modelTitle = "请登录后再添加错题吧";
        this.modalShow = true;
        return;
      }
      var userInfo = this.userInfo();
      var topic = this.subjectList[this.subjectIndex];
      console.log("userInfo:", JSON.stringify(userInfo));

      if (this.isUserWrong) {
        this.wrongCollect(userInfo, topic, false);
      } else {
        this.wrongCollect(userInfo, topic, true);
      }
    },
    wrongCollect: function wrongCollect(userInfo, topic, isCollect) {var _this2 = this;
      var db = uniCloud.database();
      if (isCollect) {
        db.collection("wrong-topic").add({
          "user_id": userInfo._id,
          "topic_id": topic._id,
          "paper_type": topic.paper_type,
          "topic_type": topic.type }).
        then(function (res) {
          console.log("获取wrong-topic成功", JSON.stringify(res.result.data));
          _this2.isUserWrong = true;
          _this2.subjectList[_this2.subjectIndex].isUserWrong = true;
        }).catch(function (e) {
          console.log("获取wrong-topic失败", e);
        });
      } else {
        db.collection("wrong-topic").where({
          "user_id": userInfo._id,
          "topic_id": topic._id }).
        remove().then(function (res) {
          console.log("获取wrong-topic成功", JSON.stringify(res.result.data));
          _this2.isUserWrong = false;
          _this2.subjectList[_this2.subjectIndex].isUserWrong = false;
        }).catch(function (e) {
          console.log("获取wrong-topic失败", e);
        });
      }
    },
    // 返回
    toBack: function toBack() {
      uni.navigateBack();
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 6)["default"]))

/***/ }),

/***/ 188:
/*!**********************************************************************************************************************************!*\
  !*** /Users/zilong.zhou/Desktop/小程序/question-bank/question-bank-mini/pages/question/answer.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./answer.vue?vue&type=style&index=0&lang=css& */ 189);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 189:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/zilong.zhou/Desktop/小程序/question-bank/question-bank-mini/pages/question/answer.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[182,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/question/answer.js.map