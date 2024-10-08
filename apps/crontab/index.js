let crontabGuruStarter = function() {
    !function e(t, n, r) {
        function o(i, u) {
            if (!n[i]) {
                if (!t[i]) {
                    var s = "function" == typeof require && require;
                    if (!u && s)
                        return s(i, !0);
                    if (a)
                        return a(i, !0);
                    var c = new Error("Cannot find module '" + i + "'");
                    throw c.code = "MODULE_NOT_FOUND",
                    c
                }
                var l = n[i] = {
                    exports: {}
                };
                t[i][0].call(l.exports, function(e) {
                    return o(t[i][1][e] || e)
                }, l, l.exports, e, t, n, r)
            }
            return n[i].exports
        }
        for (var a = "function" == typeof require && require, i = 0; i < r.length; i++)
            o(r[i]);
        return o
    }({
        1: [function(e, t, n) {
            e("string.prototype.startswith"),
            e("string.prototype.endswith"),
            Number.isInteger || (Number.isInteger = e("is-integer")),
            Array.prototype.includes || (Array.prototype.includes = function(e) {
                return 0 <= this.indexOf(e)
            }
            ),
            String.prototype.includes || (String.prototype.includes = e("string-includes"));
            var r = e("choo");
            window.start = function() {
                var t = document.getElementById("contabContentBox");
                if (["flexBasis", "webkitFlexBasis", "msFlexAlign"].some(function(e) {
                    return e in document.body.style
                })) {
                    var n = r();
                    n.model(e("./models/app")),
                    n.router(function(t) {
                        return [t("/", e("./pages/home"))]
                    });
                    var o = n.start({
                        history: !1,
                        href: !1
                    });
                    t.replaceChild(o, t.firstChild)
                } else
                    t.innerHTML = "Your browser is not supported."
            }
        }
        , {
            "./models/app": 16,
            "./pages/home": 49,
            choo: 21,
            "is-integer": 28,
            "string-includes": 39,
            "string.prototype.endswith": 40,
            "string.prototype.startswith": 41
        }],
        2: [function(e, t, n) {
            e("choo/html"),
            t.exports = function(t, n, r) {
                return function() {
                    var t = e("./yo-yoify/lib/appendChild.js")
                      , n = document.createElement("span");
                    return t(n, [arguments[0]]),
                    n
                }(t.commonBlurb)
            }
        }
        , {
            "./yo-yoify/lib/appendChild.js": 48,
            "choo/html": 20
        }],
        3: [function(e, t, n) {
            function r(e, t) {
                return t.selectedPart === e ? "active" : ""
            }
            e("choo/html"),
            t.exports = function(t, n, o) {
                if (t.description) {
                    var a = t.description;
                    return a.special ? function() {
                        var t = e("./yo-yoify/lib/appendChild.js")
                          , n = document.createElement("div");
                        n.setAttribute("id", "hr"),
                        n.setAttribute("class", "human-readable");
                        var r = document.createElement("i")
                          , o = document.createElement("span");
                        return t(o, [arguments[0]]),
                        t(r, ["\n          “", o, "”\n        "]),
                        t(n, ["\n        ", r, "\n      "]),
                        n
                    }(a.special) : (setTimeout(function() {
                        var e = document.getElementById("hr");
                        e.style.display = "none",
                        e.offsetHeight,
                        e.style.display = ""
                    }, 0),
                    a.isTime ? function() {
                        var t = e("./yo-yoify/lib/appendChild.js")
                          , n = document.createElement("div");
                        n.setAttribute("id", "hr"),
                        n.setAttribute("class", "human-readable");
                        var r = document.createElement("i")
                          , o = document.createElement("span");
                        t(o, [arguments[0]]);
                        var a = document.createElement("span");
                        a.setAttribute("class", arguments[1]),
                        t(a, [arguments[2]]);
                        var i = document.createElement("span");
                        i.setAttribute("class", arguments[3]),
                        t(i, [arguments[4]]);
                        var u = document.createElement("span");
                        u.setAttribute("class", arguments[5]),
                        t(u, [arguments[6]]);
                        var s = document.createElement("span");
                        t(s, [arguments[7]]);
                        var c = document.createElement("span");
                        c.setAttribute("class", arguments[8]),
                        t(c, [arguments[9]]);
                        var l = document.createElement("span");
                        l.setAttribute("class", arguments[10]),
                        t(l, [arguments[11]]);
                        var d = document.createElement("span");
                        return t(d, [arguments[12]]),
                        t(r, ["\n            “", o, " ", a, ":", i, arguments[13], u, arguments[14], s, arguments[15], c, arguments[16], l, d, "”\n          "]),
                        t(n, ["\n          ", r, "\n        "]),
                        n
                    }(a.start, r(2, t), a.hours, r(1, t), a.minutes, r(3, t), a.dates, a.datesWeekdays, r(5, t), a.weekdays, r(4, t), a.months, a.end, a.dates ? " " : "", a.datesWeekdays ? " " : "", a.weekdays ? " " : "", a.months ? " " : "") : function() {
                        var t = e("./yo-yoify/lib/appendChild.js")
                          , n = document.createElement("div");
                        n.setAttribute("id", "hr"),
                        n.setAttribute("class", "human-readable");
                        var r = document.createElement("i")
                          , o = document.createElement("span");
                        t(o, [arguments[0]]);
                        var a = document.createElement("span");
                        a.setAttribute("class", arguments[1]),
                        t(a, [arguments[2]]);
                        var i = document.createElement("span");
                        i.setAttribute("class", arguments[3]),
                        t(i, [arguments[4]]);
                        var u = document.createElement("span");
                        u.setAttribute("class", arguments[5]),
                        t(u, [arguments[6]]);
                        var s = document.createElement("span");
                        t(s, [arguments[7]]);
                        var c = document.createElement("span");
                        c.setAttribute("class", arguments[8]),
                        t(c, [arguments[9]]);
                        var l = document.createElement("span");
                        l.setAttribute("class", arguments[10]),
                        t(l, [arguments[11]]);
                        var d = document.createElement("span");
                        return t(d, [arguments[12]]),
                        t(r, ["\n          “", o, arguments[13], a, arguments[14], i, arguments[15], u, arguments[16], s, arguments[17], c, arguments[18], l, d, "”\n        "]),
                        t(n, ["\n        ", r, "\n      "]),
                        n
                    }(a.start, r(1, t), a.minutes, r(2, t), a.hours, r(3, t), a.dates, a.datesWeekdays, r(5, t), a.weekdays, r(4, t), a.months, a.end, a.minutes ? " " : "", a.hours ? " " : "", a.dates ? " " : "", a.datesWeekdays ? " " : "", a.weekdays ? " " : "", a.months ? " " : ""))
                }
                return function() {
                    var t = e("./yo-yoify/lib/appendChild.js")
                      , n = document.createElement("div");
                    n.setAttribute("id", "hr"),
                    n.setAttribute("class", "human-readable");
                    var r = document.createElement("i");
                    return t(r, [arguments[0]]),
                    t(n, [r]),
                    n
                }(" ")
            }
        }
        , {
            "./yo-yoify/lib/appendChild.js": 48,
            "choo/html": 20
        }],
        4: [function(e, t, n) {
            e("choo/html");
            var r = e("../lib/index")
              , o = e("../lib/dateFormatter");
            t.exports = function(t, n, a) {
                var i = t.moreNextDates ? 5 : 1
                  , u = [];
                if (t.schedule && !t.schedule.errors) {
                    var s = t.date;
                    if (s = new Date(Date.UTC(s.getFullYear(), s.getMonth(), s.getDate(), s.getHours(), s.getMinutes(), s.getSeconds())),
                    s = r.nextDate(t.schedule, s)) {
                        for (var c = [s]; 0 < --i; )
                            s = r.nextDate(t.schedule, new Date(s.getTime() + 1)),
                            c.push(s);
                        return function() {
                            var t = e("./yo-yoify/lib/appendChild.js")
                              , n = document.createElement("div");
                            return n.setAttribute("class", "next-date"),
                            t(n, ["\n          ", arguments[0], "\n        "]),
                            n
                        }(u = c.map(function(t, n) {
                            var r, i = 0 === n ? function() {
                                var t = e("./yo-yoify/lib/appendChild.js")
                                  , n = document.createElement("span");
                                return n.onclick = arguments[0],
                                n.setAttribute("class", "clickable"),
                                t(n, ["next"]),
                                n
                            }(function(e) {
                                return a("toggleMoreNextDates")
                            }) : (e("./yo-yoify/lib/appendChild.js")(r = document.createElement("span"), ["then"]),
                            r), u = o(t).utc;
                            return function() {
                                var t = e("./yo-yoify/lib/appendChild.js")
                                  , n = document.createElement("div");
                                return t(n, ["\n            ", arguments[0], " at ", arguments[1], "-", arguments[2], "-", arguments[3], " ", arguments[4], ":", arguments[5], ":00\n          "]),
                                n
                            }(i, u.year, u.month, u.date, u.hour, u.minute)
                        }))
                    }
                }
                for (; 0 < i--; )
                    u.push(function() {
                        var t = e("./yo-yoify/lib/appendChild.js")
                          , n = document.createElement("div");
                        return t(n, [arguments[0]]),
                        n
                    }(" "));
                return function() {
                    var t = e("./yo-yoify/lib/appendChild.js")
                      , n = document.createElement("div");
                    return n.setAttribute("class", "next-date"),
                    t(n, ["\n      ", arguments[0], "\n    "]),
                    n
                }(u)
            }
        }
        , {
            "../lib/dateFormatter": 9,
            "../lib/index": 11,
            "./yo-yoify/lib/appendChild.js": 48,
            "choo/html": 20
        }],
        5: [function(e, t, n) {
            e("choo/html");
            var r = function(e, t) {
                var n = ["clickable"];
                e.selectedPart === t && n.push("active");
                var r = [null, "minutes", "hours", "dates", "months", "weekdays"];
                return e.schedule.errors && e.schedule.errors.includes(r[t]) ? n.push("invalid") : e.schedule.warnings && e.schedule.warnings.includes(r[t]) && n.push("warning"),
                n.join(" ")
            }
              , o = function(e, t) {
                return e.selectedPart === t ? "" : "display: none"
            };
            t.exports = function(t, n, a) {
                function i(e, t) {
                    e.preventDefault(),
                    a("selectPart", t)
                }
                return function() {
                    var t = e("./yo-yoify/lib/appendChild.js")
                      , n = document.createElement("div");
                    n.setAttribute("class", "part-explanation");
                    var r = document.createElement("p");
                    r.setAttribute("class", "cron-parts");
                    var o = document.createElement("div")
                      , a = document.createElement("span");
                    a.onmousedown = arguments[0],
                    a.setAttribute("class", arguments[1]),
                    t(a, ["minute"]),
                    t(o, ["\n          ", a]);
                    var i = document.createElement("div")
                      , u = document.createElement("span");
                    u.onmousedown = arguments[2],
                    u.setAttribute("class", arguments[3]),
                    t(u, ["hour"]),
                    t(i, [u]);
                    var s = document.createElement("div")
                      , c = document.createElement("span");
                    c.onmousedown = arguments[4],
                    c.setAttribute("class", arguments[5]),
                    t(c, ["day"]),
                    t(s, [c]);
                    var l = document.createElement("div")
                      , d = document.createElement("span");
                    d.onmousedown = arguments[6],
                    d.setAttribute("class", arguments[7]),
                    t(d, ["month"]),
                    t(l, [d]);
                    var f = document.createElement("div")
                      , m = document.createElement("span");
                    m.onmousedown = arguments[8],
                    m.setAttribute("class", arguments[9]),
                    t(m, ["week"]),
                    t(f, [m]),
                    t(r, ["\n        ", o, i, s, l, f, "\n      "]);
                    var p = document.createElement("table")
                      , h = document.createElement("tbody")
                      , v = document.createElement("tr")
                      , y = document.createElement("th");
                    t(y, ["*"]);
                    var g = document.createElement("td");
                    t(g, ["any value"]),
                    t(v, [y, g]);
                    var b = document.createElement("tr")
                      , w = document.createElement("th");
                    t(w, [","]);
                    var E = document.createElement("td");
                    t(E, ["value list separator"]),
                    t(b, [w, E]);
                    var x = document.createElement("tr")
                      , A = document.createElement("th");
                    t(A, ["-"]);
                    var C = document.createElement("td");
                    t(C, ["range of values"]),
                    t(x, [A, C]);
                    var N = document.createElement("tr")
                      , S = document.createElement("th");
                    t(S, ["/"]);
                    var T = document.createElement("td");
                    t(T, ["step values"]),
                    t(N, [S, T]),
                    t(h, ["\n          ", v, "\n          ", b, "\n          ", x, "\n          ", N, "\n        "]);
                    var j = document.createElement("tbody");
                    j.setAttribute("style", arguments[10]);
                    var k = document.createElement("tr")
                      , D = document.createElement("th");
                    t(D, ["@yearly"]);
                    var O = document.createElement("td");
                    t(O, ["(non-standard)"]),
                    t(k, [D, O]);
                    var U = document.createElement("tr")
                      , I = document.createElement("th");
                    t(I, ["@annually"]);
                    var M = document.createElement("td");
                    t(M, ["(non-standard)"]),
                    t(U, [I, M]);
                    var P = document.createElement("tr")
                      , _ = document.createElement("th");
                    t(_, ["@monthly"]);
                    var L = document.createElement("td");
                    t(L, ["(non-standard)"]),
                    t(P, [_, L]);
                    var B = document.createElement("tr")
                      , z = document.createElement("th");
                    t(z, ["@weekly"]);
                    var $ = document.createElement("td");
                    t($, ["(non-standard)"]),
                    t(B, [z, $]);
                    var F = document.createElement("tr")
                      , R = document.createElement("th");
                    t(R, ["@daily"]);
                    var V = document.createElement("td");
                    t(V, ["(non-standard)"]),
                    t(F, [R, V]);
                    var H = document.createElement("tr")
                      , W = document.createElement("th");
                    t(W, ["@hourly"]);
                    var q = document.createElement("td");
                    t(q, ["(non-standard)"]),
                    t(H, [W, q]);
                    var Y = document.createElement("tr")
                      , G = document.createElement("th");
                    t(G, ["@reboot"]);
                    var J = document.createElement("td");
                    t(J, ["(non-standard)"]),
                    t(Y, [G, J]),
                    t(j, ["\n          ", k, "\n          ", U, "\n          ", P, "\n          ", B, "\n          ", F, "\n          ", H, "\n          ", Y, "\n        "]);
                    var K = document.createElement("tbody");
                    K.setAttribute("style", arguments[11]);
                    var X = document.createElement("tr")
                      , Z = document.createElement("th");
                    t(Z, ["0-59"]);
                    var Q = document.createElement("td");
                    t(Q, ["allowed values"]),
                    t(X, [Z, Q]),
                    t(K, ["\n          ", X, "\n        "]);
                    var ee = document.createElement("tbody");
                    ee.setAttribute("style", arguments[12]);
                    var te = document.createElement("tr")
                      , ne = document.createElement("th");
                    t(ne, ["0-23"]);
                    var re = document.createElement("td");
                    t(re, ["allowed values"]),
                    t(te, [ne, re]),
                    t(ee, ["\n          ", te, "\n        "]);
                    var oe = document.createElement("tbody");
                    oe.setAttribute("style", arguments[13]);
                    var ae = document.createElement("tr")
                      , ie = document.createElement("th");
                    t(ie, ["1-31"]);
                    var ue = document.createElement("td");
                    t(ue, ["allowed values"]),
                    t(ae, [ie, ue]),
                    t(oe, ["\n          ", ae, "\n        "]);
                    var se = document.createElement("tbody");
                    se.setAttribute("style", arguments[14]);
                    var ce = document.createElement("tr")
                      , le = document.createElement("th");
                    t(le, ["1-12"]);
                    var de = document.createElement("td");
                    t(de, ["allowed values"]),
                    t(ce, [le, de]);
                    var fe = document.createElement("tr")
                      , me = document.createElement("th");
                    t(me, ["JAN-DEC"]);
                    var pe = document.createElement("td");
                    t(pe, ["alternative single values"]),
                    t(fe, [me, pe]),
                    t(se, ["\n          ", ce, "\n          ", fe, "\n        "]);
                    var he = document.createElement("tbody");
                    he.setAttribute("style", arguments[15]);
                    var ve = document.createElement("tr")
                      , ye = document.createElement("th");
                    t(ye, ["0-6"]);
                    var ge = document.createElement("td");
                    t(ge, ["allowed values"]),
                    t(ve, [ye, ge]);
                    var be = document.createElement("tr")
                      , we = document.createElement("th");
                    t(we, ["SUN-SAT"]);
                    var Ee = document.createElement("td");
                    t(Ee, ["alternative single values"]),
                    t(be, [we, Ee]);
                    var xe = document.createElement("tr")
                      , Ae = document.createElement("th");
                    t(Ae, ["7"]);
                    var Ce = document.createElement("td");
                    return t(Ce, ["sunday (non-standard)"]),
                    t(xe, [Ae, Ce]),
                    t(he, ["\n          ", ve, "\n          ", be, "\n          ", xe, "\n        "]),
                    t(p, ["\n        ", h, "\n        ", j, "\n        ", K, "\n        ", ee, "\n        ", oe, "\n        ", se, "\n        ", he, "\n      "]),
                    t(n, ["\n      ", r, "\n      ", p, "\n    "]),
                    n
                }(function(e) {
                    return i(e, 1)
                }, r(t, 1), function(e) {
                    return i(e, 2)
                }, r(t, 2), function(e) {
                    return i(e, 3)
                }, r(t, 3), function(e) {
                    return i(e, 4)
                }, r(t, 4), function(e) {
                    return i(e, 5)
                }, r(t, 5), o(t, null), o(t, 1), o(t, 2), o(t, 3), o(t, 4), o(t, 5))
            }
        }
        , {
            "./yo-yoify/lib/appendChild.js": 48,
            "choo/html": 20
        }],
        6: [function(e, t, n) {
            e("choo/html"),
            t.exports = function(t, n, r) {
                return function() {
                    var t = e("./yo-yoify/lib/appendChild.js")
                      , n = document.createElement("div");
                    n.setAttribute("class", "example");
                    var r = document.createElement("span");
                    return r.onclick = arguments[0],
                    r.setAttribute("class", "clickable"),
                    t(r, ["Random Example"]),
                    t(n, ["\n      ", r, "\n    "]),
                    n
                }(function(e) {
                    return r("showNextExample")
                })
            }
        }
        , {
            "./yo-yoify/lib/appendChild.js": 48,
            "choo/html": 20
        }],
        7: [function(e, t, n) {
            e("choo/html");
            var r = e("debounce")
              , o = r(function(e, t) {
                t("inputSelect", e.target)
            }, 20)
              , a = r(function(e, t) {
                t("inputEnter", e.target.value)
            }, 100);
            t.exports = function(t, n, r) {
                setTimeout(function() {
                    return function(e, t) {
                        if (e.selectedPart && e.selectedPart !== t.selectedPart && !e.selectedDirectly) {
                            var n = e.text.split(" ").slice(0, e.selectedPart)
                              , r = n.pop().length
                              , o = n.join(" ").length;
                            0 < o && (o += 1);
                            var a = document.getElementById("input");
                            a.selectionStart = o,
                            a.selectionEnd = o + r,
                            a.focus()
                        }
                    }(t, n)
                }, 0);
                var i = "";
                return t.schedule.errors ? i = "invalid" : t.schedule.warnings && (i = "warning"),
                t.focussed ? function() {
                    var t = e("./on-load/server.js")
                      , n = e("./yo-yoify/lib/appendChild.js")
                      , r = document.createElement("div");
                    r.setAttribute("class", "text-editor");
                    var o = document.createElement("input")
                      , a = arguments;
                    return t(o, function() {
                        a[0](o)
                    }, function() {}, "o0"),
                    o.setAttribute("id", "input"),
                    o.setAttribute("type", "text"),
                    o.setAttribute("autocomplete", "off"),
                    o.oninput = arguments[1],
                    o.onblur = arguments[2],
                    o.onfocus = arguments[3],
                    o.onselect = arguments[4],
                    o.onkeydown = arguments[5],
                    o.onmousedown = arguments[6],
                    o.setAttribute("class", arguments[7]),
                    n(r, ["\n        ", o, "\n      "]),
                    r
                }(function(e) {
                    e.value = t.text
                }, function(e) {
                    r("inputUpdate", e.target.value),
                    a(e, r)
                }, function(e) {
                    return r("inputBlur")
                }, function(e) {
                    r("inputFocus"),
                    o(e, r)
                }, function(e) {
                    return o(e, r)
                }, function(e) {
                    return o(e, r)
                }, function(e) {
                    return o(e, r)
                }, i) : function() {
                    var t = e("./on-load/server.js")
                      , n = e("./yo-yoify/lib/appendChild.js")
                      , r = document.createElement("div");
                    r.setAttribute("class", "text-editor");
                    var o = document.createElement("input")
                      , a = arguments;
                    return t(o, function() {
                        a[0](o)
                    }, function() {}, "o1"),
                    o.setAttribute("id", "input"),
                    o.setAttribute("type", "text"),
                    o.setAttribute("value", arguments[1]),
                    o.oninput = arguments[2],
                    o.onblur = arguments[3],
                    o.onfocus = arguments[4],
                    o.onselect = arguments[5],
                    o.onkeydown = arguments[6],
                    o.onmousedown = arguments[7],
                    o.setAttribute("class", arguments[8]),
                    n(r, ["\n        ", o, "\n      "]),
                    r
                }(function(e) {
                    e.value = t.text
                }, t.text, function(e) {
                    r("inputUpdate", e.target.value),
                    a(e, r)
                }, function(e) {
                    return r("inputBlur")
                }, function(e) {
                    r("inputFocus"),
                    o(e, r)
                }, function(e) {
                    return o(e, r)
                }, function(e) {
                    return o(e, r)
                }, function(e) {
                    return o(e, r)
                }, i)
            }
        }
        , {
            "./on-load/server.js": 33,
            "./yo-yoify/lib/appendChild.js": 48,
            "choo/html": 20,
            debounce: 22
        }],
        8: [function(e, t, n) {
            e("choo/html"),
            t.exports = function(t, n, r) {
                return t.schedule.warnings ? (o = e("./yo-yoify/lib/appendChild.js"),
                (a = document.createElement("div")).setAttribute("class", "warning"),
                o(a, ["Non standard! May not work with every cron."]),
                a) : function() {
                    e("./yo-yoify/lib/appendChild.js");
                    var t = document.createElement("div");
                    return t.setAttribute("class", "warning"),
                    t
                }();
                var o, a
            }
        }
        , {
            "./yo-yoify/lib/appendChild.js": 48,
            "choo/html": 20
        }],
        9: [function(e, t, n) {
            function r(e) {
                return ("0" + e).slice(-2)
            }
            t.exports = function(e) {
                var t = e.toTimeString().split(/[()]/)[1];
                return t && 3 < t.length && (t = t.replace(/[^A-Z]*/g, "")),
                t && 3 === t.length || (t = "local"),
                {
                    utc: {
                        year: e.getUTCFullYear(),
                        month: r(e.getUTCMonth() + 1),
                        date: r(e.getUTCDate()),
                        hour: r(e.getUTCHours()),
                        minute: r(e.getUTCMinutes()),
                        second: r(e.getUTCSeconds()),
                        zone: "UTC"
                    },
                    local: {
                        year: e.getFullYear(),
                        month: r(e.getMonth() + 1),
                        date: r(e.getDate()),
                        hour: r(e.getHours()),
                        minute: r(e.getMinutes()),
                        second: r(e.getSeconds()),
                        zone: t
                    }
                }
            }
        }
        , {}],
        10: [function(e, t, n) {
            "use strict";
            function r(e) {
                var t = parseInt(e);
                switch (20 < t ? t % 10 : t) {
                case 1:
                    return e + "st";
                case 2:
                    return e + "nd";
                case 3:
                    return e + "rd";
                default:
                    return e + "th"
                }
            }
            function o(e, t, n, o, a) {
                var i = e.split(",");
                return ((a ? "" : t + " ") + function(e) {
                    switch (e.length) {
                    case 0:
                        return "";
                    case 1:
                        return e[0];
                    case 2:
                        return e[0] + " and " + e[1];
                    default:
                        return e.slice(0, e.length - 1).join(", ") + ", and " + e[e.length - 1]
                    }
                }(i.map(function(e) {
                    return function(e, t, n, o) {
                        return "*" === e ? "every " + t : function(e, t, n, o) {
                            var a = e.match(/\d+|./g).map(function(e) {
                                var t = Number(e);
                                return isNaN(t) ? e : t
                            })
                              , i = a[0];
                            if (Number.isInteger(i)) {
                                if (1 === a.length)
                                    return "" + (n[i] || i);
                                if (3 === a.length && "/" === a[1] && Number.isInteger(a[2]))
                                    return "every " + r(a[2]) + " " + t + " from " + (n[i] || i) + " through " + (n[o] || o);
                                if (3 === a.length && "-" === a[1] && Number.isInteger(a[2]) && a[2] >= i)
                                    return "every " + t + " from " + (n[i] || i) + " through " + (n[a[2]] || a[2]);
                                if (5 === a.length && "-" === a[1] && Number.isInteger(a[2]) && a[2] >= i && "/" === a[3] && Number.isInteger(a[4]) && 1 <= a[4])
                                    return "every " + r(a[4]) + " " + t + " from " + (n[i] || i) + " through " + (n[a[2]] || a[2])
                            } else if (3 === a.length && "/" === a[1] && Number.isInteger(a[2]) && "*" === a[0])
                                return "every " + r(a[2]) + " " + t;
                            return ""
                        }(e, t, n, o)
                    }(e, t, n, o)
                }))).replace("every 1st", "every").replace(t + " every", "every").replace(", " + t, ", ").replace(", and " + t, ", and ")
            }
            var a = [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
              , i = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
              , u = /^0*\d\d?$/
              , s = "After rebooting.";
            t.exports = function(e) {
                if ("@reboot" === e.originalParts[0])
                    return {
                        full: s,
                        special: s
                    };
                var t, n, r, c = e.parts, l = "*" === (r = c[2]) ? "" : "on " + o(r, "day-of-month", {}, 31), d = "*" === (n = c[3]) ? "" : "in " + o(n, "month", a, 12, !0), f = "*" === (t = c[4]) ? "" : "on " + o(t, "day-of-week", i, 7, !0), m = "";
                l && f && (m = e.daysAnded ? "if it's" : "and");
                var p, h, v = (p = c[0],
                h = c[1],
                u.test(p) && u.test(h) ? [("0" + p).slice(-2), ("0" + h).slice(-2)] : null);
                if (v)
                    return {
                        start: "At",
                        minutes: v[0],
                        hours: v[1],
                        isTime: !0,
                        dates: l || null,
                        datesWeekdays: m || null,
                        weekdays: f || null,
                        months: d || null,
                        end: ".",
                        full: ("At " + v[1] + ":" + v[0] + " " + l + " " + m + " " + f + " " + d).replace(/ +/g, " ").trim() + "."
                    };
                var y, g = o(c[0], "minute", {}, 59), b = "*" === (y = c[1]) ? "" : "past " + o(y, "hour", {}, 23);
                return {
                    start: "At",
                    minutes: g || null,
                    hours: b || null,
                    dates: l || null,
                    datesWeekdays: m || null,
                    weekdays: f || null,
                    months: d || null,
                    end: ".",
                    full: ("At " + g + " " + b + " " + l + " " + m + " " + f + " " + d).replace(/ +/g, " ").trim() + "."
                }
            }
        }
        , {}],
        11: [function(e, t, n) {
            "use strict";
            var r = e("./describe")
              , o = e("./nextDate")
              , a = e("./normalize")
              , i = e("./prenormalize");
            t.exports = {
                prenormalize: i,
                normalize: a,
                describe: r,
                nextDate: o
            }
        }
        , {
            "./describe": 10,
            "./nextDate": 12,
            "./normalize": 13,
            "./prenormalize": 15
        }],
        12: [function(e, t, n) {
            "use strict";
            function r(e, t, n, r, o) {
                return new Date(Date.UTC(e, t, n, r, o))
            }
            t.exports = function(e, t) {
                return Object.keys(e).length && e.months.length && e.dates.length && e.weekdays.length && e.hours.length && e.minutes.length ? function e(t, n, o) {
                    if (127 < o)
                        return null;
                    var a = n.getUTCMonth() + 1
                      , i = n.getUTCFullYear();
                    if (!t.months.includes(a))
                        return e(t, r(i, a + 1 - 1, 1, 0, 0), ++o);
                    var u = n.getUTCDate()
                      , s = n.getUTCDay()
                      , c = t.dates.includes(u)
                      , l = t.weekdays.includes(s);
                    if (t.daysAnded && (!c || !l) || !t.daysAnded && !c && !l)
                        return e(t, r(i, a - 1, u + 1, 0, 0), ++o);
                    var d = n.getUTCHours();
                    if (!t.hours.includes(d))
                        return e(t, r(i, a - 1, u, d + 1, 0), ++o);
                    var f = n.getUTCMinutes();
                    return t.minutes.includes(f) ? n : e(t, r(i, a - 1, u, d, f + 1), ++o)
                }(e, function(e) {
                    var t, n, r = 0 !== (n = (t = e).getUTCMilliseconds()) ? new Date(t.getTime() + (1e3 - n)) : t, o = r.getUTCSeconds();
                    return 0 !== o ? new Date(r.getTime() + 1e3 * (60 - o)) : r
                }(t), 1) : null
            }
        }
        , {}],
        13: [function(e, t, n) {
            "use strict";
            function r(e, t) {
                return e - t
            }
            function o(e) {
                return e.reduce(function(e, t) {
                    return e.indexOf(t) < 0 && e.push(t),
                    e
                }, [])
            }
            function a(e) {
                return e.reduce(function(e, t) {
                    return e.concat(Array.isArray(t) ? a(t) : t)
                }, [])
            }
            function i(e, t, n) {
                for (var r = [], o = e; o <= t; o += n)
                    r.push(o);
                return r
            }
            var u = /(^|[,-\/])\*($|[,-\/])/g;
            function s(e, t) {
                var n = "$1" + t + "$2";
                return e.replace(u, n).replace(u, n)
            }
            function c(e, t) {
                var n = e.split(",").map(function(e) {
                    return function(e, t) {
                        var n = e ? e.match(/\d+|./g).map(function(e) {
                            var t = Number(e);
                            return isNaN(t) ? e : t
                        }) : []
                          , r = n[0];
                        if (Number.isInteger(r)) {
                            if (1 === n.length)
                                return {
                                    list: [r]
                                };
                            if (3 === n.length && "/" === n[1] && Number.isInteger(n[2]) && 1 <= n[2])
                                return {
                                    list: i(r, t, n[2]),
                                    warnings: ["nonstandard"]
                                };
                            if (3 === n.length && "-" === n[1] && Number.isInteger(n[2]) && n[2] >= r)
                                return {
                                    list: i(r, n[2], 1)
                                };
                            if (5 === n.length && "-" === n[1] && Number.isInteger(n[2]) && n[2] >= r && "/" === n[3] && Number.isInteger(n[4]) && 1 <= n[4])
                                return {
                                    list: i(r, n[2], n[4])
                                }
                        }
                        return {
                            errors: ["invalid part"]
                        }
                    }(e, t)
                });
                return {
                    list: o(a(n.map(function(e) {
                        return e.list || []
                    }))).sort(r).filter(function(e) {
                        return !isNaN(e)
                    }),
                    errors: o(a(n.map(function(e) {
                        return e.errors || []
                    }))),
                    warnings: o(a(n.map(function(e) {
                        return e.warnings || []
                    })))
                }
            }
            function l(e, t, n) {
                return e.length && (e[0] < t || e[e.length - 1] > n)
            }
            var d = /[^\d\-\/\,]/i;
            t.exports = function(e) {
                var t = e.parts.map(function(e) {
                    return e.slice(0)
                }).map(function(e) {
                    return e.replace(/\*\/1(?!\d)/g, "*")
                });
                if (0 === t.length && e.originalParts.length)
                    return {};
                var n = {
                    errors: [],
                    warnings: []
                };
                if (void 0 !== e.daysAnded && (n.daysAnded = e.daysAnded),
                5 !== t.length && n.errors.push("fields"),
                t[0] && t[0].length) {
                    var a = s(t[0], "0-59")
                      , i = c(a, 59);
                    n.minutes = i.list,
                    (i.errors.length || l(n.minutes, 0, 59) || d.test(a)) && (n.minutes = [],
                    n.errors.push("minutes")),
                    i.warnings.length && n.warnings.push("minutes")
                } else
                    void 0 === t[0] && n.errors.push("minutes");
                if (t[1] && t[1].length) {
                    var u = s(t[1], "0-23")
                      , f = c(u, 23);
                    n.hours = f.list,
                    (f.errors.length || l(n.hours, 0, 23) || d.test(u)) && (n.hours = [],
                    n.errors.push("hours")),
                    f.warnings.length && n.warnings.push("hours")
                } else
                    void 0 === t[1] && n.errors.push("hours");
                if (t[2] && t[2].length) {
                    var m = s(t[2], "1-31")
                      , p = c(m, 31);
                    n.dates = p.list,
                    (p.errors.length || l(n.dates, 1, 31) || d.test(m)) && (n.dates = [],
                    n.errors.push("dates")),
                    p.warnings.length && n.warnings.push("dates")
                } else
                    void 0 === t[2] && n.errors.push("dates");
                if (t[3] && t[3].length) {
                    var h = s(t[3], "1-12")
                      , v = e.originalParts[3]
                      , y = c(h, 12);
                    n.months = y.list,
                    (y.errors.length || l(n.months, 1, 12) || d.test(h)) && (n.months = [],
                    n.errors.push("months")),
                    (y.warnings.length || v && t[3] !== v && 3 < v.length && /\D/.test(v)) && n.warnings.push("months")
                } else
                    void 0 === t[3] && n.errors.push("months");
                if (t[4] && t[4].length) {
                    var g = s(t[4], "0-6")
                      , b = e.originalParts[4]
                      , w = c(g, 7);
                    n.weekdays = o(w.list.map(function(e) {
                        return 7 === e ? 0 : e
                    })).sort(r),
                    (w.errors.length || l(n.weekdays, 0, 6) || d.test(g)) && (n.weekdays = [],
                    n.errors.push("weekdays")),
                    (w.warnings.length || w.list.includes(7) || b && t[4] !== b && 3 < b.length && /\D/.test(b)) && n.warnings.push("weekdays")
                } else
                    void 0 === t[4] && n.errors.push("weekdays");
                return n.errors.length || delete n.errors,
                n.warnings.length || delete n.warnings,
                n
            }
        }
        , {}],
        14: [function(e, t, n) {
            t.exports = {
                textFromLocation: function() {
                    if (window.location.hash)
                        return decodeURIComponent(window.location.hash).replace("#", "").replace(/_/g, " ");
                    if (window.location.pathname)
                        decodeURIComponent(window.location.pathname);
                    return null
                },
                updateLocation: function(e) {},
                defaultTitle: "crontab.guru - the cron schedule expression editor"
            }
        }
        , {}],
        15: [function(e, t, n) {
            "use strict";
            function r(e, t) {
                return Object.keys(t).reduce(function(e, n) {
                    return r = e,
                    a = t[o = n],
                    i = new RegExp("(^|[ ,-/])" + o + "($|[ ,-/])","gi"),
                    u = "$1" + a + "$2",
                    r.replace(i, u).replace(i, u);
                    var r, o, a, i, u
                }, e)
            }
            var o = {
                sun: "0",
                mon: "1",
                tue: "2",
                wed: "3",
                thu: "4",
                fri: "5",
                sat: "6"
            }
              , a = {
                jan: "1",
                feb: "2",
                mar: "3",
                apr: "4",
                may: "5",
                jun: "6",
                jul: "7",
                aug: "8",
                sep: "9",
                oct: "10",
                nov: "11",
                dec: "12"
            }
              , i = {
                "@yearly": ["0", "0", "1", "1", "*"],
                "@annually": ["0", "0", "1", "1", "*"],
                "@monthly": ["0", "0", "1", "*", "*"],
                "@weekly": ["0", "0", "*", "*", "0"],
                "@daily": ["0", "0", "*", "*", "*"],
                "@midnight": ["0", "0", "*", "*", "*"],
                "@hourly": ["0", "*", "*", "*", "*"]
            };
            t.exports = function(e) {
                var t = e.trim().split(/\s+/).filter(function(e) {
                    return e
                });
                if (1 === t.length && "@reboot" === t[0])
                    return {
                        originalParts: t,
                        parts: []
                    };
                var n, u, s = (1 === t.length ? (n = t[0],
                u = i[n],
                void 0 !== u ? u : [n]) : t).map(function(e, t) {
                    switch (t) {
                    case 3:
                        return r(e, a);
                    case 4:
                        return r(e, o);
                    default:
                        return e
                    }
                });
                return {
                    originalParts: t,
                    parts: s,
                    daysAnded: !!s[2] && "*" === s[2][0] || !!s[4] && "*" === s[4][0]
                }
            }
        }
        , {}],
        16: [function(e, t, n) {
            var r = e("../lib/index")
              , o = e("../lib/path")
              , a = ["5 0 * 8 *", "15 14 1 * *", "0 22 * * 1-5", "23 0-20/2 * * *", "5 4 * * sun", "0 0,12 1 */2 *", "0 4 8-14 * *", "0 0 1,15 * 3", "@weekly"]
              , i = function(e) {
                return e.trim().replace(/ +/g, " ")
            };
            function u(e) {
                var t = i(e)
                  , n = r.prenormalize(t)
                  , o = r.normalize(n)
                  , a = o.errors ? null : r.describe(n)
                  , u = t.split(" ");
                return {
                    schedule: o,
                    description: a,
                    commonBlurb: null,
                    isSpecialString: 1 <= u.length && u[0].startsWith("@")
                }
            }
            var s = o.textFromLocation() || "5 4 * * *"
              , c = u(s);
            t.exports = {
                state: {
                    text: s,
                    schedule: c.schedule,
                    description: c.description,
                    exampleIndex: 0,
                    selectedPart: null,
                    selectedDirectly: !1,
                    moreNextDates: !1,
                    commonBlurb: c.commonBlurb,
                    isSpecialString: c.isSpecialString,
                    date: new Date,
                    focussed: !1
                },
                reducers: {
                    showNextExample: function(e, t) {
                        var n = a[t.exampleIndex]
                          , r = u(n);
                        return o.updateLocation(n),
                        {
                            text: n,
                            schedule: r.schedule,
                            description: r.description,
                            exampleIndex: (t.exampleIndex + 1) % a.length,
                            isSpecialString: r.isSpecialString
                        }
                    },
                    inputFocus: function(e, t) {
                        return {
                            focussed: !0
                        }
                    },
                    inputBlur: function(e, t) {
                        return {
                            text: i(t.text),
                            selectedPart: null,
                            focussed: !1
                        }
                    },
                    selectPart: function(e, t) {
                        return {
                            selectedPart: t.isSpecialString ? null : e,
                            selectedDirectly: !1
                        }
                    },
                    inputUpdate: function(e, t) {
                        return {
                            text: e
                        }
                    },
                    inputEnter: function(e, t) {
                        return o.updateLocation(e),
                        u(e)
                    },
                    inputSelect: function(e, t) {
                        if (!t.focussed)
                            return {};
                        if (t.isSpecialString)
                            return {
                                selectedPart: null,
                                selectedDirectly: !0
                            };
                        var n = e.selectionStart
                          , r = e.selectionEnd
                          , o = i(t.text.substring(0, n + 1)).split(" ").length;
                        return {
                            selectedPart: o === i(t.text.substring(0, r + 1)).split(" ").length ? Math.max(Math.min(o, 5), 1) : null,
                            selectedDirectly: !0
                        }
                    },
                    toggleMoreNextDates: function(e, t) {
                        return {
                            moreNextDates: !t.moreNextDates
                        }
                    },
                    setNextMinute: function(e, t) {
                        return {
                            date: e
                        }
                    }
                },
                effects: {},
                subscriptions: [function(e, t) {
                    var n = 61 - (new Date).getUTCSeconds();
                    setTimeout(function() {
                        e("setNextMinute", new Date, t),
                        setInterval(function() {
                            e("setNextMinute", new Date, t)
                        }, 6e4)
                    }, 1e3 * n)
                }
                ]
            }
        }
        , {
            "../lib/index": 11,
            "../lib/path": 14
        }],
        17: [function(e, t, n) {
            t.exports = function(e, t, n, r, o, a) {
                e.forEach(function(e) {
                    e(t, n, r, o, a)
                })
            }
        }
        , {}],
        18: [function(e, t, n) {
            var r = e("xtend/mutable")
              , o = e("xtend")
              , a = e("./apply-hook");
            function i(e, t, n, r) {
                e && !n[e] && (n[e] = {}),
                Object.keys(t).forEach(function(o) {
                    var a = r ? r(t[o], o) : t[o];
                    e ? n[e][o] = a : n[o] = a
                })
            }
            function u(e) {
                throw e
            }
            function s(e) {
                return function(t, n, r) {
                    t && e(t, n, r)
                }
            }
            function c(e, t) {
                return t.forEach(function(t) {
                    e = t(e)
                }),
                e
            }
            t.exports = function(e) {
                var t = []
                  , n = []
                  , l = []
                  , d = []
                  , f = []
                  , m = []
                  , p = [];
                C(e = e || {});
                var h = !1
                  , v = !1
                  , y = !1
                  , g = !1
                  , b = N._subscriptions = {}
                  , w = N._reducers = {}
                  , E = N._effects = {}
                  , x = N._models = []
                  , A = {};
                return N.model = function(e) {
                    x.push(e)
                }
                ,
                N.state = function(e) {
                    var t = (e = e || {}).state;
                    if (!e.state && !1 === e.freeze)
                        return o(A);
                    if (!e.state)
                        return Object.freeze(o(A));
                    var n = []
                      , a = {};
                    x.forEach(function(e) {
                        var u = e.namespace;
                        n.push(u);
                        var s = e.state || {};
                        u ? (a[u] = a[u] || {},
                        i(u, s, a),
                        a[u] = o(a[u], t[u])) : r(a, s)
                    }),
                    Object.keys(t).forEach(function(e) {
                        -1 === n.indexOf(e) && (a[e] = t[e])
                    });
                    var u = c(o(A, o(t, a)), f);
                    return !1 === e.freeze ? u : Object.freeze(u)
                }
                ,
                (N.start = N).use = C,
                N;
                function C(e) {
                    e.onStateChange && t.push(e.onStateChange),
                    e.onError && l.push(s(e.onError)),
                    e.onAction && n.push(e.onAction),
                    e.wrapSubscriptions && d.push(e.wrapSubscriptions),
                    e.wrapInitialState && f.push(e.wrapInitialState),
                    e.wrapReducers && m.push(e.wrapReducers),
                    e.wrapEffects && p.push(e.wrapEffects)
                }
                function N(e) {
                    return e = e || {},
                    x.forEach(function(t) {
                        var n = t.namespace;
                        if (!y && t.state && !1 !== e.state) {
                            var o = t.state || {};
                            n ? (A[n] = A[n] || {},
                            i(n, o, A)) : r(A, o)
                        }
                        !h && t.reducers && !1 !== e.reducers && i(n, t.reducers, w, function(e) {
                            return c(e, m)
                        }),
                        !v && t.effects && !1 !== e.effects && i(n, t.effects, E, function(e) {
                            return c(e, p)
                        }),
                        !g && t.subscriptions && !1 !== e.subscriptions && i(n, t.subscriptions, b, function(e, t) {
                            var r = C("subscription: " + (n ? n + ":" + t : t));
                            return (e = c(e, d))(r, function(e) {
                                a(l, e, A, C)
                            }),
                            e
                        })
                    }),
                    y || !1 === e.state || (A = c(A, f)),
                    e.noSubscriptions || (g = !0),
                    e.noReducers || (h = !0),
                    e.noEffects || (v = !0),
                    e.noState || (y = !0),
                    l.length || l.push(s(u)),
                    C;
                    function C(e, t) {
                        return function(n, r, o) {
                            o || t || (o = r,
                            r = null);
                            var i = t ? function(e) {
                                (e = e || null) && a(l, e, A, function(e) {
                                    return function(t, n) {
                                        N(t, n = void 0 === n ? null : n, e, i)
                                    }
                                })
                            }
                            : o;
                            N(n, r = void 0 === r ? null : r, e, i)
                        }
                    }
                    function N(e, i, u, s) {
                        setTimeout(function() {
                            var c = !1
                              , l = !1
                              , d = o(A);
                            n.length && a(n, i, A, e, u, C);
                            var f = e;
                            if (/:/.test(e)) {
                                var m = e.split(":")
                                  , p = m.shift();
                                f = m.join(":")
                            }
                            var h = p ? w[p] : w;
                            if (h && h[f]) {
                                if (p) {
                                    var v = h[f](i, A[p]);
                                    d[p] = o(A[p], v)
                                } else
                                    r(d, w[f](i, A));
                                c = !0,
                                t.length && a(t, i, d, A, f, C),
                                s(null, A = d)
                            }
                            var y = p ? E[p] : E;
                            if (!c && y && y[f]) {
                                var g = C("effect: " + e);
                                p ? y[f](i, A[p], g, s) : y[f](i, A, g, s),
                                l = !0
                            }
                            if (!c && !l)
                                throw new Error("Could not find action " + f)
                        }, 0)
                    }
                }
            }
        }
        , {
            "./apply-hook": 17,
            xtend: 44,
            "xtend/mutable": 45
        }],
        19: [function(e, t, n) {}
        , {}],
        20: [function(e, t, n) {
            t.exports = e("yo-yo")
        }
        , {
            "yo-yo": 46
        }],
        21: [function(e, t, n) {
            var r = e("sheet-router/history")
              , o = e("sheet-router")
              , a = e("global/document")
              , i = e("document-ready")
              , u = e("sheet-router/href")
              , s = e("sheet-router/hash")
              , c = e("hash-match")
              , l = e("barracks")
              , d = e("nanoraf")
              , f = e("xtend")
              , m = e("yo-yo");
            t.exports = function(e) {
                e = e || {};
                var t = g._store = l()
                  , n = g._router = null
                  , p = null
                  , h = null
                  , v = null
                  , y = null;
                return t.use({
                    onStateChange: function(e, t, r, o, a) {
                        y || (y = d(function(e, t) {
                            var r = n(e.location.pathname, e, t);
                            h = m.update(h, r)
                        })),
                        y(t, r)
                    }
                }),
                t.use(e),
                g.toString = function(e, n) {
                    n = n || {},
                    t.start({
                        subscriptions: !1,
                        reducers: !1,
                        effects: !1
                    });
                    var r = t.state({
                        state: n
                    })
                      , o = b(p, v, function() {
                        return function() {}
                    })(e, r);
                    return o.outerHTML || o.toString()
                }
                ,
                g.router = function(e, t) {
                    p = e,
                    v = t
                }
                ,
                g.model = function(e) {
                    t.model(e)
                }
                ,
                (g.start = g).use = function(e) {
                    t.use(e)
                }
                ,
                g;
                function g(e, o) {
                    o || "string" == typeof e || (o = e,
                    e = null),
                    o = o || {},
                    t.model(function(e) {
                        var t = a.location
                          , n = {
                            pathname: e.hash ? c(t.hash) : t.href
                        }
                          , o = {};
                        return !0 === e.hash ? i(function(e) {
                            s(function(t) {
                                e(c(t))
                            })
                        }, "handleHash", o) : (!1 !== e.history && i(r, "handleHistory", o),
                        !1 !== e.href && i(u, "handleHref", o)),
                        {
                            namespace: "location",
                            subscriptions: o,
                            reducers: {
                                setLocation: function(e, t) {
                                    return {
                                        pathname: e.location.replace(/#.*/, "")
                                    }
                                }
                            },
                            state: n
                        };
                        function i(e, t, n) {
                            n[t] = function(t, n) {
                                e(function(e) {
                                    t("location:setLocation", {
                                        location: e
                                    }, n)
                                })
                            }
                        }
                    }(o));
                    var l = t.start(o);
                    n = g._router = b(p, v, l);
                    var d = t.state({
                        state: {}
                    });
                    if (!e) {
                        var f = n(d.location.pathname, d);
                        return h = f
                    }
                    i(function() {
                        var t = a.querySelector(e)
                          , r = n(d.location.pathname, d);
                        h = m.update(t, r)
                    })
                }
                function b(t, n, r) {
                    var a = {
                        params: {}
                    };
                    return o(t, n, function(t) {
                        return function(n, o, i) {
                            return "function" == typeof o && (u = o,
                            s = r("view: " + n, !0),
                            o = function(t, n) {
                                var r = a
                                  , o = a = f(n, {
                                    params: t
                                });
                                return !1 !== e.freeze && Object.freeze(o),
                                u(o, r, s)
                            }
                            ),
                            t(n, o, i);
                            var u, s
                        }
                    })
                }
            }
        }
        , {
            barracks: 18,
            "document-ready": 23,
            "global/document": 24,
            "hash-match": 26,
            nanoraf: 30,
            "sheet-router": 38,
            "sheet-router/hash": 35,
            "sheet-router/history": 36,
            "sheet-router/href": 37,
            xtend: 44,
            "yo-yo": 46
        }],
        22: [function(e, t, n) {
            t.exports = function(e, t, n) {
                var r, o, a, i, u;
                function s() {
                    var c = Date.now() - i;
                    c < t && 0 <= c ? r = setTimeout(s, t - c) : (r = null,
                    n || (u = e.apply(a, o),
                    a = o = null))
                }
                null == t && (t = 100);
                var c = function() {
                    a = this,
                    o = arguments,
                    i = Date.now();
                    var c = n && !r;
                    return r || (r = setTimeout(s, t)),
                    c && (u = e.apply(a, o),
                    a = o = null),
                    u
                };
                return c.clear = function() {
                    r && (clearTimeout(r),
                    r = null)
                }
                ,
                c.flush = function() {
                    r && (u = e.apply(a, o),
                    a = o = null,
                    clearTimeout(r),
                    r = null)
                }
                ,
                c
            }
        }
        , {}],
        23: [function(e, t, n) {
            "use strict";
            var r = e("global/document");
            t.exports = r.addEventListener ? function(e) {
                var t = r.readyState;
                if ("complete" === t || "interactive" === t)
                    return setTimeout(e, 0);
                r.addEventListener("DOMContentLoaded", function() {
                    e()
                })
            }
            : function() {}
        }
        , {
            "global/document": 24
        }],
        24: [function(e, t, n) {
            (function(n) {
                var r, o = void 0 !== n ? n : "undefined" != typeof window ? window : {}, a = e("min-document");
                "undefined" != typeof document ? r = document : (r = o["__GLOBAL_DOCUMENT_CACHE@4"]) || (r = o["__GLOBAL_DOCUMENT_CACHE@4"] = a),
                t.exports = r
            }
            ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            "min-document": 19
        }],
        25: [function(e, t, n) {
            (function(e) {
                var n;
                n = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {},
                t.exports = n
            }
            ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {}],
        26: [function(e, t, n) {
            t.exports = function(e, t) {
                var n = t || "/";
                return 0 === e.length ? n : (0 != (e = (e = e.replace("#", "")).replace(/\/$/, "")).indexOf("/") && (e = "/" + e),
                "/" == n ? e : e.replace(n, ""))
            }
        }
        , {}],
        27: [function(e, t, n) {
            "use strict";
            var r = e("number-is-nan");
            t.exports = Number.isFinite || function(e) {
                return !("number" != typeof e || r(e) || e === 1 / 0 || e === -1 / 0)
            }
        }
        , {
            "number-is-nan": 31
        }],
        28: [function(e, t, n) {
            var r = e("is-finite");
            t.exports = Number.isInteger || function(e) {
                return "number" == typeof e && r(e) && Math.floor(e) === e
            }
        }
        , {
            "is-finite": 27
        }],
        29: [function(e, t, n) {
            "use strict";
            var r, o = "undefined" == typeof document ? void 0 : document, a = o ? o.body || o.createElement("div") : {}, i = a.hasAttributeNS ? function(e, t, n) {
                return e.hasAttributeNS(t, n)
            }
            : a.hasAttribute ? function(e, t, n) {
                return e.hasAttribute(n)
            }
            : function(e, t, n) {
                return null != e.getAttributeNode(t, n)
            }
            ;
            function u(e, t) {
                var n = e.nodeName
                  , r = t.nodeName;
                return n === r || !!(t.actualize && n.charCodeAt(0) < 91 && 90 < r.charCodeAt(0)) && n === r.toUpperCase()
            }
            function s(e, t, n) {
                e[n] !== t[n] && (e[n] = t[n],
                e[n] ? e.setAttribute(n, "") : e.removeAttribute(n, ""))
            }
            var c = {
                OPTION: function(e, t) {
                    s(e, t, "selected")
                },
                INPUT: function(e, t) {
                    s(e, t, "checked"),
                    s(e, t, "disabled"),
                    e.value !== t.value && (e.value = t.value),
                    i(t, null, "value") || e.removeAttribute("value")
                },
                TEXTAREA: function(e, t) {
                    var n = t.value;
                    e.value !== n && (e.value = n);
                    var r = e.firstChild;
                    if (r) {
                        var o = r.nodeValue;
                        if (o == n || !n && o == e.placeholder)
                            return;
                        r.nodeValue = n
                    }
                },
                SELECT: function(e, t) {
                    if (!i(t, null, "multiple")) {
                        for (var n = 0, r = t.firstChild; r; ) {
                            var o = r.nodeName;
                            if (o && "OPTION" === o.toUpperCase()) {
                                if (i(r, null, "selected"))
                                    break;
                                n++
                            }
                            r = r.nextSibling
                        }
                        e.selectedIndex = n
                    }
                }
            };
            function l() {}
            function d(e) {
                return e.id
            }
            var f, m = (f = function(e, t) {
                var n, r, o, a, u, s = t.attributes;
                for (n = s.length - 1; 0 <= n; --n)
                    o = (r = s[n]).name,
                    a = r.namespaceURI,
                    u = r.value,
                    a ? (o = r.localName || o,
                    e.getAttributeNS(a, o) !== u && e.setAttributeNS(a, o, u)) : e.getAttribute(o) !== u && e.setAttribute(o, u);
                for (n = (s = e.attributes).length - 1; 0 <= n; --n)
                    !1 !== (r = s[n]).specified && (o = r.name,
                    (a = r.namespaceURI) ? (o = r.localName || o,
                    i(t, a, o) || e.removeAttributeNS(a, o)) : i(t, null, o) || e.removeAttribute(o))
            }
            ,
            function(e, t, n) {
                if (n || (n = {}),
                "string" == typeof t)
                    if ("#document" === e.nodeName || "HTML" === e.nodeName) {
                        var a = t;
                        (t = o.createElement("html")).innerHTML = a
                    } else
                        i = t,
                        !r && o.createRange && (r = o.createRange()).selectNode(o.body),
                        r && r.createContextualFragment ? s = r.createContextualFragment(i) : (s = o.createElement("body")).innerHTML = i,
                        t = s.childNodes[0];
                var i, s, m, p = n.getNodeKey || d, h = n.onBeforeNodeAdded || l, v = n.onNodeAdded || l, y = n.onBeforeElUpdated || l, g = n.onElUpdated || l, b = n.onBeforeNodeDiscarded || l, w = n.onNodeDiscarded || l, E = n.onBeforeElChildrenUpdated || l, x = !0 === n.childrenOnly, A = {};
                function C(e) {
                    m ? m.push(e) : m = [e]
                }
                function N(e, t, n) {
                    !1 !== b(e) && (t && t.removeChild(e),
                    w(e),
                    function e(t, n) {
                        if (1 === t.nodeType)
                            for (var r = t.firstChild; r; ) {
                                var o = void 0;
                                n && (o = p(r)) ? C(o) : (w(r),
                                r.firstChild && e(r, n)),
                                r = r.nextSibling
                            }
                    }(e, n))
                }
                function S(e) {
                    v(e);
                    for (var t = e.firstChild; t; ) {
                        var n = t.nextSibling
                          , r = p(t);
                        if (r) {
                            var o = A[r];
                            o && u(t, o) && (t.parentNode.replaceChild(o, t),
                            T(o, t))
                        }
                        S(t),
                        t = n
                    }
                }
                function T(n, r, a) {
                    var i, s = p(r);
                    if (s && delete A[s],
                    !t.isSameNode || !t.isSameNode(e)) {
                        if (!a) {
                            if (!1 === y(n, r))
                                return;
                            if (f(n, r),
                            g(n),
                            !1 === E(n, r))
                                return
                        }
                        if ("TEXTAREA" !== n.nodeName) {
                            var l, d, m, v, b = r.firstChild, w = n.firstChild;
                            e: for (; b; ) {
                                for (m = b.nextSibling,
                                l = p(b); w; ) {
                                    if (d = w.nextSibling,
                                    b.isSameNode && b.isSameNode(w)) {
                                        b = m,
                                        w = d;
                                        continue e
                                    }
                                    i = p(w);
                                    var x = w.nodeType
                                      , j = void 0;
                                    if (x === b.nodeType && (1 === x ? (l ? l !== i && ((v = A[l]) ? w.nextSibling === v ? j = !1 : (n.insertBefore(v, w),
                                    d = w.nextSibling,
                                    i ? C(i) : N(w, n, !0),
                                    w = v) : j = !1) : i && (j = !1),
                                    (j = !1 !== j && u(w, b)) && T(w, b)) : 3 !== x && 8 != x || (j = !0,
                                    w.nodeValue !== b.nodeValue && (w.nodeValue = b.nodeValue))),
                                    j) {
                                        b = m,
                                        w = d;
                                        continue e
                                    }
                                    i ? C(i) : N(w, n, !0),
                                    w = d
                                }
                                if (l && (v = A[l]) && u(v, b))
                                    n.appendChild(v),
                                    T(v, b);
                                else {
                                    var k = h(b);
                                    !1 !== k && (k && (b = k),
                                    b.actualize && (b = b.actualize(n.ownerDocument || o)),
                                    n.appendChild(b),
                                    S(b))
                                }
                                b = m,
                                w = d
                            }
                            for (; w; )
                                d = w.nextSibling,
                                (i = p(w)) ? C(i) : N(w, n, !0),
                                w = d
                        }
                        var D = c[n.nodeName];
                        D && D(n, r)
                    }
                }
                !function e(t) {
                    if (1 === t.nodeType)
                        for (var n = t.firstChild; n; ) {
                            var r = p(n);
                            r && (A[r] = n),
                            e(n),
                            n = n.nextSibling
                        }
                }(e);
                var j, k, D = e, O = D.nodeType, U = t.nodeType;
                if (!x)
                    if (1 === O)
                        1 === U ? u(e, t) || (w(e),
                        D = function(e, t) {
                            for (var n = e.firstChild; n; ) {
                                var r = n.nextSibling;
                                t.appendChild(n),
                                n = r
                            }
                            return t
                        }(e, (j = t.nodeName,
                        (k = t.namespaceURI) && "http://www.w3.org/1999/xhtml" !== k ? o.createElementNS(k, j) : o.createElement(j)))) : D = t;
                    else if (3 === O || 8 === O) {
                        if (U === O)
                            return D.nodeValue !== t.nodeValue && (D.nodeValue = t.nodeValue),
                            D;
                        D = t
                    }
                if (D === t)
                    w(e);
                else if (T(D, t, x),
                m)
                    for (var I = 0, M = m.length; I < M; I++) {
                        var P = A[m[I]];
                        P && N(P, P.parentNode, !1)
                    }
                return !x && D !== e && e.parentNode && (D.actualize && (D = D.actualize(e.ownerDocument || o)),
                e.parentNode.replaceChild(D, e)),
                D
            }
            );
            t.exports = m
        }
        , {}],
        30: [function(e, t, n) {
            var r = e("global/window");
            t.exports = function(e, t) {
                t = t || r.requestAnimationFrame;
                var n = !1
                  , o = null;
                return function(r, a) {
                    null !== o || n || (n = !0,
                    t(function() {
                        n = !1,
                        o && (e(o, a),
                        o = null)
                    })),
                    o = r
                }
            }
        }
        , {
            "global/window": 25
        }],
        31: [function(e, t, n) {
            "use strict";
            t.exports = Number.isNaN || function(e) {
                return e != e
            }
        }
        , {}],
        32: [function(e, t, n) {
            var r = e("global/document")
              , o = e("global/window")
              , a = Object.create(null)
              , i = "onloadid" + (new Date % 9e6).toString(36)
              , u = "data-" + i
              , s = 0;
            if (o && o.MutationObserver) {
                var c = new MutationObserver(function(e) {
                    if (!(Object.keys(a).length < 1))
                        for (var t = 0; t < e.length; t++)
                            e[t].attributeName !== u ? (m(e[t].removedNodes, f),
                            m(e[t].addedNodes, d)) : (i = d,
                            s = f,
                            r = c = (o = e[t]).target.getAttribute(u),
                            (n = o.oldValue) && r && a[n][3] === a[r][3] ? a[c] = a[o.oldValue] : (a[o.oldValue] && s(o.oldValue, o.target),
                            a[c] && i(c, o.target)));
                    var n, r, o, i, s, c
                }
                );
                r.body ? l(c) : r.addEventListener("DOMContentLoaded", function(e) {
                    l(c)
                })
            }
            function l(e) {
                e.observe(r.documentElement, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0,
                    attributeOldValue: !0,
                    attributeFilter: [u]
                })
            }
            function d(e, t) {
                a[e][0] && 0 === a[e][2] && (a[e][0](t),
                a[e][2] = 1)
            }
            function f(e, t) {
                a[e][1] && 1 === a[e][2] && (a[e][1](t),
                a[e][2] = 0)
            }
            function m(e, t) {
                for (var n = Object.keys(a), r = 0; r < e.length; r++) {
                    if (e[r] && e[r].getAttribute && e[r].getAttribute(u)) {
                        var o = e[r].getAttribute(u);
                        n.forEach(function(n) {
                            o === n && t(n, e[r])
                        })
                    }
                    0 < e[r].childNodes.length && m(e[r].childNodes, t)
                }
            }
            t.exports = function e(t, n, r, o) {
                return n = n || function() {}
                ,
                r = r || function() {}
                ,
                t.setAttribute(u, "o" + s),
                a["o" + s] = [n, r, 0, o || e.caller],
                s += 1,
                t
            }
            ,
            t.exports.KEY_ATTR = u,
            t.exports.KEY_ID = i
        }
        , {
            "global/document": 24,
            "global/window": 25
        }],
        33: [function(e, t, n) {
            var r = e("global/window");
            r && r.process && "renderer" === r.process.type ? t.exports = e("./index.js") : t.exports = function() {}
        }
        , {
            "./index.js": 32,
            "global/window": 25
        }],
        34: [function(e, t, n) {
            t.exports = function(e) {
                return e.trim().replace(/[\?|#].*$/, "").replace(/^(?:https?\:)\/\//, "").replace(/^.*?(\/.*)/, "$1").replace(/\/$/, "")
            }
        }
        , {}],
        35: [function(e, t, n) {
            var r = e("global/window");
            t.exports = function(e) {
                r.onhashchange = function(t) {
                    e(r.location.hash)
                }
            }
        }
        , {
            "global/window": 25
        }],
        36: [function(e, t, n) {
            var r = e("global/document")
              , o = e("global/window");
            t.exports = function(e) {
                o.onpopstate = function() {
                    e(r.location.href)
                }
            }
        }
        , {
            "global/document": 24,
            "global/window": 25
        }],
        37: [function(e, t, n) {
            var r = e("global/window");
            t.exports = function(e) {
                r.onclick = function(t) {
                    var n = function e(t) {
                        if (t)
                            return "a" !== t.localName ? e(t.parentNode) : void 0 === t.href ? e(t.parentNode) : r.location.host !== t.host ? e(t.parentNode) : t
                    }(t.target);
                    if (n) {
                        t.preventDefault();
                        var o = n.href.replace(/#$/, "");
                        e(o),
                        r.history.pushState({}, null, o)
                    }
                }
            }
        }
        , {
            "global/window": 25
        }],
        38: [function(e, t, n) {
            var r = e("pathname-match")
              , o = e("wayfarer");
            function a(e, t, n) {
                return n || (n = t,
                t = null),
                [e = e.replace(/^\//, ""), t, n]
            }
            t.exports = function(e, t, n) {
                n = n ? n(a) : a,
                t || (t = e,
                e = "");
                var i = o(e);
                return function e(t, n) {
                    if (Array.isArray(t[0]))
                        t.forEach(function(t) {
                            e(t, n)
                        });
                    else if (t[1]) {
                        var r = t[0] ? n.concat(t[0]).join("/") : n.length ? n.join("/") : t[0];
                        i.on(r, t[1]),
                        e(t[2], n.concat(t[0]))
                    } else if (Array.isArray(t[2]))
                        e(t[2], n.concat(t[0]));
                    else {
                        var o = t[0] ? n.concat(t[0]).join("/") : n.length ? n.join("/") : t[0];
                        i.on(o, t[2])
                    }
                }(t(n), []),
                function(e) {
                    var t = [].slice.call(arguments);
                    return t[0] = r(t[0]),
                    i.apply(null, t)
                }
            }
        }
        , {
            "pathname-match": 34,
            wayfarer: 42
        }],
        39: [function(e, t, n) {
            "use strict";
            t.exports = function(e, t, n) {
                if (n = "number" == typeof n ? n : 0,
                "string" != typeof e)
                    throw new TypeError("Expected a string");
                return -1 !== e.indexOf(t, n)
            }
        }
        , {}],
        40: [function(e, t, n) {
            String.prototype.endsWith || function() {
                "use strict";
                var e = function() {
                    try {
                        var e = {}
                          , t = Object.defineProperty
                          , n = t(e, e, e) && t
                    } catch (e) {}
                    return n
                }()
                  , t = {}.toString
                  , n = function(e) {
                    if (null == this)
                        throw TypeError();
                    var n = String(this);
                    if (e && "[object RegExp]" == t.call(e))
                        throw TypeError();
                    var r = n.length
                      , o = String(e)
                      , a = o.length
                      , i = r;
                    if (1 < arguments.length) {
                        var u = arguments[1];
                        void 0 !== u && (i = u ? Number(u) : 0) != i && (i = 0)
                    }
                    var s = Math.min(Math.max(i, 0), r) - a;
                    if (s < 0)
                        return !1;
                    for (var c = -1; ++c < a; )
                        if (n.charCodeAt(s + c) != o.charCodeAt(c))
                            return !1;
                    return !0
                };
                e ? e(String.prototype, "endsWith", {
                    value: n,
                    configurable: !0,
                    writable: !0
                }) : String.prototype.endsWith = n
            }()
        }
        , {}],
        41: [function(e, t, n) {
            String.prototype.startsWith || function() {
                "use strict";
                var e = function() {
                    try {
                        var e = {}
                          , t = Object.defineProperty
                          , n = t(e, e, e) && t
                    } catch (e) {}
                    return n
                }()
                  , t = {}.toString
                  , n = function(e) {
                    if (null == this)
                        throw TypeError();
                    var n = String(this);
                    if (e && "[object RegExp]" == t.call(e))
                        throw TypeError();
                    var r = n.length
                      , o = String(e)
                      , a = o.length
                      , i = 1 < arguments.length ? arguments[1] : void 0
                      , u = i ? Number(i) : 0;
                    u != u && (u = 0);
                    var s = Math.min(Math.max(u, 0), r);
                    if (r < a + s)
                        return !1;
                    for (var c = -1; ++c < a; )
                        if (n.charCodeAt(s + c) != o.charCodeAt(c))
                            return !1;
                    return !0
                };
                e ? e(String.prototype, "startsWith", {
                    value: n,
                    configurable: !0,
                    writable: !0
                }) : String.prototype.startsWith = n
            }()
        }
        , {}],
        42: [function(e, t, n) {
            var r = e("./trie");
            t.exports = function e(t) {
                if (!(this instanceof e))
                    return new e(t);
                var n = (t || "").replace(/^\//, "")
                  , o = r();
                return a._trie = o,
                a.on = function(e, t) {
                    var n = t._wayfarer && t._trie ? t : function() {
                        return t.apply(this, Array.prototype.slice.call(arguments))
                    }
                    ;
                    return e = e || "/",
                    n.route = e,
                    n._wayfarer && n._trie ? o.mount(e, n._trie.trie) : o.create(e).cb = n,
                    a
                }
                ,
                (a.emit = a).match = i,
                a._wayfarer = !0,
                a;
                function a(e) {
                    var t = i(e)
                      , n = new Array(arguments.length);
                    n[0] = t.params;
                    for (var r = 1; r < n.length; r++)
                        n[r] = arguments[r];
                    return t.cb.apply(t.cb, n)
                }
                function i(e) {
                    var t = o.match(e);
                    if (t && t.cb)
                        return new u(t);
                    var r = o.match(n);
                    if (r && r.cb)
                        return new u(r);
                    throw new Error("route '" + e + "' did not match")
                }
                function u(e) {
                    this.cb = e.cb,
                    this.route = e.cb.route,
                    this.params = e.params
                }
            }
        }
        , {
            "./trie": 43
        }],
        43: [function(e, t, n) {
            var r = e("xtend/mutable")
              , o = e("xtend");
            function a() {
                if (!(this instanceof a))
                    return new a;
                this.trie = {
                    nodes: {}
                }
            }
            (t.exports = a).prototype.create = function(e) {
                var t = e.replace(/^\//, "").split("/");
                return function e(n, r) {
                    var o = t.hasOwnProperty(n) && t[n];
                    if (!1 === o)
                        return r;
                    var a = null;
                    return /^:|^\*/.test(o) ? (r.nodes.hasOwnProperty("$$") ? a = r.nodes.$$ : (a = {
                        nodes: {}
                    },
                    r.nodes.$$ = a),
                    "*" === o[0] && (r.wildcard = !0),
                    r.name = o.replace(/^:|^\*/, "")) : r.nodes.hasOwnProperty(o) ? a = r.nodes[o] : (a = {
                        nodes: {}
                    },
                    r.nodes[o] = a),
                    e(n + 1, a)
                }(0, this.trie)
            }
            ,
            a.prototype.match = function(e) {
                var t = e.replace(/^\//, "").split("/")
                  , n = {}
                  , r = function e(r, o) {
                    if (void 0 !== o) {
                        var a = t[r];
                        if (void 0 === a)
                            return o;
                        if (o.nodes.hasOwnProperty(a))
                            return e(r + 1, o.nodes[a]);
                        if (o.name) {
                            try {
                                n[o.name] = decodeURIComponent(a)
                            } catch (o) {
                                return e(r, void 0)
                            }
                            return e(r + 1, o.nodes.$$)
                        }
                        if (o.wildcard) {
                            try {
                                n.wildcard = decodeURIComponent(t.slice(r).join("/"))
                            } catch (o) {
                                return e(r, void 0)
                            }
                            return o.nodes.$$
                        }
                        return e(r + 1)
                    }
                }(0, this.trie);
                if (r)
                    return (r = o(r)).params = n,
                    r
            }
            ,
            a.prototype.mount = function(e, t) {
                var n = e.replace(/^\//, "").split("/")
                  , o = null
                  , a = null;
                if (1 === n.length)
                    a = n[0],
                    o = this.create(a);
                else {
                    var i = n.join("/");
                    a = n[0],
                    o = this.create(i)
                }
                r(o.nodes, t.nodes),
                t.name && (o.name = t.name),
                o.nodes[""] && (Object.keys(o.nodes[""]).forEach(function(e) {
                    "nodes" !== e && (o[e] = o.nodes[""][e])
                }),
                r(o.nodes, o.nodes[""].nodes),
                delete o.nodes[""].nodes)
            }
        }
        , {
            xtend: 44,
            "xtend/mutable": 45
        }],
        44: [function(e, t, n) {
            t.exports = function() {
                for (var e = {}, t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        r.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ;
            var r = Object.prototype.hasOwnProperty
        }
        , {}],
        45: [function(e, t, n) {
            t.exports = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        r.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ;
            var r = Object.prototype.hasOwnProperty
        }
        , {}],
        46: [function(e, t, n) {
            var r = e("morphdom")
              , o = e("./update-events.js");
            t.exports = {},
            t.exports.update = function(e, t, n) {
                return n || (n = {}),
                !1 !== n.events && (n.onBeforeElUpdated || (n.onBeforeElUpdated = function(e, t) {
                    for (var r = n.events || o, a = 0; a < r.length; a++) {
                        var i = r[a];
                        t[i] ? e[i] = t[i] : e[i] && (e[i] = void 0)
                    }
                    var u = e.value
                      , s = t.value;
                    "INPUT" === e.nodeName && "file" !== e.type || "SELECT" === e.nodeName ? s || t.hasAttribute("value") ? s !== u && (e.value = s) : t.value = e.value : "TEXTAREA" === e.nodeName && null === t.getAttribute("value") && (e.value = t.value)
                }
                )),
                r(e, t, n)
            }
        }
        , {
            "./update-events.js": 47,
            morphdom: 29
        }],
        47: [function(e, t, n) {
            t.exports = ["onclick", "ondblclick", "onmousedown", "onmouseup", "onmouseover", "onmousemove", "onmouseout", "ondragstart", "ondrag", "ondragenter", "ondragleave", "ondragover", "ondrop", "ondragend", "onkeydown", "onkeypress", "onkeyup", "onunload", "onabort", "onerror", "onresize", "onscroll", "onselect", "onchange", "onsubmit", "onreset", "onfocus", "onblur", "oninput", "oncontextmenu", "onfocusin", "onfocusout"]
        }
        , {}],
        48: [function(e, t, n) {
            t.exports = function e(t, n) {
                for (var r = 0; r < n.length; r++) {
                    var o = n[r];
                    if (Array.isArray(o))
                        e(t, o);
                    else {
                        if (("number" == typeof o || "boolean" == typeof o || o instanceof Date || o instanceof RegExp) && (o = o.toString()),
                        "string" == typeof o) {
                            if (t.lastChild && "#text" === t.lastChild.nodeName) {
                                t.lastChild.nodeValue += o;
                                continue
                            }
                            o = document.createTextNode(o)
                        }
                        o && o.nodeType && t.appendChild(o)
                    }
                }
            }
        }
        , {}],
        49: [function(e, t, n) {
            e("choo/html");
            var r = e("../elements/part-explanation")
              , o = e("../elements/text-editor")
              , a = e("../elements/warning")
              , i = e("../elements/random-example")
              , u = e("../elements/next-date")
              , s = e("../elements/human-readable")
              , c = e("../elements/blurb");
            t.exports = function(t, n, l) {
                return function() {
                    var t = e("./yo-yoify/lib/appendChild.js")
                      , n = document.createElement("div");
                    return t(n, ["\n    ", arguments[0], "\n    ", arguments[1], "\n    ", arguments[2], "\n    ", arguments[3], "\n    ", arguments[4], "\n    ", arguments[5], "\n    ", arguments[6], "\n  "]),
                    n
                }(s(t, n, l), u(t, n, l), i(t, n, l), o(t, n, l), a(t, n, l), r(t, n, l), c(t, n, l))
            }
        }
        , {
            "../elements/blurb": 2,
            "../elements/human-readable": 3,
            "../elements/next-date": 4,
            "../elements/part-explanation": 5,
            "../elements/random-example": 6,
            "../elements/text-editor": 7,
            "../elements/warning": 8,
            "./yo-yoify/lib/appendChild.js": 48,
            "choo/html": 20
        }]
    }, {}, [1])
};
new Vue({
    el: "#containerCrontab",
    data: {},
    mounted: function() {
        crontabGuruStarter(),
        window.start(),
        this.randomCron()
    },
    methods: {
        randomCron: function() {
            document.querySelector("#contabContentBox .example span.clickable").click()
        }
    }
});
