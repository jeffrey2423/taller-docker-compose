const { Router } = require('express');

const router = Router();

const fakerController = require('../controllers/faker-controller');

router.route('/GetUsers')
    .post(fakerController.GetUsers)

router.route('/InsertFakeData')
    .post(fakerController.InsertFakeData)

router.route('/GetLastPosition')
    .post(fakerController.GetLastPosition)

router.route('/DeleteAll')
    .post(fakerController.DeleteAll)

module.exports = router;