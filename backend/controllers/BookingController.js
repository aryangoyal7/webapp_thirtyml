const asyncHandler = require("express-async-handler");
const booking = require("../models/booking");
const ClubPricing = require("../models/ClubPricing");
//import package


//@desc Get all bookings
//@route GET /api/contacts
//@access private
const getbookings = asyncHandler(async (req, res) => {
  const bookings = await booking.find({ user_id: req.user.id });
  res.status(200).json(booking);
});

// get bookings is filtered by clubID and username - only these two are able to accesd that bookinh




//@desc Create New contact
//@route POST /api/contacts
//@access private

const createbooking = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);
  const { ClubID,customer_name, username, Mobile_number,price } = req.body;
  if (!ClubID|| !customer_name || !username || ! Mobile_number || !price) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  const contact = await booking.create({
    ClubID,
    customer_name,
    username,
    Mobile_number,
    pricing,
    user_id: req.user.id,
  });
  

  res.status(201).json(contact);
});







//@desc Get contact
//@route GET /api/contacts/:id
//@access private
const getBooking = asyncHandler(async (req, res) => {
  const booking = await booking.findById(req.params.id);
  if (!booking) {
    res.status(404);
    throw new Error("booking not found");
  }
  res.status(200).json(booking);
});






//@desc Update contact
//@route PUT /api/contacts/:id
//@access private
const updatePricing = asyncHandler(async (req, res) => {
  const pricing = await ClubPricing.findById(req.params.id);
  if (!pricing) {
    res.status(404);
    throw new Error("pricing not found");
  }

  if (pricing.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to update other user pricing");
  }

  const updatedPrice = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedPrice);
});




//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access private
const deleteBooking = asyncHandler(async (req, res) => {
  const booking = await booking.findById(req.params.id);
  if (!booking) {
    res.status(404);
    throw new Error("booking not found");
  }
  if (booking.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to update other user bookings");
  }
  await booking.deleteOne({ _id: req.params.id });
  res.status(200).json(booking);
});

module.exports = {
  getbookings, 
   createbooking,
  getBooking,
  updatePricing,
  deleteBooking,
};