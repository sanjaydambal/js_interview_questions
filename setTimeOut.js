const test = setTimeout(function () {
    console.log("This will be executed after 3 seconds");
  }, 3000);
  clearTimeout(test);