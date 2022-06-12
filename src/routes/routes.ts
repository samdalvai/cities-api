import express from 'express';
import controller from '../controllers/endpoints';

const router = express.Router();

router.get('/cities/name=:name', controller.getCitiesByName);
router.get('/cities/nameincluded=:name', controller.getCitiesByNameIncluded);

router.get('/cities/province=:province', controller.getCitiesByProvince);
router.get('/cities/cap=:cap', controller.getCitiesByCap);
router.get('/cities/altitude=:altitude&comparison=:comparison', controller.getCitiesByAltitude);

export = router;