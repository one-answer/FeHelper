!function(t) {
  "object" == typeof exports && "object" == typeof module ? t(require("../../lib/codemirror"), require("../xml/xml"), require("../javascript/javascript"), require("../css/css")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../xml/xml", "../javascript/javascript", "../css/css"], t) : t(CodeMirror)
}(function(t) {
  "use strict";
  var e = {
      script: [["lang", /(javascript|babel)/i, "javascript"], ["type", /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i, "javascript"], ["type", /./, "text/plain"], [null, null, "javascript"]],
      style: [["lang", /^css$/i, "css"], ["type", /^(text\/)?(x-)?(stylesheet|css)$/i, "css"], ["type", /./, "text/plain"], [null, null, "css"]]
  };
  var a = {};
  function n(t, e) {
      var n = t.match(function(t) {
          var e = a[t];
          return e || (a[t] = new RegExp("\\s+" + t + "\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*"))
      }(e));
      return n ? /^\s*(.*?)\s*$/.exec(n[2])[1] : ""
  }
  function l(t, e) {
      return new RegExp((e ? "^" : "") + "</s*" + t + "s*>","i")
  }
  function r(t, e) {
      for (var a in t)
          for (var n = e[a] || (e[a] = []), l = t[a], r = l.length - 1; r >= 0; r--)
              n.unshift(l[r])
  }
  t.defineMode("htmlmixed", function(a, o) {
      var c = t.getMode(a, {
          name: "xml",
          htmlMode: !0,
          multilineTagIndentFactor: o.multilineTagIndentFactor,
          multilineTagIndentPastTag: o.multilineTagIndentPastTag
      })
        , i = {}
        , s = o && o.tags
        , u = o && o.scriptTypes;
      if (r(e, i),
      s && r(s, i),
      u)
          for (var m = u.length - 1; m >= 0; m--)
              i.script.unshift(["type", u[m].matches, u[m].mode]);
      function d(e, r) {
          var o, s = c.token(e, r.htmlState), u = /\btag\b/.test(s);
          if (u && !/[<>\s\/]/.test(e.current()) && (o = r.htmlState.tagName && r.htmlState.tagName.toLowerCase()) && i.hasOwnProperty(o))
              r.inTag = o + " ";
          else if (r.inTag && u && />$/.test(e.current())) {
              var m = /^([\S]+) (.*)/.exec(r.inTag);
              r.inTag = null;
              var f = ">" == e.current() && function(t, e) {
                  for (var a = 0; a < t.length; a++) {
                      var l = t[a];
                      if (!l[0] || l[1].test(n(e, l[0])))
                          return l[2]
                  }
              }(i[m[1]], m[2])
                , p = t.getMode(a, f)
                , g = l(m[1], !0)
                , h = l(m[1], !1);
              r.token = function(t, e) {
                  return t.match(g, !1) ? (e.token = d,
                  e.localState = e.localMode = null,
                  null) : function(t, e, a) {
                      var n = t.current()
                        , l = n.search(e);
                      return l > -1 ? t.backUp(n.length - l) : n.match(/<\/?$/) && (t.backUp(n.length),
                      t.match(e, !1) || t.match(n)),
                      a
                  }(t, h, e.localMode.token(t, e.localState))
              }
              ,
              r.localMode = p,
              r.localState = t.startState(p, c.indent(r.htmlState, "", ""))
          } else
              r.inTag && (r.inTag += e.current(),
              e.eol() && (r.inTag += " "));
          return s
      }
      return {
          startState: function() {
              return {
                  token: d,
                  inTag: null,
                  localMode: null,
                  localState: null,
                  htmlState: t.startState(c)
              }
          },
          copyState: function(e) {
              var a;
              return e.localState && (a = t.copyState(e.localMode, e.localState)),
              {
                  token: e.token,
                  inTag: e.inTag,
                  localMode: e.localMode,
                  localState: a,
                  htmlState: t.copyState(c, e.htmlState)
              }
          },
          token: function(t, e) {
              return e.token(t, e)
          },
          indent: function(e, a, n) {
              return !e.localMode || /^\s*<\//.test(a) ? c.indent(e.htmlState, a, n) : e.localMode.indent ? e.localMode.indent(e.localState, a, n) : t.Pass
          },
          innerMode: function(t) {
              return {
                  state: t.localState || t.htmlState,
                  mode: t.localMode || c
              }
          }
      }
  }, "xml", "javascript", "css"),
  t.defineMIME("text/html", "htmlmixed")
});
