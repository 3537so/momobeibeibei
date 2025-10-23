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
    
    https://www.maimemo.com/share/page?pid=26a56d57e5fefe32f8ec800ae59ad6ae&uid=27304477&qq_aio_chat_type=3&tid=32a6ebd4d0f3a49edbae107ae0fb4d7e，
    https://www.maimemo.com/share/page?qq_aio_chat_type=3&pid=c9eb1499e68313884f9886775943776f&uid=27304477&tid=d3f7eaa3924987f8fd68147329d598f4，
    https://www.maimemo.com/share/page?qq_aio_chat_type=3&uid=27304477&pid=c0b11550c16ec9b56230a4af62f28a05&tid=01140a24a424c99429698c327a3ed0da，
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
