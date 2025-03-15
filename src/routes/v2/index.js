const express = require('express');
const router = express.Router();

const {InfoController} = require('../../controllers/');

router.get('/info', (req, res) => {
    return res.json({msg: "v2 under development mode."})
});
module.exports = router;