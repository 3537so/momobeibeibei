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
    
    https://www.maimemo.com/share/page?uid=27304477&pid=6b2dac766215a7579f8f772555b10dff&tid=2c94f0fce8ac9b2688fff5db18761509，
    https://www.maimemo.com/share/page?uid=27304477&pid=a7d5c081a2a22dfb7649af4cf249239d&tid=f60f3f7b49ab554ed28f44c09c7944ec，
    https://www.maimemo.com/share/page?uid=27304477&pid=e215076e6b0d6886128940522523643d&tid=2e32394e00474f0a4dd4d6d54c5b259d，
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
