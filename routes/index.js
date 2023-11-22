const { Router } = require('express');
const router = Router();


const achievementsRouter = require('./AchievementsRouter')
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


router.use('/achieve', achievementsRouter)
router.use('/complitedRM', complitedRMRouter)
router.use('/options', optionsRouter)
router.use('/questions', questionsRouter)
router.use('/rmlinks', rmlinksRouter)
router.use('/rmpages', rmpagesRouter)
router.use('/roadmaps', roadmapsRouter)
router.use('/testresults', testresultsRouter)
router.use('/tests', testsRouter)
router.use('/usage', usagedaysRouter)
router.use('/userach', userachievementsRouter)
router.use('/user', userRouter)



module.exports = router;