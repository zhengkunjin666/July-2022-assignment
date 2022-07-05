class fpr{
    constructor(props){
        this.state={
            id: props.id,
            index: null,
            duration: 500,
            transLateX: null,
            defaultLength: null,
            slideWidth: [],
            isLock: false,
            pageX: null,
            mouseIsLock: true,
        };
        this._$ = selector => document.querySelector(selector);
        this._array = elems => Array.prototype.slice.call(elems);
        this._cloneNode = elem => elem.cloneNode(true);
        this._appendChild = (container,node) => container.appendChild(node);
        this._prepend = (container,node) => container.prepend(node);
        this._init();
    }
    _init(){
        this._clone();
    }
    _clone(){
        let $=this._$;
        let fprWrapper=$(`#${this.state.id}`);
        let slideArr=this._array(fprWrapper.children);
        this.state.slideWidth.push(slideArr.map(function(elem){
            return elem.offsetWidth;
        }));
        this.state.defaultLength=slideArr.length;
        let firstSlide=this._cloneNode(slideArr[0]);
        let lastSlide=this._cloneNode(slideArr[slideArr.length-1]);
        this._appendChild(fprWrapper,firstSlide);
        this._prepend(fprWrapper,lastSlide);
        this.state.transLateX=-fprWrapper.firstChild.offsetWidth;
        let index=this.state.index+1;
        this.goIndex(index);
        let fpr=fprWrapper.parentNode;
        this.onEventLister(fpr,'click','fpr-prev',this.fprPrev.bind(this))
        this.onEventLister(fpr,'click','fpr-next',this.fprNext.bind(this))
        this.onEventLister(fpr,'mousedown','fpr-slide',this.handleMouseDown.bind(this))
        this.onEventLister(fpr,'mousemove','fpr-slide',this.handleMousemove.bind(this))
        this.onEventLister(fpr,'mouseup','fpr-slide',this.handleMouseUp.bind(this))
    }
    goIndex(index){
        let fprDuration=this.state.duration;
        let beginTranslateX=this.state.transLateX;
        let slideWidthArr=this.state.slideWidth[0];
        let endTranslateX=0;
        if(index<=slideWidthArr.length){
            for(let i=0;i<index;i++){
                endTranslateX += -slideWidthArr[i];
            }
        }else{
            for(let i=0;i<slideWidthArr.length;i++){
                endTranslateX += -slideWidthArr[i];
            }
            endTranslateX=endTranslateX-slideWidthArr[0];
        }
        if(this.state.isLock){
            return 
        }else{
            this.state.isLock=true;
        }
        let $=this._$;
        let fprWrapper=$(`#${this.state.id}`);
        let that=this;
        this.animateTo(beginTranslateX,endTranslateX,fprDuration,function(value){
            fprWrapper.style.transform=`translateX(${value}px)`
        },function(value){
            let slideLength=that.state.defaultLength;
            if(index === 0){
                index=slideLength;
                for(let i=0;i<index;i++){
                    value += -slideWidthArr[i];
                }
            };
            if(index === slideLength+1){
                index=1;
                value=-slideWidthArr[0];
            }
            fprWrapper.style.transform=`translateX(${value}px)`;
            that.state.index=index;
            that.state.transLateX=value;
            that.state.isLock=false;
        }) 
    }
    animateTo(begin,end,duration,changeCallback,finishCallback){
        let startTime=Date.now();
        requestAnimationFrame(function update(){
            let dateNow=Date.now();
            let time=dateNow-startTime;
            let value=(end-begin) * time / duration + begin;
            typeof changeCallback === 'function' && changeCallback(value);
            if(startTime+duration > dateNow){
                requestAnimationFrame(update);
            }else{
                typeof finishCallback === 'function' && finishCallback(end);
            }
        });
    }
    onEventLister(parentNode,action,childClassName,callback){
        parentNode.addEventListener(action,function(event){
            event.target.className.indexOf(childClassName) >= 0 && callback(event);
        })
    }
    fprPrev(){
        let index=this.state.index;
        this.goIndex(index-1);
    }
    fprNext(){
        let index=this.state.index;
        this.goIndex(index+1);
    }
    handleMouseDown(event){
        this.state.pageX=event.pageX;
        this.state.mouseIsLock=false;
    }
    handleMousemove(event){
         if(!this.state.mouseIsLock){
            let transLateX=event.pageX-this.state.pageX;
            let index=this.state.index;
            if(transLateX>10){
                this.goIndex(index-1);
            }
            else if(transLateX<-10){
                this.goIndex(index+1)
            }
        }
    }
    handleMouseUp(){
        this.state.mouseIsLock=true;
    }
}
const PAGE={
    data: {
        fpr_1: null,
        fpr_2: null,
        fpr_3: null,
        fpr_4: null,
    },
    init: function(){
        this.initFpr();
    },
    initFpr: function(){
        PAGE.data.fpr_1 = new fpr({
            id: 'fpr-wrapper',
        });
        PAGE.data.fpr_2 = new fpr({
            id: 'fpr-wrapper1',
        });
        PAGE.data.fpr_3 = new fpr({
            id: 'fpr-wrapper2',
        });
        PAGE.data.fpr_4 = new fpr({
            id: 'fpr-wrapper3',
        })
    }
}
PAGE.init();
// const PAGE={
//     data: {
//         duration: 500,
//         transLateX: [],
//         index: [],
//         defaultLength: [],
//         slideWidth: [],
//         isLock: [],
//         pageX: null,
//         dataId: null,
//         mouseIsLock: true,
//     },
//     init: function(){
//         this.bind();
//         this.clone();
//     },
//     bind: function(){
//         let fprPrev=document.getElementsByClassName('fpr-prev');
//         for(i=0;i<fprPrev.length;i++){
//             fprPrev[i].addEventListener('click',PAGE.fprPrev);
//         };
//         let fprNext=document.getElementsByClassName('fpr-next');
//         for(i=0;i<fprNext.length;i++){
//             fprNext[i].addEventListener('click',PAGE.fprNext);
//         }
//         let fprWrapper=document.getElementsByClassName('fpr-wrapper');
//         for(i=0;i<fprWrapper.length;i++){
//             PAGE.onEventLister(fprWrapper[i],'mousedown','fpr-slide',PAGE.handleMouseDown);
//             PAGE.onEventLister(fprWrapper[i],'mousemove','fpr-slide',PAGE.handleMousemove);
//             PAGE.onEventLister(fprWrapper[i],'mouseup','fpr-slide',PAGE.handleMouseUp);
//         }
//     },
//     clone: function(){
//         let fprWapper=document.getElementsByClassName('fpr-wrapper');
//         let fprWapperArr= Array.prototype.slice.call(fprWapper);
//         fprWapperArr.map(function(elem,i){
//             elem.setAttribute('data-id',i)
//             let id=i;
//             let slideArr= Array.prototype.slice.call(elem.children);
//             PAGE.data.slideWidth.push(slideArr.map(function(elem){
//                 return slideWidth=elem.offsetWidth;
//             }));
//             PAGE.data.defaultLength.push(slideArr.length);
//             PAGE.data.isLock.push(false);
//             let firstSlide=slideArr[0].cloneNode(true);
//             let lastSlide=slideArr[slideArr.length-1].cloneNode(true);
//             elem.appendChild(firstSlide);
//             elem.prepend(lastSlide);
//             PAGE.data.transLateX.push(-elem.firstChild.offsetWidth);
//             PAGE.data.index.push(null);
//             let index=PAGE.data.index[id]+1;
//             PAGE.goIndex(id,index);
//         })
//     },
//     goIndex: function(id,index){
//         let fprDuration=PAGE.data.duration;
//         let beginTranslateX=PAGE.data.transLateX[id];
//         let slideWidthArr=PAGE.data.slideWidth[id];
//         let endTranslateX=0;
//         if(index<=slideWidthArr.length){
//             for(i=0;i<index;i++){
//                 endTranslateX += -slideWidthArr[i];
//             }
//         }else{
//             for(i=0;i<slideWidthArr.length;i++){
//                 endTranslateX += -slideWidthArr[i];
//             }
//             endTranslateX=endTranslateX-slideWidthArr[0];
//         }
//         let fprWrapper=document.getElementsByClassName('fpr-wrapper');
//         if(PAGE.data.isLock[id]){
//             return 
//         }else{
//             PAGE.data.isLock[id]=true;
//         }
//         PAGE.animateTo(beginTranslateX,endTranslateX,fprDuration,function(value){
//             fprWrapper[id].style.transform=`translateX(${value}px)`
//         },function(value){
//             let slideLength=PAGE.data.defaultLength[id];
//             if(index === 0){
//                 index=slideLength;
//                 for(i=0;i<index;i++){
//                     value += -slideWidthArr[i];
//                 }
//             };
//             if(index === slideLength+1){
//                 index=1;
//                 value=-slideWidthArr[0];
//             }
//             fprWrapper[id].style.transform=`translateX(${value}px)`;
//             PAGE.data.index[id]=index;
//             PAGE.data.transLateX[id]=value;
//             PAGE.data.isLock[id]=false;
//         })
//     },
//     animateTo: function(begin,end,duration,changeCallback,finishCallback){
//         let startTime=Date.now();
//         requestAnimationFrame(function update(){
//             let dateNow=Date.now();
//             let time=dateNow-startTime;
//             let value=PAGE.linear(time,begin,end,duration,);
//             typeof changeCallback === 'function' && changeCallback(value);
//             if(startTime+duration > dateNow){
//                 requestAnimationFrame(update);
//             }else{
//                 typeof finishCallback === 'function' && finishCallback(end);
//             }
//         })
//     },
//     linear: function(time,begin,end,duration){
//         return (end-begin) * time / duration + begin;
//     },
//     fprPrev: function(event){
//         let id=event.target.parentNode.firstElementChild.dataset.id;
//         index=PAGE.data.index[id];
//         index=Number(index);
//         PAGE.goIndex(id,index-1);
//     },
//     fprNext: function(event){
//         let id=event.target.parentNode.firstElementChild.dataset.id;
//         index=PAGE.data.index[id];
//         index=Number(index);
//         PAGE.goIndex(id,index+1);
//     },
    // onEventLister: function(parentNode,action,childClassName,callback){
    //     parentNode.addEventListener(action,function(event){
    //         event.target.className.indexOf(childClassName) >= 0 && callback(event);
    //     })
    // },
//     handleMouseDown: function(event){
//         PAGE.data.pageX=event.pageX;
//         id=event.currentTarget.parentNode.firstElementChild.dataset.id;
//         PAGE.data.dataId=id;
//         PAGE.data.mouseIsLock=false;
//     },
//     handleMousemove: function(event){
//          if(!PAGE.data.mouseIsLock){
//             transLateX=event.pageX-PAGE.data.pageX;
//             id=PAGE.data.dataId;
//             index=PAGE.data.index[id];
//             if(transLateX>10){
//                 PAGE.goIndex(id,index-1);
//             }
//             else if(transLateX<-10){
//                 PAGE.goIndex(id,index+1)
//             }
//         }
//     },
//     handleMouseUp: function(){
//         PAGE.data.mouseIsLock=true;
//     }
// };
// PAGE.init();