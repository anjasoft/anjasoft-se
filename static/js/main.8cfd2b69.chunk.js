(this["webpackJsonpanjasoft-se"]=this["webpackJsonpanjasoft-se"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),i=a(3),c=a.n(i),r=(a(12),a(13),a(14),a.p+"static/media/logo_white_bg.efdb87cb.svg"),o=a.p+"static/media/computer-illustration1.4a84d7aa.svg",l=a.p+"static/media/tool.61c78a31.svg",d=a.p+"static/media/garbage.38a7686e.svg",j=a.p+"static/media/bitcoin.2c802588.svg";function g(e){return Object(n.jsx)("div",{className:"section hero",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"one-half column",children:[Object(n.jsx)("img",{className:"hero-logo",src:e.logo}),Object(n.jsx)("h4",{className:"hero-heading",children:e.greeting})]}),Object(n.jsx)("div",{className:"one-half column hero-image-container",children:Object(n.jsx)("img",{className:"hero-image",src:e.heroImage})})]})})})}function h(e){var t=e.vp,a=t.Description;return Object(n.jsxs)("div",{className:"one-third column value",children:[t.Image&&Object(n.jsx)("img",{src:t.Image}),Object(n.jsx)("h5",{className:"value-heading",children:t.Title}),Object(n.jsx)("p",{className:"value-description",children:a})]})}function m(e){return Object(n.jsx)("div",{className:"section values green-background",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:e.valuePropositions.map((function(e){return Object(n.jsx)(h,{vp:e},e.Title)}))})})})}function u(e){return Object(n.jsx)("div",{className:"section get-help",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h3",{className:"section-heading",children:e.title}),Object(n.jsx)("p",{className:"section-description",children:e.text}),Object(n.jsx)("a",{className:"button button-primary",children:e.buttonText})]})})}var b=a.p+"static/media/placeholder.350b43be.png";function f(){return Object(n.jsx)("div",{className:"section categories green-background",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h3",{className:"section-heading",children:"Responsive Images"}),Object(n.jsx)("p",{className:"section-description",children:"This right here is a bunch of pictures "}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"one-half column category",children:Object(n.jsx)("img",{className:"u-max-full-width",src:b})}),Object(n.jsx)("div",{className:"one-half column category",children:Object(n.jsx)("img",{className:"u-max-full-width",src:b})})]})]})})}var p=a(6);function v(){return Object(n.jsxs)("span",{children:["\xa9 www.anjasoft.se"," ",(new Date).getFullYear()]})}function x(e){var t=Object(s.useState)(""),a=Object(p.a)(t,2),i=a[0],c=a[1];return i||e.foaasProxy.GetMessage().then((function(e){c(e)})),Object(n.jsx)("footer",{children:Object(n.jsxs)("div",{className:"container footer txt-light",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(v,{})}),Object(n.jsx)("div",{className:"row txt-smaller",children:Object(n.jsx)("a",{className:"discreet-link",href:"https://www.foaas.com",children:i})})]})})}var O=a(4),k=a(5),N=function(){function e(){Object(O.a)(this,e)}return Object(k.a)(e,[{key:"GetMessage",value:function(){var e=["asshole","awesome","bag","because","bucket","bye","cool","cup","even","everyone","everything","family","fascinating","flying","ftfy","fyyff","give","holygrail","horse","idea","immensity","jinglebells","life","logs","looking","maybe","me","mornin","no","nugget","pink","programmer","question","ratsarse","retard","ridiculous","rtfm","sake","shit","single","thanks","that","this","too","tucker","what","zayn","zero"],t=e[this.getRndInteger(0,e.length)];return fetch("https://www.foaas.com/"+t+"/anjasoft",{method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json",Accept:"application/json"},redirect:"follow",referrerPolicy:"no-referrer"}).then((function(e){return e.json()})).then((function(e){return console.log(e),e.message}))}},{key:"getRndInteger",value:function(e,t){return Math.floor(Math.random()*(t-e))+e}}]),e}();var y=function(){var e={SiteLogo:r,HeroImage:o,MainGreetingMessage:"Jag jobbar data.",ContactTitle:"Kontakt",ContactText:"Vill du kontakta mig? P\xe5 riktigt? Vad kul! Vi kan hitta p\xe5 n\xe5t! Jag kan bli din nya b\xe4sta kompis, vi kan dricka \xf6l och g\xe5 p\xe5 promenader och... Har du f\xf6rresten sett Cable Guy?",ContactButtonText:"To be implemented",ValuePropositions:[{Image:l,Title:"R\xe4tt verktyg",Description:"Man ska ha r\xe4tt verktyg f\xf6r jobbet. Jag har en j\xe4vulsk massa verktyg, och \xe4r helt s\xe4ker p\xe5 att n\xe5got av dem \xe4r r\xe4tt f\xf6r ditt jobb."},{Image:d,Title:"Databas",Description:"Oavsett om du v\xe4ljer SqlServer, Oracle eller n\xe5gon s\xe5n modern NoSql-databas s\xe5 \xe4r databasen i princip en soptunna du sl\xe4nger data i. Jag kan hj\xe4lpa till med din sophantering."},{Image:j,Title:"S\xe4kerhet",Description:"Det spelar ingen roll vilken ljusskygg verksamhet du \xe4gnar dig \xe5t. Jag kan skydda din information fr\xe5n snokande \xf6gon."}]},t=new N;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(g,{greeting:e.MainGreetingMessage,logo:e.SiteLogo,heroImage:e.HeroImage}),Object(n.jsx)(m,{valuePropositions:e.ValuePropositions}),Object(n.jsx)(u,{title:e.ContactTitle,text:e.ContactText,buttonText:e.ContactButtonText}),Object(n.jsx)(f,{}),Object(n.jsx)(x,{foaasProxy:t})]})};c.a.render(Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(y,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8cfd2b69.chunk.js.map