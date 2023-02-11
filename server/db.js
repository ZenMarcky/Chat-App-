const {MongoClient} = require('mongodb');

let dbConnection

module.exports = {
    connectMongoDb: function(callBack){
        MongoClient.connect('mongodb://127.0.0.1:27017/ChatsDb')
        .then((client)=>{
dbConnection = client.db()
 callBack();
        }).catch((error)=>{
            console.log(error)
        callBack(error);
        })
    },
    getDb: function(){
        return dbConnection
    }
};