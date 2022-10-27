function requireUser(req, res, next) {
    if (!req.user) {
        res.status(401);
        next({
            name: "NoUserFound",
            message: "You must log in or register before accessing this end point"
        });
    }
    next();
} 
// function validateInfo(req, res, next) {
//     //make regex checks
// }

module.exports= {
    requireUser
}