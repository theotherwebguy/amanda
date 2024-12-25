"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[70],{6070:function(e,s,a){a.r(s),a.d(s,{default:function(){return u}});var n=a(5893),i=a(7294),c=a(6333),l=a(907),r=function(e){var s=e.img;return(0,n.jsx)("img",{src:s,alt:"Project Image"})},t=function(e){var s=e.playing,a=(0,i.useRef)(null);return(0,i.useEffect)((function(){null==s&&a.current.pause()}),[s]),(0,n.jsx)("video",{ref:a,src:"img/projects/video.mp4",id:"video",className:"responsive-video",controls:"controls",autoPlay:!1,poster:"img/projects/project-6.jpg"})},o=function(e){var s=e.playing;return(0,i.useEffect)((function(){var e=document.querySelector(".youtube-video");null==s&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}),[s]),(0,n.jsx)("div",{className:"videocontainer",children:(0,n.jsx)("iframe",{className:"youtube-video",src:"https://www.youtube.com/embed/7e90gBu4pas?enablejsapi=1&version=3&playerapiid=ytplayer"})})},d=function(){return(0,n.jsx)("div",{id:"slider",className:"carousel slide portfolio-slider","data-ride":"carousel",children:(0,n.jsxs)(l.Z,{className:"carousel-inner",prevIcon:(0,n.jsx)("a",{className:"carousel-control-prev",href:"#slider","data-slide":"prev",children:(0,n.jsx)("span",{className:"fa fa-chevron-left carousel-controls"})}),nextIcon:(0,n.jsx)("a",{className:"carousel-control-next",href:"#slider","data-slide":"next",children:(0,n.jsx)("span",{className:"fa fa-chevron-right carousel-controls"})}),prevLabel:"",nextLabel:"",indicators:!1,children:[(0,n.jsx)(l.Z.Item,{className:"carousel-item",interval:1e3,children:(0,n.jsx)("img",{src:"img/Product-listing-1.png",alt:"slide 1"})}),(0,n.jsx)(l.Z.Item,{className:"carousel-item",interval:1e3,children:(0,n.jsx)("img",{src:"img/Product-listing-2.png",alt:"slide 2"})})]})})},m=[{img:"img/Phase 2 - Burger banner.png",name:"Fast Food advertisement",format:"img",project:"Ad",client:"Phase 2 - Fast Food outley",duration:"3 MONTHS",technologies:["Canva"],budget:"1550 USD"},{img:"img/cyber-monday-celebration.jpg",name:"Cyber Monday Ad",format:"img",project:"Social Media",client:"Stronics",duration:"3 MONTHS",technologies:["Canva"],budget:"1550 USD"},{img:"img/Product-listing-2.png",name:"WORDPRESS WEBSITE MANAGEMNT",format:"slider",project:" PRODUCT LISTING ",client:"SUPER ELECTRONICS",duration:"3 MONTHS",technologies:["WORDPRESS","WORCOMMERCE","CONTENT COPY"],budget:"1550 USD"}],u=function(){var e=(0,i.useContext)(c.Z).nav,s=(0,i.useState)(null),a=s[0],l=s[1];return(0,n.jsxs)(i.Fragment,{children:[(0,n.jsxs)("section",{id:"work",className:"".concat("work"===e?"active":""),children:[(0,n.jsxs)("div",{className:"portfolio-container ".concat(a?"slide-out overflow-hidden":""),children:[(0,n.jsxs)("div",{className:"container page-title text-center",children:[(0,n.jsxs)("h2",{className:"text-center",children:["my ",(0,n.jsx)("span",{children:"portfolio"})]}),(0,n.jsx)("span",{className:"title-head-subtitle",children:"a few recent design and coding projects. Want to see more? Email me."})]}),(0,n.jsx)("div",{className:"portfolio-section",children:(0,n.jsx)("div",{className:"container cd-container",children:(0,n.jsx)("div",{children:(0,n.jsx)("ul",{className:"row",id:"portfolio-items",children:m.map((function(e,s){return(0,n.jsx)("li",{className:"col-12 col-md-6 col-lg-4",children:(0,n.jsxs)("a",{href:"#","data-type":"project-1",onClick:function(){return l(s+1)},children:[(0,n.jsx)("img",{src:e.img,alt:"Project",className:"img-fluid"}),(0,n.jsx)("div",{children:(0,n.jsx)("span",{children:e.name})})]})},s)}))})})})}),(0,n.jsx)("div",{className:"portfolio-overlay",onClick:function(){return l(null)}})]}),m.map((function(e,s){return(0,n.jsxs)("div",{className:"project-info-container project-1 ".concat(a===s+1?"slide-in":""),children:[(0,n.jsx)("div",{className:"project-info-main-content",children:"img"==e.format?(0,n.jsx)(r,{img:e.img}):"youtube"==e.format?(0,n.jsx)(o,{playing:a}):"slider"==e.format?(0,n.jsx)(d,{}):(0,n.jsx)(t,{playing:a})}),(0,n.jsxs)("div",{className:"projects-info row",children:[(0,n.jsxs)("div",{className:"col-12 col-sm-6 p-none",children:[(0,n.jsx)("h3",{className:"font-weight-600 uppercase",children:e.name}),(0,n.jsxs)("ul",{className:"project-details",children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("i",{className:"fa fa-file-text-o"}),(0,n.jsxs)("span",{className:"font-weight-400 project-label",children:[" ","Project"," "]}),":"," ",(0,n.jsx)("span",{className:"font-weight-600 uppercase",children:e.project})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("i",{className:"fa fa-user-o"}),(0,n.jsxs)("span",{className:"font-weight-400 project-label",children:[" ","Client"," "]}),":"," ",(0,n.jsx)("span",{className:"font-weight-600 uppercase",children:e.client})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("i",{className:"fa fa-code"})," ",(0,n.jsxs)("span",{className:"font-weight-400 project-label",children:[" ","Technologies"]})," ",":"," ",(0,n.jsx)("span",{className:"font-weight-600 uppercase",children:e.technologies.map((function(e,s){return(0,n.jsx)(i.Fragment,{children:e},s)}))})]})]}),(0,n.jsx)("a",{href:"#",className:"btn",children:(0,n.jsxs)("span",{children:[(0,n.jsx)("i",{className:"fa fa-external-link"}),"preview"]})})]}),(0,n.jsx)("div",{className:"col-6 p-none text-right",children:(0,n.jsx)("a",{href:"#",className:"btn btn-secondary close-project",onClick:function(){return l(null)},children:(0,n.jsxs)("span",{children:[(0,n.jsx)("i",{className:"fa fa-close"}),"Close"]})})})]})]},s)}))]}),a&&(0,n.jsx)("span",{className:"back-mobile ".concat(a?"is-visible":""),onClick:function(){return l(null)},children:(0,n.jsx)("i",{className:"fa fa-arrow-left"})})]})}}}]);