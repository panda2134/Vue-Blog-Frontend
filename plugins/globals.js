import Vue from 'vue';

let globals = {
    install(vue) {
        vue.prototype.$globals = {
            GRAVATAR_URL: 'https://cn.gravatar.com/avatar/'
        };
    }
}

Vue.use(globals);