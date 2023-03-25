"use strict";
exports.id = 416;
exports.ids = [416];
exports.modules = {

/***/ 4416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ client)
});

// EXTERNAL MODULE: external "graphql-request"
var external_graphql_request_ = __webpack_require__(5805);
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(825);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);
;// CONCATENATED MODULE: ./src/lib/__generated/sdk.ts

var AssetOrder;
(function(AssetOrder) {
    AssetOrder["ContentTypeAsc"] = "contentType_ASC";
    AssetOrder["ContentTypeDesc"] = "contentType_DESC";
    AssetOrder["FileNameAsc"] = "fileName_ASC";
    AssetOrder["FileNameDesc"] = "fileName_DESC";
    AssetOrder["HeightAsc"] = "height_ASC";
    AssetOrder["HeightDesc"] = "height_DESC";
    AssetOrder["SizeAsc"] = "size_ASC";
    AssetOrder["SizeDesc"] = "size_DESC";
    AssetOrder["SysFirstPublishedAtAsc"] = "sys_firstPublishedAt_ASC";
    AssetOrder["SysFirstPublishedAtDesc"] = "sys_firstPublishedAt_DESC";
    AssetOrder["SysIdAsc"] = "sys_id_ASC";
    AssetOrder["SysIdDesc"] = "sys_id_DESC";
    AssetOrder["SysPublishedAtAsc"] = "sys_publishedAt_ASC";
    AssetOrder["SysPublishedAtDesc"] = "sys_publishedAt_DESC";
    AssetOrder["SysPublishedVersionAsc"] = "sys_publishedVersion_ASC";
    AssetOrder["SysPublishedVersionDesc"] = "sys_publishedVersion_DESC";
    AssetOrder["UrlAsc"] = "url_ASC";
    AssetOrder["UrlDesc"] = "url_DESC";
    AssetOrder["WidthAsc"] = "width_ASC";
    AssetOrder["WidthDesc"] = "width_DESC";
})(AssetOrder || (AssetOrder = {}));
var ComponentSeoOrder;
(function(ComponentSeoOrder) {
    ComponentSeoOrder["CanonicalUrlAsc"] = "canonicalUrl_ASC";
    ComponentSeoOrder["CanonicalUrlDesc"] = "canonicalUrl_DESC";
    ComponentSeoOrder["InternalNameAsc"] = "internalName_ASC";
    ComponentSeoOrder["InternalNameDesc"] = "internalName_DESC";
    ComponentSeoOrder["NofollowAsc"] = "nofollow_ASC";
    ComponentSeoOrder["NofollowDesc"] = "nofollow_DESC";
    ComponentSeoOrder["NoindexAsc"] = "noindex_ASC";
    ComponentSeoOrder["NoindexDesc"] = "noindex_DESC";
    ComponentSeoOrder["PageTitleAsc"] = "pageTitle_ASC";
    ComponentSeoOrder["PageTitleDesc"] = "pageTitle_DESC";
    ComponentSeoOrder["SysFirstPublishedAtAsc"] = "sys_firstPublishedAt_ASC";
    ComponentSeoOrder["SysFirstPublishedAtDesc"] = "sys_firstPublishedAt_DESC";
    ComponentSeoOrder["SysIdAsc"] = "sys_id_ASC";
    ComponentSeoOrder["SysIdDesc"] = "sys_id_DESC";
    ComponentSeoOrder["SysPublishedAtAsc"] = "sys_publishedAt_ASC";
    ComponentSeoOrder["SysPublishedAtDesc"] = "sys_publishedAt_DESC";
    ComponentSeoOrder["SysPublishedVersionAsc"] = "sys_publishedVersion_ASC";
    ComponentSeoOrder["SysPublishedVersionDesc"] = "sys_publishedVersion_DESC";
})(ComponentSeoOrder || (ComponentSeoOrder = {}));
var EntryOrder;
(function(EntryOrder) {
    EntryOrder["SysFirstPublishedAtAsc"] = "sys_firstPublishedAt_ASC";
    EntryOrder["SysFirstPublishedAtDesc"] = "sys_firstPublishedAt_DESC";
    EntryOrder["SysIdAsc"] = "sys_id_ASC";
    EntryOrder["SysIdDesc"] = "sys_id_DESC";
    EntryOrder["SysPublishedAtAsc"] = "sys_publishedAt_ASC";
    EntryOrder["SysPublishedAtDesc"] = "sys_publishedAt_DESC";
    EntryOrder["SysPublishedVersionAsc"] = "sys_publishedVersion_ASC";
    EntryOrder["SysPublishedVersionDesc"] = "sys_publishedVersion_DESC";
})(EntryOrder || (EntryOrder = {}));
var ImageFormat;
(function(ImageFormat) {
    ImageFormat["Avif"] = "AVIF";
    ImageFormat[/** JPG image format. */ "Jpg"] = "JPG";
    ImageFormat[/**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */ "JpgProgressive"] = "JPG_PROGRESSIVE";
    ImageFormat[/** PNG image format */ "Png"] = "PNG";
    ImageFormat[/**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */ "Png8"] = "PNG8";
    ImageFormat[/** WebP image format. */ "Webp"] = "WEBP";
})(ImageFormat || (ImageFormat = {}));
var ImageResizeFocus;
(function(ImageResizeFocus) {
    ImageResizeFocus[/** Focus the resizing on the bottom. */ "Bottom"] = "BOTTOM";
    ImageResizeFocus[/** Focus the resizing on the bottom left. */ "BottomLeft"] = "BOTTOM_LEFT";
    ImageResizeFocus[/** Focus the resizing on the bottom right. */ "BottomRight"] = "BOTTOM_RIGHT";
    ImageResizeFocus[/** Focus the resizing on the center. */ "Center"] = "CENTER";
    ImageResizeFocus[/** Focus the resizing on the largest face. */ "Face"] = "FACE";
    ImageResizeFocus[/** Focus the resizing on the area containing all the faces. */ "Faces"] = "FACES";
    ImageResizeFocus[/** Focus the resizing on the left. */ "Left"] = "LEFT";
    ImageResizeFocus[/** Focus the resizing on the right. */ "Right"] = "RIGHT";
    ImageResizeFocus[/** Focus the resizing on the top. */ "Top"] = "TOP";
    ImageResizeFocus[/** Focus the resizing on the top left. */ "TopLeft"] = "TOP_LEFT";
    ImageResizeFocus[/** Focus the resizing on the top right. */ "TopRight"] = "TOP_RIGHT";
})(ImageResizeFocus || (ImageResizeFocus = {}));
var ImageResizeStrategy;
(function(ImageResizeStrategy) {
    ImageResizeStrategy[/** Crops a part of the original image to fit into the specified dimensions. */ "Crop"] = "CROP";
    ImageResizeStrategy[/** Resizes the image to the specified dimensions, cropping the image if needed. */ "Fill"] = "FILL";
    ImageResizeStrategy[/** Resizes the image to fit into the specified dimensions. */ "Fit"] = "FIT";
    ImageResizeStrategy[/**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */ "Pad"] = "PAD";
    ImageResizeStrategy[/** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */ "Scale"] = "SCALE";
    ImageResizeStrategy[/** Creates a thumbnail from the image. */ "Thumb"] = "THUMB";
})(ImageResizeStrategy || (ImageResizeStrategy = {}));
var PageLandingOrder;
(function(PageLandingOrder) {
    PageLandingOrder["HeroBannerHeadlineColorAsc"] = "heroBannerHeadlineColor_ASC";
    PageLandingOrder["HeroBannerHeadlineColorDesc"] = "heroBannerHeadlineColor_DESC";
    PageLandingOrder["HeroBannerHeadlineAsc"] = "heroBannerHeadline_ASC";
    PageLandingOrder["HeroBannerHeadlineDesc"] = "heroBannerHeadline_DESC";
    PageLandingOrder["InternalNameAsc"] = "internalName_ASC";
    PageLandingOrder["InternalNameDesc"] = "internalName_DESC";
    PageLandingOrder["SysFirstPublishedAtAsc"] = "sys_firstPublishedAt_ASC";
    PageLandingOrder["SysFirstPublishedAtDesc"] = "sys_firstPublishedAt_DESC";
    PageLandingOrder["SysIdAsc"] = "sys_id_ASC";
    PageLandingOrder["SysIdDesc"] = "sys_id_DESC";
    PageLandingOrder["SysPublishedAtAsc"] = "sys_publishedAt_ASC";
    PageLandingOrder["SysPublishedAtDesc"] = "sys_publishedAt_DESC";
    PageLandingOrder["SysPublishedVersionAsc"] = "sys_publishedVersion_ASC";
    PageLandingOrder["SysPublishedVersionDesc"] = "sys_publishedVersion_DESC";
})(PageLandingOrder || (PageLandingOrder = {}));
var PageProductOrder;
(function(PageProductOrder) {
    PageProductOrder["InternalNameAsc"] = "internalName_ASC";
    PageProductOrder["InternalNameDesc"] = "internalName_DESC";
    PageProductOrder["NameAsc"] = "name_ASC";
    PageProductOrder["NameDesc"] = "name_DESC";
    PageProductOrder["PriceAsc"] = "price_ASC";
    PageProductOrder["PriceDesc"] = "price_DESC";
    PageProductOrder["SlugAsc"] = "slug_ASC";
    PageProductOrder["SlugDesc"] = "slug_DESC";
    PageProductOrder["SysFirstPublishedAtAsc"] = "sys_firstPublishedAt_ASC";
    PageProductOrder["SysFirstPublishedAtDesc"] = "sys_firstPublishedAt_DESC";
    PageProductOrder["SysIdAsc"] = "sys_id_ASC";
    PageProductOrder["SysIdDesc"] = "sys_id_DESC";
    PageProductOrder["SysPublishedAtAsc"] = "sys_publishedAt_ASC";
    PageProductOrder["SysPublishedAtDesc"] = "sys_publishedAt_DESC";
    PageProductOrder["SysPublishedVersionAsc"] = "sys_publishedVersion_ASC";
    PageProductOrder["SysPublishedVersionDesc"] = "sys_publishedVersion_DESC";
    PageProductOrder["UrlAsc"] = "url_ASC";
    PageProductOrder["UrlDesc"] = "url_DESC";
})(PageProductOrder || (PageProductOrder = {}));
const ImageFieldsFragmentDoc = (external_graphql_tag_default())`
    fragment ImageFields on Asset {
  __typename
  sys {
    id
  }
  title
  description
  width
  height
  url
  contentType
}
    `;
