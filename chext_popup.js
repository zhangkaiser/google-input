(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    'use strict';
    var aa = "-t-k0-und",
        g = "Africa Latin",
        ba = "Deutsch",
        ca = "Din\u00e9 bizaad - Modern",
        h = "Edge",
        da = "English",
        ea = "Fran\u00e7ais",
        fa = "Italiano",
        ha = "Nederlands",
        ia = "Portugu\u00eas",
        ja = "Portugu\u00eas brasileiro",
        ka = "Portugu\u00eas europeu",
        m = "US International",
        la = "af-t-i0-handwrit",
        ma = "am-t-i0-handwrit",
        na = "ar-t-i0-handwrit",
        oa = "as-t-i0-handwrit",
        pa = "az-t-i0-handwrit",
        qa = "be-t-i0-handwrit",
        ra = "bg-t-i0-handwrit",
        sa = "bg-t-k0-qwerty",
        ta = "bn-t-i0-handwrit",
        va = "bn-t-und-latn-k0-und",
        wa = "bo-t-i0-handwrit",
        xa = "bs-t-i0-handwrit",
        ya = "ca-t-i0-handwrit",
        za = "ceb-t-i0-handwrit",
        Aa = "chext_inputtools_menu",
        Ba = "chr-t-und-latn-k0-und",
        n = "click",
        Ca = "co-t-i0-handwrit",
        Da = "co-t-k0-accents",
        Ea = "crk-t-k0-phone",
        Fa = "cs-t-i0-handwrit",
        Ga = "cs-t-k0-qwertz",
        Ha = "cy-t-i0-handwrit",
        Ia = "da-t-i0-handwrit",
        Ja = "de-ch-t-k0-und",
        Ka = "de-t-i0-handwrit",
        La = "de-t-k0-accents",
        Ma = "el-t-i0-handwrit",
        p = "en",
        Na = "en-t-i0-handwrit",
        Oa = "en-t-k0-dvorak",
        Pa = "en-us-t-k0-intl",
        Qa = "eo-t-i0-handwrit",
        Ra = "es-t-i0-handwrit",
        Sa = "es-t-k0-accents",
        Ta =
        "es-t-k0-und",
        Ua = "et-t-i0-handwrit",
        Va = "eu-t-i0-handwrit",
        Wa = "fa-t-i0-handwrit",
        Xa = "fi-t-i0-handwrit",
        Ya = "fil-t-i0-handwrit",
        Za = "fr-t-i0-handwrit",
        $a = "fr-t-k0-accents",
        ab = "fr-t-k0-intl",
        q = "function",
        bb = "fy-t-i0-handwrit",
        cb = "fy-t-k0-accents",
        db = "ga-t-i0-handwrit",
        eb = "ga-t-k0-accents",
        fb = "gd-t-i0-handwrit",
        gb = "gd-t-k0-accents",
        hb = "gl-t-i0-handwrit",
        ib = "gu-t-i0-handwrit",
        jb = "gu-t-k0-phone2",
        kb = "gu-t-und-latn-k0-qwerty",
        lb = "haw-t-i0-handwrit",
        mb = "haw-t-k0-accents",
        nb = "he-t-i0-handwrit",
        ob = "he-t-i0-und",
        pb = "he-t-k0-und",
        qb = "hi-t-i0-handwrit",
        rb = "hi-t-k0-qwerty",
        sb = "hmn-t-i0-handwrit",
        tb = "hr-t-i0-handwrit",
        ub = "ht-t-i0-handwrit",
        vb = "hu-t-i0-handwrit",
        wb = "hu-t-k0-101key",
        xb = "hy-hyr-t-k0-und",
        yb = "hy-hyt-t-k0-und",
        zb = "hy-t-i0-handwrit",
        r = "iPad",
        t = "iPod",
        Ab = "id-t-i0-handwrit",
        Bb = "is-t-i0-handwrit",
        Cb = "it-t-i0-handwrit",
        Db = "it-t-k0-accents",
        Eb = "ita-kd-checkbox ita-kd-menuitem-span",
        Fb = "ita-kd-menuitem",
        Gb = "iu-t-k0-inuktitu",
        Hb = "iu-t-k0-nunavik",
        Ib = "iu-t-k0-nunavut",
        Jb = "ja-hira-t-i0-und",
        Kb = "ja-t-i0-handwrit",
        Lb = "ja-t-i0-mozcjp",
        Mb = "ja-t-i0-mozcus",
        Nb = "ja-t-ja-hira-i0-und",
        Ob = "jv-t-i0-handwrit",
        Pb = "ka-t-i0-handwrit",
        Qb = "ka-t-k0-legacy",
        Rb = "ka-t-k0-und",
        Sb = "kk-t-i0-handwrit",
        Tb = "km-t-i0-handwrit",
        Ub = "kn-t-i0-handwrit",
        Vb = "kn-t-und-latn-k0-und",
        Wb = "ko-t-i0-handwrit",
        Xb = "ku-t-i0-handwrit",
        Yb = "ky-cyrl-t-k0-und",
        Zb = "ky-t-i0-handwrit",
        $b = "la-t-i0-handwrit",
        ac = "latn-002-t-k0-und",
        u = "latn_002",
        bc = "lb-t-i0-handwrit",
        cc = "lb-t-k0-accents",
        dc = "lo-t-i0-handwrit",
        ec = "lt-t-i0-handwrit",
        fc = "lv-t-i0-handwrit",
        gc = "mg-t-i0-handwrit",
        hc = "mi-t-i0-handwrit",
        ic = "mk-t-i0-handwrit",
        jc = "ml-t-i0-handwrit",
        kc = "ml-t-und-latn-k0-und",
        lc = "mn-cyrl-t-k0-und",
        mc = "mn-t-i0-handwrit",
        nc = "mni-mtei-t-k0-phone",
        oc = "mr-t-i0-handwrit",
        pc = "mr-t-k0-devanaga",
        qc = "ms-t-i0-handwrit",
        rc = "mt-t-i0-handwrit",
        sc = "mul-t-i0-handwrit",
        tc = "my-t-i0-handwrit",
        uc = "my-t-k0-myansan",
        vc = "nb-t-i0-handwrit",
        wc = "ne-t-i0-handwrit",
        xc = "ne-t-und-latn-k0-und",
        yc = "nl-t-i0-handwrit",
        zc = "nl-t-k0-accents",
        Ac = "nn-t-i0-handwrit",
        Bc = "no-t-i0-handwrit",
        Cc = "ny-t-i0-handwrit",
        v = "object",
        Dc = "oj-t-k0-ojibwe",
        Ec = "or-t-i0-handwrit",
        Fc = "or-t-und-latn-k0-und",
        Gc = "pa-guru-t-k0-und",
        Hc = "pa-guru-t-und-latn-k0-und",
        Ic = "pa-t-i0-handwrit",
        Jc = "pl-t-i0-handwrit",
        Kc = "pl-t-k0-accents",
        w = "pt-BR",
        x = "pt-PT",
        Lc = "pt-br-t-i0-handwrit",
        Mc = "pt-br-t-i0-und",
        Nc = "pt-br-t-k0-accents",
        Oc = "pt-br-t-k0-intl",
        Pc = "pt-br-t-k0-und",
        Qc = "pt-pt-t-i0-handwrit",
        Rc = "pt-pt-t-i0-und",
        Sc = "pt-pt-t-k0-accents",
        Tc = "pt-pt-t-k0-intl",
        Uc = "pt-pt-t-k0-und",
        Vc = "pt-t-i0-handwrit",
        Wc = "rhg-rohg-t-k0-und",
        Xc = "ro-t-i0-handwrit",
        Yc = "ro-t-k0-extended",
        Zc = "ro-t-k0-legacy",
        $c = "ru-t-i0-handwrit",
        ad = "ru-t-k0-aatseel",
        bd = "ru-t-k0-qwerty",
        cd = "ru-t-k0-yazhert",
        dd = "sa-t-k0-devanaga",
        ed = "sa-t-und-latn-k0-und",
        fd = "si-t-i0-handwrit",
        gd = "sk-t-i0-handwrit",
        hd = "sk-t-k0-qwerty",
        id = "sl-t-i0-handwrit",
        jd = "sm-t-i0-handwrit",
        kd = "sm-t-k0-accents",
        ld = "sn-t-i0-handwrit",
        md = "so-t-i0-handwrit",
        nd = "sq-t-i0-handwrit",
        od = "sr-cyrl-t-k0-und",
        pd = "sr-latn-t-k0-und",
        qd = "sr-t-i0-handwrit",
        y = "string",
        rd = "su-t-i0-handwrit",
        sd = "sv-t-i0-handwrit",
        td = "sw-t-i0-handwrit",
        z = "ta",
        ud = "ta-t-i0-handwrit",
        vd = "ta-t-k0-itrans",
        wd = "ta-t-k0-ta99",
        xd = "ta-t-k0-typewriter",
        yd = "ta-t-und-latn-k0-und",
        zd = "te-t-i0-handwrit",
        Ad = "te-t-und-latn-k0-und",
        Bd = "tg-t-i0-handwrit",
        Cd = "th-t-i0-handwrit",
        Dd = "th-t-k0-pattajoti",
        Ed = "th-t-k0-tis",
        Fd = "ti-t-i0-handwrit",
        Gd = "tr-t-i0-handwrit",
        Hd = "tr-t-k0-f-accents",
        Id = "tr-t-k0-lagacy",
        Jd = "tr-t-k0-legacy",
        Kd = "tr-t-k0-q-accents",
        Ld = "tr-t-k0-und",
        Md = "uk-t-i0-handwrit",
        Nd = "uk-t-k0-101key",
        Od = "und-ethi-t-k0-und",
        Pd = "und-t-i0-handwrit",
        Qd = "ur-t-i0-handwrit",
        A = "us_intl",
        Rd = "uz-cyrl-t-k0-legacy",
        Sd = "uz-cyrl-t-k0-und",
        Td = "uz-latn-t-k0-und",
        Ud = "uz-t-i0-handwrit",
        Vd = "vi-t-i0-handwrit",
        Wd = "vi-t-k0-legacy",
        Xd = "vi-t-k0-und",
        Yd = "xh-t-i0-handwrit",
        Zd = "yi-t-i0-handwrit",
        $d = "yo-ng-t-k0-und",
        ae = "yue-hant-t-i0-jyutping",
        be = "yue-hant-t-i0-und",
        ce = "yue-hant-t-i0-yale",
        B = "zh-CN",
        C = "zh-HK",
        D = "zh-TW",
        de = "zh-hans-t-i0-handwrit",
        ee = "zh-hans-t-i0-voice",
        fe = "zh-hant-t-i0-cangjie-1982",
        ge = "zh-hant-t-i0-handwrit",
        he = "zh-hant-t-i0-pinyin",
        ie = "zh-hant-t-i0-und",
        je = "zh-t-i0-handwrit",
        ke = "zh-t-i0-pinyin",
        le = "zh-t-i0-pinyin-x0-shuangpin-abc",
        me = "zh-t-i0-pinyin-x0-shuangpin-flypy",
        ne = "zh-t-i0-pinyin-x0-shuangpin-jiajia",
        oe = "zh-t-i0-pinyin-x0-shuangpin-ms",
        pe = "zh-t-i0-pinyin-x0-shuangpin-ziguang",
        qe = "zh-t-i0-pinyin-x0-shuangpin-ziranma",
        re = "zh-t-i0-wubi-1986",
        se = "zh-yue-t-i0-handwrit",
        te = "zu-t-i0-handwrit",
        ue = "\u02bb\u014clelo Hawai\u02bbi",
        ve = "\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940 (\u092b\u094b\u0928\u0947\u091f\u093f\u0915)",
        we = "\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940(INSCRIPT)",
        xe = "\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940(PHONETIC)",
        ye = function() {},
        ze = function(a) {
            var b = typeof a;
            b = b != v ? b : a ? Array.isArray(a) ? "array" : b : "null";
            return "array" == b || b == v && "number" == typeof a.length
        },
        E = function(a) {
            var b = typeof a;
            return b == v && null != a || b == q
        },
        Ae = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        Be = function(a, b, c) {
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
                return a.apply(b,
                    arguments)
            }
        },
        F = function(a, b, c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? F = Ae : F = Be;
            return F.apply(null, arguments)
        },
        G = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.u = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.ni = function(d, e, f) {
                for (var k = Array(arguments.length - 2), l = 2; l < arguments.length; l++) k[l - 2] = arguments[l];
                return b.prototype[e].apply(d, k)
            }
        },
        H = function(a) {
            if (Error.captureStackTrace) Error.captureStackTrace(this, H);
            else {
                var b = Error().stack;
                b && (this.stack = b)
            }
            a && (this.message = String(a))
        },
        Ce = function(a, b) {
            a = a.split("%s");
            for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
            H.call(this, c + a[d])
        },
        Ee = function(a, b) {
            b = De(a, b);
            var c;
            (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
            return c
        },
        Fe = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        },
        Ge = function(a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        },
        He = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        },
        J = function(a) {
            return -1 != I.indexOf(a)
        },
        Ie = function(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        },
        K = function(a, b) {
            for (var c in a)
                if (a[c] == b) return !0;
            return !1
        },
        Ke = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Je.length; f++) c = Je[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        },
        Le = function() {
            return J("Firefox") || J("FxiOS")
        },
        Me = function() {
            return (J("Chrome") || J("CriOS")) && !J(h)
        },
        Pe = function(a, b) {
            this.g = a === Ne && b || "";
            this.h = Oe
        },
        L = function(a, b) {
            this.g = b === Qe ? a : ""
        },
        Ue = function(a) {
            if (a instanceof L) return a;
            a = typeof a == v && a.o ? a.l() : String(a);
            if (Re.test(a)) a = new L(a, Qe);
            else {
                a = String(a);
                a = a.replace(/(%0A|%0D)/g, "");
                var b = a.match(Se);
                a = b && Te.test(b[1]) ? new L(a, Qe) : null
            }
            return a
        },
        M = function(a, b) {
            this.g = b === Ve ? a : ""
        },
        bf = function(a) {
            if (a instanceof L) return 'url("' + (a instanceof L && a.constructor === L ? a.g : "type_error:SafeUrl").replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
            if (a instanceof Pe) a = a instanceof Pe && a.constructor === Pe && a.h === Oe ? a.g : "type_error:Const";
            else {
                a = String(a);
                var b = a.replace(We,
                    "$1").replace(We, "$1").replace(Xe, "url");
                if (Ye.test(b)) {
                    if (b = !Ze.test(a)) {
                        for (var c = b = !0, d = 0; d < a.length; d++) {
                            var e = a.charAt(d);
                            "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                        }
                        b = b && c && $e(a)
                    }
                    a = b ? af(a) : "zClosurez"
                } else a = "zClosurez"
            }
            if (/[{;}]/.test(a)) throw new Ce("Value does not allow [{;}], got: %s.", [a]);
            return a
        },
        $e = function(a) {
            for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
                var e = a.charAt(d);
                if ("]" == e) {
                    if (b) return !1;
                    b = !0
                } else if ("[" == e) {
                    if (!b) return !1;
                    b = !1
                } else if (!b && !c.test(e)) return !1
            }
            return b
        },
        af = function(a) {
            return a.replace(Xe,
                function(b, c, d, e) {
                    var f = "";
                    d = d.replace(/^(['"])(.*)\1$/, function(k, l, ua) {
                        f = l;
                        return ua
                    });
                    b = (Ue(d) || cf).l();
                    return c + f + b + f + e
                })
        },
        N = function(a, b) {
            this.g = b === df ? a : "";
            this.o = !0
        },
        gf = function(a, b) {
            if (-1 != a.indexOf("<")) throw Error("Selector does not allow '<', got: " + a);
            var c = a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
            if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a);
            a: {
                for (var d = {
                            "(": ")",
                            "[": "]"
                        }, e = [], f =
                        0; f < c.length; f++) {
                    var k = c[f];
                    if (d[k]) e.push(d[k]);
                    else if (K(d, k) && e.pop() != k) {
                        c = !1;
                        break a
                    }
                }
                c = 0 == e.length
            }
            if (!c) throw Error("() and [] in selector must be balanced, got: " + a);
            if (!(b instanceof M)) {
                c = "";
                for (var l in b)
                    if (Object.prototype.hasOwnProperty.call(b, l)) {
                        if (!/^[-_a-zA-Z0-9]+$/.test(l)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + l);
                        d = b[l];
                        null != d && (d = Array.isArray(d) ? ef(d, bf).join(" ") : bf(d), c += l + ":" + d + ";")
                    } b = c ? new M(c, Ve) : ff
            }
            a = a + "{" + (b instanceof M && b.constructor === M ? b.g : "type_error:SafeStyle").replace(/</g,
                "\\3C ") + "}";
            return new N(a, df)
        },
        jf = function(a) {
            function b(d) {
                Array.isArray(d) ? O(d, b) : c += hf(d)
            }
            var c = "";
            O(arguments, b);
            return new N(c, df)
        },
        hf = function(a) {
            return a instanceof N && a.constructor === N ? a.g : "type_error:SafeStyleSheet"
        },
        rf = function(a) {
            kf.test(a) && (-1 != a.indexOf("&") && (a = a.replace(lf, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(mf, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(nf, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(of, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(pf, "&#39;")), -1 != a.indexOf("\x00") &&
                (a = a.replace(qf, "&#0;")));
            return a
        },
        sf = function() {
            return J("iPhone") && !J(t) && !J(r)
        },
        tf = function(a) {
            tf[" "](a);
            return a
        },
        uf = function() {
            var a = P.document;
            return a ? a.documentMode : void 0
        },
        xf = function(a) {
            return a ? new Q(vf(a)) : wf || (wf = new Q)
        },
        yf = function(a) {
            var b = document;
            return typeof a === y ? b.getElementById(a) : a
        },
        Af = function(a, b) {
            Ie(b, function(c, d) {
                c && typeof c == v && c.o && (c = c.l());
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : zf.hasOwnProperty(d) ? a.setAttribute(zf[d], c) : 0 == d.lastIndexOf("aria-",
                    0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
            })
        },
        Cf = function(a, b, c) {
            return Bf(document, arguments)
        },
        Bf = function(a, b) {
            var c = String(b[0]),
                d = b[1];
            if (!Df && d && (d.name || d.type)) {
                c = ["<", c];
                d.name && c.push(' name="', rf(d.name), '"');
                if (d.type) {
                    c.push(' type="', rf(d.type), '"');
                    var e = {};
                    Ke(e, d);
                    delete e.type;
                    d = e
                }
                c.push(">");
                c = c.join("")
            }
            c = String(c);
            "application/xhtml+xml" === a.contentType && (c = c.toLowerCase());
            c = a.createElement(c);
            d && (typeof d === y ? c.className = d : Array.isArray(d) ? c.className = d.join(" ") :
                Af(c, d));
            2 < b.length && Ef(a, c, b, 2);
            return c
        },
        Ef = function(a, b, c, d) {
            function e(l) {
                l && b.appendChild(typeof l === y ? a.createTextNode(l) : l)
            }
            for (; d < c.length; d++) {
                var f = c[d];
                if (!ze(f) || E(f) && 0 < f.nodeType) e(f);
                else {
                    a: {
                        if (f && "number" == typeof f.length) {
                            if (E(f)) {
                                var k = typeof f.item == q || typeof f.item == y;
                                break a
                            }
                            if (typeof f === q) {
                                k = typeof f.item == q;
                                break a
                            }
                        }
                        k = !1
                    }
                    O(k ? Fe(f) : f, e)
                }
            }
        },
        vf = function(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        Q = function(a) {
            this.h = a || P.document || document
        },
        Ff = function(a, b) {
            a = a.h;
            b = b && "*" != b ? String(b).toUpperCase() : "";
            a.querySelectorAll && a.querySelector && b ? b = a.querySelectorAll(b + "") : b = a.getElementsByTagName(b || "*");
            return b
        },
        Gf = function() {},
        Hf = function(a, b) {
            this.type = a;
            this.target = b;
            this.defaultPrevented = !1
        },
        Kf = function(a) {
            Hf.call(this, a ? a.type : "");
            this.relatedTarget = this.target = null;
            this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
            this.key = "";
            this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
            this.state = null;
            this.pointerId = 0;
            this.pointerType = "";
            this.h =
                null;
            if (a) {
                var b = this.type = a.type,
                    c = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
                this.target = a.target || a.srcElement;
                var d = a.relatedTarget;
                if (d) {
                    if (If) {
                        a: {
                            try {
                                tf(d.nodeName);
                                var e = !0;
                                break a
                            } catch (f) {}
                            e = !1
                        }
                        e || (d = null)
                    }
                } else "mouseover" == b ? d = a.fromElement : "mouseout" == b && (d = a.toElement);
                this.relatedTarget = d;
                c ? (this.clientX = void 0 !== c.clientX ? c.clientX : c.pageX, this.clientY = void 0 !== c.clientY ? c.clientY : c.pageY, this.screenX = c.screenX || 0, this.screenY = c.screenY || 0) : (this.clientX = void 0 !==
                    a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
                this.button = a.button;
                this.key = a.key || "";
                this.ctrlKey = a.ctrlKey;
                this.altKey = a.altKey;
                this.shiftKey = a.shiftKey;
                this.metaKey = a.metaKey;
                this.pointerId = a.pointerId || 0;
                this.pointerType = typeof a.pointerType === y ? a.pointerType : Jf[a.pointerType] || "";
                this.state = a.state;
                this.h = a;
                a.defaultPrevented && Kf.u.g.call(this)
            }
        },
        Mf = function(a, b, c, d, e) {
            this.listener = a;
            this.proxy = null;
            this.src =
                b;
            this.type = c;
            this.capture = !!d;
            this.g = e;
            this.key = ++Lf;
            this.removed = this.s = !1
        },
        Nf = function(a) {
            a.removed = !0;
            a.listener = null;
            a.proxy = null;
            a.src = null;
            a.g = null
        },
        R = function(a) {
            this.src = a;
            this.g = {};
            this.h = 0
        },
        Of = function(a, b) {
            var c = b.type;
            c in a.g && Ee(a.g[c], b) && (Nf(b), 0 == a.g[c].length && (delete a.g[c], a.h--))
        },
        Pf = function(a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
                var f = a[e];
                if (!f.removed && f.listener == b && f.capture == !!c && f.g == d) return e
            }
            return -1
        },
        S = function(a, b, c, d, e) {
            if (d && d.once) Qf(a, b, c, d, e);
            else if (Array.isArray(b))
                for (var f =
                        0; f < b.length; f++) S(a, b[f], c, d, e);
            else c = Rf(c), a && a[Sf] ? a.listen(b, c, E(d) ? !!d.capture : !!d, e) : Tf(a, b, c, !1, d, e)
        },
        Tf = function(a, b, c, d, e, f) {
            if (!b) throw Error("Invalid event type");
            var k = E(e) ? !!e.capture : !!e,
                l = Uf(a);
            l || (a[Vf] = l = new R(a));
            c = l.add(b, c, d, k, f);
            if (!c.proxy) {
                d = Wf();
                c.proxy = d;
                d.src = a;
                d.listener = c;
                if (a.addEventListener) Xf || (e = k), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
                else if (a.attachEvent) a.attachEvent(Yf(b.toString()), d);
                else if (a.addListener && a.removeListener) a.addListener(d);
                else throw Error("addEventListener and attachEvent are unavailable.");
                Zf++
            }
        },
        Wf = function() {
            function a(c) {
                return b.call(a.src, a.listener, c)
            }
            var b = $f;
            return a
        },
        Qf = function(a, b, c, d, e) {
            if (Array.isArray(b))
                for (var f = 0; f < b.length; f++) Qf(a, b[f], c, d, e);
            else c = Rf(c), a && a[Sf] ? a.g.add(String(b), c, !0, E(d) ? !!d.capture : !!d, e) : Tf(a, b, c, !0, d, e)
        },
        ag = function(a, b, c, d, e) {
            if (Array.isArray(b))
                for (var f = 0; f < b.length; f++) ag(a, b[f], c, d, e);
            else(d = E(d) ? !!d.capture : !!d, c = Rf(c), a && a[Sf]) ? a.g.remove(String(b), c, d, e) : a && (a = Uf(a)) &&
                (b = a.g[b.toString()], a = -1, b && (a = Pf(b, c, d, e)), (c = -1 < a ? b[a] : null) && bg(c))
        },
        bg = function(a) {
            if ("number" !== typeof a && a && !a.removed) {
                var b = a.src;
                if (b && b[Sf]) Of(b.g, a);
                else {
                    var c = a.type,
                        d = a.proxy;
                    b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Yf(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                    Zf--;
                    (c = Uf(b)) ? (Of(c, a), 0 == c.h && (c.src = null, b[Vf] = null)) : Nf(a)
                }
            }
        },
        Yf = function(a) {
            return a in cg ? cg[a] : cg[a] = "on" + a
        },
        $f = function(a, b) {
            if (a.removed) a = !0;
            else {
                b = new Kf(b,
                    this);
                var c = a.listener,
                    d = a.g || a.src;
                a.s && bg(a);
                a = c.call(d, b)
            }
            return a
        },
        Uf = function(a) {
            a = a[Vf];
            return a instanceof R ? a : null
        },
        Rf = function(a) {
            if (typeof a === q) return a;
            a[dg] || (a[dg] = function(b) {
                return a.handleEvent(b)
            });
            return a[dg]
        },
        eg = function() {
            this.g = new R(this)
        },
        fg = function() {},
        ig = function(a, b, c) {
            a.h = null;
            b || (b = []);
            a.pi = void 0;
            a.j = -1;
            a.g = b;
            a: {
                if (b = a.g.length) {
                    --b;
                    var d = a.g[b];
                    if (!(null === d || typeof d != v || Array.isArray(d) || gg && d instanceof Uint8Array)) {
                        a.m = b - a.j;
                        a.i = d;
                        break a
                    }
                }
                a.m = Number.MAX_VALUE
            }
            a.oi = {};
            if (c)
                for (b = 0; b < c.length; b++)
                    if (d = c[b], d < a.m) d += a.j, a.g[d] = a.g[d] || hg;
                    else {
                        var e = a.m + a.j;
                        a.g[e] || (a.i = a.g[e] = {});
                        a.i[d] = a.i[d] || hg
                    }
        },
        T = function(a, b) {
            if (b < a.m) {
                b += a.j;
                var c = a.g[b];
                return c !== hg ? c : a.g[b] = []
            }
            if (a.i) return c = a.i[b], c === hg ? a.i[b] = [] : c
        },
        jg = function(a) {
            a = T(a, 5);
            return null == a ? -1 : a
        },
        lg = function(a) {
            var b = kg;
            a.h || (a.h = {});
            if (!a.h[3]) {
                var c = T(a, 3);
                for (var d = [], e = 0; e < c.length; e++) d[e] = new b(c[e]);
                a.h[3] = d
            }
            b = a.h[3];
            b == hg && (b = a.h[3] = []);
            return b
        },
        mg = function(a) {
            if (a.h)
                for (var b in a.h) {
                    var c =
                        a.h[b];
                    if (Array.isArray(c))
                        for (var d = 0; d < c.length; d++) c[d] && mg(c[d]);
                    else c && mg(c)
                }
            return a.g
        },
        og = function(a) {
            ig(this, a, ng)
        },
        kg = function(a) {
            ig(this, a, null)
        },
        sg = function(a, b) {
            b = xf(b);
            var c = b.h;
            if (U && c.createStyleSheet) b = c.createStyleSheet(), pg(b, a);
            else {
                c = Ff(b, "HEAD")[0];
                if (!c) {
                    var d = Ff(b, "BODY")[0];
                    c = b.g("HEAD");
                    d.parentNode.insertBefore(c, d)
                }
                d = b.g("STYLE");
                if (null === qg) b: {
                    var e = P.document;
                    if ((e = e.querySelector && e.querySelector("script[nonce]")) && (e = e.nonce || e.getAttribute("nonce")) && rg.test(e)) {
                        qg =
                            e;
                        break b
                    }
                    qg = ""
                }
                e = qg;
                e && d.setAttribute("nonce", e);
                pg(d, a);
                b.j(c, d)
            }
        },
        pg = function(a, b) {
            b = hf(b);
            if (U && void 0 !== a.cssText) a.cssText = b;
            else if (P.trustedTypes)
                if ("textContent" in a) a.textContent = b;
                else if (3 == a.nodeType) a.data = String(b);
            else if (a.firstChild && 3 == a.firstChild.nodeType) {
                for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
                a.firstChild.data = String(b)
            } else {
                for (var c; c = a.firstChild;) a.removeChild(c);
                a.appendChild(vf(a).createTextNode(String(b)))
            } else a.innerHTML = b
        },
        ug = function() {
            var a = [],
                b = 0;
            Ie(tg, function(d) {
                d = jg(d);
                d > b && (b = d)
            });
            for (var c = 0; c <= b; c++) a.push(gf(".ita-icon-" + c, {
                "background-position": -(c % 10 * 50 + 14) + "px " + -(50 * Math.floor(c / 10) + 17) + "px"
            }));
            return jf(a)
        },
        vg = function(a) {
            return typeof a.className == y ? a.className : a.getAttribute && a.getAttribute("class") || ""
        },
        wg = function(a, b) {
            if (a.classList) a.classList.add(b);
            else {
                if (a.classList) var c = !a.classList.contains(b);
                else c = a.classList ? a.classList : vg(a).match(/\S+/g) || [], c = !(0 <= De(c, b));
                c && (c = vg(a), b = c + (0 < c.length ? " " + b : b), typeof a.className ==
                    y ? a.className = b : a.setAttribute && a.setAttribute("class", b))
            }
        },
        xg = function() {},
        Cg = function(a, b) {
            var c = xf(),
                d = c.g("LI", {
                    "class": Fb,
                    style: 'style="-webkit-user-select: none; "'
                }),
                e = c.g("SPAN", Eb),
                f = c.g;
            yg.ita_icon_style || (yg.ita_icon_style = !0, sg(ug(), zg.body));
            var k = tg[a];
            (k = "ita-icon-" + (k ? jg(k) : 0)) && (k = "ita-kd-img " + k);
            f = f.call(c, "SPAN", "ita-kd-menuitem-inputtool-icon ita-kd-menuitem-span " + (k || ""));
            c.i(d, e, f);
            e = Ag.test(a) ? "rtl" : "ltr";
            c.j(d, Cf("SPAN", {
                "class": "ita-kd-menuitem-inputtool-name",
                dir: e
            }, Bg[a]));
            a = document.body;
            a: {
                c = vf(a);
                if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
                    c = c.direction || c.getPropertyValue("direction") || "";
                    break a
                }
                c = ""
            }
            "rtl" == (c || (a.currentStyle ? a.currentStyle.direction : null) || a.style && a.style.direction) && wg(d, "ita-kd-rtl");
            b && wg(d, "ita-kd-selected");
            return d
        },
        Dg = function(a) {
            var b = xf(),
                c = Cf("LI", Fb),
                d = b.g("SPAN", Eb);
            a = b.g("SPAN", void 0, a);
            b.i(c, d, a);
            return c
        },
        Eg = function(a) {
            return Cf("DIV", {
                "class": "chext-popup-menu",
                id: a
            })
        },
        V = function(a) {
            return (a =
                a.exec(I)) ? a[1] : ""
        },
        Ig = function(a) {
            this.code = a;
            this.type = null;
            0 <= this.code.indexOf("-i0") ? (this.type = "im", Ge(this.code, "-handwrit") ? this.type = "hw" : Ge(this.code, "-voice") && (this.type = "vo")) : 0 <= this.code.indexOf("-k0") ? this.type = "vkd" : 0 == this.code.lastIndexOf("xkb", 0) && (this.type = "xkb");
            a = this.code.split(/-t|-i0|-k0|:/);
            "yue-hant" === a[0] && (a[0] = C);
            switch (this.code) {
                case be:
                    a[0] = C;
                    break;
                case ke:
                case re:
                    a[0] = "zh-Hans"
            }
            if ("vkd" === this.type && !Fg[this.code] && !Gg[this.code]) {
                var b = this.code.split("-t-");
                a = b[0];
                b = b[1];
                a = a.replace(/-/g, "_");
                "en_us" === a && (a = "us");
                0 <= De(Hg, a) && ("und-latn-k0-und" === b || "k0-und" === b) || "k0-und" === b || (a = b.match(/k0-(.*)/), a[1] && a[1].replace("qwerty", "phone").replace("-", "_"))
            }
        },
        Mg = function(a) {
            if (!a) return null;
            if ("nacl_mozc_jp" === a || "nacl_mozc_us" === a) a = Nb;
            0 != a.lastIndexOf("xkb", 0) && (K(Jg, a) || (a = Kg(a)), a = a.replace(/_/g, "-"), K(Jg, a) || (a = Kg(a + "-und")));
            return Lg[a] ? Lg[a] : K(Jg, a) ? (Lg[a] = new Ig(a), Lg[a]) : null
        },
        Kg = function(a) {
            if (Ng[a]) return Ng[a];
            if ("vkd_iw" === a) return pb;
            if ("im_t13n_iw" ===
                a) return ob;
            if (a === Id) return Jd;
            var b = a.split("_"),
                c = "";
            0 == a.lastIndexOf("im_t13n", 0) ? c = b[2] + "-t-i0-und" : 0 == a.lastIndexOf("vkd_", 0) && (2 === b.length ? c = b[1] + aa : 0 <= De(Hg, b[1]) ? c = "inscript" === b[2] ? b[1] + aa : b[1] + "-t-und-latn-k0-und" : (c = b[1] + "-t-k0-" + b[2], K(Jg, c) || (c = b[1] + "-" + b[2] + aa)));
            return K(Jg, c) ? c : a
        },
        Pg = function(a) {
            a = Og(a);
            var b = [];
            (a = W[a]) && O(a, function(c) {
                var d = T(c, 6);
                0 <= De(d, 15) || b.push(T(c, 2))
            });
            return b
        },
        Og = function(a) {
            a = a.replace(/_/g, "-").toLowerCase();
            if (0 == a.indexOf("zh-tw")) return "zh-Hant";
            if (0 == a.indexOf("zh-hk")) return C;
            if ("zh" == a || 0 == a.indexOf("zh-cn")) return "zh-Hans";
            if ("pt" == a) return w;
            var b = a.split(/[\-]/g),
                c = "";
            a = b[0];
            "iw" == a && (a = "he");
            W[a] && (c = a);
            for (var d = 1; d < b.length; d++) {
                var e = b[d];
                2 == e.length ? e = e.toUpperCase() : 4 == e.length && (e = e.charAt(0).toUpperCase() + e.slice(1));
                a += "-" + e;
                W[a] && (c = a)
            }
            return c
        },
        X = function() {
            this.g = Qg;
            this.get(0) || Rg(this);
            this.get(20) || (this.set(4, !0), this.set(5, !0), this.set(6, !0), this.set(7, !1), this.set(9, !0), this.set(20, !0));
            this.get(28) || this.set(28,
                1)
        },
        Sg = function(a) {
            a = a.get(2);
            var b = [];
            O(a, function(c) {
                (c = Mg(c)) && b.push(c.code)
            });
            return b
        },
        Tg = function(a) {
            var b = [1, 2, 3, 5, 4, 6, 7, 10, 29, 9, 8],
                c = {};
            b && O(b, function(d) {
                c[d] = this.get(d)
            }, a);
            return c
        },
        Ug = function(a) {
            a && Ie(a, function(b, c) {
                localStorage[String(c)] = JSON.stringify(b)
            })
        },
        Rg = function(a) {
            a.set(1, localStorage.getItem(a.g.v));
            var b = localStorage.getItem(a.g.A),
                c = [];
            b && (c = b.split(","));
            a.set(2, c);
            b = a.get(a.g.B);
            Ie(b, function(d, e) {
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
        Xg = function() {
            Vg || (Vg = new xg);
            this.g = X.h();
            Wg(this)
        },
        Wg = function(a) {
            Ag.test(window.navigator.language) && (document.body.dir = "rtl", sg(gf(".ita-kd-menuitem", {
                padding: "6px 8px 6px 38px"
            })));
            var b = Sg(a.g),
                c = a.g.get(1),
                d = a.g.get(3),
                e = yf(Aa);
            if (b && 0 < b.length) {
                var f = Eg("inputtools_menu_div");
                O(b, function(k) {
                    var l = d && c == k,
                        ua = Cg(k, l);
                    S(ua, n, F(this.h, this, k, !l));
                    f.appendChild(ua)
                }, a);
                e.appendChild(f)
            }
            b = yf("extension_div");
            c && d && (e =
                Dg(chrome.i18n.getMessage("inputtool_turnoff")), S(e, n, F(a.h, a, c, !1)), b.appendChild(e), (e = Mg(c)) && "vkd" == e.type && (e = "", e = a.g.get(7) ? chrome.i18n.getMessage("inputtool_hide_virtual_keyboard") : chrome.i18n.getMessage("inputtool_show_virtual_keyboard"), e = Dg(e), S(e, n, a.m, !1, a), b.appendChild(e)));
            e = Dg(chrome.i18n.getMessage("inputtool_extension_options"));
            S(e, n, function() {
                chrome.tabs.create({
                    url: "options.html"
                })
            });
            b.appendChild(e);
            e = Dg(chrome.i18n.getMessage("inputtool_shortcut_option"));
            S(e, n, function() {
                chrome.tabs.create({
                    url: "chrome://extensions/configureCommands"
                })
            });
            b.appendChild(e);
            chrome.tabs.detectLanguage(F(a.j, a))
        },
        P = this || self,
        rg = /^[\w+/_-]+[=]{0,2}$/,
        qg = null;
    G(H, Error);
    H.prototype.name = "CustomError";
    var wf;
    G(Ce, H);
    Ce.prototype.name = "AssertionError";
    var De = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if (typeof a === y) return typeof b !== y || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        O = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = typeof a === y ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Yg = Array.prototype.filter ? function(a, b) {
            return Array.prototype.filter.call(a,
                b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = [], e = 0, f = typeof a === y ? a.split("") : a, k = 0; k < c; k++)
                if (k in f) {
                    var l = f[k];
                    b.call(void 0, l, k, a) && (d[e++] = l)
                } return d
        },
        ef = Array.prototype.map ? function(a, b) {
            return Array.prototype.map.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = Array(c), e = typeof a === y ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        };
    var Zg = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        lf = /&/g,
        mf = /</g,
        nf = />/g,
        of = /"/g,
        pf = /'/g,
        qf = /\x00/g,
        kf = /[\x00&<>"']/;
    var I;
    a: {
        var $g = P.navigator;
        if ($g) {
            var ah = $g.userAgent;
            if (ah) {
                I = ah;
                break a
            }
        }
        I = ""
    };
    var Je = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    Pe.prototype.o = !0;
    Pe.prototype.l = function() {
        return this.g
    };
    var Oe = {},
        Ne = {};
    var Ag = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
    L.prototype.o = !0;
    L.prototype.l = function() {
        return this.g.toString()
    };
    L.prototype.toString = function() {
        return this.g.toString()
    };
    var Te = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
        Se = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        Re = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        Qe = {},
        cf = new L("about:invalid#zClosurez", Qe);
    M.prototype.o = !0;
    M.prototype.l = function() {
        return this.g
    };
    M.prototype.toString = function() {
        return this.g.toString()
    };
    var Ve = {},
        ff = new M("", Ve),
        Ye = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
        Xe = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
        We = /\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
        Ze = /\/\*/;
    var df = {};
    N.prototype.l = function() {
        return this.g
    };
    N.prototype.toString = function() {
        return this.g.toString()
    };
    tf[" "] = ye;
    var bh = J("Opera"),
        U = J("Trident") || J("MSIE"),
        ch = J(h),
        If = J("Gecko") && !(-1 != I.toLowerCase().indexOf("webkit") && !J(h)) && !(J("Trident") || J("MSIE")) && !J(h),
        dh = -1 != I.toLowerCase().indexOf("webkit") && !J(h),
        eh = J("Macintosh"),
        fh = J("Windows"),
        gh = J("Android"),
        hh = sf(),
        ih = J(r),
        jh = J(t),
        kh;
    a: {
        var lh = "",
            mh = function() {
                var a = I;
                if (If) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (ch) return /Edge\/([\d\.]+)/.exec(a);
                if (U) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (dh) return /WebKit\/(\S+)/.exec(a);
                if (bh) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();mh && (lh = mh ? mh[1] : "");
        if (U) {
            var nh = uf();
            if (null != nh && nh > parseFloat(lh)) {
                kh = String(nh);
                break a
            }
        }
        kh = lh
    }
    var oh = kh,
        ph = {},
        qh;
    if (P.document && U) {
        var rh = uf();
        qh = rh ? rh : parseInt(oh, 10) || void 0
    } else qh = void 0;
    var sh = qh;
    var Df = !U || 9 <= Number(sh),
        th;
    if (!(th = !If && !U || U && 9 <= Number(sh))) {
        var uh;
        if (uh = If) {
            var vh;
            if (Object.prototype.hasOwnProperty.call(ph, "1.9.1")) vh = ph["1.9.1"];
            else {
                for (var wh = 0, xh = Zg(String(oh)).split("."), yh = Zg("1.9.1").split("."), zh = Math.max(xh.length, yh.length), Ah = 0; 0 == wh && Ah < zh; Ah++) {
                    var Bh = xh[Ah] || "",
                        Ch = yh[Ah] || "";
                    do {
                        var Y = /(\d*)(\D*)(.*)/.exec(Bh) || ["", "", "", ""],
                            Z = /(\d*)(\D*)(.*)/.exec(Ch) || ["", "", "", ""];
                        if (0 == Y[0].length && 0 == Z[0].length) break;
                        wh = He(0 == Y[1].length ? 0 : parseInt(Y[1], 10), 0 == Z[1].length ? 0 : parseInt(Z[1], 10)) || He(0 ==
                            Y[2].length, 0 == Z[2].length) || He(Y[2], Z[2]);
                        Bh = Y[3];
                        Ch = Z[3]
                    } while (0 == wh)
                }
                vh = ph["1.9.1"] = 0 <= wh
            }
            uh = vh
        }
        th = uh
    }
    var Dh = th;
    var zf = {
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
    Q.prototype.g = function(a, b, c) {
        return Bf(this.h, arguments)
    };
    Q.prototype.j = function(a, b) {
        a.appendChild(b)
    };
    Q.prototype.i = function(a, b) {
        Ef(vf(a), a, arguments, 1)
    };
    Q.prototype.getChildren = function(a) {
        return Dh && void 0 != a.children ? a.children : Yg(a.childNodes, function(b) {
            return 1 == b.nodeType
        })
    };
    Q.prototype.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    Hf.prototype.g = function() {
        this.defaultPrevented = !0
    };
    var Xf = function() {
        if (!P.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            P.addEventListener("test", ye, b), P.removeEventListener("test", ye, b)
        } catch (c) {}
        return a
    }();
    G(Kf, Hf);
    var Jf = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    Kf.prototype.g = function() {
        Kf.u.g.call(this);
        var a = this.h;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    var Sf = "closure_listenable_" + (1E6 * Math.random() | 0);
    var Lf = 0;
    R.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [], this.h++);
        var k = Pf(a, b, d, e); - 1 < k ? (b = a[k], c || (b.s = !1)) : (b = new Mf(b, this.src, f, !!d, e), b.s = c, a.push(b));
        return b
    };
    R.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.g)) return !1;
        var e = this.g[a];
        b = Pf(e, b, c, d);
        return -1 < b ? (Nf(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.g[a], this.h--), !0) : !1
    };
    R.prototype.removeAll = function(a) {
        a = a && a.toString();
        var b = 0,
            c;
        for (c in this.g)
            if (!a || c == a) {
                for (var d = this.g[c], e = 0; e < d.length; e++) ++b, Nf(d[e]);
                delete this.g[c];
                this.h--
            } return b
    };
    var Vf = "closure_lm_" + (1E6 * Math.random() | 0),
        cg = {},
        Zf = 0,
        dg = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    G(eg, Gf);
    eg.prototype[Sf] = !0;
    eg.prototype.removeEventListener = function(a, b, c, d) {
        ag(this, a, b, c, d)
    };
    eg.prototype.listen = function(a, b, c, d) {
        return this.g.add(String(a), b, !1, c, d)
    };
    var zg = window.document,
        yg = window;
    xf(window.document);
    new eg;
    var Eh = Le(),
        Fh = sf() || J(t),
        Gh = J(r),
        Hh = J("Android") && !(Me() || Le() || J("Opera") || J("Silk")),
        Ih = Me(),
        Jh = J("Safari") && !(Me() || J("Coast") || J("Opera") || J(h) || J("Edg/") || J("OPR") || Le() || J("Silk") || J("Android")) && !(sf() || J(r) || J(t));
    var gg = typeof Uint8Array == q,
        hg = [];
    fg.prototype.toString = function() {
        return mg(this).toString()
    };
    G(og, fg);
    G(kg, fg);
    var ng = [3, 4, 6, 7];
    var tg = {},
        Bg = {},
        W = {};
    O([
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
        [4, ke, [
                [B, "\u62fc\u97f3"]
            ],
            [B], 29, null, ["im_pinyin_zh_hans"]
        ],
        [49, le, [
                [B, "\u53cc\u62fc\uff08\u667a\u80fdABC\uff09"]
            ],
            [B], 44, [18]
        ],
        [50, oe, [
                [B, "\u53cc\u62fc\uff08\u5fae\u8f6f\u65b9\u6848\uff09"]
            ],
            [B], 44, [18]
        ],
        [51, me, [
                [B, "\u53cc\u62fc\uff08\u5c0f\u9e64\uff09"]
            ],
            [B], 44, [18]
        ],
        [52, ne, [
                [B, "\u53cc\u62fc\uff08\u62fc\u97f3\u52a0\u52a0\uff09"]
            ],
            [B], 44, [18]
        ],
        [53, pe, [
                [B, "\u53cc\u62fc\uff08\u7d2b\u5149\uff09"]
            ],
            [B], 44, [18]
        ],
        [54, qe, [
                [B, "\u53cc\u62fc\uff08\u81ea\u7136\u7801\uff09"]
            ],
            [B], 44, [18]
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
            ["hi"],
            5, null, ["im_t13n_hi"]
        ],
        [9, ob, [
                ["he", "\u05e2\u05b4\u05d1\u05b0\u05e8\u05b4\u05d9\u05ea"]
            ],
            ["he"], 20, null, ["im_t13n_he", "im_t13n_iw"]
        ],
        [33, "ja-t-i0", [
            ["ja", "\u65e5\u672c\u8a9e"]
        ], null, 28],
        [10, Nb, [
                ["ja", "\u65e5\u672c\u8a9e"]
            ],
            ["ja"], 28, null, ["im_t13n_ja"]
        ],
        [11, "kn-t-i0-und", [
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
            ["mr"],
            9, null, ["im_t13n_mr"]
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
                [z, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"]
            ],
            [z], 11, null, ["im_t13n_ta"]
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
            [B, "\u4e94\u7b14"]
        ], null, 30],
        [26, re, [
                [B, "\u4e94\u7b14"]
            ],
            [B], 30, null, ["im_wubi_zh_hans"]
        ],
        [28, ie, [
                [D, "\u6ce8\u97f3"]
            ],
            [D], 31, null, ["im_zhuyin_zh_hant"]
        ],
        [32, "zh-hant-t-i0-bopo", [
            [D, "\u6ce8\u97f3"]
        ], null, 31],
        [27, he, [
                [D, "\u6f22\u8a9e\u62fc\u97f3"]
            ],
            [D], 29, null, ["im_pinyin_zh_hant"]
        ],
        [30, "vi-t-i0-und", [
                ["vi",
                    "Ti\u1ebfng Vi\u1ec7t"
                ]
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
                ["de", ba]
            ],
            ["de"], 35, [15, 18]
        ],
        [38, "es-t-i0-und",
            [
                ["es", "Espa\u00f1ol"]
            ],
            ["es"], 34, [15, 18]
        ],
        [39, "fr-t-i0-und", [
                ["fr", ea]
            ],
            ["fr"], 36, [15, 18]
        ],
        [40, "it-t-i0-und", [
                ["it", fa]
            ],
            ["it"], 39, [15, 18]
        ],
        [41, "nl-t-i0-und", [
                ["nl", ha]
            ],
            ["nl"], 40, [15, 18]
        ],
        [42, "pt-t-i0-und", [
                [w, ia]
            ],
            [w], 38, [15, 18]
        ],
        [48, Rc, [
            [x, ia]
        ], null, 38],
        [43, fe, [
                [D, "\u5009\u9821"]
            ],
            [D], 32
        ],
        [44, be, [
                [C, "\u5ee3\u6771\u8a71"]
            ],
            [C], 33
        ],
        [60, ae, [
                [C, "\u7cb5\u62fc"]
            ],
            [C], 33
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
        [103, xb, [
                ["hy", "\u0531\u0580\u0587\u0565\u056c\u0561\u0570\u0561\u0575\u0565\u0580\u0565\u0576"]
            ],
            ["hy"], 0, null, ["vkd_hy_east"]
        ],
        [104, yb, [
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
        [108, va, [
                ["bn", "\u09ac\u09be\u0982\u09b2\u09be (\u09ab\u09cb\u09a8\u09c7\u099f\u09bf\u0995)"]
            ],
            ["bn"], 0, null, ["vkd_bn_phone"]
        ],
        [109, "bs-t-k0-und", [
                ["bs", "bosanski"]
            ],
            ["bs"], 0, null, ["vkd_bs"]
        ],
        [110, Pc, [
                [w, ja]
            ],
            [w], 0, null, ["vkd_pt_br"]
        ],
        [111, "bg-t-k0-und", [
                ["bg", "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a"]
            ],
            ["bg"], 0, null, ["vkd_bg"]
        ],
        [112, sa, [
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
            ["ckb"], 0, null, ["vkd_ckb_ar"]
        ],
        [232, "ckb-t-k0-en", [
                ["ckb", "\u06a9\u0648\u0631\u062f\u06cc"]
            ],
            ["ckb"], 0, null, ["vkd_ckb_en"]
        ],
        [115, "hr-t-k0-und", [
                ["hr", "Hrvatski"]
            ],
            ["hr"], 0,
            null, ["vkd_hr"]
        ],
        [116, "cs-t-k0-und", [
                ["cs", "\u010ce\u0161tina"]
            ],
            ["cs"], 0, null, ["vkd_cs"]
        ],
        [117, Ga, [
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
            ["fa"], 0, null, ["vkd_prs"]
        ],
        [120, "nl-t-k0-und", [
                ["nl", ha]
            ],
            ["nl"], 0, null, ["vkd_nl"]
        ],
        [121, rb, [
                ["hi", ve]
            ],
            ["hi"], 0, null, ["vkd_deva_phone"]
        ],
        [122, "en-t-k0-und", [
                [p, da]
            ],
            [p], 0, null, ["vkd_en"]
        ],
        [123, "et-t-k0-und", [
                ["et", "eesti keel"]
            ],
            ["et"], 0, null, ["vkd_et"]
        ],
        [124, Od, [
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
                ["fr", ea]
            ],
            ["fr"], 0, null, ["vkd_fr"]
        ],
        [127, "gl-t-k0-und", [
                ["gl", "galego"]
            ],
            ["gl"], 0, null, ["vkd_gl"]
        ],
        [128, Rb, [
                ["ka", "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8 (\u10e5\u10ec\u10d4\u10e0\u10e2\u10e7)"]
            ],
            ["ka"], 0, null, ["vkd_ka_qwerty"]
        ],
        [129, Qb, [
                ["ka", "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8 (\u10e1\u10d0\u10d1\u10d4\u10ed\u10d3\u10d8 \u10db\u10d0\u10dc\u10e5\u10d0\u10dc\u10d0)"]
            ],
            ["ka"], 0, null, ["vkd_ka_typewriter"]
        ],
        [130, "de-t-k0-und", [
                ["de", ba]
            ],
            ["de"], 0, null, ["vkd_de"]
        ],
        [131, "el-t-k0-und", [
                ["el", "\u03b5\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"]
            ],
            ["el"], 0, null, ["vkd_el"]
        ],
        [132, "gu-t-k0-und", [
                ["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0 (INSCRIPT)"]
            ],
            ["gu"], 0, null, ["vkd_gu_inscript"]
        ],
        [133, kb, [
                ["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0 (\u0aab\u0acb\u0aa8\u0ac7\u0aa4\u0abf\u0a95)"]
            ],
            ["gu"], 0, null, ["vkd_gu_phone"]
        ],
        [134, Gc, [
                ["pa-guru", "\u0a17\u0a41\u0a30\u0a2e\u0a41\u0a16\u0a40 (INSCRIPT)"]
            ],
            ["pa"], 0, null, ["vkd_guru_inscript"]
        ],
        [135, Hc, [
                ["pa-guru", "\u0a17\u0a41\u0a30\u0a2e\u0a41\u0a16\u0a40 (\u0a2b\u0a4b\u0a28\u0a47\u0a1f\u0a3f\u0a15)"]
            ],
            ["pa"], 0, null, ["vkd_guru_phone"]
        ],
        [136, pb, [
                ["he", "\u05e2\u05b4\u05d1\u05b0\u05e8\u05b4\u05d9\u05ea"]
            ],
            ["he"], 0, null, ["vkd_he", "vkd_iw"]
        ],
        [137, "hi-t-k0-und", [
                ["hi", we]
            ],
            ["hi"], 0, null, ["vkd_hi"]
        ],
        [138, wb, [
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
                ["it",
                    fa
                ]
            ],
            ["it"], 0, null, ["vkd_it"]
        ],
        [141, "kn-t-k0-und", [
                ["kn", "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1 (INSCRIPT)"]
            ],
            ["kn"], 0, null, ["vkd_kn_inscript"]
        ],
        [142, Vb, [
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
                ["ko",
                    "\ud55c\uad6d\uc5b4"
                ]
            ],
            ["ko"], 0, [18],
            ["vkd_ko"]
        ],
        [146, Yb, [
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
        [152, kc, [
                ["ml", "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02 (\u0d2b\u0d4a\u0d23\u0d31\u0d4d\u0d31\u0d3f\u0d15\u0d4d)"]
            ],
            ["ml"], 0, null, ["vkd_ml_phone"]
        ],
        [246, nc, [
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
            ["mi"], 0,
            null, ["vkd_mi"]
        ],
        [155, lc, [
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
        [159, Fc, [
                ["or", "\u0b13\u0b21\u0b3c\u0b3f\u0b06 (\u0b2b\u0b4b\u0b28\u0b47\u0b1f\u0b3f\u0b15)"]
            ],
            ["or"], 0, null, ["vkd_or_phone"]
        ],
        [160, ac, [
                [p, g]
            ],
            ["af"], 0, null,
            ["vkd_latn_002"]
        ],
        [161, "ps-t-k0-und", [
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
        [164, Uc, [
                [x, ka]
            ],
            [x], 0, null, ["vkd_pt_pt"]
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
        [167, Zc, [
                ["ro", "rom\u00e2n\u0103 SR13392 Primary"]
            ],
            ["ro"],
            0, null, ["vkd_ro_sr13392_primary"]
        ],
        [168, Yc, [
                ["ro", "rom\u00e2n\u0103 SR13392 Secondary"]
            ],
            ["ro"], 0, null, ["vkd_ro_sr13392_secondary"]
        ],
        [169, "ru-t-k0-und", [
                ["ru", "\u0420\u0443\u0441\u0441\u043a\u0430\u044f \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430"]
            ],
            ["ru"], 0, null, ["vkd_ru"]
        ],
        [212, bd, [
                ["ru", "\u0420\u0443\u0441\u0441\u043a\u0430\u044f \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430 (\u0444\u043e\u043d\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439)"]
            ],
            ["ru"], 0
        ],
        [242, dd, [
                ["sa", we]
            ],
            ["sa"], 0
        ],
        [170, ed, [
                ["sa", "\u0938\u0902\u0938\u094d\u0915\u0943\u0924\u092e\u094d (\u092b\u094b\u0928\u0947\u091f\u093f\u0915\u094d)"]
            ],
            ["sa"], 0, null, ["vkd_sa_phone"]
        ],
        [171, od, [
                ["sr", "\u0441\u0440\u043f\u0441\u043a\u0438"]
            ],
            ["sr"], 0, null, ["vkd_sr_cyrl"]
        ],
        [172, pd, [
                ["sr", "Srpski"]
            ],
            ["sr"], 0, null, ["vkd_sr_latn"]
        ],
        [173, "si-t-k0-und", [
                ["si", "\u0dc1\u0dd4\u0daf\u0dca\u0db0 \u0dc3\u0dd2\u0d82\u0dc4\u0dbd SLS1134"]
            ],
            ["si"], 0, null, ["vkd_si"]
        ],
        [174, "sk-t-k0-und", [
                ["sk", "Slovensk\u00fd jazyk"]
            ],
            ["sk"], 0, null, ["vkd_sk"]
        ],
        [175, hd, [
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
        [178, Ta, [
                ["es", "Espa\u00f1ol"]
            ],
            ["es"], 0, null, ["vkd_es_es"]
        ],
        [179, "sv-t-k0-und", [
                ["sv", "Svenska"]
            ],
            ["sv"], 0, null, ["vkd_sv"]
        ],
        [180, Ja, [
                ["de", "Deutschsprachige Schweiz"]
            ],
            ["de"], 0, null, ["vkd_de_ch"]
        ],
        [181, wd, [
                [z, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (TAMIL99)"]
            ],
            [z], 0, null, ["vkd_ta_tamil99"]
        ],
        [182, "ta-t-k0-und", [
                [z, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (INSCRIPT)"]
            ],
            [z], 0, null, ["vkd_ta_inscript"]
        ],
        [183, yd, [
                [z, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (\u0baa\u0bcb\u0ba9\u0bc6\u0b9f\u0bbf\u0b95\u0bcd)"]
            ],
            [z], 0, null, ["vkd_ta_phone"]
        ],
        [205, xd, [
                [z, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (TYPE-WRITER)"]
            ],
            [z], 0
        ],
        [206, vd, [
                [z, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (ITRANS)"]
            ],
            [z], 0
        ],
        [184, "tt-t-k0-und", [
                ["tt", "\u0422\u0430\u0442\u0430\u0440"]
            ],
            ["tt"], 0, null, ["vkd_tt"]
        ],
        [185, "te-t-k0-und", [
                ["te",
                    "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 (INSCRIPT)"
                ]
            ],
            ["te"], 0, null, ["vkd_te_inscript"]
        ],
        [186, Ad, [
                ["te", "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 (\u0c2b\u0c4b\u0c28\u0c46\u0c1f\u0c3f\u0c15\u0c4d)"]
            ],
            ["te"], 0, null, ["vkd_te_phone"]
        ],
        [187, "th-t-k0-und", [
                ["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"]
            ],
            ["th"], 0, null, ["vkd_th"]
        ],
        [204, Dd, [
                ["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22 (Pattajoti)"]
            ],
            ["th"], 0
        ],
        [203, Ed, [
                ["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22 (TIS-820.2538)"]
            ],
            ["th"], 0
        ],
        [188,
            Jd, [
                ["tr", "T\u00fcrk\u00e7e - F"]
            ],
            ["tr"], 0, null, ["vkd_tr_f", Id]
        ],
        [189, Ld, [
                ["tr", "T\u00fcrk\u00e7e - Q"]
            ],
            ["tr"], 0, null, ["vkd_tr_q"]
        ],
        [190, "ug-t-k0-und", [
                ["ug", "\u0626\u06c7\u064a\u063a\u06c7\u0631\u0686\u06d5"]
            ],
            ["ug"], 0, null, ["vkd_ug"]
        ],
        [191, Nd, [
                ["uk", "\u0415\u043a\u0440\u0430\u043d\u043d\u0430 \u043a\u043b\u0430\u0432\u0456\u0430\u0442\u0443\u0440\u0430"]
            ],
            ["uk"], 0, null, ["vkd_uk_101"]
        ],
        [192, "ur-t-k0-und", [
                ["ur", "\u0627\u0631\u062f\u0648"]
            ],
            ["ur"], 0, null, ["vkd_ur"]
        ],
        [193, Td, [
                ["uz", "o\u2018zbek"]
            ],
            ["uz"], 0, null, ["vkd_uz_latn"]
        ],
        [194, Sd, [
                ["uz", "\u040e\u0437\u0431\u0435\u043a (\u0444\u043e\u043d\u0435\u0442\u0438\u0447\u043d\u0456)"]
            ],
            ["uz"], 0, null, ["vkd_uz_cyrl_phone"]
        ],
        [195, Rd, [
                ["uz", "\u040e\u0437\u0431\u0435\u043a (\u0420\u043e\u0441\u0456\u0439\u0441\u044c\u043a\u0430)"]
            ],
            ["uz"], 0, null, ["vkd_uz_cyrl_type"]
        ],
        [196, Xd, [
                ["vi", "Ti\u1ebfng Vi\u1ec7t TCVN 6064"]
            ],
            ["vi"], 0, null, ["vkd_vi_tcvn"]
        ],
        [197, Wd, [
                ["vi", "Ti\u1ebfng Vi\u1ec7t Telex"]
            ],
            ["vi"], 0, null, ["vkd_vi_telex"]
        ],
        [198, "vi-t-k0-viqr", [
                ["vi",
                    "Ti\u1ebfng Vi\u1ec7t VIQR"
                ]
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
        [200, Oa, [
                [p, "English Dvorak"]
            ],
            [p], 0
        ],
        [201, Ba, [
                ["chr", "\u13e3\u13b3\u13a9 \u13d7\u13a7\u13c1\u13a2\u13cd\u13d7 \u13da\u13c3\u13f4\u13ac"]
            ],
            ["chr"], 0, null, ["vkd_chr_phone"]
        ],
        [202, "my-t-k0-und", [
                ["my", "\u1019\u103c\u1014\u103a\u1019\u102c\u1018\u102c\u101e\u102c"]
            ],
            ["my"], 0, null,
            ["vkd_my"]
        ],
        [239, "tg-t-k0-und", [
                ["tg", "\u0422\u043e\u04b7\u0438\u043a"]
            ],
            ["tg"], 0, null, ["vkd_tg"]
        ],
        [5, "en-t-i0-und", [
                [p, da]
            ],
            [p], 41, [15, 18],
            ["im_t13n_en"]
        ],
        [29, Jb, [
            ["ja", "\u65e5\u672c\u8a9e"]
        ], null, -1, null, ["im_t13n_ja_hira"]],
        [45, "tr-t-i0-und", [
            ["tr", "T\u00fcrk"]
        ], null, 42],
        [207, "yi-t-k0-und", [
                ["yi", "\u05d4\u05e2\u05d1\u05e8\u05e2\u05d9\u05d9 \u05d9\u05d9\u05b4\u05d3\u05d9\u05e9 \u05e7\u05d9\u05d1\u05d0\u05b8\u05e8\u05d3"]
            ],
            ["yi"], 0
        ],
        [256, $d, [
                ["yo", "Nigerian Yoruba"]
            ],
            ["yo"], 0
        ],
        [209, "ne-t-k0-und",
            [
                ["ne", "\u0928\u0947\u092a\u093e\u0932\u0940 (\u091f\u094d\u0930\u092f\u093e\u0921\u093f\u0938\u0928\u0932)"]
            ],
            ["ne"], 0
        ],
        [210, xc, [
                ["ne", "\u0928\u0947\u092a\u093e\u0932\u0940 (\u0930\u094b\u092e\u093e\u0928\u093e\u0907\u091c\u094d\u0921)"]
            ],
            ["ne"], 0
        ],
        [211, Pa, [
                [p, m]
            ],
            ["nl"], 0
        ],
        [213, "nv-t-k0-und", [
                ["nv", ca]
            ],
            ["nv"], 0
        ],
        [234, "nv-t-k0", [
            ["nv", ca]
        ], null, 0],
        [235, "nv-t-k0-std", [
                ["nv", "Din\u00e9 bizaad - Traditional"]
            ],
            ["nv"], 0
        ],
        [401, la, [
                ["af", "Afrikaans"]
            ],
            ["af"], 1
        ],
        [506, ma, [
                ["am", "\u12a0\u121b\u122d\u129b"]
            ],
            ["am"], 1
        ],
        [464, na, [
                ["ar", "\u0627\u0644\u0639\u0631\u0628\u064a\u0629"]
            ],
            ["ar"], 1
        ],
        [507, oa, [
                ["as", "\u0985\u09b8\u09ae\u09c0\u09af\u09bc\u09be"]
            ],
            ["as"], 1
        ],
        [487, pa, [
                ["az", "az\u0259rbaycan"]
            ],
            ["az"], 1
        ],
        [402, qa, [
                ["be", "\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f"]
            ],
            ["be"], 1
        ],
        [403, ra, [
                ["bg", "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438"]
            ],
            ["bg"], 1
        ],
        [489, ta, [
                ["bn", "\u09ac\u09be\u0982\u09b2\u09be"]
            ],
            ["bn"], 1
        ],
        [509, wa, [
                ["bo", "\u0f56\u0f7c\u0f51\u0f0b\u0f66\u0f90\u0f51\u0f0b"]
            ],
            ["bo"], 1
        ],
        [468, xa, [
                ["bs", "bosanski"]
            ],
            ["bs"], 1
        ],
        [404, ya, [
                ["ca", "catal\u00e0"]
            ],
            ["ca"], 1
        ],
        [469, za, [
                ["ceb", "Cebuano"]
            ],
            ["ceb"], 1
        ],
        [494, Ca, [
                ["co", "Corsican"]
            ],
            ["co"], 1
        ],
        [405, Fa, [
                ["cs", "\u010de\u0161tina"]
            ],
            ["cs"], 1
        ],
        [406, Ha, [
                ["cy", "Cymraeg"]
            ],
            ["cy"], 1
        ],
        [407, Ia, [
                ["da", "dansk"]
            ],
            ["da"], 1
        ],
        [408, Ka, [
                ["de", ba]
            ],
            ["de"], 1
        ],
        [455, Ma, [
                ["el", "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"]
            ],
            ["el"], 1
        ],
        [409, Na, [
                [p, da]
            ],
            [p], 1
        ],
        [456, Qa, [
                ["eo", "esperanto"]
            ],
            ["eo"], 1
        ],
        [410, Ra, [
                ["es", "espa\u00f1ol"]
            ],
            ["es"], 1
        ],
        [411,
            Ua, [
                ["et", "eesti"]
            ],
            ["et"], 1
        ],
        [412, Va, [
                ["eu", "euskara"]
            ],
            ["eu"], 1
        ],
        [465, Wa, [
                ["fa", "\u0641\u0627\u0631\u0633\u06cc"]
            ],
            ["fa"], 1
        ],
        [413, Xa, [
                ["fi", "suomi"]
            ],
            ["fi"], 1
        ],
        [414, Ya, [
                ["fil", "Filipino"]
            ],
            ["fil"], 1
        ],
        [415, Za, [
                ["fr", "fran\u00e7ais"]
            ],
            ["fr"], 1
        ],
        [495, bb, [
                ["fy", "Frysk"]
            ],
            ["fy"], 1
        ],
        [416, db, [
                ["ga", "Gaeilge"]
            ],
            ["ga"], 1
        ],
        [496, fb, [
                ["gd", "G\u00e0idhlig"]
            ],
            ["gd"], 1
        ],
        [417, hb, [
                ["gl", "galego"]
            ],
            ["gl"], 1
        ],
        [462, ib, [
                ["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0"]
            ],
            ["gu"], 1
        ],
        [497, lb, [
                ["haw", ue]
            ],
            ["haw"], 1
        ],
        [457,
            nb, [
                ["he", "\u05e2\u05d1\u05e8\u05d9\u05ea"]
            ],
            ["he"], 1
        ],
        [453, qb, [
                ["hi", "\u0939\u093f\u0928\u094d\u0926\u0940"]
            ],
            ["hi"], 1
        ],
        [470, sb, [
                ["hmn", "Hmong"]
            ],
            ["hmn"], 1
        ],
        [418, tb, [
                ["hr", "hrvatski"]
            ],
            ["hr"], 1
        ],
        [419, ub, [
                ["ht", "Haitian Creole"]
            ],
            ["ht"], 1
        ],
        [420, vb, [
                ["hu", "magyar"]
            ],
            ["hu"], 1
        ],
        [504, zb, [
                ["hy", "\u0570\u0561\u0575\u0565\u0580\u0565\u0576"]
            ],
            ["hy"], 1
        ],
        [421, Ab, [
                ["id", "Indonesia"]
            ],
            ["id"], 1
        ],
        [422, Bb, [
                ["is", "\u00edslenska"]
            ],
            ["is"], 1
        ],
        [423, Cb, [
                ["it", "italiano"]
            ],
            ["it"], 1
        ],
        [424, Kb, [
                ["ja", "\u65e5\u672c\u8a9e"]
            ],
            ["ja"], 1
        ],
        [458, Ob, [
                ["jv", "Javanese"]
            ],
            ["jv"], 1
        ],
        [505, Pb, [
                ["ka", "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8"]
            ],
            ["ka"], 1
        ],
        [501, Sb, [
                ["kk", "\u049b\u0430\u0437\u0430\u049b \u0442\u0456\u043b\u0456"]
            ],
            ["kk"], 1
        ],
        [484, Tb, [
                ["km", "\u1781\u17d2\u1798\u17c2\u179a"]
            ],
            ["km"], 1
        ],
        [471, Ub, [
                ["kn", "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1"]
            ],
            ["kn"], 1
        ],
        [425, Wb, [
                ["ko", "\ud55c\uad6d\uc5b4"]
            ],
            ["ko"], 1
        ],
        [477, Xb, [
                ["ku", "kurd\u00ee"]
            ],
            ["ku"], 1
        ],
        [478, Zb, [
                ["ky", "\u043a\u044b\u0440\u0433\u044b\u0437\u0447\u0430"]
            ],
            ["ky"], 1
        ],
        [426, $b, [
                ["la",
                    "Latin"
                ]
            ],
            ["la"], 1
        ],
        [498, bc, [
                ["lb", "L\u00ebtzebuergesch"]
            ],
            ["lb"], 1
        ],
        [483, dc, [
                ["lo", "\u0ea5\u0eb2\u0ea7"]
            ],
            ["lo"], 1
        ],
        [427, ec, [
                ["lt", "lietuvi\u0173"]
            ],
            ["lt"], 1
        ],
        [428, fc, [
                ["lv", "latvie\u0161u"]
            ],
            ["lv"], 1
        ],
        [479, gc, [
                ["mg", "Malagasy"]
            ],
            ["mg"], 1
        ],
        [459, hc, [
                ["mi", "Maori"]
            ],
            ["mi"], 1
        ],
        [429, ic, [
                ["mk", "\u043c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438"]
            ],
            ["mk"], 1
        ],
        [490, jc, [
                ["ml", "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02"]
            ],
            ["ml"], 1
        ],
        [474, mc, [
                ["mn", "\u043c\u043e\u043d\u0433\u043e\u043b"]
            ],
            ["mn"], 1
        ],
        [461,
            oc, [
                ["mr", "\u092e\u0930\u093e\u0920\u0940"]
            ],
            ["mr"], 1
        ],
        [430, qc, [
                ["ms", "Melayu"]
            ],
            ["ms"], 1
        ],
        [467, rc, [
                ["mt", "Malti"]
            ],
            ["mt"], 1
        ],
        [488, sc, [
                ["mul", "Multiple languages"]
            ],
            ["mul"], 1
        ],
        [492, tc, [
                ["my", "\u1019\u103c\u1014\u103a\u1019\u102c"]
            ],
            ["my"], 1
        ],
        [431, vc, [
                ["nb", "norsk bokm\u00e5l"]
            ],
            ["nb"], 1
        ],
        [485, wc, [
                ["ne", "\u0928\u0947\u092a\u093e\u0932\u0940"]
            ],
            ["ne"], 1
        ],
        [432, yc, [
                ["nl", ha]
            ],
            ["nl"], 1
        ],
        [434, Ac, [
                ["nn", "nynorsk"]
            ],
            ["nn"], 1
        ],
        [433, Bc, [
                ["no", "norsk"]
            ],
            ["no"], 1
        ],
        [480, Cc, [
                ["ny", "Nyanja"]
            ],
            ["ny"], 1
        ],
        [476, Ec,
            [
                ["or", "\u0b13\u0b21\u0b3c\u0b3f\u0b06"]
            ],
            ["or"], 1
        ],
        [463, Ic, [
                ["pa", "\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40"]
            ],
            ["pa"], 1
        ],
        [435, Jc, [
                ["pl", "polski"]
            ],
            ["pl"], 1
        ],
        [436, Vc, [
            [w, "portugu\u00eas"]
        ], null, 1],
        [437, Lc, [
                [w, "portugu\u00eas (Brasil)"]
            ],
            [w], 1
        ],
        [438, Qc, [
                [x, "portugu\u00eas (Portugal)"]
            ],
            [x], 1
        ],
        [439, Xc, [
                ["ro", "rom\u00e2n\u0103"]
            ],
            ["ro"], 1
        ],
        [440, $c, [
                ["ru", "\u0440\u0443\u0441\u0441\u043a\u0438\u0439"]
            ],
            ["ru"], 1
        ],
        [491, fd, [
                ["si", "\u0dc3\u0dd2\u0d82\u0dc4\u0dbd"]
            ],
            ["si"], 1
        ],
        [441, gd, [
                ["sk", "Sloven\u010dina"]
            ],
            ["sk"], 1
        ],
        [442, id, [
                ["sl", "sloven\u0161\u010dina"]
            ],
            ["sl"], 1
        ],
        [499, jd, [
                ["sm", "Samoan"]
            ],
            ["sm"], 1
        ],
        [500, ld, [
                ["sn", "chiShona"]
            ],
            ["sn"], 1
        ],
        [472, md, [
                ["so", "Soomaali"]
            ],
            ["so"], 1
        ],
        [443, nd, [
                ["sq", "shqip"]
            ],
            ["sq"], 1
        ],
        [444, qd, [
                ["sr", "\u0441\u0440\u043f\u0441\u043a\u0438"]
            ],
            ["sr"], 1
        ],
        [481, rd, [
                ["su", "Sundanese"]
            ],
            ["su"], 1
        ],
        [445, sd, [
                ["sv", "svenska"]
            ],
            ["sv"], 1
        ],
        [446, td, [
                ["sw", "Kiswahili"]
            ],
            ["sw"], 1
        ],
        [473, ud, [
                [z, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"]
            ],
            [z], 1
        ],
        [466, zd, [
                ["te", "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"]
            ],
            ["te"],
            1
        ],
        [502, Bd, [
                ["tg", "\u0442\u043e\u04b7\u0438\u043a\u04e3"]
            ],
            ["tg"], 1
        ],
        [454, Cd, [
                ["th", "\u0e44\u0e17\u0e22"]
            ],
            ["th"], 1
        ],
        [508, Fd, [
                ["ti", "\u1275\u130d\u122d\u129b"]
            ],
            ["ti"], 1
        ],
        [447, Gd, [
                ["tr", "T\u00fcrk\u00e7e"]
            ],
            ["tr"], 1
        ],
        [448, Md, [
                ["uk", "\u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"]
            ],
            ["uk"], 1
        ],
        [486, Qd, [
                ["ur", "\u0627\u0631\u062f\u0648"]
            ],
            ["ur"], 1
        ],
        [503, Ud, [
                ["uz", "o\u2018zbek"]
            ],
            ["uz"], 1
        ],
        [449, Vd, [
                ["vi", "Ti\u1ebfng Vi\u1ec7t"]
            ],
            ["vi"], 1
        ],
        [482, Yd, [
                ["xh", "Xhosa"]
            ],
            ["xh"], 1
        ],
        [510, Zd, [
                ["yi",
                    "\u05d9\u05d9\u05b4\u05d3\u05d9\u05e9"
                ]
            ],
            ["yi"], 1
        ],
        [450, je, [
            [B, "\u4e2d\u6587"]
        ], null, 1],
        [451, de, [
                [B, "\u4e2d\u6587\uff08\u7b80\u4f53\uff09"]
            ],
            [B], 1
        ],
        [452, ge, [
                [D, "\u4e2d\u6587\uff08\u7e41\u9ad4\uff09"]
            ],
            [D], 1
        ],
        [475, se, [
                ["zh-yue", "\u7cb5\u8a9e"]
            ],
            ["zh-yue"], 1
        ],
        [460, te, [
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
                ["mr", ve]
            ],
            ["mr"], 0
        ],
        [241, pc, [
                ["mr", we]
            ],
            ["mr"], 0
        ],
        [216,
            "ht-t-k0-und", [
                ["ht", ea]
            ],
            ["ht"], 0
        ],
        [47, Mc, [
            [w, ia]
        ], null, 38],
        [217, "nl-t-k0-intl", [
            [p, m]
        ], null, 0],
        [218, ab, [
                [p, m]
            ],
            ["fr"], 0
        ],
        [219, "de-t-k0-intl", [
                [p, m]
            ],
            ["de"], 0
        ],
        [220, "it-t-k0-intl", [
                [p, m]
            ],
            ["it"], 0
        ],
        [221, Oc, [
                [p, m]
            ],
            [w], 0
        ],
        [222, Tc, [
                [p, m]
            ],
            [x], 0
        ],
        [223, "es-t-k0-intl", [
                [p, m]
            ],
            ["es"], 0
        ],
        [224, "cy-t-k0-und", [
                [p, g]
            ],
            ["cy"], 0
        ],
        [225, "ga-t-k0-und", [
                [p, g]
            ],
            ["ga"], 0
        ],
        [369, eb, [
            [p, "Irish"]
        ], null, 0],
        [226, "id-t-k0-und", [
                [p, g]
            ],
            ["id"], 0
        ],
        [227, "jw-t-k0-und", [
                [p, g]
            ],
            ["jw"], 0
        ],
        [228, "ms-t-k0-und", [
                [p, g]
            ],
            ["ms"], 0
        ],
        [229,
            "sw-t-k0-und", [
                [p, g]
            ],
            ["sw"], 0
        ],
        [230, "tl-t-k0-und", [
                [p, g]
            ],
            ["tl"], 0
        ],
        [231, uc, [
                ["my", "\u1019\u103c\u1014\u103a\u1019\u102c\u1018\u102c\u101e\u102c(\u1019\u103c\u1014\u103a\u1005\u1036)"]
            ],
            ["my"], 0
        ],
        [236, Hb, [
                [p, "Nunavik Inuktitut"]
            ],
            ["iu"], 0
        ],
        [237, Ib, [
                [p, "Nunavut Inuktitut"]
            ],
            ["iu"], 0
        ],
        [245, Gb, [
                [p, "Inuktitut Unicode"]
            ],
            ["iu"], 0
        ],
        [600, "en-t-i0-voice", [
            [p, da]
        ], null, 43],
        [601, ee, [
            ["zh", "\u4e2d\u6587\uff08\u7b80\u4f53\uff09"]
        ], null, 43],
        [240, "lis-t-k0-und", [
                ["lis", "\ua4e1\ua4f2\ua4e2\ua4f4"]
            ],
            ["lis"], 0
        ],
        [493, Pd, [
                [p, "Emoji & Symbol"]
            ],
            ["mul"], 1
        ],
        [351, Da, [
            [p, "Corsican"]
        ], null, 0],
        [352, cb, [
            [p, "West Frisian"]
        ], null, 0],
        [353, gb, [
            [p, "Scots Gaelic"]
        ], null, 0],
        [244, "haw-t-k0-und", [
                ["haw", ue]
            ],
            ["haw"], 0
        ],
        [354, mb, [
            [p, "Hawaiian"]
        ], null, 0],
        [355, cc, [
            [p, "Luxembourgish"]
        ], null, 0],
        [243, "sd-t-k0-und", [
                [p, "Sindhi"]
            ],
            ["sd"], 0
        ],
        [356, kd, [
            [p, "Samoan"]
        ], null, 0],
        [358, La, [
            ["de", ba]
        ], null, 0],
        [359, Sa, [
            ["es", "Espa\u00f1ol"]
        ], null, 0],
        [360, $a, [
            ["fr", ea]
        ], null, 0],
        [361, Db, [
            ["it", fa]
        ], null, 0],
        [362, zc, [
            ["nl", ha]
        ], null, 0],
        [363, Kc, [
            ["pl",
                "polski"
            ]
        ], null, 0],
        [364, Nc, [
            [w, ja]
        ], null, 0],
        [365, Sc, [
            [x, ka]
        ], null, 0],
        [366, Hd, [
            ["tr", "T\u00fcrk\u00e7e - F"]
        ], null, 0],
        [367, Kd, [
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
        [58, Mb, [
            ["ja", "\u65e5\u672c\u8a9e\uff08US\u30ad\u30fc\u30dc\u30fc\u30c9\u7528\uff09"]
        ], null, 28],
        [57, Lb, [
            ["ja", "\u65e5\u672c\u8a9e\uff08\u65e5\u672c\u8a9e\u30ad\u30fc\u30dc\u30fc\u30c9\u7528\uff09"]
        ], null, 28],
        [59, ce, [
            [D,
                "\u5ee3\u6771\u8a71"
            ]
        ], null, 33],
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
        [249,
            "ccp-t-k0-und", [
                ["ccp", "\ud804\udd0c\ud804\udd0b\ud804\udd34\ud804\udd1f\ud804\udd33\ud804\udd26"]
            ],
            ["ccp"], 0
        ],
        [251, "hi-t-k0-phone", [
            ["hi", xe]
        ], null, 0],
        [252, "mr-t-k0-phone", [
            ["mr", xe]
        ], null, 0],
        [250, jb, [
            ["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0(PHONETIC)"]
        ], null, 0],
        [253, Dc, [
                [p, "Ojibwe Left Dot - E Finals"]
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
        [257, Wc, [
                ["rhg", "\ud803\udd0c\ud803\udd1f\ud803\udd07\ud803\udd25\ud803\udd1d\ud803\udd1a\ud803\udd12\ud803\udd19\ud803\udd1d"]
            ],
            ["rhg"], 0
        ],
        [258, Ea, [
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
        var b = new og(a);
        if (a = T(b, 2)) {
            tg[a] = b;
            var c = T(lg(b)[0], 2);
            c && (Bg[a] = c)
        }
        O(T(b, 4), function(d) {
            d == D ? d = "zh-Hant" : d == B && (d = "zh-Hans");
            W[d] || (W[d] = []);
            W[d].push(b)
        })
    });
    var Vg = null;
    var Qg = {
        C: "aq",
        D: "ai",
        F: "ra",
        G: "ds",
        H: "dr",
        K: "fd",
        L: "gi",
        M: "gl",
        N: "gp",
        Ub: "hd",
        Eg: "pl",
        Fg: "re",
        Gg: "ri",
        Hg: "sq",
        Ig: "si",
        Jg: "ss",
        SUCCESS: "su",
        Lg: "ui",
        Mg: "ua",
        Ng: "up",
        URL: "url",
        A: "input_tools",
        v: "current_input",
        B: "current_input_state",
        Kg: "tvk",
        Cg: "GOOGLE_ITA_KD",
        J: "ft",
        Og: "ut",
        Dg: "km"
    };
    (function() {
        if (fh) {
            var a = /Windows NT ([0-9.]+)/;
            return (a = a.exec(I)) ? a[1] : "0"
        }
        return eh ? (a = /1[0|1][_.][0-9_.]+/, (a = a.exec(I)) ? a[0].replace(/_/g, ".") : "10") : gh ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(I)) ? a[1] : "") : hh || ih || jh ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(I)) ? a[1].replace(/_/g, ".") : "") : ""
    })();
    (function() {
        if (Eh) return V(/Firefox\/([0-9.]+)/);
        if (U || ch || bh) return oh;
        if (Ih) return sf() || J(r) || J(t) ? V(/CriOS\/([0-9.]+)/) : V(/Chrome\/([0-9.]+)/);
        if (Jh && !(sf() || J(r) || J(t))) return V(/Version\/([0-9.]+)/);
        if (Fh || Gh) {
            var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(I);
            if (a) return a[1] + "." + a[2]
        } else if (Hh) return (a = V(/Android\s+([0-9.]+)/)) ? a : V(/Version\/([0-9.]+)/);
        return ""
    })();
    var Jg = {
        Vb: "zh-hant-t-i0-array-1992",
        Wb: "zh-hans-t-i0-cangjie-1982",
        Xb: fe,
        Yb: "zh-hans-t-i0-cangjie-1987",
        Zb: "zh-hant-t-i0-cangjie-1987",
        $b: "zh-hant-t-i0-cangjie-1987-x-m0-simplified",
        ac: be,
        bc: ae,
        cc: ce,
        dc: "zh-hant-t-i0-dayi-1988",
        fc: ke,
        hc: he,
        ec: "ko-t-i0-und",
        ic: le,
        jc: me,
        kc: ne,
        lc: oe,
        mc: pe,
        nc: qe,
        oc: "am-t-i0-und",
        pc: "ar-t-i0-und",
        qc: "be-t-i0-und",
        rc: "bn-t-i0-und",
        sc: "bg-t-i0-und",
        tc: "nl-t-i0-und",
        uc: "en-t-i0-und",
        vc: "fr-t-i0-und",
        wc: "de-t-i0-und",
        xc: "el-t-i0-und",
        yc: "gu-t-i0-und",
        zc: ob,
        Ac: "hi-t-i0-und",
        Bc: Jb,
        Cc: "it-t-i0-und",
        Dc: Nb,
        Fc: Mb,
        Ec: Lb,
        Gc: "kn-t-i0-und",
        Hc: "ml-t-i0-und",
        Ic: "mr-t-i0-und",
        Jc: "ne-t-i0-und",
        Kc: "or-t-i0-und",
        Lc: "fa-t-i0-und",
        Mc: "pl-t-i0-und",
        Nc: "pt-t-i0-und",
        Oc: Mc,
        Pc: Rc,
        Qc: "pa-t-i0-und",
        Rc: "ru-t-i0-und",
        Sc: "sa-t-i0-und",
        Tc: "sr-t-i0-und",
        Uc: "si-t-i0-und",
        Vc: "es-t-i0-und",
        Wc: "ta-t-i0-und",
        Xc: "te-t-i0-und",
        Yc: "th-t-i0-und",
        Zc: "ti-t-i0-und",
        $c: "tr-t-i0-und",
        ad: "uk-t-i0-und",
        bd: "ur-t-i0-und",
        cd: "vi-t-i0-und",
        dd: re,
        ed: ie,
        fd: "zh-hant-t-i0-bopomofo",
        gd: "sq-t-k0-und",
        hd: "ar-t-k0-und",
        jd: xb,
        kd: yb,
        ld: "eu-t-k0-und",
        md: "be-t-k0-und",
        nd: "bn-t-k0-und",
        od: va,
        pd: "bs-t-k0-und",
        qd: Pc,
        rd: "bg-t-k0-und",
        sd: sa,
        td: "ca-t-k0-und",
        ud: "ccp-t-k0-und",
        vd: "chr-t-k0-und",
        wd: Ba,
        yd: "hr-t-k0-und",
        zd: "cs-t-k0-und",
        Ad: Ga,
        Bd: "da-t-k0-und",
        Cd: "prs-t-k0-und",
        Dd: rb,
        Ed: "nl-t-k0-und",
        Fd: "nl-t-k0-intl",
        Gd: "dz-t-k0-und",
        Hd: "en-t-k0-und",
        Id: Oa,
        Jd: "et-t-k0-und",
        Kd: Od,
        ig: "ti-ethi-t-k0-und",
        Ld: "fi-t-k0-und",
        Md: "fr-t-k0-und",
        Od: ab,
        Pd: "ff-t-k0-adlm",
        Qd: "gl-t-k0-und",
        Sd: Rb,
        Td: Qb,
        Ud: "de-t-k0-und",
        Vd: "de-t-k0-intl",
        Wd: "el-t-k0-und",
        Yd: "gu-t-k0-und",
        Zd: kb,
        Xd: jb,
        $d: Gc,
        ae: Hc,
        ce: "haw-t-k0-und",
        be: "ht-t-k0-und",
        ee: pb,
        fe: "hi-t-k0-und",
        ge: "hi-t-k0-phone",
        he: wb,
        ie: "is-t-k0-und",
        je: "id-t-k0-und",
        ke: Gb,
        le: Hb,
        me: Ib,
        ne: "ga-t-k0-und",
        oe: eb,
        pe: "it-t-k0-und",
        re: "it-t-k0-intl",
        se: "jw-t-k0-und",
        te: "kn-t-k0-und",
        ue: Vb,
        ve: "kk-t-k0-und",
        we: "km-t-k0-und",
        xe: "ko-t-k0-und",
        ye: "ku-t-k0-und",
        ze: Yb,
        Ae: "lo-t-k0-und",
        Be: "lv-t-k0-und",
        Ce: "lis-t-k0-und",
        De: "lt-t-k0-und",
        Ee: "mk-t-k0-und",
        Fe: "myh-t-k0-und",
        Ge: "ms-t-k0-und",
        He: "ml-t-k0-und",
        Ie: kc,
        Je: "mt-t-k0-und",
        Ke: "mi-t-k0-und",
        Le: "mr-t-k0-und",
        Me: pc,
        Ne: "mr-t-k0-phone",
        Oe: nc,
        Pe: "mez-t-k0-und",
        Qe: lc,
        Re: "srp-t-k0-und",
        Se: "my-t-k0-und",
        Te: uc,
        Ue: "nv-t-k0-und",
        Ve: "nv-t-k0-std",
        We: "ne-t-k0-und",
        Xe: xc,
        Ze: "no-t-k0-und",
        af: "one-t-k0-und",
        bf: "or-t-k0-und",
        cf: Fc,
        df: "osa-t-k0-und",
        ef: ac,
        ff: "ps-t-k0-und",
        gf: "fa-t-k0-und",
        hf: Ea,
        jf: "pl-t-k0-und",
        lf: Uc,
        nf: Oc,
        qf: Tc,
        rf: Wc,
        sf: "rom-t-k0-und",
        tf: "ro-t-k0-und",
        uf: Zc,
        vf: Yc,
        wf: "ru-t-k0-und",
        xf: bd,
        yf: ad,
        zf: cd,
        Cf: ed,
        Bf: dd,
        Ef: "see-t-k0-und",
        Ff: od,
        Gf: pd,
        Hf: "sd-t-k0-und",
        If: "si-t-k0-und",
        Jf: "sk-t-k0-und",
        Kf: hd,
        Lf: "sl-t-k0-und",
        Mf: "ckb-t-k0-ar",
        Nf: "ckb-t-k0-en",
        Of: "uzs-t-k0-und",
        Pf: Ta,
        Rf: "es-t-k0-intl",
        Sf: "sw-t-k0-und",
        Tf: "sv-t-k0-und",
        Uf: Ja,
        Vf: "tl-t-k0-und",
        Wf: "tg-t-k0-und",
        Xf: wd,
        Yf: "ta-t-k0-und",
        Zf: vd,
        $f: yd,
        ag: xd,
        bg: "tt-t-k0-und",
        cg: "te-t-k0-und",
        dg: Ad,
        eg: "th-t-k0-und",
        fg: Dd,
        gg: Ed,
        hg: "ti-t-k0-und",
        jg: Jd,
        lg: Ld,
        ng: "ug-t-k0-und",
        og: Nd,
        pg: "ur-t-k0-und",
        qg: Pa,
        rg: Sd,
        sg: Rd,
        tg: Td,
        ug: Xd,
        vg: Wd,
        wg: "vi-t-k0-viqr",
        xg: "vi-t-k0-vni",
        yg: "cy-t-k0-und",
        Ag: "yi-t-k0-und",
        Ye: $d,
        $e: Dc,
        Rd: La,
        Qf: Sa,
        Nd: $a,
        qe: Db,
        I: zc,
        kf: Kc,
        mf: Nc,
        pf: Sc,
        kg: Hd,
        mg: Kd,
        xd: Da,
        de: mb,
        Af: kd,
        Df: gb,
        zg: cb,
        Bg: cc,
        O: la,
        P: nd,
        R: ma,
        S: na,
        T: zb,
        U: oa,
        V: pa,
        W: Va,
        X: qa,
        Y: ta,
        Z: xa,
        $: ra,
        aa: tc,
        ba: se,
        ca: ya,
        da: za,
        ea: je,
        fa: de,
        ga: ge,
        ha: Ca,
        ia: tb,
        ja: Fa,
        ka: Ia,
        la: yc,
        ma: Na,
        na: Qa,
        oa: Ua,
        pa: Ya,
        qa: Xa,
        ra: Za,
        sa: hb,
        ta: Pb,
        ua: Ka,
        va: Ma,
        wa: ib,
        xa: ub,
        ya: lb,
        za: nb,
        Aa: qb,
        Ba: sb,
        Ca: vb,
        Da: Bb,
        Ea: Ab,
        Fa: db,
        Ga: Cb,
        Ha: Kb,
        Ia: Ob,
        Ja: Ub,
        Ka: Sb,
        La: Tb,
        Ma: Wb,
        Na: Xb,
        Oa: Zb,
        Pa: dc,
        Qa: $b,
        Ra: fc,
        Sa: ec,
        Ta: bc,
        Ua: ic,
        Va: gc,
        Wa: qc,
        Xa: jc,
        Ya: rc,
        Za: hc,
        $a: oc,
        ab: mc,
        bb: sc,
        cb: wc,
        eb: Bc,
        fb: vc,
        gb: Ac,
        hb: Cc,
        ib: Ec,
        jb: Wa,
        kb: Jc,
        lb: Vc,
        mb: Lc,
        nb: Qc,
        ob: Ic,
        pb: Xc,
        qb: $c,
        rb: jd,
        sb: fb,
        tb: qd,
        ub: ld,
        vb: fd,
        wb: gd,
        xb: id,
        yb: md,
        zb: Ra,
        Ab: rd,
        Bb: td,
        Cb: sd,
        Db: Bd,
        Eb: ud,
        Fb: zd,
        Gb: Cd,
        Hb: wa,
        Ib: Fd,
        Jb: Gd,
        Kb: Md,
        Mb: Qd,
        Nb: Ud,
        Ob: Vd,
        Pb: Ha,
        Qb: bb,
        Rb: Yd,
        Sb: Zd,
        Tb: te,
        Lb: Pd,
        Rg: "en-t-i0-voice",
        Pg: ee,
        Qg: "zh-hant-t-i0-voice",
        Sg: "xkb:am:phonetic:arm",
        Tg: "xkb:be::fra",
        Ug: "xkb:be::ger",
        Vg: "xkb:be::nld",
        Wg: "xkb:bg::bul",
        Xg: "xkb:bg:phonetic:bul",
        Yg: "xkb:br::por",
        Zg: "xkb:by::bel",
        ah: "xkb:ca::fra",
        $g: "xkb:ca:eng:eng",
        bh: "xkb:ca:multix:fra",
        eh: "xkb:ch::ger",
        dh: "xkb:ch:fr:fra",
        fh: "xkb:cz::cze",
        gh: "xkb:cz:qwerty:cze",
        hh: "xkb:de::ger",
        ih: "xkb:de:neo:ger",
        jh: "xkb:dk::dan",
        kh: "xkb:ee::est",
        mh: "xkb:es::spa",
        lh: "xkb:es:cat:cat",
        oh: "xkb:fo::fao",
        nh: "xkb:fi::fin",
        ph: "xkb:fr:bepo:fra",
        qh: "xkb:fr::fra",
        rh: "xkb:gb:dvorak:eng",
        sh: "xkb:gb:extd:eng",
        th: "xkb:ge::geo",
        uh: "xkb:gr::gre",
        vh: "xkb:hr::scr",
        wh: "xkb:hu::hun",
        xh: "xkb:hu:qwerty:hun",
        yh: "xkb:ie::ga",
        zh: "xkb:il::heb",
        Ah: "xkb:is::ice",
        Bh: "xkb:it::ita",
        Ch: "xkb:jp::jpn",
        Dh: "xkb:kz::kaz",
        Eh: "xkb:latam::spa",
        Fh: "xkb:lt::lit",
        Gh: "xkb:lv:apostrophe:lav",
        Ih: "xkb:mn::mon",
        Hh: "xkb:mk::mkd",
        Jh: "xkb:mt::mlt",
        Kh: "xkb:no::nob",
        Lh: "xkb:pl::pol",
        Mh: "xkb:pt::por",
        Nh: "xkb:ro::rum",
        Oh: "xkb:ro:std:rum",
        Ph: "xkb:rs::srp",
        Rh: "xkb:ru::rus",
        Qh: "xkb:ru:phonetic:rus",
        Sh: "xkb:se::swe",
        Th: "xkb:si::slv",
        Uh: "xkb:sk::slo",
        Wh: "xkb:tr::tur",
        Vh: "xkb:tr:f:tur",
        Xh: "xkb:ua::ukr",
        bi: "xkb:us::eng",
        ci: "xkb:us::fil",
        di: "xkb:us::ind",
        ki: "xkb:us::msa",
        Yh: "xkb:us:altgr-intl:eng",
        Zh: "xkb:us:colemak:eng",
        $h: "xkb:us:dvorak:eng",
        ai: "xkb:us:dvp:eng",
        ei: "xkb:us:intl:eng",
        fi: "xkb:us:intl:nld",
        ji: "xkb:us:intl:por",
        gi: "xkb:us:intl_pc:eng",
        hi: "xkb:us:intl_pc:nld",
        ii: "xkb:us:intl_pc:por",
        mi: "xkb:us:workman-intl:eng",
        li: "xkb:us:workman:eng"
    };
    Ig.prototype.toString = function() {
        return this.code
    };
    var Lg = {},
        Hg = ["bn", "gu", "pa", "kn", "ml", "or", "sa", z, "te", "ne"],
        Ng = {
            im_pinyin_zh_hans: ke,
            im_pinyin_zh_hant: he,
            im_t13n_ja: Nb,
            "im_t13n_ja-Hira": Jb,
            im_wubi_zh_hans: re,
            im_zhuyin_zh_hant: ie,
            vkd_bg_phone: sa,
            vkd_chr_phone: Ba,
            vkd_cs_qwertz: Ga,
            vkd_deva_phone: rb,
            vkd_en_dvorak: Oa,
            vkd_es_es: Ta,
            vkd_ethi: Od,
            vkd_gu_phone: kb,
            vkd_guru_inscript: Gc,
            vkd_guru_phone: Hc,
            vkd_hu_101: wb,
            vkd_hy_east: xb,
            vkd_hy_west: yb,
            vkd_ka_qwerty: Rb,
            vkd_ka_typewriter: Qb,
            vkd_ro_sr13392_primary: Zc,
            vkd_ro_sr13392_secondary: Yc,
            vkd_ru_phone: bd,
            vkd_ru_phone_aatseel: ad,
            vkd_ru_phone_yazhert: cd,
            vkd_sk_qwerty: hd,
            vkd_ta_itrans: vd,
            vkd_ta_tamil99: wd,
            vkd_ta_typewriter: xd,
            vkd_th_pattajoti: Dd,
            vkd_th_tis: Ed,
            vkd_tr_f: Jd,
            vkd_tr_q: Ld,
            vkd_uk_101: Nd,
            vkd_us_intl: ab,
            vkd_uz_cyrl_phone: Sd,
            vkd_uz_cyrl_type: Rd,
            vkd_vi_tcvn: Xd,
            vkd_vi_telex: Wd
        },
        Kh = {},
        Lh;
    for (Lh in Ng) Kh[Ng[Lh]] = Lh;
    var Gg = Kh,
        Fg = {
            "nl-t-k0-intl": A,
            "fr-t-k0-intl": A,
            "de-t-k0-intl": A,
            "ht-t-k0-und": "fr",
            "id-t-k0-und": u,
            "ga-t-k0-und": u,
            "it-t-k0-intl": A,
            "jw-t-k0-und": u,
            "mr-t-k0-und": "deva_phone",
            "mr-t-k0-devanaga": "hi",
            "ms-t-k0-und": u,
            "pt-br-t-k0-intl": A,
            "pt-pt-t-k0-intl": A,
            "sa-t-k0-devanaga": "hi",
            "es-t-k0-intl": A,
            "sw-t-k0-und": u,
            "tl-t-k0-und": u,
            "ti-t-k0-und": "ethi",
            "cy-t-k0-und": u
        };
    X.prototype.get = function(a) {
        a = localStorage[String(a)];
        return void 0 !== a ? JSON.parse(a) : null
    };
    X.prototype.set = function(a, b) {
        void 0 !== b ? localStorage[String(a)] = JSON.stringify(b) : localStorage.removeItem(String(a))
    };
    X.g = void 0;
    X.h = function() {
        return X.g ? X.g : X.g = new X
    };
    Xg.prototype.j = function(a) {
        if (!/^en/.test(a)) {
            var b = Sg(this.g),
                c = Pg(a);
            O(b, function(e) {
                Ee(c, e)
            });
            if (0 != c.length) {
                a = yf(Aa);
                b = yf("turnoff_div");
                var d = Eg("onetime_div");
                O(c, function(e) {
                    var f = Cg(e, !1);
                    S(f, n, F(this.i, this, e));
                    d.appendChild(f)
                }, this);
                b ? b.parentNode && b.parentNode.insertBefore(d, b) : a.appendChild(d)
            }
        }
    };
    Xg.prototype.i = function(a) {
        var b = this.g,
            c = b.get(2);
        c.push(a);
        b.set(2, c);
        this.h(a, !0)
    };
    Xg.prototype.h = function(a, b) {
        var c = this.g.get(1),
            d = this.g.get(3);
        a = {
            10: c,
            29: d,
            1: a,
            3: b
        };
        b && (a[4] = !0);
        Ug(a);
        chrome.runtime.sendMessage({
            up: Tg(this.g)
        });
        window.close()
    };
    Xg.prototype.m = function() {
        var a = {
            7: !this.g.get(7)
        };
        Ug(a);
        chrome.runtime.sendMessage({
            up: a
        });
        window.close()
    };
    new Xg;
}).call(this);