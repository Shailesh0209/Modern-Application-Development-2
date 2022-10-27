new Vue({
    el : "#meter",

    data : {
        pass : "",
        track : {
            uppercase : "rgba(255,0,0,0.6)",
            lowercase : "rgba(255,0,0,0.6)",
            special : "rgba(255,0,0,0.6)",
            digit : "rgba(255,0,0,0.6)",
            len : "rgba(255,0,0,0.6)"

        }
    },

    computed : {

    },

    methods : {
        calculate_strength : function () {
            let c = 0;
            for (element in this.track) {
                if (this.track[element] == "rgba(0, 255, 0, 0.5)")
                c += 1
            }
            if (c==5) this.strength = "Very Good"
            else if (c == 4) this.strength = "Good"
            else if (c == 3) this.strength = "Average"
            else if (c == 2) this.strength = "Bad"
            else if (c == 1) this.strength = "Very Bad"
            else this.strength = "Please enter a valid password"
        }

    },

    watch : {
        pass (newValue) {
            this.track.uppercase = "rgba(255,0,0,0.6)",
            this.track.lowercase = "rgba(255,0,0,0.6)",
            this.track.special = "rgba(255,0,0,0.6)",
            this.track.digit = "rgba(255,0,0,0.6)",
            this.track.len = "rgba(255,0,0,0.6)"

            if (newValue.length > 6) this.track.len = "rgba(0,255, 0, 0.6)";

            for (let i = 0; i < newValue.length; i++) {
                let currentChar = newValue.charCodeAt(i);
                // console.log(currentChar, currenctChar >= "a")
                
                if (currenctChar >= 97 && currentChar <= 122)
                    this.track.lowercase = "rgba(0,255,0,0.6)";
                else if (currenctChar >= 65 && currentChar <= 90)
                    this.track.uppercase = "rgba(0,255,0,0.6)";
                else if (currenctChar >= 48 && currentChar <= 57)
                    this.track.digit = "rgba(0,255,0,0.6)";
                else if ((currenctChar >= 33 && currentChar <= 41) || currentChar == 64)
                    this.track.special = "rgba(0,255,0,0.6)";
            }
            this.calculate_strength()
        }
    }
})