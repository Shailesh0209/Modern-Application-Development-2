var app = new Vue({
  el: "#app",
  data: {
    message : "hello world",
    // count : 0,
    vistor_name : null,
    names: [],
    buttonStyle:"btn btn-primary"
  },
  methods : {
    sayHi: function() {
      this.message = "Hi";
      this.names.push(this.visitor_name);
      this.visitor_name = "";
      this.buttonStyle = "btn btn-success"
    }
    },
  computed : {
    count : function() {
      return this.visitors.length;
    }
  }

})