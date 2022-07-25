const { param } = require('../routes');
const knex=require('./knex');
class Base{
    constructor(props){
        this.table=props;
    }
    all(){
        return knex(this.table).select()
    }
    select(params){
        return knex(this.table).select().where(params)
    }
    insert(params){
        return knex(this.table).insert(params)
    }
    update(id,params){
        return knex(this.table).where('id','=',id).update(params)
    }
    delete(id){
        return knex(this.table).where('id','=',id).del()
    }
    orderByAll(column,order){
        return knex("clues").orderBy(column,order)
    }
    orderBy(params,column,order){
        return knex("clues").select().where(params).orderBy(column,order)
    }
    filterAll(id,params){
        if(params == "%%"){
            console.log(id,params)
            return knex(this.table).whereNull(id).orWhere(id,"")
        }
        return knex(this.table).where(id,'like',params)
    }
    filter(role,id,params){
        if(params == "%%"){
            console.log(role)
            return knex(this.table).whereNull(id).orWhere(id,"").andWhere(role)
        }
        return knex(this.table).where(id,'like',params).andWhere(role)
    }
}
module.exports=Base;