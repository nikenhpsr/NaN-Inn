"use strict";
exports.id = 984;
exports.ids = [984];
exports.modules = {

/***/ 39984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36166);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81091);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_hooks_useCountries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28993);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4521);
/* harmony import */ var _HeartButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80233);
/* __next_internal_client_entry_do_not_use__ default auto */ 






const ListingCard = ({ data, onAction, onEdit, disabled, actionLabel, actionId = "", currentUser })=>{
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { getByValue } = (0,_app_hooks_useCountries__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const location = getByValue(data.locationValue);
    const handleCancel = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((e)=>{
        e.stopPropagation();
        if (disabled) {
            return;
        }
        onAction?.(actionId);
    }, [
        disabled,
        onAction,
        actionId
    ]);
    const price = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        return data.price;
    }, [
        ,
        data.price
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        onClick: ()=>router.push(`/listings/${data.id}`),
        className: "col-span-1 mt-10 cursor-pointer group",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col gap-2 w-full",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "   aspect-square    w-full    relative    overflow-hidden    rounded-xl   ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            fill: true,
                            className: "   object-cover    h-full    w-full    group-hover:scale-110    transition   ",
                            src: data.imageSrc,
                            alt: "Listing"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "   absolute   top-3   right-3   ",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeartButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                listingId: data.id,
                                currentUser: currentUser
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "font-semibold text-lg",
                    children: data.title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "font-semibold text-lg",
                    children: [
                        location?.region,
                        ", ",
                        location?.label
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-row items-center gap-1",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "font-semibold",
                        children: [
                            "$ ",
                            price
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-row items-center justify-between mt-2",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                            currentUser && currentUser.id === data.userId && onEdit && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: "flex items-center text-sm text-gray-500 hover:text-gray-700 cursor-pointer",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    onEdit(data.id);
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__/* .FaEdit */ .fmQ, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Edit"
                                    })
                                ]
                            }),
                            onAction && actionLabel && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: "flex items-center text-sm text-red-500 hover:text-red-700 cursor-pointer",
                                onClick: handleCancel,
                                disabled: disabled,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__/* .FaTrash */ .Xm5, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: actionLabel
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListingCard);


/***/ })

};
;