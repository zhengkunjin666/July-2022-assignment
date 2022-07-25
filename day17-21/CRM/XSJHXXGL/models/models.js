const Base=require('./base');
const Modules={
    User: function(){
        class User extends Base {
            constructor(props='users'){
                super(props);
            }
        };
        User=new User;
        return User;
    },
    Clue: function(){
        class Clue extends Base {
            constructor(props='clues'){
                super(props);
            }
        };
        Clue=new Clue;
        return Clue;
    },
    Record: function(){
        class Record extends Base {
            constructor(props='records'){
                super(props);
            }
        };
        Record=new Record;
        return Record;
    }
}
module.exports=Modules;