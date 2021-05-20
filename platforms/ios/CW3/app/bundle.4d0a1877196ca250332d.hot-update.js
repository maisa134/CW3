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
                  _c("Label", { attrs: { text: "spaces: " + product.spaces } }),
                  _c("Label", {
                    attrs: { text: "spaces: " + product.location }
                  })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC52dWU/NmJmZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFDQTtBQUNBLGlCQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURBLEVBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRkE7QUFEQTtBQU1BLEdBUkE7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFKQTtBQVRBLEc7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDJDQUEyQztBQUN6RCxXQUFXO0FBQ1gsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFNBQVMsc0JBQXNCLEVBQUU7QUFDaEUsK0JBQStCLFNBQVMsaUNBQWlDLEVBQUU7QUFDM0UsK0JBQStCLFNBQVMsb0NBQW9DLEVBQUU7QUFDOUU7QUFDQSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjRkMGExODc3MTk2Y2EyNTAzMzJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPExpc3RWaWV3IGZvcj0ncHJvZHVjdCBpbiBwcm9kdWN0cycgQGl0ZW1UYXA9J29uSXRlbVRhcCc+IFxuICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgIDxMYWJlbCA6dGV4dD0ncHJvZHVjdC50b3BpYycvPlxuICAgICAgICA8TGFiZWwgOnRleHQ9XCJgcHJpY2U6ICR7cHJvZHVjdC5jb3N0fWBcIi8+XG4gICAgICAgIDxMYWJlbCA6dGV4dD1cImBzcGFjZXM6ICR7cHJvZHVjdC5zcGFjZXN9YFwiLz5cbiAgICAgICAgPExhYmVsIDp0ZXh0PVwiYHNwYWNlczogJHtwcm9kdWN0LmxvY2F0aW9ufWBcIi8+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgPC92LXRlbXBsYXRlPlxuICAgIDwvTGlzdFZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb2R1Y3RzOiBbXG4gICAgICAgICAgICAgICAgeyB0b3BpYzogXCJFbmdsaXNoXCIsIGNvc3Q6IDUsIHNwYWNlczogMTAsIGxvY2F0aW9uOiBcIk5XMVwiIH0sXG4gICAgICAgICAgICAgICAgeyB0b3BpYzogXCJGcmVuY2hcIiwgY29zdDogNSwgc3BhY2VzOiAxMCwgbG9jYXRpb246IFwiTlcxXCIgfVxuICAgICAgICAgICAgXSxcbiAgICAgICB9O1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbkl0ZW1UYXAoZXZlbnQpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiQWRkZWQgdG8gY2FydDogXCIgKyBldmVudC5pdGVtLm5hbWUpO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnYWRkUHJvZHVjdCcsIGV2ZW50Lml0ZW0pO1xuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIkxpc3RWaWV3XCIsXG4gICAge1xuICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5wcm9kdWN0cywgXCIrYWxpYXNcIjogXCJwcm9kdWN0XCIgfSxcbiAgICAgIG9uOiB7IGl0ZW1UYXA6IF92bS5vbkl0ZW1UYXAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgdmFyIHByb2R1Y3QgPSByZWYucHJvZHVjdFxuICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBwcm9kdWN0LnRvcGljIH0gfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJwcmljZTogXCIgKyBwcm9kdWN0LmNvc3QgfSB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBcInNwYWNlczogXCIgKyBwcm9kdWN0LnNwYWNlcyB9IH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwic3BhY2VzOiBcIiArIHByb2R1Y3QubG9jYXRpb24gfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXSlcbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9