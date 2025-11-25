/**
 * @file app/repositories/user.repository.js
 * @description User Repository
 * 251120 v1.0.0 jk init
 */

import db from '../models/index.js';
const { User } = db;

/**
 * 이메일로 유저 검색
 * @param {import("sequelize").Transaction;} t 
 * @param {string} email 
 * @returns 
 */
async function findByEmail(t = null, email) {
  // SELECT * FROM users WHERE email = ? AND deleted_at IS NULL;
  return await User.findOne( // User 적을때 자동완성 쓰면 모듈에 있는 다른거 나오니까 import 따로 적어야 됌
    {
      where: {
        email: email
      }
    },
    {
      transaction: t
    }
  );
}

/**
 * 유저 모델 인스턴스로 save 처리
 * @param {import("sequelize").Transaction} t 
 * @param {import("../models/index.js").User} user 
 * @returns 
 */
async function save(t = null, user) {
  return await user.save({ transaction: t });
}

export default {
  findByEmail,
  save,
}