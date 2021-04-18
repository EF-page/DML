var _base,_baseStack=[],_block=!1;const svgref="http://www.w3.org/2000/svg",PI2=2*Math.PI,_style="style",_bold="font-weight: bold; ",_italic="font-style: italic;",_fs="font-size: ",_bigtext="font-size: 130%;",_bg="background-color: ",_bgred="background-color: red; ",_bgred2="background-color: #f50; ",_bgy="background-color: #ffc; ",_bggreen="background-color: #695; ",_bgblue="background-color: blue; ",_bgorange="background-color: #fc0; ",_bgsilver="background-color: silver; ",_bgyellow="background-color: #ffffee; ",_bgwhite="background-color: white; ",_bgblack="background-color: black; ",_bgtrans="background-color: rgba(0,0,0,0.05); ",_bgwtrans="background-color: rgba(255,255,255,0.5); ",_red="color: red; ",_blue="color: blue; ",_navy="color: navy; ",_white="color: white; ",_yellow="color: yellow; ",_center="text-align: center; ",_right="text-align: right; ",_top="vertical-align: top; ",_bottom="vertical-align: bottom; ",_middle="vertical-align: middle; ",_flexmiddle="display: flex; align-items: center;",_blur="filter: blur(2px); ",_shadow="box-shadow: 3px 3px 4px gray; ",_bigshadow="box-shadow: 6px 6px 8px gray; ",_smallShadow="box-shadow: 2px 2px 3px gray; ",_txtShadow="text-shadow: 5px 6px 4px  rgba(0,0,0,0.44); ",_bigTxtShadow="text-shadow: 8px 13px 5px  rgba(0,0,0,0.44); ",_border="border: thin solid silver; ",_noborder="border: 0px; ",_radius="border-radius: 8px; ",_miniRadius="border-radius: 5px; ",_padding="padding: 2px; ",_bigPadding="padding: 10px; ",_smallMargin="margin: 2px; ",_margin="margin: 5px; ",_marginLeft="margin-left: 5px; ",_marginRight="margin-right: 5px; ",_bigMarginLeft="margin-left: 10px; ",_bigMarginRight="margin-right: 10px; ",_inShadow="-webkit-box-shadow: inset 5px 5px 3px -2px rgba(0,0,0,0.64);-moz-box-shadow: inset 5px 5px 3px -2px rgba(0,0,0,0.64);box-shadow: inset 5px 5px 3px -2px rgba(0,0,0,0.64);",_box=_bgwhite+_border+_shadow,_ybox=_border+_shadow+_bg+"#ffc;",_bodyFlex="display: flex; flex-flow: row nowrap; justify-content: space-between;",_sideFlex="flex-shrink: 0.5;",_columnFlex="flex-grow: 0; display: flex;  flex-flow: row nowrap; ",_sticky="position: -webkit-sticky; position: sticky; top: 0px;";function autobind(t){let e=Object.getPrototypeOf(t),n=Object.getOwnPropertyNames(e);for(let i of n){"function"==typeof e[i]&&"constructor"!==i&&(t[i]=e[i].bind(t))}}function _import(t,e){"string"==typeof t&&(t=[t]);let n=t.length;for(i in t){let r=extractFilename(t[i]).replace(".","_");if(void 0===window[r]){window[r]=r;let o=document.createElement("script");o.src=t[i],o.onload=()=>{0==--n&&e&&e()},document.head.appendChild(o)}else if(e)return void e()}}
/*!
loadCSS: load a CSS file asynchronously.
[c]2014 @scottjehl, Filament Group, Inc.
Licensed MIT
*/function loadCSS(t,e,n){"use strict";var i=window.document.createElement("link"),r=e||window.document.getElementsByTagName("script")[0];i.rel="stylesheet",i.href=t,i.media="only x",r.parentNode.insertBefore(i,r),setTimeout((function(){i.media=n||"all"}))}function style(t,e){let n={};return e?("object"==typeof t?(n=t,n.style=e):("object"==typeof e&&(n=e),n.style=t),n):(n.style=t,n)}function extract(t,e,n){let i,r=[];if("object"==typeof e){if(Object.keys(e).length>0){let o=Object.keys(e),s=Object.values(e),l=!0,a=!1;return n&&(a=Array.isArray(n)),t.forEach((function(t){l=!0;for(let e=0;e<o.length;e++)t[o[e]]!=s[e]&&(l=!1);if(l){let e={};if(n)if(a)for(let r in n){let o=n[r];i=t[o],i.includes('"')?e[o]=JSON.parse(i):e[o]=i}else i=t[n],e=i.includes('"')?JSON.parse(i):i;else e=t;r.push(e)}})),r}return t.forEach((function(t){n?r.push(t[n]):r.push(t)})),r}for(let n in t)item=t[n],r.push(item[e]);return r}function fitSelector(t,e){let n={},i=Object.keys(t),r=Object.keys(e);for(let e in i){let o=i[e];r.includes(o)&&(n[o]=t[o])}return n}function extractFit(t,e,n){return extract(t,fitSelector(e,t[0]),n)}function joinOver(t,e){const n=Object.keys(e);for(let i in n){let r=n[i];t[r]=e[r]}return t}function pretty(t){let e=JSON.stringify(t,null,4),n="",i=" ",r=0;for(let t in e){let o=e[t];"["==o&&(r=1),"]{}".includes(o)&&(r=0),1==r?("\n"!=o&&"\r"!=o&&" "!=o&&(n+=o),i=o):n+=o}return n}function addPre(t){return"<pre>"+pretty(t)+"</pre>"}function round(t,e=0){return m=Math.pow(10,e),Math.round(t*m)/m}function trunc(t){return Math.trunc(t)}function floor(t){return Math.floor(t)}function abs(t){return Math.abs(t)}function exp10(t){return Math.pow(10,t)}function log10(t){return Math.log10(t)}function inRange(t,e,n){return!(t<e)&&!(t>n)}function constrain(t,e,n){return t<e?e:t>n?n:t}function min(t,e){return Math.min(t,e)}function max(t,e){return Math.max(t,e)}function getMin(t,e){return e=Number(e),t?Math.min(t,e):e}function getMax(t,e){return e=Number(e),t?Math.max(t,e):e}function p(t,e){return{x:t,y:e}}function px(t){return"string"==typeof t?t:floor(t)+"px"}function getpx(t){return"string"==typeof t?(t=t.replace("px","").trim(),Number(t)):t}function arrayvalue(t,e,n){return void 0===t[e]?n:t[e]}function smooth(t){return t<0?0:t>1?1:t*t*(3-t-t)}function smooth2(t){return t<0?0:t>1?1:t<.5?2*t*t:1-2*(t=1-t)*t}function extractFilename(t){return t.includes("\\")?t.substring(t.lastIndexOf("\\")+1):t.substring(t.lastIndexOf("/")+1)}function debounce(t,e,n){var i;return function(){var r=this,o=arguments,s=function(){i=null,n||t.apply(r,o)},l=n&&!i;clearTimeout(i),i=setTimeout(s,e),l&&t.apply(r,o)}}function _init(t,e){return void 0===t?e:t}function setOptions(t,e,n){let i=Object.keys(n);for(let r in i){let o=i[r];void 0!==e[o]?t[o]=e[o]:t[o]=n[o]}}function dragElement(t){var e=0,n=0,i=0,r=0;function o(o){(o=o||window.event).preventDefault(),e=i-o.pageX,n=r-o.pageY,i=o.pageX,r=o.pageY;let s=getpx(t.style.left),l=getpx(t.style.top);t.style.left=s-e+"px",t.style.top=l-n+"px"}function s(){document.body.style.cursor="default",document.onmouseup=null,document.onmousemove=null}return t.onmousedown=function(e){if(this!=(e=e||window.event).target)return;if(e.offsetY>25)return;e.preventDefault();let n=t.getBoundingClientRect();t.style.left=px(n.left+n.width/2),i=e.pageX,r=e.pageY,document.body.style.cursor="move",t.onmouseup=s,document.onmousemove=o},this}function selectBase(t){return _baseStack.push(_base),_baseStack.length>100&&(alert("DML error: _baseStackOverflow in bushBase()"),_baseStack=[]),_base="string"==typeof t?document.getElementById(t):t}function sb(t){selectBase(t)}function getBase(){return _base}function DMLgetSP(){return _baseStack.length}function DMLchkSP(t,e){DMLgetSP()!=t&&alert("DML error: _baseStack size mismatch - "+e+", before: "+t+", after: "+DMLgetSP())}function checkSP(t,e){let n=DMLgetSP(),i=t();return DMLchkSP(n,e),i}function unselectBase(t=1,e=-1,n="unselectBase"){for(let n=0;n<t&&0!=_baseStack.length;n++)_base=_baseStack.pop(),e>=0&&DMLgetSP()!=e&&alert("DML error: _baseStack size mismatch - "+txt+", before: "+e+", after: "+DMLgetSP());return _base}function chk_node(t){if("string"==typeof t){let e=create("span");return e.innerHTML=t,e}return t}function textNode(t){return document.createTextNode(t)}function setAttributes(t,e){return"string"==typeof e&&(e={style:e}),"object"==typeof e&&Object.keys(e).forEach((function(n){let i=e[n];if("style"!=n)t.setAttribute(n,i);else{i.split(";").forEach((function(e){if(e){let n=e.split(":");if(2==n.length){let e=n[0].trim(),i=n[1].trim();t.style.setProperty(e,i)}}}))}})),t}function createAt(t,e,n){let i=document.createElement(e);return setAttributes(i,n),t.appendChild(i),i}function create(t,e,n){let i=document.createElement(t);return n&&("string"==typeof n?i.innerHTML=n:i.appendChild(n)),e&&setAttributes(i,e),i}function appendBase(t){let e=chk_node(t);if(_base)_base.appendChild(e);else{if(!document.body)return;document.body.appendChild(e)}return e}function _appendBase(t){return _base?_base.appendChild(t):document.body.append(t),t}function make(t,e,n){return appendBase(create(t,e,n))}function addProps(t,e,n){n.forEach((function(n){if("string"==typeof n)t.add(create(e,{},n));else if("object"==typeof n){let i=create(e,n,Object.values(n)[0]);t.add(i)}else t.add(create(e,{},JSON.stringify(n)))}))}function putProps(t,e,n){t.innerHTML="",addProps(t,e,n)}function appendChilds(t,e,n){"object"!=typeof t&&alert("Error in appendChilds: First Parameter should be object");for(let i in n){let r=n[i];t.appendChild(create(e,{},r))}}function elementById(t){return document.getElementById(t)}function br(t){let e,n=t||1;for(let t=0;t<n;t++)e=make("br");return e}function nbsp(t=1){let e="";for(let n=0;n<t;n++)e+=" ";print(e)}function h1(t,e){return make("h1",e,t)}function h2(t,e){return make("h2",e,t)}function h3(t,e){return make("h3",e,t)}function h4(t,e){return make("h4",e,t)}function h5(t,e){return make("h5",e,t)}function h6(t,e){return make("h6",e,t)}function hr(t){return make("hr",t)}function p(t,e){return make("p",e,t)}function button(t,e){return make("button",e,t)}function div(t,e){return make("div",e,t)}function idiv(t,e){let n=make("div",e,t);return n&&n.style&&(n.style.display="inline-block"),n}function sdiv(t,e){return selectBase(div(t,e))}function sidiv(t,e){return selectBase(idiv(t,e))}const inlineDiv=idiv,inlinediv=idiv;function image(t,e){let n=make("img",e);return n.src=t,n.alt=t,n}function span(t,e){return make("span",e,t)}function link(t,e,n){let i=make("a",n,t);return i.href=e,i}function pre(t,e){return make("pre",e,textNode(t))}function textarea(t,e,n){let i=make("textarea",e);return n&&(i.placeholder=n),t&&(i.value=t),i}function rbutton(t,e,n,i,r){let o=button(t,r),s=o.style;return o.parentElement.style.position="relative",s.position="absolute",s.left=px(e),s.top=px(n),s.height=o.style.width=i+"px",s.borderRadius=trunc(i/2)+"px",s.transform="translate(-50%, -50%)",o}function svg(t){let e=document.createElementNS(svgref,"svg");return Object.keys(t).forEach(n=>{e.setAttributeNS(null,n,t[n])}),appendBase(e),e}function svg_line(t){let e=document.createElementNS("http://www.w3.org/2000/svg","line");return Object.keys(t).forEach(n=>{e.setAttributeNS(null,n,t[n])}),appendBase(e),e}function expandableTextarea(t,e,n){let i=textarea(t,e,n);return setAttributes(i,{rows:"1",style:" box-sizing: border-box; overflow: hidden; min-height: 35px"}),setAttributes(i,e),i.onchange=i.onkeyup=i.doResize=i.autosize,i.autosize(),i}function print(t,e=1){for(let n=0;n<e;n++)appendBase("string"==typeof t||0==n?t:t.cloneNode(!0))}function println(t,e=1){for(let n=0;n<e;n++)print(t),br()}function label(t,e,n){let i=make("label",e,n);return"string"==typeof t?i.appendChild(textNode(t)):i.appendChild(t),i.style.marginRight="5px",i.style.marginLeft="5px",i}function blocktext(t,e,n){let i=span(t);return inlineDiv(i,n).style.width=px(e),i}function inputSelect(t,e,n){let i=make("select",e);return setAttributes(i,e),i.addOptions(t),n&&(sel.selectedIndex=n),i}function checkbox(t,e,n){let i;if(t&&""!=t){i=create("INPUT",e),i.type="checkbox";label(t,e,i)}else i=make("INPUT",e),i.type="checkbox";return i.style.marginRight="5px",i.style.marginLeft="5px",n&&(i.checked=n),i}function inputText(t,e={}){let n,i=idiv("",(e=joinOver({baseAttrib:{},labelAttrib:{},inputAttrib:{},fieldWidth:[],doBreak:!0},e)).baseAttrib);if(""!=t){let n=idiv(t,e.labelAttrib);e.fieldWidth[0]&&(n.style.width=px(e.fieldWidth[0])),i.appendChild(n)}return n=create("input",e.inputAttrib),e.fieldWidth[1]&&(n.style.width=px(e.fieldWidth[1])),i.appendChild(n),e.doBreak&&br(),n}function inputNumber(t,e,n){let i,r=inlineDiv();if(""!=t){let n=inlineDiv(t,e);r.appendChild(n)}return i=make("input",n),i.type="number",r.appendChild(i),i}function msgBox(t,e){let n=inlineDiv(t,e);n.style.textAlign="center",n.style.position="fixed",n.style.padding="3px",n.style.boxShadow="5px 5px 6px silver",n.style.borderRadius="8px",""==n.style.backgroundColor&&(n.style.backgroundColor="#ffffff"),""==n.style.border&&(n.style.border="thin solid gray"),""==n.style.left&&(n.style.left="50%"),""==n.style.top&&(n.style.top="50%"),n.style.transform="translate(-50%, -50%)",""==n.style.width&&(n.style.width="250px"),selectBase(n),br(),button("ok","width: 150px; height: 24px;  display: inline-flex; align-items: center; justify-content: center; margin: 8px;").onclick=()=>n.remove(),unselectBase()}function canvas2D(t){return new _canvas2D(t)}HTMLTextAreaElement.prototype.autosize=function(){let t=this;setTimeout((function(){t.style.height="22px",t.style.height=t.scrollHeight+"px"}),1)},HTMLSelectElement.prototype.addOptions=function(t){addProps(this,"option",t)},HTMLSelectElement.prototype.selectOptionByValue=function(t){let e;for(let n=0;n<this.options.length;n++)if(e=this.options[n].textContent,e.includes(t))return void(this.options.selectedIndex=n)};class _canvas2D{constructor(t){this.canvas=make("canvas",t),this.ctx=this.canvas.getContext("2d"),this.points=[],this.shadow=0}get width(){return this.canvas.width}set width(t){this.canvas.width=t}get height(){return this.canvas.height}set height(t){this.canvas.height=t}beginPath(){this.ctx.beginPath()}stroke(){this.ctx.stroke()}clear(){this.ctx.clearRect(0,0,this.width,this.height)}setLineType(t=1,e="black",n=[]){"number"==typeof n&&(n=[n]),this.ctx.lineWidth=t,this.ctx.strokeStyle=e,this.ctx.setLineDash(n)}setFillStyle(t="white"){this.ctx.fillStyle=t}set shadow(t=0){this._shadow=t,t?(this.ctx.shadowBlur=1.3*t,this.ctx.shadowColor="rgba(0,0,0,0.5)",this.ctx.shadowOffsetX=t,this.ctx.shadowOffsetY=t):this.ctx.shadowColor="transparent"}get shadow(){return this._shadow}line(t,e,n,i){this.ctx.beginPath(),this.ctx.moveTo(t,e),this.ctx.lineTo(n,i),this.ctx.stroke()}_line(t,e,n,i){this.ctx.moveTo(t,e),this.ctx.lineTo(n,i)}rect(t,e,n,i,r={}){setOptions(this,r,{fill:!1,center:!1,angle:0}),this.ctx.beginPath(),0!=this.angle?(this.ctx.save(),this.ctx.translate(t,e),this.ctx.rotate(this.angle*Math.PI/180),this.center?this.ctx.rect(-n/2,-i/2,n,i):this.ctx.rect(0,0,n,i),this.ctx.restore()):this.center?this.ctx.rect(t-n/2,e-i/2,n,i):this.ctx.rect(t,e,n,i),this.fill&&this.ctx.fill(),this.ctx.stroke()}_rect(t,e,n,i,r={}){setOptions(this,r,{fill:!1,center:!1,angle:0}),0!=this.angle?(this.ctx.save(),this.ctx.translate(t,e),this.ctx.rotate(this.angle*Math.PI/180),this.center?this.ctx.rect(-n/2,-i/2,n,i):this.ctx.rect(0,0,n,i),this.ctx.restore()):this.center?this.ctx.rect(t-n/2,e-i/2,n,i):this.ctx.rect(t,e,n,i),this.fill&&this.ctx.fill()}circle(t,e,n,i={}){this.fill=i.fill||!1,this.ctx.beginPath(),this.ctx.arc(t,e,n/2,0,PI2),this.fill&&this.ctx.fill(),this.ctx.stroke()}_circle(t,e,n,i={}){this.fill=i.fill||!1,this.ctx.moveTo(t,e),this.ctx.arc(t,e,n/2,0,PI2),this.fill&&this.ctx.fill()}clrPoints(){this.points=[]}addPoint(t,e){this.points.push({x:t,y:e})}polyline(t,e={}){this.fill=e.fill||!1,this.ctx.beginPath(),this._polyline(t),this.fill&&this.ctx.fill(),this.ctx.stroke()}_polyline(t){let e;e=t||this.points,this.ctx.moveTo(e[0].x,e[0].y);for(let t=1;t<e.length;t++)this.ctx.lineTo(e[t].x,e[t].y)}softline(t,e={}){let n;this.fill=e.fill||!1,n=t||this.points,this.ctx.beginPath(),this._softline(n),this.fill&&this.ctx.fill(),this.ctx.stroke()}_softline(t){this.ctx.moveTo(t[0].x,t[0].y);for(var e=1;e<t.length-2;e++){var n=(t[e].x+t[e+1].x)/2,i=(t[e].y+t[e+1].y)/2;this.ctx.quadraticCurveTo(t[e].x,t[e].y,n,i)}this.ctx.quadraticCurveTo(t[e].x,t[e].y,t[e+1].x,t[e+1].y)}text(t,e,n,i={}){setOptions(this,i,{angle:0,hor:"center",vert:"middle"}),this.ctx.save(),this.ctx.textAlign=this.hor,this.ctx.textBaseline=this.vert,this.ctx.translate(e,n),this.ctx.rotate(this.angle*Math.PI/180),this.ctx.fillText(t,0,0),this.ctx.restore()}font(t,e="",n="black",i="Arial"){this.ctx.fillStyle=n,this.ctx.font=e+" "+t+"px "+i}marker(t,e,n,i=0,r={}){switch(i){case 0:this.circle(t,e,n,r);break;case 1:r[center]=!0,this.rect(t,e,n,n,r);break;case 2:r[center]=!0,r[angle]=45,this.rect(t,e,n,n,r);break}}_marker(t,e,n,i=0,r={}){switch(i){case 0:this._circle(t,e,n,r);break;case 1:r[center]=!0,this._rect(t,e,n,n,r);break;case 2:r[center]=!0,r[angle]=45,this._rect(t,e,n,n,r);break}}}function ul(t,e){let n=make("ul",e);return n.items=t,n}function ol(t,e){let n=make("ol",e);return n.items=t,n}function fieldset(t,e={}){setOptions(this,e,{legendAttrib:"",fieldsetAttrib:""});let n=make("fieldset",fieldsetAttrib);return n.textAlign="left",t=t.replace(/ /g," "),n.appendChild(create("legend",legendAttrib,t)),n}function radio(t,e,n,i,r){let o,s,l=[];for(o=0;o<t.length;o++){s=create("input",{type:"radio"}),l.push(s),e[o]?s.value=e[o]:s.value=t[o],o===r&&(s.checked=!0),n&&(s.name=n),i&&(s.onchange=i);let a=label(s),c=label(t[o]);a.appendChild(c),br()}return l}function RadioValue(t){let e=document.getElementsByName(t);if(e)for(let t in e){let n=e[t];if(n.checked)return n.value}}function selectedRadioItem(t){let e=document.getElementsByName(t);if(e)for(let t in e){let n=e[t];if(n.checked)return n}}function setRadioValue(t,e){let n=document.getElementsByName(t);if(n)for(let t in n){let i=n[t];if(i.value===e)return i.checked=!0,i}}function setRadioIndex(t,e){let n=document.getElementsByName(t);n&&(n[e].checked=!0)}function httpGet(t,e,n,i){let r={error:function(){},response:function(){}},o=new XMLHttpRequest;return o.onreadystatechange=function(){if(4==this.readyState&&200==this.status&&"function"==typeof r.response){let t=JSON.parse(o.responseText);r.response(t,e,n,i)}},o.open("GET",t,!0),o.setRequestHeader("Accept","application/json"),o.send(),r}function sqliteGetTableNames(t,e,n,i){let r={response:function(){}};return httpGet(t+'?q=SELECT name FROM sqlite_master WHERE type = "table"').response=function(t){let o=extract(t,{},"name");"function"==typeof r.response&&r.response(o,e,n,i)},r}function sqliteGetKeys(t,e,n,i,r){let o={response:function(){}};return httpGet(t+"?q=select * from "+e+" LIMIT 1").response=function(t){let e=Object.keys(t[0]);"function"==typeof o.response&&o.response(e,n,i,r)},o}function sqliteGetTable(t,e,n,i,r,o){let s="",l={response:function(){}};if(n&&Object.keys(n).length>0){let t=Object.keys(n);s=" where ";for(let e=0;e<t.length;e++)e>0&&(s+=" and "),s+=t[e]+'="'+n[t[e]]+'"'}return httpGet(t+"?q=select * from "+e+s).response=function(t){"function"==typeof l.response&&l.response(t,e,i,r,o)},l}function slider(t={}){let e=selectBase(idiv("",t.baseattrib)),n=getpx(e.style.height),i=getpx(e.style.width),r=div("","width: 0px; height: 0px;"),o=make("input",t.sliderattrib);o.type="range",o.style.position="relative",o.base=e,setOptions(o,t,{vertical:!1,showRange:!1,rangeattrib:"",min:0,max:100,low:o.min,high:o.max,value:50}),o.offx=0,o.offy=0,o.vertical?(o.offy=6,setAttributes(o,{orient:"vertical",style:"-webkit-appearance: slider-vertical;left: 0px; top: 0px;"}),0!=i&&0!=n||(i=30,e.style.width=px(i),n=150,e.style.height=px(n))):(o.offx=6,""!=e.style.width&&""!=e.style.height||(i=150,e.style.width=px(i),n=30,e.style.height=px(n)),o.style.top="-1px"),o.style.width="100%",o.style.height="100%";let s=o.getBoundingClientRect();return o.rangewidth=s.width-2*o.offx,o.rangeheight=s.height-2*o.offy,o.range=create("div","position: relative; "+_bggreen),setAttributes(o.range,o.rangeattrib),unselectBase(),o.setRange=function(t,e){o.low=t,o.high=e,o.updateRange()},o.updateRange=function(){if(o.low=constrain(Number(o.low),Number(o.min),Number(o.max)),o.high=constrain(Number(o.high),Number(o.min),Number(o.max)),o.vertical){let t=o.rangeheight/(o.max-o.min);o.range.style.height=px(t*(o.high-o.low)),o.range.style.top=px(t*(o.max-o.high)+o.offy),o.range.style.left=px(o.offx),o.range.style.width=px(o.rangewidth)}else{let t=o.rangewidth/(o.max-o.min);o.range.style.width=px(t*(o.high-o.low)),o.range.style.left=px(t*o.low+o.offx),o.range.style.top=px(o.offy),o.range.style.height=px(o.rangeheight)}},o.updateRange(),o.showRange&&r.appendChild(o.range),o}HTMLUListElement.prototype.add=function(t){t&&appendChilds(this,"li",t)},HTMLUListElement.prototype.put=function(t){this.clear(),t&&appendChilds(this,"li",t)},HTMLUListElement.prototype.clear=function(){this.innerHTML=""},Object.defineProperty(HTMLUListElement.prototype,"items",{get:function(){let t,e=[];for(let n in this.childNodes){t=this.childNodes[n].innerHTML,e.push(t)}return e},set:function(t){this.clear(),this.add(t)}}),HTMLOListElement.prototype.add=function(t){t&&appendChilds(this,"li",t)},HTMLOListElement.prototype.put=function(t){this.clear(),t&&appendChilds(this,"li",t)},HTMLOListElement.prototype.clear=function(){this.innerHTML=""},Object.defineProperty(HTMLOListElement.prototype,"items",{get:function(){let t,e=[];for(let n in this.childNodes){t=this.childNodes[n].innerHTML,e.push(t)}return e},set:function(t){this.clear(),this.add(t)}});