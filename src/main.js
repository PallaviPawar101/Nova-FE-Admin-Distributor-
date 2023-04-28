import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import SignUpModule from "@/modules/signup"
import { createPinia } from 'pinia';
import VueModular from './plugins/VueModular';
import 'bootstrap/dist/css/bootstrap.css'
function bootApp() {
    createApp(App)
        .use(VueModular,
            {
                /**
                 * list of your modules to install in vue app (required)
                 */
                modules: [
                    SignUpModule
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





