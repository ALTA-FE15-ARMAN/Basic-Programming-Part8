function caesarCipher(offset: number, str: string): string {
    let result = '';
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      if (char.match(/[a-zA-Z]/)) {
        const isUppercase = char === char.toUpperCase();
        const alphabetStart = isUppercase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        const shiftedCharCode = (char.charCodeAt(0) - alphabetStart + offset) % 26 + alphabetStart;
        const shiftedChar = String.fromCharCode(shiftedCharCode);
  
        result += isUppercase ? shiftedChar.toUpperCase() : shiftedChar;
      } else {
        result += char;
      }
    }
  
    return result;
  }
  
  console.log(caesarCipher(3, 'abc')); 
  console.log(caesarCipher(2, 'alta')); 
  console.log(caesarCipher(10, 'alterraacademy'));
  console.log(caesarCipher(1, 'abcdefghijklmnopqrstuvwxyz'));
  console.log(caesarCipher(1000, 'abcdefghijklmnopqrstuvwxyz'));   

  