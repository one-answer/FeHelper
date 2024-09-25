var _gaq = _gaq || []
  , widthOffset = 375
  , heightOffset = 90
  , d = new DataConverter("converter")
  , sidebar = $("#header")
  , win = $(window)
  , base = $("#pageContainer")
  , w = base.width() - widthOffset
  , h = win.height() - heightOffset;
function updateSettings(e) {
    if (e && _gaq.push(["_trackEvent", "Settings", e.currentTarget.id]),
    d.includeWhiteSpace = $("#includeWhiteSpaceCB").prop("checked"),
    d.includeWhiteSpace) {
        $("input[name=indentType]").removeAttr("disabled");
        var i = $("input[name=indentType]:checked").val();
        "tabs" === i ? d.indent = "\t" : "spaces" === i && (d.indent = "  ")
    } else
        $("input[name=indentType]").attr("disabled", "disabled");
    if (d.headersProvided = $("#headersProvidedCB").prop("checked"),
    d.headersProvided) {
        $("input[name=headerModifications]").removeAttr("disabled");
        var t = $("input[name=headerModifications]:checked").val();
        "downcase" === t ? (d.downcaseHeaders = !0,
        d.upcaseHeaders = !1) : "upcase" === t ? (d.downcaseHeaders = !1,
        d.upcaseHeaders = !0) : "none" === t && (d.downcaseHeaders = !1,
        d.upcaseHeaders = !1)
    } else
        $("input[name=headerModifications]").attr("disabled", "disabled");
    d.delimiter = $("input[name=delimiter]:checked").val(),
    d.decimal = $("input[name=decimal]:checked").val(),
    d.useUnderscores = !0,
    d.root = $("#root").val(),
    d.child = $("#child").val(),
    d.convert()
}
d.create(w, h),
d.resize(w, h),
sidebar.height(h),
$(".settingsElement").change(updateSettings),
$(window).bind("resize", function() {
    w = base.width() - widthOffset,
    h = win.height() - heightOffset,
    d.resize(w, h),
    sidebar.height(h)
}),
updateSettings();
