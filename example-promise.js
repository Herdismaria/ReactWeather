function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === "number" && typeof b === "number") {
      resolve(a + b);
    }
    else {
      reject("Variables must both be numbers");
    }
  });
}

addPromise(7, 8).then(function (sum) {
  console.log("The sum is: ", sum);
}, function(err) {
  console.log("Error", err);
})

addPromise(7).then(function (sum) {
  console.log("The sum is: ", sum);
}, function(err) {
  console.log("Error", err);
})


addPromise(7, "8").then(function (sum) {
  console.log("The sum is: ", sum);
}, function(err) {
  console.log("Error", err);
})
