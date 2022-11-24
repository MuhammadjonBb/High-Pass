/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/smooth-scroll.js */ "./src/js/components/smooth-scroll.js");
/* harmony import */ var _components_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_just_validate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/just-validate.js */ "./src/js/components/just-validate.js");
/* harmony import */ var _components_just_validate_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_just_validate_js__WEBPACK_IMPORTED_MODULE_1__);
// плавный скролл по якорям

const scroll = new (_components_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_0___default())('a[href*="#"]'); // валидация формы


const validation = new (_components_just_validate_js__WEBPACK_IMPORTED_MODULE_1___default())('#contacts-form');
const aboutFormValidate = new (_components_just_validate_js__WEBPACK_IMPORTED_MODULE_1___default())('#about-form', {
  errorLabelCssClass: 'about__form-err-label'
});
validation.addField("#name", [{
  rule: "minLength",
  value: 3,
  errorMessage: "Поле должно содержать минимум 3 символа"
}, {
  rule: "maxLength",
  value: 30,
  errorMessage: "Поле должно содержать максимум 30 символов"
}, {
  rule: "required",
  errorMessage: "Как вас зовут?"
}]).addField("#email", [{
  rule: "required",
  errorMessage: "Укажите ваш e-mail"
}, {
  rule: "email",
  errorMessage: "Email не верный!"
}]);
aboutFormValidate.addField("#about-email", [{
  rule: "required",
  errorMessage: "Укажите ваш e-mail"
}, {
  rule: "email",
  errorMessage: "Email не верный!"
}]);

/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/mobile-check */ "./src/js/functions/mobile-check.js");
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/burger */ "./src/js/functions/burger.js");
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_functions_burger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/close */ "./src/js/functions/close.js");
/* harmony import */ var _functions_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_functions_close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _functions_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/search */ "./src/js/functions/search.js");
/* harmony import */ var _functions_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_functions_search__WEBPACK_IMPORTED_MODULE_3__);
// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там
// Определение операционной системы на мобильных

console.log((0,_functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__.mobileCheck)()); // Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }
// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);
// Фикс фулскрин-блоков
// import './functions/fix-fullheight';
// Реализация бургер-меню

 // Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';
// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';
// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();
// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');
// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';
// Подключение плагина кастом-скролла
// import 'simplebar';
// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });
// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });
// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();
// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');
// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });
// const rules1 = [...];
// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };
// validateForms('.form-1', rules1, afterForm);
// реализация открытия и закрытия поиска




/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_ymaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/ymaps.js */ "./src/js/vendor/ymaps.js");
/* harmony import */ var _vendor_ymaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_ymaps_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/js/components/just-validate.js":
/*!********************************************!*\
  !*** ./src/js/components/just-validate.js ***!
  \********************************************/