const SeoFieldsFragmentDoc = (external_graphql_tag_default())`
    fragment SeoFields on ComponentSeo {
  __typename
  pageTitle
  pageDescription
  canonicalUrl
  nofollow
  noindex
  shareImagesCollection(limit: 3, locale: $locale) {
    items {
      ...ImageFields
    }
  }
}
    `;
const BasePageProductFieldsFragmentDoc = (external_graphql_tag_default())`
    fragment BasePageProductFields on PageProduct {
  __typename
  sys {
    id
    spaceId
  }
  internalName
  slug
  seoFields {
    ...SeoFields
  }
  name
  url
  description
  price
  featuredProductImage {
    ...ImageFields
  }
  productImagesCollection(limit: 10) {
    items {
      ...ImageFields
    }
  }
}
    `;
const PageProductFieldsFragmentDoc = (external_graphql_tag_default())`
    fragment PageProductFields on PageProduct {
  ...BasePageProductFields
  relatedProductsCollection(limit: 10) {
    items {
      ...BasePageProductFields
    }
  }
}
    `;
const PageLandingFieldsFragmentDoc = (external_graphql_tag_default())`
    fragment PageLandingFields on PageLanding {
  __typename
  sys {
    id
    spaceId
  }
  internalName
  seoFields {
    ...SeoFields
  }
  heroBannerHeadline
  heroBannerHeadlineColor
  heroBannerImage {
    ...ImageFields
  }
  productsCollection(limit: 10) {
    items {
      ...PageProductFields
    }
  }
}
    `;
