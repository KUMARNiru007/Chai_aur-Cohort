import {Router} from "express"
import {registerUser} from "../controllers/auth.controllers.js"
import {validate} from "../middleware/validator.middleware.js"
import {userRegistrationValidator} from "../validators/index.js"
const router = Router();


router.route("/register").get(userRegistrationValidator(),validate , registerUser); //factory pattern

//userRegistrationValidator() returns an array
// authchecker deleted middleware

export default router ;