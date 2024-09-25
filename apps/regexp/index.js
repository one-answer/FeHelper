$.fn.extend({
    textareaAutoHeight: function(t) {
        this._options = {
            minHeight: 0,
            maxHeight: 1e5
        },
        this.init = function() {
            for (var e in t)
                this._options[e] = t[e];
            for (var e in 0 === this._options.minHeight && (this._options.minHeight = parseFloat($(this).height())),
            this._options)
                null == $(this).attr(e) && $(this).attr(e, this._options[e]);
            $(this).keyup(this.resetHeight).change(this.resetHeight).focus(this.resetHeight)
        }
        ,
        this.resetHeight = function() {
            var t = parseFloat($(this).attr("minHeight"))
              , e = parseFloat($(this).attr("maxHeight"));
            $(this).height(0);
            var i = parseFloat(this.scrollHeight);
            i = i < t ? t : i > e ? e : i,
            $(this).height(i).scrollTop(i),
            i >= e ? $(this).css("overflow-y", "scroll") : $(this).css("overflow-y", "hidden")
        }
        ,
        this.init()
    }
});
var RegExpTools = function() {
    "use strict";
    var t, e, i, n, h, s, a, r = function(t, e) {
        for (var i = [], n = 0, h = e.text.length; n < h; n++)
            i.push("<" + t + ' data-id="tmp_id_' + e.index + '">' + e.text.charAt(n) + "</" + t + ">");
        return i.join("")
    }, o = function(t, e) {
        if (t) {
            var i = []
              , n = 0;
            $.each(e, function(h, s) {
                0 === h ? 0 === s.index ? i.push(r("b", s)) : (i.push(r("i", {
                    index: 0,
                    text: t.substring(0, s.index)
                })),
                i.push(r("b", s))) : (n = e[h - 1].index + e[h - 1].text.length,
                i.push(r("i", {
                    index: n,
                    text: t.substring(n, s.index)
                })),
                i.push(r("b", s)))
            }),
            h.html(i.join("")),
            $("tr[id^=tr_tmp_id_]").click(function(t) {
                var e = $(this).attr("data-index");
                $("b[data-id=tmp_id_" + e + "]").animate({
                    opacity: 0
                }, 200).delay().animate({
                    opacity: 1
                }, 200).delay().animate({
                    opacity: 0
                }, 200).delay().animate({
                    opacity: 1
                }, 200)
            })
        } else
            h.html("")
    }, l = function(t) {
        var e = ["<table class='table table-bordered table-striped table-condensed table-hover'>"];
        return e.push('<tr class="active"><th class="num">序号</th><th>匹配结果</th></tr>'),
        e.push('<tr><td colspan="2">' + t + "</td></tr>"),
        e.push("</table>"),
        e.join("")
    }, c = function(h) {
        s.height(e.height() + 24);
        var a, r, c = t.val().trim(), d = e.val().trim();
        if (c && d) {
            var u = function(t) {
                try {
                    return new Function("return " + t)()
                } catch (t) {
                    return null
                }
            }(c);
            if (!u || !u instanceof RegExp)
                return i.html(l("正则表达式错误！")),
                n.html("0个"),
                void o();
            var p = [];
            d.replace(u, function() {
                var t = arguments[0]
                  , e = arguments[arguments.length - 2];
                p.push({
                    text: t,
                    index: e
                })
            }),
            p && p.length ? (i.html((a = p,
            (r = ["<table class='table table-bordered table-striped table-condensed table-hover'>"]).push('<tr class="active"><th class="num">序号</th><th>匹配结果</th><th>在原字符串中的位置</th></tr>'),
            $.each(a, function(t, e) {
                r.push('<tr id="tr_tmp_id_' + e.index + '" data-index="' + e.index + '">'),
                r.push('<td class="num">' + (t + 1) + '</td><td class="content">' + e.text + '</td><td class="index">' + e.index + "</td>"),
                r.push("</tr>")
            }),
            r.push("</table>"),
            r.join(""))),
            n.html(p.length + "个"),
            o(e.val(), p)) : (i.html(l("不能匹配")),
            n.html("0个"),
            o())
        } else
            i.html(l("不能匹配")),
            n.html("0个"),
            o()
    };
    return {
        init: function() {
            t = $("#regText"),
            e = $("#srcCode"),
            h = $("#srcBackground"),
            s = $("#srcWrapper"),
            i = $("#rstCode").html(l("暂无输入")),
            n = $("#rstCount"),
            a = $("#regList"),
            t.textareaAutoHeight({
                minHeight: 34
            }),
            e.textareaAutoHeight({
                minHeight: 50
            }),
            h.textareaAutoHeight({
                minHeight: 50
            }),
            $("#regText,#srcCode").keyup(c).change(c).bind("paste", c),
            a.change(function(e) {
                var i = $(this).val()
                  , n = $("#regTip");
                t.val(i),
                i ? n.show() : n.hide()
            })
        }
    }
}();
RegExpTools.init();