/***/ (function(module) {

var __defProp = Object.defineProperty,
    __getOwnPropSymbols = Object.getOwnPropertySymbols,
    __hasOwnProp = Object.prototype.hasOwnProperty,
    __propIsEnum = Object.prototype.propertyIsEnumerable,
    __defNormalProp = (e, i, s) => i in e ? __defProp(e, i, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: s
}) : e[i] = s,
    __spreadValues = (e, i) => {
  for (var s in i || (i = {})) __hasOwnProp.call(i, s) && __defNormalProp(e, s, i[s]);

  if (__getOwnPropSymbols) for (var s of __getOwnPropSymbols(i)) __propIsEnum.call(i, s) && __defNormalProp(e, s, i[s]);
  return e;
},
    __publicField = (e, i, s) => (__defNormalProp(e, "symbol" != typeof i ? i + "" : i, s), s);

!function (e, i) {
   true ? module.exports = i() : 0;
}(this, function () {
  "use strict";

  const e = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        i = /^[0-9]+$/,
        s = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        t = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  var l = (e => (e.Required = "required", e.Email = "email", e.MinLength = "minLength", e.MaxLength = "maxLength", e.Password = "password", e.Number = "number", e.MaxNumber = "maxNumber", e.MinNumber = "minNumber", e.StrongPassword = "strongPassword", e.CustomRegexp = "customRegexp", e.MinFilesCount = "minFilesCount", e.MaxFilesCount = "maxFilesCount", e.Files = "files", e))(l || {}),
      r = (e => (e.Required = "required", e))(r || {}),
      o = (e => (e.Label = "label", e.LabelArrow = "labelArrow", e))(o || {});

  const a = e => !!e && "function" == typeof e.then,
        n = e => Array.isArray(e) ? e.filter(e => e.length > 0) : "string" == typeof e && e.trim() ? [...e.split(" ").filter(e => e.length > 0)] : [],
        d = {
    errorFieldStyle: {
      color: "#b81111",
      border: "1px solid #B81111"
    },
    errorFieldCssClass: "just-validate-error-field",
    successFieldCssClass: "just-validate-success-field",
    errorLabelStyle: {
      color: "#b81111"
    },
    errorLabelCssClass: "just-validate-error-label",
    successLabelCssClass: "just-validate-success-label",
    focusInvalidField: !0,
    lockForm: !0,
    testingMode: !1
  };

  return class {
    constructor(e, i, s) {
      __publicField(this, "form", null), __publicField(this, "fields", {}), __publicField(this, "groupFields", {}), __publicField(this, "errors", {}), __publicField(this, "isValid", !1), __publicField(this, "isSubmitted", !1), __publicField(this, "globalConfig", d), __publicField(this, "errorLabels", {}), __publicField(this, "successLabels", {}), __publicField(this, "eventListeners", []), __publicField(this, "dictLocale", []), __publicField(this, "currentLocale"), __publicField(this, "customStyleTags", {}), __publicField(this, "onSuccessCallback"), __publicField(this, "onFailCallback"), __publicField(this, "tooltips", []), __publicField(this, "lastScrollPosition"), __publicField(this, "isScrollTick"), __publicField(this, "refreshAllTooltips", () => {
        this.tooltips.forEach(e => {
          e.refresh();
        });
      }), __publicField(this, "handleDocumentScroll", () => {
        this.lastScrollPosition = window.scrollY, this.isScrollTick || (window.requestAnimationFrame(() => {
          this.refreshAllTooltips(), this.isScrollTick = !1;
        }), this.isScrollTick = !0);
      }), __publicField(this, "formSubmitHandler", e => {
        e.preventDefault(), this.isSubmitted = !0, this.validateHandler(e);
      }), __publicField(this, "handleFieldChange", e => {
        let i;

        for (const s in this.fields) {
          if (this.fields[s].elem === e) {
            i = s;
            break;
          }
        }

        i && this.validateField(i, !0);
      }), __publicField(this, "handleGroupChange", e => {
        let i, s;

        for (const t in this.groupFields) {
          const l = this.groupFields[t];

          if (l.elems.find(i => i === e)) {
            i = l, s = t;
            break;
          }
        }

        i && s && this.validateGroup(s, i);
      }), __publicField(this, "handlerChange", e => {
        e.target && (this.handleFieldChange(e.target), this.handleGroupChange(e.target), this.renderErrors());
      }), this.initialize(e, i, s);
    }

    initialize(e, i, s) {
      if (this.form = null, this.errors = {}, this.isValid = !1, this.isSubmitted = !1, this.globalConfig = d, this.errorLabels = {}, this.successLabels = {}, this.eventListeners = [], this.customStyleTags = {}, this.tooltips = [], "string" == typeof e) {
        const i = document.querySelector(e);
        if (!i) throw Error(`Form with ${e} selector not found! Please check the form selector`);
        this.setForm(i);
      } else {
        if (!(e instanceof HTMLFormElement)) throw Error("Form selector is not valid. Please specify a string selector or a DOM element.");
        this.setForm(e);
      }

      if (this.globalConfig = __spreadValues(__spreadValues({}, d), i), s && (this.dictLocale = s), this.isTooltip()) {
        const e = document.createElement("style");
        e.textContent = ".just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}", this.customStyleTags[o.Label] = document.head.appendChild(e), this.addListener("scroll", document, this.handleDocumentScroll);
      }
    }

    getLocalisedString(e) {
      var i;
      if (!this.currentLocale || !this.dictLocale.length) return e;
      return (null == (i = this.dictLocale.find(i => i.key === e)) ? void 0 : i.dict[this.currentLocale]) || e;
    }

    getFieldErrorMessage(e, i) {
      const s = "function" == typeof e.errorMessage ? e.errorMessage(this.getElemValue(i), this.fields) : e.errorMessage;
      return this.getLocalisedString(s) || ((e, i) => {
        switch (e) {
          case l.Required:
            return "The field is required";

          case l.Email:
            return "Email has invalid format";

          case l.MaxLength:
            return "The field must contain a maximum of :value characters".replace(":value", String(i));

          case l.MinLength:
            return "The field must contain a minimum of :value characters".replace(":value", String(i));

          case l.Password:
            return "Password must contain minimum eight characters, at least one letter and one number";

          case l.Number:
            return "Value should be a number";

          case l.StrongPassword:
            return "Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";

          case l.MaxNumber:
            return "Number should be less or equal than :value".replace(":value", String(i));

          case l.MinNumber:
            return "Number should be more or equal than :value".replace(":value", String(i));

          case l.MinFilesCount:
            return "Files count should be more or equal than :value".replace(":value", String(i));

          case l.MaxFilesCount:
            return "Files count should be less or equal than :value".replace(":value", String(i));

          case l.Files:
            return "Uploaded files have one or several invalid properties (extension/size/type etc)";

          default:
            return "Value is incorrect";
        }
      })(e.rule, e.value);
    }

    getFieldSuccessMessage(e, i) {
      const s = "function" == typeof e ? e(this.getElemValue(i), this.fields) : e;
      return this.getLocalisedString(s);
    }

    getGroupErrorMessage(e) {
      return this.getLocalisedString(e.errorMessage) || (e.rule === r.Required ? "The field is required" : "Group is incorrect");
    }

    getGroupSuccessMessage(e) {
      return this.getLocalisedString(e.successMessage);
    }

    setFieldInvalid(e, i) {
      this.fields[e].isValid = !1, this.fields[e].errorMessage = this.getFieldErrorMessage(i, this.fields[e].elem);
    }

    setFieldValid(e, i) {
      this.fields[e].isValid = !0, void 0 !== i && (this.fields[e].successMessage = this.getFieldSuccessMessage(i, this.fields[e].elem));
    }

    setGroupInvalid(e, i) {
      this.groupFields[e].isValid = !1, this.groupFields[e].errorMessage = this.getGroupErrorMessage(i);
    }

    setGroupValid(e, i) {
      this.groupFields[e].isValid = !0, this.groupFields[e].successMessage = this.getGroupSuccessMessage(i);
    }

    getElemValue(e) {
      switch (e.type) {
        case "checkbox":
          return e.checked;

        case "file":
          return e.files;

        default:
          return e.value;
      }
    }

    validateGroupRule(e, i, s) {
      if (s.rule === r.Required) i.every(e => !e.checked) ? this.setGroupInvalid(e, s) : this.setGroupValid(e, s);
    }

    validateFieldRule(r, o, n) {
      let d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
      const u = n.value,
            c = this.getElemValue(o);

      if (n.plugin) {
        n.plugin(c, this.fields) || this.setFieldInvalid(r, n);
      } else {
        switch (n.rule) {
          case l.Required:
            (e => {
              let i = e;
              return "string" == typeof e && (i = e.trim()), !i;
            })(c) && this.setFieldInvalid(r, n);
            break;

          case l.Email:
            if ("string" != typeof c) {
              this.setFieldInvalid(r, n);
              break;
            }

            h = c, e.test(h) || this.setFieldInvalid(r, n);
            break;

          case l.MaxLength:
            if (void 0 === u) {
              console.error(`Value for ${n.rule} rule for [${r}] field is not defined. The field will be always invalid.`), this.setFieldInvalid(r, n);
              break;
            }

            if ("number" != typeof u) {
              console.error(`Value for ${n.rule} rule for [${r}] should be a number. The field will be always invalid.`), this.setFieldInvalid(r, n);
              break;
            }

            if ("string" != typeof c) {
              this.setFieldInvalid(r, n);
              break;
            }

            if ("" === c) break;
            ((e, i) => e.length > i)(c, u) && this.setFieldInvalid(r, n);
            break;

          case l.MinLength:
            if (void 0 === u) {
              console.error(`Value for ${n.rule} rule for [${r}] field is not defined. The field will be always invalid.`), this.setFieldInvalid(r, n);
              break;
            }

            if ("number" != typeof u) {
              console.error(`Value for ${n.rule} rule for [${r}] should be a number. The field will be always invalid.`), this.setFieldInvalid(r, n);
              break;
            }

            if ("string" != typeof c) {
              this.setFieldInvalid(r, n);
              break;
            }

            if ("" === c) break;
            ((e, i) => e.length < i)(c, u) && this.setFieldInvalid(r, n);
            break;

          case l.Password:
            if ("string" != typeof c) {
              this.setFieldInvalid(r, n);
              break;
            }

            if ("" === c) break;
            (e => s.test(e))(c) || this.setFieldInvalid(r, n);
            break;

          case l.StrongPassword:
            if ("string" != typeof c) {
              this.setFieldInvalid(r, n);
              break;
            }

            if ("" === c) break;
            (e => t.test(e))(c) || this.setFieldInvalid(r, n);
            break;

          case l.Number:
            if ("string" != typeof c) {
              this.setFieldInvalid(r, n);
              break;
            }

            if ("" === c) break;
            (e => i.test(e))(c) || this.setFieldInvalid(r, n);
            break;

          case l.MaxNumber:
            {
              if (void 0 === u) {
                console.error(`Value for ${n.rule} rule for [${r}] field is not defined. The field will be always invalid.`), this.setFieldInvalid(r, n);
                break;
              }

              if ("number" != typeof u) {
                console.error(`Value for ${n.rule} rule for [${r}] field should be a number. The field will be always invalid.`), this.setFieldInvalid(r, n);
                break;
              }

              if ("string" != typeof c) {
                this.setFieldInvalid(r, n);
                break;
              }

              if ("" === c) break;
              const e = +c;
              (Number.isNaN(e) || ((e, i) => e > i)(e, u)) && this.setFieldInvalid(r, n);
              break;
            }

          case l.MinNumber:
            {
              if (void 0 === u) {
                console.error(`Value for ${n.rule} rule for [${r}] field is not defined. The field will be always invalid.`), this.setFieldInvalid(r, n);
                break;
              }

              if ("number" != typeof u) {
                console.error(`Value for ${n.rule} rule for [${r}] field should be a number. The field will be always invalid.`), this.setFieldInvalid(r, n);
                break;
              }

              if ("string" != typeof c) {
                this.setFieldInvalid(r, n);
                break;
              }

              if ("" === c) break;
              const e = +c;
              (Number.isNaN(e) || ((e, i) => e < i)(e, u)) && this.setFieldInvalid(r, n);
              break;
            }

          case l.CustomRegexp:
            {
              if (void 0 === u) return console.error(`Value for ${n.rule} rule for [${r}] field is not defined. This field will be always invalid.`), void this.setFieldInvalid(r, n);
              let e;

              try {
                e = new RegExp(u);
              } catch (f) {
                console.error(`Value for ${n.rule} rule for [${r}] should be a valid regexp. This field will be always invalid.`), this.setFieldInvalid(r, n);
                break;
              }

              const i = String(c);
              "" === i || e.test(i) || this.setFieldInvalid(r, n);
              break;
            }

          case l.MinFilesCount:
            if (void 0 === u) {
              console.error(`Value for ${n.rule} rule for [${r}] field is not defined. This field will be always invalid.`), this.setFieldInvalid(r, n);
              break;
            }

            if ("number" != typeof u) {
              console.error(`Value for ${n.rule} rule for [${r}] field should be a number. The field will be always invalid.`), this.setFieldInvalid(r, n);
              break;
            }

            if (Number.isFinite(null == c ? void 0 : c.length) && c.length < u) {
              this.setFieldInvalid(r, n);
              break;
            }

            break;

          case l.MaxFilesCount:
            if (void 0 === u) {
              console.error(`Value for ${n.rule} rule for [${r}] field is not defined. This field will be always invalid.`), this.setFieldInvalid(r, n);
              break;
            }

            if ("number" != typeof u) {
              console.error(`Value for ${n.rule} rule for [${r}] field should be a number. The field will be always invalid.`), this.setFieldInvalid(r, n);
              break;
            }

            if (Number.isFinite(null == c ? void 0 : c.length) && c.length > u) {
              this.setFieldInvalid(r, n);
              break;
            }

            break;

          case l.Files:
            {
              if (void 0 === u) return console.error(`Value for ${n.rule} rule for [${r}] field is not defined. This field will be always invalid.`), void this.setFieldInvalid(r, n);
              if ("object" != typeof u) return console.error(`Value for ${n.rule} rule for [${r}] field should be an object. This field will be always invalid.`), void this.setFieldInvalid(r, n);
              const e = u.files;
              if ("object" != typeof e) return console.error(`Value for ${n.rule} rule for [${r}] field should be an object with files array. This field will be always invalid.`), void this.setFieldInvalid(r, n);

              const i = (e, i) => {
                const s = Number.isFinite(i.minSize) && e.size < i.minSize,
                      t = Number.isFinite(i.maxSize) && e.size > i.maxSize,
                      l = Array.isArray(i.names) && !i.names.includes(e.name),
                      r = Array.isArray(i.extensions) && !i.extensions.includes(e.name.split(".")[e.name.split(".").length - 1]),
                      o = Array.isArray(i.types) && !i.types.includes(e.type);
                return s || t || l || r || o;
              };

              if ("object" == typeof c && null !== c) for (let s = 0, t = c.length; s < t; ++s) {
                const t = c.item(s);

                if (!t) {
                  this.setFieldInvalid(r, n);
                  break;
                }

                if (i(t, e)) {
                  this.setFieldInvalid(r, n);
                  break;
                }
              }
              break;
            }

          default:
            {
              if ("function" != typeof n.validator) return console.error(`Validator for custom rule for [${r}] field should be a function. This field will be always invalid.`), void this.setFieldInvalid(r, n);
              const e = n.validator(c, this.fields);

              if ("boolean" != typeof e && "function" != typeof e && console.error(`Validator return value for [${r}] field should be boolean or function. It will be cast to boolean.`), "function" == typeof e) {
                if (!d) {
                  this.fields[r].asyncCheckPending = !1;
                  const i = e();
                  return a(i) ? i.then(e => {
                    e || this.setFieldInvalid(r, n);
                  }).catch(() => {
                    this.setFieldInvalid(r, n);
                  }) : (console.error(`Validator function for custom rule for [${r}] field should return a Promise. This field will be always invalid.`), void this.setFieldInvalid(r, n));
                }

                this.fields[r].asyncCheckPending = !0;
              }

              e || this.setFieldInvalid(r, n);
            }
        }

        var h;
      }
    }

    validateField(e) {
      let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      var s;
      const t = this.fields[e];
      t.isValid = !0;
      const l = [];
      return [...t.rules].reverse().forEach(s => {
        const r = this.validateFieldRule(e, t.elem, s, i);
        a(r) && l.push(r);
      }), t.isValid && this.setFieldValid(e, null == (s = t.config) ? void 0 : s.successMessage), Promise.allSettled(l);
    }

    revalidateField(e) {
      if ("string" != typeof e) throw Error("Field selector is not valid. Please specify a string selector.");
      return this.fields[e] ? new Promise(i => {
        this.validateField(e, !0).finally(() => {
          this.clearFieldStyle(e), this.clearFieldLabel(e), this.renderFieldError(e), i(!!this.fields[e].isValid);
        });
      }) : (console.error("Field not found. Check the field selector."), Promise.reject());
    }

    validateGroup(e, i) {
      const s = [];
      return [...i.rules].reverse().forEach(t => {
        const l = this.validateGroupRule(e, i.elems, t);
        a(l) && s.push(l);
      }), Promise.allSettled(s);
    }

    focusInvalidField() {
      for (const e in this.fields) {
        const i = this.fields[e];

        if (!i.isValid) {
          setTimeout(() => i.elem.focus(), 0);
          break;
        }
      }
    }

    afterSubmitValidation() {
      let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
      this.renderErrors(e), this.globalConfig.focusInvalidField && this.focusInvalidField();
    }

    validate() {
      let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
      return new Promise(i => {
        const s = [];
        Object.keys(this.fields).forEach(e => {
          const i = this.validateField(e);
          a(i) && s.push(i);
        }), Object.keys(this.groupFields).forEach(e => {
          const i = this.groupFields[e],
                t = this.validateGroup(e, i);
          a(t) && s.push(t);
        }), s.length ? Promise.allSettled(s).then(() => {
          this.afterSubmitValidation(e), i(!0);
        }) : (this.afterSubmitValidation(e), i(!1));
      });
    }

    revalidate() {
      return new Promise(e => {
        this.validateHandler(void 0, !0).finally(() => {
          this.globalConfig.focusInvalidField && this.focusInvalidField(), e(this.isValid);
        });
      });
    }

    validateHandler(e) {
      let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      return this.globalConfig.lockForm && this.lockForm(), this.validate(i).finally(() => {
        var i, s;
        this.globalConfig.lockForm && this.unlockForm(), this.isValid ? null == (i = this.onSuccessCallback) || i.call(this, e) : null == (s = this.onFailCallback) || s.call(this, this.fields, this.groupFields);
      });
    }

    setForm(e) {
      this.form = e, this.form.setAttribute("novalidate", "novalidate"), this.removeListener("submit", this.form, this.formSubmitHandler), this.addListener("submit", this.form, this.formSubmitHandler);
    }

    addListener(e, i, s) {
      i.addEventListener(e, s), this.eventListeners.push({
        type: e,
        elem: i,
        func: s
      });
    }

    removeListener(e, i, s) {
      i.removeEventListener(e, s), this.eventListeners = this.eventListeners.filter(s => s.type !== e || s.elem !== i);
    }

    addField(e, i, s) {
      if ("string" != typeof e) throw Error("Field selector is not valid. Please specify a string selector.");
      const t = this.form.querySelector(e);
      if (!t) throw Error(`Field with ${e} selector not found! Please check the field selector.`);
      if (!Array.isArray(i) || !i.length) throw Error(`Rules argument for the field [${e}] should be an array and should contain at least 1 element.`);
      return i.forEach(i => {
        if (!("rule" in i || "validator" in i || "plugin" in i)) throw Error(`Rules argument for the field [${e}] must contain at least one rule or validator property.`);
        if (!(i.validator || i.plugin || i.rule && Object.values(l).includes(i.rule))) throw Error(`Rule should be one of these types: ${Object.values(l).join(", ")}. Provided value: ${i.rule}`);
      }), this.fields[e] = {
        elem: t,
        rules: i,
        isValid: void 0,
        config: s
      }, this.setListeners(t), this.isSubmitted && this.validate(), this;
    }

    removeField(e) {
      if ("string" != typeof e) throw Error("Field selector is not valid. Please specify a string selector.");
      if (!this.fields[e]) return console.error("Field not found. Check the field selector."), this;
      const i = this.getListenerType(this.fields[e].elem.type);
      return this.removeListener(i, this.fields[e].elem, this.handlerChange), this.clearErrors(), delete this.fields[e], this;
    }

    removeGroup(e) {
      if ("string" != typeof e) throw Error("Group selector is not valid. Please specify a string selector.");
      return this.groupFields[e] ? (this.groupFields[e].elems.forEach(e => {
        const i = this.getListenerType(e.type);
        this.removeListener(i, e, this.handlerChange);
      }), this.clearErrors(), delete this.groupFields[e], this) : (console.error("Group not found. Check the group selector."), this);
    }

    addRequiredGroup(e, i, s, t) {
      if ("string" != typeof e) throw Error("Group selector is not valid. Please specify a string selector.");
      const l = this.form.querySelector(e);
      if (!l) throw Error(`Group with ${e} selector not found! Please check the group selector.`);
      const o = l.querySelectorAll("input"),
            a = Array.from(o).filter(e => {
        const i = ((e, i) => {
          const s = [...i].reverse();

          for (let t = 0, l = s.length; t < l; ++t) {
            const i = s[t];

            for (const s in e) {
              const t = e[s];
              if (t.groupElem === i) return [s, t];
            }
          }

          return null;
        })(this.groupFields, (e => {
          let i = e;
          const s = [];

          for (; i;) s.unshift(i), i = i.parentNode;

          return s;
        })(e));

        return !i || i[1].elems.find(i => i !== e);
      });
      return this.groupFields[e] = {
        rules: [{
          rule: r.Required,
          errorMessage: i,
          successMessage: t
        }],
        groupElem: l,
        elems: a,
        isDirty: !1,
        isValid: void 0,
        config: s
      }, o.forEach(e => {
        this.setListeners(e);
      }), this;
    }

    getListenerType(e) {
      switch (e) {
        case "checkbox":
        case "select-one":
        case "file":
        case "radio":
          return "change";

        default:
          return "input";
      }
    }

    setListeners(e) {
      const i = this.getListenerType(e.type);
      this.removeListener(i, e, this.handlerChange), this.addListener(i, e, this.handlerChange);
    }

    clearFieldLabel(e) {
      var i, s;
      null == (i = this.errorLabels[e]) || i.remove(), null == (s = this.successLabels[e]) || s.remove();
    }

    clearFieldStyle(e) {
      var i, s, t, l;
      const r = this.fields[e],
            o = (null == (i = r.config) ? void 0 : i.errorFieldStyle) || this.globalConfig.errorFieldStyle;
      Object.keys(o).forEach(e => {
        r.elem.style[e] = "";
      });
      const a = (null == (s = r.config) ? void 0 : s.successFieldStyle) || this.globalConfig.successFieldStyle || {};
      Object.keys(a).forEach(e => {
        r.elem.style[e] = "";
      }), r.elem.classList.remove(...n((null == (t = r.config) ? void 0 : t.errorFieldCssClass) || this.globalConfig.errorFieldCssClass), ...n((null == (l = r.config) ? void 0 : l.successFieldCssClass) || this.globalConfig.successFieldCssClass));
    }

    clearErrors() {
      var e, i;
      Object.keys(this.errorLabels).forEach(e => this.errorLabels[e].remove()), Object.keys(this.successLabels).forEach(e => this.successLabels[e].remove());

      for (const s in this.fields) this.clearFieldStyle(s);

      for (const s in this.groupFields) {
        const t = this.groupFields[s],
              l = (null == (e = t.config) ? void 0 : e.errorFieldStyle) || this.globalConfig.errorFieldStyle;
        Object.keys(l).forEach(e => {
          t.elems.forEach(i => {
            var s;
            i.style[e] = "", i.classList.remove(...n((null == (s = t.config) ? void 0 : s.errorFieldCssClass) || this.globalConfig.errorFieldCssClass));
          });
        });
        const r = (null == (i = t.config) ? void 0 : i.successFieldStyle) || this.globalConfig.successFieldStyle || {};
        Object.keys(r).forEach(e => {
          t.elems.forEach(i => {
            var s;
            i.style[e] = "", i.classList.remove(...n((null == (s = t.config) ? void 0 : s.successFieldCssClass) || this.globalConfig.successFieldCssClass));
          });
        });
      }

      this.tooltips = [];
    }

    isTooltip() {
      return !!this.globalConfig.tooltip;
    }

    lockForm() {
      const e = this.form.querySelectorAll("input, textarea, button, select");

      for (let i = 0, s = e.length; i < s; ++i) e[i].setAttribute("data-just-validate-fallback-disabled", e[i].disabled ? "true" : "false"), e[i].setAttribute("disabled", "disabled"), e[i].style.pointerEvents = "none", e[i].style.webkitFilter = "grayscale(100%)", e[i].style.filter = "grayscale(100%)";
    }

    unlockForm() {
      const e = this.form.querySelectorAll("input, textarea, button, select");

      for (let i = 0, s = e.length; i < s; ++i) "true" !== e[i].getAttribute("data-just-validate-fallback-disabled") && e[i].removeAttribute("disabled"), e[i].style.pointerEvents = "", e[i].style.webkitFilter = "", e[i].style.filter = "";
    }

    renderTooltip(e, i, s) {
      var t;
      const {
        top: l,
        left: r,
        width: o,
        height: a
      } = e.getBoundingClientRect(),
            n = i.getBoundingClientRect(),
            d = s || (null == (t = this.globalConfig.tooltip) ? void 0 : t.position);

      switch (d) {
        case "left":
          i.style.top = l + a / 2 - n.height / 2 + "px", i.style.left = r - n.width - 5 + "px";
          break;

        case "top":
          i.style.top = l - n.height - 5 + "px", i.style.left = r + o / 2 - n.width / 2 + "px";
          break;

        case "right":
          i.style.top = l + a / 2 - n.height / 2 + "px", i.style.left = `${r + o + 5}px`;
          break;

        case "bottom":
          i.style.top = `${l + a + 5}px`, i.style.left = r + o / 2 - n.width / 2 + "px";
      }

      i.dataset.direction = d;
      return {
        refresh: () => {
          this.renderTooltip(e, i, s);
        }
      };
    }

    createErrorLabelElem(e, i, s) {
      const t = document.createElement("div");
      t.innerHTML = i;
      const l = this.isTooltip() ? null == s ? void 0 : s.errorLabelStyle : (null == s ? void 0 : s.errorLabelStyle) || this.globalConfig.errorLabelStyle;
      return Object.assign(t.style, l), t.classList.add(...n((null == s ? void 0 : s.errorLabelCssClass) || this.globalConfig.errorLabelCssClass), "just-validate-error-label"), this.isTooltip() && (t.dataset.tooltip = "true"), this.globalConfig.testingMode && (t.dataset.testId = `error-label-${e}`), this.errorLabels[e] = t, t;
    }

    createSuccessLabelElem(e, i, s) {
      if (void 0 === i) return null;
      const t = document.createElement("div");
      t.innerHTML = i;
      const l = (null == s ? void 0 : s.successLabelStyle) || this.globalConfig.successLabelStyle;
      return Object.assign(t.style, l), t.classList.add(...n((null == s ? void 0 : s.successLabelCssClass) || this.globalConfig.successLabelCssClass), "just-validate-success-label"), this.globalConfig.testingMode && (t.dataset.testId = `success-label-${e}`), this.successLabels[e] = t, t;
    }

    renderErrorsContainer(e, i) {
      const s = i || this.globalConfig.errorsContainer;

      if ("string" == typeof s) {
        const i = this.form.querySelector(s);
        if (i) return i.appendChild(e), !0;
        console.error(`Error container with ${s} selector not found. Errors will be rendered as usual`);
      }

      return s instanceof Element ? (s.appendChild(e), !0) : (void 0 !== s && console.error("Error container not found. It should be a string or existing Element. Errors will be rendered as usual"), !1);
    }

    renderGroupLabel(e, i, s, t) {
      if (!t) {
        if (this.renderErrorsContainer(i, s)) return;
      }

      e.appendChild(i);
    }

    renderFieldLabel(e, i, s, t) {
      var l, r, o, a, n, d, u;

      if (!t) {
        if (this.renderErrorsContainer(i, s)) return;
      }

      if ("checkbox" === e.type || "radio" === e.type) {
        const s = document.querySelector(`label[for="${e.getAttribute("id")}"]`);
        "label" === (null == (r = null == (l = e.parentElement) ? void 0 : l.tagName) ? void 0 : r.toLowerCase()) ? null == (a = null == (o = e.parentElement) ? void 0 : o.parentElement) || a.appendChild(i) : s ? null == (n = s.parentElement) || n.appendChild(i) : null == (d = e.parentElement) || d.appendChild(i);
      } else null == (u = e.parentElement) || u.appendChild(i);
    }

    showLabels(e, i) {
      Object.keys(e).forEach((s, t) => {
        const l = e[s],
              r = this.fields[s];
        r.isValid = !i, this.clearFieldStyle(s), this.clearFieldLabel(s), this.renderFieldError(s, l), 0 === t && this.globalConfig.focusInvalidField && setTimeout(() => r.elem.focus(), 0);
      });
    }

    showErrors(e) {
      if ("object" != typeof e) throw Error("[showErrors]: Errors should be an object with key: value format");
      this.showLabels(e, !0);
    }

    showSuccessLabels(e) {
      if ("object" != typeof e) throw Error("[showSuccessLabels]: Labels should be an object with key: value format");
      this.showLabels(e, !1);
    }

    renderFieldError(e, i) {
      var s, t, l, r, o, a;
      const d = this.fields[e];

      if (d.isValid) {
        if (!d.asyncCheckPending) {
          const l = this.createSuccessLabelElem(e, void 0 !== i ? i : d.successMessage, d.config);
          l && this.renderFieldLabel(d.elem, l, null == (s = d.config) ? void 0 : s.errorsContainer, !0), d.elem.classList.add(...n((null == (t = d.config) ? void 0 : t.successFieldCssClass) || this.globalConfig.successFieldCssClass));
        }

        return;
      }

      this.isValid = !1, d.elem.classList.add(...n((null == (l = d.config) ? void 0 : l.errorFieldCssClass) || this.globalConfig.errorFieldCssClass));
      const u = this.createErrorLabelElem(e, void 0 !== i ? i : d.errorMessage, d.config);
      this.renderFieldLabel(d.elem, u, null == (r = d.config) ? void 0 : r.errorsContainer), this.isTooltip() && this.tooltips.push(this.renderTooltip(d.elem, u, null == (a = null == (o = d.config) ? void 0 : o.tooltip) ? void 0 : a.position));
    }

    renderErrors() {
      let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
      var i, s, t, l;

      if (this.isSubmitted || e) {
        this.clearErrors(), this.isValid = !0;

        for (const e in this.groupFields) {
          const r = this.groupFields[e];

          if (r.isValid) {
            r.elems.forEach(e => {
              var i, s;
              Object.assign(e.style, (null == (i = r.config) ? void 0 : i.successFieldStyle) || this.globalConfig.successFieldStyle), e.classList.add(...n((null == (s = r.config) ? void 0 : s.successFieldCssClass) || this.globalConfig.successFieldCssClass));
            });
            const s = this.createSuccessLabelElem(e, r.successMessage, r.config);
            s && this.renderGroupLabel(r.groupElem, s, null == (i = r.config) ? void 0 : i.errorsContainer, !0);
            continue;
          }

          this.isValid = !1, r.elems.forEach(e => {
            var i, s;
            Object.assign(e.style, (null == (i = r.config) ? void 0 : i.errorFieldStyle) || this.globalConfig.errorFieldStyle), e.classList.add(...n((null == (s = r.config) ? void 0 : s.errorFieldCssClass) || this.globalConfig.errorFieldCssClass));
          });
          const o = this.createErrorLabelElem(e, r.errorMessage, r.config);
          this.renderGroupLabel(r.groupElem, o, null == (s = r.config) ? void 0 : s.errorsContainer), this.isTooltip() && this.tooltips.push(this.renderTooltip(r.groupElem, o, null == (l = null == (t = r.config) ? void 0 : t.tooltip) ? void 0 : l.position));
        }

        for (const e in this.fields) this.renderFieldError(e);
      }
    }

    destroy() {
      this.eventListeners.forEach(e => {
        this.removeListener(e.type, e.elem, e.func);
      }), Object.keys(this.customStyleTags).forEach(e => {
        this.customStyleTags[e].remove();
      }), this.clearErrors(), this.globalConfig.lockForm && this.unlockForm();
    }

    refresh() {
      this.destroy(), this.form ? (this.initialize(this.form, this.globalConfig), Object.keys(this.fields).forEach(e => {
        this.addField(e, [...this.fields[e].rules], this.fields[e].config);
      })) : console.error("Cannot initialize the library! Form is not defined");
    }

    setCurrentLocale(e) {
      "string" == typeof e || void 0 === e ? (this.currentLocale = e, this.isSubmitted && this.validate()) : console.error("Current locale should be a string");
    }

    onSuccess(e) {
      return this.onSuccessCallback = e, this;
    }

    onFail(e) {
      return this.onFailCallback = e, this;
    }

  };
});

/***/ }),

