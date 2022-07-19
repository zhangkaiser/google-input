(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    'use strict';
    var h = "Africa Latin",
        k = "Deutsch",
        aa = "Din\u00e9 bizaad - Modern",
        l = "Edge",
        m = "English",
        p = "Fran\u00e7ais",
        ba = "Italiano",
        q = "Nederlands",
        ca = "Portugu\u00eas",
        da = "Portugu\u00eas brasileiro",
        ea = "Portugu\u00eas europeu",
        r = "US International",
        fa = "chext_driver.js",
        t = "complete",
        u = "en",
        v = "function",
        w = "iPad",
        x = "iPod",
        y = "number",
        z = "object",
        A = "pt-BR",
        B = "pt-PT",
        C = "string",
        D = "ta",
        E = "zh-CN",
        F = "zh-TW",
        ha = "\u02bb\u014clelo Hawai\u02bbi",
        ia = "\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940 (\u092b\u094b\u0928\u0947\u091f\u093f\u0915)",
        ja = "\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940(INSCRIPT)",
        ka = "\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940(PHONETIC)",
        G, la = function() {},
        H = function(a) {
            var b = typeof a;
            b = b != z ? b : a ? Array.isArray(a) ? "array" : b : "null";
            return "array" == b || b == z && typeof a.length == y
        },
        ma = function(a) {
            var b = typeof a;
            return b == z && null != a || b == v
        },
        na = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        oa = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e =
                        Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        I = function(a, b, c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? I = na : I = oa;
            return I.apply(null, arguments)
        },
        J = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.Aa = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.za = function(d, e, f) {
                for (var g = Array(arguments.length - 2), n = 2; n < arguments.length; n++) g[n - 2] = arguments[n];
                return b.prototype[e].apply(d, g)
            }
        },
        pa = function(a) {
            return a
        },
        ra = function(a) {
            a: {
                var b = qa;
                for (var c = a.length, d = typeof a === C ? a.split("") : a, e = 0; e < c; e++)
                    if (e in d && b.call(void 0, d[e], e, a)) {
                        b = e;
                        break a
                    } b = -1
            }
            return 0 > b ? null : typeof a === C ? a.charAt(b) : a[b]
        },
        sa = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        },
        K = function(a, b) {
            this.g = a === ta && b || "";
            this.h = ua
        },
        va = function(a) {
            return a instanceof K && a.constructor === K && a.h === ua ? a.g : "type_error:Const"
        },
        L = function(a, b) {
            this.g =
                b === wa ? a : ""
        },
        ya = function(a) {
            return (a instanceof L && a.constructor === L ? a.g : "type_error:TrustedResourceUrl").toString()
        },
        Ca = function(a) {
            var b = {},
                c = va(a);
            if (!za.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
            a = c.replace(Aa, function(d, e) {
                if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
                d = b[e];
                return d instanceof K ? va(d) : encodeURIComponent(String(d))
            });
            return Ba(a)
        },
        Ba =
        function(a) {
            if (void 0 === Da) {
                var b = null;
                var c = M.trustedTypes;
                if (c && c.createPolicy) {
                    try {
                        b = c.createPolicy("goog#html", {
                            createHTML: pa,
                            createScript: pa,
                            createScriptURL: pa
                        })
                    } catch (d) {
                        M.console && M.console.error(d.message)
                    }
                    Da = b
                } else Da = b
            }
            a = (b = Da) ? b.createScriptURL(a) : a;
            return new L(a, wa)
        },
        Ea = function(a, b, c) {
            if (null == c) return b;
            if (typeof c === C) return c ? a + encodeURIComponent(c) : "";
            for (var d in c)
                if (Object.prototype.hasOwnProperty.call(c, d)) {
                    var e = c[d];
                    e = Array.isArray(e) ? e : [e];
                    for (var f = 0; f < e.length; f++) {
                        var g =
                            e[f];
                        null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                    }
                } return b
        },
        Fa = function() {
            this.H = this.H
        },
        Ga = function(a, b) {
            this.type = a;
            this.g = this.target = b;
            this.defaultPrevented = !1
        },
        Ha = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        },
        O = function(a) {
            return -1 != N.indexOf(a)
        },
        Ia = function(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        },
        Ja = function(a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        },
        La = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] =
                    d[c];
                for (var f = 0; f < Ka.length; f++) c = Ka[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        },
        Ma = function() {
            return O("Firefox") || O("FxiOS")
        },
        Na = function() {
            return (O("Chrome") || O("CriOS")) && !O(l)
        },
        Va = function(a) {
            Oa.test(a) && (-1 != a.indexOf("&") && (a = a.replace(Pa, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(Qa, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(Ra, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(Sa, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(Ta, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(Ua, "&#0;")));
            return a
        },
        P = function() {
            return O("iPhone") && !O(x) && !O(w)
        },
        Xa = function(a) {
            var b = Wa;
            return Object.prototype.hasOwnProperty.call(b, 9) ? b[9] : b[9] = a(9)
        },
        Ya = function() {
            var a = M.document;
            return a ? a.documentMode : void 0
        },
        ab = function() {
            return Xa(function() {
                for (var a = 0, b = Za(String($a)).split("."), c = Za("9").split("."), d = Math.max(b.length, c.length), e = 0; 0 == a && e < d; e++) {
                    var f = b[e] || "",
                        g = c[e] || "";
                    do {
                        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                        g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                        if (0 == f[0].length && 0 == g[0].length) break;
                        a = Ha(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Ha(0 == f[2].length, 0 == g[2].length) || Ha(f[2], g[2]);
                        f = f[3];
                        g = g[3]
                    } while (0 == a)
                }
                return 0 <= a
            })
        },
        cb = function(a, b, c, d, e) {
            this.listener = a;
            this.proxy = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.G = e;
            this.key = ++bb;
            this.removed = this.F = !1
        },
        db = function(a) {
            a.removed = !0;
            a.listener = null;
            a.proxy = null;
            a.src = null;
            a.G = null
        },
        Q = function(a) {
            this.src = a;
            this.g = {};
            this.h = 0
        },
        eb = function(a, b) {
            var c = b.type;
            if (c in a.g) {
                var d = a.g[c],
                    e = R(d, b),
                    f;
                (f =
                    0 <= e) && Array.prototype.splice.call(d, e, 1);
                f && (db(b), 0 == a.g[c].length && (delete a.g[c], a.h--))
            }
        },
        fb = function(a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
                var f = a[e];
                if (!f.removed && f.listener == b && f.capture == !!c && f.G == d) return e
            }
            return -1
        },
        gb = function(a, b, c, d, e) {
            if (Array.isArray(b))
                for (var f = 0; f < b.length; f++) gb(a, b[f], c, d, e);
            else(d = ma(d) ? !!d.capture : !!d, c = hb(c), a && a[ib]) ? a.h.remove(String(b), c, d, e) : a && (a = jb(a)) && (b = a.g[b.toString()], a = -1, b && (a = fb(b, c, d, e)), (c = -1 < a ? b[a] : null) && typeof c !== y && c && !c.removed && ((e =
                c.src) && e[ib] ? eb(e.h, c) : (b = c.type, d = c.proxy, e.removeEventListener ? e.removeEventListener(b, d, c.capture) : e.detachEvent ? e.detachEvent(b in kb ? kb[b] : kb[b] = "on" + b, d) : e.addListener && e.removeListener && e.removeListener(d), lb--, (b = jb(e)) ? (eb(b, c), 0 == b.h && (b.src = null, e[mb] = null)) : db(c))))
        },
        jb = function(a) {
            a = a[mb];
            return a instanceof Q ? a : null
        },
        hb = function(a) {
            if (typeof a === v) return a;
            a[nb] || (a[nb] = function(b) {
                return a.handleEvent(b)
            });
            return a[nb]
        },
        S = function() {
            Fa.call(this);
            this.h = new Q(this);
            this.S = this
        },
        T =
        function(a, b) {
            a = a.S;
            var c = b.type || b;
            if (typeof b === C) b = new Ga(b, a);
            else if (b instanceof Ga) b.target = b.target || a;
            else {
                var d = b;
                b = new Ga(c, a);
                La(b, d)
            }
            a = b.g = a;
            ob(a, c, !0, b);
            ob(a, c, !1, b)
        },
        ob = function(a, b, c, d) {
            if (b = a.h.g[String(b)]) {
                b = b.concat();
                for (var e = !0, f = 0; f < b.length; ++f) {
                    var g = b[f];
                    if (g && !g.removed && g.capture == c) {
                        var n = g.listener,
                            xa = g.G || g.src;
                        g.F && eb(a.h, g);
                        e = !1 !== n.call(xa, d) && e
                    }
                }
            }
        },
        pb = function() {},
        rb = function(a) {
            var b;
            (b = a.g) || (b = {}, qb(a) && (b[0] = !0, b[1] = !0), b = a.g = b);
            return b
        },
        sb = function() {},
        tb =
        function(a) {
            return (a = qb(a)) ? new ActiveXObject(a) : new XMLHttpRequest
        },
        qb = function(a) {
            if (!a.h && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                    var d = b[c];
                    try {
                        return new ActiveXObject(d), a.h = d
                    } catch (e) {}
                }
                throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
            }
            return a.h
        },
        ub = function(a, b) {
            this.h = {};
            this.g = [];
            this.j = 0;
            var c =
                arguments.length;
            if (1 < c) {
                if (c % 2) throw Error("Uneven number of arguments");
                for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
            } else if (a)
                if (a instanceof ub)
                    for (c = a.o(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
                else
                    for (d in a) this.set(d, a[d])
        },
        vb = function(a) {
            if (a.j != a.g.length) {
                for (var b = 0, c = 0; b < a.g.length;) {
                    var d = a.g[b];
                    Object.prototype.hasOwnProperty.call(a.h, d) && (a.g[c++] = d);
                    b++
                }
                a.g.length = c
            }
            if (a.j != a.g.length) {
                var e = {};
                for (c = b = 0; b < a.g.length;) d = a.g[b], Object.prototype.hasOwnProperty.call(e,
                    d) || (a.g[c++] = d, e[d] = 1), b++;
                a.g.length = c
            }
        },
        wb = function(a) {
            if (a.s && typeof a.s == v) return a.s();
            if (typeof a === C) return a.split("");
            if (H(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            b = [];
            c = 0;
            for (d in a) b[c++] = a[d];
            return b
        },
        xb = function(a, b) {
            if (a.forEach && typeof a.forEach == v) a.forEach(b, void 0);
            else if (H(a) || typeof a === C) U(a, b, void 0);
            else {
                if (a.o && typeof a.o == v) var c = a.o();
                else if (a.s && typeof a.s == v) c = void 0;
                else if (H(a) || typeof a === C) {
                    c = [];
                    for (var d = a.length, e = 0; e < d; e++) c.push(e)
                } else
                    for (e in c = [], d = 0, a) c[d++] = e;
                d = wb(a);
                e = d.length;
                for (var f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
            }
        },
        zb = function(a, b) {
            Ia(b, function(c, d) {
                c && typeof c == z && c.M && (c = c.L());
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : yb.hasOwnProperty(d) ? a.setAttribute(yb[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
            })
        },
        Cb = function(a, b, c) {
            var d = arguments,
                e = document,
                f = String(d[0]),
                g = d[1];
            if (!Ab && g && (g.name || g.type)) {
                f = ["<", f];
                g.name && f.push(' name="', Va(g.name),
                    '"');
                if (g.type) {
                    f.push(' type="', Va(g.type), '"');
                    var n = {};
                    La(n, g);
                    delete n.type;
                    g = n
                }
                f.push(">");
                f = f.join("")
            }
            f = String(f);
            "application/xhtml+xml" === e.contentType && (f = f.toLowerCase());
            f = e.createElement(f);
            g && (typeof g === C ? f.className = g : Array.isArray(g) ? f.className = g.join(" ") : zb(f, g));
            2 < d.length && Bb(e, f, d);
            return f
        },
        Bb = function(a, b, c) {
            function d(n) {
                n && b.appendChild(typeof n === C ? a.createTextNode(n) : n)
            }
            for (var e = 2; e < c.length; e++) {
                var f = c[e];
                if (!H(f) || ma(f) && 0 < f.nodeType) d(f);
                else {
                    a: {
                        if (f && typeof f.length ==
                            y) {
                            if (ma(f)) {
                                var g = typeof f.item == v || typeof f.item == C;
                                break a
                            }
                            if (typeof f === v) {
                                g = typeof f.item == v;
                                break a
                            }
                        }
                        g = !1
                    }
                    U(g ? sa(f) : f, d)
                }
            }
        },
        Db = function(a, b, c) {
            if (typeof a === v) c && (a = I(a, c));
            else if (a && typeof a.handleEvent == v) a = I(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            return 2147483647 < Number(b) ? -1 : M.setTimeout(a, b || 0)
        },
        Eb = function(a) {
            S.call(this);
            this.headers = new ub;
            this.v = a || null;
            this.g = !1;
            this.u = this.i = null;
            this.A = "";
            this.j = this.J = this.l = this.I = !1;
            this.B = 0;
            this.m = null;
            this.K = "";
            this.C =
                this.D = !1
        },
        Fb = function(a) {
            return V && ab() && typeof a.timeout === y && void 0 !== a.ontimeout
        },
        qa = function(a) {
            return "content-type" == a.toLowerCase()
        },
        Ib = function(a) {
            a.g = !1;
            a.i && (a.j = !0, a.i.abort(), a.j = !1);
            Gb(a);
            Hb(a)
        },
        Gb = function(a) {
            a.I || (a.I = !0, T(a, t), T(a, "error"))
        },
        Mb = function(a) {
            if (a.g && "undefined" != typeof Jb && (!a.u[1] || 4 != (a.i ? a.i.readyState : 0) || 2 != Kb(a)))
                if (a.l && 4 == (a.i ? a.i.readyState : 0)) Db(a.O, 0, a);
                else if (T(a, "readystatechange"), 4 == (a.i ? a.i.readyState : 0)) {
                a.g = !1;
                try {
                    Lb(a) ? (T(a, t), T(a, "success")) : Gb(a)
                } finally {
                    Hb(a)
                }
            }
        },
        Hb = function(a) {
            if (a.i) {
                Nb(a);
                var b = a.i,
                    c = a.u[0] ? la : null;
                a.i = null;
                a.u = null;
                T(a, "ready");
                try {
                    b.onreadystatechange = c
                } catch (d) {}
            }
        },
        Nb = function(a) {
            a.i && a.C && (a.i.ontimeout = null);
            a.m && (M.clearTimeout(a.m), a.m = null)
        },
        Lb = function(a) {
            var b = Kb(a);
            a: switch (b) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                    var c = !0;
                    break a;
                default:
                    c = !1
            }
            if (!c) {
                if (b = 0 === b) a = String(a.A).match(Ob)[1] || null, !a && M.self && M.self.location && (a = M.self.location.protocol, a = a.substr(0, a.length - 1)), b = !Pb.test(a ? a.toLowerCase() :
                    "");
                c = b
            }
            return c
        },
        Kb = function(a) {
            try {
                return 2 < (a.i ? a.i.readyState : 0) ? a.i.status : -1
            } catch (b) {
                return -1
            }
        },
        Rb = function() {
            this.j = Qb;
            this.g = new Eb;
            this.g.D = !0
        },
        W = function(a) {
            return (a = a.exec(N)) ? a[1] : ""
        },
        Sb = function() {},
        Ub = function(a, b, c) {
            a.h = null;
            b || (b = []);
            a.v = void 0;
            a.l = -1;
            a.g = b;
            a: {
                if (b = a.g.length) {
                    --b;
                    var d = a.g[b];
                    if (!(null === d || typeof d != z || Array.isArray(d) || Tb && d instanceof Uint8Array)) {
                        a.m = b - a.l;
                        a.j = d;
                        break a
                    }
                }
                a.m = Number.MAX_VALUE
            }
            a.u = {};
            if (c)
                for (b = 0; b < c.length; b++)
                    if (d = c[b], d < a.m) d += a.l, a.g[d] = a.g[d] ||
                        X;
                    else {
                        var e = a.m + a.l;
                        a.g[e] || (a.j = a.g[e] = {});
                        a.j[d] = a.j[d] || X
                    }
        },
        Y = function(a, b) {
            if (b < a.m) {
                b += a.l;
                var c = a.g[b];
                return c !== X ? c : a.g[b] = []
            }
            if (a.j) return c = a.j[b], c === X ? a.j[b] = [] : c
        },
        Wb = function(a) {
            var b = Vb;
            a.h || (a.h = {});
            if (!a.h[3]) {
                var c = Y(a, 3);
                for (var d = [], e = 0; e < c.length; e++) d[e] = new b(c[e]);
                a.h[3] = d
            }
            b = a.h[3];
            b == X && (b = a.h[3] = []);
            return b
        },
        Xb = function(a) {
            if (a.h)
                for (var b in a.h) {
                    var c = a.h[b];
                    if (Array.isArray(c))
                        for (var d = 0; d < c.length; d++) c[d] && Xb(c[d]);
                    else c && Xb(c)
                }
            return a.g
        },
        Zb = function(a) {
            Ub(this,
                a, Yb)
        },
        Vb = function(a) {
            Ub(this, a, null)
        },
        Z = function() {
            this.g = Qb;
            this.get(0) || $b(this);
            this.get(20) || (this.set(4, !0), this.set(5, !0), this.set(6, !0), this.set(7, !1), this.set(9, !0), this.set(20, !0));
            this.get(28) || this.set(28, 1)
        },
        ac = function(a) {
            var b = [1, 2, 3, 5, 4, 6, 7, 10, 29, 9, 8],
                c = {};
            b && U(b, function(d) {
                c[d] = this.get(d)
            }, a);
            return c
        },
        bc = function(a) {
            a && Ia(a, function(b, c) {
                localStorage[String(c)] = JSON.stringify(b)
            })
        },
        $b = function(a) {
            a.set(1, localStorage.getItem(a.g.T));
            var b = localStorage.getItem(a.g.U),
                c = [];
            b && (c =
                b.split(","));
            a.set(2, c);
            b = a.get(a.g.V);
            Ia(b, function(d, e) {
                switch (e) {
                    case "tsbc":
                        this.set(5, d);
                        break;
                    case "tlang":
                        this.set(4, d);
                        break;
                    case "pun":
                        this.set(6, d);
                        break;
                    case "mk":
                        this.set(7, d)
                }
            }, a);
            a.set(0, !0)
        },
        dc = function() {
            var a = [];
            U(cc, function(b) {
                b = b.split(".")[0];
                0 <= R(a, b) || a.push(b)
            });
            return new RegExp("(" + a.join("|") + ").(com|ad|ae|com.af|com.ag|com.ai|al|am|co.ao|com.ar|as|at|com.au|az|ba|com.bd|be|bf|bg|com.bh|bi|bj|com.bn|com.bo|com.br|bs|bt|co.bw|by|com.bz|ca|cd|cf|cg|ch|ci|co.ck|cl|cm|cn|com.co|co.cr|com.cu|cv|com.cy|cz|de|dj|dk|dm|com.do|dz|com.ec|ee|com.eg|es|com.et|fi|com.fj|fm|fr|ga|ge|gg|com.gh|com.gi|gl|gm|gp|gr|com.gt|gy|com.hk|hn|hr|ht|hu|co.id|ie|co.il|im|co.in|iq|is|it|je|com.jm|jo|co.jp|co.ke|com.kh|ki|kg|co.kr|com.kw|kz|la|com.lb|li|lk|co.ls|lt|lu|lv|com.ly|com.mx|com.my|co.ma|md|me|mg|mk|ml|com.mm|mn|ms|com.mt|mu|mv|mw|co.nz|com.om|co.mz|com.na|com.nf|com.ng|com.ni|ne|nl|no|com.np|nr|nu|com.py|com.qa|com.pa|com.pe|com.pg|com.ph|com.pk|pl|pn|com.pr|ps|pt|ro|ru|rw|com.sa|com.sb|sc|se|com.sg|sh|si|sk|com.sl|sn|so|sm|sr|st|com.sv|td|tg|co.th|com.tj|tk|tl|tm|tn|to|com.tr|tt|com.tw|co.tz|com.ua|co.ug|co.uk|com.uy|co.uz|com.vc|co.ve|vg|co.vi|com.vn|vu|ws|rs|co.za|co.zm|co.zw|cat)$")
        },
        fc = function() {
            this.g = Cb("CANVAS");
            this.h = this.g.getContext("2d");
            this.l = ec("inputtools_active", "image/Chrome_IME_Active2X.png");
            this.m = ec("inputtools_inactive", "image/Chrome_IME_Inactive2X.png");
            this.j = 0
        },
        ec = function(a, b) {
            var c = document;
            a = typeof a === C ? c.getElementById(a) : a;
            a || (a = Cb("IMG"), a.src = b);
            return a
        },
        hc = function(a, b, c) {
            a.j && M.clearTimeout(a.j);
            a.j = Db(function() {
                if (b) {
                    var d;
                    (d = gc[b]) ? (d = Y(d, 5), d = null == d ? -1 : d, d = [d % 10 * 80 + 22, 80 * Math.floor(d / 10) + 22]) : d = [22, 22];
                    var e = c ? this.l : this.m;
                    this.g.width =
                        this.g.height = 38;
                    this.h.clearRect(0, 0, 38, 38);
                    this.h.drawImage(e, d[0], d[1], 38, 38, 0, 0, 38, 38);
                    d = this.h.getImageData(0, 0, 38, 38);
                    chrome.browserAction.setIcon({
                        imageData: {
                            38: d
                        }
                    })
                } else chrome.browserAction.setIcon({
                    path: "image/producticon_48px_active.png"
                })
            }, 10, a)
        },
        jc = function() {
            this.g = Z.h();
            this.h = new Rb;
            this.m = dc();
            this.l = new fc;
            this.j = this.Y.bind(this);
            setTimeout(function() {
                chrome.tabs.query({
                    url: ["http://*/*", "https://*/*"],
                    status: t
                }, function(b) {
                    b.forEach(function(c) {
                        chrome.tabs.executeScript(c.id, {
                            file: fa
                        });
                        chrome.tabs.executeScript(c.id, {
                            file: "chext_loader.js",
                            allFrames: !0
                        })
                    })
                })
            }, 100);
            chrome.extension.onMessage.addListener(this.aa.bind(this));
            chrome.extension.onConnect.addListener(this.X.bind(this));
            chrome.webNavigation.onDOMContentLoaded.addListener(this.N.bind(this, !1));
            chrome.webNavigation.onTabReplaced.addListener(this.N.bind(this, !0));
            var a = this.$.bind(this);
            chrome.tabs.onActivated.addListener(function(b) {
                if (b && b.tabId) try {
                    chrome.tabs.get(b.tabId, a)
                } catch (c) {}
            });
            chrome.commands.onCommand.addListener(this.j);
            ic(this)
        },
        kc = function(a, b) {
            a = Ja(a);
            a.url = ["http://*/*", "https://*/*"];
            chrome.tabs.query(a, function(c) {
                c.forEach(function(d) {
                    chrome.tabs.sendMessage(d.id, b)
                })
            })
        },
        lc = function(a, b) {
            function c() {
                b.onMessage.removeListener(e);
                d.onMessage.removeListener(f);
                b.onDisconnect.removeListener(c);
                d.disconnect()
            }
            var d = chrome.tabs.connect(b.sender.tab.id),
                e = a.P.bind(a, d);
            b.onMessage.addListener(e);
            var f = a.P.bind(a, b);
            d.onMessage.addListener(f);
            b.onDisconnect.addListener(c)
        },
        ic = function(a) {
            var b = a.g.get(1),
                c = a.g.get(3);
            hc(a.l, b, c)
        },
        Jb = Jb || {},
        M = this || self;
    var Qb = {
        ba: "aq",
        ca: "ai",
        da: "ra",
        ea: "ds",
        fa: "dr",
        ha: "fd",
        ia: "gi",
        ja: "gl",
        ka: "gp",
        la: "hd",
        oa: "pl",
        W: "re",
        pa: "ri",
        qa: "sq",
        ra: "si",
        sa: "ss",
        SUCCESS: "su",
        va: "ui",
        wa: "ua",
        xa: "up",
        URL: "url",
        U: "input_tools",
        T: "current_input",
        V: "current_input_state",
        ta: "tvk",
        ma: "GOOGLE_ITA_KD",
        ga: "ft",
        ya: "ut",
        na: "km"
    };
    var R = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if (typeof a === C) return typeof b !== C || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        U = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = typeof a === C ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        };
    var Da;
    K.prototype.M = !0;
    K.prototype.L = function() {
        return this.g
    };
    var ua = {},
        ta = {};
    L.prototype.M = !0;
    L.prototype.L = function() {
        return this.g.toString()
    };
    L.prototype.toString = function() {
        return this.g + ""
    };
    var Aa = /%{(\w+)}/g,
        za = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
        mc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        wa = {};
    Fa.prototype.H = !1;
    var Za = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        Pa = /&/g,
        Qa = /</g,
        Ra = />/g,
        Sa = /"/g,
        Ta = /'/g,
        Ua = /\x00/g,
        Oa = /[\x00&<>"']/;
    var N;
    a: {
        var nc = M.navigator;
        if (nc) {
            var oc = nc.userAgent;
            if (oc) {
                N = oc;
                break a
            }
        }
        N = ""
    };
    var Ka = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var pc = O("Opera"),
        V = O("Trident") || O("MSIE"),
        qc = O(l),
        rc = O("Gecko") && !(-1 != N.toLowerCase().indexOf("webkit") && !O(l)) && !(O("Trident") || O("MSIE")) && !O(l),
        sc = -1 != N.toLowerCase().indexOf("webkit") && !O(l),
        tc = O("Macintosh"),
        uc = O("Windows"),
        vc = O("Android"),
        wc = P(),
        xc = O(w),
        yc = O(x),
        zc;
    a: {
        var Ac = "",
            Bc = function() {
                var a = N;
                if (rc) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (qc) return /Edge\/([\d\.]+)/.exec(a);
                if (V) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (sc) return /WebKit\/(\S+)/.exec(a);
                if (pc) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Bc && (Ac = Bc ? Bc[1] : "");
        if (V) {
            var Cc = Ya();
            if (null != Cc && Cc > parseFloat(Ac)) {
                zc = String(Cc);
                break a
            }
        }
        zc = Ac
    }
    var $a = zc,
        Wa = {},
        Dc;
    if (M.document && V) {
        var Ec = Ya();
        Dc = Ec ? Ec : parseInt($a, 10) || void 0
    } else Dc = void 0;
    var Fc = Dc;
    var ib = "closure_listenable_" + (1E6 * Math.random() | 0);
    var bb = 0;
    Q.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [], this.h++);
        var g = fb(a, b, d, e); - 1 < g ? (b = a[g], c || (b.F = !1)) : (b = new cb(b, this.src, f, !!d, e), b.F = c, a.push(b));
        return b
    };
    Q.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.g)) return !1;
        var e = this.g[a];
        b = fb(e, b, c, d);
        return -1 < b ? (db(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.g[a], this.h--), !0) : !1
    };
    Q.prototype.removeAll = function(a) {
        a = a && a.toString();
        var b = 0,
            c;
        for (c in this.g)
            if (!a || c == a) {
                for (var d = this.g[c], e = 0; e < d.length; e++) ++b, db(d[e]);
                delete this.g[c];
                this.h--
            } return b
    };
    var mb = "closure_lm_" + (1E6 * Math.random() | 0),
        kb = {},
        lb = 0,
        nb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    J(S, Fa);
    S.prototype[ib] = !0;
    S.prototype.removeEventListener = function(a, b, c, d) {
        gb(this, a, b, c, d)
    };
    S.prototype.listen = function(a, b, c, d) {
        return this.h.add(String(a), b, !1, c, d)
    };
    pb.prototype.g = null;
    var Gc;
    J(sb, pb);
    Gc = new sb;
    G = ub.prototype;
    G.s = function() {
        vb(this);
        for (var a = [], b = 0; b < this.g.length; b++) a.push(this.h[this.g[b]]);
        return a
    };
    G.o = function() {
        vb(this);
        return this.g.concat()
    };
    G.clear = function() {
        this.h = {};
        this.j = this.g.length = 0
    };
    G.remove = function(a) {
        return Object.prototype.hasOwnProperty.call(this.h, a) ? (delete this.h[a], this.j--, this.g.length > 2 * this.j && vb(this), !0) : !1
    };
    G.get = function(a, b) {
        return Object.prototype.hasOwnProperty.call(this.h, a) ? this.h[a] : b
    };
    G.set = function(a, b) {
        Object.prototype.hasOwnProperty.call(this.h, a) || (this.j++, this.g.push(a));
        this.h[a] = b
    };
    G.forEach = function(a, b) {
        for (var c = this.o(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    var Hc;
    (Hc = !V) || (Hc = 9 <= Number(Fc));
    var Ab = Hc;
    var yb = {
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
    };
    var Ob = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    J(Eb, S);
    var Pb = /^https?$/i,
        Ic = ["POST", "PUT"];
    G = Eb.prototype;
    G.send = function(a, b, c, d) {
        if (this.i) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.A + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.A = a;
        this.I = !1;
        this.g = !0;
        this.i = this.v ? tb(this.v) : tb(Gc);
        this.u = this.v ? rb(this.v) : rb(Gc);
        this.i.onreadystatechange = I(this.O, this);
        try {
            this.J = !0, this.i.open(b, String(a), !0), this.J = !1
        } catch (f) {
            Ib(this);
            return
        }
        a = c || "";
        var e = new ub(this.headers);
        d && xb(d, function(f, g) {
            e.set(g, f)
        });
        d = ra(e.o());
        c = M.FormData && a instanceof M.FormData;
        !(0 <= R(Ic, b)) || d ||
            c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function(f, g) {
            this.i.setRequestHeader(g, f)
        }, this);
        this.K && (this.i.responseType = this.K);
        "withCredentials" in this.i && this.i.withCredentials !== this.D && (this.i.withCredentials = this.D);
        try {
            Nb(this), 0 < this.B && ((this.C = Fb(this.i)) ? (this.i.timeout = this.B, this.i.ontimeout = I(this.R, this)) : this.m = Db(this.R, this.B, this)), this.l = !0, this.i.send(a), this.l = !1
        } catch (f) {
            Ib(this)
        }
    };
    G.R = function() {
        "undefined" != typeof Jb && this.i && (T(this, "timeout"), this.abort(8))
    };
    G.abort = function() {
        this.i && this.g && (this.g = !1, this.j = !0, this.i.abort(), this.j = !1, T(this, t), T(this, "abort"), Hb(this))
    };
    G.O = function() {
        this.H || (this.J || this.l || this.j ? Mb(this) : this.Z())
    };
    G.Z = function() {
        Mb(this)
    };
    Rb.prototype.abort = function() {
        this.g.i && (this.g.abort(), this.g.h.remove(t, this.h, !0, void 0))
    };
    Rb.prototype.l = function(a, b) {
        var c = b.target;
        b = Lb(c) && 0 != Kb(c);
        if (b) try {
            var d = c.i ? c.i.responseText : ""
        } catch (e) {
            d = ""
        } else d = null;
        c.removeEventListener(t, this.h, !0);
        c = {};
        a((c[this.j.SUCCESS] = b, c[this.j.W] = d, c.od = 0, c))
    };
    var Jc = new K(ta, "https://www.google.cn/inputtools/request"),
        Kc = new K(ta, "https://www.google.cn/inputtools/predict"),
        Lc = {},
        Mc = JSON.stringify((Lc["Content-Type"] = "application/json; charset=UTF-8", Lc));
    (function() {
        if (uc) {
            var a = /Windows NT ([0-9.]+)/;
            return (a = a.exec(N)) ? a[1] : "0"
        }
        return tc ? (a = /1[0|1][_.][0-9_.]+/, (a = a.exec(N)) ? a[0].replace(/_/g, ".") : "10") : vc ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(N)) ? a[1] : "") : wc || xc || yc ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(N)) ? a[1].replace(/_/g, ".") : "") : ""
    })();
    var Nc = Ma(),
        Oc = P() || O(x),
        Pc = O(w),
        Qc = O("Android") && !(Na() || Ma() || O("Opera") || O("Silk")),
        Rc = Na(),
        Sc = O("Safari") && !(Na() || O("Coast") || O("Opera") || O(l) || O("Edg/") || O("OPR") || Ma() || O("Silk") || O("Android")) && !(P() || O(w) || O(x));
    (function() {
        if (Nc) return W(/Firefox\/([0-9.]+)/);
        if (V || qc || pc) return $a;
        if (Rc) return P() || O(w) || O(x) ? W(/CriOS\/([0-9.]+)/) : W(/Chrome\/([0-9.]+)/);
        if (Sc && !(P() || O(w) || O(x))) return W(/Version\/([0-9.]+)/);
        if (Oc || Pc) {
            var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(N);
            if (a) return a[1] + "." + a[2]
        } else if (Qc) return (a = W(/Android\s+([0-9.]+)/)) ? a : W(/Version\/([0-9.]+)/);
        return ""
    })();
    var Tb = typeof Uint8Array == v,
        X = [];
    Sb.prototype.toString = function() {
        return Xb(this).toString()
    };
    J(Zb, Sb);
    J(Vb, Sb);
    var Yb = [3, 4, 6, 7];
    var gc = {},
        Tc = {};
    U([
        [1, "am-t-i0-und", [
                ["am", "\u12a0\u121b\u122d\u129b"]
            ],
            ["am"], 16, null, ["im_t13n_am"]
        ],
        [2, "ar-t-i0-und", [
                ["ar", "\u0627\u0644\u0639\u0631\u0628\u064a\u0629"]
            ],
            ["ar"], 2, null, ["im_t13n_ar"]
        ],
        [3, "bn-t-i0-und", [
                ["bn", "\u09ac\u09be\u0982\u09b2\u09be"]
            ],
            ["bn"], 3, null, ["im_t13n_bn"]
        ],
        [4, "zh-t-i0-pinyin", [
                [E, "\u62fc\u97f3"]
            ],
            [E], 29, null, ["im_pinyin_zh_hans"]
        ],
        [49, "zh-t-i0-pinyin-x0-shuangpin-abc", [
                [E, "\u53cc\u62fc\uff08\u667a\u80fdABC\uff09"]
            ],
            [E], 44, [18]
        ],
        [50, "zh-t-i0-pinyin-x0-shuangpin-ms", [
                [E, "\u53cc\u62fc\uff08\u5fae\u8f6f\u65b9\u6848\uff09"]
            ],
            [E], 44, [18]
        ],
        [51, "zh-t-i0-pinyin-x0-shuangpin-flypy", [
                [E, "\u53cc\u62fc\uff08\u5c0f\u9e64\uff09"]
            ],
            [E], 44, [18]
        ],
        [52, "zh-t-i0-pinyin-x0-shuangpin-jiajia", [
                [E, "\u53cc\u62fc\uff08\u62fc\u97f3\u52a0\u52a0\uff09"]
            ],
            [E], 44, [18]
        ],
        [53, "zh-t-i0-pinyin-x0-shuangpin-ziguang", [
                [E, "\u53cc\u62fc\uff08\u7d2b\u5149\uff09"]
            ],
            [E], 44, [18]
        ],
        [54, "zh-t-i0-pinyin-x0-shuangpin-ziranma", [
                [E, "\u53cc\u62fc\uff08\u81ea\u7136\u7801\uff09"]
            ],
            [E], 44, [18]
        ],
        [6, "el-t-i0-und", [
                ["el", "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"]
            ],
            ["el"], 23, null, ["im_t13n_el"]
        ],
        [7, "gu-t-i0-und", [
                ["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0"]
            ],
            ["gu"], 4, null, ["im_t13n_gu"]
        ],
        [8, "hi-t-i0-und", [
                ["hi", "\u0939\u093f\u0928\u094d\u0926\u0940"]
            ],
            ["hi"], 5, null, ["im_t13n_hi"]
        ],
        [9, "he-t-i0-und", [
                ["he", "\u05e2\u05b4\u05d1\u05b0\u05e8\u05b4\u05d9\u05ea"]
            ],
            ["he"], 20, null, ["im_t13n_he", "im_t13n_iw"]
        ],
        [33, "ja-t-i0", [
            ["ja", "\u65e5\u672c\u8a9e"]
        ], null, 28],
        [10, "ja-t-ja-hira-i0-und", [
                ["ja", "\u65e5\u672c\u8a9e"]
            ],
            ["ja"], 28, null, ["im_t13n_ja"]
        ],
        [11, "kn-t-i0-und",
            [
                ["kn", "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1"]
            ],
            ["kn"], 6, null, ["im_t13n_kn"]
        ],
        [12, "ml-t-i0-und", [
                ["ml", "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02"]
            ],
            ["ml"], 7, null, ["im_t13n_ml"]
        ],
        [13, "mr-t-i0-und", [
                ["mr", "\u092e\u0930\u093e\u0920\u0940"]
            ],
            ["mr"], 9, null, ["im_t13n_mr"]
        ],
        [14, "ne-t-i0-und", [
                ["ne", "\u0928\u0947\u092a\u093e\u0932\u0940"]
            ],
            ["ne"], 8, null, ["im_t13n_ne"]
        ],
        [15, "or-t-i0-und", [
                ["or", "\u0b13\u0b21\u0b3c\u0b3f\u0b06"]
            ],
            ["or"], 19, null, ["im_t13n_or"]
        ],
        [16, "fa-t-i0-und", [
                ["fa", "\u0641\u0627\u0631\u0633\u06cc"]
            ],
            ["fa"], 14, null, ["im_t13n_fa"]
        ],
        [17, "pa-t-i0-und", [
                ["pa", "\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40"]
            ],
            ["pa"], 10, null, ["im_t13n_pa"]
        ],
        [46, "pl-t-i0-und", [
            ["pl", "Polski"]
        ], null, 37, null, ["im_t13n_pl"]],
        [18, "ru-t-i0-und", [
                ["ru", "\u0420\u0443\u0441\u0441\u043a\u0438\u0439"]
            ],
            ["ru"], 24, null, ["im_t13n_ru"]
        ],
        [19, "sa-t-i0-und", [
                ["sa", "\u0938\u0902\u0938\u094d\u0915\u0943\u0924\u092e\u094d"]
            ],
            ["sa"], 15, null, ["im_t13n_sa"]
        ],
        [20, "sr-t-i0-und", [
                ["sr", "\u0441\u0440\u043f\u0441\u043a\u0438"]
            ],
            ["sr"], 22, null, ["im_t13n_sr"]
        ],
        [21, "si-t-i0-und", [
                ["si", "\u0dc3\u0dd2\u0d82\u0dc4\u0dbd"]
            ],
            ["si"], 18, null, ["im_t13n_si"]
        ],
        [22, "ta-t-i0-und", [
                [D, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"]
            ],
            [D], 11, null, ["im_t13n_ta"]
        ],
        [23, "te-t-i0-und", [
                ["te", "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"]
            ],
            ["te"], 12, null, ["im_t13n_te"]
        ],
        [24, "ti-t-i0-und", [
                ["ti", "\u1275\u130d\u122d\u129b"]
            ],
            ["ti"], 17, null, ["im_t13n_ti"]
        ],
        [25, "ur-t-i0-und", [
                ["ur", "\u0627\u0631\u062f\u0648"]
            ],
            ["ur"], 13, null, ["im_t13n_ur"]
        ],
        [31, "zh-t-i0-wubi-1998", [
            [E, "\u4e94\u7b14"]
        ], null, 30],
        [26,
            "zh-t-i0-wubi-1986", [
                [E, "\u4e94\u7b14"]
            ],
            [E], 30, null, ["im_wubi_zh_hans"]
        ],
        [28, "zh-hant-t-i0-und", [
                [F, "\u6ce8\u97f3"]
            ],
            [F], 31, null, ["im_zhuyin_zh_hant"]
        ],
        [32, "zh-hant-t-i0-bopo", [
            [F, "\u6ce8\u97f3"]
        ], null, 31],
        [27, "zh-hant-t-i0-pinyin", [
                [F, "\u6f22\u8a9e\u62fc\u97f3"]
            ],
            [F], 29, null, ["im_pinyin_zh_hant"]
        ],
        [30, "vi-t-i0-und", [
                ["vi", "Ti\u1ebfng Vi\u1ec7t"]
            ],
            ["vi"], 21, [18],
            ["im_t13n_vi"]
        ],
        [34, "be-t-i0-und", [
                ["be", "\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f"]
            ],
            ["be"], 26, null, ["im_t13n_be"]
        ],
        [35, "bg-t-i0-und", [
                ["bg", "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438"]
            ],
            ["bg"], 27, null, ["im_t13n_bg"]
        ],
        [36, "uk-t-i0-und", [
                ["uk", "\u0422\u0440\u0430\u043d\u0441\u043b\u0456\u0442\u0435\u0440\u0430\u0446\u0456\u044f"]
            ],
            ["uk"], 25, null, ["im_t13n_uk"]
        ],
        [37, "de-t-i0-und", [
                ["de", k]
            ],
            ["de"], 35, [15, 18]
        ],
        [38, "es-t-i0-und", [
                ["es", "Espa\u00f1ol"]
            ],
            ["es"], 34, [15, 18]
        ],
        [39, "fr-t-i0-und", [
                ["fr", p]
            ],
            ["fr"], 36, [15, 18]
        ],
        [40, "it-t-i0-und", [
                ["it", ba]
            ],
            ["it"], 39, [15, 18]
        ],
        [41, "nl-t-i0-und", [
                ["nl", q]
            ],
            ["nl"],
            40, [15, 18]
        ],
        [42, "pt-t-i0-und", [
                [A, ca]
            ],
            [A], 38, [15, 18]
        ],
        [48, "pt-pt-t-i0-und", [
            [B, ca]
        ], null, 38],
        [43, "zh-hant-t-i0-cangjie-1982", [
                [F, "\u5009\u9821"]
            ],
            [F], 32
        ],
        [44, "yue-hant-t-i0-und", [
                ["zh-HK", "\u5ee3\u6771\u8a71"]
            ],
            ["zh-HK"], 33
        ],
        [60, "yue-hant-t-i0-jyutping", [
                ["zh-HK", "\u7cb5\u62fc"]
            ],
            ["zh-HK"], 33
        ],
        [101, "sq-t-k0-und", [
                ["sq", "shqip"]
            ],
            ["sq"], 0, null, ["vkd_sq"]
        ],
        [102, "ar-t-k0-und", [
                ["ar", "\u0644\u0648\u062d\u0629 \u0645\u0641\u0627\u062a\u064a\u062d \u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629"]
            ],
            ["ar"], 0, null, ["vkd_ar"]
        ],
        [103, "hy-hyr-t-k0-und", [
                ["hy", "\u0531\u0580\u0587\u0565\u056c\u0561\u0570\u0561\u0575\u0565\u0580\u0565\u0576"]
            ],
            ["hy"], 0, null, ["vkd_hy_east"]
        ],
        [104, "hy-hyt-t-k0-und", [
                ["hy", "\u0531\u0580\u0565\u0582\u0574\u057f\u0561\u0570\u0561\u0575\u0565\u0580\u0567\u0576"]
            ],
            ["hy"], 0, null, ["vkd_hy_west"]
        ],
        [105, "eu-t-k0-und", [
                ["eu", "euskara"]
            ],
            ["eu"], 0, null, ["vkd_eu"]
        ],
        [106, "be-t-k0-und", [
                ["be", "\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f"]
            ],
            ["be"], 0, null, ["vkd_be"]
        ],
        [107, "bn-t-k0-und", [
                ["bn", "\u09ac\u09be\u0982\u09b2\u09be (INSCRIPT)"]
            ],
            ["bn"], 0, null, ["vkd_bn_inscript"]
        ],
        [108, "bn-t-und-latn-k0-und", [
                ["bn", "\u09ac\u09be\u0982\u09b2\u09be (\u09ab\u09cb\u09a8\u09c7\u099f\u09bf\u0995)"]
            ],
            ["bn"], 0, null, ["vkd_bn_phone"]
        ],
        [109, "bs-t-k0-und", [
                ["bs", "bosanski"]
            ],
            ["bs"], 0, null, ["vkd_bs"]
        ],
        [110, "pt-br-t-k0-und", [
                [A, da]
            ],
            [A], 0, null, ["vkd_pt_br"]
        ],
        [111, "bg-t-k0-und", [
                ["bg", "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a"]
            ],
            ["bg"], 0, null, ["vkd_bg"]
        ],
        [112, "bg-t-k0-qwerty", [
                ["bg", "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a (\u0444\u043e\u043d\u0435\u0442\u0438\u043a\u0430)"]
            ],
            ["bg"], 0, null, ["vkd_bg_phone"]
        ],
        [113, "ca-t-k0-und", [
                ["ca", "catal\u00e0"]
            ],
            ["ca"], 0, null, ["vkd_ca"]
        ],
        [114, "chr-t-k0-und", [
                ["chr", "\u13e3\u13b3\u13a9"]
            ],
            ["chr"], 0, null, ["vkd_chr"]
        ],
        [233, "ckb-t-k0-ar", [
                ["ckb", "\u06a9\u0648\u0631\u062f\u06cc (\u062f\u06d5\u0633\u062a\u0646\u0648\u0633\u06cc \u0639\u06d5\u0631\u06d5\u0628\u06cc)"]
            ],
            ["ckb"],
            0, null, ["vkd_ckb_ar"]
        ],
        [232, "ckb-t-k0-en", [
                ["ckb", "\u06a9\u0648\u0631\u062f\u06cc"]
            ],
            ["ckb"], 0, null, ["vkd_ckb_en"]
        ],
        [115, "hr-t-k0-und", [
                ["hr", "Hrvatski"]
            ],
            ["hr"], 0, null, ["vkd_hr"]
        ],
        [116, "cs-t-k0-und", [
                ["cs", "\u010ce\u0161tina"]
            ],
            ["cs"], 0, null, ["vkd_cs"]
        ],
        [117, "cs-t-k0-qwertz", [
                ["cs", "\u010ce\u0161tina QWERTZ"]
            ],
            ["cs"], 0, null, ["vkd_cs_qwertz"]
        ],
        [118, "da-t-k0-und", [
                ["da", "Dansk"]
            ],
            ["da"], 0, null, ["vkd_da"]
        ],
        [119, "prs-t-k0-und", [
                ["prs", "\u0641\u0627\u0631\u0633\u06cc \u062f\u0631\u06cc"]
            ],
            ["fa"], 0, null,
            ["vkd_prs"]
        ],
        [120, "nl-t-k0-und", [
                ["nl", q]
            ],
            ["nl"], 0, null, ["vkd_nl"]
        ],
        [121, "hi-t-k0-qwerty", [
                ["hi", ia]
            ],
            ["hi"], 0, null, ["vkd_deva_phone"]
        ],
        [122, "en-t-k0-und", [
                [u, m]
            ],
            [u], 0, null, ["vkd_en"]
        ],
        [123, "et-t-k0-und", [
                ["et", "eesti keel"]
            ],
            ["et"], 0, null, ["vkd_et"]
        ],
        [124, "und-ethi-t-k0-und", [
                ["am", "\u130d\u12d5\u12dd"]
            ],
            ["am"], 0, null, ["vkd_ethi"]
        ],
        [125, "fi-t-k0-und", [
                ["fi", "Suomi"]
            ],
            ["fi"], 0, null, ["vkd_fi"]
        ],
        [126, "fr-t-k0-und", [
                ["fr", p]
            ],
            ["fr"], 0, null, ["vkd_fr"]
        ],
        [127, "gl-t-k0-und", [
                ["gl", "galego"]
            ],
            ["gl"], 0,
            null, ["vkd_gl"]
        ],
        [128, "ka-t-k0-und", [
                ["ka", "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8 (\u10e5\u10ec\u10d4\u10e0\u10e2\u10e7)"]
            ],
            ["ka"], 0, null, ["vkd_ka_qwerty"]
        ],
        [129, "ka-t-k0-legacy", [
                ["ka", "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8 (\u10e1\u10d0\u10d1\u10d4\u10ed\u10d3\u10d8 \u10db\u10d0\u10dc\u10e5\u10d0\u10dc\u10d0)"]
            ],
            ["ka"], 0, null, ["vkd_ka_typewriter"]
        ],
        [130, "de-t-k0-und", [
                ["de", k]
            ],
            ["de"], 0, null, ["vkd_de"]
        ],
        [131, "el-t-k0-und", [
                ["el", "\u03b5\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"]
            ],
            ["el"],
            0, null, ["vkd_el"]
        ],
        [132, "gu-t-k0-und", [
                ["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0 (INSCRIPT)"]
            ],
            ["gu"], 0, null, ["vkd_gu_inscript"]
        ],
        [133, "gu-t-und-latn-k0-qwerty", [
                ["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0 (\u0aab\u0acb\u0aa8\u0ac7\u0aa4\u0abf\u0a95)"]
            ],
            ["gu"], 0, null, ["vkd_gu_phone"]
        ],
        [134, "pa-guru-t-k0-und", [
                ["pa-guru", "\u0a17\u0a41\u0a30\u0a2e\u0a41\u0a16\u0a40 (INSCRIPT)"]
            ],
            ["pa"], 0, null, ["vkd_guru_inscript"]
        ],
        [135, "pa-guru-t-und-latn-k0-und", [
                ["pa-guru", "\u0a17\u0a41\u0a30\u0a2e\u0a41\u0a16\u0a40 (\u0a2b\u0a4b\u0a28\u0a47\u0a1f\u0a3f\u0a15)"]
            ],
            ["pa"], 0, null, ["vkd_guru_phone"]
        ],
        [136, "he-t-k0-und", [
                ["he", "\u05e2\u05b4\u05d1\u05b0\u05e8\u05b4\u05d9\u05ea"]
            ],
            ["he"], 0, null, ["vkd_he", "vkd_iw"]
        ],
        [137, "hi-t-k0-und", [
                ["hi", ja]
            ],
            ["hi"], 0, null, ["vkd_hi"]
        ],
        [138, "hu-t-k0-101key", [
                ["hu", "magyar nyelv (101)"]
            ],
            ["hu"], 0, null, ["vkd_hu_101"]
        ],
        [139, "is-t-k0-und", [
                ["is", "\u00edslenska"]
            ],
            ["is"], 0, null, ["vkd_is"]
        ],
        [140, "it-t-k0-und", [
                ["it", ba]
            ],
            ["it"], 0, null, ["vkd_it"]
        ],
        [141, "kn-t-k0-und", [
                ["kn", "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1 (INSCRIPT)"]
            ],
            ["kn"], 0, null, ["vkd_kn_inscript"]
        ],
        [142, "kn-t-und-latn-k0-und", [
                ["kn", "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1 (\u0cab\u0cca\u0ca8\u0cc6\u0c9f\u0cbf\u0c95\u0ccd)"]
            ],
            ["kn"], 0, null, ["vkd_kn_phone"]
        ],
        [143, "kk-t-k0-und", [
                ["kk", "\u049a\u0430\u0437\u0430\u049b"]
            ],
            ["kk"], 0, null, ["vkd_kk"]
        ],
        [144, "km-t-k0-und", [
                ["km", "\u17a2\u1780\u17d2\u179f\u179a\u1781\u17d2\u1798\u17c2\u179a NiDA"]
            ],
            ["km"], 0, null, ["vkd_km"]
        ],
        [145, "ko-t-k0-und", [
                ["ko", "\ud55c\uad6d\uc5b4"]
            ],
            ["ko"], 0, [18],
            ["vkd_ko"]
        ],
        [146, "ky-cyrl-t-k0-und", [
                ["ky", "\u041a\u044b\u0440\u0433\u044b\u0437"]
            ],
            ["ky"], 0, null, ["vkd_ky_cyrl"]
        ],
        [147, "lo-t-k0-und", [
                ["lo", "\u0e9e\u0eb2\u0eaa\u0eb2\u0ea5\u0eb2\u0ea7"]
            ],
            ["lo"], 0, null, ["vkd_lo"]
        ],
        [148, "lv-t-k0-und", [
                ["lv", "latvie\u0161u valoda"]
            ],
            ["lv"], 0, null, ["vkd_lv"]
        ],
        [149, "lt-t-k0-und", [
                ["lt", "lietuvi\u0173 kalba"]
            ],
            ["lt"], 0, null, ["vkd_lt"]
        ],
        [150, "mk-t-k0-und", [
                ["mk", "\u043c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438"]
            ],
            ["mk"], 0, null, ["vkd_mk"]
        ],
        [151, "ml-t-k0-und", [
                ["ml", "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02 (INSCRIPT)"]
            ],
            ["ml"], 0, null, ["vkd_ml_inscript"]
        ],
        [152, "ml-t-und-latn-k0-und", [
                ["ml", "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02 (\u0d2b\u0d4a\u0d23\u0d31\u0d4d\u0d31\u0d3f\u0d15\u0d4d)"]
            ],
            ["ml"], 0, null, ["vkd_ml_phone"]
        ],
        [246, "mni-mtei-t-k0-phone", [
                ["mni-Mtei", "\uabc3\uabe4\uabc7\uabe9 \uabc3\uabcc\uabe6\uabdb (\uabd0\uabe3\uabc5\uabe6\uabc7\uabe4\uabdb)"]
            ],
            ["mni-Mtei"], 0
        ],
        [153, "mt-t-k0-und", [
                ["mt", "Malti"]
            ],
            ["mt"], 0, null, ["vkd_mt"]
        ],
        [154, "mi-t-k0-und", [
                ["mi", "Maori"]
            ],
            ["mi"], 0, null, ["vkd_mi"]
        ],
        [155, "mn-cyrl-t-k0-und", [
                ["mn", "\u041c\u043e\u043d\u0433\u043e\u043b"]
            ],
            ["mn"], 0, null, ["vkd_mn_cyrl"]
        ],
        [156, "srp-t-k0-und", [
                ["sr", "Crnogorski jezik"]
            ],
            ["sr"], 0, null, ["vkd_srp"]
        ],
        [157, "no-t-k0-und", [
                ["no", "norsk"]
            ],
            ["no"], 0, null, ["vkd_no"]
        ],
        [158, "or-t-k0-und", [
                ["or", "\u0b13\u0b21\u0b3c\u0b3f\u0b06 (INSCRIPT)"]
            ],
            ["or"], 0, null, ["vkd_or_inscript"]
        ],
        [159, "or-t-und-latn-k0-und", [
                ["or", "\u0b13\u0b21\u0b3c\u0b3f\u0b06 (\u0b2b\u0b4b\u0b28\u0b47\u0b1f\u0b3f\u0b15)"]
            ],
            ["or"], 0, null, ["vkd_or_phone"]
        ],
        [160, "latn-002-t-k0-und", [
                [u, h]
            ],
            ["af"], 0, null, ["vkd_latn_002"]
        ],
        [161, "ps-t-k0-und",
            [
                ["ps", "\u067e\u069a\u062a\u0648"]
            ],
            ["ps"], 0, null, ["vkd_ps"]
        ],
        [162, "fa-t-k0-und", [
                ["fa", "\u0641\u0627\u0631\u0633\u06cc"]
            ],
            ["fa"], 0, null, ["vkd_fa"]
        ],
        [163, "pl-t-k0-und", [
                ["pl", "polski"]
            ],
            ["pl"], 0, null, ["vkd_pl"]
        ],
        [164, "pt-pt-t-k0-und", [
                [B, ea]
            ],
            [B], 0, null, ["vkd_pt_pt"]
        ],
        [165, "rom-t-k0-und", [
                ["rom", "rromani \u0107hib"]
            ],
            ["rom"], 0, null, ["vkd_rom"]
        ],
        [166, "ro-t-k0-und", [
                ["ro", "rom\u00e2n\u0103"]
            ],
            ["ro"], 0, null, ["vkd_ro"]
        ],
        [167, "ro-t-k0-legacy", [
                ["ro", "rom\u00e2n\u0103 SR13392 Primary"]
            ],
            ["ro"], 0, null, ["vkd_ro_sr13392_primary"]
        ],
        [168, "ro-t-k0-extended", [
                ["ro", "rom\u00e2n\u0103 SR13392 Secondary"]
            ],
            ["ro"], 0, null, ["vkd_ro_sr13392_secondary"]
        ],
        [169, "ru-t-k0-und", [
                ["ru", "\u0420\u0443\u0441\u0441\u043a\u0430\u044f \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430"]
            ],
            ["ru"], 0, null, ["vkd_ru"]
        ],
        [212, "ru-t-k0-qwerty", [
                ["ru", "\u0420\u0443\u0441\u0441\u043a\u0430\u044f \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430 (\u0444\u043e\u043d\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439)"]
            ],
            ["ru"], 0
        ],
        [242,
            "sa-t-k0-devanaga", [
                ["sa", ja]
            ],
            ["sa"], 0
        ],
        [170, "sa-t-und-latn-k0-und", [
                ["sa", "\u0938\u0902\u0938\u094d\u0915\u0943\u0924\u092e\u094d (\u092b\u094b\u0928\u0947\u091f\u093f\u0915\u094d)"]
            ],
            ["sa"], 0, null, ["vkd_sa_phone"]
        ],
        [171, "sr-cyrl-t-k0-und", [
                ["sr", "\u0441\u0440\u043f\u0441\u043a\u0438"]
            ],
            ["sr"], 0, null, ["vkd_sr_cyrl"]
        ],
        [172, "sr-latn-t-k0-und", [
                ["sr", "Srpski"]
            ],
            ["sr"], 0, null, ["vkd_sr_latn"]
        ],
        [173, "si-t-k0-und", [
                ["si", "\u0dc1\u0dd4\u0daf\u0dca\u0db0 \u0dc3\u0dd2\u0d82\u0dc4\u0dbd SLS1134"]
            ],
            ["si"],
            0, null, ["vkd_si"]
        ],
        [174, "sk-t-k0-und", [
                ["sk", "Slovensk\u00fd jazyk"]
            ],
            ["sk"], 0, null, ["vkd_sk"]
        ],
        [175, "sk-t-k0-qwerty", [
                ["sk", "Slovensk\u00fd jazyk - QWERTY"]
            ],
            ["sk"], 0, null, ["vkd_sk_qwerty"]
        ],
        [176, "sl-t-k0-und", [
                ["sl", "sloven\u0161\u010dina"]
            ],
            ["sl"], 0, null, ["vkd_sl"]
        ],
        [177, "uzs-t-k0-und", [
                ["uzs", "Southern Uzbek"]
            ],
            ["uzs"], 0, null, ["vkd_uzs"]
        ],
        [178, "es-t-k0-und", [
                ["es", "Espa\u00f1ol"]
            ],
            ["es"], 0, null, ["vkd_es_es"]
        ],
        [179, "sv-t-k0-und", [
                ["sv", "Svenska"]
            ],
            ["sv"], 0, null, ["vkd_sv"]
        ],
        [180, "de-ch-t-k0-und",
            [
                ["de", "Deutschsprachige Schweiz"]
            ],
            ["de"], 0, null, ["vkd_de_ch"]
        ],
        [181, "ta-t-k0-ta99", [
                [D, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (TAMIL99)"]
            ],
            [D], 0, null, ["vkd_ta_tamil99"]
        ],
        [182, "ta-t-k0-und", [
                [D, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (INSCRIPT)"]
            ],
            [D], 0, null, ["vkd_ta_inscript"]
        ],
        [183, "ta-t-und-latn-k0-und", [
                [D, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (\u0baa\u0bcb\u0ba9\u0bc6\u0b9f\u0bbf\u0b95\u0bcd)"]
            ],
            [D], 0, null, ["vkd_ta_phone"]
        ],
        [205, "ta-t-k0-typewriter", [
                [D, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (TYPE-WRITER)"]
            ],
            [D], 0
        ],
        [206,
            "ta-t-k0-itrans", [
                [D, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (ITRANS)"]
            ],
            [D], 0
        ],
        [184, "tt-t-k0-und", [
                ["tt", "\u0422\u0430\u0442\u0430\u0440"]
            ],
            ["tt"], 0, null, ["vkd_tt"]
        ],
        [185, "te-t-k0-und", [
                ["te", "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 (INSCRIPT)"]
            ],
            ["te"], 0, null, ["vkd_te_inscript"]
        ],
        [186, "te-t-und-latn-k0-und", [
                ["te", "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 (\u0c2b\u0c4b\u0c28\u0c46\u0c1f\u0c3f\u0c15\u0c4d)"]
            ],
            ["te"], 0, null, ["vkd_te_phone"]
        ],
        [187, "th-t-k0-und", [
                ["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"]
            ],
            ["th"], 0, null, ["vkd_th"]
        ],
        [204, "th-t-k0-pattajoti", [
                ["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22 (Pattajoti)"]
            ],
            ["th"], 0
        ],
        [203, "th-t-k0-tis", [
                ["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22 (TIS-820.2538)"]
            ],
            ["th"], 0
        ],
        [188, "tr-t-k0-legacy", [
                ["tr", "T\u00fcrk\u00e7e - F"]
            ],
            ["tr"], 0, null, ["vkd_tr_f", "tr-t-k0-lagacy"]
        ],
        [189, "tr-t-k0-und", [
                ["tr", "T\u00fcrk\u00e7e - Q"]
            ],
            ["tr"], 0, null, ["vkd_tr_q"]
        ],
        [190, "ug-t-k0-und", [
                ["ug", "\u0626\u06c7\u064a\u063a\u06c7\u0631\u0686\u06d5"]
            ],
            ["ug"], 0, null, ["vkd_ug"]
        ],
        [191, "uk-t-k0-101key", [
                ["uk", "\u0415\u043a\u0440\u0430\u043d\u043d\u0430 \u043a\u043b\u0430\u0432\u0456\u0430\u0442\u0443\u0440\u0430"]
            ],
            ["uk"], 0, null, ["vkd_uk_101"]
        ],
        [192, "ur-t-k0-und", [
                ["ur", "\u0627\u0631\u062f\u0648"]
            ],
            ["ur"], 0, null, ["vkd_ur"]
        ],
        [193, "uz-latn-t-k0-und", [
                ["uz", "o\u2018zbek"]
            ],
            ["uz"], 0, null, ["vkd_uz_latn"]
        ],
        [194, "uz-cyrl-t-k0-und", [
                ["uz", "\u040e\u0437\u0431\u0435\u043a (\u0444\u043e\u043d\u0435\u0442\u0438\u0447\u043d\u0456)"]
            ],
            ["uz"], 0, null, ["vkd_uz_cyrl_phone"]
        ],
        [195, "uz-cyrl-t-k0-legacy",
            [
                ["uz", "\u040e\u0437\u0431\u0435\u043a (\u0420\u043e\u0441\u0456\u0439\u0441\u044c\u043a\u0430)"]
            ],
            ["uz"], 0, null, ["vkd_uz_cyrl_type"]
        ],
        [196, "vi-t-k0-und", [
                ["vi", "Ti\u1ebfng Vi\u1ec7t TCVN 6064"]
            ],
            ["vi"], 0, null, ["vkd_vi_tcvn"]
        ],
        [197, "vi-t-k0-legacy", [
                ["vi", "Ti\u1ebfng Vi\u1ec7t Telex"]
            ],
            ["vi"], 0, null, ["vkd_vi_telex"]
        ],
        [198, "vi-t-k0-viqr", [
                ["vi", "Ti\u1ebfng Vi\u1ec7t VIQR"]
            ],
            ["vi"], 0, null, ["vkd_vi_viqr"]
        ],
        [208, "vi-t-k0-vni", [
                ["vi", "Ti\u1ebfng Vi\u1ec7t VNI"]
            ],
            ["vi"], 0
        ],
        [199, "dz-t-k0-und", [
                ["dz", "\u0f62\u0fab\u0f7c\u0f44\u0f0b\u0f41\u0f0b"]
            ],
            ["dz"], 0, null, ["vkd_dz"]
        ],
        [200, "en-t-k0-dvorak", [
                [u, "English Dvorak"]
            ],
            [u], 0
        ],
        [201, "chr-t-und-latn-k0-und", [
                ["chr", "\u13e3\u13b3\u13a9 \u13d7\u13a7\u13c1\u13a2\u13cd\u13d7 \u13da\u13c3\u13f4\u13ac"]
            ],
            ["chr"], 0, null, ["vkd_chr_phone"]
        ],
        [202, "my-t-k0-und", [
                ["my", "\u1019\u103c\u1014\u103a\u1019\u102c\u1018\u102c\u101e\u102c"]
            ],
            ["my"], 0, null, ["vkd_my"]
        ],
        [239, "tg-t-k0-und", [
                ["tg", "\u0422\u043e\u04b7\u0438\u043a"]
            ],
            ["tg"], 0, null, ["vkd_tg"]
        ],
        [5, "en-t-i0-und", [
                [u, m]
            ],
            [u], 41, [15, 18],
            ["im_t13n_en"]
        ],
        [29, "ja-hira-t-i0-und",
            [
                ["ja", "\u65e5\u672c\u8a9e"]
            ], null, -1, null, ["im_t13n_ja_hira"]
        ],
        [45, "tr-t-i0-und", [
            ["tr", "T\u00fcrk"]
        ], null, 42],
        [207, "yi-t-k0-und", [
                ["yi", "\u05d4\u05e2\u05d1\u05e8\u05e2\u05d9\u05d9 \u05d9\u05d9\u05b4\u05d3\u05d9\u05e9 \u05e7\u05d9\u05d1\u05d0\u05b8\u05e8\u05d3"]
            ],
            ["yi"], 0
        ],
        [256, "yo-ng-t-k0-und", [
                ["yo", "Nigerian Yoruba"]
            ],
            ["yo"], 0
        ],
        [209, "ne-t-k0-und", [
                ["ne", "\u0928\u0947\u092a\u093e\u0932\u0940 (\u091f\u094d\u0930\u092f\u093e\u0921\u093f\u0938\u0928\u0932)"]
            ],
            ["ne"], 0
        ],
        [210, "ne-t-und-latn-k0-und",
            [
                ["ne", "\u0928\u0947\u092a\u093e\u0932\u0940 (\u0930\u094b\u092e\u093e\u0928\u093e\u0907\u091c\u094d\u0921)"]
            ],
            ["ne"], 0
        ],
        [211, "en-us-t-k0-intl", [
                [u, r]
            ],
            ["nl"], 0
        ],
        [213, "nv-t-k0-und", [
                ["nv", aa]
            ],
            ["nv"], 0
        ],
        [234, "nv-t-k0", [
            ["nv", aa]
        ], null, 0],
        [235, "nv-t-k0-std", [
                ["nv", "Din\u00e9 bizaad - Traditional"]
            ],
            ["nv"], 0
        ],
        [401, "af-t-i0-handwrit", [
                ["af", "Afrikaans"]
            ],
            ["af"], 1
        ],
        [506, "am-t-i0-handwrit", [
                ["am", "\u12a0\u121b\u122d\u129b"]
            ],
            ["am"], 1
        ],
        [464, "ar-t-i0-handwrit", [
                ["ar", "\u0627\u0644\u0639\u0631\u0628\u064a\u0629"]
            ],
            ["ar"], 1
        ],
        [507, "as-t-i0-handwrit", [
                ["as", "\u0985\u09b8\u09ae\u09c0\u09af\u09bc\u09be"]
            ],
            ["as"], 1
        ],
        [487, "az-t-i0-handwrit", [
                ["az", "az\u0259rbaycan"]
            ],
            ["az"], 1
        ],
        [402, "be-t-i0-handwrit", [
                ["be", "\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f"]
            ],
            ["be"], 1
        ],
        [403, "bg-t-i0-handwrit", [
                ["bg", "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438"]
            ],
            ["bg"], 1
        ],
        [489, "bn-t-i0-handwrit", [
                ["bn", "\u09ac\u09be\u0982\u09b2\u09be"]
            ],
            ["bn"], 1
        ],
        [509, "bo-t-i0-handwrit", [
                ["bo", "\u0f56\u0f7c\u0f51\u0f0b\u0f66\u0f90\u0f51\u0f0b"]
            ],
            ["bo"], 1
        ],
        [468, "bs-t-i0-handwrit", [
                ["bs", "bosanski"]
            ],
            ["bs"], 1
        ],
        [404, "ca-t-i0-handwrit", [
                ["ca", "catal\u00e0"]
            ],
            ["ca"], 1
        ],
        [469, "ceb-t-i0-handwrit", [
                ["ceb", "Cebuano"]
            ],
            ["ceb"], 1
        ],
        [494, "co-t-i0-handwrit", [
                ["co", "Corsican"]
            ],
            ["co"], 1
        ],
        [405, "cs-t-i0-handwrit", [
                ["cs", "\u010de\u0161tina"]
            ],
            ["cs"], 1
        ],
        [406, "cy-t-i0-handwrit", [
                ["cy", "Cymraeg"]
            ],
            ["cy"], 1
        ],
        [407, "da-t-i0-handwrit", [
                ["da", "dansk"]
            ],
            ["da"], 1
        ],
        [408, "de-t-i0-handwrit", [
                ["de", k]
            ],
            ["de"], 1
        ],
        [455, "el-t-i0-handwrit", [
                ["el", "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"]
            ],
            ["el"], 1
        ],
        [409, "en-t-i0-handwrit", [
                [u, m]
            ],
            [u], 1
        ],
        [456, "eo-t-i0-handwrit", [
                ["eo", "esperanto"]
            ],
            ["eo"], 1
        ],
        [410, "es-t-i0-handwrit", [
                ["es", "espa\u00f1ol"]
            ],
            ["es"], 1
        ],
        [411, "et-t-i0-handwrit", [
                ["et", "eesti"]
            ],
            ["et"], 1
        ],
        [412, "eu-t-i0-handwrit", [
                ["eu", "euskara"]
            ],
            ["eu"], 1
        ],
        [465, "fa-t-i0-handwrit", [
                ["fa", "\u0641\u0627\u0631\u0633\u06cc"]
            ],
            ["fa"], 1
        ],
        [413, "fi-t-i0-handwrit", [
                ["fi", "suomi"]
            ],
            ["fi"], 1
        ],
        [414, "fil-t-i0-handwrit", [
                ["fil", "Filipino"]
            ],
            ["fil"], 1
        ],
        [415, "fr-t-i0-handwrit", [
                ["fr", "fran\u00e7ais"]
            ],
            ["fr"],
            1
        ],
        [495, "fy-t-i0-handwrit", [
                ["fy", "Frysk"]
            ],
            ["fy"], 1
        ],
        [416, "ga-t-i0-handwrit", [
                ["ga", "Gaeilge"]
            ],
            ["ga"], 1
        ],
        [496, "gd-t-i0-handwrit", [
                ["gd", "G\u00e0idhlig"]
            ],
            ["gd"], 1
        ],
        [417, "gl-t-i0-handwrit", [
                ["gl", "galego"]
            ],
            ["gl"], 1
        ],
        [462, "gu-t-i0-handwrit", [
                ["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0"]
            ],
            ["gu"], 1
        ],
        [497, "haw-t-i0-handwrit", [
                ["haw", ha]
            ],
            ["haw"], 1
        ],
        [457, "he-t-i0-handwrit", [
                ["he", "\u05e2\u05d1\u05e8\u05d9\u05ea"]
            ],
            ["he"], 1
        ],
        [453, "hi-t-i0-handwrit", [
                ["hi", "\u0939\u093f\u0928\u094d\u0926\u0940"]
            ],
            ["hi"], 1
        ],
        [470, "hmn-t-i0-handwrit", [
                ["hmn", "Hmong"]
            ],
            ["hmn"], 1
        ],
        [418, "hr-t-i0-handwrit", [
                ["hr", "hrvatski"]
            ],
            ["hr"], 1
        ],
        [419, "ht-t-i0-handwrit", [
                ["ht", "Haitian Creole"]
            ],
            ["ht"], 1
        ],
        [420, "hu-t-i0-handwrit", [
                ["hu", "magyar"]
            ],
            ["hu"], 1
        ],
        [504, "hy-t-i0-handwrit", [
                ["hy", "\u0570\u0561\u0575\u0565\u0580\u0565\u0576"]
            ],
            ["hy"], 1
        ],
        [421, "id-t-i0-handwrit", [
                ["id", "Indonesia"]
            ],
            ["id"], 1
        ],
        [422, "is-t-i0-handwrit", [
                ["is", "\u00edslenska"]
            ],
            ["is"], 1
        ],
        [423, "it-t-i0-handwrit", [
                ["it", "italiano"]
            ],
            ["it"], 1
        ],
        [424, "ja-t-i0-handwrit",
            [
                ["ja", "\u65e5\u672c\u8a9e"]
            ],
            ["ja"], 1
        ],
        [458, "jv-t-i0-handwrit", [
                ["jv", "Javanese"]
            ],
            ["jv"], 1
        ],
        [505, "ka-t-i0-handwrit", [
                ["ka", "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8"]
            ],
            ["ka"], 1
        ],
        [501, "kk-t-i0-handwrit", [
                ["kk", "\u049b\u0430\u0437\u0430\u049b \u0442\u0456\u043b\u0456"]
            ],
            ["kk"], 1
        ],
        [484, "km-t-i0-handwrit", [
                ["km", "\u1781\u17d2\u1798\u17c2\u179a"]
            ],
            ["km"], 1
        ],
        [471, "kn-t-i0-handwrit", [
                ["kn", "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1"]
            ],
            ["kn"], 1
        ],
        [425, "ko-t-i0-handwrit", [
                ["ko", "\ud55c\uad6d\uc5b4"]
            ],
            ["ko"], 1
        ],
        [477,
            "ku-t-i0-handwrit", [
                ["ku", "kurd\u00ee"]
            ],
            ["ku"], 1
        ],
        [478, "ky-t-i0-handwrit", [
                ["ky", "\u043a\u044b\u0440\u0433\u044b\u0437\u0447\u0430"]
            ],
            ["ky"], 1
        ],
        [426, "la-t-i0-handwrit", [
                ["la", "Latin"]
            ],
            ["la"], 1
        ],
        [498, "lb-t-i0-handwrit", [
                ["lb", "L\u00ebtzebuergesch"]
            ],
            ["lb"], 1
        ],
        [483, "lo-t-i0-handwrit", [
                ["lo", "\u0ea5\u0eb2\u0ea7"]
            ],
            ["lo"], 1
        ],
        [427, "lt-t-i0-handwrit", [
                ["lt", "lietuvi\u0173"]
            ],
            ["lt"], 1
        ],
        [428, "lv-t-i0-handwrit", [
                ["lv", "latvie\u0161u"]
            ],
            ["lv"], 1
        ],
        [479, "mg-t-i0-handwrit", [
                ["mg", "Malagasy"]
            ],
            ["mg"], 1
        ],
        [459,
            "mi-t-i0-handwrit", [
                ["mi", "Maori"]
            ],
            ["mi"], 1
        ],
        [429, "mk-t-i0-handwrit", [
                ["mk", "\u043c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438"]
            ],
            ["mk"], 1
        ],
        [490, "ml-t-i0-handwrit", [
                ["ml", "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02"]
            ],
            ["ml"], 1
        ],
        [474, "mn-t-i0-handwrit", [
                ["mn", "\u043c\u043e\u043d\u0433\u043e\u043b"]
            ],
            ["mn"], 1
        ],
        [461, "mr-t-i0-handwrit", [
                ["mr", "\u092e\u0930\u093e\u0920\u0940"]
            ],
            ["mr"], 1
        ],
        [430, "ms-t-i0-handwrit", [
                ["ms", "Melayu"]
            ],
            ["ms"], 1
        ],
        [467, "mt-t-i0-handwrit", [
                ["mt", "Malti"]
            ],
            ["mt"], 1
        ],
        [488, "mul-t-i0-handwrit",
            [
                ["mul", "Multiple languages"]
            ],
            ["mul"], 1
        ],
        [492, "my-t-i0-handwrit", [
                ["my", "\u1019\u103c\u1014\u103a\u1019\u102c"]
            ],
            ["my"], 1
        ],
        [431, "nb-t-i0-handwrit", [
                ["nb", "norsk bokm\u00e5l"]
            ],
            ["nb"], 1
        ],
        [485, "ne-t-i0-handwrit", [
                ["ne", "\u0928\u0947\u092a\u093e\u0932\u0940"]
            ],
            ["ne"], 1
        ],
        [432, "nl-t-i0-handwrit", [
                ["nl", q]
            ],
            ["nl"], 1
        ],
        [434, "nn-t-i0-handwrit", [
                ["nn", "nynorsk"]
            ],
            ["nn"], 1
        ],
        [433, "no-t-i0-handwrit", [
                ["no", "norsk"]
            ],
            ["no"], 1
        ],
        [480, "ny-t-i0-handwrit", [
                ["ny", "Nyanja"]
            ],
            ["ny"], 1
        ],
        [476, "or-t-i0-handwrit", [
                ["or",
                    "\u0b13\u0b21\u0b3c\u0b3f\u0b06"
                ]
            ],
            ["or"], 1
        ],
        [463, "pa-t-i0-handwrit", [
                ["pa", "\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40"]
            ],
            ["pa"], 1
        ],
        [435, "pl-t-i0-handwrit", [
                ["pl", "polski"]
            ],
            ["pl"], 1
        ],
        [436, "pt-t-i0-handwrit", [
            [A, "portugu\u00eas"]
        ], null, 1],
        [437, "pt-br-t-i0-handwrit", [
                [A, "portugu\u00eas (Brasil)"]
            ],
            [A], 1
        ],
        [438, "pt-pt-t-i0-handwrit", [
                [B, "portugu\u00eas (Portugal)"]
            ],
            [B], 1
        ],
        [439, "ro-t-i0-handwrit", [
                ["ro", "rom\u00e2n\u0103"]
            ],
            ["ro"], 1
        ],
        [440, "ru-t-i0-handwrit", [
                ["ru", "\u0440\u0443\u0441\u0441\u043a\u0438\u0439"]
            ],
            ["ru"], 1
        ],
        [491, "si-t-i0-handwrit", [
                ["si", "\u0dc3\u0dd2\u0d82\u0dc4\u0dbd"]
            ],
            ["si"], 1
        ],
        [441, "sk-t-i0-handwrit", [
                ["sk", "Sloven\u010dina"]
            ],
            ["sk"], 1
        ],
        [442, "sl-t-i0-handwrit", [
                ["sl", "sloven\u0161\u010dina"]
            ],
            ["sl"], 1
        ],
        [499, "sm-t-i0-handwrit", [
                ["sm", "Samoan"]
            ],
            ["sm"], 1
        ],
        [500, "sn-t-i0-handwrit", [
                ["sn", "chiShona"]
            ],
            ["sn"], 1
        ],
        [472, "so-t-i0-handwrit", [
                ["so", "Soomaali"]
            ],
            ["so"], 1
        ],
        [443, "sq-t-i0-handwrit", [
                ["sq", "shqip"]
            ],
            ["sq"], 1
        ],
        [444, "sr-t-i0-handwrit", [
                ["sr", "\u0441\u0440\u043f\u0441\u043a\u0438"]
            ],
            ["sr"],
            1
        ],
        [481, "su-t-i0-handwrit", [
                ["su", "Sundanese"]
            ],
            ["su"], 1
        ],
        [445, "sv-t-i0-handwrit", [
                ["sv", "svenska"]
            ],
            ["sv"], 1
        ],
        [446, "sw-t-i0-handwrit", [
                ["sw", "Kiswahili"]
            ],
            ["sw"], 1
        ],
        [473, "ta-t-i0-handwrit", [
                [D, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"]
            ],
            [D], 1
        ],
        [466, "te-t-i0-handwrit", [
                ["te", "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"]
            ],
            ["te"], 1
        ],
        [502, "tg-t-i0-handwrit", [
                ["tg", "\u0442\u043e\u04b7\u0438\u043a\u04e3"]
            ],
            ["tg"], 1
        ],
        [454, "th-t-i0-handwrit", [
                ["th", "\u0e44\u0e17\u0e22"]
            ],
            ["th"], 1
        ],
        [508, "ti-t-i0-handwrit", [
                ["ti", "\u1275\u130d\u122d\u129b"]
            ],
            ["ti"], 1
        ],
        [447, "tr-t-i0-handwrit", [
                ["tr", "T\u00fcrk\u00e7e"]
            ],
            ["tr"], 1
        ],
        [448, "uk-t-i0-handwrit", [
                ["uk", "\u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"]
            ],
            ["uk"], 1
        ],
        [486, "ur-t-i0-handwrit", [
                ["ur", "\u0627\u0631\u062f\u0648"]
            ],
            ["ur"], 1
        ],
        [503, "uz-t-i0-handwrit", [
                ["uz", "o\u2018zbek"]
            ],
            ["uz"], 1
        ],
        [449, "vi-t-i0-handwrit", [
                ["vi", "Ti\u1ebfng Vi\u1ec7t"]
            ],
            ["vi"], 1
        ],
        [482, "xh-t-i0-handwrit", [
                ["xh", "Xhosa"]
            ],
            ["xh"], 1
        ],
        [510, "yi-t-i0-handwrit", [
                ["yi", "\u05d9\u05d9\u05b4\u05d3\u05d9\u05e9"]
            ],
            ["yi"],
            1
        ],
        [450, "zh-t-i0-handwrit", [
            [E, "\u4e2d\u6587"]
        ], null, 1],
        [451, "zh-hans-t-i0-handwrit", [
                [E, "\u4e2d\u6587\uff08\u7b80\u4f53\uff09"]
            ],
            [E], 1
        ],
        [452, "zh-hant-t-i0-handwrit", [
                [F, "\u4e2d\u6587\uff08\u7e41\u9ad4\uff09"]
            ],
            [F], 1
        ],
        [475, "zh-yue-t-i0-handwrit", [
                ["zh-yue", "\u7cb5\u8a9e"]
            ],
            ["zh-yue"], 1
        ],
        [460, "zu-t-i0-handwrit", [
                ["zu", "isiZulu"]
            ],
            ["zu"], 1
        ],
        [238, "see-t-k0-und", [
                ["see", "On\u00f6dowa\u02bcga:\u02bc"]
            ],
            ["see"], 0
        ],
        [214, "ti-t-k0-und", [
                ["ti", "\u130d\u12d5\u12dd"]
            ],
            ["ti"], 0
        ],
        [215, "mr-t-k0-und", [
                ["mr", ia]
            ],
            ["mr"], 0
        ],
        [241, "mr-t-k0-devanaga", [
                ["mr", ja]
            ],
            ["mr"], 0
        ],
        [216, "ht-t-k0-und", [
                ["ht", p]
            ],
            ["ht"], 0
        ],
        [47, "pt-br-t-i0-und", [
            [A, ca]
        ], null, 38],
        [217, "nl-t-k0-intl", [
            [u, r]
        ], null, 0],
        [218, "fr-t-k0-intl", [
                [u, r]
            ],
            ["fr"], 0
        ],
        [219, "de-t-k0-intl", [
                [u, r]
            ],
            ["de"], 0
        ],
        [220, "it-t-k0-intl", [
                [u, r]
            ],
            ["it"], 0
        ],
        [221, "pt-br-t-k0-intl", [
                [u, r]
            ],
            [A], 0
        ],
        [222, "pt-pt-t-k0-intl", [
                [u, r]
            ],
            [B], 0
        ],
        [223, "es-t-k0-intl", [
                [u, r]
            ],
            ["es"], 0
        ],
        [224, "cy-t-k0-und", [
                [u, h]
            ],
            ["cy"], 0
        ],
        [225, "ga-t-k0-und", [
                [u, h]
            ],
            ["ga"], 0
        ],
        [369, "ga-t-k0-accents", [
                [u, "Irish"]
            ],
            null, 0
        ],
        [226, "id-t-k0-und", [
                [u, h]
            ],
            ["id"], 0
        ],
        [227, "jw-t-k0-und", [
                [u, h]
            ],
            ["jw"], 0
        ],
        [228, "ms-t-k0-und", [
                [u, h]
            ],
            ["ms"], 0
        ],
        [229, "sw-t-k0-und", [
                [u, h]
            ],
            ["sw"], 0
        ],
        [230, "tl-t-k0-und", [
                [u, h]
            ],
            ["tl"], 0
        ],
        [231, "my-t-k0-myansan", [
                ["my", "\u1019\u103c\u1014\u103a\u1019\u102c\u1018\u102c\u101e\u102c(\u1019\u103c\u1014\u103a\u1005\u1036)"]
            ],
            ["my"], 0
        ],
        [236, "iu-t-k0-nunavik", [
                [u, "Nunavik Inuktitut"]
            ],
            ["iu"], 0
        ],
        [237, "iu-t-k0-nunavut", [
                [u, "Nunavut Inuktitut"]
            ],
            ["iu"], 0
        ],
        [245, "iu-t-k0-inuktitu", [
                [u, "Inuktitut Unicode"]
            ],
            ["iu"], 0
        ],
        [600, "en-t-i0-voice", [
            [u, m]
        ], null, 43],
        [601, "zh-hans-t-i0-voice", [
            ["zh", "\u4e2d\u6587\uff08\u7b80\u4f53\uff09"]
        ], null, 43],
        [240, "lis-t-k0-und", [
                ["lis", "\ua4e1\ua4f2\ua4e2\ua4f4"]
            ],
            ["lis"], 0
        ],
        [493, "und-t-i0-handwrit", [
                [u, "Emoji & Symbol"]
            ],
            ["mul"], 1
        ],
        [351, "co-t-k0-accents", [
            [u, "Corsican"]
        ], null, 0],
        [352, "fy-t-k0-accents", [
            [u, "West Frisian"]
        ], null, 0],
        [353, "gd-t-k0-accents", [
            [u, "Scots Gaelic"]
        ], null, 0],
        [244, "haw-t-k0-und", [
                ["haw", ha]
            ],
            ["haw"], 0
        ],
        [354, "haw-t-k0-accents", [
            [u, "Hawaiian"]
        ], null, 0],
        [355, "lb-t-k0-accents", [
            [u, "Luxembourgish"]
        ], null, 0],
        [243, "sd-t-k0-und", [
                [u, "Sindhi"]
            ],
            ["sd"], 0
        ],
        [356, "sm-t-k0-accents", [
            [u, "Samoan"]
        ], null, 0],
        [358, "de-t-k0-accents", [
            ["de", k]
        ], null, 0],
        [359, "es-t-k0-accents", [
            ["es", "Espa\u00f1ol"]
        ], null, 0],
        [360, "fr-t-k0-accents", [
            ["fr", p]
        ], null, 0],
        [361, "it-t-k0-accents", [
            ["it", ba]
        ], null, 0],
        [362, "nl-t-k0-accents", [
            ["nl", q]
        ], null, 0],
        [363, "pl-t-k0-accents", [
            ["pl", "polski"]
        ], null, 0],
        [364, "pt-br-t-k0-accents", [
            [A, da]
        ], null, 0],
        [365, "pt-pt-t-k0-accents", [
            [B, ea]
        ], null, 0],
        [366, "tr-t-k0-f-accents", [
            ["tr", "T\u00fcrk\u00e7e - F"]
        ], null, 0],
        [367, "tr-t-k0-q-accents", [
            ["tr", "T\u00fcrk\u00e7e - Q"]
        ], null, 0],
        [368, "ku-t-k0-und", [
                ["ku", "Kurd\u00ee Bedirxan"]
            ],
            ["ku"], 0
        ],
        [56, "ko-t-i0-und", [
            ["ko", "\ud55c\uad6d\uc5b4"]
        ], null, 45],
        [58, "ja-t-i0-mozcus", [
            ["ja", "\u65e5\u672c\u8a9e\uff08US\u30ad\u30fc\u30dc\u30fc\u30c9\u7528\uff09"]
        ], null, 28],
        [57, "ja-t-i0-mozcjp", [
            ["ja", "\u65e5\u672c\u8a9e\uff08\u65e5\u672c\u8a9e\u30ad\u30fc\u30dc\u30fc\u30c9\u7528\uff09"]
        ], null, 28],
        [59, "yue-hant-t-i0-yale",
            [
                [F, "\u5ee3\u6771\u8a71"]
            ], null, 33
        ],
        [55, "th-t-i0-und", [
                ["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"]
            ],
            ["th"], 46, [18]
        ],
        [248, "osa-t-k0-und", [
                ["osa", "\ud801\udccf\ud801\udcd8\ud801\udcfb\ud801\udcd8\ud801\udcfb\ud801\udcdf \ud801\udcbb\ud801\udcdf"]
            ],
            ["osa"], 0, null, ["vkd_osa"]
        ],
        [247, "ff-t-k0-adlm", [
                ["ff_Adlm", "\ud83a\udd06\ud83a\udd35\ud83a\udd24\ud83a\udd22\ud83a\udd2a/\ud83a\udd0a\ud83a\udd35\ud83a\udd24\ud83a\udd2c\ud83a\udd35\ud83a\udd24\ud83a\udd23\ud83a\udd2b"]
            ],
            ["ff"], 0, null, ["vkd_ff"]
        ],
        [249, "ccp-t-k0-und", [
                ["ccp", "\ud804\udd0c\ud804\udd0b\ud804\udd34\ud804\udd1f\ud804\udd33\ud804\udd26"]
            ],
            ["ccp"], 0
        ],
        [251, "hi-t-k0-phone", [
            ["hi", ka]
        ], null, 0],
        [252, "mr-t-k0-phone", [
            ["mr", ka]
        ], null, 0],
        [250, "gu-t-k0-phone2", [
            ["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0(PHONETIC)"]
        ], null, 0],
        [253, "oj-t-k0-ojibwe", [
                [u, "Ojibwe Left Dot - E Finals"]
            ],
            ["oj"], 0
        ],
        [254, "one-t-k0-und", [
                ["one", "On\u028cyote\u0294a\u00b7k\u00e1\u00b7"]
            ],
            ["one"], 0
        ],
        [255, "mez-t-k0-und", [
                ["mez", "Oma\u035eeqnome"]
            ],
            ["mez"], 0
        ],
        [257,
            "rhg-rohg-t-k0-und", [
                ["rhg", "\ud803\udd0c\ud803\udd1f\ud803\udd07\ud803\udd25\ud803\udd1d\ud803\udd1a\ud803\udd12\ud803\udd19\ud803\udd1d"]
            ],
            ["rhg"], 0
        ],
        [258, "crk-t-k0-phone", [
                ["crk", "\u14c0\u1426\u1403\u152d\u140d\u140f\u1423"]
            ],
            ["crk"], 0
        ],
        [259, "myh-t-k0-und", [
                ["myh", "q\u02b7i\u00b7q\u02b7i\u00b7di\u010d\u010daq"]
            ],
            ["myh"], 0
        ]
    ], function(a) {
        var b = new Zb(a);
        if (a = Y(b, 2)) gc[a] = b, Y(Wb(b)[0], 2);
        U(Y(b, 4), function(c) {
            c == F ? c = "zh-Hant" : c == E && (c = "zh-Hans");
            Tc[c] || (Tc[c] = []);
            Tc[c].push(b)
        })
    });
    Z.prototype.get = function(a) {
        a = localStorage[String(a)];
        return void 0 !== a ? JSON.parse(a) : null
    };
    Z.prototype.set = function(a, b) {
        void 0 !== b ? localStorage[String(a)] = JSON.stringify(b) : localStorage.removeItem(String(a))
    };
    Z.g = void 0;
    Z.h = function() {
        return Z.g ? Z.g : Z.g = new Z
    };
    var cc = "google.com facebook.com youtube.com yahoo.com baidu.com wikipedia.org qq.com live.com taobao.com linkedin.com twitter.com sina.com.cn amazon.com hao123.com google.co.in blogspot.com weibo.com wordpress.com yahoo.co.jp 163.com 360.cn yandex.ru bing.com tmall.com vk.com ebay.com sohu.com google.de pinterest.com ask.com google.co.uk soso.com msn.com google.fr tumblr.com google.co.jp mail.ru instagram.com microsoft.com google.com.br google.ru xvideos.com paypal.com imdb.com apple.com google.es google.it amazon.co.jp craigslist.org neobux.com imgur.com stackoverflow.com xhamster.com google.com.mx ifeng.com google.com.hk bbc.co.uk adobe.com xinhuanet.com blogger.com fc2.com cnn.com google.ca adcash.com reddit.com go.com t.co akamaihd.net vube.com people.com.cn wordpress.org conduit.com alipay.com youku.com odnoklassniki.ru googleusercontent.com google.com.tr flickr.com aliexpress.com godaddy.com huffingtonpost.com ku6.com gmw.cn alibaba.com pornhub.com about.com amazon.de blogspot.in google.com.au ebay.de google.pl bp.blogspot.com kickass.to thepiratebay.se rakuten.co.jp cnet.com indiatimes.com xnxx.com ebay.co.uk themeforest.net aol.com amazonaws.com amazon.co.uk youporn.com uol.com.br google.com.sa dropbox.com google.com.ar redtube.com livejasmin.com secureserver.net nytimes.com slideshare.net globo.com google.com.eg pixnet.net adf.ly ameblo.jp mozilla.org netflix.com dailymotion.com vimeo.com dailymail.co.uk weather.com espn.go.com china.com google.nl booking.com google.com.pk wikimedia.org buzzfeed.com directrev.com fiverr.com livejournal.com deviantart.com google.com.tw yelp.com flipkart.com wikia.com hootsuite.com blogfa.com sogou.com etsy.com outbrain.com m2newmedia.com developunit.info livedoor.com w3schools.com forbes.com 4shared.com badoo.com sourceforge.net soundcloud.com files.wordpress.com mediafire.com theguardian.com clkmon.com archive.org torrentz.eu google.co.ve bankofamerica.com addthis.com liveinternet.ru ask.fm china.com.cn indeed.com salesforce.com foxnews.com aweber.com gameforge.com wikihow.com google.co.th google.co.za avg.com stumbleupon.com hostgator.com chase.com answers.com softonic.com google.gr skype.com sharelive.net bet365.com naver.com statcounter.com google.co.id github.com google.com.co espncricinfo.com reference.com nicovideo.jp java.com allegro.pl google.be onet.pl google.com.ua stackexchange.com spiegel.de google.com.ng google.com.vn shutterstock.com mailchimp.com tube8.com pcpop.com gamer.com.tw walmart.com wsj.com so.com tripadvisor.com goo.ne.jp wellsfargo.com 39.net zillow.com wix.com google.ro photobucket.com media.tumblr.com bild.de pandora.com wordreference.com google.se babylon.com naver.jp bleacherreport.com weebly.com thefreedictionary.com warriorforum.com mashable.com zedo.com taringa.net loading-delivery1.com popads.net ups.com blogspot.com.es google.dz jd.com it168.com google.at google.com.ph leboncoin.fr php.net businessinsider.com goodreads.com rutracker.org telegraph.co.uk rediff.com dmm.co.jp gmx.net ucoz.ru usatoday.com kaskus.co.id goal.com google.com.pe amazon.fr baomihua.com ettoday.net domaintools.com xcar.com.cn pchome.net rambler.ru ndtv.com comcast.net huanqiu.com google.ch usps.com tianya.cn hurriyet.com.tr wp.pl intuit.com quikr.com ikea.com avito.ru moz.com bitauto.com google.ae google.cl 9gag.com uploaded.net iqiyi.com delta-search.com thefreecamsecret.com fedex.com google.pt google.com.bd nbcnews.com google.com.sg web.de codecanyon.net goodgamestudios.com bitly.com hp.com ehow.com enet.com.cn milliyet.com.tr tmz.com constantcontact.com washingtonpost.com xywy.com disqus.com samsung.com chinaz.com mercadolivre.com.br onclickads.net extratorrent.cc olx.in orange.fr lpcloudsvr302.com scribd.com coccoc.com ci123.com hulu.com 4dsply.com snapdeal.com libero.it google.cz varzesh3.com nih.gov google.co.kr myntra.com free.fr meetup.com detik.com twitch.tv eazel.com accuweather.com zimbio.com adrotator.se mobile01.com infusionsoft.com speedtest.net microsoftonline.com yandex.ua clickbank.com chaturbate.com adnxs.com caijing.com.cn bluehost.com in.com xing.com reuters.com webmd.com bloomberg.com time.com marca.com americanexpress.com daum.net motherless.com mywebsearch.com gsmarena.com nba.com bestbuy.com bbc.com amazon.cn youjizz.com xuite.net kooora.com beeg.com intoday.in snapdo.com histats.com google.co.hu cj.com kwejk.pl putlocker.com hardsextube.com ebay.in zendesk.com force.com elpais.com zippyshare.com google.no hudong.com hdfcbank.com ad6media.fr google.az tagged.com google.ie jrj.com.cn douban.com ign.com techcrunch.com yesky.com kakaku.com getresponse.com groupon.com tinyurl.com seznam.cz pof.com ameba.jp feedly.com cloudfront.net cnzz.com doublepimp.com dell.com upworthy.com target.com siteadvisor.com w3.org aili.com rt.com xe.com elmundo.es list-manage.com ero-advertising.com odesk.com amazon.in ebay.com.au repubblica.it uimserv.net google.cn latimes.com t-online.de suning.com istockphoto.com doorblog.jp naukri.com viralnova.com nydailynews.com blogspot.de habrahabr.ru ebay.it qtrax.com lenta.ru zing.vn yaolan.com joomla.org mama.cn irs.gov justdial.com jimdo.com flipora.com surveymonkey.com google.dk cntv.cn doubleclick.com google.co.il gazeta.pl webmoney.ru freelancer.com drudgereport.com lenovo.com okcupid.com capitalone.com eyny.com jabong.com ck101.com issuu.com icicibank.com lady8844.com fbcdn.net blackhatworld.com match.com goo.gl quora.com xgo.com.cn life.com.tw abcnews.go.com subscene.com babytree.com informer.com retailmenot.com twoo.com sahibinden.com att.com elance.com rbc.ru google.fi nfl.com ig.com.br irctc.co.in 55bbs.com plugrush.com empowernetwork.com pch.com qvo6.com mysearchdial.com webcrawler.com 123rf.com lifehacker.com pcbaby.com.cn blogspot.ru xda-developers.com ce.cn oracle.com sberbank.ru kinopoisk.ru probux.com mercadolibre.com.ar commentcamarche.net ning.com teensdigest.com foxsports.com youm7.com exoclick.com amazon.it chip.de digg.com systweak.com typepad.com taleo.net".split(" ");
    G = jc.prototype;
    G.$ = function(a) {
        a && /^https?:\/\//.test(a.url) && a.id && chrome.tabs.sendMessage(a.id, {
            up: ac(this.g)
        })
    };
    G.aa = function(a, b, c) {
        a.gp && c({
            up: ac(this.g)
        });
        a.km && chrome.runtime.reload();
        a.up && (kc({
            active: !0
        }, a), ic(this));
        a.ua && (bc(a.ua), kc({
            active: !0,
            currentWindow: !1
        }, {
            up: a.ua
        }), ic(this));
        if (a.sq) {
            var d = this.h,
                e = a.url,
                f = a.pl,
                g = a.hd,
                n = a.fd;
            if (!g || JSON.stringify(g) === Mc) {
                d.abort();
                d.h = I(d.l, d, c);
                g = g || {};
                d.g.listen(t, d.h, !0);
                e = Ca("/request" === e ? Jc : Kc);
                e = mc.exec(ya(e));
                var xa = e[3] || "";
                f = Ba(e[1] + Ea("?", e[2] || "", f) + Ea("#", xa, void 0));
                d.g.send(ya(f), "POST", JSON.stringify(n), g)
            }
        }
        a.aq && this.h.abort();
        a.gl && chrome.tabs.executeScript(b.tab.id, {
            file: "layouts/" + a.gl + ".js"
        });
        a.gi && chrome.tabs.executeScript(b.tab.id, {
            file: "imeconfigs/" + a.gi + ".js"
        });
        return !!c
    };
    G.N = function(a, b) {
        var c = b.url;
        if (a || !b.frameId && /^https?:\/\//.test(c) && 0 != c.lastIndexOf("https://chrome.google.com/webstore", 0)) try {
            chrome.tabs.executeScript(b.tabId, {
                file: fa
            })
        } catch (d) {}
    };
    G.X = function(a) {
        var b = this;
        chrome.tabs.get(a.sender.tab.id, function(c) {
            var d = b.m,
                e = d.test;
            c = (c = c.url.match(Ob)[3] || null) ? decodeURI(c) : c;
            e.call(d, c) && lc(b, a)
        })
    };
    G.P = function(a, b) {
        a.postMessage(b)
    };
    G.Y = function(a) {
        var b = this.g.get(1) || "",
            c = this.g.get(3) || !1,
            d = this.g.get(2) || [];
        switch (a) {
            case "toggle":
                this.g.set(10, b);
                this.g.set(29, c);
                b && this.g.set(3, !c);
                break;
            case "next":
                this.g.set(10, b);
                this.g.set(29, c);
                a = R(d, b);
                this.g.set(10, b);
                a != d.length - 1 || c ? a++ : a = 0;
                (b = d[a]) && this.g.set(1, b);
                this.g.set(3, !!b);
                break;
            case "revert":
                a = this.g.get(10) || "";
                var e = this.g.get(29) || !1;
                this.g.set(10, b);
                this.g.set(29, c);
                this.g.set(1, a);
                this.g.set(3, e);
                !a || 0 <= R(d, a) || (d.push(a), this.g.set(2, d))
        }
        kc({
            active: !0
        }, {
            up: ac(this.g)
        });
        ic(this)
    };
    new jc;
}).call(this);