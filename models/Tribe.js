const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const tribeSchema = new Schema({
  name: String,
  // members: [ { type: Schema.Types.ObjectId, ref: 'Tribe' } ]
  email: String //TODO: créer un array d'emails pour récupérer tous les emails de la tribu 
});

const Tribe = mongoose.model('Tribe', tribeSchema);
module.exports = Tribe;