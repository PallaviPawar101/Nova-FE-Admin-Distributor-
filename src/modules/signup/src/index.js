import router from "./router"

export default {
    install(app) {
        router.forEach(route => app.router.addRoute(route));
    }
}

