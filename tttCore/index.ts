interface Test {
  test: string;
  testint: Number;
}

let testobj = { test: 'helloooo', testint: 123 };

function helloWorld(string: string): string | Number {
  if (string === 'int') {
    console.log(testobj.testint);
    return testobj.testint;
  } else {
    console.log(testobj.test);
    return testobj.test;
  }
}

helloWorld('sdg');
