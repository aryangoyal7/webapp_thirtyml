const mongoose = require('mongoose');
const { string } = require('yup');
const Schema = mongoose.Schema;
const BookingSchema = new Schema({
  ClubID: {
    type: String,
    required: true
  },
    CustomerName: {
        type: String,
        required: true
  },
  Username: {
    type: String,
    required: true
  },
  Mobile_number: {
    type: String,
    required: true
},
    
Price: {
    type: String,
    required: true
},
    
    

});
module.exports = Item = mongoose.model('booking', BookingSchema)