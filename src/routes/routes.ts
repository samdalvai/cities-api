import express from 'express';
import controller from '../controllers/endpoints';

const router = express.Router();

router.get('/cities/name/:name', controller.getCitiesByName);
router.get('/cities/nameincluded/:name', controller.getCitiesByNameIncluded);

router.get('/cities/province/:province', controller.getCitiesByProvince);
router.get('/cities/zip/:zip', controller.getCitiesByCap);

router.get('/cities/altitude/:altitude', controller.getCitiesByAltitude);

export = router;