const router = require("express").Router();
const profileController = require("../../controllers/profileController");

// Matches with "/api/profiles"
router.route("/")
  .get(profileController.findAll)
  .post(profileController.create);

// Matches with "/api/profiles/:id"
  router.route("/:userName")
  .get(profileController.findByUser)
  .put(profileController.update);

  module.exports = router;


