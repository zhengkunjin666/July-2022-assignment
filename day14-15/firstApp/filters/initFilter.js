module.exports=function(req,res,next){
    res.locals.seo={
        title: 'ServerApp',
        keywords: 'Server、Nodejs',
        descripion: 'ServerApp is my first server on Web'
    }
    next();
}