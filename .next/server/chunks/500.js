"use strict";
exports.id = 500;
exports.ids = [500];
exports.modules = {

/***/ 6003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ CtfImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


const CtfImage = ({ url , width , height , title , imageProps  })=>{
    if (!url || !width || !height) return null;
    const blurURL = new URL(url);
    blurURL.searchParams.set("w", "10");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: url,
        width: width,
        height: height,
        alt: title || "",
        sizes: "(max-width: 1200px) 100vw, 50vw",
        placeholder: "blur",
        blurDataURL: blurURL.toString(),
        ...imageProps
    });
};


/***/ }),

/***/ 8208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f4": () => (/* reexport */ ProductDetails),
  "SB": () => (/* reexport */ ProductTileGrid)
});

// UNUSED EXPORTS: ProductTile

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "@contentful/f36-icons"
var f36_icons_ = __webpack_require__(9687);
// EXTERNAL MODULE: ./src/components/features/contentful/ctf-image/CtfImage.tsx
var CtfImage = __webpack_require__(6003);
;// CONCATENATED MODULE: ./src/components/features/contentful/ctf-image/index.ts


;// CONCATENATED MODULE: ./src/components/features/product/ProductDetails.tsx




const ProductDetails = ({ name , url , price , description , featuredProductImage , productImagesCollection  })=>{
    const theme = (0,react_.useTheme)();
    const handleClick = (url)=>{
        if (url) {
            window.open(url, "_blank");
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
        mt: {
            base: 6,
            lg: 16
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid, {
            templateColumns: "repeat(12, 1fr)",
            gap: {
                base: 5,
                lg: 12
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                    colSpan: {
                        base: 12,
                        lg: 7,
                        xl: 8
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        flexDirection: "column",
                        gap: {
                            base: 3,
                            lg: 5
                        },
                        children: [
                            featuredProductImage && /*#__PURE__*/ jsx_runtime_.jsx(react_.Center, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(CtfImage/* CtfImage */.A, {
                                    ...featuredProductImage
                                })
                            }),
                            productImagesCollection?.items && productImagesCollection.items.map((image)=>{
                                return image ? /*#__PURE__*/ jsx_runtime_.jsx(react_.Center, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CtfImage/* CtfImage */.A, {
                                        imageProps: {
                                            sizes: "(max-width: 1200px) 70vw, 100vw"
                                        },
                                        ...image
                                    }, image.sys.id)
                                }) : null;
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                    colSpan: {
                        base: 12,
                        lg: 5,
                        xl: 4
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                        width: "100%",
                        bg: theme.f36.gray200,
                        borderRadius: 4,
                        px: {
                            base: 4,
                            lg: 6
                        },
                        pt: {
                            base: 6,
                            lg: 6
                        },
                        pb: {
                            base: 6,
                            lg: 6
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                as: "h1",
                                variant: "h3",
                                children: name
                            }),
                            price && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                mt: 1,
                                fontSize: "2xl",
                                fontWeight: "500",
                                color: "#036FE3",
                                children: [
                                    "\xa3",
                                    price
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                mt: 5,
                                color: theme.f36.gray700,
                                children: description
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                                flexDirection: "row",
                                mt: 6,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                    onClick: ()=>handleClick(url),
                                    width: "100%",
                                    variant: "primary",
                                    rightIcon: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                        as: f36_icons_.ShoppingCartIcon,
                                        width: "18px",
                                        height: "18px",
                                        fill: "white",
                                        variant: "white"
                                    }),
                                    children: "Add to Cart"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/features/product/ProductTile.tsx




const ProductTile = ({ featuredProductImage , price , slug  })=>{
    return slug ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        as: (link_default()),
        href: slug,
        children: [
            featuredProductImage && /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                height: "90%",
                borderRadius: 4,
                overflow: "hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Center, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(CtfImage/* CtfImage */.A, {
                        ...featuredProductImage
                    })
                })
            }),
            price && /*#__PURE__*/ jsx_runtime_.jsx(react_.Center, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                    mt: 3,
                    fontSize: "lg",
                    fontWeight: "500",
                    children: [
                        "\xa3",
                        price
                    ]
                })
            })
        ]
    }) : null;
};

;// CONCATENATED MODULE: ./src/components/features/product/ProductTileGrid.tsx



const ProductTileGrid = ({ title , products  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
        children: [
            title && /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                as: "h2",
                mb: 3,
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                templateColumns: {
                    base: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)"
                },
                rowGap: {
                    base: 6,
                    lg: 6
                },
                columnGap: {
                    base: 4,
                    lg: 24
                },
                children: products.map((product, index)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                        children: product ? /*#__PURE__*/ jsx_runtime_.jsx(ProductTile, {
                            ...product
                        }) : null
                    }, index);
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/features/product/index.ts





/***/ }),

/***/ 1952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* reexport */ SeoFields)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "urijs"
var external_urijs_ = __webpack_require__(6530);
var external_urijs_default = /*#__PURE__*/__webpack_require__.n(external_urijs_);
;// CONCATENATED MODULE: ./src/components/features/seo/SeoFields.tsx




const generateUrl = (locale, slug)=>new (external_urijs_default())("http://localhost:3000/").segment([
        locale,
        slug
    ]).toString();
const SeoFields = ({ pageTitle , pageDescription , noindex , nofollow , canonicalUrl , shareImagesCollection  })=>{
    const { locale , locales , asPath  } = (0,router_.useRouter)();
    const url = generateUrl(locale || "", asPath);
    const languageAlternates = locales?.map((locale)=>({
            hrefLang: locale,
            href: generateUrl(locale, asPath)
        })) || [];
    return /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.NextSeo, {
        title: pageTitle || undefined,
        description: pageDescription || undefined,
        canonical: canonicalUrl || url || "",
        nofollow: nofollow || false,
        noindex: noindex || false,
        languageAlternates: languageAlternates,
        openGraph: {
            type: "website",
            locale: locale,
            url: url || "",
            title: pageTitle || undefined,
            description: pageDescription || undefined,
            images: shareImagesCollection?.items.map((item)=>({
                    url: item?.url || "",
                    width: item?.width || 0,
                    height: item?.height || 0,
                    alt: item?.description || "",
                    type: item?.contentType || ""
                }))
        },
        twitter: {
            site: url,
            cardType: "summary_large_image"
        }
    });
};

;// CONCATENATED MODULE: ./src/components/features/seo/index.ts



/***/ })

};
;