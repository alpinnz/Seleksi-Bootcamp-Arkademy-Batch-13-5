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
router.post('/', indexControllers.add);
router.put('/edit', indexControllers.edit);
router.delete('/delete', indexControllers.delete);

module.exports = router;