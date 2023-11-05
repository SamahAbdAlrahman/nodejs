const express = require('express');
const router = express.Router();
const VideoController = require('../controller/beginner.controller');
const VideoController1 = require('../controller/intermediate.controller');
const VideoController2 = require('../controller/Advanced.controller');
const VideoController3 = require('../controller/yoga.controller');
const addClass = require('../controller/addclass.controller');
// const addnotification = require('../controller/adminnotification.controller');


const ExerciseController = require('../controller/deletebeginner.controller');
const ExerciseController1 = require('../controller/deleteintermediate.controller');
const ExerciseController2 = require('../controller/deleteAdvanced.controller');
const ExerciseController3 = require('../controller/deleteYoga.controller');
const deleteclass = require('../controller/deleteClass.controller');
const classController = require('../controller/updatedClass.controller');
const subscribtion = require('../controller/addsubscribtion.controller');
const deletesubscribtion = require('../controller/deletesubscribtion.controller');
const subscribtions = require('../controller/subscribtion.controller');
const middleware = require("../middleware");





router.post('/allSubscribtion', middleware.checkToken, subscribtions.createBooking);

router.post('/addBeginner', VideoController.addVideo);
router.post('/addIntermedate', VideoController1.addVideo);
router.post('/addAdvanced', VideoController2.addVideo);
router.post('/addyoga', VideoController3.addVideo);
router.post('/addClass', addClass.addclass);
router.delete('/class/:id', deleteclass.deleteExercise);

// router.post('/addnotification',  middleware.checkToken,addnotification.createBooking);

router.post('/addSub', subscribtion.addSub);
router.delete('/subscribtion/:id', deletesubscribtion.deleteExercise);


router.delete('/beginner/:id', ExerciseController.deleteExercise);
router.delete('/intermediate/:id', ExerciseController1.deleteExercise);
router.delete('/Advanced/:id', ExerciseController2.deleteExercise);
router.delete('/yoga/:id', ExerciseController3.deleteExercise);
const ClassBookingController = require('../controller/classBooking.controller');

router.post('/classBooking', middleware.checkToken,ClassBookingController.createBooking);

router.put('/updateClass/:classId', classController.updateClass);

const profileController   = require("../controller/searchByname.controller");
// Define the route to search profiles by username
router.get('/searchByStart', profileController.searchByUsernameStartsWith);

const ProfileController = require('../controller/fetchprofileByName');

// Define a route to fetch a profile by username
router.get('/profile/getData/:username', ProfileController.getProfileByUsername);


module.exports = router;





