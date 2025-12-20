import webpush from 'web-push';

const keys = webpush.generateVAPIDKeys();

console.log(JSON.stringify(keys, null, 2));

// 출력 예시 
// {
//   "publicKey": "BOLITgYl1YBr_-mmC4UNseUZIidoHnpOHv8ylg1xKeC5DBd0b-Yw8hy14Hd0iOdU-JtpdM2YduvnlqkPLQS4vMc",
//   "privateKey": "bmBQ_vzGAzvt1AMrKshTg4zGuL_M3zG3nNiAUaGbwKk"
// }