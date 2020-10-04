let Hotel = require('../models/hotel')

exports.homePage = (req,res)=>{
    res.render('index', { title: 'Lets take a vacation' });
}

exports.listAllHotels = (req,res)=>{
    res.render('all_hotels', { title: 'All hotels' });
}

exports.adminPage = (req,res)=>{
    res.render('admin', { title :' Welcome Admin' });
}

exports.createHotelGet = (req,res)=>{
    res.render( 'add_hotel' , { title : 'Add new hotels'} );
}

exports.createHotelPost = async (req,res)=>{
    try {
        let hotel =  new Hotel(req.body);
        await hotel.save()    
        res.redirect('all_hotels/')
    } catch (error) {
        
    }
    
    
}