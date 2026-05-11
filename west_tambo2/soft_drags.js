
(function(){
function likely(n){return n && /^(globo|globos|arrastre|drag|mc_globo|balloon|objeto|item)/i.test(n);}
function collect(root){
 var out=[];
 function walk(obj,depth){
  if(!obj||depth>4)return;
  for(var k in obj){
   if(!Object.prototype.hasOwnProperty.call(obj,k))continue;
   if(k.charAt(0)==="_"||k==="parent"||k==="stage")continue;
   var ch=obj[k];
   if(!ch||typeof ch!=="object")continue;
   var display=typeof ch.x==="number"&&typeof ch.y==="number"&&typeof ch.on==="function"&&(ch instanceof createjs.MovieClip||ch instanceof createjs.Container||ch instanceof createjs.Bitmap);
   if(display&&likely(k))out.push({name:k,target:ch});
   if(ch instanceof createjs.Container||ch instanceof createjs.MovieClip)walk(ch,depth+1);
  }
 }
 walk(root,0);
 if(!out.length){
  for(var k in root){
   if(!Object.prototype.hasOwnProperty.call(root,k))continue;
   var ch=root[k];
   if(ch&&typeof ch.x==="number"&&typeof ch.y==="number"&&typeof ch.on==="function"&&ch instanceof createjs.MovieClip){
    if(!/fondo|background|bg|texto|txt|logo|titulo|title/i.test(k))out.push({name:k,target:ch});
   }
  }
 }
 return out;
}
function make(mc,stage){
 if(!mc||mc.__softDragReady)return;
 mc.__softDragReady=true;
 mc.cursor="pointer"; mc.mouseEnabled=true;
 var hx=mc.x, hy=mc.y, vx=0, vy=0, dragging=false, lx=0, ly=0, lt=0, ox=0, oy=0, returning=false;
 try{if(typeof mc.stop==="function")mc.stop();}catch(e){}
 mc.on("mousedown",function(evt){
  dragging=true; returning=false;
  if(mc.parent)mc.parent.addChild(mc);
  var pt=mc.parent.globalToLocal(evt.stageX,evt.stageY);
  ox=mc.x-pt.x; oy=mc.y-pt.y; lx=pt.x; ly=pt.y; lt=Date.now(); vx=vy=0;
 });
 mc.on("pressmove",function(evt){
  if(!dragging)return;
  var pt=mc.parent.globalToLocal(evt.stageX,evt.stageY);
  var now=Date.now(), dt=Math.max(16,now-lt);
  vx=(pt.x-lx)/dt*16.666; vy=(pt.y-ly)/dt*16.666;
  mc.x=pt.x+ox; mc.y=pt.y+oy; lx=pt.x; ly=pt.y; lt=now;
  if(stage)stage.update();
 });
 mc.on("pressup",function(){
  dragging=false; returning=true;
  try{if(typeof mc.play==="function")mc.play();}catch(e){}
 });
 createjs.Ticker.on("tick",function(){
  if(!returning||dragging)return;
  mc.x+=vx; mc.y+=vy;
  var dx=hx-mc.x, dy=hy-mc.y;
  vx=vx*0.82+dx*0.08; vy=vy*0.82+dy*0.08;
  if(Math.abs(dx)<0.5&&Math.abs(dy)<0.5&&Math.abs(vx)<0.5&&Math.abs(vy)<0.5){
   mc.x=hx; mc.y=hy; vx=vy=0; returning=false;
  }
 });
}
window.setupSoftIndependentDrags=function(exportRoot,stage){
 var arr=collect(exportRoot);
 arr.forEach(function(o){make(o.target,stage);});
 window.__softDragCandidates=arr.map(function(o){return o.name;});
 console.log("Soft drags activos:", window.__softDragCandidates);
};
})();
