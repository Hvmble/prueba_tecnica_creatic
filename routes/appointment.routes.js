const { Router } = require("express");
const { check, query } = require("express-validator");

const { appointmentPost, appointmentGet, bookPost } = require("../controllers/appointment.controller");
const { validateInputs } = require("../middlewares/validate.inputs");
const { existUser } = require("../database/validation");
const router = Router();


router.post("/", [check("date", "This is required").not().isEmpty(), validateInputs], appointmentPost)

router.get("/", appointmentGet)
router.post("/:id/book", bookPost)
module.exports = router;