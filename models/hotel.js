let mongoose = require('mongoose');

let hotelSchema = new mongoose.Schema({
    hotel_Name : {
        type : String ,
        required : 'Hotel name is required',
        max : 32 , 
        trim : true
    },
    hotel_description : {
        type : String ,
        required : 'Hotel description is required',
        trim : true
    }, 

    image : String ,
    
    Star_rating : {
        type : Number,
        required : 'Hotel star rating is required',
        max : 5,
    },
    
    country : {
        type : String,
        required : 'Country name is required',
        trim : true
    } , 

    cost_per_night : {
        type : Number,
        required : ' cost per night is required',
    },

    available : {
        type : Boolean,
        required : 'availabel is required'
    }


});


// export the models 

module.exports = mongoose.model('Hotel',hotelSchema)

