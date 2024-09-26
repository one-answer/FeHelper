!function(e) {
  "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
}(function(e) {
  "use strict";
  function t(e) {
      for (var t = {}, r = 0; r < e.length; ++r)
          t[e[r]] = !0;
      return t
  }
  e.defineMode("css", function(t, r) {
      r.propertyKeywords || (r = e.resolveMode("text/css"));
      var o, i, a = t.indentUnit, n = r.tokenHooks, l = r.mediaTypes || {}, s = r.mediaFeatures || {}, d = r.propertyKeywords || {}, c = r.nonStandardPropertyKeywords || {}, u = r.colorKeywords || {}, p = r.valueKeywords || {}, m = r.fontProperties || {}, h = r.allowNested;
      function b(e, t) {
          return o = t,
          e
      }
      function g(e) {
          return function(t, r) {
              for (var o, i = !1; null != (o = t.next()); ) {
                  if (o == e && !i) {
                      ")" == e && t.backUp(1);
                      break
                  }
                  i = !i && "\\" == o
              }
              return (o == e || !i && ")" != e) && (r.tokenize = null),
              b("string", "string")
          }
      }
      function f(e, t) {
          return e.next(),
          e.match(/\s*[\"\')]/, !1) ? t.tokenize = null : t.tokenize = g(")"),
          b(null, "(")
      }
      function w(e, t, r) {
          this.type = e,
          this.indent = t,
          this.prev = r
      }
      function y(e, t, r) {
          return e.context = new w(r,t.indentation() + a,e.context),
          r
      }
      function k(e) {
          return e.context = e.context.prev,
          e.context.type
      }
      function v(e, t, r) {
          return q[r.context.type](e, t, r)
      }
      function x(e, t, r, o) {
          for (var i = o || 1; i > 0; i--)
              r.context = r.context.prev;
          return v(e, t, r)
      }
      function z(e) {
          var t = e.current().toLowerCase();
          i = p.hasOwnProperty(t) ? "atom" : u.hasOwnProperty(t) ? "keyword" : "variable"
      }
      var q = {
          top: function(e, t, r) {
              if ("{" == e)
                  return y(r, t, "block");
              if ("}" == e && r.context.prev)
                  return k(r);
              if ("@media" == e)
                  return y(r, t, "media");
              if ("@font-face" == e)
                  return "font_face_before";
              if (/^@(-(moz|ms|o|webkit)-)?keyframes$/.test(e))
                  return "keyframes";
              if (e && "@" == e.charAt(0))
                  return y(r, t, "at");
              if ("hash" == e)
                  i = "builtin";
              else if ("word" == e)
                  i = "tag";
              else {
                  if ("variable-definition" == e)
                      return "maybeprop";
                  if ("interpolation" == e)
                      return y(r, t, "interpolation");
                  if (":" == e)
                      return "pseudo";
                  if (h && "(" == e)
                      return y(r, t, "parens")
              }
              return r.context.type
          },
          block: function(e, t, r) {
              if ("word" == e) {
                  var o = t.current().toLowerCase();
                  return d.hasOwnProperty(o) ? (i = "property",
                  "maybeprop") : c.hasOwnProperty(o) ? (i = "string-2",
                  "maybeprop") : h ? (i = t.match(/^\s*:(?:\s|$)/, !1) ? "property" : "tag",
                  "block") : (i += " error",
                  "maybeprop")
              }
              return "meta" == e ? "block" : h || "hash" != e && "qualifier" != e ? q.top(e, t, r) : (i = "error",
              "block")
          },
          maybeprop: function(e, t, r) {
              return ":" == e ? y(r, t, "prop") : v(e, t, r)
          },
          prop: function(e, t, r) {
              if (";" == e)
                  return k(r);
              if ("{" == e && h)
                  return y(r, t, "propBlock");
              if ("}" == e || "{" == e)
                  return x(e, t, r);
              if ("(" == e)
                  return y(r, t, "parens");
              if ("hash" != e || /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t.current())) {
                  if ("word" == e)
                      z(t);
                  else if ("interpolation" == e)
                      return y(r, t, "interpolation")
              } else
                  i += " error";
              return "prop"
          },
          propBlock: function(e, t, r) {
              return "}" == e ? k(r) : "word" == e ? (i = "property",
              "maybeprop") : r.context.type
          },
          parens: function(e, t, r) {
              return "{" == e || "}" == e ? x(e, t, r) : ")" == e ? k(r) : "(" == e ? y(r, t, "parens") : ("word" == e && z(t),
              "parens")
          },
          pseudo: function(e, t, r) {
              return "word" == e ? (i = "variable-3",
              r.context.type) : v(e, t, r)
          },
          media: function(e, t, r) {
              if ("(" == e)
                  return y(r, t, "media_parens");
              if ("}" == e)
                  return x(e, t, r);
              if ("{" == e)
                  return k(r) && y(r, t, h ? "block" : "top");
              if ("word" == e) {
                  var o = t.current().toLowerCase();
                  i = "only" == o || "not" == o || "and" == o ? "keyword" : l.hasOwnProperty(o) ? "attribute" : s.hasOwnProperty(o) ? "property" : "error"
              }
              return r.context.type
          },
          media_parens: function(e, t, r) {
              return ")" == e ? k(r) : "{" == e || "}" == e ? x(e, t, r, 2) : q.media(e, t, r)
          },
          font_face_before: function(e, t, r) {
              return "{" == e ? y(r, t, "font_face") : v(e, t, r)
          },
          font_face: function(e, t, r) {
              return "}" == e ? k(r) : "word" == e ? (i = m.hasOwnProperty(t.current().toLowerCase()) ? "property" : "error",
              "maybeprop") : "font_face"
          },
          keyframes: function(e, t, r) {
              return "word" == e ? (i = "variable",
              "keyframes") : "{" == e ? y(r, t, "top") : v(e, t, r)
          },
          at: function(e, t, r) {
              return ";" == e ? k(r) : "{" == e || "}" == e ? x(e, t, r) : ("word" == e ? i = "tag" : "hash" == e && (i = "builtin"),
              "at")
          },
          interpolation: function(e, t, r) {
              return "}" == e ? k(r) : "{" == e || ";" == e ? x(e, t, r) : ("variable" != e && (i = "error"),
              "interpolation")
          }
      };
      return {
          startState: function(e) {
              return {
                  tokenize: null,
                  state: "top",
                  context: new w("top",e || 0,null)
              }
          },
          token: function(e, t) {
              if (!t.tokenize && e.eatSpace())
                  return null;
              var r = (t.tokenize || function(e, t) {
                  var r = e.next();
                  if (n[r]) {
                      var o = n[r](e, t);
                      if (!1 !== o)
                          return o
                  }
                  return "@" == r ? (e.eatWhile(/[\w\\\-]/),
                  b("def", e.current())) : "=" == r || ("~" == r || "|" == r) && e.eat("=") ? b(null, "compare") : '"' == r || "'" == r ? (t.tokenize = g(r),
                  t.tokenize(e, t)) : "#" == r ? (e.eatWhile(/[\w\\\-]/),
                  b("atom", "hash")) : "!" == r ? (e.match(/^\s*\w*/),
                  b("keyword", "important")) : /\d/.test(r) || "." == r && e.eat(/\d/) ? (e.eatWhile(/[\w.%]/),
                  b("number", "unit")) : "-" !== r ? /[,+>*\/]/.test(r) ? b(null, "select-op") : "." == r && e.match(/^-?[_a-z][_a-z0-9-]*/i) ? b("qualifier", "qualifier") : /[:;{}\[\]\(\)]/.test(r) ? b(null, r) : "u" == r && e.match("rl(") ? (e.backUp(1),
                  t.tokenize = f,
                  b("property", "word")) : /[\w\\\-]/.test(r) ? (e.eatWhile(/[\w\\\-]/),
                  b("property", "word")) : b(null, null) : /[\d.]/.test(e.peek()) ? (e.eatWhile(/[\w.%]/),
                  b("number", "unit")) : e.match(/^\w+-/) ? b("meta", "meta") : void 0
              }
              )(e, t);
              return r && "object" == typeof r && (o = r[1],
              r = r[0]),
              i = r,
              t.state = q[t.state](o, e, t),
              i
          },
          indent: function(e, t) {
              var r = e.context
                , o = t && t.charAt(0)
                , i = r.indent;
              return "prop" != r.type || "}" != o && ")" != o || (r = r.prev),
              !r.prev || ("}" != o || "block" != r.type && "top" != r.type && "interpolation" != r.type && "font_face" != r.type) && (")" != o || "parens" != r.type && "media_parens" != r.type) && ("{" != o || "at" != r.type && "media" != r.type) || (i = r.indent - a,
              r = r.prev),
              i
          },
          electricChars: "}",
          blockCommentStart: "/*",
          blockCommentEnd: "*/",
          fold: "brace"
      }
  });
  var r = ["all", "aural", "braille", "handheld", "print", "projection", "screen", "tty", "tv", "embossed"]
    , o = t(r)
    , i = ["width", "min-width", "max-width", "height", "min-height", "max-height", "device-width", "min-device-width", "max-device-width", "device-height", "min-device-height", "max-device-height", "aspect-ratio", "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio", "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color", "max-color", "color-index", "min-color-index", "max-color-index", "monochrome", "min-monochrome", "max-monochrome", "resolution", "min-resolution", "max-resolution", "scan", "grid"]
    , a = t(i)
    , n = ["align-content", "align-items", "align-self", "alignment-adjust", "alignment-baseline", "anchor-point", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "appearance", "azimuth", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "baseline-shift", "binding", "bleed", "bookmark-label", "bookmark-level", "bookmark-state", "bookmark-target", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "color", "color-profile", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "crop", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "dominant-baseline", "drop-initial-after-adjust", "drop-initial-after-align", "drop-initial-before-adjust", "drop-initial-before-align", "drop-initial-size", "drop-initial-value", "elevation", "empty-cells", "fit", "fit-position", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "float-offset", "flow-from", "flow-into", "font", "font-feature-settings", "font-family", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-weight", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-position", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-start", "grid-row", "grid-row-end", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "inline-box-align", "justify-content", "left", "letter-spacing", "line-break", "line-height", "line-stacking", "line-stacking-ruby", "line-stacking-shift", "line-stacking-strategy", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marker-offset", "marks", "marquee-direction", "marquee-loop", "marquee-play-count", "marquee-speed", "marquee-style", "max-height", "max-width", "min-height", "min-width", "move-to", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-style", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page", "page-break-after", "page-break-before", "page-break-inside", "page-policy", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pitch", "pitch-range", "play-during", "position", "presentation-level", "punctuation-trim", "quotes", "region-break-after", "region-break-before", "region-break-inside", "region-fragment", "rendering-intent", "resize", "rest", "rest-after", "rest-before", "richness", "right", "rotation", "rotation-point", "ruby-align", "ruby-overhang", "ruby-position", "ruby-span", "shape-image-threshold", "shape-inside", "shape-margin", "shape-outside", "size", "speak", "speak-as", "speak-header", "speak-numeral", "speak-punctuation", "speech-rate", "stress", "string-set", "tab-size", "table-layout", "target", "target-name", "target-new", "target-position", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-skip", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-height", "text-indent", "text-justify", "text-outline", "text-overflow", "text-shadow", "text-size-adjust", "text-space-collapse", "text-transform", "text-underline-position", "text-wrap", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "volume", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index", "clip-path", "clip-rule", "mask", "enable-background", "filter", "flood-color", "flood-opacity", "lighting-color", "stop-color", "stop-opacity", "pointer-events", "color-interpolation", "color-interpolation-filters", "color-rendering", "fill", "fill-opacity", "fill-rule", "image-rendering", "marker", "marker-end", "marker-mid", "marker-start", "shape-rendering", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-rendering", "baseline-shift", "dominant-baseline", "glyph-orientation-horizontal", "glyph-orientation-vertical", "text-anchor", "writing-mode"]
    , l = t(n)
    , s = ["scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-dark-shadow-color", "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color", "scrollbar-3d-light-color", "scrollbar-track-color", "shape-inside", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "zoom"]
    , d = t(s)
    , c = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"]
    , u = t(c)
    , p = ["above", "absolute", "activeborder", "activecaption", "afar", "after-white-space", "ahead", "alias", "all", "all-scroll", "alternate", "always", "amharic", "amharic-abegede", "antialiased", "appworkspace", "arabic-indic", "armenian", "asterisks", "auto", "avoid", "avoid-column", "avoid-page", "avoid-region", "background", "backwards", "baseline", "below", "bidi-override", "binary", "bengali", "blink", "block", "block-axis", "bold", "bolder", "border", "border-box", "both", "bottom", "break", "break-all", "break-word", "button", "button-bevel", "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "cambodian", "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret", "cell", "center", "checkbox", "circle", "cjk-earthly-branch", "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote", "col-resize", "collapse", "column", "compact", "condensed", "contain", "content", "content-box", "context-menu", "continuous", "copy", "cover", "crop", "cross", "crosshair", "currentcolor", "cursive", "dashed", "decimal", "decimal-leading-zero", "default", "default-button", "destination-atop", "destination-in", "destination-out", "destination-over", "devanagari", "disc", "discard", "document", "dot-dash", "dot-dot-dash", "dotted", "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out", "element", "ellipse", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede", "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er", "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er", "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et", "ethiopic-halehame-gez", "ethiopic-halehame-om-et", "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et", "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig", "ew-resize", "expanded", "extra-condensed", "extra-expanded", "fantasy", "fast", "fill", "fixed", "flat", "footnotes", "forwards", "from", "geometricPrecision", "georgian", "graytext", "groove", "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hebrew", "help", "hidden", "hide", "higher", "highlight", "highlighttext", "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "icon", "ignore", "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite", "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis", "inline-block", "inline-table", "inset", "inside", "intrinsic", "invert", "italic", "justify", "kannada", "katakana", "katakana-iroha", "keep-all", "khmer", "landscape", "lao", "large", "larger", "left", "level", "lighter", "line-through", "linear", "lines", "list-item", "listbox", "listitem", "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian", "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian", "lower-roman", "lowercase", "ltr", "malayalam", "match", "media-controls-background", "media-current-time-display", "media-fullscreen-button", "media-mute-button", "media-play-button", "media-return-to-realtime-button", "media-rewind-button", "media-seek-back-button", "media-seek-forward-button", "media-slider", "media-sliderthumb", "media-time-remaining-display", "media-volume-slider", "media-volume-slider-container", "media-volume-sliderthumb", "medium", "menu", "menulist", "menulist-button", "menulist-text", "menulist-textfield", "menutext", "message-box", "middle", "min-intrinsic", "mix", "mongolian", "monospace", "move", "multiple", "myanmar", "n-resize", "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop", "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap", "ns-resize", "nw-resize", "nwse-resize", "oblique", "octal", "open-quote", "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset", "outside", "outside-shape", "overlay", "overline", "padding", "padding-box", "painted", "page", "paused", "persian", "plus-darker", "plus-lighter", "pointer", "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d", "progress", "push-button", "radio", "read-only", "read-write", "read-write-plaintext-only", "rectangle", "region", "relative", "repeat", "repeat-x", "repeat-y", "reset", "reverse", "rgb", "rgba", "ridge", "right", "round", "row-resize", "rtl", "run-in", "running", "s-resize", "sans-serif", "scroll", "scrollbar", "se-resize", "searchfield", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "semi-condensed", "semi-expanded", "separate", "serif", "show", "sidama", "single", "skip-white-space", "slide", "slider-horizontal", "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow", "small", "small-caps", "small-caption", "smaller", "solid", "somali", "source-atop", "source-in", "source-out", "source-over", "space", "square", "square-button", "start", "static", "status-bar", "stretch", "stroke", "sub", "subpixel-antialiased", "super", "sw-resize", "table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group", "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai", "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight", "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er", "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top", "transparent", "ultra-condensed", "ultra-expanded", "underline", "up", "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal", "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url", "vertical", "vertical-text", "visible", "visibleFill", "visiblePainted", "visibleStroke", "visual", "w-resize", "wait", "wave", "wider", "window", "windowframe", "windowtext", "x-large", "x-small", "xor", "xx-large", "xx-small"]
    , m = t(p)
    , h = t(["font-family", "src", "unicode-range", "font-variant", "font-feature-settings", "font-stretch", "font-weight", "font-style"])
    , b = r.concat(i).concat(n).concat(s).concat(c).concat(p);
  function g(e, t) {
      for (var r, o = !1; null != (r = e.next()); ) {
          if (o && "/" == r) {
              t.tokenize = null;
              break
          }
          o = "*" == r
      }
      return ["comment", "comment"]
  }
  function f(e, t) {
      return e.skipTo("--\x3e") ? (e.match("--\x3e"),
      t.tokenize = null) : e.skipToEnd(),
      ["comment", "comment"]
  }
  e.registerHelper("hintWords", "css", b),
  e.defineMIME("text/css", {
      mediaTypes: o,
      mediaFeatures: a,
      propertyKeywords: l,
      nonStandardPropertyKeywords: d,
      colorKeywords: u,
      valueKeywords: m,
      fontProperties: h,
      tokenHooks: {
          "<": function(e, t) {
              return !!e.match("!--") && (t.tokenize = f,
              f(e, t))
          },
          "/": function(e, t) {
              return !!e.eat("*") && (t.tokenize = g,
              g(e, t))
          }
      },
      name: "css"
  }),
  e.defineMIME("text/x-scss", {
      mediaTypes: o,
      mediaFeatures: a,
      propertyKeywords: l,
      nonStandardPropertyKeywords: d,
      colorKeywords: u,
      valueKeywords: m,
      fontProperties: h,
      allowNested: !0,
      tokenHooks: {
          "/": function(e, t) {
              return e.eat("/") ? (e.skipToEnd(),
              ["comment", "comment"]) : e.eat("*") ? (t.tokenize = g,
              g(e, t)) : ["operator", "operator"]
          },
          ":": function(e) {
              return !!e.match(/\s*\{/) && [null, "{"]
          },
          $: function(e) {
              return e.match(/^[\w-]+/),
              e.match(/^\s*:/, !1) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"]
          },
          "#": function(e) {
              return !!e.eat("{") && [null, "interpolation"]
          }
      },
      name: "css",
      helperType: "scss"
  }),
  e.defineMIME("text/x-less", {
      mediaTypes: o,
      mediaFeatures: a,
      propertyKeywords: l,
      nonStandardPropertyKeywords: d,
      colorKeywords: u,
      valueKeywords: m,
      fontProperties: h,
      allowNested: !0,
      tokenHooks: {
          "/": function(e, t) {
              return e.eat("/") ? (e.skipToEnd(),
              ["comment", "comment"]) : e.eat("*") ? (t.tokenize = g,
              g(e, t)) : ["operator", "operator"]
          },
          "@": function(e) {
              return !e.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/, !1) && (e.eatWhile(/[\w\\\-]/),
              e.match(/^\s*:/, !1) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"])
          },
          "&": function() {
              return ["atom", "atom"]
          }
      },
      name: "css",
      helperType: "less"
  })
});
