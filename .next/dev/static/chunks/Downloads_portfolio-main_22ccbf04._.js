(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/portfolio-main/components/CobeGlobe.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CobeGlobe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/portfolio-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$cobe$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/portfolio-main/node_modules/cobe/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/portfolio-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CobeGlobe({ location }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pointerInteracting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pointerInteractionMovement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Target rotation
    const targetPhi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const targetTheta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CobeGlobe.useEffect": ()=>{
            // Convert Lat/Long to Phi/Theta targets
            // Phi: 0 (North) to PI (South). Lat: 90 (N) to -90 (S).
            targetPhi.current = (90 - location[0]) * (Math.PI / 180);
            // Theta: Longitude. Adjust offset to center the view.
            // Cobe's 0 theta might not be Greenwich. Usually requires some offset.
            // Experimentally, negative longitude works well.
            targetTheta.current = location[1] * Math.PI / 180;
        }
    }["CobeGlobe.useEffect"], [
        location
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CobeGlobe.useEffect": ()=>{
            let width = 0;
            const onResize = {
                "CobeGlobe.useEffect.onResize": ()=>canvasRef.current && (width = canvasRef.current.offsetWidth)
            }["CobeGlobe.useEffect.onResize"];
            window.addEventListener('resize', onResize);
            onResize();
            if (!canvasRef.current) return;
            const globe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$cobe$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(canvasRef.current, {
                devicePixelRatio: 2,
                width: width * 2,
                height: width * 2,
                phi: targetPhi.current,
                theta: targetTheta.current,
                dark: 1,
                diffuse: 1.2,
                mapSamples: 16000,
                mapBrightness: 6,
                baseColor: [
                    0.3,
                    0.3,
                    0.3
                ],
                markerColor: [
                    0.1,
                    0.8,
                    1
                ],
                glowColor: [
                    0.1,
                    0.1,
                    0.2
                ],
                markers: [
                    {
                        location: [
                            40.7128,
                            -74.0060
                        ],
                        size: 0.08
                    },
                    {
                        location: [
                            52.5200,
                            13.4050
                        ],
                        size: 0.08
                    },
                    {
                        location: [
                            28.6139,
                            77.2090
                        ],
                        size: 0.08
                    }
                ],
                onRender: {
                    "CobeGlobe.useEffect.globe": (state)=>{
                        // Smoothly interpolate phi and theta to the target location
                        // Use a spring-like motion
                        // Distances
                        let distPhi = targetPhi.current - state.phi;
                        let distTheta = targetTheta.current - state.theta;
                        // Normalize theta distance to take shortest path
                        const twoPi = 2 * Math.PI;
                        if (distTheta > Math.PI) distTheta -= twoPi;
                        if (distTheta < -Math.PI) distTheta += twoPi;
                        // Apply easing
                        state.phi += distPhi * 0.05;
                        state.theta += distTheta * 0.05;
                    }
                }["CobeGlobe.useEffect.globe"]
            });
            return ({
                "CobeGlobe.useEffect": ()=>{
                    globe.destroy();
                    window.removeEventListener('resize', onResize);
                }
            })["CobeGlobe.useEffect"];
        }
    }["CobeGlobe.useEffect"], []); // Empty dependency array -> create once
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
            height: '100%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            style: {
                width: 200,
                height: 200,
                maxWidth: '100%',
                aspectRatio: 1
            }
        }, void 0, false, {
            fileName: "[project]/Downloads/portfolio-main/components/CobeGlobe.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/portfolio-main/components/CobeGlobe.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(CobeGlobe, "s800XIIP2U2gBqIsIiEfRV2RTds=");
_c = CobeGlobe;
var _c;
__turbopack_context__.k.register(_c, "CobeGlobe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/portfolio-main/components/CobeGlobe.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Downloads/portfolio-main/components/CobeGlobe.tsx [app-client] (ecmascript)"));
}),
"[project]/Downloads/portfolio-main/node_modules/phenomenon/dist/phenomenon.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var t = [
    "x",
    "y",
    "z"
], e = function(t) {
    Object.assign(this, {
        uniforms: {},
        geometry: {
            vertices: [
                {
                    x: 0,
                    y: 0,
                    z: 0
                }
            ]
        },
        mode: 0,
        modifiers: {},
        attributes: [],
        multiplier: 1,
        buffers: []
    }), Object.assign(this, t), this.prepareProgram(), this.prepareUniforms(), this.prepareAttributes();
};
e.prototype.compileShader = function(t, e) {
    var i = this.gl.createShader(t);
    return this.gl.shaderSource(i, e), this.gl.compileShader(i), i;
}, e.prototype.prepareProgram = function() {
    var t = this.gl, e = this.vertex, i = this.fragment, r = t.createProgram();
    t.attachShader(r, this.compileShader(35633, e)), t.attachShader(r, this.compileShader(35632, i)), t.linkProgram(r), t.useProgram(r), this.program = r;
}, e.prototype.prepareUniforms = function() {
    for(var t = Object.keys(this.uniforms), e = 0; e < t.length; e += 1){
        var i = this.gl.getUniformLocation(this.program, t[e]);
        this.uniforms[t[e]].location = i;
    }
}, e.prototype.prepareAttributes = function() {
    void 0 !== this.geometry.vertices && this.attributes.push({
        name: "aPosition",
        size: 3
    }), void 0 !== this.geometry.normal && this.attributes.push({
        name: "aNormal",
        size: 3
    }), this.attributeKeys = [];
    for(var t = 0; t < this.attributes.length; t += 1)this.attributeKeys.push(this.attributes[t].name), this.prepareAttribute(this.attributes[t]);
}, e.prototype.prepareAttribute = function(e) {
    for(var i = this.geometry, r = this.multiplier, s = i.vertices, n = i.normal, a = new Float32Array(r * s.length * e.size), o = 0; o < r; o += 1)for(var h = e.data && e.data(o, r), u = o * s.length * e.size, f = 0; f < s.length; f += 1)for(var c = 0; c < e.size; c += 1){
        var l = this.modifiers[e.name];
        a[u] = void 0 !== l ? l(h, f, c, this) : "aPosition" === e.name ? s[f][t[c]] : "aNormal" === e.name ? n[f][t[c]] : h[c], u += 1;
    }
    this.attributes[this.attributeKeys.indexOf(e.name)].data = a, this.prepareBuffer(this.attributes[this.attributeKeys.indexOf(e.name)]);
}, e.prototype.prepareBuffer = function(t) {
    var e = t.data, i = t.name, r = t.size, s = this.gl.createBuffer();
    this.gl.bindBuffer(34962, s), this.gl.bufferData(34962, e, 35044);
    var n = this.gl.getAttribLocation(this.program, i);
    this.gl.enableVertexAttribArray(n), this.gl.vertexAttribPointer(n, r, 5126, !1, 0, 0), this.buffers[this.attributeKeys.indexOf(t.name)] = {
        buffer: s,
        location: n,
        size: r
    };
}, e.prototype.render = function(t) {
    var e = this, i = this.uniforms, r = this.multiplier, s = this.gl;
    s.useProgram(this.program);
    for(var n = 0; n < this.buffers.length; n += 1){
        var a = this.buffers[n], o = a.location, h = a.buffer, u = a.size;
        s.enableVertexAttribArray(o), s.bindBuffer(34962, h), s.vertexAttribPointer(o, u, 5126, !1, 0, 0);
    }
    Object.keys(t).forEach(function(e) {
        i[e].value = t[e].value;
    }), Object.keys(i).forEach(function(t) {
        var r = i[t];
        e.uniformMap[r.type](r.location, r.value);
    }), s.drawArrays(this.mode, 0, r * this.geometry.vertices.length), this.onRender && this.onRender(this);
}, e.prototype.destroy = function() {
    for(var t = 0; t < this.buffers.length; t += 1)this.gl.deleteBuffer(this.buffers[t].buffer);
    this.gl.deleteProgram(this.program), this.gl = null;
};
var i = function(t) {
    var e = this, i = t || {}, r = i.canvas;
    void 0 === r && (r = document.querySelector("canvas"));
    var s = i.context;
    void 0 === s && (s = {});
    var n = i.contextType;
    void 0 === n && (n = "experimental-webgl");
    var a = i.settings;
    void 0 === a && (a = {});
    var o = r.getContext(n, Object.assign({
        alpha: !1,
        antialias: !1
    }, s));
    Object.assign(this, {
        gl: o,
        canvas: r,
        uniforms: {},
        instances: new Map,
        shouldRender: !0
    }), Object.assign(this, {
        devicePixelRatio: 1,
        clearColor: [
            1,
            1,
            1,
            1
        ],
        position: {
            x: 0,
            y: 0,
            z: 2
        },
        clip: [
            .001,
            100
        ]
    }), Object.assign(this, a), this.uniformMap = {
        float: function(t, e) {
            return o.uniform1f(t, e);
        },
        vec2: function(t, e) {
            return o.uniform2fv(t, e);
        },
        vec3: function(t, e) {
            return o.uniform3fv(t, e);
        },
        vec4: function(t, e) {
            return o.uniform4fv(t, e);
        },
        mat2: function(t, e) {
            return o.uniformMatrix2fv(t, !1, e);
        },
        mat3: function(t, e) {
            return o.uniformMatrix3fv(t, !1, e);
        },
        mat4: function(t, e) {
            return o.uniformMatrix4fv(t, !1, e);
        }
    }, o.enable(o.DEPTH_TEST), o.depthFunc(o.LEQUAL), !1 === o.getContextAttributes().alpha && (o.clearColor.apply(o, this.clearColor), o.clearDepth(1)), this.onSetup && this.onSetup(o), window.addEventListener("resize", function() {
        return e.resize();
    }), this.resize(), this.render();
};
i.prototype.resize = function() {
    var t = this.gl, e = this.canvas, i = this.devicePixelRatio, r = this.position;
    e.width = e.clientWidth * i, e.height = e.clientHeight * i;
    var s = t.drawingBufferWidth, n = t.drawingBufferHeight, a = s / n;
    t.viewport(0, 0, s, n);
    var o = Math.tan(Math.PI / 180 * 22.5), h = [
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        r.x,
        r.y,
        (a < 1 ? 1 : a) * -r.z,
        1
    ];
    this.uniforms.uProjectionMatrix = {
        type: "mat4",
        value: [
            .5 / o,
            0,
            0,
            0,
            0,
            a / o * .5,
            0,
            0,
            0,
            0,
            -(this.clip[1] + this.clip[0]) / (this.clip[1] - this.clip[0]),
            -1,
            0,
            0,
            -2 * this.clip[1] * (this.clip[0] / (this.clip[1] - this.clip[0])),
            0
        ]
    }, this.uniforms.uViewMatrix = {
        type: "mat4",
        value: [
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        ]
    }, this.uniforms.uModelMatrix = {
        type: "mat4",
        value: h
    };
}, i.prototype.toggle = function(t) {
    t !== this.shouldRender && (this.shouldRender = void 0 !== t ? t : !this.shouldRender, this.shouldRender && this.render());
}, i.prototype.render = function() {
    var t = this;
    this.gl.clear(16640), this.instances.forEach(function(e) {
        e.render(t.uniforms);
    }), this.onRender && this.onRender(this), this.shouldRender && requestAnimationFrame(function() {
        return t.render();
    });
}, i.prototype.add = function(t, i) {
    void 0 === i && (i = {
        uniforms: {}
    }), void 0 === i.uniforms && (i.uniforms = {}), Object.assign(i.uniforms, JSON.parse(JSON.stringify(this.uniforms))), Object.assign(i, {
        gl: this.gl,
        uniformMap: this.uniformMap
    });
    var r = new e(i);
    return this.instances.set(t, r), r;
}, i.prototype.remove = function(t) {
    var e = this.instances.get(t);
    void 0 !== e && (e.destroy(), this.instances.delete(t));
}, i.prototype.destroy = function() {
    var t = this;
    this.instances.forEach(function(e, i) {
        e.destroy(), t.instances.delete(i);
    }), this.toggle(!1);
};
const __TURBOPACK__default__export__ = i;
}),
"[project]/Downloads/portfolio-main/node_modules/cobe/dist/index.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_t
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$phenomenon$2f$dist$2f$phenomenon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/portfolio-main/node_modules/phenomenon/dist/phenomenon.mjs [app-client] (ecmascript)");
;
var C = "phi", U = "theta", r = "mapSamples", p = "mapBrightness", v = "baseColor", D = "markerColor", B = "glowColor", i = "markers", w = "diffuse", y = "devicePixelRatio", F = "dark", b = "offset", g = "scale", H = "opacity", K = "mapBaseBrightness", k = {
    [C]: "z",
    [U]: "A",
    [r]: "k",
    [p]: "D",
    [v]: "S",
    [D]: "T",
    [B]: "y",
    [w]: "E",
    [F]: "F",
    [b]: "x",
    [g]: "B",
    [H]: "U",
    [K]: "G"
}, { PI: M, sin: X, cos: f, sqrt: z, atan2: V, floor: A, max: J, pow: Q, log2: Z } = Math, Y = 2.23606797749979, q = 1.618033988749895, $ = .7202100452062783, l = 6.283185307179586, W = 3.8832220774509327, m = .618033988749895, tt = (E, n)=>{
    let _ = [
        E[0],
        E[2],
        E[1]
    ], c = 1 / n, a = J(2, A(Z(Y * n * M * (1 - _[2] * _[2])) * $)), t = Q(q, a) / Y, e = [
        A(t + .5),
        A(t * q + .5)
    ], o = [
        (e[0] + 1) * m % 1 * l - W,
        (e[1] + 1) * m % 1 * l - W
    ], L = [
        -2 * e[0],
        -2 * e[1]
    ], S = [
        V(_[1], _[0]),
        _[2] - 1
    ], s = o[0] * L[1] - L[0] * o[1], T = [
        A((L[1] * S[0] - o[1] * (S[1] * n + 1)) / s),
        A((-L[0] * S[0] + o[0] * (S[1] * n + 1)) / s)
    ], R = M, O = [
        0,
        0,
        0
    ];
    for(let N = 0; N < 4; N++){
        let P = e[0] * (T[0] + N % 2) + e[1] * (T[1] + A(N * .5));
        if (P > n) continue;
        let d = P * m % 1 * l, u = 1 - 2 * P * c, I = z(1 - u * u), G = [
            f(d) * I,
            X(d) * I,
            u
        ], h = z((_[0] - G[0]) ** 2 + (_[1] - G[1]) ** 2 + (_[2] - G[2]) ** 2);
        h < R && (R = h, O = G);
    }
    return [
        O[0],
        O[2],
        O[1]
    ];
}, x = (E, n)=>[].concat(...E.map((_)=>{
        let [c, a] = _.location;
        c = c * M / 180, a = a * M / 180 - M;
        let t = f(c), e = [
            -t * f(a),
            X(c),
            t * X(a)
        ];
        return [
            ...tt(e, n),
            _.size,
            ..._.color ? [
                ..._.color,
                1
            ] : [
                0,
                0,
                0,
                0
            ]
        ];
    }), [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ]), _t = (E, n)=>{
    let _ = (t, e, o)=>({
            type: t,
            value: typeof n[e] == "undefined" ? o : n[e]
        }), c = E.getContext("webgl2") ? "webgl2" : E.getContext("webgl") ? "webgl" : "experimental-webgl", a = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$portfolio$2d$main$2f$node_modules$2f$phenomenon$2f$dist$2f$phenomenon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
        canvas: E,
        contextType: c,
        context: {
            alpha: !0,
            stencil: !1,
            antialias: !0,
            depth: !1,
            preserveDrawingBuffer: !1,
            ...n.context
        },
        settings: {
            [y]: n[y] || 1,
            onSetup: (t)=>{
                let e = t.RGB, o = t.UNSIGNED_BYTE, L = t.TEXTURE_2D, S = t.createTexture();
                t.bindTexture(L, S), t.texImage2D(L, 0, e, 1, 1, 0, e, o, new Uint8Array([
                    0,
                    0,
                    0,
                    0
                ]));
                let s = new Image;
                s.onload = ()=>{
                    t.bindTexture(L, S), t.texImage2D(L, 0, e, e, o, s), t.generateMipmap(L);
                    let T = t.getParameter(t.CURRENT_PROGRAM), R = t.getUniformLocation(T, "H");
                    t.texParameteri(L, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(L, t.TEXTURE_MAG_FILTER, t.NEAREST), t.uniform1i(R, 0);
                }, s.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAACAAQAAAADMzoqnAAAAAXNSR0IArs4c6QAABA5JREFUeNrV179uHEUAx/Hf3JpbF+E2VASBsmVKTBcpKJs3SMEDcDwBiVJAAewYEBUivIHT0uUBIt0YCovKD0CRjUC4QfHYh8hYXu+P25vZ2Zm9c66gMd/GJ/tz82d3bk8GN4SrByYF2366FNTACIAkivVAAazQdnf3MvAlbNUQfOPAdQDvSAimMWhwy4I2g4SU+Kp04ISLpPBAKLxPyic3O/CCi+Y7rUJbiodcpDOFY7CgxCEXmdYD2EYK2s5lApOx5pEDDYCUwM1XdJUwBV11QQMg59kePSCaPAASQMEL2hwo6TJFgxpg+TgC2ymXPbuvc40awr3D1QCFfbH9kcoqAOkZozpQo0aqAGQRKCog/+tjkgbNFEtg2FffBvBGlSxHoAaAa1u6X4PBAwDiR8FFsrQgeUhfJTSALaB9jy5NCybJPn1SVFiWk7ywN+KzhH1aKAuydhGkbEF4lWohLXDXavlyFgHY7LBnLRdlAP6BS5Cc8RfVDXbkwN/oIvmY+6obbNeBP0JwTuMGu9gTzy1Q4RS/cWpfzszeYwd+CAFrtBW/Hur0gLbJGlD+/OjVwe/drfBxkbbg63dndEDfiEBlAd7ac0BPe1D6Jd8dfbLH+RI0OzseFB5s01/M+gMdAeluLOCAuaUA9Lezo/vSgXoCX9rtEiXnp7Q1W/CNyWcd8DXoS6jH/YZ5vAJEWY2dXFQe2TUgaFaNejCzJ98g6HnlVrsE58sDcYqg+9XY75fPqdoh/kRQWiXKg8MWlJQxUFMPjqnyujhFBE7UxIMjyszk0QwQlFsezImsyvUYYYVED2pk6m0Tg8T04Fwjk2kdAwSACqlM6gRRt3vQYAFGX0Ah7Ebx1H+MDRI5ui0QldH4j7FGcm90XdxD2Jg1AOEAVAKhEFXSn4cKUELurIAKwJ3MArypPscQaLhJFICJ0ohjDySAdH8AhDtCiTuMycH8CXzhH9jUACAO5uMhoAwA5i+T6WAKmmAqnLy80wxHqIPFYpqCwxGaYLt4Dyievg5kEoVEUAhs6pqKgFtDQYOuaXypaWKQfIuwwoGSZgfLsu/XAtI8cGN+h7Cc1A5oLOMhwlIPXuhu48AIvsSBkvtV9wsJRKCyYLfq5lTrQMFd1a262oqBck9K1V0YjQg0iEYYgpS1A9GlXQV5cykwm4A7BzVsxQqo7E+zCegO7Ma7yKgsuOcfKbMBwLC8wvVNYDsANYalEpOAa6zpWjTeMKGwEwC1CiQewJc5EKfgy7GmRAZA4vUVGwE2dPM/g0xuAInE/yG5aZ8ISxWGfYigUVbdyBElTHh2uCwGdfCkOLGgQVBh3Ewp+/QK4CDlR5Ws/Zf7yhCf8pH7vinWAvoVCQ6zz0NX5V/6GkAVV+2/5qsJ/gU8bsxpM8IeAQAAAABJRU5ErkJggg==";
            }
        }
    });
    return a.add("", {
        vertex: "attribute vec3 aPosition;uniform mat4 uProjectionMatrix;uniform mat4 uModelMatrix;uniform mat4 uViewMatrix;void main(){gl_Position=uProjectionMatrix*uModelMatrix*uViewMatrix*vec4(aPosition,1.);}",
        fragment: "precision highp float;uniform vec2 w,x;uniform vec3 S,T,y;uniform vec4 u[64*2];uniform float z,A,k,B,C,D,E,F,U,G;uniform sampler2D H;float I=1./k;mat3 J(float a,float b){float c=cos(a),d=cos(b),e=sin(a),f=sin(b);return mat3(d,f*e,-f*c,0.,c,e,f,d*-e,d*c);}vec3 K(vec3 c,out float v){c=c.xzy;float p=max(2.,floor(log2(2.236068*k*3.141593*(1.-c.z*c.z))*.72021));vec2 g=floor(pow(1.618034,p)/2.236068*vec2(1,1.618034)+.5),d=fract((g+1.)*.618034)*6.283185-3.883222,e=-2.*g,f=vec2(atan(c.y,c.x),c.z-1.),q=floor(vec2(e.y*f.x-d.y*(f.y*k+1.),-e.x*f.x+d.x*(f.y*k+1.))/(d.x*e.y-e.x*d.y));float n=3.141593;vec3 r;for(float h=0.;h<4.;h+=1.){vec2 s=vec2(mod(h,2.),floor(h*.5));float j=dot(g,q+s);if(j>k)continue;float a=j,b=0.;if(a>=524288.)a-=524288.,b+=.803894;if(a>=262144.)a-=262144.,b+=.901947;if(a>=131072.)a-=131072.,b+=.950973;if(a>=65536.)a-=65536.,b+=.475487;if(a>=32768.)a-=32768.,b+=.737743;if(a>=16384.)a-=16384.,b+=.868872;if(a>=8192.)a-=8192.,b+=.934436;if(a>=4096.)a-=4096.,b+=.467218;if(a>=2048.)a-=2048.,b+=.733609;if(a>=1024.)a-=1024.,b+=.866804;if(a>=512.)a-=512.,b+=.433402;if(a>=256.)a-=256.,b+=.216701;if(a>=128.)a-=128.,b+=.108351;if(a>=64.)a-=64.,b+=.554175;if(a>=32.)a-=32.,b+=.777088;if(a>=16.)a-=16.,b+=.888544;if(a>=8.)a-=8.,b+=.944272;if(a>=4.)a-=4.,b+=.472136;if(a>=2.)a-=2.,b+=.236068;if(a>=1.)a-=1.,b+=.618034;float l=fract(b)*6.283185,i=1.-2.*j*I,m=sqrt(1.-i*i);vec3 o=vec3(cos(l)*m,sin(l)*m,i);float t=length(c-o);if(t<n)n=t,r=o;}v=n;return r.xzy;}void main(){vec2 f=1./w,a=(gl_FragCoord.xy*f*2.-1.)/B-x*vec2(1,-1)*f;a.x*=w.x*f.y;float c=dot(a,a);vec4 t=vec4(0);float j=0.;int V=int(C);if(c<=.64){float b;vec4 e=vec4(0);vec3 v=vec3(0,0,1),l=normalize(vec3(a,sqrt(.64-c)));mat3 L=J(A,z);float g=dot(l,v);vec3 m=l*L,h=K(m,b);float n=asin(h.y),i=acos(-h.x/cos(n));i=h.z<0.?-i:i;float M=max(texture2D(H,vec2(i*.5/3.141593,-(n/3.141593+.5))).x,G),N=smoothstep(8e-3,0.,b),o=pow(g,E)*D,p=M*N*o,W=mix((1.-p)*pow(g,.4),p,F)+.1;e+=vec4(S*W,1.);float X=0.;for(int d=0;d<128;d+=2){if(d>=V)break;vec4 q=u[d],O=u[d+1];vec3 P=q.xyz;float r=q.w;vec3 Y=P-m;b=length(Y);if(b<r){float Q=r*.5,s=smoothstep(Q,0.,b);X+=s,e.xyz=O.w>.5?mix(e.xyz,O.xyz,s*o):mix(e.xyz,T,s*o);}}e.xyz+=pow(1.-g,4.)*y,t+=e*(1.+U)*.5,j=pow(dot(normalize(vec3(-a,sqrt(1.-c))),vec3(0,0,1)),4.)*smoothstep(0.,1.,.2/(c-.64));}else{float R=sqrt(.2/(c-.64));j=smoothstep(.5,1.,R/(R+1.));}gl_FragColor=t+vec4(j*y,j);}",
        uniforms: {
            w: {
                type: "vec2",
                value: [
                    n.width,
                    n.height
                ]
            },
            z: _("float", C),
            A: _("float", U),
            k: _("float", r),
            D: _("float", p),
            G: _("float", K),
            S: _("vec3", v),
            T: _("vec3", D),
            E: _("float", w),
            y: _("vec3", B),
            F: _("float", F),
            u: {
                type: "vec4",
                value: x(n[i], n[r])
            },
            C: {
                type: "float",
                value: n[i].length * 2
            },
            x: _("vec2", b, [
                0,
                0
            ]),
            B: _("float", g, 1),
            U: _("float", H, 1)
        },
        mode: 4,
        geometry: {
            vertices: [
                {
                    x: -100,
                    y: 100,
                    z: 0
                },
                {
                    x: -100,
                    y: -100,
                    z: 0
                },
                {
                    x: 100,
                    y: 100,
                    z: 0
                },
                {
                    x: 100,
                    y: -100,
                    z: 0
                },
                {
                    x: -100,
                    y: -100,
                    z: 0
                },
                {
                    x: 100,
                    y: 100,
                    z: 0
                }
            ]
        },
        onRender: ({ uniforms: t })=>{
            let e = {};
            if (n.onRender) {
                e = n.onRender(e) || e;
                for(let o in k)e[o] !== void 0 && (t[k[o]].value = e[o]);
                if (e[i] !== void 0) {
                    let o = e[r] !== void 0 ? e[r] : t["k"].value;
                    t["u"].value = x(e[i], o), t["C"].value = e[i].length;
                }
                e.width && e.height && (t["w"].value = [
                    e.width,
                    e.height
                ]), e[r] !== void 0 && (t["u"].value = x(e[i] || n[i], e[r]));
            }
        }
    }), a;
};
;
}),
]);

//# sourceMappingURL=Downloads_portfolio-main_22ccbf04._.js.map