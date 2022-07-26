const PAGE={
    init: function(){
        this.bind();
    },
    bind: function(){
        window.addEventListener('load',this.highlight);
        window.addEventListener('load',this.parseTime);
        let selectContainer=document.getElementById('select-container');
        selectContainer.addEventListener('mouseleave',this.selectHidden);
        this.onEventlister(selectContainer,'click','select-item',this.show);
        window.addEventListener('load',this.scorllBottom);
        let save=document.getElementById('save');
        save.addEventListener('click',this.handlerUpdate);
        let add=document.getElementById('add');
        add.addEventListener('click',this.handlerInsert);
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
    parseTime: function(){
        let time=document.getElementsByClassName('time');
        for(let i=0;i<time.length;i++){
            dateTime=time[i].innerText;
            let parseTime=PAGE.formatDate(dateTime);
            time[i].innerText=`创建时间：${parseTime}`;
        }
    },
    formatDate: function(time,format='YY/MM/DD hh:mm:ss'){
        var date = new Date(time);
        var year = date.getFullYear(),
            month = date.getMonth()+1,
            day = date.getDate(),
            hour = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds();
        var preArr = new Array(10).fill(0).map((elem, index)=>{
            return '0'+index;
        });
        var newTime = format.replace(/YY/g,year)
                            .replace(/MM/g,preArr[month]||month)
                            .replace(/DD/g,preArr[day]||day)
                            .replace(/hh/g,preArr[hour]||hour)
                            .replace(/mm/g,preArr[min]||min)
                            .replace(/ss/g,preArr[sec]||sec);
        return newTime;			
    },
    selectHidden: function(){
        let selectList=document.getElementById('select-list');
        selectList.style.display="none";
    },
    onEventlister: function(parentNode,action,childClassName,callback){
        parentNode.addEventListener(action,function(e){
            e.target.className.indexOf(childClassName)>=0 && callback(e);
        })
    },
    show: function(event){
        let selectItem=event.target;
        let show=document.getElementById('show');
        show.innerHTML=selectItem.innerText;
    },
    scorllBottom: function(){
        let recordContent=document.getElementById('record-content');
        let scrollHeight=recordContent.scrollHeight;
        recordContent.scrollTop=scrollHeight;
    },
    handlerUpdate: function(event){
        let id=event.target.dataset.id;
        let state=document.getElementById('state').value.trim();
        let salesperson=document.getElementById('show').innerText;
        let saveTextarea=document.getElementById('save-textarea').value;
        let csrf=document.getElementById('csrf').value;
        if(!state || !salesperson || !saveTextarea){
            let message=confirm("缺少参数，确定要保存吗？");
            if(message){
                save();
                return;
            }else{
                return;
            }
        }
        save();
        async function save(){
            let UpdateFetch=await fetch('/admin/clue',{
                method: 'PUT',
                body: JSON.stringify({
                    id: id,
                    state: state,
                    salesperson: salesperson,
                    comment: saveTextarea,
                    csrf: csrf,
                }),
                headers:{
                    'content-type': 'application/json'
                }
            }).then(response => response.json())
            if(UpdateFetch.code===200){
                alert("保存成功！")
                location.assign(`/admin/clue/record?id=${id}`);
            }else{
                alert("保存失败！");
                console.log(UpdateFetch.data);
            }
        }
    },
    handlerInsert: async function(event){
        let id=event.target.dataset.id;
        let addTextarea=document.getElementById('add-textarea').value;
        let csrf=document.getElementById('csrf').value;
        let time=new Date();
        if(!addTextarea){
            alert("缺少参数！")
            return
        }
        let InsertFetch=await fetch('/admin/clue/record',{
            method: 'POST',
            body: JSON.stringify({
                id: id,
                content: addTextarea,
                time: time,
                csrf: csrf,
            }),
            headers:{
                'content-type': 'application/json'
            }
        }).then(response => response.json())
        if(InsertFetch.code===200){
            alert("添加成功！");
            location.assign(`/admin/clue/record?id=${id}`);
        }else{
            alert("添加失败！");
            // console.log(InsertFetch.data);
        }
    }
};
PAGE.init();