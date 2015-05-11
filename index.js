
module.exports = function(interval, fn) {
  var start = process.hrtime()

  setInterval(function(){
    var delta = process.hrtime(start);
    var nanosec = delta[0] * 1e9 + delta[1];
    var ms = nanosec / 1e6;
    var n = ms - interval;
    fn(Math.round(n));
    start = process.hrtime();
  }, interval);
};
