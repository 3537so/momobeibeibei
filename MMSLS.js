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
    https://www.maimemo.com/share/page?uid=27304477&pid=0e2ce3ba002032d0af1225b50570f2dc&tid=4411139687618dcfbed836e5e598a97e，
    https://www.maimemo.com/share/page?uid=27304477&pid=9fdbc47f0a17cdaee225dde9dfda2644&tid=c8dd6830a2544b5a5826b4b1d6e64378，
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
