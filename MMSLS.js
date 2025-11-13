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
    
    https://www.maimemo.com/share/page?uid=27304477&qq_aio_chat_type=3&tid=8e7b38a8cbe9f1f9613519fd9fd87801&pid=0f297f3c310ecb41bf6966507e5fb39c，
    https://www.maimemo.com/share/page?qq_aio_chat_type=3&pid=8de0ddbbbd3a081b77e94eddbcb95345&uid=27304477&tid=2c2fb57b044d96f335485db3ab43b016，
    https://www.maimemo.com/share/page?qq_aio_chat_type=3&pid=f622e47c462afc9289d13a745bba1888&uid=27304477&tid=5d9e0450e68aa2b7bb241016a35d49ae，
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
