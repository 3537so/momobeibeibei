/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27304477&pid=5da1d4d693448e924d48a7ff0d113868&tid=017174cbaa5112d5fe8cc92efe492899",
    "https://www.maimemo.com/share/page?qq_aio_chat_type=3&tid=2c6b1c66494785fd7cec580a472bd12a&pid=8817596545d84e66da76000285ccad0c&uid=27304477",
    "https://www.maimemo.com/share/page?qq_aio_chat_type=3&pid=fc178bf75116bfa1f67ac7bdc12abee2&uid=27304477&tid=8127344f4bd2f760c55a7fafc61ac4a4",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    https://www.maimemo.com/share/page?qq_aio_chat_type=3&uid=27304477&pid=6e9382b34c56db344091c0e0467473b8&tid=d82039bfb3264a2706df30dd171ce9f0，
    https://www.maimemo.com/share/page?qq_aio_chat_type=3&pid=0b4cc65f45deb831d7906a456b64f987&uid=27304477&tid=ab176053a57a948194d68967876c0568，
    https://www.maimemo.com/page?sid=c95191da6158acb2b43f0d4bf0450218&uid=27304477&pid=158ce09f0af7149aa1cb30bf19f44437&tid=0e8415f114e6e2adebd14b3ef6bff476，
  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0， max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
