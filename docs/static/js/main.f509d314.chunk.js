(this.webpackJsonphabitacion=this.webpackJsonphabitacion||[]).push([[0],{168:function(e,t,a){},169:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(29),s=a.n(n),i=a(5),r=a(9),l=a.n(r),o=a(12),u=a(8),d=a(6),j=a(10),b=a(23),p=a.n(b);a(71),a(74);p.a.initializeApp({apiKey:"AIzaSyDDdpVuu9hbzA4IEuDSfhnJzPPEfEvp324",authDomain:"pet-finder-62202.firebaseapp.com",projectId:"pet-finder-62202",storageBucket:"pet-finder-62202.appspot.com",messagingSenderId:"336908360313",appId:"1:336908360313:web:33f6a5883454a1811392a8",measurementId:"G-KJQQQHKG9F"});var m=p.a.firestore(),h=new p.a.auth.GoogleAuthProvider,f=a(3),O=a(32),x=a(0),v=["isAutenticated","component"],g=function(e){var t=e.isAutenticated,a=e.component,c=Object(O.a)(e,v);return Object(x.jsx)(j.b,Object(f.a)(Object(f.a)({},c),{},{isAutenticated:t,component:function(e){return t?Object(x.jsx)(j.a,{to:"/app"}):Object(x.jsx)(a,Object(f.a)({},e))}}))},_=["isAutenticated","component"],N=function(e){var t=e.isAutenticated,a=e.component,c=Object(O.a)(e,_);return Object(x.jsx)(j.b,Object(f.a)(Object(f.a)({},c),{},{isAutenticated:t,component:function(e){return t?Object(x.jsx)(a,Object(f.a)({},e)):Object(x.jsx)(j.a,{to:"/"})}}))},k=a(11),y=a.n(k),w=a(24),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),a=Object(u.a)(t,2),n=a[0],s=a[1],i=function(){s({description:""})},r=function(e){var t=e.target;"checkbox"===t.type?s(Object(f.a)(Object(f.a)({},n),{},Object(w.a)({},t.name,t.checked))):s(Object(f.a)(Object(f.a)({},n),{},Object(w.a)({},t.name,t.value)))};return[n,r,i]},E=a(18),S=a.n(E),A="[Auth] Login",F="[Auth] Logout",P="[Auth] Set Error",I="[Auth] Remove Error",M="[Auth] Start Loading",D="[Auth] Finish Loading",L="[App] Setting Card Container",R="[App] Movement Settings",T="[App] Selecting Ref Card",U="[App] Thumbing Up",V="[App] Heart Up",W="[App] Modal Status",z="[App] Initial Status",q="[App] Set Upload Error",H="[App] Remove Upload Error",Y=function(e){return{type:P,payload:e}},G=function(){return{type:I}},B=function(e){return{type:q,payload:e}},J=function(){return{type:D}},X=function(e,t){return{type:A,payload:{uid:e,displayName:t}}},K=function(e,t){return function(a){a({type:M}),p.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;a(X(t.uid,t.displayName)),a(J())})).catch((function(e){console.log(e),a(J()),S.a.fire("Error",e.message,"error")}))}},Q=function(){var e=C({email:"",password:""}),t=Object(u.a)(e,2),a=t[0],c=t[1],n=a.email,s=a.password,r=Object(i.b)();return Object(x.jsxs)("form",{className:"auth__login-container",onSubmit:function(e){e.preventDefault(),function(e,t){return y.a.isEmail(e)?y.a.isEmpty(t)?(r(Y("Password incorrecto")),!1):(r(G()),!0):(r(Y("Email incorrecto")),!1)}(n,s)&&r(K(n,s))},children:[Object(x.jsx)(d.b,{to:"./",className:"auth__go-before",children:Object(x.jsx)("i",{className:"fas fa-times"})}),Object(x.jsx)("img",{src:"./assets/svgs/cute-cat2.svg",className:"auth__cat-logo",alt:"cute-dog"}),Object(x.jsx)("h1",{className:"auth__title",children:"Deja tu Huella"}),Object(x.jsxs)("p",{className:"d-block",children:["\xbfNo tienes una cuenta? ",Object(x.jsx)(d.b,{to:"./register",className:"link",children:"Registrate"})]}),Object(x.jsx)("label",{className:"auth__label",htmlFor:"email",children:"Email"}),Object(x.jsx)("input",{className:"input d-block auth__input",id:"email",name:"email",value:n,onChange:c,type:"email"}),Object(x.jsx)("label",{className:"auth__label",htmlFor:"password",children:"Password"}),Object(x.jsx)("input",{className:"input d-block auth__input",id:"password",name:"password",value:s,onChange:c,type:"password"}),Object(x.jsx)("button",{type:"submit",className:"button d-block auth__btn-login",children:"Iniciar Sesi\xf3n"}),Object(x.jsx)("span",{className:"d-block mt-3",children:"o ingresa con:"}),Object(x.jsx)("div",{className:"d-block mt-2",onClick:function(){r((function(e){p.a.auth().signInWithPopup(h).then((function(t){var a=t.user;e(X(a.uid,a.displayName))}))}))},children:Object(x.jsxs)("div",{className:"google-btn",children:[Object(x.jsx)("div",{className:"google-icon-wrapper",children:Object(x.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(x.jsx)("p",{className:"btn-text",children:Object(x.jsx)("b",{children:"Sign in with google"})})]})})]})},Z=(a(166),function(){var e=Object(i.b)(),t=C({name:"",email:"",password:"",password2:""}),a=Object(u.a)(t,2),c=a[0],n=a[1],s=c.name,r=c.email,j=c.password,b=c.password2;return Object(x.jsxs)("form",{className:"auth__login-container",onSubmit:function(t){t.preventDefault(),function(t,a,c,n){return y.a.isEmpty(t)?(e(Y("Debe ingresar un nombre")),!1):y.a.escape(t).includes(";")?(e(Y("Ingrese un nombre v\xe1lido")),!1):y.a.isEmail(a)?c!==n||c.length<5?(e(Y("Passwords incorrectos")),!1):(e(G()),!0):(e(Y("Ingrese un email v\xe1lido")),!1)}(s,r,j,b)&&e(function(e,t,a){return function(c){p.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.user,e.next=3,n.updateProfile({displayName:a});case 3:c(X(n.uid,n.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){S.a.fire("Error",e.message,"error")}))}}(r,j,s))},children:[Object(x.jsx)(d.b,{to:"./",className:"auth__go-before",children:Object(x.jsx)("i",{className:"fas fa-times"})}),Object(x.jsx)("img",{src:"./assets/svgs/cute-cat2.svg",className:"auth__cat-logo",alt:"cute-dog"}),Object(x.jsx)("h1",{className:"auth__title",children:"Deja tu Huella"}),Object(x.jsx)("label",{className:"auth__label-register",htmlFor:"nombre",children:"Nombre"}),Object(x.jsx)("input",{className:"input d-block auth__input",id:"nombre",name:"name",type:"text",value:s,onChange:n,autoComplete:"off"}),Object(x.jsx)("label",{className:"auth__label-register",htmlFor:"email",children:"Email"}),Object(x.jsx)("input",{className:"input d-block auth__input",id:"email",name:"email",type:"email",value:r,onChange:n,autoComplete:"off"}),Object(x.jsx)("label",{className:"auth__label-register",htmlFor:"password",children:"Password"}),Object(x.jsx)("input",{className:"input d-block auth__input",id:"password",name:"password",type:"password",value:j,onChange:n,autoComplete:"off"}),Object(x.jsx)("label",{className:"auth__label-register",htmlFor:"password2",children:"Confirm password"}),Object(x.jsx)("input",{className:"input d-block auth__input",id:"password2",name:"password2",type:"password",value:b,onChange:n,autoComplete:"off"}),Object(x.jsx)("button",{type:"submit",className:"button d-block auth__btn-register",children:"Registrate"}),Object(x.jsxs)("p",{className:"d-block mt-2",children:["\xbfYa est\xe1s registrado? ",Object(x.jsx)(d.b,{to:"./login",className:"link",children:"Inicia sesi\xf3n"})]})]})}),$=function(){return Object(x.jsxs)("div",{className:"landing__main-body",children:[Object(x.jsx)("h1",{className:"landing__title",children:"Compa\xf1eros "}),Object(x.jsx)("h1",{className:"landing__title",children:" de Vida"}),Object(x.jsx)(d.b,{type:"button",to:"./register",className:"btn-register",children:"Registrate"}),Object(x.jsx)(d.b,{type:"button",to:"./login",className:"btn-login",children:"Inicia Sesi\xf3n"}),Object(x.jsx)("img",{src:"./assets/svgs/cute-dog1.svg",className:"landing__dog-img",alt:"cute-dog"}),Object(x.jsx)("img",{src:"./assets/svgs/cute-cat1.svg",className:"landing__cat-img",alt:"cute-cat"})]})},ee=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),a=t[0],n=t[1],s=Object(c.useRef)(null),i=Object(c.useRef)(null);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("nav",{className:"navbar navbar-expand-lg navbar__principal",children:Object(x.jsxs)("div",{className:"container-fluid",children:[Object(x.jsxs)(d.b,{className:"navbar-brand navbar__title-page",to:"./",children:[Object(x.jsx)("i",{className:"fas fa-paw navbar__logo"}),"Necesito Mascota"]}),Object(x.jsx)("button",{ref:i,className:"navbar__button-bars",type:"button",onClick:function(){a?(s.current.style.display="none",i.current.style.backgroundColor="transparent",n(!1)):(s.current.style.display="flex",i.current.style.backgroundColor="#9b3db3",n(!0))},children:Object(x.jsx)("i",{className:"fas fa-bars text-white menu-bars"})}),Object(x.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown",children:Object(x.jsxs)("div",{className:"navbar__div-navbar",children:[Object(x.jsxs)("ul",{className:"navbar-nav",children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(d.b,{className:"nav-link active","aria-current":"page",to:"./",children:"Home"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(d.b,{className:"nav-link",to:"./",children:"Accesorios"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(d.b,{className:"nav-link",to:"./",children:"Veterinarias"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(d.b,{className:"nav-link",to:"./",children:"Sobre nosotros"})})]}),Object(x.jsxs)("ul",{className:"navbar-nav",children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(d.b,{className:"nav-link active","aria-current":"page",to:"./register",children:"Registro"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(d.b,{className:"nav-link",to:"./login",children:"Iniciar Sesi\xf3n"})})]})]})})]})}),Object(x.jsxs)("div",{className:"modal-options",ref:s,children:[Object(x.jsxs)("ul",{className:"navbar-nav",children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsxs)(d.b,{className:"nav-link active","aria-current":"page",to:"./",children:[Object(x.jsx)("i",{className:"fas fa-home"}),"\xa0 Home"]})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsxs)(d.b,{className:"nav-link",to:"./",children:[Object(x.jsx)("i",{className:"fas fa-bone"})," Accesorios"]})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsxs)(d.b,{className:"nav-link",to:"./",children:[Object(x.jsx)("i",{className:"fas fa-hospital"}),"\xa0 \xa0Veterinarias"]})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsxs)(d.b,{className:"nav-link",to:"./",children:[Object(x.jsx)("i",{className:"fas fa-users"})," Sobre nosotros"]})})]}),Object(x.jsx)("br",{}),Object(x.jsxs)("ul",{className:"navbar-nav",children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsxs)(d.b,{className:"nav-link active","aria-current":"page",to:"./register",children:[Object(x.jsx)("i",{className:"fas fa-user-circle"}),"  \xa0Registro"]})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsxs)(d.b,{className:"nav-link",to:"./login",children:[Object(x.jsx)("i",{className:"fas fa-sign-in-alt"}),"\xa0 Iniciar Sesi\xf3n"]})})]})]})]})},te=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(ee,{}),Object(x.jsx)($,{})]})},ae=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"auth__main",children:Object(x.jsx)("div",{className:"auth__box-container",children:Object(x.jsxs)(j.d,{children:[Object(x.jsx)(j.b,{exact:!0,path:"/",component:te}),Object(x.jsx)(j.b,{exact:!0,path:"/login",component:Q}),Object(x.jsx)(j.b,{exact:!0,path:"/register",component:Z}),Object(x.jsx)(j.a,{to:"/"})]})})})})},ce=a(62),ne=function(e){return{type:R,payload:e}},se=function(e){return{type:V,payload:e}},ie=function(e){return{type:W,payload:e}},re=function(e){return{type:z,payload:e}},le=function(e){return function(t,a){if(void 0!==a().auth.movementConfig.actualCard){var c=a().auth.movementConfig.actualCard.id,n=a().auth.uid,s=[];m.collection("animales").get().then((function(t){t.forEach((function(e){s.push(Object(f.a)({id:e.id},e.data()))}));var a=s.filter((function(e){return e.id===c&&e})),i=[].concat(Object(ce.a)(a[0][e]),[n]);"likes"===e?a[0].likes.includes(n)||m.collection("animales").doc(c).update({likes:i}):"hearts"===e&&(a[0].hearts.includes(n)||m.collection("animales").doc(c).update({hearts:i})),a[0].viewed.includes(n)||m.collection("animales").doc(c).update({viewed:i})}))}}},oe=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth})).cardContainer,a=Object(i.c)((function(e){return e.auth.movementConfig})),c=function(c){var n=function(e,t){var a=e.data,c=e.movement,n=e.setMovement,s=e.maximumValue,i=e.positiveMovement,r=e.divWeight,l=i<s?s:i;return t.style.transform="translate(".concat(l,"px, 0)"),n(Object(f.a)(Object(f.a)({},c),{},{traslatePosition:l})),{data:a,conditionTraslation:l,divWeight:r}}(a,t),s=n.data,i=n.conditionTraslation,r=n.divWeight;e(ne(Object(f.a)(Object(f.a)({},a),{},{actualCard:s[-i/r],positiveMovement:i-r}))),e(se(!1)),e(ie(!1)),e(le("viewed"))},n=function(t){t.target.classList.add("animate"),t.target.className.includes("heart")?(e(le("hearts")),e(se(!0)),e(ie(!0))):t.target.className.includes("thumbs-up")&&(e(le("likes")),c(),e(se(!1)),e(ie(!1)))},s=function(e){e.target.classList.remove("animate")};return Object(x.jsxs)("div",{className:"buttons__button-container flex-row-nowrap",children:[Object(x.jsx)("button",{className:"buttons__btn",onClick:c,children:Object(x.jsx)("i",{className:"fas fa-arrow-alt-circle-left buttons__icon-next"})}),Object(x.jsx)("button",{className:"buttons__btn heart",onClick:n,onAnimationEnd:s,children:Object(x.jsx)("i",{className:"fas fa-heartbeat buttons__icon-heart"})}),Object(x.jsx)("button",{className:"buttons__btn thumbs-up",onClick:n,onAnimationEnd:s,children:Object(x.jsx)("i",{className:"fas fa-thumbs-up buttons__icon-thumbs-up"})})]})},ue=function(e,t){if(1===parseInt(e)){var a="year"===t?"a\xf1o":"mes";return"".concat(e," ").concat(a)}var c="year"===t?"a\xf1os":"meses";return"".concat(e," ").concat(c)},de=function(e){var t=e.pet,a=e.option,c=Object(i.b)(),n=t.id,s=t.petName,r=t.age,u=t.ageId,d=t.telf,j=t.uploadImage;return Object(x.jsxs)("div",{className:"petcard__container-card",children:[Object(x.jsx)("div",{className:"petcard__image-container",children:Object(x.jsx)("img",{className:"petcard__image",src:j,alt:"pet"})}),Object(x.jsxs)("div",{className:"petcard__container-text",children:[Object(x.jsx)("span",{className:"petcard__item-text",children:s}),Object(x.jsx)("span",{className:"petcard__item-text",children:ue(r,u)}),"hearts"===a&&Object(x.jsxs)("span",{className:"petcard__item-text",children:["Telf: ",d]})]}),Object(x.jsx)("button",{className:"petcard__eraser-button",onClick:function(){c(function(e,t){return function(a,c){"pets"===t?m.collection("animales").doc(e).delete().then((function(){return S.a.fire("Borrado!","Tu publicaci\xf3n ha sido borrada!","success")})).catch((function(e){return S.a.fire("Error!","".concat(e,"!"),"error")})):"likes"!==t&&"hearts"!==t||m.collection("animales").get().then((function(e){e.forEach((function(e){s.push(Object(f.a)({id:e.id},e.data()))}));var a=c().auth.uid;s.map(function(){var e=Object(o.a)(l.a.mark((function e(c){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c[t].includes(a)&&(c[t].splice(c[t].indexOf(a),1),"likes"===t?m.collection("animales").doc(c.id).update({likes:c.likes}):m.collection("animales").doc(c.id).update({hearts:c.hearts})),e.abrupt("return",c[t].includes(a)?c:void 0);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}));var n=c().auth.movementConfig,s=[];m.collection("animales").get().then((function(e){e.forEach((function(e){s.push(Object(f.a)({id:e.id},e.data()))})),a(ne(Object(f.a)(Object(f.a)({},n),{},{fullData:s})))}))}}(n,a))},disabled:"pets"!==a,children:"pets"===a?"Elimina":"likes"===a?Object(x.jsx)("i",{className:"fas fa-thumbs-up petcard__ico-thumbsup"}):Object(x.jsx)("i",{className:"fas fa-heartbeat petcard__icon-heart"})})]})},je=function(){var e=Object(i.c)((function(e){return e.auth})),t=e.uid,a=e.name,n=Object(i.c)((function(e){return e.auth.movementConfig})).fullData,s=Object(c.useState)("pets"),r=Object(u.a)(s,2),l=r[0],o=r[1],d=Object(c.useState)([]),j=Object(u.a)(d,2),b=j[0],p=j[1];Object(c.useEffect)((function(){p(n.filter((function(e){return e.uid===t})))}),[n]);var m=function(e){var a=e.target.classList.value;a.includes("pets")?"pets"!==l&&(p(n.filter((function(e){return e.uid===t}))),o("pets")):a.includes("likes")?"likes"!==l&&(p(n.filter((function(e){return e.likes.includes(t)}))),o("likes")):a.includes("hearts")&&"hearts"!==l&&(p(n.filter((function(e){return e.hearts.includes(t)}))),o("hearts"))};return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"profile__modal-container",children:[Object(x.jsxs)("span",{className:"d-block mt-2",children:[Object(x.jsx)("i",{className:"fas fa-user-circle"}),"       "+a.split(" ")[0]]}),Object(x.jsxs)("div",{className:"flex-row-nowrap profile__options mt-2",children:[Object(x.jsx)("div",{className:"pets"===l?"pets profile__option selected":"pets profile__option",onClick:m,children:"My pets"}),Object(x.jsx)("div",{className:"likes"===l?"likes profile__option selected":"likes profile__option",onClick:m,children:"Likes"}),Object(x.jsx)("div",{className:"hearts"===l?"hearts profile__option selected":"hearts profile__option",onClick:m,children:"Hearts"})]}),Object(x.jsx)("div",{className:"profile__container-cards mt-3",children:b.length>0?b.map((function(e){return Object(x.jsx)(de,{pet:e,option:l},e.id)})):Object(x.jsxs)("h3",{children:["No tienes ",l]})})]})})},be=function(){var e=Object(i.b)(),t=Object(c.useState)(!1),a=Object(u.a)(t,2),n=a[0],s=a[1];return Object(x.jsxs)("div",{className:"config__container",children:[Object(x.jsxs)("div",{className:"config__option d-block",onClick:function(){s(!n)},children:[Object(x.jsx)("i",{className:"fas fa-user-circle\r config__icon d-block"}),Object(x.jsx)("h2",{className:"config__text",children:"Mi perfil"})]}),Object(x.jsxs)("div",{className:"config__option d-block",onClick:function(){p.a.auth().signOut(),e({type:F,payload:{}})},children:[Object(x.jsx)("i",{className:"fas fa-times-circle config__icon d-block"}),Object(x.jsx)("h2",{className:"config__text",children:"Cerrar Sesion"})]}),n&&Object(x.jsx)(je,{})]})},pe=function(e){var t=e.screenActive,a=e.setScreenActive,n=Object(c.useRef)(null),s=Object(c.useRef)(null),r=Object(i.c)((function(e){return e.app})).initialStatus,l=Object(i.b)();return Object(x.jsxs)("div",{className:"navapp__container",children:[Object(x.jsx)("i",{className:"fas fa-cog navapp__logo",ref:s,onClick:function(){a("config"!==t?"config":"principal"),l((function(e,t){var a=t().auth.movementConfig,c=[];m.collection("animales").get().then((function(t){t.forEach((function(e){c.push(Object(f.a)({id:e.id},e.data()))})),e(ne(Object(f.a)(Object(f.a)({},a),{},{fullData:c})))}))}))},disabled:!r}),Object(x.jsxs)("h2",{className:"navapp__title",children:["upload"===t?"Publica":"Pet Finder"," ",Object(x.jsx)("i",{className:"fas fa-paw"})]}),Object(x.jsx)("i",{className:"fas fa-cloud-upload-alt navapp__logo link",ref:n,onClick:function(){a("upload"!==t?"upload":"principal")}})]})},me=a(41),he=a.n(me),fe=function(e){var t=e.pet,a=Object(i.b)(),n=Object(i.c)((function(e){return e.app})),s=n.heartVar,r=n.modal;Object(c.useEffect)((function(){a(se(!1)),a(ie(!1))}),[]);var l=t.petName,o=t.age,u=t.ageId,d=t.date,j=t.location,b=t.sex,p=t.sterilized,m=t.vaccinated,h=t.uploadImage,f=t.telf,O=t.link,v=Object(c.useRef)(null),g=Object(c.useRef)(null);Object(c.useEffect)((function(){s&&(r||(a(ie(!0)),_()))}),[s]),Object(c.useEffect)((function(){r?(g.current.style.height="80vh",g.current.style.backgroundColor="#FFFFFFD9",g.current.style.borderRadius="30px 30px 30px 30px"):r||(g.current.style.height="12vh",g.current.style.backgroundColor="#FFFFFF99",g.current.style.borderRadius="0px 0px 30px 30px")}),[r]);var _=function(){r?r&&a(ie(!1)):a(ie(!0))};return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"pets__pet-card",ref:v,children:[Object(x.jsx)("img",{className:"pets__pet-image",src:h,alt:"pets-available"}),Object(x.jsxs)("div",{className:"pets__information",ref:g,onClick:_,children:[Object(x.jsx)("div",{className:"information-item flex-row-nowrap",children:Object(x.jsxs)("span",{className:"information-item pets__each-info",children:[l+", "," ",ue(o,u)]})}),Object(x.jsxs)("div",{className:"flex-row-nowrap",children:[p&&Object(x.jsxs)("div",{className:"pets__each-info pets__more-info me-3",children:[Object(x.jsx)("i",{className:"far fa-check-square"}),"Esterilizado"]}),m&&Object(x.jsxs)("div",{className:"pets__each-info pets__more-info",children:[Object(x.jsx)("i",{className:"far fa-check-square"}),"Vacunado"]})]}),r&&Object(x.jsxs)("div",{className:"pets__container-more-information mt-4 p-2",children:[Object(x.jsxs)("p",{children:["Sexo: ",b]}),Object(x.jsxs)("p",{children:["Ubicaci\xf3n: ",j]}),Object(x.jsxs)("p",{children:["Esterilizado: ",p?"Si":"No"]}),Object(x.jsxs)("p",{children:["Vacunado: ",m?"Si":"No"]}),Object(x.jsxs)("p",{children:["Publicado: ",he()(he()(d).format("YYYYMMDD"),"YYYYMMDD").fromNow()]}),s&&Object(x.jsxs)("div",{className:"pets__container-telf",children:[Object(x.jsxs)("h3",{children:["Tel\xe9fono: ",f," "]}),Object(x.jsx)("a",{href:O,target:"_blank",rel:"noreferrer",children:Object(x.jsx)("u",{children:" Enlace "})})]})]})]})]})})})},Oe=function(e){var t=e.data,a=e.movement,n=e.setMovement,s=Object(i.b)(),r=a.startPosition,d=a.endPosition,j=a.traslatePosition,b=a.divWeight,p=Object(c.useState)(null),h=Object(u.a)(p,2),O=h[0],v=h[1],g=Object(i.c)((function(e){return e.auth})),_=g.uid,N=g.movementConfig;Object(c.useEffect)((function(){null!==t?(v(t.filter((function(e){return!e.viewed.includes(_)}))),s(re(!0))):s(re(!1))}),[t]),Object(c.useEffect)((function(){null!==O&&s(ne({actualCard:t[0],data:O,fullData:t,movement:a,setMovement:n,divWeight:b,maximumValue:O.length*-b,positiveMovement:j-b}))}),[O]);Object(c.useEffect)((function(){if(null!==O){var e=r-d,t=O.length*-b,c=j-b,i=c<t?t:c;e>50&&(n(Object(f.a)(Object(f.a)({},a),{},{traslatePosition:i})),k.current.style.transform="translate(".concat(i,"px, 0)"),s(se(!1)),s(ie(!1)),s(ne(Object(f.a)(Object(f.a)({},N),{},{actualCard:O[-i/b],maximumValue:O.length*-b,positiveMovement:j-2*b}))),s(le("viewed")))}}),[d]);var k=Object(c.useRef)(null);Object(c.useEffect)((function(){var e;s((e=k.current,{type:L,payload:e}))}),[]);return Object(x.jsxs)("div",{className:"petscreen__card-container",ref:k,onTouchStart:function(e){n(Object(f.a)(Object(f.a)({},a),{},{startPosition:e.targetTouches[0].clientX}))},onTouchEnd:function(e){n(Object(f.a)(Object(f.a)({},a),{},{endPosition:e.changedTouches[0].clientX}))},children:[null!==O&&O.map((function(e){return Object(x.jsx)(fe,{pet:e},e.id)})),Object(x.jsxs)("div",{className:"pets__pet-card pets__empty-card",children:[Object(x.jsx)("img",{className:"pets__pet-image",src:"./assets/Fotosperritos/finalPhoto.png",alt:"last-card"}),null===t?Object(x.jsxs)("div",{className:"pet__finish",children:[Object(x.jsx)("span",{children:"Cargando..."}),Object(x.jsx)("span",{className:"mt-3",children:"Por favor, espera"})]}):Object(x.jsxs)("div",{className:"pet__finish",children:[Object(x.jsx)("span",{children:"No hay m\xe1s mascotas..."}),Object(x.jsx)("button",{className:"auth__btn-login d-block mt-3",onClick:function(){s((function(e,t){var a=[];m.collection("animales").get().then((function(e){e.forEach((function(e){a.push(Object(f.a)({id:e.id},e.data()))}));var c=t().auth.uid;a.map(function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.viewed.includes(c)&&(t.viewed.splice(t.viewed.indexOf(c),1),m.collection("animales").doc(t.id).update({viewed:t.viewed})),e.abrupt("return",t.viewed.includes(c)?t:void 0);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),setTimeout((function(){window.location.replace("")}),2e3)}))}))},children:"Pulsa aqu\xed"}),Object(x.jsx)("span",{className:"mt-3",children:"Para ver de nuevo"})]})]})]})},xe=function(){var e=Object(o.a)(l.a.mark((function e(t){var a,c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/ddqpobmi7/upload",(a=new FormData).append("upload_preset","pet-finder"),console.log(t),console.log(t[0]),a.append("file",t[0]),e.prev=6,e.next=9,fetch("https://api.cloudinary.com/v1_1/ddqpobmi7/upload",{method:"POST",body:a});case 9:if(!(c=e.sent).ok){e.next=17;break}return e.next=13,c.json();case 13:return n=e.sent,e.abrupt("return",n.secure_url);case 17:return e.next=19,c.json();case 19:throw e.sent;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(6),console.log(e.t0);case 25:case"end":return e.stop()}}),e,null,[[6,22]])})));return function(t){return e.apply(this,arguments)}}(),ve=function(e){return function(){var t=Object(o.a)(l.a.mark((function t(a,c){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return S.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,onBeforeOpen:function(){S.a.showLoading()}}),t.next=3,xe(e);case 3:return n=t.sent,S.a.close(),t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},ge=function(e){var t=e.setScreenActive,a=Object(c.useRef)(null),n=Object(i.b)(),s=Object(c.useState)("./assets/imgs/uploadFile.jpg"),r=Object(u.a)(s,2),d=r[0],j=r[1],b=function(){var e=Object(o.a)(l.a.mark((function e(t){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=t.target.files)){e.next=6;break}return e.next=4,n(ve(a));case 4:c=e.sent,j(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){v({target:{type:"file",name:"uploadImage",value:d}})}),[d]);var p=C({petName:"",animal:"",sex:"",age:"",ageId:"year",vaccinated:!1,sterilized:!1,location:"",uploadImage:d,telf:"",link:"",likes:[""],hearts:[""],viewed:[""]}),h=Object(u.a)(p,2),O=h[0],v=h[1],g=O.petName,_=O.animal,N=O.sex,k=O.age,w=O.location,E=O.telf,A=O.link,F=Object(i.c)((function(e){return e.app})).msgUploadError,P=function(e,t,a,c,s,i,r){return y.a.isEmpty(e)||y.a.isEmpty(t)||y.a.isEmpty(a)||y.a.isEmpty(c)||y.a.isEmpty(s)||y.a.isEmpty(i)||y.a.isEmpty(r)?(n(B("Falta completar campos")),!1):y.a.escape(e).includes(";")||y.a.escape(s).includes(";")||y.a.escape(i).includes(";")||y.a.escape(r).includes(";")?(n(B("Campos contienen caracteres no admitidos")),!1):(n({type:H}),!0)};return Object(x.jsxs)("form",{className:"upload__container text-white",onSubmit:function(e){var a;e.preventDefault(),P(g,_,N,k,w,E,A)&&(n((a=O,function(){var e=Object(o.a)(l.a.mark((function e(t,c){var n,s,i,r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c().auth,s=n.uid,i=n.name,r=i.split(" ")[0],o=Object(f.a)({date:(new Date).getTime(),uid:s,displayName:r},a),e.next=5,m.collection("animales/").add(o);case 5:e.sent,S.a.fire("Saved","Publicaci\xf3n guardada con \xe9xito","success");case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())),t("principal"))},children:[Object(x.jsxs)("div",{className:"flex-row-nowrap upload__container-name-animal",children:[Object(x.jsxs)("div",{className:"flex-col",children:[Object(x.jsx)("label",{htmlFor:"pet-name",className:"upload__container-name d-block mt-2",children:"Nombre de la Mascota"}),Object(x.jsx)("input",{id:"pet-name",name:"petName",type:"text",className:"input upload__input d-block upload__container-name",minLength:"1",maxLength:"15",autoComplete:"off",value:g,placeholder:"Ej: Toby, Max...",onChange:v,required:!0})]}),Object(x.jsxs)("div",{className:"flex-col",children:[Object(x.jsx)("p",{className:"upload__text-sex mt-2",children:"Animal:"}),Object(x.jsxs)("div",{className:"flex-row-nowrap",children:[Object(x.jsxs)("div",{className:"flex-col me-3",children:[Object(x.jsx)("input",{type:"radio",className:"d-block form-check-input",name:"animal",onChange:v,value:"perro"}),Object(x.jsx)("label",{className:"d-block",children:" Perro"})]}),Object(x.jsxs)("div",{className:"flex-col",children:[Object(x.jsx)("input",{type:"radio",className:"d-block form-check-input",name:"animal",onChange:v,value:"gato"}),Object(x.jsx)("label",{className:"d-block",children:" Gato"})]})]})]})]}),Object(x.jsxs)("div",{className:"upload__container-sex-age mt-3",children:[Object(x.jsxs)("div",{className:"upload__container-sex me-3",children:[Object(x.jsx)("p",{className:"upload__text-sex",children:"Sexo:"}),Object(x.jsxs)("div",{className:"flex-row-nowrap",children:[Object(x.jsxs)("div",{className:"flex-col me-3",children:[Object(x.jsx)("input",{type:"radio",className:"d-block form-check-input",name:"sex",onChange:v,value:"Macho"}),Object(x.jsx)("label",{className:"d-block",children:" Macho"})]}),Object(x.jsxs)("div",{className:"flex-col",children:[Object(x.jsx)("input",{type:"radio",className:"d-block form-check-input",name:"sex",onChange:v,value:"Hembra"}),Object(x.jsx)("label",{className:"hembra",children:" Hembra"})]})]})]}),Object(x.jsxs)("div",{className:"upload__container-age",children:[Object(x.jsx)("label",{htmlFor:"age-input",className:"upload__text-sex d-block",children:"Edad"}),Object(x.jsxs)("div",{className:"flex-row-nowrap",children:[Object(x.jsx)("input",{type:"number",id:"age-input",name:"age",value:k,placeholder:"1",onChange:v,className:"input upload__input me-2",autoComplete:"off",required:!0}),Object(x.jsxs)("select",{id:"select-year",name:"ageId",onChange:v,className:"input upload__input",children:[Object(x.jsx)("option",{value:"year",defaultValue:"year",children:"A\xf1os"}),Object(x.jsx)("option",{value:"month",children:"Meses"})]})]})]})]}),Object(x.jsxs)("div",{className:"d-block mt-3",children:[Object(x.jsx)("input",{type:"checkbox",id:"vacunado",name:"vaccinated",value:"vacunado",onChange:v,className:"form-check-input"}),Object(x.jsx)("label",{className:"ms-2 me-4",children:"Vacunado/a"}),Object(x.jsx)("input",{type:"checkbox",id:"esterilizado",name:"sterilized",value:"esterilizado",onChange:v,className:"form-check-input"}),Object(x.jsx)("label",{className:"ms-2",children:"Esterilizado/a"})]}),Object(x.jsx)("label",{className:"m-top-3 d-block",children:"Ubicaci\xf3n"}),Object(x.jsx)("textarea",{id:"textarea-add-info",className:"input upload__input d-block p-2 ps-3",name:"location",minLength:"5",maxLength:"30",autoComplete:"off",value:w,onChange:v,placeholder:"Ej: Nueva Galicia, Santa Marta",required:!0}),Object(x.jsx)("input",{id:"photo",type:"file",onChange:b,style:{display:"none"},ref:a,required:!0}),Object(x.jsxs)("div",{className:"flex-row-nowrap mt-2",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"photo",className:"m-top-3 d-block",children:"Elige una foto"}),Object(x.jsx)("div",{className:"upload__image",onClick:function(e){a.current.click()},children:Object(x.jsx)("img",{className:"upload__uploaded-image",src:d,alt:"to-upload"})})]}),Object(x.jsxs)("div",{className:"ms-3",children:[Object(x.jsx)("label",{htmlFor:"contact-info",className:"d-block mt-3",children:"Info de Contacto"}),Object(x.jsx)("input",{id:"contact-telf",name:"telf",value:E,type:"text",minLength:"5",maxLength:"15",onChange:v,className:"input upload__input d-block",autoComplete:"off",placeholder:"Ej: 315-448-6666",required:!0}),Object(x.jsx)("input",{id:"contact-link",name:"link",value:A,type:"text",minLength:"5",maxLength:"200",onChange:v,className:"input upload__input d-block",autoComplete:"off",placeholder:"Link Facebook"})]})]}),Object(x.jsx)("button",{type:"submit",className:"btn-upload d-block mt-3",children:"Publicar"}),null!==F&&Object(x.jsx)("span",{children:F})]})},_e=function(){var e=Object(c.useState)("principal"),t=Object(u.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(null),i=Object(u.a)(s,2),r=i[0],l=i[1],o=m.collection("animales"),d=[];Object(c.useEffect)((function(){o.get().then((function(e){e.forEach((function(e){d.push(Object(f.a)({id:e.id},e.data()))})),l(d)}))}),[]);var j=Object(c.useState)({startPosition:0,traslatePosition:0,endPosition:0,divWeight:0}),b=Object(u.a)(j,2),p=b[0],h=b[1],O=Object(c.useRef)(null);return window.addEventListener("resize",(function(e){console.log(e.target.innerWidth),h(Object(f.a)(Object(f.a)({},p),{},{divWeight:e.target.innerWidth}))})),Object(c.useEffect)((function(){if(null!==O){var e=O.current.clientWidth;h(Object(f.a)(Object(f.a)({},p),{},{divWeight:e}))}}),[]),Object(x.jsx)("div",{className:"appscreen__whole-page",children:Object(x.jsxs)("div",{className:"appscreen__app-container",ref:O,children:[Object(x.jsx)(pe,{screenActive:a,setScreenActive:n}),"upload"===a&&Object(x.jsx)(ge,{setScreenActive:n}),"config"===a&&Object(x.jsx)(be,{}),"principal"===a&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(Oe,{data:r,movement:p,setMovement:h}),Object(x.jsx)("br",{}),Object(x.jsx)(oe,{})]}),Object(x.jsxs)("div",{className:"appscreen__side-right",children:[Object(x.jsx)("h1",{className:"appscreen__words",children:"En honor a todos los animalitos que murieron esperando su oportunidad"}),Object(x.jsx)("h3",{className:"appscreen__words",children:"-Mario Cuberos"}),Object(x.jsx)("img",{className:"appscreen__photo",src:"./assets/Fotosperritos/foto-landing.jpg",alt:"poli-santa-marta"})]})]})})},Ne=function(){return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"navapp__container",children:[Object(x.jsx)("i",{className:"fas fa-cog navapp__logo"}),Object(x.jsxs)("h2",{className:"navapp__title",children:["Pet Finder ",Object(x.jsx)("i",{className:"fas fa-paw"})]}),Object(x.jsx)("i",{className:"fas fa-cloud-upload-alt navapp__logo link"})]})})},ke=function(){var e=Object(i.b)(),t=Object(c.useState)(!0),a=Object(u.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(!1),b=Object(u.a)(r,2),m=b[0],h=b[1];return Object(c.useEffect)((function(){p.a.auth().onAuthStateChanged(function(){var t=Object(o.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===a||void 0===a?void 0:a.uid)?(e(X(a.uid,a.displayName)),h(!0)):h(!1),s(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[]),n?Object(x.jsx)(Ne,{}):Object(x.jsx)("div",{id:"container-app",children:Object(x.jsx)(d.a,{children:Object(x.jsx)("div",{children:Object(x.jsxs)(j.d,{children:[Object(x.jsx)(N,{isAutenticated:m,exact:!0,path:"/app",component:_e}),Object(x.jsx)(g,{isAutenticated:m,path:"/",component:ae}),Object(x.jsx)(j.a,{to:"/"})]})})})})},ye=a(25),we=a(61),Ce={currentCard:"",heartUp:!1,initialStatus:!1,msgUploadError:null},Ee="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ye.c,Se=Object(ye.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return{uid:t.payload.uid,name:t.payload.displayName};case F:return{};case M:return Object(f.a)(Object(f.a)({},e),{},{loading:!0});case D:return Object(f.a)(Object(f.a)({},e),{},{loading:!1});case L:return Object(f.a)(Object(f.a)({},e),{},{cardContainer:t.payload});case R:return Object(f.a)(Object(f.a)({},e),{},{movementConfig:t.payload});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(f.a)(Object(f.a)({},e),{},{currentCard:t.payload});case U:return Object(f.a)({},e);case V:return Object(f.a)(Object(f.a)({},e),{},{heartVar:t.payload});case W:return Object(f.a)(Object(f.a)({},e),{},{modal:t.payload});case z:return Object(f.a)(Object(f.a)({},e),{},{initialStatus:t.payload});case q:return Object(f.a)(Object(f.a)({},e),{},{msgUploadError:t.payload});case H:return Object(f.a)(Object(f.a)({},e),{},{msgUploadError:null});default:return e}}}),Ae=Object(ye.d)(Se,Ee(Object(ye.a)(we.a))),Fe=function(){return Object(x.jsx)(i.a,{store:Ae,children:Object(x.jsx)(ke,{})})};a(168);s.a.render(Object(x.jsx)(Fe,{}),document.getElementById("root"))}},[[169,1,2]]]);
//# sourceMappingURL=main.f509d314.chunk.js.map