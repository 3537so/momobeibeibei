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
    https://www.maimemo.com/share/page?qq_aio_chat_type=3&tid=b0044e89f9bed463d16e4467f5d7e1fc&uid=27304477&pid=3bb2f715be81c2af3deea6d2eae80a4a，
    https://www.maimemo.com/share/page?uid=27304477&pid=5f123fe0deabae4e7070c6e63c4df0a4&qq_aio_chat_type=3&tid=2b82003e82e1481e99cccffb6f985e45，
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
