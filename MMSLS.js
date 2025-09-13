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
    
    https://www.maimemo.com/share/page?uid=27304477&pid=5db94fe9b36db6b5ff7006d4cdd3e815&tid=0bb9df21935a06ff83451b8d054191dd，
    https://www.maimemo.com/share/page?uid=27304477&pid=8881f796a2b0a8194c4ea1e49f845ed9&tid=89277f6fab134baecacb5f413fcd3f74，
    https://www.maimemo.com/page?sid=e4acde911b3e1b73938873be453253fb&uid=27304477&pid=66a1c11e92c26b66713cefe7021bc137&tid=5a60a7877927e4c73f004c7d8c87e41c，
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
