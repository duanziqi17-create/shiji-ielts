/* Offline lookup with optional links to the publishers' own dictionary pages. */
window.Dictionary=(()=>{
  const providers={
    youdao:{label:'有道词典',url:word=>`https://dict.youdao.com/result?word=${encodeURIComponent(word)}&lang=en`},
    iciba:{label:'金山词霸',url:word=>`https://www.iciba.com/word?w=${encodeURIComponent(word)}`},
    eudic:{label:'欧路词典',url:word=>`https://dict.eudic.net/dicts/en/${encodeURIComponent(word)}`}
  };
  const indexes={};
  const clean=term=>String(term||'').trim().replace(/^[^A-Za-z]+|[^A-Za-z]+$/g,'').replace(/\s+/g,' ').slice(0,100);
  function index(book){if(indexes[book])return indexes[book];const map=new Map();for(const item of window.Learning.words(book))map.set(item.word.toLowerCase(),item);return indexes[book]=map;}
  function forms(term){const t=term.toLowerCase(),out=[t];if(t.endsWith('ies'))out.push(t.slice(0,-3)+'y');if(t.endsWith('ing'))out.push(t.slice(0,-3),t.slice(0,-3)+'e');if(t.endsWith('ed'))out.push(t.slice(0,-2),t.slice(0,-1));if(t.endsWith('es'))out.push(t.slice(0,-2));if(t.endsWith('s'))out.push(t.slice(0,-1));return [...new Set(out)];}
  function lookup(term,selectedBook='cet4'){const query=clean(term);if(!query)return null;for(const book of [selectedBook,'starter','cet4','cet6','kaoyan','ielts','toefl','gre','sat']){const dict=index(book);for(const form of forms(query)){const item=dict.get(form);if(item)return{...item,book,query};}}if(query.includes(' ')){const parts=query.split(' ').slice(0,8).map(word=>lookup(word,selectedBook)).filter(item=>item?.book);if(parts.length)return{word:query,query,meaning:`逐词提示（词组意思需结合上下文核对）：${parts.map(item=>`${item.query}：${item.meaning}`).join('；')}`,phonetic:'',book:null};}return{word:query,query,meaning:'本地词库暂未收录，请打开在线词典查用法。',phonetic:'',book:null};}
  function links(term){const word=clean(term);return Object.entries(providers).map(([id,p])=>({id,label:p.label,url:p.url(word)}));}
  return{lookup,links,clean,providers};
})();
