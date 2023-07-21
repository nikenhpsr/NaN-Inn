"use strict";
(() => {
var exports = {};
exports.id = 395;
exports.ids = [395];
exports.modules = {

/***/ 53524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 67096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 39491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 9886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/listings/[listingId]/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  DELETE: () => (DELETE),
  PUT: () => (PUT)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.9_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(36587);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.9_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(84862);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.9_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(30065);
// EXTERNAL MODULE: ./app/actions/getCurrentUser.ts + 1 modules
var getCurrentUser = __webpack_require__(91842);
// EXTERNAL MODULE: ./app/libs/prismadb.ts
var prismadb = __webpack_require__(91438);
;// CONCATENATED MODULE: ./app/api/listings/[listingId]/route.ts



async function DELETE(request, { params }) {
    const currentUser = await (0,getCurrentUser/* default */.Z)();
    if (!currentUser) {
        return next_response/* default */.Z.error();
    }
    const { listingId } = params;
    if (!listingId || typeof listingId !== "string") {
        throw new Error("Invalid ID");
    }
    const listing = await prismadb/* default */.Z.listing.deleteMany({
        where: {
            id: listingId,
            userId: currentUser.id
        }
    });
    return next_response/* default */.Z.json(listing);
}
async function PUT(request, { params }) {
    const currentUser = await (0,getCurrentUser/* default */.Z)();
    if (!currentUser) {
        return next_response/* default */.Z.error();
    }
    const { listingId } = params;
    if (!listingId || typeof listingId !== "string") {
        throw new Error("Invalid ID");
    }
    const body = await request.json();
    // Use body.title, body.description, etc. to update the listing
    const updatedListing = await prismadb/* default */.Z.listing.update({
        where: {
            id: listingId
        },
        data: {
            title: body.title,
            description: body.description,
            imageSrc: body.imageSrc,
            category: body.category,
            roomCount: body.roomCount,
            guestCount: body.guestCount,
            locationValue: body.location.value,
            price: body.price
        }
    });
    return next_response/* default */.Z.json(updatedListing);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/next@13.4.9_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Flistings%2F%5BlistingId%5D%2Froute&name=app%2Fapi%2Flistings%2F%5BlistingId%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Flistings%2F%5BlistingId%5D%2Froute.ts&appDir=D%3A%5C2023%5CRevoU%5CRevoU%5Cw22-group-react-group-d%5Cw22-group-react-group-d%5Capp&appPaths=%2Fapi%2Flistings%2F%5BlistingId%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/listings/[listingId]/route","pathname":"/api/listings/[listingId]","filename":"route","bundlePath":"app/api/listings/[listingId]/route"},"resolvedPagePath":"D:\\2023\\RevoU\\RevoU\\w22-group-react-group-d\\w22-group-react-group-d\\app\\api\\listings\\[listingId]\\route.ts","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/listings/[listingId]/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [168,201,386,65,842], () => (__webpack_exec__(9886)));
module.exports = __webpack_exports__;

})();