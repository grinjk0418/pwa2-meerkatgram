/**
 * @file routes/subscriptions.route.js
 * @description subscriptions 관련 라우터
 * 251203 v1.0.0 jk init
 */

import express from 'express';
import authMiddleware from '../app/middlewares/auth/auth.middleware.js';
import subscriptionsController from '../app/controllers/subscriptions.controller.js';

const subscriptionsRouter = express.Router();

subscriptionsRouter.post('/', authMiddleware, subscriptionsController.subscribe);

export default subscriptionsRouter;