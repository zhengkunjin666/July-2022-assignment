const PAGE={
    init: function(){
        this.bind();
    },
    bind: function(){
        window.addEventListener('load',this.highlight);
        window.addEventListener('load',this.parseTime);
        let table=document.getElementById('table');
        this.onEventlister(table,'click','show-icon',this.filterShow);
        let filterList=document.getElementById('filter-list');
        filterList.addEventListener('mouseleave',this.filterHidden);
        this.onEventlister(filterList,'click','filter-item',this.handlershow);
        let filterBtn=document.getElementById('filter-btn');
        filterBtn.addEventListener('click',this.handlerFilter);
        this.onEventlister(table,'click','clue-orderby',this.handlerOrderby);
        this.onEventlister(table,'click','track',this.recordShow);
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
    parseTime: function(){
        let time=document.getElementsByClassName('time');
        for(let i=0;i<time.length;i++){
            dateTime=time[i].innerText;
            let parseTime=PAGE.formatDate(dateTime);
            time[i].innerText=parseTime;
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
    filterShow: function(){
        let filterList=document.getElementById('filter-list');
        filterList.style.display="block";
    },
    filterHidden: function(){
        let filterList=document.getElementById('filter-list');
        filterList.style.display="none";
    },
    handlershow: function(event){
        let dataId=event.target.dataset.id;
        let showText=document.getElementById('show-text');
        let filterItem=event.target.innerText;
        showText.dataset.id=dataId;
        showText.innerText=filterItem;
    },
    handlerFilter: function(){
        let showText=document.getElementById('show-text').innerText;
        let filterInput=document.getElementById('filter-input').value.trim();
        let dataId=document.getElementById('show-text').dataset.id;
        url=`/admin/clue/?showText=${showText}&dataId=${dataId}&filterInput=${filterInput}`;
        location.assign(url);
    },
    handlerOrderby: function(event){
        let column=event.target.parentNode.dataset.column;
        let order=event.target.dataset.order;
        let orderText=event.target.innerText;
        url=`/admin/clue/?column=${column}&order=${order}&orderText=${orderText}`;
        location.assign(url);
    },
    recordShow: function(event){
        let id=event.target.dataset.id;
        let url=`/admin/clue/record?id=${id}`;
        location.assign(url);
    }
};
PAGE.init();