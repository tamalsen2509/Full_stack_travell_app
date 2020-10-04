var express = require('express');
var router = express.Router();
let hotelController = require('../controller/hotels')

/* GET home page. */
router.get('/', hotelController.homePage)

/* get all hotel page */
router.get('/all',hotelController.listAllHotels )

// admin routes 

router.get('/admin',hotelController.adminPage )

router.get('/admin/add',hotelController.createHotelGet )

router.post('/admin/add',hotelController.createHotelPost )



module.exports = router;
