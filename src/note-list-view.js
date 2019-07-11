(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.displayListView = function() {
    return this.noteList
  }

  NoteListView.prototype.displayListViewHTML = function(noteList) {
   var html = []
   for (i = 0; i < this.noteList.list.length; i++) {
     html.push('<li>' + this.noteList.list[i].text + '</li>')
   }
   return html.join('')
}
  exports.NoteListView = NoteListView;
})(this);
