(function(exports) {
  function NoteList() {
    this.list = [];
  };

  NoteList.prototype.displayList = function() {
    return this.list
  }

  exports.NoteList = NoteList;
})(this);
