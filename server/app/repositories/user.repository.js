/**
 * @file app/repositories/user.repository.js
 * @description User Repository
 * 251120 v1.0.0 jk init
 */

import db from '../models/index.js';
const { User } = db;

/**
 * 이메일로 유저 검색
 * @param {import("sequelize").Transaction} t 
 * @param {string} email 
 * @returns {Promise<import("../models/User.js").User>}
 */
async function findByEmail(t = null, email) {
  // SELECT * FROM users WHERE email = ? AND deleted_at IS NULL;
  return await User.findOne( // User 적을때 자동완성 쓰면 모듈에 있는 다른거 나오니까 import 따로 적어야 됌
    {
      where: {
        email: email
      },
      transaction: t
    }
  );
}

/**
 * 유저 모델 인스턴스로 save 처리
 * @param {import("sequelize").Transaction} t 
 * @param {import("../models/index.js").User} user 
 * @returns {Promise<import("../models/User.js").User>}
 */
async function save(t = null, user) {
  return await user.save({ transaction: t });
}

/**
 * 유저id로 유저정보 조회
 * @param {import("sequelize").Transaction} t 
 * @param {number} id 
 * @returns {Promise<import("../models/User.js").User>}
 */
async function findByPk(t = null, id) {
  return await User.findByPk(id, { transaction: t });
}

async function create(t = null, data) {
  return await User.create(data, { transaction: t });
}

async function logout(t = null, id) {
  return await User.update(
    {
      refreshToken: null
    },
    {
      where: {
        id: id
      },
      transaction: t
    }
  );

  // // 특정 유저 리프래시토큰 null로 갱신
  // // UPDATE users SET refresh_token = null, updated_at = NOW() WHERE id = ?
  // const sql =
  //     ' UPDATE users '
  //   + ' SET '
  //   + '   refresh_token = null '
  //   + '   ,updated_at = NOW() '
  //   + ' WHERE '
  //   + '   id = ? '
  // ;
  // const values = [id];

  // db.sequelize.query({query, values});
}

export default {
  findByEmail,
  save,
  findByPk,
  create,
  logout,
}