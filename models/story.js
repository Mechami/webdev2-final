'use strict';
module.exports = class Story {
   constructor(author, title, content, creation_date, id) {
      if (id) {
         this._id = id;
      }
      this.author = author;
      this.title = title;
      this.date_created = new Date(creation_date);
      if (content){
         this.content[0] = title;
         this.content[1] = content;
      } else {
         this.content[0] = title;
      }
   }
};