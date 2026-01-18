module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Documents/portfolio-main/app/edition/edition.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "arrowRight": "edition-module__KcJA7W__arrowRight",
  "barcode": "edition-module__KcJA7W__barcode",
  "box": "edition-module__KcJA7W__box",
  "circleDots": "edition-module__KcJA7W__circleDots",
  "circuit": "edition-module__KcJA7W__circuit",
  "codeBlock": "edition-module__KcJA7W__codeBlock",
  "container": "edition-module__KcJA7W__container",
  "content": "edition-module__KcJA7W__content",
  "contentBox": "edition-module__KcJA7W__contentBox",
  "diagonalStripe": "edition-module__KcJA7W__diagonalStripe",
  "dot": "edition-module__KcJA7W__dot",
  "encryptedLabel": "edition-module__KcJA7W__encryptedLabel",
  "fileTab": "edition-module__KcJA7W__fileTab",
  "folder": "edition-module__KcJA7W__folder",
  "folder1": "edition-module__KcJA7W__folder1",
  "folder2": "edition-module__KcJA7W__folder2",
  "folder3": "edition-module__KcJA7W__folder3",
  "folder4": "edition-module__KcJA7W__folder4",
  "folder5": "edition-module__KcJA7W__folder5",
  "folder6": "edition-module__KcJA7W__folder6",
  "folderContent": "edition-module__KcJA7W__folderContent",
  "gridPattern": "edition-module__KcJA7W__gridPattern",
  "header": "edition-module__KcJA7W__header",
  "hexagon": "edition-module__KcJA7W__hexagon",
  "iconBox": "edition-module__KcJA7W__iconBox",
  "imageBox": "edition-module__KcJA7W__imageBox",
  "imageDark": "edition-module__KcJA7W__imageDark",
  "imagePlaceholder": "edition-module__KcJA7W__imagePlaceholder",
  "imageTall": "edition-module__KcJA7W__imageTall",
  "label": "edition-module__KcJA7W__label",
  "logLabel": "edition-module__KcJA7W__logLabel",
  "pageContainer": "edition-module__KcJA7W__pageContainer",
  "plusIcon": "edition-module__KcJA7W__plusIcon",
  "plusPattern": "edition-module__KcJA7W__plusPattern",
  "progressBar": "edition-module__KcJA7W__progressBar",
  "roundedFrame": "edition-module__KcJA7W__roundedFrame",
  "techLabel": "edition-module__KcJA7W__techLabel",
  "textBlock": "edition-module__KcJA7W__textBlock",
  "time": "edition-module__KcJA7W__time",
  "title": "edition-module__KcJA7W__title",
});
}),
"[project]/Documents/portfolio-main/app/edition/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Edition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/portfolio-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/portfolio-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/portfolio-main/app/edition/edition.module.css [app-ssr] (css module)");
"use client";
;
;
;
function Edition() {
    const foldersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Clean ref array to remove nulls
        foldersRef.current = foldersRef.current.filter(Boolean);
        const folders = foldersRef.current;
        let animationFrameId;
        // Create steps for each folder animation
        const steps = folders.map((folder)=>{
            if (!folder) return ()=>{};
            let isInteracting = false;
            // Get speed from data attribute, default 0.5
            const speed = parseFloat(folder.dataset.speed || "0.5");
            const onEnter = ()=>{
                isInteracting = true;
            };
            const onLeave = ()=>{
                isInteracting = false;
            };
            folder.addEventListener('mouseenter', onEnter);
            folder.addEventListener('mouseleave', onLeave);
            folder.addEventListener('touchstart', onEnter);
            folder.addEventListener('touchend', onLeave);
            return ()=>{
                if (!isInteracting && folder) {
                    folder.scrollTop += speed;
                    if (folder.scrollTop >= folder.scrollHeight - folder.offsetHeight) {
                        folder.scrollTop = 0;
                    }
                }
            };
        });
        const animate = ()=>{
            steps.forEach((step)=>step());
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();
        return ()=>{
            cancelAnimationFrame(animationFrameId);
        // Clean up event listeners - not strictly necessary as elements are removed
        };
    }, []);
    const addToRefs = (el)=>{
        if (el && !foldersRef.current.includes(el)) {
            foldersRef.current.push(el);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageContainer,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].folder} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].folder1}`,
                    "data-speed": "0.5",
                    ref: addToRefs,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].folderContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                                children: "PRINT EDITION"
                            }, void 0, false, {
                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                lineNumber: 64,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                        children: "PRINT ARCHIVE"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 66,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].box
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 67,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barcode
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].textBlock,
                                        children: [
                                            "DESIGNED FOR ATTENTION,",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                                lineNumber: 70,
                                                columnNumber: 48
                                            }, this),
                                            "BUILT FOR PRINT,",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                                lineNumber: 71,
                                                columnNumber: 41
                                            }, this),
                                            "MADE TO LAST."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].roundedFrame,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "11px",
                                                    fontWeight: "bold",
                                                    color: "#4a4a3a",
                                                    marginBottom: "10px"
                                                },
                                                children: "FU"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                                lineNumber: 75,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "9px",
                                                    color: "#4a4a3a",
                                                    lineHeight: 1.6
                                                },
                                                children: "WATCH IS DEEPLY LOVED AND SOUGHT AFTER. FIRST OF ALL, IT'S THE BEST GIFT."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                                lineNumber: 76,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].circleDots,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dot
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                                lineNumber: 81,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dot
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                                lineNumber: 82,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dot
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                                lineNumber: 83,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dot
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imagePlaceholder
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hexagon
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "9px",
                                            color: "#4a4a3a",
                                            marginTop: "30px"
                                        },
                                        children: [
                                            "VISUAL STUDIES",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                                lineNumber: 89,
                                                columnNumber: 39
                                            }, this),
                                            "TYPE · LAYOUT · SCALE"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                lineNumber: 65,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                        lineNumber: 63,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].folder} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].folder2}`,
                    "data-speed": "0.7",
                    ref: addToRefs,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].folderContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].time,
                                        children: "PROJECT LOG"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logLabel,
                                        children: [
                                            "COLLEGE",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                                lineNumber: 100,
                                                columnNumber: 61
                                            }, this),
                                            "CLUB",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                                lineNumber: 100,
                                                columnNumber: 70
                                            }, this),
                                            "POSTERS"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 100,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                lineNumber: 98,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fileTab,
                                children: "CAMPUS CAMPAIGNS"
                            }, void 0, false, {
                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                lineNumber: 102,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].encryptedLabel,
                                children: [
                                    "OFFLINE EVENTS",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 70
                                    }, this),
                                    "PRINT FIRST VISUALS"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                lineNumber: 103,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gridPattern
                            }, void 0, false, {
                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                lineNumber: 104,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageDark,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/AOT CLUB shashish submisison.png",
                                    alt: "Event poster"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                lineNumber: 105,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "9px",
                                    marginTop: "20px",
                                    color: "#2a2a2a"
                                },
                                children: [
                                    "EVENT PROMOTION",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 36
                                    }, this),
                                    "HIGH FOOTFALL"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                lineNumber: 108,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].arrowRight
                            }, void 0, false, {
                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                lineNumber: 111,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageDark,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/shashish independence day.png",
                                    alt: "Independence Day poster"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                    lineNumber: 113,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                lineNumber: 112,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                        lineNumber: 97,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].folder} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].folder3}`,
                    "data-speed": "0.6",
                    ref: addToRefs,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].folderContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].techLabel,
                                children: [
                                    "IDENTITY · MOOD",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 66
                                    }, this),
                                    "VISUAL · VOICE"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                lineNumber: 121,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contentBox,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/DONDA-1.png",
                                    alt: "Donda music poster"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                    lineNumber: 123,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                lineNumber: 122,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].diagonalStripe
                            }, void 0, false, {
                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                lineNumber: 125,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contentBox,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/call me if your lost tyler -1.png",
                                    alt: "Call Me If You Get Lost poster"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                    lineNumber: 127,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                lineNumber: 126,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].plusPattern,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].plusIcon
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 130,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].plusIcon
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].plusIcon
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                lineNumber: 129,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contentBox,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/TRIOLOGY.png",
                                    alt: "Trilogy"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                    lineNumber: 135,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                lineNumber: 134,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                        lineNumber: 120,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].folder} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].folder4}`,
                    "data-speed": "0.8",
                    ref: addToRefs,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].folderContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    writingMode: "vertical-rl",
                                    transform: "rotate(180deg)",
                                    fontSize: "10px",
                                    letterSpacing: "2px",
                                    marginBottom: "30px",
                                    color: "#2a2a2a"
                                },
                                children: "PRODUCT VISUALS"
                            }, void 0, false, {
                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                lineNumber: 143,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageTall,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/ChatGPT Image Jan 1, 2026, 06_59_12 PM.png",
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                    lineNumber: 147,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                lineNumber: 146,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageDark,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/hav final.png",
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                    lineNumber: 150,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                lineNumber: 149,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                        lineNumber: 142,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].folder} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].folder5}`,
                    "data-speed": "0.5",
                    ref: addToRefs,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].folderContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].techLabel,
                                children: "LARGE FORMAT · PUBLIC SPACES"
                            }, void 0, false, {
                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                lineNumber: 158,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].iconBox,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    src: "/videos/marketing.mp4",
                                    autoPlay: true,
                                    loop: true,
                                    muted: true,
                                    playsInline: true
                                }, void 0, false, {
                                    fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                lineNumber: 159,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].codeBlock,
                                children: [
                                    "DESIGNED TO BE SEEN",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 40
                                    }, this),
                                    "BUILT FOR SCALE"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                lineNumber: 162,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageBox,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/Gemini_Generated_Image_gvm11gvm11gvm11g.png",
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                lineNumber: 165,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressBar
                            }, void 0, false, {
                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                lineNumber: 168,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageBox,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/Gemini_Generated_Image_i7byli7byli7byli.png",
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                    lineNumber: 170,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                lineNumber: 169,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                        lineNumber: 157,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].folder} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].folder6}`,
                    "data-speed": "0.6",
                    ref: addToRefs,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].folderContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    writingMode: "vertical-rl",
                                    transform: "rotate(180deg)",
                                    fontSize: "10px",
                                    color: "#7a8a3a",
                                    letterSpacing: "2px",
                                    marginBottom: "30px"
                                },
                                children: "PRINT EDITIONS"
                            }, void 0, false, {
                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                lineNumber: 178,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageBox,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/DS4EVER.png",
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                    lineNumber: 182,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                lineNumber: 181,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageBox,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/GOOD KID MAAD CITY.png",
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                    lineNumber: 185,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                lineNumber: 184,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].circuit
                            }, void 0, false, {
                                fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                                lineNumber: 187,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                        lineNumber: 177,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/portfolio-main/app/edition/page.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/portfolio-main/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/Documents/portfolio-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Documents/portfolio-main/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/Documents/portfolio-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Documents/portfolio-main/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__162875f5._.js.map