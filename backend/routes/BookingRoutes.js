const express = require("express");
const router = express.Router();
const {
  
  getbookings,
  createbooking,
   getBooking,
  updatePricing,
  deleteBooking,
} = require("../controllers/BookingController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getbookings);
router.route("/:id").get(getBooking).put(updatePricing).delete(deleteBooking);

module.exports = router;