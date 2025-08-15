import {body} from "express-validator"

const userRegistrationValidator = () => {
    return [
        body('email')
        .trim()
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Email Invalid"),

        body("username")
        .trim()
        .notEmpty().withMessage("username is required")
        .isLength({min:3}).withMessage("username should be at leat 3 char")
        .isLength({max:13}).withMessage("username cannot exceed 13 char")
    ]
}

const userLoginValidator  = () => {
    return [
        body("email").isEmail().withMessage("Email is not valid"),
        body("password").notEmpty().withMessage("PAssword cannot be empty"),
    ];
};


export {userRegistrationValidator}