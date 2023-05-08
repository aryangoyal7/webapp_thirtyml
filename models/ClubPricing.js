const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PricingSchema = new Schema({
  Clubname: {
    type: String,
    required: true
  },
  Time: {
    type: Time,
    default: Time.now()
    },
    Price: {
        type: Int16Array,
        required: True
    }
    

});
module.exports = Item = mongoose.model('ClubPricing', PricingSchema)