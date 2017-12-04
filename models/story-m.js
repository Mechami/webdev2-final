'use strict';
const MongoClient = require('mongodb').MongoClient;
const Story = require('./story');
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

exports.allStories = () => {
    return exports.connectDB()
    .then((db) => {
        var collection = db.collection('stories');
        return collection.find({}).toArray()
        .then((documents) => {
            return documents;
        });
    });
};

exports.getStoryInfo = (id) => {
  return exports.connectDB()
  .then((db) => {
     var collection = db.collection('stories');
     if (!ObjectId.isValid(id)) {
       return false;
     }
     return collection.findOne({_id: new ObjectId(id)})
     .then((doc) => {
         if (doc == null) {
           return false;
         }
         return new Story(doc.author, doc.title, doc.content, doc.creation_date, doc.id);
     });
  });
};

exports.create = (author, title, content, creation_date) => {
  return exports.connectDB()
  .then((db) => {
      var story = new Story(author, title, content, creation_date);
      var collection = db.collection('stories');
      return collection.insertOne(story)
        .then((result) => {return result;});
  });
};

exports.update = (_id, author, title, content, creation_date) => {
  return exports.connectDB()
  .then((db) => {
      var story = new Story(author, title, content, creation_date);
      var collection = db.collection('stories');
      return collection.updateOne({_id: new ObjectId(_id)}, story)
        .then((result) => {return result;});
  });
};

exports.destroy = function(_id) {
  return exports.connectDB()
  .then((db) => {
      var collection = db.collection('stories');
      return collection.deleteOne({_id: new ObjectId(_id)})
        .then((result) => {return result;});
  });
};

