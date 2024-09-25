new Vue({
    el: "#pageContainer",
    data: {
        sizeOri: "暂无数据",
        sizeBase: "暂无数据",
        previewSrc: "",
        resultContent: "",
        toolName: {
            image: "图片转Base64",
            base64: "Base64转图片"
        },
        curType: "image",
        nextType: "base64",
        txtBase64Input: "",
        txtBase64Output: "",
        error: ""
    },
    watch: {
        txtBase64Input: {
            immediate: !0,
            handler(t, e) {
                this.error = "",
                this.txtBase64Output = "",
                0 !== t.length && (-1 === t.indexOf("data:") ? this.txtBase64Output = "data:image/jpeg;base64," + t : this.txtBase64Output = t)
            }
        }
    },
    mounted: function() {
        "chrome-extension:" === location.protocol && chrome.runtime.onMessage.addListener( (t, e, i) => {
            if ("TAB_CREATED_OR_UPDATED" === t.type && t.content && t.event === location.pathname.split("/")[1])
                return "image" !== this.curType && this.trans(),
                this.convertOnline(t.content, e => {
                    e || alert("抱歉，" + t.content + " 对应的图片未转码成功！")
                }
                ),
                i && i(),
                !0
        }
        ),
        document.addEventListener("paste", t => {
            "image" === this.curType && this.paste(t)
        }
        , !1),
        document.addEventListener("drop", t => {
            if (t.preventDefault(),
            t.stopPropagation(),
            "image" !== this.curType)
                return;
            let e = t.dataTransfer.files;
            e.length && (/image\//.test(e[0].type) ? this._getDataUri(e[0]) : alert("请选择图片文件！"))
        }
        , !1),
        document.addEventListener("dragover", t => {
            "image" === this.curType && (t.preventDefault(),
            t.stopPropagation())
        }
        , !1)
    },
    methods: {
        _sizeFormat: function(t) {
            return isNaN(t) ? "暂无数据" : (t = +t) < 1024 ? t + " B" : t < 1048576 ? (t / 1024).toFixed(2) + " KB" : (t / 1024 / 1024).toFixed(2) + " MB"
        },
        _getDataUri: function(t) {
            let e = new FileReader;
            e.onload = (e => {
                this.resultContent = e.target.result,
                this.previewSrc = e.target.result,
                this.$refs.panelBox.style.backgroundImage = "none",
                this.sizeOri = this._sizeFormat(t.size),
                this.sizeBase = this._sizeFormat(e.target.result.length)
            }
            ),
            e.readAsDataURL(t)
        },
        convertOnline: function(t, e) {
            let i = this;
            i.previewSrc = t;
            let a = new Image;
            a.src = t,
            a.onload = function() {
                let t = this.naturalWidth
                  , n = this.naturalHeight;
                !function(a, s, r, o, l) {
                    let u = document.createElement("canvas");
                    u.setAttribute("id", "qr-canvas"),
                    u.height = l + 100,
                    u.width = o + 100;
                    let h = u.getContext("2d");
                    h.fillStyle = "rgb(255,255,255)",
                    h.fillRect(0, 0, u.width, u.height),
                    h.drawImage(a, r, s, o, l, 50, 50, o, l),
                    i.resultContent = u.toDataURL(),
                    i.$refs.panelBox.style.backgroundImage = "none",
                    i.sizeOri = t + "x" + n,
                    i.sizeBase = i._sizeFormat(i.resultContent.length),
                    e && e(!0)
                }(a, 0, 0, t, n)
            }
            ,
            a.onerror = function() {
                e && e(!1)
            }
        },
        convert: function() {
            this.$refs.fileBox.files.length && (this._getDataUri(this.$refs.fileBox.files[0]),
            this.$refs.fileBox.value = "")
        },
        select: function() {
            this.$refs.resultBox.select()
        },
        upload: function(t) {
            t.preventDefault(),
            this.$refs.fileBox.click()
        },
        paste: function(t) {
            let e = t.clipboardData.items || {};
            for (let t in e) {
                let i = e[t];
                if (/image\//.test(i.type)) {
                    let t = i.getAsFile();
                    return this._getDataUri(t)
                }
            }
            try {
                (async () => {
                    for (let t in e) {
                        let i = e[t];
                        if (/text\/plain/.test(i.type)) {
                            let t = await new Promise(t => {
                                i.getAsString(e => t(e))
                            }
                            );
                            if (await new Promise(e => {
                                this.convertOnline(t, t => e(t))
                            }
                            ))
                                break
                        }
                    }
                }
                )()
            } catch (t) {
                for (let t in e) {
                    let i = e[t];
                    if (/text\/plain/.test(i.type))
                        return i.getAsString(t => {
                            this.convertOnline(t)
                        }
                        )
                }
            }
        },
        trans: function() {
            this.curType = {
                image: "base64",
                base64: "image"
            }[this.curType],
            this.nextType = {
                image: "base64",
                base64: "image"
            }[this.nextType]
        },
        loadError: function(t) {
            "base64" === this.curType && this.txtBase64Input.trim().length && (this.error = "无法识别的Base64编码，请确认是正确的图片Data URI？")
        }
    }
});
