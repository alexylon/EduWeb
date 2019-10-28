var promise1 = new Promise(function(resolve, reject) {
  console.log("before");
  setTimeout(function() {
    console.log("after");
    resolve("foo");
  }, 300);
});

promise1.then(function(value) {
  console.log(value);
  // expected output: "foo"
});

console.log(promise1);
