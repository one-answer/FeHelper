!function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror"), require("../markdown/markdown"), require("../../addon/mode/overlay")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../markdown/markdown", "../../addon/mode/overlay"], e) : e(CodeMirror)
}(function(e) {
    "use strict";
    var t = /^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?«»“”‘’]))/i;
    e.defineMode("gfm", function(a, o) {
        var n = 0;
        var i = {
            startState: function() {
                return {
                    code: !1,
                    codeBlock: !1,
                    ateSpace: !1
                }
            },
            copyState: function(e) {
                return {
                    code: e.code,
                    codeBlock: e.codeBlock,
                    ateSpace: e.ateSpace
                }
            },
            token: function(e, a) {
                if (a.combineTokens = null,
                a.codeBlock)
                    return e.match(/^```+/) ? (a.codeBlock = !1,
                    null) : (e.skipToEnd(),
                    null);
                if (e.sol() && (a.code = !1),
                e.sol() && e.match(/^```+/))
                    return e.skipToEnd(),
                    a.codeBlock = !0,
                    null;
                if ("`" === e.peek()) {
                    e.next();
                    var i = e.pos;
                    e.eatWhile("`");
                    var r = 1 + e.pos - i;
                    return a.code ? r === n && (a.code = !1) : (n = r,
                    a.code = !0),
                    null
                }
                if (a.code)
                    return e.next(),
                    null;
                if (e.eatSpace())
                    return a.ateSpace = !0,
                    null;
                if ((e.sol() || a.ateSpace) && (a.ateSpace = !1,
                !1 !== o.gitHubSpice)) {
                    if (e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?=.{0,6}\d)(?:[a-f0-9]{7,40}\b)/))
                        return a.combineTokens = !0,
                        "link";
                    if (e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/))
                        return a.combineTokens = !0,
                        "link"
                }
                return e.match(t) && "](" != e.string.slice(e.start - 2, e.start) && (0 == e.start || /\W/.test(e.string.charAt(e.start - 1))) ? (a.combineTokens = !0,
                "link") : (e.next(),
                null)
            },
            blankLine: function(e) {
                return e.code = !1,
                null
            }
        }
          , r = {
            taskLists: !0,
            strikethrough: !0,
            emoji: !0
        };
        for (var s in o)
            r[s] = o[s];
        return r.name = "markdown",
        e.overlayMode(e.getMode(a, r), i)
    }, "markdown"),
    e.defineMIME("text/x-gfm", "gfm")
});