/***/ "./src/js/components/smooth-scroll.js":
/*!********************************************!*\
  !*** ./src/js/components/smooth-scroll.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! smooth-scroll v15.0.0 | (c) 2018 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element && !Element.prototype.closest && (Element.prototype.closest = function (e) {
  var t,
      n = (this.document || this.ownerDocument).querySelectorAll(e),
      o = this;

  do {
    for (t = n.length; --t >= 0 && n.item(t) !== o;);
  } while (t < 0 && (o = o.parentElement));

  return o;
}), function () {
  function e(e, t) {
    t = t || {
      bubbles: !1,
      cancelable: !1,
      detail: void 0
    };
    var n = document.createEvent("CustomEvent");
    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
  }

  if ("function" == typeof window.CustomEvent) return !1;
  e.prototype = window.Event.prototype, window.CustomEvent = e;
}(), function () {
  for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];

  window.requestAnimationFrame || (window.requestAnimationFrame = function (t, n) {
    var o = new Date().getTime(),
        i = Math.max(0, 16 - (o - e)),
        r = window.setTimeout(function () {
      t(o + i);
    }, i);
    return e = o + i, r;
  }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
    clearTimeout(e);
  });
}(), function (e, t) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return t(e);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}("undefined" != typeof __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof window ? window : this, function (e) {
  "use strict";

  var t = {
    ignore: "[data-scroll-ignore]",
    header: null,
    topOnEmptyHash: !0,
    speed: 500,
    speedAsDuration: !1,
    durationMax: null,
    durationMin: null,
    clip: !0,
    offset: 0,
    easing: "easeInOutCubic",
    customEasing: null,
    updateURL: !0,
    popstate: !0,
    emitEvents: !0
  },
      n = function () {
    return "querySelector" in document && "addEventListener" in e && "requestAnimationFrame" in e && "closest" in e.Element.prototype;
  },
      o = function () {
    var e = {};
    return Array.prototype.forEach.call(arguments, function (t) {
      for (var n in t) {
        if (!t.hasOwnProperty(n)) return;
        e[n] = t[n];
      }
    }), e;
  },
      i = function (t) {
    return !!("matchMedia" in e && e.matchMedia("(prefers-reduced-motion)").matches);
  },
      r = function (t) {
    return parseInt(e.getComputedStyle(t).height, 10);
  },
      a = function (e) {
    var t;

    try {
      t = decodeURIComponent(e);
    } catch (n) {
      t = e;
    }

    return t;
  },
      u = function (e) {
    "#" === e.charAt(0) && (e = e.substr(1));

    for (var t, n = String(e), o = n.length, i = -1, r = "", a = n.charCodeAt(0); ++i < o;) {
      if (0 === (t = n.charCodeAt(i))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
      t >= 1 && t <= 31 || 127 == t || 0 === i && t >= 48 && t <= 57 || 1 === i && t >= 48 && t <= 57 && 45 === a ? r += "\\" + t.toString(16) + " " : r += t >= 128 || 45 === t || 95 === t || t >= 48 && t <= 57 || t >= 65 && t <= 90 || t >= 97 && t <= 122 ? n.charAt(i) : "\\" + n.charAt(i);
    }

    var u;

    try {
      u = decodeURIComponent("#" + r);
    } catch (e) {
      u = "#" + r;
    }

    return u;
  },
      c = function (e, t) {
    var n;
    return "easeInQuad" === e.easing && (n = t * t), "easeOutQuad" === e.easing && (n = t * (2 - t)), "easeInOutQuad" === e.easing && (n = t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1), "easeInCubic" === e.easing && (n = t * t * t), "easeOutCubic" === e.easing && (n = --t * t * t + 1), "easeInOutCubic" === e.easing && (n = t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1), "easeInQuart" === e.easing && (n = t * t * t * t), "easeOutQuart" === e.easing && (n = 1 - --t * t * t * t), "easeInOutQuart" === e.easing && (n = t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t), "easeInQuint" === e.easing && (n = t * t * t * t * t), "easeOutQuint" === e.easing && (n = 1 + --t * t * t * t * t), "easeInOutQuint" === e.easing && (n = t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t), e.customEasing && (n = e.customEasing(t)), n || t;
  },
      s = function () {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
  },
      l = function (t, n, o, i) {
    var r = 0;
    if (t.offsetParent) do {
      r += t.offsetTop, t = t.offsetParent;
    } while (t);
    return r = Math.max(r - n - o, 0), i && (r = Math.min(r, s() - e.innerHeight)), r;
  },
      m = function (e) {
    return e ? r(e) + e.offsetTop : 0;
  },
      d = function (e, t) {
    var n = t.speedAsDuration ? t.speed : Math.abs(e / 1e3 * t.speed);
    return t.durationMax && n > t.durationMax ? t.durationMax : t.durationMin && n < t.durationMin ? t.durationMin : n;
  },
      f = function (e, t, n) {
    t || history.pushState && n.updateURL && history.pushState({
      smoothScroll: JSON.stringify(n),
      anchor: e.id
    }, document.title, e === document.documentElement ? "#top" : "#" + e.id);
  },
      h = function (t, n, o) {
    0 === t && document.body.focus(), o || (t.focus(), document.activeElement !== t && (t.setAttribute("tabindex", "-1"), t.focus(), t.style.outline = "none"), e.scrollTo(0, n));
  },
      p = function (t, n, o, i) {
    if (n.emitEvents && "function" == typeof e.CustomEvent) {
      var r = new CustomEvent(t, {
        bubbles: !0,
        detail: {
          anchor: o,
          toggle: i
        }
      });
      document.dispatchEvent(r);
    }
  };

  return function (r, g) {
    var v,
        w,
        y,
        E,
        b,
        S,
        A,
        C = {};
    C.cancelScroll = function (e) {
      cancelAnimationFrame(A), A = null, e || p("scrollCancel", v);
    }, C.animateScroll = function (n, i, r) {
      var a = o(v || t, r || {}),
          u = "[object Number]" === Object.prototype.toString.call(n),
          g = u || !n.tagName ? null : n;

      if (u || g) {
        var w = e.pageYOffset;
        a.header && !E && (E = document.querySelector(a.header)), b || (b = m(E));

        var y,
            S,
            O,
            I = u ? n : l(g, b, parseInt("function" == typeof a.offset ? a.offset(n, i) : a.offset, 10), a.clip),
            q = I - w,
            M = s(),
            F = 0,
            L = d(q, a),
            x = function (t, o) {
          var r = e.pageYOffset;
          if (t == o || r == o || (w < o && e.innerHeight + r) >= M) return C.cancelScroll(!0), h(n, o, u), p("scrollStop", a, n, i), y = null, A = null, !0;
        },
            H = function (t) {
          y || (y = t), F += t - y, S = F / parseInt(L, 10), S = S > 1 ? 1 : S, O = w + q * c(a, S), e.scrollTo(0, Math.floor(O)), x(O, I) || (A = e.requestAnimationFrame(H), y = t);
        };

        0 === e.pageYOffset && e.scrollTo(0, 0), f(n, u, a), p("scrollStart", a, n, i), C.cancelScroll(!0), e.requestAnimationFrame(H);
      }
    };

    var O = function (t) {
      if (!i() && 0 === t.button && !t.metaKey && !t.ctrlKey && "closest" in t.target && (y = t.target.closest(r)) && "a" === y.tagName.toLowerCase() && !t.target.closest(v.ignore) && y.hostname === e.location.hostname && y.pathname === e.location.pathname && /#/.test(y.href)) {
        var n = u(a(y.hash)),
            o = v.topOnEmptyHash && "#" === n ? document.documentElement : document.querySelector(n);
        o = o || "#top" !== n ? o : document.documentElement, o && (t.preventDefault(), C.animateScroll(o, y));
      }
    },
        I = function (e) {
      if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(v) && history.state.anchor) {
        var t = document.querySelector(u(a(history.state.anchor)));
        t && C.animateScroll(t, null, {
          updateURL: !1
        });
      }
    },
        q = function (e) {
      S || (S = setTimeout(function () {
        S = null, b = m(E);
      }, 66));
    };

    return C.destroy = function () {
      v && (document.removeEventListener("click", O, !1), e.removeEventListener("resize", q, !1), e.removeEventListener("popstate", I, !1), C.cancelScroll(), v = null, w = null, y = null, E = null, b = null, S = null, A = null);
    }, C.init = function (i) {
      if (!n()) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
      C.destroy(), v = o(t, i || {}), E = v.header ? document.querySelector(v.header) : null, b = m(E), document.addEventListener("click", O, !1), E && e.addEventListener("resize", q, !1), v.updateURL && v.popstate && e.addEventListener("popstate", I, !1);
    }, C.init(g), C;
  };
});

/***/ }),

