"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5465:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ HeroBanner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_components_features_contentful_ctf_image_CtfImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6003);
/* harmony import */ var _src_components_templates_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2363);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const StyledBox = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box)`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }
`;
const HeroBanner = ({ // Tutorial: contentful-and-the-starter-template.md
// Uncomment the line below to make the Greeting field available to render
// greeting,
heroBannerHeadline , heroBannerHeadlineColor , heroBannerImage  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const headingRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const [headingVisible, setHeadingVisible] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const handleFontSize = ()=>{
            window.requestAnimationFrame(()=>{
                if (containerRef.current && headingRef.current) {
                    headingRef.current.style.display = "inline-block"; // In order to calculate the ratio for our font scaling, it needs to be inline, so it doesn't grab the full width of its parent.
                    // Retrieve the width of both the container and the heading element
                    const { width: containerWidth  } = containerRef.current.getBoundingClientRect();
                    const { width: headingWidth  } = headingRef.current.getBoundingClientRect();
                    // Retrieve some computed styles, that will be used to accurately remove any additional padding, margin and other layout altering properties from the container width
                    const headingComputedStyle = window.getComputedStyle(headingRef.current, null);
                    const headingFontSize = headingComputedStyle.getPropertyValue("font-size");
                    const headingLetterSpacing = headingComputedStyle.getPropertyValue("letter-spacing");
                    const containerComputedStyle = window.getComputedStyle(containerRef.current, null);
                    // Calculate the amount of pixels that need to be deducted from the raw container width
                    const containerWidthFluff = parseInt(containerComputedStyle.paddingLeft, 10) + parseInt(containerComputedStyle.paddingRight, 10) + Math.abs(parseInt(headingLetterSpacing, 10));
                    // Calculate the font-size based on its base times the scaling ratio
                    headingRef.current.style.fontSize = `calc(${headingFontSize} * ${(containerWidth - containerWidthFluff) / headingWidth})`;
                    setHeadingVisible(true);
                }
            });
        };
        handleFontSize(); // Runs the method once on init, and a second time after changing visibility so the heading size is corrected after initial calculation as a safeguard
        router.events.on("routeChangeComplete", handleFontSize);
        window.addEventListener("resize", handleFontSize);
        return ()=>{
            window.removeEventListener("resize", handleFontSize);
            router.events.off("routeChangeComplete", handleFontSize);
        };
    }, [
        headingVisible,
        router.events,
        router.query
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        position: "relative",
        gridRow: 2,
        gridColumn: 1,
        mt: `-${_src_components_templates_header__WEBPACK_IMPORTED_MODULE_7__/* .HEADER_HEIGHT */ .M}px`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledBox, {
                gridColumnStart: 2,
                zIndex: 0,
                gridArea: {
                    base: "1 / 1 / 2 / 2"
                },
                maxHeight: {
                    base: "50vh",
                    lg: "80vh"
                },
                children: heroBannerImage?.url && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_features_contentful_ctf_image_CtfImage__WEBPACK_IMPORTED_MODULE_6__/* .CtfImage */ .A, {
                    imageProps: {
                        sizes: "100vw"
                    },
                    ...heroBannerImage
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                flexDirection: "column",
                zIndex: 1,
                gridArea: {
                    base: "1 / 1 / 2 / 2"
                },
                overflow: "hidden",
                justifyContent: "flex-end",
                maxHeight: {
                    base: "50vh",
                    lg: "80vh"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
                    ref: containerRef,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                        initial: false,
                        animate: {
                            opacity: headingVisible ? 1 : 0
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                            ref: headingRef,
                            as: "h1",
                            letterSpacing: "-0.11em",
                            color: heroBannerHeadlineColor || "white",
                            transform: "translateY(0.33em)",
                            whiteSpace: "nowrap",
                            children: heroBannerHeadline
                        })
                    })
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6153:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* reexport safe */ _HeroBanner__WEBPACK_IMPORTED_MODULE_0__.y)
/* harmony export */ });
/* harmony import */ var _HeroBanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5465);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_HeroBanner__WEBPACK_IMPORTED_MODULE_0__]);
_HeroBanner__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6065:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_features_hero_banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6153);
/* harmony import */ var _src_components_features_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8208);
/* harmony import */ var _src_components_features_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1952);
/* harmony import */ var _src_lib_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4416);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_features_hero_banner__WEBPACK_IMPORTED_MODULE_2__]);
_src_components_features_hero_banner__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Page = ({ page  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            page.seoFields && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_features_seo__WEBPACK_IMPORTED_MODULE_4__/* .SeoFields */ .L, {
                ...page.seoFields
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_features_hero_banner__WEBPACK_IMPORTED_MODULE_2__/* .HeroBanner */ .y, {
                ...page
            }),
            page.productsCollection?.items && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                mt: {
                    base: 5,
                    md: 9,
                    lg: 16
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_features_product__WEBPACK_IMPORTED_MODULE_3__/* .ProductTileGrid */ .SB, {
                    title: "Trending now",
                    products: page.productsCollection.items
                })
            })
        ]
    });
};
const getServerSideProps = async ({ locale  })=>{
    try {
        const data = await _src_lib_client__WEBPACK_IMPORTED_MODULE_5__/* .client.pageLanding */ .L.pageLanding({
            locale
        });
        const page = data.pageLandingCollection?.items[0];
        if (!page) {
            return {
                notFound: true
            };
        }
        return {
            props: {
                page
            }
        };
    } catch  {
        return {
            notFound: true
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 9687:
/***/ ((module) => {

module.exports = require("@contentful/f36-icons");

/***/ }),

/***/ 1480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 5805:
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ 825:
/***/ ((module) => {

module.exports = require("graphql-tag");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6530:
/***/ ((module) => {

module.exports = require("urijs");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,675,416,500,363], () => (__webpack_exec__(6065)));
module.exports = __webpack_exports__;

})();