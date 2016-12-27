import Hljs from 'highlight.js'

export default {
    install(Vue){
        Vue.directive('highlight', function() {
            let blocks = this.el.querySelectorAll('pre code');
            Array.prototype.forEach.call(blocks, Hljs.highlightBlock);
        })
    }
}