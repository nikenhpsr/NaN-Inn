"use strict";
(() => {
var exports = {};
exports.id = 70;
exports.ids = [70];
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

/***/ 83227:
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

// NAMESPACE OBJECT: ./app/api/listings/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.9_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(36587);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.9_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(84862);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.9_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(30065);
// EXTERNAL MODULE: ./app/libs/prismadb.ts
var prismadb = __webpack_require__(91438);
// EXTERNAL MODULE: ./app/actions/getCurrentUser.ts + 1 modules
var getCurrentUser = __webpack_require__(91842);
;// CONCATENATED MODULE: ./app/api/listings/route.ts



async function POST(request) {
    const currentUser = await (0,getCurrentUser/* default */.Z)();
    if (!currentUser) {
        return next_response/* default */.Z.error();
    }
    const body = await request.json();
    const { title, description, imageSrc, category, roomCount, guestCount, location, price } = body;
    Object.keys(body).forEach((value)=>{
        if (!body[value]) {
            next_response/* default */.Z.error();
        }
    });
    const listing = await prismadb/* default */.Z.listing.create({
        data: {
            title,
            description,
            imageSrc,
            category,
            roomCount,
            guestCount,
            locationValue: location.value,
            price: parseInt(price, 10),
            userId: currentUser.id
        }
    });
    return next_response/* default */.Z.json(listing);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/next@13.4.9_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Flistings%2Froute&name=app%2Fapi%2Flistings%2Froute&pagePath=private-next-app-dir%2Fapi%2Flistings%2Froute.ts&appDir=D%3A%5C2023%5CRevoU%5CRevoU%5Cw22-group-react-group-d%5Cw22-group-react-group-d%5Capp&appPaths=%2Fapi%2Flistings%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/listings/route","pathname":"/api/listings","filename":"route","bundlePath":"app/api/listings/route"},"resolvedPagePath":"D:\\2023\\RevoU\\RevoU\\w22-group-react-group-d\\w22-group-react-group-d\\app\\api\\listings\\route.ts","nextConfigOutput":""}
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

    const originalPathname = "/api/listings/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [168,201,386,65,842], () => (__webpack_exec__(83227)));
module.exports = __webpack_exports__;

})();