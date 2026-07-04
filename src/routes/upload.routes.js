const express = require("express");

const {
  uploadLocal,
  uploadCloud,
} = require("../middlewares/upload.middleware");

const {
  uploadLocal: uploadLocalController,
  uploadCloud: uploadCloudController,
} = require("../controllers/upload.controller");

const router = express.Router();

router.post("/local", uploadLocal.single("file"), uploadLocalController);

router.post("/cloud", uploadCloud.single("file"), uploadCloudController);

module.exports = router;