const PAGE={
    init: function(){
        this.bind();
    },
    bind: function(){
        window.addEventListener('resize',this.resizeRem);
        window.addEventListener('pageshow',this.resizeRem);
        let getTel=document.getElementById('getTel');
        getTel.addEventListener('focus',this.errorText);
        getTel.addEventListener('blur',this.showBanner);
        let button=document.getElementById('getBtn');
        button.addEventListener('touchend',this.FetchsubTel);
        let playA=document.getElementById('playA');
        playA.addEventListener('touchend',this.videoA);
        let closeV=document.getElementById('closeV');
        closeV.addEventListener('touchend',this.closeVideo);
        let getBanner=document.getElementById('getBanner');
        getBanner.addEventListener('touchend',this.getBanner);
    },
    resizeRem: function(){
        let docElement=document.documentElement;
        let width=docElement.getBoundingClientRect().width;
        let rem=width/10;
        docElement.style.fontSize=rem+'px';
    },
    errorText: function(){
        let flexbottom=document.getElementById('flexbottom');
        flexbottom.style.display="none";
        let errorText=document.getElementById('errorText');
        errorText.innerText="";
    },
    showBanner: function(){
        let flexbottom=document.getElementById('flexbottom');
        flexbottom.style.display="block";
    },
    FetchsubTel: async function(){
        let getTel=document.getElementById('getTel');
        let errorText=document.getElementById('errorText');
        let pageone=document.getElementById('pageone');
        let pagetwo=document.getElementById('pagetwo');
        let telval=getTel.value.trim();
        
        if(telval===''){
            errorText.innerText="请填写手机号";
        }else if(!PAGE.isMobile(telval)){
            errorText.innerText="手机格式不正确";
        }else{
            let postApi="https://api.aitschool.com/api/web/test/mobile";
            await fetch(postApi,{
                method: 'POST',
                body: JSON.stringify({
                    mobile: telval
                }),
                headers: {
                    'Content-Type':'application/json',
                },
                credentials: 'include',
            })
            .then(response => response.json())
            .then(data=>{
                if(data.error_code===0){
                    pageone.style.display="none";
                    pagetwo.style.display="block";
                }else{
                    alert("完了~网络出问题了，刷新下再试试吧！");
                }
            })
        }
    },
    isMobile: function(val){
        return /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(val);
    },
    videoA: function(){
        let vMask=document.getElementById('vMask');
        vMask.style.display="block";
        let videoA=document.getElementById('videoA');
        videoA.play();
    },
    closeVideo: function(){
        let vMask=document.getElementById('vMask');
        vMask.style.display="none";
        let videoA=document.getElementById('videoA');
        videoA.pause();
    },
    getBanner: function(){
        let docElement=document.documentElement;
        let begin=docElement.scrollTop;
        let end=0;
        let duration=800;
        PAGE.animateTo(begin,end,duration,function(value){
            docElement.scrollTop=value;
        },function(value){
            docElement.scrollTop=value;
        })
    },
    animateTo: function(begin,end,duration,changCallback,finishCallback){
        let startTime=Date.now();
        requestAnimationFrame(function update(){
            let dataNow=Date.now();
            let time=dataNow-startTime;
            let value=(end-begin) * time /duration + begin;
            typeof changCallback === 'function' && changCallback(value);
            if(startTime+duration > dataNow){
                requestAnimationFrame(update);
            }else{
                typeof finishCallback === 'function' && finishCallback(end);
            }
        })
    }
};
PAGE.init();