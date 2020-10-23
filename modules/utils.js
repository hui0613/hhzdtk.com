// 生成四位随即验证码

function randomCode() {
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += Math.floor(Math.random() * 9 + 1);
  }
  return code;
}

module.exports = { randomCode };
