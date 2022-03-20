// recebe array, retorna string
function transformArrayInString(array = ['']) {
  let string = '';
  for(let i = 0; i < array.length; i++) {
    string += array[i];
  }
  return string;
}
// recebe string, retorna array
function transformStringInArray(string = '') {
  let array = [];
  for(let i = 0; i < string.length; i++) {
    array[i] = string[i];
  }
  return array;
}
// retira o excedente decimal
// recebe string, retorna string
function cut(floatPart = '') {
  let array = transformStringInArray(floatPart);
  while (array.length > 2) {
    array.pop();
  }
  let string = transformArrayInString(array);
  return string;
}

function adjustPrice(price = 1) {
  // transformar em string para iteração
  let strPrice = price.toString();
  // dividir a string em um array ao achar '.'
  const array = strPrice.split('.');
  // separar entre parte inteira e parte decimal
  let integerPart = array[0];
  let floatPart = array[1];
  // verificar as partes:
  // parte inteira não se verifica
  // parte decimal não existe / nenhum número
  if(floatPart === undefined) {
    floatPart = '00';
  }
  // parte decimal é um número (pode ser grande ou um só)
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