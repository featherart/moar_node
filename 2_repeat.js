
// this prints out 10 9 times in increasingly slow increments
//var i = 1;
//while (i < 10) {
  //i++;
  //setTimeout(function() {
    //console.log(i);
  //}, i * 1000);
//}

// this prints out 2000, 3000, ..., 10000
//var i = 1;
//while (i < 10) {
  //i++;
  //setTimeout(function(x) {
    //console.log(x);
  //},(i), i * 1000);
//}

// this prints out 'undefined' 9 times
var i = 1;
while (i < 10) {
  i++;
  setTimeout(function(x) {
    console.log(x);
  }, i * 1000);
}



//(function schedule() {
  //setTimeout(function() {
    //console.log("hello world");
    //schedule();
  //}, 1000);
//})();


