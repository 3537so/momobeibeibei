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
    
    https://www.maimemo.com/share/page?uid=27304477&pid=60ff4ec509a059ea28eafa72045b10e8&tid=0f1b714e2f048d31af7f0fb6f23eadd7，
    https://www.maimemo.com/share/page?qq_aio_chat_type=3&uid=27304477&pid=0bc3db371fe1a48b6a0a7f80e3de61ca&tid=0a5ac0a22a6f07eb8f534d1276b28807，
    https://www.maimemo.com/share/page?pid=e8e899aa987ff440a5e46f0a212a544e&uid=27304477&qq_aio_chat_type=3&tid=77f425c81002bd6743bf8343a20fb387，
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
