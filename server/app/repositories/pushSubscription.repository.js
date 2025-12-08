/**
 * @file app/repositories/pushSubscription.repository.js
 * @description pushSubscription Repository
 * 251208 v1.0.0 jk init
 */

import db from '../models/index.js';
const { PushSubscription } = db;

async function upsert(t = null, data) {
  return await PushSubscription.upsert(data, {transaction: t}); // 유니크나 pk값 있으면 upsert 제대로 작동되게 쓸수 있음
}

export default {
  upsert,
}