const router = require("express").Router();

router.get("/", (req, res, next) => {
    res.json("Auth");
});



// make a post for the signup routes! (mat)
// make a post for the login routes! (mat)
// make a get for the verify routes! (mat)


module.exports = router;
