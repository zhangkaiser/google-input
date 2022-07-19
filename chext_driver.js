(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    'use strict';
    var aa = "-t-k0-und",
        ca = "Africa Latin",
        da = "CYRILLIC TYPEWRITTER",
        f = "DIV",
        ea = "Deutsch",
        fa = "Din\u00e9 bizaad - Modern",
        ha = "Edge",
        ia = "English",
        ja = "Fran\u00e7ais",
        ka = "GOOGLE_INPUT_CHEXT_FLAG",
        la = "IFRAME",
        ma = "INPUT",
        na = "IS_INPUT_ACTIVE",
        oa = "Inscript",
        pa = "Invalid event type",
        qa = "Italiano",
        ra = "Move cursor to a text field before you click a candidate",
        sa = "Nederlands",
        ta = "Opera",
        ua = "PHONETIC",
        va = "Portugu\u00eas",
        wa = "Portugu\u00eas brasileiro",
        xa = "Portugu\u00eas europeu",
        ya = "SCRIPT",
        m = "SPAN",
        za =
        "TEXTAREA",
        Aa = "US International",
        Ba = "Uneven number of arguments",
        Ca = "about:invalid#zClosurez",
        Da = "absolute",
        Ea = "act",
        Fa = "action",
        Ga = "activedescendant",
        Ha = "af-t-i0-handwrit",
        Ia = "am-t-i0-handwrit",
        Ja = "am-t-i0-und",
        La = "ar-t-i0-handwrit",
        Ma = "ar-t-i0-und",
        Na = "ar-t-k0-und",
        Oa = "aria-label",
        Pa = "as-t-i0-handwrit",
        Qa = "assertive",
        Ra = "autocapitalize",
        Sa = "autocomplete",
        Ta = "az-t-i0-handwrit",
        Ua = "be-t-i0-handwrit",
        Va = "be-t-i0-und",
        Wa = "be-t-k0-und",
        Xa = "bg-t-i0-handwrit",
        Ya = "bg-t-i0-und",
        Za = "bg-t-k0-qwerty",
        $a = "bg-t-k0-und",
        ab = "blur",
        bb = "bn-t-i0-handwrit",
        cb = "bn-t-i0-und",
        db = "bn-t-k0-und",
        eb = "bn-t-und-latn-k0-und",
        fb = "bo-t-i0-handwrit",
        gb = "bs-t-i0-handwrit",
        hb = "bs-t-k0-und",
        ib = "ca-t-i0-handwrit",
        jb = "ca-t-k0-und",
        kb = "ccp-t-k0-und",
        lb = "ceb-t-i0-handwrit",
        mb = "cfx",
        nb = "changeState",
        ob = "character",
        pb = "checked",
        qb = "chext",
        rb = "chr-t-k0-und",
        sb = "chr-t-und-latn-k0-und",
        tb = "citc",
        ub = "ckb-t-k0-ar",
        vb = "ckb-t-k0-en",
        p = "click",
        wb = "co-t-i0-handwrit",
        xb = "co-t-k0-accents",
        yb = "complete",
        zb = "compositionend",
        Ab = "contextmenu",
        Bb = "crk-t-k0-phone",
        Cb = "cs-t-i0-handwrit",
        Db = "cs-t-k0-qwertz",
        Eb = "cs-t-k0-und",
        Gb = "cy-t-i0-handwrit",
        Hb = "cy-t-k0-und",
        Ib = "da-t-i0-handwrit",
        Jb = "da-t-k0-und",
        Kb = "dblclick",
        Lb = "de-ch-t-k0-und",
        Mb = "de-t-i0-handwrit",
        Nb = "de-t-i0-und",
        Ob = "de-t-k0-accents",
        Pb = "de-t-k0-intl",
        Qb = "de-t-k0-und",
        Rb = "delete",
        Sb = "direction",
        Tb = "disabled",
        Ub = "display",
        Vb = "dz-t-k0-und",
        Wb = "el-t-i0-handwrit",
        Xb = "el-t-i0-und",
        Yb = "el-t-k0-und",
        q = "en",
        ac = "en-t-i0-handwrit",
        bc = "en-t-i0-und",
        cc = "en-t-k0-dvorak",
        dc = "en-t-k0-und",
        ec = "en-us-t-k0-intl",
        fc = "eo-t-i0-handwrit",
        gc = "es-t-i0-handwrit",
        hc = "es-t-i0-und",
        ic = "es-t-k0-accents",
        jc = "es-t-k0-intl",
        kc = "es-t-k0-und",
        lc = "et-t-i0-handwrit",
        mc = "et-t-k0-und",
        nc = "eu-t-i0-handwrit",
        oc = "eu-t-k0-und",
        pc = "fa-t-i0-handwrit",
        qc = "fa-t-i0-und",
        rc = "fa-t-k0-und",
        sc = "ff-t-k0-adlm",
        tc = "fi-t-i0-handwrit",
        uc = "fi-t-k0-und",
        vc = "fil-t-i0-handwrit",
        wc = "focus",
        xc = "fr-t-i0-handwrit",
        yc = "fr-t-i0-und",
        zc = "fr-t-k0-accents",
        Ac = "fr-t-k0-intl",
        Bc = "fr-t-k0-und",
        r = "function",
        Cc = "fy-t-i0-handwrit",
        Dc = "fy-t-k0-accents",
        Ec = "ga-t-i0-handwrit",
        Fc = "ga-t-k0-accents",
        Gc = "ga-t-k0-und",
        Hc = "gd-t-i0-handwrit",
        Ic = "gd-t-k0-accents",
        Jc = "gl-t-i0-handwrit",
        Kc = "gl-t-k0-und",
        Lc = "gu-t-i0-handwrit",
        Mc = "gu-t-i0-und",
        Nc = "gu-t-k0-phone2",
        Oc = "gu-t-k0-und",
        Pc = "gu-t-und-latn-k0-qwerty",
        Qc = "haw-t-i0-handwrit",
        Rc = "haw-t-k0-accents",
        Sc = "haw-t-k0-und",
        Tc = "he",
        Uc = "he-t-i0-handwrit",
        Vc = "he-t-i0-und",
        Wc = "he-t-k0-und",
        Xc = "hi-t-i0-handwrit",
        Yc = "hi-t-i0-und",
        Zc = "hi-t-k0-phone",
        $c = "hi-t-k0-qwerty",
        ad = "hi-t-k0-und",
        bd = "hidden",
        cd = "hmn-t-i0-handwrit",
        dd = "horizontal",
        ed = "hr-t-i0-handwrit",
        fd =
        "hr-t-k0-und",
        gd = "ht-t-i0-handwrit",
        hd = "ht-t-k0-und",
        id = "https://www.google.cn/inputtools",
        jd = "https://www.google.cn/inputtools/sync/pref?app=",
        kd = "hu-t-i0-handwrit",
        ld = "hu-t-k0-101key",
        md = "hy-hyr-t-k0-und",
        nd = "hy-hyt-t-k0-und",
        od = "hy-t-i0-handwrit",
        pd = "id-t-i0-handwrit",
        qd = "id-t-k0-und",
        rd = "inline-block",
        sd = "is-t-i0-handwrit",
        td = "is-t-k0-und",
        ud = "it-t-i0-handwrit",
        vd = "it-t-i0-und",
        wd = "it-t-k0-accents",
        xd = "it-t-k0-intl",
        yd = "it-t-k0-und",
        zd = "ita-ff-black-enabled",
        Ad = "ita-ff-white-enabled",
        Bd = "ita-hwt-button",
        Cd = "ita-hwt-candidate-hover",
        Dd = "ita-hwt-enter-img-white",
        Ed = "ita-hwt-ime-full",
        Fd = "ita-hwt-ime-init-opaque",
        Gd = "ita-hwt-ime-opaque",
        Hd = "ita-hwt-jfk",
        Id = "ita-hwt-jfk-action",
        Jd = "ita-hwt-jfk-hover",
        Kd = "ita-hwt-jfk-standard",
        Ld = "ita-kd-btn-sbc",
        Md = "ita-kd-btn-zh_pun",
        Nd = "ita-kd-icon-button",
        Od = "ita-kd-icon-button-hover",
        Pd = "ita-kd-icon-hover",
        Qd = "ita-kd-img",
        Rd = "ita-kd-inputtools-div",
        Sd = "ita-kd-menuitem",
        Td = "ita-kd-menuitem-hover",
        Ud = "ita-kd-selected",
        Vd = "ita-ppe-cur",
        Wd = "ita-ppe-dis",
        Xd = "ita-ppe-dis-text",
        Yd = "ita-ppe-td",
        Zd = "ita-ppe-uds",
        $d = "iu-t-k0-inuktitu",
        ae = "iu-t-k0-nunavik",
        be = "iu-t-k0-nunavut",
        ce = "ja-hira-t-i0-und",
        de = "ja-t-i0-handwrit",
        ee = "ja-t-i0-mozcjp",
        fe = "ja-t-i0-mozcus",
        ge = "ja-t-ja-hira-i0-und",
        he = "jv-t-i0-handwrit",
        ie = "jw-t-k0-und",
        je = "ka-t-i0-handwrit",
        ke = "ka-t-k0-legacy",
        le = "ka-t-k0-und",
        me = "key",
        t = "keydown",
        u = "keypress",
        ne = "keyup",
        oe = "kk-t-i0-handwrit",
        pe = "kk-t-k0-und",
        qe = "km-t-i0-handwrit",
        re = "km-t-k0-und",
        se = "kn-t-i0-handwrit",
        te = "kn-t-i0-und",
        ue = "kn-t-k0-und",
        ve = "kn-t-und-latn-k0-und",
        we = "ko-t-i0-handwrit",
        xe = "ko-t-k0-und",
        ye = "ku-t-i0-handwrit",
        ze = "ku-t-k0-und",
        Ae = "ky-cyrl-t-k0-und",
        Be = "ky-t-i0-handwrit",
        Ce = "la-t-i0-handwrit",
        De = "latn-002-t-k0-und",
        Ee = "latn_002",
        Fe = "lb-t-i0-handwrit",
        Ge = "lb-t-k0-accents",
        He = "letter-spacing",
        Ie = "lo-t-i0-handwrit",
        Je = "lo-t-k0-und",
        Ke = "lt-t-i0-handwrit",
        Le = "lt-t-k0-und",
        Me = "ltr",
        Ne = "lv-t-i0-handwrit",
        Oe = "lv-t-k0-und",
        Pe = "mez-t-k0-und",
        Qe = "mg-t-i0-handwrit",
        Re = "mi-t-i0-handwrit",
        Se = "mi-t-k0-und",
        Te = "mk-t-i0-handwrit",
        Ue = "mk-t-k0-und",
        Ve = "ml-t-i0-handwrit",
        We = "ml-t-i0-und",
        Xe = "ml-t-k0-und",
        Ye = "ml-t-und-latn-k0-und",
        Ze = "mn-cyrl-t-k0-und",
        $e = "mn-t-i0-handwrit",
        af = "mni-mtei-t-k0-phone",
        bf = "mousedown",
        cf = "mousemove",
        df = "mouseout",
        v = "mouseover",
        ef = "mouseup",
        ff = "mr-t-i0-handwrit",
        gf = "mr-t-i0-und",
        hf = "mr-t-k0-devanaga",
        jf = "mr-t-k0-phone",
        kf = "mr-t-k0-und",
        lf = "ms-t-i0-handwrit",
        mf = "ms-t-k0-und",
        nf = "mt-t-i0-handwrit",
        of = "mt-t-k0-und",
        pf = "mul-t-i0-handwrit",
        qf = "my-t-i0-handwrit",
        rf = "my-t-k0-myansan",
        sf = "my-t-k0-und",
        tf = "myh-t-k0-und",
        uf = "namaste",
        vf = "nb-t-i0-handwrit",
        wf = "ne-t-i0-handwrit",
        xf = "ne-t-i0-und",
        yf = "ne-t-und-latn-k0-und",
        zf = "nl-t-i0-handwrit",
        Af = "nl-t-i0-und",
        Bf = "nl-t-k0-accents",
        Cf = "nl-t-k0-intl",
        Df = "nl-t-k0-und",
        Ef = "nn-t-i0-handwrit",
        Ff = "no-t-i0-handwrit",
        Gf = "no-t-k0-und",
        Hf = "none",
        If = "number",
        Jf = "nv-t-k0-std",
        Kf = "nv-t-k0-und",
        Lf = "ny-t-i0-handwrit",
        Mf = "object",
        Nf = "oj-t-k0-ojibwe",
        Of = "one-t-k0-und",
        Pf = "or-t-i0-handwrit",
        Qf = "or-t-i0-und",
        Rf = "or-t-k0-und",
        Sf = "or-t-und-latn-k0-und",
        Tf = "osa-t-k0-und",
        Uf = "pa-guru-t-k0-und",
        Vf = "pa-guru-t-und-latn-k0-und",
        Wf = "pa-t-i0-handwrit",
        Xf = "pa-t-i0-und",
        Yf = "pl-t-i0-handwrit",
        Zf = "pl-t-k0-accents",
        $f = "pl-t-k0-und",
        ag = "position",
        bg = "ppe",
        cg = "prs-t-k0-und",
        dg = "ps-t-k0-und",
        eg = "pt-BR",
        fg = "pt-PT",
        gg = "pt-br-t-i0-handwrit",
        hg = "pt-br-t-i0-und",
        ig = "pt-br-t-k0-accents",
        jg = "pt-br-t-k0-intl",
        kg = "pt-br-t-k0-und",
        lg = "pt-pt-t-i0-handwrit",
        mg = "pt-pt-t-i0-und",
        ng = "pt-pt-t-k0-accents",
        og = "pt-pt-t-k0-intl",
        pg = "pt-pt-t-k0-und",
        qg = "pt-t-i0-handwrit",
        rg = "pt-t-i0-und",
        sg = "px",
        tg = "readystatechange",
        ug = "rhg-rohg-t-k0-und",
        vg = "ro-t-i0-handwrit",
        wg = "ro-t-k0-extended",
        xg = "ro-t-k0-legacy",
        yg = "ro-t-k0-und",
        zg = "rom-t-k0-und",
        Ag = "rtl",
        Bg = "ru-t-i0-handwrit",
        Cg = "ru-t-i0-und",
        Dg = "ru-t-k0-aatseel",
        Eg = "ru-t-k0-qwerty",
        Fg = "ru-t-k0-und",
        Gg = "ru-t-k0-yazhert",
        Hg = "sa-t-i0-und",
        Ig = "sa-t-k0-devanaga",
        Jg = "sa-t-und-latn-k0-und",
        Kg = "sd-t-k0-und",
        Lg = "selected",
        Mg = "shortcut",
        Ng = "shortcut_",
        Og = "si-t-i0-handwrit",
        Pg = "si-t-i0-und",
        Qg = "si-t-k0-und",
        Rg = "sk-t-i0-handwrit",
        Sg = "sk-t-k0-qwerty",
        Tg = "sk-t-k0-und",
        Ug = "sl-t-i0-handwrit",
        Vg = "sl-t-k0-und",
        Wg = "sm-t-i0-handwrit",
        Xg = "sm-t-k0-accents",
        Yg = "sn-t-i0-handwrit",
        Zg = "so-t-i0-handwrit",
        $g = "sq-t-i0-handwrit",
        ah = "sq-t-k0-und",
        bh = "sr-cyrl-t-k0-und",
        ch = "sr-latn-t-k0-und",
        dh = "sr-t-i0-handwrit",
        eh = "sr-t-i0-und",
        fh = "srp-t-k0-und",
        gh = "start",
        w = "string",
        hh = 'style="-webkit-user-select: none; "',
        ih = "su-t-i0-handwrit",
        jh = "sv-t-i0-handwrit",
        kh = "sv-t-k0-und",
        lh = "sw-t-i0-handwrit",
        mh = "sw-t-k0-und",
        nh = "synthetic-keydown",
        oh = "synthetic-keypress",
        ph = "synthetic-keyup",
        qh = "ta",
        rh = "ta-t-i0-handwrit",
        sh = "ta-t-i0-und",
        th = "ta-t-k0-itrans",
        uh = "ta-t-k0-ta99",
        vh = "ta-t-k0-typewriter",
        wh = "ta-t-k0-und",
        xh = "ta-t-und-latn-k0-und",
        yh = "tabindex",
        zh = "te-t-i0-handwrit",
        Ah = "te-t-i0-und",
        Bh = "te-t-k0-und",
        Ch = "te-t-und-latn-k0-und",
        Dh = "text-decoration",
        Eh = "text-transform",
        Fh = "tg-t-i0-handwrit",
        Gh = "tg-t-k0-und",
        Hh = "th-t-i0-handwrit",
        Ih = "th-t-i0-und",
        Jh = "th-t-k0-pattajoti",
        Kh = "th-t-k0-tis",
        Lh = "th-t-k0-und",
        Mh = "ti-ethi-t-k0-und",
        Nh = "ti-t-i0-handwrit",
        Oh = "ti-t-i0-und",
        Ph = "ti-t-k0-und",
        Qh = "tl-t-k0-und",
        Rh = "tlang",
        Sh = "touchend",
        Th = "touchmove",
        Uh = "touchstart",
        Vh = "tr-t-i0-handwrit",
        Wh = "tr-t-k0-f-accents",
        Xh = "tr-t-k0-lagacy",
        Yh = "tr-t-k0-legacy",
        Zh = "tr-t-k0-q-accents",
        $h = "tr-t-k0-und",
        ai = "translate",
        bi = "tsbc",
        ci = "tt-t-k0-und",
        di = "ug-t-k0-und",
        ei = "uk-t-i0-handwrit",
        fi = "uk-t-i0-und",
        gi = "uk-t-k0-101key",
        hi = "und-ethi-t-k0-und",
        ii = "und-t-i0-handwrit",
        ji = "ur-t-i0-handwrit",
        ki = "ur-t-i0-und",
        li = "ur-t-k0-und",
        mi = "us_intl",
        ni = "uz-cyrl-t-k0-legacy",
        oi = "uz-cyrl-t-k0-und",
        pi = "uz-latn-t-k0-und",
        qi = "uz-t-i0-handwrit",
        ri = "uzs-t-k0-und",
        si = "vertical",
        ti = "vertical-align",
        ui = "vi-t-i0-handwrit",
        vi = "vi-t-i0-und",
        wi = "vi-t-k0-legacy",
        xi = "vi-t-k0-und",
        yi = "vi-t-k0-viqr",
        zi = "visible",
        Ai = "vk-btn",
        Bi = "vk-sf-h",
        Ci = "vkd",
        Di = "xh-t-i0-handwrit",
        Ei = "yi-t-i0-handwrit",
        Fi = "yi-t-k0-und",
        Gi = "yo-ng-t-k0-und",
        Hi = "yue-hant-t-i0-jyutping",
        Ii = "yue-hant-t-i0-und",
        Ji = "yue-hant-t-i0-yale",
        Ki = "zh-CN",
        Li = "zh-HK",
        Mi = "zh-Hans",
        Ni = "zh-TW",
        Oi = "zh-hans-t-i0-handwrit",
        Pi = "zh-hans-t-i0-voice",
        Qi = "zh-hant-t-i0-cangjie-1982",
        Ri = "zh-hant-t-i0-handwrit",
        Si = "zh-hant-t-i0-pinyin",
        Ti = "zh-hant-t-i0-und",
        Ui =
        "zh-t-i0-handwrit",
        Vi = "zh-t-i0-pinyin",
        Wi = "zh-t-i0-pinyin-x0-shuangpin-abc",
        Xi = "zh-t-i0-pinyin-x0-shuangpin-flypy",
        Yi = "zh-t-i0-pinyin-x0-shuangpin-jiajia",
        Zi = "zh-t-i0-pinyin-x0-shuangpin-ms",
        $i = "zh-t-i0-pinyin-x0-shuangpin-ziguang",
        aj = "zh-t-i0-pinyin-x0-shuangpin-ziranma",
        bj = "zh-t-i0-wubi-1986",
        cj = "zh-yue-t-i0-handwrit",
        dj = "zu-t-i0-handwrit",
        ej = "\u00c01234567890\u00bd\u00bbQWERTYUIOP\u00db\u00ddASDFGHJKL\u00ba\u00de\u00dc\u00e2ZXCVBNM\u00bc\u00be\u00bf ",
        fj = "\u00c01234567890\u00bd\u00bbQWERTYUIOP\u00db\u00dd\u00dcASDFGHJKL\u00ba\u00deZXCVBNM\u00bc\u00be\u00bf ",
        gj = "\u02bb\u014clelo Hawai\u02bbi",
        hj = "\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940 (\u092b\u094b\u0928\u0947\u091f\u093f\u0915)",
        ij = "\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940(INSCRIPT)",
        jj = "\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940(PHONETIC)",
        x, kj = function(a) {
            a = [Mf == typeof globalThis && globalThis, a, Mf == typeof window && window, Mf == typeof self && self, Mf == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        nj = function(a, b) {
            if (b) a: {
                var c = lj;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && mj(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        },
        z = function(a, b) {
            a.prototype = oj(b.prototype);
            a.prototype.constructor = a;
            if (pj) pj(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.da = b.prototype
        },
        qj = function(a) {
            return a ? a : Array.prototype.fill
        },
        tj = function(a) {
            if (a && a != A) return rj(a.document);
            null === sj && (sj = rj(A.document));
            return sj
        },
        rj = function(a) {
            return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && uj.test(a) ? a : ""
        },
        vj = function() {},
        wj = function(a) {
            a.Fd = void 0;
            a.pa = function() {
                return a.Fd ? a.Fd : a.Fd = new a
            }
        },
        xj = function(a) {
            var b = typeof a;
            b = b != Mf ? b : a ? Array.isArray(a) ? "array" : b : "null";
            return "array" == b || b == Mf && typeof a.length == If
        },
        yj = function(a) {
            var b = typeof a;
            return b == Mf && null != a || b == r
        },
        Bj = function(a) {
            return Object.prototype.hasOwnProperty.call(a,
                zj) && a[zj] || (a[zj] = ++Aj)
        },
        Cj = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        Dj = function(a, b, c) {
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
        B = function(a, b, c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? B = Cj : B = Dj;
            return B.apply(null, arguments)
        },
        Ej = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var d = c.slice();
                d.push.apply(d, arguments);
                return a.apply(this, d)
            }
        },
        Fj = function() {
            return Date.now()
        },
        Gj = function(a, b) {
            a = a.split(".");
            var c = A;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        },
        C = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.da = b.prototype;
            a.prototype = new c;
            a.prototype.constructor =
                a;
            a.tr = function(d, e, g) {
                for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
                return b.prototype[e].apply(d, h)
            }
        },
        Hj = function(a) {
            return a
        },
        Ij = function(a, b) {
            try {
                b ? chrome.runtime.sendMessage(void 0, a, void 0, b) : chrome.runtime.sendMessage(a)
            } catch (c) {}
        },
        D = function(a) {
            a && typeof a.ca == r && a.ca()
        },
        Jj = function(a) {
            for (var b = 0, c = arguments.length; b < c; ++b) {
                var d = arguments[b];
                xj(d) ? Jj.apply(null, d) : D(d)
            }
        },
        E = function() {
            this.W = this.W;
            this.La = this.La
        },
        Kj = function(a, b) {
            b = Ej(D, b);
            a.W ? b() :
                (a.La || (a.La = []), a.La.push(b))
        },
        Lj = function() {
            E.call(this)
        },
        Mj = function(a) {
            if (Error.captureStackTrace) Error.captureStackTrace(this, Mj);
            else {
                var b = Error().stack;
                b && (this.stack = b)
            }
            a && (this.message = String(a))
        },
        Nj = function(a, b) {
            a = a.split("%s");
            for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
            Mj.call(this, c + a[d])
        },
        Oj = function(a) {
            return a[a.length - 1]
        },
        Qj = function(a, b) {
            b = Pj(a, b, void 0);
            return 0 > b ? null : typeof a === w ? a.charAt(b) : a[b]
        },
        Pj = function(a, b, c) {
            for (var d = a.length, e = typeof a === w ?
                    a.split("") : a, g = 0; g < d; g++)
                if (g in e && b.call(c, e[g], g, a)) return g;
            return -1
        },
        F = function(a, b) {
            return 0 <= Rj(a, b)
        },
        Sj = function(a) {
            if (!Array.isArray(a))
                for (var b = a.length - 1; 0 <= b; b--) delete a[b];
            a.length = 0
        },
        Tj = function(a, b) {
            F(a, b) || a.push(b)
        },
        Uj = function(a, b) {
            b = Rj(a, b);
            var c;
            (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
            return c
        },
        Vj = function(a) {
            return Array.prototype.concat.apply([], arguments)
        },
        Wj = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        },
        Xj = function(a,
            b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (xj(d)) {
                    var e = a.length || 0,
                        g = d.length || 0;
                    a.length = e + g;
                    for (var h = 0; h < g; h++) a[e + h] = d[h]
                } else a.push(d)
            }
        },
        Zj = function(a, b, c, d) {
            Array.prototype.splice.apply(a, Yj(arguments, 1))
        },
        Yj = function(a, b, c) {
            return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
        },
        ak = function(a) {
            for (var b = {}, c = 0, d = 0; d < a.length;) {
                var e = a[d++];
                var g = e;
                g = yj(g) ? "o" + Bj(g) : (typeof g).charAt(0) + g;
                Object.prototype.hasOwnProperty.call(b, g) || (b[g] = !0, a[c++] = e)
            }
            a.length = c
        },
        ck = function(a, b) {
            a.sort(b || bk)
        },
        ek = function(a, b) {
            if (!xj(a) || !xj(b) || a.length != b.length) return !1;
            for (var c = a.length, d = dk, e = 0; e < c; e++)
                if (!d(a[e], b[e])) return !1;
            return !0
        },
        bk = function(a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        },
        dk = function(a, b) {
            return a === b
        },
        fk = function(a) {
            for (var b = [], c = 0; c < arguments.length; c++) {
                var d = arguments[c];
                if (Array.isArray(d))
                    for (var e = 0; e < d.length; e += 8192)
                        for (var g = fk.apply(null, Yj(d, e, e + 8192)), h = 0; h < g.length; h++) b.push(g[h]);
                else b.push(d)
            }
            return b
        },
        gk = function(a,
            b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        },
        jk = function(a, b) {
            var c = 0;
            a = hk(String(a)).split(".");
            b = hk(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var g = a[e] || "",
                    h = b[e] || "";
                do {
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    if (0 == g[0].length && 0 == h[0].length) break;
                    c = ik(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || ik(0 == g[2].length, 0 == h[2].length) || ik(g[2], h[2]);
                    g = g[3];
                    h = h[3]
                } while (0 == c)
            }
            return c
        },
        ik = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        },
        G = function(a) {
            return -1 != kk.indexOf(a)
        },
        lk = function(a) {
            for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
            return c
        },
        mk = function(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        },
        nk = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        },
        ok = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        },
        pk = function(a, b) {
            return null !== a && b in a
        },
        qk = function(a, b) {
            for (var c in a)
                if (a[c] == b) return !0;
            return !1
        },
        rk = function(a) {
            for (var b in a) return !1;
            return !0
        },
        sk = function(a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        },
        uk = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var g = 0; g < tk.length; g++) c = tk[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        },
        vk = function(a) {
            var b = arguments.length;
            if (1 == b && Array.isArray(arguments[0])) return vk.apply(null, arguments[0]);
            if (b % 2) throw Error(Ba);
            for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
            return c
        },
        wk = function(a) {
            var b = arguments.length;
            if (1 == b && Array.isArray(arguments[0])) return wk.apply(null,
                arguments[0]);
            for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
            return c
        },
        xk = function() {
            return G("Trident") || G("MSIE")
        },
        yk = function() {
            return G("Firefox") || G("FxiOS")
        },
        zk = function() {
            return (G("Chrome") || G("CriOS")) && !G(ha)
        },
        Ak = function() {
            function a(e) {
                e = Qj(e, d);
                return c[e] || ""
            }
            var b = kk;
            if (!xk()) {
                b = lk(b);
                var c = {};
                H(b, function(e) {
                    c[e[0]] = e[1]
                });
                var d = Ej(pk, c);
                G(ta) ? a(["Version", ta]) : G(ha) ? a([ha]) : G("Edg/") ? a(["Edg"]) : zk() && a(["Chrome", "CriOS", "HeadlessChrome"])
            }
        },
        Bk = function() {
            return function() {
                return 6
            }
        },
        Ck = function() {
            return !1
        },
        Dk = function() {
            return null
        },
        Fk = function() {
            if (void 0 === Ek) {
                var a = null,
                    b = A.trustedTypes;
                if (b && b.createPolicy) {
                    try {
                        a = b.createPolicy("goog#html", {
                            createHTML: Hj,
                            createScript: Hj,
                            createScriptURL: Hj
                        })
                    } catch (c) {
                        A.console && A.console.error(c.message)
                    }
                    Ek = a
                } else Ek = a
            }
            return Ek
        },
        Ik = function(a, b) {
            this.A = a === Gk && b || "";
            this.B = Hk
        },
        Jk = function(a) {
            return a instanceof Ik && a.constructor === Ik && a.B === Hk ? a.A : "type_error:Const"
        },
        Kk = function(a) {
            return new Ik(Gk, a)
        },
        Mk = function(a, b) {
            this.A = b === Lk ? a : ""
        },
        Nk = function(a) {
            return a instanceof Mk && a.constructor === Mk ? a.A : "type_error:TrustedResourceUrl"
        },
        Rk = function(a, b) {
            var c = Jk(a);
            if (!Ok.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
            a = c.replace(Pk, function(d, e) {
                if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
                d = b[e];
                return d instanceof Ik ? Jk(d) : encodeURIComponent(String(d))
            });
            return Qk(a)
        },
        Qk = function(a) {
            var b = Fk();
            a = b ? b.createScriptURL(a) : a;
            return new Mk(a, Lk)
        },
        Sk = function(a, b, c) {
            if (null == c) return b;
            if (typeof c === w) return c ? a + encodeURIComponent(c) : "";
            for (var d in c)
                if (Object.prototype.hasOwnProperty.call(c, d)) {
                    var e = c[d];
                    e = Array.isArray(e) ? e : [e];
                    for (var g = 0; g < e.length; g++) {
                        var h = e[g];
                        null != h && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(h)))
                    }
                } return b
        },
        Uk = function(a, b) {
            this.A = b === Tk ? a : ""
        },
        Vk = function(a) {
            return a instanceof Uk && a.constructor === Uk ? a.A : "type_error:SafeUrl"
        },
        Zk = function(a) {
            if (a instanceof Uk) return a;
            a = typeof a == Mf && a.nb ? a.$a() : String(a);
            if (Wk.test(a)) a = new Uk(a, Tk);
            else {
                a = String(a);
                a = a.replace(/(%0A|%0D)/g, "");
                var b = a.match(Xk);
                a = b && Yk.test(b[1]) ? new Uk(a, Tk) : null
            }
            return a
        },
        al = function(a, b) {
            this.A = b === $k ? a : ""
        },
        bl = function(a) {
            return a instanceof al && a.constructor === al ? a.A : "type_error:SafeStyle"
        },
        fl = function(a) {
            var b = "",
                c;
            for (c in a)
                if (Object.prototype.hasOwnProperty.call(a, c)) {
                    if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " +
                        c);
                    var d = a[c];
                    null != d && (d = Array.isArray(d) ? cl(d, dl).join(" ") : dl(d), b += c + ":" + d + ";")
                } return b ? new al(b, $k) : el
        },
        dl = function(a) {
            if (a instanceof Uk) return 'url("' + Vk(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
            if (a instanceof Ik) a = Jk(a);
            else {
                a = String(a);
                var b = a.replace(gl, "$1").replace(gl, "$1").replace(hl, "url");
                if (il.test(b)) {
                    if (b = !jl.test(a)) {
                        for (var c = b = !0, d = 0; d < a.length; d++) {
                            var e = a.charAt(d);
                            "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                        }
                        b = b && c && kl(a)
                    }
                    a = b ? ll(a) : "zClosurez"
                } else a = "zClosurez"
            }
            if (/[{;}]/.test(a)) throw new Nj("Value does not allow [{;}], got: %s.",
                [a]);
            return a
        },
        kl = function(a) {
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
        ll = function(a) {
            return a.replace(hl, function(b, c, d, e) {
                var g = "";
                d = d.replace(/^(['"])(.*)\1$/, function(h, k, l) {
                    g = k;
                    return l
                });
                b = (Zk(d) || ml).$a();
                return c + g + b + g + e
            })
        },
        ol = function(a, b) {
            this.A = b === nl ? a : "";
            this.nb = !0
        },
        pl = function(a, b) {
            if (-1 != a.indexOf("<")) throw Error("Selector does not allow '<', got: " +
                a);
            var c = a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
            if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a);
            a: {
                for (var d = {
                        "(": ")",
                        "[": "]"
                    }, e = [], g = 0; g < c.length; g++) {
                    var h = c[g];
                    if (d[h]) e.push(d[h]);
                    else if (qk(d, h) && e.pop() != h) {
                        c = !1;
                        break a
                    }
                }
                c = 0 == e.length
            }
            if (!c) throw Error("() and [] in selector must be balanced, got: " + a);
            b instanceof al || (b = fl(b));
            a = a + "{" + bl(b).replace(/</g, "\\3C ") + "}";
            return new ol(a, nl)
        },
        rl = function(a) {
            function b(d) {
                Array.isArray(d) ? H(d, b) : c += ql(d)
            }
            var c = "";
            H(arguments, b);
            return new ol(c, nl)
        },
        tl = function(a) {
            a = Jk(a);
            return 0 === a.length ? sl : new ol(a, nl)
        },
        ql = function(a) {
            return a instanceof ol && a.constructor === ol ? a.A : "type_error:SafeStyleSheet"
        },
        vl = function(a, b, c) {
            this.A = c === ul ? a : ""
        },
        wl = function(a) {
            return a instanceof vl && a.constructor === vl ? a.A : "type_error:SafeHtml"
        },
        xl = function(a) {
            var b = tj(a.ownerDocument && a.ownerDocument.defaultView);
            b && a.setAttribute("nonce", b)
        },
        Fl = function(a) {
            yl.test(a) &&
                (-1 != a.indexOf("&") && (a = a.replace(zl, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(Al, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(Bl, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(Cl, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(Dl, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(El, "&#0;")));
            return a
        },
        Il = function(a) {
            return -1 != a.indexOf("&") ? "document" in A ? Gl(a) : Hl(a) : a
        },
        Gl = function(a) {
            var b = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"'
            };
            var c = A.document.createElement("div");
            return a.replace(Jl, function(d, e) {
                var g =
                    b[d];
                if (g) return g;
                "#" == e.charAt(0) && (e = Number("0" + e.substr(1)), isNaN(e) || (g = String.fromCharCode(e)));
                if (!g) {
                    g = d + " ";
                    g = (e = Fk()) ? e.createHTML(g) : g;
                    g = new vl(g, null, ul);
                    if (Kl())
                        for (; c.lastChild;) c.removeChild(c.lastChild);
                    c.innerHTML = wl(g);
                    g = c.firstChild.nodeValue.slice(0, -1)
                }
                return b[d] = g
            })
        },
        Hl = function(a) {
            return a.replace(/&([^;]+);/g, function(b, c) {
                switch (c) {
                    case "amp":
                        return "&";
                    case "lt":
                        return "<";
                    case "gt":
                        return ">";
                    case "quot":
                        return '"';
                    default:
                        return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)),
                            isNaN(c)) ? b : String.fromCharCode(c)
                }
            })
        },
        Ll = function(a) {
            return String(a).replace(/\-([a-z])/g, function(b, c) {
                return c.toUpperCase()
            })
        },
        Ml = function(a) {
            return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
                return c + d.toUpperCase()
            })
        },
        Nl = function() {
            return G("iPhone") && !G("iPod") && !G("iPad")
        },
        Ol = function() {
            return Nl() || G("iPad") || G("iPod")
        },
        Pl = function(a) {
            Pl[" "](a);
            return a
        },
        Ql = function(a, b) {
            try {
                return Pl(a[b]), !0
            } catch (c) {}
            return !1
        },
        Sl = function(a, b) {
            var c = Rl;
            return Object.prototype.hasOwnProperty.call(c,
                a) ? c[a] : c[a] = b(a)
        },
        Tl = function() {
            var a = A.document;
            return a ? a.documentMode : void 0
        },
        I = function(a) {
            return Sl(a, function() {
                return 0 <= jk(Ul, a)
            })
        },
        Wl = function(a) {
            return Number(Vl) >= a
        },
        J = function(a, b) {
            this.type = a;
            this.B = this.target = b;
            this.defaultPrevented = this.D = !1
        },
        Xl = function(a) {
            a.stopPropagation()
        },
        $l = function(a, b) {
            J.call(this, a ? a.type : "");
            this.relatedTarget = this.B = this.target = null;
            this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
            this.key = "";
            this.charCode = this.keyCode = 0;
            this.metaKey =
                this.shiftKey = this.altKey = this.ctrlKey = !1;
            this.state = null;
            this.F = !1;
            this.pointerId = 0;
            this.pointerType = "";
            this.A = null;
            if (a) {
                var c = this.type = a.type,
                    d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
                this.target = a.target || a.srcElement;
                this.B = b;
                (b = a.relatedTarget) ? K && (Ql(b, "nodeName") || (b = null)): c == v ? b = a.fromElement : c == df && (b = a.toElement);
                this.relatedTarget = b;
                d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX ||
                    0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
                this.button = a.button;
                this.keyCode = a.keyCode || 0;
                this.key = a.key || "";
                this.charCode = a.charCode || (c == u ? a.keyCode : 0);
                this.ctrlKey = a.ctrlKey;
                this.altKey = a.altKey;
                this.shiftKey = a.shiftKey;
                this.metaKey = a.metaKey;
                this.F = Yl ? a.metaKey : a.ctrlKey;
                this.pointerId = a.pointerId || 0;
                this.pointerType = typeof a.pointerType === w ? a.pointerType :
                    Zl[a.pointerType] || "";
                this.state = a.state;
                this.A = a;
                a.defaultPrevented && $l.da.preventDefault.call(this)
            }
        },
        bm = function(a) {
            return !(!a || !a[am])
        },
        dm = function(a, b, c, d, e) {
            this.listener = a;
            this.proxy = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.ga = e;
            this.key = ++cm;
            this.removed = this.Fc = !1
        },
        em = function(a) {
            a.removed = !0;
            a.listener = null;
            a.proxy = null;
            a.src = null;
            a.ga = null
        },
        fm = function(a) {
            this.src = a;
            this.A = {};
            this.B = 0
        },
        gm = function(a, b) {
            var c = b.type;
            c in a.A && Uj(a.A[c], b) && (em(b), 0 == a.A[c].length && (delete a.A[c],
                a.B--))
        },
        im = function(a, b, c, d, e) {
            a = a.A[b.toString()];
            b = -1;
            a && (b = hm(a, c, d, e));
            return -1 < b ? a[b] : null
        },
        hm = function(a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
                var g = a[e];
                if (!g.removed && g.listener == b && g.capture == !!c && g.ga == d) return e
            }
            return -1
        },
        km = function(a, b, c, d, e) {
            if (d && d.once) return jm(a, b, c, d, e);
            if (Array.isArray(b)) {
                for (var g = 0; g < b.length; g++) km(a, b[g], c, d, e);
                return null
            }
            c = lm(c);
            return bm(a) ? a.listen(b, c, yj(d) ? !!d.capture : !!d, e) : mm(a, b, c, !1, d, e)
        },
        mm = function(a, b, c, d, e, g) {
            if (!b) throw Error(pa);
            var h = yj(e) ?
                !!e.capture : !!e,
                k = nm(a);
            k || (a[om] = k = new fm(a));
            c = k.add(b, c, d, h, g);
            if (c.proxy) return c;
            d = pm();
            c.proxy = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) qm || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent) a.attachEvent(rm(b.toString()), d);
            else if (a.addListener && a.removeListener) a.addListener(d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            sm++;
            return c
        },
        pm = function() {
            function a(c) {
                return b.call(a.src, a.listener, c)
            }
            var b = tm;
            return a
        },
        jm = function(a,
            b, c, d, e) {
            if (Array.isArray(b)) {
                for (var g = 0; g < b.length; g++) jm(a, b[g], c, d, e);
                return null
            }
            c = lm(c);
            return bm(a) ? a.S.add(String(b), c, !0, yj(d) ? !!d.capture : !!d, e) : mm(a, b, c, !0, d, e)
        },
        um = function(a, b, c, d, e) {
            if (Array.isArray(b))
                for (var g = 0; g < b.length; g++) um(a, b[g], c, d, e);
            else d = yj(d) ? !!d.capture : !!d, c = lm(c), bm(a) ? a.S.remove(String(b), c, d, e) : a && (a = nm(a)) && (b = im(a, b, c, d, e)) && vm(b)
        },
        vm = function(a) {
            if (typeof a !== If && a && !a.removed) {
                var b = a.src;
                if (bm(b)) gm(b.S, a);
                else {
                    var c = a.type,
                        d = a.proxy;
                    b.removeEventListener ? b.removeEventListener(c,
                        d, a.capture) : b.detachEvent ? b.detachEvent(rm(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                    sm--;
                    (c = nm(b)) ? (gm(c, a), 0 == c.B && (c.src = null, b[om] = null)) : em(a)
                }
            }
        },
        rm = function(a) {
            return a in wm ? wm[a] : wm[a] = "on" + a
        },
        tm = function(a, b) {
            if (a.removed) a = !0;
            else {
                b = new $l(b, this);
                var c = a.listener,
                    d = a.ga || a.src;
                a.Fc && vm(a);
                a = c.call(d, b)
            }
            return a
        },
        nm = function(a) {
            a = a[om];
            return a instanceof fm ? a : null
        },
        lm = function(a) {
            if (typeof a === r) return a;
            a[xm] || (a[xm] = function(b) {
                return a.handleEvent(b)
            });
            return a[xm]
        },
        M = function(a) {
            E.call(this);
            this.B = a;
            this.A = {}
        },
        zm = function(a, b, c, d, e) {
            ym(a, b, c, d, !1, e)
        },
        ym = function(a, b, c, d, e, g) {
            Array.isArray(c) || (c && (Am[0] = c.toString()), c = Am);
            for (var h = 0; h < c.length; h++) {
                var k = km(b, c[h], d || a.handleEvent, e || !1, g || a.B || a);
                if (!k) break;
                a.A[k.key] = k
            }
            return a
        },
        Bm = function(a, b, c, d, e, g) {
            if (Array.isArray(c))
                for (var h = 0; h < c.length; h++) Bm(a, b, c[h], d, e, g);
            else d = d || a.handleEvent, e = yj(e) ? !!e.capture : !!e, g = g || a.B || a, d = lm(d), e = !!e, c = bm(b) ? im(b.S, String(c), d, e, g) : b ? (b = nm(b)) ? im(b, c, d, e, g) : null :
                null, c && (vm(c), delete a.A[c.key]);
            return a
        },
        Cm = function() {
            E.call(this);
            this.A = {};
            this.B = new M(this);
            this.B.listen(window, ["beforeunload", "unload"], this.D)
        },
        Dm = function(a) {
            return Cm.pa().A[a] || new Lj(a)
        },
        Em = function(a) {
            return (a = a.exec(kk)) ? a[1] : ""
        },
        Gm = function(a) {
            return 0 <= jk(Fm, a)
        },
        Om = function() {
            return Hm && Gm(25) || N && Gm(8) || Im || Jm && Gm(19) || Km && Gm(12.1) || Lm && Gm(5.1) || Mm && Gm(3.2) || Nm && Gm(2.1)
        },
        O = function() {
            E.call(this);
            this.S = new fm(this);
            this.bh = this;
            this.wb = null
        },
        Pm = function(a, b, c, d) {
            b = a.S.A[String(b)];
            if (!b) return !0;
            b = b.concat();
            for (var e = !0, g = 0; g < b.length; ++g) {
                var h = b[g];
                if (h && !h.removed && h.capture == c) {
                    var k = h.listener,
                        l = h.ga || h.src;
                    h.Fc && gm(a.S, h);
                    e = !1 !== k.call(l, d) && e
                }
            }
            return e && !d.defaultPrevented
        },
        Qm = function(a, b) {
            this.D = a;
            this.C = b;
            this.B = 0;
            this.A = null
        },
        Rm = function(a, b) {
            a.C(b);
            100 > a.B && (a.B++, b.next = a.A, a.A = b)
        },
        P = function(a, b) {
            this.x = void 0 !== a ? a : 0;
            this.y = void 0 !== b ? b : 0
        },
        Sm = function(a, b) {
            return new P(a.x - b.x, a.y - b.y)
        },
        Tm = function(a, b) {
            this.width = a;
            this.height = b
        },
        Um = function(a, b) {
            return a ==
                b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
        },
        Vm = function(a) {
            return new Tm(a.width, a.height)
        },
        R = function(a) {
            return a ? new Wm(Q(a)) : Xm || (Xm = new Wm)
        },
        Ym = function(a, b) {
            return typeof b === w ? a.getElementById(b) : b
        },
        Zm = function(a, b, c, d) {
            a = d || a;
            b = b && "*" != b ? String(b).toUpperCase() : "";
            if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
            if (c && a.getElementsByClassName) {
                a = a.getElementsByClassName(c);
                if (b) {
                    d = {};
                    for (var e = 0, g = 0, h; h = a[g]; g++) b == h.nodeName && (d[e++] = h);
                    d.length =
                        e;
                    return d
                }
                return a
            }
            a = a.getElementsByTagName(b || "*");
            if (c) {
                d = {};
                for (g = e = 0; h = a[g]; g++) b = h.className, typeof b.split == r && F(b.split(/\s+/), c) && (d[e++] = h);
                d.length = e;
                return d
            }
            return a
        },
        an = function(a, b) {
            mk(b, function(c, d) {
                c && typeof c == Mf && c.nb && (c = c.$a());
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : $m.hasOwnProperty(d) ? a.setAttribute($m[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
            })
        },
        cn = function(a) {
            a = a.document;
            a = bn(a) ? a.documentElement :
                a.body;
            return new Tm(a.clientWidth, a.clientHeight)
        },
        en = function(a) {
            var b = dn(a);
            a = a.parentWindow || a.defaultView;
            return N && I("10") && a.pageYOffset != b.scrollTop ? new P(b.scrollLeft, b.scrollTop) : new P(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        },
        dn = function(a) {
            return a.scrollingElement ? a.scrollingElement : !S && bn(a) ? a.documentElement : a.body || a.documentElement
        },
        fn = function(a) {
            return a ? a.parentWindow || a.defaultView : window
        },
        hn = function(a, b, c) {
            return gn(document, arguments)
        },
        gn = function(a, b) {
            var c =
                String(b[0]),
                d = b[1];
            if (!jn && d && (d.name || d.type)) {
                c = ["<", c];
                d.name && c.push(' name="', Fl(d.name), '"');
                if (d.type) {
                    c.push(' type="', Fl(d.type), '"');
                    var e = {};
                    uk(e, d);
                    delete e.type;
                    d = e
                }
                c.push(">");
                c = c.join("")
            }
            c = kn(a, c);
            d && (typeof d === w ? c.className = d : Array.isArray(d) ? c.className = d.join(" ") : an(c, d));
            2 < b.length && ln(a, c, b, 2);
            return c
        },
        ln = function(a, b, c, d) {
            function e(k) {
                k && b.appendChild(typeof k === w ? a.createTextNode(k) : k)
            }
            for (; d < c.length; d++) {
                var g = c[d];
                if (!xj(g) || yj(g) && 0 < g.nodeType) e(g);
                else {
                    a: {
                        if (g && typeof g.length ==
                            If) {
                            if (yj(g)) {
                                var h = typeof g.item == r || typeof g.item == w;
                                break a
                            }
                            if (typeof g === r) {
                                h = typeof g.item == r;
                                break a
                            }
                        }
                        h = !1
                    }
                    H(h ? Wj(g) : g, e)
                }
            }
        },
        kn = function(a, b) {
            b = String(b);
            "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
            return a.createElement(b)
        },
        bn = function(a) {
            return "CSS1Compat" == a.compatMode
        },
        mn = function(a) {
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
                case ma:
                case la:
                case "ISINDEX":
                case "KEYGEN":
                case "LINK":
                case "NOFRAMES":
                case "NOSCRIPT":
                case "META":
                case "OBJECT":
                case "PARAM":
                case ya:
                case "SOURCE":
                case "STYLE":
                case "TRACK":
                case "WBR":
                    return !1
            }
            return !0
        },
        nn = function(a) {
            for (var b; b = a.firstChild;) a.removeChild(b)
        },
        on = function(a) {
            return a && a.parentNode ? a.parentNode.removeChild(a) : null
        },
        rn = function(a) {
            return pn && void 0 != a.children ? a.children : qn(a.childNodes, function(b) {
                return 1 == b.nodeType
            })
        },
        sn = function(a, b) {
            if (!a || !b) return !1;
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        },
        vn = function(a, b) {
            if (a == b) return 0;
            if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
            if (N && !Wl(9)) {
                if (9 == a.nodeType) return -1;
                if (9 == b.nodeType) return 1
            }
            if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
                var c = 1 == a.nodeType,
                    d = 1 == b.nodeType;
                if (c && d) return a.sourceIndex - b.sourceIndex;
                var e = a.parentNode,
                    g = b.parentNode;
                return e == g ? tn(a, b) : !c && sn(e, b) ? -1 * un(a, b) : !d && sn(g, a) ? un(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : g.sourceIndex)
            }
            d = Q(a);
            c = d.createRange();
            c.selectNode(a);
            c.collapse(!0);
            a =
                d.createRange();
            a.selectNode(b);
            a.collapse(!0);
            return c.compareBoundaryPoints(A.Range.START_TO_END, a)
        },
        un = function(a, b) {
            var c = a.parentNode;
            if (c == b) return -1;
            for (; b.parentNode != c;) b = b.parentNode;
            return tn(b, a)
        },
        tn = function(a, b) {
            for (; b = b.previousSibling;)
                if (b == a) return -1;
            return 1
        },
        wn = function(a) {
            var b, c = arguments.length;
            if (!c) return null;
            if (1 == c) return arguments[0];
            var d = [],
                e = Infinity;
            for (b = 0; b < c; b++) {
                for (var g = [], h = arguments[b]; h;) g.unshift(h), h = h.parentNode;
                d.push(g);
                e = Math.min(e, g.length)
            }
            g = null;
            for (b = 0; b < e; b++) {
                h = d[0][b];
                for (var k = 1; k < c; k++)
                    if (h != d[k][b]) return g;
                g = h
            }
            return g
        },
        Q = function(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        xn = function(a) {
            return a.contentDocument || a.contentWindow.document
        },
        yn = function(a, b) {
            if ("textContent" in a) a.textContent = b;
            else if (3 == a.nodeType) a.data = String(b);
            else if (a.firstChild && 3 == a.firstChild.nodeType) {
                for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
                a.firstChild.data = String(b)
            } else nn(a), a.appendChild(Q(a).createTextNode(String(b)))
        },
        zn = function(a) {
            return N && !I("9") ? (a = a.getAttributeNode(yh), null != a && a.specified) : a.hasAttribute(yh)
        },
        An = function(a) {
            a = a.tabIndex;
            return typeof a === If && 0 <= a && 32768 > a
        },
        Cn = function(a) {
            var b = [];
            Bn(a, b, !1);
            return b.join("")
        },
        Bn = function(a, b, c) {
            if (!(a.nodeName in Dn))
                if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                else if (a.nodeName in En) b.push(En[a.nodeName]);
            else
                for (a = a.firstChild; a;) Bn(a, b, c), a = a.nextSibling
        },
        Fn = function(a) {
            try {
                var b = a && a.activeElement;
                return b && b.nodeName ? b : null
            } catch (c) {
                return null
            }
        },
        Wm = function(a) {
            this.A = a || A.document || document
        },
        Hn = function(a) {
            return cn(Gn(a) || window)
        },
        In = function(a, b) {
            return a.A.createTextNode(String(b))
        },
        Jn = function(a, b) {
            a = a.A;
            for (var c = kn(a, "TABLE"), d = c.appendChild(kn(a, "TBODY")), e = 0; 1 > e; e++) {
                for (var g = kn(a, "TR"), h = 0; h < b; h++) g.appendChild(kn(a, "TD"));
                d.appendChild(g)
            }
            return c
        },
        Gn = function(a) {
            a = a.A;
            return a.parentWindow || a.defaultView
        },
        Mn = function(a, b) {
            var c = a;
            b && (c = B(a, b));
            typeof A.setImmediate !== r || A.Window &&
                A.Window.prototype && !G(ha) && A.Window.prototype.setImmediate == A.setImmediate ? (Kn || (Kn = Ln()), Kn(c)) : A.setImmediate(c)
        },
        Ln = function() {
            var a = A.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !G("Presto") && (a = function() {
                var e = kn(document, la);
                e.style.display = Hf;
                document.documentElement.appendChild(e);
                var g = e.contentWindow;
                e = g.document;
                e.open();
                e.close();
                var h = "callImmediate" + Math.random(),
                    k = "file:" == g.location.protocol ? "*" : g.location.protocol +
                    "//" + g.location.host;
                e = B(function(l) {
                    if (("*" == k || l.origin == k) && l.data == h) this.port1.onmessage()
                }, this);
                g.addEventListener("message", e, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function() {
                        g.postMessage(h, k)
                    }
                }
            });
            if ("undefined" !== typeof a && !xk()) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function() {
                    if (void 0 !== c.next) {
                        c = c.next;
                        var e = c.ze;
                        c.ze = null;
                        e()
                    }
                };
                return function(e) {
                    d.next = {
                        ze: e
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return function(e) {
                A.setTimeout(e, 0)
            }
        },
        Nn = function(a) {
            A.setTimeout(function() {
                throw a;
            }, 0)
        },
        On = function() {
            this.B = this.A = null
        },
        Pn = function() {
            this.next = this.A = this.B = null
        },
        Un = function(a, b) {
            Qn || Rn();
            Sn || (Qn(), Sn = !0);
            Tn.add(a, b)
        },
        Rn = function() {
            if (A.Promise && A.Promise.resolve) {
                var a = A.Promise.resolve(void 0);
                Qn = function() {
                    a.then(Vn)
                }
            } else Qn = function() {
                Mn(Vn)
            }
        },
        Vn = function() {
            for (var a; a = Tn.remove();) {
                try {
                    a.B.call(a.A)
                } catch (b) {
                    Nn(b)
                }
                Rm(Wn, a)
            }
            Sn = !1
        },
        Xn = function(a) {
            if (!a) return !1;
            try {
                return !!a.$goog_Thenable
            } catch (b) {
                return !1
            }
        },
        Zn = function(a) {
            this.A = 0;
            this.H = void 0;
            this.C = this.B = this.D = null;
            this.F = this.G = !1;
            if (a != vj) try {
                var b = this;
                a.call(void 0, function(c) {
                    Yn(b, 2, c)
                }, function(c) {
                    Yn(b, 3, c)
                })
            } catch (c) {
                Yn(this, 3, c)
            }
        },
        $n = function() {
            this.next = this.D = this.B = this.C = this.A = null;
            this.F = !1
        },
        bo = function(a, b, c) {
            var d = ao.get();
            d.C = a;
            d.B = b;
            d.D = c;
            return d
        },
        co = function(a, b) {
            if (0 == a.A)
                if (a.D) {
                    var c = a.D;
                    if (c.B) {
                        for (var d = 0, e = null, g = null, h = c.B; h && (h.F || (d++, h.A == a && (e = h), !(e && 1 < d))); h = h.next) e || (g = h);
                        e && (0 == c.A && 1 == d ? co(c, b) : (g ? (d = g, d.next == c.C && (c.C = d), d.next = d.next.next) : eo(c), fo(c, e, 3, b)))
                    }
                    a.D = null
                } else Yn(a,
                    3, b)
        },
        ho = function(a, b) {
            a.B || 2 != a.A && 3 != a.A || go(a);
            a.C ? a.C.next = b : a.B = b;
            a.C = b
        },
        jo = function(a, b, c, d) {
            var e = bo(null, null, null);
            e.A = new Zn(function(g, h) {
                e.C = b ? function(k) {
                    try {
                        var l = b.call(d, k);
                        g(l)
                    } catch (n) {
                        h(n)
                    }
                } : g;
                e.B = c ? function(k) {
                    try {
                        var l = c.call(d, k);
                        void 0 === l && k instanceof io ? h(k) : g(l)
                    } catch (n) {
                        h(n)
                    }
                } : h
            });
            e.A.D = a;
            ho(a, e);
            return e.A
        },
        Yn = function(a, b, c) {
            if (0 == a.A) {
                a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
                a.A = 1;
                a: {
                    var d = c,
                        e = a.W,
                        g = a.I;
                    if (d instanceof Zn) {
                        ho(d, bo(e || vj, g || null,
                            a));
                        var h = !0
                    } else if (Xn(d)) d.then(e, g, a),
                    h = !0;
                    else {
                        if (yj(d)) try {
                            var k = d.then;
                            if (typeof k === r) {
                                ko(d, k, e, g, a);
                                h = !0;
                                break a
                            }
                        } catch (l) {
                            g.call(a, l);
                            h = !0;
                            break a
                        }
                        h = !1
                    }
                }
                h || (a.H = c, a.A = b, a.D = null, go(a), 3 != b || c instanceof io || lo(a, c))
            }
        },
        ko = function(a, b, c, d, e) {
            function g(l) {
                k || (k = !0, d.call(e, l))
            }

            function h(l) {
                k || (k = !0, c.call(e, l))
            }
            var k = !1;
            try {
                b.call(a, h, g)
            } catch (l) {
                g(l)
            }
        },
        go = function(a) {
            a.G || (a.G = !0, Un(a.S, a))
        },
        eo = function(a) {
            var b = null;
            a.B && (b = a.B, a.B = b.next, b.next = null);
            a.B || (a.C = null);
            return b
        },
        fo = function(a,
            b, c, d) {
            if (3 == c && b.B && !b.F)
                for (; a && a.F; a = a.D) a.F = !1;
            if (b.A) b.A.D = null, mo(b, c, d);
            else try {
                b.F ? b.C.call(b.D) : mo(b, c, d)
            } catch (e) {
                no.call(null, e)
            }
            Rm(ao, b)
        },
        mo = function(a, b, c) {
            2 == b ? a.C.call(a.D, c) : a.B && a.B.call(a.D, c)
        },
        lo = function(a, b) {
            a.F = !0;
            Un(function() {
                a.F && no.call(null, b)
            })
        },
        io = function(a) {
            Mj.call(this, a)
        },
        oo = function(a, b, c) {
            if (typeof a === r) c && (a = B(a, c));
            else if (a && typeof a.handleEvent == r) a = B(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            return 2147483647 < Number(b) ? -1 : A.setTimeout(a,
                b || 0)
        },
        qo = function() {
            E.call(this);
            this.A = po;
            this.B = Dm(bg)
        },
        ro = function(a, b, c, d) {
            this.top = a;
            this.right = b;
            this.bottom = c;
            this.left = d
        },
        so = function(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        },
        to = function(a) {
            return new so(a.left, a.top, a.right - a.left, a.bottom - a.top)
        },
        vo = function(a, b, c) {
            if (typeof b === w)(b = uo(a, b)) && (a.style[b] = c);
            else
                for (var d in b) {
                    c = a;
                    var e = b[d],
                        g = uo(c, d);
                    g && (c.style[g] = e)
                }
        },
        uo = function(a, b) {
            var c = wo[b];
            if (!c) {
                var d = Ll(b);
                c = d;
                void 0 === a.style[d] && (d = (S ? "Webkit" : K ? "Moz" :
                    N ? "ms" : Km ? "O" : null) + Ml(d), void 0 !== a.style[d] && (c = d));
                wo[b] = c
            }
            return c
        },
        xo = function(a, b) {
            var c = Q(a);
            return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
        },
        yo = function(a, b) {
            return a.currentStyle ? a.currentStyle[b] : null
        },
        zo = function(a, b) {
            return xo(a, b) || yo(a, b) || a.style && a.style[b]
        },
        Bo = function(a, b) {
            if (b instanceof P) {
                var c = b.x;
                b = b.y
            } else c = b, b = void 0;
            a.style.left = Ao(c, !1);
            a.style.top = Ao(b, !1)
        },
        Co = function(a) {
            return new P(a.offsetLeft,
                a.offsetTop)
        },
        Do = function(a) {
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
        Eo = function(a) {
            if (N && !Wl(8)) return a.offsetParent;
            var b = Q(a),
                c = zo(a, ag),
                d = "fixed" == c || c == Da;
            for (a = a.parentNode; a && a != b; a = a.parentNode)
                if (11 == a.nodeType && a.host && (a = a.host), c = zo(a, ag), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || c == Da || "relative" == c)) return a;
            return null
        },
        Go = function(a) {
            for (var b = new ro(0,
                    Infinity, Infinity, 0), c = R(a), d = c.A.body, e = c.A.documentElement, g = dn(c.A); a = Eo(a);)
                if (!(N && 0 == a.clientWidth || S && 0 == a.clientHeight && a == d) && a != d && a != e && zo(a, "overflow") != zi) {
                    var h = Fo(a),
                        k = new P(a.clientLeft, a.clientTop);
                    h.x += k.x;
                    h.y += k.y;
                    b.top = Math.max(b.top, h.y);
                    b.right = Math.min(b.right, h.x + a.clientWidth);
                    b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
                    b.left = Math.max(b.left, h.x)
                } d = g.scrollLeft;
            g = g.scrollTop;
            b.left = Math.max(b.left, d);
            b.top = Math.max(b.top, g);
            c = Hn(c);
            b.right = Math.min(b.right, d + c.width);
            b.bottom = Math.min(b.bottom, g + c.height);
            return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
        },
        Fo = function(a) {
            var b = Q(a),
                c = new P(0, 0);
            var d = b ? Q(b) : document;
            d = !N || Wl(9) || bn(R(d).A) ? d.documentElement : d.body;
            if (a == d) return c;
            a = Do(a);
            b = en(R(b).A);
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c
        },
        Ho = function(a) {
            a = Do(a);
            return new P(a.left, a.top)
        },
        Io = function(a) {
            if (1 == a.nodeType) return Ho(a);
            a = a.changedTouches ? a.changedTouches[0] : a;
            return new P(a.clientX, a.clientY)
        },
        Ao = function(a, b) {
            typeof a == If && (a = (b ?
                Math.round(a) : a) + sg);
            return a
        },
        Ko = function(a) {
            var b = Jo;
            if (zo(a, Ub) != Hf) return b(a);
            var c = a.style,
                d = c.display,
                e = c.visibility,
                g = c.position;
            c.visibility = bd;
            c.position = Da;
            c.display = "inline";
            a = b(a);
            c.display = d;
            c.position = g;
            c.visibility = e;
            return a
        },
        Jo = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = S && !b && !c;
            return (void 0 === b || d) && a.getBoundingClientRect ? (a = Do(a), new Tm(a.right - a.left, a.bottom - a.top)) : new Tm(b, c)
        },
        T = function(a, b) {
            a.style.display = b ? "" : Hf
        },
        Mo = function(a, b) {
            b = R(b);
            var c = b.A;
            if (N && c.createStyleSheet) b =
                c.createStyleSheet(), Lo(b, a);
            else {
                c = Zm(b.A, "HEAD", void 0, void 0)[0];
                if (!c) {
                    var d = Zm(b.A, "BODY", void 0, void 0)[0];
                    c = b.O("HEAD");
                    d.parentNode.insertBefore(c, d)
                }
                d = b.O("STYLE");
                var e = tj();
                e && d.setAttribute("nonce", e);
                Lo(d, a);
                b.V(c, d)
            }
        },
        Lo = function(a, b) {
            b = ql(b);
            N && void 0 !== a.cssText ? a.cssText = b : A.trustedTypes ? yn(a, b) : a.innerHTML = b
        },
        No = function(a) {
            return Ag == zo(a, Sb)
        },
        Qo = function(a, b) {
            b = b ? null : a.getElementsByTagName("*");
            if (Oo) {
                var c = Hf;
                a.style && (a.style[Oo] = c);
                if (b) {
                    a = 0;
                    for (var d; d = b[a]; a++) d.style && (d.style[Oo] =
                        c)
                }
            } else if (N || Km)
                if (c = "on", a.setAttribute("unselectable", c), b)
                    for (a = 0; d = b[a]; a++) d.setAttribute("unselectable", c)
        },
        Uo = function(a, b) {
            var c = bn(R(Q(a)).A);
            if (!N || I("10") || c && I("8")) Ro(a, b, "content-box");
            else {
                var d = a.style;
                c ? (d.pixelWidth = b.width, d.pixelHeight = b.height) : (c = So(a, "padding"), a = To(a), d.pixelWidth = b.width + a.left + c.left + c.right + a.right, d.pixelHeight = b.height + a.top + c.top + c.bottom + a.bottom)
            }
        },
        Ro = function(a, b, c) {
            a = a.style;
            K ? a.MozBoxSizing = c : S ? a.WebkitBoxSizing = c : a.boxSizing = c;
            a.width = Math.max(b.width,
                0) + sg;
            a.height = Math.max(b.height, 0) + sg
        },
        Vo = function(a, b) {
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
        Wo = function(a, b) {
            return (b = yo(a, b)) ? Vo(a, b) : 0
        },
        So = function(a, b) {
            if (N) {
                var c = Wo(a, b + "Left"),
                    d = Wo(a, b + "Right"),
                    e = Wo(a, b + "Top");
                a = Wo(a, b + "Bottom");
                return new ro(e, d, a, c)
            }
            c = xo(a, b + "Left");
            d = xo(a, b + "Right");
            e = xo(a, b + "Top");
            a = xo(a, b + "Bottom");
            return new ro(parseFloat(e),
                parseFloat(d), parseFloat(a), parseFloat(c))
        },
        Yo = function(a, b) {
            if (yo(a, b + "Style") == Hf) return 0;
            b = yo(a, b + "Width");
            return b in Xo ? Xo[b] : Vo(a, b)
        },
        To = function(a) {
            if (N && !Wl(9)) {
                var b = Yo(a, "borderLeft"),
                    c = Yo(a, "borderRight"),
                    d = Yo(a, "borderTop");
                a = Yo(a, "borderBottom");
                return new ro(d, c, a, b)
            }
            b = xo(a, "borderLeftWidth");
            c = xo(a, "borderRightWidth");
            d = xo(a, "borderTopWidth");
            a = xo(a, "borderBottomWidth");
            return new ro(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
        },
        bp = function(a) {
            var b = zo(a, "fontSize");
            var c =
                (c = b.match(Zo)) && c[0] || null;
            if (b && sg == c) return parseInt(b, 10);
            if (N) {
                if (String(c) in $o) return Vo(a, b);
                if (a.parentNode && 1 == a.parentNode.nodeType && String(c) in ap) return a = a.parentNode, c = zo(a, "fontSize"), Vo(a, b == c ? "1em" : b)
            }
            c = hn(m, {
                style: "visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"
            });
            a.appendChild(c);
            b = c.offsetHeight;
            on(c);
            return b
        },
        fp = function(a, b, c, d, e, g, h, k, l) {
            var n = cp(c);
            var y = Fo(a);
            var L = Ko(a);
            y = new so(y.x, y.y, L.width, L.height);
            if (L = Go(a)) {
                var ba = to(L);
                L = Math.max(y.left, ba.left);
                var Ka = Math.min(y.left + y.width, ba.left + ba.width);
                if (L <= Ka) {
                    var Zb = Math.max(y.top, ba.top);
                    ba = Math.min(y.top + y.height, ba.top + ba.height);
                    Zb <= ba && (y.left = L, y.top = Zb, y.width = Ka - L, y.height = ba - Zb)
                }
            }
            L = R(a);
            Zb = R(c);
            if (L.A != Zb.A) {
                Ka = L.A.body;
                Zb = Gn(Zb);
                ba = new P(0, 0);
                var $b = fn(Q(Ka));
                if (Ql($b, "parent")) {
                    var Po = Ka;
                    do {
                        var cu = $b == Zb ? Fo(Po) : Ho(Po);
                        ba.x += cu.x;
                        ba.y += cu.y
                    } while ($b && $b != Zb && $b != $b.parent && (Po = $b.frameElement) && ($b = $b.parent))
                }
                Ka = Sm(ba, Fo(Ka));
                !N || Wl(9) || bn(L.A) || (Ka = Sm(Ka,
                    en(L.A)));
                y.left += Ka.x;
                y.top += Ka.y
            }
            a = dp(a, b);
            b = y.left;
            a & 4 ? b += y.width : a & 2 && (b += y.width / 2);
            b = new P(b, y.top + (a & 1 ? y.height : 0));
            b = Sm(b, n);
            e && (b.x += (a & 4 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
            if (h)
                if (l) var Fb = l;
                else if (Fb = Go(c)) Fb.top -= n.y, Fb.right -= n.x, Fb.bottom -= n.y, Fb.left -= n.x;
            return ep(b, c, d, g, Fb, h, k)
        },
        cp = function(a) {
            if (a = a.offsetParent) {
                var b = "HTML" == a.tagName || "BODY" == a.tagName;
                if (!b || "static" != zo(a, ag)) {
                    var c = Fo(a);
                    if (!b) {
                        b = No(a);
                        var d;
                        if (d = b) {
                            d = Lm && Gm(10);
                            var e;
                            if (e = gp) e = 0 <= jk(hp, 10);
                            var g = Hm && Gm(85);
                            d = K || d || e || g
                        }
                        b = d ? -a.scrollLeft : !b || ip && I("8") || zo(a, "overflowX") == zi ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft;
                        c = Sm(c, new P(b, a.scrollTop))
                    }
                }
            }
            return c || new P
        },
        ep = function(a, b, c, d, e, g, h) {
            a = new P(a.x, a.y);
            var k = dp(b, c);
            c = Ko(b);
            h = h ? Vm(h) : Vm(c);
            a = new P(a.x, a.y);
            h = Vm(h);
            var l = 0;
            if (d || 0 != k) k & 4 ? a.x -= h.width + (d ? d.right : 0) : k & 2 ? a.x -= h.width / 2 : d && (a.x += d.left), k & 1 ? a.y -= h.height + (d ? d.bottom : 0) : d && (a.y += d.top);
            if (g) {
                if (e) {
                    d = a;
                    k = h;
                    l = 0;
                    65 == (g & 65) && (d.x < e.left || d.x >= e.right) && (g &= -2);
                    132 == (g & 132) && (d.y <
                        e.top || d.y >= e.bottom) && (g &= -5);
                    d.x < e.left && g & 1 && (d.x = e.left, l |= 1);
                    if (g & 16) {
                        var n = d.x;
                        d.x < e.left && (d.x = e.left, l |= 4);
                        d.x + k.width > e.right && (k.width = Math.min(e.right - d.x, n + k.width - e.left), k.width = Math.max(k.width, 0), l |= 4)
                    }
                    d.x + k.width > e.right && g & 1 && (d.x = Math.max(e.right - k.width, e.left), l |= 1);
                    g & 2 && (l |= (d.x < e.left ? 16 : 0) | (d.x + k.width > e.right ? 32 : 0));
                    d.y < e.top && g & 4 && (d.y = e.top, l |= 2);
                    g & 32 && (n = d.y, d.y < e.top && (d.y = e.top, l |= 8), d.y + k.height > e.bottom && (k.height = Math.min(e.bottom - d.y, n + k.height - e.top), k.height = Math.max(k.height,
                        0), l |= 8));
                    d.y + k.height > e.bottom && g & 4 && (d.y = Math.max(e.bottom - k.height, e.top), l |= 2);
                    g & 8 && (l |= (d.y < e.top ? 64 : 0) | (d.y + k.height > e.bottom ? 128 : 0));
                    e = l
                } else e = 256;
                l = e
            }
            g = new so(0, 0, 0, 0);
            g.left = a.x;
            g.top = a.y;
            g.width = h.width;
            g.height = h.height;
            e = l;
            if (e & 496) return e;
            Bo(b, new P(g.left, g.top));
            h = new Tm(g.width, g.height);
            Um(c, h) || (c = h, h = bn(R(Q(b)).A), !N || I("10") || h && I("8") ? Ro(b, c, "border-box") : (a = b.style, h ? (h = So(b, "padding"), b = To(b), a.pixelWidth = c.width - b.left - h.left - h.right - b.right, a.pixelHeight = c.height - b.top -
                h.top - h.bottom - b.bottom) : (a.pixelWidth = c.width, a.pixelHeight = c.height)));
            return e
        },
        dp = function(a, b) {
            return (b & 8 && No(a) ? b ^ 4 : b) & -9
        },
        jp = function(a) {
            J.call(this, "bind");
            this.C = a
        },
        kp = function(a) {
            J.call(this, "visi");
            this.C = a
        },
        lp = function() {},
        mp = function(a, b, c) {
            this.A = a;
            this.B = b;
            this.F = c
        },
        np = function() {},
        U = function(a) {
            O.call(this);
            this.A = a || R();
            this.Mb = op;
            this.qa = null;
            this.Ta = !1;
            this.D = null;
            this.U = void 0;
            this.F = this.X = null
        },
        pp = function(a, b) {
            switch (a) {
                case 1:
                    return b ? "disable" : "enable";
                case 2:
                    return b ? "highlight" :
                        "unhighlight";
                case 4:
                    return b ? "activate" : "deactivate";
                case 8:
                    return b ? "select" : "unselect";
                case 16:
                    return b ? "check" : "uncheck";
                case 32:
                    return b ? wc : ab;
                case 64:
                    return b ? "open" : "close"
            }
            throw Error("Invalid component state");
        },
        qp = function(a) {
            a.U || (a.U = new M(a));
            return a.U
        },
        rp = function(a) {
            null == a.Mb && (a.Mb = No(a.Ta ? a.D : a.A.A.body));
            return a.Mb
        },
        sp = function(a, b) {
            return a.F ? a.F[b] || null : null
        },
        tp = function(a, b, c) {
            a.F && H(a.F, b, c)
        },
        up = function(a, b) {
            return a.F && b ? Rj(a.F, b) : -1
        },
        wp = function(a) {
            U.call(this, vp);
            this.K =
                a;
            this.R = this.oa = !1;
            this.N = null;
            this.hf = !0;
            this.T = "";
            this.aa = this.ab = !1;
            this.H = new M(this)
        },
        xp = function(a, b, c) {
            a.oa = !c;
            a.R = b;
            a.Ob = c ? a.A.L(c) : void 0;
            a.ha(a.Ob);
            a.oa && (a.L().style.position = Da, a.df());
            a.T = a.L().style.display
        },
        yp = function() {
            O.apply(this, arguments)
        },
        Ap = function(a, b) {
            a.J(b);
            zp.forEach(function(c) {
                c.J(b)
            })
        },
        Dp = function(a, b, c, d, e, g) {
            if (S && !I("525")) return !0;
            if (Yl && e) return Bp(a);
            if (e && !d) return !1;
            if (!K) {
                typeof b === If && (b = Cp(b));
                var h = 17 == b || 18 == b || Yl && 91 == b;
                if ((!c || Yl) && h || Yl && 16 == b && (d ||
                        g)) return !1
            }
            if ((S || Im) && d && c) switch (a) {
                case 220:
                case 219:
                case 221:
                case 192:
                case 186:
                case 189:
                case 187:
                case 188:
                case 190:
                case 191:
                case 192:
                case 222:
                    return !1
            }
            if (N && d && b == a) return !1;
            switch (a) {
                case 13:
                    return K ? g || e ? !1 : !(c && d) : !0;
                case 27:
                    return !(S || Im || K)
            }
            return K && (d || e || g) ? !1 : Bp(a)
        },
        Bp = function(a) {
            if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (S || Im) && 0 == a) return !0;
            switch (a) {
                case 32:
                case 43:
                case 63:
                case 64:
                case 107:
                case 109:
                case 110:
                case 111:
                case 186:
                case 59:
                case 189:
                case 187:
                case 61:
                case 188:
                case 190:
                case 191:
                case 192:
                case 222:
                case 219:
                case 220:
                case 221:
                case 163:
                case 58:
                    return !0;
                case 173:
                    return K;
                default:
                    return !1
            }
        },
        Cp = function(a) {
            if (K) a = Ep(a);
            else if (Yl && S) switch (a) {
                case 93:
                    a = 91
            }
            return a
        },
        Ep = function(a) {
            switch (a) {
                case 61:
                    return 187;
                case 59:
                    return 186;
                case 173:
                    return 189;
                case 224:
                    return 91;
                case 0:
                    return 224;
                default:
                    return a
            }
        },
        Fp = function(a, b, c) {
            J.call(this, a, c);
            this.C = b
        },
        Gp = function(a, b, c, d, e, g, h, k, l, n) {
            this.A = a;
            this.F = b;
            this.W = c;
            this.D = d;
            this.C = e;
            this.G = g;
            this.H = h;
            this.S = k;
            this.B = l;
            this.I = n
        },
        Mp = function(a) {
            var b = a.A;
            b = (b = b && "composed" in b && b && "composedPath" in b && b.composed &&
                b.composedPath()) && 0 < b.length ? b[0] : a.target;
            return Hp(Ip(Jp(Kp((new Lp).keyCode(a.keyCode || 0).key(a.key || "").shiftKey(!!a.shiftKey).altKey(!!a.altKey).ctrlKey(!!a.ctrlKey).metaKey(!!a.metaKey).target(a.target), b), function() {
                return a.preventDefault()
            }), function() {
                return a.stopPropagation()
            }))
        },
        Lp = function() {
            this.D = null;
            this.C = "";
            this.W = this.G = this.H = this.I = this.F = this.B = this.A = this.S = null
        },
        Kp = function(a, b) {
            a.H = b;
            return a
        },
        Jp = function(a, b) {
            a.G = b;
            return a
        },
        Ip = function(a, b) {
            a.W = b;
            return a
        },
        Hp = function(a) {
            return new Gp(a.D,
                a.C, a.S, a.A, a.B, a.F, a.I, a.H, a.G, a.W)
        },
        Qp = function(a) {
            O.call(this);
            this.D = this.B = {};
            this.F = 0;
            this.N = wk(Np);
            this.K = wk(Op);
            this.H = this.I = !1;
            this.G = null;
            this.A = a;
            km(this.A, t, this.Ee, void 0, this);
            km(this.A, nh, this.Le, void 0, this);
            Pp && (km(this.A, u, this.Ne, void 0, this), km(this.A, oh, this.Oe, void 0, this));
            km(this.A, ne, this.Fe, void 0, this);
            km(this.A, ph, this.Me, void 0, this)
        },
        Rp = function(a) {
            this.A = a || null;
            this.next = a ? null : {}
        },
        Up = function(a, b) {
            if (typeof b[a] === w) a = cl(Sp(b[a]), function(e) {
                return Tp(e.key || "", e.keyCode,
                    e.modifiers)
            });
            else {
                var c = b,
                    d = a;
                Array.isArray(b[a]) && (c = b[a], d = 0);
                for (a = []; d < c.length; d += 2) a.push(Tp("", c[d], c[d + 1]))
            }
            return a
        },
        Sp = function(a) {
            a = a.replace(/[ +]*\+[ +]*/g, "+").replace(/[ ]+/g, " ").toLowerCase();
            a = a.split(" ");
            for (var b = [], c, d = 0; c = a[d]; d++) {
                var e = c.split("+"),
                    g = null,
                    h = null;
                c = 0;
                for (var k, l = 0; k = e[l]; l++) {
                    switch (k) {
                        case "shift":
                            c |= 1;
                            continue;
                        case "ctrl":
                            c |= 2;
                            continue;
                        case "alt":
                            c |= 4;
                            continue;
                        case "meta":
                            c |= 8;
                            continue
                    }
                    e = void 0;
                    g = k;
                    if (!Vp) {
                        h = {};
                        for (e in Wp) h[Wp[e]] = Cp(parseInt(e, 10));
                        Vp =
                            h
                    }
                    h = Vp[g];
                    g = k;
                    break
                }
                b.push({
                    key: g,
                    keyCode: h,
                    modifiers: c
                })
            }
            return b
        },
        Xp = function(a, b) {
            32 == a.G && 32 == b.A && (0, b.B)();
            a.G = null
        },
        Yp = function(a) {
            return Pp && a.C && a.D
        },
        Zp = function(a, b, c) {
            var d = b.shift();
            H(d, function(e) {
                if ((e = a[e]) && (0 == b.length || e.A)) throw Error("Keyboard shortcut conflicts with existing shortcut");
            });
            b.length ? H(d, function(e) {
                e = e.toString();
                var g = new Rp;
                e = e in a ? a[e] : a[e] = g;
                Zp(e.next, b.slice(0), c)
            }) : H(d, function(e) {
                a[e] = new Rp(c)
            })
        },
        $p = function(a, b) {
            var c = b.shift();
            H(c, function(d) {
                var e = a[d];
                e && (0 == b.length ? e.A && delete a[d] : e.next && ($p(e.next, b.slice(0)), rk(e.next) && delete a[d]))
            })
        },
        aq = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = a[b[c]];
                if (d) return d
            }
        },
        bq = function(a, b, c) {
            for (; 0 < c.length && b;) {
                var d = c.shift();
                if ((d = aq(b, d)) && (0 == c.length && d.A || bq(a, d.next, c.slice(0)))) return !0
            }
            return !1
        },
        Tp = function(a, b, c) {
            c = c || 0;
            b = ["c_" + b + "_" + c];
            "" != a && b.push("n_" + a + "_" + c);
            return b
        },
        cq = function(a, b, c) {
            a: {
                var d = b.A;
                if ("" != b.F) {
                    var e = b.F;
                    if ("Control" == e || "Shift" == e || "Meta" == e || "AltGraph" == e) {
                        d = !1;
                        break a
                    }
                } else if (16 ==
                    d || 17 == d || 18 == d) {
                    d = !1;
                    break a
                }
                e = b.S;
                var g = e.tagName == za || e.tagName == ma || "BUTTON" == e.tagName || "SELECT" == e.tagName,
                    h = !g && (e.isContentEditable || e.ownerDocument && "on" == e.ownerDocument.designMode);d = !g && !h || a.N[d] || a.H ? !0 : h ? !1 : b.D || b.C || b.G ? !0 : e.tagName == ma && a.K[e.type] ? 13 == d : e.tagName == ma || "BUTTON" == e.tagName ? 32 != d : !1
            }
            if (d)
                if (!c && Yp(b)) a.C = !1;
                else {
                    c = Cp(b.A);
                    d = Tp(b.F, c, (b.W ? 1 : 0) | (b.C ? 2 : 0) | (b.D ? 4 : 0) | (b.G ? 8 : 0));
                    e = aq(a.D, d);
                    if (!e || 1500 <= Fj() - a.F) a.D = a.B, a.F = Fj();
                    (e = aq(a.D, d)) && e.next && (a.D = e.next, a.F = Fj());
                    e && (e.next ? (0, b.B)() : (a.D = a.B, a.F = Fj(), (0, b.B)(), a.I && (0, b.I)(), d = e.A, e = a.J(new Fp(Mg, d, b.H)), (e &= a.J(new Fp(Ng + d, d, b.H))) || (0, b.B)(), K && (a.G = c)))
                }
        },
        eq = function(a) {
            O.call(this);
            this.F = !1;
            this.B = {};
            this.C = 0;
            this.D = new M(this);
            this.A = new Qp(a);
            this.A.ta(this);
            this.D.listen(a, t, this.Wg, dq);
            this.D.listen(a, u, this.Xg, dq);
            this.D.listen(a, ne, this.Yg, dq)
        },
        fq = function(a) {
            return (a.shiftKey || 16 == a.keyCode ? 1 : 0) | (a.ctrlKey || 17 == a.keyCode ? 2 : 0) | (a.altKey || 18 == a.keyCode ? 4 : 0) | (a.metaKey || 91 == a.keyCode ? 8 : 0)
        },
        gq = function(a) {
            a =
                Sp(a);
            if (1 == a.length) {
                a = a[0];
                var b = a.keyCode;
                if (!b || 1 & a.modifiers) return a.keyCode = 1 & a.modifiers ? 16 : 4 & a.modifiers ? 18 : 8 & a.modifiers ? 91 : 17, (b || a.keyCode) & 255 | a.modifiers << 8
            }
        },
        hq = function(a) {
            E.call(this);
            this.D = a;
            this.A = {};
            this.B = {};
            this.C = {};
            this.F = {}
        },
        jq = function(a, b) {
            b = b.replace("{APP}", iq);
            b = b.replace("{CODE}", a.Wd);
            var c = new Image;
            a.F[a.Ed] = c;
            a.rd || (c.onload = c.onerror = B(a.Vg, a, a.Ed));
            a.Ed++;
            c.src = b
        },
        kq = function() {},
        nq = function(a, b, c) {
            a.B = null;
            b || (b = []);
            a.H = void 0;
            a.C = -1;
            a.A = b;
            a: {
                if (b = a.A.length) {
                    --b;
                    var d = a.A[b];
                    if (!(null === d || typeof d != Mf || Array.isArray(d) || lq && d instanceof Uint8Array)) {
                        a.F = b - a.C;
                        a.D = d;
                        break a
                    }
                }
                a.F = Number.MAX_VALUE
            }
            a.G = {};
            if (c)
                for (b = 0; b < c.length; b++)
                    if (d = c[b], d < a.F) d += a.C, a.A[d] = a.A[d] || mq;
                    else {
                        var e = a.F + a.C;
                        a.A[e] || (a.D = a.A[e] = {});
                        a.D[d] = a.D[d] || mq
                    }
        },
        oq = function(a, b) {
            if (b < a.F) {
                b += a.C;
                var c = a.A[b];
                return c !== mq ? c : a.A[b] = []
            }
            if (a.D) return c = a.D[b], c === mq ? a.D[b] = [] : c
        },
        pq = function(a) {
            a = oq(a, 5);
            return null == a ? -1 : a
        },
        rq = function(a) {
            var b = qq;
            a.B || (a.B = {});
            if (!a.B[3]) {
                var c = oq(a, 3);
                for (var d = [], e = 0; e < c.length; e++) d[e] = new b(c[e]);
                a.B[3] = d
            }
            b = a.B[3];
            b == mq && (b = a.B[3] = []);
            return b
        },
        sq = function(a) {
            if (a.B)
                for (var b in a.B) {
                    var c = a.B[b];
                    if (Array.isArray(c))
                        for (var d = 0; d < c.length; d++) c[d] && sq(c[d]);
                    else c && sq(c)
                }
            return a.A
        },
        uq = function(a) {
            nq(this, a, tq)
        },
        qq = function(a) {
            nq(this, a, null)
        },
        zq = function(a) {
            vq.ita_icon_style || (vq.ita_icon_style = !0, Mo(wq(), xq.body));
            a = yq[a];
            return "ita-icon-" + (a ? pq(a) : 0)
        },
        Aq = function(a) {
            (a = zq(a)) && (a = "ita-kd-img " + a);
            return a || ""
        },
        wq = function() {
            var a = [],
                b = 0;
            mk(yq, function(d) {
                d = pq(d);
                d > b && (b = d)
            });
            for (var c = 0; c <= b; c++) a.push(pl(".ita-icon-" + c, {
                "background-position": -(c % 10 * 50 + 14) + "px " + -(50 * Math.floor(c / 10) + 17) + sg
            }));
            return rl(a)
        },
        Bq = function(a, b) {
            return xo(a, b) || yo(a, b) || a.style[b]
        },
        Cq = function(a) {
            return typeof a.className == w ? a.className : a.getAttribute && a.getAttribute("class") || ""
        },
        Dq = function(a) {
            return a.classList ? a.classList : Cq(a).match(/\S+/g) || []
        },
        Eq = function(a, b) {
            typeof a.className == w ? a.className = b : a.setAttribute && a.setAttribute("class", b)
        },
        Fq = function(a,
            b) {
            return a.classList ? a.classList.contains(b) : F(Dq(a), b)
        },
        V = function(a, b) {
            if (a.classList) a.classList.add(b);
            else if (!Fq(a, b)) {
                var c = Cq(a);
                Eq(a, c + (0 < c.length ? " " + b : b))
            }
        },
        Gq = function(a, b) {
            if (a.classList) H(b, function(e) {
                V(a, e)
            });
            else {
                var c = {};
                H(Dq(a), function(e) {
                    c[e] = !0
                });
                H(b, function(e) {
                    c[e] = !0
                });
                b = "";
                for (var d in c) b += 0 < b.length ? " " + d : d;
                Eq(a, b)
            }
        },
        W = function(a, b) {
            a.classList ? a.classList.remove(b) : Fq(a, b) && Eq(a, qn(Dq(a), function(c) {
                return c != b
            }).join(" "))
        },
        Hq = function(a, b) {
            a.classList ? H(b, function(c) {
                W(a,
                    c)
            }) : Eq(a, qn(Dq(a), function(c) {
                return !F(b, c)
            }).join(" "))
        },
        Iq = function(a, b, c) {
            W(a, b);
            V(a, c)
        },
        Jq = function() {},
        Lq = function(a) {
            if (a instanceof Jq) return a;
            if (typeof a.vb == r) return a.vb(!1);
            if (xj(a)) {
                var b = 0,
                    c = new Jq;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) throw Kq;
                        if (b in a) return a[b++];
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        Nq = function(a, b, c, d, e) {
            this.S = !!b;
            this.node = null;
            this.G = 0;
            this.K = !1;
            this.N = !c;
            a && Mq(this, a, d);
            this.H = void 0 != e ? e : this.G || 0;
            this.S && (this.H *= -1)
        },
        Mq = function(a, b, c, d) {
            if (a.node =
                b) a.G = typeof c === If ? c : 1 != a.node.nodeType ? 0 : a.S ? -1 : 1;
            typeof d === If && (a.H = d)
        },
        Oq = function() {},
        Pq = function(a) {
            for (var b = [], c = 0, d = a.Rb(); c < d; c++) b.push(a.mb(c));
            return b
        },
        Qq = function(a) {
            a = a.$b();
            return 1 == a.nodeType ? a : a.parentNode
        },
        Rq = function(a, b) {
            Nq.call(this, a, b, !0)
        },
        Sq = function(a, b, c, d, e) {
            this.F = this.D = null;
            this.A = this.B = 0;
            this.C = !!e;
            if (a) {
                this.D = a;
                this.B = b;
                this.F = c;
                this.A = d;
                if (1 == a.nodeType && "BR" != a.tagName)
                    if (a = a.childNodes, b = a[b]) this.D = b, this.B = 0;
                    else {
                        a.length && (this.D = Oj(a));
                        var g = !0
                    } 1 == c.nodeType &&
                    ((this.F = c.childNodes[d]) ? this.A = 0 : this.F = c)
            }
            Nq.call(this, this.C ? this.F : this.D, this.C, !0);
            if (g) try {
                this.next()
            } catch (h) {
                if (h != Kq) throw h;
            }
        },
        Tq = function() {},
        Uq = function(a, b) {
            a = a.C.getClientRects();
            return a.length ? (a = b ? a[0] : Oj(a), new P(b ? a.left : a.right, b ? a.top : a.bottom)) : null
        },
        Vq = function(a, b, c) {
            c = c && !b.za();
            b = b.nc();
            try {
                return c ? 0 <= a.Da(b, 0, 1) && 0 >= a.Da(b, 1, 0) : 0 <= a.Da(b, 0, 0) && 0 >= a.Da(b, 1, 1)
            } catch (d) {
                if (!N) throw d;
                return !1
            }
        },
        Wq = function(a) {
            this.C = a
        },
        Yq = function(a) {
            var b = Q(a).createRange();
            if (3 == a.nodeType) b.setStart(a,
                0), b.setEnd(a, a.length);
            else if (Xq(a)) {
                for (var c, d = a;
                    (c = d.firstChild) && Xq(c);) d = c;
                b.setStart(d, 0);
                for (d = a;
                    (c = d.lastChild) && Xq(c);) d = c;
                b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
            } else c = a.parentNode, a = Rj(c.childNodes, a), b.setStart(c, a), b.setEnd(c, a + 1);
            return b
        },
        Zq = function(a, b, c, d) {
            var e = Q(a).createRange();
            e.setStart(a, b);
            e.setEnd(c, d);
            return e
        },
        $q = function(a) {
            this.C = a
        },
        ar = function(a) {
            this.F = this.D = this.G = null;
            this.A = this.B = -1;
            this.C = a
        },
        br = function(a) {
            var b = Q(a).body.createTextRange();
            if (1 ==
                a.nodeType) b.moveToElementText(a), Xq(a) && !a.childNodes.length && b.collapse(!1);
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
                c && b.move(ob, c);
                b.moveEnd(ob, a.length)
            }
            return b
        },
        cr = function(a) {
            a.G = a.D = a.F = null;
            a.B = a.A = -1
        },
        dr = function(a, b) {
            for (var c = b.childNodes, d = 0, e = c.length; d < e; d++) {
                var g = c[d];
                if (Xq(g)) {
                    var h = br(g),
                        k = h.htmlText != g.outerHTML;
                    if (a.za() && k ? 0 <= a.Da(h, 1, 1) && 0 >=
                        a.Da(h, 1, 0) : a.C.inRange(h)) return dr(a, g)
                }
            }
            return b
        },
        fr = function(a, b, c) {
            c = c || a.ed();
            if (!c || !c.firstChild) return c;
            for (var d = 1 == b, e = 0, g = c.childNodes.length; e < g; e++) {
                var h = d ? e : g - e - 1,
                    k = c.childNodes[h];
                try {
                    var l = er(k)
                } catch (y) {
                    continue
                }
                var n = l.nc();
                if (a.za())
                    if (!Xq(k)) {
                        if (0 == a.Da(n, 1, 1)) {
                            a.B = a.A = h;
                            break
                        }
                    } else {
                        if (Vq(l, a)) return fr(a, b, k)
                    }
                else {
                    if (Vq(a, l)) {
                        if (!Xq(k)) {
                            d ? a.B = h : a.A = h + 1;
                            break
                        }
                        return fr(a, b, k)
                    }
                    if (0 > a.Da(n, 1, 0) && 0 < a.Da(n, 0, 1)) return fr(a, b, k)
                }
            }
            return c
        },
        gr = function(a, b) {
            var c = 1 == b,
                d = c ? a.va() :
                a.Ja();
            if (1 == d.nodeType) {
                d = d.childNodes;
                for (var e = d.length, g = c ? 1 : -1, h = c ? 0 : e - 1; 0 <= h && h < e; h += g) {
                    var k = d[h];
                    if (!Xq(k) && 0 == a.C.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), er(k).nc())) return c ? h : h + 1
                }
                return -1 == h ? 0 : h
            }
            a = a.C.duplicate();
            b = br(d);
            a.setEndPoint(c ? "EndToEnd" : "StartToStart", b);
            a = a.text.length;
            return c ? d.length - a : a
        },
        hr = function(a) {
            return 3 == a.nodeType ? a.nodeValue : a.innerText
        },
        ir = function(a) {
            this.C = a
        },
        jr = function(a) {
            this.C = a
        },
        lr = function(a) {
            return kr ? new ar(a, Q(a.parentElement())) :
                S ? new jr(a) : K ? new $q(a) : Km ? new ir(a) : new Wq(a)
        },
        er = function(a) {
            if (N && !Wl(9)) {
                var b = new ar(br(a), Q(a));
                if (Xq(a)) {
                    for (var c, d = a;
                        (c = d.firstChild) && Xq(c);) d = c;
                    b.D = d;
                    b.B = 0;
                    for (d = a;
                        (c = d.lastChild) && Xq(c);) d = c;
                    b.F = d;
                    b.A = 1 == d.nodeType ? d.childNodes.length : d.length;
                    b.G = a
                } else b.D = b.F = b.G = a.parentNode, b.B = Rj(b.G.childNodes, a), b.A = b.B + 1;
                a = b
            } else a = S ? new jr(Yq(a)) : K ? new $q(Yq(a)) : Km ? new ir(Yq(a)) : new Wq(Yq(a));
            return a
        },
        Xq = function(a) {
            return mn(a) || 3 == a.nodeType
        },
        mr = function() {
            this.A = this.F = this.B = this.D = this.G =
                null;
            this.C = !1
        },
        nr = function(a, b) {
            var c = new mr;
            c.G = a;
            c.C = !!b;
            return c
        },
        pr = function(a, b, c, d) {
            var e = new mr;
            e.C = or(a, b, c, d);
            if (yj(a) && 1 == a.nodeType && !mn(a)) {
                var g = a.parentNode;
                b = Rj(g.childNodes, a);
                a = g
            }
            yj(c) && 1 == c.nodeType && !mn(c) && (g = c.parentNode, d = Rj(g.childNodes, c), c = g);
            e.C ? (e.D = c, e.B = d, e.F = a, e.A = b) : (e.D = a, e.B = b, e.F = c, e.A = d);
            return e
        },
        qr = function(a) {
            var b;
            if (!(b = a.G)) {
                b = a.ua();
                var c = a.Ia(),
                    d = a.Ha(),
                    e = a.cb();
                if (N && !Wl(9)) {
                    var g = b,
                        h = c,
                        k = d,
                        l = e,
                        n = !1;
                    1 == g.nodeType && (h = g.childNodes[h], n = !h, g = h || g.lastChild ||
                        g, h = 0);
                    var y = br(g);
                    h && y.move(ob, h);
                    g == k && h == l ? y.collapse(!0) : (n && y.collapse(!1), n = !1, 1 == k.nodeType && (k = (h = k.childNodes[l]) || k.lastChild || k, l = 0, n = !h), g = br(k), g.collapse(!n), l && g.moveEnd(ob, l), y.setEndPoint("EndToEnd", g));
                    l = new ar(y, Q(b));
                    l.D = b;
                    l.B = c;
                    l.F = d;
                    l.A = e;
                    b = l
                } else b = S ? new jr(Zq(b, c, d, e)) : K ? new $q(Zq(b, c, d, e)) : Km ? new ir(Zq(b, c, d, e)) : new Wq(Zq(b, c, d, e));
                b = a.G = b
            }
            return b
        },
        rr = function() {},
        sr = function() {
            this.B = this.A = this.C = null
        },
        tr = function(a) {
            if (!a.A && (a.A = [], a.C))
                for (var b = 0; b < a.C.length; b++) a.A.push(a.C.item(b));
            return a.A
        },
        ur = function(a) {
            a.B || (a.B = tr(a).concat(), a.B.sort(function(b, c) {
                return b.sourceIndex - c.sourceIndex
            }));
            return a.B
        },
        vr = function(a) {
            this.A = this.F = this.D = null;
            a && (this.A = ur(a), this.D = this.A.shift(), this.F = Oj(this.A) || this.D);
            Nq.call(this, this.D, !1, !0)
        },
        wr = function() {
            this.A = [];
            this.D = [];
            this.C = this.B = null
        },
        xr = function(a) {
            a.B || (a.B = Pq(a), a.B.sort(function(b, c) {
                var d = b.ua();
                b = b.Ia();
                var e = c.ua();
                c = c.Ia();
                return d == e && b == c ? 0 : or(d, b, e, c) ? 1 : -1
            }));
            return a.B
        },
        yr = function(a) {
            this.A = null;
            this.B = 0;
            a &&
                (this.A = cl(xr(a), function(b) {
                    return Lq(b)
                }));
            Nq.call(this, a ? this.I() : null, !1, !0)
        },
        Ar = function(a) {
            return (a = (a || window).getSelection()) && zr(a)
        },
        zr = function(a) {
            var b = !1;
            if (a.createRange) try {
                var c = a.createRange()
            } catch (e) {
                return null
            } else if (a.rangeCount) {
                if (1 < a.rangeCount) {
                    b = new wr;
                    c = 0;
                    for (var d = a.rangeCount; c < d; c++) b.A.push(a.getRangeAt(c));
                    return b
                }
                c = a.getRangeAt(0);
                b = or(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
            } else return null;
            (a = c) && a.addElement ? (b = new sr, b.C = a, a = b) : a = nr(lr(a), b);
            return a
        },
        or = function(a, b, c, d) {
            if (a == c) return d < b;
            var e;
            if (1 == a.nodeType && b)
                if (e = a.childNodes[b]) a = e, b = 0;
                else if (sn(a, c)) return !0;
            if (1 == c.nodeType && d)
                if (e = c.childNodes[d]) c = e, d = 0;
                else if (sn(c, a)) return !1;
            return 0 < (vn(a, c) || b - d)
        },
        Cr = function(a) {
            Br();
            return new ol(a, nl)
        },
        Dr = function(a) {
            for (var b = null, c = a.firstChild; c;) {
                var d = c.nextSibling;
                3 == c.nodeType ? "" == c.nodeValue ? a.removeChild(c) : b ? (b.nodeValue += c.nodeValue, a.removeChild(c)) : b = c : (Dr(c), b = null);
                c = d
            }
        },
        Fr = function(a, b) {
            return b ? Er(a.ua(), a.Ia()) : Er(a.Ha(),
                a.cb())
        },
        Jr = function(a) {
            var b = a.Gd(),
                c = Gr(Fr(a, !b)),
                d = Hr(c),
                e = c.node.previousSibling;
            3 == c.node.nodeType && (c.node = null);
            var g = Gr(Fr(a, b)),
                h = Hr(g),
                k = g.node.previousSibling;
            3 == g.node.nodeType && (g.node = null);
            return function() {
                !c.node && e && (c.node = e.nextSibling, c.node || (c = new Ir(e, e.length || e.childNodes.length)));
                !g.node && k && (g.node = k.nextSibling, g.node || (g = new Ir(k, k.length || k.childNodes.length)));
                return pr(c.node || d.node.firstChild || d.node, c.offset, g.node || h.node.firstChild || h.node, g.offset)
            }
        },
        Gr = function(a) {
            var b;
            if (3 == a.node.nodeType)
                for (b = a.node.previousSibling; b && 3 == b.nodeType; b = b.previousSibling) a.offset += b.length || b.childNodes.length;
            else b = a.node.previousSibling;
            var c = a.node.parentNode;
            a.node = b ? b.nextSibling : c.firstChild;
            return a
        },
        Ir = function(a, b) {
            this.node = a;
            this.offset = b
        },
        Hr = function(a) {
            var b = a.node.parentNode;
            return new Ir(b, Rj(b.childNodes, a.node))
        },
        Er = function(a, b) {
            for (; 1 == a.nodeType;) {
                var c = a.childNodes[b];
                if (c || a.lastChild) c ? (a = c, b = 0) : (a = a.lastChild, b = a.length || a.childNodes.length);
                else break
            }
            return new Ir(a,
                b)
        },
        Kr = function(a, b) {
            b = Gn(b);
            try {
                for (; b && b != vq && b.frameElement; b = b.parent) {
                    var c = Io(b.frameElement);
                    a.x += c.x;
                    a.y += c.y
                }
            } catch (d) {}
        },
        Lr = function(a) {
            var b = a.getBoundingClientRect();
            if (N) {
                var c = Io(a);
                a = Ko(a);
                b.left = c.x;
                b.right = c.x + a.width;
                b.top = c.y;
                b.bottom = c.y + a.height
            }
            return b
        },
        Mr = function(a, b) {
            b = void 0 === b ? null : b;
            if (!b) b = Ar(Gn(a));
            else if (3 == b.ua().nodeType && 3 == b.Ha().nodeType) {
                var c = Uq(qr(b), !0),
                    d = Uq(qr(b), !1);
                if (c && d) return new P(c.x, d.y)
            }
            if (!b) return new P(0, 0);
            var e = kn(a.A, m);
            e.appendChild(In(a,
                "\u200b"));
            !N || I(9) ? b.Bc(e, !1) : (c = null, b.fb() || (c = b.eb(), b.collapse(!1)), e = b.ff(e), c && (b.collapse(!0), b.oc().moveStart(ob, 0 - c.length), b.select()));
            c = Lr(e);
            d = e.parentNode;
            a.Va(e);
            if (d) {
                if (a = b) {
                    var g = Jr(a);
                    a: {
                        var h = Qq(a);
                        for (a = 0; h;) {
                            b = h && h.nodeName;
                            if (h && ("block" == (1 != h.nodeType ? null : N ? yo(h, Ub) : xo(h, Ub)) || "TD" == b || "TABLE" == b || "LI" == b)) break a;
                            h = h.parentNode;
                            a++
                        }
                        h = null
                    }
                }
                h ? (d = wn(h, d), N ? Dr(d) : d.normalize()) : d && (N ? Dr(d) : d.normalize());
                g && g()
            }
            return new P(c.left, c.bottom)
        },
        Nr = function(a, b) {
            var c = R(a),
                d =
                0;
            if (typeof b === If) d = b;
            else if (N && !I(9)) {
                if (b = c.A.selection.createRange()) try {
                    var e = a.createTextRange(),
                        g = e.duplicate();
                    e.moveToBookmark(b.getBookmark());
                    g.setEndPoint("EndToStart", e);
                    d = g.text.length
                } catch (n) {}
            } else d = a.selectionStart;
            e = "_h#" + Bj(a);
            var h = c.L(e);
            h ? c.zc(h) : h = c.O("PRE", {
                id: e
            });
            h.parentNode || c.A.body.appendChild(h);
            var k = [];
            H(a.value, function(n, y, L) {
                k.push(" " == n && y + 1 != L.length && " " == L[y + 1] ? "\u00a0" : n)
            });
            k = k.join("");
            c.V(h, In(c, k.substring(0, d)));
            e = kn(c.A, m);
            e.appendChild(In(c, "\u200b"));
            c.V(h, e);
            c.V(h, In(c, k.substring(d) + " "));
            c = Dq(a);
            H(c, function(n) {
                V(h, n)
            });
            var l = "white-space:pre-wrap;word-wrap:pre-wrap;position:absolute;z-index:-9;visibility:hidden;display:block;";
            H(["font-family", "font-size", "font-weight", "font-style", Eh, Dh, He, "word-spacing", "line-height", "text-align", ti, Sb, "width", "height", "margin-top", "margin-right", "margin-bottom", "margin-left", "padding-top", "padding-right", "padding-bottom", "padding-left", "border-top-width", "border-right-width", "border-bottom-width", "border-left-width",
                "border-top-style", "border-right-style", "border-bottom-style", "border-left-style", "overflow-x", "overflow-y"
            ], function(n) {
                try {
                    var y = Bq(a, n);
                    y && (l += n + ":" + y + ";")
                } catch (L) {}
            });
            h.style.cssText = l;
            c = zo(a, "overflowX");
            h.style.overflowX = c && c != zi ? c : "auto";
            c = zo(a, "overflowY");
            h.style.overflowY = c && c != zi ? c : "auto";
            h.scrollTop = a.scrollTop;
            h.scrollLeft = a.scrollLeft;
            Bo(h, Fo(a));
            c = Lr(e);
            return a.tagName.toUpperCase() == ma ? new P(c.left, Math.ceil(Io(a).y + Ko(a).height)) : new P(c.left, Math.ceil(c.bottom))
        },
        Or = function(a,
            b) {
            this.A = a instanceof P ? a : new P(a, b)
        },
        Rr = function(a) {
            this.G = a;
            this.D = Pr(a);
            this.F = R(this.D);
            a = Qr(this);
            this.B = a[0];
            this.A = a[1];
            this.C = this.D.value.slice(this.B, this.A)
        },
        Qr = function(a) {
            if (void 0 !== a.D.selectionStart) return [a.D.selectionStart, a.D.selectionEnd];
            var b = a.F.A.selection.createRange();
            if (b) try {
                var c = a.D.createTextRange(),
                    d = c.duplicate();
                c.moveToBookmark(b.getBookmark());
                d.setEndPoint("EndToStart", c);
                var e = d.text.length;
                return [e, e + b.text.length]
            } catch (g) {}
            return [0, 0]
        },
        Sr = function(a) {
            this.F =
                this.D = null;
            this.A = this.B = 0;
            this.G = "";
            this.H = a;
            this.C = R(Pr(a));
            if (a = Ar(Gn(this.C))) this.D = a.ua(), this.B = a.Ia(), this.F = a.Ha(), this.A = a.cb(), this.G = a.eb()
        },
        Tr = function(a) {
            0 > a.B && (a.B = 0);
            var b = 3 == a.D.nodeType ? a.D.data.length : a.D.childNodes.length;
            a.B > b && (a.B = b);
            0 > a.A && (a.A = 0);
            b = 3 == a.F.nodeType ? a.F.data.length : a.F.childNodes.length;
            a.A > b && (a.A = b);
            return pr(a.D, a.B, a.F, a.A)
        },
        Ur = function(a, b, c, d) {
            $l.call(this, d);
            this.type = me;
            this.keyCode = a;
            this.charCode = b;
            this.repeat = c
        },
        Wr = function(a, b) {
            O.call(this);
            a &&
                Vr(this, a, b)
        },
        Vr = function(a, b, c) {
            a.Rc && Xr(a);
            a.Ib = b;
            a.Qc = km(a.Ib, u, a, c);
            a.Hd = km(a.Ib, t, a.Bf, c, a);
            a.Rc = km(a.Ib, ne, a.Og, c, a)
        },
        Xr = function(a) {
            a.Qc && (vm(a.Qc), vm(a.Hd), vm(a.Rc), a.Qc = null, a.Hd = null, a.Rc = null);
            a.Ib = null;
            a.ya = -1;
            a.Qa = -1
        },
        Yr = function(a) {
            switch (a.type) {
                case t:
                case u:
                    if (a.ctrlKey || a.metaKey || a.altKey || a.shiftKey && 32 == a.keyCode) return !0;
                    break;
                case p:
                    if (a.ctrlKey || a.metaKey || a.altKey || a.shiftKey) return !0;
                    break;
                case me:
                    if (a.ctrlKey || a.metaKey || a.altKey || a.shiftKey || a.F) return !0
            }
            return !1
        },
        Zr = function(a) {
            a instanceof
            $l && (a = a.A);
            if (a.getAttribute) {
                if (a.getAttribute("isFake")) return !0
            } else if (a.isFake) return !0;
            return !1
        },
        as = function(a, b, c, d) {
            c = void 0 === c ? 0 : c;
            var e = Gn(R(a)),
                g = e.document,
                h = [t, u, ne];
            try {
                if (g.createEvent) {
                    if (iq != qb || b != $r && b != zb) {
                        var k = g.createEvent("Events");
                        k.initEvent(b, !0, !0);
                        k.view = e;
                        k.isFake = !0;
                        k.charCode = 0;
                        k.keyCode = c;
                        if (d)
                            for (var l in d) k[l] = d[l]
                    } else k = g.createEvent("CustomEvent"), k.initCustomEvent(b, !0, !0, d);
                    a.dispatchEvent(k)
                } else if (F(h, b) && g.createEventObject && a.fireEvent) {
                    k = g.createEventObject();
                    k.bubbles = !0;
                    k.cancelable = !0;
                    k.view = e;
                    k.ctrlKey = !1;
                    k.altKey = !1;
                    k.shiftKey = !0;
                    k.metaKey = !1;
                    k.keyCode = c;
                    if (k.setAttribute && (k.setAttribute("isFake", !0), d))
                        for (var n in d) k.setAttribute(n, d[n]);
                    a.fireEvent("on" + b, k)
                }
            } catch (y) {}
        },
        cs = function(a, b, c) {
            if (bs) switch (b) {
                case 1:
                case 2:
                case 4:
                case 8:
                    as(a, t, 229);
                    as(a, "compositionstart");
                    as(a, "compositionupdate");
                    break;
                case 3:
                case 5:
                case 6:
                case 9:
                    b = {}, c && (b.data = c), as(a, zb, void 0, b), as(a, $r, void 0, b), as(a, "input"), as(a, ne)
            }
        },
        es = function(a, b, c) {
            Array.isArray(c) &&
                (c = c.join(" "));
            var d = "aria-" + b;
            "" === c || void 0 == c ? (ds || (ds = {
                atomic: !1,
                autocomplete: Hf,
                dropeffect: Hf,
                haspopup: !1,
                live: "off",
                multiline: !1,
                multiselectable: !1,
                orientation: si,
                readonly: !1,
                relevant: "additions text",
                required: !1,
                sort: Hf,
                busy: !1,
                disabled: !1,
                hidden: !1,
                invalid: "false"
            }), c = ds, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
        },
        fs = function(a, b, c) {
            E.call(this);
            this.A = a;
            this.C = b || 0;
            this.B = c;
            this.D = B(this.tg, this)
        },
        gs = function(a) {
            var b = a.nodeName.toUpperCase();
            this.F = b == la;
            this.G =
                b != za && b != ma;
            this.D = a;
            this.B = null;
            this.A = R(this.B);
            this.C = {}
        },
        Pr = function(a) {
            var b = a.B || (a.F ? (a.D.contentDocument || a.D.contentWindow.document || a.D.document).body : a.D);
            a.B != b && (a.B = b, a.A = R(b));
            return b
        },
        hs = function(a, b, c, d) {
            if (0 != d)
                for (var e in a.C) {
                    var g = a.C[e];
                    g != b && (b instanceof Rr && g instanceof Rr || b instanceof Sr && g instanceof Sr && (g.D == g.F && 3 == g.D.nodeType ? g.D : null) == (b.D == b.F && 3 == b.D.nodeType ? b.D : null)) && g.we(c, d)
                }
        },
        js = function(a, b) {
            a = a.match(is);
            b = b.match(is);
            return a[3] == b[3] && a[1] == b[1] &&
                a[4] == b[4]
        },
        ks = function(a, b) {
            if (a) {
                a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c].indexOf("="),
                        e = null;
                    if (0 <= d) {
                        var g = a[c].substring(0, d);
                        e = a[c].substring(d + 1)
                    } else g = a[c];
                    b(g, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
                }
            }
        },
        ms = function(a) {
            if (!a.tagName || a.readOnly) return !1;
            switch (a.tagName.toUpperCase()) {
                case za:
                    return !0;
                case ma:
                    return F("EMAIL NUMBER SEARCH TEL TEXT URL".split(" "), a.type.toUpperCase());
                case la:
                    try {
                        var b = ls(a);
                        return !!b && !!(b.designMode && "ON" == b.designMode.toUpperCase() ||
                            b.body && b.body.isContentEditable)
                    } catch (c) {
                        return !1
                    }
                default:
                    return !!a.isContentEditable
            }
        },
        ns = function(a, b) {
            if (a)
                for (var c = 0; c < b.length; c++) 0 == c ? Eq(a, b[0]) : V(a, b[c])
        },
        ls = function(a) {
            var b = Bj(document),
                c = Bj(a),
                d = os[b];
            d || (d = os[b] = {});
            try {
                var e = window.location.href || "";
                if (!(c in d))
                    if (a.src) {
                        var g = a.src.indexOf("//"),
                            h = 0 > g ? "N/A" : a.src.slice(0, g);
                        d[c] = "" != h && "http:" != h && "https:" != h || js(a.src, e)
                    } else d[c] = !0;
                return d[c] ? xn(a) : null
            } catch (k) {
                return d[c] = !1, null
            }
        },
        ps = function(a) {
            a = a || document;
            var b = [],
                c = [];
            Xj(b, (a || document).getElementsByTagName(la), (a || document).getElementsByTagName("FRAME"));
            H(b, function(d) {
                (d = ls(d)) && c.push(d)
            });
            return c
        },
        ss = function(a) {
            a = a || document;
            var b = R(),
                c = b.O(la, {
                    frameborder: "0",
                    scrolling: "no",
                    style: "background-color:transparent;border:0;display:none;"
                });
            b.ia(a.body, c);
            a = b.wg(c);
            b = qs ? rs.replace(/^(?:https?:)?\/\/ssl.gstatic.com\/inputtools\/images/g, qs) : rs;
            Mo(Cr("html body{border:0;margin:0;padding:0} html,body{overflow:hidden}" + b), a.body);
            return c
        },
        us = function(a, b) {
            Uo(b,
                Ko(a));
            H(ts, function(c) {
                vo(b, c, xo(a, c))
            })
        },
        ws = function() {
            E.call(this);
            this.B = {};
            this.G = {};
            this.A = [];
            this.C = vp;
            this.D = new M(this);
            vs(this)
        },
        zs = function() {
            var a = Bj(xq);
            xs[a] || (xs[a] = new ws);
            ys = xs[a];
            vs(ys)
        },
        vs = function(a) {
            a.A = ps(a.C.A);
            for (var b in a.B) As(a, b, a.F);
            As(a, u, a.H)
        },
        As = function(a, b, c) {
            ym(a.D, a.C.A, b, c, !0, a);
            H(a.A, function(d) {
                try {
                    ym(this.D, d, b, c, !0, this)
                } catch (e) {}
            }, a)
        },
        Bs = function(a, b, c) {
            Bm(a.D, a.C.A, b, c, !0, a);
            H(a.A, function(d) {
                try {
                    Bm(this.D, d, b, c, !0, this)
                } catch (e) {}
            }, a)
        },
        Cs = function(a, b,
            c, d, e) {
            var g = b.ownerDocument,
                h = !1;
            a.A = qn(a.A, function(l) {
                try {
                    l == g && (h = !0)
                } catch (n) {
                    return !1
                }
                return !0
            });
            if (g && g != a.C.A && !h) {
                a.A.push(g);
                try {
                    ym(a.D, g, c, a.F, !0, a)
                } catch (l) {}
            }
            if (c)
                if (Array.isArray(c))
                    for (var k = 0; k < c.length; k++) Cs(a, b, c[k], d, e);
                else {
                    k = a.B[c];
                    k || (k = {}, a.B[c] = k, As(a, c, a.F));
                    a = k[Bj(b)];
                    a || (a = [], k[Bj(b)] = a);
                    b = null;
                    for (c = 0; c < a.length; c++)
                        if (b = a[c], b.mc(d, e)) return;
                    b = new Ds(d, e);
                    a.push(b)
                }
            else throw Error(pa);
        },
        Es = function(a, b, c, d, e) {
            if (c)
                if (Array.isArray(c))
                    for (var g = 0; g < c.length; g++) Es(a,
                        b, c[g], d, e);
                else {
                    if (g = a.B[c]) {
                        var h = g[Bj(b)];
                        if (h) {
                            for (var k = 0; k < h.length; k++)
                                if (h[k].mc(d, e)) {
                                    Array.prototype.splice.call(h, k, 1);
                                    break
                                } 0 == h.length && delete g[Bj(b)]
                        }
                        rk(g) && (delete a.B[c], Bs(a, c, a.F))
                    }
                }
            else throw Error(pa);
        },
        Gs = function() {
            if (ys) return ys;
            Fs.listen("a", zs, !1, void 0);
            zs();
            return ys
        },
        Hs = function(a, b, c, d) {
            Cs(Gs(), a, b, c, d)
        },
        Is = function(a, b, c, d) {
            Es(Gs(), a, b, c, d)
        },
        Ds = function(a, b) {
            this.listener = a;
            this.ga = b
        },
        Js = function(a) {
            O.call(this);
            this.C = this.D = this.G = null;
            this.F = new M(this);
            a.commitText ?
                this.A = a : (this.G = a, this.A = new gs(this.G), this.D = Pr(this.A), a = this.A, this.C = a.F ? xn(a.D) : Pr(a))
        },
        Ks = function(a, b, c) {
            a.B || (a.B = new eq(a), a.B.A.I = !0, a.B.A.H = !0);
            if (!a.B.dd(b)) {
                c = c || b;
                var d = Ng + c;
                a.B.Vd(c, b);
                a.F.listen(a.B, d, a.Jb)
            }
        },
        Ls = function(a, b, c) {
            a.B && a.B.dd(b) && (c = Ng + (c || b), a.B.Af(b), Bm(a.F, a.B, c, a.Jb))
        },
        Ms = function(a, b) {
            J.call(this, a);
            this.C = b
        },
        Os = function(a) {
            var b = kn(document, ya);
            a = Rk(Ns, {
                id: a
            });
            b.src = Nk(a);
            xl(b);
            document.body.appendChild(b)
        },
        Qs = function(a) {
            var b = Ps;
            this.F = [];
            this.N = b;
            this.K = a ||
                null;
            this.C = this.D = !1;
            this.B = void 0;
            this.W = this.U = this.H = !1;
            this.G = 0;
            this.A = null;
            this.S = 0
        },
        Ss = function(a, b, c) {
            a.D = !0;
            a.B = c;
            a.C = !b;
            Rs(a)
        },
        Us = function(a) {
            if (a.D) {
                if (!a.W) throw new Ts(a);
                a.W = !1
            }
        },
        Vs = function(a, b, c, d) {
            a.F.push([b, c, d]);
            a.D && Rs(a)
        },
        Xs = function(a) {
            return Ws(a.F, function(b) {
                return typeof b[1] === r
            })
        },
        Rs = function(a) {
            if (a.G && a.D && Xs(a)) {
                var b = a.G,
                    c = Ys[b];
                c && (A.clearTimeout(c.qa), delete Ys[b]);
                a.G = 0
            }
            a.A && (a.A.S--, delete a.A);
            b = a.B;
            for (var d = c = !1; a.F.length && !a.H;) {
                var e = a.F.shift(),
                    g = e[0],
                    h =
                    e[1];
                e = e[2];
                if (g = a.C ? h : g) try {
                    var k = g.call(e || a.K, b);
                    void 0 !== k && (a.C = a.C && (k == b || a.isError(k)), a.B = b = k);
                    if (Xn(b) || typeof A.Promise === r && b instanceof A.Promise) d = !0, a.H = !0
                } catch (l) {
                    b = l, a.C = !0, Xs(a) || (c = !0)
                }
            }
            a.B = b;
            d && (k = B(a.I, a, !0), d = B(a.I, a, !1), b instanceof Qs ? (Vs(b, k, d), b.U = !0) : b.then(k, d));
            c && (b = new Zs(b), Ys[b.qa] = b, a.G = b.qa)
        },
        Ts = function() {
            Mj.call(this)
        },
        $s = function() {
            Mj.call(this)
        },
        Zs = function(a) {
            this.qa = A.setTimeout(B(this.B, this), 0);
            this.A = a
        },
        dt = function(a, b) {
            var c = b || {};
            b = c.document || document;
            var d = Nk(a).toString(),
                e = kn(document, ya),
                g = {
                    jf: e,
                    Eb: void 0
                },
                h = new Qs(g),
                k = null,
                l = null != c.timeout ? c.timeout : 5E3;
            0 < l && (k = window.setTimeout(function() {
                at(e, !0);
                var n = new bt(1, "Timeout reached for loading script " + d);
                Us(h);
                Ss(h, !1, n)
            }, l), g.Eb = k);
            e.onload = e.onreadystatechange = function() {
                e.readyState && "loaded" != e.readyState && e.readyState != yb || (at(e, c.sg || !1, k), Us(h), Ss(h, !0, null))
            };
            e.onerror = function() {
                at(e, !0, k);
                var n = new bt(0, "Error while loading script " + d);
                Us(h);
                Ss(h, !1, n)
            };
            g = c.attributes || {};
            uk(g, {
                type: "text/javascript",
                charset: "UTF-8"
            });
            an(e, g);
            e.src = Nk(a);
            xl(e);
            ct(b).appendChild(e);
            return h
        },
        ct = function(a) {
            var b = (a || document).getElementsByTagName("HEAD");
            return b && 0 != b.length ? b[0] : a.documentElement
        },
        Ps = function() {
            if (this && this.jf) {
                var a = this.jf;
                a && a.tagName == ya && at(a, !0, this.Eb)
            }
        },
        at = function(a, b, c) {
            null != c && A.clearTimeout(c);
            a.onload = vj;
            a.onerror = vj;
            a.onreadystatechange = vj;
            b && window.setTimeout(function() {
                on(a)
            }, 0)
        },
        bt = function(a, b) {
            var c = "Jsloader error (code #" + a + ")";
            b && (c += ": " + b);
            Mj.call(this,
                c);
            this.code = a
        },
        et = function() {
            this.N = X ? 0 : 2;
            this.K = !X;
            this.A = X ? 50 : 6;
            this.state = 5;
            this.H = this.F = !1;
            this.G = 50;
            this.Y = !1;
            this.X = this.P = this.La = !0;
            this.R = this.wb = !1;
            this.kc = null;
            this.Ra = this.W = !0;
            this.oa = !1;
            this.T = null;
            this.D = this.U = !0;
            this.Pb = !1;
            this.S = /[()\-_=+\[{\]}\\|;:'",<.>\/? \r]/g;
            this.Mb = /[^a-z0-9 \r]/i;
            this.C = /[a-z]/i;
            this.ea = /xyz/g;
            this.aa = /xyz/g;
            this.B = !1
        },
        gt = function() {
            ft || (ft = new O);
            return ft
        },
        jt = function(a) {
            ht(a);
            it[a] && gt().J(new Ms("cfga", a))
        },
        lt = function(a, b) {
            kt[b] || (kt[b] = {});
            if (kt[b][a]) return kt[b][a];
            it[a] || (it[a] = new et);
            var c = it[a],
                d = new et,
                e;
            for (e in c) d[e] = c[e];
            return kt[b][a] = d
        },
        nt = function(a) {
            dt(Rk(mt, {
                fileName: a
            }), {
                timeout: 1E4
            })
        },
        ht = function(a) {
            void 0 === it[a] && (it[a] = null, nt(a.replace(/-/g, "_")))
        },
        ot = function(a, b) {
            for (var c in b) {
                var d = b[c];
                switch (Number(c)) {
                    case 19:
                        a.fa = d;
                        break;
                    case 21:
                        a.transform = d;
                        break;
                    case 18:
                        a.Ic = d;
                        break;
                    case 20:
                        a.Nb = d;
                        break;
                    case 0:
                        a.I = Number(d);
                        break;
                    case 15:
                        a.state = Number(d);
                        break;
                    case 10:
                        a.F = !!d;
                        break;
                    case 29:
                        a.H = !!d;
                        break;
                    case 14:
                        a.A = X ? 50 : Number(d);
                        break;
                    case 13:
                        a.G =
                            Number(d);
                        break;
                    case 11:
                        a.K = !X && !!d;
                        break;
                    case 28:
                        a.Y = !!d;
                        break;
                    case 30:
                        a.La = !!d;
                        break;
                    case 1:
                        a.N = X ? 0 : Number(d);
                        break;
                    case 4:
                        a.P = !!d;
                        break;
                    case 3:
                        a.X = !!d;
                        break;
                    case 8:
                        a.wb = !!d;
                        break;
                    case 5:
                        a.R = !!d;
                        break;
                    case 16:
                        a.kc = d;
                        break;
                    case 2:
                        a.W = !!d;
                        break;
                    case 6:
                        a.Ra = !!d;
                        break;
                    case 32:
                        a.oa = !!d;
                        break;
                    case 23:
                        a.T = d;
                        break;
                    case 12:
                        a.U = !!d;
                        break;
                    case 9:
                        a.D = !!d;
                        break;
                    case 31:
                        a.Pb = !!d;
                        break;
                    case 27:
                        a.S = d;
                        break;
                    case 26:
                        a.Mb = d;
                        break;
                    case 22:
                        a.C = d;
                        break;
                    case 25:
                        a.ea = d;
                        break;
                    case 24:
                        a.aa = d;
                        break;
                    case 17:
                        a.rb = d;
                        break;
                    case 33:
                        a.B = !!d
                }
            }
        },
        qt = function(a, b) {
            var c = it[a];
            c && (ot(c, b), mk(kt, function(d) {
                d[a] && ot(d[a], b)
            }), jt(a));
            pt[a] = b
        },
        wt = function(a) {
            this.code = a;
            this.type = null;
            this.A = q;
            0 <= this.code.indexOf("-i0") ? (this.type = "im", gk(this.code, "-handwrit") ? this.type = "hw" : gk(this.code, "-voice") && (this.type = "vo")) : 0 <= this.code.indexOf("-k0") ? this.type = Ci : 0 == this.code.lastIndexOf("xkb", 0) && (this.type = "xkb");
            a = this.code.split(/-t|-i0|-k0|:/);
            "yue-hant" === a[0] && (a[0] = Li);
            switch (this.code) {
                case Ii:
                    a[0] = Li;
                    break;
                case Vi:
                case bj:
                    a[0] = Mi
            }
            this.A =
                "xkb" === this.type ? rt[this.code] ? rt[this.code] : st(a[a.length - 1]) : st(a[0]);
            if (this.type === Ci)
                if (tt[this.code]) this.Ua = tt[this.code];
                else if (ut[this.code]) this.Ua = ut[this.code].slice(4);
            else {
                var b = this.code.split("-t-");
                a = b[0];
                b = b[1];
                a = a.replace(/-/g, "_");
                "en_us" === a && (a = "us");
                !F(vt, a) || "und-latn-k0-und" !== b && "k0-und" !== b ? "k0-und" === b ? this.Ua = a : (b = b.match(/k0-(.*)/), b[1] && (this.Ua = a + "_" + b[1].replace("qwerty", "phone").replace("-", "_"))) : this.Ua = a + ("k0-und" === b ? "_inscript" : "_phone")
            }
        },
        At = function(a) {
            if (!a) return null;
            if ("nacl_mozc_jp" === a || "nacl_mozc_us" === a) a = ge;
            0 != a.lastIndexOf("xkb", 0) && (qk(xt, a) || (a = yt(a)), a = a.replace(/_/g, "-"), qk(xt, a) || (a = yt(a + "-und")));
            return zt[a] ? zt[a] : qk(xt, a) ? (zt[a] = new wt(a), zt[a]) : null
        },
        yt = function(a) {
            if (Bt[a]) return Bt[a];
            if ("vkd_iw" === a) return Wc;
            if ("im_t13n_iw" === a) return Vc;
            if (a === Xh) return Yh;
            var b = a.split("_"),
                c = "";
            0 == a.lastIndexOf("im_t13n", 0) ? c = b[2] + "-t-i0-und" : 0 == a.lastIndexOf("vkd_", 0) && (2 === b.length ? c = b[1] + aa : F(vt, b[1]) ? c = "inscript" === b[2] ? b[1] + aa : b[1] + "-t-und-latn-k0-und" :
                (c = b[1] + "-t-k0-" + b[2], qk(xt, c) || (c = b[1] + "-" + b[2] + aa)));
            return qk(xt, c) ? c : a
        },
        Et = function(a) {
            return F(Ct, a.code) || F(Dt, a.code)
        },
        Ft = function(a) {
            return X || "im" !== a.type ? !1 : /^(zh|yue)/.test(a.code)
        },
        st = function(a) {
            if ("und-ethi" === a) return "am";
            a = a.split("-");
            return 2 === a.length ? 2 === a[1].length ? a[0] + "-" + a[1].toUpperCase() : a[0] + "-" + a[1].charAt(0).toUpperCase() + a[1].slice(1) : pk(Gt, a[0]) ? Gt[a[0]] : a[0]
        },
        Ht = function(a, b) {
            this.B = a;
            this.A = b ? b : "callback";
            this.Eb = 5E3
        },
        Jt = function(a, b, c) {
            return function() {
                It(a, !1);
                c && c(b)
            }
        },
        Kt = function(a, b) {
            return function(c) {
                It(a, !0);
                b.apply(void 0, arguments)
            }
        },
        It = function(a, b) {
            a = "_callbacks___" + a;
            if (A[a])
                if (b) try {
                    delete A[a]
                } catch (c) {
                    A[a] = void 0
                } else A[a] = vj
        },
        Lt = function(a, b) {
            this.B = {};
            this.A = [];
            this.C = this.D = 0;
            var c = arguments.length;
            if (1 < c) {
                if (c % 2) throw Error(Ba);
                for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
            } else if (a)
                if (a instanceof Lt)
                    for (c = a.Ya(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
                else
                    for (d in a) this.set(d, a[d])
        },
        Mt = function(a, b) {
            return a === b
        },
        Ot = function(a) {
            if (a.D != a.A.length) {
                for (var b = 0, c = 0; b < a.A.length;) {
                    var d = a.A[b];
                    Nt(a.B, d) && (a.A[c++] = d);
                    b++
                }
                a.A.length = c
            }
            if (a.D != a.A.length) {
                var e = {};
                for (c = b = 0; b < a.A.length;) d = a.A[b], Nt(e, d) || (a.A[c++] = d, e[d] = 1), b++;
                a.A.length = c
            }
        },
        Nt = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        Pt = function(a) {
            if (a.Sa && typeof a.Sa == r) return a.Sa();
            if (typeof a === w) return a.split("");
            if (xj(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return nk(a)
        },
        Qt = function(a) {
            if (a.Ya && typeof a.Ya ==
                r) return a.Ya();
            if (!a.Sa || typeof a.Sa != r) {
                if (xj(a) || typeof a === w) {
                    var b = [];
                    a = a.length;
                    for (var c = 0; c < a; c++) b.push(c);
                    return b
                }
                return ok(a)
            }
        },
        Rt = function(a, b) {
            if (a.forEach && typeof a.forEach == r) a.forEach(b, void 0);
            else if (xj(a) || typeof a === w) H(a, b, void 0);
            else
                for (var c = Qt(a), d = Pt(a), e = d.length, g = 0; g < e; g++) b.call(void 0, d[g], c && c[g], a)
        },
        St = function() {
            this.D = this.B = this.A = null
        },
        Tt = function(a) {
            a.A || (a.A = new Lt, a.B = 0, a.D && ks(a.D, function(b, c) {
                a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
            }))
        },
        Ut = function(a) {
            var b =
                Qt(a);
            if ("undefined" == typeof b) throw Error("Keys are undefined");
            var c = new St;
            a = Pt(a);
            for (var d = 0; d < b.length; d++) {
                var e = b[d],
                    g = a[d];
                if (Array.isArray(g)) {
                    var h = c;
                    h.remove(e);
                    0 < g.length && (h.D = null, h.A.set(String(e), Wj(g)), h.B += g.length)
                } else c.add(e, g)
            }
            return c
        },
        Vt = function(a, b) {
            Tt(a);
            b = String(b);
            return Nt(a.A.B, b)
        },
        Wt = function(a, b) {
            E.call(this);
            this.H = a || id;
            this.F = b || "cb";
            this.S = Dm(bg);
            this.C = 0
        },
        Xt = function(a) {
            switch (a) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                    return !0;
                default:
                    return !1
            }
        },
        Yt = function() {
            O.call(this);
            this.C = 0;
            this.B = !1;
            this.A = null;
            this.D = this.F = !1
        },
        Zt = function(a) {
            if (a.A) {
                var b = a.A;
                a.A = null;
                a.C = 0;
                a.J("ready");
                try {
                    b.A = vj
                } catch (c) {}
            }
        },
        $t = function(a) {
            a.F || (a.F = !0, a.J(yb), a.J("error"))
        },
        au = function() {},
        bu = function(a, b, c) {
            if (null == b) c.push("null");
            else {
                if (typeof b == Mf) {
                    if (Array.isArray(b)) {
                        var d = b;
                        b = d.length;
                        c.push("[");
                        for (var e = "", g = 0; g < b; g++) c.push(e), bu(a, d[g], c), e = ",";
                        c.push("]");
                        return
                    }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                    else {
                        c.push("{");
                        e = "";
                        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (g = b[d], typeof g != r && (c.push(e), du(d, c), c.push(":"), bu(a, g, c), e = ","));
                        c.push("}");
                        return
                    }
                }
                switch (typeof b) {
                    case w:
                        du(b, c);
                        break;
                    case If:
                        c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                        break;
                    case "boolean":
                        c.push(String(b));
                        break;
                    case r:
                        c.push("null");
                        break;
                    default:
                        throw Error("Unknown type: " + typeof b);
                }
            }
        },
        du = function(a, b) {
            b.push('"', a.replace(eu, function(c) {
                    var d = fu[c];
                    d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), fu[c] = d);
                    return d
                }),
                '"')
        },
        gu = function() {},
        iu = function(a) {
            var b;
            (b = a.A) || (b = {}, hu(a) && (b[0] = !0, b[1] = !0), b = a.A = b);
            return b
        },
        ju = function() {},
        ku = function(a) {
            return (a = hu(a)) ? new ActiveXObject(a) : new XMLHttpRequest
        },
        hu = function(a) {
            if (!a.B && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                    var d = b[c];
                    try {
                        return new ActiveXObject(d), a.B = d
                    } catch (e) {}
                }
                throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
            }
            return a.B
        },
        lu = function(a) {
            O.call(this);
            this.headers = new Lt;
            this.H = a || null;
            this.B = !1;
            this.G = this.A = null;
            this.N = "";
            this.D = this.K = this.C = this.I = !1;
            this.U = 0;
            this.F = null;
            this.R = "";
            this.X = this.P = !1
        },
        nu = function(a, b, c, d) {
            var e = new lu;
            mu.push(e);
            b && e.listen(yb, b);
            e.S.add("ready", e.rg, !0, void 0, void 0);
            e.gd(!0);
            e.send(a, "POST", c, d)
        },
        ou = function(a) {
            return N && I(9) && typeof a.timeout === If && void 0 !== a.ontimeout
        },
        pu = function(a) {
            return "content-type" == a.toLowerCase()
        },
        su = function(a) {
            a.B = !1;
            a.A && (a.D = !0, a.A.abort(),
                a.D = !1);
            qu(a);
            ru(a)
        },
        qu = function(a) {
            a.I || (a.I = !0, a.J(yb), a.J("error"))
        },
        uu = function(a) {
            if (a.B && "undefined" != typeof tu && (!a.G[1] || 4 != (a.A ? a.A.readyState : 0) || 2 != a.bc()))
                if (a.C && 4 == (a.A ? a.A.readyState : 0)) oo(a.$e, 0, a);
                else if (a.J(tg), 4 == (a.A ? a.A.readyState : 0)) {
                a.B = !1;
                try {
                    a.Pc() ? (a.J(yb), a.J("success")) : qu(a)
                } finally {
                    ru(a)
                }
            }
        },
        ru = function(a, b) {
            if (a.A) {
                vu(a);
                var c = a.A,
                    d = a.G[0] ? vj : null;
                a.A = null;
                a.G = null;
                b || a.J("ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {}
            }
        },
        vu = function(a) {
            a.A && a.X && (a.A.ontimeout = null);
            a.F && (A.clearTimeout(a.F), a.F = null)
        },
        wu = function(a) {
            E.call(this);
            this.F = 0;
            this.C = a || id;
            this.A = !N || Wl(10) || js(window.location.href, this.C) ? new lu : new Yt;
            this.B = null;
            this.D = new M(this);
            this.G = Dm(bg);
            this.A.gd && this.A.gd(!0)
        },
        xu = function(a) {
            E.call(this);
            this.D = null;
            this.active = !1;
            this.A = null;
            this.C = a || yp.pa()
        },
        yu = function(a, b, c) {
            var d = "old" + b;
            if (c) {
                c = a.getAttribute(b);
                var e = a.hasAttribute(b);
                "off" != c && (a.setAttribute(b, "off"), e && a.setAttribute(d, c))
            } else c = a.getAttribute(d), a.hasAttribute(d) ? (a.setAttribute(b,
                c), a.removeAttribute(d)) : a.removeAttribute(b)
        },
        Au = function(a) {
            xu.call(this);
            this.B = zu(a, function(b, c) {
                b.push(c());
                return b
            }, []);
            this.F = {};
            this.G = []
        },
        Bu = function(a, b, c, d, e, g) {
            this.source = a;
            this.target = b;
            this.A = c;
            this.B = e || !1;
            this.type = d || 0;
            this.D = g || ""
        },
        Cu = function(a, b, c, d, e) {
            this.source = a;
            this.target = b;
            this.A = c || "";
            this.B = d || "";
            this.D = e || 0;
            this.timestamp = (new Date).getTime()
        },
        Du = function(a, b) {
            J.call(this, "cmt");
            this.H = a;
            this.C = b
        },
        Eu = function() {
            this.A = {}
        },
        Gu = function(a) {
            Fu[a] || (Fu[a] = new Eu);
            return Fu[a]
        },
        Hu = function(a, b, c, d, e, g, h) {
            this.A = [];
            this.B = (e || 2) * d.A + 1;
            this.source = b;
            this.C = a;
            this.H = c;
            this.type = g || 0;
            this.G = d;
            this.S = h || {};
            this.F = "";
            this.D = !0
        },
        Ju = function(a) {
            var b = {
                text: Iu(a),
                itc: a.H,
                num: String(a.B),
                cp: "0",
                cs: "1",
                ie: "utf-8",
                oe: "utf-8",
                app: iq
            };
            uk(b, a.S);
            return b
        },
        Iu = function(a) {
            var b = a.F + a.C;
            if (1 == a.type) return b;
            b = b ? "|" + b.replace(/[,|:]/g, escape) + "," : "";
            var c = a.source;
            1 != a.G.I && (c = c.replace(/[,|:%]/g, escape));
            return b + c
        },
        Ku = function(a) {
            J.call(this, "mup");
            this.C = a
        },
        Lu = function(a, b, c, d, e) {
            this.source =
                a;
            this.target = b;
            this.A = 1;
            this.B = c || "";
            this.D = d || "";
            this.C = e || []
        },
        Mu = function() {
            this.A = {};
            this.B = []
        },
        Ou = function(a) {
            Nu[a] || (Nu[a] = new Mu);
            return Nu[a]
        },
        Qu = function(a, b, c, d, e, g) {
            a.A[b] || (a.A[b] = []);
            c = c && hk(c);
            for (var h = a.A[b], k = !1, l = 0; l < h.length; l++) h[l].target == c && (h[l].A++, k = !0);
            k || h.push(new Lu(b, c, d));
            Pu && a.B.push(new Lu(b, c, d, e, g))
        },
        Ru = function(a, b) {
            if (!a.A[b]) return [];
            a = a.A[b].slice(0);
            ck(a, function(c, d) {
                return d.A - c.A
            });
            return a
        },
        Su = function(a) {
            return 0 == a.B.length ? null : {
                feedback: cl(a.B, function(b) {
                    return b.toJSON()
                })
            }
        },
        Tu = function(a, b) {
            this.xc = a;
            this.offset = b
        },
        Uu = function(a) {
            this.A = [];
            this.offset = a
        },
        Vu = function(a) {
            this.B = a;
            this.A = ok(a)
        },
        Wu = function(a, b) {
            var c = new Uu(b.length);
            H(a.A, function(d) {
                var e = b.indexOf(d); - 1 < e && e <= c.offset && (e < c.offset && (c.A = [], c.offset = e), c.A.push(d))
            });
            return c
        },
        Xu = function(a, b) {
            if (!b) return [];
            for (var c = [], d = [], e = b; 2 > c.length && e;) {
                var g = Wu(a, e);
                if (0 != g.A.length)
                    for (var h = 0; h < g.A.length; h++)
                        for (var k = g.A[h], l = a.B[k], n = 0; n < l.length; n++) d.push(new Tu(e.slice(0, g.offset) + l[n], g.offset + k.length));
                else d.push(new Tu(e, e.length));
                if (1 == c.length)
                    for (c = c.pop(), e = 0; e < d.length; e++) d[e].xc = c.xc + d[e].xc, d[e].offset += c.offset;
                c = d;
                d = [];
                if (0 == c.length) break;
                e = b.slice(c[0].offset)
            }
            return c
        },
        Zu = function(a, b) {
            O.call(this);
            this.B = a;
            this.A = b;
            this.F = (a = this.A.kc) ? new Vu(a) : null;
            this.G = Dm(bg);
            iq == qb ? this.D = Yu : Om() && (this.D = new wu)
        },
        $u = function(a, b) {
            for (var c = 0, d; d = b[c]; c++) d.A.length >= d.B ? (d.D = !0, d.A.splice(d.B - 1, d.A.length - d.B + 1)) : d.D = !1;
            a.J(new Ku(b))
        },
        av = function(a, b) {
            if (a.F && !(b.A.length >= b.B)) {
                var c = Xu(a.F,
                    b.source);
                for (a = {
                        sb: 0
                    }; a.sb < c.length && (0 <= Pj(b.A, function(d) {
                        return function(e) {
                            return e.target == c[d.sb].xc
                        }
                    }(a)) || (b.A.push(new Bu(b.source.slice(0, c[a.sb].offset), c[a.sb].xc, "", 2)), !(b.A.length >= b.B))); a = {
                        sb: a.sb
                    }, a.sb++);
            }
        },
        bv = function(a, b) {
            if (!a.A.P && b.source) {
                var c = b.A[0];
                if (!c || c.B || !a.A.H || 4 != c.type && 3 != c.type && 5 != c.type)
                    if (c = Pj(b.A, function(e) {
                            return e.target == b.source
                        }), !(0 == c || 0 < c && !a.A.oa)) {
                        var d = new Bu(b.source, b.source, "");
                        a.A.oa ? (0 <= c && b.A.splice(c, 1), 2 > b.A.length ? b.A.push(d) : b.A.splice(1,
                            0, d)) : b.A.length >= a.A.A ? b.A.splice(a.A.A - 1, 0, d) : b.A.push(d)
                    }
            }
        },
        cv = function(a, b, c) {
            O.call(this);
            this.status = 0;
            this.source = "";
            this.A = 0;
            this.N = "";
            this.D = -1;
            this.H = !0;
            this.R = this.Ea = this.K = !1;
            this.I = b;
            this.B = c;
            this.C = [];
            this.X = new Zu(this.I.code, c);
            this.U = a;
            this.T = new M(this);
            this.U.ta(this);
            this.T.listen(this.X, "mup", this.Ab)
        },
        dv = function(a) {
            return 0 > a.D || 0 == a.C.length ? 0 : Math.floor(a.D / a.B.A)
        },
        ev = function(a, b, c) {
            (c = void 0 === c ? "" : c) || a.J("dlc");
            a.U.push(b, c);
            a.reset()
        },
        fv = function(a) {
            a.J("mup")
        },
        hv = function(a,
            b, c) {
            if (a.Ea) a.status = 1, fv(a);
            else {
                var d = a.lb();
                if (d || c) {
                    b = new Hu(a.Za(), d, a.I.code, a.B, b, c, a.wd());
                    if (a.B.R || 1 == c) b.F = a.N;
                    a.status = 2;
                    fv(a);
                    d = a.X;
                    if (1 == c ? 0 : a.R) av(d, b), $u(d, [b]);
                    else if ((a = Gu(d.B).load(Iu(b))) && b.B <= a[0]) d.G.push("od", 2), d.C(b, !1, !0, a);
                    else {
                        a = Su(Ou(d.B));
                        c = Yu;
                        var e = 0 == b.type ? "/request" : "/predict";
                        0 == b.type && a && d.D ? d.D.send(e, Ju(b), B(d.C, d, b, !0), void 0, gv, a) : c.send(e, Ju(b), B(d.C, d, b, !1))
                    }
                }
            }
        },
        iv = function(a, b, c) {
            cv.call(this, a, b, c);
            this.F = [];
            this.G = Dm(bg)
        },
        jv = function(a) {
            var b = a.C[a.D];
            a.G.push("slen", b.source.length);
            a.G.push("tlen", b.target.length);
            a.G.push("ci", a.D);
            a.G.push("dur", Fj() - a.mf)
        },
        lv = function(a, b, c) {
            O.call(this);
            this.target = a;
            this.C = b || a;
            this.I = c || new so(NaN, NaN, NaN, NaN);
            this.B = Q(a);
            this.A = new M(this);
            Kj(this, this.A);
            this.deltaY = this.deltaX = this.P = this.X = this.screenY = this.screenX = this.clientY = this.clientX = 0;
            this.G = !0;
            this.D = !1;
            km(this.C, [Uh, bf], this.Yc, !1, this);
            this.F = kv
        },
        ov = function(a, b, c) {
            var d = en(R(a.B).A);
            b += d.x - a.K.x;
            c += d.y - a.K.y;
            a.K = d;
            a.deltaX += b;
            a.deltaY +=
                c;
            return new P(mv(a, a.deltaX), nv(a, a.deltaY))
        },
        qv = function(a, b, c, d) {
            a.target.style.left = c + sg;
            a.target.style.top = d + sg;
            a.J(new pv("drag", a, b.clientX, b.clientY, b, c, d))
        },
        mv = function(a, b) {
            var c = a.I;
            a = isNaN(c.left) ? null : c.left;
            c = isNaN(c.width) ? 0 : c.width;
            return Math.min(null != a ? a + c : Infinity, Math.max(null != a ? a : -Infinity, b))
        },
        nv = function(a, b) {
            var c = a.I;
            a = isNaN(c.top) ? null : c.top;
            c = isNaN(c.height) ? 0 : c.height;
            return Math.min(null != a ? a + c : Infinity, Math.max(null != a ? a : -Infinity, b))
        },
        pv = function(a, b, c, d, e, g, h) {
            J.call(this,
                a);
            this.clientX = c;
            this.clientY = d;
            this.left = void 0 !== g ? g : b.deltaX;
            this.top = void 0 !== h ? h : b.deltaY
        },
        rv = function(a, b, c) {
            lv.call(this, a, b, c);
            b && this.B != Q(b) && (this.H = fn(Q(b)).frameElement)
        },
        sv = function(a, b) {
            var c = b.documentElement,
                d = !kv;
            a.A.listen(b, [Th, cf], a.T, d);
            a.A.listen(b, [Sh, ef], a.zb, d);
            kv ? (c.setCapture(!1), a.A.listen(c, "losecapture", a.zb)) : a.A.listen(fn(b), ab, a.zb)
        },
        tv = function(a, b) {
            Q(b.target) != a.B && a.H && (b.clientX += a.H.offsetLeft, b.clientY += a.H.offsetTop)
        },
        vv = function(a) {
            if (a && Jm) {
                if (null == uv) {
                    var b =
                        R(),
                        c = b.A,
                        d = kn(b.A, "div");
                    d.style.backgroundColor = "rgb(1, 2, 3)";
                    b.V(c.body, d);
                    c = xo(d, "backgroundColor");
                    c = c.replace(/ /g, "");
                    c = "rgb(0,0,0)" === c ? "black" : "rgb(255,255,255)" === c ? "white" : Hf;
                    b.Va(d);
                    uv = c
                }
                switch (uv) {
                    case "white":
                        Iq(a, zd, Ad);
                        break;
                    case "black":
                        Iq(a, Ad, zd);
                        break;
                    default:
                        Hq(a, [zd, Ad])
                }
            }
        },
        wv = function(a) {
            J.call(this, "clkc");
            this.index = a
        },
        xv = function(a) {
            this.A = a
        },
        yv = function(a, b) {
            a && (a.tabIndex = b ? 0 : -1)
        },
        zv = function(a, b) {
            b = b.L();
            Qo(b, K);
            N && (b.hideFocus = !0);
            (a = a.A) && (a ? b.setAttribute("role", a) :
                b.removeAttribute("role"))
        },
        Av = function() {},
        Cv = function(a, b, c) {
            if (a = a.L ? a.L() : a) {
                var d = [b];
                N && !I("7") && (d = Bv(Dq(a), b), d.push(b));
                (c ? Gq : Hq)(a, d)
            }
        },
        Dv = function(a, b) {
            var c;
            if (c = a.L()) {
                if (!b && a.wa & 32) {
                    try {
                        c.blur()
                    } catch (d) {}
                    a.wa & 32 && a.ee(null)
                }(zn(c) && An(c)) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
            }
        },
        Gv = function(a, b, c) {
            Ev || (Ev = {
                1: Tb,
                8: Lg,
                16: pb,
                64: "expanded"
            });
            b = Ev[b];
            var d = a.getAttribute("role") || null;
            d && (d = Fv[d] || b, b = b == pb || b == Lg ? d : b);
            b && es(a, b, c)
        },
        Hv = function() {
            return "goog-control"
        },
        Bv = function(a, b) {
            var c = [];
            b && (a = Vj(a, [b]));
            H([], function(d) {
                !Iv(d, Ej(F, a)) || b && !F(d, b) || c.push(d.join("_"))
            });
            return c
        },
        Jv = function(a, b) {
            if (!a.A) {
                var c = Hv();
                c.replace(/\xa0|\s/g, " ");
                a.A = {
                    1: c + "-disabled",
                    2: c + "-hover",
                    4: c + "-active",
                    8: c + "-selected",
                    16: c + "-checked",
                    32: c + "-focused",
                    64: c + "-open"
                }
            }
            return a.A[b]
        },
        Lv = function(a, b, c) {
            U.call(this, c);
            if (!b) {
                for (b = this.constructor; b;) {
                    var d = Bj(b);
                    if (d = Kv[d]) break;
                    b = (b = Object.getPrototypeOf(b.prototype)) && b.constructor
                }
                b = d ? typeof d.pa === r ? d.pa() : new d : null
            }
            this.C =
                b;
            this.ud = void 0 !== a ? a : null
        },
        Ov = function(a, b) {
            Mv(a, 2, b) && Nv(a, 2, b)
        },
        Pv = function(a, b) {
            Mv(a, 4, b) && Nv(a, 4, b)
        },
        Qv = function(a, b) {
            Mv(a, 64, b) && Nv(a, 64, b)
        },
        Nv = function(a, b, c, d) {
            if (!d && 1 == b) a.setEnabled(!c);
            else if (39 & b && c != !!(a.wa & b)) {
                var e = a.C;
                if (d = a.L())(e = Jv(e, b)) && Cv(a, e, c), Gv(d, b, c);
                a.wa = c ? a.wa | b : a.wa & ~b
            }
        },
        Rv = function(a) {
            return !!(255 & a) && !!(39 & a)
        },
        Mv = function(a, b, c) {
            return !!(39 & b) && !!(a.wa & b) != c && (!(0 & b) || a.J(pp(b, c))) && !a.W
        },
        Sv = function(a, b) {
            if (Rv(16)) {
                var c = !(a.wa & 16);
                Mv(a, 16, c) && Nv(a, 16, c)
            }
            Rv(8) &&
                Mv(a, 8, !0) && Nv(a, 8, !0);
            Rv(64) && Qv(a, !(a.wa & 64));
            c = new J(Fa, a);
            b && (c.altKey = b.altKey, c.ctrlKey = b.ctrlKey, c.metaKey = b.metaKey, c.shiftKey = b.shiftKey, c.F = b.F);
            return a.J(c)
        },
        Tv = function() {
            return new Lv(null)
        },
        Vv = function(a) {
            E.call(this);
            this.B = a;
            this.A = !1;
            this.D = new M(this);
            Kj(this, this.D);
            a = this.B.D;
            this.D.listen(a, Uv.fc, this.C).listen(a, Uv.hc, this.F).listen(a, p, this.G)
        },
        Xv = function(a, b) {
            if (!Wv) return a.button = 0, a.type = b, a;
            var c = document.createEvent("MouseEvents");
            c.initMouseEvent(b, a.bubbles, a.cancelable,
                a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
            return c
        },
        Y = function(a, b, c) {
            U.call(this, c);
            this.jd = b || xv.pa();
            this.Wb = a || si
        },
        Yv = function(a) {
            return a.Id || a.L()
        },
        Zv = function(a, b) {
            var c = qp(a),
                d = Yv(a);
            b ? c.listen(d, wc, a.he).listen(d, ab, a.ge).listen(a.ub || (a.ub = new Wr(Yv(a))), me, a.je) : Bm(Bm(Bm(c, d, wc, a.he), d, ab, a.ge), a.ub || (a.ub = new Wr(Yv(a))), me, a.je)
        },
        dw = function(a, b) {
            var c = sp(a, a.Na);
            if (c && typeof c.cc == r && c.cc(b) || a.ma && a.ma !=
                c && typeof a.ma.cc == r && a.ma.cc(b)) return !0;
            if (b.shiftKey || b.ctrlKey || b.metaKey || b.altKey) return !1;
            switch (b.keyCode) {
                case 27:
                    if (a.Qb) Yv(a).blur();
                    else return !1;
                    break;
                case 36:
                    $v(a);
                    break;
                case 35:
                    aw(a);
                    break;
                case 38:
                    if (a.Wb == si) bw(a);
                    else return !1;
                    break;
                case 37:
                    if (a.Wb == dd) rp(a) ? cw(a) : bw(a);
                    else return !1;
                    break;
                case 40:
                    if (a.Wb == si) cw(a);
                    else return !1;
                    break;
                case 39:
                    if (a.Wb == dd) rp(a) ? bw(a) : cw(a);
                    else return !1;
                    break;
                default:
                    return !1
            }
            return !0
        },
        ew = function(a) {
            0 != a.Qb && a.Ta && Zv(a, !1);
            a.Qb = !1;
            a.tb && a.gb && yv(Yv(a),
                !1)
        },
        fw = function(a, b) {
            (b = sp(a, b)) ? Ov(b, !0): -1 < a.Na && Ov(sp(a, a.Na), !1)
        },
        $v = function(a) {
            gw(a, function(b, c) {
                return (b + 1) % c
            }, (a.F ? a.F.length : 0) - 1)
        },
        aw = function(a) {
            gw(a, function(b, c) {
                b--;
                return 0 > b ? c - 1 : b
            }, 0)
        },
        cw = function(a) {
            gw(a, function(b, c) {
                return (b + 1) % c
            }, a.Na)
        },
        bw = function(a) {
            gw(a, function(b, c) {
                b--;
                return 0 > b ? c - 1 : b
            }, a.Na)
        },
        gw = function(a, b, c) {
            c = 0 > c ? up(a, a.ma) : c;
            var d = a.F ? a.F.length : 0;
            c = b.call(a, c, d);
            for (var e = 0; e <= d;) {
                var g = sp(a, c),
                    h;
                if (h = g) h = g.isVisible() && g.isEnabled() && !0;
                if (h) {
                    fw(a, c);
                    break
                }
                e++;
                c =
                    b.call(a, c, d)
            }
        },
        hw = function(a, b) {
            var c = ss(b.A);
            b = R(xn(c));
            Y.call(this, void 0, void 0, b);
            this.N = c;
            this.model = a;
            this.R = [];
            this.B = this.A;
            this.P = this.ba = null
        },
        iw = function(a) {
            a = Jn(a.B, 2);
            a.cellPadding = "0";
            a.cellSpacing = "0";
            a.border = "0";
            Eq(a, "ita-ppe-tbl");
            Eq(a.firstChild, Yd);
            a.rows[0].cells[1].style.width = "1px";
            for (var b = 0; 1 > b; b++) {
                Eq(a.rows[b], Yd);
                for (var c = 0; 2 > c; c++) Eq(a.rows[b].cells[c], Yd)
            }
            return a
        },
        jw = function(a, b) {
            a.H = a.B.O(f, ["ita-ppe-pgu", Qd]);
            a.G = a.B.O(f, ["ita-ppe-pgd", Qd]);
            var c = a.B.O(f, "ita-ppe-navi-box");
            a.B.ia(c, a.H, a.G);
            a.B.ia(b, c)
        },
        lw = function(a) {
            a.C.style.display = Hf;
            if (0 == a.model.status || 0 == a.model.C.length && !a.model.B.U) a.na(!1);
            else {
                a.model.B.U && (a.B.zc(a.K), a.bd());
                if (2 == a.model.status) V(a.I, Xd);
                else {
                    W(a.I, Xd);
                    a.R = [];
                    a.B.zc(a.I);
                    var b = dv(a.model) * a.model.B.A,
                        c = b + a.model.B.A,
                        d = a.model.C.length;
                    c > d && (c = d);
                    for (var e = b; e < c; e++) {
                        var g = a.model.C[e],
                            h = "",
                            k = e + 1 - b;
                        if (1 < d || 3 != g.type && 4 != g.type && 5 != g.type) switch (a.model.B.N) {
                            case 1:
                                h = a.model.B.rb(k) + ". ";
                                break;
                            case 2:
                                h = String(k) + ". "
                        }
                        h = a.B.O(f, "ita-ppe-can",
                            h + g.target);
                        a.model.D == e && V(h, "ita-ppe-hlt");
                        a.model.B.K || (h.style.display = "inline");
                        a.model.B.Pb && g.A && a.B.ia(h, a.B.O(m, "ita-ppe-ant", " (" + g.A + ")"));
                        a.R.push(h)
                    }
                    a.B.ia(a.I, a.R);
                    Qo(a.I)
                }
                a: if (!X) {
                    if (1 == a.model.C.length && (b = a.model.C[0].type, 3 == b || 4 == b || 5 == b)) {
                        a.H.style.display = Hf;
                        a.G.style.display = Hf;
                        break a
                    }
                    a.H.style.display = rd;
                    a.G.style.display = rd;
                    b = dv(a.model);
                    c = Math.ceil(a.model.C.length / a.model.B.A);
                    3 != a.model.status ? (V(a.H, Wd), V(a.G, Wd)) : (0 == b ? V(a.H, Wd) : W(a.H, Wd), b != c - 1 || a.model.H ? W(a.G, Wd) :
                        V(a.G, Wd))
                } Uo(a.N, Ko(a.L()));
                a.P && kw(a, a.P);
                if (!X) {
                    b = a.N;
                    if (0 > b.offsetLeft) b.style.left = "0px";
                    else {
                        var l = Go(b);
                        b.offsetLeft + b.offsetWidth > l.right && (b.style.left = l.right - b.offsetWidth + sg)
                    }
                    0 > b.offsetTop ? b.style.top = "0px" : (l || (l = Go(b)), b.offsetTop + b.offsetHeight > l.bottom && (b.style.top = b.offsetTop - b.offsetHeight - 18 + sg))
                }
                a.na(!0)
            }
        },
        kw = function(a, b) {
            var c = a.N;
            X ? c.style.top = b.A.y + Gn(a.A).scrollY + sg : (a.P = b, b.Ga(c, 8))
        },
        mw = function(a, b) {
            hw.call(this, a, b)
        },
        nw = function(a, b) {
            this.A = a;
            this.C = b;
            this.G = {};
            this.S = {};
            this.B = null;
            this.F = "";
            this.D = !0;
            this.H = !1
        },
        ow = function(a) {
            return a.A.B.B && "block" == a.C.C.style.display
        },
        pw = function(a) {
            var b = a.toString(),
                c = b.lastIndexOf("/"),
                d = b.slice(c + 1);
            b = b.slice(1, c);
            return 0 > d.indexOf("g") ? new RegExp(b, d + "g") : a
        },
        rw = function(a, b) {
            var c = qw;
            if (!c || !a.A.B.S) return null;
            var d = c.yb();
            if (d) {
                var e = d.Pa().length;
                a.A.B.G < e ? (D(d), d = null) : a.A.B.G > e && d.ae(a.A.B.S, a.A.B.G - e, b)
            }
            b = c.Ba(20);
            for (c = b.length - 1; 1 <= c && !a.A.B.S.test(b.charAt(c)); c--);
            a.A.N = b.slice(0, c);
            return d
        },
        sw = function(a,
            b, c, d) {
            a.B = d;
            a.A.B.B && kw(a.C, d.ac());
            a.F = b == c ? "" : c;
            c = a.A;
            c.K = !0;
            c.bb(b, 0);
            a.H = !0
        },
        tw = function(a) {
            D(a.B);
            a.B = rw(a, !0);
            if (a.B) {
                var b = a.B.Pa();
                b ? 0 != a.A.status ? a.A.ad(b) : a.A.bb(b, 0) : (D(a.B), a.B = null, a.A.reset())
            } else a.A.reset()
        },
        vw = function(a) {
            oo(function() {
                this.H = !1;
                ow(this) ? this.A.reset() : this.B && !this.B.td() && (2 == this.A.status && uw(this), this.A.sa(), 0 != this.A.status && this.A.reset())
            }, 0, a)
        },
        ww = function(a, b) {
            if (b.type == t && 33 <= b.keyCode && 40 >= b.keyCode)
                if (a.D) vw(a);
                else return !0;
            else if (b.type == ne && 46 ==
                b.keyCode && a.D) oo(function() {
                tw(this);
                hv(this.A)
            }, 0, a);
            else if (b.type != t || 46 != b.keyCode || a.D) b.type == u && a.A.reset();
            else return !0;
            return !1
        },
        xw = function(a) {
            var b = qw;
            ow(a) && a.A.reset();
            if (0 != a.A.status) return a.D ? (b.commitText("", 1), tw(a)) : (a.A.Yb(), 0 == a.A.status && a.B && a.B.replace("")), !0;
            if (!b.Tb()) return !1;
            b = rw(a, !1);
            if (!b) return !1;
            var c = b.Pa();
            if (c) {
                var d = a.S[c],
                    e = a.A.B.Nb(c);
                if (d && (!e || 3 > c.length - d.length) || e && (d = c.slice(0, c.length - e.back) + e.text, !d.replace(pw(a.A.B.C), ""))) return sw(a, d, c, b), !0
            }
            D(b);
            return !1
        },
        yw = function(a) {
            if (!qw.Tb() || a.B) return !1;
            var b = rw(a, !0);
            if (!b) return !1;
            var c = b.Pa();
            if (c) {
                var d = "",
                    e = rw(a, !1);
                e && (d = e.Pa(), D(e));
                if (c != d && (d = a.S[c])) return sw(a, d, c, b), hv(a.A), !0
            }
            D(b);
            return !1
        },
        uw = function(a) {
            if (a.B) {
                var b = a.B;
                a.B = null;
                if (b.Pa()) {
                    var c = a.A.kb(),
                        d = a.G[c];
                    d ? d.push(b) : a.G[c] = [b]
                } else b.ca()
            }
        },
        zw = function(a, b) {
            J.call(this, a);
            this.data = b
        },
        Aw = function(a, b, c) {
            O.call(this);
            this.A = null;
            this.model = a;
            this.view = b;
            this.D = new M(this);
            this.B = Dm(bg);
            this.model.ta(this);
            this.view.ha();
            this.D.listen(this.model,
                "cmt", this.Ff).listen(this.model, "opn", this.If).listen(this.model, "cls", this.Ef).listen(this.model, "mup", this.Hf).listen(this.model, "dlc", this.Gf).listen(this.view, "clkc", this.zd).listen(this.view, "pd", this.Bg).listen(this.view, "pu", this.Cg).listen(c.A, bf, this.Bd, dq);
            H(ps(c.A), function(d) {
                try {
                    this.D.listen(d, bf, this.Bd, dq), S && this.D.listen(d, Ab, this.Bd, dq)
                } catch (e) {}
            }, this)
        },
        Cw = function(a) {
            a.A ? (a = a.A, !a.A.B.X || 0 != a.A.status || a.H || ev(a.A, " ", " "), a.H = !1) : !Bw(a) && a.model.B.X && ev(a.model, " ", " ")
        },
        Bw =
        function(a) {
            return 0 != a.model.status
        },
        Dw = function(a, b, c, d) {
            a = new iv(a, c, d);
            c = new mw(a, b);
            Aw.call(this, a, c, b);
            Kj(this, a);
            Kj(this, c)
        },
        Ew = function() {
            O.call(this);
            this.A = []
        },
        Fw = function() {
            Ew.call(this)
        },
        Gw = function(a) {
            this.source = a;
            this.B = [];
            this.A = -1;
            this.D = !0
        },
        Hw = function(a) {
            a.B = [];
            a.A = -1;
            a.D = !0
        },
        Iw = function(a, b, c) {
            cv.call(this, a, b, c);
            this.F = []
        },
        Jw = function(a) {
            var b = a.F[a.A];
            a.C = b.B;
            a.H = b.D;
            a.D = b.A
        },
        Kw = function(a, b) {
            hw.call(this, a, b)
        },
        Lw = function(a, b, c, d) {
            a = new Iw(a, c, d);
            c = new Kw(a, b);
            Aw.call(this,
                a, c, b);
            this.model = a;
            Kj(this, a);
            Kj(this, c)
        },
        Mw = function(a) {
            function b() {
                return 0 != a.model.status
            }

            function c() {
                return 1 == a.model.status || 3 == a.model.status
            }
            return [
                [u, 0, a.model.B.C, null, function() {
                    return 0 == a.model.status || c()
                }, a.Ca, a],
                [t, 0, 37, null, c, a.model.ra, a.model, -1],
                [t, 0, 39, null, c, a.model.ra, a.model, 1],
                [t, 0, 13, null, b, a.Xb, a],
                [t, 0, 8, null, null, a.Cc, a],
                [t, 0, 27, null, b, a.dc, a],
                [t, 17, 66, null, c, a.model.ra, a.model, -1],
                [t, 17, 70, null, c, a.model.ra, a.model, 1],
                [t, 17, 65, null, c, a.model.ra, a.model, -999],
                [t, 17,
                    69, null, c, a.model.ra, a.model, 999
                ],
                [t, 17, 77, null, b, a.Xb, a],
                [t, 17, 71, null, c, a.dc, a]
            ]
        },
        Nw = function(a) {
            function b(c) {
                if (!this.model.Ea) return this.ob(c);
                / $/.test(this.model.source) || 32 != c.keyCode ? (this.model.Ea = !1, c = this.ob(c), this.model.Ea = !0) : (c.type = u, c.charCode = c.keyCode, c = this.Ca(c));
                return c
            }
            return [
                [t, 0, 9, 1, null, b, a],
                [t, 0, 40, 1, null, b, a],
                [t, 0, 32, 1, null, b, a],
                [t, 0, 36, 1, null, a.model.ra, a.model, -999],
                [t, 0, 35, 1, null, a.model.ra, a.model, 999],
                [t, 0, 46, 1, null, a.model.ke, a.model],
                [t, 17, 72, 1, null, a.Cc, a],
                [t,
                    17, 68, 1, null, a.model.ke, a.model
                ]
            ]
        },
        Ow = function() {
            Ew.call(this)
        },
        Qw = function(a) {
            var b = [];
            a = a.replace("=", " ");
            for (var c = 0; c < a.length; c++) {
                var d = a.charAt(c);
                b.push(Pw[d] || d)
            }
            return b.join("")
        },
        Rw = function(a) {
            this.source = a;
            this.target = "";
            this.A = !1
        },
        Sw = function(a, b, c) {
            cv.call(this, a, b, c);
            this.F = [];
            this.G = "";
            this.Y = {
                "<": "\uff0c\u3001\u3000\u300a\u3008\uff1c".split(""),
                ">": "\u3002\u22ef\u3000\u30fb\u00b7\uff0e\u300b\u3009\uff1e".split(""),
                ":": ["\uff1a", "\uff1b"],
                "?": ["\uff1f", "\uff0c", "\u00f7"]
            };
            this.P = !1
        },
        Tw = function(a) {
            a.C = [];
            a.D = -1;
            a.status = 1;
            fv(a)
        },
        Uw = function(a, b) {
            var c = a.Y[b];
            if (!c) return !1;
            a.C = c.map(function(d) {
                return new Bu(b, d, "")
            });
            a.F = [new Rw(b)];
            a.F[0].target = c[0];
            a.F[0].A = !0;
            a.source = b;
            a.status = 3;
            a.P = !0;
            a.D = 0;
            a.H = !1;
            a.J("opn");
            fv(a);
            return !0
        },
        Vw = function(a, b) {
            hw.call(this, a, b)
        },
        Ww = function(a, b, c, d) {
            a = new Sw(a, c, d);
            c = new Vw(a, b);
            Aw.call(this, a, c, b);
            this.model = a;
            Kj(this, a);
            Kj(this, c)
        },
        Zw = function(a) {
            O.call(this);
            this.C = Bj(this);
            this.B = lt("", this.C);
            this.F = a;
            this.H = new M(this);
            this.H.listen(gt(),
                "cfga", this.Eg);
            Xw != Yw && (Mo(tl(Xw)), Xw = Yw)
        },
        $w = function(a) {
            O.call(this);
            this.B = a || window;
            this.D = km(this.B, "resize", this.C, !1, this);
            this.A = cn(this.B || window)
        },
        ax = function(a, b) {
            rv.call(this, a, b);
            this.U = new $w(Gn(R(a)));
            a = new M(this);
            a.listen(this.U, "resize", this.R);
            Kj(this, a)
        },
        bx = function(a) {
            var b = Ko(a.target);
            a = a.U;
            a = a.A ? Vm(a.A) : null;
            a.width -= 2 + b.width;
            a.height -= 2 + b.height;
            return new ro(2, a.width, a.height, 2)
        },
        cx = function(a, b) {
            var c = bx(a);
            a.I = to(c) || new so(NaN, NaN, NaN, NaN);
            b = b || Io(a.target);
            b.x = Math.min(b.x,
                c.right);
            b.y = Math.min(b.y, c.bottom);
            b.x = Math.max(b.x, c.left);
            b.y = Math.max(b.y, c.top);
            Bo(a.target, b)
        },
        dx = function(a) {
            if (a) {
                var b = Hn(R(a)),
                    c = a.offsetHeight;
                a.style.left = Math.floor(b.width - a.offsetWidth - 50) + sg;
                a.style.top = Math.floor(b.height - c - 50) + sg
            }
        },
        ex = function(a, b, c) {
            U.call(this);
            this.G = a;
            this.B = b;
            this.C = new M(this);
            this.H = c && F(b, c) ? c : this.B[0]
        },
        fx = function(a) {
            switch (a) {
                case Rh:
                    return new ex(a, ["ita-kd-btn-en", "ita-kd-btn-zh"], "ita-kd-btn-zh");
                case bi:
                    return new ex(a, ["ita-kd-btn-dbc", Ld], Ld);
                case "pun":
                    return new ex(a,
                        ["ita-kd-btn-en_pun", Md], Md);
                default:
                    return null
            }
        },
        gx = function() {
            var a = vp;
            var b = ss(a.A);
            a = R(xn(b));
            var c = a.A;
            Mo(wq(), (c || xq).body);
            U.call(this, a);
            this.C = b;
            this.R = !1;
            this.H = this.I = this.N = this.G = this.P = null;
            this.T = {};
            this.K = new M(this);
            this.B = Dm("bar")
        },
        ix = function(a, b, c, d) {
            c = c && b && Ft(b);
            T(a.C, c);
            a.R && (a.B.Rd(Ea, "sw"), a.B.report(), a.R = !1);
            c && (Eq(a.G.firstChild, [Aq(b.code), "ita-kd-icon ita-kd-icon-span ita-kd-statusbar-icon"].join(" ")), d && hx(a, d), a.B.Xc(b.code), a.B.Ec("st"), a.R = !0)
        },
        hx = function(a, b) {
            mk(b,
                function(c, d) {
                    var e = this.T[d];
                    if (e && c != !Fq(e.L().firstChild, e.B[0])) {
                        var g = d == this.P;
                        this.P = null;
                        this.B.Bb(jx[d][Number(g)]);
                        d = e.L();
                        W(d.firstChild, c ? e.B[0] : e.B[1]);
                        V(d.firstChild, c ? e.B[1] : e.B[0])
                    }
                }, a)
        },
        kx = function(a, b, c) {
            J.call(this, "sb");
            this.G = a;
            this.value = c
        },
        lx = function(a) {
            xu.call(this, a);
            this.B = new Zw(vp);
            this.H = [$r, t, ne, u, bf, p];
            this.S = [nb, mb, Tc, "cm", bi, Rh, "pun", "lc"];
            this.G = [];
            this.F = new M(this);
            this.F.listen(this.B, ["opn", "cmts", "cmte", "cls"], this.Ig)
        },
        mx = function(a) {
            a = a.B.B.state;
            var b = {};
            return b.tlang = !!(a & 1), b.tsbc = !(a & 2), b.pun = !!(a & 4), b
        },
        nx = function(a, b) {
            a = a.B;
            var c = !!b.tlang,
                d = !b.tsbc;
            b = !!b.pun;
            a.B.state = 0;
            c && (a.B.state |= 1);
            d && (a.B.state |= 2);
            b && (a.B.state |= 4)
        },
        px = function(a, b) {
            if (a.D && (b == Rh || a.Fa && Ft(a.D))) {
                var c = a.B;
                c = !!c.A && Bw(c.A);
                a.B.reset(b == Rh || b == bi);
                var d = mx(a);
                b == bi && c || (d[b] = !d[b], b == Rh && a.D.code !== Ti && (d.pun = d[b]), nx(a, d), ox(a, a.D, d), a.Fa && hx(a.Fa, d))
            }
        },
        ox = function(a, b, c) {
            mk(c, function(d, e) {
                this.C.J(new kx(e, b, d))
            }, a)
        },
        qx = function() {
            var a = {},
                b = qw;
            if (b) {
                var c = Pr(b);
                c && H(["font-family", "font-size", "font-weight", "font-style", Eh, Dh, He, "word-spacing", "line-height", "text-align", ti, Sb], function(d) {
                    try {
                        var e = Bq(c, d);
                        e && (a[d] = e)
                    } catch (g) {}
                })
            }
            return fl(a)
        },
        rx = function(a, b) {
            b = void 0 === b ? !1 : b;
            J.call(this, "n");
            this.C = a;
            this.H = b
        },
        sx = function(a, b) {
            b = void 0 === b ? 10 : b;
            O.call(this);
            this.H = a ? a : new wu;
            this.D = [];
            this.F = this.A = "";
            this.K = !1;
            this.C = {};
            this.U = b;
            this.B = {};
            this.R = new wu;
            this.I = "";
            this.G = null;
            this.N = Dm("hwt");
            this.B[zf] = Af;
            this.B[xc] = yc;
            this.B[Mb] = Nb;
            this.B[ud] = vd;
            this.B[qg] =
                rg;
            this.B[gg] = rg;
            this.B[lg] = rg;
            this.B[gc] = hc;
            this.B[Bg] = Cg
        },
        ux = function(a, b, c, d, e) {
            e = (void 0 === e ? "" : e).slice(-20);
            b = {
                writing_guide: {
                    writing_area_width: c,
                    writing_area_height: d
                },
                pre_context: e,
                max_num_results: a.U,
                max_completions: 0,
                language: a.F,
                ink: b
            };
            a.K ? a.G = b : tx(a, b)
        },
        tx = function(a, b) {
            b && Zj(a.D, 0, 0, b);
            b = {
                itc: a.C.itc,
                app_version: .4,
                api_level: Ul,
                device: window.navigator.appVersion,
                input_type: "0",
                options: "enable_pre_space",
                requests: a.D
            };
            a.D = [];
            a.K = !0;
            a.H.send("/request", a.C, B(a.P, a, 0), null, gv, b)
        },
        vx = function(a) {
            "" !=
            a.A && a.D.push({
                feedback: "\u2205[deleted]",
                select_type: "deleted",
                language: a.F,
                ink_hash: a.A
            })
        },
        wx = function(a, b) {
            var c = b.pre_context.trim().replace(/[,|:%]/g, function(d) {
                return encodeURIComponent(d)
            });
            return {
                app: a.C.app,
                itc: b.itc,
                text: c,
                num: String(b.max_num_results),
                cp: "0",
                cs: "0",
                ie: "utf-8",
                oe: "utf-8"
            }
        },
        xx = function(a) {
            J.call(this, "b");
            this.candidate = a
        },
        yx = function(a) {
            E.call(this);
            this.A = a || R();
            this.B = {};
            this.D = ""
        },
        zx = function(a, b, c) {
            c = c || "polite";
            var d = a.B[c];
            d ? (d.removeAttribute("aria-hidden"), c = d) :
                (d = kn(a.A.A, f), d.style.position = Da, d.style.top = "-1000px", d.style.height = "1px", d.style.overflow = bd, es(d, "live", c), es(d, "atomic", "true"), a.A.A.body.appendChild(d), c = a.B[c] = d);
            d = a.D === b ? b + "\u00a0" : b;
            b && (a.D = d);
            yn(c, d)
        },
        Ax = function(a, b, c) {
            U.call(this, b);
            this.ta(c || null);
            this.B = a;
            this.G = new M(this);
            this.C = !0;
            this.H = new yx(b)
        },
        Bx = function(a) {
            V(a.L(), Cd)
        },
        Cx = function(a, b) {
            Y.call(this, void 0, void 0, a);
            this.ta(b || null);
            this.B = [];
            this.N = [];
            this.K = new M(this);
            this.G = !0;
            this.I = !1;
            this.C = 0;
            this.H = "auto";
            this.P =
                new yx(a)
        },
        Dx = function(a) {
            for (var b = 0; b < a.B.length; b++) W(a.B[b].L(), Cd)
        },
        Ex = function(a, b) {
            a.G = b;
            for (var c = 0; c < a.B.length; c++) a.B[c].C = b
        },
        Fx = function(a, b) {
            this.text = a;
            this.state = b
        },
        Gx = function(a, b, c) {
            var d = Fj();
            this.x = .01 * Math.round(100 * a);
            this.y = .01 * Math.round(100 * b);
            this.time = Math.round(d);
            this.pointerType = c
        },
        Hx = function(a, b) {
            J.call(this, a);
            this.C = b
        },
        Ix = function(a, b, c) {
            a.listen(b, ef, c, !0);
            H(ps(b), function(d) {
                try {
                    a.listen(d, ef, c, !0)
                } catch (e) {}
            })
        },
        Jx = function(a, b) {
            O.call(this);
            this.B = new M(this);
            this.A = !1;
            this.D = a;
            this.B.listen(a, bf, this.le).listen(a, cf, this.me).listen(a, Uh, this.le).listen(a, Sh, this.kd).listen(a, "touchcancel", this.kd).listen(a, Th, this.me);
            Ix(this.B, b, B(this.kd, this))
        },
        Kx = function(a, b) {
            var c = Fo(a.D),
                d = b.A,
                e = a.D.ownerDocument;
            a = (e.dir == Ag ? -1 : 1) * (e.body.scrollLeft || e.documentElement.scrollLeft || 0);
            e = e.body.scrollTop || e.documentElement.scrollTop || 0;
            null != d.touches && 0 < d.touches.length ? (a = d.touches[0].clientX + a, d = d.touches[0].clientY + e) : !N && "pageX" in d && "pageY" in d ? (a = d.pageX, d = d.pageY) :
                (a = d.clientX + a, d = d.clientY + e);
            return new Gx(a - c.x, d - c.y, b.pointerType)
        },
        Lx = function(a, b, c, d, e) {
            Y.call(this, void 0, void 0, b);
            this.ta(c || null);
            this.aa = a || document;
            this.G = window.devicePixelRatio || 1;
            this.K = [];
            this.I = [];
            this.Y = 0;
            this.R = new M(this);
            this.ea = new yx(this.A);
            this.T = d || Bk();
            this.P = e || "#4D90FE";
            this.N = 0
        },
        Mx = function(a, b) {
            b.time -= a.Y;
            b.x *= a.G;
            b.y *= a.G;
            a.I.push(b);
            var c = a.I.length;
            1 == c ? (b = a.I[0], c = a.T(b) * a.G, a.C.beginPath(), a.C.strokeStyle = a.P, a.C.fillStyle = a.P, a.C.arc(b.x, b.y, c / 2, 0, 2 * Math.PI,
                !0), a.C.fill()) : (b = a.I[c - 2], c = a.I[c - 1], a.C.beginPath(), a.C.strokeStyle = a.P, a.C.fillStyle = Hf, a.C.lineWidth = a.T(b) * a.G, a.C.lineCap = "round", a.C.lineJoin = "round", a.C.moveTo(b.x, b.y), a.C.lineTo(c.x, c.y), a.C.stroke())
        },
        Nx = function(a) {
            return !a.H.A && 0 == a.K.length
        },
        Px = function(a, b) {
            Y.call(this, void 0, void 0, a);
            this.ta(b || null);
            this.N = Ox[""];
            this.ga = new M(this);
            this.fa = !0;
            this.ea = Dm("hwt")
        },
        Qx = function(a) {
            O.call(this);
            this.D = this.A = null;
            this.B = a;
            this.ga = new M(this);
            this.C = !1;
            this.id = 0;
            this.I = "";
            this.H = Dm("hwt");
            this.G = this.F = !1
        },
        Rx = function(a) {
            var b = cl(a.view.G.K, function(e) {
                    return [cl(e, function(g) {
                        return g.x
                    }), cl(e, function(g) {
                        return g.y
                    }), cl(e, function(g) {
                        return g.time
                    })]
                }),
                c;
            a.A && (c = a.A.Ba(20));
            var d = a.view.G;
            ux(a.B, b, d.B.width / d.G, d.B.height / d.G, c)
        },
        Sx = function(a, b, c) {
            a.A && (a.J(new zw("e", b)), a.A.commitText(b, c), a.J(new zw("d", b)))
        },
        Tx = function(a, b) {
            Y.call(this, void 0, void 0, a);
            this.ta(b || null);
            this.G = this.H = this.B = this.C = null;
            this.K = new M(this);
            this.I = new yx(a);
            this.enable = !0
        },
        Ux = function(a, b) {
            b ? (V(a.H,
                Dd), Iq(a.B, Kd, Id)) : (W(a.H, Dd), Iq(a.B, Id, Kd))
        },
        Vx = function(a, b, c) {
            b = b || R();
            var d = ss(b.A);
            b = R(xn(d));
            Px.call(this, b, c);
            this.ta(c || null);
            this.C = d;
            this.R = a;
            this.ba = null;
            this.Ra = Km && !I(11);
            this.P = !1;
            this.T = new yx(b);
            this.Y = !1
        },
        Xx = function(a, b) {
            if (a.R && a.L() && !a.Ra) {
                var c = Q(a.C);
                b || (b = bx(a.ba), c = dp(c.body, Wx), b = new P(c & 4 ? b.right : b.left, c & 1 ? b.bottom : b.top));
                cx(a.ba, b)
            }
        },
        Yx = function(a) {
            V(a.aa, "shown");
            a.Y = !0;
            zx(a.T, ra)
        },
        Zx = function(a, b, c) {
            Qx.call(this, a, c);
            this.Sd(new Vx(b, c, this))
        },
        $x = function(a, b) {
            if (b ||
                a.C) a.ld(), a.view.na(b), a.reset()
        },
        ay = function(a, b) {
            xu.call(this, b);
            this.B = null;
            this.F = new M(this);
            this.G = a;
            this.B = new Zx(new sx(this.G), !0, vp);
            this.F.listen(this.B, "g", this.rh).listen(this.B, "e", this.th).listen(this.B, "d", this.sh).listen(this.B, "k", this.ih).listen(this.B, "j", this.Kh)
        },
        by = function(a, b) {
            J.call(this, a);
            this.Ua = (this.C = b) ? b.id : null
        },
        dy = function(a) {
            this.id = a.id;
            this.view = {
                id: a.id,
                title: a.title,
                Oc: a.direction == Ag,
                rc: !!a.is102Keyboard,
                Cb: !!a.accents,
                Sc: {
                    "": null,
                    s: null,
                    c: null,
                    l: null,
                    sc: null,
                    cl: null,
                    sl: null,
                    scl: null
                },
                ic: {
                    "": null,
                    s: null,
                    c: null,
                    l: null,
                    sc: null,
                    cl: null,
                    sl: null,
                    scl: null
                },
                jc: {}
            };
            this.view.Cb && cy(this, a);
            var b = this.view.rc ? ej : fj;
            a = a.mappings;
            for (var c in a) {
                var d = a[c],
                    e = c.split(/,/);
                e.join(",") != c && e.push("");
                var g = {};
                for (k in d) {
                    var h = d[k];
                    if ("" == k) {
                        var k = b;
                        if (this.view.rc) {
                            var l = h.slice(0, 25);
                            l += h.slice(26, 37);
                            l += h.charAt(25);
                            h = l += h.slice(37)
                        }
                    }
                    k = k.replace("m", "\u00bd");
                    k = k.replace("=", "\u00bb");
                    k = k.replace(";", "\u00ba");
                    if (1 == k.length) g[k] = Array.isArray(h) ? h : ["S", h, h];
                    else {
                        var n =
                            0;
                        l = 0;
                        for (var y; y = k.charAt(l); ++l) {
                            var L = h.charAt(n++);
                            if (L == h.charAt(n) && "{" == L) {
                                L = h.indexOf("}}", n);
                                if (L < n) break;
                                n = h.slice(n + 1, L);
                                var ba = n.split("||");
                                3 == ba.length ? g[y] = ba : 1 == ba.length && (g[y] = ["S", n, n]);
                                n = L + 2
                            } else g[y] = ["S", L, L]
                        }
                    }
                }
                d = 0;
                for (h = void 0; h = e[d], void 0 != h; ++d) this.view.Sc[h] = g
            }
        },
        cy = function(a, b) {
            var c = b.accents,
                d;
            for (d in c) {
                var e = d.split(/,/);
                e.join(",") != d && e.push("");
                var g = {},
                    h = 0;
                for (g.Fb = void 0; g.Fb = e[h], void 0 != g.Fb; g = {
                        Fb: g.Fb
                    }, ++h) a.view.ic[g.Fb] = [], H(c[d], function(k) {
                        return function(l) {
                            this.view.ic[k.Fb].push(l.split(","))
                        }
                    }(g),
                    a)
            }(b = b.transform) && mk(b, function(k, l) {
                this.view.jc[k] || (this.view.jc[k] = l.replace("\\", ""))
            }, a)
        },
        ey = function(a) {
            this.id = a.id;
            this.B = this.A = null;
            var b = a.transform;
            if (b) {
                var c = [],
                    d = [],
                    e = 1,
                    g;
                for (g in b) {
                    d[e] = [new RegExp(g + "$"), b[g]];
                    c.push("(" + g + "$)");
                    var h = (new RegExp(g + "|.*")).exec("").length;
                    e += h
                }
                this.A = [new RegExp(c.join("|")), d]
            }
            if (a = a.historyPruneRegex) this.B = new RegExp("^(" + a + ")$")
        },
        fy = function(a, b) {
            return a.B ? !!a.B.exec(b) : !1
        },
        gy = function(a) {
            this.A = {
                previous: {
                    text: "",
                    Oa: -1
                },
                xa: "",
                current: {
                    text: "",
                    Oa: -1
                }
            };
            this.B = new ey(a);
            this.id = this.B.id
        },
        iy = function(a, b) {
            var c = a.A.current.text;
            c && b && (gk(b, c) || gk(c, b)) || hy(a)
        },
        hy = function(a) {
            a.A.xa = "";
            a.A.previous = {
                text: "",
                Oa: -1
            };
            a.A.current = sk(a.A.previous)
        },
        ky = function() {
            O.call(this);
            this.H = Kk("https://ssl.gstatic.com/inputtools/js/kbd/3/%{file}");
            this.K = {};
            this.B = {};
            this.G = {};
            this.A = this.D = "";
            this.F = B(this.I, this);
            jy.push(this.F)
        },
        ly = function(a, b) {
            if (b) {
                var c = a.B[b];
                void 0 == c ? (a.B[b] = !1, "ko" == b && (b = "hangul"), a.C(b)) : c && a.J(new by("lld", c.view))
            }
        },
        ny = function(a,
            b) {
            if (b && a.D != b) {
                var c = a.B[b];
                c ? (a.D = b, a.A = "", (b = my(a)) && hy(b), a.J(new by("lat", c.view))) : 0 == c && (a.A = b)
            }
        },
        my = function(a) {
            return a.G[a.D] || null
        },
        oy = function(a) {
            a = my(a);
            return !!a && !!a.B.A
        },
        qy = function(a, b, c, d) {
            c = void 0 === c ? "" : c;
            d = void 0 === d ? !1 : d;
            var e = null;
            d && (e = ss(b.A), b = R(xn(e)));
            Y.call(this, void 0, void 0, b);
            this.N = e;
            this.Jd = c;
            this.P = d;
            this.B = a;
            this.Nb = "";
            this.G = {};
            this.R = {};
            this.Ce = N && !I(7);
            this.kc = Km && !I(11);
            this.eh = K && !I(3);
            this.C = new M(this);
            this.H = this.B.Cb;
            this.Ic = {};
            this.B.Cb && py(this);
            this.ba =
                null;
            this.Nc = !1;
            this.K = this.ea = this.rb = this.T = this.Pb = this.oa = this.aa = this.Y = this.fa = this.Ra = this.I = null;
            this.De = 0
        },
        ry = function(a, b, c) {
            if (typeof b === w) return b;
            if (a.H) return c && (b = String.fromCharCode(c), a.Ic[b]) ? b : null;
            c = String.fromCharCode(b);
            var d = a.B.Sc[a.Nb][c];
            return d && (d = d[2]) ? d : 32 == b ? " " : 0 <= (a.B.rc ? ej : fj).indexOf(c) ? "" : null
        },
        ty = function(a, b) {
            if (a.L() && !a.kc) {
                var c = a.A.A;
                a.P && (c = Q(a.N));
                b || (b = bx(a.ba), c = dp(c.body, sy), b = new P(c & 4 ? b.right : b.left, c & 1 ? b.bottom : b.top));
                cx(a.ba, b)
            }
        },
        uy = function(a,
            b) {
            mk(a.R, function(c) {
                T(c, !1)
            }, a);
            (b = a.B.ic[b]) || (b = a.B.ic[""]);
            H(fk(b), function(c) {
                this.R[c] && T(this.R[c], !0)
            }, a)
        },
        vy = function(a, b) {
            a.B.Cb && uy(a, b)
        },
        yy = function(a, b) {
            if (a.B) {
                a.B.Sc[b] && (a.Nb = b);
                if (!wy) {
                    var c = {
                        20: "l",
                        16: "s",
                        273: "c"
                    };
                    for (e in a.G) {
                        var d = a.G[Number(e)];
                        var e = parseInt(e, 10);
                        var g = c[e];
                        if (g) {
                            xj(d) || (d = [d]);
                            for (var h = 0, k; k = d[h]; ++h) Eq(k, Ai), 0 <= b.indexOf(g) && V(k, "vk-sf-s")
                        } else if (g = xy(a, e)) a.A.zc(d), a.A.V(d, g)
                    }
                }
                a.K && !Fq(a.K, "vk-sf-s") && (ns(a.K, [Ai, Bi]), V(a.K.firstChild, Bi))
            }
        },
        zy = function(a,
            b) {
            if (a.isVisible()) {
                var c = typeof b === w ? a.R[b] : a.G[b];
                c && (ns(c, [Ai, "vk-sf-a"]), window.setTimeout(function() {
                    Eq(c, Ai)
                }, 250))
            }
        },
        Ay = function(a) {
            var b = a.B.rc ? [{
                    13: 2
                }, {
                    0: 1.5,
                    13: 1.5
                }, {
                    0: 1.75,
                    13: 1.25
                }, {
                    0: 1.25,
                    12: 2.75
                }, {
                    0: 3,
                    1: 9,
                    2: 3
                }] : [{
                    13: 2
                }, {
                    0: 1.5,
                    13: 1.5
                }, {
                    0: 1.75,
                    12: 2.25
                }, {
                    0: 2.25,
                    11: 2.75
                }, {
                    0: 3,
                    1: 9,
                    2: 3
                }],
                c = 4,
                d = 29,
                e = a.T.children[0].children[0];
            e && (d = xo(e, "width"), d = S && d ? Number(d.slice(0, -2)) : Ko(e).width, c = So(e, "margin"), c = c.right + c.left, d += c);
            for (e = 0; e < b.length; e++)
                for (var g in b[e]) g = Number(g), a.T.children[e].children[g].style.width =
                    d * b[e][g] - c + sg;
            a.B.Cb || !N || I(8) || (a.De = 15 * d - c - 2, a.I.style.width = a.De + sg)
        },
        By = function(a) {
            N && !I(8) ? (a.style.display = "inline", a.style.zoom = 1) : a.style.display = rd
        },
        Ey = function(a) {
            function b(h, k) {
                if (k) {
                    var l = k = c.O("A", {
                            target: "_blank",
                            "class": "vk-t-btn-o"
                        }),
                        n = this.Jd;
                    n instanceof Uk || n instanceof Uk || (n = typeof n == Mf && n.nb ? n.$a() : String(n), Wk.test(n) || (n = Ca), n = new Uk(n, Tk));
                    l.href = Vk(n)
                } else k = c.O(f, {
                    "class": "vk-t-btn-o"
                });
                V(k, h);
                l = c.O(f, ["vk-t-btn", Qd]);
                V(l, h);
                c.V(k, l);
                c.V(a.Ra, k);
                By(k);
                return k
            }
            var c =
                a.A,
                d = a.Oc(),
                e = c.O(f, {
                    dir: d ? Ag : Me,
                    style: "white-space: nowrap;"
                });
            a.I = c.O(f, "vk-t", c.O(m, "", a.B.title), c.O(m, "vk-ss"));
            a.I.style.textAlign = d ? "right" : "left";
            By(a.I);
            c.V(e, a.I);
            !wy && a.H && (a.fa = c.O("A", {
                "class": "vk-l-a",
                href: ""
            }, "Full"), c.V(a.I, a.fa), c.V(a.I, c.O(m, "vk-ss", "|")), a.Y = c.O("A", {
                "class": "vk-l-i",
                href: ""
            }, "Accents"), c.V(a.I, a.Y), V(a.I, d ? "vk-ea-r" : "vk-ea-l"));
            a.Ra = c.O(f, "vk-t-btns");
            c.V(e, a.Ra);
            var g = d ? "paddingLeft" : "paddingRight";
            a.Ra.style[d ? "left" : "right"] = "0";
            By(a.Ra);
            Cy && (a.Pb = b("vk-sf-hp",
                !0));
            Dy && (a.oa = b("vk-sf-min"));
            a.aa = b("vk-sf-cl");
            a.aa.style[g] = "14px";
            return e
        },
        Gy = function(a) {
            var b = a.A.O(f);
            b.dir = b.style.direction = Me;
            mk(a.B.ic, function(c) {
                c && H(c, function(d, e) {
                    var g = this.A.O(f);
                    g.style.whiteSpace = "nowrap";
                    var h = !1;
                    H(d, function(k) {
                        k && !this.R[k] && (h = !0, k = Fy(this, k), 0 == e && k.setAttribute("data-tooltip-align", "t,c"), this.A.V(g, k))
                    }, this);
                    h && this.A.V(b, g)
                }, this)
            }, a);
            return b
        },
        Fy = function(a, b) {
            var c = xy(a, b),
                d = a.A.O("BUTTON", {
                    id: "K" + b,
                    type: "button",
                    "class": Ai,
                    style: "visibility:" + (c ?
                        "" : bd)
                });
            c && a.A.V(d, c);
            typeof b === w ? (a.R[b] = d, a.B.jc[b] && d.setAttribute("data-tooltip", a.B.jc[b])) : a.G[b] = a.G[b] ? [a.G[b], d] : d;
            return d
        },
        xy = function(a, b) {
            var c = a.A;
            if (typeof b === w) {
                var d = c.O(m);
                c.V(d, document.createTextNode(String(b)));
                return d
            }
            if (9 == b || 13 == b) return null;
            d = c.O(m);
            if (Hy[b]) return ns(d, ["vk-cap", Qd, "vk-sf-b", Hy[b]]), d;
            if (273 == b) return ns(d, ["vk-cap", "vk-sf-c273"]), yn(d, "Ctrl + Alt"), d;
            var e = null;
            (b = a.B.Sc[a.Nb][String.fromCharCode(b)]) && b[1] && ("S" == b[0] ? (e = In(c, b[1]), Eq(d, "vk-cap")) :
                "P" == b[0] && (e = c.O("IMG", {
                    src: "https://ssl.gstatic.com/inputtools/images/vk/layouts/" + a.B.id + "_" + b[1] + ".png"
                }), Eq(e, "vk-cap-i")));
            e ? (c.V(d, e), a.Oc() && (d.style.direction = Ag)) : (c.V(d, document.createTextNode(".")), d.style.visibility = bd);
            return d
        },
        py = function(a) {
            mk(a.B.jc, function(b) {
                H(b, function(c) {
                    this.Ic[c] = !0
                }, this)
            }, a)
        },
        Jy = function(a, b) {
            a = void 0 === a ? "" : a;
            b = void 0 === b ? !1 : b;
            O.call(this);
            this.G = null;
            this.I = !0;
            this.B = 0;
            this.P = this.X = this.R = this.A = null;
            this.U = !0;
            this.Y = this.aa = !1;
            this.H = new ky;
            this.T =
                R();
            this.F = 0;
            this.K = !1;
            this.D = {};
            this.N = new M(this);
            this.C = Dm("vk");
            this.fa = {};
            this.ea = {};
            this.Jd = a;
            this.oa = b;
            this.H.ta(this);
            this.N.listen(this.H, "lat", this.zh);
            for (a = 0; b = " \u00a0\n\r`~!@#$%^&*()_+-=[]{}\\|;:'\",./<>?".charAt(a); ++a) this.fa[b] = !0;
            Iy != Yw && (Mo(tl(Iy)), Iy = Yw)
        },
        Ky = function(a, b) {
            a.A && (!a.I && b ? a.C.Ec("st") : a.I && !b && (a.C.set(Ea, "cl"), a.C.report()));
            a.I = b
        },
        My = function(a, b) {
            a.U = b;
            a.A && (b || (a.B = 0, a.F = 0, yy(a.A, Ly(a.B)), vy(a.A, Ly(a.F))), a.A.na(b))
        },
        Qy = function(a, b) {
            var c = Ny(b.keyCode),
                d = Oy(a.B,
                    c, b);
            a.B != d && (a.B = d, yy(a.A, Ly(a.B)));
            d = Oy(a.F, c, b);
            a.F != d && (a.F = d, vy(a.A, Ly(a.F)));
            if (a.B & 16) return a.D[0] = a.D[c] = !1;
            d = !!(a.B & 4);
            var e = !!(a.B & 2),
                g = !!(a.B & 16);
            if (17 == c || 18 == c || 16 == c || 20 == c) return a.D[0] = a.D[c] = 20 == c;
            if (g || d != e) return a.D[0] = a.D[c] = !1;
            a.C.Bb("kkc");
            zy(a.A, c);
            b = Py(a, c, b.charCode);
            return a.D[0] = a.D[c] = b
        },
        Sy = function(a, b) {
            if (a.D[0]) return !0;
            if (a.A.H) return Py(a, b.keyCode, b.charCode);
            if (Yl && K) {
                var c = Ry[b.charCode];
                if (c) return Py(a, c, b.charCode)
            }
            return a.D[0]
        },
        Oy = function(a, b, c) {
            a &= 776;
            20 == b && (a = Yl && S ? a | 8 : a ^ 8);
            if (16 == b || c.shiftKey) a |= 1;
            if (18 == b || c.altKey) a |= 2;
            if (17 == b || c.ctrlKey) a |= 4;
            if (91 == b || c.metaKey) a |= 16;
            return a
        },
        Py = function(a, b, c, d) {
            if (!a.G) return !1;
            (c = ry(a.A, b, c)) && !a.fa[c] ? a.K || (a.K = !0, a.C.Bb("wc")) : a.K && 8 != b && (a.K = !1);
            if (a.B & 256 || a.B & 512) {
                var e = a.B;
                a.aa || (e &= -257);
                a.Y || (e &= -513);
                e != a.B && (a.B = e, yy(a.A, Ly(a.B)))
            }
            if ("" == c) return !0;
            if (null == c && 8 != b) return !1;
            if (c)
                if (oy(a.H)) {
                    e = a.G.Ba(20) || "";
                    var g = my(a.H),
                        h;
                    if (g)
                        if (c) {
                            iy(g, e);
                            e = g.A;
                            e.xa && (h = g.B.transform(e.previous.text, e.previous.Oa,
                                e.xa + c)) && 0 > h.back && (h = null);
                            if (h) {
                                var k = e.previous.text;
                                k = k.slice(0, k.length - h.back);
                                k += h.Xa;
                                h.back = e.current.text.length;
                                h.Xa = k
                            } else h = g.B.transform(e.current.text, e.current.Oa, c);
                            fy(g.B, e.xa + c) ? (e.xa || (e.previous = sk(e.current)), e.xa += c) : fy(g.B, c) ? (e.previous = sk(e.current), e.xa = c) : (e.previous.text = "", e.previous.Oa = -1, e.xa = "");
                            g = e.current.text;
                            k = e.current.Oa;
                            h ? (g = g.slice(0, g.length - h.back), g += h.Xa, k = g.length) : (g += c, h = {
                                back: 0,
                                Xa: c
                            });
                            c = g.lastIndexOf(" ");
                            0 <= c && (g = g.slice(c + 1), k = k > c ? k - (c + 1) : -1);
                            e.current.text =
                                g;
                            e.current.Oa = k
                        } else h = null;
                    else h = null;
                    c = h
                } else c = {
                    back: 0,
                    Xa: c
                };
            else if (h = a.G.Ba(20) || "", 1 < h.length ? (c = h.charCodeAt(h.length - 2), e = h.charCodeAt(h.length - 1), c = 55296 <= c && 56319 >= c && 56320 <= e && 57343 >= e) : c = !1, c = {
                    back: c ? 2 : 1,
                    Xa: ""
                }, oy(a.H) && (g = c.back, e = my(a.H))) g = void 0 === g ? 1 : g, g = void 0 === g ? 1 : g, iy(e, h), h = e.A, h.current.text ? (h.current.text = h.current.text.slice(0, -g), h.current.Oa > h.current.text.length && (h.current.Oa = h.current.text.length), h.xa && (h.xa = h.xa.slice(0, -1)), h.xa || (h.previous = {
                text: "",
                Oa: -1
            })) : (h.previous = {
                text: "",
                Oa: -1
            }, h.xa = "", h.current = sk(h.previous));
            if (8 == b && !d && N && Gm(11)) return !1;
            a.J(new zw("kcs", c.Xa));
            a.G.commitText(c.Xa, c.back);
            a.J(new zw("kce", c.Xa));
            return !0
        },
        Ny = function(a) {
            Ty && (91 == a && S || 224 == a && K) && (a = 18);
            a = Uy[a] || a;
            var b = Vy.en;
            b && (a = b[String.fromCharCode(a)] || a);
            return a
        },
        Ly = function(a) {
            var b = "";
            if (a & 1 || a & 256) b += "s";
            if (a & 2 && a & 4 || a & 512) b += "c";
            a & 8 && (b += "l");
            return b
        },
        Wy = function(a) {
            xu.call(this, a);
            this.B = new Jy(Cy, !0);
            this.G = [t, ne, u, bf];
            this.F = new M(this);
            this.B.T = vp;
            this.F.listen(this.B,
                ["kc", "kmi", "lld"], this.Yf);
            this.F.listen(this.B, "kcs", this.xh);
            this.F.listen(this.B, "kce", this.wh);
            this.F.listen(vp.A, [t, ne], this.Mg)
        },
        Yy = function(a, b) {
            b = !X && b;
            My(a.B, b);
            a.active && (Xy = b)
        },
        Zy = function(a, b) {
            H(["bar", "vk", "hwt"], function(d) {
                var e = Cm.pa(),
                    g = new hq(d);
                e.A[d] && e.A[d].ca();
                e.A[d] = g
            });
            var c = [function() {
                Yu = a;
                return new lx(b)
            }, function() {
                return new Wy(b)
            }];
            X || (N ? Gm(9) : Om()) && c.push(function() {
                return new ay(new wu, b)
            });
            return new Au(c)
        },
        $y = function(a, b, c) {
            J.call(this, a, c);
            this.value = b
        },
        bz =
        function(a) {
            mk(a, function(b, c) {
                switch (c) {
                    case "EnableUserDictionary":
                        Pu = b;
                        break;
                    case "ShowOnScreenKeyboard":
                        Xy = b;
                        break;
                    case "ShowStatusBar":
                        az = b
                }
            });
            yp.pa().J(new $y("psa", a))
        },
        cz = function() {
            return Om() && /\.(google|gmail|youtube)\./.test(vq.location.host)
        },
        dz = function(a, b) {
            var c = b.target;
            b = {};
            if (c.Pc()) try {
                var d = JSON.parse(c.xd());
                if (d && "OK" == d.header.error_code) {
                    var e = d.body.data;
                    for (d = 0; d < e.length; d++) {
                        var g = e[d].item;
                        b[g.key] = !!g.value[0].bool_value
                    }
                    a && a(b)
                }
            } catch (h) {}
        },
        ez = function(a) {
            if (cz()) {
                var b = [];
                mk(a, function(c, d) {
                    b.push({
                        key: d,
                        value: [{
                            bool_value: c
                        }]
                    })
                });
                a = sk(gv);
                nu(jd + iq, null, JSON.stringify({
                    header: {
                        method: "Update",
                        service: "PrefService"
                    },
                    body: {
                        user: {},
                        client: "cloud",
                        item: b
                    }
                }), a)
            }
        },
        hz = function(a, b, c) {
            O.call(this);
            this.G = c || yp.pa();
            this.A = b || Zy(fz(), this.G);
            this.K = !1;
            this.F = {};
            this.C = a ? a.shortcut : "";
            this.H = vp;
            this.N = {
                kix: 1,
                punch: 1,
                trix: 1
            };
            this.B = new M(this);
            this.D = new eq(vp.A);
            this.C && H(this.C.split(","), this.fh, this);
            gz && !this.Qe && (Mo(Cr(gz)), this.Qe = !0);
            this.G.ta(this);
            a = {};
            qt(bc, (a[33] = !0, a));
            this.B.listen(this.G, "uf", this.cf);
            /^(kix|trix|punch)/.test(iq) && [bc, yc, Nb, hc, rg, Af, vd].forEach(function() {
                var d = {};
                qt(bc, (d[10] = !1, d[29] = !1, d))
            })
        },
        fz = function() {
            var a = new hq(bg),
                b = Cm.pa();
            b.A.ppe && b.A.ppe.ca();
            b.A.ppe = a;
            return new Wt
        },
        iz = function(a, b) {
            var c = a.H.L(ka);
            c && (a = a.H.A.createEvent("Event"), a.initEvent(b, !0, !0), c.dispatchEvent(a))
        },
        jz = function() {
            this.B = [];
            this.D = !1
        },
        kz = function(a, b, c) {
            U.call(this, vp);
            this.G = !0;
            this.I = a;
            this.K = b;
            this.N = !!c;
            this.H = new M(this)
        },
        lz = function() {
            Y.call(this,
                void 0, void 0, vp);
            this.B = []
        },
        mz = function(a, b, c, d) {
            b = new kz(b, c, d);
            b.ha();
            Tj(a.B, b);
            return b
        },
        nz = function() {
            E.call(this);
            this.A = new M(this)
        },
        oz = function(a, b) {
            J.call(this, Fa);
            this.H = a;
            this.C = b
        },
        pz = function(a) {
            J.call(this, "vc");
            this.C = a
        },
        qz = function(a, b) {
            J.call(this, "ecd");
            this.H = a;
            this.C = Yj(arguments, 1)
        },
        rz = function(a, b, c, d) {
            Y.call(this, void 0, void 0, d || vp);
            this.C = a;
            this.G = b;
            this.I = {};
            this.T = [];
            this.ea = c;
            this.K = null;
            this.ab = !1;
            this.aa = !0;
            this.B = new M(this);
            this.fa = new nz
        },
        sz = function(a, b, c) {
            var d = a.A.O("LI", {
                "class": Sd,
                style: hh
            });
            Tj(a.T, {
                Hc: d,
                className: Td
            });
            var e = a.A.O(m, {
                "class": "ita-kd-menuitem-setting ita-kd-menuitem-span"
            }, b);
            a.A.V(d, e);
            c && T(d, !1);
            a.I[b] = {
                name: e
            };
            return d
        },
        tz = function(a, b) {
            a.sd();
            V(b, Td)
        },
        vz = function(a) {
            a = rn(uz(a));
            if (!a || 0 == a.length) return null;
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (Fq(c, Td)) return c
            }
            return null
        },
        uz = function(a) {
            return X ? a.L().firstChild : a.L()
        },
        wz = function(a, b, c, d) {
            mp.call(this, a, b);
            this.C = c ? 5 : 0;
            this.D = d || void 0
        },
        xz = function(a, b) {
            a & 48 && (b ^= 4);
            a & 192 && (b ^= 1);
            return b
        },
        yz = function(a, b) {
            wp.call(this, b);
            this.C = a;
            this.P = this.Y = this.B = this.I = this.G = this.ea = this.fa = this.ba = null
        },
        zz = function(a) {
            a.B && !X && (new wz(a.L(), a.aa ? 13 : 9, !0)).Ga(a.B.L(), a.aa ? 12 : 8)
        },
        Az = function(a) {
            J.call(this, "ita_l");
            this.l10n = a
        },
        Ez = function(a) {
            var b;
            b || (b = Bz[iq]);
            a = Cz(a);
            var c = [];
            (a = Dz[a]) && H(a, function(d) {
                b && F(oq(d, 6), b) || c.push(oq(d, 2))
            });
            return c
        },
        Cz = function(a) {
            a = a.replace(/_/g, "-").toLowerCase();
            if (0 == a.indexOf("zh-tw")) return "zh-Hant";
            if (0 == a.indexOf("zh-hk")) return Li;
            if ("zh" == a || 0 == a.indexOf("zh-cn")) return Mi;
            if ("pt" == a) return eg;
            var b = a.split(/[\-]/g),
                c = "";
            a = b[0];
            "iw" == a && (a = Tc);
            Dz[a] && (c = a);
            for (var d = 1; d < b.length; d++) {
                var e = b[d];
                2 == e.length ? e = e.toUpperCase() : 4 == e.length && (e = e.charAt(0).toUpperCase() + e.slice(1));
                a += "-" + e;
                Dz[a] && (c = a)
            }
            return c
        },
        Iz = function(a) {
            E.call(this);
            this.B = (a = Cz(a)) || q;
            this.D = {};
            var b = F(Fz, this.B) ? this.B : q;
            a = dt(Rk(Gz, {
                langCode: b || this.B
            }));
            var c = B(this.Xe, this);
            Vs(a, c, null, void 0);
            c = B(this.yh, this);
            Vs(a, null, c, void 0);
            a = dt(Rk(Hz, {
                langCode: b || this.B
            }));
            b = B(this.Ze, this);
            Vs(a, b, null,
                void 0);
            b = B(this.Ah, this);
            Vs(a, null, b, void 0)
        },
        Jz = function(a, b) {
            var c = a.D[b];
            !c && (b = At(b)) && (b = b.A, b = Cz(b), c = a.D[b], c || (b = b.split("_")[0], c = a.D[b]));
            return c || ""
        },
        Kz = function(a) {
            if (google.ime.l10n.Messages && a) {
                var b = "MSG_" + a.replace(/\s/g, "_").toUpperCase();
                if (b = google.ime.l10n.Messages[b]) return b
            }
            return a
        },
        Lz = function() {
            E.call(this);
            this.A = {}
        },
        Oz = function(a) {
            E.call(this);
            a && (void 0 !== a.kbdHelpUrl && (Cy = a.kbdHelpUrl), void 0 !== a.kbdMinMax && (Dy = !!a.kbdMinMax), void 0 !== a.keyboardDefaultLocation && (sy =
                a.keyboardDefaultLocation), void 0 !== a.handwritingDefaultLocation && (Wx = a.handwritingDefaultLocation), void 0 !== a.showStatusBar && (az = !!a.showStatusBar), void 0 !== a.onScreenKeyboard && (Xy = !!a.onScreenKeyboard), void 0 !== a.enableUserDict && (Pu = !!a.enableUserDict), void 0 !== a.applicationName && (iq = a.applicationName), void 0 !== a.enableGlobalEventDelegate && (Mz = !!a.enableGlobalEventDelegate), void 0 !== a.multipleInstance && (this.H = !!a.multipleInstance), void 0 !== a.mobile && (X = !!a.mobile));
            this.C = [];
            this.H ? (this.D = new O,
                yp.pa(), zp.push(this.D)) : this.D = yp.pa();
            this.A = new jz;
            this.G = new M(this);
            this.B = new hz(a, void 0, this.D);
            this.F = [];
            this.G.listen(this.D, "kc", this.Ve).listen(this.D, "kmi", this.Ch).listen(this.D, wc, this.qh).listen(this.D, "ecd", this.ph).listen(this.B, "tt", this.Sh).listen(this.D, "g", this.Ve).listen(this.D, Fa, B(this.Mh, this)).listen(this.D, "bind", B(this.Nh, this)).listen(this.D, "visi", B(this.Oh, this)).listen(this.D, "slc", this.Gc);
            Nz(this);
            this.H = !1
        },
        Rz = function(a, b, c) {
            b = {
                type: tb,
                prevInputToolName: b,
                prevInputToolActive: c,
                currInputToolName: a.A.A.code,
                currInputToolActive: a.A.D
            };
            if (0 < a.C.length) {
                c = [];
                for (var d = 0; d < a.C.length; ++d) null != a.C[d].id && Tj(c, a.C[d].id);
                b.attachedElements = c
            }
            a.D.J(b);
            b = a.A.A.code;
            a = a.A.D;
            if (Pz != b || Qz != a) Pz = b, Qz = a, Fs.J(new J("b"))
        },
        Sz = function(a) {
            a.D.J({
                type: "itlu",
                inputTools: a.A.B
            })
        },
        Tz = function(a) {
            a.D.J({
                type: "pelu",
                elements: a.C
            })
        },
        Nz = function(a) {
            0 == a.C.length || a.B.register(a.C);
            0 == a.F.length || a.B.unregister(a.F);
            Uz(a, a.A.D, a.A.A)
        },
        Uz = function(a, b, c, d) {
            if (!b || c && At(c.code)) {
                b ? a.B.activate(c,
                    d) : a.B.deactivate(c || a.A.A);
                var e = (d = a.A.A) ? d.code : null,
                    g = a.A.D;
                a.A.A = c;
                a.A.D = b;
                d == a.A.A && g == a.A.D || Rz(a, e, g)
            }
        },
        Vz = function(a, b, c) {
            if (b = At(b)) F(a.A.B, b) || a.pd(b.code), Uz(a, !0, b, c)
        },
        Xz = function(a) {
            iq = qb;
            qs = "chrome-extension://" + chrome.i18n.getMessage("@@extension_id") + "/image";
            Oz.call(this, a);
            Wz(this, a)
        },
        Wz = function(a, b) {
            D(a.B);
            var c = new qo,
                d = new Au([function() {
                    Yu = c;
                    return new lx
                }, function() {
                    return new Wy
                }, function() {
                    return new ay(c)
                }]);
            a.B = new hz(b, d)
        },
        Yz = function(a, b) {
            function c() {
                e.A.onMessage.removeListener(d);
                e.A.onMessage.removeListener(c);
                e.A = null
            }

            function d(g) {
                try {
                    if (g.event) {
                        var h = g.event,
                            k;
                        for (k in h) {
                            var l = h[k],
                                n = document.createEvent("Events");
                            n.initEvent(k, !0, !0);
                            n.view = window;
                            for (var y in l) "type" != y && (n[y] = l[y]);
                            var L = new $l(n);
                            e.C.B.handleEvent(e, L) || n.type != u || e.commitText(String.fromCharCode(n.charCode), 0)
                        }
                    }
                    g.cursorPos && (e.D = new P(g.cursorPos[0], g.cursorPos[1]));
                    g.text && (e.B = g.text[0])
                } catch (ba) {
                    console.error(ba.stack)
                }
            }
            O.call(this);
            var e = this;
            this.D = new P(0, 0);
            this.B = "";
            this.C = b;
            this.A = a;
            this.A.onMessage.addListener(d);
            this.A.onDisconnect.addListener(c)
        },
        $z = function(a) {
            O.call(this);
            this.A = {};
            this.C = xj(a) ? a[0] : a;
            this.D = null;
            this.B = new M(this);
            Zz(this, a)
        },
        Zz = function(a, b) {
            var c = N ? "focusin" : wc,
                d = N ? "focusout" : ab;
            H(xj(b) ? b : [b], function(e) {
                var g = Bj(e);
                this.A[g] || (this.A[g] = !0, e = S ? fn(e) : e, this.B.listen(e, c, this.F, dq), this.B.listen(e, d, this.G, dq))
            }, a)
        },
        bA = function(a, b, c) {
            if (a.A) {
                var d = iq;
                if ("kix" != d && "punch" != d && "trix" != d || !N) d = R(b), H(ps(d.A), function(g) {
                    try {
                        Zz(this, g)
                    } catch (h) {}
                }, a);
                if (b =
                    Fn(b)) {
                    d = b;
                    for (var e = b.tagName; e && (e == la || "FRAME" == e) && (!b.src || js(b.src, window.location.href));) {
                        d = xn(b);
                        if (!d) break;
                        Zz(a, d);
                        e = Fn(d);
                        if (!e) break;
                        d = b;
                        b = e;
                        if ((e = b.tagName) && "BODY" == e.toUpperCase()) {
                            b = d;
                            break
                        }
                    }
                    aA(a, c, b)
                }
            }
        },
        aA = function(a, b, c) {
            c != a.D && (a.D = c, b = new $l(b.A), b.target = c, b.type = "aec", a.J(b))
        },
        cA = function(a) {
            E.call(this);
            this.H = po;
            this.R = [];
            this.B = "";
            this.D = {};
            this.C = !1;
            this.P = "";
            this.X = !1;
            this.A = a || new Xz({
                kbdMinMax: !0,
                showStatusBar: !0,
                enableUserDict: !1,
                onScreenKeyboard: !0
            });
            this.A.re(qb);
            this.A.se(!1);
            this.G = null;
            this.I = [];
            this.N = !1;
            this.F = new M(this);
            this.U = !1;
            this.T = B(this.hg, this);
            this.Y = window.setInterval(B(this.ve, this), 250);
            a = Ym(document, ka);
            a || (a = hn(f, {
                id: ka
            }), a.style.display = Hf, document.body.appendChild(a));
            this.K = a;
            Ij(vk(this.H.uf, !0), this.T);
            chrome.runtime.onMessage.addListener(this.T);
            this.F.listen(a, "uc", this.Zc);
            this.F.listen(a, "suc", this.ci);
            this.F.listen(a, "rc", this.Xh);
            this.F.listen(a, "ic", this.Ud);
            this.F.listen(a, this.H.ig, B(this.ca, this));
            this.F.listen(yp.pa(), ["sb",
                tb, "kmi", "kma"
            ], this.di);
            this.F.listen(yp.pa(), ["se", Tc], this.mh);
            chrome.extension.onConnect.addListener(B(this.qg, this));
            a = ps();
            a.push(document);
            this.aa = new $z(a);
            this.F.listen(this.aa, "aec", this.Ld);
            a = new $l;
            a.target = document.activeElement;
            this.Ld(a)
        },
        dA = function(a, b, c, d) {
            var e;
            if (!(e = a.B != b || a.C !== c)) {
                a: {
                    e = a.D;
                    for (g in e)
                        if (!(g in d) || e[g] !== d[g]) {
                            var g = !1;
                            break a
                        } for (var h in d)
                        if (!(h in e)) {
                            g = !1;
                            break a
                        } g = !0
                }
                e = !g
            }
            e && (a.B = b, a.D = sk(d), a.C = c, a.N || (c ? Vz(a.A, a.B, a.D) : a.Zc()), a.Ud())
        },
        eA = function(a) {
            H(a.I,
                function(b) {
                    b.A && b.A.postMessage({
                        inputMode: [this.C ? this.B : "", this.D]
                    })
                }, a)
        },
        mj = typeof Object.defineProperties == r ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        lj = kj(this),
        oj = typeof Object.create == r ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        fA;
    if (typeof Object.setPrototypeOf == r) fA = Object.setPrototypeOf;
    else {
        var gA;
        a: {
            var hA = {
                    a: !0
                },
                iA = {};
            try {
                iA.__proto__ = hA;
                gA = iA.a;
                break a
            } catch (a) {}
            gA = !1
        }
        fA = gA ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var pj = fA;
    nj("Array.prototype.fill", function(a) {
        return a ? a : function(b, c, d) {
            var e = this.length || 0;
            0 > c && (c = Math.max(0, e + c));
            if (null == d || d > e) d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this
        }
    });
    nj("Int8Array.prototype.fill", qj);
    nj("Uint8Array.prototype.fill", qj);
    nj("Uint8ClampedArray.prototype.fill", qj);
    nj("Int16Array.prototype.fill", qj);
    nj("Uint16Array.prototype.fill", qj);
    nj("Int32Array.prototype.fill", qj);
    nj("Uint32Array.prototype.fill", qj);
    nj("Float32Array.prototype.fill", qj);
    nj("Float64Array.prototype.fill", qj);
    var jA = typeof Object.assign == r ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    nj("Object.assign", function(a) {
        return a || jA
    });
    var tu = tu || {},
        A = this || self,
        uj = /^[\w+/_-]+[=]{0,2}$/,
        sj = null,
        zj = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Aj = 0;
    (function() {
        function a(h) {
            this.t = {};
            this.tick = function(k, l, n) {
                this.t[k] = [void 0 != n ? n : (new Date).getTime(), l];
                if (void 0 == n) try {
                    window.console.timeStamp("CSI/" + k)
                } catch (y) {}
            };
            this.getStartTickTime = function() {
                return this.t.start[0]
            };
            this.tick(gh, null, h)
        }
        var b;
        if (window.performance) var c = (b = window.performance.timing) && b.responseStart;
        var d = 0 < c ? new a(c) : new a;
        window.jstiming = {
            Timer: a,
            load: d
        };
        if (b) {
            var e = b.navigationStart;
            0 < e && c >= e && (window.jstiming.srt = c - e)
        }
        if (b) {
            var g = window.jstiming.load;
            0 < e && c >= e &&
                (g.tick("_wtsrt", void 0, e), g.tick("wtsrt_", "_wtsrt", c), g.tick("tbsd_", "wtsrt_"))
        }
        try {
            b = null, window.chrome && window.chrome.csi && (b = Math.floor(window.chrome.csi().pageT), g && 0 < e && (g.tick("_tbnd", void 0, window.chrome.csi().startE), g.tick("tbnd_", "_tbnd", e))), null == b && window.gtbExternal && (b = window.gtbExternal.pageT()), null == b && window.external && (b = window.external.pageT, g && 0 < e && (g.tick("_tbnd", void 0, window.external.startE), g.tick("tbnd_", "_tbnd", e))), b && (window.jstiming.pt = b)
        } catch (h) {}
    })();
    var po = {
        sf: "aq",
        fi: "ai",
        hi: "ra",
        ii: "ds",
        ji: "dr",
        tf: "fd",
        ni: "gi",
        oi: "gl",
        uf: "gp",
        vf: "hd",
        kg: "pl",
        lg: "re",
        Dp: "ri",
        mg: "sq",
        Fp: "si",
        Gp: "ss",
        SUCCESS: "su",
        Np: "ui",
        ng: "ua",
        ue: "up",
        URL: "url",
        Pl: "input_tools",
        Ak: "current_input",
        Ql: "current_input_state",
        Mp: "tvk",
        ig: "GOOGLE_ITA_KD",
        mi: "ft",
        Qp: "ut",
        jg: "km"
    };
    var kA = {},
        jx = (kA.tlang = ["ltkc", "ltcc"], kA.tsbc = ["bckc", "bccc"], kA.pun = ["ptkc", "ptcc"], kA);
    E.prototype.W = !1;
    E.prototype.ca = function() {
        this.W || (this.W = !0, this.M())
    };
    E.prototype.M = function() {
        if (this.La)
            for (; this.La.length;) this.La.shift()()
    };
    z(Lj, E);
    x = Lj.prototype;
    x.Xc = function() {};
    x.Bb = function() {};
    x.get = function() {};
    x.set = function() {};
    x.Rd = function() {};
    x.Ec = function() {};
    x.cd = function() {};
    x.push = function() {};
    x.Gb = function() {};
    x.report = function() {};
    C(Mj, Error);
    Mj.prototype.name = "CustomError";
    var Xm;
    C(Nj, Mj);
    Nj.prototype.name = "AssertionError";
    var Rj = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if (typeof a === w) return typeof b !== w || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        H = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = typeof a === w ? a.split("") : a, g = 0; g < d; g++) g in e && b.call(c, e[g], g, a)
        },
        qn = Array.prototype.filter ? function(a, b) {
            return Array.prototype.filter.call(a,
                b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = [], e = 0, g = typeof a === w ? a.split("") : a, h = 0; h < c; h++)
                if (h in g) {
                    var k = g[h];
                    b.call(void 0, k, h, a) && (d[e++] = k)
                } return d
        },
        cl = Array.prototype.map ? function(a, b, c) {
            return Array.prototype.map.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = Array(d), g = typeof a === w ? a.split("") : a, h = 0; h < d; h++) h in g && (e[h] = b.call(c, g[h], h, a));
            return e
        },
        zu = Array.prototype.reduce ? function(a, b, c) {
            return Array.prototype.reduce.call(a, b, c)
        } : function(a, b, c) {
            var d = c;
            H(a, function(e, g) {
                d = b.call(void 0,
                    d, e, g, a)
            });
            return d
        },
        Ws = Array.prototype.some ? function(a, b, c) {
            return Array.prototype.some.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = typeof a === w ? a.split("") : a, g = 0; g < d; g++)
                if (g in e && b.call(c, e[g], g, a)) return !0;
            return !1
        },
        Iv = Array.prototype.every ? function(a, b, c) {
            return Array.prototype.every.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = typeof a === w ? a.split("") : a, g = 0; g < d; g++)
                if (g in e && !b.call(c, e[g], g, a)) return !1;
            return !0
        };
    var hk = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        zl = /&/g,
        Al = /</g,
        Bl = />/g,
        Cl = /"/g,
        Dl = /'/g,
        El = /\x00/g,
        yl = /[\x00&<>"']/;
    var kk;
    a: {
        var lA = A.navigator;
        if (lA) {
            var mA = lA.userAgent;
            if (mA) {
                kk = mA;
                break a
            }
        }
        kk = ""
    };
    var tk = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var Ek;
    Ik.prototype.nb = !0;
    Ik.prototype.$a = function() {
        return this.A
    };
    var Hk = {},
        Gk = {},
        Yw = Kk("");
    var nA = /[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/,
        oA = /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]/,
        pA = /^http:\/\/.*/,
        qA = /\s+/,
        rA = /[\d\u06f0-\u06f9]/;
    Mk.prototype.nb = !0;
    Mk.prototype.$a = function() {
        return this.A.toString()
    };
    Mk.prototype.toString = function() {
        return this.A + ""
    };
    var Pk = /%{(\w+)}/g,
        Ok = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
        sA = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Lk = {};
    Uk.prototype.nb = !0;
    Uk.prototype.$a = function() {
        return this.A.toString()
    };
    Uk.prototype.toString = function() {
        return this.A.toString()
    };
    var Yk = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
        Xk = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        Wk = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        Tk = {},
        ml = new Uk(Ca, Tk);
    al.prototype.nb = !0;
    al.prototype.$a = function() {
        return this.A
    };
    al.prototype.toString = function() {
        return this.A.toString()
    };
    var $k = {},
        el = new al("", $k),
        il = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
        hl = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
        gl = /\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
        jl = /\/\*/;
    var nl = {};
    ol.prototype.$a = function() {
        return this.A
    };
    ol.prototype.toString = function() {
        return this.A.toString()
    };
    var sl = new ol("", nl);
    vl.prototype.nb = !0;
    vl.prototype.$a = function() {
        return this.A.toString()
    };
    vl.prototype.toString = function() {
        return this.A.toString()
    };
    var ul = {},
        tA = new vl(A.trustedTypes && A.trustedTypes.emptyHTML || "", 0, ul);
    var Kl = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = wl(tA);
        return !b.parentElement
    });
    var Jl = /&([^;\s<&]+);?/g,
        uA = 2147483648 * Math.random() | 0;
    Pl[" "] = vj;
    var Km = G(ta),
        N = xk(),
        Im = G(ha),
        ip = Im || N,
        K = G("Gecko") && !(-1 != kk.toLowerCase().indexOf("webkit") && !G(ha)) && !(G("Trident") || G("MSIE")) && !G(ha),
        S = -1 != kk.toLowerCase().indexOf("webkit") && !G(ha),
        vA = S && G("Mobile"),
        Yl = G("Macintosh"),
        Pp = G("Windows"),
        Ty = G("Linux") || G("CrOS"),
        wA = G("Android"),
        xA = Nl(),
        yA = G("iPad"),
        zA = G("iPod"),
        gp = Ol(),
        AA;
    a: {
        var BA = "",
            CA = function() {
                var a = kk;
                if (K) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Im) return /Edge\/([\d\.]+)/.exec(a);
                if (N) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (S) return /WebKit\/(\S+)/.exec(a);
                if (Km) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();CA && (BA = CA ? CA[1] : "");
        if (N) {
            var DA = Tl();
            if (null != DA && DA > parseFloat(BA)) {
                AA = String(DA);
                break a
            }
        }
        AA = BA
    }
    var Ul = AA,
        Rl = {},
        EA;
    if (A.document && N) {
        var FA = Tl();
        EA = FA ? FA : parseInt(Ul, 10) || void 0
    } else EA = void 0;
    var Vl = EA;
    var qm = function() {
        if (!A.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            A.addEventListener("test", vj, b), A.removeEventListener("test", vj, b)
        } catch (c) {}
        return a
    }();
    J.prototype.stopPropagation = function() {
        this.D = !0
    };
    J.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    };
    var $r = N ? "textinput" : "textInput",
        Uv = {
            fc: bf,
            hc: ef,
            Dc: "mousecancel",
            xp: cf,
            zp: v,
            yp: df,
            vp: "mouseenter",
            wp: "mouseleave"
        };
    C($l, J);
    var Zl = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    $l.prototype.stopPropagation = function() {
        $l.da.stopPropagation.call(this);
        this.A.stopPropagation ? this.A.stopPropagation() : this.A.cancelBubble = !0
    };
    $l.prototype.preventDefault = function() {
        $l.da.preventDefault.call(this);
        var a = this.A;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    var am = "closure_listenable_" + (1E6 * Math.random() | 0);
    var cm = 0;
    fm.prototype.add = function(a, b, c, d, e) {
        var g = a.toString();
        a = this.A[g];
        a || (a = this.A[g] = [], this.B++);
        var h = hm(a, b, d, e); - 1 < h ? (b = a[h], c || (b.Fc = !1)) : (b = new dm(b, this.src, g, !!d, e), b.Fc = c, a.push(b));
        return b
    };
    fm.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.A)) return !1;
        var e = this.A[a];
        b = hm(e, b, c, d);
        return -1 < b ? (em(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.A[a], this.B--), !0) : !1
    };
    fm.prototype.removeAll = function(a) {
        a = a && a.toString();
        var b = 0,
            c;
        for (c in this.A)
            if (!a || c == a) {
                for (var d = this.A[c], e = 0; e < d.length; e++) ++b, em(d[e]);
                delete this.A[c];
                this.B--
            } return b
    };
    var om = "closure_lm_" + (1E6 * Math.random() | 0),
        wm = {},
        sm = 0,
        xm = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    C(M, E);
    var Am = [];
    M.prototype.listen = function(a, b, c, d) {
        return ym(this, a, b, c, d)
    };
    M.prototype.removeAll = function() {
        mk(this.A, function(a, b) {
            this.A.hasOwnProperty(b) && vm(a)
        }, this);
        this.A = {}
    };
    M.prototype.M = function() {
        M.da.M.call(this);
        this.removeAll()
    };
    M.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    z(Cm, E);
    Cm.prototype.D = function() {
        this.ca()
    };
    Cm.prototype.M = function() {
        D(this.B);
        for (var a in this.A) D(this.A[a]), delete this.A[a];
        E.prototype.M.call(this)
    };
    wj(Cm);
    var Jm = yk(),
        GA = Nl() || G("iPod"),
        Mm = G("iPad"),
        Nm = G("Android") && !(zk() || yk() || G(ta) || G("Silk")),
        Hm = zk(),
        Lm = G("Safari") && !(zk() || G("Coast") || G(ta) || G(ha) || G("Edg/") || G("OPR") || yk() || G("Silk") || G("Android")) && !Ol();
    var Fm = function() {
        if (Jm) return Em(/Firefox\/([0-9.]+)/);
        if (N || Im || Km) return Ul;
        if (Hm) return Ol() ? Em(/CriOS\/([0-9.]+)/) : Em(/Chrome\/([0-9.]+)/);
        if (Lm && !Ol()) return Em(/Version\/([0-9.]+)/);
        if (GA || Mm) {
            var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(kk);
            if (a) return a[1] + "." + a[2]
        } else if (Nm) return (a = Em(/Android\s+([0-9.]+)/)) ? a : Em(/Version\/([0-9.]+)/);
        return ""
    }();
    C(O, E);
    O.prototype[am] = !0;
    x = O.prototype;
    x.ta = function(a) {
        this.wb = a
    };
    x.removeEventListener = function(a, b, c, d) {
        um(this, a, b, c, d)
    };
    x.J = function(a) {
        var b, c = this.wb;
        if (c)
            for (b = []; c; c = c.wb) b.push(c);
        c = this.bh;
        var d = a.type || a;
        if (typeof a === w) a = new J(a, c);
        else if (a instanceof J) a.target = a.target || c;
        else {
            var e = a;
            a = new J(d, c);
            uk(a, e)
        }
        e = !0;
        if (b)
            for (var g = b.length - 1; !a.D && 0 <= g; g--) {
                var h = a.B = b[g];
                e = Pm(h, d, !0, a) && e
            }
        a.D || (h = a.B = c, e = Pm(h, d, !0, a) && e, a.D || (e = Pm(h, d, !1, a) && e));
        if (b)
            for (g = 0; !a.D && g < b.length; g++) h = a.B = b[g], e = Pm(h, d, !1, a) && e;
        return e
    };
    x.M = function() {
        O.da.M.call(this);
        this.S && this.S.removeAll(void 0);
        this.wb = null
    };
    x.listen = function(a, b, c, d) {
        return this.S.add(String(a), b, !1, c, d)
    };
    Qm.prototype.get = function() {
        if (0 < this.B) {
            this.B--;
            var a = this.A;
            this.A = a.next;
            a.next = null
        } else a = this.D();
        return a
    };
    var jn = !N || Wl(9),
        pn = !K && !N || N && Wl(9) || K && I("1.9.1"),
        HA = N && !I("9"),
        kr = N && !Wl(9);
    P.prototype.mc = function(a) {
        return a instanceof P && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    P.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    P.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    P.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    Tm.prototype.aspectRatio = function() {
        return this.width / this.height
    };
    Tm.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Tm.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Tm.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var $m = {
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
        Dn = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        En = {
            IMG: " ",
            BR: "\n"
        };
    x = Wm.prototype;
    x.L = function(a) {
        return Ym(this.A, a)
    };
    x.O = function(a, b, c) {
        return gn(this.A, arguments)
    };
    x.V = function(a, b) {
        a.appendChild(b)
    };
    x.ia = function(a, b) {
        ln(Q(a), a, arguments, 1)
    };
    x.zc = nn;
    x.Va = on;
    x.getChildren = rn;
    x.contains = sn;
    x.wg = xn;
    x.ai = yn;
    var Kn;
    On.prototype.add = function(a, b) {
        var c = Wn.get();
        c.set(a, b);
        this.B ? this.B.next = c : this.A = c;
        this.B = c
    };
    On.prototype.remove = function() {
        var a = null;
        this.A && (a = this.A, this.A = this.A.next, this.A || (this.B = null), a.next = null);
        return a
    };
    var Wn = new Qm(function() {
        return new Pn
    }, function(a) {
        return a.reset()
    });
    Pn.prototype.set = function(a, b) {
        this.B = a;
        this.A = b;
        this.next = null
    };
    Pn.prototype.reset = function() {
        this.next = this.A = this.B = null
    };
    var Qn, Sn = !1,
        Tn = new On;
    $n.prototype.reset = function() {
        this.D = this.B = this.C = this.A = null;
        this.F = !1
    };
    var ao = new Qm(function() {
        return new $n
    }, function(a) {
        a.reset()
    });
    Zn.prototype.then = function(a, b, c) {
        return jo(this, typeof a === r ? a : null, typeof b === r ? b : null, c)
    };
    Zn.prototype.$goog_Thenable = !0;
    Zn.prototype.cancel = function(a) {
        if (0 == this.A) {
            var b = new io(a);
            Un(function() {
                co(this, b)
            }, this)
        }
    };
    Zn.prototype.W = function(a) {
        this.A = 0;
        Yn(this, 2, a)
    };
    Zn.prototype.I = function(a) {
        this.A = 0;
        Yn(this, 3, a)
    };
    Zn.prototype.S = function() {
        for (var a; a = eo(this);) fo(this, a, this.A, this.H);
        this.G = !1
    };
    var no = Nn;
    C(io, Mj);
    io.prototype.name = "cancel";
    z(qo, E);
    qo.prototype.D = function(a, b, c) {
        if (!this.W) {
            var d = B,
                e = c[this.A.SUCCESS];
            var g = c[this.A.lg];
            if (g) {
                g = g.replace(/\s*while\(1\);\s*(.*)/g, "$1");
                try {
                    var h = JSON.parse(g)
                } catch (k) {
                    h = null
                }
            } else h = null;
            a = d(a, b, e, h);
            this.B.push("od", c.od);
            oo(a)
        }
    };
    qo.prototype.send = function(a, b, c, d, e, g) {
        Ij(vk(this.A.mg, !0, this.A.URL, a, this.A.kg, b, this.A.vf, e, this.A.tf, g), B(this.D, this, c, d || null))
    };
    qo.prototype.abort = function() {
        Ij(vk(this.A.sf, !0))
    };
    var xq = window.document,
        vq = window,
        vp = R(window.document),
        Fs = new O,
        Pz = "",
        Qz = !1;
    ro.prototype.contains = function(a) {
        return this && a ? a instanceof ro ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    ro.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    ro.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    ro.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    so.prototype.contains = function(a) {
        return a instanceof P ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    so.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    so.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    so.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var wo = {},
        Oo = K ? "MozUserSelect" : S || Im ? "WebkitUserSelect" : null,
        Xo = {
            thin: 2,
            medium: 4,
            thick: 6
        },
        Zo = /[^\d]+$/,
        $o = {
            cm: 1,
            "in": 1,
            mm: 1,
            pc: 1,
            pt: 1
        },
        ap = {
            em: 1,
            ex: 1
        };
    var hp = function() {
        if (Pp) {
            var a = /Windows NT ([0-9.]+)/;
            return (a = a.exec(kk)) ? a[1] : "0"
        }
        return Yl ? (a = /1[0|1][_.][0-9_.]+/, (a = a.exec(kk)) ? a[0].replace(/_/g, ".") : "10") : wA ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(kk)) ? a[1] : "") : xA || yA || zA ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(kk)) ? a[1].replace(/_/g, ".") : "") : ""
    }();
    var iq = "jsapi",
        Cy = "",
        Dy = !1,
        az = !0,
        sy = 13,
        Wx = 13,
        bs = !0,
        dq = !N || I(9),
        Xy = !0,
        Pu = !1,
        rs = "",
        qs = "",
        Mz = !0,
        X = vA,
        wy = !1;
    z(jp, J);
    jp.prototype.L = function() {
        return this.C
    };
    z(kp, J);
    lp.prototype.Ga = function() {};
    C(mp, lp);
    mp.prototype.Ga = function(a, b, c) {
        fp(this.A, this.B, a, b, void 0, c, this.F)
    };
    wj(np);
    np.prototype.A = 0;
    C(U, O);
    U.prototype.dh = np.pa();
    var op = null;
    x = U.prototype;
    x.L = function() {
        return this.D
    };
    x.ta = function(a) {
        if (this.X && this.X != a) throw Error("Method not supported");
        U.da.ta.call(this, a)
    };
    x.$ = function() {
        this.D = kn(this.A.A, f)
    };
    x.ha = function(a) {
        if (this.Ta) throw Error("Component already rendered");
        this.D || this.$();
        a ? a.insertBefore(this.D, null) : this.A.A.body.appendChild(this.D);
        this.X && !this.X.Ta || this.Z()
    };
    x.Z = function() {
        this.Ta = !0;
        tp(this, function(a) {
            !a.Ta && a.L() && a.Z()
        })
    };
    x.ib = function() {
        tp(this, function(a) {
            a.Ta && a.ib()
        });
        this.U && this.U.removeAll();
        this.Ta = !1
    };
    x.M = function() {
        this.Ta && this.ib();
        this.U && (this.U.ca(), delete this.U);
        tp(this, function(a) {
            a.ca()
        });
        this.D && on(this.D);
        this.X = this.D = this.F = null;
        U.da.M.call(this)
    };
    z(wp, U);
    x = wp.prototype;
    x.Pe = function() {};
    x.df = function() {};
    x.Th = function() {
        if (this.N)
            if (this.N.tagName.toUpperCase() == la) try {
                a: {
                    var a = this.N;
                    try {
                        var b = a.contentWindow || (a.contentDocument ? fn(a.contentDocument) : null);
                        break a
                    } catch (c) {}
                    b = null
                }
                b && b.focus()
            }
        catch (c) {} else this.N.focus()
    };
    x.Z = function() {
        var a = this,
            b = this.L();
        this.H.listen(b, v, function() {
            a.ab = !0
        });
        this.H.listen(b, df, function() {
            a.ab = !1
        });
        this.H.listen(this.K, Fa, B(this.Th, this))
    };
    x.ye = function(a) {
        a = this.A.L(a);
        this.N != a && (this.N = a, this.K.J(new jp(a)))
    };
    x.Ac = function(a, b, c) {
        if (this.hf && (a = this.A.L(a))) {
            var d = new ro(0, 0, 0, 0);
            null != c && (typeof c === If ? d = new ro(c, c, c, c) : xj(c) && 4 == c.length && (d = new ro(Number(c[0]), Number(c[1]), Number(c[2]), Number(c[3]))));
            c = this.L();
            (new mp(a, b[0])).Ga(c, b[1], d);
            if (0 == iq.indexOf("og")) {
                for (b = "99"; a;) yj(a) && 1 == a.nodeType && a.style.zIndex && (d = zo(a, "zIndex"), Number(b) < Number(d) && (b = d)), a = a.parentNode;
                c.style.zIndex = b
            }
        }
    };
    x.show = function() {
        var a = this.L();
        a && a.style.display != this.T && (a.style.display = this.T, this.K.J(new kp(!0)))
    };
    x.hide = function(a) {
        var b = this.L();
        if (a || b && b.style.display != Hf && !this.ab) this.Pe(), this.K.J(new kp(!1))
    };
    x.wf = function() {
        var a = this.L();
        if (a) switch (a.style.display) {
            case this.T:
                this.hide();
                break;
            case Hf:
                this.show()
        }
    };
    x.M = function() {
        U.prototype.M.call(this);
        D(this.H)
    };
    var IA = {
        CURRENT_INPUT_TOOL_CHANGED: tb,
        ki: "ecd",
        Hp: "se",
        xk: Tc,
        Ip: "sp",
        yk: "hp",
        Rl: "itlu",
        up: "ita_l",
        Ap: "pelu",
        Ep: "slc",
        Jp: "sb",
        zk: "ic",
        Cp: "rc",
        Kp: "suc",
        Lp: "syc",
        Op: "uc",
        Pp: "uf",
        Vp: "wg",
        Bp: "psa"
    };
    var zp = [];
    z(yp, O);
    wj(yp);
    C(Fp, J);
    var Wp = {
        8: "backspace",
        9: "tab",
        13: "enter",
        16: "shift",
        17: "ctrl",
        18: "alt",
        19: "pause",
        20: "caps-lock",
        27: "esc",
        32: "space",
        33: "pg-up",
        34: "pg-down",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        45: "insert",
        46: Rb,
        48: "0",
        49: "1",
        50: "2",
        51: "3",
        52: "4",
        53: "5",
        54: "6",
        55: "7",
        56: "8",
        57: "9",
        59: "semicolon",
        61: "equals",
        65: "a",
        66: "b",
        67: "c",
        68: "d",
        69: "e",
        70: "f",
        71: "g",
        72: "h",
        73: "i",
        74: "j",
        75: "k",
        76: "l",
        77: "m",
        78: "n",
        79: "o",
        80: "p",
        81: "q",
        82: "r",
        83: "s",
        84: "t",
        85: "u",
        86: "v",
        87: "w",
        88: "x",
        89: "y",
        90: "z",
        93: "context",
        96: "num-0",
        97: "num-1",
        98: "num-2",
        99: "num-3",
        100: "num-4",
        101: "num-5",
        102: "num-6",
        103: "num-7",
        104: "num-8",
        105: "num-9",
        106: "num-multiply",
        107: "num-plus",
        109: "num-minus",
        110: "num-period",
        111: "num-division",
        112: "f1",
        113: "f2",
        114: "f3",
        115: "f4",
        116: "f5",
        117: "f6",
        118: "f7",
        119: "f8",
        120: "f9",
        121: "f10",
        122: "f11",
        123: "f12",
        186: "semicolon",
        187: "equals",
        189: "dash",
        188: ",",
        190: ".",
        191: "/",
        192: "`",
        219: "open-square-bracket",
        220: "\\",
        221: "close-square-bracket",
        222: "single-quote",
        224: "win"
    };
    x = Lp.prototype;
    x.keyCode = function(a) {
        this.D = a;
        return this
    };
    x.key = function(a) {
        this.C = a;
        return this
    };
    x.shiftKey = function(a) {
        this.S = a;
        return this
    };
    x.altKey = function(a) {
        this.A = a;
        return this
    };
    x.ctrlKey = function(a) {
        this.B = a;
        return this
    };
    x.metaKey = function(a) {
        this.F = a;
        return this
    };
    x.target = function(a) {
        this.I = a;
        return this
    };
    var Vp;
    C(Qp, O);
    var Np = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19],
        Op = ["color", "date", "datetime", "datetime-local", "email", "month", If, "password", "search", "tel", "text", "time", "url", "week"];
    x = Qp.prototype;
    x.yf = function(a, b) {
        Zp(this.B, Up(1, arguments), a)
    };
    x.zf = function(a) {
        $p(this.B, Up(0, arguments))
    };
    x.xf = function(a) {
        return bq(this, this.B, Up(0, arguments))
    };
    x.M = function() {
        Qp.da.M.call(this);
        this.B = {};
        um(this.A, t, this.Ee, !1, this);
        um(this.A, nh, this.Le, !1, this);
        Pp && (um(this.A, u, this.Ne, !1, this), um(this.A, oh, this.Oe, !1, this));
        um(this.A, ne, this.Fe, !1, this);
        um(this.A, ph, this.Me, !1, this);
        this.A = null
    };
    x.Fe = function(a) {
        a = Mp(a);
        K && Xp(this, a);
        Pp && !this.C && Yp(a) && cq(this, a, !0)
    };
    x.Me = function(a) {
        a = a.C();
        K && Xp(this, a);
        Pp && !this.C && Yp(a) && cq(this, a, !0)
    };
    x.Ne = function(a) {
        a = Mp(a);
        32 < a.A && Yp(a) && (this.C = !0)
    };
    x.Oe = function(a) {
        a = a.C();
        32 < a.A && Yp(a) && (this.C = !0)
    };
    x.Ee = function(a) {
        cq(this, Mp(a))
    };
    x.Le = function(a) {
        cq(this, a.C())
    };
    z(eq, O);
    x = eq.prototype;
    x.Vd = function(a, b) {
        if (typeof arguments[1] === w) {
            var c = gq(arguments[1]);
            if (c) {
                this.B[c] = a;
                return
            }
        }
        this.A.yf.apply(this.A, arguments)
    };
    x.Af = function(a) {
        var b = arguments[0];
        if (typeof b === w && (b = gq(b))) {
            this.B[b] && delete this.B[b];
            return
        }
        this.A.zf.apply(this.A, arguments)
    };
    x.dd = function(a) {
        if (typeof arguments[0] === w) {
            var b = gq(arguments[0]);
            if (b) return !!this.B[b]
        }
        return this.A.xf.apply(this.A, arguments)
    };
    x.Wg = function(a) {
        var b = K ? Ep(a.keyCode) : a.keyCode;
        16 == b && (this.F = !0);
        this.C = b & 255 | fq(a) << 8;
        this.B[this.C] && 16 != b && 17 != b && 18 != b && (a.preventDefault(), a.stopPropagation())
    };
    x.Xg = function(a) {
        this.B[this.C] && (a.preventDefault(), a.stopPropagation())
    };
    x.Yg = function(a) {
        var b = K ? Ep(a.keyCode) : a.keyCode,
            c = b & 255 | fq(a) << 8;
        if (c == this.C) {
            var d = this.B[c];
            d && (288 != c || this.F) && (a = a.target, this.J(new Fp(Mg, d, a)), this.J(new Fp(Ng + d, d, a)))
        }
        this.F = 32 == b || 16 == b;
        this.C = 0
    };
    x.M = function() {
        O.prototype.M.call(this);
        D(this.D);
        delete this.D;
        delete this.B
    };
    z(hq, Lj);
    x = hq.prototype;
    x.Xc = function(a) {
        this.Wd = a
    };
    x.Bb = function(a) {
        var b = this.A[a];
        b && typeof b === If ? b++ : b = 1;
        this.A[a] = b
    };
    x.get = function(a) {
        return this.A[a]
    };
    x.set = function(a, b) {
        this.A[a] = b
    };
    x.Rd = function(a, b) {
        this.C[a] = b
    };
    x.Ec = function(a) {
        this.B[a] = (new Date).getTime()
    };
    x.cd = function(a) {
        var b = (new Date).getTime();
        this.B[a] && (this.A[a] = b - this.B[a], delete this.B[a])
    };
    x.push = function(a, b) {
        var c = this.A[a];
        c = null != c ? String(c) + "_" + b : String(b);
        this.A[a] = c
    };
    x.Gb = function(a) {
        var b = this.A[a];
        if (typeof b === w) {
            var c = b.lastIndexOf("_");
            0 > c ? delete this.A[a] : this.A[a] = b.slice(0, c)
        }
    };
    x.report = function() {
        if ("vk" == this.D || this.D == bg || "hwt" == this.D) {
            mk(this.B, function(d, e) {
                this.cd(e)
            }, this);
            var a = !1,
                b;
            for (b in this.A)
                if (this.A[b]) {
                    a = !0;
                    break
                } if (!a) return;
            this.rd && this.set(Ea, "ul");
            var c = "https://www.google.cn/inputtools/ping?cs=1&app={APP}&itc={CODE}&uv=t|" + this.D + ",";
            a = {};
            uk(a, this.C, this.A);
            mk(a, function(d, e) {
                if ("ql" == e) {
                    var g = d.split("_");
                    if (10 < g.length) {
                        for (d = 0; 10 > d; d++) {
                            var h = Math.floor(Math.random() * (g.length - d)) + d,
                                k = g[d];
                            g[d] = g[h];
                            g[h] = k
                        }
                        d = g.slice(0, 10).join("_")
                    }
                }
                c += e + "|" + d +
                    ","
            }, this);
            c = c.slice(0, -1);
            jq(this, c)
        }
        this.A = {};
        this.B = {}
    };
    x.Vg = function(a) {
        var b = this.F[a];
        b.onload = b.onerror = null;
        delete this.F[a]
    };
    x.M = function() {
        this.rd = !0;
        this.report();
        this.C = {};
        Lj.prototype.M.call(this)
    };
    x.Wd = "";
    x.Ed = 0;
    x.rd = !1;
    var lq = typeof Uint8Array == r,
        mq = [];
    kq.prototype.toString = function() {
        return sq(this).toString()
    };
    C(uq, kq);
    C(qq, kq);
    var tq = [3, 4, 6, 7];
    var yq = {},
        JA = {},
        Dz = {};
    H([
        [1, Ja, [
                ["am", "\u12a0\u121b\u122d\u129b"]
            ],
            ["am"], 16, null, ["im_t13n_am"]
        ],
        [2, Ma, [
                ["ar", "\u0627\u0644\u0639\u0631\u0628\u064a\u0629"]
            ],
            ["ar"], 2, null, ["im_t13n_ar"]
        ],
        [3, cb, [
                ["bn", "\u09ac\u09be\u0982\u09b2\u09be"]
            ],
            ["bn"], 3, null, ["im_t13n_bn"]
        ],
        [4, Vi, [
                [Ki, "\u62fc\u97f3"]
            ],
            [Ki], 29, null, ["im_pinyin_zh_hans"]
        ],
        [49, Wi, [
                [Ki, "\u53cc\u62fc\uff08\u667a\u80fdABC\uff09"]
            ],
            [Ki], 44, [18]
        ],
        [50, Zi, [
                [Ki, "\u53cc\u62fc\uff08\u5fae\u8f6f\u65b9\u6848\uff09"]
            ],
            [Ki], 44, [18]
        ],
        [51, Xi, [
                [Ki, "\u53cc\u62fc\uff08\u5c0f\u9e64\uff09"]
            ],
            [Ki],
            44, [18]
        ],
        [52, Yi, [
                [Ki, "\u53cc\u62fc\uff08\u62fc\u97f3\u52a0\u52a0\uff09"]
            ],
            [Ki], 44, [18]
        ],
        [53, $i, [
                [Ki, "\u53cc\u62fc\uff08\u7d2b\u5149\uff09"]
            ],
            [Ki], 44, [18]
        ],
        [54, aj, [
                [Ki, "\u53cc\u62fc\uff08\u81ea\u7136\u7801\uff09"]
            ],
            [Ki], 44, [18]
        ],
        [6, Xb, [
                ["el", "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"]
            ],
            ["el"], 23, null, ["im_t13n_el"]
        ],
        [7, Mc, [
                ["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0"]
            ],
            ["gu"], 4, null, ["im_t13n_gu"]
        ],
        [8, Yc, [
                ["hi", "\u0939\u093f\u0928\u094d\u0926\u0940"]
            ],
            ["hi"], 5, null, ["im_t13n_hi"]
        ],
        [9,
            Vc, [
                [Tc, "\u05e2\u05b4\u05d1\u05b0\u05e8\u05b4\u05d9\u05ea"]
            ],
            [Tc], 20, null, ["im_t13n_he", "im_t13n_iw"]
        ],
        [33, "ja-t-i0", [
            ["ja", "\u65e5\u672c\u8a9e"]
        ], null, 28],
        [10, ge, [
                ["ja", "\u65e5\u672c\u8a9e"]
            ],
            ["ja"], 28, null, ["im_t13n_ja"]
        ],
        [11, te, [
                ["kn", "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1"]
            ],
            ["kn"], 6, null, ["im_t13n_kn"]
        ],
        [12, We, [
                ["ml", "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02"]
            ],
            ["ml"], 7, null, ["im_t13n_ml"]
        ],
        [13, gf, [
                ["mr", "\u092e\u0930\u093e\u0920\u0940"]
            ],
            ["mr"], 9, null, ["im_t13n_mr"]
        ],
        [14, xf, [
                ["ne", "\u0928\u0947\u092a\u093e\u0932\u0940"]
            ],
            ["ne"], 8, null, ["im_t13n_ne"]
        ],
        [15, Qf, [
                ["or", "\u0b13\u0b21\u0b3c\u0b3f\u0b06"]
            ],
            ["or"], 19, null, ["im_t13n_or"]
        ],
        [16, qc, [
                ["fa", "\u0641\u0627\u0631\u0633\u06cc"]
            ],
            ["fa"], 14, null, ["im_t13n_fa"]
        ],
        [17, Xf, [
                ["pa", "\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40"]
            ],
            ["pa"], 10, null, ["im_t13n_pa"]
        ],
        [46, "pl-t-i0-und", [
            ["pl", "Polski"]
        ], null, 37, null, ["im_t13n_pl"]],
        [18, Cg, [
                ["ru", "\u0420\u0443\u0441\u0441\u043a\u0438\u0439"]
            ],
            ["ru"], 24, null, ["im_t13n_ru"]
        ],
        [19, Hg, [
                ["sa", "\u0938\u0902\u0938\u094d\u0915\u0943\u0924\u092e\u094d"]
            ],
            ["sa"], 15, null, ["im_t13n_sa"]
        ],
        [20, eh, [
                ["sr", "\u0441\u0440\u043f\u0441\u043a\u0438"]
            ],
            ["sr"], 22, null, ["im_t13n_sr"]
        ],
        [21, Pg, [
                ["si", "\u0dc3\u0dd2\u0d82\u0dc4\u0dbd"]
            ],
            ["si"], 18, null, ["im_t13n_si"]
        ],
        [22, sh, [
                [qh, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"]
            ],
            [qh], 11, null, ["im_t13n_ta"]
        ],
        [23, Ah, [
                ["te", "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"]
            ],
            ["te"], 12, null, ["im_t13n_te"]
        ],
        [24, Oh, [
                ["ti", "\u1275\u130d\u122d\u129b"]
            ],
            ["ti"], 17, null, ["im_t13n_ti"]
        ],
        [25, ki, [
                ["ur", "\u0627\u0631\u062f\u0648"]
            ],
            ["ur"], 13, null, ["im_t13n_ur"]
        ],
        [31, "zh-t-i0-wubi-1998", [
            [Ki, "\u4e94\u7b14"]
        ], null, 30],
        [26, bj, [
                [Ki, "\u4e94\u7b14"]
            ],
            [Ki], 30, null, ["im_wubi_zh_hans"]
        ],
        [28, Ti, [
                [Ni, "\u6ce8\u97f3"]
            ],
            [Ni], 31, null, ["im_zhuyin_zh_hant"]
        ],
        [32, "zh-hant-t-i0-bopo", [
            [Ni, "\u6ce8\u97f3"]
        ], null, 31],
        [27, Si, [
                [Ni, "\u6f22\u8a9e\u62fc\u97f3"]
            ],
            [Ni], 29, null, ["im_pinyin_zh_hant"]
        ],
        [30, vi, [
                ["vi", "Ti\u1ebfng Vi\u1ec7t"]
            ],
            ["vi"], 21, [18],
            ["im_t13n_vi"]
        ],
        [34, Va, [
                ["be", "\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f"]
            ],
            ["be"], 26, null, ["im_t13n_be"]
        ],
        [35, Ya,
            [
                ["bg", "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438"]
            ],
            ["bg"], 27, null, ["im_t13n_bg"]
        ],
        [36, fi, [
                ["uk", "\u0422\u0440\u0430\u043d\u0441\u043b\u0456\u0442\u0435\u0440\u0430\u0446\u0456\u044f"]
            ],
            ["uk"], 25, null, ["im_t13n_uk"]
        ],
        [37, Nb, [
                ["de", ea]
            ],
            ["de"], 35, [15, 18]
        ],
        [38, hc, [
                ["es", "Espa\u00f1ol"]
            ],
            ["es"], 34, [15, 18]
        ],
        [39, yc, [
                ["fr", ja]
            ],
            ["fr"], 36, [15, 18]
        ],
        [40, vd, [
                ["it", qa]
            ],
            ["it"], 39, [15, 18]
        ],
        [41, Af, [
                ["nl", sa]
            ],
            ["nl"], 40, [15, 18]
        ],
        [42, rg, [
                [eg, va]
            ],
            [eg], 38, [15, 18]
        ],
        [48, mg, [
            [fg, va]
        ], null, 38],
        [43, Qi, [
                [Ni,
                    "\u5009\u9821"
                ]
            ],
            [Ni], 32
        ],
        [44, Ii, [
                [Li, "\u5ee3\u6771\u8a71"]
            ],
            [Li], 33
        ],
        [60, Hi, [
                [Li, "\u7cb5\u62fc"]
            ],
            [Li], 33
        ],
        [101, ah, [
                ["sq", "shqip"]
            ],
            ["sq"], 0, null, ["vkd_sq"]
        ],
        [102, Na, [
                ["ar", "\u0644\u0648\u062d\u0629 \u0645\u0641\u0627\u062a\u064a\u062d \u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629"]
            ],
            ["ar"], 0, null, ["vkd_ar"]
        ],
        [103, md, [
                ["hy", "\u0531\u0580\u0587\u0565\u056c\u0561\u0570\u0561\u0575\u0565\u0580\u0565\u0576"]
            ],
            ["hy"], 0, null, ["vkd_hy_east"]
        ],
        [104, nd, [
                ["hy", "\u0531\u0580\u0565\u0582\u0574\u057f\u0561\u0570\u0561\u0575\u0565\u0580\u0567\u0576"]
            ],
            ["hy"], 0, null, ["vkd_hy_west"]
        ],
        [105, oc, [
                ["eu", "euskara"]
            ],
            ["eu"], 0, null, ["vkd_eu"]
        ],
        [106, Wa, [
                ["be", "\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f"]
            ],
            ["be"], 0, null, ["vkd_be"]
        ],
        [107, db, [
                ["bn", "\u09ac\u09be\u0982\u09b2\u09be (INSCRIPT)"]
            ],
            ["bn"], 0, null, ["vkd_bn_inscript"]
        ],
        [108, eb, [
                ["bn", "\u09ac\u09be\u0982\u09b2\u09be (\u09ab\u09cb\u09a8\u09c7\u099f\u09bf\u0995)"]
            ],
            ["bn"], 0, null, ["vkd_bn_phone"]
        ],
        [109, hb, [
                ["bs", "bosanski"]
            ],
            ["bs"], 0, null, ["vkd_bs"]
        ],
        [110, kg, [
                [eg, wa]
            ],
            [eg], 0, null, ["vkd_pt_br"]
        ],
        [111, $a, [
                ["bg", "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a"]
            ],
            ["bg"], 0, null, ["vkd_bg"]
        ],
        [112, Za, [
                ["bg", "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a (\u0444\u043e\u043d\u0435\u0442\u0438\u043a\u0430)"]
            ],
            ["bg"], 0, null, ["vkd_bg_phone"]
        ],
        [113, jb, [
                ["ca", "catal\u00e0"]
            ],
            ["ca"], 0, null, ["vkd_ca"]
        ],
        [114, rb, [
                ["chr", "\u13e3\u13b3\u13a9"]
            ],
            ["chr"], 0, null, ["vkd_chr"]
        ],
        [233, ub, [
                ["ckb", "\u06a9\u0648\u0631\u062f\u06cc (\u062f\u06d5\u0633\u062a\u0646\u0648\u0633\u06cc \u0639\u06d5\u0631\u06d5\u0628\u06cc)"]
            ],
            ["ckb"], 0, null, ["vkd_ckb_ar"]
        ],
        [232, vb, [
                ["ckb", "\u06a9\u0648\u0631\u062f\u06cc"]
            ],
            ["ckb"], 0, null, ["vkd_ckb_en"]
        ],
        [115, fd, [
                ["hr", "Hrvatski"]
            ],
            ["hr"], 0, null, ["vkd_hr"]
        ],
        [116, Eb, [
                ["cs", "\u010ce\u0161tina"]
            ],
            ["cs"], 0, null, ["vkd_cs"]
        ],
        [117, Db, [
                ["cs", "\u010ce\u0161tina QWERTZ"]
            ],
            ["cs"], 0, null, ["vkd_cs_qwertz"]
        ],
        [118, Jb, [
                ["da", "Dansk"]
            ],
            ["da"], 0, null, ["vkd_da"]
        ],
        [119, cg, [
                ["prs", "\u0641\u0627\u0631\u0633\u06cc \u062f\u0631\u06cc"]
            ],
            ["fa"], 0, null, ["vkd_prs"]
        ],
        [120, Df, [
                ["nl", sa]
            ],
            ["nl"], 0, null, ["vkd_nl"]
        ],
        [121, $c, [
                ["hi", hj]
            ],
            ["hi"], 0, null, ["vkd_deva_phone"]
        ],
        [122, dc, [
                [q, ia]
            ],
            [q], 0, null, ["vkd_en"]
        ],
        [123, mc, [
                ["et", "eesti keel"]
            ],
            ["et"], 0, null, ["vkd_et"]
        ],
        [124, hi, [
                ["am", "\u130d\u12d5\u12dd"]
            ],
            ["am"], 0, null, ["vkd_ethi"]
        ],
        [125, uc, [
                ["fi", "Suomi"]
            ],
            ["fi"], 0, null, ["vkd_fi"]
        ],
        [126, Bc, [
                ["fr", ja]
            ],
            ["fr"], 0, null, ["vkd_fr"]
        ],
        [127, Kc, [
                ["gl", "galego"]
            ],
            ["gl"], 0, null, ["vkd_gl"]
        ],
        [128, le, [
                ["ka", "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8 (\u10e5\u10ec\u10d4\u10e0\u10e2\u10e7)"]
            ],
            ["ka"], 0, null, ["vkd_ka_qwerty"]
        ],
        [129,
            ke, [
                ["ka", "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8 (\u10e1\u10d0\u10d1\u10d4\u10ed\u10d3\u10d8 \u10db\u10d0\u10dc\u10e5\u10d0\u10dc\u10d0)"]
            ],
            ["ka"], 0, null, ["vkd_ka_typewriter"]
        ],
        [130, Qb, [
                ["de", ea]
            ],
            ["de"], 0, null, ["vkd_de"]
        ],
        [131, Yb, [
                ["el", "\u03b5\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"]
            ],
            ["el"], 0, null, ["vkd_el"]
        ],
        [132, Oc, [
                ["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0 (INSCRIPT)"]
            ],
            ["gu"], 0, null, ["vkd_gu_inscript"]
        ],
        [133, Pc, [
                ["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0 (\u0aab\u0acb\u0aa8\u0ac7\u0aa4\u0abf\u0a95)"]
            ],
            ["gu"], 0, null, ["vkd_gu_phone"]
        ],
        [134, Uf, [
                ["pa-guru", "\u0a17\u0a41\u0a30\u0a2e\u0a41\u0a16\u0a40 (INSCRIPT)"]
            ],
            ["pa"], 0, null, ["vkd_guru_inscript"]
        ],
        [135, Vf, [
                ["pa-guru", "\u0a17\u0a41\u0a30\u0a2e\u0a41\u0a16\u0a40 (\u0a2b\u0a4b\u0a28\u0a47\u0a1f\u0a3f\u0a15)"]
            ],
            ["pa"], 0, null, ["vkd_guru_phone"]
        ],
        [136, Wc, [
                [Tc, "\u05e2\u05b4\u05d1\u05b0\u05e8\u05b4\u05d9\u05ea"]
            ],
            [Tc], 0, null, ["vkd_he", "vkd_iw"]
        ],
        [137, ad, [
                ["hi", ij]
            ],
            ["hi"], 0, null, ["vkd_hi"]
        ],
        [138, ld, [
                ["hu", "magyar nyelv (101)"]
            ],
            ["hu"], 0, null, ["vkd_hu_101"]
        ],
        [139, td, [
                ["is", "\u00edslenska"]
            ],
            ["is"], 0, null, ["vkd_is"]
        ],
        [140, yd, [
                ["it", qa]
            ],
            ["it"], 0, null, ["vkd_it"]
        ],
        [141, ue, [
                ["kn", "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1 (INSCRIPT)"]
            ],
            ["kn"], 0, null, ["vkd_kn_inscript"]
        ],
        [142, ve, [
                ["kn", "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1 (\u0cab\u0cca\u0ca8\u0cc6\u0c9f\u0cbf\u0c95\u0ccd)"]
            ],
            ["kn"], 0, null, ["vkd_kn_phone"]
        ],
        [143, pe, [
                ["kk", "\u049a\u0430\u0437\u0430\u049b"]
            ],
            ["kk"], 0, null, ["vkd_kk"]
        ],
        [144, re, [
                ["km", "\u17a2\u1780\u17d2\u179f\u179a\u1781\u17d2\u1798\u17c2\u179a NiDA"]
            ],
            ["km"],
            0, null, ["vkd_km"]
        ],
        [145, xe, [
                ["ko", "\ud55c\uad6d\uc5b4"]
            ],
            ["ko"], 0, [18],
            ["vkd_ko"]
        ],
        [146, Ae, [
                ["ky", "\u041a\u044b\u0440\u0433\u044b\u0437"]
            ],
            ["ky"], 0, null, ["vkd_ky_cyrl"]
        ],
        [147, Je, [
                ["lo", "\u0e9e\u0eb2\u0eaa\u0eb2\u0ea5\u0eb2\u0ea7"]
            ],
            ["lo"], 0, null, ["vkd_lo"]
        ],
        [148, Oe, [
                ["lv", "latvie\u0161u valoda"]
            ],
            ["lv"], 0, null, ["vkd_lv"]
        ],
        [149, Le, [
                ["lt", "lietuvi\u0173 kalba"]
            ],
            ["lt"], 0, null, ["vkd_lt"]
        ],
        [150, Ue, [
                ["mk", "\u043c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438"]
            ],
            ["mk"], 0, null, ["vkd_mk"]
        ],
        [151, Xe,
            [
                ["ml", "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02 (INSCRIPT)"]
            ],
            ["ml"], 0, null, ["vkd_ml_inscript"]
        ],
        [152, Ye, [
                ["ml", "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02 (\u0d2b\u0d4a\u0d23\u0d31\u0d4d\u0d31\u0d3f\u0d15\u0d4d)"]
            ],
            ["ml"], 0, null, ["vkd_ml_phone"]
        ],
        [246, af, [
                ["mni-Mtei", "\uabc3\uabe4\uabc7\uabe9 \uabc3\uabcc\uabe6\uabdb (\uabd0\uabe3\uabc5\uabe6\uabc7\uabe4\uabdb)"]
            ],
            ["mni-Mtei"], 0
        ],
        [153, of, [
                ["mt", "Malti"]
            ],
            ["mt"], 0, null, ["vkd_mt"]
        ],
        [154, Se, [
                ["mi", "Maori"]
            ],
            ["mi"], 0, null, ["vkd_mi"]
        ],
        [155, Ze, [
                ["mn", "\u041c\u043e\u043d\u0433\u043e\u043b"]
            ],
            ["mn"], 0, null, ["vkd_mn_cyrl"]
        ],
        [156, fh, [
                ["sr", "Crnogorski jezik"]
            ],
            ["sr"], 0, null, ["vkd_srp"]
        ],
        [157, Gf, [
                ["no", "norsk"]
            ],
            ["no"], 0, null, ["vkd_no"]
        ],
        [158, Rf, [
                ["or", "\u0b13\u0b21\u0b3c\u0b3f\u0b06 (INSCRIPT)"]
            ],
            ["or"], 0, null, ["vkd_or_inscript"]
        ],
        [159, Sf, [
                ["or", "\u0b13\u0b21\u0b3c\u0b3f\u0b06 (\u0b2b\u0b4b\u0b28\u0b47\u0b1f\u0b3f\u0b15)"]
            ],
            ["or"], 0, null, ["vkd_or_phone"]
        ],
        [160, De, [
                [q, ca]
            ],
            ["af"], 0, null, ["vkd_latn_002"]
        ],
        [161, dg, [
                ["ps", "\u067e\u069a\u062a\u0648"]
            ],
            ["ps"], 0, null, ["vkd_ps"]
        ],
        [162, rc, [
                ["fa",
                    "\u0641\u0627\u0631\u0633\u06cc"
                ]
            ],
            ["fa"], 0, null, ["vkd_fa"]
        ],
        [163, $f, [
                ["pl", "polski"]
            ],
            ["pl"], 0, null, ["vkd_pl"]
        ],
        [164, pg, [
                [fg, xa]
            ],
            [fg], 0, null, ["vkd_pt_pt"]
        ],
        [165, zg, [
                ["rom", "rromani \u0107hib"]
            ],
            ["rom"], 0, null, ["vkd_rom"]
        ],
        [166, yg, [
                ["ro", "rom\u00e2n\u0103"]
            ],
            ["ro"], 0, null, ["vkd_ro"]
        ],
        [167, xg, [
                ["ro", "rom\u00e2n\u0103 SR13392 Primary"]
            ],
            ["ro"], 0, null, ["vkd_ro_sr13392_primary"]
        ],
        [168, wg, [
                ["ro", "rom\u00e2n\u0103 SR13392 Secondary"]
            ],
            ["ro"], 0, null, ["vkd_ro_sr13392_secondary"]
        ],
        [169, Fg, [
                ["ru", "\u0420\u0443\u0441\u0441\u043a\u0430\u044f \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430"]
            ],
            ["ru"], 0, null, ["vkd_ru"]
        ],
        [212, Eg, [
                ["ru", "\u0420\u0443\u0441\u0441\u043a\u0430\u044f \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430 (\u0444\u043e\u043d\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439)"]
            ],
            ["ru"], 0
        ],
        [242, Ig, [
                ["sa", ij]
            ],
            ["sa"], 0
        ],
        [170, Jg, [
                ["sa", "\u0938\u0902\u0938\u094d\u0915\u0943\u0924\u092e\u094d (\u092b\u094b\u0928\u0947\u091f\u093f\u0915\u094d)"]
            ],
            ["sa"], 0, null, ["vkd_sa_phone"]
        ],
        [171, bh, [
                ["sr", "\u0441\u0440\u043f\u0441\u043a\u0438"]
            ],
            ["sr"], 0, null, ["vkd_sr_cyrl"]
        ],
        [172, ch, [
                ["sr", "Srpski"]
            ],
            ["sr"], 0, null, ["vkd_sr_latn"]
        ],
        [173, Qg, [
                ["si", "\u0dc1\u0dd4\u0daf\u0dca\u0db0 \u0dc3\u0dd2\u0d82\u0dc4\u0dbd SLS1134"]
            ],
            ["si"], 0, null, ["vkd_si"]
        ],
        [174, Tg, [
                ["sk", "Slovensk\u00fd jazyk"]
            ],
            ["sk"], 0, null, ["vkd_sk"]
        ],
        [175, Sg, [
                ["sk", "Slovensk\u00fd jazyk - QWERTY"]
            ],
            ["sk"], 0, null, ["vkd_sk_qwerty"]
        ],
        [176, Vg, [
                ["sl", "sloven\u0161\u010dina"]
            ],
            ["sl"], 0, null, ["vkd_sl"]
        ],
        [177, ri, [
                ["uzs", "Southern Uzbek"]
            ],
            ["uzs"], 0, null, ["vkd_uzs"]
        ],
        [178, kc, [
                ["es", "Espa\u00f1ol"]
            ],
            ["es"], 0, null, ["vkd_es_es"]
        ],
        [179, kh, [
                ["sv", "Svenska"]
            ],
            ["sv"], 0, null, ["vkd_sv"]
        ],
        [180, Lb, [
                ["de", "Deutschsprachige Schweiz"]
            ],
            ["de"], 0, null, ["vkd_de_ch"]
        ],
        [181, uh, [
                [qh, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (TAMIL99)"]
            ],
            [qh], 0, null, ["vkd_ta_tamil99"]
        ],
        [182, wh, [
                [qh, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (INSCRIPT)"]
            ],
            [qh], 0, null, ["vkd_ta_inscript"]
        ],
        [183, xh, [
                [qh, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (\u0baa\u0bcb\u0ba9\u0bc6\u0b9f\u0bbf\u0b95\u0bcd)"]
            ],
            [qh], 0, null, ["vkd_ta_phone"]
        ],
        [205, vh, [
                [qh, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (TYPE-WRITER)"]
            ],
            [qh],
            0
        ],
        [206, th, [
                [qh, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (ITRANS)"]
            ],
            [qh], 0
        ],
        [184, ci, [
                ["tt", "\u0422\u0430\u0442\u0430\u0440"]
            ],
            ["tt"], 0, null, ["vkd_tt"]
        ],
        [185, Bh, [
                ["te", "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 (INSCRIPT)"]
            ],
            ["te"], 0, null, ["vkd_te_inscript"]
        ],
        [186, Ch, [
                ["te", "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 (\u0c2b\u0c4b\u0c28\u0c46\u0c1f\u0c3f\u0c15\u0c4d)"]
            ],
            ["te"], 0, null, ["vkd_te_phone"]
        ],
        [187, Lh, [
                ["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"]
            ],
            ["th"], 0, null, ["vkd_th"]
        ],
        [204, Jh, [
                ["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22 (Pattajoti)"]
            ],
            ["th"], 0
        ],
        [203, Kh, [
                ["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22 (TIS-820.2538)"]
            ],
            ["th"], 0
        ],
        [188, Yh, [
                ["tr", "T\u00fcrk\u00e7e - F"]
            ],
            ["tr"], 0, null, ["vkd_tr_f", Xh]
        ],
        [189, $h, [
                ["tr", "T\u00fcrk\u00e7e - Q"]
            ],
            ["tr"], 0, null, ["vkd_tr_q"]
        ],
        [190, di, [
                ["ug", "\u0626\u06c7\u064a\u063a\u06c7\u0631\u0686\u06d5"]
            ],
            ["ug"], 0, null, ["vkd_ug"]
        ],
        [191, gi, [
                ["uk", "\u0415\u043a\u0440\u0430\u043d\u043d\u0430 \u043a\u043b\u0430\u0432\u0456\u0430\u0442\u0443\u0440\u0430"]
            ],
            ["uk"], 0, null, ["vkd_uk_101"]
        ],
        [192, li, [
                ["ur", "\u0627\u0631\u062f\u0648"]
            ],
            ["ur"], 0, null, ["vkd_ur"]
        ],
        [193, pi, [
                ["uz", "o\u2018zbek"]
            ],
            ["uz"], 0, null, ["vkd_uz_latn"]
        ],
        [194, oi, [
                ["uz", "\u040e\u0437\u0431\u0435\u043a (\u0444\u043e\u043d\u0435\u0442\u0438\u0447\u043d\u0456)"]
            ],
            ["uz"], 0, null, ["vkd_uz_cyrl_phone"]
        ],
        [195, ni, [
                ["uz", "\u040e\u0437\u0431\u0435\u043a (\u0420\u043e\u0441\u0456\u0439\u0441\u044c\u043a\u0430)"]
            ],
            ["uz"], 0, null, ["vkd_uz_cyrl_type"]
        ],
        [196, xi, [
                ["vi", "Ti\u1ebfng Vi\u1ec7t TCVN 6064"]
            ],
            ["vi"], 0, null, ["vkd_vi_tcvn"]
        ],
        [197, wi, [
                ["vi", "Ti\u1ebfng Vi\u1ec7t Telex"]
            ],
            ["vi"], 0, null, ["vkd_vi_telex"]
        ],
        [198, yi, [
                ["vi", "Ti\u1ebfng Vi\u1ec7t VIQR"]
            ],
            ["vi"], 0, null, ["vkd_vi_viqr"]
        ],
        [208, "vi-t-k0-vni", [
                ["vi", "Ti\u1ebfng Vi\u1ec7t VNI"]
            ],
            ["vi"], 0
        ],
        [199, Vb, [
                ["dz", "\u0f62\u0fab\u0f7c\u0f44\u0f0b\u0f41\u0f0b"]
            ],
            ["dz"], 0, null, ["vkd_dz"]
        ],
        [200, cc, [
                [q, "English Dvorak"]
            ],
            [q], 0
        ],
        [201, sb, [
                ["chr", "\u13e3\u13b3\u13a9 \u13d7\u13a7\u13c1\u13a2\u13cd\u13d7 \u13da\u13c3\u13f4\u13ac"]
            ],
            ["chr"], 0, null, ["vkd_chr_phone"]
        ],
        [202, sf, [
                ["my", "\u1019\u103c\u1014\u103a\u1019\u102c\u1018\u102c\u101e\u102c"]
            ],
            ["my"], 0, null, ["vkd_my"]
        ],
        [239, Gh, [
                ["tg", "\u0422\u043e\u04b7\u0438\u043a"]
            ],
            ["tg"], 0, null, ["vkd_tg"]
        ],
        [5, bc, [
                [q, ia]
            ],
            [q], 41, [15, 18],
            ["im_t13n_en"]
        ],
        [29, ce, [
            ["ja", "\u65e5\u672c\u8a9e"]
        ], null, -1, null, ["im_t13n_ja_hira"]],
        [45, "tr-t-i0-und", [
            ["tr", "T\u00fcrk"]
        ], null, 42],
        [207, Fi, [
                ["yi", "\u05d4\u05e2\u05d1\u05e8\u05e2\u05d9\u05d9 \u05d9\u05d9\u05b4\u05d3\u05d9\u05e9 \u05e7\u05d9\u05d1\u05d0\u05b8\u05e8\u05d3"]
            ],
            ["yi"], 0
        ],
        [256, Gi, [
                ["yo", "Nigerian Yoruba"]
            ],
            ["yo"], 0
        ],
        [209, "ne-t-k0-und", [
                ["ne", "\u0928\u0947\u092a\u093e\u0932\u0940 (\u091f\u094d\u0930\u092f\u093e\u0921\u093f\u0938\u0928\u0932)"]
            ],
            ["ne"], 0
        ],
        [210, yf, [
                ["ne", "\u0928\u0947\u092a\u093e\u0932\u0940 (\u0930\u094b\u092e\u093e\u0928\u093e\u0907\u091c\u094d\u0921)"]
            ],
            ["ne"], 0
        ],
        [211, ec, [
                [q, Aa]
            ],
            ["nl"], 0
        ],
        [213, Kf, [
                ["nv", fa]
            ],
            ["nv"], 0
        ],
        [234, "nv-t-k0", [
            ["nv", fa]
        ], null, 0],
        [235, Jf, [
                ["nv", "Din\u00e9 bizaad - Traditional"]
            ],
            ["nv"], 0
        ],
        [401, Ha, [
                ["af", "Afrikaans"]
            ],
            ["af"], 1
        ],
        [506, Ia, [
                ["am", "\u12a0\u121b\u122d\u129b"]
            ],
            ["am"], 1
        ],
        [464, La, [
                ["ar", "\u0627\u0644\u0639\u0631\u0628\u064a\u0629"]
            ],
            ["ar"], 1
        ],
        [507, Pa, [
                ["as", "\u0985\u09b8\u09ae\u09c0\u09af\u09bc\u09be"]
            ],
            ["as"], 1
        ],
        [487, Ta, [
                ["az", "az\u0259rbaycan"]
            ],
            ["az"], 1
        ],
        [402, Ua, [
                ["be", "\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f"]
            ],
            ["be"], 1
        ],
        [403, Xa, [
                ["bg", "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438"]
            ],
            ["bg"], 1
        ],
        [489, bb, [
                ["bn", "\u09ac\u09be\u0982\u09b2\u09be"]
            ],
            ["bn"], 1
        ],
        [509, fb, [
                ["bo", "\u0f56\u0f7c\u0f51\u0f0b\u0f66\u0f90\u0f51\u0f0b"]
            ],
            ["bo"], 1
        ],
        [468, gb, [
                ["bs", "bosanski"]
            ],
            ["bs"], 1
        ],
        [404, ib, [
                ["ca", "catal\u00e0"]
            ],
            ["ca"], 1
        ],
        [469, lb, [
                ["ceb", "Cebuano"]
            ],
            ["ceb"], 1
        ],
        [494, wb, [
                ["co", "Corsican"]
            ],
            ["co"], 1
        ],
        [405, Cb, [
                ["cs", "\u010de\u0161tina"]
            ],
            ["cs"], 1
        ],
        [406, Gb, [
                ["cy", "Cymraeg"]
            ],
            ["cy"], 1
        ],
        [407, Ib, [
                ["da", "dansk"]
            ],
            ["da"], 1
        ],
        [408, Mb, [
                ["de", ea]
            ],
            ["de"], 1
        ],
        [455, Wb, [
                ["el", "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"]
            ],
            ["el"], 1
        ],
        [409, ac, [
                [q, ia]
            ],
            [q], 1
        ],
        [456, fc, [
                ["eo", "esperanto"]
            ],
            ["eo"], 1
        ],
        [410, gc, [
                ["es", "espa\u00f1ol"]
            ],
            ["es"], 1
        ],
        [411, lc, [
                ["et", "eesti"]
            ],
            ["et"], 1
        ],
        [412, nc, [
                ["eu", "euskara"]
            ],
            ["eu"], 1
        ],
        [465, pc, [
                ["fa", "\u0641\u0627\u0631\u0633\u06cc"]
            ],
            ["fa"], 1
        ],
        [413, tc, [
                ["fi", "suomi"]
            ],
            ["fi"],
            1
        ],
        [414, vc, [
                ["fil", "Filipino"]
            ],
            ["fil"], 1
        ],
        [415, xc, [
                ["fr", "fran\u00e7ais"]
            ],
            ["fr"], 1
        ],
        [495, Cc, [
                ["fy", "Frysk"]
            ],
            ["fy"], 1
        ],
        [416, Ec, [
                ["ga", "Gaeilge"]
            ],
            ["ga"], 1
        ],
        [496, Hc, [
                ["gd", "G\u00e0idhlig"]
            ],
            ["gd"], 1
        ],
        [417, Jc, [
                ["gl", "galego"]
            ],
            ["gl"], 1
        ],
        [462, Lc, [
                ["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0"]
            ],
            ["gu"], 1
        ],
        [497, Qc, [
                ["haw", gj]
            ],
            ["haw"], 1
        ],
        [457, Uc, [
                [Tc, "\u05e2\u05d1\u05e8\u05d9\u05ea"]
            ],
            [Tc], 1
        ],
        [453, Xc, [
                ["hi", "\u0939\u093f\u0928\u094d\u0926\u0940"]
            ],
            ["hi"], 1
        ],
        [470, cd, [
                ["hmn", "Hmong"]
            ],
            ["hmn"], 1
        ],
        [418,
            ed, [
                ["hr", "hrvatski"]
            ],
            ["hr"], 1
        ],
        [419, gd, [
                ["ht", "Haitian Creole"]
            ],
            ["ht"], 1
        ],
        [420, kd, [
                ["hu", "magyar"]
            ],
            ["hu"], 1
        ],
        [504, od, [
                ["hy", "\u0570\u0561\u0575\u0565\u0580\u0565\u0576"]
            ],
            ["hy"], 1
        ],
        [421, pd, [
                ["id", "Indonesia"]
            ],
            ["id"], 1
        ],
        [422, sd, [
                ["is", "\u00edslenska"]
            ],
            ["is"], 1
        ],
        [423, ud, [
                ["it", "italiano"]
            ],
            ["it"], 1
        ],
        [424, de, [
                ["ja", "\u65e5\u672c\u8a9e"]
            ],
            ["ja"], 1
        ],
        [458, he, [
                ["jv", "Javanese"]
            ],
            ["jv"], 1
        ],
        [505, je, [
                ["ka", "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8"]
            ],
            ["ka"], 1
        ],
        [501, oe, [
                ["kk", "\u049b\u0430\u0437\u0430\u049b \u0442\u0456\u043b\u0456"]
            ],
            ["kk"], 1
        ],
        [484, qe, [
                ["km", "\u1781\u17d2\u1798\u17c2\u179a"]
            ],
            ["km"], 1
        ],
        [471, se, [
                ["kn", "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1"]
            ],
            ["kn"], 1
        ],
        [425, we, [
                ["ko", "\ud55c\uad6d\uc5b4"]
            ],
            ["ko"], 1
        ],
        [477, ye, [
                ["ku", "kurd\u00ee"]
            ],
            ["ku"], 1
        ],
        [478, Be, [
                ["ky", "\u043a\u044b\u0440\u0433\u044b\u0437\u0447\u0430"]
            ],
            ["ky"], 1
        ],
        [426, Ce, [
                ["la", "Latin"]
            ],
            ["la"], 1
        ],
        [498, Fe, [
                ["lb", "L\u00ebtzebuergesch"]
            ],
            ["lb"], 1
        ],
        [483, Ie, [
                ["lo", "\u0ea5\u0eb2\u0ea7"]
            ],
            ["lo"], 1
        ],
        [427, Ke, [
                ["lt", "lietuvi\u0173"]
            ],
            ["lt"], 1
        ],
        [428, Ne, [
                ["lv", "latvie\u0161u"]
            ],
            ["lv"], 1
        ],
        [479, Qe, [
                ["mg", "Malagasy"]
            ],
            ["mg"], 1
        ],
        [459, Re, [
                ["mi", "Maori"]
            ],
            ["mi"], 1
        ],
        [429, Te, [
                ["mk", "\u043c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438"]
            ],
            ["mk"], 1
        ],
        [490, Ve, [
                ["ml", "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02"]
            ],
            ["ml"], 1
        ],
        [474, $e, [
                ["mn", "\u043c\u043e\u043d\u0433\u043e\u043b"]
            ],
            ["mn"], 1
        ],
        [461, ff, [
                ["mr", "\u092e\u0930\u093e\u0920\u0940"]
            ],
            ["mr"], 1
        ],
        [430, lf, [
                ["ms", "Melayu"]
            ],
            ["ms"], 1
        ],
        [467, nf, [
                ["mt", "Malti"]
            ],
            ["mt"], 1
        ],
        [488, pf, [
                ["mul", "Multiple languages"]
            ],
            ["mul"], 1
        ],
        [492, qf, [
                ["my",
                    "\u1019\u103c\u1014\u103a\u1019\u102c"
                ]
            ],
            ["my"], 1
        ],
        [431, vf, [
                ["nb", "norsk bokm\u00e5l"]
            ],
            ["nb"], 1
        ],
        [485, wf, [
                ["ne", "\u0928\u0947\u092a\u093e\u0932\u0940"]
            ],
            ["ne"], 1
        ],
        [432, zf, [
                ["nl", sa]
            ],
            ["nl"], 1
        ],
        [434, Ef, [
                ["nn", "nynorsk"]
            ],
            ["nn"], 1
        ],
        [433, Ff, [
                ["no", "norsk"]
            ],
            ["no"], 1
        ],
        [480, Lf, [
                ["ny", "Nyanja"]
            ],
            ["ny"], 1
        ],
        [476, Pf, [
                ["or", "\u0b13\u0b21\u0b3c\u0b3f\u0b06"]
            ],
            ["or"], 1
        ],
        [463, Wf, [
                ["pa", "\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40"]
            ],
            ["pa"], 1
        ],
        [435, Yf, [
                ["pl", "polski"]
            ],
            ["pl"], 1
        ],
        [436, qg, [
                [eg, "portugu\u00eas"]
            ], null,
            1
        ],
        [437, gg, [
                [eg, "portugu\u00eas (Brasil)"]
            ],
            [eg], 1
        ],
        [438, lg, [
                [fg, "portugu\u00eas (Portugal)"]
            ],
            [fg], 1
        ],
        [439, vg, [
                ["ro", "rom\u00e2n\u0103"]
            ],
            ["ro"], 1
        ],
        [440, Bg, [
                ["ru", "\u0440\u0443\u0441\u0441\u043a\u0438\u0439"]
            ],
            ["ru"], 1
        ],
        [491, Og, [
                ["si", "\u0dc3\u0dd2\u0d82\u0dc4\u0dbd"]
            ],
            ["si"], 1
        ],
        [441, Rg, [
                ["sk", "Sloven\u010dina"]
            ],
            ["sk"], 1
        ],
        [442, Ug, [
                ["sl", "sloven\u0161\u010dina"]
            ],
            ["sl"], 1
        ],
        [499, Wg, [
                ["sm", "Samoan"]
            ],
            ["sm"], 1
        ],
        [500, Yg, [
                ["sn", "chiShona"]
            ],
            ["sn"], 1
        ],
        [472, Zg, [
                ["so", "Soomaali"]
            ],
            ["so"], 1
        ],
        [443, $g, [
                ["sq",
                    "shqip"
                ]
            ],
            ["sq"], 1
        ],
        [444, dh, [
                ["sr", "\u0441\u0440\u043f\u0441\u043a\u0438"]
            ],
            ["sr"], 1
        ],
        [481, ih, [
                ["su", "Sundanese"]
            ],
            ["su"], 1
        ],
        [445, jh, [
                ["sv", "svenska"]
            ],
            ["sv"], 1
        ],
        [446, lh, [
                ["sw", "Kiswahili"]
            ],
            ["sw"], 1
        ],
        [473, rh, [
                [qh, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"]
            ],
            [qh], 1
        ],
        [466, zh, [
                ["te", "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"]
            ],
            ["te"], 1
        ],
        [502, Fh, [
                ["tg", "\u0442\u043e\u04b7\u0438\u043a\u04e3"]
            ],
            ["tg"], 1
        ],
        [454, Hh, [
                ["th", "\u0e44\u0e17\u0e22"]
            ],
            ["th"], 1
        ],
        [508, Nh, [
                ["ti", "\u1275\u130d\u122d\u129b"]
            ],
            ["ti"], 1
        ],
        [447, Vh, [
                ["tr",
                    "T\u00fcrk\u00e7e"
                ]
            ],
            ["tr"], 1
        ],
        [448, ei, [
                ["uk", "\u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"]
            ],
            ["uk"], 1
        ],
        [486, ji, [
                ["ur", "\u0627\u0631\u062f\u0648"]
            ],
            ["ur"], 1
        ],
        [503, qi, [
                ["uz", "o\u2018zbek"]
            ],
            ["uz"], 1
        ],
        [449, ui, [
                ["vi", "Ti\u1ebfng Vi\u1ec7t"]
            ],
            ["vi"], 1
        ],
        [482, Di, [
                ["xh", "Xhosa"]
            ],
            ["xh"], 1
        ],
        [510, Ei, [
                ["yi", "\u05d9\u05d9\u05b4\u05d3\u05d9\u05e9"]
            ],
            ["yi"], 1
        ],
        [450, Ui, [
            [Ki, "\u4e2d\u6587"]
        ], null, 1],
        [451, Oi, [
                [Ki, "\u4e2d\u6587\uff08\u7b80\u4f53\uff09"]
            ],
            [Ki], 1
        ],
        [452, Ri, [
                [Ni, "\u4e2d\u6587\uff08\u7e41\u9ad4\uff09"]
            ],
            [Ni], 1
        ],
        [475, cj, [
                ["zh-yue", "\u7cb5\u8a9e"]
            ],
            ["zh-yue"], 1
        ],
        [460, dj, [
                ["zu", "isiZulu"]
            ],
            ["zu"], 1
        ],
        [238, "see-t-k0-und", [
                ["see", "On\u00f6dowa\u02bcga:\u02bc"]
            ],
            ["see"], 0
        ],
        [214, Ph, [
                ["ti", "\u130d\u12d5\u12dd"]
            ],
            ["ti"], 0
        ],
        [215, kf, [
                ["mr", hj]
            ],
            ["mr"], 0
        ],
        [241, hf, [
                ["mr", ij]
            ],
            ["mr"], 0
        ],
        [216, hd, [
                ["ht", ja]
            ],
            ["ht"], 0
        ],
        [47, hg, [
            [eg, va]
        ], null, 38],
        [217, Cf, [
            [q, Aa]
        ], null, 0],
        [218, Ac, [
                [q, Aa]
            ],
            ["fr"], 0
        ],
        [219, Pb, [
                [q, Aa]
            ],
            ["de"], 0
        ],
        [220, xd, [
                [q, Aa]
            ],
            ["it"], 0
        ],
        [221, jg, [
                [q, Aa]
            ],
            [eg], 0
        ],
        [222, og, [
                [q, Aa]
            ],
            [fg], 0
        ],
        [223, jc, [
                [q, Aa]
            ],
            ["es"], 0
        ],
        [224, Hb, [
                [q, ca]
            ],
            ["cy"], 0
        ],
        [225, Gc, [
                [q, ca]
            ],
            ["ga"], 0
        ],
        [369, Fc, [
            [q, "Irish"]
        ], null, 0],
        [226, qd, [
                [q, ca]
            ],
            ["id"], 0
        ],
        [227, ie, [
                [q, ca]
            ],
            ["jw"], 0
        ],
        [228, mf, [
                [q, ca]
            ],
            ["ms"], 0
        ],
        [229, mh, [
                [q, ca]
            ],
            ["sw"], 0
        ],
        [230, Qh, [
                [q, ca]
            ],
            ["tl"], 0
        ],
        [231, rf, [
                ["my", "\u1019\u103c\u1014\u103a\u1019\u102c\u1018\u102c\u101e\u102c(\u1019\u103c\u1014\u103a\u1005\u1036)"]
            ],
            ["my"], 0
        ],
        [236, ae, [
                [q, "Nunavik Inuktitut"]
            ],
            ["iu"], 0
        ],
        [237, be, [
                [q, "Nunavut Inuktitut"]
            ],
            ["iu"], 0
        ],
        [245, $d, [
                [q, "Inuktitut Unicode"]
            ],
            ["iu"], 0
        ],
        [600, "en-t-i0-voice",
            [
                [q, ia]
            ], null, 43
        ],
        [601, Pi, [
            ["zh", "\u4e2d\u6587\uff08\u7b80\u4f53\uff09"]
        ], null, 43],
        [240, "lis-t-k0-und", [
                ["lis", "\ua4e1\ua4f2\ua4e2\ua4f4"]
            ],
            ["lis"], 0
        ],
        [493, ii, [
                [q, "Emoji & Symbol"]
            ],
            ["mul"], 1
        ],
        [351, xb, [
            [q, "Corsican"]
        ], null, 0],
        [352, Dc, [
            [q, "West Frisian"]
        ], null, 0],
        [353, Ic, [
            [q, "Scots Gaelic"]
        ], null, 0],
        [244, Sc, [
                ["haw", gj]
            ],
            ["haw"], 0
        ],
        [354, Rc, [
            [q, "Hawaiian"]
        ], null, 0],
        [355, Ge, [
            [q, "Luxembourgish"]
        ], null, 0],
        [243, Kg, [
                [q, "Sindhi"]
            ],
            ["sd"], 0
        ],
        [356, Xg, [
            [q, "Samoan"]
        ], null, 0],
        [358, Ob, [
            ["de", ea]
        ], null, 0],
        [359, ic,
            [
                ["es", "Espa\u00f1ol"]
            ], null, 0
        ],
        [360, zc, [
            ["fr", ja]
        ], null, 0],
        [361, wd, [
            ["it", qa]
        ], null, 0],
        [362, Bf, [
            ["nl", sa]
        ], null, 0],
        [363, Zf, [
            ["pl", "polski"]
        ], null, 0],
        [364, ig, [
            [eg, wa]
        ], null, 0],
        [365, ng, [
            [fg, xa]
        ], null, 0],
        [366, Wh, [
            ["tr", "T\u00fcrk\u00e7e - F"]
        ], null, 0],
        [367, Zh, [
            ["tr", "T\u00fcrk\u00e7e - Q"]
        ], null, 0],
        [368, ze, [
                ["ku", "Kurd\u00ee Bedirxan"]
            ],
            ["ku"], 0
        ],
        [56, "ko-t-i0-und", [
            ["ko", "\ud55c\uad6d\uc5b4"]
        ], null, 45],
        [58, fe, [
            ["ja", "\u65e5\u672c\u8a9e\uff08US\u30ad\u30fc\u30dc\u30fc\u30c9\u7528\uff09"]
        ], null, 28],
        [57,
            ee, [
                ["ja", "\u65e5\u672c\u8a9e\uff08\u65e5\u672c\u8a9e\u30ad\u30fc\u30dc\u30fc\u30c9\u7528\uff09"]
            ], null, 28
        ],
        [59, Ji, [
            [Ni, "\u5ee3\u6771\u8a71"]
        ], null, 33],
        [55, Ih, [
                ["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"]
            ],
            ["th"], 46, [18]
        ],
        [248, Tf, [
                ["osa", "\ud801\udccf\ud801\udcd8\ud801\udcfb\ud801\udcd8\ud801\udcfb\ud801\udcdf \ud801\udcbb\ud801\udcdf"]
            ],
            ["osa"], 0, null, ["vkd_osa"]
        ],
        [247, sc, [
                ["ff_Adlm", "\ud83a\udd06\ud83a\udd35\ud83a\udd24\ud83a\udd22\ud83a\udd2a/\ud83a\udd0a\ud83a\udd35\ud83a\udd24\ud83a\udd2c\ud83a\udd35\ud83a\udd24\ud83a\udd23\ud83a\udd2b"]
            ],
            ["ff"], 0, null, ["vkd_ff"]
        ],
        [249, kb, [
                ["ccp", "\ud804\udd0c\ud804\udd0b\ud804\udd34\ud804\udd1f\ud804\udd33\ud804\udd26"]
            ],
            ["ccp"], 0
        ],
        [251, Zc, [
            ["hi", jj]
        ], null, 0],
        [252, jf, [
            ["mr", jj]
        ], null, 0],
        [250, Nc, [
            ["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0(PHONETIC)"]
        ], null, 0],
        [253, Nf, [
                [q, "Ojibwe Left Dot - E Finals"]
            ],
            ["oj"], 0
        ],
        [254, Of, [
                ["one", "On\u028cyote\u0294a\u00b7k\u00e1\u00b7"]
            ],
            ["one"], 0
        ],
        [255, Pe, [
                ["mez", "Oma\u035eeqnome"]
            ],
            ["mez"], 0
        ],
        [257, ug, [
                ["rhg", "\ud803\udd0c\ud803\udd1f\ud803\udd07\ud803\udd25\ud803\udd1d\ud803\udd1a\ud803\udd12\ud803\udd19\ud803\udd1d"]
            ],
            ["rhg"], 0
        ],
        [258, Bb, [
                ["crk", "\u14c0\u1426\u1403\u152d\u140d\u140f\u1423"]
            ],
            ["crk"], 0
        ],
        [259, tf, [
                ["myh", "q\u02b7i\u00b7q\u02b7i\u00b7di\u010d\u010daq"]
            ],
            ["myh"], 0
        ]
    ], function(a) {
        var b = new uq(a);
        if (a = oq(b, 2)) {
            yq[a] = b;
            var c = oq(rq(b)[0], 2);
            c && (JA[a] = c)
        }
        H(oq(b, 4), function(d) {
            d == Ni ? d = "zh-Hant" : d == Ki && (d = Mi);
            Dz[d] || (Dz[d] = []);
            Dz[d].push(b)
        })
    });
    var Kq = "StopIteration" in A ? A.StopIteration : {
        message: "StopIteration",
        stack: ""
    };
    Jq.prototype.next = function() {
        throw Kq;
    };
    Jq.prototype.vb = function() {
        return this
    };
    C(Nq, Jq);
    Nq.prototype.next = function() {
        if (this.K) {
            if (!this.node || this.N && 0 == this.H) throw Kq;
            var a = this.node;
            var b = this.S ? -1 : 1;
            if (this.G == b) {
                var c = this.S ? a.lastChild : a.firstChild;
                c ? Mq(this, c) : Mq(this, a, -1 * b)
            } else(c = this.S ? a.previousSibling : a.nextSibling) ? Mq(this, c) : Mq(this, a.parentNode, -1 * b);
            this.H += this.G * (this.S ? -1 : 1)
        } else this.K = !0;
        a = this.node;
        if (!this.node) throw Kq;
        return a
    };
    Nq.prototype.mc = function(a) {
        return a.node == this.node && (!this.node || a.G == this.G)
    };
    Oq.prototype.Gd = function() {
        return !1
    };
    Oq.prototype.ff = function(a) {
        this.fb() || this.Hb();
        return this.Bc(a, !0)
    };
    C(Rq, Nq);
    C(Sq, Rq);
    Sq.prototype.I = function() {
        return this.D
    };
    Sq.prototype.W = function() {
        return this.K && (this.node != (this.C ? this.D : this.F) ? !1 : this.C ? this.B ? -1 != this.G : 1 == this.G : !this.A || 1 != this.G)
    };
    Sq.prototype.next = function() {
        if (this.W()) throw Kq;
        return Sq.da.next.call(this)
    };
    Tq.prototype.vb = function() {
        return new Sq(this.va(), this.Ka(), this.Ja(), this.Wa())
    };
    C(Wq, Tq);
    x = Wq.prototype;
    x.nc = function() {
        return this.C
    };
    x.ed = function() {
        return this.C.commonAncestorContainer
    };
    x.va = function() {
        return this.C.startContainer
    };
    x.Ka = function() {
        return this.C.startOffset
    };
    x.Ja = function() {
        return this.C.endContainer
    };
    x.Wa = function() {
        return this.C.endOffset
    };
    x.Da = function(a, b, c) {
        return this.C.compareBoundaryPoints(1 == c ? 1 == b ? A.Range.START_TO_START : A.Range.START_TO_END : 1 == b ? A.Range.END_TO_START : A.Range.END_TO_END, a)
    };
    x.za = function() {
        return this.C.collapsed
    };
    x.Yd = function() {
        return this.C.toString()
    };
    x.select = function(a) {
        var b = fn(Q(this.va()));
        this.vc(b.getSelection(), a)
    };
    x.vc = function(a) {
        a.removeAllRanges();
        a.addRange(this.C)
    };
    x.$d = function() {
        var a = this.C;
        a.extractContents();
        if (a.startContainer.hasChildNodes()) {
            var b = a.startContainer.childNodes[a.startOffset];
            if (b) {
                var c = b.previousSibling;
                "" == Cn(b) && on(b);
                c && "" == Cn(c) && on(c)
            }
        }
        if (ip) {
            b = this.va();
            c = this.Ka();
            var d = this.Ja(),
                e = this.Wa(),
                g = b.nextSibling;
            b == d && b.parentNode && 3 == b.nodeType && g && 3 == g.nodeType && (b.nodeValue += g.nodeValue, on(g), a.setStart(b, c), a.setEnd(d, e))
        }
    };
    x.Zd = function(a, b) {
        var c = this.C.cloneRange();
        c.collapse(b);
        c.insertNode(a);
        c.detach();
        return a
    };
    x.collapse = function(a) {
        this.C.collapse(a)
    };
    C($q, Wq);
    $q.prototype.vc = function(a, b) {
        !b || this.za() ? $q.da.vc.call(this, a, b) : (a.collapse(this.Ja(), this.Wa()), a.extend(this.va(), this.Ka()))
    };
    C(ar, Tq);
    x = ar.prototype;
    x.nc = function() {
        return this.C
    };
    x.ed = function() {
        if (!this.G) {
            var a = this.C.text,
                b = this.C.duplicate(),
                c = a.replace(/ +$/, "");
            (c = a.length - c.length) && b.moveEnd(ob, -c);
            c = b.parentElement();
            b = b.htmlText.replace(/(\r\n|\r|\n)+/g, " ").length;
            if (this.za() && 0 < b) return this.G = c;
            for (; b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, " ").length;) c = c.parentNode;
            for (; 1 == c.childNodes.length && c.innerText == hr(c.firstChild) && Xq(c.firstChild);) c = c.firstChild;
            0 == a.length && (c = dr(this, c));
            this.G = c
        }
        return this.G
    };
    x.va = function() {
        this.D || (this.D = fr(this, 1), this.za() && (this.F = this.D));
        return this.D
    };
    x.Ka = function() {
        0 > this.B && (this.B = gr(this, 1), this.za() && (this.A = this.B));
        return this.B
    };
    x.Ja = function() {
        if (this.za()) return this.va();
        this.F || (this.F = fr(this, 0));
        return this.F
    };
    x.Wa = function() {
        if (this.za()) return this.Ka();
        0 > this.A && (this.A = gr(this, 0), this.za() && (this.B = this.A));
        return this.A
    };
    x.Da = function(a, b, c) {
        return this.C.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a)
    };
    x.za = function() {
        return 0 == this.C.compareEndPoints("StartToEnd", this.C)
    };
    x.Yd = function() {
        return this.C.text
    };
    x.select = function() {
        this.C.select()
    };
    x.$d = function() {
        if (!this.za() && this.C.htmlText) {
            var a = this.va(),
                b = this.Ja(),
                c = this.C.text,
                d = this.C.duplicate();
            d.moveStart(ob, 1);
            d.moveStart(ob, -1);
            d.text == c && (this.C = d);
            this.C.text = "";
            cr(this);
            c = this.va();
            d = this.Ka();
            try {
                var e = a.nextSibling;
                a == b && a.parentNode && 3 == a.nodeType && e && 3 == e.nodeType && (a.nodeValue += e.nodeValue, on(e), this.C = br(c), this.C.move(ob, d), cr(this))
            } catch (g) {}
        }
    };
    x.Zd = function(a, b) {
        var c = this.C.duplicate();
        var d = d || R(c.parentElement());
        if (1 != a.nodeType) {
            var e = !0;
            a = d.O(f, null, a)
        }
        c.collapse(b);
        b = a;
        d = d || R(c.parentElement());
        var g = a = b.id;
        a || (a = b.id = "goog_" + uA++);
        c.pasteHTML(b.outerHTML);
        (b = d.L(a)) && (g || b.removeAttribute("id"));
        a = b;
        if (e) {
            c = a.firstChild;
            e = a;
            if ((b = e.parentNode) && 11 != b.nodeType)
                if (e.removeNode) e.removeNode(!1);
                else {
                    for (; d = e.firstChild;) b.insertBefore(d, e);
                    on(e)
                } a = c
        }
        c = a;
        cr(this);
        return c
    };
    x.collapse = function(a) {
        this.C.collapse(a);
        a ? (this.F = this.D, this.A = this.B) : (this.D = this.F, this.B = this.A)
    };
    C(ir, Wq);
    ir.prototype.vc = function(a) {
        a.collapse(this.va(), this.Ka());
        this.Ja() == this.va() && this.Wa() == this.Ka() || a.extend(this.Ja(), this.Wa());
        0 == a.rangeCount && a.addRange(this.C)
    };
    C(jr, Wq);
    jr.prototype.Da = function(a, b, c) {
        return I("528") ? jr.da.Da.call(this, a, b, c) : this.C.compareBoundaryPoints(1 == c ? 1 == b ? A.Range.START_TO_START : A.Range.END_TO_START : 1 == b ? A.Range.START_TO_END : A.Range.END_TO_END, a)
    };
    jr.prototype.vc = function(a, b) {
        b ? a.setBaseAndExtent(this.Ja(), this.Wa(), this.va(), this.Ka()) : a.setBaseAndExtent(this.va(), this.Ka(), this.Ja(), this.Wa())
    };
    C(mr, Oq);
    x = mr.prototype;
    x.yd = function() {
        return "text"
    };
    x.oc = function() {
        return qr(this).nc()
    };
    x.Rb = function() {
        return 1
    };
    x.mb = function() {
        return this
    };
    x.$b = function() {
        return qr(this).ed()
    };
    x.ua = function() {
        return this.D || (this.D = qr(this).va())
    };
    x.Ia = function() {
        return null != this.B ? this.B : this.B = qr(this).Ka()
    };
    x.Ha = function() {
        return this.F || (this.F = qr(this).Ja())
    };
    x.cb = function() {
        return null != this.A ? this.A : this.A = qr(this).Wa()
    };
    x.Gd = function() {
        return this.C
    };
    x.Zb = function(a, b) {
        var c = a.yd();
        return "text" == c ? Vq(qr(this), qr(a), b) : "control" == c ? (a = tr(a), (b ? Ws : Iv)(a, function(d) {
            return this.Xd(d, b)
        }, this)) : !1
    };
    x.Xd = function(a, b) {
        return this.Zb(nr(er(a), void 0), b)
    };
    x.fb = function() {
        return qr(this).za()
    };
    x.eb = function() {
        return qr(this).Yd()
    };
    x.vb = function() {
        return new Sq(this.ua(), this.Ia(), this.Ha(), this.cb())
    };
    x.select = function() {
        qr(this).select(this.C)
    };
    x.Hb = function() {
        qr(this).$d();
        this.D = this.B = this.F = this.A = null
    };
    x.Bc = function(a, b) {
        a = qr(this).Zd(a, b);
        this.D = this.B = this.F = this.A = null;
        return a
    };
    x.collapse = function(a) {
        a = this.Gd() ? !a : a;
        this.G && this.G.collapse(a);
        a ? (this.F = this.D, this.A = this.B) : (this.D = this.F, this.B = this.A);
        this.C = !1
    };
    C(rr, Oq);
    rr.prototype.Zb = function(a, b) {
        var c = Pq(this);
        a = Pq(a);
        return (b ? Ws : Iv)(a, function(d) {
            return Ws(c, function(e) {
                return e.Zb(d, b)
            })
        })
    };
    rr.prototype.Xd = function(a, b) {
        return this.Zb(nr(er(a), void 0), b)
    };
    rr.prototype.Bc = function(a, b) {
        b ? (b = this.ua(), b.parentNode && b.parentNode.insertBefore(a, b)) : (b = this.Ha(), b.parentNode && b.parentNode.insertBefore(a, b.nextSibling));
        return a
    };
    C(sr, rr);
    x = sr.prototype;
    x.yd = function() {
        return "control"
    };
    x.oc = function() {
        return this.C || document.body.createControlRange()
    };
    x.Rb = function() {
        return this.C ? this.C.length : 0
    };
    x.mb = function(a) {
        return nr(er(this.C.item(a)), void 0)
    };
    x.$b = function() {
        return wn.apply(null, tr(this))
    };
    x.ua = function() {
        return ur(this)[0]
    };
    x.Ia = function() {
        return 0
    };
    x.Ha = function() {
        var a = ur(this),
            b = Oj(a);
        return Qj(a, function(c) {
            return sn(c, b)
        })
    };
    x.cb = function() {
        return this.Ha().childNodes.length
    };
    x.fb = function() {
        return !this.C || !this.C.length
    };
    x.eb = function() {
        return ""
    };
    x.vb = function() {
        return new vr(this)
    };
    x.select = function() {
        this.C && this.C.select()
    };
    x.Hb = function() {
        if (this.C) {
            for (var a = [], b = 0, c = this.C.length; b < c; b++) a.push(this.C.item(b));
            H(a, on);
            this.collapse(!1)
        }
    };
    x.ff = function(a) {
        a = this.Bc(a, !0);
        this.fb() || this.Hb();
        return a
    };
    x.collapse = function() {
        this.B = this.A = this.C = null
    };
    C(vr, Rq);
    vr.prototype.I = function() {
        return this.D
    };
    vr.prototype.W = function() {
        return !this.H && !this.A.length
    };
    vr.prototype.next = function() {
        if (this.W()) throw Kq;
        if (!this.H) {
            var a = this.A.shift();
            Mq(this, a, 1, 1);
            return a
        }
        return vr.da.next.call(this)
    };
    C(wr, rr);
    x = wr.prototype;
    x.yd = function() {
        return "mutli"
    };
    x.oc = function() {
        return this.A[0]
    };
    x.Rb = function() {
        return this.A.length
    };
    x.mb = function(a) {
        this.D[a] || (this.D[a] = nr(lr(this.A[a]), void 0));
        return this.D[a]
    };
    x.$b = function() {
        if (!this.C) {
            for (var a = [], b = 0, c = this.Rb(); b < c; b++) a.push(this.mb(b).$b());
            this.C = wn.apply(null, a)
        }
        return this.C
    };
    x.ua = function() {
        return xr(this)[0].ua()
    };
    x.Ia = function() {
        return xr(this)[0].Ia()
    };
    x.Ha = function() {
        return Oj(xr(this)).Ha()
    };
    x.cb = function() {
        return Oj(xr(this)).cb()
    };
    x.fb = function() {
        return 0 == this.A.length || 1 == this.A.length && this.mb(0).fb()
    };
    x.eb = function() {
        return cl(Pq(this), function(a) {
            return a.eb()
        }).join("")
    };
    x.vb = function() {
        return new yr(this)
    };
    x.select = function() {
        var a = fn(Q(N ? this.$b() : this.ua())).getSelection();
        a.removeAllRanges();
        for (var b = 0, c = this.Rb(); b < c; b++) a.addRange(this.mb(b).oc())
    };
    x.Hb = function() {
        H(Pq(this), function(a) {
            a.Hb()
        })
    };
    x.collapse = function(a) {
        if (!this.fb()) {
            var b = a ? this.mb(0) : this.mb(this.Rb() - 1);
            this.D = [];
            this.C = this.B = null;
            b.collapse(a);
            this.D = [b];
            this.B = [b];
            this.A = [b.oc()]
        }
    };
    C(yr, Rq);
    yr.prototype.I = function() {
        return this.A[0].I()
    };
    yr.prototype.W = function() {
        return this.A[this.B].W()
    };
    yr.prototype.next = function() {
        try {
            var a = this.A[this.B],
                b = a.next();
            Mq(this, a.node, a.G, a.H);
            return b
        } catch (c) {
            if (c !== Kq || this.A.length - 1 == this.B) throw c;
            this.B++;
            return this.next()
        }
    };
    var Br = vj;
    Hm && Gm("4") || Lm && I("533") || K && I("2.0") || N && I("10") || Km && Ak();
    C(Or, lp);
    Or.prototype.Ga = function(a, b, c) {
        var d = Q(a);
        var e = d.body;
        d = d.documentElement;
        d = new P(e.scrollLeft || d.scrollLeft, e.scrollTop || d.scrollTop);
        e = this.A.x + d.x;
        d = this.A.y + d.y;
        var g = cp(a);
        e -= g.x;
        d -= g.y;
        ep(new P(e, d), a, b, c, null, null, void 0)
    };
    x = Rr.prototype;
    x.Pa = function() {
        return this.C
    };
    x.ac = function(a) {
        var b = No(this.D);
        a = Nr(this.D, b && a || !b && !a ? this.B : this.A);
        Kr(a, this.F);
        return new Or(a)
    };
    x.replace = function(a, b) {
        if (this.Db() && (this.C != a || b)) {
            b = Qr(this);
            var c = b[0],
                d = b[1];
            this.B <= c && this.A > c && this.A <= d ? c = this.A : this.B > c && this.B <= d && this.A > d ? d = this.B : this.B <= c && this.A > d && (c = d = this.A);
            b = a.length - (this.A - this.B);
            this.B > c && this.A <= d ? d += b : c >= this.A && (c += b, d += b);
            var e = this.D.value;
            this.D.value = e.slice(0, this.B) + a + e.slice(this.A);
            this.A = this.B + a.length;
            this.C = a;
            a = c;
            c = d;
            if (void 0 !== this.D.selectionStart) this.D.selectionStart = a, this.D.selectionEnd = c;
            else try {
                var g = this.D.createTextRange(),
                    h =
                    g.text.length;
                g.moveStart(ob, a);
                g.moveEnd(ob, c - h);
                g.select()
            } catch (k) {}
            b && hs(this.G, this, this.A - b, b)
        }
    };
    x.ae = function(a, b, c) {
        if (this.Db()) {
            for (var d = this.D.value, e = this.B - 1, g = 0; 0 <= e && !(++g > b) && !d.charAt(e).match(a);) e--;
            this.B = e + 1;
            if (c) {
                for (e = this.A; e < d.length && !(++g > b) && !d.charAt(e).match(a);) e++;
                this.A = e
            }
            this.C = d.slice(this.B, this.A)
        }
    };
    x.Db = function() {
        return this.D.value.slice(this.B, this.A) == this.C
    };
    x.te = function() {
        return this.B == this.A
    };
    x.td = function() {
        var a = Qr(this);
        return this.F.A.activeElement == this.D && (a[0] >= this.B && a[0] <= this.A || a[1] >= this.B && a[1] <= this.A)
    };
    x.ca = function() {
        this.G.deleteToken(this)
    };
    x.we = function(a, b) {
        this.B > a && (this.B += b);
        this.A > a && (this.A += b)
    };
    x = Sr.prototype;
    x.Pa = function() {
        return this.Db() ? this.G : ""
    };
    x.ac = function(a) {
        var b = No(Pr(this.H));
        if (!N) {
            var c = Tr(this);
            c.collapse(b && a || !b && !a)
        }
        a = Mr(this.C, c);
        Kr(a, this.C);
        return new Or(a)
    };
    x.replace = function(a, b) {
        if (this.Db() && (this.G != a || b)) {
            var c = b = null,
                d = 0,
                e = 0,
                g = this.te() || this.td();
            g || (e = Ar(Gn(this.C)), b = e.ua(), c = e.Ha(), d = e.Ia(), e = e.cb());
            var h = 0;
            a = a.replace(" ", "\u00a0");
            if (this.D != this.F || 3 != this.D.nodeType) {
                var k = Tr(this);
                k.Hb();
                this.D = this.F = k.ua();
                this.B = this.A = k.Ia()
            } else h = a.length - (this.A - this.B);
            if (3 == this.D.nodeType) k = this.D.data, this.D.data = k.slice(0, this.B) + a + k.slice(this.A), this.F = this.D, this.A = this.B + a.length;
            else if (1 == this.D.nodeType) {
                k = In(this.C, a);
                var l = this.D;
                l.insertBefore(k, l.childNodes[this.A] || null);
                this.D = this.F = k;
                this.B = 0;
                this.A = a.length
            }
            h && (k = this.A - h, hs(this.H, this, k, h), g || this.F != c || (d > k && (d += h), e > k && (e += h)));
            g ? (k = Tr(this), k.collapse(!1)) : k = pr(b, d, c, e);
            k.select();
            this.G = a
        }
    };
    x.ae = function(a, b, c) {
        if (this.Db() && this.D == this.F && this.B == this.A) {
            var d = this.D;
            if (3 != d.nodeType && 0 < this.B)
                for (d = d.childNodes[this.B - 1]; d && 3 != d.nodeType;) d = d.lastChild;
            if (d && 3 == d.nodeType) {
                d != this.D && (this.D = this.F = d, this.B = this.A = d.data.length);
                for (var e = this.B - 1, g = 0; d && 3 == d.nodeType;)
                    if (0 > e)(d = d.previousSibling) && 3 == d.nodeType && (e = d.data.length - 1);
                    else {
                        if (++g > b) break;
                        if (d.data.charAt(e).match(a)) break;
                        this.D = d;
                        this.B = e;
                        e--
                    } if (c)
                    for (d = this.F, e = this.A; d && 3 == d.nodeType;)
                        if (e >= d.data.length || 0 == d.data.length) d =
                            d.nextSibling, e = 0;
                        else {
                            if (++g > b) break;
                            if (d.data.charAt(e).match(a)) break;
                            this.F = d;
                            this.A = e + 1;
                            e++
                        } this.G = Tr(this).eb()
            }
        }
    };
    x.Db = function() {
        return !(this.D && this.F && this.D.parentNode && this.F.parentNode) || 3 == this.D.nodeType && this.B > this.D.data.length || 3 == this.F.nodeType && this.A > this.F.data.length ? !1 : Tr(this).eb() == this.G
    };
    x.te = function() {
        return this.D == this.F && this.B == this.A
    };
    x.td = function() {
        var a = Tr(this),
            b = Ar(Gn(this.C));
        return a && b && Q(Qq(a)) == Q(Qq(b)) ? a.Zb(b, !0) : !1
    };
    x.ca = function() {
        this.H.deleteToken(this);
        this.D == this.F && 3 == this.D.nodeType && this.D.parentNode && !this.D.data && this.C.Va(this.D);
        this.D = this.F = null;
        this.B = this.A = 0
    };
    x.we = function(a, b) {
        this.B <= a && this.A > a ? this.A = this.B = 0 : this.B > a && (this.B += b, this.A += b);
        this.G = Tr(this).eb()
    };
    C(Ur, $l);
    C(Wr, O);
    x = Wr.prototype;
    x.Ib = null;
    x.Qc = null;
    x.Hd = null;
    x.Rc = null;
    x.ya = -1;
    x.Qa = -1;
    x.fd = !1;
    var KA = {
            3: 13,
            12: 144,
            63232: 38,
            63233: 40,
            63234: 37,
            63235: 39,
            63236: 112,
            63237: 113,
            63238: 114,
            63239: 115,
            63240: 116,
            63241: 117,
            63242: 118,
            63243: 119,
            63244: 120,
            63245: 121,
            63246: 122,
            63247: 123,
            63248: 44,
            63272: 46,
            63273: 36,
            63275: 35,
            63276: 33,
            63277: 34,
            63289: 144,
            63302: 45
        },
        LA = {
            Up: 38,
            Down: 40,
            Left: 37,
            Right: 39,
            Enter: 13,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            "U+007F": 46,
            Home: 36,
            End: 35,
            PageUp: 33,
            PageDown: 34,
            Insert: 45
        },
        MA = !S || I("525"),
        NA = Yl && K;
    x = Wr.prototype;
    x.Bf = function(a) {
        if (S || Im)
            if (17 == this.ya && !a.ctrlKey || 18 == this.ya && !a.altKey || Yl && 91 == this.ya && !a.metaKey) this.Qa = this.ya = -1; - 1 == this.ya && (a.ctrlKey && 17 != a.keyCode ? this.ya = 17 : a.altKey && 18 != a.keyCode ? this.ya = 18 : a.metaKey && 91 != a.keyCode && (this.ya = 91));
        MA && !Dp(a.keyCode, this.ya, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.Qa = Cp(a.keyCode), NA && (this.fd = a.altKey))
    };
    x.Og = function(a) {
        this.Qa = this.ya = -1;
        this.fd = a.altKey
    };
    x.handleEvent = function(a) {
        var b = a.A,
            c = b.altKey;
        if (N && a.type == u) {
            var d = this.Qa;
            var e = 13 != d && 27 != d ? b.keyCode : 0
        } else(S || Im) && a.type == u ? (d = this.Qa, e = 0 <= b.charCode && 63232 > b.charCode && Bp(d) ? b.charCode : 0) : Km && !S ? (d = this.Qa, e = Bp(d) ? b.keyCode : 0) : (a.type == u ? (NA && (c = this.fd), b.keyCode == b.charCode ? 32 > b.keyCode ? (d = b.keyCode, e = 0) : (d = this.Qa, e = b.charCode) : (d = b.keyCode || this.Qa, e = b.charCode || 0)) : (d = b.keyCode || this.Qa, e = b.charCode || 0), Yl && 63 == e && 224 == d && (d = 191));
        var g = d = Cp(d);
        d ? 63232 <= d && d in KA ? g = KA[d] : 25 == d && a.shiftKey &&
            (g = 9) : b.keyIdentifier && b.keyIdentifier in LA && (g = LA[b.keyIdentifier]);
        K && MA && a.type == u && !Dp(g, this.ya, a.shiftKey, a.ctrlKey, c, a.metaKey) || (a = g == this.ya, this.ya = g, b = new Ur(g, e, a, b), b.altKey = c, this.J(b))
    };
    x.L = function() {
        return this.Ib
    };
    x.M = function() {
        Wr.da.M.call(this);
        Xr(this)
    };
    var ds;
    C(fs, E);
    x = fs.prototype;
    x.qa = 0;
    x.M = function() {
        fs.da.M.call(this);
        this.stop();
        delete this.A;
        delete this.B
    };
    x.start = function(a) {
        this.stop();
        this.qa = oo(this.D, void 0 !== a ? a : this.C)
    };
    x.stop = function() {
        0 != this.qa && A.clearTimeout(this.qa);
        this.qa = 0
    };
    x.tg = function() {
        this.qa = 0;
        this.A && this.A.call(this.B)
    };
    x = gs.prototype;
    x.Ba = function(a) {
        if (0 > a) {
            a = -a;
            var b = Pr(this);
            if (b) {
                var c = "",
                    d = this.A.A;
                d.selection && !Km ? (c = d.selection.createRange(), c.collapse(!0), c.moveEnd("word", -1), c = c.text.length > a ? c.text.slice(0, a) : c.text) : b.selectionEnd ? c = b.value.slice(b.selectionStart, Math.min(b.value.length, b.selectionStart + a)) : (d = Gn(this.A).getSelection(), 0 < d.rangeCount && (b = d.getRangeAt(0).endContainer, d = d.getRangeAt(0).endOffset, 3 == b.nodeType && (c = b.nodeValue.slice(d, Math.min(b.nodeValue.length, d + a)))));
                a = c
            } else a = "";
            return a
        }
        b = Pr(this);
        if (!b) return "";
        c = "";
        d = this.A.A;
        d.selection && !Km ? (c = d.selection.createRange(), c.collapse(!0), c.moveStart("word", -1), c = c.text.length > a ? c.text.slice(-a) : c.text) : b.selectionStart ? c = b.value.slice(Math.max(0, b.selectionStart - a), b.selectionStart) : (d = Gn(this.A).getSelection(), 0 < d.rangeCount && (b = d.getRangeAt(0).startContainer, d = d.getRangeAt(0).startOffset, 3 == b.nodeType && (c = b.nodeValue.slice(Math.max(0, d - a), d))));
        return c
    };
    x.commitText = function(a, b) {
        var c = Pr(this);
        if (c) {
            var d = c.type && c.type.toUpperCase();
            d = ("EMAIL" == d || "NUMBER" == d) && c.tagName.toUpperCase() == ma;
            b = b ? b : 0;
            if (!d && c.tagName.toUpperCase() == ma && a.length > b) {
                var e = c.maxLength;
                if (typeof e === If && 0 <= e && e < c.value.length + a.length - b) return
            }
            this.wc();
            e = {};
            e["fs-input"] = a;
            cs && "gmail" == iq && (as(c, ne), as(c, u, 0, e));
            if (d) c.value = (b ? c.value.slice(0, -b) : c.value) + a;
            else if (N && !I(9) || N && !I(11) && ("\n" == a || !a && 1 == b)) d = this.A.A.selection.createRange(), 0 < b && (a || !d.text) && d.moveStart(ob,
                -b), (0 < b || d.text) && d.execCommand(Rb, !1, null), " " != a.charAt(0) && " " != a.charAt(a.length - 1) || !this.G || (b = d.duplicate(), b.moveToElementText(d.parentElement()), e = d.duplicate(), " " == a.charAt(0) && (d.moveStart(ob, -1), b.inRange(d) ? (e = d.text.charAt(0), a = (" " == e ? "\u00a0" : e) + a) : d = e), e = d.duplicate(), " " == a.charAt(a.length - 1) && (d.moveEnd(ob, 1), b.inRange(d) && " " == d.text.charAt(d.text.length - 1) && (a = a.slice(0, a.length - 1) + "\u00a0"), d = e)), d.text = a, d.collapse(!1), d.select();
            else if (this.G) a: {
                d = b;b = Gn(this.A);e = b.document;
                b = b.getSelection();b.isCollapsed || (e.execCommand(Rb, !1, null), a || (d = 0));
                if (0 < d) {
                    if ((a || 1 < d || N || Km) && 3 == b.anchorNode.nodeType && 0 < b.rangeCount) {
                        var g = b.getRangeAt(0),
                            h, k = b.anchorOffset;
                        for (h = Math.min(d, k); k >= h;) {
                            g.setStart(b.anchorNode, k - h);
                            b.addRange(g);
                            if (b.toString().length == h) break;
                            h++
                        }
                        h > d && (a = b.toString().slice(0, h - d) + a)
                    }
                    b.isCollapsed && N || e.execCommand(Rb, !1, null)
                }
                if (a) {
                    if (e.queryCommandSupported) {
                        if (e.queryCommandSupported("insertText")) {
                            e.execCommand("insertText", !1, a);
                            break a
                        }
                        if (e.queryCommandSupported("insertHTML")) {
                            a =
                                a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>").replace(/\u0020/g, "&nbsp;");
                            e.execCommand("insertHTML", !1, a);
                            break a
                        }
                    }
                    if (3 == b.anchorNode.nodeType) {
                        d = b.anchorNode;
                        g = b.anchorNode.nodeValue;
                        e = b.anchorOffset + a.length;
                        k = h = b.anchorOffset;
                        for (var l = [" ", "\u00a0"]; 0 < k && F(l, g[--k]););
                        for (; h < g.length && F(l, g[h++]););
                        if (" " == a.charAt(0) || " " == a.charAt(a.length - 1) || k < h) a = g.slice(k, b.anchorOffset) + a + g.slice(b.anchorOffset, h), a = a.replace(/\u00a0/g, " "), a = a.replace(/^\u0020/g,
                            "\u00a0"), a = a.replace(/\u0020{2}/g, " \u00a0"), a = a.replace(/\u0020$/g, "\u00a0");
                        d.nodeValue = g.slice(0, k) + a + g.slice(h)
                    } else a = a.replace(/ /g, "\u00a0"), d = In(this.A, a), e = b.anchorNode, e.insertBefore(d, e.childNodes[b.anchorOffset] || null), e = a.length;
                    a = b.getRangeAt(0);
                    a.setStart(d, e);
                    a.collapse(!0);
                    b.addRange(a)
                }
            }
            else d = this.B, e = d.selectionStart, g = d.selectionEnd, h = d.value.length, e > h && (e = h), g > h && (g = h), !a && e < g && (b = 0), e -= Math.min(e, b), d.value = d.value.slice(0, e) + a + d.value.slice(g), e += a.length, d.setSelectionRange(e,
                e);
            if (c && "1" == c.getAttribute("itaautodir")) {
                b = a = 0;
                d = !1;
                e = this.Ba(50).split(qA);
                for (g = 0; g < e.length; g++) h = e[g], oA.test(h) ? (a++, b++) : pA.test(h) ? d = !0 : nA.test(h) ? b++ : rA.test(h) && (d = !0);
                c.dir = -1 == (0 == b ? d ? 1 : 0 : .4 < a / b ? -1 : 1) ? Ag : Me
            }
        }
    };
    x.Jc = function() {
        var a = Pr(this);
        if (a) {
            var b = R(a),
                c = a.nodeName.toUpperCase();
            if (Wl(8) && !Wl(9) && a.tagName.toUpperCase() == za) {
                var d = b.A.selection.createRange();
                c = d.getBoundingClientRect();
                var e = 0,
                    g = 0;
                try {
                    g = bp(a) + 2
                } catch (k) {
                    g = 16
                }
                if (No(a)) {
                    for (var h = d.duplicate(); h.boundingHeight <= g && h.htmlText == h.text && (e = d.boundingLeft - h.boundingLeft, 0 != h.moveStart(ob, -1)););
                    d = Fo(a).x;
                    e = Math.max(c.left - e, d)
                } else e = c.left;
                c = new P(e, c.top + g)
            } else c = c == za || c == ma ? Nr(a) : Mr(b);
            g = c.x;
            e = c.y;
            a = Lr(a);
            g = g > a.right ? a.right : g;
            g = g <
                a.left ? a.left : g;
            e = e > a.bottom ? a.bottom : e;
            e = e < a.top ? a.top : e;
            c.x = g;
            c.y = e;
            Kr(c, b);
            return new Or(c.x, c.y)
        }
        return null
    };
    x.wc = function() {
        var a = Pr(this);
        a && (this.F ? Gn(this.A).focus() : a.focus())
    };
    x.Tb = function() {
        var a = Pr(this);
        if (!a) return !0;
        if (typeof a.selectionStart === If) return a.selectionStart == a.selectionEnd;
        a = Ar(Gn(this.A));
        return !!a && a.fb()
    };
    x.yb = function() {
        if (!Pr(this)) return null;
        var a = null;
        this.G ? a = new Sr(this) : a = new Rr(this);
        return this.C[String(Bj(a))] = a
    };
    x.deleteToken = function(a) {
        delete this.C[String(Bj(a))]
    };
    x.pb = function(a, b, c) {
        cs(Pr(this), a, b, c)
    };
    var is = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    var os = {},
        ts = ["box-shadow", "z-index", "margin", ag, Ub];
    var ys;
    z(ws, E);
    ws.prototype.F = function(a) {
        var b = this.B[a.type];
        return b && a.target ? (b = b[Bj(a.target)]) ? Ws(b, function(c) {
            var d = c.listener;
            return typeof d === r ? d.call(c.ga, a) : d && d.handleEvent && typeof d.handleEvent === r ? d.handleEvent.call(d, a) : !0
        }) : !0 : !0
    };
    ws.prototype.H = function(a) {
        var b = this.G[a.charCode];
        return b && a.target ? (b = b[Bj(a.target)]) ? Ws(b, function(c) {
            var d = c.listener;
            return typeof d === r ? d.call(c.ga, a) : d && d.handleEvent && typeof d.handleEvent === r ? d.handleEvent.call(d, a) : !0
        }) : !0 : !0
    };
    ws.prototype.M = function() {
        D(this.D);
        delete this.B;
        delete this.G;
        delete this.A
    };
    Ds.prototype.mc = function(a, b) {
        return this.listener == a && this.ga == b
    };
    var xs = {};
    z(Js, O);
    x = Js.prototype;
    x.M = function() {
        O.prototype.M.call(this);
        D(this.A);
        delete this.A;
        this.C = this.D = this.G = null;
        D(this.F);
        delete this.F;
        D(this.B);
        delete this.B
    };
    x.pb = function(a, b, c) {
        this.A.pb(a, b, c)
    };
    x.Jb = function(a) {
        a instanceof Fp && (a.type = Mg);
        Zr(a) || this.J(a)
    };
    x.Ba = function(a) {
        try {
            return this.A.Ba(a)
        } catch (b) {}
        return ""
    };
    x.commitText = function(a, b) {
        try {
            this.A.commitText(a, b)
        } catch (c) {}
    };
    x.Jc = function() {
        try {
            return this.A.Jc()
        } catch (a) {}
        return null
    };
    x.wc = function() {
        try {
            this.A.wc()
        } catch (a) {}
    };
    x.yb = function() {
        try {
            return this.A.yb()
        } catch (a) {}
        return null
    };
    x.Tb = function() {
        try {
            return this.A.Tb()
        } catch (a) {}
        return !0
    };
    z(Ms, J);
    var Ns = Kk("https://ssl.gstatic.com/inputtools/js/config/%{id}.js");
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
    */
    Qs.prototype.cancel = function(a) {
        if (this.D) this.B instanceof Qs && this.B.cancel();
        else {
            if (this.A) {
                var b = this.A;
                delete this.A;
                a ? b.cancel(a) : (b.S--, 0 >= b.S && b.cancel())
            }
            this.N ? this.N.call(this.K, this) : this.W = !0;
            this.D || (a = new $s(this), Us(this), Ss(this, !1, a))
        }
    };
    Qs.prototype.I = function(a, b) {
        this.H = !1;
        Ss(this, a, b)
    };
    Qs.prototype.then = function(a, b, c) {
        var d, e, g = new Zn(function(h, k) {
            d = h;
            e = k
        });
        Vs(this, d, function(h) {
            h instanceof $s ? g.cancel() : e(h)
        });
        return g.then(a, b, c)
    };
    Qs.prototype.$goog_Thenable = !0;
    Qs.prototype.isError = function(a) {
        return a instanceof Error
    };
    C(Ts, Mj);
    Ts.prototype.message = "Deferred has already fired";
    Ts.prototype.name = "AlreadyCalledError";
    C($s, Mj);
    $s.prototype.message = "Deferred was canceled";
    $s.prototype.name = "CanceledError";
    Zs.prototype.B = function() {
        delete Ys[this.qa];
        throw this.A;
    };
    var Ys = {};
    C(bt, Mj);
    et.prototype.Ic = function(a, b) {
        return b
    };
    et.prototype.rb = function(a) {
        return String(a)
    };
    var mt = Kk("https://ssl.gstatic.com/inputtools/js/ime/2/%{fileName}.js"),
        it = {},
        kt = {},
        pt = {},
        qw = null,
        Yu = null,
        ft = null;
    et.prototype.fa = Dk;
    et.prototype.transform = Dk;
    et.prototype.Nb = Dk;
    et.prototype.I = 0;
    Gj("google.elements.ime.loadConfig", function(a, b) {
        var c = new et;
        ot(c, b);
        var d = pt[a];
        d && ot(c, d);
        it[a] && (c.state = it[a].state);
        it[a] = c;
        mk(kt, function(e) {
            e[a] && ot(e[a], b)
        });
        gt().J(new Ms("cfga", a))
    });
    Gj("google.elements.ime.overrideConfig", qt);
    var xt = {
        Bk: "zh-hant-t-i0-array-1992",
        Ck: "zh-hans-t-i0-cangjie-1982",
        Dk: Qi,
        Ek: "zh-hans-t-i0-cangjie-1987",
        Fk: "zh-hant-t-i0-cangjie-1987",
        Gk: "zh-hant-t-i0-cangjie-1987-x-m0-simplified",
        Hk: Ii,
        Ik: Hi,
        Jk: Ji,
        Kk: "zh-hant-t-i0-dayi-1988",
        Mk: Vi,
        Nk: Si,
        Lk: "ko-t-i0-und",
        Ok: Wi,
        Pk: Xi,
        Qk: Yi,
        Rk: Zi,
        Sk: $i,
        Tk: aj,
        Uk: Ja,
        Vk: Ma,
        Wk: Va,
        Xk: cb,
        Yk: Ya,
        Zk: Af,
        $k: bc,
        al: yc,
        bl: Nb,
        dl: Xb,
        el: Mc,
        fl: Vc,
        hl: Yc,
        il: ce,
        jl: vd,
        kl: ge,
        ml: fe,
        ll: ee,
        nl: te,
        ol: We,
        pl: gf,
        ql: xf,
        rl: Qf,
        tl: qc,
        ul: "pl-t-i0-und",
        vl: rg,
        wl: hg,
        xl: mg,
        yl: Xf,
        zl: Cg,
        Al: Hg,
        Bl: eh,
        Cl: Pg,
        Dl: hc,
        El: sh,
        Fl: Ah,
        Gl: Ih,
        Hl: Oh,
        Il: "tr-t-i0-und",
        Jl: fi,
        Kl: ki,
        Ll: vi,
        Ml: bj,
        Nl: Ti,
        Ol: "zh-hant-t-i0-bopomofo",
        Sl: ah,
        Tl: Na,
        Ul: md,
        Vl: nd,
        Wl: oc,
        Xl: Wa,
        Yl: db,
        Zl: eb,
        $l: hb,
        am: kg,
        bm: $a,
        dm: Za,
        fm: jb,
        gm: kb,
        hm: rb,
        im: sb,
        km: fd,
        lm: Eb,
        nm: Db,
        om: Jb,
        pm: cg,
        qm: $c,
        rm: Df,
        sm: Cf,
        tm: Vb,
        um: dc,
        vm: cc,
        wm: mc,
        xm: hi,
        Zo: Mh,
        ym: uc,
        zm: Bc,
        Bm: Ac,
        Cm: sc,
        Dm: Kc,
        Fm: le,
        Gm: ke,
        Hm: Qb,
        Im: Pb,
        Jm: Yb,
        Lm: Oc,
        Mm: Pc,
        Km: Nc,
        Nm: Uf,
        Om: Vf,
        Qm: Sc,
        Pm: hd,
        Sm: Wc,
        Tm: ad,
        Um: Zc,
        Vm: ld,
        Wm: td,
        Xm: qd,
        Ym: $d,
        Zm: ae,
        $m: be,
        an: Gc,
        bn: Fc,
        cn: yd,
        fn: xd,
        gn: ie,
        hn: ue,
        jn: ve,
        kn: pe,
        ln: re,
        mn: xe,
        nn: ze,
        on: Ae,
        pn: Je,
        qn: Oe,
        rn: "lis-t-k0-und",
        tn: Le,
        un: Ue,
        vn: tf,
        wn: mf,
        xn: Xe,
        yn: Ye,
        zn: of,
        An: Se,
        Bn: kf,
        Cn: hf,
        Dn: jf,
        En: af,
        Fn: Pe,
        Gn: Ze,
        Hn: fh,
        In: sf,
        Jn: rf,
        Kn: Kf,
        Ln: Jf,
        Mn: "ne-t-k0-und",
        Nn: yf,
        Pn: Gf,
        Rn: Of,
        Sn: Rf,
        Tn: Sf,
        Un: Tf,
        Vn: De,
        Wn: dg,
        Xn: rc,
        Yn: Bb,
        Zn: $f,
        ao: pg,
        co: jg,
        fo: og,
        ho: ug,
        io: zg,
        jo: yg,
        ko: xg,
        lo: wg,
        mo: Fg,
        no: Eg,
        oo: Dg,
        po: Gg,
        so: Jg,
        ro: Ig,
        uo: "see-t-k0-und",
        vo: bh,
        wo: ch,
        xo: Kg,
        yo: Qg,
        zo: Tg,
        Ao: Sg,
        Bo: Vg,
        Co: ub,
        Do: vb,
        Eo: ri,
        Fo: kc,
        Ho: jc,
        Io: mh,
        Jo: kh,
        Ko: Lb,
        Lo: Qh,
        Mo: Gh,
        No: uh,
        Oo: wh,
        Po: th,
        Qo: xh,
        Ro: vh,
        So: ci,
        To: Bh,
        Uo: Ch,
        Vo: Lh,
        Wo: Jh,
        Xo: Kh,
        Yo: Ph,
        $o: Yh,
        bp: $h,
        fp: di,
        gp: gi,
        hp: li,
        ip: ec,
        jp: oi,
        kp: ni,
        lp: pi,
        mp: xi,
        np: wi,
        op: yi,
        pp: "vi-t-k0-vni",
        qp: Hb,
        sp: Fi,
        On: Gi,
        Qn: Nf,
        Em: Ob,
        Go: ic,
        Am: zc,
        dn: wd,
        li: Bf,
        $n: Zf,
        bo: ig,
        eo: ng,
        ap: Wh,
        ep: Zh,
        jm: xb,
        Rm: Rc,
        qo: Xg,
        to: Ic,
        rp: Dc,
        tp: Ge,
        pi: Ha,
        ri: $g,
        si: Ia,
        ti: La,
        vi: od,
        wi: Pa,
        xi: Ta,
        yi: nc,
        zi: Ua,
        Ai: bb,
        Bi: gb,
        Ci: Xa,
        Di: qf,
        Ei: cj,
        Fi: ib,
        Gi: lb,
        Hi: Ui,
        Ii: Oi,
        Ji: Ri,
        Ki: wb,
        Li: ed,
        Mi: Cb,
        Ni: Ib,
        Oi: zf,
        Pi: ac,
        Qi: fc,
        Ri: lc,
        Si: vc,
        Ti: tc,
        Ui: xc,
        Vi: Jc,
        Wi: je,
        Xi: Mb,
        Yi: Wb,
        Zi: Lc,
        $i: gd,
        aj: Qc,
        bj: Uc,
        cj: Xc,
        dj: cd,
        ej: kd,
        fj: sd,
        gj: pd,
        hj: Ec,
        ij: ud,
        jj: de,
        kj: he,
        lj: se,
        mj: oe,
        nj: qe,
        oj: we,
        pj: ye,
        qj: Be,
        rj: Ie,
        sj: Ce,
        tj: Ne,
        uj: Ke,
        vj: Fe,
        wj: Te,
        xj: Qe,
        yj: lf,
        zj: Ve,
        Aj: nf,
        Bj: Re,
        Cj: ff,
        Dj: $e,
        Ej: pf,
        Fj: wf,
        Gj: Ff,
        Hj: vf,
        Ij: Ef,
        Jj: Lf,
        Kj: Pf,
        Lj: pc,
        Mj: Yf,
        Nj: qg,
        Oj: gg,
        Pj: lg,
        Qj: Wf,
        Rj: vg,
        Sj: Bg,
        Tj: Wg,
        Uj: Hc,
        Vj: dh,
        Wj: Yg,
        Xj: Og,
        Yj: Rg,
        Zj: Ug,
        $j: Zg,
        ak: gc,
        bk: ih,
        ck: lh,
        dk: jh,
        ek: Fh,
        fk: rh,
        gk: zh,
        hk: Hh,
        ik: fb,
        jk: Nh,
        kk: Vh,
        lk: ei,
        pk: ji,
        qk: qi,
        rk: ui,
        sk: Gb,
        tk: Cc,
        uk: Di,
        vk: Ei,
        wk: dj,
        nk: ii,
        Tp: "en-t-i0-voice",
        Rp: Pi,
        Sp: "zh-hant-t-i0-voice",
        Wp: "xkb:am:phonetic:arm",
        Xp: "xkb:be::fra",
        Yp: "xkb:be::ger",
        Zp: "xkb:be::nld",
        $p: "xkb:bg::bul",
        aq: "xkb:bg:phonetic:bul",
        bq: "xkb:br::por",
        cq: "xkb:by::bel",
        fq: "xkb:ca::fra",
        eq: "xkb:ca:eng:eng",
        gq: "xkb:ca:multix:fra",
        iq: "xkb:ch::ger",
        hq: "xkb:ch:fr:fra",
        jq: "xkb:cz::cze",
        kq: "xkb:cz:qwerty:cze",
        lq: "xkb:de::ger",
        mq: "xkb:de:neo:ger",
        nq: "xkb:dk::dan",
        oq: "xkb:ee::est",
        qq: "xkb:es::spa",
        pq: "xkb:es:cat:cat",
        sq: "xkb:fo::fao",
        rq: "xkb:fi::fin",
        tq: "xkb:fr:bepo:fra",
        uq: "xkb:fr::fra",
        vq: "xkb:gb:dvorak:eng",
        wq: "xkb:gb:extd:eng",
        xq: "xkb:ge::geo",
        yq: "xkb:gr::gre",
        zq: "xkb:hr::scr",
        Aq: "xkb:hu::hun",
        Bq: "xkb:hu:qwerty:hun",
        Cq: "xkb:ie::ga",
        Dq: "xkb:il::heb",
        Eq: "xkb:is::ice",
        Fq: "xkb:it::ita",
        Gq: "xkb:jp::jpn",
        Hq: "xkb:kz::kaz",
        Iq: "xkb:latam::spa",
        Jq: "xkb:lt::lit",
        Kq: "xkb:lv:apostrophe:lav",
        Mq: "xkb:mn::mon",
        Lq: "xkb:mk::mkd",
        Nq: "xkb:mt::mlt",
        Oq: "xkb:no::nob",
        Pq: "xkb:pl::pol",
        Qq: "xkb:pt::por",
        Rq: "xkb:ro::rum",
        Sq: "xkb:ro:std:rum",
        Tq: "xkb:rs::srp",
        Vq: "xkb:ru::rus",
        Uq: "xkb:ru:phonetic:rus",
        Wq: "xkb:se::swe",
        Xq: "xkb:si::slv",
        Yq: "xkb:sk::slo",
        $q: "xkb:tr::tur",
        Zq: "xkb:tr:f:tur",
        ar: "xkb:ua::ukr",
        gr: "xkb:us::eng",
        hr: "xkb:us::fil",
        ir: "xkb:us::ind",
        qr: "xkb:us::msa",
        br: "xkb:us:altgr-intl:eng",
        cr: "xkb:us:colemak:eng",
        dr: "xkb:us:dvorak:eng",
        er: "xkb:us:dvp:eng",
        jr: "xkb:us:intl:eng",
        kr: "xkb:us:intl:nld",
        pr: "xkb:us:intl:por",
        lr: "xkb:us:intl_pc:eng",
        mr: "xkb:us:intl_pc:nld",
        nr: "xkb:us:intl_pc:por",
        sr: "xkb:us:workman-intl:eng",
        rr: "xkb:us:workman:eng"
    };
    wt.prototype.toString = function() {
        return this.code
    };
    var Dt = [Na, cg, Wc, dg, rc, ri, di, li, Fi],
        Ct = [Ma, Vc, qc, ki],
        Gt = {
            arm: "hy",
            bel: "be",
            bul: "bg",
            cat: "ca",
            cze: "cs",
            dan: "da",
            eng: q,
            est: "et",
            fao: "fo",
            fin: "fi",
            fra: "fr",
            geo: "ka",
            ger: "de",
            gre: "el",
            heb: Tc,
            hun: "hu",
            ice: "is",
            ind: "id",
            ita: "it",
            jpn: "ja",
            kaz: "kk",
            lav: "lv",
            lit: "lt",
            mlt: "mt",
            mon: "mn",
            msa: "ms",
            nld: "nl",
            nob: "no",
            pol: "pl",
            por: "pt",
            rum: "ro",
            rus: "ru",
            scr: "hr",
            slo: "sk",
            slv: "sl",
            spa: "es",
            srp: "sr",
            swe: "sv",
            tur: "tr",
            ukr: "uk"
        },
        rt = {
            "xkb:us:intl:por": "pt",
            "xkb:br::por": "pt",
            "xkb:pt::por": "pt"
        },
        zt = {},
        vt = ["bn", "gu", "pa",
            "kn", "ml", "or", "sa", qh, "te", "ne"
        ],
        Bt = {
            im_pinyin_zh_hans: Vi,
            im_pinyin_zh_hant: Si,
            im_t13n_ja: ge,
            "im_t13n_ja-Hira": ce,
            im_wubi_zh_hans: bj,
            im_zhuyin_zh_hant: Ti,
            vkd_bg_phone: Za,
            vkd_chr_phone: sb,
            vkd_cs_qwertz: Db,
            vkd_deva_phone: $c,
            vkd_en_dvorak: cc,
            vkd_es_es: kc,
            vkd_ethi: hi,
            vkd_gu_phone: Pc,
            vkd_guru_inscript: Uf,
            vkd_guru_phone: Vf,
            vkd_hu_101: ld,
            vkd_hy_east: md,
            vkd_hy_west: nd,
            vkd_ka_qwerty: le,
            vkd_ka_typewriter: ke,
            vkd_ro_sr13392_primary: xg,
            vkd_ro_sr13392_secondary: wg,
            vkd_ru_phone: Eg,
            vkd_ru_phone_aatseel: Dg,
            vkd_ru_phone_yazhert: Gg,
            vkd_sk_qwerty: Sg,
            vkd_ta_itrans: th,
            vkd_ta_tamil99: uh,
            vkd_ta_typewriter: vh,
            vkd_th_pattajoti: Jh,
            vkd_th_tis: Kh,
            vkd_tr_f: Yh,
            vkd_tr_q: $h,
            vkd_uk_101: gi,
            vkd_us_intl: Ac,
            vkd_uz_cyrl_phone: oi,
            vkd_uz_cyrl_type: ni,
            vkd_vi_tcvn: xi,
            vkd_vi_telex: wi
        },
        OA = {},
        PA;
    for (PA in Bt) OA[Bt[PA]] = PA;
    var ut = OA,
        tt = {
            "nl-t-k0-intl": mi,
            "fr-t-k0-intl": mi,
            "de-t-k0-intl": mi,
            "ht-t-k0-und": "fr",
            "id-t-k0-und": Ee,
            "ga-t-k0-und": Ee,
            "it-t-k0-intl": mi,
            "jw-t-k0-und": Ee,
            "mr-t-k0-und": "deva_phone",
            "mr-t-k0-devanaga": "hi",
            "ms-t-k0-und": Ee,
            "pt-br-t-k0-intl": mi,
            "pt-pt-t-k0-intl": mi,
            "sa-t-k0-devanaga": "hi",
            "es-t-k0-intl": mi,
            "sw-t-k0-und": Ee,
            "tl-t-k0-und": Ee,
            "ti-t-k0-und": "ethi",
            "cy-t-k0-und": Ee
        };
    var QA = 0;
    Ht.prototype.send = function(a, b, c, d) {
        a = a ? sk(a) : {};
        d = d || "_" + (QA++).toString(36) + Fj().toString(36);
        var e = "_callbacks___" + d;
        b && (A[e] = Kt(d, b), a[this.A] = e);
        b = {
            timeout: this.Eb,
            sg: !0
        };
        e = sA.exec(Nk(this.B).toString());
        var g = e[3] || "";
        e = Qk(e[1] + Sk("?", e[2] || "", a) + Sk("#", g, void 0));
        b = dt(e, b);
        Vs(b, null, Jt(d, a, c), void 0);
        return {
            qa: d,
            Ae: b
        }
    };
    Ht.prototype.cancel = function(a) {
        a && (a.Ae && a.Ae.cancel(), a.qa && It(a.qa, !1))
    };
    x = Lt.prototype;
    x.Sa = function() {
        Ot(this);
        for (var a = [], b = 0; b < this.A.length; b++) a.push(this.B[this.A[b]]);
        return a
    };
    x.Ya = function() {
        Ot(this);
        return this.A.concat()
    };
    x.mc = function(a, b) {
        if (this === a) return !0;
        if (this.D != a.D) return !1;
        b = b || Mt;
        Ot(this);
        for (var c, d = 0; c = this.A[d]; d++)
            if (!b(this.get(c), a.get(c))) return !1;
        return !0
    };
    x.clear = function() {
        this.B = {};
        this.C = this.D = this.A.length = 0
    };
    x.remove = function(a) {
        return Nt(this.B, a) ? (delete this.B[a], this.D--, this.C++, this.A.length > 2 * this.D && Ot(this), !0) : !1
    };
    x.get = function(a, b) {
        return Nt(this.B, a) ? this.B[a] : b
    };
    x.set = function(a, b) {
        Nt(this.B, a) || (this.D++, this.A.push(a), this.C++);
        this.B[a] = b
    };
    x.forEach = function(a, b) {
        for (var c = this.Ya(), d = 0; d < c.length; d++) {
            var e = c[d],
                g = this.get(e);
            a.call(b, g, e, this)
        }
    };
    x.vb = function(a) {
        Ot(this);
        var b = 0,
            c = this.C,
            d = this,
            e = new Jq;
        e.next = function() {
            if (c != d.C) throw Error("The map has changed since the iterator was created");
            if (b >= d.A.length) throw Kq;
            var g = d.A[b++];
            return a ? g : d.B[g]
        };
        return e
    };
    x = St.prototype;
    x.add = function(a, b) {
        Tt(this);
        this.D = null;
        a = String(a);
        var c = this.A.get(a);
        c || this.A.set(a, c = []);
        c.push(b);
        this.B += 1;
        return this
    };
    x.remove = function(a) {
        Tt(this);
        a = String(a);
        return Nt(this.A.B, a) ? (this.D = null, this.B -= this.A.get(a).length, this.A.remove(a)) : !1
    };
    x.clear = function() {
        this.A = this.D = null;
        this.B = 0
    };
    x.forEach = function(a, b) {
        Tt(this);
        this.A.forEach(function(c, d) {
            H(c, function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };
    x.Ya = function() {
        Tt(this);
        for (var a = this.A.Sa(), b = this.A.Ya(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], g = 0; g < e.length; g++) c.push(b[d]);
        return c
    };
    x.Sa = function(a) {
        Tt(this);
        var b = [];
        if (typeof a === w) Vt(this, a) && (b = Vj(b, this.A.get(String(a))));
        else {
            a = this.A.Sa();
            for (var c = 0; c < a.length; c++) b = Vj(b, a[c])
        }
        return b
    };
    x.set = function(a, b) {
        Tt(this);
        this.D = null;
        a = String(a);
        Vt(this, a) && (this.B -= this.A.get(a).length);
        this.A.set(a, [b]);
        this.B += 1;
        return this
    };
    x.get = function(a, b) {
        if (!a) return b;
        a = this.Sa(a);
        return 0 < a.length ? String(a[0]) : b
    };
    x.toString = function() {
        if (this.D) return this.D;
        if (!this.A) return "";
        for (var a = [], b = this.A.Ya(), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.Sa(d);
            for (var g = 0; g < d.length; g++) {
                var h = e;
                "" !== d[g] && (h += "=" + encodeURIComponent(String(d[g])));
                a.push(h)
            }
        }
        return this.D = a.join("&")
    };
    z(Wt, E);
    Wt.prototype.M = function() {
        this.B && this.abort(this.A);
        this.B = null
    };
    Wt.prototype.send = function(a, b, c, d) {
        this.A && this.abort(this.A);
        a = this.H + a;
        var e = a + "&" + this.F;
        e != this.D && (Br(), a = Qk(a), this.B = new Ht(a, this.F), this.D = e);
        b && Ut(b);
        c = B(c, d);
        this.A = {
            Wh: this.B.send(b, B(this.G, this, c, !0), B(this.G, this, c, !1)),
            key: this.D
        };
        this.C = Fj();
        return this.A
    };
    Wt.prototype.abort = function(a) {
        a.key == this.D && this.B.cancel(a.Wh)
    };
    Wt.prototype.G = function(a, b, c) {
        b && this.S.push("ql", Fj() - this.C);
        a(b, b ? c : null);
        this.A = null
    };
    z(Yt, O);
    x = Yt.prototype;
    x.be = function() {
        return !!this.A
    };
    x.bc = function() {
        return this.C
    };
    x.Pc = function() {
        return Xt(this.bc())
    };
    x.send = function(a, b, c, d) {
        c = void 0 === c ? "" : c;
        if (!this.A) {
            b = (void 0 === b ? "GET" : b).toUpperCase();
            this.B = !0;
            this.A = new XDomainRequest;
            this.A.onload = B(this.Ye, this);
            this.A.onerror = B(this.oh, this);
            this.A.ontimeout = B(this.Ph, this);
            var e = window.location.href,
                g = e.indexOf("://");
            a = a.replace(/^http[s]/, 0 > g ? "N/A" : e.slice(0, g));
            !d && c && (a = a + "?" + c, c = "");
            try {
                this.A.open(b, a)
            } catch (h) {
                $t(this);
                Zt(this);
                return
            }
            try {
                this.D = !0, this.A.send(c), this.D = !1
            } catch (h) {}
        }
    };
    x.Ye = function() {
        if (this.B)
            if (this.C = 200, this.D) A.setTimeout(B(this.Ye, this), 0);
            else {
                this.J(tg);
                this.B = !1;
                try {
                    this.J(yb), this.J("success")
                } finally {
                    Zt(this)
                }
            }
    };
    x.abort = function() {
        this.A && this.B && (this.B = !1, this.A.abort(), this.J(yb), this.J("abort"), Zt(this))
    };
    x.M = function() {
        delete this.A;
        this.A = null
    };
    x.Ph = function() {
        "undefined" != typeof tu && this.A && (this.J("timeout"), this.abort())
    };
    x.oh = function() {
        this.B = !1;
        this.A && this.A.abort();
        $t(this);
        Zt(this)
    };
    x.xd = function() {
        try {
            return this.A ? this.A.responseText : ""
        } catch (a) {
            return ""
        }
    };
    var fu = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        eu = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
    gu.prototype.A = null;
    var RA;
    C(ju, gu);
    RA = new ju;
    C(lu, O);
    var SA = /^https?$/i,
        TA = ["POST", "PUT"],
        mu = [];
    x = lu.prototype;
    x.rg = function() {
        this.ca();
        Uj(mu, this)
    };
    x.gd = function(a) {
        this.P = a
    };
    x.send = function(a, b, c, d) {
        if (this.A) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.N + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.N = a;
        this.I = !1;
        this.B = !0;
        this.A = this.H ? ku(this.H) : ku(RA);
        this.G = this.H ? iu(this.H) : iu(RA);
        this.A.onreadystatechange = B(this.$e, this);
        try {
            this.K = !0, this.A.open(b, String(a), !0), this.K = !1
        } catch (g) {
            su(this);
            return
        }
        a = c || "";
        var e = new Lt(this.headers);
        d && Rt(d, function(g, h) {
            e.set(h, g)
        });
        d = Qj(e.Ya(), pu);
        c = A.FormData && a instanceof A.FormData;
        !F(TA, b) || d ||
            c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function(g, h) {
            this.A.setRequestHeader(h, g)
        }, this);
        this.R && (this.A.responseType = this.R);
        "withCredentials" in this.A && this.A.withCredentials !== this.P && (this.A.withCredentials = this.P);
        try {
            vu(this), 0 < this.U && ((this.X = ou(this.A)) ? (this.A.timeout = this.U, this.A.ontimeout = B(this.Eb, this)) : this.F = oo(this.Eb, this.U, this)), this.C = !0, this.A.send(a), this.C = !1
        } catch (g) {
            su(this)
        }
    };
    x.Eb = function() {
        "undefined" != typeof tu && this.A && (this.J("timeout"), this.abort(8))
    };
    x.abort = function() {
        this.A && this.B && (this.B = !1, this.D = !0, this.A.abort(), this.D = !1, this.J(yb), this.J("abort"), ru(this))
    };
    x.M = function() {
        this.A && (this.B && (this.B = !1, this.D = !0, this.A.abort(), this.D = !1), ru(this, !0));
        lu.da.M.call(this)
    };
    x.$e = function() {
        this.W || (this.K || this.C || this.D ? uu(this) : this.Hh())
    };
    x.Hh = function() {
        uu(this)
    };
    x.be = function() {
        return !!this.A
    };
    x.Pc = function() {
        var a = this.bc(),
            b;
        if (!(b = Xt(a))) {
            if (a = 0 === a) a = String(this.N).match(is)[1] || null, !a && A.self && A.self.location && (a = A.self.location.protocol, a = a.substr(0, a.length - 1)), a = !SA.test(a ? a.toLowerCase() : "");
            b = a
        }
        return b
    };
    x.bc = function() {
        try {
            return 2 < (this.A ? this.A.readyState : 0) ? this.A.status : -1
        } catch (a) {
            return -1
        }
    };
    x.xd = function() {
        try {
            return this.A ? this.A.responseText : ""
        } catch (a) {
            return ""
        }
    };
    z(wu, E);
    wu.prototype.M = function() {
        this.B = null;
        this.A.ca();
        this.A = null;
        D(this.D)
    };
    wu.prototype.H = function(a, b, c) {
        if (!this.W) {
            var d = c.target;
            (c = d.Pc() && 0 != d.bc()) && this.G.push("ql", Fj() - this.F);
            var e = B;
            if (d = c ? d.xd() : null) {
                d = d.replace(/\s*while\(1\);\s*(.*)/g, "$1");
                try {
                    var g = JSON.parse(d)
                } catch (h) {
                    g = null
                }
            } else g = null;
            a = e(a, b, c, g);
            Bm(this.D, this.A, yb, this.B);
            this.B = null;
            oo(a)
        }
    };
    wu.prototype.send = function(a, b, c, d, e, g) {
        a = this.C + a;
        this.A.be() && (this.A.abort(), this.B || (Bm(this.D, this.A, yb, this.B), this.B = null));
        b && (a = a + "?" + Ut(b).toString());
        b = g && JSON && JSON.stringify ? JSON.stringify(g) : "";
        65536 > b.length && (c && (this.B = B(this.H, this, c, d || null), this.D.listen(this.A, yb, this.B)), this.A.send(a, "POST", b, e));
        this.F = Fj()
    };
    wu.prototype.abort = function() {
        this.A.abort()
    };
    z(xu, E);
    x = xu.prototype;
    x.Lb = function(a) {
        return F([nb, "cd"], a)
    };
    x.ce = function(a, b) {
        if (this.Lb(a)) {
            switch (a) {
                case nb:
                    var c = arguments[1];
                    this.D = c;
                    if (this.Ub(c)) {
                        if (this.active = arguments[2], this.A && X && (c = this.A.D)) yu(c, Sa, this.active), yu(c, "autocorrect", this.active), yu(c, Ra, this.active)
                    } else this.active = !1;
                    break;
                case mb:
                    var d = arguments[1];
                    (c = arguments[2]) ? this.A = d: this.A == d && iq != ai && (this.A = null);
                    this.active && this.A && X && (d = this.A.D) && (yu(d, Sa, c), yu(d, "autocorrect", c), yu(d, Ra, c));
                    break;
                case "cd":
                    this.A && (c = this.A, c.D && c.D.setAttribute("dir", arguments[1]))
            }
            this.Kb.apply(this,
                arguments)
        }
    };
    x.jb = function() {
        return null
    };
    x.handleEvent = function(a, b) {
        this.A = a;
        return this.Mc(b)
    };
    x.Mc = function() {
        return !1
    };
    x.register = function(a) {
        this.A = a
    };
    x.unregister = function(a) {
        this.A == a && (this.A = null)
    };
    x.Kb = Dk;
    x.qc = Ck;
    x.Ub = Ck;
    z(Au, xu);
    x = Au.prototype;
    x.jb = function() {
        var a = [];
        H(this.B, function(b) {
            Xj(a, b.jb())
        });
        ak(a);
        return a
    };
    x.register = function(a) {
        H(this.B, function(b) {
            b.register(a)
        })
    };
    x.unregister = function(a) {
        H(this.B, function(b) {
            b.unregister(a)
        })
    };
    x.handleEvent = function(a, b) {
        var c = !1,
            d = this.F[b.type];
        d && H(d, function(e) {
            c = c || e.handleEvent(a, b)
        });
        return c
    };
    x.qc = function(a, b) {
        var c = !1;
        H(this.G, function(d) {
            c = c || d.qc(a, b)
        });
        return c
    };
    x.Kb = function(a, b) {
        var c = Wj(arguments);
        this.G = [];
        this.F = {};
        H(this.B, function(d) {
            d.ce.apply(d, c);
            d.active && (this.G.push(d), H(d.jb(), function(e) {
                this.F[e] = this.F[e] || [];
                this.F[e].push(d)
            }, this))
        }, this)
    };
    x.Lb = function(a) {
        for (var b = 0; b < this.B.length; ++b)
            if (this.B[b].Lb(a)) return !0;
        return !1
    };
    x.M = function() {
        this.B && H(this.B, function(a) {
            a.ca()
        })
    };
    x.Ub = function() {
        return !0
    };
    z(Du, J);
    Eu.prototype.load = function(a) {
        return this.A[a] || null
    };
    var Fu = {};
    z(Ku, J);
    Lu.prototype.toJSON = function() {
        var a = {};
        a.source = this.source;
        a.target = this.target;
        a.frequency = this.A;
        this.B && (a.normalized_source = this.B);
        this.D && (a.lc = this.D);
        var b = cl(this.C, function(c) {
            switch (c) {
                case 5:
                    return 0;
                case 3:
                    return 1;
                case 4:
                    return 2
            }
            return 3
        }).join(" ");
        b && (a.candidate_type = b);
        return a
    };
    var Nu = {};
    var UA = {},
        gv = (UA["Content-Type"] = "application/json; charset=UTF-8", UA);
    z(Zu, O);
    Zu.prototype.C = function(a, b, c, d) {
        c && b && Sj(Ou(this.B).B);
        if (c && d[1]) {
            typeof d[0] !== w || this.A.R || (d[0] = a.B, iq == qb && a.source != d[1][0][0]) || (b = Gu(this.B), c = Iu(a), b.A[c] = d);
            b = [];
            for (c = 0; c < d[1].length; c++) {
                var e = d[1][c],
                    g = Il(e[0]),
                    h = e[1],
                    k = e[e.length - 1];
                e = a;
                var l = new Hu(e.C, g, e.H, e.G, void 0, e.type);
                l.B = e.B;
                l.F = e.F;
                e = l;
                for (l = 0; l < h.length; l++) {
                    var n = this.A.H ? 5 : 0,
                        y = g,
                        L = "",
                        ba = !1,
                        Ka = "";
                    if (k) {
                        k.matched_length && (y = g.slice(0, k.matched_length[l]));
                        k.annotation && (L = k.annotation[l]);
                        if (k.candidate_type) switch (k.candidate_type[l]) {
                            case 0:
                                n = 5;
                                break;
                            case 1:
                                n = 3;
                                break;
                            case 2:
                                n = 4
                        }
                        k.is_confident && (ba = !!k.is_confident[l]);
                        k.lc && (Ka = k.lc[l])
                    }
                    e.A.push(new Bu(y, Il(h[l]), L, n, ba, Ka))
                }
                g = Ru(Ou(this.B), e.source);
                if (0 < g.length)
                    for (h = 0; h < e.A.length; h++) {
                        if (e.A[h].source != e.source) {
                            for (k = 0; k < g.length; k++) e.A.splice(h + k, 0, new Bu(e.source, g[k].target, g[k].B, 1));
                            break
                        }
                        for (k = 0; k < g.length; k++)
                            if (e.A[h].target == g[k].target) {
                                g.splice(k, 1);
                                break
                            }
                    }
                av(this, e);
                0 < e.A.length && bv(this, e);
                b.push(e)
            }
            $u(this, b)
        }
    };
    z(cv, O);
    x = cv.prototype;
    x.yc = function(a) {
        if (3 == this.status || 2 == this.status) {
            0 > a && (a = 0);
            if (a >= this.C.length) {
                if (this.H) {
                    a = Math.ceil(this.C.length / this.B.A);
                    this.D = a * this.B.A;
                    hv(this, 2 * a);
                    return
                }
                a = 0
            }
            this.D = a;
            fv(this)
        }
    };
    x.ka = function(a) {
        this.yc(this.D + a)
    };
    x.la = function(a) {
        this.yc((dv(this) + a) * this.B.A)
    };
    x.Sb = function() {
        return ""
    };
    x.kb = function() {
        return ""
    };
    x.Ma = function() {
        return []
    };
    x.lb = function() {
        return ""
    };
    x.Za = function() {
        return ""
    };
    x.reset = function() {
        0 != this.status && this.J("cls");
        this.source = "";
        this.A = 0;
        this.N = "";
        this.D = -1;
        this.C = [];
        this.H = !0;
        this.status = 0;
        this.R = this.Ea = this.K = !1;
        fv(this)
    };
    x.abort = function() {
        this.reset()
    };
    x.bb = function() {};
    x.ad = function() {};
    x.$c = function() {};
    x.ra = function(a) {
        0 != a && this.$c(this.A + a)
    };
    x.Yb = function() {};
    x.sa = function() {
        return ""
    };
    x.wd = function() {
        return {}
    };
    x.Ab = function(a) {
        var b = "",
            c = "",
            d = "";
        if (this.B.W) {
            for (var e = 0, g; g = a.C[e]; e++) b = g.C, c += g.source, 0 < g.A.length && (d += g.A[0].target);
            if (c && d) {
                a = this.U;
                c = b + c;
                b += d;
                for (d = 0; d < a.A.length; d++) a.A[d].source == c && (a.A[d].target = b);
                a.B()
            }
        }
    };
    x.M = function() {
        D(this.T);
        D(this.X);
        O.prototype.M.call(this)
    };
    x.qf = function() {
        return !1
    };
    z(iv, cv);
    x = iv.prototype;
    x.bb = function(a, b) {
        this.source.length + a.length - b > this.B.G || (a = this.source.slice(0, this.A - b) + a, this.source = a + this.source.slice(this.A), this.A = a.length, this.D = -1, 0 == this.status && this.J("opn"), hv(this))
    };
    x.ad = function(a) {
        var b = this.Za();
        0 == a.indexOf(b) ? this.source = a.slice(b.length) : (this.source = a, this.F = []);
        this.A = this.source.length;
        this.D = -1;
        hv(this)
    };
    x.$c = function(a) {
        0 > a ? a = 0 : a > this.source.length && (a = this.source.length);
        a != this.A && (this.A = a, this.D = -1, hv(this))
    };
    x.Yb = function() {
        if (0 < this.F.length) {
            var a = this.F[this.F.length - 1];
            this.F = this.F.slice(0, -1);
            this.source = a.source + this.source;
            this.A += a.source.length;
            this.G.Gb("slen");
            this.G.Gb("tlen");
            this.G.Gb("ci");
            this.G.Gb("dur");
            this.G.Gb(me)
        } else if (0 < this.source.length && 0 < this.A && (this.source = this.source.slice(0, this.A - 1) + this.source.slice(this.A), this.A--, !this.source)) {
            this.reset();
            return
        }
        this.D = -1;
        hv(this)
    };
    x.sa = function(a) {
        var b = this.kb();
        if (typeof a === If) {
            if (a >= this.C.length) return "";
            if (0 > a) return this.G.set(Ea, "cmts"), a = this.Ma().join(""), ev(this, b, a), a;
            this.D = a
        }
        1 == this.status && hv(this);
        if (2 == this.status) return b = this.Za() + this.source, this.A == this.source.length && (this.G.set(Ea, "cmtd"), ev(this, b)), b;
        if (3 != this.status || 0 > this.D || this.D >= this.C.length) return "";
        jv(this);
        a = this.C[this.D];
        this.F.push(new Cu(a.source, a.target, a.A, a.D, a.type));
        this.source = this.source.slice(a.source.length);
        this.A -= a.source.length;
        0 > this.A && (this.A = 0);
        this.R = 2 == a.type;
        fv(this);
        if (this.source) this.D = -1, hv(this);
        else {
            a = this.Ma().join("");
            var c = cl(qn(this.F, function(g) {
                    return !!g.A
                }), function(g) {
                    return g.A
                }).join(" "),
                d = cl(this.F, function(g) {
                    return g.B
                }).join(" "),
                e = cl(this.F, function(g) {
                    return g.D
                });
            Qu(Ou(this.I.code), b, a, c, d, e);
            this.G.set(Ea, "cmtt");
            ev(this, b, a);
            return a
        }
        return ""
    };
    x.reset = function() {
        this.F = [];
        cv.prototype.reset.call(this)
    };
    x.Sb = function() {
        return this.source.slice(0, this.A)
    };
    x.lb = function() {
        var a = 0 == this.A ? this.source : this.source.slice(0, this.A);
        this.B.La || (a = a.toLowerCase());
        return a
    };
    x.Za = function() {
        for (var a = /^(zh|yue)/.test(this.I.code), b = /[a-zA-Z]$/.test(this.N), c = "", d = 0; d < this.F.length; d++) {
            var e = this.F[d].target;
            a && b && /^[a-zA-Z]/.test(e) && (e = " " + e);
            b = /[a-zA-Z]$/.test(e);
            c += e
        }
        return c
    };
    x.Ab = function(a) {
        var b = a.C[0];
        if (b && (this.B.D || !this.B.F || this.K || 0 != b.A.length && 2 != b.A[0].type)) {
            var c = 0 < b.A.length;
            if (1 == b.type) c && (this.C = b.A, b = qw.Ba(1), " " != b && "\u00a0" != b && (this.C[0].target = " " + this.C[0].target));
            else {
                var d = !1,
                    e = !1,
                    g = !1;
                c && (c = b.A[0], c.B && (e = 4 == c.type, g = 3 == c.type, d = 5 == c.type));
                c = b.C + b.source;
                this.B.H && !d ? this.J(new Du(c, "")) : cv.prototype.Ab.call(this, a);
                if (2 != this.status || this.Za() + this.lb() != c) return;
                this.H = b.D;
                this.C = b.A;
                this.B.H ? (a = e || g || d, this.K ? a && 0 > this.D && (this.D = 0) : (this.C = [], this.H = !1, this.D = -1, a && (this.C = b.A.slice(0, 1)), d && this.B.W && (this.D = 0))) : this.B.W && 0 > this.D && (this.D = 0)
            }
            this.mf = Fj()
        }
        this.status = 3;
        fv(this)
    };
    x.Ma = function() {
        var a = 0 == this.A ? this.source : this.source.slice(0, this.A),
            b = 0 == this.A ? "" : this.source.slice(this.A);
        if (this.B.wb && a && 0 <= this.D && this.D < this.C.length) {
            var c = this.C[this.D];
            a = c.target + a.slice(c.source.length)
        }
        a = [this.Za(), a, b];
        0 == this.A && (b = a[1], a[1] = a[2], a[2] = b);
        if (!this.Ea)
            for (b = 0; b < a.length; b++) a[b] && (c = this.B.transform(a[b], "")) && (c = c.text, c.length == a[b].length && (a[b] = c));
        return a
    };
    x.kb = function() {
        for (var a = "", b = 0; b < this.F.length; b++) a += this.F[b].source;
        return a + this.source
    };
    x.qf = function() {
        Mn(function() {
            var a = qw;
            a.Ba(-20).trim() || (this.N = a.Ba(20), hv(this, void 0, 1))
        }, this);
        return !1
    };
    x.mf = 0;
    C(lv, O);
    var kv = A.document && A.document.documentElement && !!A.document.documentElement.setCapture && !!A.document.releaseCapture;
    x = lv.prototype;
    x.setEnabled = function(a) {
        this.G = a
    };
    x.M = function() {
        lv.da.M.call(this);
        um(this.C, [Uh, bf], this.Yc, !1, this);
        this.A.removeAll();
        this.F && this.B.releaseCapture();
        this.C = this.target = null
    };
    x.Yc = function(a) {
        var b = a.type == bf;
        !this.G || this.D || b && (0 != a.A.button || Yl && a.ctrlKey) ? this.J("earlycancel") : this.J(new pv(gh, this, a.clientX, a.clientY, a)) && (this.D = !0, b && a.preventDefault(), this.lf(), this.clientX = this.X = a.clientX, this.clientY = this.P = a.clientY, this.screenX = a.screenX, this.screenY = a.screenY, this.deltaX = this.target.offsetLeft, this.deltaY = this.target.offsetTop, this.K = en(R(this.B).A))
    };
    x.lf = function() {
        var a = this.B,
            b = a.documentElement,
            c = !this.F;
        this.A.listen(a, [Th, cf], this.Ie, {
            capture: c,
            passive: !1
        });
        this.A.listen(a, [Sh, ef], this.zb, c);
        this.F ? (b.setCapture(!1), this.A.listen(b, "losecapture", this.zb)) : this.A.listen(fn(a), ab, this.zb);
        this.N && this.A.listen(this.N, "scroll", this.af, c)
    };
    x.zb = function(a, b) {
        this.A.removeAll();
        this.F && this.B.releaseCapture();
        this.D ? (this.D = !1, this.J(new pv("end", this, a.clientX, a.clientY, a, mv(this, this.deltaX), nv(this, this.deltaY), b || "touchcancel" == a.type))) : this.J("earlycancel")
    };
    x.Ie = function(a) {
        if (this.G) {
            var b = a.clientX - this.clientX,
                c = a.clientY - this.clientY;
            this.clientX = a.clientX;
            this.clientY = a.clientY;
            this.screenX = a.screenX;
            this.screenY = a.screenY;
            if (!this.D) {
                var d = this.X - this.clientX,
                    e = this.P - this.clientY;
                if (0 < d * d + e * e)
                    if (this.J(new pv(gh, this, a.clientX, a.clientY, a))) this.D = !0;
                    else {
                        this.W || this.zb(a);
                        return
                    }
            }
            c = ov(this, b, c);
            b = c.x;
            c = c.y;
            this.D && this.J(new pv("beforedrag", this, a.clientX, a.clientY, a, b, c)) && (qv(this, a, b, c), a.preventDefault())
        }
    };
    x.af = function(a) {
        var b = ov(this, 0, 0);
        a.clientX = this.clientX;
        a.clientY = this.clientY;
        qv(this, a, b.x, b.y)
    };
    C(pv, J);
    z(rv, lv);
    rv.prototype.Yc = function(a) {
        tv(this, a);
        lv.prototype.Yc.call(this, a)
    };
    rv.prototype.lf = function() {
        sv(this, this.B);
        var a = Q(this.C);
        a != this.B && sv(this, a);
        this.N && this.A.listen(this.N, "scroll", this.af, !kv)
    };
    rv.prototype.T = function(a) {
        tv(this, a);
        this.Ie(a)
    };
    var uv = null;
    z(wv, J);
    var Kv = {};
    wj(xv);
    var Ev;
    wj(Av);
    var Fv = {
        button: "pressed",
        checkbox: pb,
        menuitem: Lg,
        menuitemcheckbox: pb,
        menuitemradio: pb,
        radio: pb,
        tab: Lg,
        treeitem: Lg
    };
    C(Lv, U);
    x = Lv.prototype;
    x.ud = null;
    x.wa = 0;
    x.Be = null;
    x.$ = function() {
        var a = this.A,
            b = a.O,
            c = this.C,
            d = Hv(),
            e = [d],
            g = Hv();
        g != d && e.push(g);
        d = this.wa;
        for (g = []; d;) {
            var h = d & -d;
            g.push(Jv(c, h));
            d &= ~h
        }
        e.push.apply(e, g);
        (c = this.Be) && e.push.apply(e, c);
        N && !I("7") && e.push.apply(e, Bv(e));
        this.D = a = b.call(a, f, e.join(" "), this.ud);
        Qo(a, !N && !Km);
        this.isVisible() || (T(a, !1), a && es(a, bd, !0))
    };
    x.Z = function() {
        Lv.da.Z.call(this);
        var a = this.D;
        this.isVisible() || es(a, bd, !this.isVisible());
        this.isEnabled() || Gv(a, 1, !this.isEnabled());
        rp(this) && Cv(this.L(), Hv() + "-rtl", !0);
        this.isEnabled() && Dv(this, this.isVisible());
        a = qp(this);
        var b = this.L();
        a.listen(b, Uv.fc, this.hd).listen(b, [Uv.hc, Uv.Dc], this.Dd).listen(b, v, this.fe).listen(b, df, this.He);
        this.Ad != vj && a.listen(b, Ab, this.Ad);
        N && (I(9) || a.listen(b, Kb, this.Fg), this.G || (this.G = new Vv(this), Kj(this, this.G)));
        if (a = this.L()) b = this.B || (this.B = new Wr), Vr(b,
            a), qp(this).listen(b, me, this.cc).listen(a, wc, this.Cf).listen(a, ab, this.ee)
    };
    x.ib = function() {
        Lv.da.ib.call(this);
        this.B && Xr(this.B);
        this.isVisible() && this.isEnabled() && Dv(this, !1)
    };
    x.M = function() {
        Lv.da.M.call(this);
        this.B && (this.B.ca(), delete this.B);
        delete this.C;
        this.G = this.Be = this.ud = null
    };
    x.isVisible = function() {
        return !0
    };
    x.isEnabled = function() {
        return !(this.wa & 1)
    };
    x.setEnabled = function(a) {
        var b = this.X;
        b && typeof b.isEnabled == r && !b.isEnabled() || !Mv(this, 1, !a) || (a || (Pv(this, !1), Ov(this, !1)), this.isVisible() && Dv(this, a), Nv(this, 1, !a, !0))
    };
    x.isSelected = function() {
        return !!(this.wa & 8)
    };
    x.fe = function(a) {
        (!a.relatedTarget || !sn(this.L(), a.relatedTarget)) && this.J("enter") && this.isEnabled() && Rv(2) && Ov(this, !0)
    };
    x.He = function(a) {
        a.relatedTarget && sn(this.L(), a.relatedTarget) || !this.J("leave") || (Rv(4) && Pv(this, !1), Rv(2) && Ov(this, !1))
    };
    x.Ad = vj;
    x.hd = function(a) {
        if (this.isEnabled() && (Rv(2) && Ov(this, !0), !(0 != a.A.button || Yl && a.ctrlKey))) {
            Rv(4) && Pv(this, !0);
            var b;
            if (b = this.C) {
                var c;
                b = (c = this.L()) ? zn(c) && An(c) : !1
            }
            b && this.L().focus()
        }
        0 != a.A.button || Yl && a.ctrlKey || a.preventDefault()
    };
    x.Dd = function(a) {
        this.isEnabled() && (Rv(2) && Ov(this, !0), this.wa & 4 && Sv(this, a) && Rv(4) && Pv(this, !1))
    };
    x.Fg = function(a) {
        this.isEnabled() && Sv(this, a)
    };
    x.Cf = function() {
        Rv(32) && Mv(this, 32, !0) && Nv(this, 32, !0)
    };
    x.ee = function() {
        Rv(4) && Pv(this, !1);
        Rv(32) && Mv(this, 32, !1) && Nv(this, 32, !1)
    };
    x.cc = function(a) {
        return this.isVisible() && this.isEnabled() && 13 == a.keyCode && Sv(this, a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
    };
    if (typeof Lv !== r) throw Error("Invalid component class " + Lv);
    if (typeof Av !== r) throw Error("Invalid renderer class " + Av);
    var VA = Bj(Lv);
    Kv[VA] = Av;
    if (typeof Tv !== r) throw Error("Invalid decorator function " + Tv);
    C(Vv, E);
    var Wv = !N || Wl(9);
    Vv.prototype.C = function() {
        this.A = !1
    };
    Vv.prototype.F = function() {
        this.A = !0
    };
    Vv.prototype.G = function(a) {
        if (this.A) this.A = !1;
        else {
            var b = a.A,
                c = b.button,
                d = b.type,
                e = Xv(b, bf);
            this.B.hd(new $l(e, a.B));
            e = Xv(b, ef);
            this.B.Dd(new $l(e, a.B));
            Wv || (b.button = c, b.type = d)
        }
    };
    Vv.prototype.M = function() {
        this.B = null;
        Vv.da.M.call(this)
    };
    C(Y, U);
    x = Y.prototype;
    x.Id = null;
    x.ub = null;
    x.jd = null;
    x.Wb = null;
    x.gb = !0;
    x.tb = !0;
    x.Qb = !0;
    x.Na = -1;
    x.ma = null;
    x.Vb = !1;
    x.xb = null;
    x.$ = function() {
        var a = this.A,
            b = a.O,
            c = ["goog-container", this.Wb == dd ? "goog-container-horizontal" : "goog-container-vertical"];
        this.isEnabled() || c.push("goog-container-disabled");
        this.D = b.call(a, f, c.join(" "))
    };
    x.Z = function() {
        Y.da.Z.call(this);
        tp(this, function(b) {
            if (b.Ta) {
                var c = b.L();
                c = c.id || (c.id = b.qa || (b.qa = ":" + (b.dh.A++).toString(36)));
                this.xb || (this.xb = {});
                this.xb[c] = b
            }
        }, this);
        var a = this.L();
        zv(this.jd, this);
        this.na(this.gb, !0);
        qp(this).listen(this, "enter", this.Jg).listen(this, "highlight", this.Ng).listen(this, "unhighlight", this.ah).listen(this, "open", this.Sg).listen(this, "close", this.Dg).listen(a, Uv.fc, this.Df).listen(Q(a), [Uv.hc, Uv.Dc], this.Gg).listen(a, [Uv.fc, Uv.hc, Uv.Dc, v, df, Ab], this.Ag);
        this.Qb &&
            Zv(this, !0)
    };
    x.ib = function() {
        fw(this, -1);
        this.ma && Qv(this.ma, !1);
        this.Vb = !1;
        Y.da.ib.call(this)
    };
    x.M = function() {
        Y.da.M.call(this);
        this.ub && (this.ub.ca(), this.ub = null);
        this.jd = this.ma = this.xb = this.Id = null
    };
    x.Jg = function() {
        return !0
    };
    x.Ng = function(a) {
        var b = up(this, a.target);
        if (-1 < b && b != this.Na) {
            var c = sp(this, this.Na);
            c && Ov(c, !1);
            this.Na = b;
            c = sp(this, this.Na);
            this.Vb && Pv(c, !0);
            this.ma && c != this.ma && Qv(this.ma, !1)
        }
        b = this.L();
        null != a.target.L() && es(b, Ga, a.target.L().id)
    };
    x.ah = function(a) {
        a.target == sp(this, this.Na) && (this.Na = -1);
        this.L().removeAttribute("aria-activedescendant")
    };
    x.Sg = function(a) {
        (a = a.target) && a != this.ma && a.X == this && (this.ma && Qv(this.ma, !1), this.ma = a)
    };
    x.Dg = function(a) {
        a.target == this.ma && (this.ma = null);
        var b = this.L(),
            c = a.target.L();
        b && a.target.wa & 2 && c && (a = "", c && (a = c.id), es(b, Ga, a))
    };
    x.Df = function(a) {
        this.tb && (this.Vb = !0);
        var b = Yv(this);
        b && zn(b) && An(b) ? b.focus() : a.preventDefault()
    };
    x.Gg = function() {
        this.Vb = !1
    };
    x.Ag = function(a) {
        a: {
            var b = a.target;
            if (this.xb)
                for (var c = this.L(); b && b !== c;) {
                    var d = b.id;
                    if (d in this.xb) {
                        b = this.xb[d];
                        break a
                    }
                    b = b.parentNode
                }
            b = null
        }
        if (b) switch (a.type) {
            case Uv.fc:
                b.hd(a);
                break;
            case Uv.hc:
            case Uv.Dc:
                b.Dd(a);
                break;
            case v:
                b.fe(a);
                break;
            case df:
                b.He(a);
                break;
            case Ab:
                b.Ad(a)
        }
    };
    x.he = function() {};
    x.ge = function() {
        fw(this, -1);
        this.Vb = !1;
        this.ma && Qv(this.ma, !1)
    };
    x.je = function(a) {
        return this.isEnabled() && this.isVisible() && (0 != (this.F ? this.F.length : 0) || this.Id) && dw(this, a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
    };
    x.isVisible = function() {
        return this.gb
    };
    x.na = function(a, b) {
        if (b || this.gb != a && this.J(a ? "show" : "hide")) {
            this.gb = a;
            var c = this.L();
            c && (T(c, a), this.Qb && yv(Yv(this), this.tb && this.gb), b || this.J(this.gb ? "aftershow" : "afterhide"));
            return !0
        }
        return !1
    };
    x.isEnabled = function() {
        return this.tb
    };
    x.setEnabled = function(a) {
        this.tb != a && this.J(a ? "enable" : "disable") && (a ? (this.tb = !0, tp(this, function(b) {
            b.rf ? delete b.rf : b.setEnabled(!0)
        })) : (tp(this, function(b) {
            b.isEnabled() ? b.setEnabled(!1) : b.rf = !0
        }), this.Vb = this.tb = !1), this.Qb && yv(Yv(this), a && this.gb))
    };
    z(hw, Y);
    x = hw.prototype;
    x.ha = function(a) {
        Y.prototype.ha.call(this, a);
        T(this.N, !0);
        us(this.L(), this.N)
    };
    x.$ = function() {
        Y.prototype.$.call(this);
        var a = this.L();
        Eq(a, "ita-ppe-box");
        X && V(a, "ita-ppe-box-mobile");
        vv(a);
        a.style.direction = this.model.B.Y ? Ag : Me;
        this.na(!1);
        var b = this.B.O(f, "ita-ppe-edit"),
            c = this.B.O(f, "ita-ppe-div");
        this.I = this.B.O(f, "ita-ppe-can-list");
        if (X) this.K = b, this.B.ia(c, this.I);
        else if (this.model.B.K) {
            this.K = b;
            var d = iw(this);
            jw(this, d.rows[0].cells[0]);
            this.B.ia(c, this.I, d)
        } else d = iw(this), this.K = this.B.O(f, "ita-ppe-div"), this.B.ia(d.rows[0].cells[0], this.K), this.B.ia(b, d), d = iw(this),
            this.B.ia(d.rows[0].cells[0], this.I), jw(this, d.rows[0].cells[1]), this.B.ia(c, d);
        this.C = this.B.O(f, "ita-isv");
        document.body.appendChild(this.C);
        this.B.ia(a, b, c);
        this.model.B.U || (b.style.display = Hf)
    };
    x.Z = function() {
        Y.prototype.Z.call(this);
        ew(this);
        var a = this.L();
        qp(this).listen(this.I, p, this.zg);
        X ? qp(this).listen(this.A.A, p, this.na.bind(this, !1)) : (this.ba = new rv(this.N, a), qp(this).listen(this.H, p, this.Ug).listen(this.G, p, this.Tg).listen(this.H, [v, df], B(this.Je, this, this.H)).listen(this.G, [v, df], B(this.Je, this, this.G)))
    };
    x.zg = function(a) {
        3 == this.model.status && (a = Rj(this.R, a.target), 0 <= a && this.J(new wv(a)))
    };
    x.Ug = function() {
        3 != this.model.status || Fq(this.H, Wd) || this.J("pu")
    };
    x.Tg = function() {
        3 != this.model.status || Fq(this.G, Wd) || this.J("pd")
    };
    x.Je = function(a, b) {
        b.type == v ? V(a, "ita-ppe-hov") : W(a, "ita-ppe-hov")
    };
    x.bd = function() {};
    x.na = function(a, b) {
        b = Y.prototype.na.call(this, a, b);
        T(this.N, a);
        !a && this.C && (this.C.style.display = Hf);
        return b
    };
    x.M = function() {
        D(this.ba);
        Y.prototype.M.call(this);
        on(this.C);
        on(this.N)
    };
    z(mw, hw);
    mw.prototype.bd = function() {
        var a = this.model.Ma();
        this.B.ia(this.K, this.B.O(m, Zd, a[0]), a[1], this.B.O(m, Vd), a[2])
    };
    nw.prototype.Ca = function(a) {
        if (0 == this.A.status && !this.A.B.D) return !1;
        var b = this.A.Sb(),
            c = qw;
        if (this.D) {
            var d = rw(this, !1);
            if (!d) return !1;
            b = d.Pa();
            D(d)
        }
        d = String.fromCharCode(a.charCode);
        var e = 0;
        if (a = this.A.B.transform(b, String.fromCharCode(a.charCode))) d = a.text, e = a.back;
        else if (" " == d) return !1;
        this.D ? (c.commitText(d, e), tw(this)) : this.A.bb(d, e);
        return !0
    };
    nw.prototype.ob = function(a) {
        if (!qw.Tb()) return !1;
        this.B = rw(this, !1);
        if (!this.B) return !1;
        var b = this.B.Pa();
        if (b && !b.replace(pw(this.A.B.C), "")) return this.A.bb(b, 0), 1 == this.A.status && hv(this.A), this.A.sa(), a = String.fromCharCode(a.charCode || a.keyCode), !vA || this.A.B.D || !this.A.B.F || " " != a && "\n" != a ? (ev(this.A, a, a), !0) : !1;
        this.B.ca();
        this.B = null;
        return !1
    };
    z(zw, J);
    z(Aw, O);
    x = Aw.prototype;
    x.tc = function() {
        this.A || (this.A = new nw(this.model, this.view))
    };
    x.Pd = function(a) {
        if (a.type != u || Bw(this) || a.ctrlKey || a.altKey || a.metaKey) return !1;
        var b = qw,
            c = b.Ba(20);
        this.model.N = c;
        var d = null;
        if (this.model.B.state & 1 || /^(?:zh|yue)/.test(this.model.I.code)) d = this.model.B.fa(c, String.fromCharCode(a.charCode), this.model.B.state);
        if (d) {
            c = d.text;
            d = d.back;
            if (0 < d) return b.commitText(c, d), !0;
            this.A && c.match(this.model.B.S) && this.ob(a) ? b.commitText(c, 1) : ev(this.model, c, c);
            return !0
        }
        return !1
    };
    x.Cc = function(a) {
        Bw(this) && (this.B.push(me, a.keyCode || a.charCode), this.B.Bb("bsc"));
        return this.A ? xw(this.A) : Bw(this) ? (this.model.Yb(), !0) : !1
    };
    x.dc = function(a) {
        this.B.push(me, a.keyCode || a.charCode);
        return this.A ? (a = this.A, 0 != a.A.status ? (a.A.abort(), a = !0) : a = !1, a) : Bw(this) ? (this.model.abort(), !0) : !1
    };
    x.Ca = function(a) {
        if (this.A) return this.A.Ca(a);
        a = String.fromCharCode(a.charCode);
        var b = 0;
        this.model.B.La || this.model.source || (this.model.Ea = /^[A-Z]/.test(a));
        if (!this.model.Ea) {
            var c = this.model.B.transform(this.model.Sb(), a);
            if (c) a = c.text, b = c.back;
            else if (" " == a) return !1
        }
        this.model.bb(a, b);
        return !0
    };
    x.ef = function(a) {
        a.charCode = a.keyCode;
        return this.Ca(a)
    };
    x.ob = function(a) {
        if (this.model.Ea) return !0;
        this.B.push(me, a.keyCode || a.charCode);
        if (this.A && !Bw(this)) return this.A.ob(a);
        (a = this.model.B.transform(this.model.Sb(), "")) && this.model.bb(a.text, a.back);
        hv(this.model);
        return !0
    };
    x.Wc = function(a) {
        if (this.model.B.H && 0 == this.model.C.length) return this.model.reset(), !1;
        if (3 == this.model.status) {
            var b = Number(String.fromCharCode(a.charCode));
            if (1 > b || b > this.model.B.A) return !0;
            b = dv(this.model) * this.model.B.A + b - 1;
            0 <= b && (this.B.push(me, a.keyCode || a.charCode), this.model.sa(b), Cw(this))
        }
        return !0
    };
    x.Kf = function(a) {
        this.B.push(me, a.keyCode || a.charCode);
        var b = "",
            c;
        (c = !this.A) || (c = this.A, ow(c) ? (c.A.reset(), c = !0) : c = !1, c = !c);
        c && (b = this.model.sa(), Bw(this) && (b += this.model.sa(-1)));
        a = c = String.fromCharCode(a.charCode);
        (b = this.model.B.fa(b, c, this.model.B.state)) && 0 == b.back && (a = b.text);
        ev(this.model, a, a);
        return !0
    };
    x.Xb = function(a) {
        var b = String.fromCharCode(a.charCode),
            c = "\t" == b || 9 == a.keyCode,
            d = " " == b || 32 == a.keyCode;
        if (this.A && (3 == this.model.status && 0 > this.model.D || this.model.B.B && !(this.model.K || c && ow(this.A)))) return !1;
        this.B.push(me, a.keyCode || a.charCode);
        a = "\r" == b || 13 == a.keyCode;
        this.model.B.P && a || !d && !c && !a || 3 == this.model.status && 0 == this.model.C.length || this.model.Ea ? this.model.sa(-1) : this.model.sa();
        c || Cw(this);
        return !0
    };
    x.Jf = function() {
        this.B.push(me, 0);
        return this.A ? yw(this.A) : !1
    };
    x.Kc = function() {
        return []
    };
    x.Bd = function(a) {
        sn(this.view.L(), a.target) || (this.A ? vw(this.A) : this.model.reset())
    };
    x.If = function() {
        oo(B(function() {
            this.B.Xc(this.model.I.code);
            this.B.Ec("st");
            if (this.A) {
                var a = this.A;
                if (!a.B) {
                    var b = qw;
                    b && (a.B = b.yb())
                }
                a.B && (b = a.B.ac(!a.A.K && a.A.B.B)) && kw(a.C, b)
            } else(a = qw) && (a = a.Jc()) && kw(this.view, a)
        }, this))
    };
    x.Ef = function() {
        if (this.A) {
            var a = this.A;
            D(a.B);
            a.B = null;
            a.F = ""
        }
        this.B.get(Ea) || this.B.set(Ea, "cl");
        this.B.cd("st");
        this.B.report()
    };
    x.Hf = function() {
        if (this.A) {
            var a = this.A;
            if (3 == a.A.status && a.F) {
                for (var b = 0; b < a.A.C.length; b++)
                    if (a.A.C[b].target == a.F) {
                        a.A.D = b;
                        break
                    } a.F = ""
            }
            a.B && (a.B.Db() || (a.B.ca(), a.B = rw(a, !0)), a.B && (b = a.A.Ma().join(""), b != a.B.Pa() && a.B.replace(b)));
            if (!a.A.K && a.A.B.B)
                if (!a.B && 3 == a.A.status && (b = qw) && (a.B = b.yb()), b = a.C, a = a.B, 3 != b.model.status || 0 == b.model.C.length) b.na(!1);
                else {
                    var c = b.model.C[0],
                        d = c.target;
                    if (c.source == b.model.source && d != b.model.source) {
                        if (c = d.length > b.model.source.length) {
                            var e = b.model.source;
                            c = String(e).toLowerCase();
                            e = String(d.substr(0, e.length)).toLowerCase();
                            c = 0 == (c < e ? -1 : c == e ? 0 : 1)
                        }
                        c ? (yn(b.C, d.slice(b.model.source.length).replace(/\s/g, "\u00a0")), Iq(b.C, "ita-isv-red", "ita-isv-grey"), a && (b.P = a.ac(!0)), b.P.Ga(b.C, 9), b.C.style.display = "block") : d.length == b.model.source.length ? (yn(b.C, b.model.source), Iq(b.C, "ita-isv-grey", "ita-isv-red"), a && (b.P = a.ac()), b.P.Ga(b.C, 8), b.C.style.display = "block") : b.C.style.display = Hf
                    }
                }
            else lw(a.C)
        } else lw(this.view)
    };
    x.Ff = function(a) {
        if (this.A) {
            var b = this.A,
                c = a.H;
            a = a.C;
            c != a && (b.S[a] = c);
            if (a && b.B && b.A.kb() == c) b.B.replace(a), b.B.ca(), b.B = null, b = !0;
            else {
                var d = b.G[c];
                if (d && 0 != d.length) {
                    for (var e = 0; e < d.length; ++e) {
                        var g = d[e];
                        a && g.replace(a);
                        g.ca()
                    }
                    delete b.G[c];
                    b = !0
                } else b = !1
            }!b && c == a && (c = qw) && (N && !Wl(9) ? (c = c.yb(), c.replace(a), c.ca()) : c.commitText(a))
        } else(c = qw) && a.C && (this.J(new zw("cmts", a.C)), c.commitText(a.C), this.J(new zw("cmte", a.C)))
    };
    x.Gf = function() {
        this.A && uw(this.A)
    };
    x.zd = function(a) {
        this.B.push(me, 0);
        this.model.sa(dv(this.model) * this.model.B.A + a.index);
        Cw(this)
    };
    x.Bg = function() {
        this.model.la(1)
    };
    x.Cg = function() {
        this.model.la(-1)
    };
    x.M = function() {
        D(this.D);
        O.prototype.M.call(this)
    };
    z(Dw, Aw);
    Dw.prototype.Ca = function(a) {
        return String.fromCharCode(a.charCode).match(/[0-9]/) && 0 != this.model.B.N && this.model.source.replace(/[0-9]/g, "") ? this.Wc(a) : Aw.prototype.Ca.call(this, a)
    };
    Dw.prototype.F = function(a) {
        if (0 < this.model.C.length) return 0 > this.model.D && (this.model.D = 0), a.type = u, a.charCode = a.keyCode, this.Xb(a);
        this.model.reset();
        return !1
    };
    Dw.prototype.C = function() {
        this.model.ka(this.model.C.length - 1 - this.model.D)
    };
    Dw.prototype.Kc = function() {
        function a(l) {
            k.Y && (l = -l);
            h.model.la(l)
        }

        function b() {
            return !h.A && !c()
        }

        function c() {
            return e() && k.Ra && k.U && !h.A
        }

        function d() {
            return !!h.A
        }

        function e() {
            return g() && 0 != h.model.status
        }

        function g() {
            return !k.B || h.model.K
        }
        var h = this,
            k = this.model.B;
        return [
            [p, 0, null, null, d, this.Jf, this],
            [t, 0, 32, null, function() {
                return k.C.test(" ")
            }, this.ef, this],
            [u, 0, k.C, null, null, this.Ca, this],
            [u, 0, /[0-9]/, null, function() {
                return 0 != h.model.status && 0 != k.N && g()
            }, this.Wc, this],
            [t, 0, 38, 3, g, this.model.ka,
                this.model, -1
            ],
            [t, 0, 40, 3, g, this.model.ka, this.model, 1],
            [t, 0, 33, 3, g, this.model.la, this.model, -1],
            [t, 0, 37, 3, b, a, void 0, -1],
            [u, 0, k.ea, 3, g, this.model.la, this.model, -1],
            [t, 0, 34, 3, g, this.model.la, this.model, 1],
            [t, 0, 39, 3, b, a, void 0, 1],
            [u, 0, k.aa, 3, g, this.model.la, this.model, 1],
            [u, 0, k.Mb, null, e, this.Kf, this],
            [t, 0, 32, null, e, this.Xb, this],
            [t, 0, 32, null, function() {
                return k.B && !!h.A
            }, this.model.qf, this.model],
            [t, 0, 13, null, e, this.Xb, this],
            [t, 0, 9, 3, d, this.F, this],
            [t, 0, 8, null, null, this.Cc, this],
            [t, 0, 27, null, e, this.dc,
                this
            ],
            [u, 0, k.S, 0, function() {
                return !!h.A && !k.D
            }, this.ob, this],
            [t, 0, 37, null, c, this.model.ra, this.model, -1],
            [t, 0, 39, null, c, this.model.ra, this.model, 1],
            [t, 0, 36, null, c, this.model.ra, this.model, -999],
            [t, 0, 35, null, c, this.model.ra, this.model, 999],
            [t, 0, 36, 3, g, this.model.ka, this.model, -999],
            [t, 0, 35, 3, g, this.C, this]
        ]
    };
    z(Ew, O);
    Ew.prototype.push = function(a, b) {
        this.A.push(new Cu(a, b || ""));
        this.B()
    };
    Ew.prototype.B = function() {
        if (0 < this.A.length && 2E3 < (new Date).getTime() - this.A[0].timestamp) {
            var a = this.A.pop();
            a.target && this.J(new Du(a.source, a.target));
            this.reset()
        }
    };
    Ew.prototype.reset = function() {
        this.A = []
    };
    z(Fw, Ew);
    Fw.prototype.B = function() {
        for (var a = [], b = 0; b < this.A.length; b++) {
            var c = this.A[b].source,
                d = this.A[b].target;
            d ? this.J(new Du(c, d)) : a.push(this.A[b])
        }
        this.A = a;
        Ew.prototype.B.call(this)
    };
    z(Iw, cv);
    x = Iw.prototype;
    x.yc = function(a) {
        this.F[this.A].A = a;
        cv.prototype.yc.call(this, a)
    };
    x.bb = function(a, b) {
        2 != this.status && 3 != this.status || this.sa(-1);
        this.source.length + a.length - b > this.B.G || (this.source = this.source.slice(0, this.A - b) + a + this.source.slice(this.A), this.A += a.length - b, 0 == this.status && this.J("opn"), this.status = 1, fv(this))
    };
    x.ad = function(a) {
        3 == this.status && (this.F = [], this.C = [], this.status = 1);
        this.source = a;
        this.A = this.source.length;
        fv(this)
    };
    x.$c = function(a) {
        if (2 != this.status) {
            var b = 3 == this.status,
                c = b ? this.F.length - 1 : this.source.length;
            0 > a ? a = 0 : a > c && (a = c);
            a != this.A && (this.A = a, b && Jw(this), fv(this))
        }
    };
    x.ke = function() {
        1 != this.status || this.A >= this.source.length || ((this.source = this.source.slice(0, this.A) + this.source.slice(this.A + 1)) ? fv(this) : this.reset())
    };
    x.Yb = function() {
        if (1 == this.status && 0 < this.A) {
            if (this.source = this.source.slice(0, this.A - 1) + this.source.slice(this.A), this.A--, !this.source) {
                this.reset();
                return
            }
        } else 3 == this.status && (this.F = [], this.C = [], this.A = this.source.length, this.status = 1);
        fv(this)
    };
    x.sa = function(a) {
        a = a || 0;
        if (0 <= a && a < this.C.length) this.yc(a);
        else if (0 > a)
            if (2 == this.status) ev(this, this.source);
            else return a = this.Ma().join(""), ev(this, this.kb(), a), a;
        return ""
    };
    x.abort = function() {
        3 == this.status ? this.Yb() : this.reset()
    };
    x.reset = function() {
        this.F = [];
        cv.prototype.reset.call(this)
    };
    x.Sb = function() {
        return this.source.slice(0, this.A)
    };
    x.Za = function() {
        return ""
    };
    x.lb = function() {
        var a = "";
        1 == this.status ? a = this.source + "||t:1" : 3 == this.status && (a = cl(this.F, function(b) {
            return b.source.replace(/[,|:]/g, escape)
        }, this).join(","));
        return a
    };
    x.Ma = function() {
        if (3 == this.status) {
            for (var a = [], b = 0; b < this.F.length; b++) {
                var c = this.F[b];
                b == this.A ? a.push(0 > this.D || this.D >= this.C.length ? c.source : this.C[this.D].target) : a.push(0 > c.A || c.A >= c.B.length ? c.source : c.B[c.A].target)
            }
            return a
        }
        return [this.source.slice(0, this.A), this.source.slice(this.A)]
    };
    x.kb = function() {
        return this.source
    };
    x.Ab = function(a) {
        cv.prototype.Ab.call(this, a);
        if (2 == this.status) {
            a = a.C;
            if (0 == a.length) this.status = 0 == this.F.length ? 1 : 3;
            else {
                if (a.length == this.F.length)
                    for (var b = 0, c; c = this.F[b]; b++) {
                        var d = a[b];
                        c.source == d.source && (c.B = d.A, c.D = d.D, 0 > c.A || c.A >= d.A.length) && (c.A = 0)
                    } else
                        for (this.F = [], this.source = "", b = this.A = 0; c = a[b]; b++) this.source += c.source, d = new Gw(c.source), d.B = c.A, d.D = c.D, d.A = 0, this.F.push(d);
                this.status = 3;
                Jw(this)
            }
            fv(this)
        }
    };
    x.vd = function() {
        var a = this.F[this.A];
        if (!(2 > a.source.length)) {
            var b = a.source.slice(-1);
            a.source = a.source.slice(0, -1);
            Hw(a);
            (a = this.F[this.A + 1]) ? (a.source = b + a.source, Hw(a)) : (a = new Gw(b), this.F.splice(this.A + 1, 0, a));
            hv(this)
        }
    };
    x.Kd = function() {
        if (!(this.A >= this.F.length - 1)) {
            var a = this.F[this.A],
                b = this.F[this.A + 1];
            a.source += b.source.slice(0, 1);
            Hw(a);
            b.source = b.source.slice(1);
            0 == b.source.length ? this.F.splice(this.A + 1, 1) : Hw(b);
            hv(this)
        }
    };
    z(Kw, hw);
    Kw.prototype.bd = function() {
        var a = this.model.Ma();
        if (3 == this.model.status) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = this.B.O(m, Zd, a[c]);
                this.model.A != c && V(d, Xd);
                b.push(d)
            }
            this.B.ia(this.K, b)
        } else 2 == this.model.status ? this.B.ia(this.K, a.join("")) : this.B.ia(this.K, a[0], this.B.O(m, Vd), a[1])
    };
    z(Lw, Aw);
    x = Lw.prototype;
    x.Lf = function() {
        this.model.ka(this.model.C.length - 1 - this.model.D)
    };
    x.tc = function() {
        Aw.prototype.tc.call(this);
        this.A.D = !1
    };
    x.Ca = function(a) {
        var b = String.fromCharCode(a.charCode);
        return 3 == this.model.status && "0" < b && Number(b) <= this.model.B.A ? !1 : Aw.prototype.Ca.call(this, a)
    };
    x.zd = function(a) {
        Aw.prototype.zd.call(this, a);
        1 == this.model.F.length && this.model.sa(-1)
    };
    x.Kc = function() {
        var a = Mw(this);
        a = a.concat(Nw(this));
        return a = a.concat([
            [t, 0, 38, 3, null, this.model.ka, this.model, -1],
            [t, 0, 40, 3, null, this.model.ka, this.model, 1],
            [t, 0, 33, 3, null, this.model.la, this.model, -1],
            [t, 0, 34, 3, null, this.model.la, this.model, 1],
            [u, 0, /[0-9]/, 3, null, this.Wc, this],
            [t, 0, 36, 3, null, this.model.ka, this.model, -999],
            [t, 0, 35, 3, null, this.Lf, this],
            [t, 0, 9, 3, null, this.model.ka, this.model, 1],
            [t, 0, 32, 3, null, this.model.ka, this.model, 1],
            [t, 16, 38, 3, null, this.model.la, this.model, -1],
            [t, 16, 40, 3, null, this.model.la,
                this.model, 1
            ],
            [t, 16, 37, 3, null, this.model.vd, this.model],
            [t, 16, 39, 3, null, this.model.Kd, this.model],
            [t, 16, 32, 3, null, this.model.ka, this.model, -1],
            [t, 17, 72, 3, null, this.dc, this],
            [t, 17, 80, 3, null, this.model.ka, this.model, -1],
            [t, 17, 78, 3, null, this.model.ka, this.model, 1],
            [t, 17, 73, 3, null, this.model.vd, this.model],
            [t, 17, 79, 3, null, this.model.Kd, this.model],
            [t, 17, 81, 3, null, this.model.vd, this.model],
            [t, 17, 87, 3, null, this.model.Kd, this.model]
        ])
    };
    z(Ow, Ew);
    Ow.prototype.B = function() {
        for (var a = 0; a < this.A.length && this.A[a].target; a++) this.J(new Du(this.A[a].source, this.A[a].target));
        this.A = this.A.slice(a);
        Ew.prototype.B.call(this)
    };
    var Pw = {
        a: "\u3107",
        b: "\u3116",
        c: "\u310f",
        d: "\u310e",
        e: "\u310d",
        f: "\u3111",
        g: "\u3115",
        h: "\u3118",
        i: "\u311b",
        j: "\u3128",
        k: "\u311c",
        l: "\u3120",
        m: "\u3129",
        n: "\u3119",
        o: "\u311f",
        p: "\u3123",
        q: "\u3106",
        r: "\u3110",
        s: "\u310b",
        t: "\u3114",
        u: "\u3127",
        v: "\u3112",
        w: "\u310a",
        x: "\u310c",
        y: "\u3117",
        z: "\u3108",
        1: "\u3105",
        2: "\u3109",
        3: "\u02c7",
        4: "\u02cb",
        5: "\u3113",
        6: "\u02ca",
        7: "\u02d9",
        8: "\u311a",
        9: "\u311e",
        0: "\u3122",
        "-": "\u3126",
        ";": "\u3124",
        ",": "\u311d",
        ".": "\u3121",
        "/": "\u3125",
        " ": "\u02c9",
        "=": "="
    };
    z(Sw, cv);
    x = Sw.prototype;
    x.abort = function() {
        3 == this.status ? Tw(this) : 1 == this.status && this.reset()
    };
    x.bb = function(a, b) {
        2 != this.status && 3 != this.status && (this.Ea ? " " != a && (this.G = this.source = (this.source + a).slice(0, this.B.G)) : (this.source = this.source.slice(0, this.source.length - b) + a.toLowerCase(), this.G = (a = this.B.transform(this.source, "")) ? a.text : this.source), this.D = -1, this.H = !0, 0 == this.status && this.J("opn"), this.B.T && !this.source.match(this.B.T) ? (this.status = 1, fv(this)) : hv(this))
    };
    x.ad = function() {};
    x.$c = function(a) {
        1 != this.status || this.source || (0 > a ? a = 0 : a > this.F.length && (a = this.F.length), a != this.A && (this.A = a, fv(this)))
    };
    x.Yb = function() {
        this.source ? (this.G = this.G.slice(0, -1), this.source = this.source.slice(0, -1)) : 0 < this.A && (this.F.splice(this.A - 1, 1), this.A--);
        0 != this.F.length || this.source ? fv(this) : this.reset()
    };
    x.sa = function(a) {
        if (3 == this.status) {
            typeof a === If && 0 <= a && (this.D = a);
            if (0 <= this.D && this.D < this.C.length) {
                var b = this.C[this.D];
                a = b.source;
                b = b.target;
                if (this.P) return ev(this, a, b), "";
                for (; a && b;) {
                    var c = this.F[this.A++];
                    if (a.slice(0, c.source.length) != c.source) break;
                    c.target = b.charAt(0);
                    c.A = !0;
                    a = a.slice(c.source.length);
                    b = b.slice(1)
                }
            }
            Tw(this);
            return ""
        }
        if (2 == this.status && this.source) {
            ev(this, this.lb());
            b = a = "";
            for (c = this.A; c < this.F.length; c++) a += this.F[c].source, b += this.F[c].target;
            a && b && ev(this, a, b);
            return b
        }
        return 1 ==
            this.status ? (a = this.Ma().join(""), b = cl(this.F, function(d) {
                return d.source
            }), c = cl(this.F, function(d) {
                return d.target
            }), Qu(Ou(this.I.code), b.join(""), c.join(""), b.join(" ")), ev(this, this.kb(), a), fv(this), a) : ""
    };
    x.reset = function() {
        this.F = [];
        this.G = "";
        this.P = !1;
        cv.prototype.reset.call(this)
    };
    x.Mf = function() {
        1 != this.status || this.source || (this.F.splice(this.A, 1), 0 == this.F.length ? this.reset() : fv(this))
    };
    x.Sb = function() {
        return this.source
    };
    x.Za = function() {
        if (!this.source) {
            for (var a = "", b = 0; b < this.A; b++) a += this.F[b].target;
            return a
        }
        return ""
    };
    x.lb = function() {
        var a = "";
        if (this.source) {
            for (var b = 0; b < this.A; b++) {
                var c = this.F[b];
                a += c.A ? c.target : c.source
            }
            a += this.source
        } else
            for (this.A >= this.F.length && 0 < this.F.length && this.A--, b = this.A; b < this.F.length; b++) a += this.F[b].source;
        return a
    };
    x.wd = function() {
        if (iq == qb) {
            var a = cl(this.source ? this.F.slice(0, this.A) : this.F.slice(this.A, this.F.length), function(d) {
                var e = {};
                e.source = Qw(d.source);
                d.A && (e.target = d.target);
                return e
            }, this);
            this.source && a.push({
                source: Qw(this.source)
            });
            var b = {};
            b.itc = this.I.code;
            var c = this.lb();
            b.source = Qw(c);
            b.update_all = !0;
            b.append_tokens = a;
            return {
                message: JSON.stringify(b)
            }
        }
        return cv.prototype.wd.call(this)
    };
    x.Ma = function() {
        for (var a = "", b = "", c = 0; c < this.F.length; c++) {
            var d = this.F[c];
            c < this.A ? b += d.target || d.source : a += d.target || d.source
        }
        return [b, this.G, a]
    };
    x.kb = function() {
        return ""
    };
    x.Ab = function(a) {
        cv.prototype.Ab.call(this, a);
        if (2 == this.status)
            if (a = a.C[0], !a || 0 == a.A.length) this.status = 1, fv(this);
            else if (a.C + a.source == this.Za() + this.lb()) {
            if (this.source) {
                a = a.A[0].target;
                if (a.length != this.A + 1) {
                    this.status = 1;
                    return
                }
                this.F.splice(this.A, 0, new Rw(this.source));
                this.source = this.G = "";
                for (var b = 0, c = 0; c < a.length && b < this.F.length; b++, c++) this.F[b].target = a.charAt(c);
                this.A = b;
                this.status = 1
            } else this.C = a.A, this.H = a.D, this.B.W && 0 > this.D && (this.D = 0), this.status = 3;
            fv(this)
        }
    };
    z(Vw, hw);
    Vw.prototype.bd = function() {
        var a = this.model.Ma();
        this.B.ia(this.K, a[0], this.B.O(m, Zd, a[1]), this.B.O(m, Vd), a[2])
    };
    z(Ww, Aw);
    x = Ww.prototype;
    x.Nf = function() {
        this.model.ka(this.model.C.length - 1 - this.model.D)
    };
    x.tc = function() {
        Aw.prototype.tc.call(this);
        this.A.D = !1
    };
    x.Kc = function() {
        function a() {
            return !h.K
        }

        function b() {
            return h.K
        }

        function c() {
            return 1 == g.model.status && !g.model.source
        }

        function d() {
            return h.D && (0 == g.model.status || 1 == g.model.status)
        }

        function e() {
            return 0 != g.model.status
        }
        var g = this,
            h = this.model.B;
        return [
            [t, 0, 32, null, d, this.ef, this],
            [u, 0, h.C, null, d, this.Ca, this],
            [t, 0, 38, 3, b, this.model.ka, this.model, -1],
            [t, 0, 37, 3, a, this.model.ka, this.model, -1],
            [t, 0, 40, 3, b, this.model.ka, this.model, 1],
            [t, 0, 39, 3, a, this.model.ka, this.model, 1],
            [t, 0, 33, 3, null, this.model.la,
                this.model, -1
            ],
            [t, 0, 37, 3, b, this.model.la, this.model, -1],
            [t, 0, 38, 3, a, this.model.la, this.model, -1],
            [u, 0, h.ea, 3, null, this.model.la, this.model, -1],
            [t, 0, 34, 3, null, this.model.la, this.model, 1],
            [t, 0, 39, 3, b, this.model.la, this.model, 1],
            [t, 0, 40, 3, a, this.model.la, this.model, 1],
            [u, 0, h.aa, 3, null, this.model.la, this.model, 1],
            [u, 0, /[0-9]/, 3, function() {
                return 0 != h.N
            }, this.Wc, this],
            [t, 0, 13, null, e, this.Xb, this],
            [t, 0, 8, 1, null, this.Cc, this],
            [t, 0, 46, 1, null, this.model.Mf, this.model],
            [t, 0, 27, null, e, this.dc, this],
            [t, 0, 32,
                null, c, this.ob, this
            ],
            [t, 0, 40, null, c, this.ob, this],
            [t, 0, 37, 1, null, this.model.ra, this.model, -1],
            [t, 0, 39, 1, null, this.model.ra, this.model, 1],
            [t, 0, 36, 1, null, this.model.ra, this.model, -999],
            [t, 0, 35, 1, null, this.model.ra, this.model, 999],
            [t, 0, 36, 3, null, this.model.ka, this.model, -999],
            [t, 0, 35, 3, null, this.Nf, this]
        ]
    };
    x.Ca = function(a) {
        var b = String.fromCharCode(a.charCode);
        if (" " == b && (0 == this.model.status || !this.model.source)) return !1;
        this.model.Ea || (a.charCode = b.toLowerCase().charCodeAt(0));
        return Aw.prototype.Ca.call(this, a)
    };
    x.Pd = function(a) {
        return a.type != u || Bw(this) || a.ctrlKey || a.altKey || a.metaKey ? !1 : Uw(this.model, String.fromCharCode(a.charCode)) || Aw.prototype.Pd.call(this, a)
    };
    z(Zw, O);
    x = Zw.prototype;
    x.Eg = function(a) {
        this.D && this.D.code == a.C && (D(this.A), this.A = null, this.B = lt(this.D.code, this.C), a = this.B.F ? new Fw : new Ow, 0 == this.B.I ? this.A = new Dw(a, this.F, this.D, this.B) : 2 == this.B.I ? this.A = new Ww(a, this.F, this.D, this.B) : 1 == this.B.I && (this.A = new Lw(a, this.F, this.D, this.B)), this.A && this.A.ta(this), this.B.F && this.A && this.A.tc(), this.A && (this.G = this.A.Kc()))
    };
    x.handleEvent = function(a) {
        if (!(this.A && this.G && qw && this.D)) return !1;
        if (a.type == u) {
            if (this.I) return !0;
            if (void 0 === a.charCode || 0 >= a.charCode) return !1;
            if (K && !a.A.charCode)
                if (13 == a.keyCode) a.charCode = a.keyCode;
                else return !1
        }
        var b = this.A;
        var c = b.Pd(a);
        if (c) b = !0;
        else if (this.B.state & 1) {
            for (var d = 0, e; e = this.G[d]; d++)
                if (a.type == e[0]) {
                    var g = 0 < a.keyCode && a.keyCode === e[2],
                        h = 0 < a.charCode && String.fromCharCode(a.charCode).match(e[2]);
                    if (!e[2] || g || h) {
                        g = e[1];
                        if (typeof g === If) {
                            var k = 0;
                            a.shiftKey && (k += 16);
                            a.ctrlKey &&
                                (k += 17);
                            a.altKey && (k += 18);
                            a.metaKey && (k += 91);
                            if (g != k && (!h || 0 != k && 16 != k)) continue
                        }
                        if (!e[3] || b.model.status == e[3])
                            if (!e[4] || e[4]())
                                if (c = e[5].apply(e[6], void 0 != e[7] ? e.slice(7) : [a]), 0 != c) {
                                    c = !0;
                                    break
                                }
                    }
                } c || ((a.ctrlKey || a.altKey || a.metaKey) && 17 != a.keyCode && 18 != a.keyCode && 91 != a.keyCode ? (a.type != ne && b.model.reset(), c = !1) : c = b.A ? ww(b.A, a) : a.type == u || 9 == a.keyCode || 46 == a.keyCode || 8 == a.keyCode || 33 <= a.keyCode && 40 >= a.keyCode ? Bw(b) : !1);
            b = c
        } else b = !1;
        a.type == t && (this.I = b);
        return b
    };
    x.reset = function(a) {
        this.A && Bw(this.A) && (a && this.A.model.sa(-1), this.A.model.reset())
    };
    x.select = function() {
        this.A && Bw(this.A) && this.A.model.sa()
    };
    x.M = function() {
        D(this.A);
        D(this.H);
        O.prototype.M.call(this)
    };
    var Xw = Yw;
    Zw.prototype.A = null;
    Zw.prototype.G = null;
    Zw.prototype.I = !1;
    C($w, O);
    $w.prototype.M = function() {
        $w.da.M.call(this);
        this.D && (vm(this.D), this.D = null);
        this.A = this.B = null
    };
    $w.prototype.C = function() {
        var a = cn(this.B || window);
        Um(a, this.A) || (this.A = a, this.J("resize"))
    };
    z(ax, rv);
    ax.prototype.R = function() {
        this.target.style.display.toLowerCase() != Hf && cx(this)
    };
    ax.prototype.M = function() {
        D(this.U);
        rv.prototype.M.call(this)
    };
    z(ex, U);
    x = ex.prototype;
    x.$ = function() {
        U.prototype.$.call(this);
        var a = hn("A", {
                "class": "ita-kd-icon-button ita-kd-inputtool-icon ita-kd-mid ita-kd-small"
            }),
            b = hn(m, {
                "class": "ita-kd-img ita-kd-icon ita-kd-icon-span " + this.H + " ita-kd-statusbar-icon"
            });
        a.appendChild(b);
        this.D = a
    };
    x.Z = function() {
        U.prototype.Z.call(this);
        var a = this.L();
        this.C.listen(a, p, this.Of);
        this.C.listen(a, v, this.Rg);
        this.C.listen(a, df, this.Qg)
    };
    x.Rg = function() {
        var a = this.L();
        a.firstChild && (a.firstChild.style.opacity = "0.9")
    };
    x.Qg = function() {
        var a = this.L();
        a.firstChild && (a.firstChild.style.opacity = "")
    };
    x.Of = function() {
        this.J({
            type: "ecd",
            command: this.G
        })
    };
    x.M = function() {
        D(this.C);
        U.prototype.M.call(this)
    };
    z(gx, U);
    x = gx.prototype;
    x.ha = function(a) {
        U.prototype.ha.call(this, a);
        T(this.C, !0);
        us(this.L(), this.C);
        dx(this.C);
        vv(this.L());
        cx(this.I);
        cx(this.H)
    };
    x.$ = function() {
        U.prototype.$.call(this);
        var a = this.A,
            b = this.L();
        Gq(b, [Rd, "ita-kd-statusbar"]);
        var c = WA.length,
            d = Jn(a, c + 2);
        d.cellPadding = "0";
        d.cellSpacing = "0";
        d.border = "0";
        Eq(d, "ita-kd-statusbar-table");
        var e = d.rows[0].cells,
            g = a.O(m, "ita-kd-icon-span ita-kd-img ita-kd-floating-bar-icon");
        this.N = a.O("A", "ita-kd-icon-button ita-kd-left ita-kd-floating-bar", g);
        a.V(e[0], this.N);
        this.G = a.O("A", "ita-kd-icon-button ita-kd-small ita-kd-mid ita-kd-inputtool-icon", a.O(m));
        vo(this.G, {
            cursor: "move"
        });
        N && V(this.G,
            "ita-kd-ie");
        a.V(e[1], this.G);
        H(WA, function(h, k) {
            var l = fx(h);
            l.ha(e[k + 2]);
            this.K.listen(l, "ecd", this.yg);
            this.T[h] = l;
            k < c - 1 && (W(l.L(), "ita-kd-mid"), V(l.L(), "ita-kd-right"))
        }, this);
        a.V(b, d)
    };
    x.Z = function() {
        U.prototype.Z.call(this);
        this.I = new ax(this.C, this.G);
        this.H = new ax(this.C, this.N);
        var a = B(this.B.Bb, this.B, "bdc");
        this.K.listen(this.I, gh, a).listen(this.H, gh, a)
    };
    x.yg = function(a) {
        this.P = a.command;
        this.J(a)
    };
    x.M = function() {
        D(this.H);
        D(this.I);
        D(this.K);
        mk(this.T, D);
        U.prototype.M.call(this)
    };
    var WA = [Rh, bi, "pun"];
    z(kx, J);
    z(lx, xu);
    x = lx.prototype;
    x.Se = function(a) {
        this.active && Ft(this.D) && (Ks(a, "shift", Rh), Ks(a, "shift+space", bi), Ks(a, "ctrl+.", "pun"))
    };
    x.pf = function(a) {
        Ls(a, "shift", Rh);
        Ls(a, "shift+space", bi);
        Ls(a, "ctrl+.", "pun")
    };
    x.Lg = function(a) {
        var b = [a.command];
        Xj(b, a.var_args);
        this.Kb.apply(this, b)
    };
    x.Ig = function(a) {
        var b = 0,
            c = "";
        if (this.A && this.active) {
            switch (a.type) {
                case "opn":
                    this.C.J("se");
                    if (iq === qb && (a = this.A.D) && a.tagName == f) return;
                    b = 1;
                    break;
                case "cmts":
                    b = 1;
                    break;
                case "cmte":
                    c = a.data;
                    b = 3;
                    break;
                case "cls":
                    yp.pa().J(Tc), b = 3
            }
            b && this.Re != b && (this.A.pb(b, c), this.Re = b)
        }
    };
    x.Lb = function(a) {
        return !!a && F(this.S, a)
    };
    x.Ub = function(a) {
        return !!a && "im" == a.type
    };
    x.jb = function() {
        return this.H
    };
    x.register = function(a) {
        xu.prototype.register.call(this, a);
        this.G.push(a);
        this.Se(a)
    };
    x.unregister = function(a) {
        xu.prototype.unregister.call(this, a);
        this.B.reset();
        Uj(this.G, a);
        this.pf(a)
    };
    x.Mc = function(a) {
        if (!a || !this.active || Zr(a)) return !1;
        this.A && (qw = this.A);
        var b = lt(this.D ? this.D.code : "", this.B.C);
        return a.type == $r ? (X && !b.D && b.F && H(a.A.data, function(c) {
            if (" " == c || "\n" == c) a.keyCode = a.charCode = c.charCodeAt(0), a.type = t, this.B.handleEvent(a), a.type = u, this.B.handleEvent(a), a.type = ne, this.B.handleEvent(a)
        }, this), !1) : X && !b.D && b.F && /^key/.test(a.type) ? 32 != a.keyCode && 10 != a.keyCode ? this.B.handleEvent(a) : !1 : this.B.handleEvent(a)
    };
    x.qc = function(a, b) {
        xu.prototype.qc.call(this, a, b);
        this.active && this.Fa && Ft(this.D) && px(this, b.C);
        return !1
    };
    x.Kb = function(a, b, c, d) {
        switch (a) {
            case nb:
                (a = d) && void 0 !== a.ss && (az = a.ss);
                b = this.D;
                if (!b || !this.Ub(b)) {
                    this.Fa && ix(this.Fa, null, !1, null);
                    break
                }
                this.active && (this.B.D = b, jt(b.code));
                X || (this.Fa || (this.Fa = new gx, this.Fa.ha(), this.F.listen(this.Fa, "ecd", this.Lg)), a && void 0 != a.tlang ? nx(this, a) : this.active && (a = mx(this), ox(this, b, a)), ix(this.Fa, b, az && this.active, a), H(this.G, this.active && Ft(b) ? this.Se : this.pf, this));
                break;
            case bi:
            case Rh:
            case "pun":
                px(this, a);
                break;
            case "cm":
                this.B.select();
                break;
            case Tc:
            case mb:
                this.B.reset();
                this.D && lt(this.D.code, this.B.C).B && (b = this.B, a = qx(), b.A && b.A.view && (b = b.A.view, b.C && (b.C.style.cssText = bl(a), b.C.style.display = Hf)));
                break;
            case "lc":
                ht(b)
        }
    };
    x.M = function() {
        D(this.F);
        D(this.B);
        D(this.Fa);
        xu.prototype.M.call(this)
    };
    x.Fa = null;
    x.Re = 0;
    z(rx, J);
    z(sx, O);
    sx.prototype.P = function(a, b, c) {
        b ? c && 1 < c.length ? (this.N.set("pre", a), a = c[1][0], this.A = a[0], a = cl(a[1].slice(0, this.U), function(d) {
            return Il(d)
        }), 0 < a.length && this.J(new rx(a))) : this.A = "" : (this.A = "", this.J(new J("m")));
        this.K = !1;
        this.G && (tx(this, this.G), this.G = null)
    };
    sx.prototype.X = function(a, b) {
        a && b[1] && (this.N.set("pre", 1), a = cl(b[1][0][1].slice(0, 10), function(c) {
            return " " + Il(c)
        }), 0 < a.length && this.J(new rx(a, !0)))
    };
    sx.prototype.abort = function() {
        this.A = "";
        this.H.abort(null)
    };
    sx.prototype.M = function() {
        D(this.H);
        this.D = [];
        O.prototype.M.call(this)
    };
    z(xx, J);
    C(yx, E);
    yx.prototype.M = function() {
        mk(this.B, this.A.Va, this.A);
        this.A = this.B = null;
        yx.da.M.call(this)
    };
    z(Ax, U);
    x = Ax.prototype;
    x.$ = function() {
        U.prototype.$.call(this);
        var a = this.A,
            b = a.O(f);
        V(b, "ita-hwt-candidate");
        this.D = b;
        0 == this.B.lastIndexOf(" ", 0) ? a.ia(b, hn(m, {
            style: "color:#bbb;"
        }, "\u23b5"), In(a, this.B)) : a.ai(b, this.B)
    };
    x.Z = function() {
        U.prototype.Z.call(this);
        this.G.listen(this.L(), p, this.Pf).listen(this.L(), v, this.Qf)
    };
    x.Pf = function() {
        this.C && this.J(new xx(this.B))
    };
    x.M = function() {
        D(this.G);
        U.prototype.M.call(this)
    };
    x.Qf = function() {
        zx(this.H, this.B, Qa)
    };
    z(Cx, Y);
    x = Cx.prototype;
    x.$ = function() {
        Y.prototype.$.call(this);
        this.D = this.A.O(f, "ita-hwt-candidates")
    };
    x.Z = function() {
        ew(this)
    };
    x.Fh = function(a) {
        this.G && (Dx(this), Bx(a), this.C = Rj(this.B, a), this.H = Lg)
    };
    x.Eh = function() {
        this.G && (Dx(this), this.I && 0 < this.B.length && Bx(this.B[0]), this.C = 0, this.H = "auto")
    };
    x.update = function(a, b) {
        this.N = a;
        this.clear();
        for (a = 0; a < this.N.length; a++) {
            var c = new Ax(this.N[a], this.A, this);
            c.ha(this.L());
            Tj(this.B, c)
        }
        for (a = 0; a < this.B.length; a++) c = this.B[a], this.K.listen(c.L(), v, B(this.Fh, this, c)), this.K.listen(c.L(), df, this.Eh);
        b && 0 < this.B.length && Bx(this.B[0]);
        this.C = 0;
        this.H = "auto";
        this.I = b
    };
    x.clear = function() {
        Jj(this.B);
        this.B = [];
        this.K.removeAll()
    };
    x.isEnabled = function() {
        return this.G
    };
    x.M = function() {
        D(this.K);
        Y.prototype.M.call(this)
    };
    z(Hx, J);
    var Ox = {
        "": ",.?!:'\";@".split(""),
        es: ",.\u00bf?\u00a1!:'\"".split(""),
        ja: "\uff0c\u3002\uff1f\uff01\uff1a\u300c\u300d\uff1b".split(""),
        "zh-Hans": "\uff0c\u3002\uff1f\uff01\uff1a\u201c\u201d\uff1b".split(""),
        "zh-Hant": "\uff0c\u3002\uff1f\uff01\uff1a\u300c\u300d\uff1b".split("")
    };
    z(Jx, O);
    x = Jx.prototype;
    x.le = function(a) {
        this.A = !0;
        this.J(new Hx("q", Kx(this, a)));
        a.preventDefault()
    };
    x.kd = function(a) {
        this.A && (this.A = !1, this.J(new Hx("p", Kx(this, a))), a.preventDefault())
    };
    x.me = function(a) {
        this.A && this.J(new Hx("o", Kx(this, a)));
        a.preventDefault()
    };
    x.reset = function() {
        this.A = !1
    };
    x.M = function() {
        D(this.B)
    };
    z(Lx, Y);
    x = Lx.prototype;
    x.$ = function() {
        Y.prototype.$.call(this);
        var a = this.A;
        this.B = a.O("CANVAS", "ita-hwt-canvas");
        this.B.style.width = "425px";
        this.B.width = 425 * this.G;
        this.B.style.height = "194px";
        this.B.height = 194 * this.G;
        a.V(this.L(), this.B);
        this.C = this.B.getContext("2d")
    };
    x.Z = function() {
        Y.prototype.Z.call(this);
        ew(this);
        this.H = new Jx(this.B, this.aa);
        this.R.listen(this.H, "q", this.Tf).listen(this.H, "o", this.Uf).listen(this.H, "p", this.Sf).listen(this.B, v, this.Rf).listen(this.B, bf, Xl)
    };
    x.Tf = function(a) {
        this.I = [];
        0 == this.K.length && (this.Y = a.C.time);
        Mx(this, a.C);
        a.preventDefault();
        this.N && (fn(this.aa).cancelAnimationFrame(this.N), this.N = 0, this.C.globalAlpha = 1, this.C.globalCompositeOperation = "source-over");
        V(this.L(), Fd)
    };
    x.Uf = function(a) {
        Mx(this, a.C);
        a.preventDefault()
    };
    x.Sf = function(a) {
        this.K.push(this.I);
        a.preventDefault();
        this.J(new J("i"))
    };
    x.reset = function() {
        this.C.clearRect(0, 0, this.B.width, this.B.height);
        this.K = [];
        this.I = [];
        this.H.reset()
    };
    x.M = function() {
        D(this.R);
        Y.prototype.M.call(this)
    };
    x.setSize = function(a, b) {
        var c = a && a !== this.B.height / this.G,
            d = b && b !== this.B.width / this.G;
        if (c || d) this.reset(), c && (this.B.style.height = a + sg, this.B.height = a * this.G), d && (this.B.style.width = b + sg, this.B.width = b * this.G)
    };
    x.Rf = function() {
        zx(this.ea, "panel", Qa)
    };
    z(Px, Y);
    x = Px.prototype;
    x.$ = function() {
        Y.prototype.$.call(this);
        var a = this.A,
            b = this.L();
        this.G = new Lx(this.Lc(), a, this);
        this.G.ha(b);
        this.B = new Cx(a, this);
        this.B.ha(b);
        this.B.update(this.N, !1);
        this.ea.set("pre", 2)
    };
    x.Z = function() {
        Y.prototype.Z.call(this);
        ew(this);
        this.ga.listen(this.G.H, "q", this.Od)
    };
    x.Od = function() {
        Ex(this.B, !1)
    };
    x.reset = function() {
        this.G.reset();
        this.B.update(this.N, !1);
        this.ea.set("pre", 2)
    };
    x.Lc = function() {
        return document
    };
    x.hb = function() {
        return this.L()
    };
    x.Td = function(a, b) {
        0 != a.length && (Ex(this.B, !1), this.B.update(a, b), Ex(this.B, !this.G.H.A))
    };
    x.M = function() {
        D(this.ga);
        Y.prototype.M.call(this)
    };
    x.ne = function() {};
    z(Qx, O);
    x = Qx.prototype;
    x.Sd = function(a) {
        this.view = a;
        this.ga.listen(this.view, "l", this.Uc).listen(this.view, "a", this.Te).listen(this.view, "f", this.Tc).listen(this.view, "i", this.Ih).listen(this.view, "h", this.Vf).listen(this.view, "b", this.hh).listen(this.B, "n", this.Jh)
    };
    x.qb = function(a) {
        this.A = a
    };
    x.hh = function() {
        this.ec()
    };
    x.Uc = function() {
        this.A && (this.view.B.I ? this.ec() : Sx(this, " "))
    };
    x.Te = function() {
        Nx(this.view.G) ? this.F ? this.reset() : (Sx(this, "", 1), this.D ? this.D.start(75) : (this.D = new fs(this.Te, 300, this), this.D.start())) : ("" != this.B.A && vx(this.B), this.reset())
    };
    x.Vf = function() {
        this.D && (this.D.ca(), this.D = null)
    };
    x.Tc = function(a, b) {
        a = !1;
        this.A && (this.view.B.I ? (this.ec(), a = !0) : b || (Sx(this, "\n"), b = this.A.D, as(b, t, 13), as(b, u, 13), as(b, ne, 13)));
        return a
    };
    x.Jh = function(a) {
        this.view.Td(a.C, !0);
        this.J(new J("k"));
        this.F = a.H
    };
    x.Ih = function() {
        Rx(this)
    };
    x.ec = function() {
        if (this.A) {
            var a = this.view.B;
            var b = new Fx(a.N[a.C], a.H);
            Sx(this, b.text);
            a = this.B;
            var c = b.text;
            b = b.state;
            c && b && "" != a.A && a.D.push({
                feedback: c,
                select_type: b,
                language: a.F,
                ink_hash: a.A
            });
            this.H.push("ci", this.view.B.C);
            this.H.report();
            this.reset()
        }
    };
    x.reset = function() {
        this.F = !1;
        this.B.abort();
        this.view.reset();
        this.J(new J("j"))
    };
    x.md = function(a) {
        var b = this.B;
        b.C.itc = a;
        b.I = b.B[a]
    };
    x.handleEvent = function(a) {
        var b = !1;
        if (this.view.fa) return !1;
        if (a.type == t) {
            if (8 == a.keyCode || 27 == a.keyCode) Nx(this.view.G) || ("" != this.B.A && vx(this.B), this.reset(), b = !0);
            else if (37 == a.keyCode || 39 == a.keyCode) {
                b = this.view;
                var c = 37 == a.keyCode;
                if (b.B.isEnabled() && b.B.I) {
                    a = b.B;
                    if (a.G) {
                        a.C = c ? Math.max(a.C - 1, 0) : Math.min(a.C + 1, a.B.length - 1);
                        b = a.P;
                        c = a.B[a.C].L();
                        if (HA && null !== c && "innerText" in c) c = c.innerText.replace(/(\r\n|\r|\n)/g, "\n");
                        else {
                            var d = [];
                            Bn(c, d, !0);
                            c = d.join("")
                        }
                        c = c.replace(/ \xAD /g, " ").replace(/\xAD/g,
                            "");
                        c = c.replace(/\u200B/g, "");
                        HA || (c = c.replace(/ +/g, " "));
                        " " != c && (c = c.replace(/^\s*/, ""));
                        zx(b, c, Qa);
                        Dx(a);
                        Bx(a.B[a.C]);
                        a.H = Lg
                    }
                    b = !0
                } else b = !1
            } else 13 == a.keyCode ? b = this.Tc(a, !0) : 32 == a.keyCode && (this.Uc(a), b = !0);
            return this.G = b
        }
        return a.type == ne ? this.G = !1 : a.type == u ? this.G : !1
    };
    x.ld = function() {
        this.C || (this.C = !0, this.view.ha())
    };
    x.M = function() {
        D(this.D);
        D(this.ga);
        D(this.view);
        O.prototype.M.call(this)
    };
    z(Tx, Y);
    x = Tx.prototype;
    x.$ = function() {
        var a = this.A,
            b = a.O(f, "ita-hwt-buttons");
        this.D = b;
        var c = a.O(f, ["ita-hwt-backspace-img", Qd]);
        this.G = a.O(f, [Bd, Hd, Kd, "ita-hwt-backspace"]);
        a.V(this.G, c);
        a.V(b, this.G);
        this.C = a.O(f, [Bd, Hd, Kd, "ita-hwt-space"]);
        a.V(b, this.C);
        this.H = a.O(f, ["ita-hwt-enter-img", "ita-hwt-enter-img-dark", Qd]);
        this.B = a.O(f, [Bd, Hd, Kd, "ita-hwt-enter"]);
        a.V(this.B, this.H);
        a.V(b, this.B)
    };
    x.Z = function() {
        ew(this);
        var a = [v, df];
        this.K.listen(this.C, p, this.Lh).listen(this.C, a, this.Nd).listen(this.B, p, this.nh).listen(this.B, a, this.Nd).listen(this.G, bf, this.gh).listen(this.G, a, this.Nd).listen(this.C, v, this.nd).listen(this.B, v, this.nd).listen(this.G, v, this.nd)
    };
    x.Nd = function(a) {
        a.target && (a.type == v ? V(a.target, Jd) : W(a.target, Jd))
    };
    x.Lh = function() {
        this.enable && this.J(new J("l"))
    };
    x.gh = function() {
        this.enable && this.J(new J("a"))
    };
    x.nh = function() {
        this.enable && this.J(new J("f"))
    };
    x.M = function() {
        D(this.K);
        this.A.Va(this.C);
        this.A.Va(this.B);
        this.A.Va(this.G)
    };
    x.nd = function(a) {
        a.target == this.C ? zx(this.I, "Space", Qa) : a.target == this.B ? zx(this.I, "Enter", Qa) : a.target == this.G && zx(this.I, "Delete", Qa)
    };
    z(Vx, Px);
    x = Vx.prototype;
    x.ha = function(a) {
        Px.prototype.ha.call(this, a);
        T(this.C, !0);
        us(this.L(), this.C);
        Xx(this)
    };
    x.$ = function() {
        Px.prototype.$.call(this);
        var a = this.A,
            b = this.L(),
            c = No(Q(this.C).body);
        Gq(b, ["ita-hwt-ime", c ? "ita-hwt-rtl" : "ita-hwt-ltr", "notranslate"]);
        this.aa = a.O(f, "ita-hwt-butterbar", ra);
        b.appendChild(this.aa);
        this.R && (V(b, "ita-hwt-ime-st"), this.K = a.O(f, "ita-kd-img ita-hwt-close"), b.appendChild(this.K), this.I = a.O(f, "ita-kd-img ita-hwt-grip"), b.appendChild(this.I));
        this.H = new Tx(this.A, this);
        this.H.ha(b);
        vv(b)
    };
    x.Z = function() {
        Px.prototype.Z.call(this);
        this.R && (this.ba = new ax(this.hb(), this.I), this.ga.listen(this.ba, gh, this.lh).listen(this.ba, "end", this.kh));
        ew(this);
        var a = [v, df, Uh],
            b = this.L();
        this.ga.listen(b, a, this.Dh).listen(b, bf, Xl);
        this.R && this.ga.listen(this.K, p, this.jh).listen(this.I, Kb, this.Bh).listen(this.I, a, B(this.pg, this, this.I, "ita-hwt-grip-hover"));
        Ix(this.ga, this.Lc(), B(this.Wf, this));
        this.ga.listen(this.G.H, "p", this.Xf);
        this.ga.listen(this.K, v, this.pe).listen(this.I, v, this.pe)
    };
    x.Od = function() {
        Px.prototype.Od.call(this);
        this.H.enable = !1
    };
    x.Xf = function() {
        this.H.enable = !0
    };
    x.Lc = function() {
        return Q(this.hb())
    };
    x.hb = function() {
        return this.C
    };
    x.lh = function() {
        V(this.L(), Gd);
        cx(this.ba)
    };
    x.kh = function() {
        this.oa = Co(this.hb());
        W(this.L(), Gd)
    };
    x.Td = function(a, b) {
        Px.prototype.Td.call(this, a, b);
        Ux(this.H, !0)
    };
    x.na = function(a) {
        var b = Px.prototype.na.call(this, a);
        T(this.C, a);
        a && this.ba && cx(this.ba);
        a ? (V(this.L(), Fd), this.J("sp")) : this.J("hp");
        return b
    };
    x.Bh = function() {
        this.ba.setEnabled(this.P);
        if (this.P = !this.P) {
            this.oa = Co(this.hb());
            V(this.L(), Ed);
            var a = Hn(R(this.C)).width;
            this.C.style.width = Ao(a, !0);
            this.C.style.left = this.C.style.right = ""
        } else W(this.L(), Ed), us(this.L(), this.C), Xx(this, this.oa);
        a = Ko(this.L()).width;
        130 < a && (this.H.C.style.width = a - 130 + sg);
        this.G.setSize(void 0, a);
        this.reset()
    };
    x.reset = function() {
        Px.prototype.reset.call(this);
        Ux(this.H, !1)
    };
    x.jh = function() {
        this.na(!1);
        this.reset();
        this.J(new J("g"))
    };
    x.Wf = function() {
        this.J(new J("h"))
    };
    x.M = function() {
        D(this.ba);
        this.A.Va(this.hb());
        Px.prototype.M.call(this)
    };
    x.pg = function(a, b, c) {
        c.type == v || c.type == Uh ? V(a, b) : W(a, b)
    };
    x.ne = function(a) {
        yn(this.H.C, a)
    };
    x.Dh = function(a) {
        this.fa = a.type == df
    };
    x.pe = function(a) {
        a.target == this.K ? zx(this.T, "Close", Qa) : a.target == this.I && zx(this.T, "Grip", Qa)
    };
    z(Zx, Qx);
    x = Zx.prototype;
    x.Sd = function(a) {
        Qx.prototype.Sd.call(this, a);
        this.view = a
    };
    x.Zg = function(a) {
        27 == a.keyCode && this.A && this.handleEvent(a) && (a.stopPropagation(), a.preventDefault())
    };
    x.qb = function(a) {
        Qx.prototype.qb.call(this, a);
        a = this.view;
        a.Y && (W(a.aa, "shown"), a.Y = !1)
    };
    x.Uc = function(a) {
        Qx.prototype.Uc.call(this, a);
        this.A || Yx(this.view)
    };
    x.Tc = function(a, b) {
        a = Qx.prototype.Tc.call(this, a, b);
        this.A || Yx(this.view);
        return a
    };
    x.ec = function() {
        Qx.prototype.ec.call(this);
        if (this.A) {
            var a = this.A.Ba(20),
                b = this.B;
            a && b.I && b.R.send("/predict", wx(b, {
                predict: !0,
                itc: b.I,
                pre_context: a,
                max_num_results: 10
            }), b.X, b)
        } else Yx(this.view)
    };
    x.ld = function() {
        Qx.prototype.ld.call(this);
        this.C || Ix(this.ga, this.view.Lc(), B(this.Zg, this))
    };
    x.md = function(a) {
        Qx.prototype.md.call(this, a);
        this.B.C.app = iq
    };
    z(ay, xu);
    x = ay.prototype;
    x.rh = function(a) {
        this.C.J(a)
    };
    x.jb = function() {
        return [t, ne, u]
    };
    x.Mc = function(a) {
        this.B.qb(this.A);
        return Yr(a) ? !1 : this.B.handleEvent(a)
    };
    x.Lb = function(a) {
        return !!a && F([nb, "cd", mb, "re"], a)
    };
    x.register = function(a) {
        xu.prototype.register.call(this, a);
        this.B.qb(this.A)
    };
    x.unregister = function(a) {
        xu.prototype.unregister.call(this, a);
        this.B.qb(this.A)
    };
    x.Ub = function(a) {
        return null != a && "hw" == a.type
    };
    x.M = function() {
        D(this.B);
        D(this.F)
    };
    x.Kb = function(a, b, c, d) {
        a == nb ? (b = this.D, this.B.qb(this.A), this.active ? (this.B.qb(this.A), $x(this.B, !0), this.B.md(b.code), c = this.B, d = b.A, (a = Ox[d]) || (a = Ox[""]), c.view.N != a && (c.I = d, c.view.N = a, c.reset()), c.B.F = "und" == d ? "universal" : d, c = this.B, c.view.ne(JA[b.code]), c.reset()) : $x(this.B, !1)) : a == mb ? this.B.qb(this.A) : "re" == a && b && (a = this.B.view, a.hb() && (b.Ga(a.hb(), c, d), a.isVisible() && cx(a.ba)))
    };
    x.th = function() {
        this.A && this.A.pb(4)
    };
    x.sh = function(a) {
        this.A && this.A.pb(6, a.data)
    };
    x.ih = function() {
        this.C.J("se")
    };
    x.Kh = function() {
        this.C.J(Tc)
    };
    var Vy = {
            de: vk(["Y", 90, "Z", 89, "\u00dc", 192, "\u00db", 189, "\u00dd", 187, "\u00ba", 219, "\u00bb", 221, "\u00bf", 220, "\u00cc", 186, "\u00bd", 191]),
            fr: vk(["Q", 65, "A", 81, "Z", 87, "W", 90, "\u00dd", 219, "\u00ba", 221, "M", 186, "\u00c0", 222, "\u00de", 192, "\u00bc", 77, "\u00be", 188, "\u00bf", 190, "\u00df", 191, "\u00db", 189])
        },
        Uy = {
            59: 186,
            61: 187,
            173: 189
        },
        Ry = {
            126: 192,
            95: 189,
            124: 220,
            58: 186,
            60: 188,
            62: 190,
            63: 191
        };
    z(by, J);
    ey.prototype.transform = function(a, b, c) {
        if (!this.A) return null;
        a = 0 < b ? a.slice(0, b) + "\u001d" + a.slice(b) + c : a + c;
        if (b = this.A[0].exec(a)) {
            for (var d = this.A[1], e = 1; e < b.length && !b[e]; e++);
            b = d[e][0];
            d = d[e][1];
            e = b.exec(a);
            var g = a.slice(e.index),
                h = -1 < g.search("\u001d") ? 1 : 0;
            c = g.length - h - c.length;
            a = a.replace(b, d).slice(e.index);
            a = a.replace("\u001d", "");
            return {
                back: c,
                Xa: a
            }
        }
        return null
    };
    z(ky, O);
    ky.prototype.I = function(a) {
        if ("hangul" == a.id) this.C("ko");
        else {
            var b = new dy(a);
            b.id && (this.B[b.id] = b);
            var c = new gy(a);
            c.id && (this.G[c.id] = c);
            this.A == a.id && (ny(this, this.A), this.A = "");
            this.J(new by("lld", b.view))
        }
    };
    ky.prototype.C = function(a) {
        var b = kn(document, ya);
        a = Rk(this.H, Object.assign({}, this.K, {
            file: a + ".js"
        }));
        b.src = Nk(a);
        xl(b);
        document.body.appendChild(b)
    };
    ky.prototype.M = function() {
        O.prototype.M.call(this);
        Uj(jy, this.F)
    };
    var jy = [];
    Gj("google.elements.keyboard.loadme", function() {
        var a = Wj(arguments);
        H(jy, function(b) {
            b.apply(void 0, a)
        })
    });
    z(qy, Y);
    x = qy.prototype;
    x.ha = function(a) {
        Y.prototype.ha.call(this, a);
        this.P && (T(this.N, !0), us(this.L(), this.N));
        ty(this)
    };
    x.$ = function() {
        Y.prototype.$.call(this);
        var a = this.A,
            b = this.L();
        b.id = "kbd";
        V(b, "notranslate");
        V(b, "vk-box");
        vv(b);
        N && V(b, "vk-sf-ie");
        this.eh && V(b, "vk-sf-ff2");
        iq == ai && vo(b, "z-index", 2E4);
        var c = Ey(this);
        a.V(b, c);
        this.B.Cb && (this.rb = Gy(this), a.V(b, this.rb), T(this.rb, this.H));
        var d = this.B.rc;
        c = [14, 14, d ? 14 : 13, d ? 13 : 12, 3];
        d = d ? "\u00c01234567890\u00bd\u00bb\b\tQWERTYUIOP\u00db\u00dd\r\u0014ASDFGHJKL\u00ba\u00de\u00dc\r\u0010\u00e2ZXCVBNM\u00bc\u00be\u00bf\u0010\u0111 \u0111" : "\u00c01234567890\u00bd\u00bb\b\tQWERTYUIOP\u00db\u00dd\u00dc\u0014ASDFGHJKL\u00ba\u00de\r\u0010ZXCVBNM\u00bc\u00be\u00bf\u0010\u0111 \u0111";
        var e = 0,
            g = this.A.O(f);
        g.dir = g.style.direction = Me;
        for (var h = 0; 5 > h; ++h) {
            var k = this.A.O(f);
            k.style.whiteSpace = "nowrap";
            for (var l = 0; l < c[h]; ++l) {
                var n = d.charCodeAt(e++);
                n = Fy(this, n);
                this.A.V(k, n)
            }
            this.A.V(g, k)
        }
        this.T = g;
        a.V(b, this.T);
        T(this.T, !this.H);
        this.Ce && (b.style.position = Da, b.style.width = "1px");
        this.kc && (b.style.height = "201px", b.style.bottom = "10px", b.style.zIndex = "20001")
    };
    x.Z = function() {
        Y.prototype.Z.call(this);
        wy || Ay(this);
        ew(this);
        this.ba = new ax(this.P ? this.N : this.L(), this.I);
        this.C.listen(this.ba, gh, function() {
            this.Nc = !0;
            cx(this.ba)
        });
        var a = [bf, v, df],
            b = this.A.A;
        this.P && (b = Q(this.N));
        var c = B(this.Md, this, null);
        this.C.listen(b, ef, c);
        H(ps(b), function(h) {
            this.C.listen(h, ef, c)
        }, this);
        this.Y && (this.C.listen(this.fa, p, this.bf), this.C.listen(this.Y, p, this.bf));
        this.B.Cb && mk(this.R, function(h, k) {
                this.C.listen(h, p, B(this.Ue, this, k));
                this.C.listen(h, a, B(this.Md, this, h))
            },
            this);
        for (var d in this.G) {
            b = this.G[Number(d)];
            d = parseInt(d, 10);
            xj(b) || (b = [b]);
            for (var e = 0, g = void 0; g = b[e]; ++e) this.C.listen(g, p, B(this.Ue, this, d)), this.Ce || this.C.listen(g, a, B(this.Md, this, g))
        }
        d = [this.aa, this.oa];
        for (b = 0; b < d.length; b++) d[b] && this.C.listen(d[b], p, this.Qh);
        d.push(this.Pb);
        for (b = 0; b < d.length; b++) d[b] && this.C.listen(d[b], a, this.Rh);
        this.C.listen(this.L(), bf, Xl)
    };
    x.ib = function() {
        Y.prototype.ib.call(this);
        this.C.removeAll()
    };
    x.Ue = function(a) {
        this.J(new J(Fa, {
            keyCode: a
        }))
    };
    x.Md = function(a, b) {
        var c = !1,
            d = !1;
        a && (c = Fq(a, "vk-sf-a"), d = Fq(a, "vk-sf-s"));
        switch (b.type) {
            case v:
                this.K = a;
                c || d || (ns(a, [Ai, Bi]), V(a.firstChild, Bi));
                break;
            case df:
                this.K = null;
                c || d || (Eq(a, Ai), W(a.firstChild, Bi));
                break;
            case bf:
                d || (ns(a, [Ai, "vk-sf-a"]), this.ea = a);
                break;
            case ef:
                this.ea && (Eq(this.ea, Ai), W(this.ea.firstChild, Bi), this.ea = null), this.K && (ns(this.K, [Ai, Bi]), V(this.K.firstChild, Bi))
        }
    };
    x.Rh = function(a) {
        if (a.type == v || a.type == df) {
            var b = null,
                c = [this.aa, this.oa, this.Pb];
            F(c, a.target) ? b = a.target.firstChild : F(c, a.target.parentElement) && (b = a.target);
            if (b) switch (a.type) {
                case v:
                    V(b, "vk-sf-th");
                    break;
                case df:
                    W(b, "vk-sf-th")
            }
        }
    };
    x.Qh = function(a) {
        switch (a.target) {
            case this.aa:
            case this.aa.firstChild:
                this.J("kc");
                break;
            case this.oa:
            case this.oa.firstChild:
                this.J("kmi")
        }
    };
    x.bf = function(a) {
        this.H = this.T.style.display != Hf;
        T(this.rb, this.H);
        T(this.T, !this.H);
        Iq(this.H ? this.fa : this.Y, "vk-l-i", "vk-l-a");
        Iq(this.H ? this.Y : this.fa, "vk-l-a", "vk-l-i");
        a.preventDefault()
    };
    x.na = function(a) {
        var b = Y.prototype.na.call(this, a, !0);
        this.P && T(this.N, a);
        a && this.ba && cx(this.ba);
        return b
    };
    x.Oc = function() {
        return this.B.Oc
    };
    x.M = function() {
        D(this.C);
        D(this.ba);
        Y.prototype.M.call(this);
        this.P && on(this.N)
    };
    x.enable = function() {
        H(fk(nk(this.G)), function(a) {
            a.removeAttribute(Tb)
        }, this)
    };
    x.disable = function() {
        H(fk(nk(this.G)), function(a) {
            a.setAttribute(Tb, "true")
        }, this)
    };
    var Hy = {
        8: "vk-sf-c8",
        16: "vk-sf-c16",
        20: "vk-sf-c20"
    };
    z(Jy, O);
    x = Jy.prototype;
    x.handleEvent = function(a) {
        if (!this.I || !this.A) return !1;
        var b = !1;
        switch (a.type) {
            case t:
                b = Qy(this, a);
                break;
            case u:
                b = Sy(this, a);
                break;
            case ne:
                a = Ny(a.keyCode);
                b = this.B;
                var c = this.F;
                20 == a && Yl && S ? (b &= -9, c &= -9) : 16 == a ? (b &= -258, c &= -258) : 18 == a ? (b &= -515, c &= -515) : 17 == a ? (b &= -517, c &= -517) : 91 == a && (b &= -17, c &= -17);
                this.B != b && (this.B = b, yy(this.A, Ly(this.B)));
                this.F != c && (this.F = c, vy(this.A, Ly(this.F)));
                b = this.D[a];
                delete this.D[a]
        }
        return b
    };
    x.focus = function() {
        this.A && this.A.enable()
    };
    x.vh = function() {
        My(this, !1)
    };
    x.uh = function(a) {
        if (this.A) {
            this.G && this.G.wc();
            var b = a.target.keyCode;
            if (b) {
                switch (b) {
                    case 16:
                        this.B & 1 && (this.B |= 256, this.B &= -2);
                        this.B ^= 256;
                        yy(this.A, Ly(this.B));
                        break;
                    case 273:
                        this.B & 2 && this.B & 4 && (this.B |= 512, this.B &= -7);
                        this.B ^= 512;
                        yy(this.A, Ly(this.B));
                        break;
                    case 20:
                        this.B ^= 8;
                        yy(this.A, Ly(this.B));
                        break;
                    default:
                        Py(this, b, a.target.charCode, !0)
                }
                this.C.Bb("kcc")
            }
        }
    };
    x.zh = function(a) {
        var b = a.C;
        b.title = this.ea[b.id] || b.title;
        a = this.R;
        var c = this.X,
            d = this.P;
        this.P = this.X = this.R = null;
        var e = !1,
            g = null;
        this.A && (this.U = this.A.isVisible(), e = this.A.Nc, this.A.isVisible() && e && (g = this.A, g = Co(g.P ? g.N : g.L())), this.A.ca(), this.C.set(Ea, "sw"), this.C.report());
        this.C.Rd("lay", b.id);
        this.C.Xc("vkd_" + b.id);
        this.A = new qy(b, this.T, this.Jd, this.oa);
        this.A.ta(this);
        this.A.ha();
        this.A.Nc = e;
        this.A.na(this.U);
        g ? ty(this.A, g) : a && null != c ? (b = this.A, b.L() && (a.Ga(b.L(), c, d), b.isVisible() && cx(b.ba)),
            this.A.Nc = !0) : ty(this.A);
        yy(this.A, Ly(this.B));
        vy(this.A, Ly(this.F));
        this.N.listen(this.A, Fa, this.uh).listen(this.A, ["kc", "kmi"], this.vh)
    };
    x.M = function() {
        D(this.A);
        D(this.H);
        D(this.C);
        D(this.N);
        O.prototype.M.call(this)
    };
    var Iy = Yw;
    z(Wy, xu);
    x = Wy.prototype;
    x.Lb = function(a) {
        return !!a && F([nb, mb, "cd", "sk", "mk", "ll", "re"], a)
    };
    x.Ub = function(a) {
        return !!a && a.type == Ci
    };
    x.Mg = function(a) {
        (a && 16 == a.keyCode || 17 == a.keyCode || 18 == a.keyCode || 20 == a.keyCode) && this.B.handleEvent(a) && (a.stopPropagation(), a.preventDefault())
    };
    x.register = function(a) {
        xu.prototype.register.call(this, a);
        a && (this.A = a, this.B.G = a)
    };
    x.jb = function() {
        return this.G
    };
    x.Mc = function(a) {
        if (Zr(a)) return !1;
        this.B.G = this.A;
        return this.B.handleEvent(a)
    };
    x.Kb = function(a, b, c, d) {
        switch (a) {
            case nb:
                (b = this.D) && b.Ua ? (c = this.B, c.aa = !1, c.Y = !1, c = this.active && Xy, this.active && d && void 0 != d.mk && (c = !d.mk), Yy(this, c), Ky(this.B, this.active), ly(this.B.H, b.Ua), this.active && (d = this.B, c = b.Ua, (b = JA[b.code]) && (d.ea[c] = b), ny(d.H, c)), this.B.G = this.A) : (Ky(this.B, !1), My(this.B, !1));
                break;
            case mb:
                this.B.G = this.A;
                c ? this.B.focus() : (d = this.B, d.A && d.A.disable());
                break;
            case "sk":
                Yy(this, b);
                break;
            case "mk":
                this.active && (Ky(this.B, this.active), Yy(this, !b));
                break;
            case "re":
                b && (a =
                    this.B, a.A ? (a = a.A, a.L() && (b.Ga(a.L(), c, d), a.isVisible() && cx(a.ba))) : (a.R = b, a.X = c, a.P = d || new ro(0, 0, 0, 0)));
                break;
            case "ll":
                ly(this.B.H, b)
        }
    };
    x.Yf = function(a) {
        this.C.J(a)
    };
    x.xh = function() {
        this.A && this.A.pb(2)
    };
    x.wh = function(a) {
        this.A && this.A.pb(5, a.data)
    };
    x.M = function() {
        D(this.F);
        D(this.B);
        xu.prototype.M.call(this)
    };
    z($y, J);
    z(hz, O);
    x = hz.prototype;
    x.handleEvent = function(a, b) {
        (a = this.F[Bj(a)]) && a.J(b);
        return !!a && b.D
    };
    x.Kg = function(a, b) {
        var c = !1;
        b instanceof Fp ? "tita" == b.C ? (a = this.A.D, c = this.A.active, a && (c ? this.deactivate(a) : this.activate(a), this.J(new J("tt"))), c = !0) : c = this.A.qc(a, b) : b.type == wc || b.type == ab ? this.Aa(mb, a, b.type == wc) : c = this.A.handleEvent(a, b);
        c && (b.preventDefault(), b.stopPropagation())
    };
    x.register = function(a) {
        if (xj(a)) {
            var b = this.A.jb();
            Xj(b, [wc, ab]);
            ak(b);
            H(a, function(c) {
                if (!this.F[Bj(c)]) {
                    var d = new Js(c);
                    this.F[Bj(c)] = d;
                    this.A.register(d);
                    d.C && (!Mz || d.G.tagName.toUpperCase() == la || N && !Wl(9) ? d.F.listen(d.C, b, d.Jb, dq) : Hs(d.C, b, d.Jb, d));
                    this.C && H(this.C.split(","), function(e) {
                        Ks(d, e, "tita")
                    }, this);
                    this.B.listen(d, Vj(b, Mg), B(this.Kg, this, d));
                    this.B.listen(d, "kc", this.J);
                    this.B.listen(d, "g", this.J)
                }
            }, this)
        }
    };
    x.unregister = function(a) {
        if (xj(a)) {
            var b = this.A.jb();
            Xj(b, [wc, ab]);
            ak(b);
            H(a, function(c) {
                var d = this.F[Bj(c)];
                d && (delete this.F[Bj(c)], this.A.unregister(d), d.C && (d.G.tagName.toUpperCase() == la || N && !Wl(9) ? Bm(d.F, d.C, b, d.Jb, dq) : Is(d.C, b, d.Jb, d)), this.C && H(this.C.split(","), function(e) {
                    Ls(d, e, "tita")
                }, this), d.ca())
            }, this)
        }
    };
    x.activate = function(a, b) {
        if (b || !this.A.active || this.A.D != a) this.Aa(nb, a, !0, b), this.K && this.Aa("cd", Et(a) ? Ag : Me), this.I && (this.I.setAttribute(na, !0), iz(this, "suc"));
        this.nf && /^(gmail|kix|punch|trix|youtube|blogger|orkut)/.test(iq) && (this.nf = !1, cz() && (a = sk(gv), nu(jd + iq, Ej(dz, bz), JSON.stringify({
            header: {
                method: "Lookup",
                service: "PrefService",
                deadline: 10
            },
            body: {
                client: "cloud"
            }
        }), a)))
    };
    x.deactivate = function(a) {
        a = void 0 === a ? null : a;
        if (this.A.active || this.A.D != a) this.Aa(nb, a, !1), !this.I || iq in this.N || (this.I.setAttribute(na, !1), iz(this, "rc"))
    };
    x.Aa = function(a, b) {
        this.A.ce.apply(this.A, arguments)
    };
    x.fh = function(a) {
        this.D.A.I = !0;
        this.D.A.H = !0;
        if (!this.D.dd(a)) {
            var b = Ng + a;
            this.D.Vd(a, a);
            this.B.listen(this.D, b, this.$g)
        }
    };
    x.$g = function() {
        var a = this.A.D,
            b = this.A.active;
        a && (b ? this.deactivate(a) : this.activate(a), this.J(new J("tt")))
    };
    x.M = function() {
        this.G.S.remove("uf", this.cf, !1, this);
        D(this.A);
        delete this.A;
        D(this.B);
        delete this.B;
        D(this.D);
        delete this.D;
        O.prototype.M.call(this)
    };
    x.cf = function() {
        var a = this.A.D,
            b = this.A.active;
        a && b && this.Aa(nb, a, !0)
    };
    x.Qe = !1;
    x.nf = !0;
    var gz = gz || "";
    wj(jz);
    z(kz, U);
    kz.prototype.$ = function() {
        this.B = this.A.O("A", {
            "class": this.I,
            role: "button"
        });
        N && V(this.B, "ita-kd-ie");
        this.N && V(this.B, Ud);
        this.C = this.A.O(m, {
            "class": this.K + " ita-kd-icon-span"
        });
        this.A.V(this.B, this.C);
        this.D = this.B
    };
    kz.prototype.Z = function() {
        zm(this.H, this.B, v, function() {
            this.G && (V(this.C, Pd), V(this.B, Od))
        }, this);
        zm(this.H, this.B, df, function() {
            this.G && (W(this.C, Pd), W(this.B, Od))
        }, this)
    };
    kz.prototype.M = function() {
        U.prototype.M.call(this);
        D(this.H)
    };
    kz.prototype.setEnabled = function(a) {
        this.G = a
    };
    z(lz, Y);
    lz.prototype.$ = function() {
        Y.prototype.$.call(this);
        if (0 != this.B.length) {
            if (1 == this.B.length) V(this.B[0].B, "ita-kd-single");
            else {
                V(this.B[0].B, "ita-kd-left");
                V(this.B[this.B.length - 1].B, "ita-kd-right");
                for (var a = 1; a < this.B.length - 1; a++) V(this.B[a].B, "ita-kd-mid")
            }
            for (a = 0; a < this.B.length; a++) this.A.V(this.L(), this.B[a].B);
            ew(this)
        }
    };
    lz.prototype.M = function() {
        Jj(this.B)
    };
    z(nz, E);
    nz.prototype.M = function() {
        E.prototype.M.call(this);
        D(this.A)
    };
    z(oz, J);
    z(pz, J);
    pz.prototype.isVisible = function() {
        return this.C
    };
    z(qz, J);
    z(rz, Y);
    x = rz.prototype;
    x.$ = function() {
        Y.prototype.$.call(this);
        var a = this.A,
            b = this.C.B,
            c = a.O("UL", {
                "class": "ita-kd-dropdown-menu" + (N && !I(9) ? " ita-kd-ie" : "")
            });
        vv(c);
        if (X) {
            var d = a.O(f, "ita-kd-dropdown-menu-mobile");
            d.appendChild(c);
            this.D = d
        } else this.D = c;
        var e = this.C.A ? this.C.A.code : "",
            g = this.C.D;
        H(b, function(h) {
            var k = h.code,
                l = this.A.O("LI", {
                    "class": Sd,
                    style: hh
                });
            l.setAttribute(yh, "-1");
            Tj(this.T, {
                Hc: l,
                className: Td
            });
            var n = this.A.O(m, "ita-kd-checkbox ita-kd-menuitem-span"),
                y = this.A.O(m, {
                    "class": "ita-kd-menuitem-inputtool-icon ita-kd-menuitem-span " + Aq(k)
                }),
                L = this.A.O(m, {
                    "class": "ita-kd-menuitem-inputtool-name"
                }, JA[k]);
            Et(At(k)) ? L.dir = Ag : L.dir = Me;
            this.A.ia(l, n, y, L);
            (n = xq.body) && No(n) && V(l, "ita-kd-rtl");
            this.I[k] = {
                Ob: l,
                icon: y,
                name: L
            };
            g && e == h.code && V(l, Ud);
            a.V(c, l)
        }, this);
        /^(gmail|kix|trix|punch)/.test(iq) && (this.H = sz(this, "Enable personal dictionary", !0), this.N = sz(this, "Disable personal dictionary", !0));
        this.R = sz(this, "Show Keyboard", !0);
        this.P = sz(this, "Hide Keyboard", !0);
        this.ea && (this.K = sz(this, "Input Tools Settings"));
        this.Y = this.A.O(f, {
            "class": "ita-kd-separator"
        });
        a.ia(c, this.Y, this.H, this.N, this.R, this.P, this.K);
        b = g && this.C.A.type == Ci;
        T(this.Y, !!(this.H || b || this.K))
    };
    x.kf = function(a) {
        var b = this.C.A != a || !this.C.D;
        this.G.J(new oz(a, b));
        this.hide();
        if (b) {
            b = (a = this.A.A) || document;
            if (b.getElementsByClassName) a = b.getElementsByClassName(Nd)[0];
            else {
                b = document;
                var c = a || b;
                a = c.querySelectorAll && c.querySelector ? c.querySelector(".ita-kd-icon-button") : Zm(b, "*", Nd, a)[0] || null
            }(a || null).focus()
        }
    };
    x.Z = function() {
        Y.prototype.Z.call(this);
        this.B.listen(this.G, tb, this.bg);
        var a = this.C.B,
            b = rn(uz(this));
        H(b, function(c, d) {
            d < a.length && this.B.listen(c, p, B(this.kf, this, a[d].code))
        }, this);
        H(this.T, function(c) {
            this.B.listen(c.Hc, v, B(this.Pg, this, c.Hc));
            this.B.listen(c.Hc, df, this.sd)
        }, this);
        this.H && this.B.listen(this.H, p, B(this.Vc, this, !0)).listen(this.N, p, B(this.Vc, this, !1)).listen(this.G, "psa", this.Gh);
        this.K && this.B.listen(this.K, p, this.Ke);
        this.B.listen(this.R, p, B(this.uc, this, !0)).listen(this.P, p,
            B(this.uc, this, !1)).listen(this.G, "kmi", this.uc).listen(uz(this), v, this.ag).listen(uz(this), df, function() {
            this.ab = !1
        }).listen(uz(this), t, this.$f);
        K && this.B.listen(uz(this), u, function(c) {
            c.stopPropagation();
            c.preventDefault()
        });
        this.aa && this.B.listen(this.A.A, p, this.Zf);
        this.B.listen(this.G, "ita_l", this.ug)
    };
    x.ag = function() {
        this.ab = !0;
        uz(this).focus()
    };
    x.focus = function() {
        var a = rn(uz(this));
        uz(this).focus();
        0 < a.length && (a[0].focus(), tz(this, a[0]))
    };
    x.Pg = function(a) {
        this.sd();
        V(a, Td)
    };
    x.sd = function() {
        for (var a = rn(uz(this)), b = 0; b < a.length; b++) W(a[b], Td)
    };
    x.$f = function(a) {
        var b = rn(uz(this));
        if (b && 0 != b.length) {
            var c = vz(this),
                d = this.C.B,
                e = c ? Rj(b, c) : -1;
            c = !1;
            if (13 == a.keyCode || 32 == a.keyCode) d[e] ? this.kf(d[e].code, null) : b[e] == this.R ? this.uc(!0) : b[e] == this.P ? this.uc(!1) : b[e] == this.K ? this.Ke(null) : b[e] == this.H ? this.Vc(!0) : b[e] == this.N && this.Vc(!1), c = !0;
            d = function(g) {
                var h = b.length;
                g += h;
                for (var k = (e + g) % h; k != e; k = (k + g) % h) {
                    var l = b[k];
                    if ("LI" == l.tagName.toUpperCase() && l.style.display != Hf) return l
                }
                return b[e]
            };
            40 == a.keyCode && (tz(this, d(1)), c = !0);
            38 == a.keyCode &&
                (tz(this, d(-1)), c = !0);
            9 == a.keyCode && this.hide();
            c && (a.stopPropagation(), a.preventDefault())
        }
    };
    x.Zf = function() {
        this.ab || this.hide()
    };
    x.Ke = function() {
        this.G.J(new J("slc"));
        this.hide()
    };
    x.bg = function(a) {
        var b = a.currInputToolActive;
        a = a.currInputToolName;
        a || (a = this.C.A.code);
        H(this.C.B, function(c) {
            this.I[c.code] && W(this.I[c.code].Ob, Ud)
        }, this);
        b && this.I[a] && V(this.I[a].Ob, Ud);
        b = !X && At(a).type == Ci && b;
        X || (T(this.R, b && !Xy), T(this.P, b && Xy));
        T(this.Y, b || !!this.K)
    };
    x.M = function() {
        Y.prototype.M.call(this);
        D(this.B);
        D(this.fa)
    };
    x.show = function() {
        this.na(!0);
        this.J(new pz(!0))
    };
    x.hide = function() {
        this.na(!1);
        this.J(new pz(!1))
    };
    x.ug = function(a) {
        var b = a.l10n,
            c = No(uz(this));
        mk(this.I, function(d, e) {
            var g;
            if (e)
                if (g = At(e)) {
                    e = null;
                    var h = XA[g.code];
                    h && (e = c ? h[1] + " \u2190 " + h[0] : h[0] + " \u2192 " + h[1]);
                    e || (e = YA[g.code]) && (e = Kz(e));
                    e || "hw" != g.type || (e = (e = Kz("HANDWRITE")) ? Jz(b, g.code) + " - " + e : Jz(b, g.code));
                    e || (e = Jz(b, g.code), (h = ZA[g.code]) && (e += " - " + h), h = $A[g.code], (g = Kz(h)) && (e += " - " + g));
                    g = e
                } else g = Kz(e);
            else g = null;
            g && (yn(d.name, g), an(d.name, {
                dir: Me
            }))
        }, this)
    };
    x.uc = function(a) {
        var b = !1;
        "boolean" === typeof a && (b = a, this.G.J(new qz("mk", !b)));
        T(this.R, !X && !b);
        T(this.P, !X && b);
        this.hide()
    };
    x.Vc = function(a) {
        Pu = a;
        T(this.H, !a);
        T(this.N, a);
        ez({
            EnableUserDictionary: a
        });
        this.hide()
    };
    x.Gh = function(a) {
        a = a.value.EnableUserDictionary;
        void 0 !== a && (T(this.H, !a), T(this.N, a))
    };
    C(wz, mp);
    wz.prototype.Ga = function(a, b, c) {
        var d = fp(this.A, this.B, a, b, null, c, 10, void 0, this.D);
        if (d & 496) {
            var e = xz(d, this.B);
            b = xz(d, b);
            d = fp(this.A, e, a, b, null, c, 10, void 0, this.D);
            d & 496 && (e = xz(d, e), b = xz(d, b), fp(this.A, e, a, b, null, c, this.C, void 0, this.D))
        }
    };
    z(yz, wp);
    x = yz.prototype;
    x.$ = function() {
        wp.prototype.$.call(this);
        if (0 != this.C.B.length) {
            var a = this.A,
                b = this.L();
            a.L("itamenu") || (b.id = "itamenu");
            this.P = new lz;
            this.fa = a.O(m, {
                "class": Rd
            });
            a.V(b, this.fa);
            if (this.oa) {
                var c = mz(this.P, "ita-kd-icon-button ita-kd-floating-bar", "ita-kd-img ita-kd-floating-bar-icon");
                this.Y = c.B;
                b.style.zIndex = "99"
            }
            b = this.C.D;
            this.C.A && (c = Aq(this.C.A.code), c = mz(this.P, "ita-kd-icon-button ita-kd-inputtool-icon ita-kd-small " + (X ? "ita-kd-mobile" : ""), c + " ita-kd-icon", b), this.G = c.B, this.ea = c.C, this.G.setAttribute(yh,
                "0"));
            if (1 < this.C.B.length || 1 == this.C.B.length && (this.C.B[0].type == Ci || this.R)) c = mz(this.P, "ita-kd-icon-button ita-kd-dropdown " + (X ? "ita-kd-mobile" : ""), "ita-kd-img ita-kd-arrow"), this.I = c.B, this.I.setAttribute(yh, "0"), this.I.setAttribute("aria-haspopup", "true"), this.I.setAttribute(Oa, "Show the Input Tools menu");
            this.P.ha(this.fa);
            this.B = new rz(this.C, this.K, this.R, a);
            this.B.aa = !1;
            this.B.ha();
            this.B.hide();
            Kj(this, this.B)
        }
    };
    x.df = function() {
        dx(this.L())
    };
    x.Cd = function() {
        this.K.J(new oz(this.C.A.code, !this.C.D));
        this.B.hide()
    };
    x.Z = function() {
        wp.prototype.Z.call(this);
        this.H.listen(this.K, tb, this.dg).listen(this.K, "itlu", this.We);
        this.G && this.H.listen(this.G, p, this.Cd).listen(this.G, Kb, this.Cd).listen(this.G, t, B(this.qe, this, !1));
        this.I && this.H.listen(this.I, p, this.Ge).listen(this.B, "vc", this.Hg).listen(this.I, t, B(this.qe, this, !0));
        this.Y && (this.ba = new lv(this.L(), this.Y), this.H.listen(this.ba, "drag", function() {
            zz(this);
            this.hf = !1
        }));
        this.B && this.H.listen(this.A.A, bf, this.cg, dq)
    };
    x.qe = function(a, b) {
        if (13 == b.keyCode || 32 == b.keyCode || a && 40 == b.keyCode) b.target == this.I ? this.Ge() : b.target == this.G && this.Cd(null), b.stopPropagation(), b.preventDefault()
    };
    x.Ge = function() {
        zz(this);
        var a = this.B;
        a.isVisible() ? a.hide() : a.show();
        this.B.focus()
    };
    x.Ac = function(a, b, c) {
        wp.prototype.Ac.call(this, a, b, c);
        zz(this)
    };
    x.Hg = function(a) {
        a.isVisible() ? V(this.I, Ud) : W(this.I, Ud)
    };
    x.cg = function() {
        this.ab || this.B.ab || this.B.hide()
    };
    x.dg = function(a) {
        var b = a.currInputToolActive;
        a = a.currInputToolName;
        a || (a = this.C.A.code);
        H(this.C.B, function(c) {
            W(this.ea, zq(c.code))
        }, this);
        V(this.ea, zq(a));
        b ? V(this.G, Ud) : W(this.G, Ud);
        switch (this.C.A.type) {
            case "im":
                this.G.setAttribute(Oa, b ? "Turn off Input Method" : "Turn on Input Method");
                break;
            case Ci:
                this.G.setAttribute(Oa, b ? "Turn off Virtual Keyboard" : "Turn on Virtual Keyboard");
                break;
            case "hw":
                this.G.setAttribute(Oa, b ? "Turn off Handwriting" : "Turn on Handwriting")
        }
        this.G.setAttribute("aria-pressed",
            String(b))
    };
    x.We = function() {
        this.H.removeAll();
        var a = this.L();
        D(this.B);
        if (0 < this.C.B.length) {
            if (this.D = null, xp(this, this.R, this.Ob), !this.Ob) {
                this.L().style.position = Da;
                try {
                    this.Ac(a, [0, 0])
                } catch (b) {}
            }
        } else this.H.listen(this.K, "itlu", B(this.We, this));
        this.A.Va(a)
    };
    x.M = function() {
        wp.prototype.M.call(this);
        D(this.ba);
        D(this.P)
    };
    x.Pe = function() {
        this.L().style.display = Hf;
        this.B && this.B.hide()
    };
    z(Az, J);
    var Bz = {
        translate: 11,
        kix: 12,
        trix: 13,
        punch: 14,
        gmail: 5
    };
    z(Iz, E);
    x = Iz.prototype;
    x.Xe = function() {
        this.A |= 1;
        window.LanguageDisplays && window.LanguageDisplays.localNames && H(window.LanguageDisplays.localNames, function(a) {
            a = a.split(":");
            this.D[a[1]] = a[0]
        }, this);
        this.notify()
    };
    x.Ze = function() {
        this.A |= 2;
        this.notify()
    };
    x.yh = function() {
        var a = dt(Rk(Gz, {
                langCode: q
            })),
            b = B(this.Xe, this);
        Vs(a, b, null, void 0)
    };
    x.Ah = function() {
        var a = dt(Rk(Hz, {
                langCode: q
            })),
            b = B(this.Ze, this);
        Vs(a, b, null, void 0)
    };
    x.notify = function() {
        3 == (this.A & 3) && Ap(yp.pa(), new Az(this))
    };
    var Gz = Kk("https://ssl.gstatic.com/inputtools/js/ln/17/%{langCode}.js"),
        Hz = Kk("https://ssl.gstatic.com/inputtools/js/msgs/10/%{langCode}.js");
    Iz.prototype.A = 0;
    var XA = {
            "am-t-i0-und": ["salam", "\u1230\u120b\u121d"],
            "ar-t-i0-und": ["marhaban", "\u0645\u0631\u062d\u0628\u0627"],
            "be-t-i0-und": ["pryvitannie", "\u043f\u0440\u044b\u0432\u0456\u0442\u0430\u043d\u043d\u0435"],
            "bg-t-i0-und": ["zdrasti", "\u0437\u0434\u0440\u0430\u0441\u0442\u0438"],
            "bn-t-i0-und": ["namaskar", "\u09a8\u09ae\u09b8\u09cd\u0995\u09be\u09b0"],
            "el-t-i0-und": ["geia", "\u03b3\u03b5\u03b9\u03b1"],
            "fa-t-i0-und": ["salam", "\u0633\u0644\u0627\u0645"],
            "gu-t-i0-und": [uf, "\u0aa8\u0aae\u0ab8\u0acd\u0aa4\u0ac7"],
            "he-t-i0-und": ["shalom", "\u05e9\u05dc\u05d5\u05dd"],
            "hi-t-i0-und": [uf, "\u0928\u092e\u0938\u094d\u0924\u0947"],
            "ja-t-ja-hira-i0-und": ["konnichiha", "\u3053\u3093\u306b\u3061\u306f"],
            "kn-t-i0-und": ["namaskaram", "\u0ca8\u0cae\u0cb8\u0ccd\u0c95\u0cbe\u0cb0"],
            "ml-t-i0-und": ["namaskar", "\u0d28\u0d2e\u0d38\u0d4d\u0d15\u0d3e\u0d30\u0d02"],
            "mr-t-i0-und": [uf, "\u0928\u092e\u0938\u094d\u0915\u093e\u0930"],
            "ne-t-i0-und": [uf, "\u0928\u092e\u0938\u094d\u0924\u0947"],
            "or-t-i0-und": ["mausam", "\u0b28\u0b2e\u0b38\u0b4d\u0b24\u0b47"],
            "pa-t-i0-und": ["mausam", "\u0a2e\u0a4c\u0a38\u0a2e"],
            "ru-t-i0-und": ["privet", "\u043f\u0440\u0438\u0432\u0435\u0442"],
            "sa-t-i0-und": [uf, "\u0928\u092e\u0938\u094d\u0924\u0947"],
            "sr-t-i0-und": ["zdravo", "\u0437\u0434\u0440\u0430\u0432\u043e"],
            "si-t-i0-und": ["halo", "\u0dc4\u0dbd\u0ddd"],
            "ta-t-i0-und": ["vanakkam", "\u0bb5\u0ba3\u0b95\u0bcd\u0b95\u0bae\u0bcd"],
            "ti-t-i0-und": ["selam", "\u1230\u120b\u121d"],
            "te-t-i0-und": ["emandi", "\u0c0f\u0c2e\u0c02\u0c21\u0c40"],
            "uk-t-i0-und": ["pryvit", "\u043f\u0440\u0438\u0432\u0456\u0442"],
            "ur-t-i0-und": ["salam", "\u0633\u0644\u0627\u0645"],
            "vi-t-i0-und": ["chao", "ch\u00e0o"]
        },
        ZA = {
            "bn-t-k0-und": oa,
            "cs-t-k0-qwertz": "QWERTZ",
            "en-t-k0-dvorak": "DVORAK",
            "gu-t-k0-und": oa,
            "hi-t-k0-und": oa,
            "ka-t-k0-legacy": da,
            "km-t-k0-und": "NiDA",
            "kn-t-k0-und": oa,
            "ml-t-k0-und": oa,
            "ne-t-k0-und": oa,
            "or-t-k0-und": oa,
            "pa-guru-t-k0-und": oa,
            "ru-t-k0-qwerty": "QWERTY",
            "sk-t-k0-qwerty": "QWERTY",
            "ta-t-k0-ta99": "Tamil99",
            "ta-t-k0-und": oa,
            "ta-t-k0-typewriter": "TYPEWRITER",
            "ta-t-k0-itrans": "ITRANS",
            "th-t-k0-pattajoti": "PATTAJOTI",
            "th-t-k0-tis": "TIS",
            "te-t-k0-und": oa,
            "tr-t-k0-und": "Q",
            "tr-t-k0-legacy": "F",
            "uz-cyrl-t-k0-legacy": da,
            "vi-t-k0-legacy": "Telex",
            "vi-t-k0-viqr": "VIQR",
            "vi-t-k0-und": "TCVN 6064",
            "vi-t-k0-vni": "VNI"
        },
        $A = {
            "de-ch-t-k0-und": "SWISS_GERMAN",
            "hy-hyr-t-k0-und": "EASTERN",
            "hy-hyt-t-k0-und": "WESTERN",
            "ka-t-k0-und": "LATIN",
            "pt-br-t-k0-und": "BRAZILIAN",
            "pt-pt-t-k0-und": "EUROPEAN",
            "ro-t-k0-legacy": "PRIMARY",
            "ro-t-k0-extended": "SECONDARY",
            "sr-cyrl-t-k0-und": "CYRILLIC",
            "sr-latn-t-k0-und": "LATIN",
            "uz-latn-t-k0-und": "LATIN",
            "uz-cyrl-t-k0-und": "CYRILLIC",
            "zh-t-i0-pinyin": "PINYIN",
            "zh-hant-t-i0-pinyin": "PINYIN",
            "bg-t-k0-qwerty": ua,
            "hi-t-k0-qwerty": ua,
            "chr-t-und-latn-k0-und": ua
        },
        YA = {
            "en-us-t-k0-intl": "US_I18N",
            "yue-hant-t-i0-und": "CANTONESE",
            "zh-hant-t-i0-cangjie-1982": "CANGJIE",
            "zh-t-i0-wubi-1986": "WUBI",
            "zh-hant-t-i0-und": "ZHUYIN"
        },
        Fz = ["am", "ar", "bg", "bn", "ca", "cs", "da", "de", "de-AT", "de-CH", "el", "en-GB", "en-IE", "en-IN", "en-SG", "en-ZA", "es", "es-419", "es-AR", "es-BO", "es-CL", "es-CO", "es-CR", "es-DO", "es-EC", "es-GT", "es-HN",
            "es-MX", "es-NI", "es-PA", "es-PE", "es-PR", "es-PY", "es-SV", "es-US", "es-UY", "es-VE", "fa", "fi", "fil", "fr", "fr-CH", "gsw", "gu", Tc, "hi", "hr", "hu", "id", "in", "it", "iw", "ja", "kn", "ko", "ln", "lt", "lv", "ml", "mo", "mr", "nb", "ne", "nl", "no", "or", "pa", "pl", eg, fg, "pt", "ro", "ru", "si", "sk", "sl", "sr", "sv", "th", "ti", "tr", "uk", "ur", "vi", Ki, Mi, "zh-Hant", Li, Ni, "zh"
        ];
    z(Lz, E);
    wj(Lz);
    z(Oz, E);
    x = Oz.prototype;
    x.pd = function(a) {
        var b = this.A,
            c = [];
        Xj(c, a);
        a = b.B.length;
        H(c, function(d) {
            (d = At(d)) && (!X || "hw" != d.type && "vo" != d.type) && (d.type == Ci ? this.B.Aa("ll", d.Ua) : "im" == d.type && this.B.Aa("lc", d.code), Tj(b.B, d))
        }, this);
        !b.A && 0 < b.B.length && (b.A = b.B[0]);
        b.B.length > a && (Nz(this), Sz(this))
    };
    x.Uh = function(a) {
        var b = this.A,
            c = [];
        Xj(c, a);
        a = b.B.length;
        H(c, function(d) {
            d = At(d);
            d == b.A && (b.A = null, b.D = !1);
            Uj(b.B, d)
        }, this);
        !b.A && 0 < b.B.length && (b.A = b.B[0]);
        b.B.length < a && (Nz(this), Sz(this))
    };
    x.Yh = function(a) {
        var b = this.A,
            c = [];
        Xj(c, a);
        var d = [];
        H(c, function(e) {
            (e = At(e)) && (!X || "hw" != e.type && "vo" != e.type) && d.push(e)
        }, this);
        ek(d, b.B) || (Sj(b.B), H(d, function(e) {
            e && (e.type == Ci ? this.B.Aa("ll", e.Ua) : "im" == e.type && this.B.Aa("lc", e.code), Tj(b.B, e), b.A && b.A.code == e.code && (b.A = e))
        }, this), b.A && F(b.B, b.A) || (b.A = 0 < b.B.length ? b.B[0] : null, b.D = !1), Nz(this), Sz(this))
    };
    x.qd = function(a) {
        var b = [];
        Xj(b, a);
        H(b, function(c) {
            (c = Ym(document, c)) && Tj(this.C, c)
        }, this);
        Nz(this);
        Tz(this)
    };
    x.Qd = function(a) {
        var b = [];
        Xj(b, a);
        this.F = [];
        H(b, function(c) {
            if (c = Ym(document, c)) Uj(this.C, c), Tj(this.F, c)
        }, this);
        Nz(this);
        Tz(this);
        this.F = []
    };
    x.Zh = function(a) {
        var b = [];
        Xj(b, a);
        this.F = this.C;
        this.C = [];
        H(b, function(c) {
            if (c = Ym(document, c)) Tj(this.C, c), Uj(this.F, c)
        }, this);
        Nz(this);
        Tz(this);
        this.F = []
    };
    x.og = function(a, b) {
        b = void 0 === b ? !0 : b;
        if (a = At(a)) F(this.A.B, a) || this.pd(a.code), Uz(this, b, a)
    };
    x.vg = function() {
        Uz(this, !0, this.A.A)
    };
    x.Gc = function() {
        Uz(this, !1, this.A.A)
    };
    x.ei = function() {
        Uz(this, !this.A.D, this.A.A)
    };
    x.eg = function(a, b, c, d) {
        if (!qk(IA, a)) throw Error("Exception in addEventListener: Invalid event type:" + a);
        "boolean" === typeof c ? ym(this.G, this.D, a, b, c, d || this) : d ? ym(this.G, this.D, a, b, !1, d || this) : ym(this.G, this.D, a, b, !1, c || this)
    };
    x.removeEventListener = function(a, b, c) {
        if (!qk(IA, a)) throw Error("Exception in removeEventListener: Invalid event type:" + a);
        Bm(this.G, this.D, a, b, !1, c)
    };
    x.Mh = function(a) {
        Uz(this, a.C, At(a.H))
    };
    x.Nh = function(a) {
        a = a.L();
        this.A.C = a;
        F(this.C, a) || (this.C.push(a), this.B.register([a]));
        Uz(this, this.A.D, this.A.A)
    };
    x.Oh = function(a) {
        a = a.C;
        var b = this.A.A,
            c = this.A.D;
        b && b.type == Ci && c && this.B.Aa("sk", a)
    };
    x.bi = function(a) {
        var b = "kd",
            c = !1,
            d, e, g = !1;
        a && (a.ui && (b = a.ui), a.showSetting && (c = a.showSetting), a.container && (d = a.container), a.inputElement && (e = a.inputElement), g = !!a.shadowContainer);
        if (g && d) {
            g = d;
            var h = this.B.H.O("STYLE"),
                k = rl(Cr(gz), wq());
            Lo(h, k);
            g.appendChild(h)
        }
        g = null;
        "kd" == b && (g = new yz(this.A, this.D));
        g && (g.bindElement = g.ye, g.reposition = g.Ac, g.show = g.show, g.hide = g.hide, g.toggle = g.wf);
        b = g;
        if (!b) return null;
        b.aa = a && a.alignRight;
        xp(b, c, d);
        vv(Ym(document, d));
        b.ye(e);
        return b
    };
    x.gf = function(a, b, c) {
        if (a && b && 2 == b.length) {
            a = vp.L(a);
            var d = null;
            null != c && (typeof c === If ? d = new ro(c, c, c, c) : xj(c) && 4 == c.length && (d = new ro(Number(c[0]), Number(c[1]), Number(c[2]), Number(c[3]))));
            this.B.Aa("re", new mp(a, b[0]), b[1], d)
        }
    };
    x.fg = function() {
        return {
            name: this.A.A.code,
            state: this.A.D
        }
    };
    x.Ch = function() {
        this.B.Aa("mk", !0)
    };
    x.Ve = function() {
        var a = this.A.D;
        this.A.D = !1;
        if (a) {
            if (this.A.A) {
                var b = this.A.A.code;
                this.B.deactivate(this.A.A)
            } else b = null, this.B.deactivate();
            Rz(this, b, a)
        }
    };
    x.re = function(a) {
        iq = a;
        if (a == ai || "richlab" == a || "gtta" == a) Os("49160274"), bs = !1
    };
    x.se = function(a) {
        this.B.K = a
    };
    x.qh = function(a) {
        this.A.C = a.target
    };
    x.M = function() {
        E.prototype.M.call(this);
        this.H && (yp.pa(), Uj(zp, this.D), D(this.D));
        delete this.C;
        D(this.B);
        delete this.B;
        D(this.G);
        delete this.G;
        delete this.F
    };
    x.Sh = function() {
        var a = this.A.D,
            b = this.A.A ? this.A.A.code : null;
        b && (this.A.D = !a, Rz(this, b, a))
    };
    x.xg = function(a) {
        return Ez(a)
    };
    x.gg = function(a) {
        var b = Lz.pa(),
            c = b.A[a];
        c || (c = new Iz(a), b.A[a] = c);
        c.notify()
    };
    x.ph = function(a) {
        var b = [a.H];
        a.C && Xj(b, a.C);
        this.B.Aa.apply(this.B, b)
    };
    x.$h = function(a) {
        wy = a
    };
    Gj("google.elements.inputtools.InputToolsController", Oz);
    var Z = Oz.prototype;
    Z.addInputTools = Z.pd;
    Z.removeInputTools = Z.Uh;
    Z.setInputTools = Z.Yh;
    Z.activateInputTool = Z.og;
    Z.showControl = Z.bi;
    Z.addPageElements = Z.qd;
    Z.removePageElements = Z.Qd;
    Z.setPageElements = Z.Zh;
    Z.setAutoDirection = Z.se;
    Z.getCurrentInputTool = Z.fg;
    Z.enableCurrentInputTool = Z.vg;
    Z.disableCurrentInputTool = Z.Gc;
    Z.toggleCurrentInputTool = Z.ei;
    Z.addEventListener = Z.eg;
    Z.removeEventListener = Z.removeEventListener;
    Z.repositionKeyboard = Z.gf;
    Z.repositionElement = Z.gf;
    Z.getInputToolsForLanguage = Z.xg;
    Z.dispose = Z.ca;
    Z.setApplicationName = Z.re;
    Z.localize = Z.gg;
    Z.setSimpleEasyAccents = Z.$h;
    Gj("google.elements.inputtools.InputToolNativeCaption", JA);
    Gj("google.elements.inputtools.EventType", {
        INPUT_TOOL_ENABLED: tb,
        INPUT_TOOL_LIST_UPDATED: "itlu",
        PAGE_ELEMENT_LIST_UPDATED: "pelu"
    });
    Gj("google.elements.inputtools.PositionType", {
        TOP_LEFT: [0, 1],
        TOP_RIGHT: [4, 5],
        UPPER_LEFT: [0, 5],
        UPPER_RIGHT: [4, 1],
        BOTTOM_LEFT: [1, 0],
        BOTTOM_RIGHT: [5, 4],
        LOWER_LEFT: [1, 4],
        LOWER_RIGHT: [5, 0],
        INNER_BOTTOM_END: [13, 13],
        INNER_BOTTOM_START: [9, 9],
        INNER_TOP_END: [12, 12],
        INNER_TOP_START: [8, 8],
        TOP_START: [8, 9],
        TOP_END: [12, 13],
        UPPER_START: [8, 13],
        UPPER_END: [12, 9],
        BOTTOM_START: [9, 8],
        BOTTOM_END: [13, 12],
        LOWER_START: [9, 12],
        LOWER_END: [13, 8]
    });
    Gj("google.elements.inputtools.loadConfigById", Os);
    Gj("google.elements.inputtools.UiType", {
        CLASSIC: "kd"
    });
    Gj("google_input_tools_source", qb);
    Gj("google.elements.inputtools.InputToolCode", {
        INPUTMETHOD_CANGJIE82_CHINESE_TRADITIONAL: Qi,
        INPUTMETHOD_CANTONESE_TRADITIONAL: Ii,
        INPUTMETHOD_CANTONESE_TRADITIONAL_JYUTPING: Hi,
        INPUTMETHOD_PINYIN_CHINESE_SIMPLIFIED: Vi,
        INPUTMETHOD_PINYIN_CHINESE_TRADITIONAL: Si,
        INPUTMETHOD_TRANSLITERATION_AMHARIC: Ja,
        INPUTMETHOD_TRANSLITERATION_ARABIC: Ma,
        INPUTMETHOD_TRANSLITERATION_BELARUSIAN: Va,
        INPUTMETHOD_TRANSLITERATION_BENGALI: cb,
        INPUTMETHOD_TRANSLITERATION_BULGARIAN: Ya,
        INPUTMETHOD_TRANSLITERATION_DUTCH: Af,
        INPUTMETHOD_TRANSLITERATION_FRENCH: yc,
        INPUTMETHOD_TRANSLITERATION_GERMAN: Nb,
        INPUTMETHOD_TRANSLITERATION_GREEK: Xb,
        INPUTMETHOD_TRANSLITERATION_GUJARATI: Mc,
        INPUTMETHOD_TRANSLITERATION_HEBREW: Vc,
        INPUTMETHOD_TRANSLITERATION_HINDI: Yc,
        INPUTMETHOD_TRANSLITERATION_ITALIAN: vd,
        INPUTMETHOD_TRANSLITERATION_JAPANESE: ge,
        INPUTMETHOD_TRANSLITERATION_KANNADA: te,
        INPUTMETHOD_TRANSLITERATION_MALAYALAM: We,
        INPUTMETHOD_TRANSLITERATION_MARATHI: gf,
        INPUTMETHOD_TRANSLITERATION_NEPALI: xf,
        INPUTMETHOD_TRANSLITERATION_ORIYA: Qf,
        INPUTMETHOD_TRANSLITERATION_PERSIAN: qc,
        INPUTMETHOD_TRANSLITERATION_PORTUGUESE: rg,
        INPUTMETHOD_TRANSLITERATION_PORTUGUESE_PORTUGAL: mg,
        INPUTMETHOD_TRANSLITERATION_PUNJABI: Xf,
        INPUTMETHOD_TRANSLITERATION_RUSSIAN: Cg,
        INPUTMETHOD_TRANSLITERATION_SANSKRIT: Hg,
        INPUTMETHOD_TRANSLITERATION_SERBIAN: eh,
        INPUTMETHOD_TRANSLITERATION_SINHALESE: Pg,
        INPUTMETHOD_TRANSLITERATION_SPANISH: hc,
        INPUTMETHOD_TRANSLITERATION_TAMIL: sh,
        INPUTMETHOD_TRANSLITERATION_TELUGU: Ah,
        INPUTMETHOD_TRANSLITERATION_THAI: Ih,
        INPUTMETHOD_TRANSLITERATION_TIGRINYA: Oh,
        INPUTMETHOD_TRANSLITERATION_UKRAINE: fi,
        INPUTMETHOD_TRANSLITERATION_URDU: ki,
        INPUTMETHOD_TRANSLITERATION_VIETNAMESE: vi,
        INPUTMETHOD_WUBI_CHINESE_SIMPLIFIED: bj,
        INPUTMETHOD_ZHUYIN_CHINESE_TRADITIONAL: Ti,
        KEYBOARD_ALBANIAN: ah,
        KEYBOARD_ARABIC: Na,
        KEYBOARD_ARMENIAN_EASTERN: md,
        KEYBOARD_ARMENIAN_WESTERN: nd,
        KEYBOARD_BASQUE: oc,
        KEYBOARD_BELARUSIAN: Wa,
        KEYBOARD_BENGALI_INSCRIPT: db,
        KEYBOARD_BENGALI_PHONETIC: eb,
        KEYBOARD_BOSNIAN: hb,
        KEYBOARD_BRAZILIAN_PORTUGUESE: kg,
        KEYBOARD_BULGARIAN: $a,
        KEYBOARD_BULGARIAN_PHONETIC: Za,
        KEYBOARD_CATALAN: jb,
        KEYBOARD_CHAKMA: kb,
        KEYBOARD_CHEROKEE: rb,
        KEYBOARD_CHEROKEE_PHONETIC: sb,
        KEYBOARD_CROATIAN: fd,
        KEYBOARD_CZECH: Eb,
        KEYBOARD_CZECH_QWERTZ: Db,
        KEYBOARD_DANISH: Jb,
        KEYBOARD_DARI: cg,
        KEYBOARD_DEVANAGARI_PHONETIC: $c,
        KEYBOARD_DUTCH: Df,
        KEYBOARD_DUTCH_INTL: Cf,
        KEYBOARD_DZONGKHA: Vb,
        KEYBOARD_ENGLISH: dc,
        KEYBOARD_ENGLISH_DVORAK: cc,
        KEYBOARD_ESTONIAN: mc,
        KEYBOARD_ETHIOPIC: hi,
        KEYBOARD_FINNISH: uc,
        KEYBOARD_FRENCH: Bc,
        KEYBOARD_FRENCH_INTL: Ac,
        KEYBOARD_FULA_ADLAM: sc,
        KEYBOARD_GALICIAN: Kc,
        KEYBOARD_GEORGIAN_QWERTY: le,
        KEYBOARD_GEORGIAN_TYPEWRITER: ke,
        KEYBOARD_GERMAN: Qb,
        KEYBOARD_GERMAN_INTL: Pb,
        KEYBOARD_GREEK: Yb,
        KEYBOARD_GUJARATI_INSCRIPT: Oc,
        KEYBOARD_GUJARATI_PHONETIC: Pc,
        KEYBOARD_GUJARATI_NEW_PHONETIC: Nc,
        KEYBOARD_GURMUKHI_INSCRIPT: Uf,
        KEYBOARD_GURMUKHI_PHONETIC: Vf,
        KEYBOARD_HAITIAN: hd,
        KEYBOARD_HAWAIIAN: Sc,
        KEYBOARD_HEBREW: Wc,
        KEYBOARD_HINDI: ad,
        KEYBOARD_HINDI_PHONETIC: Zc,
        KEYBOARD_HUNGARIAN_101: ld,
        KEYBOARD_ICELANDIC: td,
        KEYBOARD_INDONESIAN: qd,
        KEYBOARD_INUKTITUT_NUNAVIK: ae,
        KEYBOARD_INUKTITUT_NUNAVUT: be,
        KEYBOARD_IRISH: Gc,
        KEYBOARD_IRISH_ACCENTS: Fc,
        KEYBOARD_ITALIAN: yd,
        KEYBOARD_ITALIAN_INTL: xd,
        KEYBOARD_JAVANESE: ie,
        KEYBOARD_KANNADA_INSCRIPT: ue,
        KEYBOARD_KANNADA_PHONETIC: ve,
        KEYBOARD_KAZAKH: pe,
        KEYBOARD_KHMER: re,
        KEYBOARD_KOREAN: xe,
        KEYBOARD_KURDISH_BEDIRXAN: ze,
        KEYBOARD_KYRGYZ: Ae,
        KEYBOARD_LAO: Je,
        KEYBOARD_LATVIAN: Oe,
        KEYBOARD_LITHUANIAN: Le,
        KEYBOARD_MACEDONIAN: Ue,
        KEYBOARD_MAKAH: tf,
        KEYBOARD_MALAY: mf,
        KEYBOARD_MALAYALAM_INSCRIPT: Xe,
        KEYBOARD_MALAYALAM_PHONETIC: Ye,
        KEYBOARD_MALTESE: of,
        KEYBOARD_MAORI: Se,
        KEYBOARD_MARATHI: kf,
        KEYBOARD_MARATHI_PHONETIC: jf,
        KEYBOARD_MEETEI_PHONETIC: af,
        KEYBOARD_MENOMINEE: Pe,
        KEYBOARD_MONGOLIAN_CYRILLIC: Ze,
        KEYBOARD_MONTENEGRIN: fh,
        KEYBOARD_MYANMAR: sf,
        KEYBOARD_MYANMAR_MYANSAN: rf,
        KEYBOARD_NAVAJO: Kf,
        KEYBOARD_NAVAJO_STANDARD: Jf,
        KEYBOARD_NORWEGIAN: Gf,
        KEYBOARD_ONEIDA: Of,
        KEYBOARD_ORIYA_INSCRIPT: Rf,
        KEYBOARD_ORIYA_PHONETIC: Sf,
        KEYBOARD_OSAGE: Tf,
        KEYBOARD_PAN_AFRICA_LATIN: De,
        KEYBOARD_PASHTO: dg,
        KEYBOARD_PERSIAN: rc,
        KEYBOARD_PLAINS_CREE_PHONETIC: Bb,
        KEYBOARD_POLISH: $f,
        KEYBOARD_PORTUGUESE: pg,
        KEYBOARD_PORTUGUESE_BRAZIL_INTL: jg,
        KEYBOARD_PORTUGUESE_PORTUGAL_INTL: og,
        KEYBOARD_ROHINGYA: ug,
        KEYBOARD_ROMANI: zg,
        KEYBOARD_ROMANIAN: yg,
        KEYBOARD_ROMANIAN_SR13392_PRIMARY: xg,
        KEYBOARD_ROMANIAN_SR13392_SECONDARY: wg,
        KEYBOARD_RUSSIAN: Fg,
        KEYBOARD_SANSKRIT_PHONETIC: Jg,
        KEYBOARD_SERBIAN_CYRILLIC: bh,
        KEYBOARD_SERBIAN_LATIN: ch,
        KEYBOARD_KEYBOARD_SINDHI: Kg,
        KEYBOARD_SINHALA: Qg,
        KEYBOARD_SLOVAK: Tg,
        KEYBOARD_SLOVAK_QWERTY: Sg,
        KEYBOARD_SLOVENIAN: Vg,
        KEYBOARD_SORANI_KURDISH_AR: ub,
        KEYBOARD_SORANI_KURDISH_EN: vb,
        KEYBOARD_SOUTHERN_UZBEK: ri,
        KEYBOARD_SPANISH: kc,
        KEYBOARD_SPANISH_INTL: jc,
        KEYBOARD_SWAHILI: mh,
        KEYBOARD_SWEDISH: kh,
        KEYBOARD_SWISS_GERMAN: Lb,
        KEYBOARD_TAGALOG: Qh,
        KEYBOARD_TAJIK: Gh,
        KEYBOARD_TAMIL_99: uh,
        KEYBOARD_TAMIL_INSCRIPT: wh,
        KEYBOARD_TAMIL_ITRANS: th,
        KEYBOARD_TAMIL_PHONETIC: xh,
        KEYBOARD_TAMIL_TYPEWRITER: vh,
        KEYBOARD_TATAR: ci,
        KEYBOARD_TELUGU_INSCRIPT: Bh,
        KEYBOARD_TELUGU_PHONETIC: Ch,
        KEYBOARD_THAI: Lh,
        KEYBOARD_THAI_PATTAJOTI: Jh,
        KEYBOARD_THAI_TIS: Kh,
        KEYBOARD_TIGRINYA: Ph,
        KEYBOARD_TIGRINYA_ETHIOPIC: Mh,
        KEYBOARD_TURKISH_F: Yh,
        KEYBOARD_TURKISH_Q: $h,
        KEYBOARD_UIGHUR: di,
        KEYBOARD_UKRAINIAN_101: gi,
        KEYBOARD_URDU: li,
        KEYBOARD_UZBEK_CYRILLIC_PHONETIC: oi,
        KEYBOARD_UZBEK_CYRILLIC_TYPEWRITTER: ni,
        KEYBOARD_UZBEK_LATIN: pi,
        KEYBOARD_VIETNAMESE_TCVN: xi,
        KEYBOARD_VIETNAMESE_TELEX: wi,
        KEYBOARD_VIETNAMESE_VIQR: yi,
        KEYBOARD_WELSH: Hb,
        KEYBOARD_YIDDISH: Fi,
        KEYBOARD_NIGERIAN_YORUBA: Gi,
        KEYBOARD_OJIBWE: Nf,
        KEYBOARD_GENMAN_ACCENTS: Ob,
        KEYBOARD_SPANISH_ACCENTS: ic,
        KEYBOARD_FRENCH_ACCENTS: zc,
        KEYBOARD_ITALIAN_ACCENTS: wd,
        KEYBOARD_DUTCH_ACCENTS: Bf,
        KEYBOARD_POLISH_ACCENTS: Zf,
        KEYBOARD_PORTUGUESE_BRAZIL_ACCENTS: ig,
        KEYBOARD_PORTUGUESE_PORTUGAL_ACCENTS: ng,
        KEYBOARD_TURKISH_F_ACCENTS: Wh,
        KEYBOARD_TURKISH_Q_ACCENTS: Zh,
        KEYBOARD_CORSICAN_ACCENTS: xb,
        KEYBOARD_HAWAIIAN_ACCENTS: Rc,
        KEYBOARD_SAMOAN_ACCENTS: Xg,
        KEYBOARD_SCOTS_GAELIC_ACCENTS: Ic,
        KEYBOARD_WEST_FRISIAN_ACCENTS: Dc,
        KEYBORAD_LUXEMBOURGISH_ACCENTS: Ge,
        HANDWRIT_AFRIKAANS: Ha,
        HANDWRIT_AMHARIC: Ia,
        HANDWRIT_ARABIC: La,
        HANDWRIT_ASSAMESE: Pa,
        HANDWRIT_AZERBAIJANI: Ta,
        HANDWRIT_BELARUSIAN: Ua,
        HANDWRIT_BULGARIAN: Xa,
        HANDWRIT_BENGALI: bb,
        HANDWRIT_TIBETAN: fb,
        HANDWRIT_BOSNIAN: gb,
        HANDWRIT_CATALAN: ib,
        HANDWRIT_CEBUANO: lb,
        HANDWRIT_CORSICAN: wb,
        HANDWRIT_CZECH: Cb,
        HANDWRIT_WELSH: Gb,
        HANDWRIT_DANISH: Ib,
        HANDWRIT_GERMAN: Mb,
        HANDWRIT_GREEK: Wb,
        HANDWRIT_ENGLISH: ac,
        HANDWRIT_ESPERANTO: fc,
        HANDWRIT_SPANISH: gc,
        HANDWRIT_ESTONIAN: lc,
        HANDWRIT_BASQUE: nc,
        HANDWRIT_PERSIAN: pc,
        HANDWRIT_FINNISH: tc,
        HANDWRIT_FILIPINO: vc,
        HANDWRIT_FRENCH: xc,
        HANDWRIT_WESTERN_FRISIAN: Cc,
        HANDWRIT_IRISH: Ec,
        HANDWRIT_SCOTTISH_GAELIC: Hc,
        HANDWRIT_GALICIAN: Jc,
        HANDWRIT_GUJARATI: Lc,
        HANDWRIT_HAWAIIAN: Qc,
        HANDWRIT_HEBREW: Uc,
        HANDWRIT_HINDI: Xc,
        HANDWRIT_HMONG: cd,
        HANDWRIT_CROATIAN: ed,
        HANDWRIT_HAITIAN: gd,
        HANDWRIT_HUNGARIAN: kd,
        HANDWRIT_ARMENIAN: od,
        HANDWRIT_INDONESIAN: pd,
        HANDWRIT_ICELANDIC: sd,
        HANDWRIT_ITALIAN: ud,
        HANDWRIT_JAPANESE: de,
        HANDWRIT_JAVANESE: he,
        HANDWRIT_GEORGIAN: je,
        HANDWRIT_KAZAKH: oe,
        HANDWRIT_KHMER: qe,
        HANDWRIT_KANNADA: se,
        HANDWRIT_KOREAN: we,
        HANDWRIT_KURDISH: ye,
        HANDWRIT_KYRGYZ: Be,
        HANDWRIT_LATIN: Ce,
        HANDWRIT_LUXEMBOURGISH: Fe,
        HANDWRIT_LAO: Ie,
        HANDWRIT_LITHUANIAN: Ke,
        HANDWRIT_LATVIAN: Ne,
        HANDWRIT_MALAGASY: Qe,
        HANDWRIT_MAORI: Re,
        HANDWRIT_MACEDONIAN: Te,
        HANDWRIT_MALAYALAM: Ve,
        HANDWRIT_MONGOLIAN: $e,
        HANDWRIT_MARATHI: ff,
        HANDWRIT_MALAY: lf,
        HANDWRIT_MALTESE: nf,
        HANDWRIT_MULTIPLE_LANGUAGES: pf,
        HANDWRIT_BURMESE: qf,
        HANDWRIT_NORWEGIAN_BOKMAL: vf,
        HANDWRIT_NEPALI: wf,
        HANDWRIT_DUTCH: zf,
        HANDWRIT_NORWEGIAN_NYNORSK: Ef,
        HANDWRIT_NORWEGIAN: Ff,
        HANDWRIT_NYANJA: Lf,
        HANDWRIT_ORIYA: Pf,
        HANDWRIT_PUNJABI: Wf,
        HANDWRIT_POLISH: Yf,
        HANDWRIT_PORTUGUESE: qg,
        HANDWRIT_PORTUGUESE_BRAZIL: gg,
        HANDWRIT_PORTUGUESE_PORTUGAL: lg,
        HANDWRIT_ROMANIAN: vg,
        HANDWRIT_RUSSIAN: Bg,
        HANDWRIT_SINHALA: Og,
        HANDWRIT_SLOVAK: Rg,
        HANDWRIT_SLOVENIAN: Ug,
        HANDWRIT_SAMOAN: Wg,
        HANDWRIT_SHONA: Yg,
        HANDWRIT_SOMALI: Zg,
        HANDWRIT_ALBANIAN: $g,
        HANDWRIT_SERBIAN: dh,
        HANDWRIT_SUNDANESE: ih,
        HANDWRIT_SWEDISH: jh,
        HANDWRIT_SWAHILI: lh,
        HANDWRIT_TAMIL: rh,
        HANDWRIT_TELUGU: zh,
        HANDWRIT_TAJIK: Fh,
        HANDWRIT_THAI: Hh,
        HANDWRIT_TIGRINYA: Nh,
        HANDWRIT_TURKISH: Vh,
        HANDWRIT_UKRAINIAN: ei,
        HANDWRIT_URDU: ji,
        HANDWRIT_UZBEK: qi,
        HANDWRIT_VIETNAMESE: ui,
        HANDWRIT_XHOSA: Di,
        HANDWRIT_YIDDISH: Ei,
        HANDWRIT_CHINESE: Ui,
        HANDWRIT_CHINESE_SIMPLIFIED: Oi,
        HANDWRIT_CHINESE_TRADITIONAL: Ri,
        HANDWRIT_CANTONESE: cj,
        HANDWRIT_ZULU: dj
    });
    ky.prototype.C = function(a) {
        Ij({
            gl: a
        })
    };
    nt = function(a) {
        Ij({
            gi: a
        })
    };
    Os = vj;
    rs = ".ita-kd-img{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite8.png');background-size:850px 250px}@media (min-resolution:144dpi),(-webkit-min-device-pixel-ratio:1.5){.ita-kd-img{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite8_2x.png')}}@media screen and (-ms-high-contrast:white-on-black){.ita-kd-img{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite_grey8.png')}@media (min-resolution:144dpi),(-webkit-min-device-pixel-ratio:1.5){.ita-kd-img{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite_grey8_2x.png')}}}.ita-ff-black-enabled .ita-kd-img{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite_grey8.png')}@media (min-resolution:144dpi),(-webkit-min-device-pixel-ratio:1.5){.ita-ff-black-enabled .ita-kd-img{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite_grey8_2x.png')}}.ita-ppe-can,.ita-ppe-ant,.ita-ppe-can,.ita-ppe-can-list,.ita-ppe-tbl,.ita-ppe-td,.ita-ppe-div,.ita-ppe-uds{font-size:inherit;text-align:inherit;background-color:inherit}.ita-ppe-ant{color:rgb(169,169,169);font-size:14px}.ita-ppe-box{position:absolute;display:block;background-color:white;color:black;cursor:move;border:1px solid #cdcdcd;padding:6px;font-size:16px;box-shadow:0 4px 16px rgba(0,0,0,0.2);z-index:2147483644;text-align:justify;overflow:hidden}.ita-ppe-box.ita-ppe-box-mobile{box-shadow:0 0;display:inline-block;left:0;padding:6px 0;width:100%}.ita-ppe-can{margin:2px;padding:4px;line-height:16px;height:18px}.ita-ppe-can-list{cursor:pointer;display:block;min-height:1.5em;margin:6px 0 0 0;padding:0;white-space:nowrap}.ita-ppe-box-mobile .ita-ppe-can-list{overflow-x:auto;max-width:100%;margin:6px 0 -100px 0;padding:6px 0 106px 0}.ita-ppe-cur{display:inline-block;width:2px;height:18px;background-color:#54bdf0;overflow:hidden;text-decoration:blink;float:none}.ita-ppe-edit{height:20px;line-height:20px;font-size:18px;text-align:inherit;background-color:inherit;padding:0 0 6px 0;outline:none;border:none;white-space:nowrap;font-family:Arial,Sans-serif;cursor:text}.ita-ppe-div{white-space:nowrap}.ita-ppe-box-mobile>.ita-ppe-div{font-size:24px;overflow-x:hidden}.ita-ppe-logo{background-image:url('https://ssl.gstatic.com/inputtools/images/search_button_normal.png');background-position:-197px 3px;width:48px;height:20px;margin:2px;padding:0;float:right}.ita-ppe-pgd,.ita-ppe-pgu{display:inline-block;margin:6px -1px 0 0;width:22px;opacity:0.55;-moz-opacity:0.55;filter:alpha(opacity=55);border:1px solid gray;height:18px;border-radius:2px;-webkit-transition:all 0.218s;-moz-transition:all 0.218s;-o-transition:all 0.218s;transition:all 0.218s;background-color:#f5f5f5;cursor:default}.ita-ppe-navi-box{padding-left:6px;white-space:nowrap}.ita-ppe-pgd{background-position:-816px -66px}.ita-ppe-pgu{background-position:-616px -116px}.ita-ppe-tbl{width:100%}.ita-ppe-tbl,.ita-ppe-td{border:none;padding:0;margin:0}.ita-ppe-uds{border-bottom:solid 2px;margin:0 1px}.ita-ppe-hlt{color:#222;background-color:#f1f1f1}.ita-ppe-hov{opacity:0.9;-moz-opacity:0.9;filter:alpha(opacity=90)}.ita-ppe-dis{opacity:0.333;-moz-opacity:0.333;filter:alpha(opacity=33)}.ita-ppe-dis-text{color:#777777}.ita-isv{position:absolute;border:0;margin:0;padding:0;background-repeat:repeat-x}.ita-isv-grey{color:grey;margin-top:0}.ita-isv-red{color:transparent;margin-top:-2px;background-image:url('https://ssl.gstatic.com/inputtools/images/tilde.png')}@media screen and (-ms-high-contrast:white-on-black){.ita-ppe-pgd,.ita-ppe-pgu{opacity:1px}.ita-ppe-hlt{font-weight:bold;border:1px solid}}.ita-ff-black-enabled .ita-ppe-pgd,.ita-ff-black-enabled .ita-ppe-pgu{opacity:1px}.ita-ff-black-enabled .ita-ppe-hlt{font-weight:bold;border:1px solid}.vk-box,.vk-btn,.vk-btn-n,.vk-cap,.vk-cap-i,.vk-t,.vk-t-btn{display:inline-block;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none}.vk-box{height:auto;padding:10px;background-color:white;border:1px solid #b8b8b8;border:1px solid rgba(0,0,0,0.3);z-index:2147483644;font-family:arial,sans-serif;font-size:14px;position:fixed;box-shadow:0 4px 16px rgba(0,0,0,0.2);touch-action:pinch-zoom}.vk-box-blur{opacity:0.5;-webkit-transition:opacity 0.1s linear}.vk-box.vk-min{padding:2px}.vk-box.vk-sf-ie{border:1px solid #ccc}.vk-btn{border:1px solid #dcdcdc;border:1px solid rgba(0,0,0,0.1);width:29px;height:29px;margin:2px;text-align:center;vertical-align:middle;position:relative;padding:1px;min-width:0px;max-width:500px;min-height:0px;max-height:50px;color:#444;background-color:#f5f5f5;background-image:linear-gradient(to bottom,#f5f5f5,#f1f1f1);background-image:-webkit-gradient(linear,left top,left bottom,from(#f5f5f5),to(#f1f1f1));background-image:-webkit-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-moz-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-ms-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-o-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:linear-gradient(to bottom,#f5f5f5,#f1f1f1);filter:progid:DXImageTransform.Microsoft.gradient(startColorStr='#f5f5f5',EndColorStr='#f1f1f1');border-radius:2px;-webkit-border-radius:2px;-moz-border-radius:2px}.vk-btn.vk-sf-h{border-color:#c6c6c6;color:#222;background-color:#f8f8f8;background-image:-webkit-gradient(linear,left top,left bottom,from(#f8f8f8),to(#f1f1f1));background-image:-webkit-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:-moz-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:-ms-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:-o-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:linear-gradient(to bottom,#f8f8f8,#f1f1f1);filter:progid:DXImageTransform.Microsoft.gradient(startColorStr='#f8f8f8',EndColorStr='#f1f1f1');box-shadow:0px 1px 1px rgba(0,0,0,0.1)}.vk-btn.vk-sf-a{border-color:#c6c6c6;color:#333;background-color:#f6f6f6;background-image:-webkit-gradient(linear,left top,left bottom,from(#f6f6f6),to(#f1f1f1));background-image:-webkit-linear-gradient(top,#f6f6f6,#f1f1f1);background-image:-moz-linear-gradient(top,#f6f6f6,#f1f1f1);background-image:-ms-linear-gradient(top,#f6f6f6,#f1f1f1);background-image:-o-linear-gradient(top,#f6f6f6,#f1f1f1);background-image:linear-gradient(to bottom,#f6f6f6,#f1f1f1);filter:progid:DXImageTransform.Microsoft.gradient(startColorStr='#f6f6f6',EndColorStr='#f1f1f1');box-shadow:inset 0px 1px 2px rgba(0,0,0,0.1)}.vk-btn.vk-sf-s{border-color:#ccc;color:#333;background-color:#eeeeee;background-image:-webkit-gradient(linear,left top,left bottom,from(#eeeeee),to(#e0e0e0));background-image:-webkit-linear-gradient(top,#eeeeee,#e0e0e0);background-image:-moz-linear-gradient(top,#eeeeee,#e0e0e0);background-image:-ms-linear-gradient(top,#eeeeee,#e0e0e0);background-image:-o-linear-gradient(top,#eeeeee,#e0e0e0);background-image:linear-gradient(to bottom,#eeeeee,#e0e0e0);filter:progid:DXImageTransform.Microsoft.gradient(startColorStr='#EEEEEE',EndColorStr='#E0E0E0');box-shadow:inset 0px 1px 2px rgba(0,0,0,0.1)}.vk-cap,.vk-t{font-size:14px;font-family:arial,sans-serif;font-weight:normal;line-height:25px}.vk-cap{cursor:default}.vk-cap.vk-sf-b,.vk-t-btn{background-repeat:no-repeat}.vk-cap.vk-sf-b{width:22px;height:17px;opacity:.667}.vk-sf-ff2 .vk-cap.vk-sf-b{display:block;position:relative;left:6px;top:0}.vk-cap.vk-sf-b.vk-sf-h{opacity:.9}.vk-cap.vk-sf-b.vk-sf-c8{background-position:-714px -16px}.vk-cap.vk-sf-b.vk-sf-c20{background-position:-614px -66px}.vk-cap.vk-sf-b.vk-sf-c16{background-position:-814px -16px}.vk-cap.vk-sf-c273{font-size:14px}.vk-cap-i{border:none;width:20px;height:20px}.vk-t{height:24px;cursor:move;padding:0px 3px;color:#888888;display:inline-block;overflow:hidden;width:100%}.vk-t.vk-min{width:auto}.vk-t-btns{margin:0px;padding:0px;position:absolute;display:inline-block;white-space:nowrap;top:0}.vk-t-btns.vk-min{position:relative}.vk-t-btn{margin:0px;height:14px!important;width:14px!important;opacity:.4;filter:alpha(opacity=40)}.vk-t-btn.vk-sf-hp{background-position:-670px -70px}.vk-t-btn.vk-sf-min{background-position:-720px -70px}.vk-t-btn.vk-sf-max{background-position:-770px -70px}.vk-t-btn.vk-sf-cl{background-position:-670px -20px}.vk-t-btn.vk-sf-th{opacity:1;filter:alpha(opacity=100)}.vk-t-btn-o{padding:13px 4px 8px 4px;cursor:default;display:inline-block;position:relative}.vk-t-btn-o.vk-min{padding:2px}.vk-t-btn-o.vk-sf-hp{cursor:pointer}.vk-ea-l{margin-right:32px}.vk-ea-r{margin-left:32px}.vk-ss{margin:0 5px}.vk-l-i{pointer-events:none;text-decoration:none;color:#000000!important;font-weight:bold}.vk-l-a{color:#0000ff}@media screen and (-ms-high-contrast:white-on-black){.vk-btn,.vk-btn.vk-sf-a,.vk-btn.vk-sf-h,.vk-btn.vk-sf-s{background-image:none;background-color:black}.vk-cap.vk-sf-b{opacity:1}.vk-btn.vk-sf-a,.vk-btn.vk-sf-h,.vk-btn.vk-sf-s{border-width:2px}.vk-btn.vk-sf-a .vk-cap,.vk-btn.vk-sf-h .vk-cap,.vk-btn.vk-sf-s .vk-cap{font-weight:bold}}.ita-ff-black-enabled .vk-btn,.ita-ff-black-enabled .vk-btn.vk-sf-a,.ita-ff-black-enabled .vk-btn.vk-sf-h,.ita-ff-black-enabled .vk-btn.vk-sf-s{background-image:none;background-color:black}.ita-ff-black-enabled .vk-cap.vk-sf-b{opacity:1}.ita-ff-black-enabled .vk-btn.vk-sf-a,.ita-ff-black-enabled .vk-btn.vk-sf-h,.ita-ff-black-enabled .vk-btn.vk-sf-s{border-width:2px}.ita-ff-black-enabled .vk-btn.vk-sf-a .vk-cap,.ita-ff-black-enabled .vk-btn.vk-sf-h .vk-cap,.ita-ff-black-enabled .vk-btn.vk-sf-s .vk-cap{font-weight:bold}.ita-hwt-ime{overflow:hidden;width:425px;height:297px;background:#ffffff;touch-action:pinch-zoom}.ita-hwt-ime-st{position:fixed;opacity:0.5;box-shadow:0px 4px 16px rgba(0,0,0,0.2);border:1px solid rgb(204,204,204);-webkit-transition:opacity 0.1s linear;z-index:2147483640}.ita-hwt-ime-full{width:auto!important;left:2px!important;right:2px!important}.ita-hwt-ime-opaque{opacity:0.99!important}.ita-hwt-ime-init-opaque{opacity:0.99!important}.ita-hwt-ime-hover{opacity:0.99;-webkit-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;transition:opacity 0.1s linear}canvas.ita-hwt-canvas{cursor:url('https://ssl.gstatic.com/inputtools/images/pencil.png') 0 10,auto;vertical-align:bottom;touch-action:none}.ita-hwt-grip{position:absolute;cursor:move;top:0}.ita-hwt-ltr .ita-hwt-grip{left:0}.ita-hwt-rtl .ita-hwt-grip{right:0}.ita-hwt-close{background-position:-660px -10px;background-color:white;width:30px;height:30px;position:absolute;top:0;cursor:pointer}.ita-hwt-ltr .ita-hwt-close{right:0}.ita-hwt-rtl .ita-hwt-close{left:0}.ita-hwt-candidates{border-top:1px solid rgb(204,204,204);background:#fff;text-align:left;white-space:nowrap}.ita-hwt-candidate{display:inline-block;white-space:nowrap;height:32px;line-height:24px;padding:6px 18px 3px 18px;border-right:1px solid rgb(204,204,204);font-family:arial,verdana,sans-serif;font-size:small;color:#222;cursor:pointer}.ita-hwt-selected{color:#444}.ita-hwt-candidate-hover{background-color:#f0f0f0;color:#444}.ita-hwt-candidate:active{background-color:#e0e0e0;color:#444}.ita-hwt-disabled{opacity:0.5}.ita-hwt-buttons{background-color:#f0f0f0;height:60px;border-top:1px solid rgb(204,204,204)}.ita-hwt-button{display:inline-block;vertical-align:top}.ita-hwt-backspace{margin:10px;width:24px!important;height:40px!important}.ita-hwt-backspace-img{background-position:-714px -118px;width:18px;height:14px;margin:13px 4px 13px 4px}.ita-hwt-space{margin:10px 0 10px 0;height:24px;width:296px;line-height:24px;padding:8px 0px 8px 0px!important;font-family:arial,verdana,sans-serif;font-size:small;text-align:center}.ita-hwt-enter{margin:10px;width:24px!important;height:40px!important}.ita-hwt-enter-img{margin:13px 4px 13px 4px}.ita-hwt-language{position:absolute;right:0px;bottom:0px;width:auto;height:auto;font-size:small;color:#7590d4}.ita-hwt-clear-time{position:absolute;right:30px;bottom:0px;width:auto;height:auto;font-size:small;color:#7590d4;cursor:pointer}.ita-hwt-insert-time{position:absolute;right:60px;bottom:0px;width:auto;height:auto;font-size:small;color:#7590d4;cursor:pointer}.ita-hwt-enter-img-dark{background-position:-768px -120px;width:14px;height:10px}.ita-hwt-enter-img-white{background-position:-818px -120px;width:14px;height:10px}.ita-hwt-grip{background-position:-700px -160px;width:47px;height:29px}.ita-hwt-grip-hover{background-position:-650px -160px}.ita-hwt-grip:active{background-position:-600px -160px}.ita-hwt-jfk{-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;cursor:default;font-size:11px;font-weight:bold;text-align:center;white-space:nowrap;padding:0 8px}.ita-hwt-jfk-hover{-webkit-box-shadow:0 1px 1px rgba(0,0,0,.1);-moz-box-shadow:0 1px 1px rgba(0,0,0,.1);box-shadow:0 1px 1px rgba(0,0,0,.1)}.ita-hwt-jfk-standard{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;background-color:#f5f5f5;background-image:-webkit-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-moz-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-ms-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-o-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:linear-gradient(to bottom,#f5f5f5,#f1f1f1);color:#444;border:1px solid #dcdcdc;border:1px solid rgba(0,0,0,0.1)}.ita-hwt-jfk-standard.ita-hwt-jfk-hover{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;background-color:#f8f8f8;background-image:-webkit-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:-moz-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:-ms-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:-o-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:linear-gradient(to bottom,#f8f8f8,#f1f1f1);border:1px solid #c6c6c6;color:#333}.ita-hwt-jfk-action{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;background-color:#4d90fe;background-image:-webkit-linear-gradient(top,#4d90fe,#4787ed);background-image:-moz-linear-gradient(top,#4d90fe,#4787ed);background-image:-ms-linear-gradient(top,#4d90fe,#4787ed);background-image:-o-linear-gradient(top,#4d90fe,#4787ed);background-image:linear-gradient(to bottom,#4d90fe,#4787ed);border:1px solid #3079ed;color:#fff}.ita-hwt-jfk-action.ita-hwt-jfk-hover{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;background-color:#357ae8;background-image:-webkit-linear-gradient(top,#4d90fe,#357ae8);background-image:-moz-linear-gradient(top,#4d90fe,#357ae8);background-image:-ms-linear-gradient(top,#4d90fe,#357ae8);background-image:-o-linear-gradient(top,#4d90fe,#357ae8);background-image:linear-gradient(to bottom,#4d90fe,#357ae8);border:1px solid #2f5bb7;border-bottom-color:#2f5bb7}.ita-hwt-butterbar{position:absolute;left:0;bottom:100px;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;-webkit-box-shadow:0px 2px 4px rgba(0,0,0,0.2);-moz-box-shadow:0px 2px 4px rgba(0,0,0,0.2);box-shadow:0px 2px 4px rgba(0,0,0,0.2);-webkit-transition:all 0 linear 1s,opacity 1s;-moz-transition:all 0 linear 1s,opacity 1s;-o-transition:all 0 linear 1s,opacity 1s;transition:all 0 linear 1s,opacity 1s;border-style:solid;border-width:0;font-size:11px;height:0;opacity:0;visibility:hidden;overflow:hidden;padding:0;margin:10px;text-align:center;background-color:#f9edbe;border-color:#f0c36d;color:#333}.ita-hwt-butterbar.shown{-webkit-transition:opacity 0.218s;-moz-transition:opacity 0.218s;-o-transition:opacity 0.218s;transition:opacity 0.218s;border-width:1px;height:14px;opacity:1;visibility:visible;padding:2px 16px}@media screen and (-ms-high-contrast:white-on-black){.ita-hwt-candidate-hover,.ita-hwt-candidate:active{font-weight:bold;border:2px solid}.ita-hwt-jfk-action{outline:2px solid}.ita-hwt-jfk{background-image:none}.ita-hwt-jfk-standard.ita-hwt-jfk-hover,.ita-hwt-jfk-action.ita-hwt-jfk-hover{background-image:none;outline:2px solid}}.ita-ff-black-enabled .ita-hwt-candidate-hover,.ita-ff-black-enabled .ita-hwt-candidate:active{font-weight:bold;border:2px solid}.ita-ff-black-enabled .ita-hwt-jfk-action{outline:2px solid}.ita-ff-black-enabled .ita-hwt-jfk{background-image:none}.ita-ff-black-enabled .ita-hwt-jfk-standard.ita-hwt-jfk-hover,.ita-ff-black-enabled .ita-hwt-jfk-action.ita-hwt-jfk-hover{background-image:none;outline:2px solid}.ita-kd-btn-zh{background-position:-514px -18px}.ita-kd-btn-en{background-position:-564px -18px}.ita-kd-btn-dbc{background-position:-514px -68px}.ita-kd-btn-sbc{background-position:-564px -68px}.ita-kd-btn-zh_pun{background-position:-514px -118px}.ita-kd-btn-en_pun{background-position:-564px -118px}.ita-kd-arrow{background-position:-620px -218px;width:12px;height:15px}.ita-kd-floating-bar-icon{background-position:-670px -116px;width:12px;height:15px}.ita-kd-icon-button.ita-kd-left{-webkit-border-radius:2px 0 0 2px;-moz-border-radius:2px 0 0 2px;border-radius:2px 0 0 2px}.ita-kd-icon-button.ita-kd-right,.ita-kd-icon-button.ita-kd-mid{margin-left:-1px}.ita-kd-icon-button.ita-kd-single{-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px}.ita-kd-icon-button{display:inline-block;min-width:54px;text-align:center;color:#444;font-size:11px;font-weight:bold;height:27px;padding:0 8px;margin:0;-webkit-transition:all 0.218s;-moz-transition:all 0.218s;-o-transition:all 0.218s;transition:all 0.218s;-webkit-user-select:none;-moz-user-select:none;cursor:default}.ita-kd-inputtools-div{display:table;white-space:nowrap}.ita-kd-inputtools-div .ita-kd-icon-button{float:left;position:relative;z-index:1}::-webkit-input-placeholder{color:#999}.ita-kd-icon-button.ita-kd-small{min-width:33px;width:33px;padding:0}.ita-kd-icon-button.ita-kd-small.ita-kd-mobile{height:30px;width:44px}.ita-kd-icon-button.ita-kd-dropdown{min-width:18px;width:18px;padding:0}.ita-kd-icon-button.ita-kd-dropdown.ita-kd-mobile{height:30px;width:36px}.ita-kd-icon-button.ita-kd-floating-bar{min-width:14px;width:14px;padding:0;cursor:move}.ita-kd-icon{width:23px;height:16px}.ita-kd-icon-span{display:inline-block;margin:6px 0 0 0;opacity:.26;vertical-align:middle}.ita-kd-arrow.ita-kd-icon-span,.ita-kd-statusbar-icon,.ita-kd-icon-button.ita-kd-selected .ita-kd-icon-span{opacity:.54}.ita-kd-icon-button:focus{outline:none}.ita-kd-statusbar{box-shadow:0 2px 4px rgba(0,0,0,.2);border-radius:3px;white-space:nowrap;direction:ltr;position:fixed;background-color:#eeeeee;z-index:2147483643}.ita-kd-statusbar-table{padding:0px;margin:0px;border:none}.ita-kd-separator{border-top:1px solid #ebebeb;margin-top:5px;margin-bottom:6px}.ita-kd-inputtool-icon:focus{margin-right:1px}.ita-kd-dropdown-menu{background:#fff;border:1px solid rgba(0,0,0,0.2);padding:6px 0;margin:0;white-space:nowrap;z-index:2147483645;-moz-transition:opacity 0.218s;-o-transition:opacity 0.218s;-webkit-transition:opacity 0.218s;transition:opacity 0.218s;position:absolute}.ita-kd-dropdown-menu-mobile{position:absolute;top:0;left:0;background-color:rgba(199,200,200,0.5);width:100%;height:100%;z-index:100}.ita-kd-dropdown-menu-mobile>.ita-kd-dropdown-menu{margin:auto;max-width:600px;position:relative;top:50%;transform:translateY(-50%);-webkit-transform:translateY(-50%)}.ita-kd-dropdown-menu:focus{outline:none}.ita-kd-dropdown-menu.ita-kd-ie{border:1px solid #ccc;width:260px}.ita-kd-menuitem{display:block;padding:6px 38px 6px 8px;position:relative;color:#333;font-size:13px;height:16px;font-weight:normal;cursor:default}.ita-kd-dropdown-menu-mobile .ita-kd-menuitem{padding-top:16px}.ita-kd-menuitem-inputtool-icon{width:23px;height:16px;display:inline-block;opacity:0.54;position:relative;top:3px}.ita-kd-menuitem-inputtool-name{line-height:17px;padding:0 6px 0 6px}.ita-kd-menuitem-setting{line-height:17px;padding:0 22px 0 22px}.ita-kd-menuitem-hover{background-color:#f1f1f1!important;color:#222!important}.ita-kd-menuitem .ita-kd-checkbox{display:inline-block;width:22px;height:16px}.ita-kd-menuitem.ita-kd-selected .ita-kd-checkbox{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite8.png');background-position:-614px -14px;background-size:850px 250px}@media (min-resolution:144dpi),(-webkit-min-device-pixel-ratio:1.5){.ita-kd-menuitem.ita-kd-selected .ita-kd-checkbox{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite8_2x.png')}}@media screen and (-ms-high-contrast:white-on-black){.ita-kd-menuitem.ita-kd-selected .ita-kd-checkbox{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite_grey8.png')}@media (min-resolution:144dpi),(-webkit-min-device-pixel-ratio:1.5){.ita-kd-menuitem.ita-kd-selected .ita-kd-checkbox{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite_grey8_2x.png')}}.ita-kd-icon-span,.ita-kd-menuitem-inputtool-icon{opacity:1}.ita-kd-menuitem-hover{border:1px solid;font-weight:bold}.ita-kd-statusbar{border:1px solid}.ita-kd-icon-button.ita-kd-icon-button-hover{border:1px solid}}.ita-ff-black-enabled .ita-kd-menuitem.ita-kd-selected .ita-kd-checkbox{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite_grey8.png')}@media (min-resolution:144dpi),(-webkit-min-device-pixel-ratio:1.5){.ita-ff-black-enabled .ita-kd-menuitem.ita-kd-selected .ita-kd-checkbox{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite_grey8_2x.png')}}.ita-ff-black-enabled .ita-kd-icon-span,.ita-ff-black-enabled .ita-kd-menuitem-inputtool-icon{opacity:1}.ita-ff-black-enabled .ita-kd-menuitem-hover{border:1px solid;font-weight:bold}.ita-ff-black-enabled.ita-kd-statusbar{border:1px solid}.ita-ff-black-enabled .ita-kd-icon-button.ita-kd-icon-button-hover{border:1px solid}.kd-bubble{background:#f9edbe;outline:1px solid #f0c36d;box-shadow:0 2px 4px rgba(0,0,0,0.2);padding:16px;border-radius:2px;width:300px}.kd-bubble a{text-decoration:none;color:#15c;cursor:pointer}.kd-bubble p{color:#666;margin:0;font-size:13px;line-height:18px}p.kd-bubble-links{margin-top:10px}.kd-bubble-pointer{outline:none;display:block;position:absolute;top:-11px;left:24px;margin:0 0 0 -5px;width:17px;height:11px;background:url('image/bubble_point_yellow.png')}";
    z(Xz, Oz);
    z(Yz, O);
    x = Yz.prototype;
    x.Jc = function() {
        this.A && this.A.postMessage({
            getCursorPosition: "all"
        });
        var a = Io(document.activeElement);
        a = Sm(a, new P(document.body.scrollLeft, document.body.scrollTop));
        var b = this.D;
        a = new P(a.x + b.x, a.y + b.y);
        return new Or(a.x, a.y)
    };
    x.wc = function() {
        this.A && this.A.postMessage({
            setFocus: "all"
        })
    };
    x.commitText = function(a, b) {
        this.A && this.A.postMessage({
            commitText: [a, b]
        })
    };
    x.Ba = function(a) {
        var b = this.B.length;
        return this.B.slice(Math.max(0, b - a), b)
    };
    x.yb = function() {
        return null
    };
    x.Tb = function() {
        return !0
    };
    x.pb = function(a, b) {
        this.A && this.A.postMessage({
            sendInputEvents: [a, b]
        })
    };
    z($z, O);
    $z.prototype.F = function(a) {
        var b = a.target;
        b && b != vq && (b.frameElement && (b = b.frameElement), aA(this, a, b))
    };
    $z.prototype.G = function(a) {
        var b = this,
            c = sk(a.A);
        oo(function() {
            return bA(b, b.C, new $l(c))
        }, 0)
    };
    $z.prototype.M = function() {
        O.prototype.M.call(this);
        try {
            D(this.B)
        } catch (a) {}
        delete this.A;
        delete this.D
    };
    z(cA, E);
    x = cA.prototype;
    x.hg = function(a, b, c) {
        if (!this.A) return !1;
        this.U = !1;
        a[this.H.jg] && this.ca();
        if (a[this.H.ue]) {
            a = a[this.H.ue];
            var d = this.B,
                e = sk(this.D),
                g = this.C;
            a && mk(a, function(h, k) {
                switch (Number(k)) {
                    case 1:
                        d = h;
                        break;
                    case 5:
                        e.tsbc = h;
                        break;
                    case 4:
                        e.tlang = h;
                        break;
                    case 6:
                        e.pun = h;
                        break;
                    case 7:
                        e.mk = !h;
                        break;
                    case 9:
                        e.ss = h;
                        break;
                    case 8:
                        Pu = h;
                        break;
                    case 2:
                        this.R = h;
                        break;
                    case 3:
                        g = h;
                        break;
                    case 10:
                        this.P = h || "";
                        break;
                    case 29:
                        this.X = h || !1
                }
            }, this);
            dA(this, d, g, e)
        }
        this.U = !0;
        return !!c
    };
    x.di = function(a) {
        if (!this.N) {
            if (this.U) {
                var b = {};
                switch (a.type) {
                    case "sb":
                        switch (a.G) {
                            case bi:
                                b[5] = a.value;
                                break;
                            case Rh:
                                b[4] = a.value;
                                break;
                            case "pun":
                                b[6] = a.value
                        }
                        this.D[a.G] = a.value;
                        break;
                    case "kmi":
                        b[7] = !1;
                        this.D.mk = !0;
                        break;
                    case "kma":
                        b[7] = !0;
                        this.D.mk = !1;
                        break;
                    case tb:
                        this.C = a.currInputToolActive, this.B = a.currInputToolName, this.P = a.prevInputToolName, this.X = a.prevInputToolActive, b[3] = this.C, b[1] = this.B, b[10] = this.P, b[29] = this.X
                }
                Ij(vk(this.H.ng, b))
            }
            eA(this)
        }
    };
    x.Ld = function(a) {
        (a = a.target) && a != this.G && ms(a) && (this.A.Qd(this.G), this.G && (this.S ? this.G.setAttribute(Sa, this.S) : this.G.removeAttribute(Sa)), this.G = a, this.S = a.getAttribute(Sa), a.setAttribute(Sa, "off"), this.A.qd(a))
    };
    x.Zc = function() {
        this.G && (this.S ? this.G.setAttribute(Sa, this.S) : this.G.removeAttribute(Sa));
        this.A.Gc();
        this.C = !1;
        this.Ud()
    };
    x.ci = function() {
        this.N = !0;
        this.B && this.C && this.A.Gc()
    };
    x.Xh = function() {
        this.N = !1;
        this.B && this.C && Vz(this.A, this.B, this.D)
    };
    x.qg = function(a) {
        if (this.A) {
            var b = new Yz(a, this.A);
            b.A && b.A.postMessage({
                inputMode: [this.C ? this.B : "", this.D]
            });
            this.I.push(b);
            var c = this;
            a.onDisconnect.addListener(function() {
                c.A.Qd([b]);
                Uj(c.I, b);
                D(b)
            });
            this.A.qd([b])
        }
    };
    x.Ud = function() {
        this.K.setAttribute("input", this.C ? this.B : "");
        var a = this.K,
            b = a.setAttribute,
            c = [];
        bu(new au, this.D, c);
        b.call(a, "input_stat", c.join(""));
        a = document.createEvent("Event");
        a.initEvent("syc", !0, !0);
        this.K.dispatchEvent(a)
    };
    x.mh = function(a) {
        H(this.I, function(b) {
            b.A && b.A.postMessage(vk("se" == a.type ? "onstage" : "offstage", "all"))
        })
    };
    x.M = function() {
        this.U = !1;
        window.clearInterval(this.Y);
        this.Zc();
        D(this.A);
        D(this.F);
        this.B = "";
        delete this.F;
        delete this.A;
        delete this.I;
        delete this.S;
        delete this.R;
        delete this.D;
        delete this.G;
        on(this.K)
    };
    x.ve = function(a) {
        a = void 0 === a ? A.document : a;
        if (a = a.activeElement) {
            if (a.tagName.toUpperCase() == la) {
                var b = ls(a);
                if (b && b.activeElement != a) {
                    this.ve(b);
                    return
                }
            }
            ms(a) && this.Ld(new J("aec", a))
        }
    };
    az = !0;
    var aB = Ym(document, ka);
    if (aB) {
        var bB = document.createEvent("Events");
        bB.initEvent("GOOGLE_ITA_KD", !0, !0);
        aB.dispatchEvent(bB)
    }
    var cB = new cA,
        dB = Ym(document, "GOOGLE_INPUT_NON_CHEXT_FLAG");
    dB && dB.IS_INPUT_ACTIVE && cB.Zc();
    if (window.jstiming) {
        window.jstiming.xe = {};
        window.jstiming.Vh = 1;
        var eB = function(a, b, c) {
                var d = a.t[b],
                    e = a.t.start;
                if (d && (e || c)) return d = a.t[b][0], void 0 != c ? e = c : e = e[0], Math.round(d - e)
            },
            fB = function(a, b, c) {
                var d = "";
                window.jstiming.srt && (d += "&srt=" + window.jstiming.srt, delete window.jstiming.srt);
                window.jstiming.pt && (d += "&tbsrt=" + window.jstiming.pt, delete window.jstiming.pt);
                try {
                    window.external && window.external.tran ? d += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += "&tran=" +
                        window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
                } catch (L) {}
                var e = window.chrome;
                if (e && (e = e.loadTimes)) {
                    e().wasFetchedViaSpdy && (d += "&p=s");
                    if (e().wasNpnNegotiated) {
                        d += "&npn=1";
                        var g = e().npnNegotiatedProtocol;
                        g && (d += "&npnv=" + (encodeURIComponent || escape)(g))
                    }
                    e().wasAlternateProtocolAvailable && (d += "&apa=1")
                }
                var h = a.t,
                    k = h.start;
                e = [];
                g = [];
                for (var l in h)
                    if (l != gh && 0 != l.indexOf("_")) {
                        var n = h[l][1];
                        n ? h[n] && g.push(l + "." + eB(a, l, h[n][0])) : k && e.push(l + "." + eB(a,
                            l))
                    } delete h.start;
                if (b)
                    for (var y in b) d += "&" + y + "=" + b[y];
                (b = c) || (b = "https:" == document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
                return [b, "?v=3", "&s=" + (window.jstiming.sn || "i18n_input") + "&action=", a.name, g.length ? "&it=" + g.join(",") : "", d, "&rt=", e.join(",")].join("")
            },
            gB = function(a, b, c) {
                a = fB(a, b, c);
                if (!a) return "";
                b = new Image;
                var d = window.jstiming.Vh++;
                window.jstiming.xe[d] = b;
                b.onload = b.onerror = function() {
                    window.jstiming && delete window.jstiming.xe[d]
                };
                b.src = a;
                b = null;
                return a
            };
        window.jstiming.report = function(a, b, c) {
            var d = document.visibilityState,
                e = "visibilitychange";
            d || (d = document.webkitVisibilityState, e = "webkitvisibilitychange");
            if ("prerender" == d) {
                var g = !1,
                    h = function() {
                        if (!g) {
                            b ? b.prerender = "1" : b = {
                                prerender: "1"
                            };
                            if ("prerender" == (document.visibilityState || document.webkitVisibilityState)) var k = !1;
                            else gB(a, b, c), k = !0;
                            k && (g = !0, document.removeEventListener(e, h, !1))
                        }
                    };
                document.addEventListener(e, h, !1);
                return ""
            }
            return gB(a, b, c)
        }
    };
}).call(this);