(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[50],{111:function(e,t,n){"use strict";var c=n(0),a=n(56),s=n(4),o=n.n(s),r=n(79);n(132),t.a=({className:e,showSpinner:t=!1,children:n,variant:s="contained",...i})=>{const l=o()("wc-block-components-button","wp-element-button",e,s,{"wc-block-components-button--loading":t});return Object(c.createElement)(a.a,{className:l,...i},t&&Object(c.createElement)(r.a,null),Object(c.createElement)("span",{className:"wc-block-components-button__text"},n))}},113:function(e,t){},132:function(e,t){},145:function(e,t,n){"use strict";var c=n(0),a=n(1),s=n(4),o=n.n(s),r=(n(219),n(79));t.a=({children:e,className:t,screenReaderLabel:n,showSpinner:s=!1,isLoading:i=!0})=>Object(c.createElement)("div",{className:o()(t,{"wc-block-components-loading-mask":i})},i&&s&&Object(c.createElement)(r.a,null),Object(c.createElement)("div",{className:o()({"wc-block-components-loading-mask__children":i}),"aria-hidden":i},e),i&&Object(c.createElement)("span",{className:"screen-reader-text"},n||Object(a.__)("Loading…","woo-gutenberg-products-block")))},147:function(e,t,n){"use strict";var c=n(0),a=n(4),s=n.n(a),o=n(1),r=n(76),i=n(222),l=(n(220),n(279)),d=n(9),p=Object(c.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(d.Path,{d:"M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"})),m=Object(c.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(d.Path,{fillRule:"evenodd",d:"M6.863 13.644L5 13.25h-.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H5L18 6.5h2V16h-2l-3.854-.815.026.008a3.75 3.75 0 01-7.31-1.549zm1.477.313a2.251 2.251 0 004.356.921l-4.356-.921zm-2.84-3.28L18.157 8h.343v6.5h-.343L5.5 11.823v-1.146z",clipRule:"evenodd"}));const u=e=>{switch(e){case"success":case"warning":case"info":case"default":return"polite";default:return"assertive"}},b=e=>{switch(e){case"success":return l.a;case"warning":case"info":case"error":return p;default:return m}};var h=n(111),g=n(24);t.a=({className:e,status:t="default",children:n,spokenMessage:a=n,onRemove:l=(()=>{}),isDismissible:d=!0,politeness:p=u(t),summary:m})=>(((e,t)=>{const n="string"==typeof e?e:Object(c.renderToString)(e);Object(c.useEffect)((()=>{n&&Object(g.speak)(n,t)}),[n,t])})(a,p),Object(c.createElement)("div",{className:s()(e,"wc-block-components-notice-banner","is-"+t,{"is-dismissible":d})},Object(c.createElement)(r.a,{icon:b(t)}),Object(c.createElement)("div",{className:"wc-block-components-notice-banner__content"},m&&Object(c.createElement)("p",{className:"wc-block-components-notice-banner__summary"},m),n),!!d&&Object(c.createElement)(h.a,{className:"wc-block-components-notice-banner__dismiss",icon:i.a,label:Object(o.__)("Dismiss this notice","woo-gutenberg-products-block"),onClick:e=>{"function"==typeof(null==e?void 0:e.preventDefault)&&e.preventDefault&&e.preventDefault(),l()},showTooltip:!1})))},18:function(e,t,n){"use strict";var c=n(0),a=n(4),s=n.n(a);t.a=({label:e,screenReaderLabel:t,wrapperElement:n,wrapperProps:a={}})=>{let o;const r=null!=e,i=null!=t;return!r&&i?(o=n||"span",a={...a,className:s()(a.className,"screen-reader-text")},Object(c.createElement)(o,{...a},t)):(o=n||c.Fragment,r&&i&&e!==t?Object(c.createElement)(o,{...a},Object(c.createElement)("span",{"aria-hidden":"true"},e),Object(c.createElement)("span",{className:"screen-reader-text"},t)):Object(c.createElement)(o,{...a},e))}},219:function(e,t){},220:function(e,t){},222:function(e,t,n){"use strict";var c=n(0),a=n(9);const s=Object(c.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(a.Path,{d:"M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"}));t.a=s},279:function(e,t,n){"use strict";var c=n(0),a=n(9);const s=Object(c.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(a.Path,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}));t.a=s},294:function(e,t,n){"use strict";var c=n(0),a=n(4),s=n.n(a),o=n(295);t.a=({checked:e,name:t,onChange:n,option:a,disabled:r=!1})=>{const{value:i,label:l,description:d,secondaryLabel:p,secondaryDescription:m}=a;return Object(c.createElement)("label",{className:s()("wc-block-components-radio-control__option",{"wc-block-components-radio-control__option-checked":e}),htmlFor:`${t}-${i}`},Object(c.createElement)("input",{id:`${t}-${i}`,className:"wc-block-components-radio-control__input",type:"radio",name:t,value:i,onChange:e=>n(e.target.value),checked:e,"aria-describedby":s()({[`${t}-${i}__label`]:l,[`${t}-${i}__secondary-label`]:p,[`${t}-${i}__description`]:d,[`${t}-${i}__secondary-description`]:m}),disabled:r}),Object(c.createElement)(o.a,{id:`${t}-${i}`,label:l,secondaryLabel:p,description:d,secondaryDescription:m}))}},295:function(e,t,n){"use strict";var c=n(0);t.a=({label:e,secondaryLabel:t,description:n,secondaryDescription:a,id:s})=>Object(c.createElement)("div",{className:"wc-block-components-radio-control__option-layout"},Object(c.createElement)("div",{className:"wc-block-components-radio-control__label-group"},e&&Object(c.createElement)("span",{id:s&&`${s}__label`,className:"wc-block-components-radio-control__label"},e),t&&Object(c.createElement)("span",{id:s&&`${s}__secondary-label`,className:"wc-block-components-radio-control__secondary-label"},t)),(n||a)&&Object(c.createElement)("div",{className:"wc-block-components-radio-control__description-group"},n&&Object(c.createElement)("span",{id:s&&`${s}__description`,className:"wc-block-components-radio-control__description"},n),a&&Object(c.createElement)("span",{id:s&&`${s}__secondary-description`,className:"wc-block-components-radio-control__secondary-description"},a)))},296:function(e,t,n){"use strict";var c=n(0),a=n(4),s=n.n(a);n(297),t.a=({children:e,className:t,headingLevel:n,...a})=>{const o=s()("wc-block-components-title",t),r=`h${n}`;return Object(c.createElement)(r,{className:o,...a},e)}},297:function(e,t){},298:function(e,t){},299:function(e,t,n){"use strict";var c=n(1);t.a=({defaultTitle:e=Object(c.__)("Step","woo-gutenberg-products-block"),defaultDescription:t=Object(c.__)("Step description text.","woo-gutenberg-products-block"),defaultShowStepNumber:n=!0})=>({title:{type:"string",default:e},description:{type:"string",default:t},showStepNumber:{type:"boolean",default:n}})},301:function(e,t,n){"use strict";var c=n(0),a=n(4),s=n.n(a),o=n(10),r=n(294);n(304);const i=({className:e="",id:t,selected:n="",onChange:a,options:l=[],disabled:d=!1})=>{const p=Object(o.useInstanceId)(i),m=t||p;return l.length?Object(c.createElement)("div",{className:s()("wc-block-components-radio-control",e)},l.map((e=>Object(c.createElement)(r.a,{key:`${m}-${e.value}`,name:`radio-control-${m}`,checked:e.value===n,option:e,onChange:t=>{a(t),"function"==typeof e.onChange&&e.onChange(t)},disabled:d})))):null};t.a=i},304:function(e,t){},314:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(1),a=n(5),s=n(3),o=n(22),r=n(11),i=n(72);const l=(e="")=>{const{cartCoupons:t,cartIsLoading:n}=Object(i.a)(),{createErrorNotice:l}=Object(a.useDispatch)("core/notices"),{createNotice:d}=Object(a.useDispatch)("core/notices"),{setValidationErrors:p}=Object(a.useDispatch)(s.VALIDATION_STORE_KEY),{isApplyingCoupon:m,isRemovingCoupon:u}=Object(a.useSelect)((e=>{const t=e(s.CART_STORE_KEY);return{isApplyingCoupon:t.isApplyingCoupon(),isRemovingCoupon:t.isRemovingCoupon()}}),[l,d]),{applyCoupon:b,removeCoupon:h}=Object(a.useDispatch)(s.CART_STORE_KEY);return{appliedCoupons:t,isLoading:n,applyCoupon:t=>b(t).then((()=>(Object(r.applyCheckoutFilter)({filterName:"showApplyCouponNotice",defaultValue:!0,arg:{couponCode:t,context:e}})&&d("info",Object(c.sprintf)(/* translators: %s coupon code. */
Object(c.__)('Coupon code "%s" has been applied to your cart.',"woo-gutenberg-products-block"),t),{id:"coupon-form",type:"snackbar",context:e}),Promise.resolve(!0)))).catch((e=>(p({coupon:{message:Object(o.decodeEntities)(e.message),hidden:!1}}),Promise.resolve(!1)))),removeCoupon:t=>h(t).then((()=>(Object(r.applyCheckoutFilter)({filterName:"showRemoveCouponNotice",defaultValue:!0,arg:{couponCode:t,context:e}})&&d("info",Object(c.sprintf)(/* translators: %s coupon code. */
Object(c.__)('Coupon code "%s" has been removed from your cart.',"woo-gutenberg-products-block"),t),{id:"coupon-form",type:"snackbar",context:e}),Promise.resolve(!0)))).catch((t=>(l(t.message,{id:"coupon-form",context:e}),Promise.resolve(!1)))),isApplyingCoupon:m,isRemovingCoupon:u}}},315:function(e,t){},320:function(e,t,n){"use strict";var c=n(0),a=n(4),s=n.n(a),o=n(296);n(298);const r=({title:e,stepHeadingContent:t})=>Object(c.createElement)("div",{className:"wc-block-components-checkout-step__heading"},Object(c.createElement)(o.a,{"aria-hidden":"true",className:"wc-block-components-checkout-step__title",headingLevel:"2"},e),!!t&&Object(c.createElement)("span",{className:"wc-block-components-checkout-step__heading-content"},t));t.a=({id:e,className:t,title:n,legend:a,description:o,children:i,disabled:l=!1,showStepNumber:d=!0,stepHeadingContent:p=(()=>{})})=>{const m=a||n?"fieldset":"div";return Object(c.createElement)(m,{className:s()(t,"wc-block-components-checkout-step",{"wc-block-components-checkout-step--with-step-number":d,"wc-block-components-checkout-step--disabled":l}),id:e,disabled:l},!(!a&&!n)&&Object(c.createElement)("legend",{className:"screen-reader-text"},a||n),!!n&&Object(c.createElement)(r,{title:n,stepHeadingContent:p()}),Object(c.createElement)("div",{className:"wc-block-components-checkout-step__container"},!!o&&Object(c.createElement)("p",{className:"wc-block-components-checkout-step__description"},o),Object(c.createElement)("div",{className:"wc-block-components-checkout-step__content"},i)))}},336:function(e,t,n){"use strict";var c=n(0),a=n(4),s=n.n(a);const o=e=>`wc-block-components-payment-method-icon wc-block-components-payment-method-icon--${e}`;var r=({id:e,src:t=null,alt:n=""})=>t?Object(c.createElement)("img",{className:o(e),src:t,alt:n}):null,i=n(29);const l=[{id:"alipay",alt:"Alipay",src:i.n+"payment-methods/alipay.svg"},{id:"amex",alt:"American Express",src:i.n+"payment-methods/amex.svg"},{id:"bancontact",alt:"Bancontact",src:i.n+"payment-methods/bancontact.svg"},{id:"diners",alt:"Diners Club",src:i.n+"payment-methods/diners.svg"},{id:"discover",alt:"Discover",src:i.n+"payment-methods/discover.svg"},{id:"eps",alt:"EPS",src:i.n+"payment-methods/eps.svg"},{id:"giropay",alt:"Giropay",src:i.n+"payment-methods/giropay.svg"},{id:"ideal",alt:"iDeal",src:i.n+"payment-methods/ideal.svg"},{id:"jcb",alt:"JCB",src:i.n+"payment-methods/jcb.svg"},{id:"laser",alt:"Laser",src:i.n+"payment-methods/laser.svg"},{id:"maestro",alt:"Maestro",src:i.n+"payment-methods/maestro.svg"},{id:"mastercard",alt:"Mastercard",src:i.n+"payment-methods/mastercard.svg"},{id:"multibanco",alt:"Multibanco",src:i.n+"payment-methods/multibanco.svg"},{id:"p24",alt:"Przelewy24",src:i.n+"payment-methods/p24.svg"},{id:"sepa",alt:"Sepa",src:i.n+"payment-methods/sepa.svg"},{id:"sofort",alt:"Sofort",src:i.n+"payment-methods/sofort.svg"},{id:"unionpay",alt:"Union Pay",src:i.n+"payment-methods/unionpay.svg"},{id:"visa",alt:"Visa",src:i.n+"payment-methods/visa.svg"},{id:"wechat",alt:"WeChat",src:i.n+"payment-methods/wechat.svg"}];var d=n(28);n(315),t.a=({icons:e=[],align:t="center",className:n})=>{const a=(e=>{const t={};return e.forEach((e=>{let n={};"string"==typeof e&&(n={id:e,alt:e,src:null}),"object"==typeof e&&(n={id:e.id||"",alt:e.alt||"",src:e.src||null}),n.id&&Object(d.a)(n.id)&&!t[n.id]&&(t[n.id]=n)})),Object.values(t)})(e);if(0===a.length)return null;const o=s()("wc-block-components-payment-method-icons",{"wc-block-components-payment-method-icons--align-left":"left"===t,"wc-block-components-payment-method-icons--align-right":"right"===t},n);return Object(c.createElement)("div",{className:o},a.map((e=>{const t={...e,...(n=e.id,l.find((e=>e.id===n))||{})};var n;return Object(c.createElement)(r,{key:"payment-method-icon-"+e.id,...t})})))}},384:function(e,t){},385:function(e,t,n){"use strict";var c=n(0),a=n(1),s=n(2),o=n(11),r=n(36);t.a=({isEditor:e,children:t})=>{const[n]=Object(c.useState)(""),[i]=Object(c.useState)(!1);if(i){let t=Object(a.__)("We are experiencing difficulties with this payment method. Please contact us for assistance.","woo-gutenberg-products-block");(e||s.CURRENT_USER_IS_ADMIN)&&(t=n||Object(a.__)("There was an error with this payment method. Please verify it's configured correctly.","woo-gutenberg-products-block"));const i=[{id:"0",content:t,isDismissible:!1,status:"error"}];return Object(c.createElement)(o.StoreNoticesContainer,{additionalNotices:i,context:r.d.PAYMENTS})}return Object(c.createElement)(c.Fragment,null,t)}},453:function(e,t){},454:function(e,t){},461:function(e,t,n){"use strict";n.d(t,"a",(function(){return T}));var c=n(1),a=n(38),s=n(0),o=n(4),r=n.n(o),i=n(9),l=Object(s.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(s.createElement)("g",{fill:"none",fillRule:"evenodd"},Object(s.createElement)("path",{d:"M0 0h24v24H0z"}),Object(s.createElement)("path",{fill:"#000",fillRule:"nonzero",d:"M17.3 8v1c1 .2 1.4.9 1.4 1.7h-1c0-.6-.3-1-1-1-.8 0-1.3.4-1.3.9 0 .4.3.6 1.4 1 1 .2 2 .6 2 1.9 0 .9-.6 1.4-1.5 1.5v1H16v-1c-.9-.1-1.6-.7-1.7-1.7h1c0 .6.4 1 1.3 1 1 0 1.2-.5 1.2-.8 0-.4-.2-.8-1.3-1.1-1.3-.3-2.1-.8-2.1-1.8 0-.9.7-1.5 1.6-1.6V8h1.3zM12 10v1H6v-1h6zm2-2v1H6V8h8zM2 4v16h20V4H2zm2 14V6h16v12H4z"}),Object(s.createElement)("path",{stroke:"#000",strokeLinecap:"round",d:"M6 16c2.6 0 3.9-3 1.7-3-2 0-1 3 1.5 3 1 0 1-.8 2.8-.8"}))),d=Object(s.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(s.createElement)(i.Path,{fillRule:"evenodd",d:"M18.646 9H20V8l-1-.5L12 4 5 7.5 4 8v1h14.646zm-3-1.5L12 5.677 8.354 7.5h7.292zm-7.897 9.44v-6.5h-1.5v6.5h1.5zm5-6.5v6.5h-1.5v-6.5h1.5zm5 0v6.5h-1.5v-6.5h1.5zm2.252 8.81c0 .414-.334.75-.748.75H4.752a.75.75 0 010-1.5h14.5a.75.75 0 01.749.75z",clipRule:"evenodd"})),p=Object(s.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(s.createElement)(i.Path,{d:"M3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zm-1.338 4.877c-.314.22-.412.452-.412.623 0 .171.098.403.412.623.312.218.783.377 1.338.377.825 0 1.605.233 2.198.648.59.414 1.052 1.057 1.052 1.852 0 .795-.461 1.438-1.052 1.852-.41.286-.907.486-1.448.582v.316a.75.75 0 01-1.5 0v-.316a3.64 3.64 0 01-1.448-.582c-.59-.414-1.052-1.057-1.052-1.852a.75.75 0 011.5 0c0 .171.098.403.412.623.312.218.783.377 1.338.377s1.026-.159 1.338-.377c.314-.22.412-.452.412-.623 0-.171-.098-.403-.412-.623-.312-.218-.783-.377-1.338-.377-.825 0-1.605-.233-2.198-.648-.59-.414-1.052-1.057-1.052-1.852 0-.795.461-1.438 1.052-1.852a3.64 3.64 0 011.448-.582V7.5a.75.75 0 011.5 0v.316c.54.096 1.039.296 1.448.582.59.414 1.052 1.057 1.052 1.852a.75.75 0 01-1.5 0c0-.171-.098-.403-.412-.623-.312-.218-.783-.377-1.338-.377s-1.026.159-1.338.377z"})),m=Object(s.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(s.createElement)(i.Path,{fillRule:"evenodd",d:"M5.5 9.5v-2h13v2h-13zm0 3v4h13v-4h-13zM4 7a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V7z",clipRule:"evenodd"})),u=n(76),b=n(28),h=n(19);n(384);const g={bank:d,bill:p,card:m,checkPayment:l};var v=({icon:e="",text:t=""})=>{const n=!!e,c=Object(s.useCallback)((e=>n&&Object(b.a)(e)&&Object(h.b)(g,e)),[n]),a=r()("wc-block-components-payment-method-label",{"wc-block-components-payment-method-label--with-icon":n});return Object(s.createElement)("span",{className:a},c(e)?Object(s.createElement)(u.a,{icon:g[e]}):e,t)},y=n(336),O=n(2),_=n(15),j=n.n(_),E=n(145),k=n(5),w=n(3),S=n(11),f=n(72),P=n(314),C=n(36),N=n(77),M=n(121),R=n(78);const A=(e,t)=>{const n=[],a=(t,n)=>{const c=n+"_tax",a=Object(h.b)(e,n)&&Object(b.a)(e[n])?parseInt(e[n],10):0;return{key:n,label:t,value:a,valueWithTax:a+(Object(h.b)(e,c)&&Object(b.a)(e[c])?parseInt(e[c],10):0)}};return n.push(a(Object(c.__)("Subtotal:","woo-gutenberg-products-block"),"total_items")),n.push(a(Object(c.__)("Fees:","woo-gutenberg-products-block"),"total_fees")),n.push(a(Object(c.__)("Discount:","woo-gutenberg-products-block"),"total_discount")),n.push({key:"total_tax",label:Object(c.__)("Taxes:","woo-gutenberg-products-block"),value:parseInt(e.total_tax,10),valueWithTax:parseInt(e.total_tax,10)}),t&&n.push(a(Object(c.__)("Shipping:","woo-gutenberg-products-block"),"total_shipping")),n};var x=n(94);const T=()=>{const{onCheckoutBeforeProcessing:e,onCheckoutValidationBeforeProcessing:t,onCheckoutAfterProcessingWithSuccess:n,onCheckoutAfterProcessingWithError:o,onSubmit:r,onCheckoutSuccess:i,onCheckoutFail:l,onCheckoutValidation:d}=Object(N.b)(),{isCalculating:p,isComplete:m,isIdle:u,isProcessing:b,customerId:h}=Object(k.useSelect)((e=>{const t=e(w.CHECKOUT_STORE_KEY);return{isComplete:t.isComplete(),isIdle:t.isIdle(),isProcessing:t.isProcessing(),customerId:t.getCustomerId(),isCalculating:t.isCalculating()}})),{paymentStatus:g,activePaymentMethod:_,shouldSavePayment:T}=Object(k.useSelect)((e=>{const t=e(w.PAYMENT_STORE_KEY);return{paymentStatus:{get isPristine(){return j()("isPristine",{since:"9.6.0",alternative:"isIdle",plugin:"WooCommerce Blocks",link:"https://github.com/woocommerce/woocommerce-blocks/pull/8110"}),t.isPaymentIdle()},isIdle:t.isPaymentIdle(),isStarted:t.isExpressPaymentStarted(),isProcessing:t.isPaymentProcessing(),get isFinished(){return j()("isFinished",{since:"9.6.0",plugin:"WooCommerce Blocks",link:"https://github.com/woocommerce/woocommerce-blocks/pull/8110"}),t.hasPaymentError()||t.isPaymentReady()},hasError:t.hasPaymentError(),get hasFailed(){return j()("hasFailed",{since:"9.6.0",plugin:"WooCommerce Blocks",link:"https://github.com/woocommerce/woocommerce-blocks/pull/8110"}),t.hasPaymentError()},get isSuccessful(){return j()("isSuccessful",{since:"9.6.0",plugin:"WooCommerce Blocks",link:"https://github.com/woocommerce/woocommerce-blocks/pull/8110"}),t.isPaymentReady()},isReady:t.isPaymentReady(),isDoingExpressPayment:t.isExpressPaymentMethodActive()},activePaymentMethod:t.getActivePaymentMethod(),shouldSavePayment:t.getShouldSavePaymentMethod()}})),{__internalSetExpressPaymentError:I}=Object(k.useDispatch)(w.PAYMENT_STORE_KEY),{onPaymentProcessing:D,onPaymentSetup:z}=Object(M.b)(),{shippingErrorStatus:$,shippingErrorTypes:L,onShippingRateSuccess:V,onShippingRateFail:Y,onShippingRateSelectSuccess:F,onShippingRateSelectFail:B}=Object(R.b)(),{shippingRates:H,isLoadingRates:K,selectedRates:W,isSelectingRate:q,selectShippingRate:G,needsShipping:U}=Object(x.a)(),{billingAddress:J,shippingAddress:Q}=Object(k.useSelect)((e=>e(w.CART_STORE_KEY).getCustomerData())),{setShippingAddress:X}=Object(k.useDispatch)(w.CART_STORE_KEY),{cartItems:Z,cartFees:ee,cartTotals:te,extensions:ne}=Object(f.a)(),{appliedCoupons:ce}=Object(P.a)(),ae=Object(s.useRef)(A(te,U)),se=Object(s.useRef)({label:Object(c.__)("Total","woo-gutenberg-products-block"),value:parseInt(te.total_price,10)});Object(s.useEffect)((()=>{ae.current=A(te,U),se.current={label:Object(c.__)("Total","woo-gutenberg-products-block"),value:parseInt(te.total_price,10)}}),[te,U]);const oe=Object(s.useCallback)(((e="")=>{j()("setExpressPaymentError should only be used by Express Payment Methods (using the provided onError handler).",{alternative:"",plugin:"woocommerce-gutenberg-products-block",link:"https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/4228"}),I(e)}),[I]);return{activePaymentMethod:_,billing:{appliedCoupons:ce,billingAddress:J,billingData:J,cartTotal:se.current,cartTotalItems:ae.current,currency:Object(a.getCurrencyFromPriceResponse)(te),customerId:h,displayPricesIncludingTax:Object(O.getSetting)("displayCartPricesIncludingTax",!1)},cartData:{cartItems:Z,cartFees:ee,extensions:ne},checkoutStatus:{isCalculating:p,isComplete:m,isIdle:u,isProcessing:b},components:{LoadingMask:E.a,PaymentMethodIcons:y.a,PaymentMethodLabel:v,ValidationInputError:S.ValidationInputError},emitResponse:{noticeContexts:C.d,responseTypes:C.e},eventRegistration:{onCheckoutAfterProcessingWithError:o,onCheckoutAfterProcessingWithSuccess:n,onCheckoutBeforeProcessing:e,onCheckoutValidationBeforeProcessing:t,onCheckoutSuccess:i,onCheckoutFail:l,onCheckoutValidation:d,onPaymentProcessing:D,onPaymentSetup:z,onShippingRateFail:Y,onShippingRateSelectFail:B,onShippingRateSelectSuccess:F,onShippingRateSuccess:V},onSubmit:r,paymentStatus:g,setExpressPaymentError:oe,shippingData:{isSelectingRate:q,needsShipping:U,selectedRates:W,setSelectedRates:G,setShippingAddress:X,shippingAddress:Q,shippingRates:H,shippingRatesLoading:K},shippingStatus:{shippingErrorStatus:$,shippingErrorTypes:L},shouldSavePayment:T}}},502:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(4),s=n.n(a),o=n(72),r=n(144),i=n(320),l=n(5),d=n(3),p=n(11),m=n(36),u=n(1),b=n(18),h=n(147);n(454);var g=()=>Object(c.createElement)(h.a,{isDismissible:!1,className:"wc-block-checkout__no-payment-methods-notice",status:"error"},Object(u.__)("There are no payment methods available. This may be an error on our side. Please contact us if you need any help placing your order.","woo-gutenberg-products-block")),v=n(461),y=n(73),O=n(57),_=n(10),j=n(294),E=Object(_.withInstanceId)((({className:e,instanceId:t,id:n,selected:a,onChange:o,options:r=[]})=>{const i=n||t;return r.length?Object(c.createElement)("div",{className:s()("wc-block-components-radio-control",e)},r.map((e=>{const t="object"==typeof e&&"content"in e,n=e.value===a;return Object(c.createElement)("div",{className:"wc-block-components-radio-control-accordion-option",key:e.value},Object(c.createElement)(j.a,{name:`radio-control-${i}`,checked:n,option:e,onChange:t=>{o(t),"function"==typeof e.onChange&&e.onChange(t)}}),t&&n&&Object(c.createElement)("div",{className:s()("wc-block-components-radio-control-accordion-content",{"wc-block-components-radio-control-accordion-content-hide":!n})},e.content))}))):null})),k=n(20),w=n(385),S=({children:e,showSaveOption:t})=>{const{isEditor:n}=Object(O.a)(),{shouldSavePaymentMethod:a,customerId:s}=Object(l.useSelect)((e=>{const t=e(d.PAYMENT_STORE_KEY),n=e(d.CHECKOUT_STORE_KEY);return{shouldSavePaymentMethod:t.getShouldSavePaymentMethod(),customerId:n.getCustomerId()}})),{__internalSetShouldSavePaymentMethod:o}=Object(l.useDispatch)(d.PAYMENT_STORE_KEY);return Object(c.createElement)(w.a,{isEditor:n},e,s>0&&t&&Object(c.createElement)(p.CheckboxControl,{className:"wc-block-components-payment-methods__save-card-info",label:Object(u.__)("Save payment information to my account for future purchases.","woo-gutenberg-products-block"),checked:a,onChange:()=>o(!a)}))},f=n(105),P=()=>{const{activeSavedToken:e,activePaymentMethod:t,isExpressPaymentMethodActive:n,savedPaymentMethods:a,availablePaymentMethods:o}=Object(l.useSelect)((e=>{const t=e(f.a);return{activeSavedToken:t.getActiveSavedToken(),activePaymentMethod:t.getActivePaymentMethod(),isExpressPaymentMethodActive:t.isExpressPaymentMethodActive(),savedPaymentMethods:t.getSavedPaymentMethods(),availablePaymentMethods:t.getAvailablePaymentMethods()}})),{__internalSetActivePaymentMethod:r}=Object(l.useDispatch)(f.a),i=Object(k.getPaymentMethods)(),{...d}=Object(v.a)(),{removeNotice:p}=Object(l.useDispatch)("core/notices"),{dispatchCheckoutEvent:u}=Object(y.a)(),{isEditor:b}=Object(O.a)(),h=Object.keys(o).map((e=>{const{edit:t,content:n,label:a,supports:s}=i[e],o=b?t:n;return{value:e,label:"string"==typeof a?a:Object(c.cloneElement)(a,{components:d.components}),name:`wc-saved-payment-method-token-${e}`,content:Object(c.createElement)(S,{showSaveOption:s.showSaveOption},Object(c.cloneElement)(o,{__internalSetActivePaymentMethod:r,...d}))}})),g=Object(c.useCallback)((e=>{r(e),p("wc-payment-error",m.d.PAYMENTS),u("set-active-payment-method",{value:e})}),[u,p,r]),_=0===Object.keys(a).length&&1===Object.keys(i).length,j=s()({"disable-radio-control":_});return n?null:Object(c.createElement)(E,{id:"wc-payment-method-options",className:j,selected:e?null:t,onChange:g,options:h})},C=n(301),N=n(37),M=(n(2),n(143)),R=n(149),A=n(108);const x="wc/store/cart",T=(Object(u.__)("Unable to get cart data from the API.","woo-gutenberg-products-block"),[]),I=[],D={},z={cartItemsPendingQuantity:[],cartItemsPendingDelete:[],cartData:{coupons:[],shippingRates:[],shippingAddress:{first_name:"",last_name:"",company:"",address_1:"",address_2:"",city:"",state:"",postcode:"",country:"",phone:""},billingAddress:{first_name:"",last_name:"",company:"",address_1:"",address_2:"",city:"",state:"",postcode:"",country:"",phone:"",email:""},items:[],itemsCount:0,itemsWeight:0,crossSells:[],needsShipping:!0,needsPayment:!1,hasCalculatedShipping:!0,fees:[],totals:{currency_code:"",currency_symbol:"",currency_minor_unit:2,currency_decimal_separator:".",currency_thousand_separator:",",currency_prefix:"",currency_suffix:"",total_items:"0",total_items_tax:"0",total_fees:"0",total_fees_tax:"0",total_discount:"0",total_discount_tax:"0",total_shipping:"0",total_shipping_tax:"0",total_price:"0",total_tax:"0",tax_lines:[]},errors:T,paymentMethods:[],paymentRequirements:[],extensions:D},metaData:{updatingCustomerData:!1,updatingSelectedRate:!1,applyingCoupon:"",removingCoupon:"",isCartDataStale:!1},errors:I},$=({method:e,expires:t})=>Object(u.sprintf)(/* translators: %1$s is referring to the payment method brand, %2$s is referring to the last 4 digits of the payment card, %3$s is referring to the expiry date.  */
Object(u.__)("%1$s ending in %2$s (expires %3$s)","woo-gutenberg-products-block"),e.brand,e.last4,t),L=({method:e})=>e.brand&&e.last4?Object(u.sprintf)(/* translators: %1$s is referring to the payment method brand, %2$s is referring to the last 4 digits of the payment card. */
Object(u.__)("%1$s ending in %2$s","woo-gutenberg-products-block"),e.brand,e.last4):Object(u.sprintf)(/* translators: %s is the name of the payment method gateway. */
Object(u.__)("Saved token for %s","woo-gutenberg-products-block"),e.gateway);var V=()=>{var e;const{activeSavedToken:t,activePaymentMethod:n,savedPaymentMethods:a}=Object(l.useSelect)((e=>{const t=e(d.PAYMENT_STORE_KEY);return{activeSavedToken:t.getActiveSavedToken(),activePaymentMethod:t.getActivePaymentMethod(),savedPaymentMethods:t.getSavedPaymentMethods()}})),{__internalSetActivePaymentMethod:s}=Object(l.useDispatch)(d.PAYMENT_STORE_KEY),o=(()=>{let e;if(Object(l.select)("core/editor")){const t={cartCoupons:A.a.coupons,cartItems:A.a.items,crossSellsProducts:A.a.cross_sells,cartFees:A.a.fees,cartItemsCount:A.a.items_count,cartItemsWeight:A.a.items_weight,cartNeedsPayment:A.a.needs_payment,cartNeedsShipping:A.a.needs_shipping,cartItemErrors:T,cartTotals:A.a.totals,cartIsLoading:!1,cartErrors:I,billingData:z.cartData.billingAddress,billingAddress:z.cartData.billingAddress,shippingAddress:z.cartData.shippingAddress,extensions:D,shippingRates:A.a.shipping_rates,isLoadingRates:!1,cartHasCalculatedShipping:A.a.has_calculated_shipping,paymentRequirements:A.a.payment_requirements,receiveCart:()=>{}};e={cart:t,cartTotals:t.cartTotals,cartNeedsShipping:t.cartNeedsShipping,billingData:t.billingAddress,billingAddress:t.billingAddress,shippingAddress:t.shippingAddress,selectedShippingMethods:Object(M.a)(t.shippingRates),paymentMethods:A.a.payment_methods,paymentRequirements:t.paymentRequirements}}else{const t=Object(l.select)(x),n=t.getCartData(),c=t.getCartErrors(),a=t.getCartTotals(),s=!t.hasFinishedResolution("getCartData"),o=t.isCustomerDataUpdating(),r=Object(M.a)(n.shippingRates);e={cart:{cartCoupons:n.coupons,cartItems:n.items,crossSellsProducts:n.crossSells,cartFees:n.fees,cartItemsCount:n.itemsCount,cartItemsWeight:n.itemsWeight,cartNeedsPayment:n.needsPayment,cartNeedsShipping:n.needsShipping,cartItemErrors:n.errors,cartTotals:a,cartIsLoading:s,cartErrors:c,billingData:Object(R.a)(n.billingAddress),billingAddress:Object(R.a)(n.billingAddress),shippingAddress:Object(R.a)(n.shippingAddress),extensions:n.extensions,shippingRates:n.shippingRates,isLoadingRates:o,cartHasCalculatedShipping:n.hasCalculatedShipping,paymentRequirements:n.paymentRequirements,receiveCart:Object(l.dispatch)(x).receiveCart},cartTotals:n.totals,cartNeedsShipping:n.needsShipping,billingData:n.billingAddress,billingAddress:n.billingAddress,shippingAddress:n.shippingAddress,selectedShippingMethods:r,paymentMethods:n.paymentMethods,paymentRequirements:n.paymentRequirements}}return e})(),r=Object(k.getPaymentMethods)(),i=Object(v.a)(),{removeNotice:p}=Object(l.useDispatch)("core/notices"),{dispatchCheckoutEvent:u}=Object(y.a)(),b=Object(c.useMemo)((()=>{const e=Object.keys(a),t=new Set(e.flatMap((e=>a[e].map((e=>e.method.gateway))))),n=Array.from(t).filter((e=>{var t;return null===(t=r[e])||void 0===t?void 0:t.canMakePayment(o)}));return e.flatMap((e=>a[e].map((t=>{if(!n.includes(t.method.gateway))return;const c="cc"===e||"echeck"===e,a=t.method.gateway;return{name:`wc-saved-payment-method-token-${a}`,label:c?$(t):L(t),value:t.tokenId.toString(),onChange:e=>{s(a,{token:e,payment_method:a,[`wc-${a}-payment-token`]:e.toString(),isSavedToken:!0}),p("wc-payment-error",m.d.PAYMENTS),u("set-active-payment-method",{paymentMethodSlug:a})}}})))).filter((e=>void 0!==e))}),[a,r,s,p,u,o]),h=t&&r[n]&&void 0!==(null===(e=r[n])||void 0===e?void 0:e.savedTokenComponent)&&!Object(N.a)(r[n].savedTokenComponent)?Object(c.cloneElement)(r[n].savedTokenComponent,{token:t,...i}):null;return b.length>0?Object(c.createElement)(c.Fragment,null,Object(c.createElement)(C.a,{id:"wc-payment-method-saved-tokens",selected:t,options:b,onChange:()=>{}}),h):null};n(453);var Y=()=>{const{paymentMethodsInitialized:e,availablePaymentMethods:t,savedPaymentMethods:n}=Object(l.useSelect)((e=>{const t=e(d.PAYMENT_STORE_KEY);return{paymentMethodsInitialized:t.paymentMethodsInitialized(),availablePaymentMethods:t.getAvailablePaymentMethods(),savedPaymentMethods:t.getSavedPaymentMethods()}}));return e&&0===Object.keys(t).length?Object(c.createElement)(g,null):Object(c.createElement)(c.Fragment,null,Object(c.createElement)(V,null),Object.keys(n).length>0&&Object(c.createElement)(b.a,{label:Object(u.__)("Use another payment method.","woo-gutenberg-products-block"),screenReaderLabel:Object(u.__)("Other available payment methods","woo-gutenberg-products-block"),wrapperElement:"p",wrapperProps:{className:["wc-block-components-checkout-step__description wc-block-components-checkout-step__description-payments-aligned"]}}),Object(c.createElement)(P,null))},F=()=>Object(c.createElement)(Y,null),B=n(299),H={...Object(B.a)({defaultTitle:Object(u.__)("Payment options","woo-gutenberg-products-block"),defaultDescription:""}),className:{type:"string",default:""},lock:{type:"object",default:{move:!0,remove:!0}}};t.default=Object(r.withFilteredAttributes)(H)((({title:e,description:t,showStepNumber:n,children:a,className:r})=>{const u=Object(l.useSelect)((e=>e(d.CHECKOUT_STORE_KEY).isProcessing())),{cartNeedsPayment:b}=Object(o.a)();return b?Object(c.createElement)(i.a,{id:"payment-method",disabled:u,className:s()("wc-block-checkout__payment-method",r),title:e,description:t,showStepNumber:n},Object(c.createElement)(p.StoreNoticesContainer,{context:m.d.PAYMENTS}),Object(c.createElement)(F,null),a):null}))},79:function(e,t,n){"use strict";var c=n(0);n(113),t.a=()=>Object(c.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"})}}]);