(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return u});var a=n(0),r=n.n(a),i=n(133),o=n(146),l=n(147),c=n(138),s=n(140);t.default=function(e){var t=e.data;return r.a.createElement(c.a,null,r.a.createElement(s.a,{title:"Blog"}),r.a.createElement("h2",null," / blog"),r.a.createElement("p",{style:{textAlign:"right"}},"Besides the articles below, I also write on"," ",r.a.createElement("a",{href:"https://medium.com/@dcardosods",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.a,{icon:l.b})," Medium"),"."),t.allMarkdownRemark.edges.map(function(e,t){var n=e.node;return r.a.createElement("article",{key:n.fields.slug},r.a.createElement("header",null,r.a.createElement("h3",null,r.a.createElement(i.Link,{to:n.fields.slug},n.frontmatter.title)),r.a.createElement("p",null,r.a.createElement("time",{dateTime:n.frontmatter.date},n.frontmatter.date_formatted))),r.a.createElement("p",null,n.excerpt))}))};var u="489649969"},133:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return C}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(132),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(134),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(28);n.d(t,"parsePath",function(){return d.a});var C=r.a.createContext({}),p=function(e){return r.a.createElement(C.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},134:function(e,t,n){var a;e.exports=(a=n(135))&&a.default||a},135:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(46),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},136:function(e){e.exports={data:{site:{siteMetadata:{title:"Daniel Cardoso DS"}}}}},137:function(e,t,n){var a=n(0);function r(e){return a.createElement("svg",e,[a.createElement("rect",{width:"512",height:"512",fill:"grey",key:0}),a.createElement("path",{d:"M88 51.7292H145.292C164.157 51.7292 179.146 54.2755 190.257 59.3681C201.484 64.3449 211.032 72.0995 218.903 82.6319C234.065 103.234 241.646 130.375 241.646 164.056C241.646 199.009 233.486 225.977 217.167 244.958C200.963 263.824 175.558 273.257 140.951 273.257H88V51.7292ZM140.257 242.007C160.975 242.007 176.368 235.468 186.437 222.389C196.623 209.31 201.715 190.213 201.715 165.097C201.715 111.625 182.444 84.8889 143.903 84.8889H126.715V242.007H140.257Z",fill:"currentColor",key:1}),a.createElement("path",{d:"M347.896 279.681C331.229 279.681 316.299 275.398 303.104 266.833C289.91 258.269 279.493 245.306 271.854 227.944C264.215 210.468 260.396 189.056 260.396 163.708C260.396 136.278 264.794 113.766 273.59 96.1736C282.502 78.581 293.787 65.8495 307.444 57.9792C321.218 49.9931 335.801 46 351.194 46C367.977 46 382.502 50.456 394.771 59.3681C407.039 68.2801 416.53 80.6644 423.243 96.5208L394.424 110.583L391.646 111.972L389.91 108.326C390.257 107.285 390.431 106.185 390.431 105.028C390.431 102.597 389.042 99.2986 386.264 95.1319C378.278 83.7894 366.935 78.1181 352.236 78.1181C335.106 78.1181 322.375 85.5255 314.042 100.34C305.824 115.155 301.715 135.699 301.715 161.972C301.715 178.06 303.741 192.644 307.792 205.722C311.958 218.685 317.745 228.928 325.153 236.451C332.676 243.975 341.125 247.736 350.5 247.736C365.546 247.736 378.914 237.377 390.604 216.66L420.812 236.278C412.479 250.514 402.178 261.336 389.91 268.743C377.641 276.035 363.637 279.681 347.896 279.681Z",fill:"currentColor",key:2}),a.createElement("path",{d:"M230.172 465.378C221.577 465.378 213.509 463.01 205.966 458.274C198.424 453.362 192.284 446.083 187.548 436.436C182.812 426.788 180.444 415.124 180.444 401.442C180.444 387.585 182.9 376.008 187.812 366.711C192.723 357.415 199.038 350.574 206.756 346.188C214.473 341.628 222.63 339.348 231.225 339.348C239.294 339.348 246.31 341.189 252.274 344.873C258.413 348.556 263.061 353.643 266.219 360.133V287.778H286.215V289.62C285.163 290.672 284.461 291.812 284.11 293.04C283.935 294.268 283.847 296.373 283.847 299.355L284.11 444.066C284.11 448.276 284.198 451.784 284.373 454.59C284.724 457.221 285.513 459.94 286.741 462.747H268.06C266.833 459.94 266.043 457.221 265.692 454.59C265.517 451.784 265.429 448.276 265.429 444.066C261.57 450.731 256.571 455.993 250.432 459.852C244.468 463.536 237.715 465.378 230.172 465.378ZM233.067 448.802C243.942 448.802 251.923 444.504 257.01 435.909C262.097 427.314 264.64 416.001 264.64 401.968C264.64 387.76 261.833 376.359 256.22 367.764C250.783 359.169 242.539 354.871 231.488 354.871C220.964 354.871 212.895 358.818 207.282 366.711C201.669 374.429 198.862 385.041 198.862 398.548C198.862 413.983 201.756 426.262 207.545 435.383C213.509 444.329 222.016 448.802 233.067 448.802Z",fill:"currentColor",key:3}),a.createElement("path",{d:"M365.148 465.378C343.924 465.378 326.822 458.449 313.842 444.592L323.314 428.016L324.366 425.648L326.208 426.7C326.383 427.227 326.559 428.104 326.734 429.332C327.085 430.559 327.524 431.787 328.05 433.015C328.751 434.068 329.804 435.12 331.207 436.172C341.03 444.592 353.221 448.802 367.78 448.802C377.427 448.802 385.496 446.083 391.986 440.645C398.476 435.208 401.721 428.542 401.721 420.649C401.721 415.562 400.668 411.352 398.564 408.02C396.634 404.511 393.038 401.091 387.776 397.758C382.514 394.425 374.62 390.479 364.096 385.918C347.959 379.604 336.382 372.412 329.365 364.343C322.524 356.274 319.104 347.241 319.104 337.243C319.104 324.964 323.577 315.141 332.523 307.774C341.468 300.407 353.659 296.724 369.095 296.724C378.041 296.724 386.373 298.565 394.091 302.249C401.984 305.757 408.825 310.756 414.613 317.246L402.773 333.033L401.195 331.98C401.195 331.63 401.019 330.84 400.668 329.612C400.493 328.385 400.055 327.244 399.353 326.192C398.651 324.964 397.687 323.736 396.459 322.508C392.424 318.649 388.039 315.931 383.303 314.352C378.567 312.773 372.866 311.984 366.201 311.984C357.781 311.984 350.94 314.352 345.678 319.088C340.591 323.649 338.048 329.262 338.048 335.927C338.048 341.014 339.1 345.487 341.205 349.346C343.486 353.029 347.52 356.713 353.308 360.396C359.097 363.905 367.516 367.851 378.567 372.236C394.178 378.727 404.966 385.392 410.93 392.233C416.894 399.074 419.876 407.669 419.876 418.018C419.876 426.087 417.858 433.717 413.824 440.908C409.965 448.1 403.913 453.976 395.669 458.537C387.425 463.097 377.252 465.378 365.148 465.378Z",fill:"currentColor",key:4})])}r.defaultProps={width:"512",height:"512",viewBox:"0 0 512 512",fill:"none"},e.exports=r,r.default=r},138:function(e,t,n){"use strict";var a=n(136),r=n(0),i=n.n(r),o=n(4),l=n.n(o),c=n(133),s=n(142),u=n.n(s),d=n(143),C=n.n(d);C.a.overrideThemeStyles=function(e,t){var n=e.rhythm;return{body:{maxWidth:"960px",margin:"0 auto",marginTop:n(1.5),marginBottom:n(.5),padding:"0 "+n(1)}}};var p=new u.a(C.a),m=n(137),f=n.n(m),g=function(e){e.siteTitle;return i.a.createElement("header",{style:{borderBottom:"1px solid grey"}},i.a.createElement(c.Link,{to:"/",style:{background:"none",textShadow:"none",color:p.options.headerColor}},i.a.createElement(f.a,{style:{width:"48px",height:"48px",verticalAlign:"super"}}),i.a.createElement("h1",{style:{padding:"8px",display:"inline-block",fontSize:"37px",marginBottom:"1px"}},i.a.createElement("div",null,"Daniel Cardoso"),i.a.createElement("div",{style:{textAlign:"right",fontSize:"28px",marginTop:"-8px"}},"dS"))))};g.propTypes={siteTitle:l.a.string},g.defaultProps={siteTitle:""};var y=g,h=function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(y,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",null,t))},data:a})};h.propTypes={children:l.a.node.isRequired};t.a=h},140:function(e,t,n){"use strict";var a=n(141),r=n(0),i=n.n(r),o=n(4),l=n.n(o),c=n(144),s=n.n(c),u=n(133);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,l=e.title;return i.a.createElement(u.StaticQuery,{query:C,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:l},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var C="1025518380"},141:function(e){e.exports={data:{site:{siteMetadata:{title:"Daniel Cardoso DS",description:"Daniel's personal website & blog",author:"@dcardosods"}}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-ce8b5338bd0652c739e7.js.map