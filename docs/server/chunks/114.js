exports.id = 114;
exports.ids = [114];
exports.modules = {

/***/ 1465:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 2416:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4642));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8188))

/***/ }),

/***/ 8188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Footer: () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ Footer auto */ 

const Footer = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "p-4 text-center justify-center text-xs text-neutral-500 border-t border-neutral-100",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "font-semibold",
                children: [
                    new Date().getFullYear(),
                    " "
                ]
            }),
            "— Built by Nirmal Patel"
        ]
    });
};


/***/ }),

/***/ 6150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ Heading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_local_target_css_path_src_components_Heading_tsx_import_arguments_src_path_fonts_CalSans_SemiBold_woff2_display_swap_variableName_CalSans___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3852);
/* harmony import */ var next_font_local_target_css_path_src_components_Heading_tsx_import_arguments_src_path_fonts_CalSans_SemiBold_woff2_display_swap_variableName_CalSans___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_font_local_target_css_path_src_components_Heading_tsx_import_arguments_src_path_fonts_CalSans_SemiBold_woff2_display_swap_variableName_CalSans___WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9610);




const Heading = ({ className, children, as: Tag = "h1" })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tag, {
        className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_2__/* .twMerge */ .m)((next_font_local_target_css_path_src_components_Heading_tsx_import_arguments_src_path_fonts_CalSans_SemiBold_woff2_display_swap_variableName_CalSans___WEBPACK_IMPORTED_MODULE_3___default().className), "text-base md:text-xl lg:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary", className),
        children: children
    });
};


/***/ }),

/***/ 4642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Navigation: () => (/* binding */ Navigation),
  Sidebar: () => (/* binding */ Sidebar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/@tabler/icons-react/dist/cjs/tabler-icons-react.js
var tabler_icons_react = __webpack_require__(9674);
;// CONCATENATED MODULE: ./src/constants/navlinks.tsx

const navlinks = [
    {
        href: "/",
        label: "Home",
        icon: tabler_icons_react/* IconBolt */.l69
    },
    {
        href: "/about",
        label: "About",
        icon: tabler_icons_react/* IconMessage2 */.Gfc
    },
    {
        href: "/projects",
        label: "Projects",
        icon: tabler_icons_react/* IconBriefcase2 */.cpO
    },
    {
        href: "/contact",
        label: "Contact",
        icon: tabler_icons_react/* IconMail */.haR
    }
];

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/tailwind-merge/dist/lib/tw-merge.mjs + 10 modules
var tw_merge = __webpack_require__(9610);
// EXTERNAL MODULE: ./src/components/Heading.tsx
var Heading = __webpack_require__(6150);
;// CONCATENATED MODULE: ./src/constants/socials.tsx

const socials = [
    {
        href: "https://www.linkedin.com/in/nirmal-patel-in/",
        label: "LinkedIn",
        icon: tabler_icons_react/* IconBrandLinkedin */.u9B
    }
];

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 194 modules
var motion = __webpack_require__(4571);
;// CONCATENATED MODULE: ./src/components/Badge.tsx




const Badge = ({ text, href, ...props })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        href: href,
        className: "bg-slate-900 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "absolute inset-0 overflow-hidden rounded-full ",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative flex space-x-2 items-center z-10 rounded-full bg-transparent py-2 px-4 ring-1 ring-white/10 ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: text
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.path, {
                            stroke: "currentColor",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "1.5",
                            d: "M10.75 8.75L14.25 12L10.75 15.25",
                            initial: {
                                pathLength: 0
                            },
                            animate: {
                                pathLength: 1
                            },
                            transition: {
                                duration: 1
                            }
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs + 5 modules
var AnimatePresence = __webpack_require__(569);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(2019);
;// CONCATENATED MODULE: ./public/avatar.png
/* harmony default export */ const avatar = ({"src":"/_next/static/media/avatar.b4121ee5.png","height":256,"width":256,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA9klEQVR42mOAAVst+X19xYn/SyPdN4P4/29uZIRLmquoKNfH+/+/tHLi/w1dxV9nVmVIg8Q39VcxgRUsrS+Rm1Ece2dbd/X/o3Nanz0+tE4OJP54QxcjQ11qNBuIExeZOKEnK+J/X3lOGYjfysDAtO7iJ4g1uy68zt5y7tX/vcvn/j+4Y8/zXTe+N+7YdZQbLDlvx7Wibede/j905+v/E7fe/zl2+dn/gzc+/T9w5d0csIKeJQdWgXQfuP7+19E7X/4duv31D0jBrgtv3x04/0ycISyjuWH5gbv/t19893vLudf/dlx692/dmbe/15989X/b6Re5AIBjiAHdbIFwAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/components/Sidebar.tsx
/* __next_internal_client_entry_do_not_use__ Sidebar,Navigation auto */ 













const Sidebar = ()=>{
    const [open, setOpen] = (0,react_.useState)((0,utils/* isMobile */.t)() ? false : true);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(AnimatePresence/* AnimatePresence */.M, {
                children: open && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                    initial: {
                        x: -200
                    },
                    animate: {
                        x: 0
                    },
                    transition: {
                        duration: 0.2,
                        ease: "linear"
                    },
                    exit: {
                        x: -200
                    },
                    className: "px-6  z-[100] py-10 bg-neutral-100 max-w-[14rem] lg:w-fit  fixed lg:relative  h-screen left-0 flex flex-col justify-between",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex-1 overflow-auto",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(SidebarHeader, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {
                                    setOpen: setOpen
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            onClick: ()=>(0,utils/* isMobile */.t)() && setOpen(false),
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Badge, {
                                href: "/resume",
                                text: "Read Resume"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "fixed lg:hidden bottom-4 right-4 h-8 w-8 border border-neutral-200 rounded-full backdrop-blur-sm flex items-center justify-center z-50",
                onClick: ()=>setOpen(!open),
                children: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconLayoutSidebarRightCollapse */.R4O, {
                    className: "h-4 w-4 text-secondary"
                })
            })
        ]
    });
};
const Navigation = ({ setOpen })=>{
    const pathname = (0,navigation.usePathname)();
    const isActive = (href)=>pathname === href;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col space-y-1 my-10 relative z-[100]",
        children: [
            navlinks.map((link)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    href: link.href,
                    onClick: ()=>(0,utils/* isMobile */.t)() && setOpen(false),
                    className: (0,tw_merge/* twMerge */.m)("text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm", isActive(link.href) && "bg-white shadow-lg text-primary"),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(link.icon, {
                            className: (0,tw_merge/* twMerge */.m)("h-4 w-4 flex-shrink-0", isActive(link.href) && "text-sky-500")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: link.label
                        })
                    ]
                }, link.href)),
            /*#__PURE__*/ jsx_runtime_.jsx(Heading/* Heading */.X, {
                as: "p",
                className: "text-sm md:text-sm lg:text-sm pt-10 px-2",
                children: "Socials"
            }),
            socials.map((link)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    href: link.href,
                    className: (0,tw_merge/* twMerge */.m)("text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(link.icon, {
                            className: (0,tw_merge/* twMerge */.m)("h-4 w-4 flex-shrink-0", isActive(link.href) && "text-sky-500")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: link.label
                        })
                    ]
                }, link.href))
        ]
    });
};
const SidebarHeader = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex space-x-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: avatar,
                alt: "Avatar",
                height: "40",
                width: "40",
                className: "object-cover object-top rounded-full flex-shrink-0"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex text-sm flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "font-bold text-primary",
                        children: "Nirmal Patel"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "font-light text-secondary",
                        children: "Developer"
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 2019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn),
/* harmony export */   t: () => (/* binding */ isMobile)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(566);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9610);


