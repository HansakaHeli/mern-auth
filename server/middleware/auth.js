const jwt = require("jsonwebtoken"); 

function auth(req,res,next){
    try {

        const token = req.cookies.token; // get the token by using cookies
        //console.log(token);

        if(!token){
            return res.status(401).json({errorMessge: "Unauthorized"});
        }

        // check token secrect is mathed with our secrect and decode the token
        const verifed = jwt.verify(token,process.env.JWT_SECRET);

        req.user = verifed.user;

        next(); 

    } catch (error) {
        console.log(error);
        res.status(401).json({errorMessge: "Unauthorized"});

    }
}

module.exports = auth;