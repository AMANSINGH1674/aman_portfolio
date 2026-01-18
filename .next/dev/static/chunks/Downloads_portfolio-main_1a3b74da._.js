(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/portfolio-main/app/edition/edition.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "arrowRight": "edition-module__TzplLa__arrowRight",
  "barcode": "edition-module__TzplLa__barcode",
  "box": "edition-module__TzplLa__box",
  "circleDots": "edition-module__TzplLa__circleDots",
  "circuit": "edition-module__TzplLa__circuit",
  "codeBlock": "edition-module__TzplLa__codeBlock",
  "container": "edition-module__TzplLa__container",
  "content": "edition-module__TzplLa__content",
  "contentBox": "edition-module__TzplLa__contentBox",
  "diagonalStripe": "edition-module__TzplLa__diagonalStripe",
  "dot": "edition-module__TzplLa__dot",
  "encryptedLabel": "edition-module__TzplLa__encryptedLabel",
  "fileTab": "edition-module__TzplLa__fileTab",
  "folder": "edition-module__TzplLa__folder",
  "folder1": "edition-module__TzplLa__folder1",
  "folder2": "edition-module__TzplLa__folder2",
  "folder3": "edition-module__TzplLa__folder3",
  "folder4": "edition-module__TzplLa__folder4",
  "folder5": "edition-module__TzplLa__folder5",
  "folder6": "edition-module__TzplLa__folder6",
  "folderContent": "edition-module__TzplLa__folderContent",
  "gridPattern": "edition-module__TzplLa__gridPattern",
  "header": "edition-module__TzplLa__header",
  "hexagon": "edition-module__TzplLa__hexagon",
  "iconBox": "edition-module__TzplLa__iconBox",
  "imageBox": "edition-module__TzplLa__imageBox",
  "imageDark": "edition-module__TzplLa__imageDark",
  "imagePlaceholder": "edition-module__TzplLa__imagePlaceholder",
  "imageTall": "edition-module__TzplLa__imageTall",
  "label": "edition-module__TzplLa__label",
  "logLabel": "edition-module__TzplLa__logLabel",
  "pageContainer": "edition-module__TzplLa__pageContainer",
  "plusIcon": "edition-module__TzplLa__plusIcon",
  "plusPattern": "edition-module__TzplLa__plusPattern",
  "progressBar": "edition-module__TzplLa__progressBar",
  "roundedFrame": "edition-module__TzplLa__roundedFrame",
  "techLabel": "edition-module__TzplLa__techLabel",
  "textBlock": "edition-module__TzplLa__textBlock",
  "time": "edition-module__TzplLa__time",
  "title": "edition-module__TzplLa__title",
});
}),
"[project]/Downloads/portfolio-main/app/edition/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Edition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/portfolio-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/portfolio-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Downloads/portfolio-main/app/edition/edition.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Edition() {
    _s();
    const foldersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Edition.useEffect": ()=>{
            // Clean ref array to remove nulls
            foldersRef.current = foldersRef.current.filter(Boolean);
            const folders = foldersRef.current;
            let animationFrameId;
            // Create steps for each folder animation
            const steps = folders.map({
                "Edition.useEffect.steps": (folder)=>{
                    if (!folder) return ({
                        "Edition.useEffect.steps": ()=>{}
                    })["Edition.useEffect.steps"];
                    let isInteracting = false;
                    // Get speed from data attribute, default 0.5
                    const speed = parseFloat(folder.dataset.speed || "0.5");
                    const onEnter = {
                        "Edition.useEffect.steps.onEnter": ()=>{
                            isInteracting = true;
                        }
                    }["Edition.useEffect.steps.onEnter"];
                    const onLeave = {
                        "Edition.useEffect.steps.onLeave": ()=>{
                            isInteracting = false;
                        }
                    }["Edition.useEffect.steps.onLeave"];
                    folder.addEventListener('mouseenter', onEnter);
                    folder.addEventListener('mouseleave', onLeave);
                    folder.addEventListener('touchstart', onEnter);
                    folder.addEventListener('touchend', onLeave);
                    return ({
                        "Edition.useEffect.steps": ()=>{
                            if (!isInteracting && folder) {
                                folder.scrollTop += speed;
                                if (folder.scrollTop >= folder.scrollHeight - folder.offsetHeight) {
                                    folder.scrollTop = 0;
                                }
                            }
                        }
                    })["Edition.useEffect.steps"];
                }
            }["Edition.useEffect.steps"]);
            const animate = {
                "Edition.useEffect.animate": ()=>{
                    steps.forEach({
                        "Edition.useEffect.animate": (step)=>step()
                    }["Edition.useEffect.animate"]);
                    animationFrameId = requestAnimationFrame(animate);
                }
            }["Edition.useEffect.animate"];
            animate();
            return ({
                "Edition.useEffect": ()=>{
                    cancelAnimationFrame(animationFrameId);
                // Clean up event listeners - not strictly necessary as elements are removed
                }
            })["Edition.useEffect"];
        }
    }["Edition.useEffect"], []);
    const addToRefs = (el)=>{
        if (el && !foldersRef.current.includes(el)) {
            foldersRef.current.push(el);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageContainer,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].folder} ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].folder1}`,
                    "data-speed": "0.5",
                    ref: addToRefs,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].folderContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                children: "PRINT EDITION"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                lineNumber: 64,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        children: "PRINT ARCHIVE"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 66,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].box
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 67,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barcode
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textBlock,
                                        children: [
                                            "DESIGNED FOR ATTENTION,",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                                lineNumber: 70,
                                                columnNumber: 48
                                            }, this),
                                            "BUILT FOR PRINT,",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                                lineNumber: 71,
                                                columnNumber: 41
                                            }, this),
                                            "MADE TO LAST."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].roundedFrame,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "11px",
                                                    fontWeight: "bold",
                                                    color: "#4a4a3a",
                                                    marginBottom: "10px"
                                                },
                                                children: "FU"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                                lineNumber: 75,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "9px",
                                                    color: "#4a4a3a",
                                                    lineHeight: 1.6
                                                },
                                                children: "WATCH IS DEEPLY LOVED AND SOUGHT AFTER. FIRST OF ALL, IT'S THE BEST GIFT."
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                                lineNumber: 76,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].circleDots,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                                lineNumber: 81,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                                lineNumber: 82,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                                lineNumber: 83,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imagePlaceholder
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hexagon
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "9px",
                                            color: "#4a4a3a",
                                            marginTop: "30px"
                                        },
                                        children: [
                                            "VISUAL STUDIES",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                                lineNumber: 89,
                                                columnNumber: 39
                                            }, this),
                                            "TYPE · LAYOUT · SCALE"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                lineNumber: 65,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                        lineNumber: 63,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].folder} ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].folder2}`,
                    "data-speed": "0.7",
                    ref: addToRefs,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].folderContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].time,
                                        children: "PROJECT LOG"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logLabel,
                                        children: [
                                            "COLLEGE",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                                lineNumber: 100,
                                                columnNumber: 61
                                            }, this),
                                            "CLUB",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                                lineNumber: 100,
                                                columnNumber: 70
                                            }, this),
                                            "POSTERS"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 100,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                lineNumber: 98,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileTab,
                                children: "CAMPUS CAMPAIGNS"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                lineNumber: 102,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].encryptedLabel,
                                children: [
                                    "OFFLINE EVENTS",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 70
                                    }, this),
                                    "PRINT FIRST VISUALS"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                lineNumber: 103,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gridPattern
                            }, void 0, false, {
                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                lineNumber: 104,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageDark,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/AOT CLUB shashish submisison.png",
                                    alt: "Event poster"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                lineNumber: 105,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "9px",
                                    marginTop: "20px",
                                    color: "#2a2a2a"
                                },
                                children: [
                                    "EVENT PROMOTION",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 36
                                    }, this),
                                    "HIGH FOOTFALL"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                lineNumber: 108,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrowRight
                            }, void 0, false, {
                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                lineNumber: 111,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageDark,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/shashish independence day.png",
                                    alt: "Independence Day poster"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                    lineNumber: 113,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                lineNumber: 112,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                        lineNumber: 97,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].folder} ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].folder3}`,
                    "data-speed": "0.6",
                    ref: addToRefs,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].folderContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].techLabel,
                                children: [
                                    "IDENTITY · MOOD",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 66
                                    }, this),
                                    "VISUAL · VOICE"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                lineNumber: 121,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contentBox,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/DONDA-1.png",
                                    alt: "Donda music poster"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                    lineNumber: 123,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                lineNumber: 122,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].diagonalStripe
                            }, void 0, false, {
                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                lineNumber: 125,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contentBox,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/call me if your lost tyler -1.png",
                                    alt: "Call Me If You Get Lost poster"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                    lineNumber: 127,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                lineNumber: 126,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].plusPattern,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].plusIcon
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 130,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].plusIcon
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].plusIcon
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                lineNumber: 129,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contentBox,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/TRIOLOGY.png",
                                    alt: "Trilogy"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                    lineNumber: 135,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                lineNumber: 134,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                        lineNumber: 120,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].folder} ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].folder4}`,
                    "data-speed": "0.8",
                    ref: addToRefs,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].folderContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                lineNumber: 143,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageTall,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/ChatGPT Image Jan 1, 2026, 06_59_12 PM.png",
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                    lineNumber: 147,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                lineNumber: 146,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageDark,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/hav final.png",
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                    lineNumber: 150,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                lineNumber: 149,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                        lineNumber: 142,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].folder} ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].folder5}`,
                    "data-speed": "0.5",
                    ref: addToRefs,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].folderContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].techLabel,
                                children: "LARGE FORMAT · PUBLIC SPACES"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                lineNumber: 158,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconBox,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    src: "/videos/marketing.mp4",
                                    autoPlay: true,
                                    loop: true,
                                    muted: true,
                                    playsInline: true
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                lineNumber: 159,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].codeBlock,
                                children: [
                                    "DESIGNED TO BE SEEN",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 40
                                    }, this),
                                    "BUILT FOR SCALE"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                lineNumber: 162,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageBox,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/Gemini_Generated_Image_gvm11gvm11gvm11g.png",
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                lineNumber: 165,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressBar
                            }, void 0, false, {
                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                lineNumber: 168,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageBox,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/Gemini_Generated_Image_i7byli7byli7byli.png",
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                    lineNumber: 170,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                lineNumber: 169,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                        lineNumber: 157,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].folder} ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].folder6}`,
                    "data-speed": "0.6",
                    ref: addToRefs,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].folderContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                lineNumber: 178,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageBox,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/DS4EVER.png",
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                    lineNumber: 182,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                lineNumber: 181,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageBox,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/GOOD KID MAAD CITY.png",
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                    lineNumber: 185,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                lineNumber: 184,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$app$2f$edition$2f$edition$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].circuit
                            }, void 0, false, {
                                fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                                lineNumber: 187,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                        lineNumber: 177,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/portfolio-main/app/edition/page.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(Edition, "V1m7HXMTHIhLxR8221svmFj/ioI=");
_c = Edition;
var _c;
__turbopack_context__.k.register(_c, "Edition");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/portfolio-main/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/portfolio-main/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Downloads/portfolio-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Downloads/portfolio-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/portfolio-main/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Downloads/portfolio-main/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=Downloads_portfolio-main_1a3b74da._.js.map