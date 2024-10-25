"use strict";
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 6414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Products: () => (/* binding */ Products)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./src/components/Heading.tsx
var Heading = __webpack_require__(6150);
// EXTERNAL MODULE: ./public/images/sidefolio-aceternity-2.png
var sidefolio_aceternity_2 = __webpack_require__(7826);
// EXTERNAL MODULE: ./public/images/sidefolio-tailwindmasterkit.png
var sidefolio_tailwindmasterkit = __webpack_require__(3208);
// EXTERNAL MODULE: ./public/images/sidefolio-tailwindmasterkit-2.png
var sidefolio_tailwindmasterkit_2 = __webpack_require__(9381);
;// CONCATENATED MODULE: ./src/constants/products.tsx





const products = [
    {
        href: "",
        title: "E-Commerce Platform",
        description: "A full-stack, production-ready e-commerce platform with modern technologies, containerized with Docker for " + "easy deployment and scaling.",
        thumbnail: sidefolio_tailwindmasterkit["default"],
        images: [
            sidefolio_tailwindmasterkit["default"],
            sidefolio_tailwindmasterkit_2["default"]
        ],
        stack: [
            "Go",
            "React",
            "MongoDB",
            "Grafana"
        ],
        slug: "tailwindmasterkit",
        content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    children: [
                        "The backend is built using Go, designed to handle the business logic, including product management, ser interactions, and a dynamic discount engine based on user segmentation. The frontend is developed in React, providing an intuitive and responsive user interface. The entire platform is containerized with Docker, allowing for rapid and consistent deployment across different environments.",
                        " "
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    children: [
                        "For data management, the platform utilizes MySQL for handling transactional data, such as orders, inventory, and user information, while MongoDB is used for managing user-generated content, including product reviews and ratings. Key features include trending and most-liked product sections, which are dynamically updated based on user interactions, and a comprehensive inventory management system that allows for real-time tracking and updates. The discount engine enables the platform to offer personalized discounts to specific user segments, optimizing customer engagement and conversion rates.",
                        " "
                    ]
                }),
                " ",
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "The platform’s architecture is designed for scalability and flexibility, making it ready for production deployment. With a focus on user experience and efficient data management, it supports crucial e-commerce functionalities like inventory management, personalized user recommendations, and review systems. The use of Docker ensures easy scaling and integration into any production environment, making it a robust solution for modern e-commerce needs."
                })
            ]
        })
    },
    {
        href: "",
        title: "Medic.AI",
        description: "A platform to help patient get the right data in one place",
        thumbnail: sidefolio_aceternity_2["default"],
        images: [
            sidefolio_aceternity_2["default"],
            sidefolio_aceternity_2["default"]
        ],
        stack: [
            "NLP",
            "MongoDB"
        ],
        slug: "aceternity",
        content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    children: [
                        "Developed Full Stack web app which maintains the patient data and reports in one place. It has features like searching for generic medicines and nearby labs, and hospitals.",
                        " "
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "Integration with the Microsoft Azure Health Chat bot was also done to query symptoms from the platform. Diabetic Retinopathy for initial review of the patient."
                }),
                " "
            ]
        })
    }
];

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/Paragraph.tsx
var Paragraph = __webpack_require__(4611);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 194 modules
var motion = __webpack_require__(4571);
;// CONCATENATED MODULE: ./src/components/Products.tsx
/* __next_internal_client_entry_do_not_use__ Products auto */ 







const Products = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "grid grid-cols-1  gap-10",
            children: products.map((product, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                    initial: {
                        opacity: 0,
                        x: -50
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: 0.2,
                        delay: idx * 0.1
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: product.slug ? `/projects/${product.slug}` : product.href,
                        className: "group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: product.thumbnail,
                                alt: "thumbnail",
                                height: "200",
                                width: "200",
                                className: "rounded-md"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col justify-between",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Heading/* Heading */.X, {
                                                as: "h4",
                                                className: "font-black text-lg md:text-lg lg:text-lg ",
                                                children: product.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Paragraph/* Paragraph */.n, {
                                                className: "text-sm md:text-sm lg:text-sm mt-2 max-w-xl",
                                                children: product.description
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex space-x-2 md:mb-1 mt-2 md:mt-0",
                                        children: product.stack?.map((stack)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary",
                                                children: stack
                                            }, stack))
                                    })
                                ]
                            })
                        ]
                    }, product.href)
                }, product.href))
        })
    });
};


/***/ }),

/***/ 4413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ Heading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_local_target_css_path_src_components_Heading_tsx_import_arguments_src_path_fonts_CalSans_SemiBold_woff2_display_swap_variableName_CalSans___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5840);
/* harmony import */ var next_font_local_target_css_path_src_components_Heading_tsx_import_arguments_src_path_fonts_CalSans_SemiBold_woff2_display_swap_variableName_CalSans___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_font_local_target_css_path_src_components_Heading_tsx_import_arguments_src_path_fonts_CalSans_SemiBold_woff2_display_swap_variableName_CalSans___WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2947);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2794);




const Heading = ({ className, children, as: Tag = "h1" })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tag, {
        className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_2__/* .twMerge */ .m)((next_font_local_target_css_path_src_components_Heading_tsx_import_arguments_src_path_fonts_CalSans_SemiBold_woff2_display_swap_variableName_CalSans___WEBPACK_IMPORTED_MODULE_3___default().className), "text-base md:text-xl lg:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary", className),
        children: children
    });
};


/***/ }),

/***/ 2623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/nirmalpatel/next-portfolio/src/components/Products.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Products"];


/***/ })

};
;