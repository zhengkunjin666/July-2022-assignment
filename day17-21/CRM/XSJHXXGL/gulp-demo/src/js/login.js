const PAGE={
    init: function(){
        this.bind();
    },
    bind: function(){
        let loginBtn=document.getElementById('login-btn');
        loginBtn.addEventListener('click',this.handlerLogin);
        let phone=document.getElementById('phone');
        phone.addEventListener('focus',this.errorText);
    },
    handlerLogin: async function(){
        let phone=document.getElementById('phone').value;
        let password=document.getElementById('password').value;
        let csrf=document.getElementById('csrf').value;
        if(!password || !phone){
            alert('缺少参数!')
            return
        }else if(!PAGE.isMobile(phone)){
            let errorText=document.getElementById('errorText');
            errorText.innerText="手机格式不正确";
            return
        }else{
            let loginFetch=await fetch('/admin/login',{
                method: 'POST',
                body: JSON.stringify({
                    phone: phone,
                    password: password,
                    csrf: csrf,
                }),
                headers: {
                    'Content-Type':'application/json',
                },
            }).then(response => response.json());
            if(loginFetch.code === 200){
                alert(loginFetch.data.msg)
                location.reload();
            }else{
                alert(loginFetch.data.msg)
                console.log(loginFetch.data);
            }
        }
    },
    isMobile: function(val){
        return /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(val);
    },
    errorText: function(){
        let errorText=document.getElementById('errorText');
        errorText.innerText="";
    },
};
PAGE.init();