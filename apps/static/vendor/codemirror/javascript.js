!function(e) {
  "use strict";
  e.defineMode("javascript", function(t, r) {
      function n(e, t, r) {
          return ze = e,
          Ie = r,
          t
      }
      function a(e, t) {
          var r = e.next();
          if ('"' == r || "'" == r)
              return t.tokenize = i(r),
              t.tokenize(e, t);
          if ("." == r && e.match(/^\d+(?:[eE][+\-]?\d+)?/))
              return n("number", "number");
          if ("." == r && e.match(".."))
              return n("spread", "meta");
          if (/[\[\]{}\(\),;\:\.]/.test(r))
              return n(r);
          if ("=" == r && e.eat(">"))
              return n("=>", "operator");
          if ("0" == r && e.eat(/x/i))
              return e.eatWhile(/[\da-f]/i),
              n("number", "number");
          if ("0" == r && e.eat(/o/i))
              return e.eatWhile(/[0-7]/i),
              n("number", "number");
          if ("0" == r && e.eat(/b/i))
              return e.eatWhile(/[01]/i),
              n("number", "number");
          if (/\d/.test(r))
              return e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),
              n("number", "number");
          if ("/" == r)
              return e.eat("*") ? (t.tokenize = o,
              o(e, t)) : e.eat("/") ? (e.skipToEnd(),
              n("comment", "comment")) : Ee(e, t, 1) ? (function(e) {
                  for (var t, r = !1, n = !1; null != (t = e.next()); ) {
                      if (!r) {
                          if ("/" == t && !n)
                              return;
                          "[" == t ? n = !0 : n && "]" == t && (n = !1)
                      }
                      r = !r && "\\" == t
                  }
              }(e),
              e.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/),
              n("regexp", "string-2")) : (e.eat("="),
              n("operator", "operator", e.current()));
          if ("`" == r)
              return t.tokenize = c,
              c(e, t);
          if ("#" == r)
              return e.skipToEnd(),
              n("error", "error");
          if (We.test(r))
              return ">" == r && t.lexical && ">" == t.lexical.type || (e.eat("=") ? ("!" == r || "=" == r) && e.eat("=") : /[<>*+\-]/.test(r) && (e.eat(r),
              ">" == r && e.eat(r))),
              n("operator", "operator", e.current());
          if (Pe.test(r)) {
              e.eatWhile(Pe);
              var a = e.current();
              if ("." != t.lastType) {
                  if (Se.propertyIsEnumerable(a)) {
                      var u = Se[a];
                      return n(u.type, u.style, a)
                  }
                  if ("async" == a && e.match(/^(\s|\/\*.*?\*\/)*[\(\w]/, !1))
                      return n("async", "keyword", a)
              }
              return n("variable", "variable", a)
          }
      }
      function i(e) {
          return function(t, r) {
              var i, o = !1;
              if (Ce && "@" == t.peek() && t.match(Ne))
                  return r.tokenize = a,
                  n("jsonld-keyword", "meta");
              for (; null != (i = t.next()) && (i != e || o); )
                  o = !o && "\\" == i;
              return o || (r.tokenize = a),
              n("string", "string")
          }
      }
      function o(e, t) {
          for (var r, i = !1; r = e.next(); ) {
              if ("/" == r && i) {
                  t.tokenize = a;
                  break
              }
              i = "*" == r
          }
          return n("comment", "comment")
      }
      function c(e, t) {
          for (var r, i = !1; null != (r = e.next()); ) {
              if (!i && ("`" == r || "$" == r && e.eat("{"))) {
                  t.tokenize = a;
                  break
              }
              i = !i && "\\" == r
          }
          return n("quasi", "string-2", e.current())
      }
      function u(e, t) {
          t.fatArrowAt && (t.fatArrowAt = null);
          var r = e.string.indexOf("=>", e.start);
          if (!(0 > r)) {
              if (qe) {
                  var n = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start, r));
                  n && (r = n.index)
              }
              for (var a = 0, i = !1, o = r - 1; 0 <= o; --o) {
                  var c = e.string.charAt(o)
                    , u = "([{}])".indexOf(c);
                  if (0 <= u && 3 > u) {
                      if (!a) {
                          ++o;
                          break
                      }
                      if (0 == --a) {
                          "(" == c && (i = !0);
                          break
                      }
                  } else if (3 <= u && 6 > u)
                      ++a;
                  else if (Pe.test(c))
                      i = !0;
                  else {
                      if (/["'\/]/.test(c))
                          return;
                      if (i && !a) {
                          ++o;
                          break
                      }
                  }
              }
              i && !a && (t.fatArrowAt = o)
          }
      }
      function s(e, t, r, n, a, i) {
          this.indented = e,
          this.column = t,
          this.type = r,
          this.prev = a,
          this.info = i,
          null != n && (this.align = n)
      }
      function f(e, t) {
          for (var r = e.localVars; r; r = r.next)
              if (r.name == t)
                  return !0;
          for (var n = e.context; n; n = n.prev)
              for (var r = n.vars; r; r = r.next)
                  if (r.name == t)
                      return !0
      }
      function l() {
          for (var e = arguments.length - 1; 0 <= e; e--)
              Be.cc.push(arguments[e])
      }
      function d() {
          return l.apply(null, arguments),
          !0
      }
      function p(e) {
          function t(t) {
              for (var r = t; r; r = r.next)
                  if (r.name == e)
                      return !0;
              return !1
          }
          var n = Be.state;
          if (Be.marked = "def",
          n.context) {
              if (t(n.localVars))
                  return;
              n.localVars = {
                  name: e,
                  next: n.localVars
              }
          } else {
              if (t(n.globalVars))
                  return;
              r.globalVars && (n.globalVars = {
                  name: e,
                  next: n.globalVars
              })
          }
      }
      function m(e) {
          return "public" == e || "private" == e || "protected" == e || "abstract" == e || "readonly" == e
      }
      function k() {
          Be.state.context = {
              prev: Be.state.context,
              vars: Be.state.localVars
          },
          Be.state.localVars = He
      }
      function v() {
          Be.state.localVars = Be.state.context.vars,
          Be.state.context = Be.state.context.prev
      }
      function y(e, t) {
          var r = function() {
              var r = Be.state
                , n = r.indented;
              if ("stat" == r.lexical.type)
                  n = r.lexical.indented;
              else
                  for (var a = r.lexical; a && ")" == a.type && a.align; a = a.prev)
                      n = a.indented;
              r.lexical = new s(n,Be.stream.column(),e,null,r.lexical,t)
          };
          return r.lex = !0,
          r
      }
      function w() {
          var e = Be.state;
          e.lexical.prev && (")" == e.lexical.type && (e.indented = e.lexical.indented),
          e.lexical = e.lexical.prev)
      }
      function b(e) {
          return function t(r) {
              return r == e ? d() : ";" == e ? l() : d(t)
          }
      }
      function x(e, t) {
          return "var" == e ? d(y("vardef", t.length), _, b(";"), w) : "keyword a" == e ? d(y("form"), j, x, w) : "keyword b" == e ? d(y("form"), x, w) : "keyword d" == e ? Be.stream.match(/^\s*$/, !1) ? d() : d(y("stat"), V, b(";"), w) : "debugger" == e ? d(b(";")) : "{" == e ? d(y("}"), H, w) : ";" == e ? d() : "if" == e ? ("else" == Be.state.lexical.info && Be.state.cc[Be.state.cc.length - 1] == w && Be.state.cc.pop()(),
          d(y("form"), j, x, w, ae)) : "function" == e ? d(fe) : "for" == e ? d(y("form"), ie, x, w) : "class" == e || qe && "interface" == t ? (Be.marked = "keyword",
          d(y("form"), pe, w)) : "variable" == e ? qe && "declare" == t ? (Be.marked = "keyword",
          d(x)) : qe && ("module" == t || "enum" == t || "type" == t) && Be.stream.match(/^\s*\w/, !1) ? (Be.marked = "keyword",
          "enum" == t ? d(Ve) : "type" == t ? d(J, b("operator"), J, b(";")) : d(y("form"), ee, b("{"), y("}"), H, w, w)) : qe && "namespace" == t ? (Be.marked = "keyword",
          d(y("form"), h, H, w)) : d(y("stat"), q) : "switch" == e ? d(y("form"), j, b("{"), y("}", "switch"), H, w, w) : "case" == e ? d(h, b(":")) : "default" == e ? d(b(":")) : "catch" == e ? d(y("form"), k, b("("), le, b(")"), x, w, v) : "export" == e ? d(y("stat"), ye, w) : "import" == e ? d(y("stat"), be, w) : "async" == e ? d(x) : "@" == t ? d(h, x) : l(y("stat"), h, b(";"), w)
      }
      function h(e, t) {
          return M(e, t, !1)
      }
      function g(e, t) {
          return M(e, t, !0)
      }
      function j(e) {
          return "(" == e ? d(y(")"), h, b(")"), w) : l()
      }
      function M(e, t, r) {
          if (Be.state.fatArrowAt == Be.stream.start) {
              var n = r ? $ : T;
              if ("(" == e)
                  return d(k, y(")"), U(le, ")"), w, b("=>"), n, v);
              if ("variable" == e)
                  return l(k, ee, b("=>"), n, v)
          }
          var a = r ? E : A;
          return Ue.hasOwnProperty(e) ? d(a) : "function" == e ? d(fe, a) : "class" == e || qe && "interface" == t ? (Be.marked = "keyword",
          d(y("form"), de, w)) : "keyword c" == e || "async" == e ? d(r ? g : h) : "(" == e ? d(y(")"), V, b(")"), w, a) : "operator" == e || "spread" == e ? d(r ? g : h) : "[" == e ? d(y("]"), Me, w, a) : "{" == e ? B(S, "}", null, a) : "quasi" == e ? l(z, a) : "new" == e ? d(function(e) {
              return function(t) {
                  return "." == t ? d(e ? O : C) : "variable" == t && qe ? d(X, e ? E : A) : l(e ? g : h)
              }
          }(r)) : "import" == e ? d(h) : d()
      }
      function V(e) {
          return e.match(/[;\}\)\],]/) ? l() : l(h)
      }
      function A(e, t) {
          return "," == e ? d(h) : E(e, t, !1)
      }
      function E(e, t, r) {
          var n = 0 == r ? A : E
            , a = 0 == r ? h : g;
          return "=>" == e ? d(k, r ? $ : T, v) : "operator" == e ? /\+\+|--/.test(t) || qe && "!" == t ? d(n) : qe && "<" == t && Be.stream.match(/^([^>]|<.*?>)*>\s*\(/, !1) ? d(y(">"), U(J, ">"), w, n) : "?" == t ? d(h, b(":"), a) : d(a) : "quasi" == e ? l(z, n) : ";" == e ? void 0 : "(" == e ? B(g, ")", "call", n) : "." == e ? d(P, n) : "[" == e ? d(y("]"), V, b("]"), w, n) : qe && "as" == t ? (Be.marked = "keyword",
          d(J, n)) : "regexp" == e ? (Be.state.lastType = Be.marked = "operator",
          Be.stream.backUp(Be.stream.pos - Be.stream.start - 1),
          d(a)) : void 0
      }
      function z(e, t) {
          return "quasi" == e ? "${" == t.slice(t.length - 2) ? d(h, I) : d(z) : l()
      }
      function I(e) {
          if ("}" == e)
              return Be.marked = "string-2",
              Be.state.tokenize = c,
              d(z)
      }
      function T(e) {
          return u(Be.stream, Be.state),
          l("{" == e ? x : h)
      }
      function $(e) {
          return u(Be.stream, Be.state),
          l("{" == e ? x : g)
      }
      function C(e, t) {
          if ("target" == t)
              return Be.marked = "keyword",
              d(A)
      }
      function O(e, t) {
          if ("target" == t)
              return Be.marked = "keyword",
              d(E)
      }
      function q(e) {
          return ":" == e ? d(w, x) : l(A, b(";"), w)
      }
      function P(e) {
          if ("variable" == e)
              return Be.marked = "property",
              d()
      }
      function S(e, t) {
          return "async" == e ? (Be.marked = "property",
          d(S)) : "variable" == e || "keyword" == Be.style ? (Be.marked = "property",
          "get" == t || "set" == t ? d(W) : (qe && Be.state.fatArrowAt == Be.stream.start && (r = Be.stream.match(/^\s*:\s*/, !1)) && (Be.state.fatArrowAt = Be.stream.pos + r[0].length),
          d(N))) : "number" == e || "string" == e ? (Be.marked = Ce ? "property" : Be.style + " property",
          d(N)) : "jsonld-keyword" == e ? d(N) : qe && m(t) ? (Be.marked = "keyword",
          d(S)) : "[" == e ? d(h, D, b("]"), N) : "spread" == e ? d(g, N) : "*" == t ? (Be.marked = "keyword",
          d(S)) : ":" == e ? l(N) : void 0;
          var r
      }
      function W(e) {
          return "variable" == e ? (Be.marked = "property",
          d(fe)) : l(N)
      }
      function N(e) {
          return ":" == e ? d(g) : "(" == e ? l(fe) : void 0
      }
      function U(e, t, r) {
          function n(a, i) {
              if (r ? -1 < r.indexOf(a) : "," == a) {
                  var o = Be.state.lexical;
                  return "call" == o.info && (o.pos = (o.pos || 0) + 1),
                  d(function(r, n) {
                      return r == t || n == t ? l() : l(e)
                  }, n)
              }
              return a == t || i == t ? d() : d(b(t))
          }
          return function(r, a) {
              return r == t || a == t ? d() : l(e, n)
          }
      }
      function B(e, t, r) {
          for (var n = 3; n < arguments.length; n++)
              Be.cc.push(arguments[n]);
          return d(y(t, r), U(e, t), w)
      }
      function H(e) {
          return "}" == e ? d() : l(x, H)
      }
      function D(e, t) {
          if (qe) {
              if (":" == e)
                  return d(J);
              if ("?" == t)
                  return d(D)
          }
      }
      function F(e) {
          if (qe && ":" == e)
              return Be.stream.match(/^\s*\w+\s+is\b/, !1) ? d(h, G, J) : d(J)
      }
      function G(e, t) {
          if ("is" == t)
              return Be.marked = "keyword",
              d()
      }
      function J(e, t) {
          return "keyof" == t || "typeof" == t ? (Be.marked = "keyword",
          d("keyof" == t ? J : h)) : "variable" == e || "void" == t ? (Be.marked = "type",
          d(R)) : "string" == e || "number" == e || "atom" == e ? d(R) : "[" == e ? d(y("]"), U(J, "]", ","), w, R) : "{" == e ? d(y("}"), U(L, "}", ",;"), w, R) : "(" == e ? d(U(Q, ")"), K) : void 0
      }
      function K(e) {
          if ("=>" == e)
              return d(J)
      }
      function L(e, t) {
          return "variable" == e || "keyword" == Be.style ? (Be.marked = "property",
          d(L)) : "?" == t ? d(L) : ":" == e ? d(J) : "[" == e ? d(h, D, b("]"), L) : void 0
      }
      function Q(e) {
          return "variable" == e ? d(Q) : ":" == e ? d(J) : void 0
      }
      function R(e, t) {
          return "<" == t ? d(y(">"), U(J, ">"), w, R) : "|" == t || "." == e || "&" == t ? d(J) : "[" == e ? d(b("]"), R) : "extends" == t || "implements" == t ? (Be.marked = "keyword",
          d(J)) : void 0
      }
      function X(e, t) {
          if ("<" == t)
              return d(y(">"), U(J, ">"), w, R)
      }
      function Y() {
          return l(J, Z)
      }
      function Z(e, t) {
          if ("=" == t)
              return d(J)
      }
      function _(e, t) {
          return "enum" == t ? (Be.marked = "keyword",
          d(Ve)) : l(ee, D, re, ne)
      }
      function ee(e, t) {
          return qe && m(t) ? (Be.marked = "keyword",
          d(ee)) : "variable" == e ? (p(t),
          d()) : "spread" == e ? d(ee) : "[" == e ? B(ee, "]") : "{" == e ? B(te, "}") : void 0
      }
      function te(e, t) {
          return "variable" != e || Be.stream.match(/^\s*:/, !1) ? ("variable" == e && (Be.marked = "property"),
          "spread" == e ? d(ee) : "}" == e ? l() : d(b(":"), ee, re)) : (p(t),
          d(re))
      }
      function re(e, t) {
          if ("=" == t)
              return d(g)
      }
      function ne(e) {
          if ("," == e)
              return d(_)
      }
      function ae(e, t) {
          if ("keyword b" == e && "else" == t)
              return d(y("form", "else"), x, w)
      }
      function ie(e, t) {
          return "await" == t ? d(ie) : "(" == e ? d(y(")"), oe, b(")"), w) : void 0
      }
      function oe(e) {
          return "var" == e ? d(_, b(";"), ue) : ";" == e ? d(ue) : "variable" == e ? d(ce) : l(h, b(";"), ue)
      }
      function ce(e, t) {
          return "in" == t || "of" == t ? (Be.marked = "keyword",
          d(h)) : d(A, ue)
      }
      function ue(e, t) {
          return ";" == e ? d(se) : "in" == t || "of" == t ? (Be.marked = "keyword",
          d(h)) : l(h, b(";"), se)
      }
      function se(e) {
          ")" != e && d(h)
      }
      function fe(e, t) {
          return "*" == t ? (Be.marked = "keyword",
          d(fe)) : "variable" == e ? (p(t),
          d(fe)) : "(" == e ? d(k, y(")"), U(le, ")"), w, F, x, v) : qe && "<" == t ? d(y(">"), U(Y, ">"), w, fe) : void 0
      }
      function le(e, t) {
          return "@" == t && d(h, le),
          "spread" == e ? d(le) : qe && m(t) ? (Be.marked = "keyword",
          d(le)) : l(ee, D, re)
      }
      function de(e, t) {
          return "variable" == e ? pe(e, t) : me(e, t)
      }
      function pe(e, t) {
          if ("variable" == e)
              return p(t),
              d(me)
      }
      function me(e, t) {
          return "<" == t ? d(y(">"), U(Y, ">"), w, me) : "extends" == t || "implements" == t || qe && "," == e ? ("implements" == t && (Be.marked = "keyword"),
          d(qe ? J : h, me)) : "{" == e ? d(y("}"), ke, w) : void 0
      }
      function ke(e, t) {
          return "async" == e || "variable" == e && ("static" == t || "get" == t || "set" == t || qe && m(t)) && Be.stream.match(/^\s+[\w$\xa1-\uffff]/, !1) ? (Be.marked = "keyword",
          d(ke)) : "variable" == e || "keyword" == Be.style ? (Be.marked = "property",
          d(qe ? ve : fe, ke)) : "[" == e ? d(h, D, b("]"), qe ? ve : fe, ke) : "*" == t ? (Be.marked = "keyword",
          d(ke)) : ";" == e ? d(ke) : "}" == e ? d() : "@" == t ? d(h, ke) : void 0
      }
      function ve(e, t) {
          return "?" == t ? d(ve) : ":" == e ? d(J, re) : "=" == t ? d(g) : l(fe)
      }
      function ye(e, t) {
          return "*" == t ? (Be.marked = "keyword",
          d(je, b(";"))) : "default" == t ? (Be.marked = "keyword",
          d(h, b(";"))) : "{" == e ? d(U(we, "}"), je, b(";")) : l(x)
      }
      function we(e, t) {
          return "as" == t ? (Be.marked = "keyword",
          d(b("variable"))) : "variable" == e ? l(g, we) : void 0
      }
      function be(e) {
          return "string" == e ? d() : "(" == e ? l(h) : l(xe, he, je)
      }
      function xe(e, t) {
          return "{" == e ? B(xe, "}") : ("variable" == e && p(t),
          "*" == t && (Be.marked = "keyword"),
          d(ge))
      }
      function he(e) {
          if ("," == e)
              return d(xe, he)
      }
      function ge(e, t) {
          if ("as" == t)
              return Be.marked = "keyword",
              d(xe)
      }
      function je(e, t) {
          if ("from" == t)
              return Be.marked = "keyword",
              d(h)
      }
      function Me(e) {
          return "]" == e ? d() : l(U(g, "]"))
      }
      function Ve() {
          return l(y("form"), ee, b("{"), y("}"), U(Ae, "}"), w, w)
      }
      function Ae() {
          return l(ee, re)
      }
      function Ee(e, t, r) {
          return t.tokenize == a && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType) || "quasi" == t.lastType && /\{\s*$/.test(e.string.slice(0, e.pos - (r || 0)))
      }
      var ze, Ie, Te = t.indentUnit, $e = r.statementIndent, Ce = r.jsonld, Oe = r.json || Ce, qe = r.typescript, Pe = r.wordCharacters || /[\w$\xa1-\uffff]/, Se = function() {
          function e(e) {
              return {
                  type: e,
                  style: "keyword"
              }
          }
          var t = e("keyword a")
            , r = e("keyword b")
            , n = e("keyword c")
            , a = e("keyword d")
            , i = e("operator")
            , o = {
              type: "atom",
              style: "atom"
          };
          return {
              if: e("if"),
              while: t,
              with: t,
              else: r,
              do: r,
              try: r,
              finally: r,
              return: a,
              break: a,
              continue: a,
              new: e("new"),
              delete: n,
              void: n,
              throw: n,
              debugger: e("debugger"),
              var: e("var"),
              const: e("var"),
              let: e("var"),
              function: e("function"),
              catch: e("catch"),
              for: e("for"),
              switch: e("switch"),
              case: e("case"),
              default: e("default"),
              in: i,
              typeof: i,
              instanceof: i,
              true: o,
              false: o,
              null: o,
              undefined: o,
              NaN: o,
              Infinity: o,
              this: e("this"),
              class: e("class"),
              super: e("atom"),
              yield: n,
              export: e("export"),
              import: e("import"),
              extends: n,
              await: n
          }
      }(), We = /[+\-*&%=<>!?|~^@]/, Ne = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/, Ue = {
          atom: !0,
          number: !0,
          variable: !0,
          string: !0,
          regexp: !0,
          this: !0,
          "jsonld-keyword": !0
      }, Be = {
          state: null,
          column: null,
          marked: null,
          cc: null
      }, He = {
          name: "this",
          next: {
              name: "arguments"
          }
      };
      return w.lex = !0,
      {
          startState: function(e) {
              var t = {
                  tokenize: a,
                  lastType: "sof",
                  cc: [],
                  lexical: new s((e || 0) - Te,0,"block",!1),
                  localVars: r.localVars,
                  context: r.localVars && {
                      vars: r.localVars
                  },
                  indented: e || 0
              };
              return r.globalVars && "object" == typeof r.globalVars && (t.globalVars = r.globalVars),
              t
          },
          token: function(e, t) {
              if (e.sol() && (!t.lexical.hasOwnProperty("align") && (t.lexical.align = !1),
              t.indented = e.indentation(),
              u(e, t)),
              t.tokenize != o && e.eatSpace())
                  return null;
              var r = t.tokenize(e, t);
              return "comment" == ze ? r : (t.lastType = "operator" != ze || "++" != Ie && "--" != Ie ? ze : "incdec",
              function(e, t, r, n, a) {
                  var i = e.cc;
                  for (Be.state = e,
                  Be.stream = a,
                  Be.marked = null,
                  Be.cc = i,
                  Be.style = t,
                  e.lexical.hasOwnProperty("align") || (e.lexical.align = !0); ; ) {
                      var o = i.length ? i.pop() : Oe ? h : x;
                      if (o(r, n)) {
                          for (; i.length && i[i.length - 1].lex; )
                              i.pop()();
                          return Be.marked ? Be.marked : "variable" == r && f(e, n) ? "variable-2" : t
                      }
                  }
              }(t, r, ze, Ie, e))
          },
          indent: function(t, n) {
              if (t.tokenize == o)
                  return e.Pass;
              if (t.tokenize != a)
                  return 0;
              var i, c = n && n.charAt(0), u = t.lexical;
              if (!/^\s*else\b/.test(n))
                  for (var s, f = t.cc.length - 1; 0 <= f; --f)
                      if ((s = t.cc[f]) == w)
                          u = u.prev;
                      else if (s != ae)
                          break;
              for (; ("stat" == u.type || "form" == u.type) && ("}" == c || (i = t.cc[t.cc.length - 1]) && (i == A || i == E) && !/^[,\.=+\-*:?[\(]/.test(n)); )
                  u = u.prev;
              $e && ")" == u.type && "stat" == u.prev.type && (u = u.prev);
              var l = u.type
                , d = c == l;
              return "vardef" == l ? u.indented + ("operator" == t.lastType || "," == t.lastType ? u.info + 1 : 0) : "form" == l && "{" == c ? u.indented : "form" == l ? u.indented + Te : "stat" == l ? u.indented + (function(e, t) {
                  return "operator" == e.lastType || "," == e.lastType || We.test(t.charAt(0)) || /[,.]/.test(t.charAt(0))
              }(t, n) ? $e || Te : 0) : "switch" != u.info || d || 0 == r.doubleIndentSwitch ? u.align ? u.column + (d ? 0 : 1) : u.indented + (d ? 0 : Te) : u.indented + (/^(?:case|default)\b/.test(n) ? Te : 2 * Te)
          },
          electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
          blockCommentStart: Oe ? null : "/*",
          blockCommentEnd: Oe ? null : "*/",
          blockCommentContinue: Oe ? null : " * ",
          lineComment: Oe ? null : "//",
          fold: "brace",
          closeBrackets: "()[]{}''\"\"``",
          helperType: Oe ? "json" : "javascript",
          jsonldMode: Ce,
          jsonMode: Oe,
          expressionAllowed: Ee,
          skipExpression: function(e) {
              var t = e.cc[e.cc.length - 1];
              (t == h || t == g) && e.cc.pop()
          }
      }
  }),
  e.registerHelper("wordChars", "javascript", /[\w$]/),
  e.defineMIME("text/javascript", "javascript"),
  e.defineMIME("text/ecmascript", "javascript"),
  e.defineMIME("application/javascript", "javascript"),
  e.defineMIME("application/x-javascript", "javascript"),
  e.defineMIME("application/ecmascript", "javascript"),
  e.defineMIME("application/json", {
      name: "javascript",
      json: !0
  }),
  e.defineMIME("application/x-json", {
      name: "javascript",
      json: !0
  }),
  e.defineMIME("application/ld+json", {
      name: "javascript",
      jsonld: !0
  }),
  e.defineMIME("text/typescript", {
      name: "javascript",
      typescript: !0
  }),
  e.defineMIME("application/typescript", {
      name: "javascript",
      typescript: !0
  })
}(CodeMirror);
