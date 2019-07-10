function testNoteListInstantiatesWithEmptyArray() {
  var noteList = new NoteList()
  assert.isTrue(noteList.list.length === 0, "NoteList instantiates with an empty array");
};

testNoteListInstantiatesWithEmptyArray();

function testNoteListReturnsNoteModelsStoredInArray() {
  var noteList = new NoteList()
  assert.isTrue(noteList.displayList().length === 0, "NoteList Returns Note Models Stored in Array");
};

testNoteListReturnsNoteModelsStoredInArray();
