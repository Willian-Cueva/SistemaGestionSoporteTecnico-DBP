var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//mongoose.connect("mongodb://mongo/SistemaSoporte");
 mongoose.connect("mongodb://sistemasoportebd:fvZSK20jZY3qyWiikSmY9dRQwaWfXTdM51nVimiv4RRz7IyXSRoqtyPDj6Uv2W4RARO7YzTpNKvW7d7DJpZFrg==@sistemasoportebd.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@sistemasoportebd@");


 var cuentaSchema = new Schema({
  id_persona: String,
  usuario: String,
  password: String,
  rol: String,
});

cuentaSchema.virtual("password_confirmation").get(function () {
    return this.p_c;
  }).set(function (password) {
    this.p_c = password;
  });

var cuenta = mongoose.model("cuenta", cuentaSchema);
module.exports.cuenta = cuenta;
