/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27304477&pid=5da1d4d693448e924d48a7ff0d113868&tid=017174cbaa5112d5fe8cc92efe492899",
    "https://www.maimemo.com/share/page?uid=27304477&pid=be3af8fd700c4ad75190a678416cd846&qq_aio_chat_type=3&tid=7ceb793f25b11aafbe15ce40cff0980d",
    "https://www.maimemo.com/share/page?uid=27304477&pid=5fbb0abbf9c647d6b05a1fae5ac5d573&tid=ceac8dc43a998ee87cd5f93b44a2f3ca",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    https://www.maimemo.com/page?sid=30cd193b8d3781b62e052612d20b56b9&uid=27304477&pid=dd87891d3221811d53bdc40512927e93&tid=54a1738fe20a61b3e51adc642c2e45d1，
    https://www.maimemo.com/share/page?pid=c18b2f7091558c5a3b681cef5b86ebd7&qq_aio_chat_type=3&tid=18e21c4a2149aabdc2ff92dd56c1086f&uid=27304477，
    https://www.maimemo.com/share/page?uid=27304477&pid=13b7128ba984e1452d074f4eade2ae13&qq_aio_chat_type=3&tid=23cf25897a4b881c8186af9adad375d5，
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
