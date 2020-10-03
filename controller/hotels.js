

exports.homePage = (req,res)=>{
    res.render('index', { title: 'Lets take a vacation' });
}

exports.listAllHotels = (req,res)=>{
    res.render('all_hotels', { title: 'All hotels' });
}

exports.adminPage = (req,res)=>{
    res.render('admin', { title :' Welcome Admin' });
}