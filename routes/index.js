const { Router } = require('express');
const router = Router();


const accountsRouter = require('./AccountRouter')
const complitedRMRouter = require('./CompletedRoadmaps')
const optionsRouter = require('./OptionsRouter')
const questionsRouter = require('./QuestionsRouter')
const rmlinksRouter = require('./RMLinksRouter')
const rmpagesRouter = require('./RMPagesRouter')
const roadmapsRouter = require('./RoadmapsRouter')
const testresultsRouter = require('./TestResults')
const testsRouter = require('./TestsRouter')
const usagedaysRouter = require('./UsageDaysRouter')
const userachievementsRouter = require('./UserAchievRouter')
const userRouter = require('./UserRouter')
const frontendRouter = require('./FrontendRouter')



router.use('/account', accountsRouter)
router.use('/complitedRM', complitedRMRouter)
router.use('/options', optionsRouter)
router.use('/quest', questionsRouter)
router.use('/rmlinks', rmlinksRouter)
router.use('/rmpages', rmpagesRouter)
router.use('/roadmaps', roadmapsRouter)
router.use('/testresults', testresultsRouter)
router.use('/tests', testsRouter)
router.use('/usage', usagedaysRouter)
router.use('/userach', userachievementsRouter)
router.use('/user', userRouter)
router.use('/frontend', frontendRouter)




module.exports = router;