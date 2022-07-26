const PAGE={
    init: function(){
        this.bind();
    },
    bind: function(){
        let orderBtn=document.getElementById('order-btn');
        orderBtn.addEventListener('click',this.handleInsert);
        let phone=document.getElementById('phone');
        phone.addEventListener('focus',this.errorText);
    },
    handleInsert: async function(){
        let name=document.getElementById('name').value;
        let phone=document.getElementById('phone').value;
        let source=location.search.split("=")[1];
        if(!name || !phone){
            alert('缺少参数!')
            return
        }else if(!PAGE.isMobile(phone)){
            let errorText=document.getElementById('errorText');
            errorText.innerText="手机格式不正确";
            return
        }else{
            let insertFetch=await fetch('/admin/clue',{
                method: 'POST',
                body: JSON.stringify({
                    name: name,
                    phone: phone,
                    source: source,
                }),
                headers: {
                    'Content-Type':'application/json',
                },
            }).then(response => response.json());
            if(insertFetch.code === 200){
                alert(insertFetch.data.msg)
                location.reload();
            }else{
                alert("预约失败！")
                // console.log(insertFetch.data);
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