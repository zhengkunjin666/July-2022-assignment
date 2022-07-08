// const PAGE={
//     data: {
//         TOKEN_API:'https://api.aitschool.com/api/file/qiniu-token',
//         QINIU_API: 'http://up-z0.qiniup.com',
//         UPLOAD_API :'https://api.aitschool.com/api/file/qiniu-store'
//     },
//     init: function(){
//         this.bind();
//     },
//     bind: function(){
//         let button=document.getElementById('submit');
//         button.addEventListener('click',this.XHRuploadImage);
//     },
//     XHRuploadImage: function(){
//         let files=document.getElementById('upload').files;
//         if(files.length==0){
//             console.log('缺少文件！');
//             return
//         };
//         for(let i=0;i<files.length;i++){
//             let TOKENURL=`${PAGE.data.TOKEN_API}?file_name=${files[i].name}`;
//             PAGE._XHR('GET',TOKENURL,{},(res) => {
//                 let formData={};
//                 formData['file']=files[i];
//                 formData['key']=res.data.key;
//                 formData['token']=res.data.token;
//                 formData['fname']=files[i].name;
//                 formData['x.name']=files[i].name;
//                 formData['form-data']=true;
//                 PAGE._XHR('POST',PAGE.data.QINIU_API,formData,(res) => {
//                     PAGE._XHR('POST',PAGE.data.UPLOAD_API,{
//                         file_name: res.fname,
//                         path: res.key,
//                     },(res) => {
//                         console.log(res)
//                         if(res.error_code===0){
//                             alert('提交成功！');
//                         }else{
//                             alert('提交失败！');
//                         }
//                     })
//                 })
//             });
//         }
//     },
//     _XHR: function(method,url,datas,success,progress,error,csrf){
//         let xhr=new XMLHttpRequest();
//         xhr.open(method,url,true);
//         if(csrf){
//             xhr.withCredentials=true;
//             xhr.setRequestHeader('X-CSRF-TOKEN',csrf)
//         }

//         let formData;
//         if(datas['form-data']){
//             formData=new FormData();
//             for (let key in datas){
//                 formData.append(key,datas[key]);
//             }
//             datas=formData;
//         }else{
//             formData=JSON.stringify(datas);
//             xhr.setRequestHeader('content-type','application/json');
//         }

//         xhr.upload.onprogress=function(event){
//             typeof progress === 'function' && progress(event);
//         }

//         xhr.onerror=function(xhr,status,text){
//             typeof error === 'function' && error(xhr,status,text);
//         }

//         xhr.onreadystatechange=function(response){
//             if(xhr.readyState ===4 && xhr.status === 200 && xhr.responseText != ""){
//                 typeof success === 'function' && success(JSON.parse(xhr.response));
//             }else if(xhr.status != 200 && xhr.responseText){
//                 typeof error === 'function' && error(xhr,xhr.status,xhr.responseText);
//             }
//         }

//         xhr.send(formData);
//     }
// };
// PAGE.init();



// const PAGE={
//     data: {
//         TOKEN_API:'https://api.aitschool.com/api/file/qiniu-token',
//         QINIU_API: 'http://up-z0.qiniup.com',
//         UPLOAD_API :'https://api.aitschool.com/api/file/qiniu-store'
//     },
//     init: function(){
//         this.bind();
//     },
//     bind: function(){
//         let button=document.getElementById('submit');
//         button.addEventListener('click',this.AXIOSuploadImage);
//     },
//     AXIOSuploadImage: function(){
//         let files=document.getElementById('upload').files;
//         if(files.length==0){
//             console.log("缺少文件！");
//             return
//         };
//         for(let i=0;i<files.length;i++){
//             axios.get(PAGE.data.TOKEN_API,{
//                 params: {
//                     file_name: files[i].name,
//                 }
//             })
//             .then(res => {
//                 let formData=new FormData();
//                 formData.append('key',res.data.data.key);
//                 formData.append('token',res.data.data.token);
//                 // formData.append('fname',files[i].name);
//                 // formData.append('x.name',files[i].name);
//                 formData.append('file',files[i]);
//                 return axios.post(PAGE.data.QINIU_API,formData,{
//                     headers: {
//                         'Content-Type': 'multiple/form-data'
//                     }
//                 })
//             })
//             .then(res => {
//                 return axios.post(PAGE.data.UPLOAD_API,{
//                     file_name: res.data.fname,
//                     path: res.data.key
//                 })
//             })
//             .then(res => {
//                 console.log(res)
//                 if(res.data.error_code===0){
//                     alert("提交成功！");
//                 }else{
//                     alert("提交失败！");
//                 }
//             })
//         }
//     }
// }
// PAGE.init();


