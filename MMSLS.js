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
    
    https://www.maimemo.com/share/page?qq_aio_chat_type=3&tid=4d7a3588232da2d474c5ed0afd2c8772&uid=27304477&pid=b4ac318acad921f23e614b4fb5c1310d，
    https://www.maimemo.com/share/page?qq_aio_chat_type=3&pid=5f65cae2e40101bebb34e9a6790343e1&uid=27304477&tid=618f5a0a5f55dca9142fd26ab9f0df1d，
    https://www.maimemo.com/share/page?qq_aio_chat_type=3&pid=ad50fa5508c79d60f96ff53c7f59b6b7&uid=27304477&tid=09e8486aa0e029e5cc3bb6bd292e1967，
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
