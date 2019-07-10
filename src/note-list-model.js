(function(exports) {
  function NoteList() {
    this.list = [];
  };

  NoteList.prototype.createNote = function (text) {
    note = new Note(text);
    this.list.push(note)
  };

  NoteList.prototype.displayNotes = function() {
    return this.list
  }

  exports.NoteList = NoteList;
})(this);
