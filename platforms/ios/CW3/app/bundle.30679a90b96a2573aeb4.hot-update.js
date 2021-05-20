webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductList_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ProductList.vue");
/* harmony import */ var _Form_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Form.vue");
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
  components: {
    ProductList: _ProductList_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Checkout: _Form_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },

  data() {
    return {};
  },

  method: {
    addToCart(product) {
      this.cart.push(product);
      alert("Added to cart: " + product.name);
    },

    removeFromCart(lesson) {
      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i] == lesson) this.cart.splice(i, 1);
      }
    }

  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BcHAudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQSxHQURBOztBQUVBO0FBQ0E7QUFFQSxHQUxBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FKQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVRBO0FBTkEsRyIsImZpbGUiOiJidW5kbGUuMzA2NzlhOTBiOTZhMjU3M2FlYjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZT5cbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIkhvbWVcIi8+XG4gICAgICAgIDxMYWJlbCB0ZXh0PVwiV2VsY29tZVwiIGNsYXNzPVwiaDNcIi8+XG4gICAgICAgIDxUYWJWaWV3IGFuZHJvaWRUYWJzUG9zaXRpb249J2JvdHRvbSc+XG4gICAgICAgICAgICA8VGFiVmlld0l0ZW0gdGl0bGU9XCJQcm9kdWN0TGlzdFwiIGNsYXNzPVwiaDJcIj5cbiAgICAgICAgICAgICAgICA8UHJvZHVjdExpc3QgQGFkZFByb2R1Y3Q9XCJhZGRUb0NhcnRcIiAvPlxuICAgICAgICAgICAgPC9UYWJWaWV3SXRlbT5cbiAgICAgICAgICAgIDxUYWJWaWV3SXRlbSB0aXRsZT1cIkNoZWNrb3V0XCIgY2xhc3M9XCJoMlwiPlxuICAgICAgICAgICAgICAgIDxDaGVja291dCA6Y2FydD1cImNhcnRcIiBAcmVtb3ZlUHJvZHVjdD1cInJlbW92ZUZyb21DYXJ0XCIgLz5cbiAgICAgICAgICAgIDwvVGFiVmlld0l0ZW0+XG4gICAgICAgIDwvVGFiVmlldz5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4vUHJvZHVjdExpc3QudnVlJ1xuaW1wb3J0IENoZWNrb3V0IGZyb20gJy4vRm9ybS52dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7UHJvZHVjdExpc3QsIENoZWNrb3V0fSxcbiAgICBkYXRhICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZDoge1xuICAgICBhZGRUb0NhcnQocHJvZHVjdCkge1xuICAgICAgICAgICAgdGhpcy5jYXJ0LnB1c2gocHJvZHVjdCk7XG4gICAgICAgICAgICBhbGVydChcIkFkZGVkIHRvIGNhcnQ6IFwiICsgcHJvZHVjdC5uYW1lKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlRnJvbUNhcnQobGVzc29uKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8dGhpcy5jYXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FydFtpXSA9PSBsZXNzb24pIHRoaXMuY2FydC5zcGxpY2UoaSwxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAgIFxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmhvbWUtcGFuZWwge1xuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMDtcbiAgICBtYXJnaW46IDE1O1xufVxuXG4uZGVzY3JpcHRpb24tbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDE1O1xufVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=