!function(e){"use strict";function t(e,t,a){return(e?"https://web.whatsapp.com/send":"https://api.whatsapp.com/send")+"?phone="+encodeURIComponent(t)+"&text="+encodeURIComponent(a||"")}e(function(){var a,n=e(".whatsappme"),s=n.find(".whatsappme__badge"),o=n.data("settings");try{localStorage.setItem("test",1),localStorage.removeItem("test"),a=localStorage}catch(e){a={_data:{},setItem:function(e,t){this._data[e]=String(t)},getItem:function(e){return this._data.hasOwnProperty(e)?this._data[e]:null}}}if(void 0===o)try{o=JSON.parse(n.attr("data-settings"))}catch(e){o=void 0}n.length&&o&&o.telephone&&function(){var i,p,c=!!navigator.userAgent.match(/Android|iPhone|BlackBerry|IEMobile|Opera Mini/i),m=1e3*o.button_delay,r=1e3*o.message_delay,h=!!o.message_text,l=o.whatsapp_web&&!c,g=!1,u=new Image;u.src="data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA",u.onload=u.onerror=function(){2!==u.height&&n.addClass("nowebp")};var d=(a.getItem("whatsappme_hashes")||"").split(",").filter(Boolean),w="yes"==a.getItem("whatsappme_visited"),f=h?function(e){for(var t=0,a=1;t<e.length;t++)a=Math.imul(a+e.charCodeAt(t)|0,2654435761);return(a^a>>>17)>>>0}(o.message_text).toString():"no_cta",_=d.indexOf(f)>-1;if(a.setItem("whatsappme_visited","yes"),!o.mobile_only||c){var b="whatsappme--show";_||h&&r&&!o.message_badge&&w||(b+=" whatsappme--tooltip"),setTimeout(function(){n.addClass(b)},m),h&&!_&&r&&(o.message_badge?p=setTimeout(function(){s.addClass("whatsappme__badge--in")},m+r):w&&(p=setTimeout(v,m+r)))}h&&!c&&e(".whatsappme__button",n).mouseenter(function(){g||(i=setTimeout(v,1500))}).mouseleave(function(){clearTimeout(i)});function v(){n.addClass("whatsappme--dialog"),g=!0,clearTimeout(p),o.message_badge&&s.hasClass("whatsappme__badge--in")&&s.toggleClass("whatsappme__badge--in whatsappme__badge--out"),e(document).trigger("whatsappme:show")}function A(){n.removeClass("whatsappme--dialog whatsappme--tooltip"),g=!1,_||(d.push(f),a.setItem("whatsappme_hashes",d.join(",")),_=!0),e(document).trigger("whatsappme:hide")}e(".whatsappme__button",n).click(function(){if(h&&!g)v();else{var a={link:t(l,o.telephone,o.message_send)},n=new RegExp("^https?://(wa.me|(api|web|chat).whatsapp.com|"+location.hostname.replace(".",".")+")/.*","i");g&&A(),e(document).trigger("whatsappme:open",[a,o]),n.test(a.link)?(!function(e){"object"==typeof dataLayer&&dataLayer.push({event:"WhatsAppMe",eventAction:"click",eventLabel:e});if("function"==typeof gtag)gtag("event","click",{event_category:"WhatsAppMe",event_label:e,transport_type:"beacon"});else if("function"==typeof ga&&"function"==typeof ga.getAll){ga("set","transport","beacon");var t=ga.getAll();t.forEach(function(t){t.send("event","WhatsAppMe","click",e)})}"function"==typeof fbq&&fbq("trackCustom","WhatsAppMe",{eventAction:"click",eventLabel:e})}(a.link),window.open(a.link,"whatsappme")):console.error("WAme: the link doesn't seem safe, it must point to the current domain or whatsapp.com")}}),e(".whatsappme__close",n).click(A)}()}),Math.imul=Math.imul||function(e,t){var a=65535&e,n=65535&t;return a*n+((e>>>16&65535)*n+a*(t>>>16&65535)<<16>>>0)|0}}(jQuery);