/**
 * @file app/controllers/auth.controller.js
 * @description 인증 관련 컨트롤러
 * 251119 v1.0.0 jk init
 */

import { SUCCESS } from "../../configs/responseCode.config.js";
// import { logger } from "../middlewares/loggers/winston.logger.js";
import authService from "../services/auth.service.js";
import cookieUtil from "../utils/cookie/cookie.util.js";
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
  // logger.error('에러에러');
  // logger.warn('워닝워닝');
  // logger.info('인포인포');
  // logger.http('에이치티티피');
  // logger.verbose('버보스');
  // logger.debug('디버그');
  // logger.silly('실리');

  try {
    const body = req.body; // 파라미터 획득

    // 로그인 서비스 호출
    const { accessToken, refreshToken, user } = await authService.login(body);

    // Cookie에 RefreshToken 설정
    cookieUtil.setCookieRefreshToken(res, refreshToken);
    
    return res.status(SUCCESS.status).send(createBaseResponse(SUCCESS, {accessToken, user}));
  } catch(error) {
    next(error);
  }
}

// --------------
// export
// --------------
export default {
  login,
};
// 파일명 잘 지으면 '.' 구분자로 써서 import 할때 객체명을 카멜기법으로 자동으로 만들어줌