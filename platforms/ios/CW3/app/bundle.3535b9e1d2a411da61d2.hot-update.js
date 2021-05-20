webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ProductList.vue?vue&type=script&lang=js&":
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      products: [{
        topic: "English",
        cost: 5,
        spaces: 10,
        location: "NW1"
      }, {
        topic: "French",
        cost: 5,
        spaces: 10,
        location: "NW1"
      }]
    };
  },

  methods: {
    onItemTap(event) {
      alert("Added to cart: " + event.item.name);
      this.$emit('addProduct', event.item);
    }

  }
});

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ProductList.vue?vue&type=template&id=0feaa5a2&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ListView",
    {
      attrs: { items: _vm.products, "+alias": "product" },
      on: { itemTap: _vm.onItemTap }
    },
    [
      _c("v-template", {
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var product = ref.product
              var $index = ref.$index
              var $even = ref.$even
              var $odd = ref.$odd
              return _c(
                "StackLayout",
                [
                  _c("Label", { attrs: { text: product.topic } }),
                  _c("Label", { attrs: { text: "price: " + product.cost } }),
                  _c("Label", { attrs: { text: "spaces: " + product.spaces } })
                ],
                1
              )
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC52dWU/NmJmZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7QUFDQTtBQUNBO0FBQ0EsaUJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREEsRUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FGQTtBQURBO0FBTUEsR0FSQTs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUpBO0FBVEEsRzs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsMkNBQTJDO0FBQ3pELFdBQVc7QUFDWCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsU0FBUyxzQkFBc0IsRUFBRTtBQUNoRSwrQkFBK0IsU0FBUyxpQ0FBaUMsRUFBRTtBQUMzRSwrQkFBK0IsU0FBUyxvQ0FBb0MsRUFBRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS4zNTM1YjllMWQyYTQxMWRhNjFkMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxMaXN0VmlldyBmb3I9J3Byb2R1Y3QgaW4gcHJvZHVjdHMnIEBpdGVtVGFwPSdvbkl0ZW1UYXAnPiBcbiAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICA8TGFiZWwgOnRleHQ9J3Byb2R1Y3QudG9waWMnLz5cbiAgICAgICAgPExhYmVsIDp0ZXh0PVwiYHByaWNlOiAke3Byb2R1Y3QuY29zdH1gXCIvPlxuICAgICAgICA8TGFiZWwgOnRleHQ9XCJgc3BhY2VzOiAke3Byb2R1Y3Quc3BhY2VzfWBcIi8+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgPC92LXRlbXBsYXRlPlxuICAgIDwvTGlzdFZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb2R1Y3RzOiBbXG4gICAgICAgICAgICAgICAgeyB0b3BpYzogXCJFbmdsaXNoXCIsIGNvc3Q6IDUsIHNwYWNlczogMTAsIGxvY2F0aW9uOiBcIk5XMVwiIH0sXG4gICAgICAgICAgICAgICAgeyB0b3BpYzogXCJGcmVuY2hcIiwgY29zdDogNSwgc3BhY2VzOiAxMCwgbG9jYXRpb246IFwiTlcxXCIgfVxuICAgICAgICAgICAgXSxcbiAgICAgICB9O1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbkl0ZW1UYXAoZXZlbnQpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiQWRkZWQgdG8gY2FydDogXCIgKyBldmVudC5pdGVtLm5hbWUpO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnYWRkUHJvZHVjdCcsIGV2ZW50Lml0ZW0pO1xuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIkxpc3RWaWV3XCIsXG4gICAge1xuICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5wcm9kdWN0cywgXCIrYWxpYXNcIjogXCJwcm9kdWN0XCIgfSxcbiAgICAgIG9uOiB7IGl0ZW1UYXA6IF92bS5vbkl0ZW1UYXAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgdmFyIHByb2R1Y3QgPSByZWYucHJvZHVjdFxuICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBwcm9kdWN0LnRvcGljIH0gfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJwcmljZTogXCIgKyBwcm9kdWN0LmNvc3QgfSB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBcInNwYWNlczogXCIgKyBwcm9kdWN0LnNwYWNlcyB9IH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF0pXG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==