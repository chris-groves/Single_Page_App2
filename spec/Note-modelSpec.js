function testNoteTextPropertyStoresTextOfNote() {
  var note = new Note("My favourite language is JavaScript");
  assert.isTrue(note.text === "My favourite language is JavaScript");
};

testNoteTextPropertyStoresTextOfNote();


function testNoteReturnsTextOfNote() {
  var note = new Note("My favourite language is JavaScript");
  assert.isTrue(note.displayText() === "My favourite language is JavaScript");
};

testNoteReturnsTextOfNote();
