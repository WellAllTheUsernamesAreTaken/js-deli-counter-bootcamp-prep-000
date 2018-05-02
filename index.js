var katzDeli = [];

function takeANumber(katzDeliLine, name){
  if (katzDeli.length === 0) {
    katzDeli[0] = Object.assign({}, katzDeli, {[katzDeliLine]: name});
  } else {
    katzDeli[katzDeli.length + 1] = Object.assign({}, katzDeli, {[katzDeliLine]: name});
  }
  return katzDeli;
}