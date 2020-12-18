
require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('menu-component', require('./components/MenuComponent.vue').default);
Vue.component('movies-card', require('./components/MoviesCard.vue').default);
Vue.component('login-form', require('./components/LoginForm.vue').default);
Vue.component('register-form', require('./components/RegisterForm.vue').default);


import App from './App.vue';
import router from './router'

const app = new Vue({
    el: '#app',
    components: {App},
    router,
});
