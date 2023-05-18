import router from "./router"

export default {
    install(app) {
         app.router.addRoute(router)
    }
}

