const Models=require('../models/models');
const Clue=new Models.Clue;
const User=new Models.User;
const Record=new Models.Record;


const clueController={
    show: async function(req,res,next){
        if(!res.locals.isLogin){
            res.redirect('/admin/login');
            return
        }
        try{
            let clues=await Clue.all();
            let column=req.query.column;
            let order=req.query.order;
            let orderText=req.query.orderText;
            res.locals.column=column;
            res.locals.order=order;
            res.locals.orderText=orderText;
            let showText=req.query.showText;
            let dataId=req.query.dataId;
            let filterInput=req.query.filterInput;
            filterInput=`%${filterInput}%`;
            res.locals.showText=showText;
            res.locals.dataId=dataId;
            res.locals.filterInput=filterInput;
            if(!res.locals.isAdmin){
                let id=res.locals.userInfo.id;
                let name=res.locals.userInfo.name;
                let salesperson=name+"（id："+id+"）";
                clues=await Clue.select({"salesperson":salesperson});
                if(column && order){
                    clues=await Clue.orderBy({"salesperson":salesperson},column,order);
                };
                if(dataId && filterInput){
                    clues=await Clue.filter({"salesperson":salesperson},dataId,filterInput);
                }
            }else{
                if(column && order){
                    clues=await Clue.orderByAll(column,order);
                };
                if(dataId && filterInput){
                    clues=await Clue.filterAll(dataId,filterInput);
                }
            }
            res.locals.clues=clues;
            res.render('show/clue/clue.tpl',res.locals);
        }catch(e){
            res.locals.error=e;
            res.render('error',res.locals);
        }
    },
    insertClue: async function(req,res,next){
        let name=req.body.name;
        let phone=req.body.phone;
        let source=req.body.source;
        let time=new Date();
        if(!name || !phone || !source){
            res.json({code: 0,data: "缺少参数！"});
            return
        }
        try{
            const clue=await Clue.insert({name,phone,source,time});
            res.json({code: 200,data: {msg: "预约成功！"}});
        }catch(e){
            res.json({code: 0,data: e});
        }
    },
    recordShow: async function(req,res,next){
        if(!res.locals.isLogin){
            res.redirect('/admin/login');
            return
        }
        try{
            let id=req.query.id;
            const record=await Record.select({"id":id});
            const clue=await Clue.select({"id":id});
            const users=await User.select({"role":"销售员"})
            res.locals.record=record;
            res.locals.clue=clue;
            res.locals.users=users;
            res.render('show/clue/record.tpl',res.locals);
        }catch(e){
            res.locals.error=e;
            res.render('error',res.locals);
        }
    },
    update: async function(req,res,next){
        let id=req.body.id;
        let state=req.body.state;
        let salesperson=req.body.salesperson;
        let comment=req.body.comment;
        try{
            const clue=await Clue.update(id,{state,salesperson,comment});
            res.json({code: 200,data: clue});
        }catch(e){
            res.json({code: 0,data: e});
        }
    },
    insertRecord: async function(req,res,next){
        let id=req.body.id;
        let content=req.body.content;
        let time=req.body.time;
        console.log(id,content,time)
        if(!id || !content || !time){
            res.json({code: 0,data: "缺少参数！"});
            return
        }
        try{
            const record=await Record.insert({id,content,time});
            res.json({code: 200,data: record});
        }catch(e){
            res.json({code: 0,data: e});
        }
    },
}
module.exports=clueController;