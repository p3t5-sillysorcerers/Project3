const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jamsSchema = new Schema({
    jamMembers:[],
  });

  const Jams = mongoose.model("Jams", jamsSchema);


module.exports = Jams;