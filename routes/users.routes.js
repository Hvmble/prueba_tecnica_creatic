const { Router } = require("express");
const { check } = require("express-validator");
const { usersPost, usersGet } = require("../controllers/user.controller");
const { validateInputs } = require("../middlewares/validate.inputs");
const { existEmail, existUser } = require("../database/validation");

const router = Router();

router.post(
    "/",
    [
        check("username", "Username is required").not().isEmpty(),
        check("password", "Password is required").not().isEmpty(),
        check("email", "Email is required").not().isEmpty(),
        check("email", "Email is not valid").isEmail(), check("email").custom(existEmail),
        validateInputs,
    ],
    usersPost
);


module.exports = router;
