import Vue from 'vue'
import App from './App.vue'

var vm = new Vue({
    el: '#app-root',
    render: h => h(App),
    components: { App },
})

var filter = function(text, length, clamp){
    clamp = clamp || '...';
    var node = document.createElement('div');
    node.innerHTML = text;
    var content = node.textContent;
    return content.length > length ? content.slice(0, length) + clamp : content;
};

Vue.filter('truncate', filter);