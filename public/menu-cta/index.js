!function(){"use strict";function e(e,n){for(var i=0;i<n.length;i++){var l=n[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,a(l.key),l)}}function a(e){var a=function(e,a){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,a||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==typeof a?a:String(a)}const n=e=>0===(e=String(e)).length?"":e.replace(/[&<>'"]/g,(e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&apos;",'"':"&quot;"}[e]))),i=()=>{let e=new URLSearchParams(window.location.search);return e.get("sid")?e.get("sid"):""},l=e=>{let a=e+"=",n=decodeURIComponent(document.cookie).split(";");for(let e=0;e<n.length;e++){let i=n[e];for(;" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(a))return i.substring(a.length,i.length)}return""};l("kenzap_api_key"),l("locale")&&l("locale"),(()=>{let e=localStorage.hasOwnProperty("header")&&localStorage.hasOwnProperty("header-version")?localStorage.getItem("header-version"):0,a=window.location.hostname+"/"+i()+"/"+l("locale");a!=l("check")&&(e=0,console.log("refresh")),((e,a,n)=>{let i="";if(n){let e=new Date;e.setTime(e.getTime()+24*n*60*60*1e3),i=";expires="+e.toUTCString()}document.cookie=e+"="+(escape(a)||"")+i+";path=/;domain=.kenzap.cloud"})("check",a,5)})(),l("kenzap_token"),i();var t,r,o,c=(t=function e(i){var l,t,r,o=this;!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,e),l=this,r=function(){document.querySelector("#content").insertAdjacentHTML("beforeend",'\n        <div id="'.concat(n(o.data.id),'" class="kcoPOW ').concat(n(o.data.classes),'" style="').concat(o.data.c.section,'">\n          <div class="kp-menu-1 kp-trans- kp-sticky" style="').concat(o.data.c.section,'">\n            <div class="container" style="').concat(o.data.c.container,'">\n              <div class="kp-content">\n                <div class="main-nav">\n                  <div class="logo">\n                    <a href="#"><img src="').concat(o.data.logo.value,'" alt="logo"></a>\n                  </div>\n                  <div class="kp-nav">\n                    <ul class="sf-menu">\n                      <li>\n                        <a href="#">Upcoming</a>\n                        <ul>\n                          <li><a href="#">Sport Events</a></li>\n                          <li><a href="#">Past Events</a></li>\n                          <li><a href="#">BWM Golf</a></li>\n                          <li><a href="#">Performance</a></li>\n                          <li><a href="#">About</a></li>\n                          <li><a href="#">News</a></li>\n                        </ul>\n                      </li>\n                      \n                      <li><a href="#">Event Calendar</a></li>\n                      <li>\n                        <a href="#">Seach</a>\n                        <ul>\n                          <li><a href="#">Maroon 5</a></li>\n                          <li><a href="#">Beach Volley</a></li>\n                          <li><a href="#">Guitar Vibes</a></li>\n                          <li><a href="#">Artist Page</a></li>\n                          <li><a href="#">Home v3</a></li>\n                          <li><a href="#">Home v2</a></li>\n                          <li><a href="#">Checkout</a></li>\n                        </ul>\n                      </li>\n                      <li><a href="#">Gallery</a></li>\n                      <li class="cta"><a href="#">Contact Us</a></li>\n                    </ul>\n                    \n                    <div class="mobile-menu">\n                      <a class="mobile-cta" href="#">Contact Us</a>\n                      <a class="mobile-btn"href="#"><span></span></a>\n                    </div>\n                  </div>\n                </div>\n                <div class="mobile-nav">\n                  <ul>\n                    <li>\n                      <a href="#">Upcoming</a>\n                      <ul>\n                        <li><a href="#">Sport Events</a></li>\n                        <li><a href="#">Past Events</a></li>\n                        <li><a href="#">BWM Golf</a></li>\n                        <li><a href="#">Performance</a></li>\n                        <li><a href="#">About</a></li>\n                        <li><a href="#">News</a></li>\n                      </ul>\n                    </li>\n                    \n                    <li><a href="#">Event Calendar</a></li>\n                    <li>\n                      <a href="#">Seach</a>\n                      <ul>\n                        <li><a href="#">Maroon 5</a></li>\n                        <li><a href="#">Beach Volley</a></li>\n                        <li><a href="#">Guitar Vibes</a></li>\n                        <li><a href="#">Artist Page</a></li>\n                        <li><a href="#">Home v3</a></li>\n                        <li><a href="#">Home v2</a></li>\n                        <li><a href="#">Checkout</a></li>\n                      </ul>\n                    </li>\n                    <li><a href="#">Gallery</a></li>\n                    <li><a href="#">Contact</a></li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        \n        '))},(t=a(t="render"))in l?Object.defineProperty(l,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):l[t]=r,this.data=i,this.render()},r&&e(t.prototype,r),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t);window.kcoPOW=c}();
