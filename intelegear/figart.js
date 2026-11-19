/* 百姫大戦 インテレギア仮立ち絵（32x48ドット・プログラム描画）。本絵ができるまでの仮。 */
(function(){
const W=32,H=48;
const FIX={k:'#141a2e',m:'#b9c3d6',n:'#6b7690',d:'#3a4260',w:'#ffffff',y:'#ffd166',r:'#e05a6a',o:'#ff9a3c',g:'#5fe3b0',s:'#7fb6ff',p:'#b48cff',f:'#ffe3cf',F:'#f2bfa5'};
const hsl=(h,s,l)=>`hsl(${h},${s}%,${l}%)`;
function pal(o){return Object.assign({
  a:hsl(o.suit,50,52),b:hsl(o.suit,50,32),c:hsl(o.suit,65,75),
  A:hsl(o.acc,75,58),B:hsl(o.acc,70,38),
  h:hsl(o.hair[0],o.hair[1],o.hair[2]),H:hsl(o.hair[0],o.hair[1],Math.min(90,o.hair[2]+22)),Q:hsl(o.hair[0],o.hair[1],Math.max(12,o.hair[2]-22)),
  e:o.eye},FIX);}
function mk(){return Array.from({length:H},()=>Array(W).fill('.'));}
function P(g,x,y,c){x=Math.round(x);y=Math.round(y);if(x>=0&&x<W&&y>=0&&y<H)g[y][x]=c;}
function R(g,x,y,w,h,c){for(let j=0;j<h;j++)for(let i=0;i<w;i++)P(g,x+i,y+j,c);}
function L(g,x0,y0,x1,y1,c){let dx=Math.abs(x1-x0),dy=-Math.abs(y1-y0),sx=x0<x1?1:-1,sy=y0<y1?1:-1,e=dx+dy;for(;;){P(g,x0,y0,c);if(x0===x1&&y0===y1)break;const e2=2*e;if(e2>=dy){e+=dy;x0+=sx;}if(e2<=dx){e+=dx;y0+=sy;}}}

/* 髪（後ろ側・前側） */
function hairBack(g,st){
  if(st==='bob'){R(g,8,6,16,15,'h');}
  if(st==='twin'){R(g,9,5,14,12,'h');R(g,4,9,5,20,'h');R(g,23,9,5,20,'h');R(g,4,9,5,2,'A');R(g,23,9,5,2,'A');R(g,5,24,3,5,'H');R(g,24,24,3,5,'H');}
  if(st==='pony'){R(g,9,5,14,12,'h');R(g,21,8,5,26,'h');R(g,20,8,6,3,'A');R(g,22,28,3,5,'Q');}
  if(st==='short'){R(g,9,5,14,10,'h');}
  if(st==='spiky'){R(g,8,6,16,9,'h');R(g,9,3,3,4,'h');R(g,13,1,3,5,'h');R(g,17,2,3,4,'h');R(g,21,4,3,3,'h');R(g,7,5,2,3,'h');}
}
function hairFront(g,st){
  R(g,10,5,12,4,'h');R(g,9,7,14,3,'h');           // 前髪の土台
  R(g,12,5,5,1,'H');
  R(g,9,9,3,8,'h');R(g,20,9,3,8,'h');            // もみあげ
  if(st==='bob'){R(g,9,9,3,12,'h');R(g,20,9,3,12,'h');}
  // 前髪の切れ込み
  P(g,14,10,'h');P(g,16,10,'h');P(g,18,10,'h');P(g,13,10,'h');P(g,17,10,'h');
}
function body(g,o){
  /* 脚 */
  R(g,12,33,4,11,'a');R(g,17,33,4,11,'a');R(g,12,34,1,9,'c');R(g,17,34,1,9,'c');
  R(g,11,42,5,5,'A');R(g,17,42,5,5,'A');R(g,11,42,5,1,'B');R(g,17,42,5,1,'B');
  /* 胴 */
  R(g,11,21,10,13,'a');R(g,12,21,8,2,'c');R(g,15,25,2,4,'A');P(g,15,26,'w');R(g,11,31,10,2,'b');R(g,11,22,1,9,'b');
  /* 腕 */
  R(g,8,22,3,10,'a');R(g,21,22,3,10,'a');R(g,8,21,3,3,'A');R(g,21,21,3,3,'A');R(g,8,31,3,1,'b');R(g,21,31,3,1,'b');
  R(g,8,32,3,3,'f');R(g,21,32,3,3,'f');
  /* 首・頭 */
  R(g,14,19,4,3,'f');R(g,14,20,4,1,'F');
  R(g,10,8,12,12,'f');R(g,10,18,12,2,'F');
  /* 目 */
  R(g,12,13,3,4,'e');R(g,17,13,3,4,'e');R(g,12,13,3,1,'k');R(g,17,13,3,1,'k');P(g,12,14,'w');P(g,17,14,'w');P(g,14,16,'w');P(g,19,16,'w');
  P(g,15,18,'F');P(g,16,18,'F');P(g,11,16,'r');P(g,20,16,'r');
}
/* キャラごとの設定 */
const CH={
 f_verna:{suit:345,acc:42,hair:[48,85,64],eye:'#d6336c',style:'twin',
   back(g){ /* 背のフィン */ R(g,3,19,6,3,'A');R(g,1,22,6,3,'A');R(g,0,25,5,3,'B');R(g,23,19,6,3,'A');R(g,25,22,6,3,'A');R(g,27,25,5,3,'B');},
   front(g){ R(g,11,38,5,2,'A');R(g,17,38,5,2,'A');R(g,9,6,14,1,'A'); }},
 f_garda:{suit:95,acc:24,hair:[22,45,28],eye:'#2f9e44',style:'short',
   wide:true,
   back(g){},
   front(g){ R(g,5,19,7,7,'b');R(g,5,19,7,1,'c');R(g,5,25,7,1,'B');R(g,20,19,7,7,'b');R(g,20,19,7,1,'c');R(g,20,25,7,1,'B');
     R(g,12,22,8,8,'n');R(g,13,22,6,1,'m');R(g,15,25,2,3,'A');R(g,11,37,5,3,'n');R(g,17,37,5,3,'n');R(g,6,26,4,6,'a');R(g,22,26,4,6,'a');R(g,6,32,4,3,'f');R(g,22,32,4,3,'f'); }},
 f_ciel:{suit:215,acc:190,hair:[225,55,80],eye:'#1c7ed6',style:'pony',
   back(g){},
   front(g){ R(g,22,10,2,7,'A');R(g,10,12,0,0,'A');R(g,3,28,12,5,'a');R(g,3,28,12,1,'c');R(g,15,29,14,2,'n');R(g,28,29,3,2,'m');R(g,18,26,6,2,'s');R(g,19,25,4,1,'n');R(g,6,33,3,2,'f');R(g,12,31,3,2,'f'); }},
 f_blair:{suit:175,acc:355,hair:[5,70,50],eye:'#e03131',style:'spiky',
   back(g){},
   front(g){ R(g,10,20,12,2,'r');R(g,20,21,3,6,'r'); R(g,6,34,2,11,'m');R(g,7,34,1,11,'w');R(g,24,34,2,11,'m');R(g,24,34,1,11,'w');R(g,7,45,1,2,'m');R(g,24,45,1,2,'m'); }}
};
function build(code){
  const o=CH[code];if(!o)return null;
  const g=mk();
  o.back&&o.back(g);
  hairBack(g,o.style);
  body(g,o);
  hairFront(g,o.style);
  o.front&&o.front(g);
  const out=g.map(r=>r.slice());
  for(let y=0;y<H;y++)for(let x=0;x<W;x++){if(g[y][x]!=='.')continue;
    if([[1,0],[-1,0],[0,1],[0,-1]].some(([dx,dy])=>{const a=g[y+dy]&&g[y+dy][x+dx];return a&&a!=='.';}))out[y][x]='k';}
  return {g:out,p:pal(o)};
}
function svg(code){
  const b=build(code);if(!b)return '';
  let rects='';
  for(let y=0;y<H;y++){let x=0;while(x<W){const c=b.g[y][x];if(c==='.'){x++;continue;}let e=x;while(e+1<W&&b.g[y][e+1]===c)e++;
    rects+=`<rect x="${x}" y="${y}" width="${e-x+1}" height="1" fill="${b.p[c]||'#f0f'}"/>`;x=e+1;}}
  return `<svg class="figdot" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMax meet" shape-rendering="crispEdges" role="img" aria-label="仮立ち絵">${rects}</svg>`;
}
window.FigArt={svg,has:c=>!!CH[c]};
})();
