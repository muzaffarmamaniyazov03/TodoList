(function(){"use strict";var t={3395:function(t,n,a){var e=a(9242),i=a(3396);const r={class:"app"},l={class:"container"};function o(t,n,a,e,o,s){const d=(0,i.up)("Nav"),c=(0,i.up)("Grid"),g=(0,i.up)("Cards"),u=(0,i.up)("AddBtn"),h=(0,i.up)("Modal");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i.Wm)(d,{lang:o.lang,search:o.search,onSearching:n[0]||(n[0]=t=>o.search=t),onBack:n[1]||(n[1]=t=>o.search=t),onSearchVal:n[2]||(n[2]=t=>o.searchInput=t),onChangeLang:n[3]||(n[3]=t=>o.lang=t),langWord:o.langWord},null,8,["lang","search","langWord"]),(0,i._)("div",l,[(0,i.Wm)(c,{lang:o.lang,gridOrList:o.gridOrList,onChangeGrid:n[4]||(n[4]=t=>o.gridOrList=t),langWord:o.langWord},null,8,["lang","gridOrList","langWord"]),(0,i.Wm)(g,{lang:o.lang,grid:o.gridOrList,notes:s.notesFilter,onChangeNote:s.changeNote,langWord:o.langWord},null,8,["lang","grid","notes","onChangeNote","langWord"])]),(0,i.Wm)(u,{onChangeModal:n[5]||(n[5]=t=>o.modal=t)}),o.modal?((0,i.wg)(),(0,i.j4)(h,{key:0,lang:o.lang,onAddNote:s.addCard,onCancel:n[6]||(n[6]=t=>(o.modal=t,o.addOrChange=!0)),addOrChange:o.addOrChange,saveChange:o.saveChange,onSaveNote:s.saveNote,langWord:o.langWord},null,8,["lang","onAddNote","addOrChange","saveChange","onSaveNote","langWord"])):(0,i.kq)("",!0)])}a(7658);var s=a(7139);const d={class:"modal"},c={class:"modal__card"},g={key:0,class:"modal__card-title"},u={key:1,class:"modal__card-title"},h={class:"modal__card-label"},m={class:"modal__card-label"},v={class:"modal__card-btns"};function p(t,n,a,r,l,o){return(0,i.wg)(),(0,i.iD)("div",d,[(0,i._)("div",c,[t.addOrchange?((0,i.wg)(),(0,i.iD)("h2",g,(0,s.zw)(a.langWord.titlewindow[a.lang]),1)):((0,i.wg)(),(0,i.iD)("h2",u,(0,s.zw)(a.langWord.titlewindowedit[a.lang]),1)),(0,i._)("label",h,[(0,i.Uk)(" Title "),(0,i.wy)((0,i._)("input",{type:"text",placeholder:"Title","onUpdate:modelValue":n[0]||(n[0]=t=>l.title=t)},null,512),[[e.nr,l.title]])]),(0,i._)("label",m,[(0,i.Uk)(" Content "),(0,i.wy)((0,i._)("input",{type:"text",placeholder:"Content","onUpdate:modelValue":n[1]||(n[1]=t=>l.content=t)},null,512),[[e.nr,l.content]])]),(0,i._)("div",v,[(0,i._)("button",{onClick:n[2]||(n[2]=n=>t.$emit("cancel",!1))},(0,s.zw)(a.langWord.closebtn[a.lang]),1),a.addOrChange?((0,i.wg)(),(0,i.iD)("button",{key:0,onClick:n[3]||(n[3]=(...t)=>o.addNote&&o.addNote(...t))},(0,s.zw)(a.langWord.addbtn[a.lang]),1)):((0,i.wg)(),(0,i.iD)("button",{key:1,onClick:n[4]||(n[4]=(...t)=>o.saveNote&&o.saveNote(...t))},(0,s.zw)(a.langWord.editwindowbtn[a.lang]),1))])])])}var _={props:{addOrChange:Boolean,saveChange:Object,langWord:Object,lang:String},data(){return{title:"",content:"",time:""}},methods:{addNote(){""!=this.title&&""!=this.content&&this.$emit("addNote",{title:this.title,content:this.content,time:(new Date).toLocaleDateString()})},saveNote(){""!=this.title&&""!=this.content&&this.$emit("saveNote",{id:this.saveChange.id,title:this.title,content:this.content,time:(new Date).toLocaleDateString()})}},mounted(){this.addOrChange||(this.title=this.saveChange.title,this.content=this.saveChange.content)}},b=a(89);const f=(0,b.Z)(_,[["render",p]]);var w=f,C=a.p+"img/list.4ed3d4be.svg",k=a.p+"img/grid.dbae4039.svg";const O={class:"grid"},z={class:"grid__title"},W={key:0,src:C,alt:""},y={key:1,src:k,alt:""},N={key:2},D={key:3};function L(t,n,a,e,r,l){return(0,i.wg)(),(0,i.iD)("div",O,[(0,i._)("h2",z,(0,s.zw)(a.langWord.infobar[a.lang]),1),(0,i._)("button",{class:"grid__btn",onClick:n[0]||(n[0]=n=>t.$emit("changeGrid",!a.gridOrList))},[a.gridOrList?((0,i.wg)(),(0,i.iD)("img",W)):((0,i.wg)(),(0,i.iD)("img",y)),a.gridOrList?((0,i.wg)(),(0,i.iD)("span",N,(0,s.zw)(a.langWord.list[a.lang]),1)):((0,i.wg)(),(0,i.iD)("span",D,(0,s.zw)(a.langWord.grid[a.lang]),1))])])}var S={props:{gridOrList:Boolean,langWord:Object,lang:String}};const j=(0,b.Z)(S,[["render",L]]);var U=j,V=a.p+"img/Uzbekistan-flag.de497f87.webp",x=a.p+"img/russia.a6b287d7.png",$=a.p+"img/search.2c9e71ed.svg",B=a.p+"img/back.a1821e6b.svg",I=a.p+"img/clear.e9281049.svg";const E={key:0,class:"nav"},T=(0,i._)("img",{class:"nav__lang-img",src:V,alt:""},null,-1),Z=(0,i._)("img",{class:"nav__lang-img",src:x,alt:""},null,-1),A={class:"container"},G={class:"nav__title"},J=(0,i._)("img",{src:$,alt:""},null,-1),M=[J],R={key:1,class:"nav"},q=(0,i._)("img",{src:B,alt:""},null,-1),F=[q],Q={class:"container"},H=["placeholder"],P={class:"nav__close"};function K(t,n,a,r,l,o){return(0,i.wg)(),(0,i.j4)(e.uT,{name:"nav",mode:"out-in"},{default:(0,i.w5)((()=>[a.search?((0,i.wg)(),(0,i.iD)("nav",R,[(0,i._)("button",{onClick:n[3]||(n[3]=(...t)=>o.back&&o.back(...t))},F),(0,i._)("div",Q,[(0,i.wy)((0,i._)("input",{class:"nav__input",type:"text",placeholder:a.langWord.appbarseacrch[a.lang],"onUpdate:modelValue":n[4]||(n[4]=t=>l.searchVal=t)},null,8,H),[[e.nr,l.searchVal]])]),(0,i._)("button",P,[(0,i._)("img",{src:I,alt:"",onClick:n[5]||(n[5]=t=>this.searchVal="")})])])):((0,i.wg)(),(0,i.iD)("nav",E,[(0,i.Wm)(e.uT,{name:"nav",mode:"out-in"},{default:(0,i.w5)((()=>["uz"==a.lang?((0,i.wg)(),(0,i.iD)("button",{key:0,class:"nav__lang",onClick:n[0]||(n[0]=(...t)=>o.changeLang&&o.changeLang(...t))},[(0,i.Uk)(" Uz "),T])):((0,i.wg)(),(0,i.iD)("button",{key:1,class:"nav__lang",onClick:n[1]||(n[1]=(...t)=>o.changeLang&&o.changeLang(...t))},[(0,i.Uk)(" Ru "),Z]))])),_:1}),(0,i._)("div",A,[(0,i._)("h2",G,(0,s.zw)(a.langWord.appbartitle[a.lang]),1)]),(0,i._)("button",{class:"nav__search",onClick:n[2]||(n[2]=n=>t.$emit("searching",!0))},M)]))])),_:1})}var Y={props:{lang:String,search:Boolean,langWord:Object,lang:String},data(){return{searchVal:""}},methods:{back(){this.$emit("back",!1),this.searchVal=""},changeLang(){this.$emit("changeLang","uz"==this.lang?"ru":"uz")}},watch:{searchVal(t){this.$emit("searchVal",t)}}};const X=(0,b.Z)(Y,[["render",K]]);var tt=X,nt=a.p+"img/change.092f5b23.svg",at=a.p+"img/delete.f04c87ff.svg";const et={class:"card__title"},it={class:"card__time"},rt={class:"card__text"},lt={class:"card__btn"},ot=["onClick"],st=(0,i._)("img",{src:nt,alt:""},null,-1),dt=["onClick"],ct=(0,i._)("img",{src:at,alt:""},null,-1);function gt(t,n,a,e,r,l){return(0,i.wg)(),(0,i.iD)("div",{class:(0,s.C_)(["notes",{setka:a.grid,list:!a.grid}])},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.notes,((n,e)=>((0,i.wg)(),(0,i.iD)("div",{class:"card",key:e},[(0,i._)("h2",et,(0,s.zw)(n.title),1),(0,i._)("p",it,(0,s.zw)(n.time),1),(0,i._)("p",rt,(0,s.zw)(n.content),1),(0,i._)("div",lt,[(0,i._)("button",{class:"card__btn-edit",onClick:a=>t.$emit("changeNote",n.id)},[st,(0,i.Uk)(" "+(0,s.zw)(a.langWord.editbtn[a.lang]),1)],8,ot),(0,i._)("button",{class:"card__btn-delete",onClick:t=>l.removeCard(n.id)},[ct,(0,i.Uk)(" "+(0,s.zw)(a.langWord.deledit[a.lang]),1)],8,dt)])])))),128))],2)}var ut={props:{grid:Boolean,notes:Array,langWord:Object,lang:String},methods:{removeCard(t){this.notes.forEach(((t,n)=>{this.notes.splice(n,1)}))}}};const ht=(0,b.Z)(ut,[["render",gt]]);var mt=ht,vt=a.p+"img/add.092f5b23.svg";const pt=(0,i._)("img",{src:vt,alt:""},null,-1),_t=[pt];function bt(t,n,a,e,r,l){return(0,i.wg)(),(0,i.iD)("button",{class:"app__btn",onClick:n[0]||(n[0]=n=>t.$emit("changeModal",!0))},_t)}var ft={};const wt=(0,b.Z)(ft,[["render",bt]]);var Ct=wt;const kt={appbartitle:{ru:"Заметки",uz:"Eslatmalar"},appbarseacrch:{ru:"Поиск...",uz:"Qidirish..."},infobar:{ru:"Все заметки",uz:"Barcha eslatmalar"},infobarsearch:{ru:"Поиск",uz:"Qidirish"},list:{ru:"Список",uz:"Roʻyxat"},grid:{ru:"Сетка",uz:"Jadval"},titlewindow:{ru:"Добавить заметку",uz:"Eslatma qo’shish"},titlewindowedit:{ru:"Изменить заметку",uz:"Elsatmani tahrirlash"},editbtn:{ru:"РЕДАКТИРОВАТЬ",uz:"O`ZGARTIRISH"},deledit:{ru:"Удалить",uz:"o'chirish"},closebtn:{ru:"Отмена",uz:"Bekor qilish"},addbtn:{ru:"Добавить",uz:"Qo’shish"},editwindowbtn:{ru:"изменить",uz:"o'zgartirish"},nonote:{ru:"Заметок нет",uz:"Eslatmalar mavjud emas"}};var Ot=kt,zt={components:{Modal:w,Nav:tt,Grid:U,Cards:mt,AddBtn:Ct},data(){return{lang:"uz",gridOrList:!0,modal:!1,notes:[],id:1,addOrChange:!0,saveChange:{},search:!1,searchInput:"",langWord:{}}},methods:{addCard(t){t.id=this.id++,this.notes.push(t),this.modal=!1},changeNote(t){this.notes.forEach((n=>{t==n.id&&(this.addOrChange=!1,this.saveChange={id:n.id,title:n.title,content:n.content},this.modal=!0)}))},saveNote(t){this.notes.forEach((n=>{n.id==t.id&&(n.title=t.title,n.content=t.content,n.time=t.time,this.modal=!1,this.addOrChange=!0)}))}},computed:{notesFilter(){let t=this.notes,n=this.searchInput;return this.search?(n=n.trim().toLowerCase(),t=t.filter((t=>{if(-1!=t.title.toLowerCase().indexOf(n))return t})),t):t}},watch:{id(){localStorage.setItem("id",JSON.stringify(this.id))},notes:{handler(t){localStorage.setItem("notes",JSON.stringify(t))},deep:!0}},created(){let t=localStorage.getItem("notes"),n=localStorage.getItem("id");this.langWord=Ot,t&&(this.notes=JSON.parse(t)),n&&(this.id=JSON.parse(n))}};const Wt=(0,b.Z)(zt,[["render",o]]);var yt=Wt;(0,e.ri)(yt).mount("#app")}},n={};function a(e){var i=n[e];if(void 0!==i)return i.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(n,e,i,r){if(!e){var l=1/0;for(c=0;c<t.length;c++){e=t[c][0],i=t[c][1],r=t[c][2];for(var o=!0,s=0;s<e.length;s++)(!1&r||l>=r)&&Object.keys(a.O).every((function(t){return a.O[t](e[s])}))?e.splice(s--,1):(o=!1,r<l&&(l=r));if(o){t.splice(c--,1);var d=i();void 0!==d&&(n=d)}}return n}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[e,i,r]}}(),function(){a.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(n,{a:n}),n}}(),function(){a.d=function(t,n){for(var e in n)a.o(n,e)&&!a.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){a.p="/todolist/"}(),function(){var t={143:0};a.O.j=function(n){return 0===t[n]};var n=function(n,e){var i,r,l=e[0],o=e[1],s=e[2],d=0;if(l.some((function(n){return 0!==t[n]}))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(s)var c=s(a)}for(n&&n(e);d<l.length;d++)r=l[d],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(c)},e=self["webpackChunktodolist"]=self["webpackChunktodolist"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=a.O(void 0,[998],(function(){return a(3395)}));e=a.O(e)})();
//# sourceMappingURL=app.8e62f19a.js.map