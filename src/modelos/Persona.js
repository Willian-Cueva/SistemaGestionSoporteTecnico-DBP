var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//mongoose.connect("mongodb://mongo/SistemaSoporte");
mongoose.connect("mongodb://sistemasoportebd:fvZSK20jZY3qyWiikSmY9dRQwaWfXTdM51nVimiv4RRz7IyXSRoqtyPDj6Uv2W4RARO7YzTpNKvW7d7DJpZFrg==@sistemasoportebd.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@sistemasoportebd@");


var personaSchema = new Schema({
    nombre: String,
    apellido: String,
    cedula: String,    
    fecha_nacimiento: Date,
    direccion: String,
    genero: String,
    correo: String,
    celular: String,
    estado: Number,
});

var persona = mongoose.model("persona", personaSchema);
module.exports.persona = persona;
