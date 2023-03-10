const express = require('express');

const router = express.Router();

router.get('/chat', (req, res, next) => {
  res.send('<form action="/chat/type-yourMSG" method="POST"><input type="text" name="title"><button type="submit">type-yourMSG</button></form>');
  
});
router.post('/type-yourMSG', (req, res, next) => {
  console.log(req.body);
  res.redirect('/chat');
});

module.exports = router;
