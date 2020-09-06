function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
        var r = window.location.search.substr(1).match(reg);
        if (r!=null) return unescape(r[2]); return null;

    }
function is_mobile() {  
                var sUserAgent = navigator.userAgent.toLowerCase();  
                var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";  
                var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";  
                var bIsMidp = sUserAgent.match(/midp/i) == "midp";  
                var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";  
                var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";  
                var bIsAndroid = sUserAgent.match(/android/i) == "android";  
                var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";  
                var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";  
                if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){  
                    return false;
                } 
                return true;
}


    function is_weixn(){
        var ua = navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i)=="micromessenger") {
            return true;
        } else {
            return false;
        }
    }
    function is_weibo(){
        var ua = navigator.userAgent.toLowerCase();
        if(ua.match(/Weibo/i)=="weibo") {
            return true;
        } else {
            return false;
        }
    }
    function addClass(el,css){
        el.className = el.className+' '+css;
    }
    function removeClass(el,css){
        el.className = el.className.replace(css,'');
    }
