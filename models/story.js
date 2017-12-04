'use strict';
module.exports = class Story {
   constructor(author, title, content, creation_date, finished, tag, id) {
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
      if (finished) {
         this.finished = true;
      } else {
         this.finished = false;
      }
      if (tag) {
         this.tag[0] = tag;
      } else {
         this.tag[0] = '';
      }
   }
};