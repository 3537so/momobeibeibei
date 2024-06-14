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
    
    https://www.maimemo.com/share/page?uid=27304477&pid=82f17ccd448a653404d504b995f9fb47&tid=61e04b4ea8621dc33afaba77194f3dfa，
    https://www.maimemo.com/share/page?uid=27304477&pid=cd6e8d5222adf44eb560e4abc23b9f68&tid=b698577f146d58b0c4a85d6a439bdbb7，
    https://www.maimemo.com/share/page?uid=27304477&pid=e6faee62ccdedfc97ac554e52c66476d&tid=432af397e6814af3f47974392cd97d62，
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