// 四种方法中最好的方法：
const PAGE={
    data: {
        TOKEN_API:'https://api.aitschool.com/api/file/qiniu-token',
        QINIU_API: 'http://up-z0.qiniup.com',
        UPLOAD_API :'https://api.aitschool.com/api/file/qiniu-store'
    },
    init: function(){
        this.bind();
    },
    bind: function(){
        let button=document.getElementById('submit');
        button.addEventListener('click',this.FETCHuploadImage);
    },
    FETCHuploadImage: async function(){
        let files=document.getElementById('upload').files;
        if(files.length==0){
            console.log("缺少文件");
            return
        };
        for(let i=0;i<files.length;i++){
            let TOKENURL=`${PAGE.data.TOKEN_API}?file_name=${files[i].name}`
            let tokenFetch=await fetch(TOKENURL).then(res => res.json());
            let formData=new FormData();
            formData.append('key',tokenFetch.data.key);
            formData.append('token',tokenFetch.data.token);
            formData.append('file',files[i]);

            let qiniuFetch=await fetch(PAGE.data.QINIU_API,{
                method: 'POST',
                body: formData
            }).then(res => res.json());

            let uploadFetch=await fetch(PAGE.data.UPLOAD_API,{
                method: 'POST',
                body: JSON.stringify({
                    file_name: qiniuFetch.fname,
                    path: qiniuFetch.key
                }),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(res => res.json());
            console.log(uploadFetch)
            if(uploadFetch.error_code===0){
                alert("提交成功！");
            }else{
                alert("提交失败");
            }
        }
    }
};
PAGE.init();



// const PAGE={
//     data: {
//         TOKEN_API:'https://api.aitschool.com/api/file/qiniu-token',
//         QINIU_API: 'http://up-z0.qiniup.com',
//         UPLOAD_API :'https://api.aitschool.com/api/file/qiniu-store'
//     },
//     init: function(){
//         this.bind();
//     },
//     bind: function(){
//         let button=document.getElementById('submit');
//         button.addEventListener('click',this.AJAXuploadImage);
//     },
//     AJAXuploadImage: async function(){
//         let files=document.getElementById('upload').files;
//         if(files.length==0){
//             console.log("缺少文件！");
//         };
//         for(let i=0;i<files.length;i++){
//             let TOKENURL=`${PAGE.data.TOKEN_API}?file_name=${files[i].name}`;
//             let tokenAjax=await $.ajax({
//                 type: 'GET',
//                 url: TOKENURL,
//             });
//             let formData=new FormData();
//             formData.append('key',tokenAjax.data.key);
//             formData.append('token',tokenAjax.data.token);
//             formData.append('file',files[i]);

//             let qiniuAjax=await $.ajax({
//                 type: 'POST',
//                 url: PAGE.data.QINIU_API,
//                 data: formData,
//                 processData: false,  // 告诉jQuery不要去处理发送的数据
//                 contentType: false,  // 告诉jQuery不要去设置Content-Type请求头
//             });
            
//             let uploadAjax=await $.ajax({
//                 type: 'POST',
//                 url: PAGE.data.UPLOAD_API,
//                 data: JSON.stringify({
//                     file_name: qiniuAjax.fname,
//                     path: qiniuAjax.key
//                 }),
//                 headers: {
//                     'content-type': 'application/json'
//                 },
//             });
//             console.log(uploadAjax);
//             if(uploadAjax.error_code===0){
//                 alert("提交成功！");
//             }else{
//                 alert("提交失败！");
//             }
//         }
//     }
// };
// PAGE.init();