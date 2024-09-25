let hashtoTimeoutId, previewElm, previewTextArea, editor = null;
new Vue({
    el: "#pageContainer",
    data: {
        showPreview: !1,
        previewText: "效果预览",
        codeType: "Markdown",
        nextCodeType: "HTML",
        toolName: {
            HTML: "HTML转Markdown",
            Markdown: "Markdown编辑器"
        }
    },
    mounted: function() {
        this.init()
    },
    methods: {
        trans: function() {
            editor.setValue(""),
            this.codeType = {
                HTML: "Markdown",
                Markdown: "HTML"
            }[this.codeType],
            this.nextCodeType = {
                HTML: "Markdown",
                Markdown: "HTML"
            }[this.nextCodeType];
            let e = this.$refs.modMarkdownBox.classList;
            "HTML" === this.codeType ? (e.add("mode-h2m"),
            previewElm.innerHTML = "<textarea disabled></textarea>",
            previewTextArea = previewElm.querySelector("textarea")) : (e.remove("mode-h2m"),
            previewElm.innerHTML = "")
        },
        init() {
            previewElm = this.$refs.boxPreview,
            (editor = CodeMirror.fromTextArea(this.$refs.elEditor, {
                mode: "gfm",
                lineNumbers: !0,
                matchBrackets: !0,
                lineWrapping: !0,
                theme: "default"
            })).on("change", this.updateHashAndPreview),
            window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL,
            navigator.saveBlob = navigator.saveBlob || navigator.msSaveBlob || navigator.mozSaveBlob || navigator.webkitSaveBlob,
            window.saveAs = window.saveAs || window.webkitSaveAs || window.mozSaveAs || window.msSaveAs,
            document.addEventListener("keydown", e => {
                if (83 === e.keyCode && (e.ctrlKey || e.metaKey))
                    return e.preventDefault(),
                    this.saveMarkdown("md"),
                    !1
            }
            ),
            document.addEventListener("drop", function(e) {
                e.preventDefault(),
                e.stopPropagation();
                let t = e.dataTransfer.files[0]
                  , o = new FileReader;
                o.onload = function(e) {
                    editor.setValue(e.target.result)
                }
                ,
                o.readAsText(t)
            }, !1),
            this.initWithHash()
        },
        initWithHash() {
            if ("HTML" !== this.codeType)
                if (window.location.hash) {
                    let e = window.location.hash.replace(/^#/, "");
                    if ("view:" === e.slice(0, 5)) {
                        let t = decodeURIComponent(escape(RawDeflate.inflate(atob(e.slice(5)))));
                        previewElm.innerHTML = marked(t),
                        previewElm.querySelectorAll("pre code").forEach(e => {
                            hljs.highlightBlock(e)
                        }
                        ),
                        document.body.className = "view"
                    } else
                        editor.setValue(decodeURIComponent(escape(RawDeflate.inflate(atob(e))))),
                        this.updateHashAndPreview(editor),
                        editor.focus()
                } else
                    this.updateHashAndPreview(editor),
                    editor.focus()
        },
        updateHashAndPreview() {
            try {
                "HTML" === this.codeType ? previewTextArea.value = h2m(editor.getValue(), {
                    converter: "CommonMark"
                }) : (previewElm.innerHTML = marked(editor.getValue()),
                previewElm.querySelectorAll("pre code").forEach(e => {
                    hljs.highlightBlock(e)
                }
                ),
                clearTimeout(hashtoTimeoutId),
                hashtoTimeoutId = setTimeout(function() {
                    window.location.hash = btoa(RawDeflate.deflate(unescape(encodeURIComponent(editor.getValue()))))
                }, 1e3))
            } catch (e) {
                console.log(e)
            }
        },
        saveMarkdown(e) {
            let t = new Date
              , o = "FH-" + t.getFullYear() + (t.getMonth() + 1) + t.getDate() + t.getHours() + t.getMinutes() + t.getSeconds() + `.${e}`
              , i = editor.getValue();
            "HTML" === this.codeType ? "html" !== e && (i = previewTextArea.value) : "html" === e && (i = DemoTpl.exportHtml.replace("#title#", o).replace("#style#", DemoTpl.exportCss).replace("#html#", this.getParsedHtml()));
            let n = new Blob([i],{
                type: "md" === e ? "text/plain" : "text/html"
            });
            if (window.saveAs)
                window.saveAs(n, o);
            else if (navigator.saveBlob)
                navigator.saveBlob(n, o);
            else {
                let e = URL.createObjectURL(n)
                  , t = document.createElement("a");
                t.setAttribute("href", e),
                t.setAttribute("download", o);
                let i = document.createEvent("MouseEvents");
                i.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null),
                t.dispatchEvent(i)
            }
        },
        getParsedHtml: () => previewElm.innerHTML,
        insert(e) {
            editor.replaceSelection({
                b: "** text-here **",
                i: "* text-here *",
                quote: "\n> text-here ",
                code: "\n```javascript\n\n\n```\n",
                "unordered-list": "\n\n- text-here\n- text-here\n- text-here\n",
                "ordered-list": "\n\n1. text-here\n2. text-here\n3. text-here\n",
                link: "\n[text-here](your-link-url)",
                image: "\n![text-here](your-image-src)"
            }[e] || ""),
            editor.focus()
        },
        getResult: function() {
            this.$refs.rstCode.select()
        },
        setDemo: function() {
            editor.setValue(DemoTpl[this.codeType.toLowerCase()])
        },
        importContent: function() {
            let e = this
              , t = document.getElementById("fileInput");
            t || ((t = document.createElement("input")).id = "fileInput",
            t.type = "file",
            t.accept = {
                HTML: "text/html",
                Markdown: "text/x-markdown"
            }[e.codeType],
            t.style.cssText = "position:relative;top:-1000px;left:-1000px;",
            t.onchange = function(e) {
                let o = new FileReader;
                o.readAsText(t.files[0], "utf-8"),
                o.onload = (e => {
                    editor.setValue(e.target.result),
                    document.body.removeChild(t)
                }
                )
            }
            ,
            document.body.appendChild(t)),
            t.click()
        },
        togglePreview() {
            let e = this.$refs.modMarkdownBox.classList;
            e.contains("preview-closed") ? e.remove("preview-closed") : e.add("preview-closed")
        },
        exportContent: function(e) {
            let t = "<html><head><meta charset='utf-8'/><title></title><style>" + DemoTpl.printCss + "</style></head><body class='markdown-body'>" + this.getParsedHtml() + "</body></html>"
              , o = window.open();
            o.focus(),
            o.document.write(t),
            e || (o.print(),
            o.document.close(),
            o.close())
        }
    }
});
