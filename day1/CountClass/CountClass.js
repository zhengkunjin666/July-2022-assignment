class Count{
    constructor(props){
        this.state={
            id: props.id,
            value: props.value,
            change: props.change,
            _countNumberInput: null,
        };
        this._$ = selector => document.querySelector(selector);
        this._createElement = type => document.createElement(type);
        this._setContent = (elem,content) => elem.textContent=content;
        this._appendChild = (container,node) => container.appendChild(node);
        this._addHTML();
    }
    _addHTML(){
        let $=this._$;
        let idContainer=$(`#${this.state.id}`);
        let countNumberContent=this._createElement('div');
        let countNumberBtnDecrease=this._createElement('span');
        let countNumberBtnIncrease=this._createElement('span');
        let countNumberInput=this._createElement('input');
        countNumberContent.setAttribute("class","count-number-content");
        countNumberBtnDecrease.setAttribute("class","count-number-btn_decrease");
        countNumberBtnIncrease.setAttribute("class","count-number-btn_increase");
        countNumberInput.setAttribute("class","count-number-input");
        countNumberInput.setAttribute("type","text");
        countNumberInput.value=this.state.value;
        countNumberInput.disabled=true;
        this._setContent(countNumberBtnDecrease,'-');
        this._setContent(countNumberBtnIncrease,'+');
        this._appendChild(countNumberContent,countNumberInput);
        this._appendChild(idContainer,countNumberBtnDecrease);
        this._appendChild(idContainer,countNumberBtnIncrease);
        this._appendChild(idContainer,countNumberContent);
        this.state._countNumberInput=countNumberInput;
        countNumberBtnDecrease.addEventListener('click',this.decrease.bind(this));
        countNumberBtnIncrease.addEventListener('click',this.increase.bind(this));
    }
    setValue(val){
        if(Math.sign(val) == -1){
            console.log("输入的参数不能为负数")
            return
        }
        let isNumber=(typeof val === "number" && !window.isNaN(val));
        if(isNumber){
            this.state.value=val;
            this.state._countNumberInput.value=val;
            typeof this.state.change === 'function' && this.state.change(val);
        }else{
            console.log("输入的参数不是数字！");
        }
    }
    getValue(){
        return this.state.value;
    }
    decrease(){
        let value=this.state.value-1;
        this.setValue(value);
    }
    increase(){
        let value=this.state.value+1;
        this.setValue(value);
    }
};
const PAGE={
    data: {
        count_1: null,
        count_2: null,
        count_3: null,
        count_4: null,
    },
    init: function(){
        this.initCount();
    },
    initCount: function(){
        PAGE.data.count_1=new Count({
            id: "count_1",
            value: 1,
            change: function(val){
                console.log(val);
            }
        });
        PAGE.data.count_2=new Count({
            id: "count_2",
            value: -10,
            change: function(val){
                console.log(val);
            }
        });
        PAGE.data.count_3=new Count({
            id: "count_3",
            value: 10,
            change: function(val){
                console.log(val);
            }
        });
        PAGE.data.count_4=new Count({
            id: "count_4",
            value: "ddfdsfjdskf",
            change: function(val){
                console.log(val);
            }
        })
    }
};
PAGE.init();