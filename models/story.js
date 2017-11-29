'use strict';
module.exports = class Story {
   constructor(author, title, date_created, finished, id) {
      if (id) {
         this._id = id;
      }
      this.author = author;
      this.title = title;
      if (date_created) {
         this.date_created = new Date(date_created);
      }
      else {
         this.date_created = null;
      }
      if (finished) {
         this.finished = true;
      }
      else {
         this.finished = false;
      }
   }
};