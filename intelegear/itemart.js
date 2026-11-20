/* 百姫大戦 アイテム用ドット絵（16x16・プログラム描画）。画像ファイル不要。 */
(function(){
const N=16;
const FIX={k:'#141a2e',m:'#b9c3d6',n:'#6b7690',d:'#3a4260',w:'#ffffff',y:'#ffd166',r:'#e05a6a',o:'#ff9a3c',g:'#5fe3b0',s:'#7fb6ff',p:'#b48cff'};
function pal(h){return Object.assign({a:`hsl(${h},58%,56%)`,b:`hsl(${h},58%,36%)`,c:`hsl(${h},70%,78%)`},FIX);}
function mk(){const g=[];for(let y=0;y<N;y++)g.push(Array(N).fill('.'));return g;}
function P(g,x,y,c){x=Math.round(x);y=Math.round(y);if(x>=0&&x<N&&y>=0&&y<N)g[y][x]=c;}
function R(g,x,y,w,h,c){for(let j=0;j<h;j++)for(let i=0;i<w;i++)P(g,x+i,y+j,c);}
function L(g,x0,y0,x1,y1,c){let dx=Math.abs(x1-x0),dy=-Math.abs(y1-y0),sx=x0<x1?1:-1,sy=y0<y1?1:-1,e=dx+dy;for(;;){P(g,x0,y0,c);if(x0===x1&&y0===y1)break;const e2=2*e;if(e2>=dy){e+=dy;x0+=sx;}if(e2<=dx){e+=dx;y0+=sy;}}}
function C(g,cx,cy,r,c){for(let y=0;y<N;y++)for(let x=0;x<N;x++){const d=(x-cx)*(x-cx)+(y-cy)*(y-cy);if(d<=r*r)P(g,x,y,c);}}
function ring(g,cx,cy,r,c){for(let y=0;y<N;y++)for(let x=0;x<N;x++){const d=(x-cx)*(x-cx)+(y-cy)*(y-cy);if(d<=r*r&&d>(r-1.6)*(r-1.6))P(g,x,y,c);}}
function T(g,x,y,w,h,c,thick){/* thick diag line helper */L(g,x,y,x+w,y+h,c);if(thick)L(g,x+1,y,x+w+1,y+h,c);}

const S={};
/* ---- melee ---- */
S.sword=g=>{L(g,3,12,13,2,'m');L(g,4,12,14,2,'w');L(g,4,13,14,3,'m');L(g,2,9,6,13,'y');L(g,3,14,1,16,'d');P(g,2,15,'y');};
S.saber=g=>{L(g,3,12,13,2,'g');L(g,4,12,14,2,'w');L(g,4,13,14,3,'g');L(g,2,9,6,13,'n');L(g,3,14,1,16,'d');};
S.katana=g=>{L(g,2,13,14,1,'m');L(g,3,13,15,2,'w');R(g,3,13,2,2,'y');L(g,1,15,3,13,'d');};
S.knife=g=>{L(g,7,10,12,5,'m');L(g,8,10,13,5,'w');L(g,5,9,9,13,'y');L(g,6,12,3,15,'d');};
S.dagger=g=>{L(g,3,9,7,4,'m');L(g,4,9,8,4,'w');L(g,2,8,5,11,'y');L(g,9,14,13,9,'m');L(g,10,14,14,9,'w');L(g,8,13,11,16,'y');};
S.twin=g=>{L(g,2,13,9,3,'m');L(g,3,13,10,3,'w');L(g,6,14,13,5,'m');L(g,7,14,14,5,'w');L(g,1,10,5,14,'y');L(g,5,15,9,11,'y');};
S.spear=g=>{L(g,2,14,11,5,'n');L(g,3,14,12,5,'d');L(g,11,5,14,2,'m');L(g,12,5,14,3,'w');L(g,10,4,13,1,'m');P(g,12,4,'w');R(g,9,6,2,2,'a');};
S.halberd=g=>{L(g,2,14,11,5,'n');L(g,11,5,14,2,'m');R(g,8,3,5,4,'m');R(g,9,2,3,2,'w');R(g,9,6,2,2,'a');};
S.axe=g=>{L(g,3,14,10,4,'n');L(g,4,14,11,4,'d');R(g,8,2,6,6,'m');R(g,10,3,4,4,'w');R(g,7,5,2,2,'a');};
S.hammer=g=>{L(g,3,14,10,6,'n');L(g,4,14,11,6,'d');R(g,6,1,9,6,'a');R(g,7,2,7,2,'c');R(g,6,5,9,2,'b');};
S.scythe=g=>{L(g,3,14,10,3,'n');L(g,4,14,11,3,'d');L(g,10,3,14,3,'m');L(g,14,3,14,7,'m');L(g,11,4,13,5,'w');};
S.claw=g=>{L(g,3,12,6,3,'m');L(g,5,13,9,2,'m');L(g,7,14,12,3,'m');R(g,2,11,8,4,'a');R(g,3,12,6,1,'c');};
S.whip=g=>{L(g,2,13,5,9,'a');L(g,5,9,8,11,'a');L(g,8,11,10,5,'a');L(g,10,5,13,7,'a');L(g,13,7,14,2,'c');R(g,1,12,3,3,'d');};
S.pile=g=>{R(g,1,6,8,6,'a');R(g,2,7,6,2,'c');R(g,9,8,2,2,'n');L(g,10,9,15,9,'m');L(g,10,8,14,8,'w');R(g,3,12,3,3,'d');P(g,7,5,'y');};
/* ---- shoot ---- */
S.pistol=g=>{R(g,3,5,9,3,'a');R(g,4,5,6,1,'c');R(g,12,5,3,2,'m');R(g,4,8,3,5,'n');R(g,8,8,2,1,'d');};
S.smg=g=>{R(g,2,5,10,4,'a');R(g,3,5,7,1,'c');R(g,12,6,3,2,'m');R(g,4,9,2,5,'d');R(g,8,9,3,4,'n');};
S.rifle=g=>{R(g,1,7,4,3,'n');R(g,5,5,7,4,'a');R(g,6,5,5,1,'c');R(g,12,6,4,2,'m');R(g,7,9,2,4,'d');R(g,4,9,2,3,'n');};
S.carbine=S.rifle;
S.dmr=g=>{S.rifle(g);R(g,6,3,4,2,'g');};
S.shotgun=g=>{R(g,1,7,4,3,'n');R(g,5,5,6,4,'a');R(g,11,5,5,3,'m');R(g,11,8,4,1,'n');R(g,6,9,3,3,'d');};
S.sniper=g=>{R(g,0,7,4,3,'n');R(g,4,6,6,3,'a');R(g,10,7,6,1,'m');R(g,6,3,5,2,'g');R(g,7,5,1,1,'n');R(g,9,5,1,1,'n');R(g,4,9,2,3,'d');};
S.cannon=g=>{R(g,1,5,10,6,'a');R(g,2,5,8,1,'c');R(g,11,6,4,4,'m');R(g,12,7,3,2,'w');R(g,3,11,4,3,'n');};
S.plasma=g=>{R(g,1,6,9,5,'a');R(g,2,6,7,1,'c');R(g,10,5,5,7,'n');C(g,13,8,2,'g');R(g,3,11,3,3,'d');};
S.railgun=g=>{R(g,1,5,5,6,'a');R(g,6,4,10,2,'m');R(g,6,10,10,2,'m');R(g,6,6,10,4,'d');R(g,8,7,8,2,'s');R(g,2,5,3,1,'c');};
S.launcher=g=>{R(g,1,5,13,6,'n');R(g,2,5,11,1,'m');R(g,13,5,2,6,'o');R(g,0,5,2,6,'a');R(g,5,11,3,3,'d');};
S.gatling=g=>{R(g,1,6,5,6,'a');R(g,6,5,9,1,'m');R(g,6,7,9,1,'m');R(g,6,9,9,1,'m');R(g,6,11,9,1,'m');R(g,6,6,2,6,'n');R(g,2,6,3,1,'c');};
S.missile=g=>{R(g,2,2,12,12,'n');R(g,3,3,10,10,'d');for(let j=0;j<2;j++)for(let i=0;i<2;i++){R(g,4+i*5,4+j*5,3,3,'a');P(g,5+i*5,5+j*5,'r');}};
S.bit=g=>{[[4,4],[11,3],[8,11]].forEach(([x,y])=>{C(g,x,y,2,'a');P(g,x,y,'g');P(g,x-1,y-1,'c');});L(g,6,6,9,9,'s');};
S.drone=g=>{C(g,8,8,3,'a');P(g,8,8,'g');P(g,7,7,'c');R(g,1,7,4,2,'n');R(g,11,7,4,2,'n');R(g,7,12,2,3,'m');};
S.arc=g=>{R(g,1,6,8,4,'a');R(g,2,6,6,1,'c');R(g,9,7,2,2,'n');L(g,11,6,13,8,'y');L(g,13,8,12,10,'y');L(g,12,10,15,12,'y');R(g,3,10,3,3,'d');};
S.laser=g=>{R(g,1,6,10,4,'a');R(g,2,6,8,1,'c');C(g,12,8,2,'g');R(g,3,10,3,3,'d');L(g,14,8,15,8,'w');};
S.grenade=g=>{R(g,1,6,8,4,'n');R(g,2,6,6,1,'m');C(g,12,8,3,'a');P(g,11,7,'c');P(g,12,5,'y');R(g,3,10,3,3,'d');};
S.harpoon=g=>{L(g,2,13,12,3,'n');L(g,12,3,15,3,'m');L(g,12,3,12,6,'m');L(g,11,4,14,1,'w');L(g,2,13,1,15,'a');};
/* ---- beam guns (ビーム系: 銃口が光る) ---- */
S.bpistol=g=>{S.pistol(g);R(g,12,5,3,2,'g');P(g,14,5,'w');};
S.bsmg=g=>{S.smg(g);R(g,12,6,3,2,'g');P(g,14,6,'w');};
S.brifle=g=>{S.rifle(g);R(g,12,6,4,2,'g');R(g,6,5,5,1,'s');P(g,15,6,'w');};
S.bmg=g=>{S.smg(g);R(g,12,6,3,2,'g');R(g,8,9,3,4,'s');P(g,14,6,'w');};
S.bshotgun=g=>{S.shotgun(g);R(g,11,5,5,3,'g');P(g,14,5,'w');};
S.bgatling=g=>{S.gatling(g);[5,7,9,11].forEach(y=>R(g,12,y,3,1,'g'));};
S.bsniper=g=>{S.sniper(g);R(g,10,7,6,1,'g');P(g,15,7,'w');};
S.bcannon=g=>{S.cannon(g);R(g,11,6,4,4,'g');R(g,12,7,3,2,'w');};
/* ---- shields ---- */
S.round=g=>{C(g,8,8,6,'a');ring(g,8,8,6,'c');C(g,8,8,2,'y');};
S.buckler=g=>{C(g,8,8,4,'a');ring(g,8,8,4,'c');P(g,8,8,'y');};
S.kite=g=>{R(g,3,1,10,6,'a');R(g,4,7,8,3,'a');R(g,6,10,4,3,'a');R(g,7,13,2,2,'a');R(g,4,2,8,1,'c');R(g,7,2,2,11,'y');};
S.tower=g=>{R(g,4,1,8,14,'a');R(g,5,2,6,1,'c');R(g,4,13,8,2,'b');R(g,7,3,2,10,'n');R(g,6,7,4,2,'y');};
S.spike=g=>{C(g,8,8,5,'a');ring(g,8,8,5,'c');[[8,1],[8,15],[1,8],[15,8],[3,3],[13,3],[3,13],[13,13]].forEach(([x,y])=>P(g,x,y,'m'));C(g,8,8,2,'n');};
S.mirror=g=>{C(g,8,8,6,'m');ring(g,8,8,6,'w');L(g,4,11,11,4,'w');L(g,6,12,12,6,'s');};
S.ward=g=>{R(g,4,3,8,10,'a');R(g,3,5,10,6,'a');R(g,5,4,6,1,'c');C(g,8,8,2,'g');ring(g,8,8,5,'s');};
S.beam=g=>{ring(g,8,8,6,'g');ring(g,8,8,4,'s');R(g,7,7,2,2,'w');};
/* ---- head ---- */
S.helm=g=>{R(g,4,3,8,9,'a');R(g,5,2,6,1,'a');R(g,5,3,6,1,'c');R(g,4,7,8,3,'d');R(g,5,8,6,1,'g');R(g,5,12,6,2,'n');};
S.horn=g=>{S.helm(g);L(g,8,2,8,0,'y');L(g,8,3,10,0,'y');};
S.full=g=>{R(g,3,2,10,12,'a');R(g,4,2,8,1,'c');R(g,5,7,6,2,'d');R(g,6,8,4,1,'g');R(g,3,12,10,2,'b');};
S.crown=g=>{S.helm(g);R(g,5,1,1,2,'y');R(g,8,0,1,3,'y');R(g,10,1,1,2,'y');R(g,5,2,6,1,'y');};
S.radarh=g=>{S.helm(g);L(g,12,3,14,1,'n');C(g,14,1,1,'y');};
S.visor=g=>{S.helm(g);R(g,4,7,8,3,'s');};
S.eye=g=>{R(g,3,4,10,8,'a');R(g,4,4,8,1,'c');C(g,8,8,3,'d');C(g,8,8,2,'r');P(g,8,8,'w');R(g,4,12,8,2,'n');};
/* ---- arms ---- */
S.arm=g=>{R(g,6,1,5,5,'a');R(g,6,1,5,1,'c');R(g,6,6,5,1,'n');R(g,5,7,6,6,'a');R(g,5,12,6,2,'b');R(g,8,2,1,3,'b');};
S.armheavy=g=>{R(g,4,1,8,6,'a');R(g,4,1,8,1,'c');R(g,3,7,10,6,'a');R(g,3,12,10,2,'b');R(g,6,3,4,2,'n');};
S.armblade=g=>{S.arm(g);L(g,11,12,15,15,'m');L(g,11,11,15,14,'w');};
S.armgun=g=>{S.arm(g);R(g,11,9,5,2,'m');R(g,11,10,5,1,'n');};
/* ---- body ---- */
S.body=g=>{R(g,3,2,10,12,'a');R(g,4,2,8,1,'c');R(g,3,2,2,4,'b');R(g,11,2,2,4,'b');R(g,6,5,4,4,'d');C(g,8,7,1,'g');R(g,4,10,8,3,'b');R(g,7,13,2,1,'n');};
S.bodylight=g=>{R(g,4,3,8,10,'a');R(g,5,3,6,1,'c');R(g,6,6,4,3,'d');P(g,8,7,'g');R(g,5,11,6,2,'b');};
S.bodyheavy=g=>{R(g,1,1,14,14,'a');R(g,2,1,12,2,'c');R(g,1,1,3,5,'b');R(g,12,1,3,5,'b');R(g,5,5,6,5,'d');C(g,8,7,2,'g');R(g,2,11,12,3,'b');};
/* ---- legs ---- */
S.leg=g=>{R(g,3,1,4,10,'a');R(g,9,1,4,10,'a');R(g,3,1,4,1,'c');R(g,9,1,4,1,'c');R(g,3,5,4,1,'n');R(g,9,5,4,1,'n');R(g,2,11,5,3,'b');R(g,9,11,5,3,'b');};
S.legheavy=g=>{R(g,2,1,5,10,'a');R(g,9,1,5,10,'a');R(g,2,1,5,1,'c');R(g,9,1,5,1,'c');R(g,2,6,5,2,'b');R(g,9,6,5,2,'b');R(g,1,11,6,4,'n');R(g,9,11,6,4,'n');};
S.legjump=g=>{R(g,3,1,4,6,'a');R(g,9,1,4,6,'a');L(g,5,7,3,9,'y');L(g,3,9,5,11,'y');L(g,5,11,3,13,'y');L(g,11,7,13,9,'y');L(g,13,9,11,11,'y');L(g,11,11,13,13,'y');R(g,2,13,5,2,'b');R(g,10,13,5,2,'b');};
S.legquad=g=>{R(g,2,2,12,4,'a');R(g,2,2,12,1,'c');[2,5,9,12].forEach(x=>{R(g,x,6,2,7,'n');R(g,x-1,13,4,2,'b');});};
S.leghover=g=>{R(g,2,3,12,5,'a');R(g,3,3,10,1,'c');R(g,5,5,6,2,'d');R(g,3,9,10,2,'n');for(let x=3;x<=12;x+=2)P(g,x,12,'s');R(g,4,13,8,1,'s');};
/* ---- back ---- */
S.wing=g=>{L(g,8,8,2,2,'a');L(g,8,9,1,5,'a');L(g,8,10,3,10,'a');L(g,8,8,14,2,'a');L(g,8,9,15,5,'a');L(g,8,10,13,10,'a');R(g,7,6,2,8,'n');L(g,3,3,7,7,'c');L(g,13,3,9,7,'c');};
S.booster=g=>{R(g,5,1,6,9,'a');R(g,6,1,4,1,'c');R(g,5,10,6,2,'n');R(g,6,12,4,2,'o');R(g,7,14,2,2,'y');R(g,7,3,2,5,'d');};
S.pack=g=>{R(g,2,3,12,10,'a');R(g,3,3,10,1,'c');R(g,2,3,2,10,'b');R(g,6,6,4,4,'n');R(g,7,7,2,2,'y');R(g,2,12,12,1,'d');};
S.backplate=g=>{R(g,3,2,10,12,'a');R(g,4,2,8,1,'c');R(g,3,2,10,2,'b');L(g,5,5,5,12,'n');L(g,10,5,10,12,'n');};
S.backsword=g=>{L(g,2,14,14,2,'m');L(g,3,14,15,2,'w');L(g,1,12,5,16,'y');L(g,10,3,14,7,'a');};
S.backgun=g=>{R(g,3,8,8,5,'a');R(g,4,8,6,1,'c');R(g,11,9,5,2,'m');R(g,5,5,4,3,'n');R(g,5,13,4,2,'d');};
S.backradar=g=>{R(g,6,9,4,6,'n');L(g,8,9,8,6,'m');ring(g,8,5,4,'m');C(g,8,5,1,'y');L(g,4,3,12,7,'c');};
/* ---- chip ---- */
S.chip=(g,cc)=>{R(g,3,3,10,10,'n');R(g,4,4,8,8,'d');for(let i=0;i<4;i++){P(g,2,4+i*2,'m');P(g,13,4+i*2,'m');P(g,4+i*2,2,'m');P(g,4+i*2,13,'m');}
  R(g,6,6,4,4,cc||'y');P(g,6,6,'w');L(g,5,8,5,8,cc||'y');};

/* ---- code -> sprite ---- */
const MAP={
w_rifle:'rifle',w_cannon:'cannon',w_bit:'bit',w_blade:'sword',w_lance:'spear',w_knife:'knife',w_smg:'smg',w_pistol:'pistol',w_carbine:'carbine',w_arc:'arc',w_shotgun:'shotgun',w_laser:'laser',w_dmr:'dmr',w_launcher:'launcher',w_gatling:'gatling',w_missile:'missile',w_sniper:'sniper',w_bitx:'bit',w_plasma:'plasma',w_railgun:'railgun',w_drone:'drone',w_grenade:'grenade',w_harpoon:'harpoon',w_dagger:'dagger',w_whip:'whip',w_claw:'claw',w_twin:'twin',w_saber:'saber',w_spear:'spear',w_katana:'katana',w_axe:'axe',w_scythe:'scythe',w_halberd:'halberd',w_hammer:'hammer',w_pile:'pile',w_beam_pistol:'bpistol',w_beam_smg:'bsmg',w_beam_rifle:'brifle',w_beam_mg:'bmg',w_beam_shotgun:'bshotgun',w_beam_gatling:'bgatling',w_beam_sniper:'bsniper',w_beam_cannon:'bcannon',
s_buckler:'buckler',s_tower:'tower',s_round:'round',s_kite:'kite',s_spike:'spike',s_mirror:'mirror',s_ward:'ward',s_beam:'beam',s_plate:'tower',
h_visor:'visor',h_helm:'helm',h_light:'helm',h_horn:'horn',h_radar:'radarh',h_full:'full',h_crown:'crown',h_eye:'eye',
g_guard:'arm',g_power:'armheavy',g_scope:'armgun',g_light:'arm',g_cap:'arm',g_blade:'armblade',g_stab:'arm',g_gun:'armgun',g_servo:'arm',g_heavy:'armheavy',
a_light:'bodylight',a_std:'body',a_heavy:'bodyheavy',a_aqua:'body',a_vac:'body',a_speed:'bodylight',a_stealth:'bodylight',a_frame:'body',a_battle:'body',a_reactive:'bodyheavy',a_nano:'body',a_ultra:'bodyheavy',
l_light:'leg',l_heavy:'legheavy',l_jump:'legjump',l_spring:'legjump',l_stab:'leg',l_armor:'legheavy',l_frame:'leg',l_quad:'legquad',l_hover:'leghover',
b_thruster:'booster',b_cell:'pack',b_radar:'backradar',b_gen:'pack',b_shield:'backplate',b_sword:'backsword',b_gun:'backgun',b_wing:'wing',b_booster:'booster',b_pack:'pack'};
const HUE={shoot:212,melee:355,guard:140,mobility:185,cap:35,luck:48};
function hueOf(st){st=st||{};if(st.apt){const k=Object.keys(st.apt)[0];return k==='water'?200:k==='space'?268:28;}
  if(st.kind==='shoot')return 212;if(st.kind==='melee')return 355;
  let best=null,bv=0;for(const k of ['guard','shoot','melee','mobility','cap','luck']){const v=Math.abs(+st[k]||0)*(k==='luck'?100:1);if(v>bv){bv=v;best=k;}}
  return best?HUE[best]:215;}
function chipColor(st){st=st||{};const n=['shoot','melee','guard','mobility'].filter(k=>st[k]).length;if(n>=3)return 'w';
  if(st.apt){const k=Object.keys(st.apt)[0];return k==='water'?'s':k==='space'?'p':'o';}
  if(st.luck)return 'y';if(st.cap)return 'o';
  return st.shoot?'s':st.melee?'r':st.guard?'g':st.mobility?'g':'y';}

function build(code,st){
  const g=mk();let t=MAP[code];
  if(!t&&/^c_/.test(code))t='chip';
  if(!t)return null;
  S[t](g,t==='chip'?chipColor(st):undefined);
  /* outline */
  const o=g.map(r=>r.slice());
  for(let y=0;y<N;y++)for(let x=0;x<N;x++){if(g[y][x]!=='.')continue;
    if([[1,0],[-1,0],[0,1],[0,-1]].some(([dx,dy])=>{const a=g[y+dy]&&g[y+dy][x+dx];return a&&a!=='.';}))o[y][x]='k';}
  return o;}
function svg(code,st,px){
  const g=build(code,st);if(!g)return '';
  const p=pal(hueOf(st));let rects='';
  for(let y=0;y<N;y++){let x=0;while(x<N){const c=g[y][x];if(c==='.'){x++;continue;}let e=x;while(e+1<N&&g[y][e+1]===c)e++;
    rects+=`<rect x="${x}" y="${y}" width="${e-x+1}" height="1" fill="${p[c]||'#f0f'}"/>`;x=e+1;}}
  return `<svg class="dot" viewBox="0 0 16 16" width="${px||56}" height="${px||56}" shape-rendering="crispEdges" aria-hidden="true">${rects}</svg>`;}
window.ItemArt={svg,has:c=>!!MAP[c]||/^c_/.test(c)};
})();
