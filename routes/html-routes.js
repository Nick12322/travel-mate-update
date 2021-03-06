// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/members");
    // }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      // res.redirect("/members");
    }
    res.render("registration", { user: req.user, page: {signup:true} });
    // res.sendFile(path.join(__dirname, "../public/registration.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      // res.redirect("/members");
    }
    res.render("registration", { user: req.user, page: {signup:false} });
    // res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/settings", function(req, res){
    // res.sendFile(path.join(__dirname, "../public/settings.html"));
    res.render("settings", req.user);
  });

};
