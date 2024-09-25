new Vue({
    el: "#pageContainer",
    data: {
        number: !0,
        lowerLetter: !0,
        upperLetter: !0,
        specialChar: !1,
        length: 16,
        chars: {
            number: "0123456789",
            lowerLetter: "abcdefghijklmnopqrstuvwxyz",
            upperLetter: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            specialChar: "~!@#$%^&*()[{]}-_=+|;:'\",<.>/?`"
        },
        resultContent: ""
    },
    methods: {
        convert: function() {
            this.$nextTick( () => {
                let e = ["number", "lowerLetter", "upperLetter", "specialChar"].filter(e => this[e]).map(e => this.chars[e]).join("")
                  , t = []
                  , r = []
                  , n = 0;
                for (let l = 0; l < this.length; l++) {
                    do {
                        n = Math.floor(Math.random() * e.length)
                    } while (r.includes(n) && r.length < e.length);
                    r.push(n),
                    t.push(e[n])
                }
                this.resultContent = t.join("")
            }
            )
        },
        getResult: function() {
            this.$refs.rstCode.select()
        },
        copyResult: function() {
            this.getResult(),
            "clipboard"in navigator ? navigator.clipboard.writeText(this.resultContent).catch(e => {
                console.error("复制失败: ", e)
            }
            ) : alert("您的浏览器不支持 clipboard API, 请手动复制")
        }
    }
});
