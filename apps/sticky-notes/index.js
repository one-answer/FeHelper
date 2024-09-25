let StickyNotes = ( () => {
    let t = () => {
        let t = !1;
        window.onbeforeunload = function(e) {
            t && ((e || window.event).returnValue = "当前还有未保存的笔记，确定要离开么？")
        }
        ,
        $("#addnote").click(function() {
            return t = !0,
            html5sticky.addNote(),
            !1
        }),
        $("#remove").click(function() {
            return html5sticky.deleteAllNotes(),
            !1
        }),
        $(document.body).delegate(".delete_stickynote", "click", function(t) {
            return html5sticky.deleteNote($(this)),
            !1
        }).delegate(".close_stickynote", "click", function(e) {
            return t = !1,
            html5sticky.closeNote($(this)),
            !1
        }).delegate(".save_stickynote", "click", function(e) {
            return t = !1,
            html5sticky.saveNote($(this)),
            !1
        }).delegate(".note_common", "click", function(t) {
            return $(this).find(".btn-close").hide(),
            html5sticky.enlargeNote($(this)),
            !1
        }).delegate(".note_common", "mouseover", function(t) {
            $(this).find(".btn-close").show()
        }).delegate(".note_common", "mouseout", function(t) {
            $(this).find(".btn-close").hide()
        }),
        $("#collapse").click(function(t) {
            return html5sticky.collapse(),
            !1
        }),
        $("#expand").click(function(t) {
            return html5sticky.expand(),
            !1
        }),
        $(document).keyup(function(t) {
            27 === t.keyCode && ($("#overlay").remove(),
            $(".bignore").remove())
        }),
        $("#export").click(function(t) {
            return html5sticky.export(),
            !1
        }),
        $("#import").click(function(t) {
            return confirm("仅支持再次导入【之前用本工具导出的*.zip包】，请确认zip包已准备好？") && html5sticky.importNotes(),
            !1
        }),
        $("#folders").delegate("li", "click", function(t) {
            $(this).addClass("x-selected").siblings("li").removeClass("x-selected");
            let e = $(this).text()
              , i = $(this).attr("id").replace(/^f_/, "");
            html5sticky.setCurrentFolder(e, i),
            html5sticky.loadNotes(i)
        }),
        $("#createFolder").click(function(t) {
            let e = html5sticky.createFolder();
            return e && e.trigger("click"),
            !1
        })
    }
    ;
    return {
        init: () => {
            html5sticky.buildFoldersAndInitNotes(),
            t()
        }
    }
}
)();
StickyNotes.init();
