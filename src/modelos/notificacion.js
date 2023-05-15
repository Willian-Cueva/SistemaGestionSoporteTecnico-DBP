var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//mongoose.connect("mongodb://mongo/SistemaSoporte");
mongoose.connect("mongodb://sistemasoportebd:fvZSK20jZY3qyWiikSmY9dRQwaWfXTdM51nVimiv4RRz7IyXSRoqtyPDj6Uv2W4RARO7YzTpNKvW7d7DJpZFrg==@sistemasoportebd.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@sistemasoportebd@");

var notificacionSchema = new Schema({
    idpersona: String,
    iddispositivo: String,
    cuerpo: String,
    fecha: Date,
});

var notificacion = mongoose.model("notificacion", notificacionSchema);
module.exports.notificacion = notificacion;