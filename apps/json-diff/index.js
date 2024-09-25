new Vue({
    el: "#pageContainer",
    data: {
        errorMessage: "",
        errorHighlight: !1
    },
    mounted: function() {
        let s = JsonDiff.init(this.$refs.srcLeft, this.$refs.srcRight, (e, t) => {
            let r = "";
            if (t)
                r = "两侧JSON比对完成！",
                this.errorHighlight = !1;
            else {
                let t = {
                    left: "左",
                    right: "右",
                    "left-right": "两"
                }[e];
                r = s.left.getValue().trim().length ? s.right.getValue().trim().length ? '<span class="x-hlt1">' + t + "侧</span>JSON不合法！" : '请在<span class="x-hlt1">右侧</span>填入待比对的JSON内容！' : '请在<span class="x-hlt1">左侧</span>填入待比对的JSON内容！',
                this.errorHighlight = !0
            }
            this.errorMessage = '<span class="x-hlt">Tips：</span>' + r
        }
        , s => {
            this.errorHighlight || (s.length ? this.errorMessage += '共有 <span class="x-hlt">' + s.length + "</span> 处不一致！" : this.errorMessage += "且JSON内容一致！")
        }
        )
    }
});
