"use strict";
(() => {
var exports = {};
exports.id = 164;
exports.ids = [164];
exports.modules = {

/***/ 520:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var next_absolute_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5506);
/* harmony import */ var next_absolute_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_absolute_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_sitemap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4279);
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6530);
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(urijs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_lib_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4416);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sitemap__WEBPACK_IMPORTED_MODULE_1__]);
next_sitemap__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const getServerSideProps = async (ctx)=>{
    const { locales , req  } = ctx;
    const { origin  } = next_absolute_url__WEBPACK_IMPORTED_MODULE_0___default()(req);
    ctx.res.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate=59");
    const promiseArr = locales?.map((locale)=>_src_lib_client__WEBPACK_IMPORTED_MODULE_3__/* .client.sitemapPages */ .L.sitemapPages({
            locale
        })).filter(Boolean) || [];
    const dataPerLocale = await Promise.all(promiseArr);
    const fields = dataPerLocale.map((localeData, index)=>Object.values(localeData).flatMap((pageCollection)=>pageCollection?.items.map((item)=>{
                const localeForUrl = locales?.[index] === ctx.defaultLocale ? undefined : locales?.[index];
                const url = new (urijs__WEBPACK_IMPORTED_MODULE_2___default())(origin).segment([
                    localeForUrl || "",
                    item?.slug || ""
                ]).toString();
                return item && !item.seoFields?.excludeFromSitemap ? {
                    loc: url,
                    lastmod: item.sys.publishedAt
                } : undefined;
            }))).flat().filter(Boolean);
    return (0,next_sitemap__WEBPACK_IMPORTED_MODULE_1__.getServerSideSitemap)(ctx, fields);
};
const Sitemap = ()=>{
    return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sitemap);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5805:
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ 825:
/***/ ((module) => {

module.exports = require("graphql-tag");

/***/ }),

/***/ 5506:
/***/ ((module) => {

module.exports = require("next-absolute-url");

/***/ }),

/***/ 6530:
/***/ ((module) => {

module.exports = require("urijs");

/***/ }),

/***/ 4279:
/***/ ((module) => {

module.exports = import("next-sitemap");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [416], () => (__webpack_exec__(520)));
module.exports = __webpack_exports__;

})();