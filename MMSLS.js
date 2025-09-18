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
    https://www.maimemo.com/page?sid=d8444ef1dd32aa67024b840e4a381f6b&uid=27304477&pid=70da6132044e09f3b407f69d0ba23438&tid=cf462b53624a46f86f61c0819a4bf6f0，
    https://www.maimemo.com/page?sid=3b4bbc94b75b079d7e025e2a89ffad9c&uid=27304477&pid=e0d411ded71f3bceb6a1dfc9f9eec335&tid=ff3a8a36da11990a97beeb90b144829d，
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
