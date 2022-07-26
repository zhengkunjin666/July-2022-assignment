const Models=require('../models/models');
const User=new Models.User;

const userController={
    show: async function(req,res,next){
        if(!res.locals.isLogin){
            res.redirect('/admin/login');
            return
        }
        if(!res.locals.isAdmin){
            res.locals.message="Not Found"
            res.locals.error={status: 403,stack: "您没有权限访问此页面！"};
            res.render('error',res.locals);
            return
        }
        try{
            const users=await User.all();
            res.locals.users=users;
            res.render('show/user/user.tpl',res.locals);
        }catch(e){
            res.locals.error=e;
            res.render('error',res.locals);
        }
    },
    editShow: async function(req,res,next){
        if(!res.locals.isLogin){
            res.redirect('/admin/login');
            return
        }
        if(!res.locals.isAdmin){
            res.locals.message="Not Found"
            res.locals.error={status: 403,stack: "您没有权限访问此页面！"};
            res.render('error',res.locals);
            return
        }
        try{
            let id=req.query.id;
            const user=await User.select({"id":id});
            res.locals.user=user;
            res.render('show/user/edit.tpl',res.locals);
        }catch(e){
            res.locals.error=e;
            res.render('error',res.locals);
        }
    },
    update: async function(req,res,next){
        let id=req.body.id;
        let name=req.body.name;
        let phone=req.body.phone;
        let password=req.body.password
        let role=req.body.role;
        if(!id || !name || !phone || !password || !role){
            res.json({code: 0,data: '缺少参数！'});
            return
        }
        try{
            const user=await User.update(id,{name,phone,password,role});
            res.json({code: 200,data: user});
        }catch(e){
            res.json({code: 0,data: e});
        }
    },
    delete: async function(req,res,next){
        let id=req.body.id;
        if(!id){
            res.json({code: 0,data: "缺少参数！"});
            return
        }
        try{
            const user=await User.delete(id);
            res.json({code: 200,data: user});
        }catch(e){
            res.json({code: 0,data: e});
        }
    },
    newShow: async function(req,res,next){
        if(!res.locals.isLogin){
            res.redirect('/admin/login');
            return
        }
        if(!res.locals.isAdmin){
            res.locals.message="Not Found"
            res.locals.error={status: 403,stack: "您没有权限访问此页面！"};
            res.render('error',res.locals);
            return
        }
        res.render('show/user/new.tpl',res.locals); 
    },
    insert: async function(req,res,next){
        let name=req.body.name;
        let phone=req.body.phone;
        let password=req.body.password;
        let role=req.body.role;
        if(!name || !phone || !password || !role){
            res.json({code: 0,data: "缺少参数！"});
            return
        }
        try{
            const users=await User.insert({name,phone,password,role});
            res.json({code: 200,data: users});
        }catch(e){
            res.json({code: 0,data: e});
        }
    },
}
module.exports=userController;