/***/ "./src/js/functions/burger.js":
/*!************************************!*\
  !*** ./src/js/functions/burger.js ***!
  \************************************/
/***/ (() => {

// import { disableScroll } from '../functions/disable-scroll';
// import { enableScroll } from '../functions/enable-scroll';
(function () {
  var _document, _document2, _document3, _document4;

  const burger = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('[data-burger]');
  const menu = (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector('[data-menu]');
  const menuItems = (_document3 = document) === null || _document3 === void 0 ? void 0 : _document3.querySelectorAll('[data-menu-item]');
  const close = (_document4 = document) === null || _document4 === void 0 ? void 0 : _document4.querySelector('[data-burger-close]');
  burger === null || burger === void 0 ? void 0 : burger.addEventListener('click', e => {
    burger === null || burger === void 0 ? void 0 : burger.classList.toggle('burger--active');
    menu === null || menu === void 0 ? void 0 : menu.classList.toggle('menu--active');

    if (menu !== null && menu !== void 0 && menu.classList.contains('menu--active')) {
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'true');
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Закрыть меню');
      document.body.style.overflow = 'hidden'; // disable scroll
    } else {
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
      document.body.style.overflow = 'visible'; // enable scroll
    }
  });
  close === null || close === void 0 ? void 0 : close.addEventListener('click', () => {
    burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
    burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
    burger === null || burger === void 0 ? void 0 : burger.classList.remove('burger--active');
    menu === null || menu === void 0 ? void 0 : menu.classList.remove('menu--active');
    document.body.style.overflow = 'visible'; // enable scroll
  });
  menuItems === null || menuItems === void 0 ? void 0 : menuItems.forEach(el => {
    el.addEventListener('click', () => {
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('menu--active');
      document.body.style.overflow = 'visible'; // enable scroll
    });
  });
})();

/***/ }),

