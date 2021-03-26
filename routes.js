var express = require('express'),
router = express.Router();

router.get('/Hello/:foo/:bar', (req, res) => {
    res.json({message: 'Hello Cabron', data: [
        req.params.foo,
        req.params.bar
    ]});
   
});

router.post('/hello', (req, res) => {
    res.json({result: 'Post was sent'});

});
module.exports = router;