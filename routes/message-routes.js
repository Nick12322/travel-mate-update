// Requiring our models and passport as we've configured it
var db = require("../models");

module.exports = function (app) {

    // GET route for getting all of the messages sent by user
    app.get("/api/messages", function (req, res) {
        var query = {};
        if (req.query.getall === "sent") {
            query.UserId = req.user.id;
        } else if (req.query.getall === "inbox") {
            query.recipient = req.user.id;
        }
        // 1. Add a join here to include all of the Users to these messages
        db.Message.findAll({
            where: query,
            include: [db.User]
        })
            .then(function (dbMessage) {
                res.json(dbMessage);
            })
            .catch(err => {
                res.json(err);
            });
    });

    // Get route for retrieving a single Message
    app.get("/api/messages/:id", function (req, res) {
        // 2. Add a join here to include the User who wrote the Message
        db.Message.findOne({
            where: {
                id: req.params.id
            },
            include: [db.User]
        }).then(function (dbMessage) {
            res.json(dbMessage);
        });
    });

    // POST route for saving a new Message
    app.post("/api/messages", function (req, res) {
        db.Message.create(req.body).then(function (dbMessage) {
            res.json(dbMessage);
        });
    });

    // DELETE route for deleting messages
    app.delete("/api/messages/:id", function (req, res) {
        db.Message.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbMessage) {
            res.json(dbMessage);
        });
    });

    // PUT route for updating messages
    app.put("/api/messages", function (req, res) {
        db.Message.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbMessage) {
                res.json(dbMessage);
            });
    });

};

