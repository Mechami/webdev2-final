'use strict';
const MongoClient = require('mongodb').MongoClient;
const User = require('./user');
const ObjectId = require('mongodb').ObjectID;

var db;

exports.connectDB = () => {
  return new Promise((resolve, reject) => {
    if (db) return resolve(db);
    var un = 'finalprojuser';
    var pw = 'finalprojpass';
    var url = `mongodb://${un}:${pw}@ds125016.mlab.com:25016/finalprojcsci32`;
    MongoClient.connect(url, (err, _db) => {
      if (err) return reject(err);
      db = _db;
      resolve(_db);
    });
  });  
};

exports.getUser = (userN) => {
  return exports.connectDB()
  .then((db) => {
     var collection = db.collection('authors');
     if (!ObjectId.isValid(userN)) {
       return false;
     }
     return collection.findOne({userN: new ObjectId(userN)})
     .then((doc) => {
         if (doc == null) {
           return false;
         }
         return new User(doc.userN, doc.userP);
     });
  });
};

exports.createUser = (userN, userP) => {
  return exports.connectDB()
  .then((db) => {
      var user = new User(userN, userP);
      var collection = db.collection('authors');
      return collection.insertOne(user)
        .then((result) => {return result;});
  });
};

exports.update = (userN, userP) => {
  return exports.connectDB()
  .then((db) => {
      var user = new User(userN, userP);
      var collection = db.collection('authors');
      return collection.updateOne({userN: new ObjectId(userN)}, user)
        .then((result) => {return result;});
  });
};

exports.destroy = function(userN) {
  return exports.connectDB()
  .then((db) => {
      var collection = db.collection('authors');
      return collection.deleteOne({userN: new ObjectId(userN)})
        .then((result) => {return result;});
  });
};

