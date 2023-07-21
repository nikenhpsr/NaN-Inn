"use strict";
exports.id = 842;
exports.ids = [842];
exports.modules = {

/***/ 91842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ getCurrentUser)
});

// UNUSED EXPORTS: getSession

// EXTERNAL MODULE: ./node_modules/.pnpm/next-auth@4.22.1_next@13.4.9_react-dom@18.2.0_react@18.2.0/node_modules/next-auth/next/index.js
var next = __webpack_require__(33632);
// EXTERNAL MODULE: external "bcrypt"
var external_bcrypt_ = __webpack_require__(67096);
var external_bcrypt_default = /*#__PURE__*/__webpack_require__.n(external_bcrypt_);
// EXTERNAL MODULE: ./node_modules/.pnpm/next-auth@4.22.1_next@13.4.9_react-dom@18.2.0_react@18.2.0/node_modules/next-auth/index.js
var next_auth = __webpack_require__(32581);
var next_auth_default = /*#__PURE__*/__webpack_require__.n(next_auth);
// EXTERNAL MODULE: ./node_modules/.pnpm/next-auth@4.22.1_next@13.4.9_react-dom@18.2.0_react@18.2.0/node_modules/next-auth/providers/credentials.js
var credentials = __webpack_require__(58255);
// EXTERNAL MODULE: ./node_modules/.pnpm/next-auth@4.22.1_next@13.4.9_react-dom@18.2.0_react@18.2.0/node_modules/next-auth/providers/google.js
var google = __webpack_require__(15920);
// EXTERNAL MODULE: ./node_modules/.pnpm/@next-auth+prisma-adapter@1.0.7_@prisma+client@4.16.2_next-auth@4.22.1/node_modules/@next-auth/prisma-adapter/dist/index.js
var dist = __webpack_require__(1496);
// EXTERNAL MODULE: ./app/libs/prismadb.ts
var prismadb = __webpack_require__(91438);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].ts






const authOptions = {
    adapter: (0,dist/* PrismaAdapter */.N)(prismadb/* default */.Z),
    providers: [
        (0,google/* default */.Z)({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        (0,credentials/* default */.Z)({
            name: "credentials",
            credentials: {
                email: {
                    label: "email",
                    type: "text"
                },
                password: {
                    label: "password",
                    type: "password"
                }
            },
            async authorize (credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Invalid credentials");
                }
                const user = await prismadb/* default */.Z.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });
                if (!user || !user?.hashedPassword) {
                    throw new Error("Invalid credentials");
                }
                const isCorrectPassword = await external_bcrypt_default().compare(credentials.password, user.hashedPassword);
                if (!isCorrectPassword) {
                    throw new Error("Invalid credentials");
                }
                return user;
            }
        })
    ],
    pages: {
        signIn: "/"
    },
    debug: "production" === "development",
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET
};
/* harmony default export */ const _nextauth_ = (next_auth_default()(authOptions));

;// CONCATENATED MODULE: ./app/actions/getCurrentUser.ts



async function getSession() {
    return await (0,next.getServerSession)(authOptions);
}
async function getCurrentUser() {
    try {
        const session = await getSession();
        if (!session?.user?.email) {
            return null;
        }
        const currentUser = await prismadb/* default */.Z.user.findUnique({
            where: {
                email: session.user.email
            }
        });
        if (!currentUser) {
            return null;
        }
        return {
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt: currentUser.updatedAt.toISOString(),
            emailVerified: currentUser.emailVerified?.toISOString() || null
        };
    } catch (error) {
        return null;
    }
}


/***/ }),

/***/ 91438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const client = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);


/***/ })

};
;