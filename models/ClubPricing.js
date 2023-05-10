const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PricingSchema = new Schema({
  Clubname: {
    type: String,
    required: true
  },
 
    Price: {
        type: String,
        required: true
    }
    

});
module.exports = Item = mongoose.model('ClubPricing', PricingSchema)