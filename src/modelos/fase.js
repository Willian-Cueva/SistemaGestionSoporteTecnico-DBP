var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//mongoose.connect("mongodb://mongo/SistemaSoporte");
mongoose.connect("mongodb://sistemasoportebd:fvZSK20jZY3qyWiikSmY9dRQwaWfXTdM51nVimiv4RRz7IyXSRoqtyPDj6Uv2W4RARO7YzTpNKvW7d7DJpZFrg==@sistemasoportebd.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@sistemasoportebd@");

var faseSchema = new Schema({
    id_dispositivo: String,
    nombre: String,
    descripcion: String,
    fecha_inicio: Date,
    fecha_final: Date,  
});

var fase = mongoose.model("fase", faseSchema);
module.exports.fase = fase;