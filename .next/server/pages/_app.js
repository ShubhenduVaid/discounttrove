(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 187:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__spaceGrotesk_9e74e9', '__spaceGrotesk_Fallback_9e74e9'"},
	"className": "__className_9e74e9"
};


/***/ }),

/***/ 3535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app_page)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/@next/font/local/target.css?{"path":"src/pages/_app.page.tsx","import":"","arguments":[{"src":[{"path":"./utils/fonts/space-grotesk-v13-latin-300.woff","weight":"300","style":"normal"},{"path":"./utils/fonts/space-grotesk-v13-latin-300.woff2","weight":"300","style":"normal"},{"path":"./utils/fonts/space-grotesk-v13-latin-regular.woff","weight":"400","style":"normal"},{"path":"./utils/fonts/space-grotesk-v13-latin-regular.woff2","weight":"400","style":"normal"},{"path":"./utils/fonts/space-grotesk-v13-latin-500.woff","weight":"500","style":"normal"},{"path":"./utils/fonts/space-grotesk-v13-latin-500.woff2","weight":"500","style":"normal"},{"path":"./utils/fonts/space-grotesk-v13-latin-600.woff","weight":"600","style":"normal"},{"path":"./utils/fonts/space-grotesk-v13-latin-600.woff2","weight":"600","style":"normal"},{"path":"./utils/fonts/space-grotesk-v13-latin-700.woff","weight":"700","style":"normal"},{"path":"./utils/fonts/space-grotesk-v13-latin-700.woff2","weight":"700","style":"normal"}]}],"variableName":"spaceGrotesk"}
var space_grotesk_v13_latin_700_woff2_weight_700_style_normal_variableName_spaceGrotesk_ = __webpack_require__(187);
var space_grotesk_v13_latin_700_woff2_weight_700_style_normal_variableName_spaceGrotesk_default = /*#__PURE__*/__webpack_require__.n(space_grotesk_v13_latin_700_woff2_weight_700_style_normal_variableName_spaceGrotesk_);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/templates/footer/footer.tsx


const Footer = ()=>{
    const theme = (0,react_.useTheme)();
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        as: "footer",
        width: "full",
        py: {
            base: 10,
            lg: 16
        },
        mt: "auto",
        borderTop: "1px",
        borderColor: theme.f36.gray200,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    fontSize: "xl",
                    mb: 8,
                    children: "About Us"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    children: "Shop smart and save big on our discount product website! We offer a wide range of top-quality products at unbeatable prices."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    mb: 8,
                    children: "Don't miss out on the best deals – start browsing now!"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    children: "DiscountTrove \xa92023"
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/components/templates/footer/index.ts


// EXTERNAL MODULE: ./src/components/templates/header/index.ts + 1 modules
var header = __webpack_require__(2363);
;// CONCATENATED MODULE: ./src/components/templates/layout/layout.tsx





const Layout = ({ children  })=>{
    const router = (0,router_.useRouter)();
    const theme = (0,react_.useTheme)();
    const isHomePage = router.pathname === "/";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header/* Header */.h, {
                borderBottom: isHomePage ? "" : "1px",
                borderColor: isHomePage ? null : theme.f36.gray200
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                flexGrow: "1",
                flexDirection: "column",
                width: "100%",
                as: "main",
                pb: {
                    base: 8,
                    lg: 12
                },
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/templates/layout/index.ts


;// CONCATENATED MODULE: external "@contentful/f36-tokens"
const f36_tokens_namespaceObject = require("@contentful/f36-tokens");
var f36_tokens_default = /*#__PURE__*/__webpack_require__.n(f36_tokens_namespaceObject);
;// CONCATENATED MODULE: ./src/theme/components/heading.ts
const heading = {
    variants: {
        h2: {
            fontSize: {
                base: "1.75rem",
                lg: "2.25rem"
            },
            lineHeight: {
                base: 1.28571,
                lg: 1.33333
            }
        },
        h3: {
            fontSize: "1.25rem",
            lineHeight: 1.6
        }
    },
    baseStyle: {
        fontWeight: 600,
        fontSize: {
            base: "1.75rem",
            lg: "2.25rem"
        },
        lineHeight: {
            base: 1.28571,
            lg: 1.33333
        }
    },
    defaultProps: {
        as: "h2",
        size: null
    }
};

;// CONCATENATED MODULE: ./src/theme/components/text.ts
const text_text = {
    variants: {
        small: {
            fontSize: "0.75rem",
            lineHeight: 1.33333
        }
    },
    baseStyle: {
        fontSize: "0.875rem",
        lineHeight: 1.42857,
        fontWeight: 400
    }
};

;// CONCATENATED MODULE: ./src/theme/components/container.ts

const container = {
    baseStyle: {
        maxWidth: (f36_tokens_default()).contentWidthDefault
    }
};

;// CONCATENATED MODULE: ./src/theme/components/button.ts

const button_button = {
    variants: {
        primary: {
            backgroundColor: (f36_tokens_default()).blue500,
            color: (f36_tokens_default()).colorWhite,
            _hover: {
                backgroundColor: (f36_tokens_default()).blue600
            }
        }
    }
};

;// CONCATENATED MODULE: ./src/theme/components/input.ts

const input = {
    variants: {
        outline: {
            field: {
                borderColor: (f36_tokens_default()).gray200,
                backgroundColor: (f36_tokens_default()).colorWhite,
                fontWeight: 400
            }
        }
    },
    defaultProps: {
        variant: "outline"
    }
};

;// CONCATENATED MODULE: ./src/theme/components/index.ts






;// CONCATENATED MODULE: ./src/theme/global-style.ts

const globalStyle = {
    "html, body": {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        minHeight: "100%",
        color: (f36_tokens_default()).gray800,
        overflowX: "hidden"
    },
    "#__next": {
        display: "flex",
        flex: 1,
        flexDirection: "column"
    },
    body: {
        fontDisplay: "swap",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale"
    }
};

;// CONCATENATED MODULE: ./src/theme/theme.ts




const theme = (0,react_.extendTheme)({
    styles: {
        global: globalStyle
    },
    f36: (f36_tokens_default()),
    components: {
        Container: container,
        Button: button_button,
        Heading: heading,
        Text: text_text,
        Input: input
    }
});

;// CONCATENATED MODULE: ./src/theme/index.ts


;// CONCATENATED MODULE: ./src/pages/_app.page.tsx





const App = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
        theme: {
            ...theme,
            fonts: {
                heading: `${(space_grotesk_v13_latin_700_woff2_weight_700_style_normal_variableName_spaceGrotesk_default()).style.fontFamily}, ${theme.fonts.heading}`,
                body: `${(space_grotesk_v13_latin_700_woff2_weight_700_style_normal_variableName_spaceGrotesk_default()).style.fontFamily}, ${theme.fonts.body}`
            }
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
};
/* harmony default export */ const _app_page = (App);


/***/ }),

/***/ 8930:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,363], () => (__webpack_exec__(3535)));
module.exports = __webpack_exports__;

})();