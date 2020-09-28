var app = new Vue ({
    
    el: '#app',
    data: {
        msg1: '처음의 vue.js!',
        msg2: 'vue.js'
    },
    methods: {
        changeMsg1: function() {
            this.msg1 = '안녕 vue.js';
        }
    }
    
});
