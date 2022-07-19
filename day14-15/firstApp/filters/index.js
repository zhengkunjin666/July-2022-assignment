module.exports=function(app){
    app.use(require('./loginFilter'));
    app.use(require('./initFilter'));
}