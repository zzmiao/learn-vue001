import Vue form 'vue'
import App form './App.vue'

const root = document.createElement("div");
document.body.appendChild(root);

new Vue({
	render: h => h(App)
}).$mount(root);