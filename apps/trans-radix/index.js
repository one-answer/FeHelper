new Vue({
    el: "#pageContainer",
    data: {
        fromArray: [2, 4, 8, 10, 16],
        fromSelected: 10,
        toArray: [2, 4, 8, 10, 16],
        toSelected: 16,
        srcValue: 100,
        rstValue: 0
    },
    mounted: function() {
        this.radixConvert()
    },
    methods: {
        getId: (e, t) => [e, t].join("_"),
        radixRadioClicked: function(e, t) {
            1 === e ? this.fromSelected = t : this.toSelected = t,
            this.radixConvert()
        },
        radixConvert: function() {
            this.$nextTick( () => {
                this.rstValue = parseInt(this.srcValue, this.fromSelected).toString(this.toSelected)
            }
            )
        }
    }
});
