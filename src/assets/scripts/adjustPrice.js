function transformArrayToString(array = ['']) {
  let string = '';
  for(let i = 0; i < array.length; i++) {
    string += array[i];
  }
  return string;
}

function transformStringToArray(string = '') {
  let array = [];
  for(let i = 0; i < string.length; i++) {
    array[i] = string[i];
  }
  return array;
}

function cut(floatPart = '') {
  let array = transformStringToArray(floatPart);
  while (array.length > 2) {
    array.pop();
  }
  let string = transformArrayToString(array);
  return string;
}

function adjustPrice(price = 1) {

  let strPrice = price.toString();

  const array = strPrice.split('.');

  let integerPart = array[0];
  let floatPart = array[1];

  if(floatPart === undefined) {
    floatPart = '00';
  }

  else {
    if(floatPart.length === 1) {
      floatPart += '0';
    }
    else if (floatPart.length > 2) {
      floatPart = cut(floatPart);
    }
  }

  let adjustedPrice = integerPart + '.' + floatPart;

  return adjustedPrice;
}

export default adjustPrice