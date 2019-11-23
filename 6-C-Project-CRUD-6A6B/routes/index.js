const express = require('express');
const router = express.Router();
const indexControllers = require('./../controllers/indexControllers')

// /* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', {
//     title: 'Express'
//   });
// });

router.get('/', indexControllers.read);
router.post('/add', indexControllers.add);
router.post('/edit', indexControllers.edit);
router.post('/delete', indexControllers.delete);

module.exports = router;