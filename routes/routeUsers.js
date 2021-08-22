"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
//I import the function of the Middlewares that I going to use here
var userCookie_1 = require("../middlewares/userCookie");
var isAdmin_1 = require("../middlewares/isAdmin");
//I import the function of the Controlers that Im going to use here
var controlerUsers_1 = require("../controlers/controlerUsers");
router.post('/register', userCookie_1.userCookieWrite, controlerUsers_1.newUser);
router.get('/username/:email', controlerUsers_1.findUsername);
router.post('/login', userCookie_1.userCookieWrite, controlerUsers_1.login);
router.get('/info', userCookie_1.userCookieRead, controlerUsers_1.sendCookie);
//When the user click to finish the new survey I call this method
router.post('/uploadUserWithSurvey/:uuid', userCookie_1.userCookieRead, isAdmin_1.isAdmin, controlerUsers_1.uploadSurvey);
router.post('/answerLoginBefore', userCookie_1.userCookieWrite, controlerUsers_1.sendCookie);
router.post('/answerLoginAfter/:uuid', userCookie_1.userCookieRead, controlerUsers_1.answerLogin);
router["delete"]('/deleteSurvey/:uuid', userCookie_1.userCookieRead, controlerUsers_1.deleteSurveyUser);
module.exports = router;
