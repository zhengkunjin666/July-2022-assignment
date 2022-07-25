const PAGE={
    init: function(){
        this.bind();
    },
    bind: function(){
        window.addEventListener('load',this.highlight);
        let table=document.getElementById('table');
        this.onEventlister(table,'click','update',this.editShow);
        this.onEventlister(table,'click','delete',this.handlerDelete);
    },
    onEventlister: function(parentNode,action,childClassName,callback){
        parentNode.addEventListener(action,function(e){
            e.target.className.indexOf(childClassName)>=0 && callback(e);
        })
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
    editShow: function(event){
        let id=event.target.dataset.id;
        let url=`/admin/user/edit?id=${id}`;
        location.assign(url);
    },
    handlerDelete: async function(event){
        let id=event.target.dataset.id;
        let csrf=document.getElementById('csrf').value;
        if(id){
            let message=confirm("删除后数据将不可恢复，确定要删除吗？");
            if(message){
                let DeleteFetch=await fetch('/admin/user',{
                    method: 'DELETE',
                    body: JSON.stringify({
                        id: id,
                        csrf: csrf,
                    }),
                    headers:{
                        'content-type': 'application/json'
                    }
                }).then(response => response.json())
                if(DeleteFetch.code===200){
                    alert("删除成功！");
                    location.reload();
                }else{
                    alert("删除失败！");
                    console.log(DeleteFetch.data);
                }
            }
        }
    },
};
PAGE.init();