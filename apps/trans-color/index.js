new Vue({
    el: "#pageContainer",
    data: {
        fromHEX: "#43ad7f7f",
        toRGB: "",
        fromRGB: "rgba(190,20,128,0.5)",
        toHEX: ""
    },
    mounted: function() {
        this.colorHexToRgb(),
        this.colorRgbToHex()
    },
    methods: {
        colorHexToRgb: function() {
            let t = this.fromHEX.trim().replace(/^#/, "")
              , e = [];
            switch (t.length) {
            case 3:
            case 4:
                e.push(parseInt(t[0] + "" + t[0], 16).toString(10)),
                e.push(parseInt(t[1] + "" + t[1], 16).toString(10)),
                e.push(parseInt(t[2] + "" + t[2], 16).toString(10)),
                4 === t.length && e.push((parseInt(parseInt(t[3] + "" + t[3], 16).toString(10)) / 256).toFixed(2));
                break;
            case 6:
            case 8:
                e.push(parseInt(t[0] + "" + t[1], 16).toString(10)),
                e.push(parseInt(t[2] + "" + t[3], 16).toString(10)),
                e.push(parseInt(t[4] + "" + t[5], 16).toString(10)),
                8 === t.length && e.push((parseInt(parseInt(t[6] + "" + t[7], 16).toString(10)) / 256).toFixed(2))
            }
            3 === e.length ? this.toRGB = "rgb(" + e.join(", ") + ")" : 4 === e.length ? this.toRGB = "rgba(" + e.join(", ") + ")" : this.toRGB = ""
        },
        colorRgbToHex: function() {
            let t = this.fromRGB.trim().replace(/\s+/g, "").replace(/[^\d,\.]/g, "").split(",").filter(t => t.length && parseInt(t, 10) <= 255)
              , e = [];
            3 !== t.length && 4 !== t.length || (e.push(parseInt(t[0], 10).toString(16).padStart(2, "0")),
            e.push(parseInt(t[1], 10).toString(16).padStart(2, "0")),
            e.push(parseInt(t[2], 10).toString(16).padStart(2, "0")),
            4 === t.length && e.push(Math.floor(255 * parseFloat(t[3], 10)).toString(16).padStart(2, "0"))),
            e.length ? this.toHEX = "#" + e.join("") : this.toHEX = ""
        }
    }
});
