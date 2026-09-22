/* A repeatable study route after the seven original foundation lessons. */
window.Continuation=(()=>{
  const urls={
    listening:'https://learnenglish.britishcouncil.org/free-resources/listening/a2',
    reading:'https://learnenglish.britishcouncil.org/free-resources/reading/a2',
    speaking:'https://learnenglish.britishcouncil.org/free-resources/speaking/a2',
    writing:'https://learnenglish.britishcouncil.org/free-resources/writing/a2',
    ielts:'https://ielts.org/take-a-test/preparation-resources/sample-test-questions/academic-test'
  };
  const phases=[
    {until:3,name:'基础巩固',minutes:'15–25 分钟',focus:'用短材料巩固听懂信息、找出原文依据和说出完整句子。'},
    {until:5,name:'认识雅思题型',minutes:'20–30 分钟',focus:'开始接触雅思官方样题。一次只做一小部分，重点看懂答案依据。'},
    {until:7,name:'练习完整表达',minutes:'25–35 分钟',focus:'逐步延长口头回答和写作段落，把观点、理由、例子连起来。'},
    {until:Infinity,name:'持续练习与复盘',minutes:'30–40 分钟',focus:'每周重复听、读、说、写、复盘的节奏。逐渐增加材料长度，再尝试限时练习。'}
  ];
  const weekday=['周一','周二','周三','周四','周五','周六','周日'];
  function phase(week){return phases.find(p=>week<=p.until);}
  function count(state){return Object.values(state.practiceCompleted||{}).reduce((n,a)=>n+(Array.isArray(a)?a.length:0),0);}
  function days(state){return new Set([...Object.keys(state.history||{}),...Object.keys(state.practiceHistory||{})]).size;}
  function tasks(week){const early=week<=3,official=week>=4,extended=week>=6;
    return [
      {title:'回看不熟的词',detail:'打开「我的复习」，选 5 个词：读例句、自己造一句，再看错题解释。',resource:null,action:'review',time:'15 分钟'},
      {title:'听一段短对话',detail:early?'选一段生活对话。先听主旨，再听数字、时间或地点；最后对照文字。':'从官方样题选一小段听力。先看题，再听一次，核对原文与答案。',resource:early?urls.listening:urls.ielts,action:null,time:official?'25 分钟':'20 分钟'},
      {title:'读一段并找依据',detail:early?'选一篇短文，圈出题目关键词，再在原文中找到对应句子。':'从官方阅读样题选一组题，只做这一组并写下每题依据。',resource:early?urls.reading:urls.ielts,action:null,time:official?'25 分钟':'20 分钟'},
      {title:'开口回答',detail:extended?'用雅思官方口语样题选一个话题，说 1–2 分钟，再用一句话补充理由。':'选一个生活话题，先跟读有用表达，再用自己的话回答 3–5 句。',resource:extended?urls.ielts:urls.speaking,action:null,time:extended?'25 分钟':'20 分钟'},
      {title:'写清楚一个想法',detail:extended?'先写观点、理由和例子三部分，再对照官方样题要求检查是否切题。':'选一篇简短写作范例，模仿结构写 5–7 句，检查主语、动词和标点。',resource:extended?urls.ielts:urls.writing,action:null,time:extended?'30 分钟':'20 分钟'},
      {title:'做一组综合练习',detail:early?'回到起步周，挑一项最难的听读练习重做，并说明自己上次为什么答错。':'从官方样题选一组听力或阅读题。计时完成，核对答案后写出两个错误原因。',resource:early?null:urls.ielts,action:early?'today':null,time:official?'30 分钟':'20 分钟'},
      {title:'复盘与下周计划',detail:'写下这周最有用的一个表达、最常见的一个错误，以及下周要加强的技能。',resource:null,action:null,time:'15 分钟'}
    ];
  }
  function render(state,esc){const week=Math.max(2,Number(state.practiceWeek)||2),p=phase(week),done=state.practiceCompleted?.[week]||[],items=tasks(week);return `
    <section class="intro"><div><div class="eyebrow">KEEP GOING</div><h1>第 8 天起，继续往前。</h1><p>每周做七项小练习，从资料页选择不同材料。没有截止日期，按自己的节奏进入下一周。</p></div><span class="pill">第 ${week} 周 · ${p.name}</span></section>
    <section class="card pathway-overview"><div><span class="section-label">本周方向</span><h2>${p.name}</h2><p>${p.focus}</p></div><div class="pathway-score"><strong>${done.length}<span> / 7</span></strong><small>项已完成</small></div></section>
    <section class="pathway-phase" aria-label="学习阶段"><span class="${week<=3?'active':''}">第 2–3 周 · 夯实基础</span><span class="${week>=4&&week<=5?'active':''}">第 4–5 周 · 熟悉题型</span><span class="${week>=6&&week<=7?'active':''}">第 6–7 周 · 完整表达</span><span class="${week>=8?'active':''}">第 8 周起 · 持续练习</span></section>
    <div class="week-controls"><button class="btn outline" data-week-prev ${week===2?'disabled':''}>← 上一周</button><div><strong>第 ${week} 周</strong><small>参考用时 ${p.minutes} · 可自由增减</small></div><button class="btn outline" data-week-next>下一周 →</button></div>
    <div class="pathway-list">${items.map((item,i)=>`<article class="card pathway-task ${done.includes(i)?'completed':''}"><div class="task-index"><span>${weekday[i]}</span><strong>${String(i+1).padStart(2,'0')}</strong></div><div class="task-body"><div class="task-heading"><h3>${item.title}</h3><span class="meta">约 ${item.time}</span></div><p>${item.detail}</p><div class="task-actions">${item.resource?`<a href="${item.resource}" target="_blank" rel="noopener noreferrer">打开${earlyLabel(week)}练习资料 ↗</a>`:''}${item.action==='review'?'<button class="text-button" data-open-review>打开我的复习 →</button>':''}${item.action==='today'?'<button class="text-button" data-open-foundation>回看起步练习 →</button>':''}</div>${i===6?`<label class="reflection-label" for="reflection">这一周我学到了什么？</label><textarea id="reflection" data-reflection placeholder="例如：听时间信息比上周更容易了。下周想继续练阅读。">${esc(state.practiceNotes?.[week]||'')}</textarea><p class="hint">自动保存在此浏览器。</p>`:''}</div><button class="task-complete" data-practice-task="${i}" aria-pressed="${done.includes(i)}">${done.includes(i)?'✓ 已完成':'标记完成'}</button></article>`).join('')}</div>
    <section class="pathway-tail"><h2>什么时候做更长的雅思练习？</h2><p>当短材料能读懂、听懂大意，而且能用几句英语表达观点时，就尝试官方样题。正式听力录音只播放一次；起步阶段先把方法练稳。</p><a href="${urls.ielts}" target="_blank" rel="noopener noreferrer">查看 IELTS 官方样题 ↗</a></section>`;}
  function earlyLabel(week){return week<=3?'基础':'官方';}
  function progress(state,esc){const weeks=Object.keys(state.practiceCompleted||{}).map(Number).filter(n=>n>=2).sort((a,b)=>a-b);return `<section class="card history" style="margin-top:20px"><div class="week-heading"><h2>持续学习</h2><span class="meta">已完成 ${count(state)} 项</span></div>${weeks.length?weeks.map(w=>`<div class="history-row"><span>第 ${w} 周 · ${phase(w).name}</span><span class="meta">${(state.practiceCompleted[w]||[]).length} / 7 完成</span></div>`).join(''):'<p class="instructions">完成起步周后，可在「持续学习」记录每周练习。你也可以随时提前开始。</p>'}<button class="text-button" data-view="continue">查看持续学习 →</button></section>`;}
  function bind(state,save,render,toast,go){document.querySelector('[data-week-prev]')?.addEventListener('click',()=>{state.practiceWeek=Math.max(2,state.practiceWeek-1);save();render();});document.querySelector('[data-week-next]')?.addEventListener('click',()=>{state.practiceWeek++;save();render();});document.querySelectorAll('[data-practice-task]').forEach(b=>b.addEventListener('click',()=>{const w=state.practiceWeek,i=Number(b.dataset.practiceTask),list=state.practiceCompleted[w]||[];if(list.includes(i))state.practiceCompleted[w]=list.filter(x=>x!==i);else{list.push(i);state.practiceCompleted[w]=list;const date=new Date(),stamp=`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;state.practiceHistory[stamp]=state.practiceHistory[stamp]||[];const id=`${w}-${i}`;if(!state.practiceHistory[stamp].includes(id))state.practiceHistory[stamp].push(id);}save();const y=window.scrollY;render();window.scrollTo(0,y);toast(state.practiceCompleted[w].includes(i)?'这项练习已记录。':'已取消本项完成标记。');}));document.querySelector('[data-reflection]')?.addEventListener('input',e=>{state.practiceNotes[state.practiceWeek]=e.target.value;save();});document.querySelector('[data-open-review]')?.addEventListener('click',()=>go('review'));document.querySelector('[data-open-foundation]')?.addEventListener('click',()=>go('today'));}
  return{render,bind,count,days,progress};
})();
