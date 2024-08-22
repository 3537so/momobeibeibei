/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27304477&pid=5da1d4d693448e924d48a7ff0d113868&tid=017174cbaa5112d5fe8cc92efe492899",
    "https://www.maimemo.com/share/page?uid=27304477&pid=94fd58d4eabe06800a42d8a7cc5eb0a5&tid=baee87fec27eb45f223f921ab4c4ca9c",
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
    
    https://www.maimemo.com/share/page?uid=27304477&pid=433fb8c5aa381d4841d5cb0035eb5c3e&tid=66c7c46e04b35a9ff6b98984bea62cfa，
    https://www.maimemo.com/share/page?uid=27304477&pid=e504a94a4f6bb7e29fe661717c566c84&tid=05fdcdb2a7280d234bec797bda5c74b3，
    https://www.maimemo.com/share/page?uid=27304477&pid=40e247e149838fe4e6448d169f4ddf88&tid=e5b17cfbd39b19f37b1779037bd775a7，
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
