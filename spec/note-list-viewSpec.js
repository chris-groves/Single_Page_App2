function testNoteListViewInstantiatesWithNoteListModel() {
  var noteList = new NoteList
  noteList.createNote("Hello")
  var noteListView = new NoteListView(noteList)
  assert.isTrue(noteListView.noteList.list[0].text === "Hello", "NoteListView instantiates with an array");
};

testNoteListViewInstantiatesWithNoteListModel();

function testNoteListViewReturnsNoteListWithSingleEntryInHTML() {
  var noteList = new NoteList
  noteList.createNote("Hello")
  var noteListView = new NoteListView(noteList)
  assert.isTrue(noteListView.displayListViewHTML() === '<li>Hello</li>', "NoteListView displays HTML");
};

testNoteListViewReturnsNoteListWithSingleEntryInHTML();

function testNoteListViewReturnsNoteListWithThreeEntriesInHTML() {
  var noteList = new NoteList
  noteList.createNote("Hello")
  noteList.createNote("Hello")
  noteList.createNote("Hello")
  var noteListView = new NoteListView(noteList)
  assert.isTrue(noteListView.displayListViewHTML() ===
  "<li>Hello</li><li>Hello</li><li>Hello</li>", "NoteListView displays multiple HTML entries");
};

testNoteListViewReturnsNoteListWithThreeEntriesInHTML();
