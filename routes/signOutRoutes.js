const express = require("express");
const router = express.Router();

router.get("/signOut", (req, res) => {
    req.logout();
    res.redirect("/");
});

module.exports = router;
