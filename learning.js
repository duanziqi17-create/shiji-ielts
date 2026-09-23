/* Daily vocabulary and sentence sessions. Content here is original and stays offline. */
window.Learning=(()=>{
  const extra=[
    ['analyse','v. 分析','We need to analyse the results carefully.','我们需要仔细分析结果。'],
    ['approach','n. 方法；途径','This approach can save time.','这种方法可以节省时间。'],
    ['benefit','n. 好处；益处','Regular exercise has many benefits.','规律运动有很多好处。'],
    ['challenge','n. 挑战','Learning to speak clearly is a challenge.','学会清楚表达是一项挑战。'],
    ['community','n. 社区；群体','The library serves the local community.','这座图书馆服务当地社区。'],
    ['compare','v. 比较','The report compares two education systems.','这份报告比较了两种教育制度。'],
    ['consume','v. 消耗；消费','Modern homes consume less energy.','现代住宅消耗更少能源。'],
    ['contribute','v. 促成；贡献','Public transport can contribute to cleaner air.','公共交通有助于改善空气质量。'],
    ['decline','n./v. 下降','The number of visitors declined last year.','去年游客数量下降了。'],
    ['develop','v. 发展；培养','Students need time to develop confidence.','学生需要时间培养自信。'],
    ['environment','n. 环境','Plastic waste harms the environment.','塑料垃圾会损害环境。'],
    ['evidence','n. 证据','The writer gives evidence for the main idea.','作者为主要观点提供了证据。'],
    ['factor','n. 因素','Cost is an important factor in this decision.','费用是这个决定中的重要因素。'],
    ['feature','n. 特点；特征','The app has a useful review feature.','这个应用有实用的复习功能。'],
    ['focus','v./n. 专注；重点','This lesson focuses on useful phrases.','本课重点学习实用短语。'],
    ['impact','n. 影响','Tourism has a major impact on the town.','旅游业对这座城镇影响很大。'],
    ['improve','v. 改善；提高','Daily practice can improve your listening.','每天练习可以提高听力。'],
    ['increase','v./n. 增加','The price increased by ten percent.','价格上涨了百分之十。'],
    ['individual','n. 个人','Each individual learns at a different pace.','每个人的学习节奏不同。'],
    ['issue','n. 问题；议题','Traffic is a serious issue in large cities.','交通是大城市中的严重问题。'],
    ['maintain','v. 维持','It is difficult to maintain a healthy routine.','维持健康作息并不容易。'],
    ['measure','v. 测量；衡量','The survey measures public opinion.','这项调查衡量公众意见。'],
    ['method','n. 方法','Try a different method if this one is too slow.','如果这个方法太慢，就尝试另一种。'],
    ['occur','v. 发生','Most accidents occur at busy times.','大多数事故发生在繁忙时段。'],
    ['participate','v. 参加','More students participated in the discussion.','更多学生参加了讨论。'],
    ['policy','n. 政策','The new policy supports public transport.','新政策支持公共交通。'],
    ['prevent','v. 防止','Simple checks can prevent common mistakes.','简单检查可以避免常见错误。'],
    ['process','n. 过程','Language learning is a gradual process.','语言学习是一个渐进过程。'],
    ['provide','v. 提供','The chart provides useful information.','这张图表提供了有用信息。'],
    ['reduce','v. 减少','Cycling can reduce traffic pollution.','骑自行车可以减少交通污染。'],
    ['require','v. 需要','The task requires a clear answer.','这项任务需要明确回答。'],
    ['research','n. 研究','Recent research examines sleep habits.','近期研究考察了睡眠习惯。'],
    ['respond','v. 回应','Please respond to every part of the question.','请回应问题的每个部分。'],
    ['significant','adj. 显著的；重要的','There was a significant change in 2025.','2025年出现了显著变化。'],
    ['similar','adj. 相似的','The two plans are similar in cost.','两个方案的费用相近。'],
    ['solution','n. 解决办法','Better buses may be part of the solution.','更好的公交服务可能是解决办法的一部分。'],
    ['source','n. 来源','Always check the source of a claim.','一定要核对说法的来源。'],
    ['specific','adj. 具体的','Give a specific example to support your view.','给出具体例子来支持观点。'],
    ['structure','n. 结构','A clear structure makes an essay easier to read.','清晰结构让文章更易读。'],
    ['trend','n. 趋势','The graph shows an upward trend.','图表显示出上升趋势。'],
    ['vary','v. 变化；不同','Study time varies from person to person.','学习时间因人而异。'],
    ['available','adj. 可获得的；有空的','More information is available online.','网上可以找到更多信息。'],
    ['average','n./adj. 平均；平均的','The average journey takes thirty minutes.','平均行程需要三十分钟。'],
    ['category','n. 类别','Put each answer into the correct category.','把每个答案放入正确类别。'],
    ['consequence','n. 后果','One consequence is higher living costs.','一个后果是生活成本上升。'],
    ['contrast','v./n. 对比','The second paragraph contrasts city and rural life.','第二段对比城市与乡村生活。'],
    ['data','n. 数据','The data comes from a national survey.','这些数据来自全国调查。'],
    ['distribute','v. 分配；分发','Food is distributed to local schools.','食物被分发到当地学校。'],
    ['estimate','v./n. 估计','Experts estimate that demand will rise.','专家估计需求将会上升。'],
    ['indicate','v. 表明','The figures indicate steady growth.','这些数字表明增长稳定。'],
    ['interpret','v. 解释；理解','Be careful when you interpret the chart.','解读图表时要谨慎。'],
    ['majority','n. 大多数','The majority of students chose option A.','大多数学生选择了A项。'],
    ['objective','n. 目标；adj. 客观的','Our main objective is to communicate clearly.','我们的主要目标是清楚交流。'],
    ['perspective','n. 角度；观点','Try to see the issue from another perspective.','试着从另一个角度看这个问题。'],
    ['proportion','n. 比例','A large proportion of waste can be recycled.','很大比例的垃圾可以回收。'],
    ['relevant','adj. 相关的','Use only information that is relevant to the question.','只使用与问题相关的信息。'],
    ['strategy','n. 策略','This strategy helps me remember new words.','这个策略帮助我记住新词。'],
    ['sustainable','adj. 可持续的','The city needs a sustainable transport system.','这座城市需要可持续的交通系统。'],
    ['temporary','adj. 临时的','The change is temporary, not permanent.','这个变化是暂时的，不是永久的。'],
    ['whereas','conj. 然而；而','City rents rose, whereas rural rents stayed stable.','城市租金上涨，而乡村租金保持稳定。']
  ];
  const base=()=>window.LESSONS.flatMap((lesson,day)=>lesson.words.map((w,index)=>({id:`base-${day}-${index}`,word:w[0],phonetic:w[1],meaning:w[2],example:w[3],translation:w[4]})));
  const starter=()=>[...base(),...extra.map((w,i)=>({id:`ielts-${i}`,word:w[0],phonetic:'',meaning:w[1],example:w[2],translation:w[3]}))];
  const labels={starter:'原创起步词',cet4:'大学四级',cet6:'大学六级',kaoyan:'考研英语',ielts:'雅思 IELTS',toefl:'托福 TOEFL',gre:'GRE',sat:'SAT'};
  const cache={};
  const words=(book='starter')=>cache[book]||(cache[book]=book==='starter'?starter():(()=>{const curated=new Map(words('starter').map(w=>[w.word.toLowerCase(),w]));return(window.VOCAB_BOOKS?.[book]||[]).map((w,i)=>{const good=curated.get(w[0].toLowerCase());return{id:`${book}-${i}`,word:w[0],phonetic:w[1]||good?.phonetic||'',meaning:good?.meaning||w[2],example:good?.example||'',translation:good?.translation||''};});})());
  const books=()=>Object.entries(labels).map(([id,label])=>({id,label,count:words(id).length}));
  const date=()=>{const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;};
  function ensure(s){
    s.newWordTarget=Math.max(5,Math.min(60,Number(s.newWordTarget)||20));
    s.sentenceTarget=Math.max(1,Math.min(30,Number(s.sentenceTarget)||5));
    s.dailyLearning=s.dailyLearning&&typeof s.dailyLearning==='object'?s.dailyLearning:{};
    s.learningCursor=s.learningCursor&&typeof s.learningCursor==='object'?s.learningCursor:{words:0,sentences:0};
    s.learningCursor.words=Number(s.learningCursor.words)||0;s.learningCursor.sentences=Number(s.learningCursor.sentences)||0;
    if(!s.selectedBook)s.selectedBook=s.learningCursor.words>0?'starter':'cet4';
    if(!labels[s.selectedBook]||!words(s.selectedBook).length)s.selectedBook='starter';
    s.bookCursors=s.bookCursors&&typeof s.bookCursors==='object'?s.bookCursors:{};
    if(s.selectedBook==='starter'&&!Number.isFinite(Number(s.bookCursors.starter)))s.bookCursors.starter=s.learningCursor.words;
    for(const id of Object.keys(labels))s.bookCursors[id]=Math.max(0,Number(s.bookCursors[id])||0);
    const d=date();s.dailyLearning[d]=s.dailyLearning[d]||{words:[],sentences:[]};
    s.dailyLearning[d].words=Array.isArray(s.dailyLearning[d].words)?s.dailyLearning[d].words:[];
    s.dailyLearning[d].sentences=Array.isArray(s.dailyLearning[d].sentences)?s.dailyLearning[d].sentences:[];
    return s;
  }
  function progress(s,d=date()){ensure(s);const x=s.dailyLearning[d]||{words:[],sentences:[]};return{words:x.words.length,sentences:x.sentences.length,wordTarget:s.newWordTarget,sentenceTarget:s.sentenceTarget};}
  function currentWord(s,kind='words'){ensure(s);if(kind==='sentences'){const pool=words();return pool[s.learningCursor.sentences%pool.length];}const pool=words(s.selectedBook),cursor=s.bookCursors[s.selectedBook];return cursor>=pool.length?null:pool[cursor];}
  function complete(s,kind){ensure(s);const item=currentWord(s,kind);if(!item)return null;const book=kind==='words'?s.selectedBook:'starter';s.dailyLearning[date()][kind].push({id:item.id,word:item.word,book});if(kind==='words'){s.bookCursors[book]++;s.learningCursor.words++;}else s.learningCursor.sentences++;return item;}
  function dailyCounts(s,d){const x=s.dailyLearning?.[d]||{};return{words:(x.words||[]).length,sentences:(x.sentences||[]).length};}
  function learnedWords(s){const result=new Set(),legacy=new Map(words().map(w=>[w.id,w.word.toLowerCase()]));for(const day of Object.values(s.dailyLearning||{}))for(const entry of day.words||[]){if(entry&&typeof entry==='object'&&entry.word)result.add(entry.word.toLowerCase());else if(typeof entry==='string'){const id=entry.replace(/-\d+$/,'');if(legacy.has(id))result.add(legacy.get(id));}}return result;}
  function bookPosition(s){ensure(s);return{learned:s.bookCursors[s.selectedBook],total:words(s.selectedBook).length};}
  return{ensure,progress,currentWord,complete,dailyCounts,date,words,books,bookPosition,learnedWords,labels};
})();
