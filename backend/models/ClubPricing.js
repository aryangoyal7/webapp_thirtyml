const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PricingSchema = new Schema({
  ClubId: {
    type: String,
    required: true
  },
 
  StagPrice: {
        type: String,
        required: true
  },
  CouplePrice: {
    type: String,
    required: true
  },
  LadyPrice: {
    type: String,
    required: true
},
});
module.exports = Item = mongoose.model('ClubPricing', PricingSchema)