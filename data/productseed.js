const mongoose = require('mongoose')
const Product = require('../models/products')
const Account = require('../models/account')


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://ayushm850:ayushmishra@cluster0.oupgqon.mongodb.net/infoSense');

}

const seed = [{
    name : 'Apple iPhone 14 (128 GB) - Blue',
    price : 67499,
    description : "15.40 cm (6.1-inch) Super Retina XDR display Advanced camera system for better photos in any light Cinematic mode now in 4K Dolby Vision up to 30 fps Action mode for smooth, steady, handheld videos Vital safety technology — Crash Detection calls for help when you can’t All-day battery life and up to 20 hours of video playback Industry-leading durability features with Ceramic Shield and water resistance A15 Bionic chip with 5-core GPU for lightning-fast performance. Superfast 5G cellular iOS 16 offers even more ways to personalise, communicate and share",
    imgsrc : ["https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg",
              "https://m.media-amazon.com/images/I/51Sn5X2gfaL._SX679_.jpg",
              "https://m.media-amazon.com/images/I/711JE+dD1KL._SX679_.jpg"],
    specification : {
        ram : "128 GB",
        brand : "Apple",
        ModelName : "IPhone",
        NSP : "Unlocked for All Carriers",
        OS : "IOS",
        CellularTechnology : "5G"	
    }
},{
    name : 'Apple iPhone 14 Pro Max  - Deep Purple',
    price : 143990,
    description : "17.00 cm (6.7-inch) Super Retina XDR display featuring Always-On and ProMotion Dynamic Island, a magical new way to interact with iPhone 48MP Main camera for up to 4x greater resolution Cinematic mode now in 4K Dolby Vision up to 30 fps Action mode for smooth, steady, handheld videos All-day battery life and up to 29 hours of video playback Vital safety technology — Crash Detection can detect a severe car crash and call for help A16 Bionic, the ultimate smartphone chip. Superfast 5G cellular Industry-leading durability features with Ceramic Shield and water resistance iOS 16 offers even more ways to personalise, communicate and share",
    imgsrc : ["https://m.media-amazon.com/images/I/31GmCJTD0GL._SY445_SX342_QL70_FMwebp_.jpg",
               "https://m.media-amazon.com/images/I/61fUC+17f8L._SX679_.jpg",
                "https://m.media-amazon.com/images/I/71dKjvLPkAL._SX679_.jpg" ],
    specification : {
        ram : "256 GB",
        brand : "Apple",
        ModelName : "IPhone",
        NSP : "Unlocked for All Carriers",
        OS : "IOS",
        CellularTechnology : "5G"	
    }
},{
    name : 'Apple iPhone 14 Pro  - Deep Purple',
    price : 134990,
    description : "15.54 cm (6.1-inch) Super Retina XDR display featuring Always-On and ProMotion Dynamic Island, a magical new way to interact with iPhone 48MP Main camera for up to 4x greater resolution Cinematic mode now in 4K Dolby Vision up to 30 fps Action mode for smooth, steady, handheld videos All-day battery life and up to 23 hours of video playback Vital safety technology — Crash Detection calls for help when you can’t A16 Bionic, the ultimate smartphone chip. Superfast 5G cellular Industry-leading durability features with Ceramic Shield and water resistance iOS 16 offers even more ways to personalise, communicate and share",
    imgsrc : ["https://m.media-amazon.com/images/I/61HHS0HrjpL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/61JprYdpMmL._SX679_.jpg",
     "https://m.media-amazon.com/images/I/61XTJ3b2BPL._SX679_.jpg" ],
    specification : {
        ram : "256 GB",
        brand : "Apple",
        ModelName : "IPhone",
        NSP : "Unlocked for All Carriers",
        OS : "IOS",
        CellularTechnology : "5G"	
    }
},{
    name : 'Apple iPhone 14 Plus (128 GB) - Blue',
    price : 76499,
    description : "16.95 cm (6.7-inch) Super Retina XDR display Advanced camera system for better photos in any light Cinematic mode now in 4K Dolby Vision up to 30 fps Action mode for smooth, steady, handheld videos Vital safety technology — Crash Detection calls for help when you can’t All-day battery life and up to 26 hours of video playback Industry-leading durability features with Ceramic Shield and water resistance A15 Bionic chip with 5-core GPU for lightning-fast performance. Superfast 5G cellular iOS 16 offers even more ways to personalise, communicate and share",
    imgsrc : ["https://m.media-amazon.com/images/I/61BGE6iu4AL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/711JE+dD1KL._SX679_.jpg",
     "https://m.media-amazon.com/images/I/61qtRTDkfLL._SX679_.jpg" ],
    specification : {
        ram : "128 GB",
        brand : "Apple",
        ModelName : "IPhone",
        NSP : "Unlocked for All Carriers",
        OS : "IOS",
        CellularTechnology : "5G"	
    }
},{
    name : 'Apple iPhone 13 (256 GB) - Green',
    price : 67499,
    description : "15 cm (6.1-inch) Super Retina XDR display Cinematic mode adds shallow depth of field and shifts focus automatically in your videos Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording A15 Bionic chip for lightning-fast performance",
    imgsrc : ["https://m.media-amazon.com/images/I/61-r9zOKBCL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/61J9KUops4L._SX679_.jpg",
     "https://m.media-amazon.com/images/I/61W4nsX-yZL._SX679_.jpg" ],
    specification : {
        ram : "256 GB",
        brand : "Apple",
        ModelName : "IPhone 13",
        NSP : "Unlocked for All Carriers",
        OS : "IOS",
        CellularTechnology : "5G"	
    }
},{
    name : 'Apple iPhone SE (64 GB) - Midnight',
    price : 49900,
    description : "11.94 cm (4.7-inch) Retina HD display Advanced single-camera system with 12MP Wide camera; Smart HDR 4, Photographic Styles, Portrait mode, and 4K video up to 60 fps 7MP FaceTime HD camera with Smart HDR 4, Photographic Styles, Portrait mode, and 1080p video recording A15 Bionic chip for lightning-fast performance Up to 15 hours of video playback Durable design and IP67 water resistance Home button with Touch ID for secure authentication iOS 15 packs new features to do more with iPhone than ever before",
    imgsrc : ["https://m.media-amazon.com/images/I/31eq5m7D5uL._SY445_SX342_QL70_FMwebp_.jpg",
    "https://m.media-amazon.com/images/I/51RV0u32isL._SX679_.jpg",
     "https://m.media-amazon.com/images/I/81W0CsQf-VL._SX679_.jpg" ],
    specification : {
        ram : "64 GB",
        brand : "Apple",
        ModelName : "IPhone SE",
        NSP : "Unlocked for All Carriers",
        OS : "IOS",
        CellularTechnology : "5G"	
    }
},{
    name : 'Apple iPhone 13 Mini (256GB) - Blue',
    price : 57499,
    description : "13 cm (5.4-inch) Super Retina XDR display Cinematic mode adds shallow depth of field and shifts focus automatically in your videos Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording A15 Bionic chip for lightning-fast performance",
    imgsrc : ["https://m.media-amazon.com/images/I/71X6mnUDSzL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/61iERbHlGPL._SX679_.jpg",
     "https://m.media-amazon.com/images/I/61+KmlEajBL._SX679_.jpg" ],
    specification : {
        ram : "256 GB",
        brand : "Apple",
        ModelName : "IPhone",
        NSP : "Unlocked for All Carriers",
        OS : "IOS",
        CellularTechnology : "5G"	
    }
},{
    name : 'Apple iPhone 13 Pro Max  - Alpine Green',
    price : 67499,
    description : "17 cm (6.7-inch) Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos Pro camera system with new 12MP Telephoto, Wide and Ultra Wide cameras; LiDAR Scanner; 6x optical zoom range; macro photography; Photographic Styles, ProRes video, Smart HDR 4, Night mode, Apple ProRAW, 4K Dolby Vision HDR recording 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording A15 Bionic chip for lightning-fast performance",
    imgsrc : ["https://m.media-amazon.com/images/I/611ovP2GkrL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/71Px6WURuNL._SX679_.jpg",
     "https://m.media-amazon.com/images/I/61XNcUd407L._SX679_.jpg" ],
    specification : {
        ram : "256 GB",
        brand : "Apple",
        ModelName : "IPhone 13 Pro Max",
        NSP : "Unlocked for All Carriers",
        OS : "IOS",
        CellularTechnology : "5G"	
    }
},]

const person = [{
    username : "ayushm850",
    password : "12345678",
    cpassword : "12345678",
    number : 989888877,
    email : "ayushm850@gmail.com"

},{
    username : "jatinodude",
    password : "12345678",
    cpassword : "12345678",
    number : 989888877,
    email : "jatin@gmail.com"

},{
    username : "vaibhavi",
    password : "12345678",
    cpassword : "12345678",
    number : 989888877,
    email : "vaibhavi@gmail.com"

},{
    username : "viratk",
    password : "12345678",
    cpassword : "12345678",
    number : 989888877,
    email : "virat@gmail.com"

},]

Product.insertMany(seed).then(data => console.log(data)).catch(err => console.log(err))
Account.insertMany(person).then(data => console.log(data)).catch(err => console.log(err))