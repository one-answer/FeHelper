!function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.CodeMirror = t()
}(this, function() {
  "use strict";
  function e(e) {
      return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*")
  }
  function t(e) {
      for (var t = e.childNodes.length; 0 < t; --t)
          e.removeChild(e.firstChild);
      return e
  }
  function r(e, r) {
      return t(e).appendChild(r)
  }
  function n(e, t, r, n) {
      var i = document.createElement(e);
      if (r && (i.className = r),
      n && (i.style.cssText = n),
      "string" == typeof t)
          i.appendChild(document.createTextNode(t));
      else if (t)
          for (var o = 0; o < t.length; ++o)
              i.appendChild(t[o]);
      return i
  }
  function i(e, t, r, i) {
      var o = n(e, t, r, i);
      return o.setAttribute("role", "presentation"),
      o
  }
  function o(e, t) {
      if (3 == t.nodeType && (t = t.parentNode),
      e.contains)
          return e.contains(t);
      do {
          if (11 == t.nodeType && (t = t.host),
          t == e)
              return !0
      } while (t = t.parentNode)
  }
  function l() {
      var e;
      try {
          e = document.activeElement
      } catch (t) {
          e = document.body || null
      }
      for (; e && e.shadowRoot && e.shadowRoot.activeElement; )
          e = e.shadowRoot.activeElement;
      return e
  }
  function s(t, r) {
      var n = t.className;
      e(r).test(n) || (t.className += (n ? " " : "") + r)
  }
  function a(t, r) {
      for (var n = t.split(" "), i = 0; i < n.length; i++)
          n[i] && !e(n[i]).test(r) && (r += " " + n[i]);
      return r
  }
  function u(e) {
      var t = Array.prototype.slice.call(arguments, 1);
      return function() {
          return e.apply(null, t)
      }
  }
  function c(e, t, r) {
      for (var n in t || (t = {}),
      e)
          e.hasOwnProperty(n) && (!1 !== r || !t.hasOwnProperty(n)) && (t[n] = e[n]);
      return t
  }
  function f(e, t, r, n, i) {
      null == t && (-1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length));
      for (var o, l = n || 0, s = i || 0; ; ) {
          if (0 > (o = e.indexOf("\t", l)) || o >= t)
              return s + (t - l);
          s += o - l,
          s += r - s % r,
          l = o + 1
      }
  }
  function h(e, t) {
      for (var r = 0; r < e.length; ++r)
          if (e[r] == t)
              return r;
      return -1
  }
  function d(e, t, r) {
      for (var n, i = 0, o = 0; ; ) {
          -1 == (n = e.indexOf("\t", i)) && (n = e.length);
          var l = n - i;
          if (n == e.length || o + l >= t)
              return i + fo(l, t - o);
          if (o += n - i,
          i = n + 1,
          (o += r - o % r) >= t)
              return i
      }
  }
  function p(e) {
      for (; Yo.length <= e; )
          Yo.push(g(Yo) + " ");
      return Yo[e]
  }
  function g(e) {
      return e[e.length - 1]
  }
  function v(e, t) {
      for (var r = [], n = 0; n < e.length; n++)
          r[n] = t(e[n], n);
      return r
  }
  function m() {}
  function y(e, t) {
      var r;
      return Object.create ? r = Object.create(e) : (m.prototype = e,
      r = new m),
      t && c(t, r),
      r
  }
  function b(e) {
      return /\w/.test(e) || "" < e && (e.toUpperCase() != e.toLowerCase() || _o.test(e))
  }
  function w(e, t) {
      return t ? !!(-1 < t.source.indexOf("\\w") && b(e)) || t.test(e) : b(e)
  }
  function x(e) {
      for (var t in e)
          if (e.hasOwnProperty(t) && e[t])
              return !1;
      return !0
  }
  function C(e) {
      return 768 <= e.charCodeAt(0) && qo.test(e)
  }
  function S(e, t, r) {
      for (; (0 > r ? 0 < t : t < e.length) && C(e.charAt(t)); )
          t += r;
      return t
  }
  function L(e, t, r) {
      for (var n = t > r ? -1 : 1; ; ) {
          if (t == r)
              return t;
          var i = (t + r) / 2
            , o = 0 > n ? co(i) : uo(i);
          if (o == t)
              return e(o) ? t : r;
          e(o) ? r = o : t = o + n
      }
  }
  function k(e, t, r) {
      var o = this;
      this.input = r,
      o.scrollbarFiller = n("div", null, "CodeMirror-scrollbar-filler"),
      o.scrollbarFiller.setAttribute("cm-not-content", "true"),
      o.gutterFiller = n("div", null, "CodeMirror-gutter-filler"),
      o.gutterFiller.setAttribute("cm-not-content", "true"),
      o.lineDiv = i("div", null, "CodeMirror-code"),
      o.selectionDiv = n("div", null, null, "position: relative; z-index: 1"),
      o.cursorDiv = n("div", null, "CodeMirror-cursors"),
      o.measure = n("div", null, "CodeMirror-measure"),
      o.lineMeasure = n("div", null, "CodeMirror-measure"),
      o.lineSpace = i("div", [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv], null, "position: relative; outline: none");
      var l = i("div", [o.lineSpace], "CodeMirror-lines");
      o.mover = n("div", [l], null, "position: relative"),
      o.sizer = n("div", [o.mover], "CodeMirror-sizer"),
      o.sizerWidth = null,
      o.heightForcer = n("div", null, null, "position: absolute; height: 30px; width: 1px;"),
      o.gutters = n("div", null, "CodeMirror-gutters"),
      o.lineGutter = null,
      o.scroller = n("div", [o.sizer, o.heightForcer, o.gutters], "CodeMirror-scroll"),
      o.scroller.setAttribute("tabIndex", "-1"),
      o.wrapper = n("div", [o.scrollbarFiller, o.gutterFiller, o.scroller], "CodeMirror"),
      bo && 8 > wo && (o.gutters.style.zIndex = -1,
      o.scroller.style.paddingRight = 0),
      xo || go && Mo || (o.scroller.draggable = !0),
      e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)),
      o.viewFrom = o.viewTo = t.first,
      o.reportedViewFrom = o.reportedViewTo = t.first,
      o.view = [],
      o.renderedView = null,
      o.externalMeasured = null,
      o.viewOffset = 0,
      o.lastWrapHeight = o.lastWrapWidth = 0,
      o.updateLineNumbers = null,
      o.nativeBarWidth = o.barHeight = o.barWidth = 0,
      o.scrollbarsClipped = !1,
      o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null,
      o.alignWidgets = !1,
      o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null,
      o.maxLine = null,
      o.maxLineLength = 0,
      o.maxLineChanged = !1,
      o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null,
      o.shift = !1,
      o.selForContextMenu = null,
      o.activeTouch = null,
      r.init(o)
  }
  function T(e, t) {
      if (0 > (t -= e.first) || t >= e.size)
          throw new Error("There is no line " + (t + e.first) + " in the document.");
      for (var r = e; !r.lines; )
          for (var n = 0; ; ++n) {
              var i = r.children[n]
                , o = i.chunkSize();
              if (t < o) {
                  r = i;
                  break
              }
              t -= o
          }
      return r.lines[t]
  }
  function N(e, t, r) {
      var n = []
        , i = t.line;
      return e.iter(t.line, r.line + 1, function(e) {
          var o = e.text;
          i == r.line && (o = o.slice(0, r.ch)),
          i == t.line && (o = o.slice(t.ch)),
          n.push(o),
          ++i
      }),
      n
  }
  function O(e, t, r) {
      var n = [];
      return e.iter(t, r, function(e) {
          n.push(e.text)
      }),
      n
  }
  function A(e, t) {
      var r = t - e.height;
      if (r)
          for (var n = e; n; n = n.parent)
              n.height += r
  }
  function M(e) {
      if (null == e.parent)
          return null;
      for (var t = e.parent, r = h(t.lines, e), n = t.parent; n; t = n,
      n = n.parent)
          for (var i = 0; n.children[i] != t; ++i)
              r += n.children[i].chunkSize();
      return r + t.first
  }
  function W(e, t) {
      var r = e.first;
      e: do {
          for (var n = 0; n < e.children.length; ++n) {
              var i = e.children[n]
                , o = i.height;
              if (t < o) {
                  e = i;
                  continue e
              }
              t -= o,
              r += i.chunkSize()
          }
          return r
      } while (!e.lines);
      for (var l = 0; l < e.lines.length; ++l) {
          var s = e.lines[l].height;
          if (t < s)
              break;
          t -= s
      }
      return r + l
  }
  function D(e, t) {
      return t >= e.first && t < e.first + e.size
  }
  function H(e, t) {
      return e.lineNumberFormatter(t + e.firstLineNumber) + ""
  }
  function F(e, t, r) {
      return void 0 === r && (r = null),
      this instanceof F ? (this.line = e,
      this.ch = t,
      void (this.sticky = r)) : new F(e,t,r)
  }
  function P(e, t) {
      return e.line - t.line || e.ch - t.ch
  }
  function E(e, t) {
      return e.sticky == t.sticky && 0 == P(e, t)
  }
  function z(e) {
      return F(e.line, e.ch)
  }
  function I(e, t) {
      return 0 > P(e, t) ? t : e
  }
  function R(e, t) {
      return 0 > P(e, t) ? e : t
  }
  function B(e, t) {
      return ao(e.first, fo(t, e.first + e.size - 1))
  }
  function G(e, t) {
      if (t.line < e.first)
          return F(e.first, 0);
      var r = e.first + e.size - 1;
      return t.line > r ? F(r, T(e, r).text.length) : function(e, t) {
          var r = e.ch;
          return null == r || r > t ? F(e.line, t) : 0 > r ? F(e.line, 0) : e
      }(t, T(e, t.line).text.length)
  }
  function U(e, t) {
      for (var r = [], n = 0; n < t.length; n++)
          r[n] = G(e, t[n]);
      return r
  }
  function V(e, t, r) {
      this.marker = e,
      this.from = t,
      this.to = r
  }
  function K(e, t) {
      if (e)
          for (var r, n = 0; n < e.length; ++n)
              if ((r = e[n]).marker == t)
                  return r
  }
  function j(e, t) {
      for (var r, n = 0; n < e.length; ++n)
          e[n] != t && (r || (r = [])).push(e[n]);
      return r
  }
  function X(e, t) {
      if (t.full)
          return null;
      var r = D(e, t.from.line) && T(e, t.from.line).markedSpans
        , n = D(e, t.to.line) && T(e, t.to.line).markedSpans;
      if (!r && !n)
          return null;
      var i = t.from.ch
        , o = t.to.ch
        , l = 0 == P(t.from, t.to)
        , s = function(e, t, r) {
          var n;
          if (e)
              for (var i = 0; i < e.length; ++i) {
                  var o = e[i]
                    , l = o.marker;
                  if (null == o.from || (l.inclusiveLeft ? o.from <= t : o.from < t) || o.from == t && "bookmark" == l.type && (!r || !o.marker.insertLeft)) {
                      var s = null == o.to || (l.inclusiveRight ? o.to >= t : o.to > t);
                      (n || (n = [])).push(new V(l,o.from,s ? null : o.to))
                  }
              }
          return n
      }(r, i, l)
        , a = function(e, t, r) {
          var n;
          if (e)
              for (var i = 0; i < e.length; ++i) {
                  var o = e[i]
                    , l = o.marker;
                  if (null == o.to || (l.inclusiveRight ? o.to >= t : o.to > t) || o.from == t && "bookmark" == l.type && (!r || o.marker.insertLeft)) {
                      var s = null == o.from || (l.inclusiveLeft ? o.from <= t : o.from < t);
                      (n || (n = [])).push(new V(l,s ? null : o.from - t,null == o.to ? null : o.to - t))
                  }
              }
          return n
      }(n, o, l)
        , u = 1 == t.text.length
        , c = g(t.text).length + (u ? i : 0);
      if (s)
          for (var f, h = 0; h < s.length; ++h)
              if (null == (f = s[h]).to) {
                  var d = K(a, f.marker);
                  d ? u && (f.to = null == d.to ? null : d.to + c) : f.to = i
              }
      if (a)
          for (var p, v = 0; v < a.length; ++v)
              if (null != (p = a[v]).to && (p.to += c),
              null == p.from) {
                  K(s, p.marker) || (p.from = c,
                  u && (s || (s = [])).push(p))
              } else
                  p.from += c,
                  u && (s || (s = [])).push(p);
      s && (s = Y(s)),
      a && a != s && (a = Y(a));
      var m = [s];
      if (!u) {
          var y, b = t.text.length - 2;
          if (0 < b && s)
              for (var w = 0; w < s.length; ++w)
                  null == s[w].to && (y || (y = [])).push(new V(s[w].marker,null,null));
          for (var x = 0; x < b; ++x)
              m.push(y);
          m.push(a)
      }
      return m
  }
  function Y(e) {
      for (var t, r = 0; r < e.length; ++r)
          null != (t = e[r]).from && t.from == t.to && !1 !== t.marker.clearWhenEmpty && e.splice(r--, 1);
      return e.length ? e : null
  }
  function _(e) {
      var t = e.markedSpans;
      if (t) {
          for (var r = 0; r < t.length; ++r)
              t[r].marker.detachLine(e);
          e.markedSpans = null
      }
  }
  function q(e, t) {
      if (t) {
          for (var r = 0; r < t.length; ++r)
              t[r].marker.attachLine(e);
          e.markedSpans = t
      }
  }
  function $(e) {
      return e.inclusiveLeft ? -1 : 0
  }
  function Z(e) {
      return e.inclusiveRight ? 1 : 0
  }
  function Q(e, t) {
      var r = e.lines.length - t.lines.length;
      if (0 != r)
          return r;
      var n = e.find()
        , i = t.find()
        , o = P(n.from, i.from) || $(e) - $(t);
      if (o)
          return -o;
      var l = P(n.to, i.to) || Z(e) - Z(t);
      return l || t.id - e.id
  }
  function J(e, t) {
      var r, n = Zo && e.markedSpans;
      if (n)
          for (var i = void 0, o = 0; o < n.length; ++o)
              (i = n[o]).marker.collapsed && null == (t ? i.from : i.to) && (!r || 0 > Q(r, i.marker)) && (r = i.marker);
      return r
  }
  function ee(e) {
      return J(e, !0)
  }
  function te(e) {
      return J(e, !1)
  }
  function re(e, t, r, n, i) {
      var o = T(e, t)
        , l = Zo && o.markedSpans;
      if (l)
          for (var s, a = 0; a < l.length; ++a)
              if ((s = l[a]).marker.collapsed) {
                  var u = s.marker.find(0)
                    , c = P(u.from, r) || $(s.marker) - $(i)
                    , f = P(u.to, n) || Z(s.marker) - Z(i);
                  if (!(0 <= c && 0 >= f || 0 >= c && 0 <= f) && (0 >= c && (s.marker.inclusiveRight && i.inclusiveLeft ? 0 <= P(u.to, r) : 0 < P(u.to, r)) || 0 <= c && (s.marker.inclusiveRight && i.inclusiveLeft ? 0 >= P(u.from, n) : 0 > P(u.from, n))))
                      return !0
              }
  }
  function ne(e) {
      for (var t; t = ee(e); )
          e = t.find(-1, !0).line;
      return e
  }
  function ie(e, t) {
      var r = T(e, t)
        , n = ne(r);
      return r == n ? t : M(n)
  }
  function oe(e, t) {
      if (t > e.lastLine())
          return t;
      var r, n = T(e, t);
      if (!le(e, n))
          return t;
      for (; r = te(n); )
          n = r.find(1, !0).line;
      return M(n) + 1
  }
  function le(e, t) {
      var r = Zo && t.markedSpans;
      if (r)
          for (var n = void 0, i = 0; i < r.length; ++i)
              if ((n = r[i]).marker.collapsed) {
                  if (null == n.from)
                      return !0;
                  if (!n.marker.widgetNode && 0 == n.from && n.marker.inclusiveLeft && se(e, t, n))
                      return !0
              }
  }
  function se(e, t, r) {
      if (null == r.to) {
          var n = r.marker.find(1, !0);
          return se(e, n.line, K(n.line.markedSpans, r.marker))
      }
      if (r.marker.inclusiveRight && r.to == t.text.length)
          return !0;
      for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
          if ((i = t.markedSpans[o]).marker.collapsed && !i.marker.widgetNode && i.from == r.to && (null == i.to || i.to != r.from) && (i.marker.inclusiveLeft || r.marker.inclusiveRight) && se(e, t, i))
              return !0
  }
  function ae(e) {
      for (var t, r = 0, n = (e = ne(e)).parent, i = 0; i < n.lines.length && (t = n.lines[i]) != e; ++i)
          r += t.height;
      for (var o = n.parent; o; o = (n = o).parent)
          for (var l, s = 0; s < o.children.length && (l = o.children[s]) != n; ++s)
              r += l.height;
      return r
  }
  function ue(e) {
      if (0 == e.height)
          return 0;
      for (var t, r, n = e.text.length, i = e; t = ee(i); )
          i = (r = t.find(0, !0)).from.line,
          n += r.from.ch - r.to.ch;
      for (i = e; t = te(i); ) {
          var o = t.find(0, !0);
          n -= i.text.length - o.from.ch,
          n += (i = o.to.line).text.length - o.to.ch
      }
      return n
  }
  function ce(e) {
      var t = e.display
        , r = e.doc;
      t.maxLine = T(r, r.first),
      t.maxLineLength = ue(t.maxLine),
      t.maxLineChanged = !0,
      r.iter(function(e) {
          var r = ue(e);
          r > t.maxLineLength && (t.maxLineLength = r,
          t.maxLine = e)
      })
  }
  function fe(e, t, r) {
      var n;
      Qo = null;
      for (var i, o = 0; o < e.length; ++o) {
          if ((i = e[o]).from < t && i.to > t)
              return o;
          i.to == t && (i.from != i.to && "before" == r ? n = o : Qo = o),
          i.from == t && (i.from != i.to && "before" != r ? n = o : Qo = o)
      }
      return null == n ? Qo : n
  }
  function he(e, t) {
      var r = e.order;
      return null == r && (r = e.order = Jo(e.text, t)),
      r
  }
  function de(e, t) {
      return e._handlers && e._handlers[t] || el
  }
  function pe(e, t, r) {
      if (e.removeEventListener)
          e.removeEventListener(t, r, !1);
      else if (e.detachEvent)
          e.detachEvent("on" + t, r);
      else {
          var n = e._handlers
            , i = n && n[t];
          if (i) {
              var o = h(i, r);
              -1 < o && (n[t] = i.slice(0, o).concat(i.slice(o + 1)))
          }
      }
  }
  function ge(e, t) {
      var r = de(e, t);
      if (r.length)
          for (var n = Array.prototype.slice.call(arguments, 2), i = 0; i < r.length; ++i)
              r[i].apply(null, n)
  }
  function ve(e, t, r) {
      return "string" == typeof t && (t = {
          type: t,
          preventDefault: function() {
              this.defaultPrevented = !0
          }
      }),
      ge(e, r || t.type, e, t),
      Ce(t) || t.codemirrorIgnore
  }
  function me(e) {
      var t = e._handlers && e._handlers.cursorActivity;
      if (t)
          for (var r = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), n = 0; n < t.length; ++n)
              -1 == h(r, t[n]) && r.push(t[n])
  }
  function ye(e, t) {
      return 0 < de(e, t).length
  }
  function be(e) {
      e.prototype.on = function(e, t) {
          tl(this, e, t)
      }
      ,
      e.prototype.off = function(e, t) {
          pe(this, e, t)
      }
  }
  function we(e) {
      e.preventDefault ? e.preventDefault() : e.returnValue = !1
  }
  function xe(e) {
      e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
  }
  function Ce(e) {
      return null == e.defaultPrevented ? 0 == e.returnValue : e.defaultPrevented
  }
  function Se(e) {
      we(e),
      xe(e)
  }
  function Le(e) {
      return e.target || e.srcElement
  }
  function ke(e) {
      var t = e.which;
      return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)),
      Wo && e.ctrlKey && 1 == t && (t = 3),
      t
  }
  function Te(e) {
      if (null == Go) {
          var t = n("span", "​");
          r(e, n("span", [t, document.createTextNode("x")])),
          0 != e.firstChild.offsetHeight && (Go = 1 >= t.offsetWidth && 2 < t.offsetHeight && !(bo && 8 > wo))
      }
      var i = Go ? n("span", "​") : n("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
      return i.setAttribute("cm-text", ""),
      i
  }
  function Ne(e) {
      if (null != Uo)
          return Uo;
      var n = r(e, document.createTextNode("AخA"))
        , i = Po(n, 0, 1).getBoundingClientRect()
        , o = Po(n, 1, 2).getBoundingClientRect();
      return t(e),
      !(!i || i.left == i.right) && (Uo = 3 > o.right - i.right)
  }
  function Oe(e) {
      if (null != ll)
          return ll;
      var t = r(e, n("span", "x"))
        , i = t.getBoundingClientRect()
        , o = Po(t, 0, 1).getBoundingClientRect();
      return ll = 1 < so(i.left - o.left)
  }
  function Ae(e) {
      if ("string" == typeof e && al.hasOwnProperty(e))
          e = al[e];
      else if (e && "string" == typeof e.name && al.hasOwnProperty(e.name)) {
          var t = al[e.name];
          "string" == typeof t && (t = {
              name: t
          }),
          (e = y(t, e)).name = t.name
      } else {
          if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
              return Ae("application/xml");
          if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
              return Ae("application/json")
      }
      return "string" == typeof e ? {
          name: e
      } : e || {
          name: "null"
      }
  }
  function Me(e, t) {
      t = Ae(t);
      var r = sl[t.name];
      if (!r)
          return Me(e, "text/plain");
      var n = r(e, t);
      if (ul.hasOwnProperty(t.name)) {
          var i = ul[t.name];
          for (var o in i)
              i.hasOwnProperty(o) && (n.hasOwnProperty(o) && (n["_" + o] = n[o]),
              n[o] = i[o])
      }
      if (n.name = t.name,
      t.helperType && (n.helperType = t.helperType),
      t.modeProps)
          for (var l in t.modeProps)
              n[l] = t.modeProps[l];
      return n
  }
  function We(e, t) {
      c(t, ul.hasOwnProperty(e) ? ul[e] : ul[e] = {})
  }
  function De(e, t) {
      if (!0 === t)
          return t;
      if (e.copyState)
          return e.copyState(t);
      var r = {};
      for (var n in t) {
          var i = t[n];
          i instanceof Array && (i = i.concat([])),
          r[n] = i
      }
      return r
  }
  function He(e, t) {
      for (var r; e.innerMode && ((r = e.innerMode(t)) && r.mode != e); )
          t = r.state,
          e = r.mode;
      return r || {
          mode: e,
          state: t
      }
  }
  function Fe(e, t, r) {
      return !e.startState || e.startState(t, r)
  }
  function Pe(e, t, r, n) {
      var i = [e.state.modeGen]
        , o = {};
      Ve(e, t.text, e.doc.mode, r, function(e, t) {
          return i.push(e, t)
      }, o, n);
      for (var l = r.state, s = function(n) {
          r.baseTokens = i;
          var s = e.state.overlays[n]
            , a = 1
            , u = 0;
          r.state = !0,
          Ve(e, t.text, s.mode, r, function(e, t) {
              for (var r, n = a; u < e; )
                  (r = i[a]) > e && i.splice(a, 1, e, i[a + 1], r),
                  a += 2,
                  u = fo(e, r);
              if (t)
                  if (s.opaque)
                      i.splice(n, a - n, e, "overlay " + t),
                      a = n + 2;
                  else
                      for (; n < a; n += 2) {
                          var o = i[n + 1];
                          i[n + 1] = (o ? o + " " : "") + "overlay " + t
                      }
          }, o),
          r.state = l,
          r.baseTokens = null,
          r.baseTokenPos = 1
      }, a = 0; a < e.state.overlays.length; ++a)
          s(a);
      return {
          styles: i,
          classes: o.bgClass || o.textClass ? o : null
      }
  }
  function Ee(e, t, r) {
      if (!t.styles || t.styles[0] != e.state.modeGen) {
          var n = ze(e, M(t))
            , i = t.text.length > e.options.maxHighlightLength && De(e.doc.mode, n.state)
            , o = Pe(e, t, n);
          i && (n.state = i),
          t.stateAfter = n.save(!i),
          t.styles = o.styles,
          o.classes ? t.styleClasses = o.classes : t.styleClasses && (t.styleClasses = null),
          r === e.doc.highlightFrontier && (e.doc.modeFrontier = ao(e.doc.modeFrontier, ++e.doc.highlightFrontier))
      }
      return t.styles
  }
  function ze(e, t, r) {
      var n = e.doc
        , i = e.display;
      if (!n.mode.startState)
          return new hl(n,!0,t);
      var o = function(e, t, r) {
          for (var n, i, o = e.doc, l = r ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), s = t; s > l; --s) {
              if (s <= o.first)
                  return o.first;
              var a = T(o, s - 1)
                , u = a.stateAfter;
              if (u && (!r || s + (u instanceof fl ? u.lookAhead : 0) <= o.modeFrontier))
                  return s;
              var c = f(a.text, null, e.options.tabSize);
              (null == i || n > c) && (i = s - 1,
              n = c)
          }
          return i
      }(e, t, r)
        , l = o > n.first && T(n, o - 1).stateAfter
        , s = l ? hl.fromSaved(n, l, o) : new hl(n,Fe(n.mode),o);
      return n.iter(o, t, function(r) {
          Ie(e, r.text, s);
          var n = s.line;
          r.stateAfter = n == t - 1 || 0 == n % 5 || n >= i.viewFrom && n < i.viewTo ? s.save() : null,
          s.nextLine()
      }),
      r && (n.modeFrontier = s.line),
      s
  }
  function Ie(e, t, r, n) {
      var i = e.doc.mode
        , o = new cl(t,e.options.tabSize,r);
      for (o.start = o.pos = n || 0,
      "" == t && Re(i, r.state); !o.eol(); )
          Be(i, o, r.state),
          o.start = o.pos
  }
  function Re(e, t) {
      if (e.blankLine)
          return e.blankLine(t);
      if (e.innerMode) {
          var r = He(e, t);
          if (r.mode.blankLine)
              return r.mode.blankLine(r.state)
      }
  }
  function Be(e, t, r, n) {
      for (var i = 0; 10 > i; i++) {
          n && (n[0] = He(e, r).mode);
          var o = e.token(t, r);
          if (t.pos > t.start)
              return o
      }
      throw new Error("Mode " + e.name + " failed to advance stream.")
  }
  function Ge(e, t, r, n) {
      var i, o, l = e.doc, s = l.mode, a = T(l, (t = G(l, t)).line), u = ze(e, t.line, r), c = new cl(a.text,e.options.tabSize,u);
      for (n && (o = []); (n || c.pos < t.ch) && !c.eol(); )
          c.start = c.pos,
          i = Be(s, c, u.state),
          n && o.push(new dl(c,i,De(l.mode, u.state)));
      return n ? o : new dl(c,i,u.state)
  }
  function Ue(e, t) {
      if (e)
          for (; ; ) {
              var r = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
              if (!r)
                  break;
              e = e.slice(0, r.index) + e.slice(r.index + r[0].length);
              var n = r[1] ? "bgClass" : "textClass";
              null == t[n] ? t[n] = r[2] : !new RegExp("(?:^|s)" + r[2] + "(?:$|s)").test(t[n]) && (t[n] += " " + r[2])
          }
      return e
  }
  function Ve(e, t, r, n, i, o, l) {
      var s = r.flattenSpans;
      null == s && (s = e.options.flattenSpans);
      var a, u = 0, c = null, f = new cl(t,e.options.tabSize,n), h = e.options.addModeClass && [null];
      for ("" == t && Ue(Re(r, n.state), o); !f.eol(); ) {
          if (f.pos > e.options.maxHighlightLength ? (s = !1,
          l && Ie(e, t, n, f.pos),
          f.pos = t.length,
          a = null) : a = Ue(Be(r, f, n.state, h), o),
          h) {
              var d = h[0].name;
              d && (a = "m-" + (a ? d + " " + a : d))
          }
          if (!s || c != a) {
              for (; u < f.start; )
                  i(u = fo(f.start, u + 5e3), c);
              c = a
          }
          f.start = f.pos
      }
      for (; u < f.pos; ) {
          var p = fo(f.pos, u + 5e3);
          i(p, c),
          u = p
      }
  }
  function Ke(e) {
      e.parent = null,
      _(e)
  }
  function je(e, t) {
      if (!e || /^\s*$/.test(e))
          return null;
      var r = t.addModeClass ? ml : vl;
      return r[e] || (r[e] = e.replace(/\S+/g, "cm-$&"))
  }
  function Xe(e, t) {
      var r = i("span", null, null, xo ? "padding-right: .1px" : null)
        , n = {
          pre: i("pre", [r], "CodeMirror-line"),
          content: r,
          col: 0,
          pos: 0,
          cm: e,
          trailingSpace: !1,
          splitSpaces: (bo || xo) && e.getOption("lineWrapping")
      };
      t.measure = {};
      for (var o = 0; o <= (t.rest ? t.rest.length : 0); o++) {
          var l = o ? t.rest[o - 1] : t.line
            , s = void 0;
          n.pos = 0,
          n.addToken = _e,
          Ne(e.display.measure) && (s = he(l, e.doc.direction)) && (n.addToken = qe(n.addToken, s)),
          n.map = [],
          Ze(l, n, Ee(e, l, t != e.display.externalMeasured && M(l))),
          l.styleClasses && (l.styleClasses.bgClass && (n.bgClass = a(l.styleClasses.bgClass, n.bgClass || "")),
          l.styleClasses.textClass && (n.textClass = a(l.styleClasses.textClass, n.textClass || ""))),
          0 == n.map.length && n.map.push(0, 0, n.content.appendChild(Te(e.display.measure))),
          0 == o ? (t.measure.map = n.map,
          t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(n.map),
          (t.measure.caches || (t.measure.caches = [])).push({}))
      }
      if (xo) {
          var u = n.content.lastChild;
          (/\bcm-tab\b/.test(u.className) || u.querySelector && u.querySelector(".cm-tab")) && (n.content.className = "cm-tab-wrap-hack")
      }
      return ge(e, "renderLine", e, t.line, n.pre),
      n.pre.className && (n.textClass = a(n.pre.className, n.textClass || "")),
      n
  }
  function Ye(e) {
      var t = n("span", "•", "cm-invalidchar");
      return t.title = "\\u" + e.charCodeAt(0).toString(16),
      t.setAttribute("aria-label", t.title),
      t
  }
  function _e(e, t, r, i, o, l, s) {
      if (t) {
          var a, u = e.splitSpaces ? function(e, t) {
              if (1 < e.length && !/  /.test(e))
                  return e;
              for (var r, n = t, i = "", o = 0; o < e.length; o++)
                  " " == (r = e.charAt(o)) && n && (o == e.length - 1 || 32 == e.charCodeAt(o + 1)) && (r = " "),
                  i += r,
                  n = " " == r;
              return i
          }(t, e.trailingSpace) : t, c = e.cm.state.specialChars, f = !1;
          if (c.test(t)) {
              a = document.createDocumentFragment();
              for (var h = 0; ; ) {
                  c.lastIndex = h;
                  var d = c.exec(t)
                    , g = d ? d.index - h : t.length - h;
                  if (g) {
                      var v = document.createTextNode(u.slice(h, h + g));
                      bo && 9 > wo ? a.appendChild(n("span", [v])) : a.appendChild(v),
                      e.map.push(e.pos, e.pos + g, v),
                      e.col += g,
                      e.pos += g
                  }
                  if (!d)
                      break;
                  h += g + 1;
                  var m = void 0;
                  if ("\t" == d[0]) {
                      var y = e.cm.options.tabSize
                        , b = y - e.col % y;
                      (m = a.appendChild(n("span", p(b), "cm-tab"))).setAttribute("role", "presentation"),
                      m.setAttribute("cm-text", "\t"),
                      e.col += b
                  } else
                      "\r" == d[0] || "\n" == d[0] ? ((m = a.appendChild(n("span", "\r" == d[0] ? "␍" : "␤", "cm-invalidchar"))).setAttribute("cm-text", d[0]),
                      e.col += 1) : ((m = e.cm.options.specialCharPlaceholder(d[0])).setAttribute("cm-text", d[0]),
                      bo && 9 > wo ? a.appendChild(n("span", [m])) : a.appendChild(m),
                      e.col += 1);
                  e.map.push(e.pos, e.pos + 1, m),
                  e.pos++
              }
          } else
              e.col += t.length,
              a = document.createTextNode(u),
              e.map.push(e.pos, e.pos + t.length, a),
              bo && 9 > wo && (f = !0),
              e.pos += t.length;
          if (e.trailingSpace = 32 == u.charCodeAt(t.length - 1),
          r || i || o || f || s) {
              var w = r || "";
              i && (w += i),
              o && (w += o);
              var x = n("span", [a], w, s);
              return l && (x.title = l),
              e.content.appendChild(x)
          }
          e.content.appendChild(a)
      }
  }
  function qe(e, t) {
      return function(r, n, i, o, l, s, a) {
          i = i ? i + " cm-force-border" : "cm-force-border";
          for (var u = r.pos, c = u + n.length; ; ) {
              for (var f = void 0, h = 0; h < t.length && !((f = t[h]).to > u && f.from <= u); h++)
                  ;
              if (f.to >= c)
                  return e(r, n, i, o, l, s, a);
              e(r, n.slice(0, f.to - u), i, o, null, s, a),
              o = null,
              n = n.slice(f.to - u),
              u = f.to
          }
      }
  }
  function $e(e, t, r, n) {
      var i = !n && r.widgetNode;
      i && e.map.push(e.pos, e.pos + t, i),
      !n && e.cm.display.input.needsContentAttribute && (!i && (i = e.content.appendChild(document.createElement("span"))),
      i.setAttribute("cm-marker", r.id)),
      i && (e.cm.display.input.setUneditable(i),
      e.content.appendChild(i)),
      e.pos += t,
      e.trailingSpace = !1
  }
  function Ze(e, t, r) {
      var n = e.markedSpans
        , i = e.text
        , o = 0;
      if (n)
          for (var l, s, a, u, c, f, h, d = i.length, p = 0, g = 1, v = "", m = 0; ; ) {
              if (m == p) {
                  a = u = c = f = s = "",
                  h = null,
                  m = 1 / 0;
                  for (var y = [], b = void 0, w = 0; w < n.length; ++w) {
                      var x = n[w]
                        , C = x.marker;
                      "bookmark" == C.type && x.from == p && C.widgetNode ? y.push(C) : x.from <= p && (null == x.to || x.to > p || C.collapsed && x.to == p && x.from == p) ? (null != x.to && x.to != p && m > x.to && (m = x.to,
                      u = ""),
                      C.className && (a += " " + C.className),
                      C.css && (s = (s ? s + ";" : "") + C.css),
                      C.startStyle && x.from == p && (c += " " + C.startStyle),
                      C.endStyle && x.to == m && (b || (b = [])).push(C.endStyle, x.to),
                      C.title && !f && (f = C.title),
                      C.collapsed && (!h || 0 > Q(h.marker, C)) && (h = x)) : x.from > p && m > x.from && (m = x.from)
                  }
                  if (b)
                      for (var S = 0; S < b.length; S += 2)
                          b[S + 1] == m && (u += " " + b[S]);
                  if (!h || h.from == p)
                      for (var L = 0; L < y.length; ++L)
                          $e(t, 0, y[L]);
                  if (h && (h.from || 0) == p) {
                      if ($e(t, (null == h.to ? d + 1 : h.to) - p, h.marker, null == h.from),
                      null == h.to)
                          return;
                      h.to == p && (h = !1)
                  }
              }
              if (p >= d)
                  break;
              for (var k = fo(d, m); ; ) {
                  if (v) {
                      var T = p + v.length;
                      if (!h) {
                          var N = T > k ? v.slice(0, k - p) : v;
                          t.addToken(t, N, l ? l + a : a, c, p + N.length == m ? u : "", f, s)
                      }
                      if (T >= k) {
                          v = v.slice(k - p),
                          p = k;
                          break
                      }
                      p = T,
                      c = ""
                  }
                  v = i.slice(o, o = r[g++]),
                  l = je(r[g++], t.cm.options)
              }
          }
      else
          for (var O = 1; O < r.length; O += 2)
              t.addToken(t, i.slice(o, o = r[O]), je(r[O + 1], t.cm.options))
  }
  function Qe(e, t, r) {
      this.line = t,
      this.rest = function(e) {
          for (var t, r; t = te(e); )
              e = t.find(1, !0).line,
              (r || (r = [])).push(e);
          return r
      }(t),
      this.size = this.rest ? M(g(this.rest)) - r + 1 : 1,
      this.node = this.text = null,
      this.hidden = le(e, t)
  }
  function Je(e, t, r) {
      for (var n, i, o = [], l = t; l < r; l = n)
          n = l + (i = new Qe(e.doc,T(e.doc, l),l)).size,
          o.push(i);
      return o
  }
  function et(e, t) {
      var r = de(e, t);
      if (r.length) {
          var n, i = Array.prototype.slice.call(arguments, 2);
          yl ? n = yl.delayedCallbacks : bl ? n = bl : (n = bl = [],
          setTimeout(tt, 0));
          for (var o = function(e) {
              n.push(function() {
                  return r[e].apply(null, i)
              })
          }, l = 0; l < r.length; ++l)
              o(l)
      }
  }
  function tt() {
      var e = bl;
      bl = null;
      for (var t = 0; t < e.length; ++t)
          e[t]()
  }
  function rt(e, t, r, n) {
      for (var i, o = 0; o < t.changes.length; o++)
          "text" == (i = t.changes[o]) ? ot(e, t) : "gutter" == i ? st(e, t, r, n) : "class" == i ? lt(e, t) : "widget" == i && at(e, t, n);
      t.changes = null
  }
  function nt(e) {
      return e.node == e.text && (e.node = n("div", null, null, "position: relative"),
      e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text),
      e.node.appendChild(e.text),
      bo && 8 > wo && (e.node.style.zIndex = 2)),
      e.node
  }
  function it(e, t) {
      var r = e.display.externalMeasured;
      return r && r.line == t.line ? (e.display.externalMeasured = null,
      t.measure = r.measure,
      r.built) : Xe(e, t)
  }
  function ot(e, t) {
      var r = t.text.className
        , n = it(e, t);
      t.text == t.node && (t.node = n.pre),
      t.text.parentNode.replaceChild(n.pre, t.text),
      t.text = n.pre,
      n.bgClass != t.bgClass || n.textClass != t.textClass ? (t.bgClass = n.bgClass,
      t.textClass = n.textClass,
      lt(e, t)) : r && (t.text.className = r)
  }
  function lt(e, t) {
      (function(e, t) {
          var r = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
          if (r && (r += " CodeMirror-linebackground"),
          t.background)
              r ? t.background.className = r : (t.background.parentNode.removeChild(t.background),
              t.background = null);
          else if (r) {
              var i = nt(t);
              t.background = i.insertBefore(n("div", null, r), i.firstChild),
              e.display.input.setUneditable(t.background)
          }
      }
      )(e, t),
      t.line.wrapClass ? nt(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = "");
      var r = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
      t.text.className = r || ""
  }
  function st(e, t, r, i) {
      if (t.gutter && (t.node.removeChild(t.gutter),
      t.gutter = null),
      t.gutterBackground && (t.node.removeChild(t.gutterBackground),
      t.gutterBackground = null),
      t.line.gutterClass) {
          var o = nt(t);
          t.gutterBackground = n("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) + "px; width: " + i.gutterTotalWidth + "px"),
          e.display.input.setUneditable(t.gutterBackground),
          o.insertBefore(t.gutterBackground, t.text)
      }
      var l = t.line.gutterMarkers;
      if (e.options.lineNumbers || l) {
          var s = nt(t)
            , a = t.gutter = n("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) + "px");
          if (e.display.input.setUneditable(a),
          s.insertBefore(a, t.text),
          t.line.gutterClass && (a.className += " " + t.line.gutterClass),
          !e.options.lineNumbers || l && l["CodeMirror-linenumbers"] || (t.lineNumber = a.appendChild(n("div", H(e.options, r), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + i.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))),
          l)
              for (var u = 0; u < e.options.gutters.length; ++u) {
                  var c = e.options.gutters[u]
                    , f = l.hasOwnProperty(c) && l[c];
                  f && a.appendChild(n("div", [f], "CodeMirror-gutter-elt", "left: " + i.gutterLeft[c] + "px; width: " + i.gutterWidth[c] + "px"))
              }
      }
  }
  function at(e, t, r) {
      t.alignable && (t.alignable = null);
      for (var n = t.node.firstChild, i = void 0; n; n = i)
          i = n.nextSibling,
          "CodeMirror-linewidget" == n.className && t.node.removeChild(n);
      ct(e, t, r)
  }
  function ut(e, t, r, n) {
      var i = it(e, t);
      return t.text = t.node = i.pre,
      i.bgClass && (t.bgClass = i.bgClass),
      i.textClass && (t.textClass = i.textClass),
      lt(e, t),
      st(e, t, r, n),
      ct(e, t, n),
      t.node
  }
  function ct(e, t, r) {
      if (ft(e, t.line, t, r, !0),
      t.rest)
          for (var n = 0; n < t.rest.length; n++)
              ft(e, t.rest[n], t, r, !1)
  }
  function ft(e, t, r, i, o) {
      if (t.widgets)
          for (var l = nt(r), s = 0, a = t.widgets; s < a.length; ++s) {
              var u = a[s]
                , c = n("div", [u.node], "CodeMirror-linewidget");
              u.handleMouseEvents || c.setAttribute("cm-ignore-events", "true"),
              ht(u, c, r, i),
              e.display.input.setUneditable(c),
              o && u.above ? l.insertBefore(c, r.gutter || r.text) : l.appendChild(c),
              et(u, "redraw")
          }
  }
  function ht(e, t, r, n) {
      if (e.noHScroll) {
          (r.alignable || (r.alignable = [])).push(t);
          var i = n.wrapperWidth;
          t.style.left = n.fixedPos + "px",
          e.coverGutter || (i -= n.gutterTotalWidth,
          t.style.paddingLeft = n.gutterTotalWidth + "px"),
          t.style.width = i + "px"
      }
      e.coverGutter && (t.style.zIndex = 5,
      t.style.position = "relative",
      !e.noHScroll && (t.style.marginLeft = -n.gutterTotalWidth + "px"))
  }
  function dt(e) {
      if (null != e.height)
          return e.height;
      var t = e.doc.cm;
      if (!t)
          return 0;
      if (!o(document.body, e.node)) {
          var i = "position: relative;";
          e.coverGutter && (i += "margin-left: -" + t.display.gutters.offsetWidth + "px;"),
          e.noHScroll && (i += "width: " + t.display.wrapper.clientWidth + "px;"),
          r(t.display.measure, n("div", [e.node], null, i))
      }
      return e.height = e.node.parentNode.offsetHeight
  }
  function pt(e, t) {
      for (var r = Le(t); r != e.wrapper; r = r.parentNode)
          if (!r || 1 == r.nodeType && "true" == r.getAttribute("cm-ignore-events") || r.parentNode == e.sizer && r != e.mover)
              return !0
  }
  function gt(e) {
      return e.lineSpace.offsetTop
  }
  function vt(e) {
      return e.mover.offsetHeight - e.lineSpace.offsetHeight
  }
  function mt(e) {
      if (e.cachedPaddingH)
          return e.cachedPaddingH;
      var t = r(e.measure, n("pre", "x"))
        , i = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle
        , o = {
          left: parseInt(i.paddingLeft),
          right: parseInt(i.paddingRight)
      };
      return isNaN(o.left) || isNaN(o.right) || (e.cachedPaddingH = o),
      o
  }
  function yt(e) {
      return 30 - e.display.nativeBarWidth
  }
  function bt(e) {
      return e.display.scroller.clientWidth - yt(e) - e.display.barWidth
  }
  function wt(e) {
      return e.display.scroller.clientHeight - yt(e) - e.display.barHeight
  }
  function xt(e, t, r) {
      if (e.line == t)
          return {
              map: e.measure.map,
              cache: e.measure.cache
          };
      for (var n = 0; n < e.rest.length; n++)
          if (e.rest[n] == t)
              return {
                  map: e.measure.maps[n],
                  cache: e.measure.caches[n]
              };
      for (var i = 0; i < e.rest.length; i++)
          if (M(e.rest[i]) > r)
              return {
                  map: e.measure.maps[i],
                  cache: e.measure.caches[i],
                  before: !0
              }
  }
  function Ct(e, t) {
      var n = M(t = ne(t))
        , i = e.display.externalMeasured = new Qe(e.doc,t,n);
      i.lineN = n;
      var o = i.built = Xe(e, i);
      return i.text = o.pre,
      r(e.display.lineMeasure, o.pre),
      i
  }
  function St(e, t, r, n) {
      return Tt(e, kt(e, t), r, n)
  }
  function Lt(e, t) {
      if (t >= e.display.viewFrom && t < e.display.viewTo)
          return e.display.view[Jt(e, t)];
      var r = e.display.externalMeasured;
      return r && t >= r.lineN && t < r.lineN + r.size ? r : void 0
  }
  function kt(e, t) {
      var r = M(t)
        , n = Lt(e, r);
      n && !n.text ? n = null : n && n.changes && (rt(e, n, r, _t(e)),
      e.curOp.forceUpdate = !0),
      n || (n = Ct(e, t));
      var i = xt(n, t, r);
      return {
          line: t,
          view: n,
          rect: null,
          map: i.map,
          cache: i.cache,
          before: i.before,
          hasHeights: !1
      }
  }
  function Tt(e, t, r, n, i) {
      t.before && (r = -1);
      var o, l = r + (n || "");
      return t.cache.hasOwnProperty(l) ? o = t.cache[l] : (!t.rect && (t.rect = t.view.text.getBoundingClientRect()),
      !t.hasHeights && (function(e, t, r) {
          var n = e.options.lineWrapping
            , i = n && bt(e);
          if (!t.measure.heights || n && t.measure.width != i) {
              var o = t.measure.heights = [];
              if (n) {
                  t.measure.width = i;
                  for (var l = t.text.firstChild.getClientRects(), s = 0; s < l.length - 1; s++) {
                      var a = l[s]
                        , u = l[s + 1];
                      2 < so(a.bottom - u.bottom) && o.push((a.bottom + u.top) / 2 - r.top)
                  }
              }
              o.push(r.bottom - r.top)
          }
      }(e, t.view, t.rect),
      t.hasHeights = !0),
      !(o = function(e, t, r, n) {
          var i, o = Nt(t.map, r, n), l = o.node, s = o.start, a = o.end, u = o.collapse;
          if (3 == l.nodeType) {
              for (var c = 0; 4 > c; c++) {
                  for (; s && C(t.line.text.charAt(o.coverStart + s)); )
                      --s;
                  for (; o.coverStart + a < o.coverEnd && C(t.line.text.charAt(o.coverStart + a)); )
                      ++a;
                  if ((i = bo && 9 > wo && 0 == s && a == o.coverEnd - o.coverStart ? l.parentNode.getBoundingClientRect() : Ot(Po(l, s, a).getClientRects(), n)).left || i.right || 0 == s)
                      break;
                  a = s,
                  --s,
                  u = "right"
              }
              bo && 11 > wo && (i = function(e, t) {
                  if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !Oe(e))
                      return t;
                  var r = screen.logicalXDPI / screen.deviceXDPI
                    , n = screen.logicalYDPI / screen.deviceYDPI;
                  return {
                      left: t.left * r,
                      right: t.right * r,
                      top: t.top * n,
                      bottom: t.bottom * n
                  }
              }(e.display.measure, i))
          } else {
              var f;
              0 < s && (u = n = "right"),
              i = e.options.lineWrapping && 1 < (f = l.getClientRects()).length ? f["right" == n ? f.length - 1 : 0] : l.getBoundingClientRect()
          }
          if (bo && 9 > wo && !s && (!i || !i.left && !i.right)) {
              var h = l.parentNode.getClientRects()[0];
              i = h ? {
                  left: h.left,
                  right: h.left + Yt(e.display),
                  top: h.top,
                  bottom: h.bottom
              } : wl
          }
          for (var d = i.top - t.rect.top, p = i.bottom - t.rect.top, g = t.view.measure.heights, v = 0; v < g.length - 1 && !((d + p) / 2 < g[v]); v++)
              ;
          var m = v ? g[v - 1] : 0
            , y = g[v]
            , b = {
              left: ("right" == u ? i.right : i.left) - t.rect.left,
              right: ("left" == u ? i.left : i.right) - t.rect.left,
              top: m,
              bottom: y
          };
          return i.left || i.right || (b.bogus = !0),
          e.options.singleCursorHeightPerLine || (b.rtop = d,
          b.rbottom = p),
          b
      }(e, t, r, n)).bogus && (t.cache[l] = o)),
      {
          left: o.left,
          right: o.right,
          top: i ? o.rtop : o.top,
          bottom: i ? o.rbottom : o.bottom
      }
  }
  function Nt(e, t, r) {
      for (var n, i, o, l, s, a, u = 0; u < e.length; u += 3)
          if (s = e[u],
          a = e[u + 1],
          t < s ? (i = 0,
          o = 1,
          l = "left") : t < a ? o = (i = t - s) + 1 : (u == e.length - 3 || t == a && e[u + 3] > t) && (i = (o = a - s) - 1,
          t >= a && (l = "right")),
          null != i) {
              if (n = e[u + 2],
              s == a && r == (n.insertLeft ? "left" : "right") && (l = r),
              "left" == r && 0 == i)
                  for (; u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft; )
                      n = e[2 + (u -= 3)],
                      l = "left";
              if ("right" == r && i == a - s)
                  for (; u < e.length - 3 && e[u + 3] == e[u + 4] && !e[u + 5].insertLeft; )
                      n = e[(u += 3) + 2],
                      l = "right";
              break
          }
      return {
          node: n,
          start: i,
          end: o,
          collapse: l,
          coverStart: s,
          coverEnd: a
      }
  }
  function Ot(e, t) {
      var r = wl;
      if ("left" == t)
          for (var n = 0; n < e.length && (r = e[n]).left == r.right; n++)
              ;
      else
          for (var i = e.length - 1; 0 <= i && (r = e[i]).left == r.right; i--)
              ;
      return r
  }
  function At(e) {
      if (e.measure && (e.measure.cache = {},
      e.measure.heights = null,
      e.rest))
          for (var t = 0; t < e.rest.length; t++)
              e.measure.caches[t] = {}
  }
  function Mt(e) {
      e.display.externalMeasure = null,
      t(e.display.lineMeasure);
      for (var r = 0; r < e.display.view.length; r++)
          At(e.display.view[r])
  }
  function Wt(e) {
      Mt(e),
      e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null,
      e.options.lineWrapping || (e.display.maxLineChanged = !0),
      e.display.lineNumChars = null
  }
  function Dt() {
      return So && Ao ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft
  }
  function Ht() {
      return So && Ao ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop
  }
  function Ft(e) {
      var t = 0;
      if (e.widgets)
          for (var r = 0; r < e.widgets.length; ++r)
              e.widgets[r].above && (t += dt(e.widgets[r]));
      return t
  }
  function Pt(e, t, r, n, i) {
      if (!i) {
          var o = Ft(t);
          r.top += o,
          r.bottom += o
      }
      if ("line" == n)
          return r;
      n || (n = "local");
      var l = ae(t);
      if ("local" == n ? l += gt(e.display) : l -= e.display.viewOffset,
      "page" == n || "window" == n) {
          var s = e.display.lineSpace.getBoundingClientRect();
          l += s.top + ("window" == n ? 0 : Ht());
          var a = s.left + ("window" == n ? 0 : Dt());
          r.left += a,
          r.right += a
      }
      return r.top += l,
      r.bottom += l,
      r
  }
  function Et(e, t, r) {
      if ("div" == r)
          return t;
      var n = t.left
        , i = t.top;
      if ("page" == r)
          n -= Dt(),
          i -= Ht();
      else if ("local" == r || !r) {
          var o = e.display.sizer.getBoundingClientRect();
          n += o.left,
          i += o.top
      }
      var l = e.display.lineSpace.getBoundingClientRect();
      return {
          left: n - l.left,
          top: i - l.top
      }
  }
  function zt(e, t, r, n, i) {
      return n || (n = T(e.doc, t.line)),
      Pt(e, n, St(e, n, t.ch, i), r)
  }
  function It(e, t, r, n, i, o) {
      function l(t, l) {
          var s = Tt(e, i, t, l ? "right" : "left", o);
          return l ? s.left = s.right : s.right = s.left,
          Pt(e, n, s, r)
      }
      function s(e, t, r) {
          return l(r ? e - 1 : e, 1 == a[t].level != r)
      }
      n = n || T(e.doc, t.line),
      i || (i = kt(e, n));
      var a = he(n, e.doc.direction)
        , u = t.ch
        , c = t.sticky;
      if (u >= n.text.length ? (u = n.text.length,
      c = "before") : 0 >= u && (u = 0,
      c = "after"),
      !a)
          return l("before" == c ? u - 1 : u, "before" == c);
      var f = fe(a, u, c)
        , h = Qo
        , d = s(u, f, "before" == c);
      return null != h && (d.other = s(u, h, "before" != c)),
      d
  }
  function Rt(e, t) {
      var r = 0;
      t = G(e.doc, t),
      e.options.lineWrapping || (r = Yt(e.display) * t.ch);
      var n = T(e.doc, t.line)
        , i = ae(n) + gt(e.display);
      return {
          left: r,
          right: r,
          top: i,
          bottom: i + n.height
      }
  }
  function Bt(e, t, r, n, i) {
      var o = F(e, t, r);
      return o.xRel = i,
      n && (o.outside = !0),
      o
  }
  function Gt(e, t, r) {
      var n = e.doc;
      if (0 > (r += e.display.viewOffset))
          return Bt(n.first, 0, null, !0, -1);
      var i = W(n, r)
        , o = n.first + n.size - 1;
      if (i > o)
          return Bt(n.first + n.size - 1, T(n, o).text.length, null, !0, 1);
      0 > t && (t = 0);
      for (var l = T(n, i); ; ) {
          var s = jt(e, l, i, t, r)
            , a = te(l)
            , u = a && a.find(0, !0);
          if (!a || !(s.ch > u.from.ch || s.ch == u.from.ch && 0 < s.xRel))
              return s;
          i = M(l = u.to.line)
      }
  }
  function Ut(e, t, r, n) {
      n -= Ft(t);
      var i = t.text.length
        , o = L(function(t) {
          return Tt(e, r, t - 1).bottom <= n
      }, i, 0);
      return {
          begin: o,
          end: i = L(function(t) {
              return Tt(e, r, t).top > n
          }, o, i)
      }
  }
  function Vt(e, t, r, n) {
      return r || (r = kt(e, t)),
      Ut(e, t, r, Pt(e, t, Tt(e, r, n), "line").top)
  }
  function Kt(e, t, r, n) {
      return !(e.bottom <= r) && (!!(e.top > r) || (n ? e.left : e.right) > t)
  }
  function jt(e, t, r, n, i) {
      i -= ae(t);
      var o = kt(e, t)
        , l = Ft(t)
        , s = 0
        , a = t.text.length
        , u = !0
        , c = he(t, e.doc.direction);
      if (c) {
          var f = (e.options.lineWrapping ? function(e, t, r, n, i, o, l) {
              var s = Ut(e, t, n, l)
                , a = s.begin
                , u = s.end;
              /\s/.test(t.text.charAt(u - 1)) && u--;
              for (var c, f = null, h = null, d = 0; d < i.length; d++)
                  if (!((c = i[d]).from >= u || c.to <= a)) {
                      var p = 1 != c.level
                        , g = Tt(e, n, p ? fo(u, c.to) - 1 : ao(a, c.from)).right
                        , v = g < o ? o - g + 1e9 : g - o;
                      (!f || h > v) && (f = c,
                      h = v)
                  }
              return f || (f = i[i.length - 1]),
              f.from < a && (f = {
                  from: a,
                  to: f.to,
                  level: f.level
              }),
              f.to > u && (f = {
                  from: f.from,
                  to: u,
                  level: f.level
              }),
              f
          }
          : function(e, t, r, n, i, o, l) {
              var s = L(function(s) {
                  var a = i[s]
                    , u = 1 != a.level;
                  return Kt(It(e, F(r, u ? a.to : a.from, u ? "before" : "after"), "line", t, n), o, l, !0)
              }, 0, i.length - 1)
                , a = i[s];
              if (0 < s) {
                  var u = 1 != a.level
                    , c = It(e, F(r, u ? a.from : a.to, u ? "after" : "before"), "line", t, n);
                  Kt(c, o, l, !0) && c.top > l && (a = i[s - 1])
              }
              return a
          }
          )(e, t, r, o, c, n, i);
          s = (u = 1 != f.level) ? f.from : f.to - 1,
          a = u ? f.to : f.from - 1
      }
      var h, d, p = null, g = null, v = L(function(t) {
          var r = Tt(e, o, t);
          return r.top += l,
          r.bottom += l,
          !!Kt(r, n, i, !1) && (r.top <= i && r.left <= n && (p = t,
          g = r),
          !0)
      }, s, a), m = !1;
      if (g) {
          var y = n - g.left < g.right - n
            , b = y == u;
          v = p + (b ? 0 : 1),
          d = b ? "after" : "before",
          h = y ? g.left : g.right
      } else {
          u || v != a && v != s || v++,
          d = 0 == v ? "after" : v == t.text.length ? "before" : Tt(e, o, v - (u ? 1 : 0)).bottom + l <= i == u ? "after" : "before";
          var w = It(e, F(r, v, d), "line", t, o);
          h = w.left,
          m = i < w.top || i >= w.bottom
      }
      return Bt(r, v = S(t.text, v, 1), d, m, n - h)
  }
  function Xt(e) {
      if (null != e.cachedTextHeight)
          return e.cachedTextHeight;
      if (null == gl) {
          gl = n("pre");
          for (var i = 0; 49 > i; ++i)
              gl.appendChild(document.createTextNode("x")),
              gl.appendChild(n("br"));
          gl.appendChild(document.createTextNode("x"))
      }
      r(e.measure, gl);
      var o = gl.offsetHeight / 50;
      return 3 < o && (e.cachedTextHeight = o),
      t(e.measure),
      o || 1
  }
  function Yt(e) {
      if (null != e.cachedCharWidth)
          return e.cachedCharWidth;
      var t = n("span", "xxxxxxxxxx")
        , i = n("pre", [t]);
      r(e.measure, i);
      var o = t.getBoundingClientRect()
        , l = (o.right - o.left) / 10;
      return 2 < l && (e.cachedCharWidth = l),
      l || 10
  }
  function _t(e) {
      for (var t = e.display, r = {}, n = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, l = 0; o; o = o.nextSibling,
      ++l)
          r[e.options.gutters[l]] = o.offsetLeft + o.clientLeft + i,
          n[e.options.gutters[l]] = o.clientWidth;
      return {
          fixedPos: qt(t),
          gutterTotalWidth: t.gutters.offsetWidth,
          gutterLeft: r,
          gutterWidth: n,
          wrapperWidth: t.wrapper.clientWidth
      }
  }
  function qt(e) {
      return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left
  }
  function $t(e) {
      var t = Xt(e.display)
        , r = e.options.lineWrapping
        , n = r && ao(5, e.display.scroller.clientWidth / Yt(e.display) - 3);
      return function(i) {
          if (le(e.doc, i))
              return 0;
          var o = 0;
          if (i.widgets)
              for (var l = 0; l < i.widgets.length; l++)
                  i.widgets[l].height && (o += i.widgets[l].height);
          return r ? o + (co(i.text.length / n) || 1) * t : o + t
      }
  }
  function Zt(e) {
      var t = e.doc
        , r = $t(e);
      t.iter(function(e) {
          var t = r(e);
          t != e.height && A(e, t)
      })
  }
  function Qt(e, t, r, n) {
      var i = e.display;
      if (!r && "true" == Le(t).getAttribute("cm-not-content"))
          return null;
      var o, l, s = i.lineSpace.getBoundingClientRect();
      try {
          o = t.clientX - s.left,
          l = t.clientY - s.top
      } catch (e) {
          return null
      }
      var a, u = Gt(e, o, l);
      if (n && 1 == u.xRel && (a = T(e.doc, u.line).text).length == u.ch) {
          var c = f(a, a.length, e.options.tabSize) - a.length;
          u = F(u.line, ao(0, lo((o - mt(e.display).left) / Yt(e.display)) - c))
      }
      return u
  }
  function Jt(e, t) {
      if (t >= e.display.viewTo)
          return null;
      if (0 > (t -= e.display.viewFrom))
          return null;
      for (var r = e.display.view, n = 0; n < r.length; n++)
          if (0 > (t -= r[n].size))
              return n
  }
  function er(e) {
      e.display.input.showSelection(e.display.input.prepareSelection())
  }
  function tr(e, t) {
      void 0 === t && (t = !0);
      for (var r = e.doc, n = {}, i = n.cursors = document.createDocumentFragment(), o = n.selection = document.createDocumentFragment(), l = 0; l < r.sel.ranges.length; l++)
          if (t || l != r.sel.primIndex) {
              var s = r.sel.ranges[l];
              if (!(s.from().line >= e.display.viewTo || s.to().line < e.display.viewFrom)) {
                  var a = s.empty();
                  (a || e.options.showCursorWhenSelecting) && rr(e, s.head, i),
                  a || ir(e, s, o)
              }
          }
      return n
  }
  function rr(e, t, r) {
      var i = It(e, t, "div", null, null, !e.options.singleCursorHeightPerLine)
        , o = r.appendChild(n("div", " ", "CodeMirror-cursor"));
      if (o.style.left = i.left + "px",
      o.style.top = i.top + "px",
      o.style.height = ao(0, i.bottom - i.top) * e.options.cursorHeight + "px",
      i.other) {
          var l = r.appendChild(n("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
          l.style.display = "",
          l.style.left = i.other.left + "px",
          l.style.top = i.other.top + "px",
          l.style.height = .85 * (i.other.bottom - i.other.top) + "px"
      }
  }
  function nr(e, t) {
      return e.top - t.top || e.left - t.left
  }
  function ir(e, t, r) {
      function i(e, t, r, i) {
          0 > t && (t = 0),
          t = lo(t),
          i = lo(i),
          a.appendChild(n("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == r ? f - e : r) + "px;\n                             height: " + (i - t) + "px"))
      }
      function o(t, r, n) {
          function o(r, n) {
              return zt(e, F(t, r), "div", d, n)
          }
          function l(t, r, n) {
              var i = Vt(e, d, null, t)
                , l = "ltr" == r == ("after" == n) ? "left" : "right";
              return o("after" == n ? i.begin : i.end - (/\s/.test(d.text.charAt(i.end - 1)) ? 2 : 1), l)[l]
          }
          var a, u, d = T(s, t), p = d.text.length, g = he(d, s.direction);
          return function(e, t, r, n) {
              if (!e)
                  return n(t, r, "ltr", 0);
              for (var i, o = !1, l = 0; l < e.length; ++l)
                  ((i = e[l]).from < r && i.to > t || t == r && i.to == t) && (n(ao(i.from, t), fo(i.to, r), 1 == i.level ? "rtl" : "ltr", l),
                  o = !0);
              o || n(t, r, "ltr")
          }(g, r || 0, null == n ? p : n, function(e, t, s, d) {
              var v = "ltr" == s
                , m = o(e, v ? "left" : "right")
                , y = o(t - 1, v ? "right" : "left")
                , b = null == r && 0 == e
                , w = null == n && t == p
                , x = 0 == d
                , C = !g || d == g.length - 1;
              if (3 >= y.top - m.top) {
                  var S = (h ? w : b) && C
                    , L = (h ? b : w) && x ? c : (v ? m : y).left
                    , k = S ? f : (v ? y : m).right;
                  i(L, m.top, k - L, m.bottom)
              } else {
                  var T, N, O, A;
                  v ? (T = h && b && x ? c : m.left,
                  N = h ? f : l(e, s, "before"),
                  O = h ? c : l(t, s, "after"),
                  A = h && w && C ? f : y.right) : (T = h ? l(e, s, "before") : c,
                  N = !h && b && x ? f : m.right,
                  O = !h && w && C ? c : y.left,
                  A = h ? l(t, s, "after") : f),
                  i(T, m.top, N - T, m.bottom),
                  m.bottom < y.top && i(c, m.bottom, null, y.top),
                  i(O, y.top, A - O, y.bottom)
              }
              (!a || 0 > nr(m, a)) && (a = m),
              0 > nr(y, a) && (a = y),
              (!u || 0 > nr(m, u)) && (u = m),
              0 > nr(y, u) && (u = y)
          }),
          {
              start: a,
              end: u
          }
      }
      var l = e.display
        , s = e.doc
        , a = document.createDocumentFragment()
        , u = mt(e.display)
        , c = u.left
        , f = ao(l.sizerWidth, bt(e) - l.sizer.offsetLeft) - u.right
        , h = "ltr" == s.direction
        , d = t.from()
        , p = t.to();
      if (d.line == p.line)
          o(d.line, d.ch, p.ch);
      else {
          var g = T(s, d.line)
            , v = T(s, p.line)
            , m = ne(g) == ne(v)
            , y = o(d.line, d.ch, m ? g.text.length + 1 : null).end
            , b = o(p.line, m ? 0 : null, p.ch).start;
          m && (y.top < b.top - 2 ? (i(y.right, y.top, null, y.bottom),
          i(c, b.top, b.left, b.bottom)) : i(y.right, y.top, b.left - y.right, y.bottom)),
          y.bottom < b.top && i(c, y.bottom, null, b.top)
      }
      r.appendChild(a)
  }
  function or(e) {
      if (e.state.focused) {
          var t = e.display;
          clearInterval(t.blinker);
          var r = !0;
          t.cursorDiv.style.visibility = "",
          0 < e.options.cursorBlinkRate ? t.blinker = setInterval(function() {
              return t.cursorDiv.style.visibility = (r = !r) ? "" : "hidden"
          }, e.options.cursorBlinkRate) : 0 > e.options.cursorBlinkRate && (t.cursorDiv.style.visibility = "hidden")
      }
  }
  function lr(e) {
      e.state.focused || (e.display.input.focus(),
      ar(e))
  }
  function sr(e) {
      e.state.delayingBlurEvent = !0,
      setTimeout(function() {
          e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1,
          ur(e))
      }, 100)
  }
  function ar(e, t) {
      e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1),
      "nocursor" == e.options.readOnly || (!e.state.focused && (ge(e, "focus", e, t),
      e.state.focused = !0,
      s(e.display.wrapper, "CodeMirror-focused"),
      !e.curOp && e.display.selForContextMenu != e.doc.sel && (e.display.input.reset(),
      xo && setTimeout(function() {
          return e.display.input.reset(!0)
      }, 20)),
      e.display.input.receivedFocus()),
      or(e))
  }
  function ur(e, t) {
      e.state.delayingBlurEvent || (e.state.focused && (ge(e, "blur", e, t),
      e.state.focused = !1,
      Io(e.display.wrapper, "CodeMirror-focused")),
      clearInterval(e.display.blinker),
      setTimeout(function() {
          e.state.focused || (e.display.shift = !1)
      }, 150))
  }
  function cr(e) {
      for (var t = e.display, r = t.lineDiv.offsetTop, n = 0; n < t.view.length; n++) {
          var i = t.view[n]
            , o = void 0;
          if (!i.hidden) {
              if (bo && 8 > wo) {
                  var l = i.node.offsetTop + i.node.offsetHeight;
                  o = l - r,
                  r = l
              } else {
                  var s = i.node.getBoundingClientRect();
                  o = s.bottom - s.top
              }
              var a = i.line.height - o;
              if (2 > o && (o = Xt(t)),
              (.005 < a || -.005 > a) && (A(i.line, o),
              fr(i.line),
              i.rest))
                  for (var u = 0; u < i.rest.length; u++)
                      fr(i.rest[u])
          }
      }
  }
  function fr(e) {
      if (e.widgets)
          for (var t = 0; t < e.widgets.length; ++t) {
              var r = e.widgets[t]
                , n = r.node.parentNode;
              n && (r.height = n.offsetHeight)
          }
  }
  function hr(e, t, r) {
      var n = r && null != r.top ? ao(0, r.top) : e.scroller.scrollTop;
      n = uo(n - gt(e));
      var i = r && null != r.bottom ? r.bottom : n + e.wrapper.clientHeight
        , o = W(t, n)
        , l = W(t, i);
      if (r && r.ensure) {
          var s = r.ensure.from.line
            , a = r.ensure.to.line;
          s < o ? (o = s,
          l = W(t, ae(T(t, s)) + e.wrapper.clientHeight)) : fo(a, t.lastLine()) >= l && (o = W(t, ae(T(t, a)) - e.wrapper.clientHeight),
          l = a)
      }
      return {
          from: o,
          to: ao(l, o + 1)
      }
  }
  function dr(e) {
      var t = e.display
        , r = t.view;
      if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
          for (var n = qt(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = n + "px", l = 0; l < r.length; l++)
              if (!r[l].hidden) {
                  e.options.fixedGutter && (r[l].gutter && (r[l].gutter.style.left = o),
                  r[l].gutterBackground && (r[l].gutterBackground.style.left = o));
                  var s = r[l].alignable;
                  if (s)
                      for (var a = 0; a < s.length; a++)
                          s[a].style.left = o
              }
          e.options.fixedGutter && (t.gutters.style.left = n + i + "px")
      }
  }
  function pr(e) {
      if (!e.options.lineNumbers)
          return !1;
      var t = e.doc
        , r = H(e.options, t.first + t.size - 1)
        , i = e.display;
      if (r.length != i.lineNumChars) {
          var o = i.measure.appendChild(n("div", [n("div", r)], "CodeMirror-linenumber CodeMirror-gutter-elt"))
            , l = o.firstChild.offsetWidth
            , s = o.offsetWidth - l;
          return i.lineGutter.style.width = "",
          i.lineNumInnerWidth = ao(l, i.lineGutter.offsetWidth - s) + 1,
          i.lineNumWidth = i.lineNumInnerWidth + s,
          i.lineNumChars = i.lineNumInnerWidth ? r.length : -1,
          i.lineGutter.style.width = i.lineNumWidth + "px",
          Qr(e),
          !0
      }
      return !1
  }
  function gr(e, t) {
      if (!ve(e, "scrollCursorIntoView")) {
          var r = e.display
            , i = r.sizer.getBoundingClientRect()
            , o = null;
          if (0 > t.top + i.top ? o = !0 : t.bottom + i.top > (window.innerHeight || document.documentElement.clientHeight) && (o = !1),
          null != o && !No) {
              var l = n("div", "​", null, "position: absolute;\n                         top: " + (t.top - r.viewOffset - gt(e.display)) + "px;\n                         height: " + (t.bottom - t.top + yt(e) + r.barHeight) + "px;\n                         left: " + t.left + "px; width: " + ao(2, t.right - t.left) + "px;");
              e.display.lineSpace.appendChild(l),
              l.scrollIntoView(o),
              e.display.lineSpace.removeChild(l)
          }
      }
  }
  function vr(e, t) {
      var r = e.display
        , n = Xt(e.display);
      0 > t.top && (t.top = 0);
      var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : r.scroller.scrollTop
        , o = wt(e)
        , l = {};
      t.bottom - t.top > o && (t.bottom = t.top + o);
      var s = e.doc.height + vt(r)
        , a = t.top < n
        , u = t.bottom > s - n;
      if (t.top < i)
          l.scrollTop = a ? 0 : t.top;
      else if (t.bottom > i + o) {
          var c = fo(t.top, (u ? s : t.bottom) - o);
          c != i && (l.scrollTop = c)
      }
      var f = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : r.scroller.scrollLeft
        , h = bt(e) - (e.options.fixedGutter ? r.gutters.offsetWidth : 0)
        , d = t.right - t.left > h;
      return d && (t.right = t.left + h),
      10 > t.left ? l.scrollLeft = 0 : t.left < f ? l.scrollLeft = ao(0, t.left - (d ? 0 : 10)) : t.right > h + f - 3 && (l.scrollLeft = t.right + (d ? 0 : 10) - h),
      l
  }
  function mr(e, t) {
      null == t || (wr(e),
      e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t)
  }
  function yr(e) {
      wr(e);
      var t = e.getCursor();
      e.curOp.scrollToPos = {
          from: t,
          to: t,
          margin: e.options.cursorScrollMargin
      }
  }
  function br(e, t, r) {
      (null != t || null != r) && wr(e),
      null != t && (e.curOp.scrollLeft = t),
      null != r && (e.curOp.scrollTop = r)
  }
  function wr(e) {
      var t = e.curOp.scrollToPos;
      t && (e.curOp.scrollToPos = null,
      xr(e, Rt(e, t.from), Rt(e, t.to), t.margin))
  }
  function xr(e, t, r, n) {
      var i = vr(e, {
          left: fo(t.left, r.left),
          top: fo(t.top, r.top) - n,
          right: ao(t.right, r.right),
          bottom: ao(t.bottom, r.bottom) + n
      });
      br(e, i.scrollLeft, i.scrollTop)
  }
  function Cr(e, t) {
      2 > so(e.doc.scrollTop - t) || (!go && Zr(e, {
          top: t
      }),
      Sr(e, t, !0),
      go && Zr(e),
      jr(e, 100))
  }
  function Sr(e, t, r) {
      t = fo(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t),
      (e.display.scroller.scrollTop != t || r) && (e.doc.scrollTop = t,
      e.display.scrollbars.setScrollTop(t),
      e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t))
  }
  function Lr(e, t, r, n) {
      t = fo(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth),
      (r ? t == e.doc.scrollLeft : 2 > so(e.doc.scrollLeft - t)) && !n || (e.doc.scrollLeft = t,
      dr(e),
      e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t),
      e.display.scrollbars.setScrollLeft(t))
  }
  function kr(e) {
      var t = e.display
        , r = t.gutters.offsetWidth
        , n = lo(e.doc.height + vt(e.display));
      return {
          clientHeight: t.scroller.clientHeight,
          viewHeight: t.wrapper.clientHeight,
          scrollWidth: t.scroller.scrollWidth,
          clientWidth: t.scroller.clientWidth,
          viewWidth: t.wrapper.clientWidth,
          barLeft: e.options.fixedGutter ? r : 0,
          docHeight: n,
          scrollHeight: n + yt(e) + t.barHeight,
          nativeBarWidth: t.nativeBarWidth,
          gutterWidth: r
      }
  }
  function Tr(e, t) {
      t || (t = kr(e));
      var r = e.display.barWidth
        , n = e.display.barHeight;
      Nr(e, t);
      for (var i = 0; 4 > i && r != e.display.barWidth || n != e.display.barHeight; i++)
          r != e.display.barWidth && e.options.lineWrapping && cr(e),
          Nr(e, kr(e)),
          r = e.display.barWidth,
          n = e.display.barHeight
  }
  function Nr(e, t) {
      var r = e.display
        , n = r.scrollbars.update(t);
      r.sizer.style.paddingRight = (r.barWidth = n.right) + "px",
      r.sizer.style.paddingBottom = (r.barHeight = n.bottom) + "px",
      r.heightForcer.style.borderBottom = n.bottom + "px solid transparent",
      n.right && n.bottom ? (r.scrollbarFiller.style.display = "block",
      r.scrollbarFiller.style.height = n.bottom + "px",
      r.scrollbarFiller.style.width = n.right + "px") : r.scrollbarFiller.style.display = "",
      n.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (r.gutterFiller.style.display = "block",
      r.gutterFiller.style.height = n.bottom + "px",
      r.gutterFiller.style.width = t.gutterWidth + "px") : r.gutterFiller.style.display = ""
  }
  function Or(e) {
      e.display.scrollbars && (e.display.scrollbars.clear(),
      e.display.scrollbars.addClass && Io(e.display.wrapper, e.display.scrollbars.addClass)),
      e.display.scrollbars = new Sl[e.options.scrollbarStyle](function(t) {
          e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
          tl(t, "mousedown", function() {
              e.state.focused && setTimeout(function() {
                  return e.display.input.focus()
              }, 0)
          }),
          t.setAttribute("cm-not-content", "true")
      }
      ,function(t, r) {
          "horizontal" == r ? Lr(e, t) : Cr(e, t)
      }
      ,e),
      e.display.scrollbars.addClass && s(e.display.wrapper, e.display.scrollbars.addClass)
  }
  function Ar(e) {
      e.curOp = {
          cm: e,
          viewChanged: !1,
          startHeight: e.doc.height,
          forceUpdate: !1,
          updateInput: null,
          typing: !1,
          changeObjs: null,
          cursorActivityHandlers: null,
          cursorActivityCalled: 0,
          selectionChanged: !1,
          updateMaxLine: !1,
          scrollLeft: null,
          scrollTop: null,
          scrollToPos: null,
          focus: !1,
          id: ++Ll
      },
      function(e) {
          yl ? yl.ops.push(e) : e.ownsGroup = yl = {
              ops: [e],
              delayedCallbacks: []
          }
      }(e.curOp)
  }
  function Mr(e) {
      !function(e, t) {
          var r = e.ownsGroup;
          if (r)
              try {
                  !function(e) {
                      var t = e.delayedCallbacks
                        , r = 0;
                      do {
                          for (; r < t.length; r++)
                              t[r].call(null);
                          for (var n, i = 0; i < e.ops.length; i++)
                              if ((n = e.ops[i]).cursorActivityHandlers)
                                  for (; n.cursorActivityCalled < n.cursorActivityHandlers.length; )
                                      n.cursorActivityHandlers[n.cursorActivityCalled++].call(null, n.cm)
                      } while (r < t.length)
                  }(r)
              } finally {
                  yl = null,
                  t(r)
              }
      }(e.curOp, function(e) {
          for (var t = 0; t < e.ops.length; t++)
              e.ops[t].cm.curOp = null;
          !function(e) {
              for (var t = e.ops, r = 0; r < t.length; r++)
                  Wr(t[r]);
              for (var n = 0; n < t.length; n++)
                  Dr(t[n]);
              for (var i = 0; i < t.length; i++)
                  Hr(t[i]);
              for (var o = 0; o < t.length; o++)
                  Fr(t[o]);
              for (var l = 0; l < t.length; l++)
                  Pr(t[l])
          }(e)
      })
  }
  function Wr(e) {
      var t = e.cm
        , r = t.display;
      (function(e) {
          var t = e.display;
          !t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth,
          t.heightForcer.style.height = yt(e) + "px",
          t.sizer.style.marginBottom = -t.nativeBarWidth + "px",
          t.sizer.style.borderRightWidth = yt(e) + "px",
          t.scrollbarsClipped = !0)
      }
      )(t),
      e.updateMaxLine && ce(t),
      e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < r.viewFrom || e.scrollToPos.to.line >= r.viewTo) || r.maxLineChanged && t.options.lineWrapping,
      e.update = e.mustUpdate && new kl(t,e.mustUpdate && {
          top: e.scrollTop,
          ensure: e.scrollToPos
      },e.forceUpdate)
  }
  function Dr(e) {
      e.updatedDisplay = e.mustUpdate && qr(e.cm, e.update)
  }
  function Hr(e) {
      var t = e.cm
        , r = t.display;
      e.updatedDisplay && cr(t),
      e.barMeasure = kr(t),
      r.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = St(t, r.maxLine, r.maxLine.text.length).left + 3,
      t.display.sizerWidth = e.adjustWidthTo,
      e.barMeasure.scrollWidth = ao(r.scroller.clientWidth, r.sizer.offsetLeft + e.adjustWidthTo + yt(t) + t.display.barWidth),
      e.maxScrollLeft = ao(0, r.sizer.offsetLeft + e.adjustWidthTo - bt(t))),
      (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = r.input.prepareSelection())
  }
  function Fr(e) {
      var t = e.cm;
      null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px",
      e.maxScrollLeft < t.doc.scrollLeft && Lr(t, fo(t.display.scroller.scrollLeft, e.maxScrollLeft), !0),
      t.display.maxLineChanged = !1);
      var r = e.focus && e.focus == l();
      e.preparedSelection && t.display.input.showSelection(e.preparedSelection, r),
      (e.updatedDisplay || e.startHeight != t.doc.height) && Tr(t, e.barMeasure),
      e.updatedDisplay && Jr(t, e.barMeasure),
      e.selectionChanged && or(t),
      t.state.focused && e.updateInput && t.display.input.reset(e.typing),
      r && lr(e.cm)
  }
  function Pr(e) {
      var t = e.cm
        , r = t.display
        , n = t.doc;
      if (e.updatedDisplay && $r(t, e.update),
      null != r.wheelStartX && (null != e.scrollTop || null != e.scrollLeft || e.scrollToPos) && (r.wheelStartX = r.wheelStartY = null),
      null != e.scrollTop && Sr(t, e.scrollTop, e.forceScroll),
      null != e.scrollLeft && Lr(t, e.scrollLeft, !0, !0),
      e.scrollToPos) {
          var i = function(e, t, r, n) {
              var i;
              null == n && (n = 0),
              e.options.lineWrapping || t != r || (r = "before" == (t = t.ch ? F(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after") : t).sticky ? F(t.line, t.ch + 1, "before") : t);
              for (var o = 0; 5 > o; o++) {
                  var l = !1
                    , s = It(e, t)
                    , a = r && r != t ? It(e, r) : s
                    , u = vr(e, i = {
                      left: fo(s.left, a.left),
                      top: fo(s.top, a.top) - n,
                      right: ao(s.left, a.left),
                      bottom: ao(s.bottom, a.bottom) + n
                  })
                    , c = e.doc.scrollTop
                    , f = e.doc.scrollLeft;
                  if (null != u.scrollTop && (Cr(e, u.scrollTop),
                  1 < so(e.doc.scrollTop - c) && (l = !0)),
                  null != u.scrollLeft && (Lr(e, u.scrollLeft),
                  1 < so(e.doc.scrollLeft - f) && (l = !0)),
                  !l)
                      break
              }
              return i
          }(t, G(n, e.scrollToPos.from), G(n, e.scrollToPos.to), e.scrollToPos.margin);
          gr(t, i)
      }
      var o = e.maybeHiddenMarkers
        , l = e.maybeUnhiddenMarkers;
      if (o)
          for (var s = 0; s < o.length; ++s)
              o[s].lines.length || ge(o[s], "hide");
      if (l)
          for (var a = 0; a < l.length; ++a)
              l[a].lines.length && ge(l[a], "unhide");
      r.wrapper.offsetHeight && (n.scrollTop = t.display.scroller.scrollTop),
      e.changeObjs && ge(t, "changes", t, e.changeObjs),
      e.update && e.update.finish()
  }
  function Er(e, t) {
      if (e.curOp)
          return t();
      Ar(e);
      try {
          return t()
      } finally {
          Mr(e)
      }
  }
  function zr(e, t) {
      return function() {
          if (e.curOp)
              return t.apply(e, arguments);
          Ar(e);
          try {
              return t.apply(e, arguments)
          } finally {
              Mr(e)
          }
      }
  }
  function Ir(e) {
      return function() {
          if (this.curOp)
              return e.apply(this, arguments);
          Ar(this);
          try {
              return e.apply(this, arguments)
          } finally {
              Mr(this)
          }
      }
  }
  function Rr(e) {
      return function() {
          var t = this.cm;
          if (!t || t.curOp)
              return e.apply(this, arguments);
          Ar(t);
          try {
              return e.apply(this, arguments)
          } finally {
              Mr(t)
          }
      }
  }
  function Br(e, t, r, n) {
      null == t && (t = e.doc.first),
      null == r && (r = e.doc.first + e.doc.size),
      n || (n = 0);
      var i = e.display;
      if (n && r < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t),
      e.curOp.viewChanged = !0,
      t >= i.viewTo)
          Zo && ie(e.doc, t) < i.viewTo && Ur(e);
      else if (r <= i.viewFrom)
          Zo && oe(e.doc, r + n) > i.viewFrom ? Ur(e) : (i.viewFrom += n,
          i.viewTo += n);
      else if (t <= i.viewFrom && r >= i.viewTo)
          Ur(e);
      else if (t <= i.viewFrom) {
          var o = Vr(e, r, r + n, 1);
          o ? (i.view = i.view.slice(o.index),
          i.viewFrom = o.lineN,
          i.viewTo += n) : Ur(e)
      } else if (r >= i.viewTo) {
          var l = Vr(e, t, t, -1);
          l ? (i.view = i.view.slice(0, l.index),
          i.viewTo = l.lineN) : Ur(e)
      } else {
          var s = Vr(e, t, t, -1)
            , a = Vr(e, r, r + n, 1);
          s && a ? (i.view = i.view.slice(0, s.index).concat(Je(e, s.lineN, a.lineN)).concat(i.view.slice(a.index)),
          i.viewTo += n) : Ur(e)
      }
      var u = i.externalMeasured;
      u && (r < u.lineN ? u.lineN += n : t < u.lineN + u.size && (i.externalMeasured = null))
  }
  function Gr(e, t, r) {
      e.curOp.viewChanged = !0;
      var n = e.display
        , i = e.display.externalMeasured;
      if (i && t >= i.lineN && t < i.lineN + i.size && (n.externalMeasured = null),
      !(t < n.viewFrom || t >= n.viewTo)) {
          var o = n.view[Jt(e, t)];
          if (null != o.node) {
              var l = o.changes || (o.changes = []);
              -1 == h(l, r) && l.push(r)
          }
      }
  }
  function Ur(e) {
      e.display.viewFrom = e.display.viewTo = e.doc.first,
      e.display.view = [],
      e.display.viewOffset = 0
  }
  function Vr(e, t, r, n) {
      var i, o = Jt(e, t), l = e.display.view;
      if (!Zo || r == e.doc.first + e.doc.size)
          return {
              index: o,
              lineN: r
          };
      for (var s = e.display.viewFrom, a = 0; a < o; a++)
          s += l[a].size;
      if (s != t) {
          if (0 < n) {
              if (o == l.length - 1)
                  return null;
              i = s + l[o].size - t,
              o++
          } else
              i = s - t;
          t += i,
          r += i
      }
      for (; ie(e.doc, r) != r; ) {
          if (o == (0 > n ? 0 : l.length - 1))
              return null;
          r += n * l[o - (0 > n ? 1 : 0)].size,
          o += n
      }
      return {
          index: o,
          lineN: r
      }
  }
  function Kr(e) {
      for (var t, r = e.display.view, n = 0, i = 0; i < r.length; i++)
          (t = r[i]).hidden || t.node && !t.changes || ++n;
      return n
  }
  function jr(e, t) {
      e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, u(Xr, e))
  }
  function Xr(e) {
      var t = e.doc;
      if (!(t.highlightFrontier >= e.display.viewTo)) {
          var r = +new Date + e.options.workTime
            , n = ze(e, t.highlightFrontier)
            , i = [];
          t.iter(n.line, fo(t.first + t.size, e.display.viewTo + 500), function(o) {
              if (n.line >= e.display.viewFrom) {
                  var l = o.styles
                    , s = o.text.length > e.options.maxHighlightLength ? De(t.mode, n.state) : null
                    , a = Pe(e, o, n, !0);
                  s && (n.state = s),
                  o.styles = a.styles;
                  var u = o.styleClasses
                    , c = a.classes;
                  c ? o.styleClasses = c : u && (o.styleClasses = null);
                  for (var f = !l || l.length != o.styles.length || u != c && (!u || !c || u.bgClass != c.bgClass || u.textClass != c.textClass), h = 0; !f && h < l.length; ++h)
                      f = l[h] != o.styles[h];
                  f && i.push(n.line),
                  o.stateAfter = n.save(),
                  n.nextLine()
              } else
                  o.text.length <= e.options.maxHighlightLength && Ie(e, o.text, n),
                  o.stateAfter = 0 == n.line % 5 ? n.save() : null,
                  n.nextLine();
              return +new Date > r ? (jr(e, e.options.workDelay),
              !0) : void 0
          }),
          t.highlightFrontier = n.line,
          t.modeFrontier = ao(t.modeFrontier, n.line),
          i.length && Er(e, function() {
              for (var t = 0; t < i.length; t++)
                  Gr(e, i[t], "text")
          })
      }
  }
  function Yr(e) {
      if (e.hasFocus())
          return null;
      var t = l();
      if (!t || !o(e.display.lineDiv, t))
          return null;
      var r = {
          activeElt: t
      };
      if (window.getSelection) {
          var n = window.getSelection();
          n.anchorNode && n.extend && o(e.display.lineDiv, n.anchorNode) && (r.anchorNode = n.anchorNode,
          r.anchorOffset = n.anchorOffset,
          r.focusNode = n.focusNode,
          r.focusOffset = n.focusOffset)
      }
      return r
  }
  function _r(e) {
      if (e && e.activeElt && e.activeElt != l() && (e.activeElt.focus(),
      e.anchorNode && o(document.body, e.anchorNode) && o(document.body, e.focusNode))) {
          var t = window.getSelection()
            , r = document.createRange();
          r.setEnd(e.anchorNode, e.anchorOffset),
          r.collapse(!1),
          t.removeAllRanges(),
          t.addRange(r),
          t.extend(e.focusNode, e.focusOffset)
      }
  }
  function qr(e, r) {
      var n = e.display
        , i = e.doc;
      if (r.editorIsHidden)
          return Ur(e),
          !1;
      if (!r.force && r.visible.from >= n.viewFrom && r.visible.to <= n.viewTo && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) && n.renderedView == n.view && 0 == Kr(e))
          return !1;
      pr(e) && (Ur(e),
      r.dims = _t(e));
      var o = i.first + i.size
        , l = ao(r.visible.from - e.options.viewportMargin, i.first)
        , s = fo(o, r.visible.to + e.options.viewportMargin);
      n.viewFrom < l && 20 > l - n.viewFrom && (l = ao(i.first, n.viewFrom)),
      n.viewTo > s && 20 > n.viewTo - s && (s = fo(o, n.viewTo)),
      Zo && (l = ie(e.doc, l),
      s = oe(e.doc, s));
      var a = l != n.viewFrom || s != n.viewTo || n.lastWrapHeight != r.wrapperHeight || n.lastWrapWidth != r.wrapperWidth;
      (function(e, t, r) {
          var n = e.display;
          0 == n.view.length || t >= n.viewTo || r <= n.viewFrom ? (n.view = Je(e, t, r),
          n.viewFrom = t) : (n.viewFrom > t ? n.view = Je(e, t, n.viewFrom).concat(n.view) : n.viewFrom < t && (n.view = n.view.slice(Jt(e, t))),
          n.viewFrom = t,
          n.viewTo < r ? n.view = n.view.concat(Je(e, n.viewTo, r)) : n.viewTo > r && (n.view = n.view.slice(0, Jt(e, r)))),
          n.viewTo = r
      }
      )(e, l, s),
      n.viewOffset = ae(T(e.doc, n.viewFrom)),
      e.display.mover.style.top = n.viewOffset + "px";
      var u = Kr(e);
      if (!a && 0 == u && !r.force && n.renderedView == n.view && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo))
          return !1;
      var c = Yr(e);
      return 4 < u && (n.lineDiv.style.display = "none"),
      function(e, r, n) {
          function i(t) {
              var r = t.nextSibling;
              return xo && Wo && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t),
              r
          }
          for (var o, l = e.display, s = e.options.lineNumbers, a = l.lineDiv, u = a.firstChild, c = l.view, f = l.viewFrom, d = 0; d < c.length; d++) {
              if ((o = c[d]).hidden)
                  ;
              else if (o.node && o.node.parentNode == a) {
                  for (; u != o.node; )
                      u = i(u);
                  var p = s && null != r && r <= f && o.lineNumber;
                  o.changes && (-1 < h(o.changes, "gutter") && (p = !1),
                  rt(e, o, f, n)),
                  p && (t(o.lineNumber),
                  o.lineNumber.appendChild(document.createTextNode(H(e.options, f)))),
                  u = o.node.nextSibling
              } else {
                  var g = ut(e, o, f, n);
                  a.insertBefore(g, u)
              }
              f += o.size
          }
          for (; u; )
              u = i(u)
      }(e, n.updateLineNumbers, r.dims),
      4 < u && (n.lineDiv.style.display = ""),
      n.renderedView = n.view,
      _r(c),
      t(n.cursorDiv),
      t(n.selectionDiv),
      n.gutters.style.height = n.sizer.style.minHeight = 0,
      a && (n.lastWrapHeight = r.wrapperHeight,
      n.lastWrapWidth = r.wrapperWidth,
      jr(e, 400)),
      n.updateLineNumbers = null,
      !0
  }
  function $r(e, t) {
      for (var r = t.viewport, n = !0; (n && e.options.lineWrapping && t.oldDisplayWidth != bt(e) || (r && null != r.top && (r = {
          top: fo(e.doc.height + vt(e.display) - wt(e), r.top)
      }),
      t.visible = hr(e.display, e.doc, r),
      !(t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo))) && qr(e, t); n = !1) {
          cr(e);
          var i = kr(e);
          er(e),
          Tr(e, i),
          Jr(e, i),
          t.force = !1
      }
      t.signal(e, "update", e),
      (e.display.viewFrom != e.display.reportedViewFrom || e.display.viewTo != e.display.reportedViewTo) && (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo),
      e.display.reportedViewFrom = e.display.viewFrom,
      e.display.reportedViewTo = e.display.viewTo)
  }
  function Zr(e, t) {
      var r = new kl(e,t);
      if (qr(e, r)) {
          cr(e),
          $r(e, r);
          var n = kr(e);
          er(e),
          Tr(e, n),
          Jr(e, n),
          r.finish()
      }
  }
  function Qr(e) {
      var t = e.display.gutters.offsetWidth;
      e.display.sizer.style.marginLeft = t + "px"
  }
  function Jr(e, t) {
      e.display.sizer.style.minHeight = t.docHeight + "px",
      e.display.heightForcer.style.top = t.docHeight + "px",
      e.display.gutters.style.height = t.docHeight + e.display.barHeight + yt(e) + "px"
  }
  function en(e) {
      var r = e.display.gutters
        , i = e.options.gutters;
      t(r);
      for (var o = 0; o < i.length; ++o) {
          var l = i[o]
            , s = r.appendChild(n("div", null, "CodeMirror-gutter " + l));
          "CodeMirror-linenumbers" == l && (e.display.lineGutter = s,
          s.style.width = (e.display.lineNumWidth || 1) + "px")
      }
      r.style.display = o ? "" : "none",
      Qr(e)
  }
  function tn(e) {
      var t = h(e.gutters, "CodeMirror-linenumbers");
      -1 == t && e.lineNumbers ? e.gutters = e.gutters.concat(["CodeMirror-linenumbers"]) : -1 < t && !e.lineNumbers && (e.gutters = e.gutters.slice(0),
      e.gutters.splice(t, 1))
  }
  function rn(e) {
      var t = e.wheelDeltaX
        , r = e.wheelDeltaY;
      return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail),
      null == r && e.detail && e.axis == e.VERTICAL_AXIS ? r = e.detail : null == r && (r = e.wheelDelta),
      {
          x: t,
          y: r
      }
  }
  function nn(e) {
      var t = rn(e);
      return t.x *= Nl,
      t.y *= Nl,
      t
  }
  function on(e, t) {
      var r = rn(t)
        , n = r.x
        , i = r.y
        , o = e.display
        , l = o.scroller
        , s = l.scrollWidth > l.clientWidth
        , a = l.scrollHeight > l.clientHeight;
      if (n && s || i && a) {
          if (i && Wo && xo)
              e: for (var u = t.target, c = o.view; u != l; u = u.parentNode)
                  for (var f = 0; f < c.length; f++)
                      if (c[f].node == u) {
                          e.display.currentWheelTarget = u;
                          break e
                      }
          if (n && !go && !Lo && null != Nl)
              return i && a && Cr(e, ao(0, l.scrollTop + i * Nl)),
              Lr(e, ao(0, l.scrollLeft + n * Nl)),
              (!i || i && a) && we(t),
              void (o.wheelStartX = null);
          if (i && null != Nl) {
              var h = i * Nl
                , d = e.doc.scrollTop
                , p = d + o.wrapper.clientHeight;
              0 > h ? d = ao(0, d + h - 50) : p = fo(e.doc.height, p + h + 50),
              Zr(e, {
                  top: d,
                  bottom: p
              })
          }
          20 > Tl && (null == o.wheelStartX ? (o.wheelStartX = l.scrollLeft,
          o.wheelStartY = l.scrollTop,
          o.wheelDX = n,
          o.wheelDY = i,
          setTimeout(function() {
              if (null != o.wheelStartX) {
                  var e = l.scrollLeft - o.wheelStartX
                    , t = l.scrollTop - o.wheelStartY
                    , r = t && o.wheelDY && t / o.wheelDY || e && o.wheelDX && e / o.wheelDX;
                  o.wheelStartX = o.wheelStartY = null,
                  r && (Nl = (Nl * Tl + r) / (Tl + 1),
                  ++Tl)
              }
          }, 200)) : (o.wheelDX += n,
          o.wheelDY += i))
      }
  }
  function ln(e, t) {
      var r = e[t];
      e.sort(function(e, t) {
          return P(e.from(), t.from())
      }),
      t = h(e, r);
      for (var n = 1; n < e.length; n++) {
          var i = e[n]
            , o = e[n - 1];
          if (0 <= P(o.to(), i.from())) {
              var l = R(o.from(), i.from())
                , s = I(o.to(), i.to())
                , a = o.empty() ? i.from() == i.head : o.from() == o.head;
              n <= t && --t,
              e.splice(--n, 2, new Al(a ? s : l,a ? l : s))
          }
      }
      return new Ol(e,t)
  }
  function sn(e, t) {
      return new Ol([new Al(e,t || e)],0)
  }
  function an(e) {
      return e.text ? F(e.from.line + e.text.length - 1, g(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to
  }
  function un(e, t) {
      if (0 > P(e, t.from))
          return e;
      if (0 >= P(e, t.to))
          return an(t);
      var r = e.line + t.text.length - (t.to.line - t.from.line) - 1
        , n = e.ch;
      return e.line == t.to.line && (n += an(t).ch - t.to.ch),
      F(r, n)
  }
  function cn(e, t) {
      for (var r, n = [], i = 0; i < e.sel.ranges.length; i++)
          r = e.sel.ranges[i],
          n.push(new Al(un(r.anchor, t),un(r.head, t)));
      return ln(n, e.sel.primIndex)
  }
  function fn(e, t, r) {
      return e.line == t.line ? F(r.line, e.ch - t.ch + r.ch) : F(r.line + (e.line - t.line), e.ch)
  }
  function hn(e) {
      e.doc.mode = Me(e.options, e.doc.modeOption),
      dn(e)
  }
  function dn(e) {
      e.doc.iter(function(e) {
          e.stateAfter && (e.stateAfter = null),
          e.styles && (e.styles = null)
      }),
      e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first,
      jr(e, 100),
      e.state.modeGen++,
      e.curOp && Br(e)
  }
  function pn(e, t) {
      return 0 == t.from.ch && 0 == t.to.ch && "" == g(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore)
  }
  function gn(e, t, r, n) {
      function i(e) {
          return r ? r[e] : null
      }
      function o(e, r, i) {
          (function(e, t, r, n) {
              e.text = t,
              e.stateAfter && (e.stateAfter = null),
              e.styles && (e.styles = null),
              null != e.order && (e.order = null),
              _(e),
              q(e, r);
              var i = n ? n(e) : 1;
              i != e.height && A(e, i)
          }
          )(e, r, i, n),
          et(e, "change", e, t)
      }
      function l(e, t) {
          for (var r = [], o = e; o < t; ++o)
              r.push(new pl(u[o],i(o),n));
          return r
      }
      var s = t.from
        , a = t.to
        , u = t.text
        , c = T(e, s.line)
        , f = T(e, a.line)
        , h = g(u)
        , d = i(u.length - 1)
        , p = a.line - s.line;
      if (t.full)
          e.insert(0, l(0, u.length)),
          e.remove(u.length, e.size - u.length);
      else if (pn(e, t)) {
          var v = l(0, u.length - 1);
          o(f, f.text, d),
          p && e.remove(s.line, p),
          v.length && e.insert(s.line, v)
      } else if (c == f)
          if (1 == u.length)
              o(c, c.text.slice(0, s.ch) + h + c.text.slice(a.ch), d);
          else {
              var m = l(1, u.length - 1);
              m.push(new pl(h + c.text.slice(a.ch),d,n)),
              o(c, c.text.slice(0, s.ch) + u[0], i(0)),
              e.insert(s.line + 1, m)
          }
      else if (1 == u.length)
          o(c, c.text.slice(0, s.ch) + u[0] + f.text.slice(a.ch), i(0)),
          e.remove(s.line + 1, p);
      else {
          o(c, c.text.slice(0, s.ch) + u[0], i(0)),
          o(f, h + f.text.slice(a.ch), d);
          var y = l(1, u.length - 1);
          1 < p && e.remove(s.line + 1, p - 1),
          e.insert(s.line + 1, y)
      }
      et(e, "change", e, t)
  }
  function vn(e, t, r) {
      !function e(n, i, o) {
          if (n.linked)
              for (var l, s = 0; s < n.linked.length; ++s)
                  if ((l = n.linked[s]).doc != i) {
                      var a = o && l.sharedHist;
                      (!r || a) && (t(l.doc, a),
                      e(l.doc, n, a))
                  }
      }(e, null, !0)
  }
  function mn(e, t) {
      if (t.cm)
          throw new Error("This document is already in use.");
      e.doc = t,
      t.cm = e,
      Zt(e),
      hn(e),
      yn(e),
      e.options.lineWrapping || ce(e),
      e.options.mode = t.modeOption,
      Br(e)
  }
  function yn(e) {
      ("rtl" == e.doc.direction ? s : Io)(e.display.lineDiv, "CodeMirror-rtl")
  }
  function bn(e) {
      this.done = [],
      this.undone = [],
      this.undoDepth = 1 / 0,
      this.lastModTime = this.lastSelTime = 0,
      this.lastOp = this.lastSelOp = null,
      this.lastOrigin = this.lastSelOrigin = null,
      this.generation = this.maxGeneration = e || 1
  }
  function wn(e, t) {
      var r = {
          from: z(t.from),
          to: an(t),
          text: N(e, t.from, t.to)
      };
      return kn(e, r, t.from.line, t.to.line + 1),
      vn(e, function(e) {
          return kn(e, r, t.from.line, t.to.line + 1)
      }, !0),
      r
  }
  function xn(e) {
      for (; e.length; ) {
          if (!g(e).ranges)
              break;
          e.pop()
      }
  }
  function Cn(e, t, r, n) {
      var i = e.history;
      i.undone.length = 0;
      var o, l, s = +new Date;
      if ((i.lastOp == n || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && i.lastModTime > s - (e.cm ? e.cm.options.historyEventDelay : 500) || "*" == t.origin.charAt(0))) && (o = function(e, t) {
          return t ? (xn(e.done),
          g(e.done)) : e.done.length && !g(e.done).ranges ? g(e.done) : 1 < e.done.length && !e.done[e.done.length - 2].ranges ? (e.done.pop(),
          g(e.done)) : void 0
      }(i, i.lastOp == n)))
          l = g(o.changes),
          0 == P(t.from, t.to) && 0 == P(t.from, l.to) ? l.to = an(t) : o.changes.push(wn(e, t));
      else {
          var a = g(i.done);
          for (a && a.ranges || Ln(e.sel, i.done),
          o = {
              changes: [wn(e, t)],
              generation: i.generation
          },
          i.done.push(o); i.done.length > i.undoDepth; )
              i.done.shift(),
              i.done[0].ranges || i.done.shift()
      }
      i.done.push(r),
      i.generation = ++i.maxGeneration,
      i.lastModTime = i.lastSelTime = s,
      i.lastOp = i.lastSelOp = n,
      i.lastOrigin = i.lastSelOrigin = t.origin,
      l || ge(e, "historyAdded")
  }
  function Sn(e, t, r, n) {
      var i = e.history
        , o = n && n.origin;
      r == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || function(e, t, r, n) {
          var i = t.charAt(0);
          return "*" == i || "+" == i && r.ranges.length == n.ranges.length && r.somethingSelected() == n.somethingSelected() && new Date - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500)
      }(e, o, g(i.done), t)) ? i.done[i.done.length - 1] = t : Ln(t, i.done),
      i.lastSelTime = +new Date,
      i.lastSelOrigin = o,
      i.lastSelOp = r,
      n && !1 !== n.clearRedo && xn(i.undone)
  }
  function Ln(e, t) {
      var r = g(t);
      r && r.ranges && r.equals(e) || t.push(e)
  }
  function kn(e, t, r, n) {
      var i = t["spans_" + e.id]
        , o = 0;
      e.iter(ao(e.first, r), fo(e.first + e.size, n), function(r) {
          r.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = r.markedSpans),
          ++o
      })
  }
  function Tn(e) {
      if (!e)
          return null;
      for (var t, r = 0; r < e.length; ++r)
          e[r].marker.explicitlyCleared ? t || (t = e.slice(0, r)) : t && t.push(e[r]);
      return t ? t.length ? t : null : e
  }
  function Nn(e, t) {
      var r = function(e, t) {
          var r = t["spans_" + e.id];
          if (!r)
              return null;
          for (var n = [], i = 0; i < t.text.length; ++i)
              n.push(Tn(r[i]));
          return n
      }(e, t)
        , n = X(e, t);
      if (!r)
          return n;
      if (!n)
          return r;
      for (var i = 0; i < r.length; ++i) {
          var o = r[i]
            , l = n[i];
          if (o && l)
              e: for (var s, a = 0; a < l.length; ++a) {
                  s = l[a];
                  for (var u = 0; u < o.length; ++u)
                      if (o[u].marker == s.marker)
                          continue e;
                  o.push(s)
              }
          else
              l && (r[i] = l)
      }
      return r
  }
  function On(e, t, r) {
      for (var n, i = [], o = 0; o < e.length; ++o)
          if ((n = e[o]).ranges)
              i.push(r ? Ol.prototype.deepCopy.call(n) : n);
          else {
              var l = n.changes
                , s = [];
              i.push({
                  changes: s
              });
              for (var a = 0; a < l.length; ++a) {
                  var u = l[a]
                    , c = void 0;
                  if (s.push({
                      from: u.from,
                      to: u.to,
                      text: u.text
                  }),
                  t)
                      for (var f in u)
                          (c = f.match(/^spans_(\d+)$/)) && -1 < h(t, +c[1]) && (g(s)[f] = u[f],
                          delete u[f])
              }
          }
      return i
  }
  function An(e, t, r, n) {
      if (n) {
          var i = e.anchor;
          if (r) {
              var o = 0 > P(t, i);
              o == 0 > P(r, i) ? o != 0 > P(t, r) && (t = r) : (i = t,
              t = r)
          }
          return new Al(i,t)
      }
      return new Al(r || t,t)
  }
  function Mn(e, t, r, n, i) {
      null == i && (i = e.cm && (e.cm.display.shift || e.extend)),
      Pn(e, new Ol([An(e.sel.primary(), t, r, i)],0), n)
  }
  function Wn(e, t, r) {
      for (var n = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++)
          n[o] = An(e.sel.ranges[o], t[o], null, i);
      Pn(e, ln(n, e.sel.primIndex), r)
  }
  function Dn(e, t, r, n) {
      var i = e.sel.ranges.slice(0);
      i[t] = r,
      Pn(e, ln(i, e.sel.primIndex), n)
  }
  function Hn(e, t, r, n) {
      Pn(e, sn(t, r), n)
  }
  function Fn(e, t, r) {
      var n = e.history.done
        , i = g(n);
      i && i.ranges ? (n[n.length - 1] = t,
      En(e, t, r)) : Pn(e, t, r)
  }
  function Pn(e, t, r) {
      En(e, t, r),
      Sn(e, e.sel, e.cm ? e.cm.curOp.id : NaN, r)
  }
  function En(e, t, r) {
      (ye(e, "beforeSelectionChange") || e.cm && ye(e.cm, "beforeSelectionChange")) && (t = function(e, t, r) {
          var n = {
              ranges: t.ranges,
              update: function(t) {
                  this.ranges = [];
                  for (var r = 0; r < t.length; r++)
                      this.ranges[r] = new Al(G(e, t[r].anchor),G(e, t[r].head))
              },
              origin: r && r.origin
          };
          return ge(e, "beforeSelectionChange", e, n),
          e.cm && ge(e.cm, "beforeSelectionChange", e.cm, n),
          n.ranges == t.ranges ? t : ln(n.ranges, n.ranges.length - 1)
      }(e, t, r));
      var n = r && r.bias || (0 > P(t.primary().head, e.sel.primary().head) ? -1 : 1);
      zn(e, Rn(e, t, n, !0)),
      (!r || !1 !== r.scroll) && e.cm && yr(e.cm)
  }
  function zn(e, t) {
      t.equals(e.sel) || (e.sel = t,
      e.cm && (e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = !0,
      me(e.cm)),
      et(e, "cursorActivity", e))
  }
  function In(e) {
      zn(e, Rn(e, e.sel, null, !1))
  }
  function Rn(e, t, r, n) {
      for (var i, o = 0; o < t.ranges.length; o++) {
          var l = t.ranges[o]
            , s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o]
            , a = Gn(e, l.anchor, s && s.anchor, r, n)
            , u = Gn(e, l.head, s && s.head, r, n);
          (i || a != l.anchor || u != l.head) && (!i && (i = t.ranges.slice(0, o)),
          i[o] = new Al(a,u))
      }
      return i ? ln(i, t.primIndex) : t
  }
  function Bn(e, t, r, n, i) {
      var o = T(e, t.line);
      if (o.markedSpans)
          for (var l = 0; l < o.markedSpans.length; ++l) {
              var s = o.markedSpans[l]
                , a = s.marker;
              if ((null == s.from || (a.inclusiveLeft ? s.from <= t.ch : s.from < t.ch)) && (null == s.to || (a.inclusiveRight ? s.to >= t.ch : s.to > t.ch))) {
                  if (i && (ge(a, "beforeCursorEnter"),
                  a.explicitlyCleared)) {
                      if (o.markedSpans) {
                          --l;
                          continue
                      }
                      break
                  }
                  if (!a.atomic)
                      continue;
                  if (r) {
                      var u = a.find(0 > n ? 1 : -1)
                        , c = void 0;
                      if ((0 > n ? a.inclusiveRight : a.inclusiveLeft) && (u = Un(e, u, -n, u && u.line == t.line ? o : null)),
                      u && u.line == t.line && (c = P(u, r)) && (0 > n ? 0 > c : 0 < c))
                          return Bn(e, u, t, n, i)
                  }
                  var f = a.find(0 > n ? -1 : 1);
                  return (0 > n ? a.inclusiveLeft : a.inclusiveRight) && (f = Un(e, f, n, f.line == t.line ? o : null)),
                  f ? Bn(e, f, t, n, i) : null
              }
          }
      return t
  }
  function Gn(e, t, r, n, i) {
      var o = n || 1
        , l = Bn(e, t, r, o, i) || !i && Bn(e, t, r, o, !0) || Bn(e, t, r, -o, i) || !i && Bn(e, t, r, -o, !0);
      return l || (e.cantEdit = !0,
      F(e.first, 0))
  }
  function Un(e, t, r, n) {
      return 0 > r && 0 == t.ch ? t.line > e.first ? G(e, F(t.line - 1)) : null : 0 < r && t.ch == (n || T(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? F(t.line + 1, 0) : null : new F(t.line,t.ch + r)
  }
  function Vn(e) {
      e.setSelection(F(e.firstLine(), 0), F(e.lastLine()), Ko)
  }
  function Kn(e, t, r) {
      var n = {
          canceled: !1,
          from: t.from,
          to: t.to,
          text: t.text,
          origin: t.origin,
          cancel: function() {
              return n.canceled = !0
          }
      };
      return r && (n.update = function(t, r, i, o) {
          t && (n.from = G(e, t)),
          r && (n.to = G(e, r)),
          i && (n.text = i),
          void 0 !== o && (n.origin = o)
      }
      ),
      ge(e, "beforeChange", e, n),
      e.cm && ge(e.cm, "beforeChange", e.cm, n),
      n.canceled ? null : {
          from: n.from,
          to: n.to,
          text: n.text,
          origin: n.origin
      }
  }
  function jn(e, t, r) {
      if (e.cm) {
          if (!e.cm.curOp)
              return zr(e.cm, jn)(e, t, r);
          if (e.cm.state.suppressEdits)
              return
      }
      if (!(ye(e, "beforeChange") || e.cm && ye(e.cm, "beforeChange")) || (t = Kn(e, t, !0))) {
          var n = $o && !r && function(e, t, r) {
              var n = null;
              if (e.iter(t.line, r.line + 1, function(e) {
                  if (e.markedSpans)
                      for (var t, r = 0; r < e.markedSpans.length; ++r)
                          (t = e.markedSpans[r].marker).readOnly && (!n || -1 == h(n, t)) && (n || (n = [])).push(t)
              }),
              !n)
                  return null;
              for (var i = [{
                  from: t,
                  to: r
              }], o = 0; o < n.length; ++o)
                  for (var l, s = n[o], a = s.find(0), u = 0; u < i.length; ++u)
                      if (!(0 > P((l = i[u]).to, a.from) || 0 < P(l.from, a.to))) {
                          var c = [u, 1]
                            , f = P(l.from, a.from)
                            , d = P(l.to, a.to);
                          !(0 > f) && (s.inclusiveLeft || f) || c.push({
                              from: l.from,
                              to: a.from
                          }),
                          !(0 < d) && (s.inclusiveRight || d) || c.push({
                              from: a.to,
                              to: l.to
                          }),
                          i.splice.apply(i, c),
                          u += c.length - 3
                      }
              return i
          }(e, t.from, t.to);
          if (n)
              for (var i = n.length - 1; 0 <= i; --i)
                  Xn(e, {
                      from: n[i].from,
                      to: n[i].to,
                      text: i ? [""] : t.text,
                      origin: t.origin
                  });
          else
              Xn(e, t)
      }
  }
  function Xn(e, t) {
      if (1 != t.text.length || "" != t.text[0] || 0 != P(t.from, t.to)) {
          var r = cn(e, t);
          Cn(e, t, r, e.cm ? e.cm.curOp.id : NaN),
          qn(e, t, r, X(e, t));
          var n = [];
          vn(e, function(e, r) {
              r || -1 != h(n, e.history) || (Jn(e.history, t),
              n.push(e.history)),
              qn(e, t, null, X(e, t))
          })
      }
  }
  function Yn(e, t, r) {
      var n = e.cm && e.cm.state.suppressEdits;
      if (!n || r) {
          for (var i, o = e.history, l = e.sel, s = "undo" == t ? o.done : o.undone, a = "undo" == t ? o.undone : o.done, u = 0; u < s.length && (i = s[u],
          r ? !i.ranges || i.equals(e.sel) : i.ranges); u++)
              ;
          if (u != s.length) {
              for (o.lastOrigin = o.lastSelOrigin = null; ; ) {
                  if (!(i = s.pop()).ranges) {
                      if (n)
                          return void s.push(i);
                      break
                  }
                  if (Ln(i, a),
                  r && !i.equals(e.sel))
                      return void Pn(e, i, {
                          clearRedo: !1
                      });
                  l = i
              }
              var c = [];
              Ln(l, a),
              a.push({
                  changes: c,
                  generation: o.generation
              }),
              o.generation = i.generation || ++o.maxGeneration;
              for (var f, d = ye(e, "beforeChange") || e.cm && ye(e.cm, "beforeChange"), p = function(r) {
                  var n = i.changes[r];
                  if (n.origin = t,
                  d && !Kn(e, n, !1))
                      return s.length = 0,
                      {};
                  c.push(wn(e, n));
                  var o = r ? cn(e, n) : g(s);
                  qn(e, n, o, Nn(e, n)),
                  !r && e.cm && e.cm.scrollIntoView({
                      from: n.from,
                      to: an(n)
                  });
                  var l = [];
                  vn(e, function(e, t) {
                      t || -1 != h(l, e.history) || (Jn(e.history, n),
                      l.push(e.history)),
                      qn(e, n, null, Nn(e, n))
                  })
              }, v = i.changes.length - 1; 0 <= v; --v)
                  if (f = p(v))
                      return f.v
          }
      }
  }
  function _n(e, t) {
      if (0 != t && (e.first += t,
      e.sel = new Ol(v(e.sel.ranges, function(e) {
          return new Al(F(e.anchor.line + t, e.anchor.ch),F(e.head.line + t, e.head.ch))
      }),e.sel.primIndex),
      e.cm)) {
          Br(e.cm, e.first, e.first - t, t);
          for (var r = e.cm.display, n = r.viewFrom; n < r.viewTo; n++)
              Gr(e.cm, n, "gutter")
      }
  }
  function qn(e, t, r, n) {
      if (e.cm && !e.cm.curOp)
          return zr(e.cm, qn)(e, t, r, n);
      if (t.to.line < e.first)
          _n(e, t.text.length - 1 - (t.to.line - t.from.line));
      else if (!(t.from.line > e.lastLine())) {
          if (t.from.line < e.first) {
              var i = t.text.length - 1 - (e.first - t.from.line);
              _n(e, i),
              t = {
                  from: F(e.first, 0),
                  to: F(t.to.line + i, t.to.ch),
                  text: [g(t.text)],
                  origin: t.origin
              }
          }
          var o = e.lastLine();
          t.to.line > o && (t = {
              from: t.from,
              to: F(o, T(e, o).text.length),
              text: [t.text[0]],
              origin: t.origin
          }),
          t.removed = N(e, t.from, t.to),
          r || (r = cn(e, t)),
          e.cm ? function(e, t, r) {
              var n = e.doc
                , i = e.display
                , o = t.from
                , l = t.to
                , s = !1
                , a = o.line;
              e.options.lineWrapping || (a = M(ne(T(n, o.line))),
              n.iter(a, l.line + 1, function(e) {
                  if (e == i.maxLine)
                      return s = !0,
                      !0
              })),
              -1 < n.sel.contains(t.from, t.to) && me(e),
              gn(n, t, r, $t(e)),
              e.options.lineWrapping || (n.iter(a, o.line + t.text.length, function(e) {
                  var t = ue(e);
                  t > i.maxLineLength && (i.maxLine = e,
                  i.maxLineLength = t,
                  i.maxLineChanged = !0,
                  s = !1)
              }),
              s && (e.curOp.updateMaxLine = !0)),
              function(e, t) {
                  if (e.modeFrontier = fo(e.modeFrontier, t),
                  !(e.highlightFrontier < t - 10)) {
                      for (var r, n = e.first, i = t - 1; i > n; i--)
                          if ((r = T(e, i).stateAfter) && (!(r instanceof fl) || i + r.lookAhead < t)) {
                              n = i + 1;
                              break
                          }
                      e.highlightFrontier = fo(e.highlightFrontier, n)
                  }
              }(n, o.line),
              jr(e, 400);
              var u = t.text.length - (l.line - o.line) - 1;
              t.full ? Br(e) : o.line != l.line || 1 != t.text.length || pn(e.doc, t) ? Br(e, o.line, l.line + 1, u) : Gr(e, o.line, "text");
              var c = ye(e, "changes")
                , f = ye(e, "change");
              if (f || c) {
                  var h = {
                      from: o,
                      to: l,
                      text: t.text,
                      removed: t.removed,
                      origin: t.origin
                  };
                  f && et(e, "change", e, h),
                  c && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(h)
              }
              e.display.selForContextMenu = null
          }(e.cm, t, n) : gn(e, t, n),
          En(e, r, Ko)
      }
  }
  function $n(e, t, r, n, i) {
      var o;
      (n || (n = r),
      0 > P(n, r)) && (r = (o = [n, r])[0],
      n = o[1]);
      "string" == typeof t && (t = e.splitLines(t)),
      jn(e, {
          from: r,
          to: n,
          text: t,
          origin: i
      })
  }
  function Zn(e, t, r, n) {
      r < e.line ? e.line += n : t < e.line && (e.line = t,
      e.ch = 0)
  }
  function Qn(e, t, r, n) {
      for (var i = 0; i < e.length; ++i) {
          var o = e[i]
            , l = !0;
          if (o.ranges) {
              o.copied || ((o = e[i] = o.deepCopy()).copied = !0);
              for (var s = 0; s < o.ranges.length; s++)
                  Zn(o.ranges[s].anchor, t, r, n),
                  Zn(o.ranges[s].head, t, r, n)
          } else {
              for (var a, u = 0; u < o.changes.length; ++u)
                  if (r < (a = o.changes[u]).from.line)
                      a.from = F(a.from.line + n, a.from.ch),
                      a.to = F(a.to.line + n, a.to.ch);
                  else if (t <= a.to.line) {
                      l = !1;
                      break
                  }
              l || (e.splice(0, i + 1),
              i = 0)
          }
      }
  }
  function Jn(e, t) {
      var r = t.from.line
        , n = t.to.line
        , i = t.text.length - (n - r) - 1;
      Qn(e.done, r, n, i),
      Qn(e.undone, r, n, i)
  }
  function ei(e, t, r, n) {
      var i = t
        , o = t;
      return "number" == typeof t ? o = T(e, B(e, t)) : i = M(t),
      null == i ? null : (n(o, i) && e.cm && Gr(e.cm, i, r),
      o)
  }
  function ti(e) {
      this.lines = e,
      this.parent = null;
      for (var t = 0, r = 0; r < e.length; ++r)
          e[r].parent = this,
          t += e[r].height;
      this.height = t
  }
  function ri(e) {
      this.children = e;
      for (var t, r = 0, n = 0, i = 0; i < e.length; ++i)
          r += (t = e[i]).chunkSize(),
          n += t.height,
          t.parent = this;
      this.size = r,
      this.height = n,
      this.parent = null
  }
  function ni(e, t, r) {
      ae(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && mr(e, r)
  }
  function ii(e, t, r, n, o) {
      if (n && n.shared)
          return function(e, t, r, n, i) {
              (n = c(n)).shared = !1;
              var o = [ii(e, t, r, n, i)]
                , l = o[0]
                , s = n.widgetNode;
              return vn(e, function(e) {
                  s && (n.widgetNode = s.cloneNode(!0)),
                  o.push(ii(e, G(e, t), G(e, r), n, i));
                  for (var a = 0; a < e.linked.length; ++a)
                      if (e.linked[a].isParent)
                          return;
                  l = g(o)
              }),
              new Hl(o,l)
          }(e, t, r, n, o);
      if (e.cm && !e.cm.curOp)
          return zr(e.cm, ii)(e, t, r, n, o);
      var l = new Dl(e,o)
        , s = P(t, r);
      if (n && c(n, l, !1),
      0 < s || 0 == s && !1 !== l.clearWhenEmpty)
          return l;
      if (l.replacedWith && (l.collapsed = !0,
      l.widgetNode = i("span", [l.replacedWith], "CodeMirror-widget"),
      !n.handleMouseEvents && l.widgetNode.setAttribute("cm-ignore-events", "true"),
      n.insertLeft && (l.widgetNode.insertLeft = !0)),
      l.collapsed) {
          if (re(e, t.line, t, r, l) || t.line != r.line && re(e, r.line, t, r, l))
              throw new Error("Inserting collapsed marker partially overlapping an existing one");
          Zo = !0
      }
      l.addToHistory && Cn(e, {
          from: t,
          to: r,
          origin: "markText"
      }, e.sel, NaN);
      var a, u = t.line, f = e.cm;
      if (e.iter(u, r.line + 1, function(e) {
          f && l.collapsed && !f.options.lineWrapping && ne(e) == f.display.maxLine && (a = !0),
          l.collapsed && u != t.line && A(e, 0),
          function(e, t) {
              e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t],
              t.marker.attachLine(e)
          }(e, new V(l,u == t.line ? t.ch : null,u == r.line ? r.ch : null)),
          ++u
      }),
      l.collapsed && e.iter(t.line, r.line + 1, function(t) {
          le(e, t) && A(t, 0)
      }),
      l.clearOnEnter && tl(l, "beforeCursorEnter", function() {
          return l.clear()
      }),
      l.readOnly && ($o = !0,
      (e.history.done.length || e.history.undone.length) && e.clearHistory()),
      l.collapsed && (l.id = ++Wl,
      l.atomic = !0),
      f) {
          if (a && (f.curOp.updateMaxLine = !0),
          l.collapsed)
              Br(f, t.line, r.line + 1);
          else if (l.className || l.title || l.startStyle || l.endStyle || l.css)
              for (var h = t.line; h <= r.line; h++)
                  Gr(f, h, "text");
          l.atomic && In(f.doc),
          et(f, "markerAdded", f, l)
      }
      return l
  }
  function oi(e) {
      return e.findMarks(F(e.first, 0), e.clipPos(F(e.lastLine())), function(e) {
          return e.parent
      })
  }
  function li(e) {
      for (var t = function(t) {
          var r = e[t]
            , n = [r.primary.doc];
          vn(r.primary.doc, function(e) {
              return n.push(e)
          });
          for (var i, o = 0; o < r.markers.length; o++)
              i = r.markers[o],
              -1 == h(n, i.doc) && (i.parent = null,
              r.markers.splice(o--, 1))
      }, r = 0; r < e.length; r++)
          t(r)
  }
  function si(e) {
      var t = this;
      if (ci(t),
      !ve(t, e) && !pt(t.display, e)) {
          we(e),
          bo && (El = +new Date);
          var r = Qt(t, e, !0)
            , n = e.dataTransfer.files;
          if (r && !t.isReadOnly())
              if (n && n.length && window.FileReader && window.File)
                  for (var i = n.length, o = Array(i), l = 0, s = function(e, n) {
                      if (!t.options.allowDropFileTypes || -1 != h(t.options.allowDropFileTypes, e.type)) {
                          var s = new FileReader;
                          s.onload = zr(t, function() {
                              var e = s.result;
                              if (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""),
                              o[n] = e,
                              ++l == i) {
                                  var a = {
                                      from: r = G(t.doc, r),
                                      to: r,
                                      text: t.doc.splitLines(o.join(t.doc.lineSeparator())),
                                      origin: "paste"
                                  };
                                  jn(t.doc, a),
                                  Fn(t.doc, sn(r, an(a)))
                              }
                          }),
                          s.readAsText(e)
                      }
                  }, a = 0; a < i; ++a)
                      s(n[a], a);
              else {
                  if (t.state.draggingText && -1 < t.doc.sel.contains(r))
                      return t.state.draggingText(e),
                      void setTimeout(function() {
                          return t.display.input.focus()
                      }, 20);
                  try {
                      var u = e.dataTransfer.getData("Text");
                      if (u) {
                          var c;
                          if (t.state.draggingText && !t.state.draggingText.copy && (c = t.listSelections()),
                          En(t.doc, sn(r, r)),
                          c)
                              for (var f = 0; f < c.length; ++f)
                                  $n(t.doc, "", c[f].anchor, c[f].head, "drag");
                          t.replaceSelection(u, "around", "paste"),
                          t.display.input.focus()
                      }
                  } catch (e) {}
              }
      }
  }
  function ai(e, t) {
      if (bo && (!e.state.draggingText || 100 > +new Date - El))
          Se(t);
      else if (!ve(e, t) && !pt(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()),
      t.dataTransfer.effectAllowed = "copyMove",
      t.dataTransfer.setDragImage && !ko)) {
          var r = n("img", null, null, "position: fixed; left: 0; top: 0;");
          r.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
          Lo && (r.width = r.height = 1,
          e.display.wrapper.appendChild(r),
          r._top = r.offsetTop),
          t.dataTransfer.setDragImage(r, 0, 0),
          Lo && r.parentNode.removeChild(r)
      }
  }
  function ui(e, t) {
      var i = Qt(e, t);
      if (i) {
          var o = document.createDocumentFragment();
          rr(e, i, o),
          e.display.dragCursor || (e.display.dragCursor = n("div", null, "CodeMirror-cursors CodeMirror-dragcursors"),
          e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)),
          r(e.display.dragCursor, o)
      }
  }
  function ci(e) {
      e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor),
      e.display.dragCursor = null)
  }
  function fi(e) {
      if (document.getElementsByClassName)
          for (var t, r = document.getElementsByClassName("CodeMirror"), n = 0; n < r.length; n++)
              (t = r[n].CodeMirror) && e(t)
  }
  function hi() {
      var e;
      zl || (tl(window, "resize", function() {
          null == e && (e = setTimeout(function() {
              e = null,
              fi(di)
          }, 100))
      }),
      tl(window, "blur", function() {
          return fi(ur)
      }),
      zl = !0)
  }
  function di(e) {
      var t = e.display;
      t.lastWrapHeight == t.wrapper.clientHeight && t.lastWrapWidth == t.wrapper.clientWidth || (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null,
      t.scrollbarsClipped = !1,
      e.setSize())
  }
  function pi(e) {
      var t = e.split(/-(?!$)/);
      e = t[t.length - 1];
      for (var r, n, i, o, l, s = 0; s < t.length - 1; s++)
          if (l = t[s],
          /^(cmd|meta|m)$/i.test(l))
              o = !0;
          else if (/^a(lt)?$/i.test(l))
              r = !0;
          else if (/^(c|ctrl|control)$/i.test(l))
              n = !0;
          else {
              if (!/^s(hift)?$/i.test(l))
                  throw new Error("Unrecognized modifier name: " + l);
              i = !0
          }
      return r && (e = "Alt-" + e),
      n && (e = "Ctrl-" + e),
      o && (e = "Cmd-" + e),
      i && (e = "Shift-" + e),
      e
  }
  function gi(e) {
      var t = {};
      for (var r in e)
          if (e.hasOwnProperty(r)) {
              var n = e[r];
              if (/^(name|fallthrough|(de|at)tach)$/.test(r))
                  continue;
              if ("..." == n) {
                  delete e[r];
                  continue
              }
              for (var i = v(r.split(" "), pi), o = 0; o < i.length; o++) {
                  var l = void 0
                    , s = void 0;
                  o == i.length - 1 ? (s = i.join(" "),
                  l = n) : (s = i.slice(0, o + 1).join(" "),
                  l = "...");
                  var a = t[s];
                  if (a) {
                      if (a != l)
                          throw new Error("Inconsistent bindings for " + s)
                  } else
                      t[s] = l
              }
              delete e[r]
          }
      for (var u in t)
          e[u] = t[u];
      return e
  }
  function vi(e, t, r, n) {
      var i = (t = wi(t)).call ? t.call(e, n) : t[e];
      if (!1 === i)
          return "nothing";
      if ("..." === i)
          return "multi";
      if (null != i && r(i))
          return "handled";
      if (t.fallthrough) {
          if ("[object Array]" != Object.prototype.toString.call(t.fallthrough))
              return vi(e, t.fallthrough, r, n);
          for (var o, l = 0; l < t.fallthrough.length; l++)
              if (o = vi(e, t.fallthrough[l], r, n))
                  return o
      }
  }
  function mi(e) {
      var t = "string" == typeof e ? e : Il[e.keyCode];
      return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t
  }
  function yi(e, t, r) {
      var n = e;
      return t.altKey && "Alt" != n && (e = "Alt-" + e),
      (Eo ? t.metaKey : t.ctrlKey) && "Ctrl" != n && (e = "Ctrl-" + e),
      (Eo ? t.ctrlKey : t.metaKey) && "Cmd" != n && (e = "Cmd-" + e),
      !r && t.shiftKey && "Shift" != n && (e = "Shift-" + e),
      e
  }
  function bi(e, t) {
      if (Lo && 34 == e.keyCode && e.char)
          return !1;
      var r = Il[e.keyCode];
      return !(null == r || e.altGraphKey) && (3 == e.keyCode && e.code && (r = e.code),
      yi(r, e, t))
  }
  function wi(e) {
      return "string" == typeof e ? Ul[e] : e
  }
  function xi(e, t) {
      for (var r, n = e.doc.sel.ranges, i = [], o = 0; o < n.length; o++) {
          for (r = t(n[o]); i.length && 0 >= P(r.from, g(i).to); ) {
              var l = i.pop();
              if (0 > P(l.from, r.from)) {
                  r.from = l.from;
                  break
              }
          }
          i.push(r)
      }
      Er(e, function() {
          for (var t = i.length - 1; 0 <= t; t--)
              $n(e.doc, "", i[t].from, i[t].to, "+delete");
          yr(e)
      })
  }
  function Ci(e, t, r) {
      var n = S(e.text, t + r, r);
      return 0 > n || n > e.text.length ? null : n
  }
  function Si(e, t, r) {
      var n = Ci(e, t.ch, r);
      return null == n ? null : new F(t.line,n,0 > r ? "after" : "before")
  }
  function Li(e, t, r, n, i) {
      if (e) {
          var o = he(r, t.doc.direction);
          if (o) {
              var l, s = 0 > i ? g(o) : o[0], a = 0 > i == (1 == s.level) ? "after" : "before";
              if (0 < s.level || "rtl" == t.doc.direction) {
                  var u = kt(t, r);
                  l = 0 > i ? r.text.length - 1 : 0;
                  var c = Tt(t, u, l).top;
                  l = L(function(e) {
                      return Tt(t, u, e).top == c
                  }, 0 > i == (1 == s.level) ? s.from : s.to - 1, l),
                  "before" == a && (l = Ci(r, l, 1))
              } else
                  l = 0 > i ? s.to : s.from;
              return new F(n,l,a)
          }
      }
      return new F(n,0 > i ? r.text.length : 0,0 > i ? "before" : "after")
  }
  function ki(e, t) {
      var r = T(e.doc, t)
        , n = ne(r);
      return n != r && (t = M(n)),
      Li(!0, e, n, t, 1)
  }
  function Ti(e, t) {
      var r = T(e.doc, t)
        , n = function(e) {
          for (var t; t = te(e); )
              e = t.find(1, !0).line;
          return e
      }(r);
      return n != r && (t = M(n)),
      Li(!0, e, r, t, -1)
  }
  function Ni(e, t) {
      var r = ki(e, t.line)
        , n = T(e.doc, r.line)
        , i = he(n, e.doc.direction);
      if (!i || 0 == i[0].level) {
          var o = ao(0, n.text.search(/\S/))
            , l = t.line == r.line && t.ch <= o && t.ch;
          return F(r.line, l ? 0 : o, r.sticky)
      }
      return r
  }
  function Oi(e, t, r) {
      if ("string" == typeof t && !(t = Vl[t]))
          return !1;
      e.display.input.ensurePolled();
      var n = e.display.shift
        , i = !1;
      try {
          e.isReadOnly() && (e.state.suppressEdits = !0),
          r && (e.display.shift = !1),
          i = t(e) != Vo
      } finally {
          e.display.shift = n,
          e.state.suppressEdits = !1
      }
      return i
  }
  function Ai(e, t, r, n) {
      var i = e.state.keySeq;
      if (i) {
          if (mi(t))
              return "handled";
          if (/\'$/.test(t) ? e.state.keySeq = null : Kl.set(50, function() {
              e.state.keySeq == i && (e.state.keySeq = null,
              e.display.input.reset())
          }),
          Mi(e, i + " " + t, r, n))
              return !0
      }
      return Mi(e, t, r, n)
  }
  function Mi(e, t, r, n) {
      var i = function(e, t, r) {
          for (var n, i = 0; i < e.state.keyMaps.length; i++)
              if (n = vi(t, e.state.keyMaps[i], r, e))
                  return n;
          return e.options.extraKeys && vi(t, e.options.extraKeys, r, e) || vi(t, e.options.keyMap, r, e)
      }(e, t, n);
      return "multi" == i && (e.state.keySeq = t),
      "handled" == i && et(e, "keyHandled", e, t, r),
      ("handled" == i || "multi" == i) && (we(r),
      or(e)),
      !!i
  }
  function Wi(e, t) {
      var r = bi(t, !0);
      return !!r && (t.shiftKey && !e.state.keySeq ? Ai(e, "Shift-" + r, t, function(t) {
          return Oi(e, t, !0)
      }) || Ai(e, r, t, function(t) {
          if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion)
              return Oi(e, t)
      }) : Ai(e, r, t, function(t) {
          return Oi(e, t)
      }))
  }
  function Di(e) {
      var t = this;
      if (t.curOp.focus = l(),
      !ve(t, e)) {
          bo && 11 > wo && 27 == e.keyCode && (e.returnValue = !1);
          var r = e.keyCode;
          t.display.shift = 16 == r || e.shiftKey;
          var n = Wi(t, e);
          Lo && (jl = n ? r : null,
          !n && 88 == r && !ol && (Wo ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")),
          18 != r || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || function(e) {
              function t(e) {
                  18 != e.keyCode && e.altKey || (Io(r, "CodeMirror-crosshair"),
                  pe(document, "keyup", t),
                  pe(document, "mouseover", t))
              }
              var r = e.display.lineDiv;
              s(r, "CodeMirror-crosshair"),
              tl(document, "keyup", t),
              tl(document, "mouseover", t)
          }(t)
      }
  }
  function Hi(e) {
      16 == e.keyCode && (this.doc.sel.shift = !1),
      ve(this, e)
  }
  function Fi(e) {
      var t = this;
      if (!(pt(t.display, e) || ve(t, e) || e.ctrlKey && !e.altKey || Wo && e.metaKey)) {
          var r = e.keyCode
            , n = e.charCode;
          if (Lo && r == jl)
              return jl = null,
              void we(e);
          if (!Lo || e.which && !(10 > e.which) || !Wi(t, e)) {
              var i = oo(null == n ? r : n);
              "\b" == i || function(e, t, r) {
                  return Ai(e, "'" + r + "'", t, function(t) {
                      return Oi(e, t, !0)
                  })
              }(t, e, i) || t.display.input.onKeyPress(e)
          }
      }
  }
  function Pi(e) {
      var t = this
        , r = t.display;
      if (!(ve(t, e) || r.activeTouch && r.input.supportsTouch())) {
          if (r.input.ensurePolled(),
          r.shift = e.shiftKey,
          pt(r, e))
              return void (xo || (r.scroller.draggable = !1,
              setTimeout(function() {
                  return r.scroller.draggable = !0
              }, 100)));
          if (!Ii(t, e)) {
              var n = Qt(t, e)
                , i = ke(e)
                , o = n ? function(e, t) {
                  var r = +new Date;
                  return _l && _l.compare(r, e, t) ? (Yl = _l = null,
                  "triple") : Yl && Yl.compare(r, e, t) ? (_l = new Xl(r,e,t),
                  Yl = null,
                  "double") : (Yl = new Xl(r,e,t),
                  _l = null,
                  "single")
              }(n, i) : "single";
              window.focus(),
              1 == i && t.state.selectingText && t.state.selectingText(e),
              n && function(e, t, r, n, i) {
                  var o = "Click";
                  return "double" == n ? o = "Double" + o : "triple" == n && (o = "Triple" + o),
                  Ai(e, yi(o = (1 == t ? "Left" : 2 == t ? "Middle" : "Right") + o, i), i, function(t) {
                      if ("string" == typeof t && (t = Vl[t]),
                      !t)
                          return !1;
                      var n = !1;
                      try {
                          e.isReadOnly() && (e.state.suppressEdits = !0),
                          n = t(e, r) != Vo
                      } finally {
                          e.state.suppressEdits = !1
                      }
                      return n
                  })
              }(t, i, n, o, e) || (1 == i ? n ? function(e, t, r, n) {
                  bo ? setTimeout(u(lr, e), 0) : e.curOp.focus = l();
                  var i, o = function(e, t, r) {
                      var n = e.getOption("configureMouse")
                        , i = n ? n(e, t, r) : {};
                      if (null == i.unit) {
                          var o = Do ? r.shiftKey && r.metaKey : r.altKey;
                          i.unit = o ? "rectangle" : "single" == t ? "char" : "double" == t ? "word" : "line"
                      }
                      return (null == i.extend || e.doc.extend) && (i.extend = e.doc.extend || r.shiftKey),
                      null == i.addNew && (i.addNew = Wo ? r.metaKey : r.ctrlKey),
                      null == i.moveOnDrag && (i.moveOnDrag = Wo ? !r.altKey : !r.ctrlKey),
                      i
                  }(e, r, n), s = e.doc.sel;
                  e.options.dragDrop && rl && !e.isReadOnly() && "single" == r && -1 < (i = s.contains(t)) && (0 > P((i = s.ranges[i]).from(), t) || 0 < t.xRel) && (0 < P(i.to(), t) || 0 > t.xRel) ? function(e, t, r, n) {
                      var i = e.display
                        , o = !1
                        , l = zr(e, function(t) {
                          xo && (i.scroller.draggable = !1),
                          e.state.draggingText = !1,
                          pe(i.wrapper.ownerDocument, "mouseup", l),
                          pe(i.wrapper.ownerDocument, "mousemove", s),
                          pe(i.scroller, "dragstart", a),
                          pe(i.scroller, "drop", l),
                          o || (we(t),
                          !n.addNew && Mn(e.doc, r, null, null, n.extend),
                          xo || bo && 9 == wo ? setTimeout(function() {
                              i.wrapper.ownerDocument.body.focus(),
                              i.input.focus()
                          }, 20) : i.input.focus())
                      })
                        , s = function(e) {
                          o = o || 10 <= so(t.clientX - e.clientX) + so(t.clientY - e.clientY)
                      }
                        , a = function() {
                          return o = !0
                      };
                      xo && (i.scroller.draggable = !0),
                      e.state.draggingText = l,
                      l.copy = !n.moveOnDrag,
                      i.scroller.dragDrop && i.scroller.dragDrop(),
                      tl(i.wrapper.ownerDocument, "mouseup", l),
                      tl(i.wrapper.ownerDocument, "mousemove", s),
                      tl(i.scroller, "dragstart", a),
                      tl(i.scroller, "drop", l),
                      sr(e),
                      setTimeout(function() {
                          return i.input.focus()
                      }, 20)
                  }(e, n, t, o) : function(e, t, r, n) {
                      function i(t) {
                          if (0 != P(m, t))
                              if (m = t,
                              "rectangle" == n.unit) {
                                  for (var i = [], o = e.options.tabSize, l = f(T(u, r.line).text, r.ch, o), s = f(T(u, t.line).text, t.ch, o), a = fo(l, s), g = ao(l, s), v = fo(r.line, t.line), y = fo(e.lastLine(), ao(r.line, t.line)); v <= y; v++) {
                                      var b = T(u, v).text
                                        , w = d(b, a, o);
                                      a == g ? i.push(new Al(F(v, w),F(v, w))) : b.length > w && i.push(new Al(F(v, w),F(v, d(b, g, o))))
                                  }
                                  i.length || i.push(new Al(r,r)),
                                  Pn(u, ln(p.ranges.slice(0, h).concat(i), h), {
                                      origin: "*mouse",
                                      scroll: !1
                                  }),
                                  e.scrollIntoView(t)
                              } else {
                                  var x, C = c, S = Ei(e, t, n.unit), L = C.anchor;
                                  0 < P(S.anchor, L) ? (x = S.head,
                                  L = R(C.from(), S.anchor)) : (x = S.anchor,
                                  L = I(C.to(), S.head));
                                  var k = p.ranges.slice(0);
                                  k[h] = function(e, t) {
                                      var r = t.anchor
                                        , n = t.head
                                        , i = T(e.doc, r.line);
                                      if (0 == P(r, n) && r.sticky == n.sticky)
                                          return t;
                                      var o = he(i);
                                      if (!o)
                                          return t;
                                      var l = fe(o, r.ch, r.sticky)
                                        , s = o[l];
                                      if (s.from != r.ch && s.to != r.ch)
                                          return t;
                                      var a, u = l + (s.from == r.ch == (1 != s.level) ? 0 : 1);
                                      if (0 == u || u == o.length)
                                          return t;
                                      if (n.line != r.line)
                                          a = 0 < (n.line - r.line) * ("ltr" == e.doc.direction ? 1 : -1);
                                      else {
                                          var c = fe(o, n.ch, n.sticky)
                                            , f = c - l || (n.ch - r.ch) * (1 == s.level ? -1 : 1);
                                          a = c == u - 1 || c == u ? 0 > f : 0 < f
                                      }
                                      var h = o[u + (a ? -1 : 0)]
                                        , d = a == (1 == h.level)
                                        , p = d ? h.from : h.to
                                        , g = d ? "after" : "before";
                                      return r.ch == p && r.sticky == g ? t : new Al(new F(r.line,p,g),n)
                                  }(e, new Al(G(u, L),x)),
                                  Pn(u, ln(k, h), jo)
                              }
                      }
                      function o(t) {
                          var r = ++b
                            , s = Qt(e, t, !0, "rectangle" == n.unit);
                          if (s)
                              if (0 != P(s, m)) {
                                  e.curOp.focus = l(),
                                  i(s);
                                  var c = hr(a, u);
                                  (s.line >= c.to || s.line < c.from) && setTimeout(zr(e, function() {
                                      b == r && o(t)
                                  }), 150)
                              } else {
                                  var f = t.clientY < y.top ? -20 : t.clientY > y.bottom ? 20 : 0;
                                  f && setTimeout(zr(e, function() {
                                      b != r || (a.scroller.scrollTop += f,
                                      o(t))
                                  }), 50)
                              }
                      }
                      function s(t) {
                          e.state.selectingText = !1,
                          b = 1 / 0,
                          we(t),
                          a.input.focus(),
                          pe(a.wrapper.ownerDocument, "mousemove", w),
                          pe(a.wrapper.ownerDocument, "mouseup", x),
                          u.history.lastSelOrigin = null
                      }
                      var a = e.display
                        , u = e.doc;
                      we(t);
                      var c, h, p = u.sel, g = p.ranges;
                      if (n.addNew && !n.extend ? (h = u.sel.contains(r),
                      c = -1 < h ? g[h] : new Al(r,r)) : (c = u.sel.primary(),
                      h = u.sel.primIndex),
                      "rectangle" == n.unit)
                          n.addNew || (c = new Al(r,r)),
                          r = Qt(e, t, !0, !0),
                          h = -1;
                      else {
                          var v = Ei(e, r, n.unit);
                          c = n.extend ? An(c, v.anchor, v.head, n.extend) : v
                      }
                      n.addNew ? -1 == h ? (h = g.length,
                      Pn(u, ln(g.concat([c]), h), {
                          scroll: !1,
                          origin: "*mouse"
                      })) : 1 < g.length && g[h].empty() && "char" == n.unit && !n.extend ? (Pn(u, ln(g.slice(0, h).concat(g.slice(h + 1)), 0), {
                          scroll: !1,
                          origin: "*mouse"
                      }),
                      p = u.sel) : Dn(u, h, c, jo) : (h = 0,
                      Pn(u, new Ol([c],0), jo),
                      p = u.sel);
                      var m = r
                        , y = a.wrapper.getBoundingClientRect()
                        , b = 0
                        , w = zr(e, function(e) {
                          ke(e) ? o(e) : s(e)
                      })
                        , x = zr(e, s);
                      e.state.selectingText = x,
                      tl(a.wrapper.ownerDocument, "mousemove", w),
                      tl(a.wrapper.ownerDocument, "mouseup", x)
                  }(e, n, t, o)
              }(t, n, o, e) : Le(e) == r.scroller && we(e) : 2 == i ? (n && Mn(t.doc, n),
              setTimeout(function() {
                  return r.input.focus()
              }, 20)) : 3 == i && (zo ? Ri(t, e) : sr(t)))
          }
      }
  }
  function Ei(e, t, r) {
      if ("char" == r)
          return new Al(t,t);
      if ("word" == r)
          return e.findWordAt(t);
      if ("line" == r)
          return new Al(F(t.line, 0),G(e.doc, F(t.line + 1, 0)));
      var n = r(e, t);
      return new Al(n.from,n.to)
  }
  function zi(e, t, r, n) {
      var i, o;
      if (t.touches)
          i = t.touches[0].clientX,
          o = t.touches[0].clientY;
      else
          try {
              i = t.clientX,
              o = t.clientY
          } catch (e) {
              return !1
          }
      if (i >= uo(e.display.gutters.getBoundingClientRect().right))
          return !1;
      n && we(t);
      var l = e.display
        , s = l.lineDiv.getBoundingClientRect();
      if (o > s.bottom || !ye(e, r))
          return Ce(t);
      o -= s.top - l.viewOffset;
      for (var a, u = 0; u < e.options.gutters.length; ++u)
          if ((a = l.gutters.childNodes[u]) && a.getBoundingClientRect().right >= i) {
              return ge(e, r, e, W(e.doc, o), e.options.gutters[u], t),
              Ce(t)
          }
  }
  function Ii(e, t) {
      return zi(e, t, "gutterClick", !0)
  }
  function Ri(e, t) {
      pt(e.display, t) || function(e, t) {
          return !!ye(e, "gutterContextMenu") && zi(e, t, "gutterContextMenu", !1)
      }(e, t) || ve(e, t, "contextmenu") || e.display.input.onContextMenu(t)
  }
  function Bi(e) {
      e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"),
      Wt(e)
  }
  function Gi(e) {
      en(e),
      Br(e),
      dr(e)
  }
  function Ui(e, t, r) {
      if (!t != !(r && r != ql)) {
          var n = e.display.dragFunctions
            , i = t ? tl : pe;
          i(e.display.scroller, "dragstart", n.start),
          i(e.display.scroller, "dragenter", n.enter),
          i(e.display.scroller, "dragover", n.over),
          i(e.display.scroller, "dragleave", n.leave),
          i(e.display.scroller, "drop", n.drop)
      }
  }
  function Vi(e) {
      e.options.lineWrapping ? (s(e.display.wrapper, "CodeMirror-wrap"),
      e.display.sizer.style.minWidth = "",
      e.display.sizerWidth = null) : (Io(e.display.wrapper, "CodeMirror-wrap"),
      ce(e)),
      Zt(e),
      Br(e),
      Wt(e),
      setTimeout(function() {
          return Tr(e)
      }, 100)
  }
  function Ki(e, t) {
      var r = this;
      if (!(this instanceof Ki))
          return new Ki(e,t);
      this.options = t = t ? c(t) : {},
      c($l, t, !1),
      tn(t);
      var n = t.value;
      "string" == typeof n && (n = new Pl(n,t.mode,null,t.lineSeparator,t.direction)),
      this.doc = n;
      var i = new Ki.inputStyles[t.inputStyle](this)
        , o = this.display = new k(e,n,i);
      for (var l in o.wrapper.CodeMirror = this,
      en(this),
      Bi(this),
      t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"),
      Or(this),
      this.state = {
          keyMaps: [],
          overlays: [],
          modeGen: 0,
          overwrite: !1,
          delayingBlurEvent: !1,
          focused: !1,
          suppressEdits: !1,
          pasteIncoming: !1,
          cutIncoming: !1,
          selectingText: !1,
          draggingText: !1,
          highlight: new Bo,
          keySeq: null,
          specialChars: null
      },
      t.autofocus && !Mo && o.input.focus(),
      bo && 11 > wo && setTimeout(function() {
          return r.display.input.reset(!0)
      }, 20),
      function(e) {
          function t() {
              n.activeTouch && (i = setTimeout(function() {
                  return n.activeTouch = null
              }, 1e3),
              (o = n.activeTouch).end = +new Date)
          }
          function r(e, t) {
              if (null == t.left)
                  return !0;
              var r = t.left - e.left
                , n = t.top - e.top;
              return 400 < r * r + n * n
          }
          var n = e.display;
          tl(n.scroller, "mousedown", zr(e, Pi)),
          tl(n.scroller, "dblclick", bo && 11 > wo ? zr(e, function(t) {
              if (!ve(e, t)) {
                  var r = Qt(e, t);
                  if (r && !Ii(e, t) && !pt(e.display, t)) {
                      we(t);
                      var n = e.findWordAt(r);
                      Mn(e.doc, n.anchor, n.head)
                  }
              }
          }) : function(t) {
              return ve(e, t) || we(t)
          }
          ),
          zo || tl(n.scroller, "contextmenu", function(t) {
              return Ri(e, t)
          });
          var i, o = {
              end: 0
          };
          tl(n.scroller, "touchstart", function(t) {
              if (!ve(e, t) && !function(e) {
                  if (1 != e.touches.length)
                      return !1;
                  var t = e.touches[0];
                  return 1 >= t.radiusX && 1 >= t.radiusY
              }(t) && !Ii(e, t)) {
                  n.input.ensurePolled(),
                  clearTimeout(i);
                  var r = +new Date;
                  n.activeTouch = {
                      start: r,
                      moved: !1,
                      prev: 300 >= r - o.end ? o : null
                  },
                  1 == t.touches.length && (n.activeTouch.left = t.touches[0].pageX,
                  n.activeTouch.top = t.touches[0].pageY)
              }
          }),
          tl(n.scroller, "touchmove", function() {
              n.activeTouch && (n.activeTouch.moved = !0)
          }),
          tl(n.scroller, "touchend", function(i) {
              var o = n.activeTouch;
              if (o && !pt(n, i) && null != o.left && !o.moved && 300 > new Date - o.start) {
                  var l, s = e.coordsChar(n.activeTouch, "page");
                  l = !o.prev || r(o, o.prev) ? new Al(s,s) : !o.prev.prev || r(o, o.prev.prev) ? e.findWordAt(s) : new Al(F(s.line, 0),G(e.doc, F(s.line + 1, 0))),
                  e.setSelection(l.anchor, l.head),
                  e.focus(),
                  we(i)
              }
              t()
          }),
          tl(n.scroller, "touchcancel", t),
          tl(n.scroller, "scroll", function() {
              n.scroller.clientHeight && (Cr(e, n.scroller.scrollTop),
              Lr(e, n.scroller.scrollLeft, !0),
              ge(e, "scroll", e))
          }),
          tl(n.scroller, "mousewheel", function(t) {
              return on(e, t)
          }),
          tl(n.scroller, "DOMMouseScroll", function(t) {
              return on(e, t)
          }),
          tl(n.wrapper, "scroll", function() {
              return n.wrapper.scrollTop = n.wrapper.scrollLeft = 0
          }),
          n.dragFunctions = {
              enter: function(t) {
                  ve(e, t) || Se(t)
              },
              over: function(t) {
                  ve(e, t) || (ui(e, t),
                  Se(t))
              },
              start: function(t) {
                  return ai(e, t)
              },
              drop: zr(e, si),
              leave: function(t) {
                  ve(e, t) || ci(e)
              }
          };
          var l = n.input.getField();
          tl(l, "keyup", function(t) {
              return Hi.call(e, t)
          }),
          tl(l, "keydown", zr(e, Di)),
          tl(l, "keypress", zr(e, Fi)),
          tl(l, "focus", function(t) {
              return ar(e, t)
          }),
          tl(l, "blur", function(t) {
              return ur(e, t)
          })
      }(this),
      hi(),
      Ar(this),
      this.curOp.forceUpdate = !0,
      mn(this, n),
      t.autofocus && !Mo || this.hasFocus() ? setTimeout(u(ar, this), 20) : ur(this),
      Zl)
          Zl.hasOwnProperty(l) && Zl[l](r, t[l], ql);
      pr(this),
      t.finishInit && t.finishInit(this);
      for (var s = 0; s < Ql.length; ++s)
          Ql[s](r);
      Mr(this),
      xo && t.lineWrapping && "optimizelegibility" == getComputedStyle(o.lineDiv).textRendering && (o.lineDiv.style.textRendering = "auto")
  }
  function ji(e, t, r, n) {
      var i, o = e.doc;
      null == r && (r = "add"),
      "smart" == r && (o.mode.indent ? i = ze(e, t).state : r = "prev");
      var l = e.options.tabSize
        , s = T(o, t)
        , a = f(s.text, null, l);
      s.stateAfter && (s.stateAfter = null);
      var u, c = s.text.match(/^\s*/)[0];
      if (n || /\S/.test(s.text)) {
          if ("smart" == r && ((u = o.mode.indent(i, s.text.slice(c.length), s.text)) == Vo || 150 < u)) {
              if (!n)
                  return;
              r = "prev"
          }
      } else
          u = 0,
          r = "not";
      "prev" == r ? u = t > o.first ? f(T(o, t - 1).text, null, l) : 0 : "add" == r ? u = a + e.options.indentUnit : "subtract" == r ? u = a - e.options.indentUnit : "number" == typeof r && (u = a + r),
      u = ao(0, u);
      var h = ""
        , d = 0;
      if (e.options.indentWithTabs)
          for (var g = uo(u / l); g; --g)
              d += l,
              h += "\t";
      if (d < u && (h += p(u - d)),
      h != c)
          return $n(o, h, F(t, 0), F(t, c.length), "+input"),
          s.stateAfter = null,
          !0;
      for (var v, m = 0; m < o.sel.ranges.length; m++)
          if ((v = o.sel.ranges[m]).head.line == t && v.head.ch < c.length) {
              var y = F(t, c.length);
              Dn(o, m, new Al(y,y));
              break
          }
  }
  function Xi(e) {
      Jl = e
  }
  function Yi(e, t, r, n, i) {
      var o = e.doc;
      e.display.shift = !1,
      n || (n = o.sel);
      var l = e.state.pasteIncoming || "paste" == i
        , s = nl(t)
        , a = null;
      if (l && 1 < n.ranges.length)
          if (Jl && Jl.text.join("\n") == t) {
              if (0 == n.ranges.length % Jl.text.length) {
                  a = [];
                  for (var u = 0; u < Jl.text.length; u++)
                      a.push(o.splitLines(Jl.text[u]))
              }
          } else
              s.length == n.ranges.length && e.options.pasteLinesPerSelection && (a = v(s, function(e) {
                  return [e]
              }));
      for (var c, f = n.ranges.length - 1; 0 <= f; f--) {
          var h = n.ranges[f]
            , d = h.from()
            , p = h.to();
          h.empty() && (r && 0 < r ? d = F(d.line, d.ch - r) : e.state.overwrite && !l ? p = F(p.line, fo(T(o, p.line).text.length, p.ch + g(s).length)) : Jl && Jl.lineWise && Jl.text.join("\n") == t && (d = p = F(d.line, 0))),
          c = e.curOp.updateInput;
          var m = {
              from: d,
              to: p,
              text: a ? a[f % a.length] : s,
              origin: i || (l ? "paste" : e.state.cutIncoming ? "cut" : "+input")
          };
          jn(e.doc, m),
          et(e, "inputRead", e, m)
      }
      t && !l && qi(e, t),
      yr(e),
      e.curOp.updateInput = c,
      e.curOp.typing = !0,
      e.state.pasteIncoming = e.state.cutIncoming = !1
  }
  function _i(e, t) {
      var r = e.clipboardData && e.clipboardData.getData("Text");
      if (r)
          return e.preventDefault(),
          t.isReadOnly() || t.options.disableInput || Er(t, function() {
              return Yi(t, r, 0, null, "paste")
          }),
          !0
  }
  function qi(e, t) {
      if (e.options.electricChars && e.options.smartIndent)
          for (var r, n = e.doc.sel, i = n.ranges.length - 1; 0 <= i; i--)
              if (!(100 < (r = n.ranges[i]).head.ch || i && n.ranges[i - 1].head.line == r.head.line)) {
                  var o = e.getModeAt(r.head)
                    , l = !1;
                  if (o.electricChars) {
                      for (var s = 0; s < o.electricChars.length; s++)
                          if (-1 < t.indexOf(o.electricChars.charAt(s))) {
                              l = ji(e, r.head.line, "smart");
                              break
                          }
                  } else
                      o.electricInput && o.electricInput.test(T(e.doc, r.head.line).text.slice(0, r.head.ch)) && (l = ji(e, r.head.line, "smart"));
                  l && et(e, "electricInput", e, r.head.line)
              }
  }
  function $i(e) {
      for (var t = [], r = [], n = 0; n < e.doc.sel.ranges.length; n++) {
          var i = e.doc.sel.ranges[n].head.line
            , o = {
              anchor: F(i, 0),
              head: F(i + 1, 0)
          };
          r.push(o),
          t.push(e.getRange(o.anchor, o.head))
      }
      return {
          text: t,
          ranges: r
      }
  }
  function Zi(e, t) {
      e.setAttribute("autocorrect", "off"),
      e.setAttribute("autocapitalize", "off"),
      e.setAttribute("spellcheck", !!t)
  }
  function Qi() {
      var e = n("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none")
        , t = n("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
      return xo ? e.style.width = "1000px" : e.setAttribute("wrap", "off"),
      Oo && (e.style.border = "1px solid black"),
      Zi(e),
      t
  }
  function Ji(e, t, r, n, i) {
      function o(n) {
          var o;
          if (null != (o = i ? function(e, t, r, n) {
              var i = he(t, e.doc.direction);
              if (!i)
                  return Si(t, r, n);
              r.ch >= t.text.length ? (r.ch = t.text.length,
              r.sticky = "before") : 0 >= r.ch && (r.ch = 0,
              r.sticky = "after");
              var o = fe(i, r.ch, r.sticky)
                , l = i[o];
              if ("ltr" == e.doc.direction && 0 == l.level % 2 && (0 < n ? l.to > r.ch : l.from < r.ch))
                  return Si(t, r, n);
              var s, a = function(e, r) {
                  return Ci(t, e instanceof F ? e.ch : e, r)
              }, u = function(r) {
                  return e.options.lineWrapping ? (s = s || kt(e, t),
                  Vt(e, t, s, r)) : {
                      begin: 0,
                      end: t.text.length
                  }
              }, c = u("before" == r.sticky ? a(r, -1) : r.ch);
              if ("rtl" == e.doc.direction || 1 == l.level) {
                  var f = 1 == l.level == 0 > n
                    , h = a(r, f ? 1 : -1);
                  if (null != h && (f ? h <= l.to && h <= c.end : h >= l.from && h >= c.begin)) {
                      var d = f ? "before" : "after";
                      return new F(r.line,h,d)
                  }
              }
              var p = function(e, t, n) {
                  for (var o = function(e, t) {
                      return t ? new F(r.line,a(e, 1),"before") : new F(r.line,e,"after")
                  }; 0 <= e && e < i.length; e += t) {
                      var l = i[e]
                        , s = 0 < t == (1 != l.level)
                        , u = s ? n.begin : a(n.end, -1);
                      if (l.from <= u && u < l.to)
                          return o(u, s);
                      if (u = s ? l.from : a(l.to, -1),
                      n.begin <= u && u < n.end)
                          return o(u, s)
                  }
              }
                , g = p(o + n, n, c);
              if (g)
                  return g;
              var v = 0 < n ? c.end : a(c.begin, -1);
              return null == v || 0 < n && v == t.text.length || !(g = p(0 < n ? 0 : i.length - 1, n, u(v))) ? null : g
          }(e.cm, a, t, r) : Si(a, t, r)))
              t = o;
          else {
              if (n || !function() {
                  var n = t.line + r;
                  return !(n < e.first || n >= e.first + e.size) && (t = new F(n,t.ch,t.sticky),
                  a = T(e, n))
              }())
                  return !1;
              t = Li(i, e.cm, a, t.line, r)
          }
          return !0
      }
      var l = t
        , s = r
        , a = T(e, t.line);
      if ("char" == n)
          o();
      else if ("column" == n)
          o(!0);
      else if ("word" == n || "group" == n)
          for (var u = null, c = "group" == n, f = e.cm && e.cm.getHelper(t, "wordChars"), h = !0; !(0 > r) || o(!h); h = !1) {
              var d = a.text.charAt(t.ch) || "\n"
                , p = w(d, f) ? "w" : c && "\n" == d ? "n" : !c || /\s/.test(d) ? null : "p";
              if (!c || h || p || (p = "s"),
              u && u != p) {
                  0 > r && (r = 1,
                  o(),
                  t.sticky = "after");
                  break
              }
              if (p && (u = p),
              0 < r && !o(!h))
                  break
          }
      var g = Gn(e, t, l, s, !0);
      return E(l, g) && (g.hitSide = !0),
      g
  }
  function eo(e, t, r, n) {
      var i, o, l = e.doc, s = t.left;
      if ("page" == n) {
          var a = fo(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight)
            , u = ao(a - .5 * Xt(e.display), 3);
          i = (0 < r ? t.bottom : t.top) + r * u
      } else
          "line" == n && (i = 0 < r ? t.bottom + 3 : t.top - 3);
      for (; (o = Gt(e, s, i)).outside; ) {
          if (0 > r ? 0 >= i : i >= l.height) {
              o.hitSide = !0;
              break
          }
          i += 5 * r
      }
      return o
  }
  function to(e, t) {
      var r = Lt(e, t.line);
      if (!r || r.hidden)
          return null;
      var n = T(e.doc, t.line)
        , i = xt(r, n, t.line)
        , o = he(n, e.doc.direction)
        , l = "left";
      o && (l = fe(o, t.ch) % 2 ? "right" : "left");
      var s = Nt(i.map, t.ch, l);
      return s.offset = "right" == s.collapse ? s.end : s.start,
      s
  }
  function ro(e, t) {
      return t && (e.bad = !0),
      e
  }
  function no(e, t, r) {
      var n;
      if (t == e.display.lineDiv) {
          if (!(n = e.display.lineDiv.childNodes[r]))
              return ro(e.clipPos(F(e.display.viewTo - 1)), !0);
          t = null,
          r = 0
      } else
          for (n = t; ; n = n.parentNode) {
              if (!n || n == e.display.lineDiv)
                  return null;
              if (n.parentNode && n.parentNode == e.display.lineDiv)
                  break
          }
      for (var i, o = 0; o < e.display.view.length; o++)
          if ((i = e.display.view[o]).node == n)
              return io(i, t, r)
  }
  function io(e, t, r) {
      function n(t, r, n) {
          for (var i, o = -1; o < (f ? f.length : 0); o++) {
              i = 0 > o ? c.map : f[o];
              for (var l, s = 0; s < i.length; s += 3)
                  if ((l = i[s + 2]) == t || l == r) {
                      var a = M(0 > o ? e.line : e.rest[o])
                        , u = i[s] + n;
                      return (0 > n || l != t) && (u = i[s + (n ? 1 : 0)]),
                      F(a, u)
                  }
          }
      }
      var i = e.text.firstChild
        , l = !1;
      if (!t || !o(i, t))
          return ro(F(M(e.line), 0), !0);
      if (t == i && (l = !0,
      t = i.childNodes[r],
      r = 0,
      !t)) {
          var s = e.rest ? g(e.rest) : e.line;
          return ro(F(M(s), s.text.length), l)
      }
      var a = 3 == t.nodeType ? t : null
        , u = t;
      for (a || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || (a = t.firstChild,
      r && (r = a.nodeValue.length)); u.parentNode != i; )
          u = u.parentNode;
      var c = e.measure
        , f = c.maps
        , h = n(a, u, r);
      if (h)
          return ro(h, l);
      for (var d = u.nextSibling, p = a ? a.nodeValue.length - r : 0; d; d = d.nextSibling) {
          if (h = n(d, d.firstChild, 0))
              return ro(F(h.line, h.ch - p), l);
          p += d.textContent.length
      }
      for (var v = u.previousSibling, m = r; v; v = v.previousSibling) {
          if (h = n(v, v.firstChild, -1))
              return ro(F(h.line, h.ch + m), l);
          m += v.textContent.length
      }
  }
  var oo = String.fromCharCode
    , lo = Math.round
    , so = Math.abs
    , ao = Math.max
    , uo = Math.floor
    , co = Math.ceil
    , fo = Math.min
    , ho = navigator.userAgent
    , po = navigator.platform
    , go = /gecko\/\d/i.test(ho)
    , vo = /MSIE \d/.test(ho)
    , mo = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ho)
    , yo = /Edge\/(\d+)/.exec(ho)
    , bo = vo || mo || yo
    , wo = bo && (vo ? document.documentMode || 6 : +(yo || mo)[1])
    , xo = !yo && /WebKit\//.test(ho)
    , Co = xo && /Qt\/\d+\.\d+/.test(ho)
    , So = !yo && /Chrome\//.test(ho)
    , Lo = /Opera\//.test(ho)
    , ko = /Apple Computer/.test(navigator.vendor)
    , To = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(ho)
    , No = /PhantomJS/.test(ho)
    , Oo = !yo && /AppleWebKit/.test(ho) && /Mobile\/\w+/.test(ho)
    , Ao = /Android/.test(ho)
    , Mo = Oo || Ao || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(ho)
    , Wo = Oo || /Mac/.test(po)
    , Do = /\bCrOS\b/.test(ho)
    , Ho = /win/i.test(po)
    , Fo = Lo && ho.match(/Version\/(\d*\.\d*)/);
  Fo && (Fo = +Fo[1]),
  Fo && 15 <= Fo && (Lo = !1,
  xo = !0);
  var Po, Eo = Wo && (Co || Lo && (null == Fo || 12.11 > Fo)), zo = go || bo && 9 <= wo, Io = function(t, r) {
      var n = t.className
        , i = e(r).exec(n);
      if (i) {
          var o = n.slice(i.index + i[0].length);
          t.className = n.slice(0, i.index) + (o ? i[1] + o : "")
      }
  };
  Po = document.createRange ? function(e, t, r, n) {
      var i = document.createRange();
      return i.setEnd(n || e, r),
      i.setStart(e, t),
      i
  }
  : function(e, t, r) {
      var n = document.body.createTextRange();
      try {
          n.moveToElementText(e.parentNode)
      } catch (t) {
          return n
      }
      return n.collapse(!0),
      n.moveEnd("character", r),
      n.moveStart("character", t),
      n
  }
  ;
  var Ro = function(e) {
      e.select()
  };
  Oo ? Ro = function(e) {
      e.selectionStart = 0,
      e.selectionEnd = e.value.length
  }
  : bo && (Ro = function(e) {
      try {
          e.select()
      } catch (e) {}
  }
  );
  var Bo = function() {
      this.id = null
  };
  Bo.prototype.set = function(e, t) {
      clearTimeout(this.id),
      this.id = setTimeout(t, e)
  }
  ;
  var Go, Uo, Vo = {
      toString: function() {
          return "CodeMirror.Pass"
      }
  }, Ko = {
      scroll: !1
  }, jo = {
      origin: "*mouse"
  }, Xo = {
      origin: "+move"
  }, Yo = [""], _o = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/, qo = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/, $o = !1, Zo = !1, Qo = null, Jo = function() {
      function e(e) {
          return 247 >= e ? "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(e) : 1424 <= e && 1524 >= e ? "R" : 1536 <= e && 1785 >= e ? "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(e - 1536) : 1774 <= e && 2220 >= e ? "r" : 8192 <= e && 8203 >= e ? "w" : 8204 == e ? "b" : "L"
      }
      function t(e, t, r) {
          this.level = e,
          this.from = t,
          this.to = r
      }
      var r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/
        , n = /[stwN]/
        , i = /[LRr]/
        , o = /[Lb1n]/
        , l = /[1n]/;
      return function(s, a) {
          var u = "ltr" == a ? "L" : "R";
          if (0 == s.length || "ltr" == a && !r.test(s))
              return !1;
          for (var c = s.length, f = [], h = 0; h < c; ++h)
              f.push(e(s.charCodeAt(h)));
          for (var d, p = 0, v = u; p < c; ++p)
              "m" == (d = f[p]) ? f[p] = v : v = d;
          for (var m, y = 0, b = u; y < c; ++y)
              "1" == (m = f[y]) && "r" == b ? f[y] = "n" : i.test(m) && (b = m,
              "r" == m && (f[y] = "R"));
          for (var w, x = 1, C = f[0]; x < c - 1; ++x)
              "+" == (w = f[x]) && "1" == C && "1" == f[x + 1] ? f[x] = "1" : "," == w && C == f[x + 1] && ("1" == C || "n" == C) && (f[x] = C),
              C = w;
          for (var S, L = 0; L < c; ++L)
              if ("," == (S = f[L]))
                  f[L] = "N";
              else if ("%" == S) {
                  var k = void 0;
                  for (k = L + 1; k < c && "%" == f[k]; ++k)
                      ;
                  for (var T = L && "!" == f[L - 1] || k < c && "1" == f[k] ? "1" : "N", N = L; N < k; ++N)
                      f[N] = T;
                  L = k - 1
              }
          for (var O, A = 0, M = u; A < c; ++A)
              O = f[A],
              "L" == M && "1" == O ? f[A] = "L" : i.test(O) && (M = O);
          for (var W = 0; W < c; ++W)
              if (n.test(f[W])) {
                  var D = void 0;
                  for (D = W + 1; D < c && n.test(f[D]); ++D)
                      ;
                  for (var H = "L" == (W ? f[W - 1] : u), F = H == ("L" == (D < c ? f[D] : u)) ? H ? "L" : "R" : u, P = W; P < D; ++P)
                      f[P] = F;
                  W = D - 1
              }
          for (var E, z = [], I = 0; I < c; )
              if (o.test(f[I])) {
                  var R = I;
                  for (++I; I < c && o.test(f[I]); ++I)
                      ;
                  z.push(new t(0,R,I))
              } else {
                  var B = I
                    , G = z.length;
                  for (++I; I < c && "L" != f[I]; ++I)
                      ;
                  for (var U = B; U < I; )
                      if (l.test(f[U])) {
                          B < U && z.splice(G, 0, new t(1,B,U));
                          var V = U;
                          for (++U; U < I && l.test(f[U]); ++U)
                              ;
                          z.splice(G, 0, new t(2,V,U)),
                          B = U
                      } else
                          ++U;
                  B < I && z.splice(G, 0, new t(1,B,I))
              }
          return "ltr" == a && (1 == z[0].level && (E = s.match(/^\s+/)) && (z[0].from = E[0].length,
          z.unshift(new t(0,0,E[0].length))),
          1 == g(z).level && (E = s.match(/\s+$/)) && (g(z).to -= E[0].length,
          z.push(new t(0,c - E[0].length,c)))),
          "rtl" == a ? z.reverse() : z
      }
  }(), el = [], tl = function(e, t, r) {
      if (e.addEventListener)
          e.addEventListener(t, r, !1);
      else if (e.attachEvent)
          e.attachEvent("on" + t, r);
      else {
          var n = e._handlers || (e._handlers = {});
          n[t] = (n[t] || el).concat(r)
      }
  }, rl = function() {
      if (bo && 9 > wo)
          return !1;
      var e = n("div");
      return "draggable"in e || "dragDrop"in e
  }(), nl = 3 == "\n\nb".split(/\n/).length ? function(e) {
      return e.split(/\r\n?|\n/)
  }
  : function(e) {
      for (var t, r = 0, n = [], i = e.length; r <= i; ) {
          -1 == (t = e.indexOf("\n", r)) && (t = e.length);
          var o = e.slice(r, "\r" == e.charAt(t - 1) ? t - 1 : t)
            , l = o.indexOf("\r");
          -1 == l ? (n.push(o),
          r = t + 1) : (n.push(o.slice(0, l)),
          r += l + 1)
      }
      return n
  }
  , il = window.getSelection ? function(e) {
      try {
          return e.selectionStart != e.selectionEnd
      } catch (e) {
          return !1
      }
  }
  : function(e) {
      var t;
      try {
          t = e.ownerDocument.selection.createRange()
      } catch (t) {}
      return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t)
  }
  , ol = function() {
      var e = n("div");
      return !!("oncopy"in e) || (e.setAttribute("oncopy", "return;"),
      "function" == typeof e.oncopy)
  }(), ll = null, sl = {}, al = {}, ul = {}, cl = function(e, t, r) {
      this.pos = this.start = 0,
      this.string = e,
      this.tabSize = t || 8,
      this.lastColumnPos = this.lastColumnValue = 0,
      this.lineStart = 0,
      this.lineOracle = r
  };
  cl.prototype.eol = function() {
      return this.pos >= this.string.length
  }
  ,
  cl.prototype.sol = function() {
      return this.pos == this.lineStart
  }
  ,
  cl.prototype.peek = function() {
      return this.string.charAt(this.pos) || void 0
  }
  ,
  cl.prototype.next = function() {
      if (this.pos < this.string.length)
          return this.string.charAt(this.pos++)
  }
  ,
  cl.prototype.eat = function(e) {
      var t = this.string.charAt(this.pos);
      if ("string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t)))
          return ++this.pos,
          t
  }
  ,
  cl.prototype.eatWhile = function(e) {
      for (var t = this.pos; this.eat(e); )
          ;
      return this.pos > t
  }
  ,
  cl.prototype.eatSpace = function() {
      for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); )
          ++this.pos;
      return this.pos > e
  }
  ,
  cl.prototype.skipToEnd = function() {
      this.pos = this.string.length
  }
  ,
  cl.prototype.skipTo = function(e) {
      var t = this.string.indexOf(e, this.pos);
      if (-1 < t)
          return this.pos = t,
          !0
  }
  ,
  cl.prototype.backUp = function(e) {
      this.pos -= e
  }
  ,
  cl.prototype.column = function() {
      return this.lastColumnPos < this.start && (this.lastColumnValue = f(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue),
      this.lastColumnPos = this.start),
      this.lastColumnValue - (this.lineStart ? f(this.string, this.lineStart, this.tabSize) : 0)
  }
  ,
  cl.prototype.indentation = function() {
      return f(this.string, null, this.tabSize) - (this.lineStart ? f(this.string, this.lineStart, this.tabSize) : 0)
  }
  ,
  cl.prototype.match = function(e, t, r) {
      if ("string" != typeof e) {
          var n = this.string.slice(this.pos).match(e);
          return n && 0 < n.index ? null : (n && !1 !== t && (this.pos += n[0].length),
          n)
      }
      var i = function(e) {
          return r ? e.toLowerCase() : e
      };
      if (i(this.string.substr(this.pos, e.length)) == i(e))
          return !1 !== t && (this.pos += e.length),
          !0
  }
  ,
  cl.prototype.current = function() {
      return this.string.slice(this.start, this.pos)
  }
  ,
  cl.prototype.hideFirstChars = function(e, t) {
      this.lineStart += e;
      try {
          return t()
      } finally {
          this.lineStart -= e
      }
  }
  ,
  cl.prototype.lookAhead = function(e) {
      var t = this.lineOracle;
      return t && t.lookAhead(e)
  }
  ,
  cl.prototype.baseToken = function() {
      var e = this.lineOracle;
      return e && e.baseToken(this.pos)
  }
  ;
  var fl = function(e, t) {
      this.state = e,
      this.lookAhead = t
  }
    , hl = function(e, t, r, n) {
      this.state = t,
      this.doc = e,
      this.line = r,
      this.maxLookAhead = n || 0,
      this.baseTokens = null,
      this.baseTokenPos = 1
  };
  hl.prototype.lookAhead = function(e) {
      var t = this.doc.getLine(this.line + e);
      return null != t && e > this.maxLookAhead && (this.maxLookAhead = e),
      t
  }
  ,
  hl.prototype.baseToken = function(e) {
      if (!this.baseTokens)
          return null;
      for (; this.baseTokens[this.baseTokenPos] <= e; )
          this.baseTokenPos += 2;
      var t = this.baseTokens[this.baseTokenPos + 1];
      return {
          type: t && t.replace(/( |^)overlay .*/, ""),
          size: this.baseTokens[this.baseTokenPos] - e
      }
  }
  ,
  hl.prototype.nextLine = function() {
      this.line++,
      0 < this.maxLookAhead && this.maxLookAhead--
  }
  ,
  hl.fromSaved = function(e, t, r) {
      return t instanceof fl ? new hl(e,De(e.mode, t.state),r,t.lookAhead) : new hl(e,De(e.mode, t),r)
  }
  ,
  hl.prototype.save = function(e) {
      var t = !1 === e ? this.state : De(this.doc.mode, this.state);
      return 0 < this.maxLookAhead ? new fl(t,this.maxLookAhead) : t
  }
  ;
  var dl = function(e, t, r) {
      this.start = e.start,
      this.end = e.pos,
      this.string = e.current(),
      this.type = t || null,
      this.state = r
  }
    , pl = function(e, t, r) {
      this.text = e,
      q(this, t),
      this.height = r ? r(this) : 1
  };
  pl.prototype.lineNo = function() {
      return M(this)
  }
  ,
  be(pl);
  var gl, vl = {}, ml = {}, yl = null, bl = null, wl = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
  }, xl = function(e, t, r) {
      this.cm = r;
      var i = this.vert = n("div", [n("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar")
        , o = this.horiz = n("div", [n("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
      e(i),
      e(o),
      tl(i, "scroll", function() {
          i.clientHeight && t(i.scrollTop, "vertical")
      }),
      tl(o, "scroll", function() {
          o.clientWidth && t(o.scrollLeft, "horizontal")
      }),
      this.checkedZeroWidth = !1,
      bo && 8 > wo && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
  };
  xl.prototype.update = function(e) {
      var t = e.scrollWidth > e.clientWidth + 1
        , r = e.scrollHeight > e.clientHeight + 1
        , n = e.nativeBarWidth;
      if (r) {
          this.vert.style.display = "block",
          this.vert.style.bottom = t ? n + "px" : "0";
          var i = e.viewHeight - (t ? n : 0);
          this.vert.firstChild.style.height = ao(0, e.scrollHeight - e.clientHeight + i) + "px"
      } else
          this.vert.style.display = "",
          this.vert.firstChild.style.height = "0";
      if (t) {
          this.horiz.style.display = "block",
          this.horiz.style.right = r ? n + "px" : "0",
          this.horiz.style.left = e.barLeft + "px";
          var o = e.viewWidth - e.barLeft - (r ? n : 0);
          this.horiz.firstChild.style.width = ao(0, e.scrollWidth - e.clientWidth + o) + "px"
      } else
          this.horiz.style.display = "",
          this.horiz.firstChild.style.width = "0";
      return !this.checkedZeroWidth && 0 < e.clientHeight && (0 == n && this.zeroWidthHack(),
      this.checkedZeroWidth = !0),
      {
          right: r ? n : 0,
          bottom: t ? n : 0
      }
  }
  ,
  xl.prototype.setScrollLeft = function(e) {
      this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
      this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz")
  }
  ,
  xl.prototype.setScrollTop = function(e) {
      this.vert.scrollTop != e && (this.vert.scrollTop = e),
      this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert")
  }
  ,
  xl.prototype.zeroWidthHack = function() {
      var e = Wo && !To ? "12px" : "18px";
      this.horiz.style.height = this.vert.style.width = e,
      this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none",
      this.disableHoriz = new Bo,
      this.disableVert = new Bo
  }
  ,
  xl.prototype.enableZeroWidthBar = function(e, t, r) {
      e.style.pointerEvents = "auto",
      t.set(1e3, function n() {
          var i = e.getBoundingClientRect();
          ("vert" == r ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2) : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1)) == e ? t.set(1e3, n) : e.style.pointerEvents = "none"
      })
  }
  ,
  xl.prototype.clear = function() {
      var e = this.horiz.parentNode;
      e.removeChild(this.horiz),
      e.removeChild(this.vert)
  }
  ;
  var Cl = function() {};
  Cl.prototype.update = function() {
      return {
          bottom: 0,
          right: 0
      }
  }
  ,
  Cl.prototype.setScrollLeft = function() {}
  ,
  Cl.prototype.setScrollTop = function() {}
  ,
  Cl.prototype.clear = function() {}
  ;
  var Sl = {
      native: xl,
      null: Cl
  }
    , Ll = 0
    , kl = function(e, t, r) {
      var n = e.display;
      this.viewport = t,
      this.visible = hr(n, e.doc, t),
      this.editorIsHidden = !n.wrapper.offsetWidth,
      this.wrapperHeight = n.wrapper.clientHeight,
      this.wrapperWidth = n.wrapper.clientWidth,
      this.oldDisplayWidth = bt(e),
      this.force = r,
      this.dims = _t(e),
      this.events = []
  };
  kl.prototype.signal = function(e, t) {
      ye(e, t) && this.events.push(arguments)
  }
  ,
  kl.prototype.finish = function() {
      for (var e = 0; e < this.events.length; e++)
          ge.apply(null, this.events[e])
  }
  ;
  var Tl = 0
    , Nl = null;
  bo ? Nl = -.53 : go ? Nl = 15 : So ? Nl = -.7 : ko && (Nl = -1 / 3);
  var Ol = function(e, t) {
      this.ranges = e,
      this.primIndex = t
  };
  Ol.prototype.primary = function() {
      return this.ranges[this.primIndex]
  }
  ,
  Ol.prototype.equals = function(e) {
      if (e == this)
          return !0;
      if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length)
          return !1;
      for (var t = 0; t < this.ranges.length; t++) {
          var r = this.ranges[t]
            , n = e.ranges[t];
          if (!E(r.anchor, n.anchor) || !E(r.head, n.head))
              return !1
      }
      return !0
  }
  ,
  Ol.prototype.deepCopy = function() {
      for (var e = [], t = 0; t < this.ranges.length; t++)
          e[t] = new Al(z(this.ranges[t].anchor),z(this.ranges[t].head));
      return new Ol(e,this.primIndex)
  }
  ,
  Ol.prototype.somethingSelected = function() {
      for (var e = 0; e < this.ranges.length; e++)
          if (!this.ranges[e].empty())
              return !0;
      return !1
  }
  ,
  Ol.prototype.contains = function(e, t) {
      t || (t = e);
      for (var r, n = 0; n < this.ranges.length; n++)
          if (0 <= P(t, (r = this.ranges[n]).from()) && 0 >= P(e, r.to()))
              return n;
      return -1
  }
  ;
  var Al = function(e, t) {
      this.anchor = e,
      this.head = t
  };
  Al.prototype.from = function() {
      return R(this.anchor, this.head)
  }
  ,
  Al.prototype.to = function() {
      return I(this.anchor, this.head)
  }
  ,
  Al.prototype.empty = function() {
      return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
  }
  ,
  ti.prototype = {
      chunkSize: function() {
          return this.lines.length
      },
      removeInner: function(e, t) {
          for (var r, n = e; n < e + t; ++n)
              r = this.lines[n],
              this.height -= r.height,
              Ke(r),
              et(r, "delete");
          this.lines.splice(e, t)
      },
      collapse: function(e) {
          e.push.apply(e, this.lines)
      },
      insertInner: function(e, t, r) {
          this.height += r,
          this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
          for (var n = 0; n < t.length; ++n)
              t[n].parent = this
      },
      iterN: function(e, t, r) {
          for (var n = e + t; e < n; ++e)
              if (r(this.lines[e]))
                  return !0
      }
  },
  ri.prototype = {
      chunkSize: function() {
          return this.size
      },
      removeInner: function(e, t) {
          var r = this;
          this.size -= t;
          for (var n = 0; n < this.children.length; ++n) {
              var i = r.children[n]
                , o = i.chunkSize();
              if (e < o) {
                  var l = fo(t, o - e)
                    , s = i.height;
                  if (i.removeInner(e, l),
                  r.height -= s - i.height,
                  o == l && (r.children.splice(n--, 1),
                  i.parent = null),
                  0 == (t -= l))
                      break;
                  e = 0
              } else
                  e -= o
          }
          if (25 > this.size - t && (1 < this.children.length || !(this.children[0]instanceof ti))) {
              var a = [];
              this.collapse(a),
              this.children = [new ti(a)],
              this.children[0].parent = this
          }
      },
      collapse: function(e) {
          for (var t = 0; t < this.children.length; ++t)
              this.children[t].collapse(e)
      },
      insertInner: function(e, t, r) {
          var n = this;
          this.size += t.length,
          this.height += r;
          for (var i = 0; i < this.children.length; ++i) {
              var o = n.children[i]
                , l = o.chunkSize();
              if (e <= l) {
                  if (o.insertInner(e, t, r),
                  o.lines && 50 < o.lines.length) {
                      for (var s, a = o.lines.length % 25 + 25, u = a; u < o.lines.length; )
                          s = new ti(o.lines.slice(u, u += 25)),
                          o.height -= s.height,
                          n.children.splice(++i, 0, s),
                          s.parent = n;
                      o.lines = o.lines.slice(0, a),
                      n.maybeSpill()
                  }
                  break
              }
              e -= l
          }
      },
      maybeSpill: function() {
          if (!(10 >= this.children.length)) {
              var e = this;
              do {
                  var t = new ri(e.children.splice(e.children.length - 5, 5));
                  if (e.parent) {
                      e.size -= t.size,
                      e.height -= t.height;
                      var r = h(e.parent.children, e);
                      e.parent.children.splice(r + 1, 0, t)
                  } else {
                      var n = new ri(e.children);
                      n.parent = e,
                      e.children = [n, t],
                      e = n
                  }
                  t.parent = e.parent
              } while (10 < e.children.length);
              e.parent.maybeSpill()
          }
      },
      iterN: function(e, t, r) {
          for (var n = 0; n < this.children.length; ++n) {
              var i = this.children[n]
                , o = i.chunkSize();
              if (e < o) {
                  var l = fo(t, o - e);
                  if (i.iterN(e, l, r))
                      return !0;
                  if (0 == (t -= l))
                      break;
                  e = 0
              } else
                  e -= o
          }
      }
  };
  var Ml = function(e, t, r) {
      if (r)
          for (var n in r)
              r.hasOwnProperty(n) && (this[n] = r[n]);
      this.doc = e,
      this.node = t
  };
  Ml.prototype.clear = function() {
      var e = this.doc.cm
        , t = this.line.widgets
        , r = this.line
        , n = M(r);
      if (null != n && t) {
          for (var i = 0; i < t.length; ++i)
              t[i] == this && t.splice(i--, 1);
          t.length || (r.widgets = null);
          var o = dt(this);
          A(r, ao(0, r.height - o)),
          e && (Er(e, function() {
              ni(e, r, -o),
              Gr(e, n, "widget")
          }),
          et(e, "lineWidgetCleared", e, this, n))
      }
  }
  ,
  Ml.prototype.changed = function() {
      var e = this
        , t = this.height
        , r = this.doc.cm
        , n = this.line;
      this.height = null;
      var i = dt(this) - t;
      i && (A(n, n.height + i),
      r && Er(r, function() {
          r.curOp.forceUpdate = !0,
          ni(r, n, i),
          et(r, "lineWidgetChanged", r, e, M(n))
      }))
  }
  ,
  be(Ml);
  var Wl = 0
    , Dl = function(e, t) {
      this.lines = [],
      this.type = t,
      this.doc = e,
      this.id = ++Wl
  };
  Dl.prototype.clear = function() {
      var e = this;
      if (!this.explicitlyCleared) {
          var t = this.doc.cm
            , r = t && !t.curOp;
          if (r && Ar(t),
          ye(this, "clear")) {
              var n = this.find();
              n && et(this, "clear", n.from, n.to)
          }
          for (var i = null, o = null, l = 0; l < this.lines.length; ++l) {
              var s = e.lines[l]
                , a = K(s.markedSpans, e);
              t && !e.collapsed ? Gr(t, M(s), "text") : t && (null != a.to && (o = M(s)),
              null != a.from && (i = M(s))),
              s.markedSpans = j(s.markedSpans, a),
              null == a.from && e.collapsed && !le(e.doc, s) && t && A(s, Xt(t.display))
          }
          if (t && this.collapsed && !t.options.lineWrapping)
              for (var u = 0; u < this.lines.length; ++u) {
                  var c = ne(e.lines[u])
                    , f = ue(c);
                  f > t.display.maxLineLength && (t.display.maxLine = c,
                  t.display.maxLineLength = f,
                  t.display.maxLineChanged = !0)
              }
          null != i && t && this.collapsed && Br(t, i, o + 1),
          this.lines.length = 0,
          this.explicitlyCleared = !0,
          this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1,
          t && In(t.doc)),
          t && et(t, "markerCleared", t, this, i, o),
          r && Mr(t),
          this.parent && this.parent.clear()
      }
  }
  ,
  Dl.prototype.find = function(e, t) {
      null == e && "bookmark" == this.type && (e = 1);
      for (var r, n, i = 0; i < this.lines.length; ++i) {
          var o = this.lines[i]
            , l = K(o.markedSpans, this);
          if (null != l.from && (r = F(t ? o : M(o), l.from),
          -1 == e))
              return r;
          if (null != l.to && (n = F(t ? o : M(o), l.to),
          1 == e))
              return n
      }
      return r && {
          from: r,
          to: n
      }
  }
  ,
  Dl.prototype.changed = function() {
      var e = this
        , t = this.find(-1, !0)
        , r = this
        , n = this.doc.cm;
      t && n && Er(n, function() {
          var i = t.line
            , o = M(t.line)
            , l = Lt(n, o);
          if (l && (At(l),
          n.curOp.selectionChanged = n.curOp.forceUpdate = !0),
          n.curOp.updateMaxLine = !0,
          !le(r.doc, i) && null != r.height) {
              var s = r.height;
              r.height = null;
              var a = dt(r) - s;
              a && A(i, i.height + a)
          }
          et(n, "markerChanged", n, e)
      })
  }
  ,
  Dl.prototype.attachLine = function(e) {
      if (!this.lines.length && this.doc.cm) {
          var t = this.doc.cm.curOp;
          t.maybeHiddenMarkers && -1 != h(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this)
      }
      this.lines.push(e)
  }
  ,
  Dl.prototype.detachLine = function(e) {
      if (this.lines.splice(h(this.lines, e), 1),
      !this.lines.length && this.doc.cm) {
          var t = this.doc.cm.curOp;
          (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
      }
  }
  ,
  be(Dl);
  var Hl = function(e, t) {
      this.markers = e,
      this.primary = t;
      for (var r = 0; r < e.length; ++r)
          e[r].parent = this
  };
  Hl.prototype.clear = function() {
      if (!this.explicitlyCleared) {
          this.explicitlyCleared = !0;
          for (var e = 0; e < this.markers.length; ++e)
              this.markers[e].clear();
          et(this, "clear")
      }
  }
  ,
  Hl.prototype.find = function(e, t) {
      return this.primary.find(e, t)
  }
  ,
  be(Hl);
  var Fl = 0
    , Pl = function(e, t, r, n, i) {
      if (!(this instanceof Pl))
          return new Pl(e,t,r,n,i);
      null == r && (r = 0),
      ri.call(this, [new ti([new pl("",null)])]),
      this.first = r,
      this.scrollTop = this.scrollLeft = 0,
      this.cantEdit = !1,
      this.cleanGeneration = 1,
      this.modeFrontier = this.highlightFrontier = r;
      var o = F(r, 0);
      this.sel = sn(o),
      this.history = new bn(null),
      this.id = ++Fl,
      this.modeOption = t,
      this.lineSep = n,
      this.direction = "rtl" == i ? "rtl" : "ltr",
      this.extend = !1,
      "string" == typeof e && (e = this.splitLines(e)),
      gn(this, {
          from: o,
          to: o,
          text: e
      }),
      Pn(this, sn(o), Ko)
  };
  Pl.prototype = y(ri.prototype, {
      constructor: Pl,
      iter: function(e, t, r) {
          r ? this.iterN(e - this.first, t - e, r) : this.iterN(this.first, this.first + this.size, e)
      },
      insert: function(e, t) {
          for (var r = 0, n = 0; n < t.length; ++n)
              r += t[n].height;
          this.insertInner(e - this.first, t, r)
      },
      remove: function(e, t) {
          this.removeInner(e - this.first, t)
      },
      getValue: function(e) {
          var t = O(this, this.first, this.first + this.size);
          return !1 === e ? t : t.join(e || this.lineSeparator())
      },
      setValue: Rr(function(e) {
          var t = F(this.first, 0)
            , r = this.first + this.size - 1;
          jn(this, {
              from: t,
              to: F(r, T(this, r).text.length),
              text: this.splitLines(e),
              origin: "setValue",
              full: !0
          }, !0),
          this.cm && br(this.cm, 0, 0),
          Pn(this, sn(t), Ko)
      }),
      replaceRange: function(e, t, r, n) {
          $n(this, e, t = G(this, t), r = r ? G(this, r) : t, n)
      },
      getRange: function(e, t, r) {
          var n = N(this, G(this, e), G(this, t));
          return !1 === r ? n : n.join(r || this.lineSeparator())
      },
      getLine: function(e) {
          var t = this.getLineHandle(e);
          return t && t.text
      },
      getLineHandle: function(e) {
          if (D(this, e))
              return T(this, e)
      },
      getLineNumber: function(e) {
          return M(e)
      },
      getLineHandleVisualStart: function(e) {
          return "number" == typeof e && (e = T(this, e)),
          ne(e)
      },
      lineCount: function() {
          return this.size
      },
      firstLine: function() {
          return this.first
      },
      lastLine: function() {
          return this.first + this.size - 1
      },
      clipPos: function(e) {
          return G(this, e)
      },
      getCursor: function(e) {
          var t = this.sel.primary();
          return null == e || "head" == e ? t.head : "anchor" == e ? t.anchor : "end" == e || "to" == e || !1 === e ? t.to() : t.from()
      },
      listSelections: function() {
          return this.sel.ranges
      },
      somethingSelected: function() {
          return this.sel.somethingSelected()
      },
      setCursor: Rr(function(e, t, r) {
          Hn(this, G(this, "number" == typeof e ? F(e, t || 0) : e), null, r)
      }),
      setSelection: Rr(function(e, t, r) {
          Hn(this, G(this, e), G(this, t || e), r)
      }),
      extendSelection: Rr(function(e, t, r) {
          Mn(this, G(this, e), t && G(this, t), r)
      }),
      extendSelections: Rr(function(e, t) {
          Wn(this, U(this, e), t)
      }),
      extendSelectionsBy: Rr(function(e, t) {
          Wn(this, U(this, v(this.sel.ranges, e)), t)
      }),
      setSelections: Rr(function(e, t, r) {
          if (e.length) {
              for (var n = [], i = 0; i < e.length; i++)
                  n[i] = new Al(G(this, e[i].anchor),G(this, e[i].head));
              null == t && (t = fo(e.length - 1, this.sel.primIndex)),
              Pn(this, ln(n, t), r)
          }
      }),
      addSelection: Rr(function(e, t, r) {
          var n = this.sel.ranges.slice(0);
          n.push(new Al(G(this, e),G(this, t || e))),
          Pn(this, ln(n, n.length - 1), r)
      }),
      getSelection: function(e) {
          for (var t, r, n = this.sel.ranges, i = 0; i < n.length; i++)
              r = N(this, n[i].from(), n[i].to()),
              t = t ? t.concat(r) : r;
          return !1 === e ? t : t.join(e || this.lineSeparator())
      },
      getSelections: function(e) {
          for (var t, r = [], n = this.sel.ranges, i = 0; i < n.length; i++)
              t = N(this, n[i].from(), n[i].to()),
              !1 !== e && (t = t.join(e || this.lineSeparator())),
              r[i] = t;
          return r
      },
      replaceSelection: function(e, t, r) {
          for (var n = [], i = 0; i < this.sel.ranges.length; i++)
              n[i] = e;
          this.replaceSelections(n, t, r || "+input")
      },
      replaceSelections: Rr(function(e, t, r) {
          for (var n, i = [], o = this.sel, l = 0; l < o.ranges.length; l++)
              n = o.ranges[l],
              i[l] = {
                  from: n.from(),
                  to: n.to(),
                  text: this.splitLines(e[l]),
                  origin: r
              };
          for (var s = t && "end" != t && function(e, t, r) {
              for (var n = [], i = F(e.first, 0), o = i, l = 0; l < t.length; l++) {
                  var s = t[l]
                    , a = fn(s.from, i, o)
                    , u = fn(an(s), i, o);
                  if (i = s.to,
                  o = u,
                  "around" == r) {
                      var c = e.sel.ranges[l]
                        , f = 0 > P(c.head, c.anchor);
                      n[l] = new Al(f ? u : a,f ? a : u)
                  } else
                      n[l] = new Al(a,a)
              }
              return new Ol(n,e.sel.primIndex)
          }(this, i, t), a = i.length - 1; 0 <= a; a--)
              jn(this, i[a]);
          s ? Fn(this, s) : this.cm && yr(this.cm)
      }),
      undo: Rr(function() {
          Yn(this, "undo")
      }),
      redo: Rr(function() {
          Yn(this, "redo")
      }),
      undoSelection: Rr(function() {
          Yn(this, "undo", !0)
      }),
      redoSelection: Rr(function() {
          Yn(this, "redo", !0)
      }),
      setExtending: function(e) {
          this.extend = e
      },
      getExtending: function() {
          return this.extend
      },
      historySize: function() {
          for (var e = this.history, t = 0, r = 0, n = 0; n < e.done.length; n++)
              e.done[n].ranges || ++t;
          for (var i = 0; i < e.undone.length; i++)
              e.undone[i].ranges || ++r;
          return {
              undo: t,
              redo: r
          }
      },
      clearHistory: function() {
          this.history = new bn(this.history.maxGeneration)
      },
      markClean: function() {
          this.cleanGeneration = this.changeGeneration(!0)
      },
      changeGeneration: function(e) {
          return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null),
          this.history.generation
      },
      isClean: function(e) {
          return this.history.generation == (e || this.cleanGeneration)
      },
      getHistory: function() {
          return {
              done: On(this.history.done),
              undone: On(this.history.undone)
          }
      },
      setHistory: function(e) {
          var t = this.history = new bn(this.history.maxGeneration);
          t.done = On(e.done.slice(0), null, !0),
          t.undone = On(e.undone.slice(0), null, !0)
      },
      setGutterMarker: Rr(function(e, t, r) {
          return ei(this, e, "gutter", function(e) {
              var n = e.gutterMarkers || (e.gutterMarkers = {});
              return n[t] = r,
              !r && x(n) && (e.gutterMarkers = null),
              !0
          })
      }),
      clearGutter: Rr(function(e) {
          var t = this;
          this.iter(function(r) {
              r.gutterMarkers && r.gutterMarkers[e] && ei(t, r, "gutter", function() {
                  return r.gutterMarkers[e] = null,
                  x(r.gutterMarkers) && (r.gutterMarkers = null),
                  !0
              })
          })
      }),
      lineInfo: function(e) {
          var t;
          if ("number" == typeof e) {
              if (!D(this, e))
                  return null;
              if (t = e,
              !(e = T(this, e)))
                  return null
          } else if (null == (t = M(e)))
              return null;
          return {
              line: t,
              handle: e,
              text: e.text,
              gutterMarkers: e.gutterMarkers,
              textClass: e.textClass,
              bgClass: e.bgClass,
              wrapClass: e.wrapClass,
              widgets: e.widgets
          }
      },
      addLineClass: Rr(function(t, r, n) {
          return ei(this, t, "gutter" == r ? "gutter" : "class", function(t) {
              var i = "text" == r ? "textClass" : "background" == r ? "bgClass" : "gutter" == r ? "gutterClass" : "wrapClass";
              if (t[i]) {
                  if (e(n).test(t[i]))
                      return !1;
                  t[i] += " " + n
              } else
                  t[i] = n;
              return !0
          })
      }),
      removeLineClass: Rr(function(t, r, n) {
          return ei(this, t, "gutter" == r ? "gutter" : "class", function(t) {
              var i = "text" == r ? "textClass" : "background" == r ? "bgClass" : "gutter" == r ? "gutterClass" : "wrapClass"
                , o = t[i];
              if (!o)
                  return !1;
              if (null == n)
                  t[i] = null;
              else {
                  var l = o.match(e(n));
                  if (!l)
                      return !1;
                  var s = l.index + l[0].length;
                  t[i] = o.slice(0, l.index) + (l.index && s != o.length ? " " : "") + o.slice(s) || null
              }
              return !0
          })
      }),
      addLineWidget: Rr(function(e, t, r) {
          return function(e, t, r, n) {
              var i = new Ml(e,r,n)
                , o = e.cm;
              return o && i.noHScroll && (o.display.alignWidgets = !0),
              ei(e, t, "widget", function(t) {
                  var r = t.widgets || (t.widgets = []);
                  if (null == i.insertAt ? r.push(i) : r.splice(fo(r.length - 1, ao(0, i.insertAt)), 0, i),
                  i.line = t,
                  o && !le(e, t)) {
                      var n = ae(t) < e.scrollTop;
                      A(t, t.height + dt(i)),
                      n && mr(o, i.height),
                      o.curOp.forceUpdate = !0
                  }
                  return !0
              }),
              o && et(o, "lineWidgetAdded", o, i, "number" == typeof t ? t : M(t)),
              i
          }(this, e, t, r)
      }),
      removeLineWidget: function(e) {
          e.clear()
      },
      markText: function(e, t, r) {
          return ii(this, G(this, e), G(this, t), r, r && r.type || "range")
      },
      setBookmark: function(e, t) {
          var r = {
              replacedWith: t && (null == t.nodeType ? t.widget : t),
              insertLeft: t && t.insertLeft,
              clearWhenEmpty: !1,
              shared: t && t.shared,
              handleMouseEvents: t && t.handleMouseEvents
          };
          return ii(this, e = G(this, e), e, r, "bookmark")
      },
      findMarksAt: function(e) {
          var t = []
            , r = T(this, (e = G(this, e)).line).markedSpans;
          if (r)
              for (var n, i = 0; i < r.length; ++i)
                  (null == (n = r[i]).from || n.from <= e.ch) && (null == n.to || n.to >= e.ch) && t.push(n.marker.parent || n.marker);
          return t
      },
      findMarks: function(e, t, r) {
          e = G(this, e),
          t = G(this, t);
          var n = []
            , i = e.line;
          return this.iter(e.line, t.line + 1, function(o) {
              var l = o.markedSpans;
              if (l)
                  for (var s, a = 0; a < l.length; a++)
                      null != (s = l[a]).to && i == e.line && e.ch >= s.to || null == s.from && i != e.line || null != s.from && i == t.line && s.from >= t.ch || r && !r(s.marker) || n.push(s.marker.parent || s.marker);
              ++i
          }),
          n
      },
      getAllMarks: function() {
          var e = [];
          return this.iter(function(t) {
              var r = t.markedSpans;
              if (r)
                  for (var n = 0; n < r.length; ++n)
                      null != r[n].from && e.push(r[n].marker)
          }),
          e
      },
      posFromIndex: function(e) {
          var t, r = this.first, n = this.lineSeparator().length;
          return this.iter(function(i) {
              var o = i.text.length + n;
              return o > e ? (t = e,
              !0) : (e -= o,
              void ++r)
          }),
          G(this, F(r, t))
      },
      indexFromPos: function(e) {
          var t = (e = G(this, e)).ch;
          if (e.line < this.first || 0 > e.ch)
              return 0;
          var r = this.lineSeparator().length;
          return this.iter(this.first, e.line, function(e) {
              t += e.text.length + r
          }),
          t
      },
      copy: function(e) {
          var t = new Pl(O(this, this.first, this.first + this.size),this.modeOption,this.first,this.lineSep,this.direction);
          return t.scrollTop = this.scrollTop,
          t.scrollLeft = this.scrollLeft,
          t.sel = this.sel,
          t.extend = !1,
          e && (t.history.undoDepth = this.history.undoDepth,
          t.setHistory(this.getHistory())),
          t
      },
      linkedDoc: function(e) {
          e || (e = {});
          var t = this.first
            , r = this.first + this.size;
          null != e.from && e.from > t && (t = e.from),
          null != e.to && e.to < r && (r = e.to);
          var n = new Pl(O(this, t, r),e.mode || this.modeOption,t,this.lineSep,this.direction);
          return e.sharedHist && (n.history = this.history),
          (this.linked || (this.linked = [])).push({
              doc: n,
              sharedHist: e.sharedHist
          }),
          n.linked = [{
              doc: this,
              isParent: !0,
              sharedHist: e.sharedHist
          }],
          function(e, t) {
              for (var r = 0; r < t.length; r++) {
                  var n = t[r]
                    , i = n.find()
                    , o = e.clipPos(i.from)
                    , l = e.clipPos(i.to);
                  if (P(o, l)) {
                      var s = ii(e, o, l, n.primary, n.primary.type);
                      n.markers.push(s),
                      s.parent = n
                  }
              }
          }(n, oi(this)),
          n
      },
      unlinkDoc: function(e) {
          var t = this;
          if (e instanceof Ki && (e = e.doc),
          this.linked)
              for (var r = 0; r < this.linked.length; ++r)
                  if (t.linked[r].doc == e) {
                      t.linked.splice(r, 1),
                      e.unlinkDoc(t),
                      li(oi(t));
                      break
                  }
          if (e.history == this.history) {
              var n = [e.id];
              vn(e, function(e) {
                  return n.push(e.id)
              }, !0),
              e.history = new bn(null),
              e.history.done = On(this.history.done, n),
              e.history.undone = On(this.history.undone, n)
          }
      },
      iterLinkedDocs: function(e) {
          vn(this, e)
      },
      getMode: function() {
          return this.mode
      },
      getEditor: function() {
          return this.cm
      },
      splitLines: function(e) {
          return this.lineSep ? e.split(this.lineSep) : nl(e)
      },
      lineSeparator: function() {
          return this.lineSep || "\n"
      },
      setDirection: Rr(function(e) {
          "rtl" != e && (e = "ltr"),
          e == this.direction || (this.direction = e,
          this.iter(function(e) {
              return e.order = null
          }),
          this.cm && function(e) {
              Er(e, function() {
                  yn(e),
                  Br(e)
              })
          }(this.cm))
      })
  }),
  Pl.prototype.eachLine = Pl.prototype.iter;
  for (var El = 0, zl = !1, Il = {
      3: "Pause",
      8: "Backspace",
      9: "Tab",
      13: "Enter",
      16: "Shift",
      17: "Ctrl",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Esc",
      32: "Space",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "Left",
      38: "Up",
      39: "Right",
      40: "Down",
      44: "PrintScrn",
      45: "Insert",
      46: "Delete",
      59: ";",
      61: "=",
      91: "Mod",
      92: "Mod",
      93: "Mod",
      106: "*",
      107: "=",
      109: "-",
      110: ".",
      111: "/",
      127: "Delete",
      145: "ScrollLock",
      173: "-",
      186: ";",
      187: "=",
      188: ",",
      189: "-",
      190: ".",
      191: "/",
      192: "`",
      219: "[",
      220: "\\",
      221: "]",
      222: "'",
      63232: "Up",
      63233: "Down",
      63234: "Left",
      63235: "Right",
      63272: "Delete",
      63273: "Home",
      63275: "End",
      63276: "PageUp",
      63277: "PageDown",
      63302: "Insert"
  }, Rl = 0; 10 > Rl; Rl++)
      Il[Rl + 48] = Il[Rl + 96] = Rl + "";
  for (var Bl = 65; 90 >= Bl; Bl++)
      Il[Bl] = oo(Bl);
  for (var Gl = 1; 12 >= Gl; Gl++)
      Il[Gl + 111] = Il[Gl + 63235] = "F" + Gl;
  var Ul = {
      basic: {
          Left: "goCharLeft",
          Right: "goCharRight",
          Up: "goLineUp",
          Down: "goLineDown",
          End: "goLineEnd",
          Home: "goLineStartSmart",
          PageUp: "goPageUp",
          PageDown: "goPageDown",
          Delete: "delCharAfter",
          Backspace: "delCharBefore",
          "Shift-Backspace": "delCharBefore",
          Tab: "defaultTab",
          "Shift-Tab": "indentAuto",
          Enter: "newlineAndIndent",
          Insert: "toggleOverwrite",
          Esc: "singleSelection"
      },
      pcDefault: {
          "Ctrl-A": "selectAll",
          "Ctrl-D": "deleteLine",
          "Ctrl-Z": "undo",
          "Shift-Ctrl-Z": "redo",
          "Ctrl-Y": "redo",
          "Ctrl-Home": "goDocStart",
          "Ctrl-End": "goDocEnd",
          "Ctrl-Up": "goLineUp",
          "Ctrl-Down": "goLineDown",
          "Ctrl-Left": "goGroupLeft",
          "Ctrl-Right": "goGroupRight",
          "Alt-Left": "goLineStart",
          "Alt-Right": "goLineEnd",
          "Ctrl-Backspace": "delGroupBefore",
          "Ctrl-Delete": "delGroupAfter",
          "Ctrl-S": "save",
          "Ctrl-F": "find",
          "Ctrl-G": "findNext",
          "Shift-Ctrl-G": "findPrev",
          "Shift-Ctrl-F": "replace",
          "Shift-Ctrl-R": "replaceAll",
          "Ctrl-[": "indentLess",
          "Ctrl-]": "indentMore",
          "Ctrl-U": "undoSelection",
          "Shift-Ctrl-U": "redoSelection",
          "Alt-U": "redoSelection",
          fallthrough: "basic"
      },
      emacsy: {
          "Ctrl-F": "goCharRight",
          "Ctrl-B": "goCharLeft",
          "Ctrl-P": "goLineUp",
          "Ctrl-N": "goLineDown",
          "Alt-F": "goWordRight",
          "Alt-B": "goWordLeft",
          "Ctrl-A": "goLineStart",
          "Ctrl-E": "goLineEnd",
          "Ctrl-V": "goPageDown",
          "Shift-Ctrl-V": "goPageUp",
          "Ctrl-D": "delCharAfter",
          "Ctrl-H": "delCharBefore",
          "Alt-D": "delWordAfter",
          "Alt-Backspace": "delWordBefore",
          "Ctrl-K": "killLine",
          "Ctrl-T": "transposeChars",
          "Ctrl-O": "openLine"
      },
      macDefault: {
          "Cmd-A": "selectAll",
          "Cmd-D": "deleteLine",
          "Cmd-Z": "undo",
          "Shift-Cmd-Z": "redo",
          "Cmd-Y": "redo",
          "Cmd-Home": "goDocStart",
          "Cmd-Up": "goDocStart",
          "Cmd-End": "goDocEnd",
          "Cmd-Down": "goDocEnd",
          "Alt-Left": "goGroupLeft",
          "Alt-Right": "goGroupRight",
          "Cmd-Left": "goLineLeft",
          "Cmd-Right": "goLineRight",
          "Alt-Backspace": "delGroupBefore",
          "Ctrl-Alt-Backspace": "delGroupAfter",
          "Alt-Delete": "delGroupAfter",
          "Cmd-S": "save",
          "Cmd-F": "find",
          "Cmd-G": "findNext",
          "Shift-Cmd-G": "findPrev",
          "Cmd-Alt-F": "replace",
          "Shift-Cmd-Alt-F": "replaceAll",
          "Cmd-[": "indentLess",
          "Cmd-]": "indentMore",
          "Cmd-Backspace": "delWrappedLineLeft",
          "Cmd-Delete": "delWrappedLineRight",
          "Cmd-U": "undoSelection",
          "Shift-Cmd-U": "redoSelection",
          "Ctrl-Up": "goDocStart",
          "Ctrl-Down": "goDocEnd",
          fallthrough: ["basic", "emacsy"]
      }
  };
  Ul.default = Wo ? Ul.macDefault : Ul.pcDefault;
  var Vl = {
      selectAll: Vn,
      singleSelection: function(e) {
          return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), Ko)
      },
      killLine: function(e) {
          return xi(e, function(t) {
              if (t.empty()) {
                  var r = T(e.doc, t.head.line).text.length;
                  return t.head.ch == r && t.head.line < e.lastLine() ? {
                      from: t.head,
                      to: F(t.head.line + 1, 0)
                  } : {
                      from: t.head,
                      to: F(t.head.line, r)
                  }
              }
              return {
                  from: t.from(),
                  to: t.to()
              }
          })
      },
      deleteLine: function(e) {
          return xi(e, function(t) {
              return {
                  from: F(t.from().line, 0),
                  to: G(e.doc, F(t.to().line + 1, 0))
              }
          })
      },
      delLineLeft: function(e) {
          return xi(e, function(e) {
              return {
                  from: F(e.from().line, 0),
                  to: e.from()
              }
          })
      },
      delWrappedLineLeft: function(e) {
          return xi(e, function(t) {
              var r = e.charCoords(t.head, "div").top + 5;
              return {
                  from: e.coordsChar({
                      left: 0,
                      top: r
                  }, "div"),
                  to: t.from()
              }
          })
      },
      delWrappedLineRight: function(e) {
          return xi(e, function(t) {
              var r = e.charCoords(t.head, "div").top + 5
                , n = e.coordsChar({
                  left: e.display.lineDiv.offsetWidth + 100,
                  top: r
              }, "div");
              return {
                  from: t.from(),
                  to: n
              }
          })
      },
      undo: function(e) {
          return e.undo()
      },
      redo: function(e) {
          return e.redo()
      },
      undoSelection: function(e) {
          return e.undoSelection()
      },
      redoSelection: function(e) {
          return e.redoSelection()
      },
      goDocStart: function(e) {
          return e.extendSelection(F(e.firstLine(), 0))
      },
      goDocEnd: function(e) {
          return e.extendSelection(F(e.lastLine()))
      },
      goLineStart: function(e) {
          return e.extendSelectionsBy(function(t) {
              return ki(e, t.head.line)
          }, {
              origin: "+move",
              bias: 1
          })
      },
      goLineStartSmart: function(e) {
          return e.extendSelectionsBy(function(t) {
              return Ni(e, t.head)
          }, {
              origin: "+move",
              bias: 1
          })
      },
      goLineEnd: function(e) {
          return e.extendSelectionsBy(function(t) {
              return Ti(e, t.head.line)
          }, {
              origin: "+move",
              bias: -1
          })
      },
      goLineRight: function(e) {
          return e.extendSelectionsBy(function(t) {
              var r = e.cursorCoords(t.head, "div").top + 5;
              return e.coordsChar({
                  left: e.display.lineDiv.offsetWidth + 100,
                  top: r
              }, "div")
          }, Xo)
      },
      goLineLeft: function(e) {
          return e.extendSelectionsBy(function(t) {
              var r = e.cursorCoords(t.head, "div").top + 5;
              return e.coordsChar({
                  left: 0,
                  top: r
              }, "div")
          }, Xo)
      },
      goLineLeftSmart: function(e) {
          return e.extendSelectionsBy(function(t) {
              var r = e.cursorCoords(t.head, "div").top + 5
                , n = e.coordsChar({
                  left: 0,
                  top: r
              }, "div");
              return n.ch < e.getLine(n.line).search(/\S/) ? Ni(e, t.head) : n
          }, Xo)
      },
      goLineUp: function(e) {
          return e.moveV(-1, "line")
      },
      goLineDown: function(e) {
          return e.moveV(1, "line")
      },
      goPageUp: function(e) {
          return e.moveV(-1, "page")
      },
      goPageDown: function(e) {
          return e.moveV(1, "page")
      },
      goCharLeft: function(e) {
          return e.moveH(-1, "char")
      },
      goCharRight: function(e) {
          return e.moveH(1, "char")
      },
      goColumnLeft: function(e) {
          return e.moveH(-1, "column")
      },
      goColumnRight: function(e) {
          return e.moveH(1, "column")
      },
      goWordLeft: function(e) {
          return e.moveH(-1, "word")
      },
      goGroupRight: function(e) {
          return e.moveH(1, "group")
      },
      goGroupLeft: function(e) {
          return e.moveH(-1, "group")
      },
      goWordRight: function(e) {
          return e.moveH(1, "word")
      },
      delCharBefore: function(e) {
          return e.deleteH(-1, "char")
      },
      delCharAfter: function(e) {
          return e.deleteH(1, "char")
      },
      delWordBefore: function(e) {
          return e.deleteH(-1, "word")
      },
      delWordAfter: function(e) {
          return e.deleteH(1, "word")
      },
      delGroupBefore: function(e) {
          return e.deleteH(-1, "group")
      },
      delGroupAfter: function(e) {
          return e.deleteH(1, "group")
      },
      indentAuto: function(e) {
          return e.indentSelection("smart")
      },
      indentMore: function(e) {
          return e.indentSelection("add")
      },
      indentLess: function(e) {
          return e.indentSelection("subtract")
      },
      insertTab: function(e) {
          return e.replaceSelection("\t")
      },
      insertSoftTab: function(e) {
          for (var t = [], r = e.listSelections(), n = e.options.tabSize, i = 0; i < r.length; i++) {
              var o = r[i].from()
                , l = f(e.getLine(o.line), o.ch, n);
              t.push(p(n - l % n))
          }
          e.replaceSelections(t)
      },
      defaultTab: function(e) {
          e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab")
      },
      transposeChars: function(e) {
          return Er(e, function() {
              for (var t = e.listSelections(), r = [], n = 0; n < t.length; n++)
                  if (t[n].empty()) {
                      var i = t[n].head
                        , o = T(e.doc, i.line).text;
                      if (o)
                          if (i.ch == o.length && (i = new F(i.line,i.ch - 1)),
                          0 < i.ch)
                              i = new F(i.line,i.ch + 1),
                              e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), F(i.line, i.ch - 2), i, "+transpose");
                          else if (i.line > e.doc.first) {
                              var l = T(e.doc, i.line - 1).text;
                              l && (i = new F(i.line,1),
                              e.replaceRange(o.charAt(0) + e.doc.lineSeparator() + l.charAt(l.length - 1), F(i.line - 1, l.length - 1), i, "+transpose"))
                          }
                      r.push(new Al(i,i))
                  }
              e.setSelections(r)
          })
      },
      newlineAndIndent: function(e) {
          return Er(e, function() {
              for (var t = e.listSelections(), r = t.length - 1; 0 <= r; r--)
                  e.replaceRange(e.doc.lineSeparator(), t[r].anchor, t[r].head, "+input");
              t = e.listSelections();
              for (var n = 0; n < t.length; n++)
                  e.indentLine(t[n].from().line, null, !0);
              yr(e)
          })
      },
      openLine: function(e) {
          return e.replaceSelection("\n", "start")
      },
      toggleOverwrite: function(e) {
          return e.toggleOverwrite()
      }
  }
    , Kl = new Bo
    , jl = null
    , Xl = function(e, t, r) {
      this.time = e,
      this.pos = t,
      this.button = r
  };
  Xl.prototype.compare = function(e, t, r) {
      return this.time + 400 > e && 0 == P(t, this.pos) && r == this.button
  }
  ;
  var Yl, _l, ql = {
      toString: function() {
          return "CodeMirror.Init"
      }
  }, $l = {}, Zl = {};
  Ki.defaults = $l,
  Ki.optionHandlers = Zl;
  var Ql = [];
  Ki.defineInitHook = function(e) {
      return Ql.push(e)
  }
  ;
  var Jl = null
    , es = function(e) {
      this.cm = e,
      this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null,
      this.polling = new Bo,
      this.composing = null,
      this.gracePeriod = !1,
      this.readDOMTimeout = null
  };
  es.prototype.init = function(e) {
      function t(e) {
          if (!ve(i, e)) {
              if (i.somethingSelected())
                  Xi({
                      lineWise: !1,
                      text: i.getSelections()
                  }),
                  "cut" == e.type && i.replaceSelection("", null, "cut");
              else {
                  if (!i.options.lineWiseCopyCut)
                      return;
                  var t = $i(i);
                  Xi({
                      lineWise: !0,
                      text: t.text
                  }),
                  "cut" == e.type && i.operation(function() {
                      i.setSelections(t.ranges, 0, Ko),
                      i.replaceSelection("", null, "cut")
                  })
              }
              if (e.clipboardData) {
                  e.clipboardData.clearData();
                  var r = Jl.text.join("\n");
                  if (e.clipboardData.setData("Text", r),
                  e.clipboardData.getData("Text") == r)
                      return void e.preventDefault()
              }
              var l = Qi()
                , s = l.firstChild;
              i.display.lineSpace.insertBefore(l, i.display.lineSpace.firstChild),
              s.value = Jl.text.join("\n");
              var a = document.activeElement;
              Ro(s),
              setTimeout(function() {
                  i.display.lineSpace.removeChild(l),
                  a.focus(),
                  a == o && n.showPrimarySelection()
              }, 50)
          }
      }
      var r = this
        , n = this
        , i = n.cm
        , o = n.div = e.lineDiv;
      Zi(o, i.options.spellcheck),
      tl(o, "paste", function(e) {
          ve(i, e) || _i(e, i) || 11 >= wo && setTimeout(zr(i, function() {
              return r.updateFromDOM()
          }), 20)
      }),
      tl(o, "compositionstart", function(e) {
          r.composing = {
              data: e.data,
              done: !1
          }
      }),
      tl(o, "compositionupdate", function(e) {
          r.composing || (r.composing = {
              data: e.data,
              done: !1
          })
      }),
      tl(o, "compositionend", function(e) {
          r.composing && (e.data != r.composing.data && r.readFromDOMSoon(),
          r.composing.done = !0)
      }),
      tl(o, "touchstart", function() {
          return n.forceCompositionEnd()
      }),
      tl(o, "input", function() {
          r.composing || r.readFromDOMSoon()
      }),
      tl(o, "copy", t),
      tl(o, "cut", t)
  }
  ,
  es.prototype.prepareSelection = function() {
      var e = tr(this.cm, !1);
      return e.focus = this.cm.state.focused,
      e
  }
  ,
  es.prototype.showSelection = function(e, t) {
      e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(),
      this.showMultipleSelections(e))
  }
  ,
  es.prototype.showPrimarySelection = function() {
      var e = window.getSelection()
        , t = this.cm
        , r = t.doc.sel.primary()
        , n = r.from()
        , i = r.to();
      if (t.display.viewTo == t.display.viewFrom || n.line >= t.display.viewTo || i.line < t.display.viewFrom)
          e.removeAllRanges();
      else {
          var o = no(t, e.anchorNode, e.anchorOffset)
            , l = no(t, e.focusNode, e.focusOffset);
          if (!o || o.bad || !l || l.bad || 0 != P(R(o, l), n) || 0 != P(I(o, l), i)) {
              var s = t.display.view
                , a = n.line >= t.display.viewFrom && to(t, n) || {
                  node: s[0].measure.map[2],
                  offset: 0
              }
                , u = i.line < t.display.viewTo && to(t, i);
              if (!u) {
                  var c = s[s.length - 1].measure
                    , f = c.maps ? c.maps[c.maps.length - 1] : c.map;
                  u = {
                      node: f[f.length - 1],
                      offset: f[f.length - 2] - f[f.length - 3]
                  }
              }
              if (!a || !u)
                  return void e.removeAllRanges();
              var h, d = e.rangeCount && e.getRangeAt(0);
              try {
                  h = Po(a.node, a.offset, u.offset, u.node)
              } catch (t) {}
              h && (!go && t.state.focused ? (e.collapse(a.node, a.offset),
              !h.collapsed && (e.removeAllRanges(),
              e.addRange(h))) : (e.removeAllRanges(),
              e.addRange(h)),
              d && null == e.anchorNode ? e.addRange(d) : go && this.startGracePeriod()),
              this.rememberSelection()
          }
      }
  }
  ,
  es.prototype.startGracePeriod = function() {
      var e = this;
      clearTimeout(this.gracePeriod),
      this.gracePeriod = setTimeout(function() {
          e.gracePeriod = !1,
          e.selectionChanged() && e.cm.operation(function() {
              return e.cm.curOp.selectionChanged = !0
          })
      }, 20)
  }
  ,
  es.prototype.showMultipleSelections = function(e) {
      r(this.cm.display.cursorDiv, e.cursors),
      r(this.cm.display.selectionDiv, e.selection)
  }
  ,
  es.prototype.rememberSelection = function() {
      var e = window.getSelection();
      this.lastAnchorNode = e.anchorNode,
      this.lastAnchorOffset = e.anchorOffset,
      this.lastFocusNode = e.focusNode,
      this.lastFocusOffset = e.focusOffset
  }
  ,
  es.prototype.selectionInEditor = function() {
      var e = window.getSelection();
      if (!e.rangeCount)
          return !1;
      var t = e.getRangeAt(0).commonAncestorContainer;
      return o(this.div, t)
  }
  ,
  es.prototype.focus = function() {
      "nocursor" != this.cm.options.readOnly && (!this.selectionInEditor() && this.showSelection(this.prepareSelection(), !0),
      this.div.focus())
  }
  ,
  es.prototype.blur = function() {
      this.div.blur()
  }
  ,
  es.prototype.getField = function() {
      return this.div
  }
  ,
  es.prototype.supportsTouch = function() {
      return !0
  }
  ,
  es.prototype.receivedFocus = function() {
      var e = this;
      this.selectionInEditor() ? this.pollSelection() : Er(this.cm, function() {
          return e.cm.curOp.selectionChanged = !0
      }),
      this.polling.set(this.cm.options.pollInterval, function t() {
          e.cm.state.focused && (e.pollSelection(),
          e.polling.set(e.cm.options.pollInterval, t))
      })
  }
  ,
  es.prototype.selectionChanged = function() {
      var e = window.getSelection();
      return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset
  }
  ,
  es.prototype.pollSelection = function() {
      if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
          var e = window.getSelection()
            , t = this.cm;
          if (Ao && So && this.cm.options.gutters.length && function(e) {
              for (var t = e; t; t = t.parentNode)
                  if (/CodeMirror-gutter-wrapper/.test(t.className))
                      return !0;
              return !1
          }(e.anchorNode))
              return this.cm.triggerOnKeyDown({
                  type: "keydown",
                  keyCode: 8,
                  preventDefault: so
              }),
              this.blur(),
              void this.focus();
          if (!this.composing) {
              this.rememberSelection();
              var r = no(t, e.anchorNode, e.anchorOffset)
                , n = no(t, e.focusNode, e.focusOffset);
              r && n && Er(t, function() {
                  Pn(t.doc, sn(r, n), Ko),
                  (r.bad || n.bad) && (t.curOp.selectionChanged = !0)
              })
          }
      }
  }
  ,
  es.prototype.pollContent = function() {
      null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout),
      this.readDOMTimeout = null);
      var e, t, r, n = this.cm, i = n.display, o = n.doc.sel.primary(), l = o.from(), s = o.to();
      if (0 == l.ch && l.line > n.firstLine() && (l = F(l.line - 1, T(n.doc, l.line - 1).length)),
      s.ch == T(n.doc, s.line).text.length && s.line < n.lastLine() && (s = F(s.line + 1, 0)),
      l.line < i.viewFrom || s.line > i.viewTo - 1)
          return !1;
      l.line == i.viewFrom || 0 == (e = Jt(n, l.line)) ? (t = M(i.view[0].line),
      r = i.view[0].node) : (t = M(i.view[e].line),
      r = i.view[e - 1].node.nextSibling);
      var a, u, c = Jt(n, s.line);
      if (c == i.view.length - 1 ? (a = i.viewTo - 1,
      u = i.lineDiv.lastChild) : (a = M(i.view[c + 1].line) - 1,
      u = i.view[c + 1].node.previousSibling),
      !r)
          return !1;
      for (var f = n.doc.splitLines(function(e, t, r, n, i) {
          function o() {
              u && (a += c,
              u = !1)
          }
          function l(e) {
              e && (o(),
              a += e)
          }
          function s(t) {
              if (1 == t.nodeType) {
                  var r = t.getAttribute("cm-text");
                  if (null != r)
                      return void l(r || t.textContent.replace(/\u200b/g, ""));
                  var a, f = t.getAttribute("cm-marker");
                  if (f) {
                      var h = e.findMarks(F(n, 0), F(i + 1, 0), function(e) {
                          return function(t) {
                              return t.id == e
                          }
                      }(+f));
                      return void (h.length && (a = h[0].find(0)) && l(N(e.doc, a.from, a.to).join(c)))
                  }
                  if ("false" == t.getAttribute("contenteditable"))
                      return;
                  var d = /^(pre|div|p)$/i.test(t.nodeName);
                  d && o();
                  for (var p = 0; p < t.childNodes.length; p++)
                      s(t.childNodes[p]);
                  d && (u = !0)
              } else
                  3 == t.nodeType && l(t.nodeValue)
          }
          for (var a = "", u = !1, c = e.doc.lineSeparator(); s(t),
          t != r; )
              t = t.nextSibling;
          return a
      }(n, r, u, t, a)), h = N(n.doc, F(t, 0), F(a, T(n.doc, a).text.length)); 1 < f.length && 1 < h.length; )
          if (g(f) == g(h))
              f.pop(),
              h.pop(),
              a--;
          else {
              if (f[0] != h[0])
                  break;
              f.shift(),
              h.shift(),
              t++
          }
      for (var d = 0, p = 0, v = f[0], m = h[0], y = fo(v.length, m.length); d < y && v.charCodeAt(d) == m.charCodeAt(d); )
          ++d;
      for (var b = g(f), w = g(h), x = fo(b.length - (1 == f.length ? d : 0), w.length - (1 == h.length ? d : 0)); p < x && b.charCodeAt(b.length - p - 1) == w.charCodeAt(w.length - p - 1); )
          ++p;
      if (1 == f.length && 1 == h.length && t == l.line)
          for (; d && d > l.ch && b.charCodeAt(b.length - p - 1) == w.charCodeAt(w.length - p - 1); )
              d--,
              p++;
      f[f.length - 1] = b.slice(0, b.length - p).replace(/^\u200b+/, ""),
      f[0] = f[0].slice(d).replace(/\u200b+$/, "");
      var C = F(t, d)
        , S = F(a, h.length ? g(h).length - p : 0);
      return 1 < f.length || f[0] || P(C, S) ? ($n(n.doc, f, C, S, "+input"),
      !0) : void 0
  }
  ,
  es.prototype.ensurePolled = function() {
      this.forceCompositionEnd()
  }
  ,
  es.prototype.reset = function() {
      this.forceCompositionEnd()
  }
  ,
  es.prototype.forceCompositionEnd = function() {
      this.composing && (clearTimeout(this.readDOMTimeout),
      this.composing = null,
      this.updateFromDOM(),
      this.div.blur(),
      this.div.focus())
  }
  ,
  es.prototype.readFromDOMSoon = function() {
      var e = this;
      null != this.readDOMTimeout || (this.readDOMTimeout = setTimeout(function() {
          if (e.readDOMTimeout = null,
          e.composing) {
              if (!e.composing.done)
                  return;
              e.composing = null
          }
          e.updateFromDOM()
      }, 80))
  }
  ,
  es.prototype.updateFromDOM = function() {
      var e = this;
      (this.cm.isReadOnly() || !this.pollContent()) && Er(this.cm, function() {
          return Br(e.cm)
      })
  }
  ,
  es.prototype.setUneditable = function(e) {
      e.contentEditable = "false"
  }
  ,
  es.prototype.onKeyPress = function(e) {
      0 == e.charCode || (e.preventDefault(),
      !this.cm.isReadOnly() && zr(this.cm, Yi)(this.cm, oo(null == e.charCode ? e.keyCode : e.charCode), 0))
  }
  ,
  es.prototype.readOnlyChanged = function(e) {
      this.div.contentEditable = ("nocursor" != e) + ""
  }
  ,
  es.prototype.onContextMenu = function() {}
  ,
  es.prototype.resetPosition = function() {}
  ,
  es.prototype.needsContentAttribute = !0;
  var ts = function(e) {
      this.cm = e,
      this.prevInput = "",
      this.pollingFast = !1,
      this.polling = new Bo,
      this.hasSelection = !1,
      this.composing = null
  };
  ts.prototype.init = function(e) {
      function t(e) {
          if (!ve(i, e)) {
              if (i.somethingSelected())
                  Xi({
                      lineWise: !1,
                      text: i.getSelections()
                  });
              else {
                  if (!i.options.lineWiseCopyCut)
                      return;
                  var t = $i(i);
                  Xi({
                      lineWise: !0,
                      text: t.text
                  }),
                  "cut" == e.type ? i.setSelections(t.ranges, null, Ko) : (n.prevInput = "",
                  o.value = t.text.join("\n"),
                  Ro(o))
              }
              "cut" == e.type && (i.state.cutIncoming = !0)
          }
      }
      var r = this
        , n = this
        , i = this.cm;
      this.createField(e);
      var o = this.textarea;
      e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild),
      Oo && (o.style.width = "0px"),
      tl(o, "input", function() {
          bo && 9 <= wo && r.hasSelection && (r.hasSelection = null),
          n.poll()
      }),
      tl(o, "paste", function(e) {
          ve(i, e) || _i(e, i) || (i.state.pasteIncoming = !0,
          n.fastPoll())
      }),
      tl(o, "cut", t),
      tl(o, "copy", t),
      tl(e.scroller, "paste", function(t) {
          pt(e, t) || ve(i, t) || (i.state.pasteIncoming = !0,
          n.focus())
      }),
      tl(e.lineSpace, "selectstart", function(t) {
          pt(e, t) || we(t)
      }),
      tl(o, "compositionstart", function() {
          var e = i.getCursor("from");
          n.composing && n.composing.range.clear(),
          n.composing = {
              start: e,
              range: i.markText(e, i.getCursor("to"), {
                  className: "CodeMirror-composing"
              })
          }
      }),
      tl(o, "compositionend", function() {
          n.composing && (n.poll(),
          n.composing.range.clear(),
          n.composing = null)
      })
  }
  ,
  ts.prototype.createField = function() {
      this.wrapper = Qi(),
      this.textarea = this.wrapper.firstChild
  }
  ,
  ts.prototype.prepareSelection = function() {
      var e = this.cm
        , t = e.display
        , r = e.doc
        , n = tr(e);
      if (e.options.moveInputWithCursor) {
          var i = It(e, r.sel.primary().head, "div")
            , o = t.wrapper.getBoundingClientRect()
            , l = t.lineDiv.getBoundingClientRect();
          n.teTop = ao(0, fo(t.wrapper.clientHeight - 10, i.top + l.top - o.top)),
          n.teLeft = ao(0, fo(t.wrapper.clientWidth - 10, i.left + l.left - o.left))
      }
      return n
  }
  ,
  ts.prototype.showSelection = function(e) {
      var t = this.cm.display;
      r(t.cursorDiv, e.cursors),
      r(t.selectionDiv, e.selection),
      null != e.teTop && (this.wrapper.style.top = e.teTop + "px",
      this.wrapper.style.left = e.teLeft + "px")
  }
  ,
  ts.prototype.reset = function(e) {
      if (!this.contextMenuPending && !this.composing) {
          var t = this.cm;
          if (t.somethingSelected()) {
              this.prevInput = "";
              var r = t.getSelection();
              this.textarea.value = r,
              t.state.focused && Ro(this.textarea),
              bo && 9 <= wo && (this.hasSelection = r)
          } else
              e || (this.prevInput = this.textarea.value = "",
              bo && 9 <= wo && (this.hasSelection = null))
      }
  }
  ,
  ts.prototype.getField = function() {
      return this.textarea
  }
  ,
  ts.prototype.supportsTouch = function() {
      return !1
  }
  ,
  ts.prototype.focus = function() {
      if ("nocursor" != this.cm.options.readOnly && (!Mo || l() != this.textarea))
          try {
              this.textarea.focus()
          } catch (e) {}
  }
  ,
  ts.prototype.blur = function() {
      this.textarea.blur()
  }
  ,
  ts.prototype.resetPosition = function() {
      this.wrapper.style.top = this.wrapper.style.left = 0
  }
  ,
  ts.prototype.receivedFocus = function() {
      this.slowPoll()
  }
  ,
  ts.prototype.slowPoll = function() {
      var e = this;
      this.pollingFast || this.polling.set(this.cm.options.pollInterval, function() {
          e.poll(),
          e.cm.state.focused && e.slowPoll()
      })
  }
  ,
  ts.prototype.fastPoll = function() {
      var e = !1
        , t = this;
      t.pollingFast = !0,
      t.polling.set(20, function r() {
          t.poll() || e ? (t.pollingFast = !1,
          t.slowPoll()) : (e = !0,
          t.polling.set(60, r))
      })
  }
  ,
  ts.prototype.poll = function() {
      var e = this
        , t = this.cm
        , r = this.textarea
        , n = this.prevInput;
      if (this.contextMenuPending || !t.state.focused || il(r) && !n && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq)
          return !1;
      var i = r.value;
      if (i == n && !t.somethingSelected())
          return !1;
      if (bo && 9 <= wo && this.hasSelection === i || Wo && /[\uf700-\uf7ff]/.test(i))
          return t.display.input.reset(),
          !1;
      if (t.doc.sel == t.display.selForContextMenu) {
          var o = i.charCodeAt(0);
          if (8203 != o || n || (n = "​"),
          8666 == o)
              return this.reset(),
              this.cm.execCommand("undo")
      }
      for (var l = 0, s = fo(n.length, i.length); l < s && n.charCodeAt(l) == i.charCodeAt(l); )
          ++l;
      return Er(t, function() {
          Yi(t, i.slice(l), n.length - l, null, e.composing ? "*compose" : null),
          1e3 < i.length || -1 < i.indexOf("\n") ? r.value = e.prevInput = "" : e.prevInput = i,
          e.composing && (e.composing.range.clear(),
          e.composing.range = t.markText(e.composing.start, t.getCursor("to"), {
              className: "CodeMirror-composing"
          }))
      }),
      !0
  }
  ,
  ts.prototype.ensurePolled = function() {
      this.pollingFast && this.poll() && (this.pollingFast = !1)
  }
  ,
  ts.prototype.onKeyPress = function() {
      bo && 9 <= wo && (this.hasSelection = null),
      this.fastPoll()
  }
  ,
  ts.prototype.onContextMenu = function(e) {
      function t() {
          if (null != l.selectionStart) {
              var e = i.somethingSelected()
                , t = "​" + (e ? l.value : "");
              l.value = "⇚",
              l.value = t,
              n.prevInput = e ? "" : "​",
              l.selectionStart = 1,
              l.selectionEnd = t.length,
              o.selForContextMenu = i.doc.sel
          }
      }
      function r() {
          if (n.contextMenuPending = !1,
          n.wrapper.style.cssText = c,
          l.style.cssText = u,
          bo && 9 > wo && o.scrollbars.setScrollTop(o.scroller.scrollTop = a),
          null != l.selectionStart) {
              (!bo || bo && 9 > wo) && t();
              var e = 0
                , r = function() {
                  o.selForContextMenu == i.doc.sel && 0 == l.selectionStart && 0 < l.selectionEnd && "​" == n.prevInput ? zr(i, Vn)(i) : 10 > e++ ? o.detectingSelectAll = setTimeout(r, 500) : (o.selForContextMenu = null,
                  o.input.reset())
              };
              o.detectingSelectAll = setTimeout(r, 200)
          }
      }
      var n = this
        , i = n.cm
        , o = i.display
        , l = n.textarea
        , s = Qt(i, e)
        , a = o.scroller.scrollTop;
      if (s && !Lo) {
          i.options.resetSelectionOnContextMenu && -1 == i.doc.sel.contains(s) && zr(i, Pn)(i.doc, sn(s), Ko);
          var u = l.style.cssText
            , c = n.wrapper.style.cssText;
          n.wrapper.style.cssText = "position: absolute";
          var f, h = n.wrapper.getBoundingClientRect();
          if (l.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - h.top - 5) + "px; left: " + (e.clientX - h.left - 5) + "px;\n      z-index: 1000; background: " + (bo ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",
          xo && (f = window.scrollY),
          o.input.focus(),
          xo && window.scrollTo(null, f),
          o.input.reset(),
          i.somethingSelected() || (l.value = n.prevInput = " "),
          n.contextMenuPending = !0,
          o.selForContextMenu = i.doc.sel,
          clearTimeout(o.detectingSelectAll),
          bo && 9 <= wo && t(),
          zo) {
              Se(e);
              var d = function() {
                  pe(window, "mouseup", d),
                  setTimeout(r, 20)
              };
              tl(window, "mouseup", d)
          } else
              setTimeout(r, 50)
      }
  }
  ,
  ts.prototype.readOnlyChanged = function(e) {
      e || this.reset(),
      this.textarea.disabled = "nocursor" == e
  }
  ,
  ts.prototype.setUneditable = function() {}
  ,
  ts.prototype.needsContentAttribute = !1,
  function(e) {
      function t(t, n, i, o) {
          e.defaults[t] = n,
          i && (r[t] = o ? function(e, t, r) {
              r != ql && i(e, t, r)
          }
          : i)
      }
      var r = e.optionHandlers;
      e.defineOption = t,
      e.Init = ql,
      t("value", "", function(e, t) {
          return e.setValue(t)
      }, !0),
      t("mode", null, function(e, t) {
          e.doc.modeOption = t,
          hn(e)
      }, !0),
      t("indentUnit", 2, hn, !0),
      t("indentWithTabs", !1),
      t("smartIndent", !0),
      t("tabSize", 4, function(e) {
          dn(e),
          Wt(e),
          Br(e)
      }, !0),
      t("lineSeparator", null, function(e, t) {
          if (e.doc.lineSep = t,
          t) {
              var r = []
                , n = e.doc.first;
              e.doc.iter(function(e) {
                  for (var i, o = 0; -1 != (i = e.text.indexOf(t, o)); )
                      o = i + t.length,
                      r.push(F(n, i));
                  n++
              });
              for (var i = r.length - 1; 0 <= i; i--)
                  $n(e.doc, t, r[i], F(r[i].line, r[i].ch + t.length))
          }
      }),
      t("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g, function(e, t, r) {
          e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"),"g"),
          r != ql && e.refresh()
      }),
      t("specialCharPlaceholder", Ye, function(e) {
          return e.refresh()
      }, !0),
      t("electricChars", !0),
      t("inputStyle", Mo ? "contenteditable" : "textarea", function() {
          throw new Error("inputStyle can not (yet) be changed in a running editor")
      }, !0),
      t("spellcheck", !1, function(e, t) {
          return e.getInputField().spellcheck = t
      }, !0),
      t("rtlMoveVisually", !Ho),
      t("wholeLineUpdateBefore", !0),
      t("theme", "default", function(e) {
          Bi(e),
          Gi(e)
      }, !0),
      t("keyMap", "default", function(e, t, r) {
          var n = wi(t)
            , i = r != ql && wi(r);
          i && i.detach && i.detach(e, n),
          n.attach && n.attach(e, i || null)
      }),
      t("extraKeys", null),
      t("configureMouse", null),
      t("lineWrapping", !1, Vi, !0),
      t("gutters", [], function(e) {
          tn(e.options),
          Gi(e)
      }, !0),
      t("fixedGutter", !0, function(e, t) {
          e.display.gutters.style.left = t ? qt(e.display) + "px" : "0",
          e.refresh()
      }, !0),
      t("coverGutterNextToScrollbar", !1, function(e) {
          return Tr(e)
      }, !0),
      t("scrollbarStyle", "native", function(e) {
          Or(e),
          Tr(e),
          e.display.scrollbars.setScrollTop(e.doc.scrollTop),
          e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)
      }, !0),
      t("lineNumbers", !1, function(e) {
          tn(e.options),
          Gi(e)
      }, !0),
      t("firstLineNumber", 1, Gi, !0),
      t("lineNumberFormatter", function(e) {
          return e
      }, Gi, !0),
      t("showCursorWhenSelecting", !1, er, !0),
      t("resetSelectionOnContextMenu", !0),
      t("lineWiseCopyCut", !0),
      t("pasteLinesPerSelection", !0),
      t("readOnly", !1, function(e, t) {
          "nocursor" == t && (ur(e),
          e.display.input.blur()),
          e.display.input.readOnlyChanged(t)
      }),
      t("disableInput", !1, function(e, t) {
          t || e.display.input.reset()
      }, !0),
      t("dragDrop", !0, Ui),
      t("allowDropFileTypes", null),
      t("cursorBlinkRate", 530),
      t("cursorScrollMargin", 0),
      t("cursorHeight", 1, er, !0),
      t("singleCursorHeightPerLine", !0, er, !0),
      t("workTime", 100),
      t("workDelay", 100),
      t("flattenSpans", !0, dn, !0),
      t("addModeClass", !1, dn, !0),
      t("pollInterval", 100),
      t("undoDepth", 200, function(e, t) {
          return e.doc.history.undoDepth = t
      }),
      t("historyEventDelay", 1250),
      t("viewportMargin", 10, function(e) {
          return e.refresh()
      }, !0),
      t("maxHighlightLength", 1e4, dn, !0),
      t("moveInputWithCursor", !0, function(e, t) {
          t || e.display.input.resetPosition()
      }),
      t("tabindex", null, function(e, t) {
          return e.display.input.getField().tabIndex = t || ""
      }),
      t("autofocus", null),
      t("direction", "ltr", function(e, t) {
          return e.doc.setDirection(t)
      }, !0)
  }(Ki),
  function(e) {
      var t = e.optionHandlers
        , r = e.helpers = {};
      e.prototype = {
          constructor: e,
          focus: function() {
              window.focus(),
              this.display.input.focus()
          },
          setOption: function(e, r) {
              var n = this.options
                , i = n[e];
              n[e] == r && "mode" != e || (n[e] = r,
              t.hasOwnProperty(e) && zr(this, t[e])(this, r, i),
              ge(this, "optionChange", this, e))
          },
          getOption: function(e) {
              return this.options[e]
          },
          getDoc: function() {
              return this.doc
          },
          addKeyMap: function(e, t) {
              this.state.keyMaps[t ? "push" : "unshift"](wi(e))
          },
          removeKeyMap: function(e) {
              for (var t = this.state.keyMaps, r = 0; r < t.length; ++r)
                  if (t[r] == e || t[r].name == e)
                      return t.splice(r, 1),
                      !0
          },
          addOverlay: Ir(function(t, r) {
              var n = t.token ? t : e.getMode(this.options, t);
              if (n.startState)
                  throw new Error("Overlays may not be stateful.");
              (function(e, t, r) {
                  for (var n = 0, i = r(t); n < e.length && r(e[n]) <= i; )
                      n++;
                  e.splice(n, 0, t)
              }
              )(this.state.overlays, {
                  mode: n,
                  modeSpec: t,
                  opaque: r && r.opaque,
                  priority: r && r.priority || 0
              }, function(e) {
                  return e.priority
              }),
              this.state.modeGen++,
              Br(this)
          }),
          removeOverlay: Ir(function(e) {
              for (var t, r = this.state.overlays, n = 0; n < r.length; ++n)
                  if ((t = r[n].modeSpec) == e || "string" == typeof e && t.name == e)
                      return r.splice(n, 1),
                      this.state.modeGen++,
                      void Br(this)
          }),
          indentLine: Ir(function(e, t, r) {
              "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"),
              D(this.doc, e) && ji(this, e, t, r)
          }),
          indentSelection: Ir(function(e) {
              for (var t, r = this, n = this.doc.sel.ranges, i = -1, o = 0; o < n.length; o++)
                  if ((t = n[o]).empty())
                      t.head.line > i && (ji(r, t.head.line, e, !0),
                      i = t.head.line,
                      o == r.doc.sel.primIndex && yr(r));
                  else {
                      var l = t.from()
                        , s = t.to()
                        , a = ao(i, l.line);
                      i = fo(r.lastLine(), s.line - (s.ch ? 0 : 1)) + 1;
                      for (var u = a; u < i; ++u)
                          ji(r, u, e);
                      var c = r.doc.sel.ranges;
                      0 == l.ch && n.length == c.length && 0 < c[o].from().ch && Dn(r.doc, o, new Al(l,c[o].to()), Ko)
                  }
          }),
          getTokenAt: function(e, t) {
              return Ge(this, e, t)
          },
          getLineTokens: function(e, t) {
              return Ge(this, F(e), t, !0)
          },
          getTokenTypeAt: function(e) {
              e = G(this.doc, e);
              var t, r = Ee(this, T(this.doc, e.line)), n = 0, i = (r.length - 1) / 2, o = e.ch;
              if (0 == o)
                  t = r[2];
              else
                  for (; ; ) {
                      var l = n + i >> 1;
                      if ((l ? r[2 * l - 1] : 0) >= o)
                          i = l;
                      else {
                          if (!(r[2 * l + 1] < o)) {
                              t = r[2 * l + 2];
                              break
                          }
                          n = l + 1
                      }
                  }
              var s = t ? t.indexOf("overlay ") : -1;
              return 0 > s ? t : 0 == s ? null : t.slice(0, s - 1)
          },
          getModeAt: function(t) {
              var r = this.doc.mode;
              return r.innerMode ? e.innerMode(r, this.getTokenAt(t).state).mode : r
          },
          getHelper: function(e, t) {
              return this.getHelpers(e, t)[0]
          },
          getHelpers: function(e, t) {
              var n = [];
              if (!r.hasOwnProperty(t))
                  return n;
              var i = r[t]
                , o = this.getModeAt(e);
              if ("string" == typeof o[t])
                  i[o[t]] && n.push(i[o[t]]);
              else if (o[t])
                  for (var l, s = 0; s < o[t].length; s++)
                      (l = i[o[t][s]]) && n.push(l);
              else
                  o.helperType && i[o.helperType] ? n.push(i[o.helperType]) : i[o.name] && n.push(i[o.name]);
              for (var a, u = 0; u < i._global.length; u++)
                  (a = i._global[u]).pred(o, this) && -1 == h(n, a.val) && n.push(a.val);
              return n
          },
          getStateAfter: function(e, t) {
              var r = this.doc;
              return ze(this, (e = B(r, null == e ? r.first + r.size - 1 : e)) + 1, t).state
          },
          cursorCoords: function(e, t) {
              var r = this.doc.sel.primary();
              return It(this, null == e ? r.head : "object" == typeof e ? G(this.doc, e) : e ? r.from() : r.to(), t || "page")
          },
          charCoords: function(e, t) {
              return zt(this, G(this.doc, e), t || "page")
          },
          coordsChar: function(e, t) {
              return Gt(this, (e = Et(this, e, t || "page")).left, e.top)
          },
          lineAtHeight: function(e, t) {
              return e = Et(this, {
                  top: e,
                  left: 0
              }, t || "page").top,
              W(this.doc, e + this.display.viewOffset)
          },
          heightAtLine: function(e, t, r) {
              var n, i = !1;
              if ("number" == typeof e) {
                  var o = this.doc.first + this.doc.size - 1;
                  e < this.doc.first ? e = this.doc.first : e > o && (e = o,
                  i = !0),
                  n = T(this.doc, e)
              } else
                  n = e;
              return Pt(this, n, {
                  top: 0,
                  left: 0
              }, t || "page", r || i).top + (i ? this.doc.height - ae(n) : 0)
          },
          defaultTextHeight: function() {
              return Xt(this.display)
          },
          defaultCharWidth: function() {
              return Yt(this.display)
          },
          getViewport: function() {
              return {
                  from: this.display.viewFrom,
                  to: this.display.viewTo
              }
          },
          addWidget: function(e, t, r, n, i) {
              var o = this.display
                , l = (e = It(this, G(this.doc, e))).bottom
                , s = e.left;
              if (t.style.position = "absolute",
              t.setAttribute("cm-ignore-events", "true"),
              this.display.input.setUneditable(t),
              o.sizer.appendChild(t),
              "over" == n)
                  l = e.top;
              else if ("above" == n || "near" == n) {
                  var a = ao(o.wrapper.clientHeight, this.doc.height)
                    , u = ao(o.sizer.clientWidth, o.lineSpace.clientWidth);
                  ("above" == n || e.bottom + t.offsetHeight > a) && e.top > t.offsetHeight ? l = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= a && (l = e.bottom),
                  s + t.offsetWidth > u && (s = u - t.offsetWidth)
              }
              t.style.top = l + "px",
              t.style.left = t.style.right = "",
              "right" == i ? (s = o.sizer.clientWidth - t.offsetWidth,
              t.style.right = "0px") : ("left" == i ? s = 0 : "middle" == i && (s = (o.sizer.clientWidth - t.offsetWidth) / 2),
              t.style.left = s + "px"),
              r && function(e, t) {
                  var r = vr(e, t);
                  null != r.scrollTop && Cr(e, r.scrollTop),
                  null != r.scrollLeft && Lr(e, r.scrollLeft)
              }(this, {
                  left: s,
                  top: l,
                  right: s + t.offsetWidth,
                  bottom: l + t.offsetHeight
              })
          },
          triggerOnKeyDown: Ir(Di),
          triggerOnKeyPress: Ir(Fi),
          triggerOnKeyUp: Hi,
          triggerOnMouseDown: Ir(Pi),
          execCommand: function(e) {
              if (Vl.hasOwnProperty(e))
                  return Vl[e].call(null, this)
          },
          triggerElectric: Ir(function(e) {
              qi(this, e)
          }),
          findPosH: function(e, t, r, n) {
              var i = 1;
              0 > t && (i = -1,
              t = -t);
              for (var o = G(this.doc, e), l = 0; l < t && !(o = Ji(this.doc, o, i, r, n)).hitSide; ++l)
                  ;
              return o
          },
          moveH: Ir(function(e, t) {
              var r = this;
              this.extendSelectionsBy(function(n) {
                  return r.display.shift || r.doc.extend || n.empty() ? Ji(r.doc, n.head, e, t, r.options.rtlMoveVisually) : 0 > e ? n.from() : n.to()
              }, Xo)
          }),
          deleteH: Ir(function(e, t) {
              var r = this.doc.sel
                , n = this.doc;
              r.somethingSelected() ? n.replaceSelection("", null, "+delete") : xi(this, function(r) {
                  var i = Ji(n, r.head, e, t, !1);
                  return 0 > e ? {
                      from: i,
                      to: r.head
                  } : {
                      from: r.head,
                      to: i
                  }
              })
          }),
          findPosV: function(e, t, r, n) {
              var i = 1
                , o = n;
              0 > t && (i = -1,
              t = -t);
              for (var l, s = G(this.doc, e), a = 0; a < t && (l = It(this, s, "div"),
              null == o ? o = l.left : l.left = o,
              !(s = eo(this, l, i, r)).hitSide); ++a)
                  ;
              return s
          },
          moveV: Ir(function(e, t) {
              var r = this
                , n = this.doc
                , i = []
                , o = !this.display.shift && !n.extend && n.sel.somethingSelected();
              if (n.extendSelectionsBy(function(l) {
                  if (o)
                      return 0 > e ? l.from() : l.to();
                  var s = It(r, l.head, "div");
                  null != l.goalColumn && (s.left = l.goalColumn),
                  i.push(s.left);
                  var a = eo(r, s, e, t);
                  return "page" == t && l == n.sel.primary() && mr(r, zt(r, a, "div").top - s.top),
                  a
              }, Xo),
              i.length)
                  for (var l = 0; l < n.sel.ranges.length; l++)
                      n.sel.ranges[l].goalColumn = i[l]
          }),
          findWordAt: function(e) {
              var t = T(this.doc, e.line).text
                , r = e.ch
                , n = e.ch;
              if (t) {
                  var i = this.getHelper(e, "wordChars");
                  "before" != e.sticky && n != t.length || !r ? ++n : --r;
                  for (var o = t.charAt(r), l = w(o, i) ? function(e) {
                      return w(e, i)
                  }
                  : /\s/.test(o) ? function(e) {
                      return /\s/.test(e)
                  }
                  : function(e) {
                      return !/\s/.test(e) && !w(e)
                  }
                  ; 0 < r && l(t.charAt(r - 1)); )
                      --r;
                  for (; n < t.length && l(t.charAt(n)); )
                      ++n
              }
              return new Al(F(e.line, r),F(e.line, n))
          },
          toggleOverwrite: function(e) {
              null != e && e == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? s(this.display.cursorDiv, "CodeMirror-overwrite") : Io(this.display.cursorDiv, "CodeMirror-overwrite"),
              ge(this, "overwriteToggle", this, this.state.overwrite))
          },
          hasFocus: function() {
              return this.display.input.getField() == l()
          },
          isReadOnly: function() {
              return !(!this.options.readOnly && !this.doc.cantEdit)
          },
          scrollTo: Ir(function(e, t) {
              br(this, e, t)
          }),
          getScrollInfo: function() {
              var e = this.display.scroller;
              return {
                  left: e.scrollLeft,
                  top: e.scrollTop,
                  height: e.scrollHeight - yt(this) - this.display.barHeight,
                  width: e.scrollWidth - yt(this) - this.display.barWidth,
                  clientHeight: wt(this),
                  clientWidth: bt(this)
              }
          },
          scrollIntoView: Ir(function(e, t) {
              null == e ? (e = {
                  from: this.doc.sel.primary().head,
                  to: null
              },
              null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = {
                  from: F(e, 0),
                  to: null
              } : null == e.from && (e = {
                  from: e,
                  to: null
              }),
              e.to || (e.to = e.from),
              e.margin = t || 0,
              null == e.from.line ? xr(this, e.from, e.to, e.margin) : function(e, t) {
                  wr(e),
                  e.curOp.scrollToPos = t
              }(this, e)
          }),
          setSize: Ir(function(e, t) {
              var r = this
                , n = function(e) {
                  return "number" == typeof e || /^\d+$/.test(e + "") ? e + "px" : e
              };
              null != e && (this.display.wrapper.style.width = n(e)),
              null != t && (this.display.wrapper.style.height = n(t)),
              this.options.lineWrapping && Mt(this);
              var i = this.display.viewFrom;
              this.doc.iter(i, this.display.viewTo, function(e) {
                  if (e.widgets)
                      for (var t = 0; t < e.widgets.length; t++)
                          if (e.widgets[t].noHScroll) {
                              Gr(r, i, "widget");
                              break
                          }
                  ++i
              }),
              this.curOp.forceUpdate = !0,
              ge(this, "refresh", this)
          }),
          operation: function(e) {
              return Er(this, e)
          },
          startOperation: function() {
              return Ar(this)
          },
          endOperation: function() {
              return Mr(this)
          },
          refresh: Ir(function() {
              var e = this.display.cachedTextHeight;
              Br(this),
              this.curOp.forceUpdate = !0,
              Wt(this),
              br(this, this.doc.scrollLeft, this.doc.scrollTop),
              Qr(this),
              (null == e || .5 < so(e - Xt(this.display))) && Zt(this),
              ge(this, "refresh", this)
          }),
          swapDoc: Ir(function(e) {
              var t = this.doc;
              return t.cm = null,
              mn(this, e),
              Wt(this),
              this.display.input.reset(),
              br(this, e.scrollLeft, e.scrollTop),
              this.curOp.forceScroll = !0,
              et(this, "swapDoc", this, t),
              t
          }),
          getInputField: function() {
              return this.display.input.getField()
          },
          getWrapperElement: function() {
              return this.display.wrapper
          },
          getScrollerElement: function() {
              return this.display.scroller
          },
          getGutterElement: function() {
              return this.display.gutters
          }
      },
      be(e),
      e.registerHelper = function(t, n, i) {
          r.hasOwnProperty(t) || (r[t] = e[t] = {
              _global: []
          }),
          r[t][n] = i
      }
      ,
      e.registerGlobalHelper = function(t, n, i, o) {
          e.registerHelper(t, n, o),
          r[t]._global.push({
              pred: i,
              val: o
          })
      }
  }(Ki);
  var rs = ["iter", "insert", "remove", "copy", "getEditor", "constructor"];
  for (var ns in Pl.prototype)
      Pl.prototype.hasOwnProperty(ns) && 0 > h(rs, ns) && (Ki.prototype[ns] = function(e) {
          return function() {
              return e.apply(this.doc, arguments)
          }
      }(Pl.prototype[ns]));
  return be(Pl),
  Ki.inputStyles = {
      textarea: ts,
      contenteditable: es
  },
  Ki.defineMode = function(e) {
      Ki.defaults.mode || "null" == e || (Ki.defaults.mode = e),
      function(e, t) {
          2 < arguments.length && (t.dependencies = Array.prototype.slice.call(arguments, 2)),
          sl[e] = t
      }
      .apply(this, arguments)
  }
  ,
  Ki.defineMIME = function(e, t) {
      al[e] = t
  }
  ,
  Ki.defineMode("null", function() {
      return {
          token: function(e) {
              return e.skipToEnd()
          }
      }
  }),
  Ki.defineMIME("text/plain", "null"),
  Ki.defineExtension = function(e, t) {
      Ki.prototype[e] = t
  }
  ,
  Ki.defineDocExtension = function(e, t) {
      Pl.prototype[e] = t
  }
  ,
  Ki.fromTextArea = function(e, t) {
      function r() {
          e.value = a.getValue()
      }
      if ((t = t ? c(t) : {}).value = e.value,
      !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex),
      !t.placeholder && e.placeholder && (t.placeholder = e.placeholder),
      null == t.autofocus) {
          var n = l();
          t.autofocus = n == e || null != e.getAttribute("autofocus") && n == document.body
      }
      var i;
      if (e.form && (tl(e.form, "submit", r),
      !t.leaveSubmitMethodAlone)) {
          var o = e.form;
          i = o.submit;
          try {
              var s = o.submit = function() {
                  r(),
                  o.submit = i,
                  o.submit(),
                  o.submit = s
              }
          } catch (t) {}
      }
      t.finishInit = function(t) {
          t.save = r,
          t.getTextArea = function() {
              return e
          }
          ,
          t.toTextArea = function() {
              t.toTextArea = isNaN,
              r(),
              e.parentNode.removeChild(t.getWrapperElement()),
              e.style.display = "",
              e.form && (pe(e.form, "submit", r),
              "function" == typeof e.form.submit && (e.form.submit = i))
          }
      }
      ,
      e.style.display = "none";
      var a = Ki(function(t) {
          return e.parentNode.insertBefore(t, e.nextSibling)
      }, t);
      return a
  }
  ,
  function(e) {
      e.off = pe,
      e.on = tl,
      e.wheelEventPixels = nn,
      e.Doc = Pl,
      e.splitLines = nl,
      e.countColumn = f,
      e.findColumn = d,
      e.isWordChar = b,
      e.Pass = Vo,
      e.signal = ge,
      e.Line = pl,
      e.changeEnd = an,
      e.scrollbarModel = Sl,
      e.Pos = F,
      e.cmpPos = P,
      e.modes = sl,
      e.mimeModes = al,
      e.resolveMode = Ae,
      e.getMode = Me,
      e.modeExtensions = ul,
      e.extendMode = We,
      e.copyState = De,
      e.startState = Fe,
      e.innerMode = He,
      e.commands = Vl,
      e.keyMap = Ul,
      e.keyName = bi,
      e.isModifierKey = mi,
      e.lookupKey = vi,
      e.normalizeKeyMap = gi,
      e.StringStream = cl,
      e.SharedTextMarker = Hl,
      e.TextMarker = Dl,
      e.LineWidget = Ml,
      e.e_preventDefault = we,
      e.e_stopPropagation = xe,
      e.e_stop = Se,
      e.addClass = s,
      e.contains = o,
      e.rmClass = Io,
      e.keyNames = Il
  }(Ki),
  Ki.version = "5.36.1",
  Ki
});
