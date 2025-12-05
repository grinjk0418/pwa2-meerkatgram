/**
 * @file app/middlewares/validations/validators/auth/social.validator.js
 * @description social 유효성 체크
 * 251204 v1.0.0 jk init
 */

// import { email, password } from "../../fields/user.field.js";

// export default [email, password];

import userField from "../../fields/user.field.js";

export default [userField.provider];