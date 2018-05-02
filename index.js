var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  var i = 0;
  while (katzDeli.length < i) {
    katzDeli[i] = Object.assign({}, katzDeli, {[i]: name});
  }
  
  return katzDeli;
}