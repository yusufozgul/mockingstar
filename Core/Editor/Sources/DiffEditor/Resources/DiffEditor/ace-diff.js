/*! Ace-diff | github.com/ace-diff/ace-diff */
!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e(require("brace")) : "function" == typeof define && define.amd ? define(["brace"], e) : "object" == typeof exports ? exports.AceDiff = e(require("brace")) : t.AceDiff = e(t.ace)
}("undefined" != typeof self ? self : this, function(t) {
    return function(t) {
        var e = {};
        function n(r) {
            if (e[r])
                return e[r].exports;
            var i = e[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }
        return n.m = t, n.c = e, n.d = function(t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 30)
    }([function(t, e) {
        t.exports = function(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e)
        }
    }, function(t, e, n) {
        var r = n(16),
            i = "object" == typeof self && self && self.Object === Object && self,
            o = r || i || Function("return this")();
        t.exports = o
    }, function(t, e) {
        t.exports = function(t) {
            return null != t && "object" == typeof t
        }
    }, function(t, e, n) {
        var r = n(15),
            i = n(47),
            o = n(48),
            s = "[object Null]",
            a = "[object Undefined]",
            f = r ? r.toStringTag : void 0;
        t.exports = function(t) {
            return null == t ? void 0 === t ? a : s : f && f in Object(t) ? i(t) : o(t)
        }
    }, function(t, e, n) {
        var r = n(35),
            i = n(36),
            o = n(37),
            s = n(38),
            a = n(39);
        function f(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        f.prototype.clear = r,
        f.prototype.delete = i,
        f.prototype.get = o,
        f.prototype.has = s,
        f.prototype.set = a,
        t.exports = f
    }, function(t, e, n) {
        var r = n(6);
        t.exports = function(t, e) {
            for (var n = t.length; n--;)
                if (r(t[n][0], e))
                    return n;
            return -1
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            return t === e || t != t && e != e
        }
    }, function(t, e, n) {
        var r = n(9)(Object, "create");
        t.exports = r
    }, function(t, e, n) {
        var r = n(62);
        t.exports = function(t, e) {
            var n = t.__data__;
            return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
        }
    }, function(t, e, n) {
        var r = n(45),
            i = n(52);
        t.exports = function(t, e) {
            var n = i(t, e);
            return r(n) ? n : void 0
        }
    }, function(t, e, n) {
        var r = n(3),
            i = n(0),
            o = "[object AsyncFunction]",
            s = "[object Function]",
            a = "[object GeneratorFunction]",
            f = "[object Proxy]";
        t.exports = function(t) {
            if (!i(t))
                return !1;
            var e = r(t);
            return e == s || e == a || e == o || e == f
        }
    }, function(t, e, n) {
        var r = n(18);
        t.exports = function(t, e, n) {
            "__proto__" == e && r ? r(t, e, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0
            }) : t[e] = n
        }
    }, function(t, e) {
        t.exports = function(t) {
            return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i
                }
            }), t.webpackPolyfill = 1), t
        }
    }, function(t, e, n) {
        var r = n(10),
            i = n(23);
        t.exports = function(t) {
            return null != t && i(t.length) && !r(t)
        }
    }, function(t, e, n) {
        var r = n(9)(n(1), "Map");
        t.exports = r
    }, function(t, e, n) {
        var r = n(1).Symbol;
        t.exports = r
    }, function(t, e, n) {
        (function(e) {
            var n = "object" == typeof e && e && e.Object === Object && e;
            t.exports = n
        }).call(e, n(46))
    }, function(t, e, n) {
        var r = n(11),
            i = n(6);
        t.exports = function(t, e, n) {
            (void 0 === n || i(t[e], n)) && (void 0 !== n || e in t) || r(t, e, n)
        }
    }, function(t, e, n) {
        var r = n(9),
            i = function() {
                try {
                    var t = r(Object, "defineProperty");
                    return t({}, "", {}), t
                } catch (t) {}
            }();
        t.exports = i
    }, function(t, e, n) {
        var r = n(76)(Object.getPrototypeOf, Object);
        t.exports = r
    }, function(t, e) {
        var n = Object.prototype;
        t.exports = function(t) {
            var e = t && t.constructor;
            return t === ("function" == typeof e && e.prototype || n)
        }
    }, function(t, e, n) {
        var r = n(77),
            i = n(2),
            o = Object.prototype,
            s = o.hasOwnProperty,
            a = o.propertyIsEnumerable,
            f = r(function() {
                return arguments
            }()) ? r : function(t) {
                return i(t) && s.call(t, "callee") && !a.call(t, "callee")
            };
        t.exports = f
    }, function(t, e) {
        var n = Array.isArray;
        t.exports = n
    }, function(t, e) {
        var n = 9007199254740991;
        t.exports = function(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n
        }
    }, function(t, e, n) {
        (function(t) {
            var r = n(1),
                i = n(79),
                o = "object" == typeof e && e && !e.nodeType && e,
                s = o && "object" == typeof t && t && !t.nodeType && t,
                a = s && s.exports === o ? r.Buffer : void 0,
                f = (a ? a.isBuffer : void 0) || i;
            t.exports = f
        }).call(e, n(12)(t))
    }, function(t, e, n) {
        var r = n(81),
            i = n(82),
            o = n(83),
            s = o && o.isTypedArray,
            a = s ? i(s) : r;
        t.exports = a
    }, function(t, e, n) {
        var r = n(87),
            i = n(89),
            o = n(13);
        t.exports = function(t) {
            return o(t) ? r(t, !0) : i(t)
        }
    }, function(t, e) {
        var n = 9007199254740991,
            r = /^(?:0|[1-9]\d*)$/;
        t.exports = function(t, e) {
            return !!(e = null == e ? n : e) && ("number" == typeof t || r.test(t)) && t > -1 && t % 1 == 0 && t < e
        }
    }, function(t, e) {
        t.exports = function(t) {
            return t
        }
    }, function(t, e, n) {
        var r = n(0),
            i = n(100),
            o = n(101),
            s = "Expected a function",
            a = Math.max,
            f = Math.min;
        t.exports = function(t, e, n) {
            var c,
                l,
                h,
                u,
                g,
                p,
                d = 0,
                v = !1,
                _ = !1,
                b = !0;
            if ("function" != typeof t)
                throw new TypeError(s);
            function y(e) {
                var n = c,
                    r = l;
                return c = l = void 0, d = e, u = t.apply(r, n)
            }
            function m(t) {
                var n = t - p;
                return void 0 === p || n >= e || n < 0 || _ && t - d >= h
            }
            function x() {
                var t,
                    n,
                    r = i();
                if (m(r))
                    return L(r);
                g = setTimeout(x, (n = e - ((t = r) - p), _ ? f(n, h - (t - d)) : n))
            }
            function L(t) {
                return g = void 0, b && c ? y(t) : (c = l = void 0, u)
            }
            function E() {
                var t,
                    n = i(),
                    r = m(n);
                if (c = arguments, l = this, p = n, r) {
                    if (void 0 === g)
                        return d = t = p, g = setTimeout(x, e), v ? y(t) : u;
                    if (_)
                        return g = setTimeout(x, e), y(p)
                }
                return void 0 === g && (g = setTimeout(x, e)), u
            }
            return e = o(e) || 0, r(n) && (v = !!n.leading, h = (_ = "maxWait" in n) ? a(o(n.maxWait) || 0, e) : h, b = "trailing" in n ? !!n.trailing : b), E.cancel = function() {
                void 0 !== g && clearTimeout(g),
                d = 0,
                c = p = l = g = void 0
            }, E.flush = function() {
                return void 0 === g ? u : L(i())
            }, E
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = u(n(31)),
            i = u(n(32)),
            o = u(n(29)),
            s = u(n(103)),
            a = u(n(104)),
            f = u(n(105)),
            c = u(n(106)),
            l = u(n(107)),
            h = u(n(108));
        function u(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var g = (r.default.acequire || r.default.require)("ace/range").Range,
            p = {
                DIFF_EQUAL: 0,
                DIFF_DELETE: -1,
                DIFF_INSERT: 1,
                EDITOR_RIGHT: "right",
                EDITOR_LEFT: "left",
                RTL: "rtl",
                LTR: "ltr",
                SVG_NS: "http://www.w3.org/2000/svg",
                DIFF_GRANULARITY_SPECIFIC: "specific",
                DIFF_GRANULARITY_BROAD: "broad"
            };
        function d(t) {
            var e,
                n = this;
            (this.options = (0, i.default)({
                mode: null,
                theme: null,
                element: null,
                diffGranularity: p.DIFF_GRANULARITY_BROAD,
                lockScrolling: !1,
                showDiffs: !0,
                showConnectors: !0,
                maxDiffs: 5e3,
                left: {
                    id: null,
                    content: null,
                    mode: null,
                    theme: null,
                    editable: !0,
                    copyLinkEnabled: !0
                },
                right: {
                    id: null,
                    content: null,
                    mode: null,
                    theme: null,
                    editable: !0,
                    copyLinkEnabled: !0
                },
                classes: {
                    gutterID: "acediff__gutter",
                    diff: "acediff__diffLine",
                    connector: "acediff__connector",
                    newCodeConnectorLink: "acediff__newCodeConnector",
                    newCodeConnectorLinkContent: "&#8594;",
                    deletedCodeConnectorLink: "acediff__deletedCodeConnector",
                    deletedCodeConnectorLinkContent: "&#8592;",
                    copyRightContainer: "acediff__copy--right",
                    copyLeftContainer: "acediff__copy--left"
                },
                connectorYOffset: 0
            }, t), null !== this.options.element) ? (this.options.element instanceof HTMLElement ? this.el = this.options.element : this.el = document.body.querySelector(this.options.element), this.el ? (this.options.left.id = (0, l.default)(this.el, "acediff__left"), this.options.classes.gutterID = (0, l.default)(this.el, "acediff__gutter"), this.options.right.id = (0, l.default)(this.el, "acediff__right"), this.el.innerHTML = '<div class="acediff__wrap">' + this.el.innerHTML + "</div>", this.editors = {
                left: {
                    ace: r.default.edit(this.options.left.id),
                    markers: [],
                    lineLengths: []
                },
                right: {
                    ace: r.default.edit(this.options.right.id),
                    markers: [],
                    lineLengths: []
                },
                editorHeight: null
            }, this.editors.left.ace.getSession().setMode(v(this, p.EDITOR_LEFT)), this.editors.right.ace.getSession().setMode(v(this, p.EDITOR_RIGHT)), this.editors.left.ace.setReadOnly(!this.options.left.editable), this.editors.right.ace.setReadOnly(!this.options.right.editable), this.editors.left.ace.setTheme(_(this, p.EDITOR_LEFT)), this.editors.right.ace.setTheme(_(this, p.EDITOR_RIGHT)), this.editors.left.ace.setValue((0, f.default)(this.options.left.content), -1), this.editors.right.ace.setValue((0, f.default)(this.options.right.content), -1), this.editors.editorHeight = (e = this, document.getElementById(e.options.left.id).offsetHeight), setTimeout(function() {
                var t;
                n.lineHeight = n.editors.left.ace.renderer.lineHeight,
                function(t) {
                    t.editors.left.ace.getSession().on("changeScrollTop", (0, s.default)(function(e) {
                        L(t, "left", e)
                    }, 16)),
                    t.editors.right.ace.getSession().on("changeScrollTop", (0, s.default)(function(e) {
                        L(t, "right", e)
                    }, 16));
                    var e = t.diff.bind(t);
                    t.editors.left.ace.on("change", e),
                    t.editors.right.ace.on("change", e),
                    t.options.left.copyLinkEnabled && h.default.on("#" + t.options.classes.gutterID, "click", "." + t.options.classes.newCodeConnectorLink, function(e) {
                        y(t, e, p.LTR)
                    });
                    t.options.right.copyLinkEnabled && h.default.on("#" + t.options.classes.gutterID, "click", "." + t.options.classes.deletedCodeConnectorLink, function(e) {
                        y(t, e, p.RTL)
                    });
                    var n = (0, o.default)(function() {
                        t.editors.availableHeight = document.getElementById(t.options.left.id).offsetHeight,
                        t.diff()
                    }, 250);
                    window.addEventListener("resize", n),
                    b = function() {
                        window.removeEventListener("resize", n)
                    }
                }(n),
                (t = n).copyRightContainer = document.createElement("div"),
                t.copyRightContainer.setAttribute("class", t.options.classes.copyRightContainer),
                t.copyLeftContainer = document.createElement("div"),
                t.copyLeftContainer.setAttribute("class", t.options.classes.copyLeftContainer),
                document.getElementById(t.options.classes.gutterID).appendChild(t.copyRightContainer),
                document.getElementById(t.options.classes.gutterID).appendChild(t.copyLeftContainer),
                O(n),
                n.diff()
            }, 1)) : console.error("Can't find the specified element " + this.options.element)) : console.error("You need to specify an element for Ace-diff")
        }
        function v(t, e) {
            var n = t.options.mode;
            return e === p.EDITOR_LEFT && null !== t.options.left.mode && (n = t.options.left.mode), e === p.EDITOR_RIGHT && null !== t.options.right.mode && (n = t.options.right.mode), n
        }
        function _(t, e) {
            var n = t.options.theme;
            return e === p.EDITOR_LEFT && null !== t.options.left.theme && (n = t.options.left.theme), e === p.EDITOR_RIGHT && null !== t.options.right.theme && (n = t.options.right.theme), n
        }
        d.prototype = {
            setOptions: function(t) {
                (0, i.default)(this.options, t),
                this.diff()
            },
            getNumDiffs: function() {
                return this.diffs.length
            },
            getEditors: function() {
                return {
                    left: this.editors.left.ace,
                    right: this.editors.right.ace
                }
            },
            diff: function() {
                var t = new a.default,
                    e = this.editors.left.ace.getSession().getValue(),
                    n = this.editors.right.ace.getSession().getValue(),
                    r = t.diff_main(n, e);
                t.diff_cleanupSemantic(r),
                this.editors.left.lineLengths = m(this.editors.left),
                this.editors.right.lineLengths = m(this.editors.right);
                var i = [],
                    o = {
                        left: 0,
                        right: 0
                    };
                r.forEach(function(t, e, n) {
                    var s = t[0],
                        a = t[1];
                    n[e + 1] && a.endsWith("\n") && n[e + 1][1].startsWith("\n") && (a += "\n", r[e][1] = a, r[e + 1][1] = r[e + 1][1].replace(/^\n/, "")),
                    0 !== a.length && (s === p.DIFF_EQUAL ? (o.left += a.length, o.right += a.length) : s === p.DIFF_DELETE ? (i.push(S(this, p.DIFF_DELETE, o.left, o.right, a)), o.right += a.length) : s === p.DIFF_INSERT && (i.push(S(this, p.DIFF_INSERT, o.left, o.right, a)), o.left += a.length))
                }, this),
                this.diffs = function(t, e) {
                    var n = [];
                    function r(e) {
                        return t.options.diffGranularity === p.DIFF_GRANULARITY_SPECIFIC ? e < 1 : e <= 1
                    }
                    e.forEach(function(t, e) {
                        if (0 !== e) {
                            for (var i = !1, o = 0; o < n.length; o++)
                                if (r(Math.abs(t.leftStartLine - n[o].leftEndLine)) && r(Math.abs(t.rightStartLine - n[o].rightEndLine))) {
                                    n[o].leftStartLine = Math.min(t.leftStartLine, n[o].leftStartLine),
                                    n[o].rightStartLine = Math.min(t.rightStartLine, n[o].rightStartLine),
                                    n[o].leftEndLine = Math.max(t.leftEndLine, n[o].leftEndLine),
                                    n[o].rightEndLine = Math.max(t.rightEndLine, n[o].rightEndLine),
                                    i = !0;
                                    break
                                }
                            i || n.push(t)
                        } else
                            n.push(t)
                    });
                    var i = [];
                    return n.forEach(function(t) {
                        t.leftStartLine === t.leftEndLine && t.rightStartLine === t.rightEndLine || i.push(t)
                    }), i
                }(this, i),
                this.diffs.length > this.options.maxDiffs || (E(this), D(this))
            },
            destroy: function() {
                var t = this.editors.left.ace.getValue();
                this.editors.left.ace.destroy();
                var e = this.editors.left.ace.container,
                    n = e.cloneNode(!1);
                n.textContent = t,
                e.parentNode.replaceChild(n, e);
                var r = this.editors.right.ace.getValue();
                this.editors.right.ace.destroy(),
                (n = (e = this.editors.right.ace.container).cloneNode(!1)).textContent = r,
                e.parentNode.replaceChild(n, e),
                document.getElementById(this.options.classes.gutterID).innerHTML = "",
                b()
            }
        };
        var b = function() {};
        function y(t, e, n) {
            var r = parseInt(e.target.getAttribute("data-diff-index"), 10),
                i = t.diffs[r],
                o = void 0,
                s = void 0,
                a = void 0,
                f = void 0,
                c = void 0,
                l = void 0;
            n === p.LTR ? (o = t.editors.left, s = t.editors.right, a = i.leftStartLine, f = i.leftEndLine, c = i.rightStartLine, l = i.rightEndLine) : (o = t.editors.right, s = t.editors.left, a = i.rightStartLine, f = i.rightEndLine, c = i.leftStartLine, l = i.leftEndLine);
            for (var h = "", u = a; u < f; u += 1)
                h += j(o, u) + "\n";
            var d = s.ace.getSession().getScrollTop();
            s.ace.getSession().replace(new g(c, 0, l, 0), h),
            s.ace.getSession().setScrollTop(parseInt(d, 10)),
            t.diff()
        }
        function m(t) {
            var e = [];
            return t.ace.getSession().doc.getAllLines().forEach(function(t) {
                e.push(t.length + 1)
            }), e
        }
        function x(t, e, n, r, i) {
            e = t.editors[e];
            r < n && (r = n);
            var o = i + " " + (r > n ? "lines" : "targetOnly");
            r--,
            e.markers.push(e.ace.session.addMarker(new g(n, 0, r, 1), o, "fullLine"))
        }
        function L(t, e, n) {
            var r,
                i,
                o;
            E(t),
            D(t),
            i = (r = t).editors.left.ace.getSession().getScrollTop(),
            o = r.editors.right.ace.getSession().getScrollTop(),
            r.copyRightContainer.style.cssText = "top: " + -i + "px",
            r.copyLeftContainer.style.cssText = "top: " + -o + "px"
        }
        function E(t) {
            t.editors.left.markers.forEach(function(t) {
                this.editors.left.ace.getSession().removeMarker(t)
            }, t),
            t.editors.right.markers.forEach(function(t) {
                this.editors.right.ace.getSession().removeMarker(t)
            }, t)
        }
        function S(t, e, n, r, i) {
            var o = {},
                s = /^\n/.test(i);
            if (e === p.DIFF_INSERT) {
                var a = w(t.editors.left, n, i),
                    f = C(t.editors.right, r),
                    c = M(t.editors.right, f),
                    l = M(t.editors.left, a.startLine),
                    h = f;
                0 === M(t.editors.left, a.startLine) && s && (s = !1),
                0 === a.startChar && I(t.editors.right, r, s) && (h = f + 1);
                var u = a.startLine === a.endLine,
                    g = 0;
                (a.startChar > 0 || u && i.length < l) && c > 0 && a.startChar < l && g++,
                o = {
                    leftStartLine: a.startLine,
                    leftEndLine: a.endLine + 1,
                    rightStartLine: h,
                    rightEndLine: h + g
                }
            } else {
                a = w(t.editors.right, r, i),
                f = C(t.editors.left, n),
                c = M(t.editors.left, f);
                var d = M(t.editors.right, a.startLine),
                    v = f;
                0 === M(t.editors.right, a.startLine) && s && (s = !1),
                0 === a.startChar && I(t.editors.left, n, s) && (v = f + 1);
                u = a.startLine === a.endLine,
                g = 0;
                (a.startChar > 0 || u && i.length < d) && c > 0 && a.startChar < d && g++,
                o = {
                    leftStartLine: v,
                    leftEndLine: v + g,
                    rightStartLine: a.startLine,
                    rightEndLine: a.endLine + 1
                }
            }
            return o
        }
        function w(t, e, n) {
            var r = {
                    startLine: 0,
                    startChar: 0,
                    endLine: 0,
                    endChar: 0
                },
                i = e + n.length,
                o = 0,
                s = !1,
                a = !1;
            t.lineLengths.forEach(function(t, n) {
                o += t,
                !s && e < o && (r.startLine = n, r.startChar = e - o + t, s = !0),
                !a && i <= o && (r.endLine = n, r.endChar = i - o + t, a = !0)
            }),
            r.startChar > 0 && M(t, r.startLine) === r.startChar && (r.startLine++, r.startChar = 0),
            0 === r.endChar && r.endLine--;
            var f = /\n$/.test(n);
            return r.startChar > 0 && f && r.endLine++, r
        }
        function M(t, e) {
            return j(t, e).length
        }
        function j(t, e) {
            return t.ace.getSession().doc.getLine(e)
        }
        function C(t, e) {
            for (var n = t.ace.getSession().doc.getAllLines(), r = 0, i = 0, o = 0; o < n.length; o++)
                if (e <= (i += n[o].length + 1)) {
                    r = o;
                    break
                }
            return r
        }
        function I(t, e, n) {
            for (var r = t.ace.getSession().doc.getAllLines(), i = 0, o = !1, s = 0; s < r.length; s++) {
                var a = i += r[s].length + 1;
                if (n && a--, e === a) {
                    o = !0;
                    break
                }
            }
            return o
        }
        function T(t) {
            var e = document.createElement("div"),
                n = {
                    class: t.className,
                    style: "top:" + t.topOffset + "px",
                    title: t.tooltip,
                    "data-diff-index": t.diffIndex
                };
            for (var r in n)
                e.setAttribute(r, n[r]);
            return e.innerHTML = t.arrowContent, e
        }
        function O(t) {
            t.gutterHeight = document.getElementById(t.options.classes.gutterID).clientHeight,
            t.gutterWidth = document.getElementById(t.options.classes.gutterID).clientWidth;
            var e = A(t, p.EDITOR_LEFT),
                n = A(t, p.EDITOR_RIGHT),
                r = Math.max(e, n, t.gutterHeight);
            t.gutterSVG = document.createElementNS(p.SVG_NS, "svg"),
            t.gutterSVG.setAttribute("width", t.gutterWidth),
            t.gutterSVG.setAttribute("height", r),
            document.getElementById(t.options.classes.gutterID).appendChild(t.gutterSVG)
        }
        function A(t, e) {
            return (e === p.EDITOR_LEFT ? t.editors.left : t.editors.right).ace.getSession().getLength() * t.lineHeight
        }
        function D(t) {
            var e,
                n;
            e = t,
            document.getElementById(e.options.classes.gutterID).removeChild(e.gutterSVG),
            O(e),
            (n = t).copyLeftContainer.innerHTML = "",
            n.copyRightContainer.innerHTML = "",
            t.diffs.forEach(function(t, e) {
                this.options.showDiffs && (x(this, p.EDITOR_LEFT, t.leftStartLine, t.leftEndLine, this.options.classes.diff), x(this, p.EDITOR_RIGHT, t.rightStartLine, t.rightEndLine, this.options.classes.diff), this.options.showConnectors && function(t, e, n, r, i) {
                    var o = t.editors.left.ace.getSession().getScrollTop(),
                        s = t.editors.right.ace.getSession().getScrollTop();
                    t.connectorYOffset = 1;
                    var a = e * t.lineHeight - o + .5,
                        f = t.gutterWidth + 1,
                        l = r * t.lineHeight - s + .5,
                        h = n * t.lineHeight - o + t.connectorYOffset + .5,
                        u = t.gutterWidth + 1,
                        g = i * t.lineHeight - s + t.connectorYOffset + .5,
                        d = (0, c.default)(-1, a, f, l) + " L" + f + "," + l + " " + u + "," + g + " " + (0, c.default)(u, g, -1, h) + " L-1," + h + " " + -1 + "," + a,
                        v = document.createElementNS(p.SVG_NS, "path");
                    v.setAttribute("d", d),
                    v.setAttribute("class", t.options.classes.connector),
                    t.gutterSVG.appendChild(v)
                }(this, t.leftStartLine, t.leftEndLine, t.rightStartLine, t.rightEndLine), function(t, e, n) {
                    if (e.leftEndLine > e.leftStartLine && t.options.left.copyLinkEnabled) {
                        var r = T({
                            className: t.options.classes.newCodeConnectorLink,
                            topOffset: e.leftStartLine * t.lineHeight,
                            tooltip: "Copy to right",
                            diffIndex: n,
                            arrowContent: t.options.classes.newCodeConnectorLinkContent
                        });
                        t.copyRightContainer.appendChild(r)
                    }
                    e.rightEndLine > e.rightStartLine && t.options.right.copyLinkEnabled && (r = T({
                        className: t.options.classes.deletedCodeConnectorLink,
                        topOffset: e.rightStartLine * t.lineHeight,
                        tooltip: "Copy to left",
                        diffIndex: n,
                        arrowContent: t.options.classes.deletedCodeConnectorLinkContent
                    }), t.copyLeftContainer.appendChild(r))
                }(this, t, e))
            }, t)
        }
        e.default = d
    }, function(e, n) {
        e.exports = t
    }, function(t, e, n) {
        var r = n(33),
            i = n(91)(function(t, e, n) {
                r(t, e, n)
            });
        t.exports = i
    }, function(t, e, n) {
        var r = n(34),
            i = n(17),
            o = n(66),
            s = n(68),
            a = n(0),
            f = n(26);
        t.exports = function t(e, n, c, l, h) {
            e !== n && o(n, function(o, f) {
                if (a(o))
                    h || (h = new r),
                    s(e, n, f, c, t, l, h);
                else {
                    var u = l ? l(e[f], o, f + "", e, n, h) : void 0;
                    void 0 === u && (u = o),
                    i(e, f, u)
                }
            }, f)
        }
    }, function(t, e, n) {
        var r = n(4),
            i = n(40),
            o = n(41),
            s = n(42),
            a = n(43),
            f = n(44);
        function c(t) {
            var e = this.__data__ = new r(t);
            this.size = e.size
        }
        c.prototype.clear = i,
        c.prototype.delete = o,
        c.prototype.get = s,
        c.prototype.has = a,
        c.prototype.set = f,
        t.exports = c
    }, function(t, e) {
        t.exports = function() {
            this.__data__ = [],
            this.size = 0
        }
    }, function(t, e, n) {
        var r = n(5),
            i = Array.prototype.splice;
        t.exports = function(t) {
            var e = this.__data__,
                n = r(e, t);
            return !(n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0))
        }
    }, function(t, e, n) {
        var r = n(5);
        t.exports = function(t) {
            var e = this.__data__,
                n = r(e, t);
            return n < 0 ? void 0 : e[n][1]
        }
    }, function(t, e, n) {
        var r = n(5);
        t.exports = function(t) {
            return r(this.__data__, t) > -1
        }
    }, function(t, e, n) {
        var r = n(5);
        t.exports = function(t, e) {
            var n = this.__data__,
                i = r(n, t);
            return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
        }
    }, function(t, e, n) {
        var r = n(4);
        t.exports = function() {
            this.__data__ = new r,
            this.size = 0
        }
    }, function(t, e) {
        t.exports = function(t) {
            var e = this.__data__,
                n = e.delete(t);
            return this.size = e.size, n
        }
    }, function(t, e) {
        t.exports = function(t) {
            return this.__data__.get(t)
        }
    }, function(t, e) {
        t.exports = function(t) {
            return this.__data__.has(t)
        }
    }, function(t, e, n) {
        var r = n(4),
            i = n(14),
            o = n(53),
            s = 200;
        t.exports = function(t, e) {
            var n = this.__data__;
            if (n instanceof r) {
                var a = n.__data__;
                if (!i || a.length < s - 1)
                    return a.push([t, e]), this.size = ++n.size, this;
                n = this.__data__ = new o(a)
            }
            return n.set(t, e), this.size = n.size, this
        }
    }, function(t, e, n) {
        var r = n(10),
            i = n(49),
            o = n(0),
            s = n(51),
            a = /^\[object .+?Constructor\]$/,
            f = Function.prototype,
            c = Object.prototype,
            l = f.toString,
            h = c.hasOwnProperty,
            u = RegExp("^" + l.call(h).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        t.exports = function(t) {
            return !(!o(t) || i(t)) && (r(t) ? u : a).test(s(t))
        }
    }, function(t, e) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }, function(t, e, n) {
        var r = n(15),
            i = Object.prototype,
            o = i.hasOwnProperty,
            s = i.toString,
            a = r ? r.toStringTag : void 0;
        t.exports = function(t) {
            var e = o.call(t, a),
                n = t[a];
            try {
                t[a] = void 0;
                var r = !0
            } catch (t) {}
            var i = s.call(t);
            return r && (e ? t[a] = n : delete t[a]), i
        }
    }, function(t, e) {
        var n = Object.prototype.toString;
        t.exports = function(t) {
            return n.call(t)
        }
    }, function(t, e, n) {
        var r,
            i = n(50),
            o = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
        t.exports = function(t) {
            return !!o && o in t
        }
    }, function(t, e, n) {
        var r = n(1)["__core-js_shared__"];
        t.exports = r
    }, function(t, e) {
        var n = Function.prototype.toString;
        t.exports = function(t) {
            if (null != t) {
                try {
                    return n.call(t)
                } catch (t) {}
                try {
                    return t + ""
                } catch (t) {}
            }
            return ""
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            return null == t ? void 0 : t[e]
        }
    }, function(t, e, n) {
        var r = n(54),
            i = n(61),
            o = n(63),
            s = n(64),
            a = n(65);
        function f(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        f.prototype.clear = r,
        f.prototype.delete = i,
        f.prototype.get = o,
        f.prototype.has = s,
        f.prototype.set = a,
        t.exports = f
    }, function(t, e, n) {
        var r = n(55),
            i = n(4),
            o = n(14);
        t.exports = function() {
            this.size = 0,
            this.__data__ = {
                hash: new r,
                map: new (o || i),
                string: new r
            }
        }
    }, function(t, e, n) {
        var r = n(56),
            i = n(57),
            o = n(58),
            s = n(59),
            a = n(60);
        function f(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        f.prototype.clear = r,
        f.prototype.delete = i,
        f.prototype.get = o,
        f.prototype.has = s,
        f.prototype.set = a,
        t.exports = f
    }, function(t, e, n) {
        var r = n(7);
        t.exports = function() {
            this.__data__ = r ? r(null) : {},
            this.size = 0
        }
    }, function(t, e) {
        t.exports = function(t) {
            var e = this.has(t) && delete this.__data__[t];
            return this.size -= e ? 1 : 0, e
        }
    }, function(t, e, n) {
        var r = n(7),
            i = "__lodash_hash_undefined__",
            o = Object.prototype.hasOwnProperty;
        t.exports = function(t) {
            var e = this.__data__;
            if (r) {
                var n = e[t];
                return n === i ? void 0 : n
            }
            return o.call(e, t) ? e[t] : void 0
        }
    }, function(t, e, n) {
        var r = n(7),
            i = Object.prototype.hasOwnProperty;
        t.exports = function(t) {
            var e = this.__data__;
            return r ? void 0 !== e[t] : i.call(e, t)
        }
    }, function(t, e, n) {
        var r = n(7),
            i = "__lodash_hash_undefined__";
        t.exports = function(t, e) {
            var n = this.__data__;
            return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? i : e, this
        }
    }, function(t, e, n) {
        var r = n(8);
        t.exports = function(t) {
            var e = r(this, t).delete(t);
            return this.size -= e ? 1 : 0, e
        }
    }, function(t, e) {
        t.exports = function(t) {
            var e = typeof t;
            return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
        }
    }, function(t, e, n) {
        var r = n(8);
        t.exports = function(t) {
            return r(this, t).get(t)
        }
    }, function(t, e, n) {
        var r = n(8);
        t.exports = function(t) {
            return r(this, t).has(t)
        }
    }, function(t, e, n) {
        var r = n(8);
        t.exports = function(t, e) {
            var n = r(this, t),
                i = n.size;
            return n.set(t, e), this.size += n.size == i ? 0 : 1, this
        }
    }, function(t, e, n) {
        var r = n(67)();
        t.exports = r
    }, function(t, e) {
        t.exports = function(t) {
            return function(e, n, r) {
                for (var i = -1, o = Object(e), s = r(e), a = s.length; a--;) {
                    var f = s[t ? a : ++i];
                    if (!1 === n(o[f], f, o))
                        break
                }
                return e
            }
        }
    }, function(t, e, n) {
        var r = n(17),
            i = n(69),
            o = n(70),
            s = n(73),
            a = n(74),
            f = n(21),
            c = n(22),
            l = n(78),
            h = n(24),
            u = n(10),
            g = n(0),
            p = n(80),
            d = n(25),
            v = n(84);
        t.exports = function(t, e, n, _, b, y, m) {
            var x = t[n],
                L = e[n],
                E = m.get(L);
            if (E)
                r(t, n, E);
            else {
                var S = y ? y(x, L, n + "", t, e, m) : void 0,
                    w = void 0 === S;
                if (w) {
                    var M = c(L),
                        j = !M && h(L),
                        C = !M && !j && d(L);
                    S = L,
                    M || j || C ? c(x) ? S = x : l(x) ? S = s(x) : j ? (w = !1, S = i(L, !0)) : C ? (w = !1, S = o(L, !0)) : S = [] : p(L) || f(L) ? (S = x, f(x) ? S = v(x) : (!g(x) || _ && u(x)) && (S = a(L))) : w = !1
                }
                w && (m.set(L, S), b(S, L, _, y, m), m.delete(L)),
                r(t, n, S)
            }
        }
    }, function(t, e, n) {
        (function(t) {
            var r = n(1),
                i = "object" == typeof e && e && !e.nodeType && e,
                o = i && "object" == typeof t && t && !t.nodeType && t,
                s = o && o.exports === i ? r.Buffer : void 0,
                a = s ? s.allocUnsafe : void 0;
            t.exports = function(t, e) {
                if (e)
                    return t.slice();
                var n = t.length,
                    r = a ? a(n) : new t.constructor(n);
                return t.copy(r), r
            }
        }).call(e, n(12)(t))
    }, function(t, e, n) {
        var r = n(71);
        t.exports = function(t, e) {
            var n = e ? r(t.buffer) : t.buffer;
            return new t.constructor(n, t.byteOffset, t.length)
        }
    }, function(t, e, n) {
        var r = n(72);
        t.exports = function(t) {
            var e = new t.constructor(t.byteLength);
            return new r(e).set(new r(t)), e
        }
    }, function(t, e, n) {
        var r = n(1).Uint8Array;
        t.exports = r
    }, function(t, e) {
        t.exports = function(t, e) {
            var n = -1,
                r = t.length;
            for (e || (e = Array(r)); ++n < r;)
                e[n] = t[n];
            return e
        }
    }, function(t, e, n) {
        var r = n(75),
            i = n(19),
            o = n(20);
        t.exports = function(t) {
            return "function" != typeof t.constructor || o(t) ? {} : r(i(t))
        }
    }, function(t, e, n) {
        var r = n(0),
            i = Object.create,
            o = function() {
                function t() {}
                return function(e) {
                    if (!r(e))
                        return {};
                    if (i)
                        return i(e);
                    t.prototype = e;
                    var n = new t;
                    return t.prototype = void 0, n
                }
            }();
        t.exports = o
    }, function(t, e) {
        t.exports = function(t, e) {
            return function(n) {
                return t(e(n))
            }
        }
    }, function(t, e, n) {
        var r = n(3),
            i = n(2),
            o = "[object Arguments]";
        t.exports = function(t) {
            return i(t) && r(t) == o
        }
    }, function(t, e, n) {
        var r = n(13),
            i = n(2);
        t.exports = function(t) {
            return i(t) && r(t)
        }
    }, function(t, e) {
        t.exports = function() {
            return !1
        }
    }, function(t, e, n) {
        var r = n(3),
            i = n(19),
            o = n(2),
            s = "[object Object]",
            a = Function.prototype,
            f = Object.prototype,
            c = a.toString,
            l = f.hasOwnProperty,
            h = c.call(Object);
        t.exports = function(t) {
            if (!o(t) || r(t) != s)
                return !1;
            var e = i(t);
            if (null === e)
                return !0;
            var n = l.call(e, "constructor") && e.constructor;
            return "function" == typeof n && n instanceof n && c.call(n) == h
        }
    }, function(t, e, n) {
        var r = n(3),
            i = n(23),
            o = n(2),
            s = {};
        s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = !0,
        s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1,
        t.exports = function(t) {
            return o(t) && i(t.length) && !!s[r(t)]
        }
    }, function(t, e) {
        t.exports = function(t) {
            return function(e) {
                return t(e)
            }
        }
    }, function(t, e, n) {
        (function(t) {
            var r = n(16),
                i = "object" == typeof e && e && !e.nodeType && e,
                o = i && "object" == typeof t && t && !t.nodeType && t,
                s = o && o.exports === i && r.process,
                a = function() {
                    try {
                        return s && s.binding && s.binding("util")
                    } catch (t) {}
                }();
            t.exports = a
        }).call(e, n(12)(t))
    }, function(t, e, n) {
        var r = n(85),
            i = n(26);
        t.exports = function(t) {
            return r(t, i(t))
        }
    }, function(t, e, n) {
        var r = n(86),
            i = n(11);
        t.exports = function(t, e, n, o) {
            var s = !n;
            n || (n = {});
            for (var a = -1, f = e.length; ++a < f;) {
                var c = e[a],
                    l = o ? o(n[c], t[c], c, n, t) : void 0;
                void 0 === l && (l = t[c]),
                s ? i(n, c, l) : r(n, c, l)
            }
            return n
        }
    }, function(t, e, n) {
        var r = n(11),
            i = n(6),
            o = Object.prototype.hasOwnProperty;
        t.exports = function(t, e, n) {
            var s = t[e];
            o.call(t, e) && i(s, n) && (void 0 !== n || e in t) || r(t, e, n)
        }
    }, function(t, e, n) {
        var r = n(88),
            i = n(21),
            o = n(22),
            s = n(24),
            a = n(27),
            f = n(25),
            c = Object.prototype.hasOwnProperty;
        t.exports = function(t, e) {
            var n = o(t),
                l = !n && i(t),
                h = !n && !l && s(t),
                u = !n && !l && !h && f(t),
                g = n || l || h || u,
                p = g ? r(t.length, String) : [],
                d = p.length;
            for (var v in t)
                !e && !c.call(t, v) || g && ("length" == v || h && ("offset" == v || "parent" == v) || u && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || a(v, d)) || p.push(v);
            return p
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            for (var n = -1, r = Array(t); ++n < t;)
                r[n] = e(n);
            return r
        }
    }, function(t, e, n) {
        var r = n(0),
            i = n(20),
            o = n(90),
            s = Object.prototype.hasOwnProperty;
        t.exports = function(t) {
            if (!r(t))
                return o(t);
            var e = i(t),
                n = [];
            for (var a in t)
                ("constructor" != a || !e && s.call(t, a)) && n.push(a);
            return n
        }
    }, function(t, e) {
        t.exports = function(t) {
            var e = [];
            if (null != t)
                for (var n in Object(t))
                    e.push(n);
            return e
        }
    }, function(t, e, n) {
        var r = n(92),
            i = n(99);
        t.exports = function(t) {
            return r(function(e, n) {
                var r = -1,
                    o = n.length,
                    s = o > 1 ? n[o - 1] : void 0,
                    a = o > 2 ? n[2] : void 0;
                for (s = t.length > 3 && "function" == typeof s ? (o--, s) : void 0, a && i(n[0], n[1], a) && (s = o < 3 ? void 0 : s, o = 1), e = Object(e); ++r < o;) {
                    var f = n[r];
                    f && t(e, f, r, s)
                }
                return e
            })
        }
    }, function(t, e, n) {
        var r = n(28),
            i = n(93),
            o = n(95);
        t.exports = function(t, e) {
            return o(i(t, e, r), t + "")
        }
    }, function(t, e, n) {
        var r = n(94),
            i = Math.max;
        t.exports = function(t, e, n) {
            return e = i(void 0 === e ? t.length - 1 : e, 0), function() {
                for (var o = arguments, s = -1, a = i(o.length - e, 0), f = Array(a); ++s < a;)
                    f[s] = o[e + s];
                s = -1;
                for (var c = Array(e + 1); ++s < e;)
                    c[s] = o[s];
                return c[e] = n(f), r(t, this, c)
            }
        }
    }, function(t, e) {
        t.exports = function(t, e, n) {
            switch (n.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, n[0]);
            case 2:
                return t.call(e, n[0], n[1]);
            case 3:
                return t.call(e, n[0], n[1], n[2])
            }
            return t.apply(e, n)
        }
    }, function(t, e, n) {
        var r = n(96),
            i = n(98)(r);
        t.exports = i
    }, function(t, e, n) {
        var r = n(97),
            i = n(18),
            o = n(28),
            s = i ? function(t, e) {
                return i(t, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: r(e),
                    writable: !0
                })
            } : o;
        t.exports = s
    }, function(t, e) {
        t.exports = function(t) {
            return function() {
                return t
            }
        }
    }, function(t, e) {
        var n = 800,
            r = 16,
            i = Date.now;
        t.exports = function(t) {
            var e = 0,
                o = 0;
            return function() {
                var s = i(),
                    a = r - (s - o);
                if (o = s, a > 0) {
                    if (++e >= n)
                        return arguments[0]
                } else
                    e = 0;
                return t.apply(void 0, arguments)
            }
        }
    }, function(t, e, n) {
        var r = n(6),
            i = n(13),
            o = n(27),
            s = n(0);
        t.exports = function(t, e, n) {
            if (!s(n))
                return !1;
            var a = typeof e;
            return !!("number" == a ? i(n) && o(e, n.length) : "string" == a && e in n) && r(n[e], t)
        }
    }, function(t, e, n) {
        var r = n(1);
        t.exports = function() {
            return r.Date.now()
        }
    }, function(t, e, n) {
        var r = n(0),
            i = n(102),
            o = NaN,
            s = /^\s+|\s+$/g,
            a = /^[-+]0x[0-9a-f]+$/i,
            f = /^0b[01]+$/i,
            c = /^0o[0-7]+$/i,
            l = parseInt;
        t.exports = function(t) {
            if ("number" == typeof t)
                return t;
            if (i(t))
                return o;
            if (r(t)) {
                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = r(e) ? e + "" : e
            }
            if ("string" != typeof t)
                return 0 === t ? t : +t;
            t = t.replace(s, "");
            var n = f.test(t);
            return n || c.test(t) ? l(t.slice(2), n ? 2 : 8) : a.test(t) ? o : +t
        }
    }, function(t, e, n) {
        var r = n(3),
            i = n(2),
            o = "[object Symbol]";
        t.exports = function(t) {
            return "symbol" == typeof t || i(t) && r(t) == o
        }
    }, function(t, e, n) {
        var r = n(29),
            i = n(0),
            o = "Expected a function";
        t.exports = function(t, e, n) {
            var s = !0,
                a = !0;
            if ("function" != typeof t)
                throw new TypeError(o);
            return i(n) && (s = "leading" in n ? !!n.leading : s, a = "trailing" in n ? !!n.trailing : a), r(t, e, {
                leading: s,
                maxWait: e,
                trailing: a
            })
        }
    }, function(t, e, n) {
        "use strict";
        function r() {
            this.Diff_Timeout = 1,
            this.Diff_EditCost = 4,
            this.Match_Threshold = .5,
            this.Match_Distance = 1e3,
            this.Patch_DeleteThreshold = .5,
            this.Patch_Margin = 4,
            this.Match_MaxBits = 32
        }
        r.Diff,
        r.prototype.diff_main = function(t, e, n, r) {
            void 0 === r && (r = this.Diff_Timeout <= 0 ? Number.MAX_VALUE : (new Date).getTime() + 1e3 * this.Diff_Timeout);
            var i = r;
            if (null == t || null == e)
                throw new Error("Null input. (diff_main)");
            if (t == e)
                return t ? [[0, t]] : [];
            void 0 === n && (n = !0);
            var o = n,
                s = this.diff_commonPrefix(t, e),
                a = t.substring(0, s);
            t = t.substring(s),
            e = e.substring(s),
            s = this.diff_commonSuffix(t, e);
            var f = t.substring(t.length - s);
            t = t.substring(0, t.length - s),
            e = e.substring(0, e.length - s);
            var c = this.diff_compute_(t, e, o, i);
            return a && c.unshift([0, a]), f && c.push([0, f]), this.diff_cleanupMerge(c), c
        },
        r.prototype.diff_compute_ = function(t, e, n, r) {
            var i;
            if (!t)
                return [[1, e]];
            if (!e)
                return [[-1, t]];
            var o = t.length > e.length ? t : e,
                s = t.length > e.length ? e : t,
                a = o.indexOf(s);
            if (-1 != a)
                return i = [[1, o.substring(0, a)], [0, s], [1, o.substring(a + s.length)]], t.length > e.length && (i[0][0] = i[2][0] = -1), i;
            if (1 == s.length)
                return [[-1, t], [1, e]];
            var f = this.diff_halfMatch_(t, e);
            if (f) {
                var c = f[0],
                    l = f[1],
                    h = f[2],
                    u = f[3],
                    g = f[4],
                    p = this.diff_main(c, h, n, r),
                    d = this.diff_main(l, u, n, r);
                return p.concat([[0, g]], d)
            }
            return n && t.length > 100 && e.length > 100 ? this.diff_lineMode_(t, e, r) : this.diff_bisect_(t, e, r)
        },
        r.prototype.diff_lineMode_ = function(t, e, n) {
            t = (l = this.diff_linesToChars_(t, e)).chars1,
            e = l.chars2;
            var r = l.lineArray,
                i = this.diff_main(t, e, !1, n);
            this.diff_charsToLines_(i, r),
            this.diff_cleanupSemantic(i),
            i.push([0, ""]);
            for (var o = 0, s = 0, a = 0, f = "", c = ""; o < i.length;) {
                switch (i[o][0]) {
                case 1:
                    a++,
                    c += i[o][1];
                    break;
                case -1:
                    s++,
                    f += i[o][1];
                    break;
                case 0:
                    if (s >= 1 && a >= 1) {
                        i.splice(o - s - a, s + a),
                        o = o - s - a;
                        for (var l, h = (l = this.diff_main(f, c, !1, n)).length - 1; h >= 0; h--)
                            i.splice(o, 0, l[h]);
                        o += l.length
                    }
                    a = 0,
                    s = 0,
                    f = "",
                    c = ""
                }
                o++
            }
            return i.pop(), i
        },
        r.prototype.diff_bisect_ = function(t, e, n) {
            for (var r = t.length, i = e.length, o = Math.ceil((r + i) / 2), s = o, a = 2 * o, f = new Array(a), c = new Array(a), l = 0; l < a; l++)
                f[l] = -1,
                c[l] = -1;
            f[s + 1] = 0,
            c[s + 1] = 0;
            for (var h = r - i, u = h % 2 != 0, g = 0, p = 0, d = 0, v = 0, _ = 0; _ < o && !((new Date).getTime() > n); _++) {
                for (var b = -_ + g; b <= _ - p; b += 2) {
                    for (var y = s + b, m = (w = b == -_ || b != _ && f[y - 1] < f[y + 1] ? f[y + 1] : f[y - 1] + 1) - b; w < r && m < i && t.charAt(w) == e.charAt(m);)
                        w++,
                        m++;
                    if (f[y] = w, w > r)
                        p += 2;
                    else if (m > i)
                        g += 2;
                    else if (u) {
                        if ((E = s + h - b) >= 0 && E < a && -1 != c[E])
                            if (w >= (L = r - c[E]))
                                return this.diff_bisectSplit_(t, e, w, m, n)
                    }
                }
                for (var x = -_ + d; x <= _ - v; x += 2) {
                    for (var L, E = s + x, S = (L = x == -_ || x != _ && c[E - 1] < c[E + 1] ? c[E + 1] : c[E - 1] + 1) - x; L < r && S < i && t.charAt(r - L - 1) == e.charAt(i - S - 1);)
                        L++,
                        S++;
                    if (c[E] = L, L > r)
                        v += 2;
                    else if (S > i)
                        d += 2;
                    else if (!u) {
                        if ((y = s + h - x) >= 0 && y < a && -1 != f[y]) {
                            var w;
                            m = s + (w = f[y]) - y;
                            if (w >= (L = r - L))
                                return this.diff_bisectSplit_(t, e, w, m, n)
                        }
                    }
                }
            }
            return [[-1, t], [1, e]]
        },
        r.prototype.diff_bisectSplit_ = function(t, e, n, r, i) {
            var o = t.substring(0, n),
                s = e.substring(0, r),
                a = t.substring(n),
                f = e.substring(r),
                c = this.diff_main(o, s, !1, i),
                l = this.diff_main(a, f, !1, i);
            return c.concat(l)
        },
        r.prototype.diff_linesToChars_ = function(t, e) {
            var n = [],
                r = {};
            function i(t) {
                for (var e = "", i = 0, o = -1, s = n.length; o < t.length - 1;) {
                    -1 == (o = t.indexOf("\n", i)) && (o = t.length - 1);
                    var a = t.substring(i, o + 1);
                    i = o + 1,
                    (r.hasOwnProperty ? r.hasOwnProperty(a) : void 0 !== r[a]) ? e += String.fromCharCode(r[a]) : (e += String.fromCharCode(s), r[a] = s, n[s++] = a)
                }
                return e
            }
            return n[0] = "", {
                chars1: i(t),
                chars2: i(e),
                lineArray: n
            }
        },
        r.prototype.diff_charsToLines_ = function(t, e) {
            for (var n = 0; n < t.length; n++) {
                for (var r = t[n][1], i = [], o = 0; o < r.length; o++)
                    i[o] = e[r.charCodeAt(o)];
                t[n][1] = i.join("")
            }
        },
        r.prototype.diff_commonPrefix = function(t, e) {
            if (!t || !e || t.charAt(0) != e.charAt(0))
                return 0;
            for (var n = 0, r = Math.min(t.length, e.length), i = r, o = 0; n < i;)
                t.substring(o, i) == e.substring(o, i) ? o = n = i : r = i,
                i = Math.floor((r - n) / 2 + n);
            return i
        },
        r.prototype.diff_commonSuffix = function(t, e) {
            if (!t || !e || t.charAt(t.length - 1) != e.charAt(e.length - 1))
                return 0;
            for (var n = 0, r = Math.min(t.length, e.length), i = r, o = 0; n < i;)
                t.substring(t.length - i, t.length - o) == e.substring(e.length - i, e.length - o) ? o = n = i : r = i,
                i = Math.floor((r - n) / 2 + n);
            return i
        },
        r.prototype.diff_commonOverlap_ = function(t, e) {
            var n = t.length,
                r = e.length;
            if (0 == n || 0 == r)
                return 0;
            n > r ? t = t.substring(n - r) : n < r && (e = e.substring(0, n));
            var i = Math.min(n, r);
            if (t == e)
                return i;
            for (var o = 0, s = 1;;) {
                var a = t.substring(i - s),
                    f = e.indexOf(a);
                if (-1 == f)
                    return o;
                s += f,
                0 != f && t.substring(i - s) != e.substring(0, s) || (o = s, s++)
            }
        },
        r.prototype.diff_halfMatch_ = function(t, e) {
            if (this.Diff_Timeout <= 0)
                return null;
            var n = t.length > e.length ? t : e,
                r = t.length > e.length ? e : t;
            if (n.length < 4 || 2 * r.length < n.length)
                return null;
            var i = this;
            function o(t, e, n) {
                for (var r, o, s, a, f = t.substring(n, n + Math.floor(t.length / 4)), c = -1, l = ""; -1 != (c = e.indexOf(f, c + 1));) {
                    var h = i.diff_commonPrefix(t.substring(n), e.substring(c)),
                        u = i.diff_commonSuffix(t.substring(0, n), e.substring(0, c));
                    l.length < u + h && (l = e.substring(c - u, c) + e.substring(c, c + h), r = t.substring(0, n - u), o = t.substring(n + h), s = e.substring(0, c - u), a = e.substring(c + h))
                }
                return 2 * l.length >= t.length ? [r, o, s, a, l] : null
            }
            var s,
                a,
                f,
                c,
                l,
                h = o(n, r, Math.ceil(n.length / 4)),
                u = o(n, r, Math.ceil(n.length / 2));
            return h || u ? (s = u ? h && h[4].length > u[4].length ? h : u : h, t.length > e.length ? (a = s[0], f = s[1], c = s[2], l = s[3]) : (c = s[0], l = s[1], a = s[2], f = s[3]), [a, f, c, l, s[4]]) : null
        },
        r.prototype.diff_cleanupSemantic = function(t) {
            for (var e = !1, n = [], r = 0, i = null, o = 0, s = 0, a = 0, f = 0, c = 0; o < t.length;)
                0 == t[o][0] ? (n[r++] = o, s = f, a = c, f = 0, c = 0, i = t[o][1]) : (1 == t[o][0] ? f += t[o][1].length : c += t[o][1].length, i && i.length <= Math.max(s, a) && i.length <= Math.max(f, c) && (t.splice(n[r - 1], 0, [-1, i]), t[n[r - 1] + 1][0] = 1, r--, o = --r > 0 ? n[r - 1] : -1, s = 0, a = 0, f = 0, c = 0, i = null, e = !0)),
                o++;
            for (e && this.diff_cleanupMerge(t), this.diff_cleanupSemanticLossless(t), o = 1; o < t.length;) {
                if (-1 == t[o - 1][0] && 1 == t[o][0]) {
                    var l = t[o - 1][1],
                        h = t[o][1],
                        u = this.diff_commonOverlap_(l, h),
                        g = this.diff_commonOverlap_(h, l);
                    u >= g ? (u >= l.length / 2 || u >= h.length / 2) && (t.splice(o, 0, [0, h.substring(0, u)]), t[o - 1][1] = l.substring(0, l.length - u), t[o + 1][1] = h.substring(u), o++) : (g >= l.length / 2 || g >= h.length / 2) && (t.splice(o, 0, [0, l.substring(0, g)]), t[o - 1][0] = 1, t[o - 1][1] = h.substring(0, h.length - g), t[o + 1][0] = -1, t[o + 1][1] = l.substring(g), o++),
                    o++
                }
                o++
            }
        },
        r.prototype.diff_cleanupSemanticLossless = function(t) {
            function e(t, e) {
                if (!t || !e)
                    return 6;
                var n = t.charAt(t.length - 1),
                    i = e.charAt(0),
                    o = n.match(r.nonAlphaNumericRegex_),
                    s = i.match(r.nonAlphaNumericRegex_),
                    a = o && n.match(r.whitespaceRegex_),
                    f = s && i.match(r.whitespaceRegex_),
                    c = a && n.match(r.linebreakRegex_),
                    l = f && i.match(r.linebreakRegex_),
                    h = c && t.match(r.blanklineEndRegex_),
                    u = l && e.match(r.blanklineStartRegex_);
                return h || u ? 5 : c || l ? 4 : o && !a && f ? 3 : a || f ? 2 : o || s ? 1 : 0
            }
            for (var n = 1; n < t.length - 1;) {
                if (0 == t[n - 1][0] && 0 == t[n + 1][0]) {
                    var i = t[n - 1][1],
                        o = t[n][1],
                        s = t[n + 1][1],
                        a = this.diff_commonSuffix(i, o);
                    if (a) {
                        var f = o.substring(o.length - a);
                        i = i.substring(0, i.length - a),
                        o = f + o.substring(0, o.length - a),
                        s = f + s
                    }
                    for (var c = i, l = o, h = s, u = e(i, o) + e(o, s); o.charAt(0) === s.charAt(0);) {
                        i += o.charAt(0),
                        o = o.substring(1) + s.charAt(0),
                        s = s.substring(1);
                        var g = e(i, o) + e(o, s);
                        g >= u && (u = g, c = i, l = o, h = s)
                    }
                    t[n - 1][1] != c && (c ? t[n - 1][1] = c : (t.splice(n - 1, 1), n--), t[n][1] = l, h ? t[n + 1][1] = h : (t.splice(n + 1, 1), n--))
                }
                n++
            }
        },
        r.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/,
        r.whitespaceRegex_ = /\s/,
        r.linebreakRegex_ = /[\r\n]/,
        r.blanklineEndRegex_ = /\n\r?\n$/,
        r.blanklineStartRegex_ = /^\r?\n\r?\n/,
        r.prototype.diff_cleanupEfficiency = function(t) {
            for (var e = !1, n = [], r = 0, i = null, o = 0, s = !1, a = !1, f = !1, c = !1; o < t.length;)
                0 == t[o][0] ? (t[o][1].length < this.Diff_EditCost && (f || c) ? (n[r++] = o, s = f, a = c, i = t[o][1]) : (r = 0, i = null), f = c = !1) : (-1 == t[o][0] ? c = !0 : f = !0, i && (s && a && f && c || i.length < this.Diff_EditCost / 2 && s + a + f + c == 3) && (t.splice(n[r - 1], 0, [-1, i]), t[n[r - 1] + 1][0] = 1, r--, i = null, s && a ? (f = c = !0, r = 0) : (o = --r > 0 ? n[r - 1] : -1, f = c = !1), e = !0)),
                o++;
            e && this.diff_cleanupMerge(t)
        },
        r.prototype.diff_cleanupMerge = function(t) {
            t.push([0, ""]);
            for (var e, n = 0, r = 0, i = 0, o = "", s = ""; n < t.length;)
                switch (t[n][0]) {
                case 1:
                    i++,
                    s += t[n][1],
                    n++;
                    break;
                case -1:
                    r++,
                    o += t[n][1],
                    n++;
                    break;
                case 0:
                    r + i > 1 ? (0 !== r && 0 !== i && (0 !== (e = this.diff_commonPrefix(s, o)) && (n - r - i > 0 && 0 == t[n - r - i - 1][0] ? t[n - r - i - 1][1] += s.substring(0, e) : (t.splice(0, 0, [0, s.substring(0, e)]), n++), s = s.substring(e), o = o.substring(e)), 0 !== (e = this.diff_commonSuffix(s, o)) && (t[n][1] = s.substring(s.length - e) + t[n][1], s = s.substring(0, s.length - e), o = o.substring(0, o.length - e))), 0 === r ? t.splice(n - i, r + i, [1, s]) : 0 === i ? t.splice(n - r, r + i, [-1, o]) : t.splice(n - r - i, r + i, [-1, o], [1, s]), n = n - r - i + (r ? 1 : 0) + (i ? 1 : 0) + 1) : 0 !== n && 0 == t[n - 1][0] ? (t[n - 1][1] += t[n][1], t.splice(n, 1)) : n++,
                    i = 0,
                    r = 0,
                    o = "",
                    s = ""
                }
            "" === t[t.length - 1][1] && t.pop();
            var a = !1;
            for (n = 1; n < t.length - 1;)
                0 == t[n - 1][0] && 0 == t[n + 1][0] && (t[n][1].substring(t[n][1].length - t[n - 1][1].length) == t[n - 1][1] ? (t[n][1] = t[n - 1][1] + t[n][1].substring(0, t[n][1].length - t[n - 1][1].length), t[n + 1][1] = t[n - 1][1] + t[n + 1][1], t.splice(n - 1, 1), a = !0) : t[n][1].substring(0, t[n + 1][1].length) == t[n + 1][1] && (t[n - 1][1] += t[n + 1][1], t[n][1] = t[n][1].substring(t[n + 1][1].length) + t[n + 1][1], t.splice(n + 1, 1), a = !0)),
                n++;
            a && this.diff_cleanupMerge(t)
        },
        r.prototype.diff_xIndex = function(t, e) {
            var n,
                r = 0,
                i = 0,
                o = 0,
                s = 0;
            for (n = 0; n < t.length && (1 !== t[n][0] && (r += t[n][1].length), -1 !== t[n][0] && (i += t[n][1].length), !(r > e)); n++)
                o = r,
                s = i;
            return t.length != n && -1 === t[n][0] ? s : s + (e - o)
        },
        r.prototype.diff_prettyHtml = function(t) {
            for (var e = [], n = /&/g, r = /</g, i = />/g, o = /\n/g, s = 0; s < t.length; s++) {
                var a = t[s][0],
                    f = t[s][1].replace(n, "&amp;").replace(r, "&lt;").replace(i, "&gt;").replace(o, "&para;<br>");
                switch (a) {
                case 1:
                    e[s] = '<ins style="background:#e6ffe6;">' + f + "</ins>";
                    break;
                case -1:
                    e[s] = '<del style="background:#ffe6e6;">' + f + "</del>";
                    break;
                case 0:
                    e[s] = "<span>" + f + "</span>"
                }
            }
            return e.join("")
        },
        r.prototype.diff_text1 = function(t) {
            for (var e = [], n = 0; n < t.length; n++)
                1 !== t[n][0] && (e[n] = t[n][1]);
            return e.join("")
        },
        r.prototype.diff_text2 = function(t) {
            for (var e = [], n = 0; n < t.length; n++)
                -1 !== t[n][0] && (e[n] = t[n][1]);
            return e.join("")
        },
        r.prototype.diff_levenshtein = function(t) {
            for (var e = 0, n = 0, r = 0, i = 0; i < t.length; i++) {
                var o = t[i][0],
                    s = t[i][1];
                switch (o) {
                case 1:
                    n += s.length;
                    break;
                case -1:
                    r += s.length;
                    break;
                case 0:
                    e += Math.max(n, r),
                    n = 0,
                    r = 0
                }
            }
            return e += Math.max(n, r)
        },
        r.prototype.diff_toDelta = function(t) {
            for (var e = [], n = 0; n < t.length; n++)
                switch (t[n][0]) {
                case 1:
                    e[n] = "+" + encodeURI(t[n][1]);
                    break;
                case -1:
                    e[n] = "-" + t[n][1].length;
                    break;
                case 0:
                    e[n] = "=" + t[n][1].length
                }
            return e.join("\t").replace(/%20/g, " ")
        },
        r.prototype.diff_fromDelta = function(t, e) {
            for (var n = [], r = 0, i = 0, o = e.split(/\t/g), s = 0; s < o.length; s++) {
                var a = o[s].substring(1);
                switch (o[s].charAt(0)) {
                case "+":
                    try {
                        n[r++] = [1, decodeURI(a)]
                    } catch (t) {
                        throw new Error("Illegal escape in diff_fromDelta: " + a)
                    }
                    break;
                case "-":
                case "=":
                    var f = parseInt(a, 10);
                    if (isNaN(f) || f < 0)
                        throw new Error("Invalid number in diff_fromDelta: " + a);
                    var c = t.substring(i, i += f);
                    "=" == o[s].charAt(0) ? n[r++] = [0, c] : n[r++] = [-1, c];
                    break;
                default:
                    if (o[s])
                        throw new Error("Invalid diff operation in diff_fromDelta: " + o[s])
                }
            }
            if (i != t.length)
                throw new Error("Delta length (" + i + ") does not equal source text length (" + t.length + ").");
            return n
        },
        r.prototype.match_main = function(t, e, n) {
            if (null == t || null == e || null == n)
                throw new Error("Null input. (match_main)");
            return n = Math.max(0, Math.min(n, t.length)), t == e ? 0 : t.length ? t.substring(n, n + e.length) == e ? n : this.match_bitap_(t, e, n) : -1
        },
        r.prototype.match_bitap_ = function(t, e, n) {
            if (e.length > this.Match_MaxBits)
                throw new Error("Pattern too long for this browser.");
            var r = this.match_alphabet_(e),
                i = this;
            function o(t, r) {
                var o = t / e.length,
                    s = Math.abs(n - r);
                return i.Match_Distance ? o + s / i.Match_Distance : s ? 1 : o
            }
            var s = this.Match_Threshold,
                a = t.indexOf(e, n);
            -1 != a && (s = Math.min(o(0, a), s), -1 != (a = t.lastIndexOf(e, n + e.length)) && (s = Math.min(o(0, a), s)));
            var f,
                c,
                l = 1 << e.length - 1;
            a = -1;
            for (var h, u = e.length + t.length, g = 0; g < e.length; g++) {
                for (f = 0, c = u; f < c;)
                    o(g, n + c) <= s ? f = c : u = c,
                    c = Math.floor((u - f) / 2 + f);
                u = c;
                var p = Math.max(1, n - c + 1),
                    d = Math.min(n + c, t.length) + e.length,
                    v = Array(d + 2);
                v[d + 1] = (1 << g) - 1;
                for (var _ = d; _ >= p; _--) {
                    var b = r[t.charAt(_ - 1)];
                    if (v[_] = 0 === g ? (v[_ + 1] << 1 | 1) & b : (v[_ + 1] << 1 | 1) & b | (h[_ + 1] | h[_]) << 1 | 1 | h[_ + 1], v[_] & l) {
                        var y = o(g, _ - 1);
                        if (y <= s) {
                            if (s = y, !((a = _ - 1) > n))
                                break;
                            p = Math.max(1, 2 * n - a)
                        }
                    }
                }
                if (o(g + 1, n) > s)
                    break;
                h = v
            }
            return a
        },
        r.prototype.match_alphabet_ = function(t) {
            for (var e = {}, n = 0; n < t.length; n++)
                e[t.charAt(n)] = 0;
            for (n = 0; n < t.length; n++)
                e[t.charAt(n)] |= 1 << t.length - n - 1;
            return e
        },
        r.prototype.patch_addContext_ = function(t, e) {
            if (0 != e.length) {
                for (var n = e.substring(t.start2, t.start2 + t.length1), r = 0; e.indexOf(n) != e.lastIndexOf(n) && n.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin;)
                    r += this.Patch_Margin,
                    n = e.substring(t.start2 - r, t.start2 + t.length1 + r);
                r += this.Patch_Margin;
                var i = e.substring(t.start2 - r, t.start2);
                i && t.diffs.unshift([0, i]);
                var o = e.substring(t.start2 + t.length1, t.start2 + t.length1 + r);
                o && t.diffs.push([0, o]),
                t.start1 -= i.length,
                t.start2 -= i.length,
                t.length1 += i.length + o.length,
                t.length2 += i.length + o.length
            }
        },
        r.prototype.patch_make = function(t, e, n) {
            var i,
                o;
            if ("string" == typeof t && "string" == typeof e && void 0 === n)
                i = t,
                (o = this.diff_main(i, e, !0)).length > 2 && (this.diff_cleanupSemantic(o), this.diff_cleanupEfficiency(o));
            else if (t && "object" == typeof t && void 0 === e && void 0 === n)
                o = t,
                i = this.diff_text1(o);
            else if ("string" == typeof t && e && "object" == typeof e && void 0 === n)
                i = t,
                o = e;
            else {
                if ("string" != typeof t || "string" != typeof e || !n || "object" != typeof n)
                    throw new Error("Unknown call format to patch_make.");
                i = t,
                o = n
            }
            if (0 === o.length)
                return [];
            for (var s = [], a = new r.patch_obj, f = 0, c = 0, l = 0, h = i, u = i, g = 0; g < o.length; g++) {
                var p = o[g][0],
                    d = o[g][1];
                switch (f || 0 === p || (a.start1 = c, a.start2 = l), p) {
                case 1:
                    a.diffs[f++] = o[g],
                    a.length2 += d.length,
                    u = u.substring(0, l) + d + u.substring(l);
                    break;
                case -1:
                    a.length1 += d.length,
                    a.diffs[f++] = o[g],
                    u = u.substring(0, l) + u.substring(l + d.length);
                    break;
                case 0:
                    d.length <= 2 * this.Patch_Margin && f && o.length != g + 1 ? (a.diffs[f++] = o[g], a.length1 += d.length, a.length2 += d.length) : d.length >= 2 * this.Patch_Margin && f && (this.patch_addContext_(a, h), s.push(a), a = new r.patch_obj, f = 0, h = u, c = l)
                }
                1 !== p && (c += d.length),
                -1 !== p && (l += d.length)
            }
            return f && (this.patch_addContext_(a, h), s.push(a)), s
        },
        r.prototype.patch_deepCopy = function(t) {
            for (var e = [], n = 0; n < t.length; n++) {
                var i = t[n],
                    o = new r.patch_obj;
                o.diffs = [];
                for (var s = 0; s < i.diffs.length; s++)
                    o.diffs[s] = i.diffs[s].slice();
                o.start1 = i.start1,
                o.start2 = i.start2,
                o.length1 = i.length1,
                o.length2 = i.length2,
                e[n] = o
            }
            return e
        },
        r.prototype.patch_apply = function(t, e) {
            if (0 == t.length)
                return [e, []];
            t = this.patch_deepCopy(t);
            var n = this.patch_addPadding(t);
            e = n + e + n,
            this.patch_splitMax(t);
            for (var r = 0, i = [], o = 0; o < t.length; o++) {
                var s,
                    a,
                    f = t[o].start2 + r,
                    c = this.diff_text1(t[o].diffs),
                    l = -1;
                if (c.length > this.Match_MaxBits ? -1 != (s = this.match_main(e, c.substring(0, this.Match_MaxBits), f)) && (-1 == (l = this.match_main(e, c.substring(c.length - this.Match_MaxBits), f + c.length - this.Match_MaxBits)) || s >= l) && (s = -1) : s = this.match_main(e, c, f), -1 == s)
                    i[o] = !1,
                    r -= t[o].length2 - t[o].length1;
                else if (i[o] = !0, r = s - f, c == (a = -1 == l ? e.substring(s, s + c.length) : e.substring(s, l + this.Match_MaxBits)))
                    e = e.substring(0, s) + this.diff_text2(t[o].diffs) + e.substring(s + c.length);
                else {
                    var h = this.diff_main(c, a, !1);
                    if (c.length > this.Match_MaxBits && this.diff_levenshtein(h) / c.length > this.Patch_DeleteThreshold)
                        i[o] = !1;
                    else {
                        this.diff_cleanupSemanticLossless(h);
                        for (var u, g = 0, p = 0; p < t[o].diffs.length; p++) {
                            var d = t[o].diffs[p];
                            0 !== d[0] && (u = this.diff_xIndex(h, g)),
                            1 === d[0] ? e = e.substring(0, s + u) + d[1] + e.substring(s + u) : -1 === d[0] && (e = e.substring(0, s + u) + e.substring(s + this.diff_xIndex(h, g + d[1].length))),
                            -1 !== d[0] && (g += d[1].length)
                        }
                    }
                }
            }
            return [e = e.substring(n.length, e.length - n.length), i]
        },
        r.prototype.patch_addPadding = function(t) {
            for (var e = this.Patch_Margin, n = "", r = 1; r <= e; r++)
                n += String.fromCharCode(r);
            for (r = 0; r < t.length; r++)
                t[r].start1 += e,
                t[r].start2 += e;
            var i = t[0],
                o = i.diffs;
            if (0 == o.length || 0 != o[0][0])
                o.unshift([0, n]),
                i.start1 -= e,
                i.start2 -= e,
                i.length1 += e,
                i.length2 += e;
            else if (e > o[0][1].length) {
                var s = e - o[0][1].length;
                o[0][1] = n.substring(o[0][1].length) + o[0][1],
                i.start1 -= s,
                i.start2 -= s,
                i.length1 += s,
                i.length2 += s
            }
            if (0 == (o = (i = t[t.length - 1]).diffs).length || 0 != o[o.length - 1][0])
                o.push([0, n]),
                i.length1 += e,
                i.length2 += e;
            else if (e > o[o.length - 1][1].length) {
                s = e - o[o.length - 1][1].length;
                o[o.length - 1][1] += n.substring(0, s),
                i.length1 += s,
                i.length2 += s
            }
            return n
        },
        r.prototype.patch_splitMax = function(t) {
            for (var e = this.Match_MaxBits, n = 0; n < t.length; n++)
                if (!(t[n].length1 <= e)) {
                    var i = t[n];
                    t.splice(n--, 1);
                    for (var o = i.start1, s = i.start2, a = ""; 0 !== i.diffs.length;) {
                        var f = new r.patch_obj,
                            c = !0;
                        for (f.start1 = o - a.length, f.start2 = s - a.length, "" !== a && (f.length1 = f.length2 = a.length, f.diffs.push([0, a])); 0 !== i.diffs.length && f.length1 < e - this.Patch_Margin;) {
                            var l = i.diffs[0][0],
                                h = i.diffs[0][1];
                            1 === l ? (f.length2 += h.length, s += h.length, f.diffs.push(i.diffs.shift()), c = !1) : -1 === l && 1 == f.diffs.length && 0 == f.diffs[0][0] && h.length > 2 * e ? (f.length1 += h.length, o += h.length, c = !1, f.diffs.push([l, h]), i.diffs.shift()) : (h = h.substring(0, e - f.length1 - this.Patch_Margin), f.length1 += h.length, o += h.length, 0 === l ? (f.length2 += h.length, s += h.length) : c = !1, f.diffs.push([l, h]), h == i.diffs[0][1] ? i.diffs.shift() : i.diffs[0][1] = i.diffs[0][1].substring(h.length))
                        }
                        a = (a = this.diff_text2(f.diffs)).substring(a.length - this.Patch_Margin);
                        var u = this.diff_text1(i.diffs).substring(0, this.Patch_Margin);
                        "" !== u && (f.length1 += u.length, f.length2 += u.length, 0 !== f.diffs.length && 0 === f.diffs[f.diffs.length - 1][0] ? f.diffs[f.diffs.length - 1][1] += u : f.diffs.push([0, u])),
                        c || t.splice(++n, 0, f)
                    }
                }
        },
        r.prototype.patch_toText = function(t) {
            for (var e = [], n = 0; n < t.length; n++)
                e[n] = t[n];
            return e.join("")
        },
        r.prototype.patch_fromText = function(t) {
            var e = [];
            if (!t)
                return e;
            for (var n = t.split("\n"), i = 0, o = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/; i < n.length;) {
                var s = n[i].match(o);
                if (!s)
                    throw new Error("Invalid patch string: " + n[i]);
                var a = new r.patch_obj;
                for (e.push(a), a.start1 = parseInt(s[1], 10), "" === s[2] ? (a.start1--, a.length1 = 1) : "0" == s[2] ? a.length1 = 0 : (a.start1--, a.length1 = parseInt(s[2], 10)), a.start2 = parseInt(s[3], 10), "" === s[4] ? (a.start2--, a.length2 = 1) : "0" == s[4] ? a.length2 = 0 : (a.start2--, a.length2 = parseInt(s[4], 10)), i++; i < n.length;) {
                    var f = n[i].charAt(0);
                    try {
                        var c = decodeURI(n[i].substring(1))
                    } catch (t) {
                        throw new Error("Illegal escape in patch_fromText: " + c)
                    }
                    if ("-" == f)
                        a.diffs.push([-1, c]);
                    else if ("+" == f)
                        a.diffs.push([1, c]);
                    else if (" " == f)
                        a.diffs.push([0, c]);
                    else {
                        if ("@" == f)
                            break;
                        if ("" !== f)
                            throw new Error('Invalid patch mode "' + f + '" in: ' + c)
                    }
                    i++
                }
            }
            return e
        },
        r.patch_obj = function() {
            this.diffs = [],
            this.start1 = null,
            this.start2 = null,
            this.length1 = 0,
            this.length2 = 0
        },
        r.patch_obj.prototype.toString = function() {
            for (var t, e = ["@@ -" + (0 === this.length1 ? this.start1 + ",0" : 1 == this.length1 ? this.start1 + 1 : this.start1 + 1 + "," + this.length1) + " +" + (0 === this.length2 ? this.start2 + ",0" : 1 == this.length2 ? this.start2 + 1 : this.start2 + 1 + "," + this.length2) + " @@\n"], n = 0; n < this.diffs.length; n++) {
                switch (this.diffs[n][0]) {
                case 1:
                    t = "+";
                    break;
                case -1:
                    t = "-";
                    break;
                case 0:
                    t = " "
                }
                e[n + 1] = t + encodeURI(this.diffs[n][1]) + "\n"
            }
            return e.join("").replace(/%20/g, " ")
        },
        t.exports = r,
        t.exports.diff_match_patch = r,
        t.exports.DIFF_DELETE = -1,
        t.exports.DIFF_INSERT = 1,
        t.exports.DIFF_EQUAL = 0
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = function() {
            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").replace(/\r\n/g, "\n")
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = function(t, e, n, r) {
            var i = t + (n - t) / 2;
            return "M " + t + " " + e + " C " + i + "," + e + " " + i + "," + r + " " + n + "," + r
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = function(t, e) {
            var n = Math.random().toString(36).substr(2, 5),
                r = "js-" + e + "-" + n,
                i = t.querySelector("." + e);
            if (i)
                return i.id = i.id || r, i.id;
            var o = document.createElement("div");
            return t.appendChild(o), o.className = e, o.id = r, o.id
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = {
            on: function(t, e, n, r) {
                var i = "document" === t ? document : document.querySelector(t);
                i.addEventListener(e, function(t) {
                    for (var e = i.querySelectorAll(n), o = t.target, s = 0, a = e.length; s < a; s += 1)
                        for (var f = o, c = e[s]; f && f !== i;)
                            f === c && r.call(c, t),
                            f = f.parentNode
                })
            }
        }
    }]).default
});

