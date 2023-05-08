const mongoose = require('mongoose');
const { string } = require('yup');
const Schema = mongoose.Schema;
const BookingSchema = new Schema({
  Clubname: {
    type: String,
    required: true
  },
    CustomerName: {
        type: String,
        required: true
    }
    

});
module.exports = Item = mongoose.model('booking', BookingSchema)