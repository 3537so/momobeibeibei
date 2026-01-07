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
    
    https://www.maimemo.com/share/page?uid=27304477&pid=e7114ab8471bd14d749c356334a2391a&tid=69c3e9f7e797a46569bb02b38a7ab538，
    https://www.maimemo.com/share/page?uid=27304477&pid=c2d2c6272995c9a97f0bfa1d27b6528c&tid=9ef5b5b64f52aaed947d45d8a6488c5b，
    https://www.maimemo.com/share/page?uid=27304477&pid=a0f38d4fce76895800ad6d3853017977&tid=427dde59a3188c42c12a883067f0b619，
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
