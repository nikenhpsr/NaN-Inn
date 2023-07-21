"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 29532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  authOptions: () => (/* binding */ authOptions),
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "bcrypt"
const external_bcrypt_namespaceObject = require("bcrypt");
var external_bcrypt_default = /*#__PURE__*/__webpack_require__.n(external_bcrypt_namespaceObject);
;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/google"
const google_namespaceObject = require("next-auth/providers/google");
var google_default = /*#__PURE__*/__webpack_require__.n(google_namespaceObject);
;// CONCATENATED MODULE: external "@next-auth/prisma-adapter"
const prisma_adapter_namespaceObject = require("@next-auth/prisma-adapter");
;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./app/libs/prismadb.ts

const client = globalThis.prisma || new client_namespaceObject.PrismaClient();
if (false) {}
/* harmony default export */ const prismadb = (client);

;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].ts






const authOptions = {
    adapter: (0,prisma_adapter_namespaceObject.PrismaAdapter)(prismadb),
    providers: [
        google_default()({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        credentials_default()({
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
                const user = await prismadb.user.findUnique({
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
/* harmony default export */ const _nextauth_ = (external_next_auth_default()(authOptions));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(29532));
module.exports = __webpack_exports__;

})();