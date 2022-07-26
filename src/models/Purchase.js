const {Schema, model} = require('mongoose');

const PurchaseShema = new Schema({
    idCompra: {
        type : String,
        required : true
    },
    fechaCompra: {
        type : Date,
        required : true
    },
    valorCompra: {
        type : Number,
        required : true
    },
    idComprador: {
        type : String,
        required : true
    },
    placaCarro: {
        type : String,
        required : true
    }
}, {
    timestamps : true
})

module.exports = model('Purchase', PurchaseShema);