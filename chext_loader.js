(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    'use strict';
    var aa = "-t-k0-und",
        k = "Edge",
        ba = "IFRAME",
        ca = "INPUT",
        da = "Invalid event type",
        ea = "Opera",
        fa = "TEXTAREA",
        ha = "bg-t-k0-qwerty",
        m = "character",
        ia = "chr-t-und-latn-k0-und",
        ja = "compositionend",
        ka = "cs-t-k0-qwertz",
        la = "en-t-k0-dvorak",
        q = "function",
        ma = "gu-t-und-latn-k0-qwerty",
        na = "hi-t-k0-qwerty",
        oa = "hu-t-k0-101key",
        pa = "hy-hyr-t-k0-und",
        qa = "hy-hyt-t-k0-und",
        ra = "iPad",
        sa = "iPod",
        ta = "ja-hira-t-i0-und",
        ua = "ja-t-ja-hira-i0-und",
        va = "ka-t-k0-legacy",
        r = "keydown",
        t = "keypress",
        wa = "keyup",
        xa = "latn_002",
        ya = "number",
        za = "object",
        Aa = "pa-guru-t-k0-und",
        Ba = "pa-guru-t-und-latn-k0-und",
        Ca = "ro-t-k0-extended",
        Da = "ro-t-k0-legacy",
        Ea = "ru-t-k0-aatseel",
        Fa = "ru-t-k0-qwerty",
        Ga = "ru-t-k0-yazhert",
        Ha = "sk-t-k0-qwerty",
        u = "string",
        Ia = "ta-t-k0-itrans",
        Ja = "ta-t-k0-typewriter",
        Ka = "th-t-k0-pattajoti",
        La = "tr-t-k0-legacy",
        Na = "uk-t-k0-101key",
        Oa = "und-ethi-t-k0-und",
        Pa = "us_intl",
        Qa = "uz-cyrl-t-k0-legacy",
        Ra = "uz-cyrl-t-k0-und",
        Sa = "vi-t-k0-legacy",
        Ta = "yue-hant-t-i0-und",
        Ua = "zh-hant-t-i0-pinyin",
        Va = "zh-hant-t-i0-und",
        Wa = "zh-t-i0-pinyin",
        Xa =
        "zh-t-i0-wubi-1986",
        v, $a = function(a, b) {
            a.prototype = Ya(b.prototype);
            a.prototype.constructor = a;
            if (Za) Za(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.G = b.prototype
        },
        ab = function() {},
        bb = function(a) {
            var b = typeof a;
            b = b != za ? b : a ? Array.isArray(a) ? "array" : b : "null";
            return "array" == b || b == za && typeof a.length == ya
        },
        w = function(a) {
            var b = typeof a;
            return b == za && null != a || b == q
        },
        x = function(a) {
            return Object.prototype.hasOwnProperty.call(a,
                cb) && a[cb] || (a[cb] = ++db)
        },
        eb = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        fb = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        gb = function(a, b, c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? gb = eb : gb = fb;
            return gb.apply(null, arguments)
        },
        hb = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var d = c.slice();
                d.push.apply(d, arguments);
                return a.apply(this, d)
            }
        },
        y = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.G = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.Ji = function(d, e, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
                return b.prototype[e].apply(d, g)
            }
        },
        ib = function(a) {
            return a[a.length - 1]
        },
        jb = function(a, b) {
            a: {
                for (var c = a.length, d = typeof a === u ? a.split("") :
                        a, e = 0; e < c; e++)
                    if (e in d && b.call(void 0, d[e], e, a)) {
                        b = e;
                        break a
                    } b = -1
            }
            return 0 > b ? null : typeof a === u ? a.charAt(b) : a[b]
        },
        z = function(a, b) {
            return 0 <= kb(a, b)
        },
        lb = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        },
        mb = function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (bb(d)) {
                    var e = a.length || 0,
                        f = d.length || 0;
                    a.length = e + f;
                    for (var g = 0; g < f; g++) a[e + g] = d[g]
                } else a.push(d)
            }
        },
        nb = function(a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        },
        qb = function(a,
            b) {
            var c = 0;
            a = ob(String(a)).split(".");
            b = ob(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = pb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || pb(0 == f[2].length, 0 == g[2].length) || pb(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        },
        pb = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        },
        B = function(a) {
            return -1 !=
                A.indexOf(a)
        },
        rb = function(a) {
            for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
            return c
        },
        sb = function(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        },
        ub = function(a) {
            var b = tb;
            a: {
                for (var c in b)
                    if (b[c] == a) {
                        a = !0;
                        break a
                    } a = !1
            }
            return a
        },
        vb = function(a, b) {
            return null !== a && b in a
        },
        wb = function(a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        },
        yb = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < xb.length; f++) c =
                    xb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        },
        zb = function() {
            return B("Firefox") || B("FxiOS")
        },
        Ab = function() {
            return (B("Chrome") || B("CriOS")) && !B(k)
        },
        Bb = function() {
            function a(e) {
                e = jb(e, d);
                return c[e] || ""
            }
            var b = A;
            if (!B("Trident") && !B("MSIE")) {
                b = rb(b);
                var c = {};
                C(b, function(e) {
                    c[e[0]] = e[1]
                });
                var d = hb(vb, c);
                B(ea) ? a(["Version", ea]) : B(k) ? a([k]) : B("Edg/") ? a(["Edg"]) : Ab() && a(["Chrome", "CriOS", "HeadlessChrome"])
            }
        },
        Jb = function(a) {
            Cb.test(a) && (-1 != a.indexOf("&") && (a = a.replace(Db, "&amp;")), -1 !=
                a.indexOf("<") && (a = a.replace(Eb, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(Fb, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(Gb, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(Hb, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(Ib, "&#0;")));
            return a
        },
        Kb = function() {
            return B("iPhone") && !B(sa) && !B(ra)
        },
        Lb = function(a) {
            Lb[" "](a);
            return a
        },
        Nb = function(a, b) {
            var c = Mb;
            return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
        },
        Ob = function() {
            var a = D.document;
            return a ? a.documentMode : void 0
        },
        E = function(a) {
            return Nb(a,
                function() {
                    return 0 <= qb(Pb, a)
                })
        },
        F = function(a) {
            return Number(Qb) >= a
        },
        G = function(a, b) {
            this.x = void 0 !== a ? a : 0;
            this.y = void 0 !== b ? b : 0
        },
        Rb = function(a, b) {
            this.width = a;
            this.height = b
        },
        K = function(a) {
            return a ? new Sb(H(a)) : Tb || (Tb = new Sb)
        },
        Vb = function(a, b) {
            sb(b, function(c, d) {
                c && typeof c == za && c.Li && (c = c.Ki());
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Ub.hasOwnProperty(d) ? a.setAttribute(Ub[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
            })
        },
        Wb = function(a) {
            return a ? L(a) : window
        },
        L = function(a) {
            return a.parentWindow || a.defaultView
        },
        Yb = function(a, b, c) {
            return Xb(document, arguments)
        },
        Xb = function(a, b) {
            var c = String(b[0]),
                d = b[1];
            if (!Zb && d && (d.name || d.type)) {
                c = ["<", c];
                d.name && c.push(' name="', Jb(d.name), '"');
                if (d.type) {
                    c.push(' type="', Jb(d.type), '"');
                    var e = {};
                    yb(e, d);
                    delete e.type;
                    d = e
                }
                c.push(">");
                c = c.join("")
            }
            c = $b(a, c);
            d && (typeof d === u ? c.className = d : Array.isArray(d) ? c.className = d.join(" ") : Vb(c, d));
            2 < b.length && ac(a, c, b);
            return c
        },
        ac = function(a,
            b, c) {
            function d(h) {
                h && b.appendChild(typeof h === u ? a.createTextNode(h) : h)
            }
            for (var e = 2; e < c.length; e++) {
                var f = c[e];
                if (!bb(f) || w(f) && 0 < f.nodeType) d(f);
                else {
                    a: {
                        if (f && typeof f.length == ya) {
                            if (w(f)) {
                                var g = typeof f.item == q || typeof f.item == u;
                                break a
                            }
                            if (typeof f === q) {
                                g = typeof f.item == q;
                                break a
                            }
                        }
                        g = !1
                    }
                    C(g ? lb(f) : f, d)
                }
            }
        },
        $b = function(a, b) {
            b = String(b);
            "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
            return a.createElement(b)
        },
        bc = function(a) {
            if (1 != a.nodeType) return !1;
            switch (a.tagName) {
                case "APPLET":
                case "AREA":
                case "BASE":
                case "BR":
                case "COL":
                case "COMMAND":
                case "EMBED":
                case "FRAME":
                case "HR":
                case "IMG":
                case ca:
                case ba:
                case "ISINDEX":
                case "KEYGEN":
                case "LINK":
                case "NOFRAMES":
                case "NOSCRIPT":
                case "META":
                case "OBJECT":
                case "PARAM":
                case "SCRIPT":
                case "SOURCE":
                case "STYLE":
                case "TRACK":
                case "WBR":
                    return !1
            }
            return !0
        },
        M = function(a) {
            return a && a.parentNode ? a.parentNode.removeChild(a) : null
        },
        cc = function(a, b) {
            if (!a || !b) return !1;
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        },
        fc = function(a, b) {
            if (a == b) return 0;
            if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
            if (N && !F(9)) {
                if (9 == a.nodeType) return -1;
                if (9 == b.nodeType) return 1
            }
            if ("sourceIndex" in a || a.parentNode &&
                "sourceIndex" in a.parentNode) {
                var c = 1 == a.nodeType,
                    d = 1 == b.nodeType;
                if (c && d) return a.sourceIndex - b.sourceIndex;
                var e = a.parentNode,
                    f = b.parentNode;
                return e == f ? dc(a, b) : !c && cc(e, b) ? -1 * ec(a, b) : !d && cc(f, a) ? ec(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex)
            }
            d = H(a);
            c = d.createRange();
            c.selectNode(a);
            c.collapse(!0);
            a = d.createRange();
            a.selectNode(b);
            a.collapse(!0);
            return c.compareBoundaryPoints(D.Range.START_TO_END, a)
        },
        ec = function(a, b) {
            var c = a.parentNode;
            if (c == b) return -1;
            for (; b.parentNode !=
                c;) b = b.parentNode;
            return dc(b, a)
        },
        dc = function(a, b) {
            for (; b = b.previousSibling;)
                if (b == a) return -1;
            return 1
        },
        gc = function(a) {
            var b, c = arguments.length;
            if (!c) return null;
            if (1 == c) return arguments[0];
            var d = [],
                e = Infinity;
            for (b = 0; b < c; b++) {
                for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
                d.push(f);
                e = Math.min(e, f.length)
            }
            f = null;
            for (b = 0; b < e; b++) {
                g = d[0][b];
                for (var h = 1; h < c; h++)
                    if (g != d[h][b]) return f;
                f = g
            }
            return f
        },
        H = function(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        ic = function(a) {
            var b = [];
            hc(a,
                b, !1);
            return b.join("")
        },
        hc = function(a, b, c) {
            if (!(a.nodeName in jc))
                if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                else if (a.nodeName in kc) b.push(kc[a.nodeName]);
            else
                for (a = a.firstChild; a;) hc(a, b, c), a = a.nextSibling
        },
        lc = function(a) {
            try {
                var b = a && a.activeElement;
                return b && b.nodeName ? b : null
            } catch (c) {
                return null
            }
        },
        Sb = function(a) {
            this.g = a || D.document || document
        },
        mc = function(a) {
            for (var b; b = a.firstChild;) a.removeChild(b)
        },
        nc = function(a) {
            a && typeof a.ha == q && a.ha()
        },
        O = function() {
            this.s = this.s;
            this.D = this.D
        },
        oc = function(a, b) {
            this.type = a;
            this.h = this.target = b;
            this.defaultPrevented = this.i = !1
        },
        Q = function(a, b) {
            oc.call(this, a ? a.type : "");
            this.relatedTarget = this.h = this.target = null;
            this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
            this.key = "";
            this.charCode = this.keyCode = 0;
            this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
            this.state = null;
            this.m = !1;
            this.pointerId = 0;
            this.pointerType = "";
            this.g = null;
            if (a) {
                var c = this.type = a.type,
                    d = a.changedTouches && a.changedTouches.length ?
                    a.changedTouches[0] : null;
                this.target = a.target || a.srcElement;
                this.h = b;
                if (b = a.relatedTarget) {
                    if (P) {
                        a: {
                            try {
                                Lb(b.nodeName);
                                var e = !0;
                                break a
                            } catch (f) {}
                            e = !1
                        }
                        e || (b = null)
                    }
                } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
                this.relatedTarget = b;
                d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY,
                    this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
                this.button = a.button;
                this.keyCode = a.keyCode || 0;
                this.key = a.key || "";
                this.charCode = a.charCode || (c == t ? a.keyCode : 0);
                this.ctrlKey = a.ctrlKey;
                this.altKey = a.altKey;
                this.shiftKey = a.shiftKey;
                this.metaKey = a.metaKey;
                this.m = pc ? a.metaKey : a.ctrlKey;
                this.pointerId = a.pointerId || 0;
                this.pointerType = typeof a.pointerType === u ? a.pointerType : qc[a.pointerType] || "";
                this.state = a.state;
                this.g = a;
                a.defaultPrevented && Q.G.j.call(this)
            }
        },
        sc = function(a) {
            return !(!a || !a[rc])
        },
        uc = function(a,
            b, c, d, e) {
            this.listener = a;
            this.proxy = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.O = e;
            this.key = ++tc;
            this.removed = this.ba = !1
        },
        vc = function(a) {
            a.removed = !0;
            a.listener = null;
            a.proxy = null;
            a.src = null;
            a.O = null
        },
        wc = function(a) {
            this.src = a;
            this.g = {};
            this.h = 0
        },
        xc = function(a, b) {
            var c = b.type;
            if (c in a.g) {
                var d = a.g[c],
                    e = kb(d, b),
                    f;
                (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
                f && (vc(b), 0 == a.g[c].length && (delete a.g[c], a.h--))
            }
        },
        zc = function(a, b, c, d, e) {
            a = a.g[b.toString()];
            b = -1;
            a && (b = yc(a, c, d, e));
            return -1 < b ? a[b] :
                null
        },
        yc = function(a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
                var f = a[e];
                if (!f.removed && f.listener == b && f.capture == !!c && f.O == d) return e
            }
            return -1
        },
        Bc = function(a, b, c, d, e) {
            if (d && d.once) return Ac(a, b, c, d, e);
            if (Array.isArray(b)) {
                for (var f = 0; f < b.length; f++) Bc(a, b[f], c, d, e);
                return null
            }
            c = Cc(c);
            return sc(a) ? a.listen(b, c, w(d) ? !!d.capture : !!d, e) : Dc(a, b, c, !1, d, e)
        },
        Dc = function(a, b, c, d, e, f) {
            if (!b) throw Error(da);
            var g = w(e) ? !!e.capture : !!e,
                h = Ec(a);
            h || (a[Fc] = h = new wc(a));
            c = h.add(b, c, d, g, f);
            if (c.proxy) return c;
            d = Gc();
            c.proxy =
                d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) Hc || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent) a.attachEvent(Ic(b.toString()), d);
            else if (a.addListener && a.removeListener) a.addListener(d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            Jc++;
            return c
        },
        Gc = function() {
            function a(c) {
                return b.call(a.src, a.listener, c)
            }
            var b = Kc;
            return a
        },
        Ac = function(a, b, c, d, e) {
            if (Array.isArray(b)) {
                for (var f = 0; f < b.length; f++) Ac(a, b[f], c, d, e);
                return null
            }
            c = Cc(c);
            return sc(a) ?
                a.g.add(String(b), c, !0, w(d) ? !!d.capture : !!d, e) : Dc(a, b, c, !0, d, e)
        },
        Lc = function(a, b, c, d, e) {
            if (Array.isArray(b))
                for (var f = 0; f < b.length; f++) Lc(a, b[f], c, d, e);
            else d = w(d) ? !!d.capture : !!d, c = Cc(c), sc(a) ? a.g.remove(String(b), c, d, e) : a && (a = Ec(a)) && (b = zc(a, b, c, d, e)) && Mc(b)
        },
        Mc = function(a) {
            if (typeof a !== ya && a && !a.removed) {
                var b = a.src;
                if (sc(b)) xc(b.g, a);
                else {
                    var c = a.type,
                        d = a.proxy;
                    b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Ic(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                    Jc--;
                    (c = Ec(b)) ? (xc(c, a), 0 == c.h && (c.src = null, b[Fc] = null)) : vc(a)
                }
            }
        },
        Ic = function(a) {
            return a in Nc ? Nc[a] : Nc[a] = "on" + a
        },
        Kc = function(a, b) {
            if (a.removed) a = !0;
            else {
                b = new Q(b, this);
                var c = a.listener,
                    d = a.O || a.src;
                a.ba && Mc(a);
                a = c.call(d, b)
            }
            return a
        },
        Ec = function(a) {
            a = a[Fc];
            return a instanceof wc ? a : null
        },
        Cc = function(a) {
            if (typeof a === q) return a;
            a[Oc] || (a[Oc] = function(b) {
                return a.handleEvent(b)
            });
            return a[Oc]
        },
        R = function() {
            O.call(this);
            this.g = new wc(this);
            this.m = this;
            this.l = null
        },
        Pc = function(a, b, c, d) {
            b = a.g.g[String(b)];
            if (!b) return !0;
            b = b.concat();
            for (var e = !0, f = 0; f < b.length; ++f) {
                var g = b[f];
                if (g && !g.removed && g.capture == c) {
                    var h = g.listener,
                        l = g.O || g.src;
                    g.ba && xc(a.g, g);
                    e = !1 !== h.call(l, d) && e
                }
            }
            return e && !d.defaultPrevented
        },
        Qc = function(a, b) {
            var c = H(a);
            return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
        },
        Rc = function(a, b) {
            return Qc(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
        },
        Tc = function(a, b) {
            if (b instanceof G) {
                var c =
                    b.x;
                b = b.y
            } else c = b, b = void 0;
            a.style.left = Sc(c);
            a.style.top = Sc(b)
        },
        Uc = function(a) {
            try {
                return a.getBoundingClientRect()
            } catch (b) {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
            }
        },
        Vc = function(a) {
            var b = H(a),
                c = new G(0, 0);
            var d = b ? H(b) : document;
            d = !N || F(9) || "CSS1Compat" == K(d).g.compatMode ? d.documentElement : d.body;
            if (a == d) return c;
            a = Uc(a);
            d = K(b).g;
            b = d.scrollingElement ? d.scrollingElement : S || "CSS1Compat" != d.compatMode ? d.body || d.documentElement : d.documentElement;
            d = L(d);
            b = N && E("10") && d.pageYOffset != b.scrollTop ? new G(b.scrollLeft,
                b.scrollTop) : new G(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c
        },
        Wc = function(a) {
            if (1 == a.nodeType) return a = Uc(a), new G(a.left, a.top);
            a = a.changedTouches ? a.changedTouches[0] : a;
            return new G(a.clientX, a.clientY)
        },
        Sc = function(a) {
            typeof a == ya && (a += "px");
            return a
        },
        Yc = function(a) {
            var b = Xc;
            if ("none" != Rc(a, "display")) return b(a);
            var c = a.style,
                d = c.display,
                e = c.visibility,
                f = c.position;
            c.visibility = "hidden";
            c.position = "absolute";
            c.display = "inline";
            a = b(a);
            c.display =
                d;
            c.position = f;
            c.visibility = e;
            return a
        },
        Xc = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = S && !b && !c;
            return (void 0 === b || d) && a.getBoundingClientRect ? (a = Uc(a), new Rb(a.right - a.left, a.bottom - a.top)) : new Rb(b, c)
        },
        Zc = function(a, b) {
            if (/^\d+px?$/.test(b)) return parseInt(b, 10);
            var c = a.style.left,
                d = a.runtimeStyle.left;
            a.runtimeStyle.left = a.currentStyle.left;
            a.style.left = b;
            b = a.style.pixelLeft;
            a.style.left = c;
            a.runtimeStyle.left = d;
            return +b
        },
        cd = function(a) {
            var b = Rc(a, "fontSize");
            var c = (c = b.match($c)) && c[0] ||
                null;
            if (b && "px" == c) return parseInt(b, 10);
            if (N) {
                if (String(c) in ad) return Zc(a, b);
                if (a.parentNode && 1 == a.parentNode.nodeType && String(c) in bd) return a = a.parentNode, c = Rc(a, "fontSize"), Zc(a, b == c ? "1em" : b)
            }
            c = Yb("SPAN", {
                style: "visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"
            });
            a.appendChild(c);
            b = c.offsetHeight;
            M(c);
            return b
        },
        dd = function(a) {
            return (a = a.exec(A)) ? a[1] : ""
        },
        ed = function(a) {
            return typeof a.className == u ? a.className : a.getAttribute && a.getAttribute("class") ||
                ""
        },
        gd = function(a, b) {
            a = a.match(fd);
            b = b.match(fd);
            return a[3] == b[3] && a[1] == b[1] && a[4] == b[4]
        },
        id = function(a) {
            if (!a.tagName || a.readOnly) return !1;
            switch (a.tagName.toUpperCase()) {
                case fa:
                    return !0;
                case ca:
                    return z("EMAIL NUMBER SEARCH TEL TEXT URL".split(" "), a.type.toUpperCase());
                case ba:
                    try {
                        var b = hd(a);
                        return !!b && !!(b.designMode && "ON" == b.designMode.toUpperCase() || b.body && b.body.isContentEditable)
                    } catch (c) {
                        return !1
                    }
                default:
                    return !!a.isContentEditable
            }
        },
        hd = function(a) {
            var b = x(document),
                c = x(a),
                d = jd[b];
            d ||
                (d = jd[b] = {});
            try {
                var e = window.location.href || "";
                if (!(c in d))
                    if (a.src) {
                        var f = a.src.indexOf("//"),
                            g = 0 > f ? "N/A" : a.src.slice(0, f);
                        d[c] = "" != g && "http:" != g && "https:" != g || gd(a.src, e)
                    } else d[c] = !0;
                return d[c] ? a.contentDocument || a.contentWindow.document : null
            } catch (h) {
                return d[c] = !1, null
            }
        },
        kd = function(a) {
            a = a || document;
            var b = [],
                c = [];
            mb(b, (a || document).getElementsByTagName(ba), (a || document).getElementsByTagName("FRAME"));
            C(b, function(d) {
                (d = hd(d)) && c.push(d)
            });
            return c
        },
        T = function(a) {
            O.call(this);
            this.h = a;
            this.g = {}
        },
        md = function(a, b, c, d, e, f) {
            Array.isArray(c) || (c && (ld[0] = c.toString()), c = ld);
            for (var g = 0; g < c.length; g++) {
                var h = Bc(b, c[g], d || a.handleEvent, e || !1, f || a.h || a);
                if (!h) break;
                a.g[h.key] = h
            }
            return a
        },
        nd = function(a, b, c, d, e, f) {
            if (Array.isArray(c))
                for (var g = 0; g < c.length; g++) nd(a, b, c[g], d, e, f);
            else d = d || a.handleEvent, e = w(e) ? !!e.capture : !!e, f = f || a.h || a, d = Cc(d), e = !!e, c = sc(b) ? zc(b.g, String(c), d, e, f) : b ? (b = Ec(b)) ? zc(b, c, d, e, f) : null : null, c && (Mc(c), delete a.g[c.key])
        },
        od = function(a, b) {
            if (typeof a !== q)
                if (a && typeof a.handleEvent ==
                    q) a = gb(a.handleEvent, a);
                else throw Error("Invalid listener argument");
            2147483647 < Number(b) || D.setTimeout(a, b || 0)
        },
        qd = function(a) {
            R.call(this);
            this.h = {};
            this.u = bb(a) ? a[0] : a;
            this.j = null;
            this.i = new T(this);
            pd(this, a)
        },
        pd = function(a, b) {
            var c = N ? "focusin" : "focus",
                d = N ? "focusout" : "blur";
            C(bb(b) ? b : [b], function(e) {
                var f = x(e);
                this.h[f] || (this.h[f] = !0, e = S ? Wb(e) : e, this.i.listen(e, c, this.H, rd), this.i.listen(e, d, this.I, rd))
            }, a)
        },
        ud = function(a, b, c) {
            if (a.h) {
                var d = sd;
                if ("kix" != d && "punch" != d && "trix" != d || !N) d = K(b), C(kd(d.g),
                    function(f) {
                        try {
                            pd(this, f)
                        } catch (g) {}
                    }, a);
                if (b = lc(b)) {
                    d = b;
                    for (var e = b.tagName; e && (e == ba || "FRAME" == e) && (!b.src || gd(b.src, window.location.href));) {
                        d = b.contentDocument || b.contentWindow.document;
                        if (!d) break;
                        pd(a, d);
                        e = lc(d);
                        if (!e) break;
                        d = b;
                        b = e;
                        if ((e = b.tagName) && "BODY" == e.toUpperCase()) {
                            b = d;
                            break
                        }
                    }
                    td(a, c, b)
                }
            }
        },
        td = function(a, b, c) {
            if (c != a.j) {
                a.j = c;
                b = new Q(b.g);
                b.target = c;
                b.type = "aec";
                var d;
                if (c = a.l)
                    for (d = []; c; c = c.l) d.push(c);
                a = a.m;
                c = b.type || b;
                if (typeof b === u) b = new oc(b, a);
                else if (b instanceof oc) b.target =
                    b.target || a;
                else {
                    var e = b;
                    b = new oc(c, a);
                    yb(b, e)
                }
                e = !0;
                if (d)
                    for (var f = d.length - 1; !b.i && 0 <= f; f--) {
                        var g = b.h = d[f];
                        e = Pc(g, c, !0, b) && e
                    }
                b.i || (g = b.h = a, e = Pc(g, c, !0, b) && e, b.i || (e = Pc(g, c, !1, b) && e));
                if (d)
                    for (f = 0; !b.i && f < d.length; f++) g = b.h = d[f], e = Pc(g, c, !1, b) && e
            }
        },
        vd = function() {},
        wd = function(a) {
            if (a instanceof vd) return a;
            if (typeof a.S == q) return a.S(!1);
            if (bb(a)) {
                var b = 0,
                    c = new vd;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) throw U;
                        if (b in a) return a[b++];
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        V = function(a,
            b, c, d, e) {
            this.D = !!b;
            this.node = null;
            this.m = 0;
            this.I = !1;
            this.U = !c;
            a && xd(this, a, d);
            this.s = void 0 != e ? e : this.m || 0;
            this.D && (this.s *= -1)
        },
        xd = function(a, b, c, d) {
            if (a.node = b) a.m = typeof c === ya ? c : 1 != a.node.nodeType ? 0 : a.D ? -1 : 1;
            typeof d === ya && (a.s = d)
        },
        yd = function() {},
        zd = function(a) {
            for (var b = [], c = 0, d = a.T(); c < d; c++) b.push(a.N(c));
            return b
        },
        Ad = function(a, b) {
            V.call(this, a, b, !0)
        },
        Bd = function(a, b, c, d, e) {
            this.i = this.h = null;
            this.l = this.j = 0;
            this.g = !!e;
            if (a) {
                this.h = a;
                this.j = b;
                this.i = c;
                this.l = d;
                if (1 == a.nodeType && "BR" != a.tagName)
                    if (a =
                        a.childNodes, b = a[b]) this.h = b, this.j = 0;
                    else {
                        a.length && (this.h = ib(a));
                        var f = !0
                    } 1 == c.nodeType && ((this.i = c.childNodes[d]) ? this.l = 0 : this.i = c)
            }
            V.call(this, this.g ? this.i : this.h, this.g, !0);
            if (f) try {
                this.next()
            } catch (g) {
                if (g != U) throw g;
            }
        },
        Cd = function() {},
        Dd = function(a, b) {
            a = a.g.getClientRects();
            return a.length ? (a = b ? a[0] : ib(a), new G(b ? a.left : a.right, b ? a.top : a.bottom)) : null
        },
        Ed = function(a, b) {
            b = b.X();
            try {
                return 0 <= a.F(b, 0, 0) && 0 >= a.F(b, 1, 1)
            } catch (c) {
                if (!N) throw c;
                return !1
            }
        },
        Fd = function(a) {
            this.g = a
        },
        Gd = function(a) {
            var b =
                H(a).createRange();
            if (3 == a.nodeType) b.setStart(a, 0), b.setEnd(a, a.length);
            else if (W(a)) {
                for (var c, d = a;
                    (c = d.firstChild) && W(c);) d = c;
                b.setStart(d, 0);
                for (d = a;
                    (c = d.lastChild) && W(c);) d = c;
                b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
            } else c = a.parentNode, a = kb(c.childNodes, a), b.setStart(c, a), b.setEnd(c, a + 1);
            return b
        },
        Hd = function(a, b, c, d) {
            var e = H(a).createRange();
            e.setStart(a, b);
            e.setEnd(c, d);
            return e
        },
        Id = function(a) {
            this.g = a
        },
        Jd = function(a) {
            this.i = this.h = this.m = null;
            this.l = this.j = -1;
            this.g = a
        },
        Kd = function(a) {
            var b =
                H(a).body.createTextRange();
            if (1 == a.nodeType) b.moveToElementText(a), W(a) && !a.childNodes.length && b.collapse(!1);
            else {
                for (var c = 0, d = a; d = d.previousSibling;) {
                    var e = d.nodeType;
                    if (3 == e) c += d.length;
                    else if (1 == e) {
                        b.moveToElementText(d);
                        break
                    }
                }
                d || b.moveToElementText(a.parentNode);
                b.collapse(!d);
                c && b.move(m, c);
                b.moveEnd(m, a.length)
            }
            return b
        },
        Ld = function(a) {
            a.m = a.h = a.i = null;
            a.j = a.l = -1
        },
        Md = function(a, b) {
            for (var c = b.childNodes, d = 0, e = c.length; d < e; d++) {
                var f = c[d];
                if (W(f)) {
                    var g = Kd(f),
                        h = g.htmlText != f.outerHTML;
                    if (a.v() &&
                        h ? 0 <= a.F(g, 1, 1) && 0 >= a.F(g, 1, 0) : a.g.inRange(g)) return Md(a, f)
                }
            }
            return b
        },
        Od = function(a, b, c) {
            c = c || a.ga();
            if (!c || !c.firstChild) return c;
            for (var d = 1 == b, e = 0, f = c.childNodes.length; e < f; e++) {
                var g = d ? e : f - e - 1,
                    h = c.childNodes[g];
                try {
                    var l = Nd(h)
                } catch (p) {
                    continue
                }
                var n = l.X();
                if (a.v())
                    if (!W(h)) {
                        if (0 == a.F(n, 1, 1)) {
                            a.j = a.l = g;
                            break
                        }
                    } else {
                        if (Ed(l, a)) return Od(a, b, h)
                    }
                else {
                    if (Ed(a, l)) {
                        if (!W(h)) {
                            d ? a.j = g : a.l = g + 1;
                            break
                        }
                        return Od(a, b, h)
                    }
                    if (0 > a.F(n, 1, 0) && 0 < a.F(n, 0, 1)) return Od(a, b, h)
                }
            }
            return c
        },
        Pd = function(a, b) {
            var c = 1 == b,
                d = c ? a.o() : a.B();
            if (1 == d.nodeType) {
                d = d.childNodes;
                for (var e = d.length, f = c ? 1 : -1, g = c ? 0 : e - 1; 0 <= g && g < e; g += f) {
                    var h = d[g];
                    if (!W(h) && 0 == a.g.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), Nd(h).X())) return c ? g : g + 1
                }
                return -1 == g ? 0 : g
            }
            a = a.g.duplicate();
            b = Kd(d);
            a.setEndPoint(c ? "EndToEnd" : "StartToStart", b);
            a = a.text.length;
            return c ? d.length - a : a
        },
        Qd = function(a) {
            return 3 == a.nodeType ? a.nodeValue : a.innerText
        },
        Rd = function(a) {
            this.g = a
        },
        Sd = function(a) {
            this.g = a
        },
        Ud = function(a) {
            return Td ? new Jd(a, H(a.parentElement())) :
                S ? new Sd(a) : P ? new Id(a) : X ? new Rd(a) : new Fd(a)
        },
        Nd = function(a) {
            if (N && !F(9)) {
                var b = new Jd(Kd(a), H(a));
                if (W(a)) {
                    for (var c, d = a;
                        (c = d.firstChild) && W(c);) d = c;
                    b.h = d;
                    b.j = 0;
                    for (d = a;
                        (c = d.lastChild) && W(c);) d = c;
                    b.i = d;
                    b.l = 1 == d.nodeType ? d.childNodes.length : d.length;
                    b.m = a
                } else b.h = b.i = b.m = a.parentNode, b.j = kb(b.m.childNodes, a), b.l = b.j + 1;
                a = b
            } else a = S ? new Sd(Gd(a)) : P ? new Id(Gd(a)) : X ? new Rd(Gd(a)) : new Fd(Gd(a));
            return a
        },
        W = function(a) {
            return bc(a) || 3 == a.nodeType
        },
        Vd = function() {
            this.l = this.i = this.j = this.h = this.m = null;
            this.g = !1
        },
        Wd = function(a, b) {
            var c = new Vd;
            c.m = a;
            c.g = !!b;
            return c
        },
        Y = function(a) {
            var b;
            if (!(b = a.m)) {
                b = a.A();
                var c = a.M(),
                    d = a.J(),
                    e = a.R();
                if (N && !F(9)) {
                    var f = b,
                        g = c,
                        h = d,
                        l = e,
                        n = !1;
                    1 == f.nodeType && (g = f.childNodes[g], n = !g, f = g || f.lastChild || f, g = 0);
                    var p = Kd(f);
                    g && p.move(m, g);
                    f == h && g == l ? p.collapse(!0) : (n && p.collapse(!1), n = !1, 1 == h.nodeType && (h = (g = h.childNodes[l]) || h.lastChild || h, l = 0, n = !g), f = Kd(h), f.collapse(!n), l && f.moveEnd(m, l), p.setEndPoint("EndToEnd", f));
                    l = new Jd(p, H(b));
                    l.h = b;
                    l.j = c;
                    l.i = d;
                    l.l = e;
                    b = l
                } else b = S ?
                    new Sd(Hd(b, c, d, e)) : P ? new Id(Hd(b, c, d, e)) : X ? new Rd(Hd(b, c, d, e)) : new Fd(Hd(b, c, d, e));
                b = a.m = b
            }
            return b
        },
        Xd = function() {},
        Yd = function() {
            this.i = this.h = this.g = null
        },
        Zd = function(a) {
            if (!a.h && (a.h = [], a.g))
                for (var b = 0; b < a.g.length; b++) a.h.push(a.g.item(b));
            return a.h
        },
        $d = function(a) {
            a.i || (a.i = Zd(a).concat(), a.i.sort(function(b, c) {
                return b.sourceIndex - c.sourceIndex
            }));
            return a.i
        },
        ae = function(a) {
            this.g = this.i = this.h = null;
            a && (this.g = $d(a), this.h = this.g.shift(), this.i = ib(this.g) || this.h);
            V.call(this, this.h, !1,
                !0)
        },
        be = function() {
            this.g = [];
            this.i = [];
            this.j = this.h = null
        },
        de = function(a) {
            a.h || (a.h = zd(a), a.h.sort(function(b, c) {
                var d = b.A();
                b = b.M();
                var e = c.A();
                c = c.M();
                return d == e && b == c ? 0 : ce(d, b, e, c) ? 1 : -1
            }));
            return a.h
        },
        fe = function(a) {
            this.g = null;
            this.h = 0;
            a && (this.g = ee(de(a), function(b) {
                return wd(b)
            }));
            V.call(this, a ? this.H() : null, !1, !0)
        },
        ge = function(a) {
            var b = !1;
            if (a.createRange) try {
                var c = a.createRange()
            } catch (e) {
                return null
            } else if (a.rangeCount) {
                if (1 < a.rangeCount) {
                    b = new be;
                    c = 0;
                    for (var d = a.rangeCount; c < d; c++) b.g.push(a.getRangeAt(c));
                    return b
                }
                c = a.getRangeAt(0);
                b = ce(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
            } else return null;
            (a = c) && a.addElement ? (b = new Yd, b.g = a, a = b) : a = Wd(Ud(a), b);
            return a
        },
        ce = function(a, b, c, d) {
            if (a == c) return d < b;
            var e;
            if (1 == a.nodeType && b)
                if (e = a.childNodes[b]) a = e, b = 0;
                else if (cc(a, c)) return !0;
            if (1 == c.nodeType && d)
                if (e = c.childNodes[d]) c = e, d = 0;
                else if (cc(c, a)) return !1;
            return 0 < (fc(a, c) || b - d)
        },
        he = function(a) {
            for (var b = null, c = a.firstChild; c;) {
                var d = c.nextSibling;
                3 == c.nodeType ? "" == c.nodeValue ? a.removeChild(c) :
                    b ? (b.nodeValue += c.nodeValue, a.removeChild(c)) : b = c : (he(c), b = null);
                c = d
            }
        },
        je = function(a, b) {
            return b ? ie(a.A(), a.M()) : ie(a.J(), a.R())
        },
        ne = function(a) {
            var b = a.ia(),
                c = ke(je(a, !b)),
                d = le(c),
                e = c.node.previousSibling;
            3 == c.node.nodeType && (c.node = null);
            var f = ke(je(a, b)),
                g = le(f),
                h = f.node.previousSibling;
            3 == f.node.nodeType && (f.node = null);
            return function() {
                !c.node && e && (c.node = e.nextSibling, c.node || (c = new me(e, e.length || e.childNodes.length)));
                !f.node && h && (f.node = h.nextSibling, f.node || (f = new me(h, h.length || h.childNodes.length)));
                var l = c.node || d.node.firstChild || d.node,
                    n = c.g,
                    p = f.node || g.node.firstChild || g.node,
                    I = f.g,
                    J = new Vd;
                J.g = ce(l, n, p, I);
                if (w(l) && 1 == l.nodeType && !bc(l)) {
                    var Ma = l.parentNode;
                    n = kb(Ma.childNodes, l);
                    l = Ma
                }
                w(p) && 1 == p.nodeType && !bc(p) && (Ma = p.parentNode, I = kb(Ma.childNodes, p), p = Ma);
                J.g ? (J.h = p, J.j = I, J.i = l, J.l = n) : (J.h = l, J.j = n, J.i = p, J.l = I);
                return J
            }
        },
        ke = function(a) {
            var b;
            if (3 == a.node.nodeType)
                for (b = a.node.previousSibling; b && 3 == b.nodeType; b = b.previousSibling) a.g += b.length || b.childNodes.length;
            else b = a.node.previousSibling;
            var c = a.node.parentNode;
            a.node = b ? b.nextSibling : c.firstChild;
            return a
        },
        me = function(a, b) {
            this.node = a;
            this.g = b
        },
        le = function(a) {
            var b = a.node.parentNode;
            return new me(b, kb(b.childNodes, a.node))
        },
        ie = function(a, b) {
            for (; 1 == a.nodeType;) {
                var c = a.childNodes[b];
                if (c || a.lastChild) c ? (a = c, b = 0) : (a = a.lastChild, b = a.length || a.childNodes.length);
                else break
            }
            return new me(a, b)
        },
        oe = function(a) {
            var b = a.getBoundingClientRect();
            if (N) {
                var c = Wc(a);
                a = Yc(a);
                b.left = c.x;
                b.right = c.x + a.width;
                b.top = c.y;
                b.bottom = c.y + a.height
            }
            return b
        },
        pe = function(a) {
            var b = K(a),
                c = 0;
            if (N && !E(9)) {
                var d = b.g.selection.createRange();
                if (d) try {
                    var e = a.createTextRange(),
                        f = e.duplicate();
                    e.moveToBookmark(d.getBookmark());
                    f.setEndPoint("EndToStart", e);
                    c = f.text.length
                } catch (n) {}
            } else c = a.selectionStart;
            d = "_h#" + x(a);
            var g = typeof d === u ? b.g.getElementById(d) : d;
            g ? mc(g) : g = b.pa("PRE", {
                id: d
            });
            g.parentNode || b.g.body.appendChild(g);
            var h = [];
            C(a.value, function(n, p, I) {
                h.push(" " == n && p + 1 != I.length && " " == I[p + 1] ? "\u00a0" : n)
            });
            h = h.join("");
            b.fa(g, b.g.createTextNode(String(h.substring(0,
                c))));
            d = $b(b.g, "SPAN");
            d.appendChild(b.g.createTextNode("\u200b"));
            b.fa(g, d);
            b.fa(g, b.g.createTextNode(String(h.substring(c) + " ")));
            b = a.classList ? a.classList : ed(a).match(/\S+/g) || [];
            C(b, function(n) {
                var p = g;
                if (p.classList) p.classList.add(n);
                else if (p.classList ? !p.classList.contains(n) : !z(p.classList ? p.classList : ed(p).match(/\S+/g) || [], n)) {
                    var I = ed(p);
                    n = I + (0 < I.length ? " " + n : n);
                    typeof p.className == u ? p.className = n : p.setAttribute && p.setAttribute("class", n)
                }
            });
            var l = "white-space:pre-wrap;word-wrap:pre-wrap;position:absolute;z-index:-9;visibility:hidden;display:block;";
            C("font-family font-size font-weight font-style text-transform text-decoration letter-spacing word-spacing line-height text-align vertical-align direction width height margin-top margin-right margin-bottom margin-left padding-top padding-right padding-bottom padding-left border-top-width border-right-width border-bottom-width border-left-width border-top-style border-right-style border-bottom-style border-left-style overflow-x overflow-y".split(" "), function(n) {
                try {
                    var p;
                    (p = Qc(a, n) || (a.currentStyle ?
                        a.currentStyle[n] : null) || a.style[n]) && (l += n + ":" + p + ";")
                } catch (I) {}
            });
            g.style.cssText = l;
            b = Rc(a, "overflowX");
            g.style.overflowX = b && "visible" != b ? b : "auto";
            b = Rc(a, "overflowY");
            g.style.overflowY = b && "visible" != b ? b : "auto";
            g.scrollTop = a.scrollTop;
            g.scrollLeft = a.scrollLeft;
            Tc(g, Vc(a));
            b = oe(d);
            return a.tagName.toUpperCase() == ca ? new G(b.left, Math.ceil(Wc(a).y + Yc(a).height)) : new G(b.left, Math.ceil(b.bottom))
        },
        qe = function() {},
        re = function(a, b) {
            this.g = a instanceof G ? a : new G(a, b)
        },
        se = function(a) {
            switch (a.type) {
                case r:
                case t:
                    if (a.ctrlKey ||
                        a.metaKey || a.altKey || a.shiftKey && 32 == a.keyCode) return !0;
                    break;
                case "click":
                    if (a.ctrlKey || a.metaKey || a.altKey || a.shiftKey) return !0;
                    break;
                case "key":
                    if (a.ctrlKey || a.metaKey || a.altKey || a.shiftKey || a.m) return !0
            }
            return !1
        },
        te = function(a) {
            a instanceof Q && (a = a.g);
            if (a.getAttribute) {
                if (a.getAttribute("isFake")) return !0
            } else if (a.isFake) return !0;
            return !1
        },
        Z = function(a, b, c, d) {
            c = void 0 === c ? 0 : c;
            var e = L(K(a).g),
                f = e.document,
                g = [r, t, wa];
            try {
                if (f.createEvent) {
                    if ("chext" != sd || b != ue && b != ja) {
                        var h = f.createEvent("Events");
                        h.initEvent(b, !0, !0);
                        h.view = e;
                        h.isFake = !0;
                        h.charCode = 0;
                        h.keyCode = c;
                        if (d)
                            for (var l in d) h[l] = d[l]
                    } else h = f.createEvent("CustomEvent"), h.initCustomEvent(b, !0, !0, d);
                    a.dispatchEvent(h)
                } else if (z(g, b) && f.createEventObject && a.fireEvent) {
                    h = f.createEventObject();
                    h.bubbles = !0;
                    h.cancelable = !0;
                    h.view = e;
                    h.ctrlKey = !1;
                    h.altKey = !1;
                    h.shiftKey = !0;
                    h.metaKey = !1;
                    h.keyCode = c;
                    if (h.setAttribute && (h.setAttribute("isFake", !0), d))
                        for (var n in d) h.setAttribute(n, d[n]);
                    a.fireEvent("on" + b, h)
                }
            } catch (p) {}
        },
        ve = function(a, b, c) {
            switch (b) {
                case 1:
                case 2:
                case 4:
                case 8:
                    Z(a,
                        r, 229);
                    Z(a, "compositionstart");
                    Z(a, "compositionupdate");
                    break;
                case 3:
                case 5:
                case 6:
                case 9:
                    var d = {};
                    c && (d.data = c);
                    od(function() {
                        Z(a, ja, void 0, d);
                        Z(a, ue, void 0, d);
                        Z(a, "input");
                        Z(a, wa)
                    })
            }
        },
        we = function(a) {
            var b = a.nodeName.toUpperCase();
            this.j = b == ba;
            this.l = b != fa && b != ca;
            this.i = a;
            this.h = null;
            this.g = K(this.h);
            this.m = {}
        },
        xe = function(a) {
            var b = a.h || (a.j ? (a.i.contentDocument || a.i.contentWindow.document || a.i.document).body : a.i);
            a.h != b && (a.h = b, a.g = K(b));
            return b
        },
        ye = function(a, b) {
            if (0 > b) {
                b = -b;
                var c = xe(a);
                if (c) {
                    var d =
                        "",
                        e = a.g.g;
                    e.selection && !X ? (a = e.selection.createRange(), a.collapse(!0), a.moveEnd("word", -1), d = a.text.length > b ? a.text.slice(0, b) : a.text) : c.selectionEnd ? d = c.value.slice(c.selectionStart, Math.min(c.value.length, c.selectionStart + b)) : (c = L(a.g.g).getSelection(), 0 < c.rangeCount && (a = c.getRangeAt(0).endContainer, c = c.getRangeAt(0).endOffset, 3 == a.nodeType && (d = a.nodeValue.slice(c, Math.min(a.nodeValue.length, c + b)))));
                    a = d
                } else a = "";
                return a
            }
            c = xe(a);
            if (!c) return "";
            d = "";
            e = a.g.g;
            e.selection && !X ? (a = e.selection.createRange(),
                a.collapse(!0), a.moveStart("word", -1), d = a.text.length > b ? a.text.slice(-b) : a.text) : c.selectionStart ? d = c.value.slice(Math.max(0, c.selectionStart - b), c.selectionStart) : (c = L(a.g.g).getSelection(), 0 < c.rangeCount && (a = c.getRangeAt(0).startContainer, c = c.getRangeAt(0).startOffset, 3 == a.nodeType && (d = a.nodeValue.slice(Math.max(0, c - b), c))));
            return d
        },
        ze = function(a) {
            var b = xe(a);
            b && (a.j ? L(a.g.g).focus() : b.focus())
        },
        De = function(a) {
            this.code = a;
            this.type = null;
            0 <= this.code.indexOf("-i0") ? (this.type = "im", nb(this.code,
                "-handwrit") ? this.type = "hw" : nb(this.code, "-voice") && (this.type = "vo")) : 0 <= this.code.indexOf("-k0") ? this.type = "vkd" : 0 == this.code.lastIndexOf("xkb", 0) && (this.type = "xkb");
            a = this.code.split(/-t|-i0|-k0|:/);
            "yue-hant" === a[0] && (a[0] = "zh-HK");
            switch (this.code) {
                case Ta:
                    a[0] = "zh-HK";
                    break;
                case Wa:
                case Xa:
                    a[0] = "zh-Hans"
            }
            if ("vkd" === this.type && !Ae[this.code] && !Be[this.code]) {
                var b = this.code.split("-t-");
                a = b[0];
                b = b[1];
                a = a.replace(/-/g, "_");
                "en_us" === a && (a = "us");
                z(Ce, a) && ("und-latn-k0-und" === b || "k0-und" === b) || "k0-und" ===
                    b || (a = b.match(/k0-(.*)/), a[1] && a[1].replace("qwerty", "phone").replace("-", "_"))
            }
        },
        Ge = function(a) {
            if (!a) return null;
            if ("nacl_mozc_jp" === a || "nacl_mozc_us" === a) a = ua;
            0 != a.lastIndexOf("xkb", 0) && (ub(a) || (a = Ee(a)), a = a.replace(/_/g, "-"), ub(a) || (a = Ee(a + "-und")));
            return Fe[a] ? Fe[a] : ub(a) ? (Fe[a] = new De(a), Fe[a]) : null
        },
        Ee = function(a) {
            if (He[a]) return He[a];
            if ("vkd_iw" === a) return "he-t-k0-und";
            if ("im_t13n_iw" === a) return "he-t-i0-und";
            if ("tr-t-k0-lagacy" === a) return La;
            var b = a.split("_"),
                c = "";
            0 == a.lastIndexOf("im_t13n",
                0) ? c = b[2] + "-t-i0-und" : 0 == a.lastIndexOf("vkd_", 0) && (2 === b.length ? c = b[1] + aa : z(Ce, b[1]) ? c = "inscript" === b[2] ? b[1] + aa : b[1] + "-t-und-latn-k0-und" : (c = b[1] + "-t-k0-" + b[2], ub(c) || (c = b[1] + "-" + b[2] + aa)));
            return ub(c) ? c : a
        },
        Ke = function() {
            O.call(this);
            this.h = {};
            this.m = {};
            this.g = [];
            this.j = Ie;
            this.i = new T(this);
            Je(this)
        },
        Oe = function() {
            var a = x(Le);
            Me[a] || (Me[a] = new Ke);
            Ne = Me[a];
            Je(Ne)
        },
        Je = function(a) {
            a.g = kd(a.j.g);
            for (var b in a.h) Pe(a, b, a.l);
            Pe(a, t, a.u)
        },
        Pe = function(a, b, c) {
            md(a.i, a.j.g, b, c, !0, a);
            C(a.g, function(d) {
                try {
                    md(this.i,
                        d, b, c, !0, this)
                } catch (e) {}
            }, a)
        },
        Qe = function(a, b, c) {
            nd(a.i, a.j.g, b, c, !0, a);
            C(a.g, function(d) {
                try {
                    nd(this.i, d, b, c, !0, this)
                } catch (e) {}
            }, a)
        },
        Se = function(a, b, c, d, e) {
            var f = b.ownerDocument,
                g = !1;
            a.g = Re(a.g, function(l) {
                try {
                    l == f && (g = !0)
                } catch (n) {
                    return !1
                }
                return !0
            });
            if (f && f != a.j.g && !g) {
                a.g.push(f);
                try {
                    md(a.i, f, c, a.l, !0, a)
                } catch (l) {}
            }
            if (c)
                if (Array.isArray(c))
                    for (var h = 0; h < c.length; h++) Se(a, b, c[h], d, e);
                else {
                    h = a.h[c];
                    h || (h = {}, a.h[c] = h, Pe(a, c, a.l));
                    a = h[x(b)];
                    a || (a = [], h[x(b)] = a);
                    b = null;
                    for (c = 0; c < a.length; c++)
                        if (b =
                            a[c], b.ca(d, e)) return;
                    b = new Te(d, e);
                    a.push(b)
                }
            else throw Error(da);
        },
        Ue = function(a, b, c, d, e) {
            if (c)
                if (Array.isArray(c))
                    for (var f = 0; f < c.length; f++) Ue(a, b, c[f], d, e);
                else {
                    if (f = a.h[c]) {
                        var g = f[x(b)];
                        if (g) {
                            for (var h = 0; h < g.length; h++)
                                if (g[h].ca(d, e)) {
                                    Array.prototype.splice.call(g, h, 1);
                                    break
                                } 0 == g.length && delete f[x(b)]
                        }
                        a: {
                            for (var l in f) {
                                b = !1;
                                break a
                            }
                            b = !0
                        }
                        b && (delete a.h[c], Qe(a, c, a.l))
                    }
                }
            else throw Error(da);
        },
        We = function() {
            if (Ne) return Ne;
            Ve.listen("a", Oe, !1, void 0);
            Oe();
            return Ne
        },
        Xe = function(a, b, c, d) {
            Se(We(),
                a, b, c, d)
        },
        Te = function(a, b) {
            this.listener = a;
            this.O = b
        },
        Ye = function(a) {
            O.call(this);
            this.ka = this.u = !1;
            this.sa = "inner_frame_" + a;
            this.l = {};
            this.U = [];
            this.H = new T(this);
            this.m = 0;
            this.ja = new qd(document);
            this.H.listen(this.ja, "aec", this.oa);
            this.oa()
        },
        $e = function(a) {
            if (a.h) {
                var b = xe(a.h);
                if (b) {
                    var c = K(b),
                        d = b.nodeName.toUpperCase();
                    if (F(8) && !F(9) && b.tagName.toUpperCase() == fa) {
                        var e = c.g.selection.createRange();
                        var f = e.getBoundingClientRect();
                        var g = 0;
                        d = 0;
                        try {
                            d = cd(b) + 2
                        } catch (p) {
                            d = 16
                        }
                        if ("rtl" == Rc(b, "direction")) {
                            for (var h =
                                    e.duplicate(); h.boundingHeight <= d && h.htmlText == h.text && (g = e.boundingLeft - h.boundingLeft, 0 != h.moveStart(m, -1)););
                            e = Vc(b).x;
                            g = Math.max(f.left - g, e)
                        } else g = f.left;
                        f = new G(g, f.top + d)
                    } else if (d == fa || d == ca) f = pe(b);
                    else b: {
                        h = void 0 === h ? null : h;
                        if (!h) h = (d = (L(c.g) || window).getSelection()) && ge(d);
                        else if (3 == h.A().nodeType && 3 == h.J().nodeType && (d = Dd(Y(h), !0), e = Dd(Y(h), !1), d && e)) {
                            f = new G(d.x, e.y);
                            break b
                        }
                        if (h) {
                            var l = $b(c.g, "SPAN");
                            l.appendChild(c.g.createTextNode("\u200b"));
                            !N || E(9) ? h.aa(l, !1) : (d = null, h.P() || (d =
                                h.$(), h.collapse(!1)), l = h.ra(l), d && (h.collapse(!0), h.Y().moveStart(m, 0 - d.length), h.select()));
                            d = oe(l);
                            e = l.parentNode;
                            c.ta(l);
                            if (e) {
                                if (h) c: {
                                    f = ne(h),
                                    g = h.V(),
                                    g = 1 == g.nodeType ? g : g.parentNode;
                                    for (h = 0; g;) {
                                        l = g && g.nodeName;
                                        if (g && ("block" == (1 != g.nodeType ? null : N ? g.currentStyle ? g.currentStyle.display : null : Qc(g, "display")) || "TD" == l || "TABLE" == l || "LI" == l)) break c;
                                        g = g.parentNode;
                                        h++
                                    }
                                    g = null
                                }
                                g ? (g = gc(g, e), N ? he(g) : g.normalize()) : e && (N ? he(e) : e.normalize());
                                f && f()
                            }
                            f = new G(d.left, d.bottom)
                        } else f = new G(0, 0)
                    }
                    d = f.x;
                    g = f.y;
                    b = oe(b);
                    d = d > b.right ? b.right : d;
                    d = d < b.left ? b.left : d;
                    g = g > b.bottom ? b.bottom : g;
                    g = g < b.top ? b.top : g;
                    f.x = d;
                    f.y = g;
                    c = L(c.g);
                    try {
                        for (; c && c != Ze && c.frameElement; c = c.parent) {
                            var n = Wc(c.frameElement);
                            f.x += n.x;
                            f.y += n.y
                        }
                    } catch (p) {}
                    n = new re(f.x, f.y)
                } else n = null;
                n && a.g.postMessage({
                    cursorPos: [n.g.x, n.g.y]
                })
            }
        },
        af = function(a) {
            if (a.h) {
                var b = ye(a.h, 20);
                a.g.postMessage({
                    text: [b]
                })
            }
        },
        bf = function(a) {
            a.m && (clearTimeout(a.m), a.m = 0)
        },
        df = function(a, b) {
            switch (a.i.type) {
                case "vkd":
                    return cf(b);
                case "hw":
                    var c = [32, 13, 37, 39, 27, 8];
                    return !a.u || !z(c, b.keyCode);
                case "im":
                    return c = !1, /^(zh|yue)/.test(a.i.code) ? c = a.l.tsbc && !a.l.tlang : /^ja/.test(a.i.code) || (c = !a.l.tlang), c || !a.u && cf(b);
                default:
                    return !0
            }
        },
        ff = function(a, b, c) {
            a.g.postMessage({
                event: c
            });
            (!se(b) || ef(a, b)) && (b.type === r && cf(b) || b.type === t) && b.j()
        },
        gf = function() {
            var a = document.activeElement;
            return a ? id(a) ? a : null : null
        },
        ef = function(a, b) {
            16 !== b.keyCode || b.type !== r && !a.ka ? (a = a.i, b = (hf || "im" !== a.type ? 0 : /^(zh|yue)/.test(a.code)) ? 32 === b.keyCode && b.shiftKey || 190 === b.keyCode && b.ctrlKey :
                !1) : b = !0;
            return b
        },
        cf = function(a) {
            return z([13, 9], a.keyCode) ? !0 : a.type === t ? !1 : z([8, 27, 37, 39, 38, 40, 34, 33, 46, 36, 35], a.keyCode)
        },
        jf = function() {
            try {
                (window.top == window || window.parent) && window.parent.document && window.parent.document.domain == window.document.domain || new Ye((new Date).getTime())
            } catch (a) {
                new Ye((new Date).getTime())
            }
        },
        Ya = typeof Object.create == q ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        kf;
    if (typeof Object.setPrototypeOf == q) kf = Object.setPrototypeOf;
    else {
        var lf;
        a: {
            var mf = {
                    a: !0
                },
                nf = {};
            try {
                nf.__proto__ = mf;
                lf = nf.a;
                break a
            } catch (a) {}
            lf = !1
        }
        kf = lf ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var Za = kf,
        D = this || self,
        cb = "closure_uid_" + (1E9 * Math.random() >>> 0),
        db = 0;
    var Tb;
    var kb = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if (typeof a === u) return typeof b !== u || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        C = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = typeof a === u ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Re = Array.prototype.filter ? function(a, b) {
            return Array.prototype.filter.call(a,
                b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = [], e = 0, f = typeof a === u ? a.split("") : a, g = 0; g < c; g++)
                if (g in f) {
                    var h = f[g];
                    b.call(void 0, h, g, a) && (d[e++] = h)
                } return d
        },
        ee = Array.prototype.map ? function(a, b) {
            return Array.prototype.map.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = Array(c), e = typeof a === u ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        },
        of = Array.prototype.some ? function(a, b) {
            return Array.prototype.some.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = typeof a ===
                    u ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        };
    var ob = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        Db = /&/g,
        Eb = /</g,
        Fb = />/g,
        Gb = /"/g,
        Hb = /'/g,
        Ib = /\x00/g,
        Cb = /[\x00&<>"']/;
    var A;
    a: {
        var pf = D.navigator;
        if (pf) {
            var qf = pf.userAgent;
            if (qf) {
                A = qf;
                break a
            }
        }
        A = ""
    };
    var xb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var rf = /[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/,
        sf = /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]/,
        tf = /^http:\/\/.*/,
        uf = /\s+/,
        vf = /[\d\u06f0-\u06f9]/;
    var wf = 2147483648 * Math.random() | 0;
    Lb[" "] = ab;
    var X = B(ea),
        N = B("Trident") || B("MSIE"),
        xf = B(k),
        yf = xf || N,
        P = B("Gecko") && !(-1 != A.toLowerCase().indexOf("webkit") && !B(k)) && !(B("Trident") || B("MSIE")) && !B(k),
        S = -1 != A.toLowerCase().indexOf("webkit") && !B(k),
        hf = S && B("Mobile"),
        pc = B("Macintosh"),
        zf = B("Windows"),
        Af = B("Android"),
        Bf = Kb(),
        Cf = B(ra),
        Df = B(sa),
        Ef;
    a: {
        var Ff = "",
            Gf = function() {
                var a = A;
                if (P) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (xf) return /Edge\/([\d\.]+)/.exec(a);
                if (N) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (S) return /WebKit\/(\S+)/.exec(a);
                if (X) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Gf && (Ff = Gf ? Gf[1] : "");
        if (N) {
            var Hf = Ob();
            if (null != Hf && Hf > parseFloat(Ff)) {
                Ef = String(Hf);
                break a
            }
        }
        Ef = Ff
    }
    var Pb = Ef,
        Mb = {},
        If;
    if (D.document && N) {
        var Jf = Ob();
        If = Jf ? Jf : parseInt(Pb, 10) || void 0
    } else If = void 0;
    var Qb = If;
    var Zb = !N || F(9),
        Kf = !P && !N || N && F(9) || P && E("1.9.1"),
        Td = N && !F(9);
    G.prototype.ca = function(a) {
        return a instanceof G && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    G.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    G.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    G.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    Rb.prototype.aspectRatio = function() {
        return this.width / this.height
    };
    Rb.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Rb.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Rb.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Ub = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        },
        jc = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        kc = {
            IMG: " ",
            BR: "\n"
        };
    v = Sb.prototype;
    v.pa = function(a, b, c) {
        return Xb(this.g, arguments)
    };
    v.fa = function(a, b) {
        a.appendChild(b)
    };
    v.ta = M;
    v.getChildren = function(a) {
        return Kf && void 0 != a.children ? a.children : Re(a.childNodes, function(b) {
            return 1 == b.nodeType
        })
    };
    v.contains = cc;
    O.prototype.s = !1;
    O.prototype.ha = function() {
        this.s || (this.s = !0, this.L())
    };
    O.prototype.L = function() {
        if (this.D)
            for (; this.D.length;) this.D.shift()()
    };
    oc.prototype.l = function() {
        this.i = !0
    };
    oc.prototype.j = function() {
        this.defaultPrevented = !0
    };
    var Hc = function() {
        if (!D.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            D.addEventListener("test", ab, b), D.removeEventListener("test", ab, b)
        } catch (c) {}
        return a
    }();
    var ue = N ? "textinput" : "textInput";
    y(Q, oc);
    var qc = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    Q.prototype.l = function() {
        Q.G.l.call(this);
        this.g.stopPropagation ? this.g.stopPropagation() : this.g.cancelBubble = !0
    };
    Q.prototype.j = function() {
        Q.G.j.call(this);
        var a = this.g;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    var rc = "closure_listenable_" + (1E6 * Math.random() | 0);
    var tc = 0;
    wc.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [], this.h++);
        var g = yc(a, b, d, e); - 1 < g ? (b = a[g], c || (b.ba = !1)) : (b = new uc(b, this.src, f, !!d, e), b.ba = c, a.push(b));
        return b
    };
    wc.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.g)) return !1;
        var e = this.g[a];
        b = yc(e, b, c, d);
        return -1 < b ? (vc(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.g[a], this.h--), !0) : !1
    };
    wc.prototype.removeAll = function(a) {
        a = a && a.toString();
        var b = 0,
            c;
        for (c in this.g)
            if (!a || c == a) {
                for (var d = this.g[c], e = 0; e < d.length; e++) ++b, vc(d[e]);
                delete this.g[c];
                this.h--
            } return b
    };
    var Fc = "closure_lm_" + (1E6 * Math.random() | 0),
        Nc = {},
        Jc = 0,
        Oc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    y(R, O);
    R.prototype[rc] = !0;
    R.prototype.removeEventListener = function(a, b, c, d) {
        Lc(this, a, b, c, d)
    };
    R.prototype.L = function() {
        R.G.L.call(this);
        this.g && this.g.removeAll(void 0);
        this.l = null
    };
    R.prototype.listen = function(a, b, c, d) {
        return this.g.add(String(a), b, !1, c, d)
    };
    var Le = window.document,
        Ze = window,
        Ie = K(window.document),
        Ve = new R;
    var $c = /[^\d]+$/,
        ad = {
            cm: 1,
            "in": 1,
            mm: 1,
            pc: 1,
            pt: 1
        },
        bd = {
            em: 1,
            ex: 1
        };
    (function() {
        if (zf) {
            var a = /Windows NT ([0-9.]+)/;
            return (a = a.exec(A)) ? a[1] : "0"
        }
        return pc ? (a = /1[0|1][_.][0-9_.]+/, (a = a.exec(A)) ? a[0].replace(/_/g, ".") : "10") : Af ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(A)) ? a[1] : "") : Bf || Cf || Df ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(A)) ? a[1].replace(/_/g, ".") : "") : ""
    })();
    var Lf = zb(),
        Mf = Kb() || B(sa),
        Nf = B(ra),
        Of = B("Android") && !(Ab() || zb() || B(ea) || B("Silk")),
        Pf = Ab(),
        Qf = B("Safari") && !(Ab() || B("Coast") || B(ea) || B(k) || B("Edg/") || B("OPR") || zb() || B("Silk") || B("Android")) && !(Kb() || B(ra) || B(sa));
    var Rf = function() {
        if (Lf) return dd(/Firefox\/([0-9.]+)/);
        if (N || xf || X) return Pb;
        if (Pf) return Kb() || B(ra) || B(sa) ? dd(/CriOS\/([0-9.]+)/) : dd(/Chrome\/([0-9.]+)/);
        if (Qf && !(Kb() || B(ra) || B(sa))) return dd(/Version\/([0-9.]+)/);
        if (Mf || Nf) {
            var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(A);
            if (a) return a[1] + "." + a[2]
        } else if (Of) return (a = dd(/Android\s+([0-9.]+)/)) ? a : dd(/Version\/([0-9.]+)/);
        return ""
    }();
    var sd = "jsapi",
        rd = !N || E(9);
    var fd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    var jd = {};
    y(T, O);
    var ld = [];
    T.prototype.listen = function(a, b, c, d) {
        return md(this, a, b, c, d)
    };
    T.prototype.removeAll = function() {
        sb(this.g, function(a, b) {
            this.g.hasOwnProperty(b) && Mc(a)
        }, this);
        this.g = {}
    };
    T.prototype.L = function() {
        T.G.L.call(this);
        this.removeAll()
    };
    T.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    $a(qd, R);
    qd.prototype.H = function(a) {
        var b = a.target;
        b && b != Ze && (b.frameElement && (b = b.frameElement), td(this, a, b))
    };
    qd.prototype.I = function(a) {
        var b = this,
            c = wb(a.g);
        od(function() {
            return ud(b, b.u, new Q(c))
        }, 0)
    };
    qd.prototype.L = function() {
        R.prototype.L.call(this);
        try {
            nc(this.i)
        } catch (a) {}
        delete this.h;
        delete this.j
    };
    var U = "StopIteration" in D ? D.StopIteration : {
        message: "StopIteration",
        stack: ""
    };
    vd.prototype.next = function() {
        throw U;
    };
    vd.prototype.S = function() {
        return this
    };
    y(V, vd);
    V.prototype.next = function() {
        if (this.I) {
            if (!this.node || this.U && 0 == this.s) throw U;
            var a = this.node;
            var b = this.D ? -1 : 1;
            if (this.m == b) {
                var c = this.D ? a.lastChild : a.firstChild;
                c ? xd(this, c) : xd(this, a, -1 * b)
            } else(c = this.D ? a.previousSibling : a.nextSibling) ? xd(this, c) : xd(this, a.parentNode, -1 * b);
            this.s += this.m * (this.D ? -1 : 1)
        } else this.I = !0;
        a = this.node;
        if (!this.node) throw U;
        return a
    };
    V.prototype.ca = function(a) {
        return a.node == this.node && (!this.node || a.m == this.m)
    };
    yd.prototype.ia = function() {
        return !1
    };
    yd.prototype.ra = function(a) {
        this.P() || this.W();
        return this.aa(a, !0)
    };
    y(Ad, V);
    y(Bd, Ad);
    Bd.prototype.H = function() {
        return this.h
    };
    Bd.prototype.u = function() {
        return this.I && (this.node != (this.g ? this.h : this.i) ? !1 : this.g ? this.j ? -1 != this.m : 1 == this.m : !this.l || 1 != this.m)
    };
    Bd.prototype.next = function() {
        if (this.u()) throw U;
        return Bd.G.next.call(this)
    };
    Cd.prototype.S = function() {
        return new Bd(this.o(), this.C(), this.B(), this.K())
    };
    y(Fd, Cd);
    v = Fd.prototype;
    v.X = function() {
        return this.g
    };
    v.ga = function() {
        return this.g.commonAncestorContainer
    };
    v.o = function() {
        return this.g.startContainer
    };
    v.C = function() {
        return this.g.startOffset
    };
    v.B = function() {
        return this.g.endContainer
    };
    v.K = function() {
        return this.g.endOffset
    };
    v.F = function(a, b, c) {
        return this.g.compareBoundaryPoints(1 == c ? 1 == b ? D.Range.START_TO_START : D.Range.START_TO_END : 1 == b ? D.Range.END_TO_START : D.Range.END_TO_END, a)
    };
    v.v = function() {
        return this.g.collapsed
    };
    v.la = function() {
        return this.g.toString()
    };
    v.select = function(a) {
        var b = Wb(H(this.o()));
        this.Z(b.getSelection(), a)
    };
    v.Z = function(a) {
        a.removeAllRanges();
        a.addRange(this.g)
    };
    v.na = function() {
        var a = this.g;
        a.extractContents();
        if (a.startContainer.hasChildNodes()) {
            var b = a.startContainer.childNodes[a.startOffset];
            if (b) {
                var c = b.previousSibling;
                "" == ic(b) && M(b);
                c && "" == ic(c) && M(c)
            }
        }
        if (yf) {
            b = this.o();
            c = this.C();
            var d = this.B(),
                e = this.K(),
                f = b.nextSibling;
            b == d && b.parentNode && 3 == b.nodeType && f && 3 == f.nodeType && (b.nodeValue += f.nodeValue, M(f), a.setStart(b, c), a.setEnd(d, e))
        }
    };
    v.ma = function(a, b) {
        var c = this.g.cloneRange();
        c.collapse(b);
        c.insertNode(a);
        c.detach();
        return a
    };
    v.collapse = function(a) {
        this.g.collapse(a)
    };
    y(Id, Fd);
    Id.prototype.Z = function(a, b) {
        !b || this.v() ? Id.G.Z.call(this, a, b) : (a.collapse(this.B(), this.K()), a.extend(this.o(), this.C()))
    };
    y(Jd, Cd);
    v = Jd.prototype;
    v.X = function() {
        return this.g
    };
    v.ga = function() {
        if (!this.m) {
            var a = this.g.text,
                b = this.g.duplicate(),
                c = a.replace(/ +$/, "");
            (c = a.length - c.length) && b.moveEnd(m, -c);
            c = b.parentElement();
            b = b.htmlText.replace(/(\r\n|\r|\n)+/g, " ").length;
            if (this.v() && 0 < b) return this.m = c;
            for (; b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, " ").length;) c = c.parentNode;
            for (; 1 == c.childNodes.length && c.innerText == Qd(c.firstChild) && W(c.firstChild);) c = c.firstChild;
            0 == a.length && (c = Md(this, c));
            this.m = c
        }
        return this.m
    };
    v.o = function() {
        this.h || (this.h = Od(this, 1), this.v() && (this.i = this.h));
        return this.h
    };
    v.C = function() {
        0 > this.j && (this.j = Pd(this, 1), this.v() && (this.l = this.j));
        return this.j
    };
    v.B = function() {
        if (this.v()) return this.o();
        this.i || (this.i = Od(this, 0));
        return this.i
    };
    v.K = function() {
        if (this.v()) return this.C();
        0 > this.l && (this.l = Pd(this, 0), this.v() && (this.j = this.l));
        return this.l
    };
    v.F = function(a, b, c) {
        return this.g.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a)
    };
    v.v = function() {
        return 0 == this.g.compareEndPoints("StartToEnd", this.g)
    };
    v.la = function() {
        return this.g.text
    };
    v.select = function() {
        this.g.select()
    };
    v.na = function() {
        if (!this.v() && this.g.htmlText) {
            var a = this.o(),
                b = this.B(),
                c = this.g.text,
                d = this.g.duplicate();
            d.moveStart(m, 1);
            d.moveStart(m, -1);
            d.text == c && (this.g = d);
            this.g.text = "";
            Ld(this);
            c = this.o();
            d = this.C();
            try {
                var e = a.nextSibling;
                a == b && a.parentNode && 3 == a.nodeType && e && 3 == e.nodeType && (a.nodeValue += e.nodeValue, M(e), this.g = Kd(c), this.g.move(m, d), Ld(this))
            } catch (f) {}
        }
    };
    v.ma = function(a, b) {
        var c = this.g.duplicate();
        var d = d || K(c.parentElement());
        if (1 != a.nodeType) {
            var e = !0;
            a = d.pa("DIV", null, a)
        }
        c.collapse(b);
        b = a;
        d = d || K(c.parentElement());
        var f = a = b.id;
        a || (a = b.id = "goog_" + wf++);
        c.pasteHTML(b.outerHTML);
        (b = typeof a === u ? d.g.getElementById(a) : a) && (f || b.removeAttribute("id"));
        a = b;
        if (e) {
            c = a.firstChild;
            e = a;
            if ((b = e.parentNode) && 11 != b.nodeType)
                if (e.removeNode) e.removeNode(!1);
                else {
                    for (; d = e.firstChild;) b.insertBefore(d, e);
                    M(e)
                } a = c
        }
        c = a;
        Ld(this);
        return c
    };
    v.collapse = function(a) {
        this.g.collapse(a);
        a ? (this.i = this.h, this.l = this.j) : (this.h = this.i, this.j = this.l)
    };
    y(Rd, Fd);
    Rd.prototype.Z = function(a) {
        a.collapse(this.o(), this.C());
        this.B() == this.o() && this.K() == this.C() || a.extend(this.B(), this.K());
        0 == a.rangeCount && a.addRange(this.g)
    };
    y(Sd, Fd);
    Sd.prototype.F = function(a, b, c) {
        return E("528") ? Sd.G.F.call(this, a, b, c) : this.g.compareBoundaryPoints(1 == c ? 1 == b ? D.Range.START_TO_START : D.Range.END_TO_START : 1 == b ? D.Range.START_TO_END : D.Range.END_TO_END, a)
    };
    Sd.prototype.Z = function(a, b) {
        b ? a.setBaseAndExtent(this.B(), this.K(), this.o(), this.C()) : a.setBaseAndExtent(this.o(), this.C(), this.B(), this.K())
    };
    y(Vd, yd);
    v = Vd.prototype;
    v.Y = function() {
        return Y(this).X()
    };
    v.T = function() {
        return 1
    };
    v.N = function() {
        return this
    };
    v.V = function() {
        return Y(this).ga()
    };
    v.A = function() {
        return this.h || (this.h = Y(this).o())
    };
    v.M = function() {
        return null != this.j ? this.j : this.j = Y(this).C()
    };
    v.J = function() {
        return this.i || (this.i = Y(this).B())
    };
    v.R = function() {
        return null != this.l ? this.l : this.l = Y(this).K()
    };
    v.ia = function() {
        return this.g
    };
    v.P = function() {
        return Y(this).v()
    };
    v.$ = function() {
        return Y(this).la()
    };
    v.S = function() {
        return new Bd(this.A(), this.M(), this.J(), this.R())
    };
    v.select = function() {
        Y(this).select(this.g)
    };
    v.W = function() {
        Y(this).na();
        this.h = this.j = this.i = this.l = null
    };
    v.aa = function(a, b) {
        a = Y(this).ma(a, b);
        this.h = this.j = this.i = this.l = null;
        return a
    };
    v.collapse = function(a) {
        a = this.ia() ? !a : a;
        this.m && this.m.collapse(a);
        a ? (this.i = this.h, this.l = this.j) : (this.h = this.i, this.j = this.l);
        this.g = !1
    };
    y(Xd, yd);
    Xd.prototype.aa = function(a, b) {
        b ? (b = this.A(), b.parentNode && b.parentNode.insertBefore(a, b)) : (b = this.J(), b.parentNode && b.parentNode.insertBefore(a, b.nextSibling));
        return a
    };
    y(Yd, Xd);
    v = Yd.prototype;
    v.Y = function() {
        return this.g || document.body.createControlRange()
    };
    v.T = function() {
        return this.g ? this.g.length : 0
    };
    v.N = function(a) {
        a = this.g.item(a);
        return Wd(Nd(a), void 0)
    };
    v.V = function() {
        return gc.apply(null, Zd(this))
    };
    v.A = function() {
        return $d(this)[0]
    };
    v.M = function() {
        return 0
    };
    v.J = function() {
        var a = $d(this),
            b = ib(a);
        return jb(a, function(c) {
            return cc(c, b)
        })
    };
    v.R = function() {
        return this.J().childNodes.length
    };
    v.P = function() {
        return !this.g || !this.g.length
    };
    v.$ = function() {
        return ""
    };
    v.S = function() {
        return new ae(this)
    };
    v.select = function() {
        this.g && this.g.select()
    };
    v.W = function() {
        if (this.g) {
            for (var a = [], b = 0, c = this.g.length; b < c; b++) a.push(this.g.item(b));
            C(a, M);
            this.collapse(!1)
        }
    };
    v.ra = function(a) {
        a = this.aa(a, !0);
        this.P() || this.W();
        return a
    };
    v.collapse = function() {
        this.i = this.h = this.g = null
    };
    y(ae, Ad);
    ae.prototype.H = function() {
        return this.h
    };
    ae.prototype.u = function() {
        return !this.s && !this.g.length
    };
    ae.prototype.next = function() {
        if (this.u()) throw U;
        if (!this.s) {
            var a = this.g.shift();
            xd(this, a, 1, 1);
            return a
        }
        return ae.G.next.call(this)
    };
    y(be, Xd);
    v = be.prototype;
    v.Y = function() {
        return this.g[0]
    };
    v.T = function() {
        return this.g.length
    };
    v.N = function(a) {
        this.i[a] || (this.i[a] = Wd(Ud(this.g[a]), void 0));
        return this.i[a]
    };
    v.V = function() {
        if (!this.j) {
            for (var a = [], b = 0, c = this.T(); b < c; b++) a.push(this.N(b).V());
            this.j = gc.apply(null, a)
        }
        return this.j
    };
    v.A = function() {
        return de(this)[0].A()
    };
    v.M = function() {
        return de(this)[0].M()
    };
    v.J = function() {
        return ib(de(this)).J()
    };
    v.R = function() {
        return ib(de(this)).R()
    };
    v.P = function() {
        return 0 == this.g.length || 1 == this.g.length && this.N(0).P()
    };
    v.$ = function() {
        return ee(zd(this), function(a) {
            return a.$()
        }).join("")
    };
    v.S = function() {
        return new fe(this)
    };
    v.select = function() {
        var a = Wb(H(N ? this.V() : this.A())).getSelection();
        a.removeAllRanges();
        for (var b = 0, c = this.T(); b < c; b++) a.addRange(this.N(b).Y())
    };
    v.W = function() {
        C(zd(this), function(a) {
            a.W()
        })
    };
    v.collapse = function(a) {
        if (!this.P()) {
            var b = a ? this.N(0) : this.N(this.T() - 1);
            this.i = [];
            this.j = this.h = null;
            b.collapse(a);
            this.i = [b];
            this.h = [b];
            this.g = [b.Y()]
        }
    };
    y(fe, Ad);
    fe.prototype.H = function() {
        return this.g[0].H()
    };
    fe.prototype.u = function() {
        return this.g[this.h].u()
    };
    fe.prototype.next = function() {
        try {
            var a = this.g[this.h],
                b = a.next();
            xd(this, a.node, a.m, a.s);
            return b
        } catch (c) {
            if (c !== U || this.g.length - 1 == this.h) throw c;
            this.h++;
            return this.next()
        }
    };
    var Sf;
    if (Sf = Pf) Sf = 0 <= qb(Rf, "4");
    Sf || Qf && E("533") || P && E("2.0") || N && E("10") || X && Bb();
    y(re, qe);
    we.prototype.commitText = function(a, b) {
        var c = xe(this);
        if (c) {
            var d = c.type && c.type.toUpperCase();
            d = ("EMAIL" == d || "NUMBER" == d) && c.tagName.toUpperCase() == ca;
            b = b ? b : 0;
            if (!d && c.tagName.toUpperCase() == ca && a.length > b) {
                var e = c.maxLength;
                if (typeof e === ya && 0 <= e && e < c.value.length + a.length - b) return
            }
            ze(this);
            e = {};
            e["fs-input"] = a;
            ve && "gmail" == sd && (Z(c, wa), Z(c, t, 0, e));
            if (d) c.value = (b ? c.value.slice(0, -b) : c.value) + a;
            else if (N && !E(9) || N && !E(11) && ("\n" == a || !a && 1 == b)) d = this.g.g.selection.createRange(), 0 < b && (a || !d.text) &&
                d.moveStart(m, -b), (0 < b || d.text) && d.execCommand("delete", !1, null), " " != a.charAt(0) && " " != a.charAt(a.length - 1) || !this.l || (b = d.duplicate(), b.moveToElementText(d.parentElement()), e = d.duplicate(), " " == a.charAt(0) && (d.moveStart(m, -1), b.inRange(d) ? (e = d.text.charAt(0), a = (" " == e ? "\u00a0" : e) + a) : d = e), e = d.duplicate(), " " == a.charAt(a.length - 1) && (d.moveEnd(m, 1), b.inRange(d) && " " == d.text.charAt(d.text.length - 1) && (a = a.slice(0, a.length - 1) + "\u00a0"), d = e)), d.text = a, d.collapse(!1), d.select();
            else if (this.l) a: {
                d = b;b =
                L(this.g.g);e = b.document;b = b.getSelection();b.isCollapsed || (e.execCommand("delete", !1, null), a || (d = 0));
                if (0 < d) {
                    if ((a || 1 < d || N || X) && 3 == b.anchorNode.nodeType && 0 < b.rangeCount) {
                        var f = b.getRangeAt(0),
                            g, h = b.anchorOffset;
                        for (g = Math.min(d, h); h >= g;) {
                            f.setStart(b.anchorNode, h - g);
                            b.addRange(f);
                            if (b.toString().length == g) break;
                            g++
                        }
                        g > d && (a = b.toString().slice(0, g - d) + a)
                    }
                    b.isCollapsed && N || e.execCommand("delete", !1, null)
                }
                if (a) {
                    if (e.queryCommandSupported) {
                        if (e.queryCommandSupported("insertText")) {
                            e.execCommand("insertText",
                                !1, a);
                            break a
                        }
                        if (e.queryCommandSupported("insertHTML")) {
                            a = a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>").replace(/\u0020/g, "&nbsp;");
                            e.execCommand("insertHTML", !1, a);
                            break a
                        }
                    }
                    if (3 == b.anchorNode.nodeType) {
                        d = b.anchorNode;
                        f = b.anchorNode.nodeValue;
                        e = b.anchorOffset + a.length;
                        h = g = b.anchorOffset;
                        for (var l = [" ", "\u00a0"]; 0 < h && z(l, f[--h]););
                        for (; g < f.length && z(l, f[g++]););
                        if (" " == a.charAt(0) || " " == a.charAt(a.length - 1) || h < g) a = f.slice(h, b.anchorOffset) + a + f.slice(b.anchorOffset,
                            g), a = a.replace(/\u00a0/g, " "), a = a.replace(/^\u0020/g, "\u00a0"), a = a.replace(/\u0020{2}/g, " \u00a0"), a = a.replace(/\u0020$/g, "\u00a0");
                        d.nodeValue = f.slice(0, h) + a + f.slice(g)
                    } else a = a.replace(/ /g, "\u00a0"), d = this.g.g.createTextNode(String(a)), e = b.anchorNode, e.insertBefore(d, e.childNodes[b.anchorOffset] || null), e = a.length;
                    a = b.getRangeAt(0);
                    a.setStart(d, e);
                    a.collapse(!0);
                    b.addRange(a)
                }
            }
            else d = this.h, e = d.selectionStart, f = d.selectionEnd, g = d.value.length, e > g && (e = g), f > g && (f = g), !a && e < f && (b = 0), e -= Math.min(e, b),
                d.value = d.value.slice(0, e) + a + d.value.slice(f), e += a.length, d.setSelectionRange(e, e);
            if (c && "1" == c.getAttribute("itaautodir")) {
                b = a = 0;
                d = !1;
                e = ye(this, 50).split(uf);
                for (f = 0; f < e.length; f++) g = e[f], sf.test(g) ? (a++, b++) : tf.test(g) ? d = !0 : rf.test(g) ? b++ : vf.test(g) && (d = !0);
                c.dir = -1 == (0 == b ? d ? 1 : 0 : .4 < a / b ? -1 : 1) ? "rtl" : "ltr"
            }
        }
    };
    we.prototype.deleteToken = function(a) {
        delete this.m[String(x(a))]
    };
    var tb = {
        Dc: "zh-hant-t-i0-array-1992",
        Ec: "zh-hans-t-i0-cangjie-1982",
        Fc: "zh-hant-t-i0-cangjie-1982",
        Gc: "zh-hans-t-i0-cangjie-1987",
        Hc: "zh-hant-t-i0-cangjie-1987",
        Ic: "zh-hant-t-i0-cangjie-1987-x-m0-simplified",
        Jc: Ta,
        Kc: "yue-hant-t-i0-jyutping",
        Lc: "yue-hant-t-i0-yale",
        Mc: "zh-hant-t-i0-dayi-1988",
        Oc: Wa,
        Pc: Ua,
        Nc: "ko-t-i0-und",
        Qc: "zh-t-i0-pinyin-x0-shuangpin-abc",
        Rc: "zh-t-i0-pinyin-x0-shuangpin-flypy",
        Sc: "zh-t-i0-pinyin-x0-shuangpin-jiajia",
        Tc: "zh-t-i0-pinyin-x0-shuangpin-ms",
        Uc: "zh-t-i0-pinyin-x0-shuangpin-ziguang",
        Vc: "zh-t-i0-pinyin-x0-shuangpin-ziranma",
        Wc: "am-t-i0-und",
        Xc: "ar-t-i0-und",
        Yc: "be-t-i0-und",
        Zc: "bn-t-i0-und",
        $c: "bg-t-i0-und",
        ad: "nl-t-i0-und",
        bd: "en-t-i0-und",
        cd: "fr-t-i0-und",
        dd: "de-t-i0-und",
        ed: "el-t-i0-und",
        fd: "gu-t-i0-und",
        gd: "he-t-i0-und",
        hd: "hi-t-i0-und",
        jd: ta,
        kd: "it-t-i0-und",
        ld: ua,
        nd: "ja-t-i0-mozcus",
        md: "ja-t-i0-mozcjp",
        od: "kn-t-i0-und",
        pd: "ml-t-i0-und",
        qd: "mr-t-i0-und",
        rd: "ne-t-i0-und",
        sd: "or-t-i0-und",
        td: "fa-t-i0-und",
        ud: "pl-t-i0-und",
        vd: "pt-t-i0-und",
        wd: "pt-br-t-i0-und",
        xd: "pt-pt-t-i0-und",
        yd: "pa-t-i0-und",
        zd: "ru-t-i0-und",
        Ad: "sa-t-i0-und",
        Bd: "sr-t-i0-und",
        Cd: "si-t-i0-und",
        Dd: "es-t-i0-und",
        Ed: "ta-t-i0-und",
        Fd: "te-t-i0-und",
        Gd: "th-t-i0-und",
        Hd: "ti-t-i0-und",
        Id: "tr-t-i0-und",
        Jd: "uk-t-i0-und",
        Kd: "ur-t-i0-und",
        Ld: "vi-t-i0-und",
        Md: Xa,
        Nd: Va,
        Od: "zh-hant-t-i0-bopomofo",
        Pd: "sq-t-k0-und",
        Qd: "ar-t-k0-und",
        Rd: pa,
        Sd: qa,
        Td: "eu-t-k0-und",
        Ud: "be-t-k0-und",
        Vd: "bn-t-k0-und",
        Wd: "bn-t-und-latn-k0-und",
        Xd: "bs-t-k0-und",
        Yd: "pt-br-t-k0-und",
        Zd: "bg-t-k0-und",
        $d: ha,
        ae: "ca-t-k0-und",
        be: "ccp-t-k0-und",
        ce: "chr-t-k0-und",
        de: ia,
        fe: "hr-t-k0-und",
        ge: "cs-t-k0-und",
        he: ka,
        ie: "da-t-k0-und",
        je: "prs-t-k0-und",
        ke: na,
        le: "nl-t-k0-und",
        me: "nl-t-k0-intl",
        ne: "dz-t-k0-und",
        oe: "en-t-k0-und",
        pe: la,
        qe: "et-t-k0-und",
        re: Oa,
        Qg: "ti-ethi-t-k0-und",
        se: "fi-t-k0-und",
        te: "fr-t-k0-und",
        ve: "fr-t-k0-intl",
        we: "ff-t-k0-adlm",
        xe: "gl-t-k0-und",
        ze: "ka-t-k0-und",
        Ae: va,
        Be: "de-t-k0-und",
        Ce: "de-t-k0-intl",
        De: "el-t-k0-und",
        Fe: "gu-t-k0-und",
        Ge: ma,
        Ee: "gu-t-k0-phone2",
        He: Aa,
        Ie: Ba,
        Ke: "haw-t-k0-und",
        Je: "ht-t-k0-und",
        Me: "he-t-k0-und",
        Ne: "hi-t-k0-und",
        Oe: "hi-t-k0-phone",
        Pe: oa,
        Qe: "is-t-k0-und",
        Re: "id-t-k0-und",
        Se: "iu-t-k0-inuktitu",
        Te: "iu-t-k0-nunavik",
        Ue: "iu-t-k0-nunavut",
        Ve: "ga-t-k0-und",
        We: "ga-t-k0-accents",
        Xe: "it-t-k0-und",
        Ze: "it-t-k0-intl",
        $e: "jw-t-k0-und",
        af: "kn-t-k0-und",
        bf: "kn-t-und-latn-k0-und",
        cf: "kk-t-k0-und",
        df: "km-t-k0-und",
        ef: "ko-t-k0-und",
        ff: "ku-t-k0-und",
        gf: "ky-cyrl-t-k0-und",
        hf: "lo-t-k0-und",
        jf: "lv-t-k0-und",
        kf: "lis-t-k0-und",
        lf: "lt-t-k0-und",
        mf: "mk-t-k0-und",
        nf: "myh-t-k0-und",
        pf: "ms-t-k0-und",
        qf: "ml-t-k0-und",
        rf: "ml-t-und-latn-k0-und",
        sf: "mt-t-k0-und",
        tf: "mi-t-k0-und",
        uf: "mr-t-k0-und",
        vf: "mr-t-k0-devanaga",
        wf: "mr-t-k0-phone",
        xf: "mni-mtei-t-k0-phone",
        yf: "mez-t-k0-und",
        zf: "mn-cyrl-t-k0-und",
        Af: "srp-t-k0-und",
        Bf: "my-t-k0-und",
        Cf: "my-t-k0-myansan",
        Df: "nv-t-k0-und",
        Ef: "nv-t-k0-std",
        Ff: "ne-t-k0-und",
        Gf: "ne-t-und-latn-k0-und",
        If: "no-t-k0-und",
        Kf: "one-t-k0-und",
        Lf: "or-t-k0-und",
        Mf: "or-t-und-latn-k0-und",
        Nf: "osa-t-k0-und",
        Of: "latn-002-t-k0-und",
        Pf: "ps-t-k0-und",
        Qf: "fa-t-k0-und",
        Rf: "crk-t-k0-phone",
        Sf: "pl-t-k0-und",
        Uf: "pt-pt-t-k0-und",
        Wf: "pt-br-t-k0-intl",
        Yf: "pt-pt-t-k0-intl",
        Zf: "rhg-rohg-t-k0-und",
        $f: "rom-t-k0-und",
        ag: "ro-t-k0-und",
        bg: Da,
        cg: Ca,
        dg: "ru-t-k0-und",
        eg: Fa,
        fg: Ea,
        gg: Ga,
        jg: "sa-t-und-latn-k0-und",
        ig: "sa-t-k0-devanaga",
        lg: "see-t-k0-und",
        mg: "sr-cyrl-t-k0-und",
        ng: "sr-latn-t-k0-und",
        og: "sd-t-k0-und",
        pg: "si-t-k0-und",
        qg: "sk-t-k0-und",
        rg: Ha,
        sg: "sl-t-k0-und",
        tg: "ckb-t-k0-ar",
        ug: "ckb-t-k0-en",
        vg: "uzs-t-k0-und",
        wg: "es-t-k0-und",
        yg: "es-t-k0-intl",
        zg: "sw-t-k0-und",
        Ag: "sv-t-k0-und",
        Bg: "de-ch-t-k0-und",
        Cg: "tl-t-k0-und",
        Dg: "tg-t-k0-und",
        Eg: "ta-t-k0-ta99",
        Fg: "ta-t-k0-und",
        Gg: Ia,
        Hg: "ta-t-und-latn-k0-und",
        Ig: Ja,
        Jg: "tt-t-k0-und",
        Kg: "te-t-k0-und",
        Lg: "te-t-und-latn-k0-und",
        Mg: "th-t-k0-und",
        Ng: Ka,
        Og: "th-t-k0-tis",
        Pg: "ti-t-k0-und",
        Rg: La,
        Tg: "tr-t-k0-und",
        Vg: "ug-t-k0-und",
        Wg: Na,
        Xg: "ur-t-k0-und",
        Yg: "en-us-t-k0-intl",
        Zg: Ra,
        $g: Qa,
        ah: "uz-latn-t-k0-und",
        bh: "vi-t-k0-und",
        dh: Sa,
        eh: "vi-t-k0-viqr",
        fh: "vi-t-k0-vni",
        gh: "cy-t-k0-und",
        ih: "yi-t-k0-und",
        Hf: "yo-ng-t-k0-und",
        Jf: "oj-t-k0-ojibwe",
        ye: "de-t-k0-accents",
        xg: "es-t-k0-accents",
        ue: "fr-t-k0-accents",
        Ye: "it-t-k0-accents",
        va: "nl-t-k0-accents",
        Tf: "pl-t-k0-accents",
        Vf: "pt-br-t-k0-accents",
        Xf: "pt-pt-t-k0-accents",
        Sg: "tr-t-k0-f-accents",
        Ug: "tr-t-k0-q-accents",
        ee: "co-t-k0-accents",
        Le: "haw-t-k0-accents",
        hg: "sm-t-k0-accents",
        kg: "gd-t-k0-accents",
        hh: "fy-t-k0-accents",
        jh: "lb-t-k0-accents",
        wa: "af-t-i0-handwrit",
        xa: "sq-t-i0-handwrit",
        ya: "am-t-i0-handwrit",
        za: "ar-t-i0-handwrit",
        Aa: "hy-t-i0-handwrit",
        Ba: "as-t-i0-handwrit",
        Ca: "az-t-i0-handwrit",
        Da: "eu-t-i0-handwrit",
        Ea: "be-t-i0-handwrit",
        Fa: "bn-t-i0-handwrit",
        Ga: "bs-t-i0-handwrit",
        Ha: "bg-t-i0-handwrit",
        Ia: "my-t-i0-handwrit",
        Ja: "zh-yue-t-i0-handwrit",
        Ka: "ca-t-i0-handwrit",
        La: "ceb-t-i0-handwrit",
        Ma: "zh-t-i0-handwrit",
        Na: "zh-hans-t-i0-handwrit",
        Oa: "zh-hant-t-i0-handwrit",
        Pa: "co-t-i0-handwrit",
        Qa: "hr-t-i0-handwrit",
        Ra: "cs-t-i0-handwrit",
        Sa: "da-t-i0-handwrit",
        Ta: "nl-t-i0-handwrit",
        Ua: "en-t-i0-handwrit",
        Va: "eo-t-i0-handwrit",
        Wa: "et-t-i0-handwrit",
        Xa: "fil-t-i0-handwrit",
        Ya: "fi-t-i0-handwrit",
        Za: "fr-t-i0-handwrit",
        $a: "gl-t-i0-handwrit",
        ab: "ka-t-i0-handwrit",
        bb: "de-t-i0-handwrit",
        cb: "el-t-i0-handwrit",
        eb: "gu-t-i0-handwrit",
        fb: "ht-t-i0-handwrit",
        gb: "haw-t-i0-handwrit",
        hb: "he-t-i0-handwrit",
        ib: "hi-t-i0-handwrit",
        jb: "hmn-t-i0-handwrit",
        kb: "hu-t-i0-handwrit",
        lb: "is-t-i0-handwrit",
        mb: "id-t-i0-handwrit",
        nb: "ga-t-i0-handwrit",
        ob: "it-t-i0-handwrit",
        pb: "ja-t-i0-handwrit",
        qb: "jv-t-i0-handwrit",
        rb: "kn-t-i0-handwrit",
        sb: "kk-t-i0-handwrit",
        tb: "km-t-i0-handwrit",
        ub: "ko-t-i0-handwrit",
        vb: "ku-t-i0-handwrit",
        wb: "ky-t-i0-handwrit",
        xb: "lo-t-i0-handwrit",
        yb: "la-t-i0-handwrit",
        zb: "lv-t-i0-handwrit",
        Ab: "lt-t-i0-handwrit",
        Bb: "lb-t-i0-handwrit",
        Cb: "mk-t-i0-handwrit",
        Db: "mg-t-i0-handwrit",
        Eb: "ms-t-i0-handwrit",
        Fb: "ml-t-i0-handwrit",
        Gb: "mt-t-i0-handwrit",
        Hb: "mi-t-i0-handwrit",
        Ib: "mr-t-i0-handwrit",
        Jb: "mn-t-i0-handwrit",
        Kb: "mul-t-i0-handwrit",
        Lb: "ne-t-i0-handwrit",
        Mb: "no-t-i0-handwrit",
        Nb: "nb-t-i0-handwrit",
        Ob: "nn-t-i0-handwrit",
        Pb: "ny-t-i0-handwrit",
        Qb: "or-t-i0-handwrit",
        Rb: "fa-t-i0-handwrit",
        Sb: "pl-t-i0-handwrit",
        Tb: "pt-t-i0-handwrit",
        Ub: "pt-br-t-i0-handwrit",
        Vb: "pt-pt-t-i0-handwrit",
        Wb: "pa-t-i0-handwrit",
        Xb: "ro-t-i0-handwrit",
        Yb: "ru-t-i0-handwrit",
        Zb: "sm-t-i0-handwrit",
        $b: "gd-t-i0-handwrit",
        ac: "sr-t-i0-handwrit",
        bc: "sn-t-i0-handwrit",
        cc: "si-t-i0-handwrit",
        dc: "sk-t-i0-handwrit",
        ec: "sl-t-i0-handwrit",
        fc: "so-t-i0-handwrit",
        hc: "es-t-i0-handwrit",
        ic: "su-t-i0-handwrit",
        jc: "sw-t-i0-handwrit",
        kc: "sv-t-i0-handwrit",
        lc: "tg-t-i0-handwrit",
        mc: "ta-t-i0-handwrit",
        nc: "te-t-i0-handwrit",
        oc: "th-t-i0-handwrit",
        qc: "bo-t-i0-handwrit",
        rc: "ti-t-i0-handwrit",
        sc: "tr-t-i0-handwrit",
        tc: "uk-t-i0-handwrit",
        vc: "ur-t-i0-handwrit",
        wc: "uz-t-i0-handwrit",
        xc: "vi-t-i0-handwrit",
        yc: "cy-t-i0-handwrit",
        zc: "fy-t-i0-handwrit",
        Ac: "xh-t-i0-handwrit",
        Bc: "yi-t-i0-handwrit",
        Cc: "zu-t-i0-handwrit",
        uc: "und-t-i0-handwrit",
        mh: "en-t-i0-voice",
        kh: "zh-hans-t-i0-voice",
        lh: "zh-hant-t-i0-voice",
        nh: "xkb:am:phonetic:arm",
        oh: "xkb:be::fra",
        ph: "xkb:be::ger",
        qh: "xkb:be::nld",
        rh: "xkb:bg::bul",
        sh: "xkb:bg:phonetic:bul",
        th: "xkb:br::por",
        uh: "xkb:by::bel",
        wh: "xkb:ca::fra",
        vh: "xkb:ca:eng:eng",
        xh: "xkb:ca:multix:fra",
        zh: "xkb:ch::ger",
        yh: "xkb:ch:fr:fra",
        Ah: "xkb:cz::cze",
        Bh: "xkb:cz:qwerty:cze",
        Ch: "xkb:de::ger",
        Dh: "xkb:de:neo:ger",
        Eh: "xkb:dk::dan",
        Fh: "xkb:ee::est",
        Hh: "xkb:es::spa",
        Gh: "xkb:es:cat:cat",
        Jh: "xkb:fo::fao",
        Ih: "xkb:fi::fin",
        Kh: "xkb:fr:bepo:fra",
        Lh: "xkb:fr::fra",
        Mh: "xkb:gb:dvorak:eng",
        Nh: "xkb:gb:extd:eng",
        Oh: "xkb:ge::geo",
        Ph: "xkb:gr::gre",
        Qh: "xkb:hr::scr",
        Rh: "xkb:hu::hun",
        Sh: "xkb:hu:qwerty:hun",
        Th: "xkb:ie::ga",
        Uh: "xkb:il::heb",
        Vh: "xkb:is::ice",
        Wh: "xkb:it::ita",
        Xh: "xkb:jp::jpn",
        Yh: "xkb:kz::kaz",
        Zh: "xkb:latam::spa",
        $h: "xkb:lt::lit",
        ai: "xkb:lv:apostrophe:lav",
        ci: "xkb:mn::mon",
        bi: "xkb:mk::mkd",
        di: "xkb:mt::mlt",
        ei: "xkb:no::nob",
        fi: "xkb:pl::pol",
        gi: "xkb:pt::por",
        hi: "xkb:ro::rum",
        ii: "xkb:ro:std:rum",
        ji: "xkb:rs::srp",
        li: "xkb:ru::rus",
        ki: "xkb:ru:phonetic:rus",
        mi: "xkb:se::swe",
        ni: "xkb:si::slv",
        oi: "xkb:sk::slo",
        ri: "xkb:tr::tur",
        pi: "xkb:tr:f:tur",
        si: "xkb:ua::ukr",
        xi: "xkb:us::eng",
        yi: "xkb:us::fil",
        zi: "xkb:us::ind",
        Gi: "xkb:us::msa",
        ti: "xkb:us:altgr-intl:eng",
        ui: "xkb:us:colemak:eng",
        vi: "xkb:us:dvorak:eng",
        wi: "xkb:us:dvp:eng",
        Ai: "xkb:us:intl:eng",
        Bi: "xkb:us:intl:nld",
        Fi: "xkb:us:intl:por",
        Ci: "xkb:us:intl_pc:eng",
        Di: "xkb:us:intl_pc:nld",
        Ei: "xkb:us:intl_pc:por",
        Ii: "xkb:us:workman-intl:eng",
        Hi: "xkb:us:workman:eng"
    };
    De.prototype.toString = function() {
        return this.code
    };
    var Fe = {},
        Ce = "bn gu pa kn ml or sa ta te ne".split(" "),
        He = {
            im_pinyin_zh_hans: Wa,
            im_pinyin_zh_hant: Ua,
            im_t13n_ja: ua,
            "im_t13n_ja-Hira": ta,
            im_wubi_zh_hans: Xa,
            im_zhuyin_zh_hant: Va,
            vkd_bg_phone: ha,
            vkd_chr_phone: ia,
            vkd_cs_qwertz: ka,
            vkd_deva_phone: na,
            vkd_en_dvorak: la,
            vkd_es_es: "es-t-k0-und",
            vkd_ethi: Oa,
            vkd_gu_phone: ma,
            vkd_guru_inscript: Aa,
            vkd_guru_phone: Ba,
            vkd_hu_101: oa,
            vkd_hy_east: pa,
            vkd_hy_west: qa,
            vkd_ka_qwerty: "ka-t-k0-und",
            vkd_ka_typewriter: va,
            vkd_ro_sr13392_primary: Da,
            vkd_ro_sr13392_secondary: Ca,
            vkd_ru_phone: Fa,
            vkd_ru_phone_aatseel: Ea,
            vkd_ru_phone_yazhert: Ga,
            vkd_sk_qwerty: Ha,
            vkd_ta_itrans: Ia,
            vkd_ta_tamil99: "ta-t-k0-ta99",
            vkd_ta_typewriter: Ja,
            vkd_th_pattajoti: Ka,
            vkd_th_tis: "th-t-k0-tis",
            vkd_tr_f: La,
            vkd_tr_q: "tr-t-k0-und",
            vkd_uk_101: Na,
            vkd_us_intl: "fr-t-k0-intl",
            vkd_uz_cyrl_phone: Ra,
            vkd_uz_cyrl_type: Qa,
            vkd_vi_tcvn: "vi-t-k0-und",
            vkd_vi_telex: Sa
        },
        Tf = {},
        Uf;
    for (Uf in He) Tf[He[Uf]] = Uf;
    var Be = Tf,
        Ae = {
            "nl-t-k0-intl": Pa,
            "fr-t-k0-intl": Pa,
            "de-t-k0-intl": Pa,
            "ht-t-k0-und": "fr",
            "id-t-k0-und": xa,
            "ga-t-k0-und": xa,
            "it-t-k0-intl": Pa,
            "jw-t-k0-und": xa,
            "mr-t-k0-und": "deva_phone",
            "mr-t-k0-devanaga": "hi",
            "ms-t-k0-und": xa,
            "pt-br-t-k0-intl": Pa,
            "pt-pt-t-k0-intl": Pa,
            "sa-t-k0-devanaga": "hi",
            "es-t-k0-intl": Pa,
            "sw-t-k0-und": xa,
            "tl-t-k0-und": xa,
            "ti-t-k0-und": "ethi",
            "cy-t-k0-und": xa
        };
    var Ne;
    $a(Ke, O);
    Ke.prototype.l = function(a) {
        var b = this.h[a.type];
        return b && a.target ? (b = b[x(a.target)]) ? of(b, function(c) {
            var d = c.listener;
            return typeof d === q ? d.call(c.O, a) : d && d.handleEvent && typeof d.handleEvent === q ? d.handleEvent.call(d, a) : !0
        }) : !0 : !0
    };
    Ke.prototype.u = function(a) {
        var b = this.m[a.charCode];
        return b && a.target ? (b = b[x(a.target)]) ? of(b, function(c) {
            var d = c.listener;
            return typeof d === q ? d.call(c.O, a) : d && d.handleEvent && typeof d.handleEvent === q ? d.handleEvent.call(d, a) : !0
        }) : !0 : !0
    };
    Ke.prototype.L = function() {
        nc(this.i);
        delete this.h;
        delete this.m;
        delete this.g
    };
    Te.prototype.ca = function(a, b) {
        return this.listener == a && this.O == b
    };
    var Me = {};
    $a(Ye, O);
    v = Ye.prototype;
    v.L = function() {
        var a = this;
        this.g && (this.g.onMessage.removeListener(this.ea), this.g.onDisconnect.removeListener(this.I), this.g.disconnect(), this.g = null);
        bf(this);
        nc(this.ja);
        nc(this.H);
        this.U.forEach(function(c) {
            var d = a.da;
            Ue(We(), c, [t, r, wa], d, a);
            d = a.qa;
            Ue(We(), c, "focus", d, a)
        });
        this.U = [];
        this.i = null;
        this.l = {};
        this.h = this.j = null;
        var b = document.getElementById("GOOGLE_INPUT_CHEXT_IFRAME_FLAG");
        b && M(b)
    };
    v.oa = function() {
        var a = this,
            b = gf();
        !b || this.h && b === xe(this.h) || (this.h = new we(b), this.g || (this.g = chrome.extension.connect({
                name: this.sa
            }), this.ea = function(c) {
                if (a.h && (c.getCursorPosition && $e(a), c.setFocus && ze(a.h), c.commitText && (xe(a.h), a.h.commitText(c.commitText[0], c.commitText[1]), af(a), $e(a)), c.inputMode && (c.inputMode[0] ? a.i = Ge(c.inputMode[0]) : a.i = null, a.l = c.inputMode[1]), c.offstage && (a.u = !1), c.onstage && (a.u = !0), c = c.sendInputEvents)) {
                    var d = xe(a.h);
                    d && ve(d, c[0], c[1])
                }
            }, this.g.onMessage.addListener(this.ea),
            this.I = function() {
                a.g.onMessage.removeListener(a.ea);
                a.g.onDisconnect.removeListener(a.I);
                a.g = null;
                a.ha()
            }, this.g.onDisconnect.addListener(this.I)), $e(this), Xe(b, t, this.da, this), Xe(b, r, this.da, this), Xe(b, wa, this.da, this), Xe(b, "focus", this.qa, this), md(this.H, document, "mousedown", this.ua, !0, this), this.U.push(b))
    };
    v.qa = function(a) {
        var b = {};
        this.g.postMessage({
            event: (b[a.type] = {
                type: a.type,
                isShortcut: !1
            }, b)
        });
        bf(this);
        af(this);
        $e(this)
    };
    v.da = function(a) {
        var b = this;
        if (!te(a) && this.i) {
            var c = ef(this, a),
                d = cf(a),
                e = {
                    type: a.type,
                    keyCode: a.keyCode,
                    charCode: a.charCode,
                    shiftKey: a.shiftKey,
                    ctrlKey: a.ctrlKey,
                    altKey: a.altKey,
                    metaKey: a.metaKey,
                    isShortcut: c
                },
                f = {},
                g = (f[a.type] = e, f);
            a.type === r && (this.j = e, this.ka = 16 === a.keyCode);
            if (!c && df(this, a)) bf(this), af(this), $e(this);
            else switch (a.type) {
                case r:
                    13 === a.keyCode ? (c = wb(e), c.type = t, c.charCode = 13, ff(this, a, {
                            keydown: e,
                            keypress: c
                        }), a.l(), this.j = null) : d || c || "vkd" === this.i.type ? (ff(this, a, g), this.j = null) :
                        this.m = setTimeout(function() {
                            ff(b, a, g)
                        }, 10);
                    break;
                case t:
                    bf(this);
                    ff(this, a, this.j ? {
                        keydown: this.j,
                        keypress: e
                    } : {
                        keypress: e
                    });
                    this.j = null;
                    break;
                case wa:
                    16 === a.keyCode && c || ff(this, a, g)
            }
        }
    };
    v.ua = function(a) {
        this.g.postMessage({
            event: {
                mousedown: {
                    type: a.type
                }
            }
        })
    };
    sd = "chext";
    "complete" == document.readyState ? jf() : Ac(window, "load", jf, !0);
}).call(this);