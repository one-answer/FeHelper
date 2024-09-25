new Vue({
    el: "#pageContainer",
    data: {
        selectedType: "Javascript",
        sourceContent: "",
        resultContent: "",
        showCopyBtn: !1
    },
    mounted: function() {
        "chrome-extension:" === location.protocol && chrome.runtime.onMessage.addListener( (e, t, n) => ("TAB_CREATED_OR_UPDATED" === e.type && e.content && e.event === location.pathname.split("/")[1] && (this.sourceContent = e.content,
        this.format()),
        n && n(),
        !0)),
        this.$refs.codeSource.focus()
    },
    methods: {
        format: function() {
            if (!this.sourceContent.trim())
                return alert("内容为空，不需要美化处理！");
            this.toast("格式化进行中...");
            let e = e => {
                e = e.replace(/>/g, "&gt;").replace(/</g, "&lt;"),
                e = '<pre class="language-' + this.selectedType.toLowerCase() + ' line-numbers"><code>' + e + "</code></pre>",
                this.resultContent = e,
                this.$nextTick( () => {
                    Prism.highlightAll(),
                    this.showCopyBtn = !0,
                    this.toast("格式化完成！")
                }
                )
            }
            ;
            switch (this.selectedType) {
            case "Javascript":
                let t = {
                    brace_style: "collapse",
                    break_chained_methods: !1,
                    indent_char: " ",
                    indent_scripts: "keep",
                    indent_size: "4",
                    keep_array_indentation: !0,
                    preserve_newlines: !0,
                    space_after_anon_function: !0,
                    space_before_conditional: !0,
                    unescape_strings: !1,
                    wrap_line_length: "120",
                    max_preserve_newlines: "5",
                    jslint_happy: !1,
                    end_with_newline: !1,
                    indent_inner_html: !1,
                    comma_first: !1,
                    e4x: !1
                };
                e(js_beautify(this.sourceContent, t));
                break;
            case "CSS":
                css_beautify(this.sourceContent, {}, t => e(t));
                break;
            case "HTML":
                e(html_beautify(this.sourceContent, {
                    indent_size: 15
                }));
                break;
            case "SQL":
                e(vkbeautify.sql(this.sourceContent, 4));
                break;
            default:
                e(vkbeautify.xml(this.sourceContent))
            }
        },
        copy: function() {
            !function(e) {
                let t = document.createElement("textarea");
                t.style.position = "fixed",
                t.style.opacity = 0,
                t.value = e,
                document.body.appendChild(t),
                t.select(),
                document.execCommand("Copy"),
                document.body.removeChild(t),
                alert("复制成功，随处粘贴可用！")
            }(this.$refs.jfContentBox.textContent)
        },
        toast(e) {
            window.clearTimeout(window.feHelperAlertMsgTid);
            let t = document.querySelector("#fehelper_alertmsg");
            if (t)
                t.querySelector("p").innerHTML = e,
                t.style.display = "block";
            else {
                let n = document.createElement("div");
                n.innerHTML = '<div id="fehelper_alertmsg" style="position:fixed;bottom:5px;left:5px;z-index:1000000"><p style="background:#000;display:inline-block;color:#fff;text-align:center;padding:10px 10px;margin:0 auto;font-size:14px;border-radius:4px;">' + e + "</p></div>",
                t = n.childNodes[0],
                document.body.appendChild(t)
            }
            window.feHelperAlertMsgTid = window.setTimeout(function() {
                t.style.display = "none"
            }, 3e3)
        }
    }
});
