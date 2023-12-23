const { Router } = require('express');
const router = Router();


const accountsRouter = require('./AccountRouter')
const optionsRouter = require('./OptionsRouter')
const questionsRouter = require('./QuestionsRouter')
const rmlinksRouter = require('./RMLinksRouter')
const rmpagesRouter = require('./RMPagesRouter')
const testresultsRouter = require('./TestResults')
const testsRouter = require('./TestsRouter')
const userRouter = require('./UserRouter')
const frontendRouter = require('./FrontendRouter')



router.use('/account', accountsRouter)
router.use('/options', optionsRouter)
router.use('/quest', questionsRouter)
router.use('/rmlinks', rmlinksRouter)
router.use('/rmpages', rmpagesRouter)
router.use('/testresults', testresultsRouter)
router.use('/tests', testsRouter)
router.use('/user', userRouter)
router.use('/frontend', frontendRouter)




module.exports = router;