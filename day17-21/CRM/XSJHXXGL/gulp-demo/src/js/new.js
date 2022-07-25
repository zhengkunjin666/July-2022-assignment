const PAGE={
    init: function(){
        this.bind();
    },
    bind: function(){
        window.addEventListener('load',this.highlight);
        let newSubmit=document.getElementById('new-submit');
        newSubmit.addEventListener('click',this.handlerInsert);
        let newPhone=document.getElementById('new-phone');
        newPhone.addEventListener('focus',this.errorText);
    },
    highlight: function(){
        let href=window.location.href;
        let navItem=document.getElementsByClassName('nav-item');
        for(let i=0;i<navItem.length;i++){
            let id=navItem[i].dataset.id;
            if(href.indexOf(id) != -1){
                navItem[i].className="nav-item active";
            }
        }
    },
    handlerInsert: async function(){
        let name=document.getElementById('new-name').value.trim();
        let phone=document.getElementById('new-phone').value.trim();
        let password=document.getElementById('new-password').value.trim();
        let role=document.getElementById('new-role').value.trim();
        let csrf=document.getElementById('csrf').value;
        if(!name || !phone || !password || !role){
            alert("缺少参数！")
            return
        };
        if(!PAGE.isMobile(phone)){
            let errorText=document.getElementById('errorText');
            errorText.innerText="手机格式不正确";
            return
        };
        let InsertFetch=await fetch('/admin/user',{
            method: 'POST',
            body: JSON.stringify({
                name: name,
                phone: phone,
                password: password,
                role: role,
                csrf: csrf,
            }),
            headers:{
                'content-type': 'application/json'
            }
        }).then(response => response.json())
        if(InsertFetch.code===200){
            let message=confirm("新增成功，确定返回用户列表吗？");
            if(message){
                location.assign("/admin/user");
            }
        }else{
            alert("新增失败！");
            console.log(InsertFetch.data);
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