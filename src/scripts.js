export function converter (num) {
  var result = "";

  for(var i = 0; i < Math.floor(num / 1000); i++) {
    result += "M";
  }
  num = num % 1000;
  for(let i = 0; i < Math.floor(num / 500); i++) {
    if ((Math.floor(num/500) == 1) && (num % 500 >= 400)) {
      result += "CM";
      num -= 900;
      break;
    } else {
      result += "D";
    }
  }
  num = num % 500;
  for(let i = 0; i < Math.floor(num / 100); i++) {
    if (Math.floor(num/100) == 4) {
      result += "CD";
      break;
    } else {
      result += "C";
    }
  }
  num = num % 100;
  for(let i = 0; i < Math.floor(num / 50); i++) {
    if ((Math.floor(num/50) == 1) && (num % 50 >= 40)) {
      result += "XC";
      num -= 90;
      break;
    } else {
      result += "L";
    }
  }
  num = num % 50;
  for(let i = 0; i < Math.floor(num / 10); i++) {
    if (Math.floor(num/10) == 4) {
      result += "XL";
      break;
    } else {
      result += "X";
    }
  }
  num = num % 10;
  for(let i = 0; i < Math.floor(num / 5); i++) {
    if ((Math.floor(num/5) == 1) && (num % 5 == 4)) {
      result += "IX";
      num = 0;
      break;
    } else {
      result += "V";
    }
  }
  num = num % 5;
  for(let i = 0; i < num; i++) {
    if (num == 4) {
      result += "IV";
      break;
    } else {
      result += "I";
    }
  }
  return result;
}
