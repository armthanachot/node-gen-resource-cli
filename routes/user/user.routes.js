const user = require("../../controllers/user/user.controller.js")
module.exports = (app) => {
  app.route("users").get([], user.findAll).post([], user.create)
  app.route("users/:id").get([], user.findById).put([], user.update).delete([], user.destroy)
}
