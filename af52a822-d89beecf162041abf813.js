"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[948],{851:function(t,e,i){i.d(e,{c:function(){return g}});var n=i(7387),o=i(644),l=i(4810),s=i(196),a=i(6540),r=i(7437),p=i(8061),c=i(1556),f=i(2158),d=i(59);let u=function(t){function e(...e){var i;return(i=t.call.apply(t,[this].concat(e))||this).titleRef=a.createRef(),i.lastScrollY=0,i.ticking=!1,i.state={showTitle:!1},i.onScroll=()=>{i.titleRef&&i.titleRef.current&&(i.ticking||requestAnimationFrame(i.update),i.ticking=!0)},i.update=()=>{if(!i.titleRef||!i.titleRef.current)return;i.lastScrollY=window.scrollY;const t=i.titleRef.current.getBoundingClientRect().top,e=i.titleRef.current.offsetHeight+35;i.lastScrollY>=t+e?i.setState({showTitle:!0}):i.setState({showTitle:!1}),i.ticking=!1},i}(0,n.A)(e,t);var i=e.prototype;return i.componentDidMount=function(){this.lastScrollY=window.scrollY,this.props.isPost&&window.addEventListener("scroll",this.onScroll,{passive:!0})},i.componentWillUnmount=function(){window.removeEventListener("scroll",this.onScroll)},i.render=function(){const{isHome:t=!1,isPost:e=!1,post:i={}}=this.props;return(0,r.Y)("nav",{css:m},(0,r.Y)(h,{className:"site-nav-left"},(0,r.Y)(x,{css:[this.state.showTitle?Y:"","",""]},(0,r.Y)("ul",{css:y,role:"menu"},(0,r.Y)("li",{role:"menuitem"},(0,r.Y)(l.N_,{className:"site-nav-logo",to:"/"},f.A.title)),(0,r.Y)("li",{role:"menuitem"},(0,r.Y)(l.N_,{to:"/posts"},"Posts")),(0,r.Y)("li",{role:"menuitem"},(0,r.Y)(l.N_,{to:"/about"},"About"))),e&&(0,r.Y)(b,{ref:this.titleRef,className:"nav-post-title"},i.title))),(0,r.Y)(w,null,(0,r.Y)(v,null,f.A.twitter&&(0,r.Y)("a",{css:c.Ao,href:f.A.twitter,title:"Twitter",target:"_blank",rel:"noopener noreferrer"},(0,r.Y)(d.K,null)))))},e}(a.Component);const g=(0,r.AH)("position:fixed;top:0;right:0;left:0;z-index:1000;background:",(0,s.e$)("0.05",p.T.darkgrey),";@media (max-width: 700px){padding-right:0;padding-left:0;}","","",""),m={name:"lcmrfl",styles:"position:relative;z-index:100;display:flex;justify-content:space-between;align-items:flex-start;overflow-y:hidden;height:64px;font-size:1.3rem"},h=(0,o.A)("div",{target:"e1psa8dr4"})({name:"crtwut",styles:"flex:1 0 auto;display:flex;align-items:center;overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;margin-right:10px;padding:10px 0 80px;font-weight:500;letter-spacing:0.2px;text-transform:uppercase;white-space:nowrap;-ms-overflow-scrolling:touch;@media (max-width: 700px){margin-right:0;padding-left:5vw;}"}),x=(0,o.A)("div",{target:"e1psa8dr3"})({name:"ggt2ij",styles:"position:relative;align-self:flex-start"}),y={name:"ps6dy3",styles:"position:absolute;z-index:1000;display:flex;margin:0 0 0 -12px;padding:0;list-style:none;transition:all 1s cubic-bezier(0.19, 1, 0.22, 1);li{display:block;margin:0;padding:0;}li a{position:relative;display:block;padding:12px 12px;color:#fff;opacity:0.8;transition:opacity 0.35s ease-in-out;}li a:hover{text-decoration:none;opacity:1;}li a:before{content:'';position:absolute;right:100%;bottom:8px;left:12px;height:1px;background:#fff;opacity:0.25;transition:all 0.35s ease-in-out;}li a:hover:before{right:12px;opacity:0.5;}"},w=(0,o.A)("div",{target:"e1psa8dr2"})({name:"1p9q30u",styles:"flex:0 1 auto;display:flex;align-items:center;justify-content:flex-end;padding:10px 0;height:64px;@media (max-width: 700px){display:none;}"}),v=(0,o.A)("div",{target:"e1psa8dr1"})({name:"1z0rm8f",styles:"flex-shrink:0;display:flex;align-items:center"}),b=(0,o.A)("span",{target:"e1psa8dr0"})({name:"1wu52sc",styles:"visibility:hidden;position:absolute;top:9px;color:#fff;font-size:1.7rem;font-weight:400;text-transform:none;opacity:0;transition:all 1s cubic-bezier(0.19, 1, 0.22, 1);transform:translateY(175%);.dash{left:-25px;}.dash:before{content:'– ';opacity:0.5;}"}),Y={name:"44uflt",styles:"ul{visibility:hidden;opacity:0;transform:translateY(-175%);}.nav-post-title{visibility:visible;opacity:1;transform:translateY(0);}"};e.A=u}}]);
//# sourceMappingURL=af52a822-d89beecf162041abf813.js.map