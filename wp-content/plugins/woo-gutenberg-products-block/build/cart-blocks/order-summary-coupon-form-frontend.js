(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[27],{111:function(e,o,t){"use strict";var n=t(0),c=t(56),a=t(4),s=t.n(a),r=t(79);t(132),o.a=({className:e,showSpinner:o=!1,children:t,variant:a="contained",...p})=>{const l=s()("wc-block-components-button","wp-element-button",e,a,{"wc-block-components-button--loading":o});return Object(n.createElement)(c.a,{className:l,...p},o&&Object(n.createElement)(r.a,null),Object(n.createElement)("span",{className:"wc-block-components-button__text"},t))}},132:function(e,o){},314:function(e,o,t){"use strict";t.d(o,"a",(function(){return l}));var n=t(1),c=t(5),a=t(3),s=t(22),r=t(11),p=t(72);const l=(e="")=>{const{cartCoupons:o,cartIsLoading:t}=Object(p.a)(),{createErrorNotice:l}=Object(c.useDispatch)("core/notices"),{createNotice:u}=Object(c.useDispatch)("core/notices"),{setValidationErrors:i}=Object(c.useDispatch)(a.VALIDATION_STORE_KEY),{isApplyingCoupon:b,isRemovingCoupon:m}=Object(c.useSelect)((e=>{const o=e(a.CART_STORE_KEY);return{isApplyingCoupon:o.isApplyingCoupon(),isRemovingCoupon:o.isRemovingCoupon()}}),[l,u]),{applyCoupon:d,removeCoupon:O}=Object(c.useDispatch)(a.CART_STORE_KEY);return{appliedCoupons:o,isLoading:t,applyCoupon:o=>d(o).then((()=>(Object(r.applyCheckoutFilter)({filterName:"showApplyCouponNotice",defaultValue:!0,arg:{couponCode:o,context:e}})&&u("info",Object(n.sprintf)(/* translators: %s coupon code. */
Object(n.__)('Coupon code "%s" has been applied to your cart.',"woo-gutenberg-products-block"),o),{id:"coupon-form",type:"snackbar",context:e}),Promise.resolve(!0)))).catch((e=>(i({coupon:{message:Object(s.decodeEntities)(e.message),hidden:!1}}),Promise.resolve(!1)))),removeCoupon:o=>O(o).then((()=>(Object(r.applyCheckoutFilter)({filterName:"showRemoveCouponNotice",defaultValue:!0,arg:{couponCode:o,context:e}})&&u("info",Object(n.sprintf)(/* translators: %s coupon code. */
Object(n.__)('Coupon code "%s" has been removed from your cart.',"woo-gutenberg-products-block"),o),{id:"coupon-form",type:"snackbar",context:e}),Promise.resolve(!0)))).catch((o=>(l(o.message,{id:"coupon-form",context:e}),Promise.resolve(!1)))),isApplyingCoupon:b,isRemovingCoupon:m}}},388:function(e,o){},452:function(e,o,t){"use strict";var n=t(0),c=t(1),a=t(111),s=t(145),r=t(10),p=t(11),l=t(5),u=t(3),i=t(4),b=t.n(i);t(388),o.a=Object(r.withInstanceId)((({instanceId:e,isLoading:o=!1,onSubmit:t,displayCouponForm:r=!1})=>{const[i,m]=Object(n.useState)(""),[d,O]=Object(n.useState)(!r),g=`wc-block-components-totals-coupon__input-${e}`,_=b()("wc-block-components-totals-coupon__content",{"screen-reader-text":d}),{validationErrorId:j}=Object(l.useSelect)((e=>({validationErrorId:e(u.VALIDATION_STORE_KEY).getValidationErrorId(g)})));return Object(n.createElement)("div",{className:"wc-block-components-totals-coupon"},d?Object(n.createElement)("a",{role:"button",href:"#wc-block-components-totals-coupon__form",className:"wc-block-components-totals-coupon-link","aria-label":Object(c.__)("Add a coupon","woo-gutenberg-products-block"),onClick:e=>{e.preventDefault(),O(!1)}},Object(c.__)("Add a coupon","woo-gutenberg-products-block")):Object(n.createElement)(s.a,{screenReaderLabel:Object(c.__)("Applying coupon…","woo-gutenberg-products-block"),isLoading:o,showSpinner:!1},Object(n.createElement)("div",{className:_},Object(n.createElement)("form",{className:"wc-block-components-totals-coupon__form",id:"wc-block-components-totals-coupon__form"},Object(n.createElement)(p.ValidatedTextInput,{id:g,errorId:"coupon",className:"wc-block-components-totals-coupon__input",label:Object(c.__)("Enter code","woo-gutenberg-products-block"),value:i,ariaDescribedBy:j,onChange:e=>{m(e)},focusOnMount:!0,validateOnMount:!1,showError:!1}),Object(n.createElement)(a.a,{className:"wc-block-components-totals-coupon__button",disabled:o||!i,showSpinner:o,onClick:e=>{e.preventDefault(),void 0!==t?t(i).then((e=>{e&&(m(""),O(!0))})):(m(""),O(!0))},type:"submit"},Object(c.__)("Apply","woo-gutenberg-products-block"))),Object(n.createElement)(p.ValidationInputError,{propertyName:"coupon",elementId:g}))))}))},528:function(e,o,t){"use strict";t.r(o);var n=t(0),c=t(452),a=t(314),s=t(2),r=t(11);o.default=({className:e})=>{const o=Object(s.getSetting)("couponsEnabled",!0),{applyCoupon:t,isApplyingCoupon:p}=Object(a.a)("wc/cart");return o?Object(n.createElement)(r.TotalsWrapper,{className:e},Object(n.createElement)(c.a,{onSubmit:t,isLoading:p})):null}}}]);