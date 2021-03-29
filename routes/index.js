const express = require('express')
const router = express.Router()
const IndexController = require('../controllers/index')
const PlayerController = require('../controllers/PlayerController')
const QuestController = require('../controllers/QuestController')
const MatterController = require('../controllers/MatterController')
const PodiumController = require('../controllers/PodiumController')

router.route('/create/default/values').post(QuestController.createDefautValues)

router.route('/sever/status').get(IndexController.getSeverStatus)

router.route('/player/create').post(PlayerController.createPlayer)

router.route('/create/matter').post(MatterController.createMatter)
router.route('/listAll/matter').get(MatterController.listMatter)

router.route('/create/question').post(QuestController.createQuest)
router.route('/listAll/question').get(QuestController.listQuest)
router.route('/listByLevelAndLimit/question').post(QuestController.listQuestionsByLevelAndLimit)
router.route('/listByLevel/question').post(QuestController.listQuestionsByLevel)
router.route('/preview/answer/question').post(QuestController.previewAnswerQuestion)
router.route('/answer/question').post(QuestController.answerQuestion)
router.route('/answer/calculate').post(QuestController.answerAndCalculatePoints)

router.route('/podium').get(PodiumController.createPodium)

module.exports = router