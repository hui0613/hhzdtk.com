// 邮箱验证码

const router = require('koa-router')();
const DB = require('../modules/db');
const nodemailer = require('nodemailer');
const { randomCode } = require('../modules/utils');

// 注册/找回密码发送验证码

router.get('/api/sendCode', async (ctx, next) => {
  let code = randomCode();

  // 设置 session
  ctx.session.authCode = code;

  let transporter = nodemailer.createTransport({
    // host: 'smtp.ethereal.email',
    service: 'qq', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
    port: 465, // SMTP 端口
    secureConnection: true, // 使用了 SSL
    auth: {
      user: 'auth.hhzdtk@qq.com',
      // 这里密码不是qq密码，是你设置的smtp授权码
      pass: 'ognemcxicjzxebib',
    },
  });

  let mailOptions = {
    from: 'auth.hhzdtk@qq.com', // sender address
    to: '2516772557@qq.com', // list of receivers
    subject: '验证码', // Subject line
    // 发送text或者html格式
    // text: 'Hello world?', // plain text body
    html: code, // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });
  ctx.body = 'test';
});

// 对验证码进行验证
router.post('/api/authCode', async (ctx, next) => {});
module.exports = router;
