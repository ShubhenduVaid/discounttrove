"use strict";
exports.id = 363;
exports.ids = [363];
exports.modules = {

/***/ 2363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": () => (/* reexport */ HEADER_HEIGHT),
  "h": () => (/* reexport */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/templates/header/header.tsx



const HEADER_HEIGHT = 60;
const Header = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
        as: "nav",
        justifyContent: "space-between",
        align: "center",
        pl: {
            base: 4,
            md: 6,
            lg: 6
        },
        pr: {
            base: 4,
            md: 6,
            lg: 6
        },
        height: `${HEADER_HEIGHT}px`,
        zIndex: "2",
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
            href: "/",
            title: "common.homepage",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    display: {
                        base: "none",
                        md: "block",
                        lg: "block"
                    },
                    as: "button",
                    title: "common.logoImageAltText",
                    children: "DiscountTrove"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    display: {
                        base: "block",
                        md: "none",
                        lg: "none"
                    },
                    as: "button",
                    title: "common.logoImageAltText",
                    children: "DiscountTrove"
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/components/templates/header/index.ts



/***/ })

};
;