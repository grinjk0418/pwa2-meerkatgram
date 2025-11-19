/**
 * @file app/controllers/auth.controller.js
 * @description 인증 관련 컨트롤러
 * 251119 v1.0.0 jk init
 */

import { SUCCESS } from "../../configs/responseCode.config.js";
import { createBaseResponse } from "../utils/createBaseResponse.util.js";

// ----------------
// ---- public ----
// ----------------
/**
 * 로그인 컨트롤러 처리
 * @param {import("express").Request} req - Request 객체
 * @param {import("express").Response} res - Response 객체
 * @param {import("express").NextFunction} next - NextFunction 객체
 * @returns
 */
async function login(req, res, next) {
  const body = req.body;
  
  return res.status(SUCCESS.status).send(createBaseResponse(SUCCESS, body));
}

// --------------
// export
// --------------
export default {
  login,
};
// 파일명 잘 지으면 '.' 구분자로 써서 import 할때 객체명을 카멜기법으로 자동으로 만들어줌