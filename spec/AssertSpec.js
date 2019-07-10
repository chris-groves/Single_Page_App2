var assert = {
  isTrue: function(assertionToCheck, testName) {
    if (!assertionToCheck) {
      throw new Error(testName + "Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log("Test passes!: " + testName)
    }
  }
};
