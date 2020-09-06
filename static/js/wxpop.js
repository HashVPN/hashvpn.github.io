    function closeCover(){
        removeClass(document.querySelector('.popup'),'show');
        addClass(document.querySelector('.popup'),'hide');
        removeClass(document.querySelector('.weixin-app-download-mask'),'show');
        addClass(document.querySelector('.weixin-app-download-mask'),'hide');
        return false;
    }
    if(is_weixn()||is_weibo()){
        var tags = document.getElementsByTagName('a');
        for (var i=0;i<tags.length; i++) {
            if(tags[i].className=="btn_pc"||tags[i].className=="btn_an"||tags[i].className=="btn_ip"){
                tags[i].addEventListener('click',function(e){
                    e.preventDefault();
                    removeClass(document.querySelector('.popup'),'hide');
                    addClass(document.querySelector('.popup'),'show');
                    removeClass(document.querySelector('.weixin-app-download-mask'),'hide');
                    addClass(document.querySelector('.weixin-app-download-mask'),'show');
                    return false;
                });
            }
        }
    }
/*
     if(navigator.platform.indexOf('Win32')!=-1){ 
        
     }else{
        addClass(document.querySelector('.down_pc'),'hide');
     }
*/
if(is_mobile()){
    addClass(document.querySelector('.btn_pc'),'hide');
}