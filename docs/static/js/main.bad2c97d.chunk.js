(this["webpackJsonpreact-boilerplate"]=this["webpackJsonpreact-boilerplate"]||[]).push([[0],{58:function(e,n,t){},59:function(e,n,t){},60:function(e,n,t){"use strict";t.r(n);var r,o,c,a,i,s,u,l,d,b,p,f,g,j,m,h,x,O,v=t(0),w=t(22),y=t.n(w),k=t(3),_=t(2),S=Object(_.b)(r||(r=Object(k.a)(["\n\n    *, *::before, *::after {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n    }\n\n    html, body, #root {\n        min-height: 100vh;\n    }\n\n    #root {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    body {\n        overflow-x: hidden;\n        font-family: 'Poppins', sans-serif;\n        font-weight: 500;\n        background-color: #FAFAFB;\n    }\n    \n    ul {\n        list-style: none;\n    }\n\n    a {\n        text-decoration: none;\n        color: inherit;\n    }\n\n    img {\n        max-width: 100%;\n    }\n"]))),z=t(5),D=function(){var e=Object(v.useState)(!1),n=Object(z.a)(e,2),t=n[0],r=n[1],o=Object(v.useRef)();return Object(v.useEffect)((function(){if(o.current){var e=o.current.classList;e.add("fadeIn"),setTimeout((function(){e.remove("fadeIn"),e.add("fadeOut")}),2500),setTimeout((function(){r(!1)}),3250)}}),[t,o]),[o,t,r]},E=t(7),F=t(29),U=_.c.div(o||(o=Object(k.a)(["\n    display: grid;\n    grid-gap: 2rem;\n    width: min(75%, 600px);\n    background: #fff;\n    padding: 2rem;\n    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);\n"]))),C=_.c.p(c||(c=Object(k.a)(["\n    font-size: ",";\n    font-weight: ",";\n    color: ",";\n    text-align:  ",";\n"])),(function(e){var n=e.fz,t=e.theme;return n||t.fz[400]}),(function(e){return e.fw||"500"}),(function(e){var n=e.color,t=e.theme;return n||t.colors.dark}),(function(e){return e.align||"center"})),I=_.c.img.attrs((function(e){return{src:e.src,alt:e.alt}}))(a||(a=Object(k.a)(["\n    width: ",";\n    ",";\n    color: ",";\n"])),(function(e){return e.size||"auto"}),(function(e){return"center"===e.align&&"margin: 0 auto;"}),(function(e){return e.color||"black"})),A=_.c.button(i||(i=Object(k.a)(["\n    display: block;\n    background: ",";\n    color: white;\n    border-radius: 7px;\n    border: none;\n    padding: .8rem 1rem;\n    margin: 0 auto;\n    cursor: pointer;\n    transition: background .3s ease;\n\n    &:hover {\n        background: ",";\n    }\n"])),(function(e){return e.theme.colors.blue}),(function(e){return e.theme.colors.dark_blue})),B=_.c.div(s||(s=Object(k.a)(["\n    position: fixed;\n    left: 50%;\n    bottom: 20px;\n    transform: translateX( -50% );\n    padding: .8rem 1.5rem;\n    background: ",";\n    color: white;\n    border-radius: 5px;\n    text-align: center;\n    opacity: 0;\n"])),(function(e){var n=e.theme;return e.bg_color||n.colors.success})),P=(Object(_.c)(U)(u||(u=Object(k.a)(["\n    display: grid;\n    grid-gap: 2rem;\n"]))),_.c.section(l||(l=Object(k.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    gap: 4rem;\n    background: ",";\n    border-radius: 10px;\n    border: 2px dashed ",";\n    padding: 2.8rem 1.4rem;\n    transition: border .3s ease;\n"])),(function(e){return e.theme.colors.soft_light_blue}),(function(e){var n=e.isDragActive,t=e.theme;return n?t.colors.green:t.colors.light_blue}))),R=Object(_.c)(C)(d||(d=Object(k.a)(["\n    color: ",";\n    transition: color .3s ease;\n"])),(function(e){var n=e.isDragActive,t=e.theme;return n?t.colors.dark:t.colors.light_gray})),T=_.c.input.attrs((function(e){return{type:"file"}}))(b||(b=Object(k.a)(["\n    display: none;\n"]))),J={colors:{blue:"#2F80ED",dark_blue:"#146DE1",light_blue:"#A1C6F7",green:"#219653",success:"#36d37a",error:"#f33800",soft_light_blue:"#F6F8FB",soft_gray:"#E0E0E0",dark:"#4F4F4F",gray:"#828282",light_gray:"#BDBDBD"},fz:{200:"clamp(13px, 2.5vw, 18px)",300:"clamp(15px, 2.8vw, 23px)",400:"clamp(18px, 3.2vw, 26px)",500:"clamp(20px, 3.6vw, 32px)",600:"clamp(30px, 4.8vw, 42px)",700:"clamp(38px, 6vw, 55px)",800:"clamp(50px, 8vw, 70px)",900:"clamp(65px, 10vw, 100px)",1e3:"clamp(70px, 13vw, 120px)"},mediaQueries:{above768:"(min-width: 768px)"}},L=t(1),K=["jpeg","jpg","png","svg"],M=function(e){var n=e.setSectionShown,t=e.image,r=e.setImage,o=e.setError,c=Object(v.useRef)(),a=Object(v.useState)(null),i=Object(z.a)(a,2),s=i[0],u=i[1],l=D(),d=Object(z.a)(l,3),b=d[0],p=d[1],f=d[2],g=Object(v.useCallback)((function(e){r(e[0])}),[r]),j=Object(F.a)({onDrop:g}),m=j.getRootProps,h=j.getInputProps,x=j.isDragActive;return Object(v.useEffect)((function(){if(t){var e=t.name.split("."),r=e[e.length-1];if(!K.includes(r))return f(!0),void u(r);o(null),n("uploading")}}),[t,n,o,f]),Object(L.jsxs)(U,{children:[Object(L.jsx)(C,{as:"h2",children:"Upload your image"}),Object(L.jsx)(C,{fz:J.fz[300],color:J.colors.gray,children:"File should be Jpeg, Png..."}),Object(L.jsxs)(P,Object(E.a)(Object(E.a)({},m()),{},{isDragActive:x,children:[Object(L.jsx)("input",Object(E.a)({},h())),Object(L.jsx)(I,{src:"images/image.svg",alt:"Mountain with clouds drawing",size:"35%"}),Object(L.jsx)(R,{fz:J.fz[300],color:J.colors.light_gray,isDragActive:x,children:"Drag & Drop your image here"})]})),Object(L.jsx)(C,{fz:J.fz[300],color:J.colors.light_gray,children:"Or"}),Object(L.jsx)(T,{ref:c,onChange:function(e){r(e.target.files[0])}}),Object(L.jsx)(A,{onClick:function(){return c.current.click()},children:"Choose a file"}),p&&Object(L.jsxs)(B,{ref:b,bg_color:J.colors.error,children:[s," is not a valid extension!"]})]})},N=t(11),Q=t.n(N),X=t(27),q=t(28),G=t.n(q),H=_.c.div(p||(p=Object(k.a)(["\n    position: relative;\n    background: #f2f2f2;\n    border-radius: 30px;\n    height: 8px;\n"]))),V=_.c.div(f||(f=Object(k.a)(["\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    min-width: 5%;\n    width: ",";\n    max-width: 100%;\n    border-radius: 4px;\n    background: ",";\n    \n"])),(function(e){return e.width||"5%"}),(function(e){return e.theme.colors.blue})),W=function(e){var n=e.image,t=e.setSectionShown,r=e.setImageUrl,o=e.setError,c=e.setImage,a=Object(v.useRef)(),i=Object(v.useState)(0),s=Object(z.a)(i,2),u=s[0],l=s[1];return Object(v.useEffect)((function(){(function(){var e=Object(X.a)(Q.a.mark((function e(){var a,i;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("file",n),a.append("upload_preset","react_image_uploader"),e.next=5,G.a.post("https://api.cloudinary.com/v1_1/dalpbowt0/image/upload",a,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(e){var n=e.loaded,t=e.total;l(100*n/t)}});case 5:if("OK"===(i=e.sent).statusText){e.next=11;break}return c(null),o("There was a mistake uploading your image..."),t("uploader"),e.abrupt("return");case 11:o(""),t("uploaded"),r(i.data.secure_url);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n,r,t,o,c]),Object(L.jsxs)(U,{children:[Object(L.jsx)(C,{align:"left",fz:J.fz[300],children:"Uploading..."}),Object(L.jsx)(H,{children:Object(L.jsx)(V,{ref:a,width:u+"%"})})]})},Y=_.c.i.attrs((function(){return{className:"fas fa-check-circle"}}))(g||(g=Object(k.a)(["\n    font-size: ",";\n    color: ",";\n    margin: 0 auto;\n"])),(function(e){return e.theme.fz[700]}),(function(e){return e.theme.colors.green})),Z=_.c.section(j||(j=Object(k.a)(["\n    background: url( ",";\n     )\n                no-repeat center center / cover;\n    height: 15rem;\n    border-radius: 15px;\n"])),(function(e){return e.imageUrl})),$=_.c.div(m||(m=Object(k.a)(["\n    position: relative;\n"]))),ee=_.c.input.attrs((function(e){return{value:e.imageUrl,disabled:!0}}))(h||(h=Object(k.a)(["\n    width: 100%;\n    padding: .9rem 1rem;\n    border-radius: 15px;\n    background: ",";\n    border: 1px solid ",";\n    color: ",";\n    font-size: ",";\n    outline: none;\n"])),(function(e){return e.theme.colors.soft_light_blue}),(function(e){return e.theme.colors.soft_gray}),(function(e){return e.theme.colors.dark}),(function(e){return e.theme.fz[200]})),ne=Object(_.c)(A)(x||(x=Object(k.a)(["\n    position: absolute;\n    top: 2px;\n    bottom: 2px;\n    right: 2px;\n    padding: 0 1rem;\n    border-radius: 3px 15px 15px 3px;\n"]))),te=_.c.p(O||(O=Object(k.a)(["\n    position: absolute;\n    top: 20px;\n    left: 20px;\n    text-decoration: underline;\n    cursor: pointer;\n"]))),re=function(e){var n=e.imageUrl,t=e.setSectionShown,r=e.setImage,o=Object(v.useRef)(),c=D(),a=Object(z.a)(c,3),i=a[0],s=a[1],u=a[2];return Object(L.jsxs)(U,{children:[Object(L.jsx)(te,{onClick:function(){t("uploader"),r(null)},children:"Upload another image!"}),Object(L.jsx)(Y,{}),Object(L.jsx)(C,{as:"h2",children:"Uploaded Successfully!"}),Object(L.jsx)(Z,{imageUrl:n}),Object(L.jsxs)($,{children:[Object(L.jsx)(ee,{imageUrl:n,ref:o}),Object(L.jsx)(ne,{onClick:function(){o.current.disabled=!1,o.current.select(),document.execCommand("copy"),o.current.disabled=!0,u(!0)},children:"Copy Link"})]}),s&&Object(L.jsx)(B,{ref:i,children:"Copied to Clipboard!"})]})},oe=function(){var e=D(),n=Object(z.a)(e,3),t=n[0],r=n[1],o=n[2],c=Object(v.useState)("uploader"),a=Object(z.a)(c,2),i=a[0],s=a[1],u=Object(v.useState)(null),l=Object(z.a)(u,2),d=l[0],b=l[1],p=Object(v.useState)(""),f=Object(z.a)(p,2),g=f[0],j=f[1],m=Object(v.useState)(""),h=Object(z.a)(m,2),x=h[0],O=h[1];return Object(v.useEffect)((function(){x&&o(!0)}),[x,o]),Object(L.jsxs)(_.a,{theme:J,children:["uploader"===i&&Object(L.jsx)(M,{setSectionShown:s,image:d,setImage:b,setError:O}),"uploading"===i&&Object(L.jsx)(W,{image:d,setImage:b,setSectionShown:s,setImageUrl:j,setError:O}),"uploaded"===i&&Object(L.jsx)(re,{imageUrl:g,setSectionShown:s,setImage:b}),r&&Object(L.jsx)(B,{ref:t,bg_color:J.colors.error,children:x})]})};t(58),t(59);y.a.render(Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(S,{}),Object(L.jsx)(oe,{})]}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.bad2c97d.chunk.js.map