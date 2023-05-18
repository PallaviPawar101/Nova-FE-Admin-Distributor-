import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import SignUpModule from "@/modules/signup";
import AllProductsModule from "@/modules/products";
import LoginChekingModule from "@/modules/login/src"
import { createPinia } from 'pinia';
import VueModular from './plugins/VueModular';
import 'bootstrap/dist/css/bootstrap.css';
import GlobalMixin from './mixins/GlobalMixin';

let app=createApp(App);
app.component(GlobalMixin)
function bootApp() {
   app
        .use(VueModular,
            {
                /**
                 * list of your modules to install in vue app (required)
                 */
                modules: [
                    SignUpModule,
                    AllProductsModule,
                    LoginChekingModule
                ],

                /**
                 * You can pass default config to vue app like router , ... (optional)
                 */
                configs: {
                    router
                }
            })
        .use(createPinia())
        .mount('#app');

}

bootApp();