const SitemapPagesFieldsFragmentDoc = (external_graphql_tag_default())`
    fragment sitemapPagesFields on Query {
  pageProductCollection(limit: 100, locale: $locale) {
    items {
      slug
      sys {
        publishedAt
      }
    }
  }
  pageLandingCollection(limit: 1, locale: $locale) {
    items {
      sys {
        publishedAt
      }
    }
  }
}
    `;
const PageLandingDocument = (external_graphql_tag_default())`
    query pageLanding($locale: String, $preview: Boolean) {
  pageLandingCollection(limit: 1, locale: $locale, preview: $preview) {
    items {
      ...PageLandingFields
    }
  }
}
    ${PageLandingFieldsFragmentDoc}
${SeoFieldsFragmentDoc}
${ImageFieldsFragmentDoc}
${PageProductFieldsFragmentDoc}
${BasePageProductFieldsFragmentDoc}`;
const PageLandingCollectionDocument = (external_graphql_tag_default())`
    query pageLandingCollection($locale: String, $preview: Boolean) {
  pageLandingCollection(limit: 100, locale: $locale, preview: $preview) {
    items {
      ...PageLandingFields
    }
  }
}
    ${PageLandingFieldsFragmentDoc}
${SeoFieldsFragmentDoc}
${ImageFieldsFragmentDoc}
${PageProductFieldsFragmentDoc}
${BasePageProductFieldsFragmentDoc}`;
const PageProductDocument = (external_graphql_tag_default())`
    query pageProduct($slug: String!, $locale: String, $preview: Boolean) {
  pageProductCollection(
    limit: 1
    where: {slug: $slug}
    locale: $locale
    preview: $preview
  ) {
    items {
      ...PageProductFields
    }
  }
}
    ${PageProductFieldsFragmentDoc}
${BasePageProductFieldsFragmentDoc}
${SeoFieldsFragmentDoc}
${ImageFieldsFragmentDoc}`;
const PageProductCollectionDocument = (external_graphql_tag_default())`
    query pageProductCollection($locale: String, $preview: Boolean) {
  pageProductCollection(limit: 100, locale: $locale, preview: $preview) {
    items {
      ...PageProductFields
    }
  }
}
    ${PageProductFieldsFragmentDoc}
${BasePageProductFieldsFragmentDoc}
${SeoFieldsFragmentDoc}
${ImageFieldsFragmentDoc}`;
const SitemapPagesDocument = (external_graphql_tag_default())`
    query sitemapPages($locale: String!) {
  ...sitemapPagesFields
}
    ${SitemapPagesFieldsFragmentDoc}`;
