const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const tribeSchema = new Schema({
  name: String,
  // members: [ { type: Schema.Types.ObjectId, ref: 'Tribe' } ]
  members: String
});

const Tribe = mongoose.model('Tribe', tribeSchema);
module.exports = Tribe;