"use strict";
exports.id = 681;
exports.ids = [681];
exports.modules = {

/***/ 20752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ getListings)
/* harmony export */ });
/* harmony import */ var _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91438);

async function getListings(params) {
    try {
        const { userId, roomCount, guestCount, locationValue, category } = params;
        let query = {};
        if (userId) {
            query.userId = userId;
        }
        if (category) {
            query.category = category;
        }
        if (roomCount) {
            query.roomCount = {
                gte: +roomCount
            };
        }
        if (guestCount) {
            query.guestCount = {
                gte: +guestCount
            };
        }
        if (locationValue) {
            query.locationValue = locationValue;
        }
        const listings = await _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.listing.findMany({
            where: query,
            orderBy: {
                createdAt: "desc"
            }
        });
        //console.log(listings)
        const saveListings = listings.map((listing)=>({
                ...listing,
                createdAt: listing.createdAt.toISOString()
            }));
        return saveListings;
    } catch (error) {
        throw new Error(error);
    }
}


/***/ }),

/***/ 27075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38944);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\2023\RevoU\RevoU\w22-group-react-group-d\w22-group-react-group-d\app\components\EmptyPage.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;