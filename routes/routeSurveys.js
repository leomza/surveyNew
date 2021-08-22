"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
//I import the function of the Middlewares that I going to use here
var userCookie_1 = require("../middlewares/userCookie");
var isAdmin_1 = require("../middlewares/isAdmin");
//I import the function of the controlers that Im going to use here
var controlerSurvey_1 = require("../controlers/controlerSurvey");
//When the user click to start a new survey I call this method
router.route('/survey/:uuid')
    .post(userCookie_1.userCookieRead, isAdmin_1.isAdmin, controlerSurvey_1.newSurvey)
    .get(userCookie_1.userCookieRead, isAdmin_1.isAdmin, controlerSurvey_1.getSurveys)["delete"](userCookie_1.userCookieRead, isAdmin_1.isAdmin, controlerSurvey_1.deleteSurvey);
router.route('/question/:uuid/:qUuid')
    .post(userCookie_1.userCookieRead, isAdmin_1.isAdmin, controlerSurvey_1.addQuestion)
    .put(userCookie_1.userCookieRead, isAdmin_1.isAdmin, controlerSurvey_1.editQuestion)["delete"](userCookie_1.userCookieRead, isAdmin_1.isAdmin, controlerSurvey_1.deleteQuestion);
router.route('/questions/:uuid')
    .get(controlerSurvey_1.getQuestionsSurvey)
    .put(controlerSurvey_1.updateQuestionsSurvey);
module.exports = router;
