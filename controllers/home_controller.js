module.exports.home = function(req, res){
    // return res.end('<h1>Express is up and running</h1>');
    // getting cookie
    console.log(req.cookies);
    // setting cookie
    res.cookie('USERid', 03);
    return res.render('home', {
        title: 'Home'
    });
}

