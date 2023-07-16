function ubahHuruf(text: string): string {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
  
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const isUppercase = char === char.toUpperCase();
  
      if (char.match(/[a-zA-Z]/)) {
        const index = alphabet.indexOf(char.toLowerCase());
        const shiftedIndex = (index + 10) % 26;
        const shiftedChar = isUppercase ? alphabet[shiftedIndex].toUpperCase() : alphabet[shiftedIndex];
        result += shiftedChar;
      } else {
        result += char;
      }
    }
  
    return result;
  }
  
  console.log(ubahHuruf("SEPULSA OKE"));
  console.log(ubahHuruf("ALTERRA ACADEMY"));
  console.log(ubahHuruf("INDONESIA"));
  console.log(ubahHuruf("PROGRAMMER"));

  