const defaultWrapper = (action, _operationName, _operationType)=>action();
function getSdk(client, withWrapper = defaultWrapper) {
    return {
        pageLanding (variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders)=>client.request(PageLandingDocument, variables, {
                    ...requestHeaders,
                    ...wrappedRequestHeaders
                }), "pageLanding", "query");
        },
        pageLandingCollection (variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders)=>client.request(PageLandingCollectionDocument, variables, {
                    ...requestHeaders,
                    ...wrappedRequestHeaders
                }), "pageLandingCollection", "query");
        },
        pageProduct (variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders)=>client.request(PageProductDocument, variables, {
                    ...requestHeaders,
                    ...wrappedRequestHeaders
                }), "pageProduct", "query");
        },
        pageProductCollection (variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders)=>client.request(PageProductCollectionDocument, variables, {
                    ...requestHeaders,
                    ...wrappedRequestHeaders
                }), "pageProductCollection", "query");
        },
        sitemapPages (variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders)=>client.request(SitemapPagesDocument, variables, {
                    ...requestHeaders,
                    ...wrappedRequestHeaders
                }), "sitemapPages", "query");
        }
    };
}

;// CONCATENATED MODULE: ./codegen.ts
const endpointOverride = process.env.CONTENTFUL_GRAPHQL_ENDPOINT;
const productionEndpoint = "https://graphql.contentful.com/content/v1/spaces";
const endpoint = `${endpointOverride || productionEndpoint}/${process.env.CONTENTFUL_SPACE_ID}`;
const config = {
    overwrite: true,
    ignoreNoDocuments: true,
    schema: [
        {
            [endpoint || ""]: {
                headers: {
                    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
                }
            }
        }
    ],
    generates: {
        "src/lib/__generated/graphql.schema.json": {
            plugins: [
                "introspection"
            ]
        },
        "src/lib/__generated/graphql.schema.graphql": {
            plugins: [
                "schema-ast"
            ]
        },
        "src/lib/__generated/sdk.ts": {
            documents: [
                "src/lib/graphql/**/*.graphql"
            ],
            plugins: [
                "typescript",
                "typescript-operations",
                "typescript-graphql-request"
            ],
            config: {
                rawRequest: false,
                inlineFragmentTypes: "combine",
                skipTypename: false,
                exportFragmentSpreadSubTypes: true,
                dedupeFragments: true,
                preResolveTypes: true
            }
        }
    }
};
/* harmony default export */ const codegen = ((/* unused pure expression or super */ null && (config)));

;// CONCATENATED MODULE: ./src/lib/client.ts



const graphQlClient = new external_graphql_request_.GraphQLClient(endpoint, {
    headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
    }
});
const client = getSdk(graphQlClient);


/***/ })

};
;