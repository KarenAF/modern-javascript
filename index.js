var moment = require('moment');

console.log("Hello from JS!");
var datetime = moment().startOf('day').fromNow();
console.log(datetime);

function example(x = 34) {
  console.log(x);
}
example('peter');