/***/ "./src/js/functions/close.js":
/*!***********************************!*\
  !*** ./src/js/functions/close.js ***!
  \***********************************/
/***/ (() => {

(() => {
  const btn = document.querySelectorAll('[data-close]');
  const searchBlock = document.querySelector('.search__items-wrap');
  btn[0].addEventListener('click', () => {
    // search close-btn
    searchBlock.classList.remove('search--active');
  });
  btn[1].addEventListener('click', () => {
    // map overlay close-btn
    document.querySelector('.map__overlay').classList.add('closed');
  });
})();

/***/ }),

/***/ "./src/js/functions/mobile-check.js":
/*!******************************************!*\
  !*** ./src/js/functions/mobile-check.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mobileCheck": () => (/* binding */ mobileCheck)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

const mobileCheck = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--android');
    return "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--ios');
    return "iOS";
  }

  return "unknown";
};

/***/ }),

/***/ "./src/js/functions/search.js":
/*!************************************!*\
  !*** ./src/js/functions/search.js ***!
  \************************************/
/***/ (() => {

(function () {
  var _document, _document2, _document3, _document4;

  const page_width = document.documentElement.scrollWidth;
  const nav = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('.nav');
  const search = (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector('.search');
  const searchBtn = (_document3 = document) === null || _document3 === void 0 ? void 0 : _document3.querySelector('[data-search]');
  const searchItems = (_document4 = document) === null || _document4 === void 0 ? void 0 : _document4.querySelector('[data-searchItems]');
  searchBtn === null || searchBtn === void 0 ? void 0 : searchBtn.addEventListener('click', () => {
    searchItems === null || searchItems === void 0 ? void 0 : searchItems.classList.toggle('search--active');

    if (searchItems !== null && searchItems !== void 0 && searchItems.classList.contains('search--active')) {
      searchBtn === null || searchBtn === void 0 ? void 0 : searchBtn.setAttribute('aria-expanded', 'true');
      searchBtn === null || searchBtn === void 0 ? void 0 : searchBtn.setAttribute('aria-label', 'Закрыть поиск');
    } else {
      searchBtn === null || searchBtn === void 0 ? void 0 : searchBtn.setAttribute('aria-expanded', 'false');
      searchBtn === null || searchBtn === void 0 ? void 0 : searchBtn.setAttribute('aria-label', 'Открыть поиск');
    }

    if (page_width < 1125 && page_width > 801) {
      nav === null || nav === void 0 ? void 0 : nav.classList.toggle('hidden-nav');
      search === null || search === void 0 ? void 0 : search.classList.toggle('overflow-h');
    }
  });
})();

/***/ }),

/***/ "./src/js/vendor/ymaps.js":
/*!********************************!*\
  !*** ./src/js/vendor/ymaps.js ***!
  \********************************/
/***/ (() => {

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.770255812621244, 37.637542576578404],
    zoom: 15
  });
  var myPlacemark = new ymaps.Placemark([55.770255812621244, 37.637542576578404], {}, {
    iconLayout: "default#image",
    iconImageHref: "img/svg/map-item.svg",
    iconImageSize: [28, 40],
    iconImageOffset: [-3, -42]
  });
  myMap.geoObjects.add(myPlacemark);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");




})();

/******/ })()
;
//# sourceMappingURL=main.js.map