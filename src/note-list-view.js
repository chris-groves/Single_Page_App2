(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.displayListView = function() {
    return this.noteList
  }

  NoteListView.prototype.displayListViewHTML = function(noteList) {

    var startHTML = '<li><div>'
    var endHTML = '</div></li>'

    return startHTML + this.noteList.list[0].text + endHTML
  }

  exports.NoteListView = NoteListView;
})(this);