const isMobile = ()=>{
    if (true) return false;
    const width = window.innerWidth;
    return width <= 1024;
};
function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__/* .twMerge */ .m)((0,clsx__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .W)(inputs));
}


/***/ }),

/***/ 1946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.tsx","import":"Inter","arguments":[{"subsets":["latin"],"weight":["100","200","300","400","500","600","700","800","900"]}],"variableName":"inter"}
var layout_tsx_import_Inter_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variableName_inter_ = __webpack_require__(9201);
var layout_tsx_import_Inter_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Inter_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/components/Sidebar.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/nirmalpatel/next-portfolio/src/components/Sidebar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Sidebar"];

const e1 = proxy["Navigation"];

// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
// EXTERNAL MODULE: ./node_modules/tailwind-merge/dist/lib/tw-merge.mjs + 10 modules
var tw_merge = __webpack_require__(2794);
;// CONCATENATED MODULE: ./src/components/Footer.tsx

const Footer_proxy = (0,module_proxy.createProxy)(String.raw`/Users/nirmalpatel/next-portfolio/src/components/Footer.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Footer_esModule, $$typeof: Footer_$$typeof } = Footer_proxy;
const Footer_default_ = Footer_proxy.default;

const Footer_e0 = Footer_proxy["Footer"];

;// CONCATENATED MODULE: ./src/app/layout.tsx






const metadata = {
    title: "Nirmal Patel - Developer",
    description: "Nirmal Patel is a developer. He is a digital nomad and travels around the world."
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: (0,tw_merge/* twMerge */.m)((layout_tsx_import_Inter_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variableName_inter_default()).className, "flex antialiased h-screen overflow-hidden bg-gray-100"),
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(e0, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto",
                        children: [
                            children,
                            /*#__PURE__*/ jsx_runtime_.jsx(Footer_e0, {})
                        ]
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 5998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2947);


const Container = ({ children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        className: `max-w-4xl w-full mx-auto py-20 px-4 md:px-10`,
        children: children
    });
};


/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;