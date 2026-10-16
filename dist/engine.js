export const COLORS = [
  { name:'鼠尾草绿',hex:'#92ac91',dark:'#658466' },
  { name:'暖杏黄',hex:'#edc171',dark:'#c79845' },
  { name:'雾霭蓝',hex:'#86b7c9',dark:'#578da3' },
  { name:'珊瑚粉',hex:'#e69b89',dark:'#bd7266' },
  { name:'鸢尾紫',hex:'#aaa3cf',dark:'#7c75a9' },
  { name:'奶油白',hex:'#e9dfbe',dark:'#b7aa86' }
];
export const ART = [
 ['戴珍珠耳环的少女','JOHANNES VERMEER · 1665','维米尔'],['蒙娜丽莎','LEONARDO DA VINCI · 1503','达 · 芬奇'],['戴草帽的梵高','VINCENT VAN GOGH · 1887','文森特 · 梵高'],['爱因斯坦','ALBERT EINSTEIN · 1879–1955','阿尔伯特 · 爱因斯坦'],
 ['弗里达','FRIDA KAHLO · 1907–1954','弗里达 · 卡罗'],['玛丽莲 · 梦露','MARILYN MONROE · 1926–1962','玛丽莲 · 梦露'],['卓别林','CHARLIE CHAPLIN · 1889–1977','查理 · 卓别林'],['奥黛丽 · 赫本','AUDREY HEPBURN · 1929–1993','奥黛丽 · 赫本'],
 ['贝多芬','LUDWIG VAN BEETHOVEN · 1770–1827','路德维希 · 贝多芬'],['萨尔瓦多 · 达利','SALVADOR DALÍ · 1904–1989','萨尔瓦多 · 达利'],['达 · 芬奇','LEONARDO DA VINCI · 1452–1519','列奥纳多 · 达 · 芬奇'],['牛顿','ISAAC NEWTON · 1643–1727','艾萨克 · 牛顿']
];
export const CELLS=[];
for(let r=-2;r<=2;r++) for(let q=-2;q<=2;q++) if(Math.abs(q+r)<=2) CELLS.push({q,r});
export function adjacent(a,b){return Math.max(Math.abs(a.q-b.q),Math.abs(a.r-b.r),Math.abs(a.q+a.r-b.q-b.r))===1;}
export const NEIGHBORS=CELLS.map(a=>CELLS.flatMap((b,i)=>adjacent(a,b)?[i]:[]));
export const clone=value=>JSON.parse(JSON.stringify(value));
export function randomSeed(seed){return ()=>{seed|=0;seed=seed+0x6d2b79f5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return ((t^t>>>14)>>>0)/4294967296;};}
export function topRun(stack){if(!stack.length)return {color:-1,count:0};const color=stack.at(-1);let count=0;for(let i=stack.length-1;i>=0&&stack[i]===color;i--)count++;return {color,count};}
export function component(board,start){const color=board[start].at(-1);if(color===undefined)return [];const found=new Set([start]),queue=[start];for(const i of queue)for(const n of NEIGHBORS[i])if(!found.has(n)&&board[n].at(-1)===color){found.add(n);queue.push(n);}return [...found];}
export function resolve(board,preferred){const events=[];for(let pass=0;pass<200;pass++){
 let changed=false;
 for(const i of [preferred,...board.map((_,i)=>i).filter(i=>i!==preferred)]){
  if(!board[i]?.length)continue;
  const group=component(board,i);let target=group.includes(preferred)?preferred:i;
  if(group.length>1){const before=clone(board),color=board[i].at(-1),sources=[];for(const n of group)if(n!==target){const run=topRun(board[n]);sources.push({index:n,count:run.count});board[n].splice(board[n].length-run.count);for(let j=0;j<run.count;j++)board[target].push(color);}
   events.push({type:'merge',before,after:clone(board),target,sources,color});changed=true;
  }
  const run=topRun(board[target]);if(run.count>=6){const before=clone(board);board[target].splice(board[target].length-run.count);events.push({type:'clear',before,after:clone(board),target,color:run.color,count:run.count});changed=true;}
  if(changed)break;
 }
 if(!changed)break;
 }return events;}
export function makeTray(board,collected,rng=Math.random){const unfinished=COLORS.map((_,i)=>i).filter(i=>collected[i]<12);return Array.from({length:3},()=>{const candidates=board.map(s=>s.at(-1)).filter(c=>c!==undefined&&unfinished.includes(c));const pool=rng()<.65&&candidates.length?candidates:unfinished.length?unfinished:[0,1,2,3,4,5];const color=pool[Math.floor(rng()*pool.length)];const count=3+Math.floor(rng()*3);const stack=Array(count).fill(color);if(rng()<.2){const under=unfinished[Math.floor(rng()*unfinished.length)]??color;if(under!==color)stack.unshift(under,under);}return stack;});}
export function newGame(art=0,seed=Date.now()){const rng=randomSeed(seed);const board=CELLS.map(()=>[]);const filled=[0,2,3,5,7,9,11,13,15,16,18];filled.forEach((i,n)=>{const color=(n+art)%6;board[i]=Array(2+Math.floor(rng()*3)).fill(color);if(n%4===0)board[i].unshift((color+2)%6,(color+2)%6);});return {art,board,collected:Array(6).fill(0),tray:makeTray(board,Array(6).fill(0),rng),score:0,moves:0,tools:{undo:3,shuffle:3,brush:2}};}
export function place(state,index,slot,rng=Math.random){if(state.board[index]?.length||!state.tray[slot]?.length)return null;state.board[index]=state.tray[slot];state.tray[slot]=[];state.moves++;const events=resolve(state.board,index);let chain=0;for(const e of events)if(e.type==='clear'){chain++;state.collected[e.color]=Math.min(12,state.collected[e.color]+e.count);state.score+=e.count*10*chain;}if(state.tray.every(s=>!s.length))state.tray=makeTray(state.board,state.collected,rng);return events;}
export function total(state){return state.collected.reduce((a,b)=>a+b,0);}
export function isComplete(state){return state.collected.every(n=>n>=12);}
export function isFull(state){return state.board.every(s=>s.length>0);}
