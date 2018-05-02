var katzDeli = [];

function takeANumber(katzDeliLine, name){
  if (katzDeli.length === 0) {
    katzDeli[0] = Object.assign({}, katzDeli, {[0]: name});
  } else {
    katzDeli[katzDeli.length + 1] = Object.assign({}, katzDeli, { [.length + 1]: name});
  }
  return katzDeli;
}