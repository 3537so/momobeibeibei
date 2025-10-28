/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27304477&pid=5da1d4d693448e924d48a7ff0d113868&tid=017174cbaa5112d5fe8cc92efe492899",
    "https://www.maimemo.com/share/page?uid=27304477&pid=be3af8fd700c4ad75190a678416cd846&qq_aio_chat_type=3&tid=7ceb793f25b11aafbe15ce40cff0980d",
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
    
    https://www.maimemo.com/share/page?qq_aio_chat_type=3&uid=27304477&pid=87fa61fcbb444061d81bd184fd6b3e19&tid=797a88d7ac3eef5e3d81421373a69784，
    https://www.maimemo.com/share/page?qq_aio_chat_type=3&pid=c9eb1499e68313884f9886775943776f&uid=27304477&tid=d3f7eaa3924987f8fd68147329d598f4，
    https://www.maimemo.com/share/page?pid=d680aca9874e000cffbfba82e9f2b07e&tid=19f32c1ca9e0842a356c407ef3912b62&qq_aio_chat_type=3&uid=27304477，
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
