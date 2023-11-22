const Router = require('express');

const router = new Router();
const roadmapsController = require('../controllers/roadmapsController')

router.post('/',roadmapsController.create)
router.get('/',roadmapsController.getAll)



module.exports = router;