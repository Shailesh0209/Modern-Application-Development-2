Vue.component('message-board', {
    props:['title'], 
    template: `
    <div>
        <h4> {{title}} </h4
        <p>Your name: <input type="text" v-model="visitor_name" /></p>
        <p>Your message: <input type="text" v-model="visitor_message"/></p>
        <button v-on:click="sayHi">Say Hi</button>

        <ul>
            <li v-for="message in messages"> {{message["visitor_name"]}} : {{message["visitor_message"]}} </li>
        </ul>
    </div>
`,
    data: function() {
        //   message : "hello world",
          // count : 0,
        return {
            visitor_name : "",
            visitor_message : "",
            messages: []
        }
    },
    methods : {
        sayHi: function() {
        // this.message = "Hi";
        this.messages.push( { "visitor_name": this.visitor_name, "visitor_message": this.visitor_message});
        this.visitor_name = "";
        this.visitor_message="",
        this.$emit("add-to-global-total")
        // this.buttonStyle = "btn btn-success"
        }
    },
    computed : {
        count : function() {
        return this.messages.length;
        }
    },
    beforeCreate: function() {
        console.log("component beforeCreate");
        
    },
    created: function() {
        console.log("component created");
        console.log(this.grand_total);
    },
    beforeMount: function() {
        console.log("component beforeMount");
        
    },
    Mounted: function() {
        //fetch data from backend
        console.log("component mounted");
        console.log("this.$el");
    },
    beforeUpdate: function() {
        console.log("component beforeUpdate");
        
    },
    Updated: function() {
        //fetch data from backend
        console.log("component updated");
        
    }
    
    
})

var app = new Vue({
    el: "#app",
    data : {
    grand_total : 0
    },
    methods:{
        add_grand_total: function() {
            console.log("in grand total");
            this.grand_total = this.grand_total+1;
        }
    },
    beforeCreate: function() {
        console.log("app beforeCreate");
        console.log(this.grand_total);
    },
    created: function() {
        console.log("app created");
        console.log("this.grand_total");
    },
    beforeMount: function() {
        console.log("app beforeMount");
        
    },
    Mounted: function() {
        //fetch data from backend
        console.log("app mounted");
        console.log("this.$el");
    },
    beforeUpdate: function() {
        console.log("app beforeUpdate");
        
    },
    Updated: function() {
        //fetch data from backend
        console.log("app updated");
        
    }

    
  })