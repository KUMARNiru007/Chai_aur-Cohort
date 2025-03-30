import {Routes} from "express"
import {healthCheck} from "../controllers/healthcheck.controllers.js"

const routes = Routes();


routes.route("/").get(healthCheck)


export default routes