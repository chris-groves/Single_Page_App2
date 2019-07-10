function testNoteListInstantiatesWithEmptyArray() {
  var noteList = new NoteList()
  assert.isTrue(noteList.list.length === 0, "NoteList instantiates with an empty array");
};

testNoteListInstantiatesWithEmptyArray();

function testNoteListReturnsNoteModelsStoredInArray() {
  var noteList = new NoteList()
  assert.isTrue(noteList.displayNotes().length === 0, "NoteList Returns Note Models Stored in Array");
};

testNoteListReturnsNoteModelsStoredInArray();

function testNoteListCreatesAndStoresASingleNoteModel() {
  var noteList = new NoteList()
  noteList.createNote("Hello");
  assert.isTrue(noteList.list[0].text === "Hello", "NoteList Creates and Stores a Note Model");
};

testNoteListCreatesAndStoresASingleNoteModel()
