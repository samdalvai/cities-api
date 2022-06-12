import express from 'express';
import controller from '../controllers/posts';

const router = express.Router();

router.get('/cities/name=:name', controller.getCitiesByName);
router.get('/cities/province=:province', controller.getCitiesByName);
router.get('/posts', controller.getPosts);
router.get('/posts/:id', controller.getPost);
router.put('/posts/:id', controller.updatePost);
router.delete('/posts/:id', controller.deletePost);
router.post('/posts', controller.addPost);

export = router;