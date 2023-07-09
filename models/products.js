const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name : String,
    price : Number,
    description : String,
    imgsrc : [String],
    specification : {
        ram : String,
        brand : String,
        ModelName : String,
        NSP : String,
        OS : String,
        CellularTechnology : String	
    },
    cart : {
        type: Boolean,
        default : false
    },
    fav : {
        type: Boolean,
        default : false
    }


})

const Product = new mongoose.model('Product', productSchema);
module.exports = Product;