var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//mongoose.connect("mongodb://mongo/SistemaSoporte");
mongoose.connect("mongodb://sistemasoportebd:fvZSK20jZY3qyWiikSmY9dRQwaWfXTdM51nVimiv4RRz7IyXSRoqtyPDj6Uv2W4RARO7YzTpNKvW7d7DJpZFrg==@sistemasoportebd.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@sistemasoportebd@");
var dispositivoSchema = new Schema({
    idpersona: String,
    modelo: String,
    marca: String,
    color: String,    
    almacenamiento: String,
    ram: String,
    estado: Number,
    observacion: String,
});

var dispositivo = mongoose.model("dispositivo", dispositivoSchema);
module.exports.dispositivo = dispositivo;