import express from 'express';
import controller from '../controllers/posts';

const router = express.Router();

router.get('/cities/name=:name', controller.getCitiesByName);
router.get('/cities/nameincluded=:name', controller.getCitiesByNameIncluded);

router.get('/cities/province=:province', controller.getCitiesByProvince);
router.get('/cities/cap=:cap', controller.getCitiesByCap);
router.get('/cities/altitude=:altitude', controller.getCitiesByCap);

/*router.get('/posts', controller.getPosts);
router.get('/posts/:id', controller.getPost);
router.put('/posts/:id', controller.updatePost);
router.delete('/posts/:id', controller.deletePost);
router.post('/posts', controller.addPost);*/

export = router;