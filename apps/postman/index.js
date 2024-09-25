const JSON_SORT_TYPE_KEY = "json_sort_type_key";
new Vue({
    el: "#pageContainer",
    data: {
        urlContent: "",
        methodContent: "GET",
        resultContent: "",
        funcName: "",
        paramContent: "",
        responseHeaders: [],
        jfCallbackName_start: "",
        jfCallbackName_end: "",
        errorMsgForJson: "",
        originalJsonStr: "",
        headerList: [1 * new Date],
        urlencodedDefault: 1,
        urlParams: [],
        paramMode: "kv"
    },
    watch: {
        urlContent: function(t) {
            let e = t
              , r = /[?&]([^?&#]+)=([^?&#]*)/g
              , a = []
              , s = r.exec(e);
            for (; s; )
                a.push({
                    key: s[1],
                    value: s[2]
                }),
                s = r.exec(e);
            this.urlParams2String(a) !== this.urlParams2String(this.urlParams) && (this.urlParams = a)
        },
        urlParams: {
            handler(t) {
                this.urlContent = this.urlContent.substr(0, this.urlContent.indexOf("?") + 1) + t.map(t => `${t.key}=${t.value}`).join("&")
            },
            deep: !0
        }
    },
    mounted: function() {
        this.$refs.url.focus()
    },
    methods: {
        postman: function() {
            this.$nextTick( () => {
                this.sendRequest(this.urlContent, this.methodContent, this.paramContent)
            }
            )
        },
        sendRequest: function(t, e, r) {
            let a = new XMLHttpRequest;
            a.addEventListener("readystatechange", t => {
                let e = "Loading...";
                switch (t.target.readyState) {
                case t.target.OPENED:
                    e = "Senting...";
                    break;
                case t.target.HEADERS_RECEIVED:
                    e = "Headers received",
                    this.responseHeaders = t.target.getAllResponseHeaders().trim().split("\n").map(t => t.split(": ").map(t => t.trim()));
                    break;
                case t.target.LOADING:
                    e = "Loading...";
                    break;
                case t.target.DONE:
                    try {
                        e = JSON.stringify(JSON.parse(t.target.responseText), null, 4)
                    } catch (r) {
                        e = t.target.responseText
                    }
                    this.jsonFormat(e),
                    this.renderTab()
                }
                this.resultContent = e || "无数据"
            }
            ),
            a.open(e, t);
            let s = !1;
            "post" === e.toLowerCase() && (s = !0,
            this.urlencodedDefault && a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")),
            this.headerList.forEach(t => {
                let e = $(`#header_key_${t}`).val()
                  , r = $(`#header_value_${t}`).val();
                e && r && a.setRequestHeader(e, r)
            }
            );
            try {
                let t = JSON.parse(r);
                r = Object.keys(t).map(e => {
                    return `${e}=${JSON.stringify(t[e]).replace(/"/g, "")}`
                }
                ).join("&")
            } catch (t) {}
            a.send(s && r)
        },
        addHeader() {
            this.headerList.push(1 * new Date)
        },
        deleteHeader(t) {
            t.target.parentNode.remove()
        },
        transParamMode() {
            if ("kv" === this.paramMode) {
                this.paramMode = "json";
                let t = {};
                this.paramContent.split("&").forEach(e => {
                    let r = e.split("=");
                    t[r[0]] = r[1]
                }
                ),
                this.paramContent = JSON.stringify(t, null, 4)
            } else {
                this.paramMode = "kv";
                try {
                    let t = JSON.parse(this.paramContent);
                    this.paramContent = Object.keys(t).map(e => {
                        return `${e}=${JSON.stringify(t[e]).replace(/"/g, "")}`
                    }
                    ).join("&")
                } catch (t) {}
            }
        },
        renderTab: function() {
            jQuery("#tabs").tabs({
                show: (t, e) => {}
            }),
            this.$refs.resultContainer.classList.remove("hide")
        },
        jsonFormat: function(t) {
            if (this.errorMsgForJson = "",
            this.jfCallbackName_start = "",
            this.jfCallbackName_end = "",
            !t)
                return !1;
            let e = null;
            try {
                this.funcName = "";
                let r = /^([\w\.]+)\(\s*([\s\S]*)\s*\)$/gim.exec(t);
                null != r && (this.funcName = r[1],
                t = r[2]),
                e = JSON.parse(t)
            } catch (r) {
                try {
                    e = new Function("return " + t)()
                } catch (r) {
                    try {
                        "string" == typeof (e = new Function("return '" + t + "'")()) && (e = new Function("return " + e)())
                    } catch (t) {
                        this.errorMsgForJson = t.message
                    }
                }
            }
            if (null != e && "object" == typeof e && !this.errorMsgForJson.length) {
                try {
                    t = JSON.stringify(e)
                } catch (t) {
                    this.errorMsgForJson = t.message
                }
                if (!this.errorMsgForJson.length) {
                    this.originalJsonStr = t;
                    let e = parseInt(localStorage.getItem(JSON_SORT_TYPE_KEY) || 0);
                    this.didFormat(e),
                    $("[name=jsonsort][value=" + e + "]").attr("checked", 1);
                    let r = this;
                    $("[name=jsonsort]").click(function(t) {
                        let a = parseInt(this.value);
                        a !== e && (r.didFormat(a),
                        e = a),
                        localStorage.setItem(JSON_SORT_TYPE_KEY, a)
                    })
                }
            }
            if (this.errorMsgForJson) {
                let t = document.querySelector("#optionBar");
                t && (t.style.display = "none")
            }
        },
        didFormat: function(t) {
            t = t || 0;
            let e = this.originalJsonStr;
            if (0 !== t) {
                let r = JsonABC.sortObj(JSON.parse(this.originalJsonStr), parseInt(t), !0);
                e = JSON.stringify(r)
            }
            Formatter.format(e),
            $(".x-toolbar").fadeIn(500),
            this.funcName ? ($("#jfCallbackName_start").html(this.funcName + "("),
            $("#jfCallbackName_end").html(")")) : (this.jfCallbackName_start = "",
            this.jfCallbackName_end = "")
        },
        setDemo: function(t) {
            1 === t ? (this.urlContent = "http://t.weather.sojson.com/api/weather/city/101030100",
            this.methodContent = "GET") : (this.urlContent = "https://www.baidufe.com/test-post.php",
            this.methodContent = "POST",
            this.paramContent = "username=postman&password=123456")
        },
        urlParams2String: function(t) {
            return t.map(t => `${t.key}=${t.value}`).join("&")
        }
    }
});
