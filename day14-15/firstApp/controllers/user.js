const UserModel=require('./../models/user');
const User=new UserModel();
const userController={
    show: async function(req,res,next){
        if(!res.locals.isLogin){
            res.redirect('/login')
            return
        }
        try{
            const users=await User.all();
            res.locals.users=users;
            res.render('user/show.tpl',res.locals);
        }catch(e){
            res.locals.error=e;
            res.render('error',res.locals);
        }
    },
    insert: async function(req,res,next){
        let name=req.body.name;
        let email=req.body.email;
        let password=req.body.password;
        console.log(name,email,password);
        if(!name || !email || !password){
            res.json({code: 0,data: 'params empty!'});
            return
        }
        try{
            const users=await User.insert({name,email,password});
            res.json({code: 200,data: users});
        }catch(e){
            res.json({code: 0,data: e});
        }
    },
    update: async function(req,res,next){
        let id=req.body.id;
        let name=req.body.name;
        console.log(id,name);
        if(!id || !name){
            res.json({code: 0,data: 'params empty!'});
            return
        }
        try{
            const user=await User.update(id,{name});
            res.json({code: 200,data: user});
        }catch(e){
            res.json({code: 0,data: e});
        }
    },
    delete: async function(req,res,next){
        let id=req.body.id;
        if(!id){
            res.json({code: 0,datea: 'params empty!'});
            return
        }
        try{
            const user=await User.delete(id);
            res.json({code: 200,data: user});
        }catch(e){
            res.json({code: 0,data: e})
        }
    }
}
module.exports=userController;