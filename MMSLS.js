/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=15249640&pid=afaa99854200461684ec24c45b6aa6e4&tid=57653da5c7394f126d7923c9044b4dc1",
    "https://www.maimemo.com/share/page?uid=27304477&pid=c5ddaa52663cb88bf3920b964ff2b807&tid=31ed0620f1b6787ea55d0bf0324b8f3c",
    "https://www.maimemo.com/share/page?uid=27304477&pid=c5ddaa52663cb88bf3920b964ff2b807&tid=31ed0620f1b6787ea55d0bf0324b8f3c",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    https://www.maimemo.com/share/page?uid=27304477&pid=89b9d20c4cb4eddd45fa3385d19b87c7&tid=259d58d950ce1f36c85891f37a3e0c89，
    https://www.maimemo.com/share/page?uid=27304477&pid=89b9d20c4cb4eddd45fa3385d19b87c7&tid=259d58d950ce1f36c85891f37a3e0c89，
    https://www.maimemo.com/share/page?uid=27304477&pid=89b9d20c4cb4eddd45fa3385d19b87c7&tid=259d58d950ce1f36c85891f37a3e0c89，
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
